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
* The Variable model module.
* @module model/Variable
* @version 6.0.0
*/
export default class Variable {
    /**
    * Constructs a new <code>Variable</code>.
    * The value of a channel variable
    * @alias module:model/Variable
    * @class
    * @param value {String} The value of the variable requested
    */

    constructor(value) {
        
        
        this['value'] = value;
        
    }

    /**
    * Constructs a <code>Variable</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Variable} obj Optional instance to populate.
    * @return {module:model/Variable} The populated <code>Variable</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Variable();
                        
            
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * The value of the variable requested
    * @member {String} value
    */
    'value' = undefined;




}
