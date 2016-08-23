# about

### what
- an ever-growing list of things I'm saving for later reference
- all generally related to graphic design

### why
- it's much more readable and organized in the format of a website as opposed to a raw markdown doc
- sharing is cool


# summary
- built with [Jekyll](https://jekyllrb.com/)
- automated with [Gulp](http://gulpjs.com/) ([see gulpfile](https://github.com/jckfa/silly.graphics/blob/master/gulpfile.js))
- styled with [cssnext](http://cssnext.io/)
- running on [Nginx](http://nginx.org/) ([see configuration](https://github.com/jckfa/nginx-config/blob/master/sites-available/silly.graphics))
- hosted on [Digital Ocean](https://www.digitalocean.com/)
- Encrypted with [Let's Encrypt](https://letsencrypt.org/)


### deploying
Instead of pushing source files to my server and building there, I build on my development machine and push from _site. And I have a gulp task (deploy) to automate this.

### compatibility
- show/hide functionality on mobile requires [classList](http://caniuse.com/#search=classlist)
- relies on [vh](http://caniuse.com/#search=vh) and [flexbox](http://caniuse.com/#search=flex) for the text bordering the window
- only uses [woff](http://caniuse.com/#search=woff) and [woff2](http://caniuse.com/#search=woff2) for webfonts
- exclusively [TLSv1.2](https://github.com/jckfa/nginx-config/blob/master/conf.d/directive-only/tls.conf) (>IE10, Android 4.3)
