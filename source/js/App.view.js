App.view = (function () {

	var search, allResults, items, history, _history;

	var init = function(){
		console.log("All ready!");
		getHistory();
		search = $('#search');
		results = $('#results');
		sentence = $('#sentence');
		article = $('#article');
		history = $('.history');
		actions();
	};

	var actions = function(){
		search.on('input', function(){
			var val = search.val();
			if(val===""){
				results.html('');
				sentence.html('');
				return;
			}
			var data = {
				action:'opensearch',
				limit:5,
				search:val
			};

			App.api.get('wiki', data, function(results){
				allResults = results;
				showResults();
			});
		});
		$(window).on('keydown', function(e){
			if(e.keyCode === 40){ // down
				items.filter('.active').next().trigger(event_down);
				e.preventDefault();
				e.stopPropagation();
			}
			if(e.keyCode === 38){ // up
				items.filter('.active').prev().trigger(event_down);
				e.preventDefault();
				e.stopPropagation();
			}
			if(e.keyCode === 13){ // up
				showArticle();
				e.preventDefault();
				e.stopPropagation();
			}
		});
		history.on(event_release, function(e){
			toggleHistory();
			search.focus();
			e.preventDefault();
		});
		search.focus();
	};

	var showArticle = function(){
		var id = items.filter('.active').data().id;
		_history[1].unshift(allResults[1][id]);
		_history[2].unshift(allResults[2][id]);
		_history[3].unshift(allResults[3][id]);
		saveHistory();
		window.open(allResults[3][id]);
	};

	var showResults = function(){
		var html = "";
		$(allResults[1]).each(function(i,a){
			html += "<div class='item' data-id='"+i+"'>"+a+"</div>";
		});
		sentence.html('');
		results.html(html);
		items = results.find('.item');
		items.on(event_down, function(){
			if($(this).hasClass('active')){
				showArticle();
				return;
			}
			items.removeClass('active');
			$(this).addClass('active');
			var id = $(this).data().id;
			var link = allResults[3][id];
			sentence.html(allResults[2][id]+"<br/><a href='"+link+"'>"+link+"<a/> ↵");
		}).eq(0).trigger(event_down);
	};

	var getHistory = function(){
		localforage.getItem('wikiHasHistory', function(err, result){
			if(result===null){
				result = true;
			}
			history.text(result ? 'disable history' : 'enable history');
			if(result){
				localforage.getItem('wikiHistory', function(err, result){
					_history = result;
					if(_history instanceof Array){
						if(!_history.length){
							_history = null;
						}
					}
					if(!_history){
						_history = ["HISTORY", [], [], []];
					}

					allResults = _history;
					showResults();
				});
			}else{
				_history = ["HISTORY", [], [], []];
				saveHistory();
				sentence.html('');
				results.html('');
			}
		});

	};
	var saveHistory = function(){

		_history[1] = _history[1].slice(0, 5);
		_history[2] = _history[2].slice(0, 5);
		_history[3] = _history[3].slice(0, 5);
		localforage.setItem('wikiHistory', _history, function(err, result){
			// saved
		});
	};

	var toggleHistory = function(e){
		localforage.getItem('wikiHasHistory', function(err, result){
			if(!result){
				result = false;
			}
			localforage.setItem('wikiHasHistory', !result, function(err, result){
				getHistory();
			});
		});
	};

	return {
		init:init
	};

})();

