/* Copyright (C) 2023 by WorkerBot.AI */
!function(e){e.fn.datetimespinner=function(t,n){if("string"==typeof t){var i=e.fn.datetimespinner.methods[t];return i?i(this,n):this.timespinner(t,n)}return t=t||{},this.each((function(){var n,i,s=e.data(this,"datetimespinner");s?e.extend(s.options,t):e.data(this,"datetimespinner",{options:e.extend({},e.fn.datetimespinner.defaults,e.fn.datetimespinner.parseOptions(this),t)}),n=this,i=e.data(n,"datetimespinner").options,e(n).addClass("datetimespinner-f").timespinner(i)}))},e.fn.datetimespinner.methods={options:function(t){var n=t.timespinner("options");return e.extend(e.data(t[0],"datetimespinner").options,{width:n.width,value:n.value,originalValue:n.originalValue,disabled:n.disabled,readonly:n.readonly})}},e.fn.datetimespinner.parseOptions=function(t){return e.extend({},e.fn.timespinner.parseOptions(t),e.parser.parseOptions(t,[]))},e.fn.datetimespinner.defaults=e.extend({},e.fn.timespinner.defaults,{formatter:function(t){return t?e.fn.datebox.defaults.formatter.call(this,t)+" "+e.fn.timespinner.defaults.formatter.call(this,t):""},parser:function(t){if(!(t=e.trim(t)))return null;var n=t.split(" "),i=e.fn.datebox.defaults.parser.call(this,n[0]);if(n.length<2)return i;var s=e.fn.timespinner.defaults.parser.call(this,n[1]+(n[2]?" "+n[2]:""));return new Date(i.getFullYear(),i.getMonth(),i.getDate(),s.getHours(),s.getMinutes(),s.getSeconds())},selections:[[0,2],[3,5],[6,10],[11,13],[14,16],[17,19],[20,22]]})}(jQuery);