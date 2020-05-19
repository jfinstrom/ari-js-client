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
    instance = new AsteriskAri.Channel();
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

  describe('Channel', function() {
    it('should create an instance of Channel', function() {
      // uncomment below and update the code to test Channel
      //var instane = new AsteriskAri.Channel();
      //expect(instance).to.be.a(AsteriskAri.Channel);
    });

    it('should have the property accountcode (base name: "accountcode")', function() {
      // uncomment below and update the code to test the property accountcode
      //var instane = new AsteriskAri.Channel();
      //expect(instance).to.be();
    });

    it('should have the property caller (base name: "caller")', function() {
      // uncomment below and update the code to test the property caller
      //var instane = new AsteriskAri.Channel();
      //expect(instance).to.be();
    });

    it('should have the property channelvars (base name: "channelvars")', function() {
      // uncomment below and update the code to test the property channelvars
      //var instane = new AsteriskAri.Channel();
      //expect(instance).to.be();
    });

    it('should have the property connected (base name: "connected")', function() {
      // uncomment below and update the code to test the property connected
      //var instane = new AsteriskAri.Channel();
      //expect(instance).to.be();
    });

    it('should have the property creationtime (base name: "creationtime")', function() {
      // uncomment below and update the code to test the property creationtime
      //var instane = new AsteriskAri.Channel();
      //expect(instance).to.be();
    });

    it('should have the property dialplan (base name: "dialplan")', function() {
      // uncomment below and update the code to test the property dialplan
      //var instane = new AsteriskAri.Channel();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new AsteriskAri.Channel();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instane = new AsteriskAri.Channel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new AsteriskAri.Channel();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new AsteriskAri.Channel();
      //expect(instance).to.be();
    });

  });

}));
