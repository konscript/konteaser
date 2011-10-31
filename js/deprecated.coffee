kon = {
	h: '#hammer'
	opt: {
		lineStep: 4
		lineFadeSpeed: 400
		lineMoveSpeed: 100
		lineTypingTime: 20
		underscoreSpeed: 1000
		moveDistance: '35px'
	}
	finished: false
	init: ->
		@drop()
		@hammer()
	drop: ->
		$('#subbar, #main .wrap').css { opacity:0, top:'-='+@opt.moveDistance }
		$('#subbar .blaster').animate { opacity:1, top:'+='+@opt.moveDistance }, 1500
		$('#subbar').animate { opacity:1, top:'+='+@opt.moveDistance }, 1500, =>
			$('#main .wrap').animate { opacity:1, top:'+='+@opt.moveDistance }, 1500
			return 
	hammer: ->
		console.log 'animating term'
		$(@h+' .underscore').show().pulse { opacity:[0.99, 0] }, { times:2, duration:@opt.underscoreSpeed, complete: =>
			$(@h+' .first').fadeIn @opt.lineFadeSpeed
			$(@h+' .first').fancyTypewriter { type:true, steps:@opt.lineSteps, timeBetweenSteps:@opt.lineTypingTime, underScore:true, 'mouseOver': false, callback: =>
				$(@h).animate { bottom:'+='+@opt.moveDistance }, @opt.lineMoveSpeed
				$(@h+' .second').fadeIn @opt.lineFadeSpeed
				$(@h+' .second').fancyTypewriter { type:true, steps:@opt.lineSteps, timeBetweenSteps:@opt.lineTypingTime, underScore:true, 'mouseOver': false, callback: =>
					$(@h).animate { bottom:'+='+@opt.moveDistance }, @opt.lineMoveSpeed
					$(@h+' .third').fadeIn @opt.lineFadeSpeed
					$(@h+' .third').fancyTypewriter { type:true, steps:@opt.lineSteps, timeBetweenSteps:@opt.lineTypingTime, underScore:true, 'mouseOver': false, callback: =>
						$(@h+' .underscore').css { opacity:1 }
						console.log 'finished typing, pulsing underscore'
						$(@h+' .underscore').show().pulse { opacity:[0.99,0] }, { times:42, duration:@opt.underscoreSpeed, complete: =>
								setTimeout( => 
									$(@h+' .underscore').stop().fadeTo 'slow', 0.99 
								, 10)
								@finished = true
								console.log 'stopped animating term'
								return 
						}							
					}
				}
			}
		}
}

#$ ->
kon.init()
	
	