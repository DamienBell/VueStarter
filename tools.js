var TEMPLATE_PATH = "templates/";
var child_process = require('child_process');
var fs            = require('fs');
var Promise       = require('promise');
var _             = require('underscore');
var Handlebars    = require("handlebars");
var mkpath        = Promise.denodeify(require('mkpath'));
var path          = require('path');

var readFile  = Promise.denodeify(fs.readFile);
var writeFile = Promise.denodeify(fs.writeFile);
var execFile  = Promise.denodeify(child_process.execFile);
//need a change
fs.existsSync(path)
function readJSON(filename){
  return readFile(filename, 'utf8')
    .then(JSON.parse)
}

function writeJSON(filename, data, prettyprint){
  if(prettyprint){
    	return writeFile(filename, JSON.stringify(data, null, 4));
  }else{
    	return writeFile(filename, JSON.stringify(data))
  }
}

function makePaths(paths){
	var tasks = _.map(paths, function(path){
		return mkpath(path)
	});
	return Promise.all(tasks)
}

function readJSONDefaultArray(filename){
	var data = [];
	try {
	    data = JSON.parse(fs.readFileSync(filename,'utf8'))
	}
	catch(err) {
	   //we don't need to handle this
	}
	return data
}

function readJSONDefaultObject(filename){
	var data = {};
	try {
	    data = JSON.parse(fs.readFileSync(filename,'utf8'))
	}
	catch(err) {
	   //we don't need to handle this
	}
	return data
}

function renderTemplate(name, data){
	var str = ""
	try {
		var path = TEMPLATE_PATH+name;
	    str = fs.readFileSync(path,'utf8');
	    var template = Handlebars.compile(str);
	    return template(data);
	}
	catch(err) {
	   console.log('err', err);
	   return str
	}
}

//compareMethod(new, old) should return Boolean
//only add to existing if comparison method doesn't return true for any existing
//
function uniqueArrayByCompare(existing, results, compareMethod){

  _.each(results, function(result){
    var found = _.find(existing, function(old){
      return compareMethod(result, old);
    })
    if (!found){
      existing.push(result);
    }
  });
  return existing;
}

function UUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
});

}
module.exports = {
  "writeFile" : writeFile,
  "readFile"  : readFile,
  "execFile"  : execFile,
  "writeJSON" : writeJSON,
  "readJSON"  : readJSON,
  "makePaths" : makePaths,
  "renderTemplate": renderTemplate,
  "readJSONDefaultArray": readJSONDefaultArray,
  "readJSONDefaultObject": readJSONDefaultObject,
  "uniqueArrayByCompare": uniqueArrayByCompare,
  "UUID" : UUID
};
