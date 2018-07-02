//guardamos las coordenadas originales
var start_dr = function () {
    this.ox = this.attr("cx");
    this.oy = this.attr("cy");
}

//movimiento del objeto dado el movimiento mediante dx y dy
var move_dr = function(dx, dy) {
    this.attr({cx: this.ox + dx, cy: this.oy + dy});

    updateState();
}

//actualización del objeto tras el movimiento para que respete los límites del lienzo
var up_dr = function() { 
    if(this.attr("cx") > (MAX_X - this.attr("r"))) {
        this.attr({cx: MAX_X - this.attr("r")});
    }
    if(this.attr("cx") < (MIN_X + this.attr("r"))) {
        this.attr({cx: MIN_X + this.attr("r")});
    }
    if(this.attr("cy") > (MAX_Y - this.attr("r"))) {
        this.attr({cy: MAX_Y - this.attr("r")});
    }
    if(this.attr("cy") < (MIN_Y + this.attr("r"))) {
        this.attr({cy: MIN_Y + this.attr("r")});
    }

    updateState();
};