(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  jQuery(document).ready(function($) {
    var kon;
    kon = {
      h: '#header',
      opt: {
        lineStep: 1,
        lineFadeSpeed: 400,
        lineMoveSpeed: 100,
        lineTypingTime: 40,
        underscoreSpeed: 750,
        moveDistance: '0px'
      },
      finished: false,
      init: function() {
        this.drop();
        return this.hammer();
      },
      drop: function() {
        $('#header').animate({
          opacity: 1,
          marginTop: '+=' + this.opt.moveDistance
        }, 500, __bind(function() {
          $('#content').animate({
            opacity: 0.99,
            marginTop: '+=' + this.opt.moveDistance
          }, 500);
        }, this));
      },
      hammer: function() {
        return $(this.h + ' .underscore').show().pulse({
          opacity: [0.99, 0]
        }, {
          times: 42,
          duration: this.opt.underscoreSpeed,
          complete: __bind(function() {
            setTimeout(__bind(function() {
              return $(this.h + ' .underscore').stop().fadeTo('slow', 0.99);
            }, this), 10);
            this.finished = true;
            console.log('stopped animating term');
          }, this)
        });
      }
    };
    return kon.init();
  });
}).call(this);
