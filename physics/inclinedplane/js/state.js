function updateState() {
    updateObjectRect(50, 450, pitch);
    calculatePhysics();
    updateLegend();
    updateVectors();
    updateResultGrids();
        
    updatePreviousPitch(pitch);
    updatePreviousObjectCenterInfo(objectCenter_X, objectCenter_Y);
    
    animationFlow();
}

function updatePreviousObjectRectCornerInfo(x, y) {
    previousObjectRectCornerX = x;
    previousObjectRectCornerY = y;
    
    objectLeftBottomCorner_X = x;
    objectLeftBottomCorner_Y = y;
}

function updatePreviousObjectCenterInfo(x, y) {
    previousObjectCenter_X = x;
    previousObjectCenter_Y = y;
}

function updatePreviousPitch(pitch) {
    previousPitch = pitch;
}