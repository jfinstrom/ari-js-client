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
    instance = new AsteriskAri.AsteriskInfo();
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

  describe('AsteriskInfo', function() {
    it('should create an instance of AsteriskInfo', function() {
      // uncomment below and update the code to test AsteriskInfo
      //var instane = new AsteriskAri.AsteriskInfo();
      //expect(instance).to.be.a(AsteriskAri.AsteriskInfo);
    });

    it('should have the property build (base name: "build")', function() {
      // uncomment below and update the code to test the property build
      //var instane = new AsteriskAri.AsteriskInfo();
      //expect(instance).to.be();
    });

    it('should have the property config (base name: "config")', function() {
      // uncomment below and update the code to test the property config
      //var instane = new AsteriskAri.AsteriskInfo();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new AsteriskAri.AsteriskInfo();
      //expect(instance).to.be();
    });

    it('should have the property system (base name: "system")', function() {
      // uncomment below and update the code to test the property system
      //var instane = new AsteriskAri.AsteriskInfo();
      //expect(instance).to.be();
    });

  });

}));
