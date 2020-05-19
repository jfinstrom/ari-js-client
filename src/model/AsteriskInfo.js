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
import BuildInfo from './BuildInfo';
import ConfigInfo from './ConfigInfo';
import StatusInfo from './StatusInfo';
import SystemInfo from './SystemInfo';

/**
* The AsteriskInfo model module.
* @module model/AsteriskInfo
* @version 6.0.0
*/
export default class AsteriskInfo {
    /**
    * Constructs a new <code>AsteriskInfo</code>.
    * Asterisk system information
    * @alias module:model/AsteriskInfo
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AsteriskInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AsteriskInfo} obj Optional instance to populate.
    * @return {module:model/AsteriskInfo} The populated <code>AsteriskInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AsteriskInfo();
                        
            
            if (data.hasOwnProperty('build')) {
                obj['build'] = BuildInfo.constructFromObject(data['build']);
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = ConfigInfo.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = StatusInfo.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = SystemInfo.constructFromObject(data['system']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/BuildInfo} build
    */
    'build' = undefined;
    /**
    * @member {module:model/ConfigInfo} config
    */
    'config' = undefined;
    /**
    * @member {module:model/StatusInfo} status
    */
    'status' = undefined;
    /**
    * @member {module:model/SystemInfo} system
    */
    'system' = undefined;




}
