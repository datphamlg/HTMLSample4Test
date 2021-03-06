/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.NeatenJsFiles.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.NeatenJsFiles',required:['Uize.Build.Util','Uize.String.Lines','Uize.Build.AutoScruncher'],builder:function(){'use strict';var _a=function(){};_a.perform=function(_b){Uize.Build.Util.buildFiles(Uize.copyInto({targetFolderPathCreator:function(_c){return _c;},targetFilenameCreator:function(_d){return/\.js$/.test(_d)?_d:null;},fileBuilder:function(_d,_e){var _f=Uize.String.Lines.trimRight(_e);return(_f!=_e?{outputText:_f,logDetails:'\t\tTrailing Whitespace Characters Removed: '+(_e.length-_f.length)+'\n'}:{logDetails:'\t\tFILE ALREADY OK\n'});}},_b,{alwaysBuild:true}));};return _a;}});