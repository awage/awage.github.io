function updateWeightVector() {
    //normalización por el peso maximo y un factor de control
    var weightVectorSize = normalizeVectorSize(weightForce / MAX_OBJ_WEIGHT * 150);

    if (weightVectorSize !== 0) {
        //calculo y dibujo del vector peso
        var str_pth='M' + objectCenter_X + ' ' + objectCenter_Y + 'L' + objectCenter_X + ' ' + (objectCenter_Y + weightVectorSize);    
        if(!weightVector) {
            weightVector = paper.path(str_pth).attr({'stroke':'#0000CC','stroke-width':VECTOR_STROKE_SIZE,'arrow-end':'classic-midium-midium'});
        } else {
            weightVector.attr({'path':str_pth});	
        }
        weightVector.toFront();
        addElementTip(weightVector.node, i18n.t("vector.weightForce"));
    }

        //texto asociado al vector peso
        //updateWeightVectorText(weightVectorSize);   
}

function updateWeightVectorX() {
    //normalización por el peso maximo y un factor de control
    var weightVectorXSize = normalizeVectorSize(weightForce_X / MAX_OBJ_WEIGHT * 150);

    if (weightVectorXSize !== 0) {
        //calculo y dibujo del vector peso en X
        var str_pth='M' + objectCenter_X + ' ' + objectCenter_Y + 'L' + (objectCenter_X - weightVectorXSize) + ' ' + objectCenter_Y;    
        if(!weightVector_X) {
            weightVector_X = paper.path(str_pth).attr({'stroke':'dodgerBlue','stroke-width':VECTOR_STROKE_SIZE,'arrow-end':'classic-midium-midium', 'opacity':'1'});
        } else {
            weightVector_X.attr({'path':str_pth});	
        }
        weightVector_X.toFront();

        //rotamos el vector de peso en el eje X
        rotateVector(weightVector_X);

        //pintamos la linea de descomposicion del vector en el eje X
        decomposeWeightVector_X();
    }
    
    //texto asociado al vector peso en X
    //updateWeightVectorXText(weightVectorXSize);    
}

function updateWeightVectorY() {
    //normalización por el peso maximo y un factor de control
    var weightVectorYSize = normalizeVectorSize(weightForce_Y / MAX_OBJ_WEIGHT * 150);

    if (weightVectorYSize !== 0) {
        //calculo y dibujo del vector peso en Y
        var str_pth='M' + objectCenter_X + ' ' + objectCenter_Y + 'L' + objectCenter_X + ' ' + (objectCenter_Y + weightVectorYSize);    
        if(!weightVector_Y) {
            weightVector_Y = paper.path(str_pth).attr({'stroke':'dodgerBlue','stroke-width':VECTOR_STROKE_SIZE,'arrow-end':'classic-midium-midium', 'opacity':'1'});
        } else {
            weightVector_Y.attr({'path':str_pth});	
        }
        weightVector_Y.toFront();

        //rotamos el vector de peso en el eje Y
        rotateVector(weightVector_Y);
    
        //pintamos la linea de descomposicion del vector en el eje Y
        decomposeWeightVector_Y();
    }
    
    //texto asociado al vector peso en Y
    //updateWeightVectorYText(weightVectorYSize);
}

function updateFrictionVector() {
    //normalización por el peso maximo y un factor de control
    var frictionVectorSize = normalizeVectorSize(frictionForce / MAX_OBJ_WEIGHT * 150);

    if (frictionVectorSize) {
        //calculo y dibujo del vector fuerza de rozamiento
        var str_pth='M' + objectCenter_X + ' ' + objectCenter_Y + 'L' + (objectCenter_X + frictionVectorSize) + ' ' + objectCenter_Y;    
        if(!frictionVector) {
            frictionVector = paper.path(str_pth).attr({'stroke':'#CC0000','stroke-width':VECTOR_STROKE_SIZE,'arrow-end':'classic-midium-midium'});
        } else {
            frictionVector.attr({'path':str_pth});	
        }
        frictionVector.toFront();

        //rotamos el vector de rozamiento
        rotateVector(frictionVector);

        addElementTip(frictionVector.node, i18n.t("vector.frictionForce"));    
    }
    
    //texto asociado al vector fuerza de rozamiento
    //updateFrictionVectorText(frictionVectorSize);
}

