/**
 * Asterisk ARI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 6.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AsteriskAri);
  }
}(this, function(expect, AsteriskAri) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AsteriskAri.ConfigInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ConfigInfo', function() {
    it('should create an instance of ConfigInfo', function() {
      // uncomment below and update the code to test ConfigInfo
      //var instane = new AsteriskAri.ConfigInfo();
      //expect(instance).to.be.a(AsteriskAri.ConfigInfo);
    });

    it('should have the property defaultLanguage (base name: "default_language")', function() {
      // uncomment below and update the code to test the property defaultLanguage
      //var instane = new AsteriskAri.ConfigInfo();
      //expect(instance).to.be();
    });

    it('should have the property maxChannels (base name: "max_channels")', function() {
      // uncomment below and update the code to test the property maxChannels
      //var instane = new AsteriskAri.ConfigInfo();
      //expect(instance).to.be();
    });

    it('should have the property maxLoad (base name: "max_load")', function() {
      // uncomment below and update the code to test the property maxLoad
      //var instane = new AsteriskAri.ConfigInfo();
      //expect(instance).to.be();
    });

    it('should have the property maxOpenFiles (base name: "max_open_files")', function() {
      // uncomment below and update the code to test the property maxOpenFiles
      //var instane = new AsteriskAri.ConfigInfo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new AsteriskAri.ConfigInfo();
      //expect(instance).to.be();
    });

    it('should have the property setid (base name: "setid")', function() {
      // uncomment below and update the code to test the property setid
      //var instane = new AsteriskAri.ConfigInfo();
      //expect(instance).to.be();
    });

  });

}));
