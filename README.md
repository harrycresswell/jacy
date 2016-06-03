# jekyll-gulp-starter

#### Version 1.0

A jekyll starter kit using a gulp workflow

Features:
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
git clone https://github.com/harrycresswell/jekyll-gulp-starter.git
cd jekyll-gulp-starter
npm install
```
Then run `gulp` in the terminal


### Adding Comments

- Create an account at [Disqus](https://disqus.com/) .
- [Install](https://disqus.com/admin/create/) on a new site and follow setup instructions.
- In `_config.yml` update Disqus shortname and remove #.
- In `post.html` remove comments around `{% include disqus.html %}` and add `comments: true` to the front matter. Comments should now load automatically.
