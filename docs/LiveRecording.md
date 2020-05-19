# AsteriskAri.LiveRecording

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | **String** | Cause for recording failure if failed | [optional] 
**duration** | **Number** | Duration in seconds of the recording | [optional] 
**format** | **String** | Recording format (wav, gsm, etc.) | 
**name** | **String** | Base name for the recording | 
**silenceDuration** | **Number** | Duration of silence, in seconds, detected in the recording. This is only available if the recording was initiated with a non-zero maxSilenceSeconds. | [optional] 
**state** | **String** |  | 
**talkingDuration** | **Number** | Duration of talking, in seconds, detected in the recording. This is only available if the recording was initiated with a non-zero maxSilenceSeconds. | [optional] 
**targetUri** | **String** | URI for the channel or bridge being recorded | 
