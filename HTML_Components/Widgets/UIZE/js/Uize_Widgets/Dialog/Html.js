/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Dialog.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Dialog.Html',required:['Uize.Widgets.Button.Widget'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];
output.push('<div id="',input.idPrefix,'-shield" class="',this.cssClass('shield'),'"></div>\n\n<div id="',input.idPrefix,'" class="',this.rootNodeCssClasses(),'">\n	<div class="',this.cssClass('shadow4'),'"></div>\n	<div class="',this.cssClass('shadow3'),'"></div>\n	<div class="',this.cssClass('shadow2'),'"></div>\n	<div class="',this.cssClass('shadow'),'"></div>\n	<div class="',this.cssClass('decoration'),'"></div>\n\n	<!-- sides -->\n		<div id="',input.idPrefix,'_resizer-west" class="',this.cssClass('cornerEastWest'),' ',this.cssClass('edgeWest'),'"></div>\n		<div id="',input.idPrefix,'_resizer-east" class="',this.cssClass('cornerEastWest'),' ',this.cssClass('edgeEast'),'"></div>\n		<div id="',input.idPrefix,'_resizer-north" class="',this.cssClass('cornerNorthSouth'),' ',this.cssClass('edgeNorth'),'"></div>\n		<div id="',input.idPrefix,'_resizer-south" class="',this.cssClass('cornerNorthSouth'),' ',this.cssClass('edgeSouth'),'"></div>\n\n	<!-- corners -->\n		<div id="',input.idPrefix,'_resizer-northWest" class="',this.cssClass('cornerCorner'),' ',this.cssClass('edgeWest'),' ',this.cssClass('edgeNorth'),'"></div>\n		<div id="',input.idPrefix,'_resizer-northEast" class="',this.cssClass('cornerCorner'),' ',this.cssClass('edgeEast'),' ',this.cssClass('edgeNorth'),'"></div>\n		<div id="',input.idPrefix,'_resizer-southWest" class="',this.cssClass('cornerCorner'),' ',this.cssClass('edgeWest'),' ',this.cssClass('edgeSouth'),'"></div>\n		<div id="',input.idPrefix,'_resizer-southEast" class="',this.cssClass('cornerCorner'),' ',this.cssClass('edgeEast'),' ',this.cssClass('edgeSouth'),'"></div>\n\n	<!-- title bar -->\n		<div class="',this.cssClass('bar'),' ',this.cssClass('titleBar'),'">\n			',input.topLeftButtons,'\n			<div id="',input.idPrefix,'-title" class="',this.cssClass('title'),'"></div>\n			',this.childHtml({
name:'close',widgetClass:Uize.Widgets.Button.Widget,text:'X',size:'tiny'}),'\n		</div>\n\n	<!-- contents -->\n		<div id="',input.idPrefix,'-contents" class="',this.cssClass('contents'),'">\n			',input.contents,'\n		</div>\n\n	<!-- status bar -->\n		<div class="',this.cssClass('bar'),' ',this.cssClass('statusBar'),'">\n			<a id="',input.idPrefix,'_cancel" class="',this.cssClass('cancelButton'),' button"><span id="',input.idPrefix,'_cancel-text">CANCEL</span></a>\n			<a id="',input.idPrefix,'_ok" class="',this.cssClass('okButton'),' button"><span id="',input.idPrefix,'_ok-text">OK</span></a>\n		</div>\n</div>\n\n');return output.join('');};_a.input={idPrefix:'string',contents:'string',topLeftButtons:'string'};return _a;}});