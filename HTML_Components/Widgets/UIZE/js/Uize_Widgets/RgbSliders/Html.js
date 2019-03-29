/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.RgbSliders.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.RgbSliders.Html',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];var _b=this,_c=input.sliderHeight!=undefined?input.sliderHeight:286;function _d(_e){return('<td style="height:'+_c+'px;">'+_b.childHtml({name:'slider'+_e,size:input.size,trackLength:'100%'})+'</td>');}
output.push('\n<table id="',input.idPrefix,'" class="',_b.rootNodeCssClasses(),'">\n	<tr>\n		<td colspan="5">\n			<div id="',input.idPrefix,'-swatch" colspan="5" class="',_b.cssClass('swatch'),'">&nbsp;</div>\n		</td>\n	</tr>\n	<tr>\n		<td colspan="5" class="',this.cssClass('verticalSpacer'),'"></td>\n	</tr>\n	<tr>\n		',_d('R'),'\n		<td class="',this.cssClass('horizontalSpacer'),'"></td>\n		',_d('G'),'\n		<td class="',this.cssClass('horizontalSpacer'),'"></td>\n		',_d('B'),'\n	</tr>\n	<tr>\n		<td colspan="5" class="',this.cssClass('verticalSpacer'),'"></td>\n	</tr>\n	<tr>\n		<td><div class="',this.cssClass('sliderLabel'),'">R</div></td>\n		<td width="3"></td>\n		<td><div class="',this.cssClass('sliderLabel'),'">G</div></td>\n		<td width="3"></td>\n		<td><div class="',this.cssClass('sliderLabel'),'">B</div></td>\n	</tr>\n</table>\n\n');return output.join('');};_a.input={};return _a;}});