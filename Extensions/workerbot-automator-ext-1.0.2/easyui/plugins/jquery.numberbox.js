/* Copyright (C) 2023 by WorkerBot.AI */
!function(e){e.fn.numberbox=function(t,r){if("string"==typeof t){var n=e.fn.numberbox.methods[t];return n?n(this,r):this.textbox(t,r)}return t=t||{},this.each((function(){var r=e.data(this,"numberbox");r?e.extend(r.options,t):r=e.data(this,"numberbox",{options:e.extend({},e.fn.numberbox.defaults,e.fn.numberbox.parseOptions(this),t)}),function(t){var r=e.data(t,"numberbox"),n=r.options;e(t).addClass("numberbox-f").textbox(n),e(t).textbox("textbox").css({imeMode:"disabled"}),e(t).attr("numberboxName",e(t).attr("textboxName")),r.numberbox=e(t).next(),r.numberbox.addClass("numberbox");var o=n.parser.call(t,n.value),a=n.formatter.call(t,o);e(t).numberbox("initValue",o).numberbox("setText",a)}(this)}))},e.fn.numberbox.methods={options:function(t){var r=t.data("textbox")?t.textbox("options"):{};return e.extend(e.data(t[0],"numberbox").options,{width:r.width,originalValue:r.originalValue,disabled:r.disabled,readonly:r.readonly})},cloneFrom:function(t,r){return t.each((function(){e(this).textbox("cloneFrom",r),e.data(this,"numberbox",{options:e.extend(!0,{},e(r).numberbox("options"))}),e(this).addClass("numberbox-f")}))},fix:function(t){return t.each((function(){var t=e(this).numberbox("options");t.value=null;var r=t.parser.call(this,e(this).numberbox("getText"));e(this).numberbox("setValue",r)}))},setValue:function(t,r){return t.each((function(){!function(t,r){var n=e.data(t,"numberbox").options;n.value=parseFloat(r),r=n.parser.call(t,r);var o=n.formatter.call(t,r);n.value=r,e(t).textbox("setText",o).textbox("setValue",r),o=n.formatter.call(t,e(t).textbox("getValue")),e(t).textbox("setText",o)}(this,r)}))},clear:function(t){return t.each((function(){e(this).textbox("clear"),e(this).numberbox("options").value=""}))},reset:function(t){return t.each((function(){e(this).textbox("reset"),e(this).numberbox("setValue",e(this).numberbox("getValue"))}))}},e.fn.numberbox.parseOptions=function(t){var r=e(t);return e.extend({},e.fn.textbox.parseOptions(t),e.parser.parseOptions(t,["decimalSeparator","groupSeparator","suffix",{min:"number",max:"number",precision:"number"}]),{prefix:r.attr("prefix")?r.attr("prefix"):void 0})},e.fn.numberbox.defaults=e.extend({},e.fn.textbox.defaults,{inputEvents:{keypress:function(t){var r=t.data.target;return e(r).numberbox("options").filter.call(r,t)},blur:function(t){e(t.data.target).numberbox("fix")},keydown:function(t){13==t.keyCode&&e(t.data.target).numberbox("fix")}},min:null,max:null,precision:0,decimalSeparator:".",groupSeparator:"",prefix:"",suffix:"",filter:function(t){var r=e(this).numberbox("options"),n=e(this).numberbox("getText");if(t.metaKey||t.ctrlKey)return!0;if(e.inArray(String(t.which),["46","8","13","0"])>=0)return!0;var o=e("<span></span>");o.html(String.fromCharCode(t.which));var a=o.text();return o.remove(),!a||!("-"==a&&null!=r.min&&r.min>=0)&&("-"==a||a==r.decimalSeparator?-1==n.indexOf(a):a==r.groupSeparator||"0123456789".indexOf(a)>=0)},formatter:function(t){if(!t)return t;t+="";var r=e(this).numberbox("options"),n=t,o="",a=t.indexOf(".");if(a>=0&&(n=t.substring(0,a),o=t.substring(a+1,t.length)),r.groupSeparator)for(var i=/(\d+)(\d{3})/;i.test(n);)n=n.replace(i,"$1"+r.groupSeparator+"$2");return o?r.prefix+n+r.decimalSeparator+o+r.suffix:r.prefix+n+r.suffix},parser:function(t){t+="";var r=e(this).numberbox("options");r.prefix&&(t=e.trim(t.replace(new RegExp("\\"+e.trim(r.prefix),"g"),""))),r.suffix&&(t=e.trim(t.replace(new RegExp("\\"+e.trim(r.suffix),"g"),""))),parseFloat(t)!=r.value&&(r.groupSeparator&&(t=e.trim(t.replace(new RegExp("\\"+r.groupSeparator,"g"),""))),r.decimalSeparator&&(t=e.trim(t.replace(new RegExp("\\"+r.decimalSeparator,"g"),"."))),t=t.replace(/\s/g,""));var n=parseFloat(t).toFixed(r.precision);return isNaN(n)?n="":"number"==typeof r.min&&n<r.min?n=r.min.toFixed(r.precision):"number"==typeof r.max&&n>r.max&&(n=r.max.toFixed(r.precision)),n}})}(jQuery);