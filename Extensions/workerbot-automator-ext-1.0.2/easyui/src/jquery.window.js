/* Copyright (C) 2023 by WorkerBot.AI */
!function(o){function n(n,e){var i=o.data(n,"window");e&&(null!=e.left&&(i.options.left=e.left),null!=e.top&&(i.options.top=e.top)),o(n).panel("move",i.options),i.shadow&&i.shadow.css({left:i.options.left,top:i.options.top})}function e(e,i){var t=o.data(e,"window").options,d=o(e).window("panel"),a=d._outerWidth();if(t.inline){var s=d.parent();t.left=Math.ceil((s.width()-a)/2+s.scrollLeft())}else{var w=t.fixed?0:o(document).scrollLeft();t.left=Math.ceil((o(window)._outerWidth()-a)/2+w)}i&&n(e)}function i(e,i){var t=o.data(e,"window").options,d=o(e).window("panel"),a=d._outerHeight();if(t.inline){var s=d.parent();t.top=Math.ceil((s.height()-a)/2+s.scrollTop())}else{var w=t.fixed?0:o(document).scrollTop();t.top=Math.ceil((o(window)._outerHeight()-a)/2+w)}i&&n(e)}function t(n,e,i,t){var d=this,a=o.data(d,"window").options;if(!a.constrain)return{};if(o.isFunction(a.constrain))return a.constrain.call(d,n,e,i,t);var s=o(d).window("window"),w=a.inline?s.parent():o(window),l=a.fixed?0:w.scrollTop();return n<0&&(n=0),e<l&&(e=l),n+i>w.width()&&(i==s.outerWidth()?n=w.width()-i:i=w.width()-n),e-l+t>w.height()&&(t==s.outerHeight()?e=w.height()-t+l:t=w.height()-e+l),{left:n,top:e,width:i,height:t}}o((function(){o._positionFixed||o(window).resize((function(){o("body>.window-mask:visible").css({width:"",height:""}),setTimeout((function(){o("body>.window-mask:visible").css(o.fn.window.getMaskSize())}),50)}))})),o.fn.window=function(d,a){if("string"==typeof d){var s=o.fn.window.methods[d];return s?s(this,a):this.panel(d,a)}return d=d||{},this.each((function(){var a=o.data(this,"window");a?o.extend(a.options,d):(a=o.data(this,"window",{options:o.extend({},o.fn.window.defaults,o.fn.window.parseOptions(this),d)})).options.inline||document.body.appendChild(this),function(t){var d=o.data(t,"window"),a=d.options,s=o(t).panel(o.extend({},d.options,{border:!1,hasResized:!1,doSize:!0,closed:!0,cls:"window "+(a.border?"thin"==a.border?"window-thinborder ":"":"window-thinborder window-noborder ")+(a.cls||""),headerCls:"window-header "+(a.headerCls||""),bodyCls:"window-body "+(a.noheader?"window-body-noheader ":" ")+(a.bodyCls||""),onBeforeDestroy:function(){if(0==a.onBeforeDestroy.call(t))return!1;d.shadow&&d.shadow.remove(),d.mask&&d.mask.remove()},onClose:function(){d.shadow&&d.shadow.hide(),d.mask&&d.mask.hide(),a.onClose.call(t)},onOpen:function(){d.mask&&d.mask.css(o.extend({display:"block",zIndex:o.fn.window.defaults.zIndex++},o.fn.window.getMaskSize(t))),d.shadow&&d.shadow.css({display:"block",position:a.fixed?"fixed":"absolute",zIndex:o.fn.window.defaults.zIndex++,left:a.left,top:a.top,width:d.window._outerWidth(),height:d.window._outerHeight()}),d.window.css({position:a.fixed?"fixed":"absolute",zIndex:o.fn.window.defaults.zIndex++}),a.onOpen.call(t)},onResize:function(n,e){var i=o(this).panel("options");o.extend(a,{width:i.width,height:i.height,left:i.left,top:i.top}),d.shadow&&d.shadow.css({left:a.left,top:a.top,width:d.window._outerWidth(),height:d.window._outerHeight()}),a.onResize.call(t,n,e)},onMinimize:function(){d.shadow&&d.shadow.hide(),d.mask&&d.mask.hide(),d.options.onMinimize.call(t)},onBeforeCollapse:function(){if(0==a.onBeforeCollapse.call(t))return!1;d.shadow&&d.shadow.hide()},onExpand:function(){d.shadow&&d.shadow.show(),a.onExpand.call(t)}}));d.window=s.panel("panel"),d.mask&&d.mask.remove(),a.modal&&(d.mask=o('<div class="window-mask" style="display:none"></div>').insertAfter(d.window)),d.shadow&&d.shadow.remove(),a.shadow&&(d.shadow=o('<div class="window-shadow" style="display:none"></div>').insertAfter(d.window));var w=a.closed;null==a.left&&e(t),null==a.top&&i(t),n(t),w||s.window("open")}(this),function(n){var e=o.data(n,"window"),i=e.options;function d(n){e.window.css("position",i.fixed?"fixed":"absolute"),e.shadow&&e.shadow.css("position",i.fixed?"fixed":"absolute"),e.pmask&&e.pmask.remove(),e.pmask=o('<div class="window-proxy-mask"></div>').insertAfter(e.window),e.pmask.css({display:"none",position:i.fixed?"fixed":"absolute",zIndex:o.fn.window.defaults.zIndex++,left:n.data.left,top:n.data.top,width:e.window._outerWidth(),height:e.window._outerHeight()}),e.proxy&&e.proxy.remove(),e.proxy=o('<div class="window-proxy"></div>').insertAfter(e.window),e.proxy.css({display:"none",position:i.fixed?"fixed":"absolute",zIndex:o.fn.window.defaults.zIndex++,left:n.data.left,top:n.data.top}),e.proxy._outerWidth(n.data.width)._outerHeight(n.data.height),e.proxy.hide(),setTimeout((function(){e.pmask&&e.pmask.show(),e.proxy&&e.proxy.show()}),500)}function a(i){o.extend(i.data,t.call(n,i.data.left,i.data.top,i.data.width,i.data.height)),e.pmask.show(),e.proxy.css({display:"block",left:i.data.left,top:i.data.top}),e.proxy._outerWidth(i.data.width),e.proxy._outerHeight(i.data.height)}function s(d,a){e.window.css("position",i.fixed?"fixed":"absolute"),e.shadow&&e.shadow.css("position",i.fixed?"fixed":"absolute"),o.extend(d.data,t.call(n,d.data.left,d.data.top,d.data.width+.1,d.data.height+.1)),o(n).window(a,d.data),e.pmask.remove(),e.pmask=null,e.proxy.remove(),e.proxy=null}e.window.draggable({handle:">.panel-header>.panel-title",disabled:0==e.options.draggable,onBeforeDrag:function(n){e.mask&&e.mask.css("z-index",o.fn.window.defaults.zIndex++),e.shadow&&e.shadow.css("z-index",o.fn.window.defaults.zIndex++),e.window.css("z-index",o.fn.window.defaults.zIndex++)},onStartDrag:function(o){d(o)},onDrag:function(o){return a(o),!1},onStopDrag:function(o){s(o,"move")}}),e.window.resizable({disabled:0==e.options.resizable,onStartResize:function(o){d(o)},onResize:function(o){return a(o),!1},onStopResize:function(o){s(o,"resize")}})}(this)}))},o.fn.window.methods={options:function(n){var e=n.panel("options"),i=o.data(n[0],"window").options;return o.extend(i,{closed:e.closed,collapsed:e.collapsed,minimized:e.minimized,maximized:e.maximized})},window:function(n){return o.data(n[0],"window").window},move:function(o,e){return o.each((function(){n(this,e)}))},hcenter:function(o){return o.each((function(){e(this,!0)}))},vcenter:function(o){return o.each((function(){i(this,!0)}))},center:function(o){return o.each((function(){e(this),i(this),n(this)}))}},o.fn.window.getMaskSize=function(n){var e=o(n).data("window");return e&&e.options.inline?{}:o._positionFixed?{position:"fixed"}:{width:o(document).width(),height:o(document).height()}},o.fn.window.parseOptions=function(n){return o.extend({},o.fn.panel.parseOptions(n),o.parser.parseOptions(n,[{draggable:"boolean",resizable:"boolean",shadow:"boolean",modal:"boolean",inline:"boolean"}]))},o.fn.window.defaults=o.extend({},o.fn.panel.defaults,{zIndex:9e3,draggable:!0,resizable:!0,shadow:!0,modal:!1,border:!0,inline:!1,title:"New Window",collapsible:!0,minimizable:!0,maximizable:!0,closable:!0,closed:!1,fixed:!1,constrain:!1})}(jQuery);