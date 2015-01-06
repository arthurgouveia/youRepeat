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

  $('#videoId').on('submit', function(e) {
    e.preventDefault();
    player.loadVideoById($('#url').val());
    return false;
  });

});
