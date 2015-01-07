(function (window, jQuery) {
  'use strict';

  var tag = document.createElement('script');
  tag.src = "//www.youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
      height: '585',
      width: '960',
      videoId: 'a1Y73sPHKxw',
      playerVars: {
        loop: '1'
      },
      events: {
        onReady: onReady
      }
    });

    function onReady() {
      var playVideo;

      // Add listeners and load eventual video from hash when player is ready.
      jQuery(document).ready(function($) {
        var regex = /^\s?(https?:\/\/)?(www.)?(youtube.com)?(\/watch\?v=)?([a-zA-Z0-9_-]{11})\s?$/;
        var $url = $('#url');
        var $invalid = $('#invalid');
        
        playVideo = function (video_id) {
          $invalid.hide();
          var val = video_id || $url.val();
          var res = regex.exec(val);
          if (res) {
            var videoId = res[5];
            player.loadVideoById(videoId);
            window.location.hash = videoId;
          } else {
            // Invalid value
            $invalid.find('span').text(val);
            $invalid.show();
          }
        }

        $('#videoId').on('submit', function(e) {
          e.preventDefault();
          playVideo();
          return false;
        });

        if (window.location.hash) {
          playVideo(window.location.hash.slice(1));
        }
      });

      $(window).on('hashchange', function () {
        playVideo(window.location.hash.slice(1));
      });
    }
  }
})(window, jQuery);