function updateNormalVector() {
    //normalización por el peso maximo y un factor de control
    var normalVectorSize = normalizeVectorSize(normalForce / MAX_OBJ_WEIGHT * 150);

    if (normalVectorSize !== 0) {
        //calculo y dibujo del vector normal
        var str_pth='M' + objectCenter_X + ' ' + objectCenter_Y + 'L' + objectCenter_X + ' ' + (objectCenter_Y - normalVectorSize);    
        if(!normalVector) {
            normalVector = paper.path(str_pth).attr({'stroke':'#008800','stroke-width':VECTOR_STROKE_SIZE,'arrow-end':'classic-midium-midium'});
        } else {
            normalVector.attr({'path':str_pth});	
        }
        normalVector.toFront();  

        //rotamos el vector normal
        rotateVector(normalVector);

        addElementTip(normalVector.node, i18n.t("vector.normalForce"));       
    }
    
    //texto asociado al vector normal
    //updateNormalVectorText(normalVectorSize);
}

function updateExtraForceVector() {
    //normalización por el peso maximo y un factor de control
    var extraForceVectorSize = normalizeVectorSize(extraForce / MAX_OBJ_WEIGHT * 150);

    if (extraForceVectorSize !== 0) {
        //calculo y dibujo del vector fuerza de rozamiento
        var str_pth='M' + objectCenter_X + ' ' + objectCenter_Y + 'L' + (objectCenter_X + extraForceVectorSize) + ' ' + objectCenter_Y;    
        if(!extraForceVector) {
            extraForceVector = paper.path(str_pth).attr({'stroke':'#AA33AA','stroke-width':VECTOR_STROKE_SIZE,'arrow-end':'classic-midium-midium'});
        } else {
            extraForceVector.attr({'path':str_pth, 'stroke-width':VECTOR_STROKE_SIZE});	
        }
        extraForceVector.toFront();

        //rotamos el vector de rozamiento
        rotateVector(extraForceVector);
    } else {
        if (extraForceVector) {
            extraForceVector.attr({'stroke-width':'0'});            
        }
    }    
    
    if ($("#enableExtraForce").is(':checked')) {
        fillExternalForceFromLegend();
    } else {
        removeExternalForceFromLegend();
    }
    
    //texto asociado al vector fuerza de rozamiento
    //updateFrictionVectorText(extraForceVectorSize);
}

function updateTotalVector() {
    //normalización por el peso maximo y un factor de control
    //var totalVectorSize = normalizeVectorSize((frictionForce - weightForce_X) / MAX_OBJ_WEIGHT * 150);
    var totalVectorSize = normalizeVectorSize((Math.round(frictionForce - weightForce_X + extraForce)) / MAX_OBJ_WEIGHT * 150);

    if (totalVectorSize !== 0) {
        //calculo y dibujo del vector peso
        var str_pth='M' + objectCenter_X + ' ' + objectCenter_Y + 'L' + (objectCenter_X + totalVectorSize) + ' ' + objectCenter_Y;    
        if(!totalVector) {
            totalVector = paper.path(str_pth).attr({'stroke':'black','stroke-width':VECTOR_STROKE_SIZE,'arrow-end':'classic-midium-midium'}).toFront();
        } else {
            totalVector.attr({'path':str_pth, 'stroke-width':VECTOR_STROKE_SIZE});	
        }
        totalVector.toFront();

        //rotamos el vector total
        rotateVector(totalVector);

    } else {
        if (totalVector) {
            totalVector.attr({'stroke-width':'0'});
        }
    }

    //texto asociado al vector total
    //updateTotalVectorText(totalVectorSize);
}

