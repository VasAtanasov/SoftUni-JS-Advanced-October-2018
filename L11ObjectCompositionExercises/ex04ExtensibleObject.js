function extend() {
    let myObj = {
        extend: function (template) {
            for (const key in template) {
                if (typeof template[key] === "function") {
                    Object.getPrototypeOf(myObj)[key] = template[key];
                } else {
                    myObj[key] = template[key];
                }
            }
        }
    };

    return myObj;
}

extend(
    {
        extensionMethod: function () {
        },
        extensionProperty: 'someString'
    }
);