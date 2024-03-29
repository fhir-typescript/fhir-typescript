// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/audit-source-type|4.0.1
/**
 * The type of process where the audit event originated from.
 */
export const AuditSourceTypeCodes = {
    /**
     * 1: End-user display device, diagnostic device.
     */
    UserDevice: "1",
    /**
     * 2: Data acquisition device or instrument.
     */
    DataInterface: "2",
    /**
     * 3: Web Server process or thread.
     */
    WebServer: "3",
    /**
     * 4: Application Server process or thread.
     */
    ApplicationServer: "4",
    /**
     * 5: Database Server process or thread.
     */
    DatabaseServer: "5",
    /**
     * 6: Security server, e.g. a domain controller.
     */
    SecurityServer: "6",
    /**
     * 7: ISO level 1-3 network component.
     */
    NetworkDevice: "7",
    /**
     * 8: ISO level 4-6 operating software.
     */
    NetworkRouter: "8",
    /**
     * 9: Other kind of device (defined by DICOM, but some other code/system can be used).
     */
    Other: "9",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRTb3VyY2VUeXBlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0F1ZGl0U291cmNlVHlwZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHNFQUFzRTtBQUV0RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHO0lBQ2xDOztPQUVHO0lBQ0gsVUFBVSxFQUFFLEdBQUc7SUFDZjs7T0FFRztJQUNILGFBQWEsRUFBRSxHQUFHO0lBQ2xCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLEdBQUc7SUFDZDs7T0FFRztJQUNILGlCQUFpQixFQUFFLEdBQUc7SUFDdEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsR0FBRztJQUNuQjs7T0FFRztJQUNILGNBQWMsRUFBRSxHQUFHO0lBQ25COztPQUVHO0lBQ0gsYUFBYSxFQUFFLEdBQUc7SUFDbEI7O09BRUc7SUFDSCxhQUFhLEVBQUUsR0FBRztJQUNsQjs7T0FFRztJQUNILEtBQUssRUFBRSxHQUFHO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hdWRpdC1zb3VyY2UtdHlwZXw0LjAuMVxyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIG9mIHByb2Nlc3Mgd2hlcmUgdGhlIGF1ZGl0IGV2ZW50IG9yaWdpbmF0ZWQgZnJvbS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBBdWRpdFNvdXJjZVR5cGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiAxOiBFbmQtdXNlciBkaXNwbGF5IGRldmljZSwgZGlhZ25vc3RpYyBkZXZpY2UuXHJcbiAgICovXHJcbiAgVXNlckRldmljZTogXCIxXCIsXHJcbiAgLyoqXHJcbiAgICogMjogRGF0YSBhY3F1aXNpdGlvbiBkZXZpY2Ugb3IgaW5zdHJ1bWVudC5cclxuICAgKi9cclxuICBEYXRhSW50ZXJmYWNlOiBcIjJcIixcclxuICAvKipcclxuICAgKiAzOiBXZWIgU2VydmVyIHByb2Nlc3Mgb3IgdGhyZWFkLlxyXG4gICAqL1xyXG4gIFdlYlNlcnZlcjogXCIzXCIsXHJcbiAgLyoqXHJcbiAgICogNDogQXBwbGljYXRpb24gU2VydmVyIHByb2Nlc3Mgb3IgdGhyZWFkLlxyXG4gICAqL1xyXG4gIEFwcGxpY2F0aW9uU2VydmVyOiBcIjRcIixcclxuICAvKipcclxuICAgKiA1OiBEYXRhYmFzZSBTZXJ2ZXIgcHJvY2VzcyBvciB0aHJlYWQuXHJcbiAgICovXHJcbiAgRGF0YWJhc2VTZXJ2ZXI6IFwiNVwiLFxyXG4gIC8qKlxyXG4gICAqIDY6IFNlY3VyaXR5IHNlcnZlciwgZS5nLiBhIGRvbWFpbiBjb250cm9sbGVyLlxyXG4gICAqL1xyXG4gIFNlY3VyaXR5U2VydmVyOiBcIjZcIixcclxuICAvKipcclxuICAgKiA3OiBJU08gbGV2ZWwgMS0zIG5ldHdvcmsgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIE5ldHdvcmtEZXZpY2U6IFwiN1wiLFxyXG4gIC8qKlxyXG4gICAqIDg6IElTTyBsZXZlbCA0LTYgb3BlcmF0aW5nIHNvZnR3YXJlLlxyXG4gICAqL1xyXG4gIE5ldHdvcmtSb3V0ZXI6IFwiOFwiLFxyXG4gIC8qKlxyXG4gICAqIDk6IE90aGVyIGtpbmQgb2YgZGV2aWNlIChkZWZpbmVkIGJ5IERJQ09NLCBidXQgc29tZSBvdGhlciBjb2RlL3N5c3RlbSBjYW4gYmUgdXNlZCkuXHJcbiAgICovXHJcbiAgT3RoZXI6IFwiOVwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIG9mIHByb2Nlc3Mgd2hlcmUgdGhlIGF1ZGl0IGV2ZW50IG9yaWdpbmF0ZWQgZnJvbS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEF1ZGl0U291cmNlVHlwZUNvZGVUeXBlID0gdHlwZW9mIEF1ZGl0U291cmNlVHlwZUNvZGVzW2tleW9mIHR5cGVvZiBBdWRpdFNvdXJjZVR5cGVDb2Rlc107XHJcbiJdfQ==