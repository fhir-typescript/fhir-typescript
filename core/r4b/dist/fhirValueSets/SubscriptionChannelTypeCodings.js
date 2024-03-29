// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscription-channel-type|4.3.0
/**
 * The type of method used to execute a subscription.
 */
export const SubscriptionChannelTypeCodings = {
    /**
     * email: The channel is executed by sending an email to the email addressed in the URI (which must be a mailto:).
     */
    Email: {
        display: "Email",
        code: "email",
        system: "http://hl7.org/fhir/subscription-channel-type",
    },
    /**
     * message: The channel is executed by sending a message (e.g. a Bundle with a MessageHeader resource etc.) to the application identified in the URI.
     */
    Message: {
        display: "Message",
        code: "message",
        system: "http://hl7.org/fhir/subscription-channel-type",
    },
    /**
     * rest-hook: The channel is executed by making a post to the URI. If a payload is included, the URL is interpreted as the service base, and an update (PUT) is made.
     */
    RestHook: {
        display: "Rest Hook",
        code: "rest-hook",
        system: "http://hl7.org/fhir/subscription-channel-type",
    },
    /**
     * sms: The channel is executed by sending an SMS message to the phone number identified in the URL (tel:).
     */
    SMS: {
        display: "SMS",
        code: "sms",
        system: "http://hl7.org/fhir/subscription-channel-type",
    },
    /**
     * websocket: The channel is executed by sending a packet across a web socket connection maintained by the client. The URL identifies the websocket, and the client binds to this URL.
     */
    Websocket: {
        display: "Websocket",
        code: "websocket",
        system: "http://hl7.org/fhir/subscription-channel-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TdWJzY3JpcHRpb25DaGFubmVsVHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsOEVBQThFO0FBOEI5RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFxQztJQUM5RTs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsK0NBQStDO0tBQ3hEO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsK0NBQStDO0tBQ3hEO0lBQ0Q7O09BRUc7SUFDSCxHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3N1YnNjcmlwdGlvbi1jaGFubmVsLXR5cGV8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBtZXRob2QgdXNlZCB0byBleGVjdXRlIGEgc3Vic2NyaXB0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGVtYWlsOiBUaGUgY2hhbm5lbCBpcyBleGVjdXRlZCBieSBzZW5kaW5nIGFuIGVtYWlsIHRvIHRoZSBlbWFpbCBhZGRyZXNzZWQgaW4gdGhlIFVSSSAod2hpY2ggbXVzdCBiZSBhIG1haWx0bzopLlxyXG4gICAqL1xyXG4gIEVtYWlsOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG1lc3NhZ2U6IFRoZSBjaGFubmVsIGlzIGV4ZWN1dGVkIGJ5IHNlbmRpbmcgYSBtZXNzYWdlIChlLmcuIGEgQnVuZGxlIHdpdGggYSBNZXNzYWdlSGVhZGVyIHJlc291cmNlIGV0Yy4pIHRvIHRoZSBhcHBsaWNhdGlvbiBpZGVudGlmaWVkIGluIHRoZSBVUkkuXHJcbiAgICovXHJcbiAgTWVzc2FnZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZXN0LWhvb2s6IFRoZSBjaGFubmVsIGlzIGV4ZWN1dGVkIGJ5IG1ha2luZyBhIHBvc3QgdG8gdGhlIFVSSS4gSWYgYSBwYXlsb2FkIGlzIGluY2x1ZGVkLCB0aGUgVVJMIGlzIGludGVycHJldGVkIGFzIHRoZSBzZXJ2aWNlIGJhc2UsIGFuZCBhbiB1cGRhdGUgKFBVVCkgaXMgbWFkZS5cclxuICAgKi9cclxuICBSZXN0SG9vazogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzbXM6IFRoZSBjaGFubmVsIGlzIGV4ZWN1dGVkIGJ5IHNlbmRpbmcgYW4gU01TIG1lc3NhZ2UgdG8gdGhlIHBob25lIG51bWJlciBpZGVudGlmaWVkIGluIHRoZSBVUkwgKHRlbDopLlxyXG4gICAqL1xyXG4gIFNNUzogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB3ZWJzb2NrZXQ6IFRoZSBjaGFubmVsIGlzIGV4ZWN1dGVkIGJ5IHNlbmRpbmcgYSBwYWNrZXQgYWNyb3NzIGEgd2ViIHNvY2tldCBjb25uZWN0aW9uIG1haW50YWluZWQgYnkgdGhlIGNsaWVudC4gVGhlIFVSTCBpZGVudGlmaWVzIHRoZSB3ZWJzb2NrZXQsIGFuZCB0aGUgY2xpZW50IGJpbmRzIHRvIHRoaXMgVVJMLlxyXG4gICAqL1xyXG4gIFdlYnNvY2tldDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIG9mIG1ldGhvZCB1c2VkIHRvIGV4ZWN1dGUgYSBzdWJzY3JpcHRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3Vic2NyaXB0aW9uQ2hhbm5lbFR5cGVDb2RpbmdzOlN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBlbWFpbDogVGhlIGNoYW5uZWwgaXMgZXhlY3V0ZWQgYnkgc2VuZGluZyBhbiBlbWFpbCB0byB0aGUgZW1haWwgYWRkcmVzc2VkIGluIHRoZSBVUkkgKHdoaWNoIG11c3QgYmUgYSBtYWlsdG86KS5cclxuICAgKi9cclxuICBFbWFpbDoge1xyXG4gICAgZGlzcGxheTogXCJFbWFpbFwiLFxyXG4gICAgY29kZTogXCJlbWFpbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc3Vic2NyaXB0aW9uLWNoYW5uZWwtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbWVzc2FnZTogVGhlIGNoYW5uZWwgaXMgZXhlY3V0ZWQgYnkgc2VuZGluZyBhIG1lc3NhZ2UgKGUuZy4gYSBCdW5kbGUgd2l0aCBhIE1lc3NhZ2VIZWFkZXIgcmVzb3VyY2UgZXRjLikgdG8gdGhlIGFwcGxpY2F0aW9uIGlkZW50aWZpZWQgaW4gdGhlIFVSSS5cclxuICAgKi9cclxuICBNZXNzYWdlOiB7XHJcbiAgICBkaXNwbGF5OiBcIk1lc3NhZ2VcIixcclxuICAgIGNvZGU6IFwibWVzc2FnZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc3Vic2NyaXB0aW9uLWNoYW5uZWwtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmVzdC1ob29rOiBUaGUgY2hhbm5lbCBpcyBleGVjdXRlZCBieSBtYWtpbmcgYSBwb3N0IHRvIHRoZSBVUkkuIElmIGEgcGF5bG9hZCBpcyBpbmNsdWRlZCwgdGhlIFVSTCBpcyBpbnRlcnByZXRlZCBhcyB0aGUgc2VydmljZSBiYXNlLCBhbmQgYW4gdXBkYXRlIChQVVQpIGlzIG1hZGUuXHJcbiAgICovXHJcbiAgUmVzdEhvb2s6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVzdCBIb29rXCIsXHJcbiAgICBjb2RlOiBcInJlc3QtaG9va1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc3Vic2NyaXB0aW9uLWNoYW5uZWwtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc21zOiBUaGUgY2hhbm5lbCBpcyBleGVjdXRlZCBieSBzZW5kaW5nIGFuIFNNUyBtZXNzYWdlIHRvIHRoZSBwaG9uZSBudW1iZXIgaWRlbnRpZmllZCBpbiB0aGUgVVJMICh0ZWw6KS5cclxuICAgKi9cclxuICBTTVM6IHtcclxuICAgIGRpc3BsYXk6IFwiU01TXCIsXHJcbiAgICBjb2RlOiBcInNtc1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc3Vic2NyaXB0aW9uLWNoYW5uZWwtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogd2Vic29ja2V0OiBUaGUgY2hhbm5lbCBpcyBleGVjdXRlZCBieSBzZW5kaW5nIGEgcGFja2V0IGFjcm9zcyBhIHdlYiBzb2NrZXQgY29ubmVjdGlvbiBtYWludGFpbmVkIGJ5IHRoZSBjbGllbnQuIFRoZSBVUkwgaWRlbnRpZmllcyB0aGUgd2Vic29ja2V0LCBhbmQgdGhlIGNsaWVudCBiaW5kcyB0byB0aGlzIFVSTC5cclxuICAgKi9cclxuICBXZWJzb2NrZXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiV2Vic29ja2V0XCIsXHJcbiAgICBjb2RlOiBcIndlYnNvY2tldFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc3Vic2NyaXB0aW9uLWNoYW5uZWwtdHlwZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==