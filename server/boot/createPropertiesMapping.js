/**
 * Created by Antonio Di Mariano on 03/12/15.
 * email:antonio.dimariano@gmail.com
 * https://github.com/antoniodimariano/
 */


var path = require('path');
var app = require(path.resolve(__dirname, '../server'));


var User = app.models.user;
var Role = app.models.Role;
var RoleMapping = app.models.RoleMapping;

var repository = app.models['repository'];
module.exports = function(app) {

  PropertiesMap = {}


  PropertiesMap['RepoR'] = {
    property: 'getRepository'
  };
  PropertiesMap['RepoW'] = {
    property: 'createCollection'
  };
  PropertiesMap['CollR'] = {
    property: 'getCollection',

  };
  PropertiesMap['CollW'] = {
    property: 'populateCollection',
  };
  PropertiesMap['ItemR'] = {
    property: 'getCollectionItem'
  };


  app.PropertiesMap = PropertiesMap;
  console.log("Create: app.PropertiesMap",app.PropertiesMap)

}

