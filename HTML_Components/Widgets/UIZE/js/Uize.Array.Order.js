/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Array.Order.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Array.Order',builder:function(){'use strict';var _a=function(){};function _b(){return Math.random()-.5}var _c=_a.reorder=function(_d,_e,_f){if(typeof _f!='object')_f=_f===false?_d:[];if(_f==_d&&(_e=='normal'||_e=='reverse'||_e=='jumbled')){_e=='reverse'?_d.reverse():_e=='jumbled'?_d.sort(_b):0;}else{if(_f==_d)_d=_d.concat();var _g=_d.length,_h=_g-1,_i;if(_e=='reverse'){_i=function(_j){return _h-_j};}else if(_e=='inside out'){var _k=_g%2,_l=Math.ceil(_h/2);_i=function(_j){return(_j%2==_k?_l-1-(_j>>1):_l+(_j>>1));};}else if(_e=='outside in'){_i=function(_j){return _j%2?_h-(_j>>1):_j>>1;};}else if(_e=='normal'){_i=Uize.returnX;}else{var _m=Uize.map(_g,'key').sort(_b);_i=function(_j){return _m[_j]};}for(var _n= -1;++_n<=_h;)_f[_n]=_d[_i(_n)];}return _f;};_a.insideOut=function(_o,_f){return _c(_o,'inside out',_f)};_a.jumble=function(_o,_f){return _c(_o,'jumbled',_f)};_a.outsideIn=function(_o,_f){return _c(_o,'outside in',_f)};_a.reverse=function(_o,_f){return _c(_o,'reverse',_f)};return _a;
}});