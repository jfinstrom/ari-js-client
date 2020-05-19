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
* The Peer model module.
* @module model/Peer
* @version 6.0.0
*/
export default class Peer {
    /**
    * Constructs a new <code>Peer</code>.
    * Detailed information about a remote peer that communicates with Asterisk.
    * @alias module:model/Peer
    * @class
    * @param peerStatus {String} The current state of the peer. Note that the values of the status are dependent on the underlying peer technology.
    */

    constructor(peerStatus) {
        
        
        this['peer_status'] = peerStatus;
        
    }

    /**
    * Constructs a <code>Peer</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Peer} obj Optional instance to populate.
    * @return {module:model/Peer} The populated <code>Peer</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Peer();
                        
            
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('cause')) {
                obj['cause'] = ApiClient.convertToType(data['cause'], 'String');
            }
            if (data.hasOwnProperty('peer_status')) {
                obj['peer_status'] = ApiClient.convertToType(data['peer_status'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
        }
        return obj;
    }

    /**
    * The IP address of the peer.
    * @member {String} address
    */
    'address' = undefined;
    /**
    * An optional reason associated with the change in peer_status.
    * @member {String} cause
    */
    'cause' = undefined;
    /**
    * The current state of the peer. Note that the values of the status are dependent on the underlying peer technology.
    * @member {String} peer_status
    */
    'peer_status' = undefined;
    /**
    * The port of the peer.
    * @member {String} port
    */
    'port' = undefined;
    /**
    * The last known time the peer was contacted.
    * @member {String} time
    */
    'time' = undefined;




}
