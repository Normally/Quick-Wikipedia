// GENERIC TOOLS
/* ------------------------------------------------------------ */

// Load scripts and initiate the app
var ready = function(){
	head.js.apply(window, scripts).ready('localforage', function(){
		App.view.init();
	});
};

if(!window.cordova){ 
	ready();
}else{ // if Cordova wait for device
    document.addEventListener("deviceready", ready, false);
}

// Disable Console if not available;
window.console = window.console || { log: function (d) {} };


event_down 		= "mousedown";
event_move 		= "mousemove";
event_release	= "mouseup";
