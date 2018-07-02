function objectMassSlider() {
    $("#objMass").slider({ 
        from: MIN_OBJ_MASS_SLIDER, 
        to: MAX_OBJ_MASS_SLIDER, 
        step: 5,
        heterogeneity: ['25/250','50/500','75/750'],
        scale: [MIN_OBJ_MASS_SLIDER, '|', 250, '|', 500, '|', 750, '|', MAX_OBJ_MASS_SLIDER],
        limits: false,
        value: DEFAULT_OBJ_MASS, 
        format: {format: '##', locale: 'de' }, 
        dimension: '&nbsp;Kg', 
        skin: "round_plastic", 
        callback: function(value){
            if (!animationInProgress) {               
                c1.mass = value; 
                updateState();
            } else {
                $("#objMass").slider("value", c1.mass);
            }                
        } 
    });
}

function objectVolumeSlider() {
    $("#objVolume").slider({ 
        from: MIN_OBJ_VOLUME_SLIDER, 
        to: MAX_OBJ_VOLUME_SLIDER, 
        step: 0.05,
        round: 2,
        heterogeneity: ['25/0.25','50/0.50','75/0.75'],
        scale: [MIN_OBJ_VOLUME_SLIDER, '|', 0.25, '|', 0.50, '|', 0.75, '|', MAX_OBJ_VOLUME_SLIDER],
        limits: false,					
        value: DEFAULT_OBJ_VOLUME, 
        format: { format: '#0.00', locale: 'de' }, 
        dimension: '&nbsp;m<small>3</small>;', 
        skin: "round_plastic", 
        callback: function(value) {
            if (!animationInProgress) {                     
                c1.volume = parseFloat(value); 
                c1.attr({'r':getRadiusFromVolumeCircle(Math.abs(value)) * 120});
                updateState();
            } else {
                $("#objVolume").slider("value", c1.volume);
            } 
        } 
    });
}

function fluidDensitySlider() {
    $("#fluidDensity").slider({ 
        from: MIN_FLUID_DENSITY_SLIDER, 
        to: MAX_FLUID_DENSITY_SLIDER, 
        step: 10, 
        round: 2,
        heterogeneity: ['33/500','67/1000'],
        scale: [MIN_FLUID_DENSITY_SLIDER, '|', 500, '|', 1000, '|', MAX_FLUID_DENSITY_SLIDER],
        limits: false,					
        value: DEFAULT_FLUID_DENSITY, 
        format: { format: '##', locale: 'de' },
        dimension: '&nbsp;Kg/m<small>3</small>;', 
        skin: "round_plastic", 
        callback: function(value) {
            if (!animationInProgress) {                
                fluidDensity = parseFloat(value);
                updateState();
            } else {
                $("#fluidDensity").slider("value", fluidDensity);
            }                 
        } 
    });				
}

function initSliders() {
    //inicializacion de los sliders
    objectMassSlider();
    objectVolumeSlider();
    fluidDensitySlider();

    updateState();
}

function initControls() {
    initSliders();
}