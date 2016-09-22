function createForceGrid() {
    jQuery("#forceGrid").jqGrid({
        datatype: "local",
        width: "100%",
        height: "100%",
        hidegrid: false,
        colNames:[i18n.t('grid.weightForce'), i18n.t('grid.thrustForce'), i18n.t('grid.totalForce')],
        colModel:[
            {name:'weightForce',index:'weightForce', width:150, align:"center", sortable:false, resizable:false},
            {name:'thrustForce',index:'thrustForce', width:150, align:"center", sortable:false, resizable:false},
            {name:'totalForce',index:'totalForce', width:150, align:"center", sortable:false, resizable:false}
        ],
        caption: i18n.t('grid.weightForceGridTitle'),
        beforeSelectRow: function(rowid, e) {
            return false;
        }            
    }); 
}   

function createDensityGrid() {
    jQuery("#densityGrid").jqGrid({
        datatype: "local",
        width: "100%",            
        height: "100%",
        hidegrid: false,
        colNames:[i18n.t('grid.objDensity'), i18n.t('grid.fluidDensity')],
        colModel:[
            {name:'objDensity',index:'objDensity', width:228, align:"center", sortable:false, resizable:false},
            {name:'fluidDensity',index:'fluidDensity', width:227, align:"center", sortable:false, resizable:false}
        ],
        caption: i18n.t('grid.densityGridTitle'),
        beforeSelectRow: function(rowid, e) {
            return false;
        }            
    }); 
}   

function createVolumeGrid() {
    jQuery("#volumeGrid").jqGrid({
        datatype: "local",
        width: "100%",
        height: "100%",
        hidegrid: false,
        colNames:[i18n.t('grid.emergedVolume'), i18n.t('grid.submergedVolume'), i18n.t('grid.totalVolume')],
        colModel:[
            {name:'emergedVolume',index:'emergedVolume', width:150, align:"center", sortable:false, resizable:false},
            {name:'submergedVolume',index:'submergedVolume', width:150, align:"center", sortable:false, resizable:false},
            {name:'totalVolume',index:'totalVolume', width:150, align:"center", sortable:false, resizable:false}
        ],
        caption: i18n.t('grid.volumeGridTitle'),
        beforeSelectRow: function(rowid, e) {
            return false;
        }            
    }); 
}   

function updateForceGrid() {
    var forceData = [
        {weightForce:weightForce.toFixed(2),thrustForce:thrustForce.toFixed(2),totalForce:totalForce.toFixed(2)}
    ];
                    
    for(var i=0; i<forceData.length; i++) {
        jQuery("#forceGrid").jqGrid('delRowData', i+1);
        jQuery("#forceGrid").jqGrid('addRowData', i+1, forceData[i]);   
    }
}

function updateDensityGrid() {
    var densityData = [
        {objDensity:objDensity.toFixed(2),fluidDensity:fluidDensity.toFixed(2)}
    ];
                    
    for(var i=0; i<densityData.length; i++) {
        jQuery("#densityGrid").jqGrid('delRowData', i+1);
        jQuery("#densityGrid").jqGrid('addRowData', i+1, densityData[i]);   
    }
}

function updateVolumeGrid() {
    var volumeData = [
        {emergedVolume:emergedVolume.toFixed(2),submergedVolume:submergedVolume.toFixed(2),totalVolume:c1.volume.toFixed(2)}
    ];
                    
    for(var i=0; i<volumeData.length; i++) {
        jQuery("#volumeGrid").jqGrid('delRowData', i+1);
        jQuery("#volumeGrid").jqGrid('addRowData', i+1, volumeData[i]);   
    }
}

function createResultGrids() {
    createForceGrid();
    createDensityGrid();
    createVolumeGrid();
}

function updateResultGrids() {
    updateForceGrid();
    updateDensityGrid();
    updateVolumeGrid();
}