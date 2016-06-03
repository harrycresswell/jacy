# Jacy - Jekyll/Macy

#### Version 1.0

Jacy is a simple Jekyll starter theme, it uses [Macy.js](http://macyjs.com/), the lightweight, dependency-free, masonry layout to populate the posts.

 It's built on top of my [jekyll starter](https://github.com/harrycresswell/jekyll-gulp-starter.git) theme, which uses Gulp as the build tool.

Features:
- [Macy](http://macyjs.com/)
- [Gulp](http://gulpjs.com/)
- [BrowserSync](http://www.browsersync.io/) for live browser reloading
- Gulp-Sass
- Autoprefixer
- some other stuff

## Getting started

### Install pre-requisites

- Xcode command line utilities `xcode-select --install`
- [Homebrew](http://brew.sh/)
- [Node.js](http://nodejs.org/) `brew install node`
- [Gulp](http://gulpjs.com/) `npm install -g gulp`
- [Ruby](https://www.ruby-lang.org/en/) `brew install ruby`
- [Jekyll](http://jekyllrb.com/) `gem install jekyll`

### Setup
```
git clone https://github.com/harrycresswell/jacy.git
cd jacy
npm install
```
Then run `gulp` in the terminal


### Adding Comments

- Create an account at [Disqus](https://disqus.com/) .
- [Install](https://disqus.com/admin/create/) on a new site and follow setup instructions.
- In `_config.yml` update Disqus shortname and remove #.
- In `post.html` remove comments around `{% include disqus.html %}` and add `comments: true` to the front matter. Comments should now load automatically.
