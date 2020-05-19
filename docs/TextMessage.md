# Localhost8088.TextMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **String** | The text of the message. | 
**from** | **String** | A technology specific URI specifying the source of the message. For sip and pjsip technologies, any SIP URI can be specified. For xmpp, the URI must correspond to the client connection being used to send the message. | 
**to** | **String** | A technology specific URI specifying the destination of the message. Valid technologies include sip, pjsip, and xmp. The destination of a message should be an endpoint. | 
**variables** | **Object** | Technology specific key/value pairs (JSON object) associated with the message. | [optional] 
