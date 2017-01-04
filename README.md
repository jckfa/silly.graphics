# Silly Graphics
a glorified list of hyperlinks

### SUMMARY
- built with [jekyll][1]
- styled with [cssnext][4]
- automated with [gulp][2] ([see gulpfile][3])
- served with [nginx][5] ([see configuration][6])
- hosted with [digital ocean][7]
- registered with [iwantmyname][17]
- encrypted with [let's encrypt][9] ([see a+ ssl labs score][8])
- speed-tested with [pagespeed][10]

### INSTALLATION

#### pros
1. `git clone`
2. `bundle install`
3. `npm install`
4. `gulp`

#### joes
1. install [homebrew][19]
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

2. install [git][20]
`brew install git`

3. clone repo
`git clone https://github.com/jckfa/silly.graphics.git`

4. install [bundler][21]
`gem install bundler`

5. install gems
`bundle install`

6. install [node][22]
`brew install node`

7. install dependencies
`npm install`

8. serve site
`gulp`

### DEPLOYING
- i use a simple [post-receive hook][18] to deploy from `_site` to my remote server
- automated with the `deploy` gulp task ([see bottom of gulpfile][3])

### BROWSER SUPPORT
- js uses [classList][11]
- [flexbox][13]
- only uses [woff][14] and [woff2][15] for webfonts
- exclusively [tls v1.2][16] (>ie10, android 4.3)

unless you're running some old browser, everything should render fine


[1]: https://jekyllrb.com
[2]: http://gulpjs.com
[3]: https://github.com/jckfa/silly.graphics/blob/master/gulpfile.js
[4]: http://cssnext.io
[5]: http://nginx.org
[6]: https://github.com/jckfa/nginx-config/blob/master/sites-available/silly.graphics
[7]: https://m.do.co/c/b09c1fce4b40
[8]: https://www.ssllabs.com/ssltest/analyze.html?d=silly.graphics&latest
[9]: https://letsencrypt.org
[10]: https://developers.google.com/speed/pagespeed/insights/?url=silly.graphics&tab=mobile
[11]: http://caniuse.com/#search=classlist
[13]: http://caniuse.com/#search=flex
[14]: http://caniuse.com/#search=woff
[15]: http://caniuse.com/#search=woff2
[16]: https://github.com/jckfa/nginx-config/blob/master/conf.d/directive-only/tls.conf
[17]: https://iwantmyname.com
[18]: https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps
[19]: http://brew.sh/
[20]: https://git-scm.com/
[21]: https://bundler.io/
[22]: https://nodejs.org/en/
