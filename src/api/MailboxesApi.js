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
import Mailbox from '../model/Mailbox';

/**
* Mailboxes service.
* @module api/MailboxesApi
* @version 6.0.0
*/
export default class MailboxesApi {

    /**
    * Constructs a new MailboxesApi. 
    * @alias module:api/MailboxesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deletemailbox operation.
     * @callback module:api/MailboxesApi~deletemailboxCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Destroy a mailbox.
     * @param {module:api/MailboxesApi~deletemailboxCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletemailbox(mailboxName, callback) {
      let postBody = null;

      let pathParams = {
        'mailboxName': mailboxName
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
        '/mailboxes/{mailboxName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getmailbox operation.
     * @callback module:api/MailboxesApi~getmailboxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Mailbox} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the current state of a mailbox.
     * @param {module:api/MailboxesApi~getmailboxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Mailbox}
     */
    getmailbox(mailboxName, callback) {
      let postBody = null;

      let pathParams = {
        'mailboxName': mailboxName
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
      let returnType = Mailbox;

      return this.apiClient.callApi(
        '/mailboxes/{mailboxName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listmailboxes operation.
     * @callback module:api/MailboxesApi~listmailboxesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Mailbox>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all mailboxes.
     * @param {module:api/MailboxesApi~listmailboxesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Mailbox>}
     */
    listmailboxes(callback) {
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
      let returnType = [Mailbox];

      return this.apiClient.callApi(
        '/mailboxes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updatemailbox operation.
     * @callback module:api/MailboxesApi~updatemailboxCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the state of a mailbox. (Note - implicitly creates the mailbox).
     * @param {module:api/MailboxesApi~updatemailboxCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updatemailbox(mailboxName, oldMessages, newMessages, callback) {
      let postBody = null;

      let pathParams = {
        'mailboxName': mailboxName
      };
      let queryParams = {
        'oldMessages': oldMessages,
        'newMessages': newMessages
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
        '/mailboxes/{mailboxName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
