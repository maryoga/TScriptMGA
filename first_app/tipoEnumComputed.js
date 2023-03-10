"use strict";
//Enum computed - Tipo de dato Enum calculado
var CarType;
(function (CarType) {
    CarType[CarType["Honda"] = 1] = "Honda";
    CarType[CarType["Toyota"] = getCarTypeCode('toyota')] = "Toyota";
    CarType[CarType["Subaru"] = CarType.Toyota * 3] = "Subaru";
    CarType[CarType["Hyundai"] = 10] = "Hyundai";
})(CarType || (CarType = {}));
function getCarTypeCode(carName) {
    if (carName === 'toyota') {
        return 5;
    }
    return 0;
}
console.log(CarType.Toyota); // returns 5
console.log(CarType.Subaru); // returns 15
