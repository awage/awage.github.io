function loadSpanishLanguage() {
    i18n.setLng('es-ES', function(){
        i18nForMenu();        
        $("#wrap").i18n();
    });
}

function loadEnglishLanguage() {
    i18n.setLng('en-EN', function(){
        i18nForMenu();        
        $("#wrap").i18n();
    });
}

function loadFrenchLanguage() {
    i18n.setLng('fr-FR', function(){
        i18nForMenu();
        $("#wrap").i18n();
    });
}

function loadItalianLanguage() {
    i18n.setLng('it-IT', function(){
        i18nForMenu();
        $("#wrap").i18n();
    });
}

function i18nForMenu() {
    var totalIcons = 3;
    
    var thrustLawIcon = document.getElementById('thrustLawIcon');
    var inclinedPlaneIcon = document.getElementById('inclinedPlaneIcon');
    var futureSimulationsIcon = document.getElementById('futureSimulationsIcon');
    var titleTextCarouselP = document.getElementById("titleTextCarousel");

    thrustLawIcon.setAttribute('title', i18n.t('mainPage.thrustLaw'));
    inclinedPlaneIcon.setAttribute('title', i18n.t('mainPage.inclinedPlane'));
    futureSimulationsIcon.setAttribute('title', i18n.t('mainPage.futureSimulations'));
    thrustLawIcon.setAttribute('alt', i18n.t('mainPage.thrustLaw'));
    inclinedPlaneIcon.setAttribute('alt', i18n.t('mainPage.inclinedPlane'));
    futureSimulationsIcon.setAttribute('alt', i18n.t('mainPage.futureSimulations'));    
        
    if (document.getElementsByClassName('reflection').length >= totalIcons) {
        var thrustLawIconReflected = document.getElementsByClassName('reflection')[0];
        var inclinedPlaneIconReflected = document.getElementsByClassName('reflection')[1];
        var futureSimulationsIconReflected = document.getElementsByClassName('reflection')[2];

        thrustLawIconReflected.setAttribute('title', i18n.t('mainPage.thrustLaw'));
        inclinedPlaneIconReflected.setAttribute('title', i18n.t('mainPage.inclinedPlane'));
        futureSimulationsIconReflected.setAttribute('title', i18n.t('mainPage.futureSimulations'));
        thrustLawIconReflected.setAttribute('alt', i18n.t('mainPage.thrustLaw'));
        inclinedPlaneIconReflected.setAttribute('alt', i18n.t('mainPage.inclinedPlane'));
        futureSimulationsIconReflected.setAttribute('alt', i18n.t('mainPage.futureSimulations'));
    }
    
    //asi cambiamos instantaneamente la i18n del carousel, sabiendo que elemento tenemos en el foco
    if (thrustLawIcon.style.zIndex === "100") { 
        titleTextCarouselP.innerHTML = i18n.t('mainPage.thrustLaw');
    }
    if (inclinedPlaneIcon.style.zIndex === "100") { 
        titleTextCarouselP.innerHTML = i18n.t('mainPage.inclinedPlane');
    }
    if (futureSimulationsIcon.style.zIndex === "100") { 
        titleTextCarouselP.innerHTML = i18n.t('mainPage.futureSimulations');
    }    
}