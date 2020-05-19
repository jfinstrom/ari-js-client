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
* The ConfigTuple model module.
* @module model/ConfigTuple
* @version 6.0.0
*/
export default class ConfigTuple {
    /**
    * Constructs a new <code>ConfigTuple</code>.
    * A key/value pair that makes up part of a configuration object.
    * @alias module:model/ConfigTuple
    * @class
    * @param attribute {String} A configuration object attribute.
    * @param value {String} The value for the attribute.
    */

    constructor(attribute, value) {
        
        
        this['attribute'] = attribute;
        this['value'] = value;
        
    }

    /**
    * Constructs a <code>ConfigTuple</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ConfigTuple} obj Optional instance to populate.
    * @return {module:model/ConfigTuple} The populated <code>ConfigTuple</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigTuple();
                        
            
            if (data.hasOwnProperty('attribute')) {
                obj['attribute'] = ApiClient.convertToType(data['attribute'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * A configuration object attribute.
    * @member {String} attribute
    */
    'attribute' = undefined;
    /**
    * The value for the attribute.
    * @member {String} value
    */
    'value' = undefined;




}
