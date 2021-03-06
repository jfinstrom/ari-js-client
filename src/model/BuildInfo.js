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
* The BuildInfo model module.
* @module model/BuildInfo
* @version 6.0.0
*/
export default class BuildInfo {
    /**
    * Constructs a new <code>BuildInfo</code>.
    * Info about how Asterisk was built
    * @alias module:model/BuildInfo
    * @class
    * @param _date {String} Date and time when Asterisk was built.
    * @param kernel {String} Kernel version Asterisk was built on.
    * @param machine {String} Machine architecture (x86_64, i686, ppc, etc.)
    * @param options {String} Compile time options, or empty string if default.
    * @param os {String} OS Asterisk was built on.
    * @param user {String} Username that build Asterisk
    */

    constructor(_date, kernel, machine, options, os, user) {
        
        
        this['date'] = _date;
        this['kernel'] = kernel;
        this['machine'] = machine;
        this['options'] = options;
        this['os'] = os;
        this['user'] = user;
        
    }

    /**
    * Constructs a <code>BuildInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BuildInfo} obj Optional instance to populate.
    * @return {module:model/BuildInfo} The populated <code>BuildInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BuildInfo();
                        
            
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('kernel')) {
                obj['kernel'] = ApiClient.convertToType(data['kernel'], 'String');
            }
            if (data.hasOwnProperty('machine')) {
                obj['machine'] = ApiClient.convertToType(data['machine'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], 'String');
            }
            if (data.hasOwnProperty('os')) {
                obj['os'] = ApiClient.convertToType(data['os'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }

    /**
    * Date and time when Asterisk was built.
    * @member {String} date
    */
    'date' = undefined;
    /**
    * Kernel version Asterisk was built on.
    * @member {String} kernel
    */
    'kernel' = undefined;
    /**
    * Machine architecture (x86_64, i686, ppc, etc.)
    * @member {String} machine
    */
    'machine' = undefined;
    /**
    * Compile time options, or empty string if default.
    * @member {String} options
    */
    'options' = undefined;
    /**
    * OS Asterisk was built on.
    * @member {String} os
    */
    'os' = undefined;
    /**
    * Username that build Asterisk
    * @member {String} user
    */
    'user' = undefined;




}
