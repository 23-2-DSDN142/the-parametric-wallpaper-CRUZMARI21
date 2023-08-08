


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
// pWallpaper.output_mode(GRID_WALLPAPER);
 
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 100;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  
  background(180,0,202);
}

function my_symbol(){
  point(20, 25);
  point(90, 120);
  stroke('purple');
  strokeWeight(10);
  point(85, 75);
  point(15, 35);
  describe
  ('Four points drawn on a gray canvas. Two are black and two are purple. The points form the corners of a square.'
  );
  
  fill (30,29,49)
  square (-16, 70, 34, 5);
  describe
  ('A square with a black outline and round edges on a gray canvas.'
  );


 square(85, 34, 5);
 describe
 ('A square with a black outline and round edges on a gray canvas.'
 );

 fill(30,29,49)
 ellipse(52,-18,35)
 ellipse(-0.10, 35, 30)
 ellipse(100,35, -31,30)
 ellipse(50, 85, -35, -35)
 ellipse(-50, 90, -28)

 myHeart(0,0) 
 myHeart(-50,-40)
 myHeart(50,50)
 myHeart(100,100)  
 myHeart(150,150)
 myHeart(150,55)

}

function myHeart(heartX, heartY){
 
  fill('black');
  noStroke();
  ellipse(heartX + 8, heartY - 28, 20, 20);
  ellipse(heartX - 8, heartY - 28, 20, 20);
  triangle(heartX + 16, heartY - 22, heartX, heartY, heartX - 16, heartY - 22);


}


function wallpaper_background() {

  background('PURPLE');
}

function my_symbol(){
fill('Pink');
ellipse(50,70,172)
fill('black')

ellipse(20,40,30)
ellipse(80,40,30)

ellipse(50,100,40)
fill('white')

ellipse(20,40,10)
ellipse (10,40,5)

ellipse(75,40,10)
ellipse(85,40,5)

ellipse(90,70,30,15);
fill('red')
ellipse(90,70,30,15);
fill('red')
ellipse(10,70,30,15);
fill('red')

textSize(14);
text('do things with love', 60, -32);
fill(80, 102, 153);
strokeWeight(50,50);
textStyle(BOLDITALIC);
describe(`The words “do things with love” displayed normally,
  "Font Style Bold Italic” in bold italics.`);

  text('do things with love', 70, -22);

}


function wallpaper_background() {

  background('pink');
  fill('pink)')
}

function my_symbol(){
stroke('red');
strokeWeight(4);
rect(20, 20, 60, 60);
ellipse(80, -20, 30, -190)//right ear 
ellipse(15, -20, 30, -170)//left ear


ellipse(50,50, 100)//circle face 
fill('brown')//left eyes
ellipse(30,40,20)//left eyes
ellipse(70,40,20)//left eyes

fill('pink')
ellipse(50,60,10,-10,70)//nose

triangle(42, 79, 58, 74, 56);
}


function wallpaper_background() {
background('pink')
}

function my_symbol(){

  fill('red')
  noStroke(100,0,100)
  fill('white')
  
  fill('red')
  ellipse(50,60,200)
  
  fill('black')
  ellipse(50,60,190)
  
  fill('red')
  ellipse(50,60,160)
  
  fill('black')
  ellipse(50,60,130)
  
  fill('red')
  ellipse(50,60,100)
  
  fill('black')
  ellipse(50,60,80)
  
  
  fill('red');
  ellipse(66.6, 66.6, 20, 20);
  ellipse(83.2, 66.6, 20, 20);
  triangle(91.2, 72.6, 75, 95, 58.6, 72.6);
  
  fill('red');
  ellipse(30, 50, 20, 20);
  ellipse(15, 50, 20, 20);
  }


function wallpaper_background() {
background('yellow')

}

function my_symbol(){

fill('pink')
stroke ('yellow')
rect(50,60,30)
rect(20,60,30)
rect(-10,60,30)
rect(-40,60,30)
rect(-70,60,30)
rect(80,60,30)
rect(110,60,30)
rect(140,60,30)


fill('pink')
stroke('yellow')
rect(50,90,30)
rect(80,90,30)
rect(110,90,30)
rect(20,90,30)
rect(-10,90,30)

rect(-10,90,30)
rect(80,120,30)
rect(50,120,30)
rect(20,120,30)
rect(-10,120,30)
rect(-40,90,30)

fill('red')
rect(-100,30,30)
rect(-70,30,30)
rect(-40,30,30)
rect(-10,30,30)
rect(80,30,30)
rect(20,30,30)
rect(50,30,30)
rect(110,30,30)
rect(140,30,30)
rect(170,30,30)

//above
rect(170,-0,30)
rect(140,-0,30)
rect(110,-0,30)
rect(80,-0,30)
rect(50,-0,30)
rect(20,-0,30)
rect(-10,-0,30)
rect(-40,-0,30)
rect(-70,-0,30)
rect(-100,-0,30)

rect(140,-30,30)
rect(110,-30,30)
rect(80,-30,30)
rect(50,-30,30)
rect(20,-30,30)
rect(-10,-30,30)
rect(-40,-30,30)
rect(-70,-30,30)



rect(80,-60,30)
rect(110,-60,30)
rect(-40,-60,30)
rect(-10,-60,30)


} 
 
