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

function degreesToRadians(deg) {
    return deg * PI / 180;
}

function radiansToDegrees(rad) {
    return rad / (PI / 180);
}

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};

Array.prototype.sortNum = function() {
    return this.sort( function (a,b) { return a-b; } );
};

Array.prototype.sortNumReverse = function() {
    return this.sort( function (a,b) { return a-b; } ).reverse();
};