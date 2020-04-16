$(document).ready(function() {

  $("#home_pic, .work_img").hide();

  $("#name").hover(function() {
    $("#home_pic").fadeIn();
  }, function() {
    $("#home_pic").fadeOut();
  });

  $("#box_1 .box_cover").hover(function() {
    $("#img_1").fadeIn();
  }, function() {
    $("#img_1").fadeOut();
  });

  $("#box_2 .box_cover").hover(function() {
    $("#img_2").fadeIn();
  }, function() {
    $("#img_2").fadeOut();
  });

  $("#box_3 .box_cover").hover(function() {
    $("#img_3").fadeIn();
  }, function() {
    $("#img_3").fadeOut();
  });

  $('#name').mousemove(function(event){
    //Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page. "this" is the hovered element with the class of "img"
    var mousex = event.pageX - $('#home_pic').offset().left;
    var mousey = event.pageY - $('#home_pic').offset().top;
    
    
    //If you just used the mouse position values the translation effect will only go up and to the right, by subtracting half of the length / width of the imagevfrom the values  we get either a positive or negitive number so that the image will move in any direction.
    
    //The 40 controls the amount of "movement" that will happen by giving us a smaller number, feel free to change it to get the effect that you want.
    var imgx = (mousex - 300) / 20 + 40;
    var imgy = (mousey - 200) / 20;
    
    //Adds a translation css styles to the image element
    $('#home_pic').css("transform", "translate(" + imgx + "px," + imgy + "px)");

  });

  //This function will fire every time the user mouses off of the image. It resets the translation back to 0.
  $('#name').mouseout(function(){
    $('#home_pic').css("transform", "translate(0px,0px)");
  });



  $("#box_1 .box_cover").mousemove(function(event){
    //Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page. "this" is the hovered element with the class of "img"
    var mousex = event.pageX - $('#img_1').offset().left;
    var mousey = event.pageY - $('#img_1').offset().top;
    
    
    //If you just used the mouse position values the translation effect will only go up and to the right, by subtracting half of the length / width of the imagevfrom the values  we get either a positive or negitive number so that the image will move in any direction.
    
    //The 40 controls the amount of "movement" that will happen by giving us a smaller number, feel free to change it to get the effect that you want.
    var imgx = (mousex - 300) / 10 + 40;
    var imgy = (mousey - 200) / 10;
    
    //Adds a translation css styles to the image element
    $('#img_1').css("transform", "translate(" + imgx + "px," + imgy + "px)");

  });

  //This function will fire every time the user mouses off of the image. It resets the translation back to 0.
  $('#box_1 .box_cover').mouseout(function(){
    $('#img_1').css("transform", "translate(0px,0px)");
  });



  $("#box_2 .box_cover").mousemove(function(event){
    //Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page. "this" is the hovered element with the class of "img"
    var mousex = event.pageX - $('#img_2').offset().left;
    var mousey = event.pageY - $('#img_2').offset().top;
    
    
    //If you just used the mouse position values the translation effect will only go up and to the right, by subtracting half of the length / width of the imagevfrom the values  we get either a positive or negitive number so that the image will move in any direction.
    
    //The 40 controls the amount of "movement" that will happen by giving us a smaller number, feel free to change it to get the effect that you want.
    var imgx = (mousex - 300) / 10 + 40;
    var imgy = (mousey - 200) / 10;
    
    //Adds a translation css styles to the image element
    $('#img_2').css("transform", "translate(" + imgx + "px," + imgy + "px)");

  });

  //This function will fire every time the user mouses off of the image. It resets the translation back to 0.
  $('#box_2 .box_cover').mouseout(function(){
    $('#img_2').css("transform", "translate(0px,0px)");
  });



  $("#box_3 .box_cover").mousemove(function(event){
    //Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page. "this" is the hovered element with the class of "img"
    var mousex = event.pageX - $('#img_3').offset().left;
    var mousey = event.pageY - $('#img_3').offset().top;
    
    
    //If you just used the mouse position values the translation effect will only go up and to the right, by subtracting half of the length / width of the imagevfrom the values  we get either a positive or negitive number so that the image will move in any direction.
    
    //The 40 controls the amount of "movement" that will happen by giving us a smaller number, feel free to change it to get the effect that you want.
    var imgx = (mousex - 300) / 10 + 40;
    var imgy = (mousey - 200) / 10;
    
    //Adds a translation css styles to the image element
    $('#img_3').css("transform", "translate(" + imgx + "px," + imgy + "px)");

  });

  //This function will fire every time the user mouses off of the image. It resets the translation back to 0.
  $('#box_3 .box_cover').mouseout(function(){
    $('#img_3').css("transform", "translate(0px,0px)");
  });

})