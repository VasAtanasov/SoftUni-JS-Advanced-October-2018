function bugReport() {
    let id = 0;
    let reports = new Map();
    let sortMethod = 'ID';
    let container = null;

    let sortMethods = {
        author: ([k1, v1], [k2, v2]) => v1.author.localeCompare(v2.author),
        severity: ([k1, v1], [k2, v2]) => v1.severity - v2.severity,
        ID: ([k1, v1], [k2, v2]) => k1 - k2,
    };

    function report(author, description, reproducible, severity) {
        reports.set(id,
            {
                ID: id++,
                author: author,
                description: description,
                reproducible: reproducible,
                severity: severity,
                status: 'Open'
            }
        );
        listReports();
    }

    function remove(id) {
        id = Number(id);
        if (reports.has(id)) {
            reports.delete(id);
        }
        listReports();
    }

    function setStatus(id, newStatus) {
        id = Number(id);
        if (reports.has(id) && newStatus !== null) {
            reports.get(id).status = newStatus;
        }
        listReports();
    }

    function sort(method) {
        if (sortMethods.hasOwnProperty(method)) {
            sortMethod = method;
        }
        listReports();
    }

    function listReports() {
        if (!container) {
            return;
        }
        container.empty();

        reports = new Map([...reports.entries()].sort(sortMethods[sortMethod]));

        for (const id of Array.from(reports.keys())) {
            if (reports.has(id)) {
                let report = reports.get(id);
                $('<div>').attr('id', `report_${report.ID}`).addClass('report')
                    .append(
                        $('<dii>').addClass('body').append($('<p>').text(`${report.description}`))
                    )
                    .append(
                        $('<div>').addClass('title')
                            .append($('<span>').addClass('author').text(`Submitted by: ${report.author}`))
                            .append($('<span>').addClass('status').text(`${report.status} | ${report.severity}`))
                    )
                    .appendTo(container);
            }
        }
    }

    function output(selector) {
        container = $(selector);
    }

    return {report, remove, setStatus, sort, output}
}

// function bugReport() {
//     let id = 0;
//     let reports = {};
//     let sortMethod = 'ID';
//
//     let sortMethods = {
//         author: () => 0,
//         severity: () => 1,
//         ID: () => 2
//     };
//
//     function report(author, description, reproducible, severity) {
//         reports[id] = {
//             ID: id++,
//             author: author,
//             description: description,
//             reproducible: reproducible,
//             severity: severity,
//             status: 'Open'
//         };
//     }
//
//     function remove(id) {
//         if (reports.hasOwnProperty(id)) {
//             delete reports[id];
//         }
//     }
//
//     function setStatus(id, newStatus) {
//         if (reports.hasOwnProperty(id)) {
//             reports[id].status = newStatus;
//         }
//     }
//
//     function sort(method) {
//         if (sortMethods.hasOwnProperty(method)) {
//             sortMethod = method;
//         }
//     }
//
//     function output(selector) {
//         let container = $(selector);
//         for (const id in reports) {
//             if (reports.hasOwnProperty(id)) {
//                 let report = reports[id];
//                 $('<div>').attr('id', `report_${report.ID}`).addClass('report')
//                     .append(
//                         $('<dii>').addClass('body').append($('<p>').text(`${report.description}`))
//                     )
//                     .append(
//                         $('<div>').addClass('title')
//                             .append($('<span>').addClass('author').text(`Submitted by: ${report.author}`))
//                             .append($('<span>').addClass('status').text(`${report.status} | ${report.severity}`))
//                     )
//                     .appendTo(container);
//             }
//         }
//     }
//
//     return {report, remove, setStatus, sort, output}
// }