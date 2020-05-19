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

import ApiClient from '../ApiClient';
import Event from './Event';

/**
* The ChannelCallerId model module.
* @module model/ChannelCallerId
* @version 6.0.0
*/
export default class ChannelCallerId {
    /**
    * Constructs a new <code>ChannelCallerId</code>.
    * @alias module:model/ChannelCallerId
    * @class
    * @param type {} Indicates the type of this message.
    */

    constructor(type) {
        
        
        this['type'] = type;
        
    }

    /**
    * Constructs a <code>ChannelCallerId</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ChannelCallerId} obj Optional instance to populate.
    * @return {module:model/ChannelCallerId} The populated <code>ChannelCallerId</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelCallerId();
                        
            
            if (data.hasOwnProperty('asterisk_id')) {
                obj['asterisk_id'] = ApiClient.convertToType(data['asterisk_id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * The unique ID for the Asterisk instance that raised this event.
    * @member {String} asterisk_id
    */
    'asterisk_id' = undefined;
    /**
    * Indicates the type of this message.
    * @member {String} type
    */
    'type' = undefined;




}
