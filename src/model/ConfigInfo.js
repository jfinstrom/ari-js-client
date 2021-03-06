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
import SetId from './SetId';

/**
* The ConfigInfo model module.
* @module model/ConfigInfo
* @version 6.0.0
*/
export default class ConfigInfo {
    /**
    * Constructs a new <code>ConfigInfo</code>.
    * Info about Asterisk configuration
    * @alias module:model/ConfigInfo
    * @class
    * @param defaultLanguage {String} Default language for media playback.
    * @param name {String} Asterisk system name.
    * @param setid {module:model/SetId} 
    */

    constructor(defaultLanguage, name, setid) {
        
        
        this['default_language'] = defaultLanguage;
        this['name'] = name;
        this['setid'] = setid;
        
    }

    /**
    * Constructs a <code>ConfigInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ConfigInfo} obj Optional instance to populate.
    * @return {module:model/ConfigInfo} The populated <code>ConfigInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigInfo();
                        
            
            if (data.hasOwnProperty('default_language')) {
                obj['default_language'] = ApiClient.convertToType(data['default_language'], 'String');
            }
            if (data.hasOwnProperty('max_channels')) {
                obj['max_channels'] = ApiClient.convertToType(data['max_channels'], 'Number');
            }
            if (data.hasOwnProperty('max_load')) {
                obj['max_load'] = ApiClient.convertToType(data['max_load'], 'Number');
            }
            if (data.hasOwnProperty('max_open_files')) {
                obj['max_open_files'] = ApiClient.convertToType(data['max_open_files'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('setid')) {
                obj['setid'] = SetId.constructFromObject(data['setid']);
            }
        }
        return obj;
    }

    /**
    * Default language for media playback.
    * @member {String} default_language
    */
    'default_language' = undefined;
    /**
    * Maximum number of simultaneous channels.
    * @member {Number} max_channels
    */
    'max_channels' = undefined;
    /**
    * Maximum load avg on system.
    * @member {Number} max_load
    */
    'max_load' = undefined;
    /**
    * Maximum number of open file handles (files, sockets).
    * @member {Number} max_open_files
    */
    'max_open_files' = undefined;
    /**
    * Asterisk system name.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {module:model/SetId} setid
    */
    'setid' = undefined;




}
