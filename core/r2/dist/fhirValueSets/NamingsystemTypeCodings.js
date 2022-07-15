// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/namingsystem-type|1.0.2
/**
 * Identifies the purpose of the naming system.
 */
export const NamingsystemTypeCodings = {
    /**
     * codesystem: The naming system is used to define concepts and symbols to represent those concepts; e.g. UCUM, LOINC, NDC code, local lab codes, etc.
     */
    CodeSystem: {
        display: "Code System",
        code: "codesystem",
        system: "http://hl7.org/fhir/namingsystem-type",
    },
    /**
     * identifier: The naming system is used to manage identifiers (e.g. license numbers, order numbers, etc.).
     */
    Identifier: {
        display: "Identifier",
        code: "identifier",
        system: "http://hl7.org/fhir/namingsystem-type",
    },
    /**
     * root: The naming system is used as the root for other identifiers and naming systems.
     */
    Root: {
        display: "Root",
        code: "root",
        system: "http://hl7.org/fhir/namingsystem-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFtaW5nc3lzdGVtVHlwZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL05hbWluZ3N5c3RlbVR5cGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHNFQUFzRTtBQXNCdEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBOEI7SUFDaEU7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLHVDQUF1QztLQUNoRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbmFtaW5nc3lzdGVtLXR5cGV8MS4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBJZGVudGlmaWVzIHRoZSBwdXJwb3NlIG9mIHRoZSBuYW1pbmcgc3lzdGVtLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTmFtaW5nc3lzdGVtVHlwZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY29kZXN5c3RlbTogVGhlIG5hbWluZyBzeXN0ZW0gaXMgdXNlZCB0byBkZWZpbmUgY29uY2VwdHMgYW5kIHN5bWJvbHMgdG8gcmVwcmVzZW50IHRob3NlIGNvbmNlcHRzOyBlLmcuIFVDVU0sIExPSU5DLCBOREMgY29kZSwgbG9jYWwgbGFiIGNvZGVzLCBldGMuXHJcbiAgICovXHJcbiAgQ29kZVN5c3RlbTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBpZGVudGlmaWVyOiBUaGUgbmFtaW5nIHN5c3RlbSBpcyB1c2VkIHRvIG1hbmFnZSBpZGVudGlmaWVycyAoZS5nLiBsaWNlbnNlIG51bWJlcnMsIG9yZGVyIG51bWJlcnMsIGV0Yy4pLlxyXG4gICAqL1xyXG4gIElkZW50aWZpZXI6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcm9vdDogVGhlIG5hbWluZyBzeXN0ZW0gaXMgdXNlZCBhcyB0aGUgcm9vdCBmb3Igb3RoZXIgaWRlbnRpZmllcnMgYW5kIG5hbWluZyBzeXN0ZW1zLlxyXG4gICAqL1xyXG4gIFJvb3Q6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZGVudGlmaWVzIHRoZSBwdXJwb3NlIG9mIHRoZSBuYW1pbmcgc3lzdGVtLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE5hbWluZ3N5c3RlbVR5cGVDb2RpbmdzOk5hbWluZ3N5c3RlbVR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvZGVzeXN0ZW06IFRoZSBuYW1pbmcgc3lzdGVtIGlzIHVzZWQgdG8gZGVmaW5lIGNvbmNlcHRzIGFuZCBzeW1ib2xzIHRvIHJlcHJlc2VudCB0aG9zZSBjb25jZXB0czsgZS5nLiBVQ1VNLCBMT0lOQywgTkRDIGNvZGUsIGxvY2FsIGxhYiBjb2RlcywgZXRjLlxyXG4gICAqL1xyXG4gIENvZGVTeXN0ZW06IHtcclxuICAgIGRpc3BsYXk6IFwiQ29kZSBTeXN0ZW1cIixcclxuICAgIGNvZGU6IFwiY29kZXN5c3RlbVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbmFtaW5nc3lzdGVtLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGlkZW50aWZpZXI6IFRoZSBuYW1pbmcgc3lzdGVtIGlzIHVzZWQgdG8gbWFuYWdlIGlkZW50aWZpZXJzIChlLmcuIGxpY2Vuc2UgbnVtYmVycywgb3JkZXIgbnVtYmVycywgZXRjLikuXHJcbiAgICovXHJcbiAgSWRlbnRpZmllcjoge1xyXG4gICAgZGlzcGxheTogXCJJZGVudGlmaWVyXCIsXHJcbiAgICBjb2RlOiBcImlkZW50aWZpZXJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL25hbWluZ3N5c3RlbS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByb290OiBUaGUgbmFtaW5nIHN5c3RlbSBpcyB1c2VkIGFzIHRoZSByb290IGZvciBvdGhlciBpZGVudGlmaWVycyBhbmQgbmFtaW5nIHN5c3RlbXMuXHJcbiAgICovXHJcbiAgUm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJSb290XCIsXHJcbiAgICBjb2RlOiBcInJvb3RcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL25hbWluZ3N5c3RlbS10eXBlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19