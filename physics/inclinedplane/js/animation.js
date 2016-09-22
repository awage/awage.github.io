function calculateAnimationOffset(animationOffset, isGoingDown) {
    var objectCenterAnimation = {x:0, yOnInclinedLine:0, y:0};
    
    //para calcular el offset de la animacion lo hacemos comparando el centro del objeto incial y final
    if (isGoingDown) {
        objectCenterAnimation.x = objectCenter_X - (AMINATION_GODOWN_X_PIXELS * Math.cos(degreesToRadians(pitch)));
    } else {
        objectCenterAnimation.x = objectCenter_X + (AMINATION_GOUP_X_PIXELS * Math.cos(degreesToRadians(pitch)));
    }
    objectCenterAnimation.yOnInclinedLine = Math.round(getYFromXFromAInclinedStraight(objectCenterAnimation.x, 50, 450, pitch));
    objectCenterAnimation.y = objectCenterAnimation.yOnInclinedLine - (OBJECT_HEIGHT / 2) / Math.cos(degreesToRadians(pitch));    
    
    animationOffset.x = Math.abs(objectCenter_X - objectCenterAnimation.x); 
    animationOffset.y = Math.abs(objectCenter_Y - objectCenterAnimation.y);
}

function animateObject(animationOffset, isGoingDown) {
    var animationSign = "";
    if (isGoingDown) {
        animationSign = "-";
    }
    
    //preparamos la animacion antes de realizarla y la actualizamos tras realizarla
    prepareStateBeforeAnimation();
    if (objectRect) {
        objectRect.animate({'transform': 'r' + (-pitch) + ',' + objectLeftBottomCorner_X + ',' + objectLeftBottomCorner_Y + 't' + animationSign + AMINATION_GODOWN_X_PIXELS + ',0'}, ANIMATION_DEFAULT_TIME, 'linear', 
            function() {prepareStateAfterAnimation();});
    }
    animateObjectCenter(animationOffset, isGoingDown);
}

function animateObjectCenter(animationOffset, isGoingDown) {
    if (objectCenter) {
        if (isGoingDown) {
            objectCenter.animate({'cx': objectCenter_X - animationOffset.x, 'cy': objectCenter_Y + animationOffset.y}, ANIMATION_DEFAULT_TIME);
        } else {
            objectCenter.animate({'cx': objectCenter_X + animationOffset.x, 'cy': objectCenter_Y - animationOffset.y}, ANIMATION_DEFAULT_TIME);
        }
    }
}

function animateWeightVector(animationOffset, isGoingDown) {
    if (weightVector) {
        var weightVectorSize = normalizeVectorSize(weightForce / MAX_OBJ_WEIGHT * 150);
        var newPathWeight;

        if (isGoingDown) {
            newPathWeight = 'M' + (objectCenter_X - animationOffset.x) + ' ' + (objectCenter_Y + animationOffset.y)  + 'L' + (objectCenter_X - animationOffset.x) + ' ' + ((objectCenter_Y + animationOffset.y) + weightVectorSize);
        } else {
            newPathWeight = 'M' + (objectCenter_X + animationOffset.x) + ' ' + (objectCenter_Y - animationOffset.y)  + 'L' + (objectCenter_X + animationOffset.x) + ' ' + ((objectCenter_Y - animationOffset.y) + weightVectorSize);
        }
        weightVector.animate({'path': newPathWeight}, ANIMATION_DEFAULT_TIME);
        
        /*if (isGoingDown) {
            weightVectorText.animateWith(weightVector, null, {'x': weightVectorText.attr('x') - animationOffset.x, 'y': weightVectorText.attr('y') + animationOffset.y}, ANIMATION_DEFAULT_TIME);      
        } else {
            weightVectorText.animateWith(weightVector, null, {'x': weightVectorText.attr('x') + animationOffset.x, 'y': weightVectorText.attr('y') - animationOffset.y}, ANIMATION_DEFAULT_TIME);
        }*/
    }
}

