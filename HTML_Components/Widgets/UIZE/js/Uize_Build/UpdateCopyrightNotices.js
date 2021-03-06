/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.UpdateCopyrightNotices.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.UpdateCopyrightNotices',required:'Uize.Build.Util',builder:function(){'use strict';var _a=function(){};var _b=/\(c\)\s*\d{4}(?:\s*-\s*(\d{4}))?/i,_c=/(-\s*)(\d{4})/;_a.perform=function(_d){var _e=(new Date).getFullYear();Uize.Build.Util.buildFiles(Uize.copyInto({targetFolderPathCreator:function(_f){return _f;},targetFilenameCreator:function(_g){return/\.(js|jst)$/.test(_g)?_g:null;},fileBuilder:function(_g,_h){var _i=_h.match(_b);if(_i){var _j=_i[0];if(_j=='(c)'+_e){_i=null;}else{var _k=_j.match(_c),_l=_k?_j.replace(_c,'$1'+_e):_j+'-'+_e,_m=_h.replace(_j,_l);}}return(_i&&_m!=_h?{outputText:_m,logDetails:'\t\tCopyright Notice Updated:\n'+'\t\t\tWAS: '+_j+'\n'+'\t\t\tNOW: '+_l+'\n'}:{logDetails:'\t\tFILE ALREADY OK\n'});}},_d,{alwaysBuild:true}));};return _a;}});