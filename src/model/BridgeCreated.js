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
import Event from './Event';

/**
* The BridgeCreated model module.
* @module model/BridgeCreated
* @version 6.0.0
*/
export default class BridgeCreated {
    /**
    * Constructs a new <code>BridgeCreated</code>.
    * @alias module:model/BridgeCreated
    * @class
    * @param type {} Indicates the type of this message.
    */

    constructor(type) {
        
        
        this['type'] = type;
        
    }

    /**
    * Constructs a <code>BridgeCreated</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BridgeCreated} obj Optional instance to populate.
    * @return {module:model/BridgeCreated} The populated <code>BridgeCreated</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BridgeCreated();
                        
            
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
