jQuery(document).ready ($) ->
	kon = {
		h: '#header'
		opt: {
			lineStep: 1
			lineFadeSpeed: 400
			lineMoveSpeed: 100
			lineTypingTime: 40
			underscoreSpeed: 750
			moveDistance: '0px' }
		finished: false
		init: ->
			@drop()
			@hammer()
		drop: ->
			$('#header').animate { opacity:1, marginTop:'+='+@opt.moveDistance }, 500, =>
				$('#content').animate { opacity:0.99, marginTop:'+='+@opt.moveDistance }, 500
				return
			return 
		hammer: ->
			$(@h+' .underscore').show().pulse { opacity:[0.99,0] }, { times:42, duration:@opt.underscoreSpeed, complete: =>
				setTimeout( => 
					$(@h+' .underscore').stop().fadeTo 'slow', 0.99 
				, 10)
				@finished = true
				console.log 'stopped animating term'
				return 
			}
	}
	kon.init()