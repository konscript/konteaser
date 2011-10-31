(function() {
  var kon;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  kon = {
    h: '#hammer',
    opt: {
      lineStep: 4,
      lineFadeSpeed: 400,
      lineMoveSpeed: 100,
      lineTypingTime: 20,
      underscoreSpeed: 1000,
      moveDistance: '35px'
    },
    finished: false,
    init: function() {
      this.drop();
      return this.hammer();
    },
    drop: function() {
      $('#subbar, #main .wrap').css({
        opacity: 0,
        top: '-=' + this.opt.moveDistance
      });
      $('#subbar .blaster').animate({
        opacity: 1,
        top: '+=' + this.opt.moveDistance
      }, 1500);
      return $('#subbar').animate({
        opacity: 1,
        top: '+=' + this.opt.moveDistance
      }, 1500, __bind(function() {
        $('#main .wrap').animate({
          opacity: 1,
          top: '+=' + this.opt.moveDistance
        }, 1500);
      }, this));
    },
    hammer: function() {
      console.log('animating term');
      return $(this.h + ' .underscore').show().pulse({
        opacity: [0.99, 0]
      }, {
        times: 2,
        duration: this.opt.underscoreSpeed,
        complete: __bind(function() {
          $(this.h + ' .first').fadeIn(this.opt.lineFadeSpeed);
          return $(this.h + ' .first').fancyTypewriter({
            type: true,
            steps: this.opt.lineSteps,
            timeBetweenSteps: this.opt.lineTypingTime,
            underScore: true,
            'mouseOver': false,
            callback: __bind(function() {
              $(this.h).animate({
                bottom: '+=' + this.opt.moveDistance
              }, this.opt.lineMoveSpeed);
              $(this.h + ' .second').fadeIn(this.opt.lineFadeSpeed);
              return $(this.h + ' .second').fancyTypewriter({
                type: true,
                steps: this.opt.lineSteps,
                timeBetweenSteps: this.opt.lineTypingTime,
                underScore: true,
                'mouseOver': false,
                callback: __bind(function() {
                  $(this.h).animate({
                    bottom: '+=' + this.opt.moveDistance
                  }, this.opt.lineMoveSpeed);
                  $(this.h + ' .third').fadeIn(this.opt.lineFadeSpeed);
                  return $(this.h + ' .third').fancyTypewriter({
                    type: true,
                    steps: this.opt.lineSteps,
                    timeBetweenSteps: this.opt.lineTypingTime,
                    underScore: true,
                    'mouseOver': false,
                    callback: __bind(function() {
                      $(this.h + ' .underscore').css({
                        opacity: 1
                      });
                      console.log('finished typing, pulsing underscore');
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
                    }, this)
                  });
                }, this)
              });
            }, this)
          });
        }, this)
      });
    }
  };
  kon.init();
}).call(this);
