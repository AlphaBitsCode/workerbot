/* Copyright (C) 2023 by WorkerBot.AI */
!function(e){function o(o){var t=e.data(o,"combo").panel;if(t.is(":visible")){var n=t.combo("combo");a(n),n!=o&&e(o).combo("showPanel")}else{var i=e(o).closest("div.combo-p").children(".combo-panel");e("div.combo-panel:visible").not(t).not(i).panel("close"),e(o).combo("showPanel")}e(o).combo("textbox").focus()}function t(o){e(o).find(".combo-f").each((function(){var o=e(this).combo("panel");o.is(":visible")&&o.panel("close")}))}function n(o){var t=o.data.target,n=e(t),i=n.data("combo"),l=n.combo("options");switch(i.panel.panel("options").comboTarget=t,o.keyCode){case 38:l.keyHandler.up.call(t,o);break;case 40:l.keyHandler.down.call(t,o);break;case 37:l.keyHandler.left.call(t,o);break;case 39:l.keyHandler.right.call(t,o);break;case 13:return o.preventDefault(),l.keyHandler.enter.call(t,o),!1;case 9:case 27:a(t);break;default:l.editable&&(i.timer&&clearTimeout(i.timer),i.timer=setTimeout((function(){var e=n.combo("getText");i.previousText!=e&&(i.previousText=e,n.combo("showPanel"),l.keyHandler.query.call(t,e,o),n.combo("validate"))}),l.delay))}}function a(o){e.data(o,"combo").panel.panel("close")}function i(o){var t=e.data(o,"combo").options,n=e(o).next(),a=[];return n.find(".textbox-value").each((function(){a.push(e(this).val())})),t.multivalue?a:a.length?a[0].split(t.separator):a}function l(o,t){var n=e.data(o,"combo").combo,a=e(o).combo("options");e.isArray(t)||(t=t.split(a.separator));var l=i(o);if(n.find(".textbox-value").remove(),t.length)if(a.multivalue)for(var r=0;r<t.length;r++)c(t[r]);else c(t.join(a.separator));function c(t){var i=e(o).attr("textboxName")||"",l=e('<input type="hidden" class="textbox-value">').appendTo(n);l.attr("name",i),a.disabled&&l.attr("disabled","disabled"),l.val(t)}var s=function(){if(a.onChange==e.parser.emptyFn)return!1;if(l.length!=t.length)return!0;for(var o=0;o<t.length;o++)if(t[o]!=l[o])return!0;return!1}();s&&(e(o).val(t.join(a.separator)),a.multiple?a.onChange.call(o,t,l):a.onChange.call(o,t[0],l[0]),e(o).closest("form").trigger("_change",[o]))}function r(e,o){l(e,[o])}e((function(){e(document)._unbind(".combo")._bind("mousedown.combo mousewheel.combo",(function(o){var n=e(o.target).closest("span.combo,div.combo-p,div.menu");n.length?t(n):e("body>div.combo-p>div.combo-panel:visible").panel("close")}))})),e.fn.combo=function(n,a){if("string"==typeof n){var i=e.fn.combo.methods[n];return i?i(this,a):this.textbox(n,a)}return n=n||{},this.each((function(){var a,i,c,s=e.data(this,"combo");s?(e.extend(s.options,n),null!=n.value&&(s.options.originalValue=n.value)):(s=e.data(this,"combo",{options:e.extend({},e.fn.combo.defaults,e.fn.combo.parseOptions(this),n),previousText:""})).options.multiple&&""==s.options.value?s.options.originalValue=[]:s.options.originalValue=s.options.value,function(n){var a=e.data(n,"combo"),i=a.options;a.panel||(a.panel=e('<div class="combo-panel"></div>').appendTo("html>body"),a.panel.panel({minWidth:i.panelMinWidth,maxWidth:i.panelMaxWidth,minHeight:i.panelMinHeight,maxHeight:i.panelMaxHeight,doSize:!1,closed:!0,cls:"combo-p",style:{position:"absolute",zIndex:10},onOpen:function(){var o=e(this).panel("options").comboTarget,t=e.data(o,"combo");t&&t.options.onShowPanel.call(o)},onBeforeClose:function(){t(e(this).parent())},onClose:function(){var o=e(this).panel("options").comboTarget,t=e(o).data("combo");t&&t.options.onHidePanel.call(o)}}));var l=e.extend(!0,[],i.icons);for(var r in i.hasDownArrow&&l.push({iconCls:"combo-arrow",handler:function(e){o(e.data.target)}}),e(n).addClass("combo-f").textbox(e.extend({},i,{icons:l,onChange:function(){}})),e(n).attr("comboName",e(n).attr("textboxName")),a.combo=e(n).next(),a.combo.addClass("combo"),a.panel._unbind(".combo"),i.panelEvents)a.panel._bind(r+".combo",{target:n},i.panelEvents[r])}(this),a=this,i=e.data(a,"combo").options,c=i.onChange,i.onChange=e.parser.emptyFn,i.multiple?l(a,i.value?i.value:[]):r(a,i.value),i.onChange=c}))},e.fn.combo.methods={options:function(o){var t=o.textbox("options");return e.extend(e.data(o[0],"combo").options,{width:t.width,height:t.height,disabled:t.disabled,readonly:t.readonly,editable:t.editable})},cloneFrom:function(o,t){return o.each((function(){e(this).textbox("cloneFrom",t),e.data(this,"combo",{options:e.extend(!0,{cloned:!0},e(t).combo("options")),combo:e(this).next(),panel:e(t).combo("panel")}),e(this).addClass("combo-f").attr("comboName",e(this).attr("textboxName"))}))},combo:function(e){return e.closest(".combo-panel").panel("options").comboTarget},panel:function(o){return e.data(o[0],"combo").panel},destroy:function(o){return o.each((function(){var o,t,n,a;o=this,t=e.data(o,"combo"),n=t.options,(a=t.panel).is(":visible")&&a.panel("close"),n.cloned||a.panel("destroy"),e(o).textbox("destroy")}))},showPanel:function(o){return o.each((function(){!function(o){var t=e.data(o,"combo"),n=t.combo,a=t.panel,i=e(o).combo("options"),l=a.panel("options");function r(){var o=n.offset().left;return"right"==i.panelAlign&&(o+=n._outerWidth()-a._outerWidth()),o+a._outerWidth()>e(window)._outerWidth()+e(document).scrollLeft()&&(o=e(window)._outerWidth()+e(document).scrollLeft()-a._outerWidth()),o<0&&(o=0),o}function c(){if("top"==i.panelValign)var o=n.offset().top-a._outerHeight();else if("bottom"==i.panelValign)o=n.offset().top+n._outerHeight();else(o=n.offset().top+n._outerHeight())+a._outerHeight()>e(window)._outerHeight()+e(document).scrollTop()&&(o=n.offset().top-a._outerHeight()),o<e(document).scrollTop()&&(o=n.offset().top+n._outerHeight());return o}l.comboTarget=o,l.closed&&(a.panel("panel").show().css({zIndex:e.fn.menu?e.fn.menu.defaults.zIndex++:e.fn.window?e.fn.window.defaults.zIndex++:99,left:-999999}),a.panel("resize",{width:i.panelWidth?i.panelWidth:n._outerWidth(),height:i.panelHeight}),a.panel("panel").hide(),a.panel("open")),function e(){l.comboTarget==o&&a.is(":visible")&&(a.panel("move",{left:r(),top:c()}),setTimeout(e,200))}()}(this)}))},hidePanel:function(e){return e.each((function(){a(this)}))},clear:function(o){return o.each((function(){e(this).textbox("setText",""),e.data(this,"combo").options.multiple?e(this).combo("setValues",[]):e(this).combo("setValue","")}))},reset:function(o){return o.each((function(){var o=e.data(this,"combo").options;o.multiple?e(this).combo("setValues",o.originalValue):e(this).combo("setValue",o.originalValue)}))},setText:function(o,t){return o.each((function(){var o,n,a;o=this,n=t,a=e.data(o,"combo"),e(o).textbox("getText")!=n&&e(o).textbox("setText",n),a.previousText=n}))},getValues:function(e){return i(e[0])},setValues:function(e,o){return e.each((function(){l(this,o)}))},getValue:function(e){return i(e[0])[0]},setValue:function(e,o){return e.each((function(){r(this,o)}))}},e.fn.combo.parseOptions=function(o){var t=e(o);return e.extend({},e.fn.textbox.parseOptions(o),e.parser.parseOptions(o,["separator","panelAlign",{panelWidth:"number",hasDownArrow:"boolean",delay:"number",reversed:"boolean",multivalue:"boolean",selectOnNavigation:"boolean"},{panelMinWidth:"number",panelMaxWidth:"number",panelMinHeight:"number",panelMaxHeight:"number"}]),{panelHeight:"auto"==t.attr("panelHeight")?"auto":parseInt(t.attr("panelHeight"))||void 0,multiple:!!t.attr("multiple")||void 0})},e.fn.combo.defaults=e.extend({},e.fn.textbox.defaults,{inputEvents:{click:function(t){var n=t.data.target;if(e.data(n,"combo").options.editable){var i=e(n).closest("div.combo-p").children(".combo-panel");e("div.combo-panel:visible").not(i).each((function(){var o=e(this).combo("combo");o!=n&&a(o)}))}else o(n)},keydown:n,paste:n,drop:n,blur:function(o){var t=o.data.target,n=e(t).data("combo");n.timer&&clearTimeout(n.timer)}},panelEvents:{mousedown:function(e){e.preventDefault(),e.stopPropagation()}},panelWidth:null,panelHeight:300,panelMinWidth:null,panelMaxWidth:null,panelMinHeight:null,panelMaxHeight:null,panelAlign:"left",panelValign:"auto",reversed:!1,multiple:!1,multivalue:!0,selectOnNavigation:!0,separator:",",hasDownArrow:!0,delay:200,keyHandler:{up:function(e){},down:function(e){},left:function(e){},right:function(e){},enter:function(e){},query:function(e,o){}},onShowPanel:function(){},onHidePanel:function(){},onChange:function(e,o){}})}(jQuery);