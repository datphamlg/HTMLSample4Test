/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Services.FileSystemAdapter.Node.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Services.FileSystemAdapter.Node',superclass:'Uize.Services.FileSystemAdapter',builder:function(d_a){'use strict';var d_b=undefined,d_c=true,d_d=false;var d_e=d_a.getParentFolderPath;return d_a.subclass({instanceMethods:{d_f:function(d_g,d_h){try{var d_i=this.d_j.statSync(d_g);return d_h==d_b|| !!(d_i.mode&(1<<14))==d_h;}catch(d_k){return d_d;}},d_l:function(d_g){var d_m=this,d_j=d_m.d_j;if(!d_m.d_f(d_g)){var d_n=d_g,d_o=[];while(d_n&& !d_m.d_f(d_n)){d_o.push(d_n);d_n=d_e(d_n);}for(var d_p=d_o.length;--d_p>=0;)d_j.mkdirSync(d_o[d_p],0x1ff);}},getItemsInFolder:function(d_q,d_h){var d_m=this,d_g=d_q.path,d_r=Uize.resolveMatcher(d_q.pathMatcher),d_s=Uize.resolveTransformer(d_q.pathTransformer),d_t=[],d_u=d_g.replace(/[\\\/]+$/g,'');d_u+=d_u&&'/';Uize.forEach(this.d_j.readdirSync(d_g),function(d_v){if(d_m.d_f(d_u+d_v,d_h)&&d_r(d_v))d_t.push(d_s(d_v));});return d_t;},copyFile:function(d_q,d_w){var d_m=this,d_x=d_q.targetPath;d_m.d_l(d_e(d_x));d_m.d_j.writeFileSync(d_x,
d_m.d_j.readFileSync(d_q.path));d_w();},deleteFile:function(d_q,d_w){d_w();},fileExists:function(d_q,d_w){d_w(this.d_f(d_q.path,d_d));},folderExists:function(d_q,d_w){d_w(this.d_f(d_q.path,d_c));},getModifiedDate:function(d_q,d_w){try{d_w(new Date(this.d_j.statSync(d_q.path).mtime));}catch(d_k){d_w(NaN);}},pathExists:function(d_q,d_w){d_w(this.d_f(d_q.path));},readFile:function(d_q,d_w){var d_j=this.d_j,d_g=d_q.path,d_y=d_q.encoding;d_w(d_y=='buffer'?d_j.readFileSync(d_g):d_j.readFileSync(d_g,d_y||'utf8'));},writeFile:function(d_q,d_w){var d_g=d_q.path;this.d_l(d_e(d_g));this.d_j.writeFileSync(d_g,d_q.contents,d_q.encoding||'utf8');d_w();},init:function(d_q,d_w){this.d_j=require('fs');d_w();}}});}});