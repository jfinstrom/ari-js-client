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

import ApiClient from '../ApiClient';

/**
* The Playback model module.
* @module model/Playback
* @version 6.0.0
*/
export default class Playback {
    /**
    * Constructs a new <code>Playback</code>.
    * Object representing the playback of media to a channel
    * @alias module:model/Playback
    * @class
    * @param id {String} ID for this playback operation
    * @param mediaUri {String} The URI for the media currently being played back.
    * @param state {String} Current state of the playback operation.
    * @param targetUri {String} URI for the channel or bridge to play the media on
    */

    constructor(id, mediaUri, state, targetUri) {
        
        
        this['id'] = id;
        this['media_uri'] = mediaUri;
        this['state'] = state;
        this['target_uri'] = targetUri;
        
    }

    /**
    * Constructs a <code>Playback</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Playback} obj Optional instance to populate.
    * @return {module:model/Playback} The populated <code>Playback</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Playback();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('media_uri')) {
                obj['media_uri'] = ApiClient.convertToType(data['media_uri'], 'String');
            }
            if (data.hasOwnProperty('next_media_uri')) {
                obj['next_media_uri'] = ApiClient.convertToType(data['next_media_uri'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('target_uri')) {
                obj['target_uri'] = ApiClient.convertToType(data['target_uri'], 'String');
            }
        }
        return obj;
    }

    /**
    * ID for this playback operation
    * @member {String} id
    */
    'id' = undefined;
    /**
    * For media types that support multiple languages, the language requested for playback.
    * @member {String} language
    */
    'language' = undefined;
    /**
    * The URI for the media currently being played back.
    * @member {String} media_uri
    */
    'media_uri' = undefined;
    /**
    * If a list of URIs is being played, the next media URI to be played back.
    * @member {String} next_media_uri
    */
    'next_media_uri' = undefined;
    /**
    * Current state of the playback operation.
    * @member {String} state
    */
    'state' = undefined;
    /**
    * URI for the channel or bridge to play the media on
    * @member {String} target_uri
    */
    'target_uri' = undefined;




}
