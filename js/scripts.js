(function() {
    "use strict";

    //Draw right at the beginning
    window.onload = function() {
        //We need to get the context first
        var ctx = document.querySelector("#myCanvas").getContext("2d");

        //Let's draw a full blue rectangle
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(30, 30, 80, 140);

        //Now a red circle, with a green stroke
        ctx.fillStyle = "#FF0000";
        ctx.beginPath();
        ctx.arc(140, 160, 70, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 6;
        ctx.stroke();

        //We can also make any other forms using lines, like a yellow triangle
        ctx.fillStyle = "rgb(255, 255, 0)";
        ctx.beginPath();
        ctx.moveTo(150, 170);
        ctx.lineTo(200,200);
        ctx.lineTo(120,250);
        ctx.closePath();
        ctx.fill();

        //Let's add some text
        ctx.fillStyle = "black";
        ctx.font = "bold 45pt Calibri";
        ctx.fillText('Hello World', 150, 100); 
    }
})();