function updateWeightVectorText(vectorSize) {
    weightVectorText.attr({'x': (objectCenter_X - VECTOR_INFO_MAX_DELAY), 'y': Math.round(objectCenter_Y + vectorSize), 'text': i18n.t("vector.weightForce") + '\n' + weightForce.toFixed(2) + 'N'});    
    weightVectorText.toFront();
}

function updateWeightVectorXText(vectorSize) {
    weightVectorXText.attr({'x': (objectCenter_X - vectorSize - VECTOR_INFO_MAX_DELAY), 'y': Math.round(objectCenter_Y), 'text': i18n.t("vector.weightForce_X") + '\n' + weightForce_X.toFixed(2) + 'N'});
    weightVectorXText.toFront();
}

function updateWeightVectorYText(vectorSize) {
    weightVectorYText.attr({'x': (objectCenter_X + VECTOR_INFO_MAX_DELAY), 'y': Math.round(objectCenter_Y + vectorSize + VECTOR_INFO_MIN_DELAY), 'text': i18n.t("vector.weightForce_Y") + '\n' + weightForce_Y.toFixed(2) + 'N'});    
    weightVectorYText.toFront();
}

function updateFrictionVectorText(vectorSize) {
    frictionVectorText.attr({'x': (objectCenter_X + vectorSize + VECTOR_INFO_MIN_DELAY), 'y': Math.round(objectCenter_Y - VECTOR_INFO_MAX_DELAY), 'text': i18n.t("vector.frictionForce") + '\n' + Math.abs(frictionForce.toFixed(2)) + 'N'});    
    frictionVectorText.toFront();
}

function updateNormalVectorText(vectorSize) {
    normalVectorText.attr({'x': (objectCenter_X - VECTOR_INFO_MAX_DELAY), 'y': Math.round(objectCenter_Y -  vectorSize - VECTOR_INFO_MIN_DELAY), 'text': i18n.t("vector.normalForce") + '\n' + normalForce.toFixed(2) + 'N'});    
    normalVectorText.toFront();
}

function extraForceVectorText(vectorSize) {
    extraForceVectorText.attr({'x': (objectCenter_X + vectorSize + VECTOR_INFO_MIN_DELAY), 'y': Math.round(objectCenter_Y - VECTOR_INFO_MAX_DELAY), 'text': i18n.t("vector.extraForce") + '\n' + Math.abs(extraForce.toFixed(2)) + 'N'});    
    extraForceVectorText.toFront();
}

function updateTotalVectorText(vectorSize) {
    totalVectorText.attr({'x': (objectCenter_X + vectorSize), 'y': Math.round(objectCenter_Y - VECTOR_INFO_MAX_DELAY), 'text': "Total" + '\n' + weightForce.toFixed(2) + 'N'});    
    totalVectorText.toFront();
}

function normalizeVectorSize(vectorSize) {
    if (vectorSize === 0) {
        return 0;
    } else if ( Math.abs(vectorSize) < MIN_VECTOR_SIZE) {
        var sign = vectorSize < 0 ? -1 : 1;
        return(MIN_VECTOR_SIZE * sign);
    } else {
        return vectorSize;
    }
}

function rotateVector(vector) {
    //rotamos el vector
    vector.transform('R' + previousPitch + ',' + previousObjectCenter_X + ',' + previousObjectCenter_Y );
    vector.transform('R' + (-pitch) + ',' + objectCenter_X + ',' + objectCenter_Y );
}


function decomposeWeightVector_X() {
    var xArrowPreviousPoint = Math.abs(weightVector_X.attr('path')[1][1] - objectCenter_X);
    var yArrowPreviousPoint = Math.abs(weightVector_X.attr('path')[1][2] - objectCenter_Y);
    var xArrowPointRotated = xArrowPreviousPoint * Math.cos(degreesToRadians(pitch)) - yArrowPreviousPoint * Math.sin(degreesToRadians(pitch));
    var yArrowPointRotated = xArrowPreviousPoint * Math.sin(degreesToRadians(pitch)) + yArrowPreviousPoint * Math.cos(degreesToRadians(pitch));

    var str_path_decompose = 'M' + (objectCenter_X - xArrowPointRotated) + ' ' + (objectCenter_Y + yArrowPointRotated) + 'L' + weightVector.attr('path')[1][1] + ' ' + weightVector.attr('path')[1][2];
    if (!weightVectorDecompose_X) {
        weightVectorDecompose_X = paper.path(str_path_decompose).attr({'stroke':'black','stroke-width':'2','stroke-dasharray': '- ','opacity':'0.7'});
    } else {
        weightVectorDecompose_X.attr({'path':str_path_decompose});
    }
    weightVectorDecompose_X.toFront();
}

