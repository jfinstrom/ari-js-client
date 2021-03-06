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
import FormatLangPair from './FormatLangPair';

/**
* The Sound model module.
* @module model/Sound
* @version 6.0.0
*/
export default class Sound {
    /**
    * Constructs a new <code>Sound</code>.
    * A media file that may be played back.
    * @alias module:model/Sound
    * @class
    * @param formats {Array.<module:model/FormatLangPair>} The formats and languages in which this sound is available.
    * @param id {String} Sound's identifier.
    */

    constructor(formats, id) {
        
        
        this['formats'] = formats;
        this['id'] = id;
        
    }

    /**
    * Constructs a <code>Sound</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Sound} obj Optional instance to populate.
    * @return {module:model/Sound} The populated <code>Sound</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sound();
                        
            
            if (data.hasOwnProperty('formats')) {
                obj['formats'] = ApiClient.convertToType(data['formats'], [FormatLangPair]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }

    /**
    * The formats and languages in which this sound is available.
    * @member {Array.<module:model/FormatLangPair>} formats
    */
    'formats' = undefined;
    /**
    * Sound's identifier.
    * @member {String} id
    */
    'id' = undefined;
    /**
    * Text description of the sound, usually the words spoken.
    * @member {String} text
    */
    'text' = undefined;




}
