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
* The Endpoint model module.
* @module model/Endpoint
* @version 6.0.0
*/
export default class Endpoint {
    /**
    * Constructs a new <code>Endpoint</code>.
    * An external device that may offer/accept calls to/from Asterisk.  Unlike most resources, which have a single unique identifier, an endpoint is uniquely identified by the technology/resource pair.
    * @alias module:model/Endpoint
    * @class
    * @param channelIds {Array.<String>} Id's of channels associated with this endpoint
    * @param resource {String} Identifier of the endpoint, specific to the given technology.
    * @param technology {String} Technology of the endpoint
    */

    constructor(channelIds, resource, technology) {
        
        
        this['channel_ids'] = channelIds;
        this['resource'] = resource;
        this['technology'] = technology;
        
    }

    /**
    * Constructs a <code>Endpoint</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Endpoint} obj Optional instance to populate.
    * @return {module:model/Endpoint} The populated <code>Endpoint</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Endpoint();
                        
            
            if (data.hasOwnProperty('channel_ids')) {
                obj['channel_ids'] = ApiClient.convertToType(data['channel_ids'], ['String']);
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('technology')) {
                obj['technology'] = ApiClient.convertToType(data['technology'], 'String');
            }
        }
        return obj;
    }

    /**
    * Id's of channels associated with this endpoint
    * @member {Array.<String>} channel_ids
    */
    'channel_ids' = undefined;
    /**
    * Identifier of the endpoint, specific to the given technology.
    * @member {String} resource
    */
    'resource' = undefined;
    /**
    * Endpoint's state
    * @member {String} state
    */
    'state' = undefined;
    /**
    * Technology of the endpoint
    * @member {String} technology
    */
    'technology' = undefined;




}
