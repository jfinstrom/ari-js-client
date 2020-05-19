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
    instance = new AsteriskAri.BridgesApi();
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

  describe('BridgesApi', function() {
    describe('addChannel', function() {
      it('should call addChannel successfully', function(done) {
        //uncomment below and update the code to test addChannel
        //instance.addChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clearVideoSource', function() {
      it('should call clearVideoSource successfully', function(done) {
        //uncomment below and update the code to test clearVideoSource
        //instance.clearVideoSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('create', function() {
      it('should call create successfully', function(done) {
        //uncomment below and update the code to test create
        //instance.create(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createWithId', function() {
      it('should call createWithId successfully', function(done) {
        //uncomment below and update the code to test createWithId
        //instance.createWithId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('destroy', function() {
      it('should call destroy successfully', function(done) {
        //uncomment below and update the code to test destroy
        //instance.destroy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getbridge', function() {
      it('should call getbridge successfully', function(done) {
        //uncomment below and update the code to test getbridge
        //instance.getbridge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listbridges', function() {
      it('should call listbridges successfully', function(done) {
        //uncomment below and update the code to test listbridges
        //instance.listbridges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('play', function() {
      it('should call play successfully', function(done) {
        //uncomment below and update the code to test play
        //instance.play(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('playWithId', function() {
      it('should call playWithId successfully', function(done) {
        //uncomment below and update the code to test playWithId
        //instance.playWithId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('record', function() {
      it('should call record successfully', function(done) {
        //uncomment below and update the code to test record
        //instance.record(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeChannel', function() {
      it('should call removeChannel successfully', function(done) {
        //uncomment below and update the code to test removeChannel
        //instance.removeChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setVideoSource', function() {
      it('should call setVideoSource successfully', function(done) {
        //uncomment below and update the code to test setVideoSource
        //instance.setVideoSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startMoh', function() {
      it('should call startMoh successfully', function(done) {
        //uncomment below and update the code to test startMoh
        //instance.startMoh(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopMoh', function() {
      it('should call stopMoh successfully', function(done) {
        //uncomment below and update the code to test stopMoh
        //instance.stopMoh(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
