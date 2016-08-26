# about

### what
- an ever-growing list of things I'm saving for later reference
- all generally related to graphic design

### why
- it's much more readable and organized in the format of a website as opposed to a raw markdown doc
- sharing is cool


# summary
- built with [Jekyll][1]
- automated with [Gulp][2] ([see gulpfile][3])
- styled with [cssnext][4]
- running on [Nginx][5] ([see configuration][6])
- hosted on [Digital Ocean][7]
- encrypted with [Let's Encrypt][9] ([A+ SSL Labs score][8])
- ([see 100/100 PageSpeed score][10])


### deploying
Instead of pushing source files to my server and building there, I build on my development machine and push from `_site`. And I have a gulp task (deploy) to automate this.

### compatibility
- show/hide functionality on mobile requires [classList][11]
- relies on [vh][12] and [flexbox][13] for the text bordering the window
- only uses [woff][14] and [woff2][15] for webfonts
- exclusively [TLSv1.2][16] (>IE10, Android 4.3)


[1]: https://jekyllrb.com
[2]: http://gulpjs.com
[3]: https://github.com/jckfa/silly.graphics/blob/master/gulpfile.js
[4]: http://cssnext.io
[5]: http://nginx.org
[6]: https://github.com/jckfa/nginx-config/blob/master/sites-available/silly.graphics
[7]: https://www.digitalocean.com
[8]: https://www.ssllabs.com/ssltest/analyze.html?d=silly.graphics&latest
[9]: https://letsencrypt.org
[10]: https://developers.google.com/speed/pagespeed/insights/?url=silly.graphics&tab=mobile

[11]: http://caniuse.com/#search=classlist
[12]: http://caniuse.com/#search=vh
[13]: http://caniuse.com/#search=flex
[14]: http://caniuse.com/#search=woff
[15]: http://caniuse.com/#search=woff2
[16]: https://github.com/jckfa/nginx-config/blob/master/conf.d/directive-only/tls.conf
