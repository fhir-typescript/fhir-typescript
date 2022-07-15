// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/event-capability-mode|3.0.2
/**
 * The mode of a message capability statement.
 */
export const EventCapabilityModeCodings = {
    /**
     * receiver: The application receives requests and sends responses.
     */
    Receiver: {
        display: "Receiver",
        code: "receiver",
        system: "http://hl7.org/fhir/event-capability-mode",
    },
    /**
     * sender: The application sends requests and receives responses.
     */
    Sender: {
        display: "Sender",
        code: "sender",
        system: "http://hl7.org/fhir/event-capability-mode",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRDYXBhYmlsaXR5TW9kZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0V2ZW50Q2FwYWJpbGl0eU1vZGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBFQUEwRTtBQWtCMUU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBaUM7SUFDdEU7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSwyQ0FBMkM7S0FDcEQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2V2ZW50LWNhcGFiaWxpdHktbW9kZXwzLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtb2RlIG9mIGEgbWVzc2FnZSBjYXBhYmlsaXR5IHN0YXRlbWVudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50Q2FwYWJpbGl0eU1vZGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIHJlY2VpdmVyOiBUaGUgYXBwbGljYXRpb24gcmVjZWl2ZXMgcmVxdWVzdHMgYW5kIHNlbmRzIHJlc3BvbnNlcy5cclxuICAgKi9cclxuICBSZWNlaXZlcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzZW5kZXI6IFRoZSBhcHBsaWNhdGlvbiBzZW5kcyByZXF1ZXN0cyBhbmQgcmVjZWl2ZXMgcmVzcG9uc2VzLlxyXG4gICAqL1xyXG4gIFNlbmRlcjogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtb2RlIG9mIGEgbWVzc2FnZSBjYXBhYmlsaXR5IHN0YXRlbWVudC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBFdmVudENhcGFiaWxpdHlNb2RlQ29kaW5nczpFdmVudENhcGFiaWxpdHlNb2RlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiByZWNlaXZlcjogVGhlIGFwcGxpY2F0aW9uIHJlY2VpdmVzIHJlcXVlc3RzIGFuZCBzZW5kcyByZXNwb25zZXMuXHJcbiAgICovXHJcbiAgUmVjZWl2ZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVjZWl2ZXJcIixcclxuICAgIGNvZGU6IFwicmVjZWl2ZXJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2V2ZW50LWNhcGFiaWxpdHktbW9kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc2VuZGVyOiBUaGUgYXBwbGljYXRpb24gc2VuZHMgcmVxdWVzdHMgYW5kIHJlY2VpdmVzIHJlc3BvbnNlcy5cclxuICAgKi9cclxuICBTZW5kZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiU2VuZGVyXCIsXHJcbiAgICBjb2RlOiBcInNlbmRlclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZXZlbnQtY2FwYWJpbGl0eS1tb2RlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19