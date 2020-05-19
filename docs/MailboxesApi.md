# Localhost8088.MailboxesApi

All URIs are relative to *http://localhost:8088/ari*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletemailbox**](MailboxesApi.md#deletemailbox) | **DELETE** /mailboxes/{mailboxName} | Destroy a mailbox.
[**getmailbox**](MailboxesApi.md#getmailbox) | **GET** /mailboxes/{mailboxName} | Retrieve the current state of a mailbox.
[**listmailboxes**](MailboxesApi.md#listmailboxes) | **GET** /mailboxes | List all mailboxes.
[**updatemailbox**](MailboxesApi.md#updatemailbox) | **PUT** /mailboxes/{mailboxName} | Change the state of a mailbox. (Note - implicitly creates the mailbox).

<a name="deletemailbox"></a>
# **deletemailbox**
> deletemailbox(mailboxName)

Destroy a mailbox.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.MailboxesApi();
let mailboxName = "mailboxName_example"; // String | Name of the mailbox

apiInstance.deletemailbox(mailboxName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailboxName** | **String**| Name of the mailbox | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getmailbox"></a>
# **getmailbox**
> Mailbox getmailbox(mailboxName)

Retrieve the current state of a mailbox.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.MailboxesApi();
let mailboxName = "mailboxName_example"; // String | Name of the mailbox

apiInstance.getmailbox(mailboxName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailboxName** | **String**| Name of the mailbox | 

### Return type

[**Mailbox**](Mailbox.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="listmailboxes"></a>
# **listmailboxes**
> [Mailbox] listmailboxes()

List all mailboxes.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.MailboxesApi();
apiInstance.listmailboxes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Mailbox]**](Mailbox.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updatemailbox"></a>
# **updatemailbox**
> updatemailbox(mailboxName, oldMessages, newMessages)

Change the state of a mailbox. (Note - implicitly creates the mailbox).

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.MailboxesApi();
let mailboxName = "mailboxName_example"; // String | Name of the mailbox
let oldMessages = 56; // Number | Count of old messages in the mailbox
let newMessages = 56; // Number | Count of new messages in the mailbox

apiInstance.updatemailbox(mailboxName, oldMessages, newMessages, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailboxName** | **String**| Name of the mailbox | 
 **oldMessages** | **Number**| Count of old messages in the mailbox | 
 **newMessages** | **Number**| Count of new messages in the mailbox | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

