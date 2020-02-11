$('#dino-nest').on('mousemove', function (eventObj) {
  var centerpoint = $('#dino-nest').outerWidth()/2;
  if (eventObj.clientX < centerpoint) {
    $('#egg-big').addClass('move-right');
    $('#egg-big').removeClass('move-left');
  } else {
    $('#egg-big').addClass('move-left');
    $('#egg-big').removeClass('move-right');
  }
});
