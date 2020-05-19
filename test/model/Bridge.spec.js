/**
 * localhost:8088
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
    factory(root.expect, root.Localhost8088);
  }
}(this, function(expect, Localhost8088) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Localhost8088.Bridge();
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

  describe('Bridge', function() {
    it('should create an instance of Bridge', function() {
      // uncomment below and update the code to test Bridge
      //var instane = new Localhost8088.Bridge();
      //expect(instance).to.be.a(Localhost8088.Bridge);
    });

    it('should have the property bridgeClass (base name: "bridge_class")', function() {
      // uncomment below and update the code to test the property bridgeClass
      //var instane = new Localhost8088.Bridge();
      //expect(instance).to.be();
    });

    it('should have the property bridgeType (base name: "bridge_type")', function() {
      // uncomment below and update the code to test the property bridgeType
      //var instane = new Localhost8088.Bridge();
      //expect(instance).to.be();
    });

    it('should have the property channels (base name: "channels")', function() {
      // uncomment below and update the code to test the property channels
      //var instane = new Localhost8088.Bridge();
      //expect(instance).to.be();
    });

    it('should have the property creationtime (base name: "creationtime")', function() {
      // uncomment below and update the code to test the property creationtime
      //var instane = new Localhost8088.Bridge();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instane = new Localhost8088.Bridge();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Localhost8088.Bridge();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Localhost8088.Bridge();
      //expect(instance).to.be();
    });

    it('should have the property technology (base name: "technology")', function() {
      // uncomment below and update the code to test the property technology
      //var instane = new Localhost8088.Bridge();
      //expect(instance).to.be();
    });

    it('should have the property videoMode (base name: "video_mode")', function() {
      // uncomment below and update the code to test the property videoMode
      //var instane = new Localhost8088.Bridge();
      //expect(instance).to.be();
    });

    it('should have the property videoSourceId (base name: "video_source_id")', function() {
      // uncomment below and update the code to test the property videoSourceId
      //var instane = new Localhost8088.Bridge();
      //expect(instance).to.be();
    });

  });

}));
