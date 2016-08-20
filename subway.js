window.onload = function() {
  console.log("sup tho!");

  // set starting positions for all layers
  var layerOne = $('#layer_one');
  var layerOnePos = layerOne.position().top;
  $(layerOne).css('top', layerOnePos - 80);

  var layerTwo = $('#layer_two');
  var layerTwoPos = layerTwo.position().top;
  $(layerTwo).css('top', layerTwoPos - 40);

  var layerThree = $('#layer_three');
  var layerThreePos = layerThree.position().top;
  $(layerThree).css('top', layerThreePos - 20);

  var layerFour = $('#layer_four');
  var layerFourPos = layerFour.position().top;
  $(layerFour).css('top', layerFourPos - 10);

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
      var layerOneOffset = (ypos/layerOneSpeed);
      //scroll locks
      if (layerOneOffset >= 160) {
        layerOneOffset = 160;
        // console.log(ypos/layerOneSpeed);
      }
      $(layerOne).css('top', layerOnePos + layerOneOffset);

      var layerTwoSpeed = 500/40;
      var layerTwoOffset = (ypos/layerTwoSpeed);
      if (layerTwoOffset >= 80) { layerTwoOffset = 80 };
      $(layerTwo).css('top', layerTwoPos + layerTwoOffset);

      var layerThreeSpeed = 500/15;
      var layerThreeOffset = (ypos/layerThreeSpeed);
      if (layerThreeOffset >= 30) { layerThreeOffset = 30 };
      $(layerThree).css('top', layerThreePos + layerThreeOffset);

      var layerFourSpeed = 500/10;
      var layerFourOffset = (ypos/layerFourSpeed);
      if (layerFourOffset >= 20) { layerFourOffset = 20 };
      $(layerFour).css('top', layerFourPos + layerFourOffset);

  });

};
