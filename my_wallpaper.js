


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
  describe(
    'Four points drawn on a gray canvas. Two are black and two are purple. The points form the corners of a square.'
  );



  
  fill (30,29,49)
  square (-16, 70, 34, 5);
  describe('A square with a black outline and round edges on a gray canvas.'
  );

  square (85, -32, 34, 5);
  describe('A square with a black outline and round edges on a gray canvas.'
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






















