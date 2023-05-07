"use strict";


document.body.style.backgroundColor = 'gray';
/*
var paramsString = location.search.slice(1);

console.log(location);

var params = {};
paramsString.split('&').forEach(function(param) {
  var paramSplit = param.split('=');
  params[paramSplit[0]] = decodeURIComponent(paramSplit[1] || '');
});
console.log(params);
*/

var params = new URLSearchParams(window.location.search);
console.log(params);


var param1 = params.get('param1');
var param2 = params.get('param2');

console.log(param1);
console.log(param2);
