function createForceGrid() {
    jQuery("#forceGrid").jqGrid({
        datatype: "local",
        width: "100%",
        height: "100%",
        hidegrid: false,
        colNames:[i18n.t('grid.normalForce'), i18n.t('grid.frictionForce'), i18n.t('grid.extraForce')],
        colModel:[
            {name:'normalForce',index:'normalForce', width:150, align:"center", sortable:false, resizable:false},
            {name:'frictionForce',index:'frictionForce', width:150, align:"center", sortable:false, resizable:false},
            {name:'extraForce',index:'extraForce', width:150, align:"center", sortable:false, resizable:false}
        ],
        caption: i18n.t('grid.forceGridTitle'),
        beforeSelectRow: function(rowid, e) {
            return false;
        }            
    }); 
} 

function createWeightGrid() {
    jQuery("#weightGrid").jqGrid({
        datatype: "local",
        width: "100%",            
        height: "100%",
        hidegrid: false,
        colNames:[i18n.t('grid.weightForce'),i18n.t('grid.weightForce_X'),i18n.t('grid.weightForce_Y')],
        colModel:[
            {name:'weightForce',index:'weightForce', width:150, align:"center", sortable:false, resizable:false},            
            {name:'weightForce_X',index:'weightForce_X', width:150, align:"center", sortable:false, resizable:false},
            {name:'weightForce_Y',index:'weightForce_Y', width:150, align:"center", sortable:false, resizable:false}
        ],
        caption: i18n.t('grid.weightGridTitle'),
        beforeSelectRow: function(rowid, e) {
            return false;
        }            
    }); 
} 

function createTotalForceGrid() {
    jQuery("#totalForceGrid").jqGrid({
        datatype: "local",
        width: "100%",            
        height: "100%",
        hidegrid: false,
        colNames:[i18n.t('grid.totalForce')],
        colModel:[
            {name:'totalForce',index:'totalForce', width:460, align:"center", sortable:false, resizable:false}
        ],
        caption: i18n.t('grid.totalForceGrid'),
        beforeSelectRow: function(rowid, e) {
            return false;
        }            
    }); 
} 


function updateForceGrid() {
    var forceData = [
        {normalForce:normalForce.toFixed(2),frictionForce:Math.abs(frictionForce.toFixed(2)),extraForce:Math.abs(extraForce.toFixed(2))}
    ];
                    
    for(var i=0; i<forceData.length; i++) {
        jQuery("#forceGrid").jqGrid('delRowData', i+1);
        jQuery("#forceGrid").jqGrid('addRowData', i+1, forceData[i]);   
    }
}

function updateWeightGrid() {
    var weightData = [
        {weightForce:weightForce.toFixed(2),weightForce_X:weightForce_X.toFixed(2),weightForce_Y:weightForce_Y.toFixed(2)}
    ];
                    
    for(var i=0; i<weightData.length; i++) {
        jQuery("#weightGrid").jqGrid('delRowData', i+1);
        jQuery("#weightGrid").jqGrid('addRowData', i+1, weightData[i]);   
    }
}

function updateTotalForceGrid() {
    var totalForceData = [
        {totalForce:totalForce.toFixed(2)}
    ];
                    
    for(var i=0; i<totalForceData.length; i++) {
        jQuery("#totalForceGrid").jqGrid('delRowData', i+1);
        jQuery("#totalForceGrid").jqGrid('addRowData', i+1, totalForceData[i]);   
    }
}

function createResultGrids() {
    createForceGrid();
    createWeightGrid();
    createTotalForceGrid();
}

function updateResultGrids() {
    updateForceGrid();
    updateWeightGrid();
    updateTotalForceGrid();
}

/*function createWeightForceGrid() {
    jQuery("#weightForceGrid").jqGrid({
        datatype: "local",
        width: "100%",
        height: "100%",
        hidegrid: false,
        colNames:[i18n.t('grid.weightForce'),i18n.t('grid.weightForce_X'), i18n.t('grid.weightForce_Y')],
        colModel:[
            {name:'weightForce',index:'weightForce', width:150, align:"center", sortable:false, resizable:false},
            {name:'weightForce_X',index:'weightForce_X', width:150, align:"center", sortable:false, resizable:false},
            {name:'weightForce_Y',index:'weightForce_Y', width:150, align:"center", sortable:false, resizable:false}
        ],
        caption: i18n.t('grid.weightForceGridTitle'),
        beforeSelectRow: function(rowid, e) {
            return false;
        }            
    }); 
}*/

/*function createOtherForcesGrid() {
    jQuery("#otherForcesGrid").jqGrid({
        datatype: "local",
        width: "100%",            
        height: "100%",
        hidegrid: false,
        colNames:[i18n.t('grid.normalForce'),i18n.t('grid.frictionForce'), i18n.t('grid.extraForce')],
        colModel:[
            {name:'normalForce',index:'normalForce', width:150, align:"center", sortable:false, resizable:false},
            {name:'frictionForce',index:'frictionForce', width:150, align:"center", sortable:false, resizable:false},
            {name:'extraForce',index:'extraForce', width:150, align:"center", sortable:false, resizable:false}
        ],
        caption: i18n.t('grid.otherForceGridTitle'),
        beforeSelectRow: function(rowid, e) {
            return false;
        }            
    }); 
}*/   

/*function updateWeightForceGrid() {
    var weightForceData = [
        {weightForce:weightForce.toFixed(2),weightForce_X:weightForce_X.toFixed(2),weightForce_Y:weightForce_Y.toFixed(2)}
    ];
                    
    for(var i=0; i<weightForceData.length; i++) {
        jQuery("#weightForceGrid").jqGrid('delRowData', i+1);
        jQuery("#weightForceGrid").jqGrid('addRowData', i+1, weightForceData[i]);   
    }
}

function updateOtherForcesGrid() {
    var otherForcesData = [
        {normalForce:normalForce.toFixed(2),frictionForce:Math.abs(frictionForce.toFixed(2)),extraForce:Math.abs(extraForce.toFixed(2))}
    ];
                    
    for(var i=0; i<otherForcesData.length; i++) {
        jQuery("#otherForcesGrid").jqGrid('delRowData', i+1);
        jQuery("#otherForcesGrid").jqGrid('addRowData', i+1, otherForcesData[i]);   
    }
}*/


/*function createResultGrids() {
    createWeightForceGrid();
    createOtherForcesGrid();
}

function updateResultGrids() {
    updateWeightForceGrid();
    updateOtherForcesGrid();
}*/