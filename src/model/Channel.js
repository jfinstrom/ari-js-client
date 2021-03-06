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
import CallerID from './CallerID';
import DialplanCEP from './DialplanCEP';

/**
* The Channel model module.
* @module model/Channel
* @version 6.0.0
*/
export default class Channel {
    /**
    * Constructs a new <code>Channel</code>.
    * A specific communication connection between Asterisk and an Endpoint.
    * @alias module:model/Channel
    * @class
    * @param accountcode {String} 
    * @param caller {module:model/CallerID} 
    * @param connected {module:model/CallerID} 
    * @param creationtime {Date} Timestamp when channel was created
    * @param dialplan {module:model/DialplanCEP} 
    * @param id {String} Unique identifier of the channel.  This is the same as the Uniqueid field in AMI.
    * @param language {String} The default spoken language
    * @param name {String} Name of the channel (i.e. SIP/foo-0000a7e3)
    * @param state {String} 
    */

    constructor(accountcode, caller, connected, creationtime, dialplan, id, language, name, state) {
        
        
        this['accountcode'] = accountcode;
        this['caller'] = caller;
        this['connected'] = connected;
        this['creationtime'] = creationtime;
        this['dialplan'] = dialplan;
        this['id'] = id;
        this['language'] = language;
        this['name'] = name;
        this['state'] = state;
        
    }

    /**
    * Constructs a <code>Channel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Channel} obj Optional instance to populate.
    * @return {module:model/Channel} The populated <code>Channel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Channel();
                        
            
            if (data.hasOwnProperty('accountcode')) {
                obj['accountcode'] = ApiClient.convertToType(data['accountcode'], 'String');
            }
            if (data.hasOwnProperty('caller')) {
                obj['caller'] = CallerID.constructFromObject(data['caller']);
            }
            if (data.hasOwnProperty('channelvars')) {
                obj['channelvars'] = ApiClient.convertToType(data['channelvars'], Object);
            }
            if (data.hasOwnProperty('connected')) {
                obj['connected'] = CallerID.constructFromObject(data['connected']);
            }
            if (data.hasOwnProperty('creationtime')) {
                obj['creationtime'] = ApiClient.convertToType(data['creationtime'], 'Date');
            }
            if (data.hasOwnProperty('dialplan')) {
                obj['dialplan'] = DialplanCEP.constructFromObject(data['dialplan']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} accountcode
    */
    'accountcode' = undefined;
    /**
    * @member {module:model/CallerID} caller
    */
    'caller' = undefined;
    /**
    * Channel variables
    * @member {Object} channelvars
    */
    'channelvars' = undefined;
    /**
    * @member {module:model/CallerID} connected
    */
    'connected' = undefined;
    /**
    * Timestamp when channel was created
    * @member {Date} creationtime
    */
    'creationtime' = undefined;
    /**
    * @member {module:model/DialplanCEP} dialplan
    */
    'dialplan' = undefined;
    /**
    * Unique identifier of the channel.  This is the same as the Uniqueid field in AMI.
    * @member {String} id
    */
    'id' = undefined;
    /**
    * The default spoken language
    * @member {String} language
    */
    'language' = undefined;
    /**
    * Name of the channel (i.e. SIP/foo-0000a7e3)
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} state
    */
    'state' = undefined;




}
