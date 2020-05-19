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
* The ContactInfo model module.
* @module model/ContactInfo
* @version 6.0.0
*/
export default class ContactInfo {
    /**
    * Constructs a new <code>ContactInfo</code>.
    * Detailed information about a contact on an endpoint.
    * @alias module:model/ContactInfo
    * @class
    * @param aor {String} The Address of Record this contact belongs to.
    * @param contactStatus {String} The current status of the contact.
    * @param uri {String} The location of the contact.
    */

    constructor(aor, contactStatus, uri) {
        
        
        this['aor'] = aor;
        this['contact_status'] = contactStatus;
        this['uri'] = uri;
        
    }

    /**
    * Constructs a <code>ContactInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContactInfo} obj Optional instance to populate.
    * @return {module:model/ContactInfo} The populated <code>ContactInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactInfo();
                        
            
            if (data.hasOwnProperty('aor')) {
                obj['aor'] = ApiClient.convertToType(data['aor'], 'String');
            }
            if (data.hasOwnProperty('contact_status')) {
                obj['contact_status'] = ApiClient.convertToType(data['contact_status'], 'String');
            }
            if (data.hasOwnProperty('roundtrip_usec')) {
                obj['roundtrip_usec'] = ApiClient.convertToType(data['roundtrip_usec'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
        }
        return obj;
    }

    /**
    * The Address of Record this contact belongs to.
    * @member {String} aor
    */
    'aor' = undefined;
    /**
    * The current status of the contact.
    * @member {String} contact_status
    */
    'contact_status' = undefined;
    /**
    * Current round trip time, in microseconds, for the contact.
    * @member {String} roundtrip_usec
    */
    'roundtrip_usec' = undefined;
    /**
    * The location of the contact.
    * @member {String} uri
    */
    'uri' = undefined;




}
