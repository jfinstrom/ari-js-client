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

/**
* The LogChannel model module.
* @module model/LogChannel
* @version 6.0.0
*/
export default class LogChannel {
    /**
    * Constructs a new <code>LogChannel</code>.
    * Details of an Asterisk log channel
    * @alias module:model/LogChannel
    * @class
    * @param channel {String} The log channel path
    * @param configuration {String} The various log levels
    * @param status {String} Whether or not a log type is enabled
    * @param type {String} Types of logs for the log channel
    */

    constructor(channel, configuration, status, type) {
        
        
        this['channel'] = channel;
        this['configuration'] = configuration;
        this['status'] = status;
        this['type'] = type;
        
    }

    /**
    * Constructs a <code>LogChannel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LogChannel} obj Optional instance to populate.
    * @return {module:model/LogChannel} The populated <code>LogChannel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogChannel();
                        
            
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
            }
            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = ApiClient.convertToType(data['configuration'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * The log channel path
    * @member {String} channel
    */
    'channel' = undefined;
    /**
    * The various log levels
    * @member {String} configuration
    */
    'configuration' = undefined;
    /**
    * Whether or not a log type is enabled
    * @member {String} status
    */
    'status' = undefined;
    /**
    * Types of logs for the log channel
    * @member {String} type
    */
    'type' = undefined;




}
