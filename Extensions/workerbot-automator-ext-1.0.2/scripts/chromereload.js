/* Copyright (C) 2023 by WorkerBot.AI */
!function e(r,o,n){function t(a,u){if(!o[a]){if(!r[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var l=o[a]={exports:{}};r[a][0].call(l.exports,(function(e){return t(r[a][1][e]||e)}),l,l.exports,e,r,o,n)}return o[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)t(n[a]);return t}({1:[function(e,r,o){"use strict";var n=new WebSocket("ws://localhost:35729/livereload"),t=!1;chrome.runtime.onInstalled.addListener((function(e){t=Date.now()})),n.onerror=function(e){console.log("reload connection got error:",e)},n.onmessage=function(e){if(e.data){var r=JSON.parse(e.data);if(r&&"reload"===r.command){var o=Date.now();t&&o-t>6e4&&(chrome.runtime.reload(),chrome.developerPrivate.reload(chrome.runtime.id,{failQuietly:!0}))}}}},{}]},{},[1]);