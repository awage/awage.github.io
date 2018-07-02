function rootN(x, n) {
    return Math.exp(Math.log(x) / n);
}

function rootExp(x,n){
	return Math.pow(x,1/n);
}

function getRadiusFromVolumeCircle(volume) {
	return rootN(volume / ((4 / 3) * PI), 3); 
}

function getVolumeFromRadiusCircle(radius) {
	return (4 / 3) * PI * Math.pow(radius, 3);
}