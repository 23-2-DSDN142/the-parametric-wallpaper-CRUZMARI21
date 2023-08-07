
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
  
fill('black');
noStroke();
ellipse(67, 67, 20, 20);
ellipse(83, 67, 20, 20);
triangle(91, 73, 75, 95, 59, 73);

}






















