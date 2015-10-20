App.api = (function () {


	var xhr;
	var urls = {
		'wiki':'https://en.wikipedia.org/w/api.php'
		// related to type
	};

	var get = function(type, data, success, error){
		var url = urls[type];
		xhr = $.ajax({
			url:url,
			data: data,
			dataType: "jsonp",
			type: "GET",
			contentType: 'application/json',
			cache: false,
			timeout:15000,
			success: function (data) {
				if(success){success(data);}
			},
			error: function (data) {
				if(data.statusText==="timeout"){
					console.log("Connection timed out.");
				}else if(data.statusText!=="abort"){
					console.log("Connection error!");
				}
				if(error){error(data);}
			}
		});
	};

	var abort = function(type){
		if(xhr && xhr.readyState !== 4){
            xhr.abort();
        }

	};

	return {
		get:get,
		abort:abort
	};

})();

