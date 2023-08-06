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
  background(400,300);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  background(220, 180, 20);
  ellipse(56, 46, 55, 55);//eyeSize
  describe('A white ellipse with black outline in middle of a gray canvas.');



  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(480,0, 180);
    
    ellipse(200, 180, 80)
    fill(150, 70 , 85)
    stroke(200,40,30)
    
    rect()
  }}

}






















