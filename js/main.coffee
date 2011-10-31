jQuery(document).ready ($) ->
	kon = {
		h: '#header'
		finished: false
		init: ->
			@drop()
			@hammer()
		drop: ->
			$('#header').animate { opacity:1 }, 500, =>
				$('#content').animate { opacity:0.99 }, 500
				return
			return 
		hammer: ->
			$(@h+' .underscore').show().pulse { opacity:[0.99,0] }, { times:42, duration:750, complete: =>
				setTimeout( => 
					$(@h+' .underscore').stop().fadeTo 'slow', 0.99 
				, 10)
				@finished = true
				console.log 'stopped animating term'
				return 
			}
	}
	kon.init()