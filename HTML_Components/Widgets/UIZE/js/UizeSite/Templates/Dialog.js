/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.Dialog.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Templates.Dialog',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];
output.push('\n<!-- dialog UI -->\n\n<div id="',input.idPrefix,'-shield" class="dialogShield"></div>\n\n<div id="',input.idPrefix,'" class="dialog ',input.dialogClass,'">\n	<div class="dialogShadow4"></div>\n	<div class="dialogShadow3"></div>\n	<div class="dialogShadow2"></div>\n	<div class="dialogShadow"></div>\n	<div class="dialogDecoration"></div>\n\n	<!-- sides -->\n		<div id="',input.idPrefix,'_resizer-west" class="dialogCornerEastWest dialogEdgeWest"></div>\n		<div id="',input.idPrefix,'_resizer-east" class="dialogCornerEastWest dialogEdgeEast"></div>\n		<div id="',input.idPrefix,'_resizer-north" class="dialogCornerNorthSouth dialogEdgeNorth"></div>\n		<div id="',input.idPrefix,'_resizer-south" class="dialogCornerNorthSouth dialogEdgeSouth"></div>\n\n	<!-- corners -->\n		<div id="',input.idPrefix,'_resizer-northWest" class="dialogCornerCorner dialogEdgeWest dialogEdgeNorth"></div>\n		<div id="',input.idPrefix,'_resizer-northEast" class="dialogCornerCorner dialogEdgeEast dialogEdgeNorth"></div>\n		<div id="',input.idPrefix,'_resizer-southWest" class="dialogCornerCorner dialogEdgeWest dialogEdgeSouth"></div>\n		<div id="',input.idPrefix,'_resizer-southEast" class="dialogCornerCorner dialogEdgeEast dialogEdgeSouth"></div>\n\n	<!-- title bar -->\n		<div class="dialogBar dialogTitleBar">\n			',input.topLeftButtons,'\n			<div id="',input.idPrefix,'-title" class="dialogTitle"></div>\n			<a id="',input.idPrefix,'_close" class="dialogCloseButton button">X</a>\n		</div>\n\n	<!-- contents -->\n		<div id="',input.idPrefix,'-contents" class="dialogContents">\n			',input.contents,'\n		</div>\n\n	<!-- status bar -->\n		<div class="dialogBar dialogStatusBar">\n			<a id="',input.idPrefix,'_cancel" class="dialogCancelButton button"><span id="',input.idPrefix,'_cancel-text">CANCEL</span></a>\n			<a id="',input.idPrefix,'_ok" class="dialogOkButton button"><span id="',input.idPrefix,'_ok-text">OK</span></a>\n		</div>\n</div>\n\n');
return output.join('');};_a.input={idPrefix:'string',contents:'string',dialogClass:'string'};return _a;}});