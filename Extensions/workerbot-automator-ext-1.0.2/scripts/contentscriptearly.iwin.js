/* Copyright (C) 2023 by WorkerBot.AI */
"use strict";console.log("'Allo 'Allo! Content script early");var n=document.createElement("script");n.src=chrome.runtime.getURL("scripts/queue-vanilla.js"),(document.head||document.documentElement).appendChild(n);var e=document.createElement("script");e.src=chrome.runtime.getURL("scripts/iwin.js"),(document.head||document.documentElement).appendChild(e);var o="\n.winb {\n  overflow: visible;\n  position: fixed;\n  border: 1px solid #000;\n  border-radius: 3px;\n  background: #FFF;\n  color: #222;\n}\n.winbt {\n  display: block;\n  border: solid #000;\n  border-width: 0px 0px 1px 0px;\n  font-size: 15px;\n  cursor: move;\n  padding: 0 5px;\n  line-height: 21px;\n}\n/*.winbt span:first-child {color: #E00; float: left; cursor:default}*/\n.winbb {display:table;width:100%; border:solid #000; border-width:0px 0px 1px 0px; font-size:15px; text-align: center;}\n.winbbt {display:table-cell;padding:0 2px; line-height:19px; white-space:nowrap; border:solid #000; border-width: 0px 1px 0px 0px; cursor:pointer}\n.winbbt:last-child {border: none;}\n.winbbt.open {background:#E6ECF2}\n.winbc {display:block; white-space:nowrap; position:relative;}\n\n.winr {position:absolute;}\n.winr.tl{cursor:nwse-resize;width:14px;height:14px;left:-7px;top:-7px;}\n.winr.tt{cursor:ns-resize;width:-webkit-calc(100% - 14px);width:calc(100% - 14px);height:10px;left:7px;top:-7px;}\n.winr.tr{cursor:nesw-resize;width:14px;height:14px;right:-7px;top:-7px;}\n.winr.bl{cursor:nesw-resize;width:14px;height:14px;left:-7px;bottom:-7px;}\n.winr.bb{cursor:ns-resize;width:-webkit-calc(100% - 14px);width:calc(100% - 14px);height:10px;left:7px;bottom:-7px;}\n.winr.br{cursor:nwse-resize;width:14px;height:14px;right:-7px;bottom:-7px;}\n.winr.ll{cursor:ew-resize;height:-webkit-calc(100% - 14px);height:calc(100% - 14px);width:10px;left:-7px;top:7px}\n.winr.rr{cursor:ew-resize;height:-webkit-calc(100% - 14px);height:calc(100% - 14px);width:10px;right:-7px;top:7px}\n\n/* .nse is set to body on drag and resize */\n.nse{-moz-user-select:-moz-none;-moz-user-select:none;-o-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}\n\n/* https://www.w3schools.com/howto/howto_css_outline_buttons.asp */\n.btn-wb {\n  border: 2px solid black;\n  background-color: white;\n  color: black;\n  padding: 8px 22px;\n  font-size: 13px;\n  cursor: pointer;\n}\n/* Green */\n.btn-wb-success {\n  border-color: #04AA6D;\n  color: green;\n}\n.btn-wb-success:hover {\n  background-color: #04AA6D;\n  color: white;\n}\n/* Blue */\n.btn-wb-info {\n  border-color: #2196F3;\n  color: dodgerblue\n}\n.btn-wb-info:hover {\n  background: #2196F3;\n  color: white;\n}\n/* Orange */\n.btn-wb-warning {\n  border-color: #ff9800;\n  color: orange;\n}\n.btn-wb-warning:hover {\n  background: #ff9800;\n  color: white;\n}\n/* Red */\n.btn-wb-danger {\n  border-color: #f44336;\n  color: red\n}\n.btn-wb-danger:hover {\n  background: #f44336;\n  color: white;\n}\n/* Gray */\n.btn-wb-default {\n  border-color: #e7e7e7;\n  color: black;\n}\n.btn-wb-default:hover {\n  background: #e7e7e7;\n}\n",t=document.createElement("style");t.textContent=o,(document.head||document.documentElement).appendChild(t);var r=document.createElement("script");r.src=chrome.runtime.getURL("scripts/pagescript.js"),(document.head||document.documentElement).appendChild(r);