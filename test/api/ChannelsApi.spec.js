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
    instance = new AsteriskAri.ChannelsApi();
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

  describe('ChannelsApi', function() {
    describe('addMoh', function() {
      it('should call addMoh successfully', function(done) {
        //uncomment below and update the code to test addMoh
        //instance.addMoh(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('answer', function() {
      it('should call answer successfully', function(done) {
        //uncomment below and update the code to test answer
        //instance.answer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('continueInDialplan', function() {
      it('should call continueInDialplan successfully', function(done) {
        //uncomment below and update the code to test continueInDialplan
        //instance.continueInDialplan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createchannel', function() {
      it('should call createchannel successfully', function(done) {
        //uncomment below and update the code to test createchannel
        //instance.createchannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletemoh', function() {
      it('should call deletemoh successfully', function(done) {
        //uncomment below and update the code to test deletemoh
        //instance.deletemoh(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dial', function() {
      it('should call dial successfully', function(done) {
        //uncomment below and update the code to test dial
        //instance.dial(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('externalMedia', function() {
      it('should call externalMedia successfully', function(done) {
        //uncomment below and update the code to test externalMedia
        //instance.externalMedia(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChannelVar', function() {
      it('should call getChannelVar successfully', function(done) {
        //uncomment below and update the code to test getChannelVar
        //instance.getChannelVar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getchannel', function() {
      it('should call getchannel successfully', function(done) {
        //uncomment below and update the code to test getchannel
        //instance.getchannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hangup', function() {
      it('should call hangup successfully', function(done) {
        //uncomment below and update the code to test hangup
        //instance.hangup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hold', function() {
      it('should call hold successfully', function(done) {
        //uncomment below and update the code to test hold
        //instance.hold(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listchannels', function() {
      it('should call listchannels successfully', function(done) {
        //uncomment below and update the code to test listchannels
        //instance.listchannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('move', function() {
      it('should call move successfully', function(done) {
        //uncomment below and update the code to test move
        //instance.move(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mute', function() {
      it('should call mute successfully', function(done) {
        //uncomment below and update the code to test mute
        //instance.mute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('originate', function() {
      it('should call originate successfully', function(done) {
        //uncomment below and update the code to test originate
        //instance.originate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('originateWithId', function() {
      it('should call originateWithId successfully', function(done) {
        //uncomment below and update the code to test originateWithId
        //instance.originateWithId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('playSoundWithId', function() {
      it('should call playSoundWithId successfully', function(done) {
        //uncomment below and update the code to test playSoundWithId
        //instance.playSoundWithId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('playsound', function() {
      it('should call playsound successfully', function(done) {
        //uncomment below and update the code to test playsound
        //instance.playsound(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordchannel', function() {
      it('should call recordchannel successfully', function(done) {
        //uncomment below and update the code to test recordchannel
        //instance.recordchannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('redirect', function() {
      it('should call redirect successfully', function(done) {
        //uncomment below and update the code to test redirect
        //instance.redirect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ring', function() {
      it('should call ring successfully', function(done) {
        //uncomment below and update the code to test ring
        //instance.ring(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ringStop', function() {
      it('should call ringStop successfully', function(done) {
        //uncomment below and update the code to test ringStop
        //instance.ringStop(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rtpstatistics', function() {
      it('should call rtpstatistics successfully', function(done) {
        //uncomment below and update the code to test rtpstatistics
        //instance.rtpstatistics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendDTMF', function() {
      it('should call sendDTMF successfully', function(done) {
        //uncomment below and update the code to test sendDTMF
        //instance.sendDTMF(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setChannelVar', function() {
      it('should call setChannelVar successfully', function(done) {
        //uncomment below and update the code to test setChannelVar
        //instance.setChannelVar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('snoopChannel', function() {
      it('should call snoopChannel successfully', function(done) {
        //uncomment below and update the code to test snoopChannel
        //instance.snoopChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('snoopChannelWithId', function() {
      it('should call snoopChannelWithId successfully', function(done) {
        //uncomment below and update the code to test snoopChannelWithId
        //instance.snoopChannelWithId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startSilence', function() {
      it('should call startSilence successfully', function(done) {
        //uncomment below and update the code to test startSilence
        //instance.startSilence(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopSilence', function() {
      it('should call stopSilence successfully', function(done) {
        //uncomment below and update the code to test stopSilence
        //instance.stopSilence(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unhold', function() {
      it('should call unhold successfully', function(done) {
        //uncomment below and update the code to test unhold
        //instance.unhold(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unmute', function() {
      it('should call unmute successfully', function(done) {
        //uncomment below and update the code to test unmute
        //instance.unmute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
