function updateWeightVector() {
    //normalización por el peso maximo y un factor de control
    var weightVectorSize = normalizeVectorSize(weightForce / MAX_OBJ_WEIGHT * 100);

    //posicion del objeto a examinar 
    var c1x = c1.attr('cx');
    var c1y = c1.attr('cy');

    if (weightVectorSize !== 0) {
        //calculo y dibujo del vector peso
        var weightVectorPath = 'M' + c1x + ' ' + c1y + 'L' + c1x + ' ' + Math.round(c1y + weightVectorSize);    
        if(!weightVector) {
            weightVector = paper.path(weightVectorPath);
        } else {
            weightVector.attr({'path':weightVectorPath});	
        }
        weightVector.attr({'stroke':'blue','stroke-width':'5','arrow-end':'classic-midium-midium'});
    } else {
        if (weightVector) {
            weightVector.attr({'stroke-width':'0'});            
        }
    }
    
    if (weightVectorText) {
        //texto asociado al vector peso
        weightVectorText.attr({'x': (c1x - VECTOR_INFO_X_DELAY), 'y': (c1y + weightVectorSize), 'text': i18n.t("vector.weightForce") + '\n' + weightForce.toFixed(2) + 'N'});    
    }
}

function updateThrustVector() {
    //normalización por el empuje maximo y un factor de control
    var thrustVectorSize = normalizeVectorSize(thrustForce / MAX_OBJ_WEIGHT * 100);

    //posicion del objeto a examinar 
    var c1x = c1.attr('cx');
    var c1y = c1.attr('cy');

    if (thrustVectorSize !== 0) {
        //calculo y dibujo del vector empuje
        var thrustVectorPath = 'M' + c1x + ' ' + c1y + 'L' + c1x + ' ' + Math.round(c1y - thrustVectorSize);    
        if(!thrustVector) {
            thrustVector = paper.path(thrustVectorPath);
        } else {
            thrustVector.attr({'path':thrustVectorPath});	
        }
        thrustVector.attr({'stroke':'darkGreen','stroke-width':'5','arrow-end':'classic-midium-midium'});
    } else {
        if (thrustVector) {
            thrustVector.attr({'stroke-width':'0'});            
        }
    }
    
    if (thrustVectorText) {    
        //texto asociado al vector empuje
        thrustVectorText.attr({'x': (c1x - VECTOR_INFO_X_DELAY), 'y': (c1y - thrustVectorSize), 'text': i18n.t("vector.thrustForce") + '\n' + thrustForce.toFixed(2) + 'N'});                
    }
}

function updateTotalVector() {
    //normalización del vector total y un factor de control
    var totalVectorSize = normalizeVectorSize((thrustForce - weightForce)/ MAX_OBJ_WEIGHT * 100);

    //posicion del objeto a examinar 
    var c1x = c1.attr('cx');
    var c1y = c1.attr('cy');

    if (totalVectorSize !== 0) {
        //calculo y dibujo del vector empuje
        var totalVectorPath = 'M' + c1x + ' ' + c1y + 'L' + c1x + ' ' + Math.round(c1y - totalVectorSize);    
        if(!totalVector) {
            totalVector = paper.path(totalVectorPath);
        } else {
            totalVector.attr({'path':totalVectorPath});	
        }

        if (totalVectorSize === 0) {
            totalVector.attr({'stroke':'black','stroke-width':'0','stroke-opacity':'1'});
        } else {
            totalVector.attr({'stroke':'black','stroke-width':'8','arrow-end':'classic-narrow-short','stroke-opacity':'1'});
        }
    } else {
        if (totalVector) {
            totalVector.attr({'stroke-width':'0'});            
        }
    }
    
    if (thrustVectorText) {  
        //texto asociado al vector total
        totalVectorText.attr({'x': (c1x + VECTOR_INFO_X_DELAY), 'y': (c1y - totalVectorSize), 'text': i18n.t("vector.totalForce") + '\n' + totalForce.toFixed(2) + 'N'});        
    }     
}

function animateWeightVector(cx, cy, animationTime, animationType) {
    //normalización por el peso maximo y un factor de control
    var weightVectorSize = normalizeVectorSize(weightForce / MAX_OBJ_WEIGHT * 100);

    if (weightVector) {
        var weightVectorPath = 'M' + cx + ' ' + cy + 'L' + cx + ' ' + Math.round(cy + weightVectorSize);        

        weightVector.animate({path: weightVectorPath}, animationTime, animationType);
    }
    weightVectorText.animate({x: (cx - VECTOR_INFO_X_DELAY), y: (cy + weightVectorSize)}, animationTime, animationType);
}

function animateThrustVector(cx, cy, animationTime, animationType) {
    //normalización por el empuje maximo y un factor de control
    var thrustVectorSize = normalizeVectorSize(thrustForce / MAX_OBJ_WEIGHT * 100);

    if (thrustVector) {
        var thrustVectorPath = 'M' + cx + ' ' + cy + 'L' + cx + ' ' + Math.round(cy - thrustVectorSize);        

        thrustVector.animate({path: thrustVectorPath}, animationTime, animationType);     
    }
    thrustVectorText.animate({x: (cx - VECTOR_INFO_X_DELAY), y: (cy - thrustVectorSize)}, animationTime, animationType);
}

function animateTotalVector(cx, cy, animationTime, animationType) {
    //normalización del vector total y un factor de control
    var totalVectorSize = normalizeVectorSize((thrustForce - weightForce)/ MAX_OBJ_WEIGHT * 100);

    if (totalVector) {
        var totalVectorPath = 'M' + cx + ' ' + cy + 'L' + cx + ' ' + Math.round(cy - totalVectorSize);        

        totalVector.animate({path: totalVectorPath}, animationTime, animationType);
    }
    totalVectorText.animate({x: (cx + VECTOR_INFO_X_DELAY), y: (cy - totalVectorSize)}, animationTime, animationType);

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

function updateVectorCenter() {
    //posicion del objeto a examinar 
    var c1x = c1.attr('cx');
    var c1y = c1.attr('cy');
    
    //calculo y dibujo del centro de vectores
    vectorCenter.attr({'cx':c1x,'cy':c1y});
}

function updateVectors() {
    updateWeightVector();
    updateThrustVector();
    updateTotalVector();
    updateVectorCenter();
}