function animateWeightXVector(isGoingDown) {
    if (weightVector_X) {
        var animationSign = "";
        if (isGoingDown) {
            animationSign = "-";
        }

        weightVector_X.animate({'transform': 'r' + (-pitch) + ',' + objectCenter_X + ',' + objectCenter_Y + 't' + animationSign + AMINATION_GODOWN_X_PIXELS + ',0'}, ANIMATION_DEFAULT_TIME);
    }
}

function animateWeightYVector(isGoingDown) {
    if (weightVector_Y) {
        var animationSign = "";
        if (isGoingDown) {
            animationSign = "-";
        }

        weightVector_Y.animate({'transform': 'r' + (-pitch) + ',' + objectCenter_X + ',' + objectCenter_Y + 't' + animationSign + AMINATION_GODOWN_X_PIXELS + ',0'}, ANIMATION_DEFAULT_TIME);      
    }
}

function animateWeightXDecomposition(animationOffset, isGoingDown) {
    if (weightVectorDecompose_X) {
        var newPathWeightVectorDecompose_X;

        if (isGoingDown) {
            newPathWeightVectorDecompose_X = 'M' + (weightVectorDecompose_X.attr('path')[0][1] - animationOffset.x) + ' ' + (weightVectorDecompose_X.attr('path')[0][2] + animationOffset.y)  + 'L' + (weightVectorDecompose_X.attr('path')[1][1] - animationOffset.x) + ' ' + (weightVectorDecompose_X.attr('path')[1][2] + animationOffset.y);
        } else {
            newPathWeightVectorDecompose_X = 'M' + (weightVectorDecompose_X.attr('path')[0][1] + animationOffset.x) + ' ' + (weightVectorDecompose_X.attr('path')[0][2] - animationOffset.y)  + 'L' + (weightVectorDecompose_X.attr('path')[1][1] + animationOffset.x) + ' ' + (weightVectorDecompose_X.attr('path')[1][2] - animationOffset.y);
        }
        weightVectorDecompose_X.animate({'path': newPathWeightVectorDecompose_X}, ANIMATION_DEFAULT_TIME); 
    }
}

function animateWeightYDecomposition(animationOffset, isGoingDown) {
    if (weightVectorDecompose_Y) {    
        var newPathWeightVectorDecompose_Y;

        if (isGoingDown) {
            newPathWeightVectorDecompose_Y = 'M' + (weightVectorDecompose_Y.attr('path')[0][1] - animationOffset.x) + ' ' + (weightVectorDecompose_Y.attr('path')[0][2] + animationOffset.y)  + 'L' + (weightVectorDecompose_Y.attr('path')[1][1] - animationOffset.x) + ' ' + (weightVectorDecompose_Y.attr('path')[1][2] + animationOffset.y);
        } else {
            newPathWeightVectorDecompose_Y = 'M' + (weightVectorDecompose_Y.attr('path')[0][1] + animationOffset.x) + ' ' + (weightVectorDecompose_Y.attr('path')[0][2] - animationOffset.y)  + 'L' + (weightVectorDecompose_Y.attr('path')[1][1] + animationOffset.x) + ' ' + (weightVectorDecompose_Y.attr('path')[1][2] - animationOffset.y);
        }    
        weightVectorDecompose_Y.animate({'path': newPathWeightVectorDecompose_Y}, ANIMATION_DEFAULT_TIME);    
    }
}

function animateWeightDecompositionVectors(animationOffset, isGoingDown) { 
    animateWeightXVector(isGoingDown);
    animateWeightYVector(isGoingDown);
    
    animateWeightXDecomposition(animationOffset, isGoingDown);
    animateWeightYDecomposition(animationOffset, isGoingDown);
}

