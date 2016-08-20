window.onload = function() {
  console.log("sup tho!");

  // set starting positions for all layers
  var layerOne = $('#layer_one');
  var layerOnePos = layerOne.position().top;
  $(layerOne).css('top', layerOnePos - 80);

  var layerTwo = $('#layer_two');
  var layerTwoPos = layerTwo.position().top;
  $(layerTwo).css('top', layerTwoPos - 30);

  var layerThree = $('#layer_three');
  var layerThreePos = layerThree.position().top;
  $(layerThree).css('top', layerThreePos - 15);

  var layerFour = $('#layer_four');
  var layerFourPos = layerFour.position().top;
  $(layerFour).css('top', layerFourPos - 5);

  //redefine layer postions
  layerOnePos = layerOne.position().top;
  layerTwoPos = layerTwo.position().top;
  layerThreePos = layerThree.position().top;
  layerFourPos = layerFour.position().top;

  //scrolling
  $(window).on('scroll', function() {
      //scroll triggers run these functions
      ypos = window.pageYOffset;
      // console.log(ypos,"scroll pos...");
      /*
        0 -> start pos
        500 -> mid
        1000 -> end
      */
      var layerOneSpeed = 500/80;
      // console.log(layerOnePos, "layer postion");
      $(layerOne).css('top', layerOnePos + (ypos/layerOneSpeed));
      // console.log(ypos/layerOneSpeed);
      var layerTwoSpeed = 500/30;
      $(layerTwo).css('top', layerTwoPos + (ypos/layerTwoSpeed));
      var layerThreeSpeed = 500/15;
      $(layerThree).css('top', layerThreePos + (ypos/layerThreeSpeed));
      var layerFourSpeed = 500/5;
      if (layerFourSpeed) {

      }
      $(layerFour).css('top', layerFourPos + (ypos/layerFourSpeed));

      //scroll locks

  });

};
