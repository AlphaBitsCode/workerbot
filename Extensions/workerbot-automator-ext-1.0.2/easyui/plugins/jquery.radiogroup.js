/* Copyright (C) 2023 by WorkerBot.AI */
!function(a){var t=1;a.fn.radiogroup=function(o,i){return"string"==typeof o?a.fn.radiogroup.methods[o](this,i):(o=o||{},this.each((function(){var i=a.data(this,"radiogroup");i?a.extend(i.options,o):i=a.data(this,"radiogroup",{options:a.extend({},a.fn.radiogroup.defaults,a.fn.radiogroup.parseOptions(this),o)}),function(o){var i=(l=a.data(o,"radiogroup")).options;a(o).addClass("radiogroup").empty();var n=a("<div></div>").appendTo(o);"h"==i.dir?(n.addClass("f-row"),n.css("flex-wrap","wrap")):n.addClass("f-column");for(var e=i.name||"radioname"+t++,r=0;r<i.data.length;r++){var d=a('<div class="radiogroup-item f-row f-vcenter f-noshrink"></div>').appendTo(n);i.itemStyle&&d.css(i.itemStyle);var l,u=a("<input>").attr("name",e).appendTo(d);u.radiobutton(a.extend({},{labelWidth:i.labelWidth,labelPosition:i.labelPosition,labelAlign:i.labelAlign},i.data[r],{checked:i.data[r].value==i.value,item:i.data[r],onChange:function(){n.find(".radiobutton-f").each((function(){var t=a(this).radiobutton("options");t.checked&&(i.value=t.item.value,i.onChange.call(o,t.item.value))}))}})),"auto"==(l=u.data("radiobutton")).options.labelWidth&&a(l.label).css("width","auto")}}(this)})))},a.fn.radiogroup.methods={options:function(a){return a.data("radiogroup").options},setValue:function(t,o){return t.each((function(){var t;t=o,a(this).find(".radiobutton-f").each((function(){a(this).radiobutton("options").item.value==t&&a(this).radiobutton("check")}))}))},getValue:function(a){return a.radiogroup("options").value}},a.fn.radiogroup.parseOptions=function(t){return a.extend({},a.parser.parseOptions(t,["dir","name","value","labelPosition","labelAlign",{labelWidth:"number"}]))},a.fn.radiogroup.defaults={dir:"h",name:null,value:null,labelWidth:"",labelPosition:"after",labelAlign:"left",itemStyle:{height:30},onChange:function(a){}}}(jQuery);