function decomposeWeightVector_Y() {
    var xArrowPreviousPoint = Math.abs(weightVector_Y.attr('path')[1][1] - objectCenter_X);
    var yArrowPreviousPoint = Math.abs(weightVector_Y.attr('path')[1][2] - objectCenter_Y);
    var xArrowPointRotated = xArrowPreviousPoint * Math.cos(degreesToRadians(pitch)) + yArrowPreviousPoint * Math.sin(degreesToRadians(pitch));
    var yArrowPointRotated = - xArrowPreviousPoint * Math.sin(degreesToRadians(pitch)) + yArrowPreviousPoint * Math.cos(degreesToRadians(pitch));  
    
    var str_path_decompose = 'M' + (objectCenter_X + xArrowPointRotated) + ' ' + (objectCenter_Y + yArrowPointRotated) + 'L' + weightVector.attr('path')[1][1] + ' ' + weightVector.attr('path')[1][2];   
    if(!weightVectorDecompose_Y) {
        weightVectorDecompose_Y = paper.path(str_path_decompose).attr({'stroke':'black','stroke-width':'2','stroke-dasharray': '- ','opacity':'0.7'});
    } else {
        weightVectorDecompose_Y.attr({'path':str_path_decompose});
    }    
    weightVectorDecompose_Y.toFront();
}

function removeWeightDecomposition() {
    if (weightVector_X) {
        weightVector_X.remove();
        weightVector_X = null;
    }    
    if (weightVector_Y) {
        weightVector_Y.remove();
        weightVector_Y = null;
    }
    if (weightVectorDecompose_X) {    
        weightVectorDecompose_X.remove();
        weightVectorDecompose_X = null;
    }
    if (weightVectorDecompose_Y) {    
        weightVectorDecompose_Y.remove();
        weightVectorDecompose_Y = null;
    }        
}

function updateWeightDecomposition() {
    if ($("#weightDecomposition").is(':checked')) {
        updateWeightVectorX();
        updateWeightVectorY();
    } else {
        removeWeightDecomposition();
        removeWeightDecompositionFromLegend();
    }    
}

function canvasOclusionControl() {
    var oclusionArrayToSort = [Math.abs(frictionForce), Math.abs(weightForce_X), Math.abs(extraForce), Math.abs(totalForce)];    
    oclusionArrayToSort.sortNumReverse();
    
    for (var i = 0; i < oclusionArrayToSort.length; i++) {
        if (oclusionArrayToSort[i] === Math.abs(frictionForce) && frictionForce != 0) {
            if (frictionVector != null) {
                frictionVector.toFront();
            }
        }else if (oclusionArrayToSort[i] === Math.abs(weightForce_X) && weightForce_X != 0) {
            if (weightVector_X != null) {
                weightVector_X.toFront();
            }
        } else if (oclusionArrayToSort[i] === Math.abs(extraForce) && extraForce != 0) {
            if (extraForceVector != null) {
                extraForceVector.toFront();
            }
        }else if (oclusionArrayToSort[i] === Math.abs(totalForce) && totalForce != 0) {
            if (totalVector != null) {
                totalVector.toFront();
            }
        }        
    }
    
    objectCenter.toFront();
}

function updateVectors() {
    updateWeightVector();
    updateWeightDecomposition();
    updateFrictionVector();
    updateNormalVector();
    updateExtraForceVector();
    updateTotalVector();
    
    canvasOclusionControl();
}
