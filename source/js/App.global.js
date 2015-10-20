// Setup App namespace
var App = App || {};

// Load scripts
/* ------------------------------------------------------------ */
var scripts = [
	{jquery: 		"js/vendor/jquery-2.1.4.min.js"},
	{localforage: 	"js/vendor/localforage.min.js"}
];


// Globals
/* ------------------------------------------------------------ */

var event_down, 
	event_move, 
	event_release, 
	transition = "transitionend webkitTransitionEnd",
	animation = "animationend webkitAnimationEnd";