function animateFrictionVector(animationOffset, isGoingDown) {
    if (frictionVector) {    
        var animationSign = "";
        if (isGoingDown) {
            animationSign = "-";
        }

        frictionVector.animate({'transform': 'r' + (-pitch) + ',' + objectCenter_X + ',' + objectCenter_Y + 't' + animationSign + AMINATION_GODOWN_X_PIXELS + ',0'}, ANIMATION_DEFAULT_TIME);

        /*if (isGoingDown) {
            frictionVectorText.animateWith(frictionVector, null, {'x': frictionVectorText.attr('x') - animationOffset.x, 'y': frictionVectorText.attr('y') + animationOffset.y}, ANIMATION_DEFAULT_TIME);    
        } else {
            frictionVectorText.animateWith(frictionVector, null, {'x': frictionVectorText.attr('x') + animationOffset.x, 'y': frictionVectorText.attr('y') - animationOffset.y}, ANIMATION_DEFAULT_TIME);    
        }*/
    }
}

function animateNormalVector(animationOffset, isGoingDown) {
    if (normalVector) {
        var animationSign = "";
        if (isGoingDown) {
            animationSign = "-";
        }    

        normalVector.animate({'transform': 'r' + (-pitch) + ',' + objectCenter_X + ',' + objectCenter_Y + 't' + animationSign + AMINATION_GODOWN_X_PIXELS + ',0'}, ANIMATION_DEFAULT_TIME);

        /*if (isGoingDown) {
            normalVectorText.animateWith(normalVector, null, {'x': normalVectorText.attr('x') - animationOffset.x, 'y': normalVectorText.attr('y') + animationOffset.y}, ANIMATION_DEFAULT_TIME);    
        } else {
            normalVectorText.animateWith(normalVector, null, {'x': normalVectorText.attr('x') + animationOffset.x, 'y': normalVectorText.attr('y') - animationOffset.y}, ANIMATION_DEFAULT_TIME);    
        }*/
    }
}

function animateExtraForceVector(animationOffset, isGoingDown) {
    if (extraForceVector) {
        var animationSign = "";
        if (isGoingDown) {
            animationSign = "-";
        }

        extraForceVector.animate({'transform': 'r' + (-pitch) + ',' + objectCenter_X + ',' + objectCenter_Y + 't' + animationSign + AMINATION_GODOWN_X_PIXELS + ',0'}, ANIMATION_DEFAULT_TIME);

        //extraForceVectorText.animateWith(extraForceVector, null, {'x': extraForceVectorText.attr('x') - animationOffset.x, 'y': extraForceVectorText.attr('y') + animationOffset.y}, ANIMATION_DEFAULT_TIME);    
    }   
}

function animateTotalVector(isGoingDown) {
    if (totalVector) {
        var animationSign = "";
        if (isGoingDown) {
            animationSign = "-";
        }

        totalVector.animate({'transform': 'r' + (-pitch) + ',' + objectCenter_X + ',' + objectCenter_Y + 't' + animationSign + AMINATION_GODOWN_X_PIXELS + ',0'}, ANIMATION_DEFAULT_TIME);
    }
}

function prepareStateBeforeAnimation() {
    animationInProgress = true;
    $("#weightDecomposition").attr("disabled", true);
    $("#enableExtraForce").attr("disabled", true);
}

function prepareStateAfterAnimation() {
    animationInProgress = false; 
    $("#weightDecomposition").removeAttr("disabled"); 
    $("#enableExtraForce").removeAttr("disabled");
}

function animationFlow() {
    var isGoingDown = isGoingDownObject();    
    var isGoingUp = isGoingUpObject();
    
    if (isGoingDown || isGoingUp)  {
        var animationOffset = {x:0, y:0};    
        
        calculateAnimationOffset(animationOffset, isGoingDown);

        animateObject(animationOffset, isGoingDown);
        animateWeightVector(animationOffset, isGoingDown);
        animateFrictionVector(animationOffset, isGoingDown);
        animateNormalVector(animationOffset, isGoingDown);
        animateExtraForceVector(animationOffset, isGoingDown);
        animateTotalVector(isGoingDown);

        if ($("#weightDecomposition").is(':checked')) {
            animateWeightDecompositionVectors(animationOffset, isGoingDown);
        }
    }
}