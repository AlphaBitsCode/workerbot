/* Copyright (C) 2023 by WorkerBot.AI */
$.fn.pagination&&($.fn.pagination.defaults.beforePageText="페이지",$.fn.pagination.defaults.afterPageText="{pages} 중",$.fn.pagination.defaults.displayMsg="전체 {total} 항목 중 {from}부터 {to}번째"),$.fn.datagrid&&($.fn.datagrid.defaults.loadMsg="처리 중입니다. 잠시만 기다려 주세요..."),$.fn.treegrid&&$.fn.datagrid&&($.fn.treegrid.defaults.loadMsg=$.fn.datagrid.defaults.loadMsg),$.messager&&($.messager.defaults.ok="확인",$.messager.defaults.cancel="취소"),$.map(["validatebox","textbox","passwordbox","filebox","searchbox","combo","combobox","combogrid","combotree","datebox","datetimebox","numberbox","spinner","numberspinner","timespinner","datetimespinner"],(function(e){$.fn[e]&&($.fn[e].defaults.missingMessage="필수 항목입니다.")})),$.fn.validatebox&&($.fn.validatebox.defaults.rules.email.message="올바른 메일 주소를 입력해 주세요.",$.fn.validatebox.defaults.rules.url.message="올바른 URL를 입력해 주세요.",$.fn.validatebox.defaults.rules.length.message="{0}에서 {1} 사이의 값을 입력해 주세요.",$.fn.validatebox.defaults.rules.remote.message="이 필드를 수정해 주세요."),$.fn.calendar&&($.fn.calendar.defaults.weeks=["일","월","화","수","목","금","토"],$.fn.calendar.defaults.months=["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]),$.fn.datebox&&($.fn.datebox.defaults.currentText="오늘",$.fn.datebox.defaults.closeText="닫기",$.fn.datebox.defaults.okText="확인"),$.fn.datetimebox&&$.fn.datebox&&$.extend($.fn.datetimebox.defaults,{currentText:$.fn.datebox.defaults.currentText,closeText:$.fn.datebox.defaults.closeText,okText:$.fn.datebox.defaults.okText});