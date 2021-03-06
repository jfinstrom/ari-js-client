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
    instance = new AsteriskAri.RecordingsApi();
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

  describe('RecordingsApi', function() {
    describe('cancel', function() {
      it('should call cancel successfully', function(done) {
        //uncomment below and update the code to test cancel
        //instance.cancel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('copyStored', function() {
      it('should call copyStored successfully', function(done) {
        //uncomment below and update the code to test copyStored
        //instance.copyStored(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteStored', function() {
      it('should call deleteStored successfully', function(done) {
        //uncomment below and update the code to test deleteStored
        //instance.deleteStored(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLive', function() {
      it('should call getLive successfully', function(done) {
        //uncomment below and update the code to test getLive
        //instance.getLive(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStored', function() {
      it('should call getStored successfully', function(done) {
        //uncomment below and update the code to test getStored
        //instance.getStored(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoredFile', function() {
      it('should call getStoredFile successfully', function(done) {
        //uncomment below and update the code to test getStoredFile
        //instance.getStoredFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listStored', function() {
      it('should call listStored successfully', function(done) {
        //uncomment below and update the code to test listStored
        //instance.listStored(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('muterecording', function() {
      it('should call muterecording successfully', function(done) {
        //uncomment below and update the code to test muterecording
        //instance.muterecording(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pause', function() {
      it('should call pause successfully', function(done) {
        //uncomment below and update the code to test pause
        //instance.pause(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stoprecording', function() {
      it('should call stoprecording successfully', function(done) {
        //uncomment below and update the code to test stoprecording
        //instance.stoprecording(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unmuterecording', function() {
      it('should call unmuterecording successfully', function(done) {
        //uncomment below and update the code to test unmuterecording
        //instance.unmuterecording(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unpause', function() {
      it('should call unpause successfully', function(done) {
        //uncomment below and update the code to test unpause
        //instance.unpause(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
