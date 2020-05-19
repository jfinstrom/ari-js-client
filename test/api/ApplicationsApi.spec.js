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
    instance = new Localhost8088.ApplicationsApi();
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

  describe('ApplicationsApi', function() {
    describe('filter', function() {
      it('should call filter successfully', function(done) {
        //uncomment below and update the code to test filter
        //instance.filter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('get', function() {
      it('should call get successfully', function(done) {
        //uncomment below and update the code to test get
        //instance.get(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('list', function() {
      it('should call list successfully', function(done) {
        //uncomment below and update the code to test list
        //instance.list(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribe', function() {
      it('should call subscribe successfully', function(done) {
        //uncomment below and update the code to test subscribe
        //instance.subscribe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unsubscribe', function() {
      it('should call unsubscribe successfully', function(done) {
        //uncomment below and update the code to test unsubscribe
        //instance.unsubscribe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
