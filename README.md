HeadStart
========

HeadStart is a HTML5 web/mobile template and workflow. Start here!

#### Project features

- Compiled using [Grunt](http://gruntjs.com/)
- Perfectly organised Javascript, automatically minimized and concatenated
- [Sass](http://sass-lang.com/)
- [Autoprefixer](https://github.com/ai/autoprefixer)
- Automatic notifications when Grunt tasks fail.
- [LiveReload](http://livereload.com/) of the browser when compiled ([Get the chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en))

#### Javascript features

- [jQuery](http://jquery.com/) is a fast, small, and feature-rich JavaScript library.
- [headjs](http://headjs.com/) loads scripts in parallel but execute in order.
- [transparency](http://leonidas.github.io/transparency/) is a minimal template engine. It maps JSON objects to DOM elements.
- [device.js](https://github.com/matthewhudson/device.js) device detection.
- Touch events ready to go e.g. `.on(event_down, function(){...});`


#### What it doesn't have

- A HTML precompiler to generate all your html files
- JS or HTML shorthand e.g. Jade, Coffeescript


Installation
========

#### Instantly

Go get [☀ HeadStart Instant](https://github.com/mulhoon/HeadStart/releases/tag/instant)


#### Or quick steps


1. Run Terminal and go to your projects directory

	`$ cd path/to/my/projects`

2. Clone [this](https://github.com/mulhoon/HeadStart.git) project into it

	`$ git clone https://github.com/mulhoon/HeadStart.git MyNewProject`

3. Install grunt (if you don't already have it)

	`$ npm install -g grunt-cli`

4. Install project dependencies and save them

	`$ npm install --save-dev` (sudo might be required)

5. Run Grunt

	`$ grunt`

Now you can view the public folder on your local webserver (e.g. [MAMP](http://www.mamp.info/)).<br/> Tip: quit Grunt using Ctrl+C


Guide
========

- Keep code separate in their uses. e.g App.view.js only contains script for changing the view, App.api.js only controls script for talking to an API etc..
- Keep all script settings at the top of your code
- Add plugins and to public/js/vendor/ and reference them in App.global.js (no need to put them in your head tag) 
- Use `$(".mydiv").render(data);` to populate html with data from an object (as long as the obj keys match the id/class in .mydiv)
- Don't edit public/js or public/css

Disclaimer
========

There are many approaches to building web projects. This is intended as a *simple* boilerplate and is a great way to get started if you are new to Grunt. It can easily be extended for bigger projects.

If you need help with Git via Terminal [try this](http://shaun.boyblack.co.za/blog/2009/03/14/getting-started-with-git-on-mac-os-x/)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mulhoon/headstart/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

