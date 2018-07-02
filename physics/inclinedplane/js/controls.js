function objectMassSlider() {
    $("#objMass").slider({ 
        from: MIN_OBJ_MASS_SLIDER, 
        to: MAX_OBJ_MASS_SLIDER, 
        step: 5,
        heterogeneity: ['33/300','67/400'],
        scale: [MIN_OBJ_MASS_SLIDER, '|', 300, '|', 400, '|', MAX_OBJ_MASS_SLIDER],
        limits: false,
        value: DEFAULT_OBJ_MASS, 
        format: {format: '##', locale: 'de' }, 
        dimension: '&nbsp;Kg', 
        skin: "round_plastic", 
        callback: function(value){
            if (!animationInProgress) {
                mass = value; 
                console.log("New OBJECT MASS value: " + mass + "Kg");

                updateState();
            } else {
                $("#objMass").slider("value", mass);
            }
        } 
    });
}

function pitchSlider() {
    $("#pitch").slider({ 
        from: MIN_PITCH_SLIDER, 
        to: MAX_PITCH_SLIDER, 
        step: 1,
        heterogeneity: ['25/15','50/25','75/35'],
        scale: [MIN_PITCH_SLIDER, '|', 15, '|', 25, '|', 35, '|', MAX_PITCH_SLIDER],
        limits: false,					
        value: DEFAULT_PITCH, 
        format: {format: '##', locale: 'de' },  
        dimension: '&nbsp;º', 
        skin: "round_plastic", 
        callback: function(value) {
            if (!animationInProgress) {
                pitch = parseFloat(value);
                console.log("New PITCH value: " + pitch);
                //inclinedStructureLinePath = getInclinedStraight(50, 450, pitch);
                //inclinedStructureLine.attr({'path':inclinedStructureLinePath});
                inclinedAreaPath = getInclinedStructurePath(50, 450, pitch);
                inclinedArea.attr({'path':inclinedAreaPath});

                updateState();
            } else {
                $("#pitch").slider("value", pitch);
            }
        } 
    });
}

function frictionCoefficientSlider() {
    $("#frictionCoefficient").slider({ 
        from: MIN_FRICTION_COEFFICIENT_SLIDER, 
        to: MAX_FRICTION_COEFFICIENT_SLIDER, 
        step: 0.01, 
        round: 2,
        heterogeneity: ['25/0.25','50/0.50','75/0.75'],
        scale: [MIN_FRICTION_COEFFICIENT_SLIDER, '|', 0.25, '|', 0.50, '|', 0.75, '|', MAX_FRICTION_COEFFICIENT_SLIDER],
        limits: false,					
        value: DEFAULT_FRICTION_COEFFICIENT, 
        format: { format: '#0.00', locale: 'de' }, 
        dimension: '', 
        skin: "round_plastic", 
        callback: function(value) {
            if (!animationInProgress) {            
                frictionCoefficient = parseFloat(value);
                console.log("New FRICTION COEFFICIENT value: " + frictionCoefficient);

                updateState();
            } else {
                $("#frictionCoefficient").slider("value", frictionCoefficient);
            }
        } 
    });				
}

function extraForceSlider() {
    $("#extraForce").slider({ 
        from: MIN_EXTRA_FORCE_SLIDER, 
        to: MAX_EXTRA_FORCE_SLIDER, 
        step: 50,
        heterogeneity: ['25/-2000','50/0','75/2000'],
        scale: [MIN_EXTRA_FORCE_SLIDER, '|', -2000, '|', 0, '|', 2000, '|', MAX_EXTRA_FORCE_SLIDER],
        limits: false,					
        value: DEFAULT_EXTRA_FORCE, 
        format: { format: '##', locale: 'de' }, 
        dimension: '', 
        skin: "round_plastic", 
        callback: function(value) {
            if (!animationInProgress) {               
                extraForce = parseFloat(value);
                console.log("New EXTRA FORCE value: " + extraForce);
                
                updateState();           
            } else {
                $("#extraForce").slider("value", extraForce);
            }   
        }
    });				
}

function updateExtraForceControls() {
    if ($("#enableExtraForce").is(':checked')) {
        $("#extraForceSpan").removeClass("hideElement");
        $("#extraForceSpan").addClass("showElement");
        
        $("#extraForceSpanText").removeClass("hideElement");
        $("#extraForceSpanText").addClass("showElement");        
    } else {
        $("#extraForceSpan").removeClass("showElement");
        $("#extraForceSpan").addClass("hideElement");
        
        $("#extraForceSpanText").removeClass("showElement");
        $("#extraForceSpanText").addClass("hideElement");    
    }    
    
    extraForce = 0;
    $("#extraForce").slider("value", 0);
    
    updateState();
}


function initSliders() {
    //inicializacion de los sliders
    objectMassSlider();
    pitchSlider();
    frictionCoefficientSlider();
    extraForceSlider();
    
    updateState();
}

function initControls() {
    initSliders();
}