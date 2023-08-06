//your parameter variables go here!
let eyeSize = 5;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 100;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(220,0,200);
}

  function draw() {
    ellipse(10, 200, 80)
    ellipse(100, 200, 80)
    ellipse(200, 200, 80)
    ellipse(300, 200, 80)
    ellipse(400, 200, 80)
    fill(150, 70 , 85)
    stroke(200,40,30)
    
    rect(-40, 80, 55)
    rect(40, 80, 55)
    rect(140, 80, 55)
    rect(240, 80, 55)
    rect(340, 80, 55)
    fill(`460,270,138`)
     
    ellipse(10, 200, 80)
    ellipse(100, 200, 80)
    ellipse(60, 200, 80)
    ellipse(100, 200, 80)
    ellipse(150,200,80)
    ellipse(200,200,80)
    ellipse(250, 200, 80)
    ellipse(350,200,80)
    
    rect(500, 580, 125)
    rect(840, 280, 65)
    
    ellipse(30, 20, 90)
    ellipse(150, 20, 90)
    ellipse(300,20,90)
    ellipse(420,20,90)
    
    rect(-240, 90, 55)
    rect(240, 180, 55)
    rect(340, 280, 55)
    rect(440, 380, 55)
    rect(540, 480, 55)
}






















