'use strict';

var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '585',
    width: '960',
    videoId: 'a1Y73sPHKxw',
    playerVars: {
      loop: '1'
    }
  });
}

jQuery(document).ready(function($) {

  var regex = /^\s?(https?:\/\/)?(www.)?(youtube.com)?(\/watch\?v=)?([a-zA-Z0-9_-]{11})\s?$/;
  var $url = $('#url');
  var $invalid = $('#invalid');

  $('#videoId').on('submit', function(e) {
    e.preventDefault();
    $invalid.hide();

    var val = $url.val();
    var res = regex.exec(val);
    if (res) {
      var videoId = res[5];
      player.loadVideoById(videoId);
    } else {
      // Invalid value
      $invalid.find('span').text(val);
      $invalid.show();
    }
    return false;
  });

});
