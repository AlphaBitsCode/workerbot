/* Copyright (C) 2023 by WorkerBot.AI */
ace.define("ace/mode/gcode_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,o){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,n=function(){var e=this.createKeywordMapper({"support.function":"ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN",keyword:"IF|DO|WHILE|ENDWHILE|CALL|ENDIF|SUB|ENDSUB|GOTO|REPEAT|ENDREPEAT|CALL","constant.language":"PI"},"identifier",!0);this.$rules={start:[{token:"comment",regex:"\\(.*\\)"},{token:"comment",regex:"([N])([0-9]+)"},{token:"string",regex:"([G])([0-9]+\\.?[0-9]?)"},{token:"string",regex:"([M])([0-9]+\\.?[0-9]?)"},{token:"constant.numeric",regex:"([-+]?([0-9]*\\.?[0-9]+\\.?))|(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"},{token:e,regex:"[A-Z]"},{token:"keyword.operator",regex:"EQ|LT|GT|NE|GE|LE|OR|XOR"},{token:"paren.lparen",regex:"[\\[]"},{token:"paren.rparen",regex:"[\\]]"},{token:"text",regex:"\\s+"}]}};r.inherits(n,i),t.GcodeHighlightRules=n})),ace.define("ace/mode/gcode",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/gcode_highlight_rules","ace/range"],(function(e,t,o){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,n=e("./gcode_highlight_rules").GcodeHighlightRules,g=(e("../range").Range,function(){this.HighlightRules=n,this.$behaviour=this.$defaultBehaviour});r.inherits(g,i),function(){this.$id="ace/mode/gcode"}.call(g.prototype),t.Mode=g})),ace.require(["ace/mode/gcode"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));