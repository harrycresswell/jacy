---
layout: page
title: About
permalink: /about/
---
Jacy is a simple Jekyll starter theme, it uses [Macy.js](http://macyjs.com/), the lightweight, dependency-free, masonry layout to populate the posts.

It's built on top of my [jekyll starter](https://github.com/harrycresswell/jekyll-gulp-starter.git) theme, which uses Gulp as the build system.

I've tried to stick to Jekyll's base HTML architecture so it's familiar to existing jekyll users. The major difference is that the project now uses Gulp instead of jekyll's build tool. This allows for BrowserSync, Autoprefixer, Gulp-Sass and some other stuff. I've restructured the Sass folders and added modules which should make writing SASS a lot easier. I've also added [Sanitize.css](https://10up.github.io/sanitize.css/) as a more robust reset. If you want to get into building out the UI elements make sure you update the `@import` in `main.scss`. I've done a quick example for `button.scss` to get you up and running.

You can use this as a starting point or as is, it's totally up to you. To customize the theme further, as well as basic Jekyll usage documentation check out [jekyllrb.com](http://jekyllrb.com/)

You can find the source code & usage instructions for this Jekyll theme at:
{% include icon-github.html username="harrycresswell" %} /
[jekyll-gulp-starter](https://github.com/harrycresswell/jacy)

You can find the source code for Jekyll at
{% include icon-github.html username="jekyll" %} /
[jekyll](https://github.com/jekyll/jekyll)
