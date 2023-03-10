//Enum computed - Tipo de dato Enum calculado
enum CarType {
	Honda = 1,
	Toyota = getCarTypeCode('toyota'),
	Subaru = Toyota * 3,
	Hyundai = 10
}

function getCarTypeCode(carName: string): number {
	if(carName === 'toyota'){
		return 5;
	}
	return 0
}

console.log(CarType.Toyota); // returns 5
console.log(CarType.Subaru); // returns 15