function updateWeightForce() {
    //calculo del peso del objeto a examinar
    weightForce = mass * G_FORCE;
}

function updateWeightForce_X() {
    //calculo del peso del objeto a examinar sobre el eje x
    weightForce_X = weightForce * Math.sin(degreesToRadians(pitch));
}

function updateWeightForce_Y() {
    //calculo del peso del objeto a examinar sobre el eje y
    weightForce_Y = weightForce * Math.cos(degreesToRadians(pitch));
}

function updateNormalForce() {
    //calculo de la normal del objeto a examinar (igual al peso en Y)
    normalForce = weightForce_Y;
}

function updateFrictionForce() {
    //calculo de la normal del objeto a examinar (igual al peso en Y)
    frictionForce = normalForce * frictionCoefficient;
    
    if (extraForce > 0) {
        if (extraForce > weightForce_X) {
            if (frictionForce > extraForce - weightForce_X) {
                frictionForce = -(extraForce - weightForce_X);
            } else {
                frictionForce = -frictionForce;
            }
        } else {
            if (frictionForce > weightForce_X - extraForce) {
                frictionForce = weightForce_X - extraForce;
            }
        }
    } else {
        if (frictionForce > (Math.abs(extraForce) + weightForce_X)) {
            frictionForce = Math.abs(extraForce) + weightForce_X;
        }
    }
}

function updateTotalForce() {
    totalForce = Math.round(Math.abs(frictionForce - weightForce_X + extraForce));    
}

function isGoingDownObject() {
    return Math.round(frictionForce - weightForce_X + extraForce) < 0;    
}

function isGoingUpObject() {
    return Math.round(frictionForce - weightForce_X + extraForce) > 0;    
}

function calculatePhysics() {
    updateWeightForce();
    updateWeightForce_X();
    updateWeightForce_Y();
    updateNormalForce();
    updateFrictionForce();
    updateTotalForce();
}