function wallpaper_background() {
background('grey')
}

function my_symbol(){
  
 myHeart(0,0) 
 myHeart(1,-40)
 myHeart(50,50)
 myHeart(100,100)  
 myHeart(150,150)
 myHeart(150,55)

 myHeart (-0,50) 
 myHeart(-50,-40)
 myHeart(50,50)
 myHeart(150,100)
 myHeart(101,150)
 myHeart(101,55)

 myHeart(101,0) 
 myHeart(150,-40)
 myHeart(50, 100)
 myHeart(-1,100)  
 myHeart(-1,150)
 myHeart(-50,100)

 myHeart(150,0) 
 myHeart(50, 150)
 myHeart(-50,150)  
 myHeart(-50,50)
 myHeart(-50,100)

 myHeart(50,0)
 myHeart(50,-40)
 myHeart(100,-40)
 myHeart(-50,150)  
 myHeart(-50, 1)
 myHeart(-50,100)

 myHeart(200,-40)
 myHeart(200,0) 
 myHeart(200,55)
 myHeart(200,100)
 myHeart(200,150)  
 

}
 
 function myHeart(heartX, heartY){
  
   fill('red');
   noStroke();
   ellipse(heartX + 8, heartY - 28, 20, 20);
   ellipse(heartX - 8, heartY - 28, 20, 20);
   triangle(heartX + 16, heartY - 22, heartX, heartY, heartX - 16, heartY - 22);

 }

 function wallpaper_background() {
  background('red')
 }

 function my_symbol(){
  
 fill('red')
 rect(-10,70,30)
 rect(20,70,30)
 rect(50,70,30)
 rect(80,70,30)

 rect(50,40,30)
 rect(80,40,30)
 rect(20,40,30)
 rect(-10,40,30)
 rect(-10,10,30)
 rect(20,10,30)
 rect(50,10,30)
 rect(80,10,30)
 rect(80,-20,30)
 rect(50,-20,30)
 rect(20,-20,30)
 rect(-10,-20,30)

  myHeart(50,60)
  myHeart(100,100) 
  myHeart(10,20)
 }
  
  function myHeart(heartX, heartY){
 
    fill('black');
    noStroke();
    ellipse(heartX + 8, heartY - 28, 20, 20);
    ellipse(heartX - 8, heartY - 28, 20, 20);
    triangle(heartX + 16, heartY - 22, heartX, heartY, heartX - 16, heartY - 22);
  
  }

  function wallpaper_background() {
    background('pink')
 
  }
  
  function my_symbol(){
  
  
    myHeart(100,60)
    myHeart(100,100) 
    myHeart(150,100)

    myHeart(50,60)
    myHeart(50,100) 
    myHeart(50,100)

  
    myHeart(10,60)
    myHeart(10,100) 
    myHeart(10,100)
    myHeart(150,60)
    
  }

    function myHeart(heartX, heartY){
   
      fill('yellow');
      noStroke();
      ellipse(heartX + 8, heartY - 28, 20, 20);
      ellipse(heartX - 8, heartY - 28, 20, 20);
      triangle(heartX + 16, heartY - 22, heartX, heartY, heartX - 16, heartY - 22);
 
    }
 
    function wallpaper_background() {
      background('grey')
    }

    function my_symbol(){
      
      myHeart(105,50)
      myHeart(105,100) 
      myHeart(-10,100)
      myHeart(-10,50) 

      strokeWeight(0);
textSize(12);
textStyle(NORMAL);
text('Yellow hearts', 10, 15);
textStyle(ITALIC);
text('Yellow hearts', 10, 40);
textStyle(BOLD);
text('Yellow hearts', 10, 65);
textStyle(BOLDITALIC);
text('Yellow hearts', 10, 90);
describe(`The words “Yellow hearts” displayed normally,
  “Font Style Italic” in italic,
  “Font Style Bold” in bold, and
  “Font Style Bold Italic” in bold italics.`);
    }
    
  

