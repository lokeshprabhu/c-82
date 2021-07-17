canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var mouseevent="empty";


var last_position_x,last_position_y;

color="black";
width=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){

    mouseevent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){

    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){

    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;

    if(mouseevent=="mousedown"){

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        ctx.moveTo(last_position_x,last_position_y);

        ctx.lineTo(current_position_x,current_position_y);
        //ctx.arc(current_postion_x,current_position_y,40,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_x=current_position_x;
last_position_y=current_position_y;

}
