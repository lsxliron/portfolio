/*!
 * Bootstrap Grunt task for the CommonJS module generation
 * http://getbootstrap.com
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

var fs=require("fs"),path=require("path"),COMMONJS_BANNER="// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.\n";module.exports=function(t,n,r){function s(e){var t=path.relative(i,e).replace(/\\/g,"/");return"require('"+t+"')"}var i=path.dirname(r),o=COMMONJS_BANNER+n.map(s).join("\n");try{fs.writeFileSync(r,o)}catch(u){t.fail.warn(u)}t.log.writeln("File "+r.cyan+" created.")};