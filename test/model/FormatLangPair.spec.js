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
    instance = new Localhost8088.FormatLangPair();
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

  describe('FormatLangPair', function() {
    it('should create an instance of FormatLangPair', function() {
      // uncomment below and update the code to test FormatLangPair
      //var instane = new Localhost8088.FormatLangPair();
      //expect(instance).to.be.a(Localhost8088.FormatLangPair);
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instane = new Localhost8088.FormatLangPair();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instane = new Localhost8088.FormatLangPair();
      //expect(instance).to.be();
    });

  });

}));
