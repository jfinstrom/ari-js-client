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
    instance = new AsteriskAri.LogChannel();
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

  describe('LogChannel', function() {
    it('should create an instance of LogChannel', function() {
      // uncomment below and update the code to test LogChannel
      //var instane = new AsteriskAri.LogChannel();
      //expect(instance).to.be.a(AsteriskAri.LogChannel);
    });

    it('should have the property channel (base name: "channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instane = new AsteriskAri.LogChannel();
      //expect(instance).to.be();
    });

    it('should have the property configuration (base name: "configuration")', function() {
      // uncomment below and update the code to test the property configuration
      //var instane = new AsteriskAri.LogChannel();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new AsteriskAri.LogChannel();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new AsteriskAri.LogChannel();
      //expect(instance).to.be();
    });

  });

}));
