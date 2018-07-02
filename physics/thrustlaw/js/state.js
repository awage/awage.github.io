function updateState() {
    animationInProgress = true;
    
    calculatePhysics();
    updateVectors();
    updateResultGrids();
    thrustAnimation();        
}

function updateStateWithoutAnimation() {
    calculatePhysics();
    updateVectors();
    updateResultGrids();
}

function updateStateAfterAnimation() {   
    calculatePhysics();
    updateVectors();
    updateResultGrids();
}

function thrustAnimation() {
    
    if (objDensity > fluidDensity) {
        cxDest = OBJECT_CENTER_X;
        cyDest = MAX_Y - TRANSPARENT_FLOOR_Y - c1.attr('r');
        animationType = ANIMATION_LINEAR;
    } else {
        cxDest = OBJECT_CENTER_X;
        //calculamos la posicion del objeto segun el volumen emergido
        cyDest = Math.abs(OBJECT_CENTER_Y + c1.attr('r') - (c1.attr('r') * 2 * (emergedVolume / c1.volume)));
        animationType = ANIMATION_BOUNCE;
    }
    
    animationTime = ANIMATION_DEFAULT_TIME;
    
    c1.animate({cx:cxDest, cy: cyDest}, animationTime, animationType, 
        function(){
            animationInProgress = false;
            updateStateAfterAnimation()
        ;}
    );  
    vectorCenter.animate({cx:cxDest, cy: cyDest}, animationTime, animationType);

    animateWeightVector(cxDest, cyDest, animationTime, animationType);
    animateThrustVector(cxDest, cyDest, animationTime, animationType);
    animateTotalVector(cxDest, cyDest, animationTime, animationType);
}