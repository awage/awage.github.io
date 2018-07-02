function getInclinedStraight(x0, y0, pitch) {
    if (pitch > 45) {
        var y = 50;
        var x = Math.round(getXFromYFromAInclinedStraight(y, x0, y0, pitch));
    } else {
        var x = 450;
        var y = Math.round(getYFromXFromAInclinedStraight(x, x0, y0, pitch));
    }
    
    return 'M' + x0 + ' ' + y0 + 'L' +  x + ' ' + y;
}

function getInclinedStructurePath(x0, y0, pitch) {
    if (pitch > 45) {
        var y = 50;
        var x = Math.round(getXFromYFromAInclinedStraight(y, x0, y0, pitch));
    } else {
        var x = 450;
        var y = Math.round(getYFromXFromAInclinedStraight(x, x0, y0, pitch));
    }
    
    return 'M450 450L' + x0 + ' ' + y0 + 'L' +  x + ' ' + y + ' z';
}

function updateObjectRect(x0, y0, pitch) {
    if (pitch > 45) {
        var y1 = 50;
        var x1 = Math.round(getXFromYFromAInclinedStraight(y1, x0, y0, pitch));
    } else {
        var x1 = OBJECT_X_DOWNCORNER_INIT_VALUE;
        var y1 = Math.round(getYFromXFromAInclinedStraight(x1, x0, y0, pitch));
        
        if (objectRect) {
            objectRect.remove();
            objectRect = null;
        }
        //objectRect.rotate(previousPitch, previousObjectRectCornerX, previousObjectRectCornerY);      
        //objectRect.attr({'x':x1, 'y':y1 - 100}); 
        
        objectRect = paper.rect(x1, y1 - OBJECT_HEIGHT, OBJECT_WIDTH, OBJECT_HEIGHT).attr({'fill':'120-#999-#fff','opacity':'0.8'});
        objectRect.rotate(-pitch, x1, y1);
        
        updatePreviousObjectRectCornerInfo(x1, y1);
        
        var xCenter = Math.abs(x1 + (OBJECT_WIDTH / 2) - (x1 - Math.cos(degreesToRadians(90 - pitch))));
        var yCenter = Math.abs(y1 - (OBJECT_HEIGHT / 2) - y1); 
        getRectangleCenter(x1, y1, xCenter, yCenter, pitch);
    }
}

function getRectangleCenter(x0, y0, xCenter, yCenter, pitch) {
    var xCenterRotatedRelative = xCenter * Math.cos(degreesToRadians(pitch)) - yCenter * Math.sin(degreesToRadians(pitch));
    var yCenterRotatedRelative = xCenter * Math.sin(degreesToRadians(pitch)) + yCenter * Math.cos(degreesToRadians(pitch));

    objectCenter_X = x0 + xCenterRotatedRelative;
    objectCenter_Y = y0 - yCenterRotatedRelative;

    objectCenter.attr({'cx':objectCenter_X, 'cy':objectCenter_Y});
    objectCenter.toFront();
}

function getXFromYFromAInclinedStraight(y, x0, y0, pitch) {
    return ((y - y0) / - (Math.tan(degreesToRadians(pitch)))) + x0;
}

function getYFromXFromAInclinedStraight(x, x0, y0, pitch) {
    return -(Math.tan(degreesToRadians(pitch)) * (x - x0) - y0);
}

function addElementTip(node, txt){
    $(node).mouseenter(function(){
       elementTipText = txt;
       elementTip.fadeIn();
       mouseOverElement = true;
    }).mouseleave(function(){
       elementTip.fadeOut(200);
       mouseOverElement = false;
    });
}

function updateLegend() {
    weightLegendText.attr({'text':i18n.t('vector.weightForce') + ": " + Math.abs(weightForce).toFixed(2) + " N"});
    frictionLegendText.attr({'text':i18n.t('vector.frictionForce') + ": " + Math.abs(frictionForce).toFixed(2) + " N"});
    normalLegendText.attr({'text':i18n.t('vector.normalForce') + ": " + Math.abs(normalForce).toFixed(2) + " N"});
    extraForceLegendText.attr({'text':i18n.t('vector.extraForce') + ": " + Math.abs(extraForce).toFixed(2) + " N"});
    totalLegendText.attr({'text':i18n.t('vector.total') + ": " + Math.abs(totalForce).toFixed(2) + " N"});
    if ($("#weightDecomposition").is(':checked')) {
        weightXLegend.attr({'r':6});
        weightXLegendText.attr({'text':i18n.t('vector.weightForce_X') + ": " + Math.abs(weightForce_X).toFixed(2) + " N"});
        weightYLegend.attr({'r':6});
        weightYLegendText.attr({'text':i18n.t('vector.weightForce_Y') + ": " + Math.abs(weightForce_Y).toFixed(2) + " N"});
    }
}

function fillExternalForceFromLegend() {
    extraForceLegend.attr({'r':6});
    extraForceLegendText.attr({'text':i18n.t('vector.extraForce') + ": " + Math.abs(extraForce).toFixed(2) + " N"});
}

function removeExternalForceFromLegend() {
    extraForceLegend.attr({'r':0});
    extraForceLegendText.attr({'text':""});
}

function removeWeightDecompositionFromLegend() {
    weightXLegend.attr({'r':0});
    weightXLegendText.attr({'text':""});
    weightYLegend.attr({'r':0});
    weightYLegendText.attr({'text':""});
}