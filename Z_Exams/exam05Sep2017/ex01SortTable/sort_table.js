function sort(colIndex, sortOrder) {
    let trs = $('#products tbody tr')
        .sort((tr1, tr2) => compare(tr1, tr2, colIndex, sortOrder));

    function compare(a, b, index, sortOrder) {
        let colIndex = index % 2;
        let valA = sortOrder ? getElement(b, colIndex) : getElement(a, colIndex);
        let valB = sortOrder ? getElement(a, colIndex) : getElement(b, colIndex);
        return $.isNumeric(valA) && $.isNumeric(valB) ? Number(valA) - Number(valB) : valA.localeCompare(valB)
    }

    function getElement(row, colIndex) {
        return $(row).find('td').eq(colIndex).text()
    }

    let container = $('#products tbody');
    container.empty();
    container.append(trs);
}