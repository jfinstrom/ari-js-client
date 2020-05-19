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

import ApiClient from "../ApiClient";
import DeviceState from '../model/DeviceState';

/**
* DeviceStates service.
* @module api/DeviceStatesApi
* @version 6.0.0
*/
export default class DeviceStatesApi {

    /**
    * Constructs a new DeviceStatesApi. 
    * @alias module:api/DeviceStatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the callDelete operation.
     * @callback module:api/DeviceStatesApi~callDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Destroy a device-state controlled by ARI.
     * @param {module:api/DeviceStatesApi~callDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    callDelete(deviceName, callback) {
      let postBody = null;

      let pathParams = {
        'deviceName': deviceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/deviceStates/{deviceName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getdevicestate operation.
     * @callback module:api/DeviceStatesApi~getdevicestateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the current state of a device.
     * @param {module:api/DeviceStatesApi~getdevicestateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceState}
     */
    getdevicestate(deviceName, callback) {
      let postBody = null;

      let pathParams = {
        'deviceName': deviceName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = DeviceState;

      return this.apiClient.callApi(
        '/deviceStates/{deviceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listDeviceStates operation.
     * @callback module:api/DeviceStatesApi~listDeviceStatesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DeviceState>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all ARI controlled device states.
     * @param {module:api/DeviceStatesApi~listDeviceStatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DeviceState>}
     */
    listDeviceStates(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [DeviceState];

      return this.apiClient.callApi(
        '/deviceStates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/DeviceStatesApi~updateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the state of a device controlled by ARI. (Note - implicitly creates the device state).
     * @param {module:api/DeviceStatesApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    update(deviceName, deviceState, callback) {
      let postBody = null;

      let pathParams = {
        'deviceName': deviceName
      };
      let queryParams = {
        'deviceState': deviceState
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/deviceStates/{deviceName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
