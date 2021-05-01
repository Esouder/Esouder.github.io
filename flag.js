let flag_gen_button =document.getElementById('gen-flag')


let flagCanvas = document.getElementById('flag');
let ctx = flagCanvas.getContext('2d');
let info_div=document.getElementById('info');

function randomColor(){
    return Math.floor(Math.random()*255);
}

function addOverlay(ctx,width){
    let overlayType = Math.floor(Math.random()*8);


    ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
    ctx.strokeStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'

    //0==no overlay

    //cross
    if(overlayType==1){
        ctx.fillRect((flagCanvas.width)/2-width, 0, width*2, flagCanvas.height);
        ctx.fillRect(0, (flagCanvas.height)/2-width, flagCanvas.width, width*2);
    }

    //line from TL to BR
    if(overlayType==2){
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(flagCanvas.width,flagCanvas.height);
        ctx.lineWidth = width;
        ctx.stroke();
    }
    //line from TR to BL
    if(overlayType==3){
        ctx.beginPath();
        ctx.moveTo(flagCanvas.width,0);
        ctx.lineTo(0,flagCanvas.height);
        ctx.lineWidth = width;
        ctx.stroke();
    }

    //saltere (or however you spell that)
    if(overlayType==4){
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(flagCanvas.width,flagCanvas.height);
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(flagCanvas.width,0);
        ctx.lineTo(0,flagCanvas.height);
        ctx.lineWidth = width;
        ctx.stroke();
    }

    //circle
    if(overlayType==5){
        ctx.beginPath();
        ctx.arc((flagCanvas.width)/2, (flagCanvas.height)/2, width*2, 0, 2 * Math.PI);
        ctx.fill();
    }

    //diamond
    if(overlayType==6){
        ctx.beginPath();
        ctx.moveTo((flagCanvas.width)/2,0);
        ctx.lineTo(flagCanvas.width,(flagCanvas.height)/2);
        ctx.lineTo((flagCanvas.width)/2,(flagCanvas.height));
        ctx.lineTo(0,(flagCanvas.height)/2);
        ctx.fill();

    }

    //triangle
    if(overlayType==7){
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo((flagCanvas.width)/2,(flagCanvas.height)/2);
        ctx.lineTo(0,flagCanvas.height);
        ctx.fill();
    }
}

flag_gen_button.addEventListener("click", evt => {
    ctx.clearRect(0, 0, flagCanvas.width, flagCanvas.height);
    
    let flagType=Math.floor(Math.random()*8);
    let width=Math.floor(Math.random()*30)+100;

    //info_div.innerHTML=`<h3>Flag type: `+flagType+`</h3>`;


    //Solid Colour Background
    if(flagType==0){
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, 0, flagCanvas.width, flagCanvas.height);
        addOverlay(ctx,width);

    
    }

    //two Colour vertical
    if(flagType==1){
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, 0, flagCanvas.width/2, flagCanvas.height);
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(flagCanvas.width/2, 0, flagCanvas.width/2, flagCanvas.height);
        addOverlay(ctx,width);
    }

    //two Colour horizontal
    if(flagType==2){
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, 0, flagCanvas.width, flagCanvas.height/2);
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, flagCanvas.height/2, flagCanvas.width, flagCanvas.height/2);
        addOverlay(ctx,width);
    }

    //three Colour vertical
    if(flagType==3){
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, 0, flagCanvas.width/3, flagCanvas.height);
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(flagCanvas.width/3, 0, flagCanvas.width/3, flagCanvas.height);
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(flagCanvas.width/3*2, 0, flagCanvas.width/3, flagCanvas.height);
        addOverlay(ctx,width);
    }

    //three Colour Horizontal
    if(flagType==4){
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, 0, flagCanvas.width, flagCanvas.height/3);
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, flagCanvas.height/3, flagCanvas.width, flagCanvas.height/3);
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, flagCanvas.height/3*2, flagCanvas.width, flagCanvas.height/3);
        addOverlay(ctx,width);
    }

    //4 quadrants
    if(flagType==5){
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, 0, flagCanvas.width/2, flagCanvas.height/2);
        ctx.fillRect(flagCanvas.width/2, flagCanvas.height/2, flagCanvas.width/2, flagCanvas.height/2);
        
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(flagCanvas.width/2, 0, flagCanvas.width/2, flagCanvas.height/2);
        ctx.fillRect(0, flagCanvas.height/2, flagCanvas.width/2, flagCanvas.height/2);
        addOverlay(ctx,width);

    }

    //two tris slope down
    if(flagType==6){
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, 0, flagCanvas.width, flagCanvas.height);
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(flagCanvas.width,0);
        ctx.lineTo(flagCanvas.width,flagCanvas.height);
        ctx.fill();
        addOverlay(ctx,width);
        
    }

    //two tris slope up
    if(flagType==7){
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, 0, flagCanvas.width, flagCanvas.height);
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.beginPath();
        ctx.moveTo(0,flagCanvas.height);
        ctx.lineTo(flagCanvas.width,0);
        ctx.lineTo(flagCanvas.width,flagCanvas.height);
        ctx.fill();
        addOverlay(ctx,width);
    }

    //four tris
    if(flagType==8){
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.fillRect(0, 0, flagCanvas.width, flagCanvas.height);
        ctx.fillStyle = 'rgb('+randomColor()+','+randomColor()+','+randomColor()+')'
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(0,flagCanvas.height);
        ctx.lineTo(flagCanvas.width/2,flagCanvas.height/2);
        ctx.fill();
        ctx.lineTo(flagCanvas.width,0);
        ctx.lineTo(flagCanvas.width,flagCanvas.height);
        ctx.fill();
    }

    
})
