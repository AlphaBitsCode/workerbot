/* Copyright (C) 2023 by WorkerBot.AI */
!function(t){var a=t.extend({},t.fn.datagrid.defaults.view,{render:function(a,e,r){var s=t.data(a,"datagrid");if(s.options.groupField){var o=this.groupRows(a,s.data.rows);this.groups=o.groups,s.data.rows=o.rows;for(var n=[],i=0;i<o.groups.length;i++)n.push(this.renderGroup.call(this,a,i,o.groups[i],r));t(e).html(n.join(""))}else t(e).html(this.renderTable(a,0,s.data.rows,r))},renderGroup:function(a,e,r,s){var o=t.data(a,"datagrid").options,n=(t(a).datagrid("getColumnFields",s),[]);return n.push('<div class="datagrid-group" group-index='+e+">"),s||(n.push('<span class="datagrid-group-title">'),n.push(o.groupFormatter.call(a,r.value,r.rows)),n.push("</span>")),n.push("</div>"),n.push(this.renderTable(a,r.startIndex,r.rows,s)),n.join("")},groupRows:function(a,e){for(var r=t.data(a,"datagrid").options,s=[],o=0;o<e.length;o++){var n=e[o];(l=d(n[r.groupField]))?l.rows.push(n):(l={value:n[r.groupField],rows:[n]},s.push(l))}var i=0;for(e=[],o=0;o<s.length;o++){var l;(l=s[o]).startIndex=i,i+=l.rows.length,e=e.concat(l.rows)}return{groups:s,rows:e};function d(t){for(var a=0;a<s.length;a++){var e=s[a];if(e.value==t)return e}return null}}});t.fn.datalist=function(a,e){if("string"==typeof a){var r=t.fn.datalist.methods[a];return r?r(this,e):this.datagrid(a,e)}return a=a||{},this.each((function(){var e,r,s=t.data(this,"datalist");if(s)t.extend(s.options,a);else{var o=t.extend({},t.fn.datalist.defaults,t.fn.datalist.parseOptions(this),a);o.columns=t.extend(!0,[],o.columns),s=t.data(this,"datalist",{options:o})}if(e=this,r=t.data(e,"datalist").options,t(e).datagrid(t.extend({},r,{cls:"datalist"+(r.lines?" datalist-lines":""),frozenColumns:r.frozenColumns&&r.frozenColumns.length?r.frozenColumns:r.checkbox?[[{field:"_ck",checkbox:!0}]]:void 0,columns:r.columns&&r.columns.length?r.columns:[[{field:r.textField,width:"100%",formatter:function(t,a,e){return r.textFormatter?r.textFormatter(t,a,e):t}}]]})),!s.options.data){var n=t.fn.datalist.parseData(this);n.total&&t(this).datalist("loadData",n)}}))},t.fn.datalist.methods={options:function(a){return t.data(a[0],"datalist").options}},t.fn.datalist.parseOptions=function(a){return t.extend({},t.fn.datagrid.parseOptions(a),t.parser.parseOptions(a,["valueField","textField","groupField",{checkbox:"boolean",lines:"boolean"}]))},t.fn.datalist.parseData=function(a){var e=t.data(a,"datalist").options,r={total:0,rows:[]};return t(a).children().each((function(){var a=t.parser.parseOptions(this,["value","group"]),s={},o=t(this).html();s[e.valueField]=null!=a.value?a.value:o,s[e.textField]=o,e.groupField&&(s[e.groupField]=a.group),r.total++,r.rows.push(s)})),r},t.fn.datalist.defaults=t.extend({},t.fn.datagrid.defaults,{fitColumns:!0,singleSelect:!0,showHeader:!1,checkbox:!1,lines:!1,valueField:"value",textField:"text",groupField:"",view:a,textFormatter:function(t,a){return t},groupFormatter:function(t,a){return t}})}(jQuery);