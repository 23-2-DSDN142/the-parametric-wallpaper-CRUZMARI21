


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

function my_symbol(){

  myHeart(0,0, 20) 
  myHeart(50,50,20)
  myHeart(110,110,20)  

}

function myHeart(heartX, heartY, size){
 
  fill('black');
  noStroke();
  ellipse(heartX + 8, heartY - 28, 20, 20);
  ellipse(heartX - 8, heartY - 28, 20, 20);
  triangle(heartX + 16, heartY - 22, heartX, heartY, heartX - 16, heartY - 22);


}






















