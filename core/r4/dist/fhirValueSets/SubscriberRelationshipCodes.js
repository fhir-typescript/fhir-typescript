// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscriber-relationship|4.0.1
/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export const SubscriberRelationshipCodes = {
    /**
     * child: The Beneficiary is a child of the Subscriber
     */
    Child: "child",
    /**
     * common: The Beneficiary is a common law spouse or equivalent of the Subscriber
     */
    CommonLawSpouse: "common",
    /**
     * injured: The Beneficiary is covered under insurance of the subscriber due to an injury.
     */
    InjuredParty: "injured",
    /**
     * other: The Beneficiary has some other relationship the Subscriber
     */
    Other: "other",
    /**
     * parent: The Beneficiary is a parent of the Subscriber
     */
    Parent: "parent",
    /**
     * self: The Beneficiary is the Subscriber
     */
    Self: "self",
    /**
     * spouse: The Beneficiary is a spouse or equivalent of the Subscriber
     */
    Spouse: "spouse",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaWJlclJlbGF0aW9uc2hpcENvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TdWJzY3JpYmVyUmVsYXRpb25zaGlwQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsNEVBQTRFO0FBRTVFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUc7SUFDekM7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsZUFBZSxFQUFFLFFBQVE7SUFDekI7O09BRUc7SUFDSCxZQUFZLEVBQUUsU0FBUztJQUN2Qjs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxNQUFNLEVBQUUsUUFBUTtJQUNoQjs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxNQUFNLEVBQUUsUUFBUTtDQUNSLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvc3Vic2NyaWJlci1yZWxhdGlvbnNoaXB8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBpbmNsdWRlcyBjb2RlcyBmb3IgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSBTdWJzY3JpYmVyIGFuZCB0aGUgQmVuZWZpY2lhcnkgKGluc3VyZWQvY292ZXJlZCBwYXJ0eS9wYXRpZW50KS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTdWJzY3JpYmVyUmVsYXRpb25zaGlwQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogY2hpbGQ6IFRoZSBCZW5lZmljaWFyeSBpcyBhIGNoaWxkIG9mIHRoZSBTdWJzY3JpYmVyXHJcbiAgICovXHJcbiAgQ2hpbGQ6IFwiY2hpbGRcIixcclxuICAvKipcclxuICAgKiBjb21tb246IFRoZSBCZW5lZmljaWFyeSBpcyBhIGNvbW1vbiBsYXcgc3BvdXNlIG9yIGVxdWl2YWxlbnQgb2YgdGhlIFN1YnNjcmliZXJcclxuICAgKi9cclxuICBDb21tb25MYXdTcG91c2U6IFwiY29tbW9uXCIsXHJcbiAgLyoqXHJcbiAgICogaW5qdXJlZDogVGhlIEJlbmVmaWNpYXJ5IGlzIGNvdmVyZWQgdW5kZXIgaW5zdXJhbmNlIG9mIHRoZSBzdWJzY3JpYmVyIGR1ZSB0byBhbiBpbmp1cnkuXHJcbiAgICovXHJcbiAgSW5qdXJlZFBhcnR5OiBcImluanVyZWRcIixcclxuICAvKipcclxuICAgKiBvdGhlcjogVGhlIEJlbmVmaWNpYXJ5IGhhcyBzb21lIG90aGVyIHJlbGF0aW9uc2hpcCB0aGUgU3Vic2NyaWJlclxyXG4gICAqL1xyXG4gIE90aGVyOiBcIm90aGVyXCIsXHJcbiAgLyoqXHJcbiAgICogcGFyZW50OiBUaGUgQmVuZWZpY2lhcnkgaXMgYSBwYXJlbnQgb2YgdGhlIFN1YnNjcmliZXJcclxuICAgKi9cclxuICBQYXJlbnQ6IFwicGFyZW50XCIsXHJcbiAgLyoqXHJcbiAgICogc2VsZjogVGhlIEJlbmVmaWNpYXJ5IGlzIHRoZSBTdWJzY3JpYmVyXHJcbiAgICovXHJcbiAgU2VsZjogXCJzZWxmXCIsXHJcbiAgLyoqXHJcbiAgICogc3BvdXNlOiBUaGUgQmVuZWZpY2lhcnkgaXMgYSBzcG91c2Ugb3IgZXF1aXZhbGVudCBvZiB0aGUgU3Vic2NyaWJlclxyXG4gICAqL1xyXG4gIFNwb3VzZTogXCJzcG91c2VcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBpbmNsdWRlcyBjb2RlcyBmb3IgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSBTdWJzY3JpYmVyIGFuZCB0aGUgQmVuZWZpY2lhcnkgKGluc3VyZWQvY292ZXJlZCBwYXJ0eS9wYXRpZW50KS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN1YnNjcmliZXJSZWxhdGlvbnNoaXBDb2RlVHlwZSA9IHR5cGVvZiBTdWJzY3JpYmVyUmVsYXRpb25zaGlwQ29kZXNba2V5b2YgdHlwZW9mIFN1YnNjcmliZXJSZWxhdGlvbnNoaXBDb2Rlc107XHJcbiJdfQ==