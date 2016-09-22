function updateWeightForce() {
    //calculo del peso del objeto a examinar
    weightForce = c1.mass * G_FORCE;
}
    
function updateThrustForce(){
    //calculo del empuje sobre el objeto a examinar
    if (fluidDensity > objDensity && (!animationInProgress || (!previousObjectSubmerged && !objectSubmerged))) {
        thrustForce = weightForce;
    } else {
        thrustForce = fluidDensity * c1.volume * G_FORCE;  
    }
      
}

function updateTotalForce() {
    totalForce = Math.abs(thrustForce - weightForce);    
}

function updateObjectDensity() {    
    //calculo de la densidad del objeto a examinar
    objDensity = c1.mass / c1.volume;
    
    previousObjectSubmerged = objectSubmerged;    
    if (objDensity > fluidDensity) {
        objectSubmerged = true;
    } else {
        objectSubmerged = false;
    }
}

function updateVolumes() {
    if (objDensity > fluidDensity) {
        submergedVolume = c1.volume;
        emergedVolume = 0;
    } else {
        submergedVolume = weightForce / (fluidDensity * G_FORCE);
        emergedVolume = c1.volume - submergedVolume;   
    }
}

function calculatePhysics() {
    updateObjectDensity();
    updateWeightForce();
    updateThrustForce()
    updateTotalForce();
    
    updateVolumes();
}
