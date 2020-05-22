$(function(){

    //declare variables
    
        //paintingerasing or not
    var paint = false;
    
        //painting or erasing
    var paint_erase = "paint";
    
        //get the canvas and context
    var canvas = document.getElementById("paint");
    var ctx = canvas.getContext("2d");
    
   //get the canvas container
    var container = $("#container");
    
    //mouse position
    var mouse = {x: 0, y: 0};
    
    //onload load saved work from localStorage
    if(localStorage.getItem("imgCanvas") != null){
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img, 0,0);
        }
        img.src = localStorage.getItem("imgCanvas");
    };
    
    
    //set drawing parameters (linearWidth,lineJoin,linecap)
    ctx.lineWidth = 3;
    ctx.lineJoin ="round";
    ctx.lineCap ="round";
    
    //click inside container
    container.mousedown(function(e){
        paint = true;        
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.moveTo(mose.x,mouse.y);//x,y variables
        
    });
    //move the mouse while holding mouse key
    container.mousemove(function(e){        
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        
        if(paint == true){
            if(paint_erase == "paint"){
                //get color input
                ctx.strokeStyle = $("#paintColor").val();
            }else{
                //white color
                ctx.strokeStyle = "white";
            }
            ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();
        }
    });
    //mouse uo-->we are not painting erasing anymore
    container.mouseup(function(){
        paint = false;                
    });
    //if we leave the container we are not paintngerasing anymore
    container.mouseleave(function(){
        paint = false;                
    });
    //click on the reset button
    $("#reset").click(function(){
       ctx.clearRect(0, 0, canvas.width, canvas.height); 
        paint.erase = "paint";
        $("#erase").removeClass("eraseMode");
    });
    
    //click on save button
   $("#save").click(function(){
        if(typeof(localStorage) != null){        
            localStorage.setItem("imgCanvas",canvas.toDataURL());
//            window.alert(localStorage.getItem("imgCanvas"));
        }else{
            window.alert("Your browser does not support local storage!")
        }
   });    
    
    //click on the erase button
    $("#erase").click(function(){
       if(paint_erase == "paint") {
           paint_erase = "erase";
       }else{
           paint_erase ="paint";
       }
        $(this).toggleClass("eraseMode");
    });
    
    //change color input
    $("#paintColor").change(function(){
       $("#circle").css("background-color",$(this).val()) ;
    });
    
    //change lineWidth using slide
      $("#slider").slider({
       //setting ,in and max widht of circle thickness
       min: 3,
       max: 30,
       slide: function(event,ui){
           $("#circle").height(ui.value);
           $("#circle").width(ui.value);
           ctx.lineWidth = ui.value;
       }
   });
    //functions
  });  
    
//    
//    var canvas = document.getElementById("paint");
//    var context = canvas.getContext('2d');
//    
//    //draw a line
//    //declaring a new path
//    context.beginPath();
//    
//    //define the line width
//    context.lineWidth = 20;
//    //set line color
//    context.strokeStyle = "violet";
//    
//    
//    //position context point set coordinates
//    context.moveTo(50,50);
//    //draw a straight line from starting point to a new position
//    context.lineTo(200,200);
//    //draw aother line 
//    context.lineTo(400,100);
//    //make the line visible
//    context.stroke();
    




//logic
 //declare variables
        //paintingerasing or not
        //painting or erasing
        //get the canvas and context
        //get the canvas container
        //mouse position
    
    //onload load saved work from localStorage
    
    //set drawing parameters (linearWidth,lineJoin,linecap)
    
    //click inside container
    //move the mouse while holding mouse key
    //mouse uo-->we are not painting erasing anymore
    //if we leave the container we are not paintngerasing anymore
    //click on the reset button
    //click on save button
    //click on the erase button
    //change color input
    //change lineWidth using slide
    //functions












