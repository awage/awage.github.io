function loadSpanishLanguage() {
    i18n.setLng('es-ES', function(){
        $("#wrap").i18n();
        $('#forceGrid').jqGrid('GridUnload');
        $('#weightGrid').jqGrid('GridUnload');       
        $('#totalForceGrid').jqGrid('GridUnload');
        createResultGrids();
        updateState();
    });
}

function loadEnglishLanguage() {
    i18n.setLng('en-EN', function(){
        $("#wrap").i18n();
        $('#forceGrid').jqGrid('GridUnload');
        $('#weightGrid').jqGrid('GridUnload');   
        $('#totalForceGrid').jqGrid('GridUnload');
        createResultGrids();
        updateState();
    });
}

function loadFrenchLanguage() {
    i18n.setLng('fr-FR', function(){
        $("#wrap").i18n();
        $('#forceGrid').jqGrid('GridUnload');
        $('#weightGrid').jqGrid('GridUnload'); 
        $('#totalForceGrid').jqGrid('GridUnload');
        createResultGrids();
        updateState();
    });
}

function loadItalianLanguage() {
    i18n.setLng('it-IT', function(){
        $("#wrap").i18n();
        $('#forceGrid').jqGrid('GridUnload');
        $('#weightGrid').jqGrid('GridUnload');   
        $('#totalForceGrid').jqGrid('GridUnload');
        createResultGrids();
        updateState();
    });
}