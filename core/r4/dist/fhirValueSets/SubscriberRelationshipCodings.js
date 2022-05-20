// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscriber-relationship|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export const SubscriberRelationshipCodings = {
    /**
     * child: The Beneficiary is a child of the Subscriber
     */
    Child: new Coding({
        display: "Child",
        code: "child",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
    }),
    /**
     * common: The Beneficiary is a common law spouse or equivalent of the Subscriber
     */
    CommonLawSpouse: new Coding({
        display: "Common Law Spouse",
        code: "common",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
    }),
    /**
     * injured: The Beneficiary is covered under insurance of the subscriber due to an injury.
     */
    InjuredParty: new Coding({
        display: "Injured Party",
        code: "injured",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
    }),
    /**
     * other: The Beneficiary has some other relationship the Subscriber
     */
    Other: new Coding({
        display: "Other",
        code: "other",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
    }),
    /**
     * parent: The Beneficiary is a parent of the Subscriber
     */
    Parent: new Coding({
        display: "Parent",
        code: "parent",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
    }),
    /**
     * self: The Beneficiary is the Subscriber
     */
    Self: new Coding({
        display: "Self",
        code: "self",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
    }),
    /**
     * spouse: The Beneficiary is a spouse or equivalent of the Subscriber
     */
    Spouse: new Coding({
        display: "Spouse",
        code: "spouse",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaWJlclJlbGF0aW9uc2hpcENvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1N1YnNjcmliZXJSZWxhdGlvbnNoaXBDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDRFQUE0RTtBQUU1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFMUM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBRztJQUMzQzs7T0FFRztJQUNILEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSwrREFBK0Q7S0FDeEUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsZUFBZSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQzFCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsK0RBQStEO0tBQ3hFLENBQUM7SUFDRjs7T0FFRztJQUNILFlBQVksRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUN2QixPQUFPLEVBQUUsZUFBZTtRQUN4QixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSwrREFBK0Q7S0FDeEUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLCtEQUErRDtLQUN4RSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxNQUFNLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDakIsT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsK0RBQStEO0tBQ3hFLENBQUM7SUFDRjs7T0FFRztJQUNILElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNmLE9BQU8sRUFBRSxNQUFNO1FBQ2YsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsK0RBQStEO0tBQ3hFLENBQUM7SUFDRjs7T0FFRztJQUNILE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNqQixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSwrREFBK0Q7S0FDeEUsQ0FBQztDQUNNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvc3Vic2NyaWJlci1yZWxhdGlvbnNoaXB8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzIGNvZGVzIGZvciB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIFN1YnNjcmliZXIgYW5kIHRoZSBCZW5lZmljaWFyeSAoaW5zdXJlZC9jb3ZlcmVkIHBhcnR5L3BhdGllbnQpLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN1YnNjcmliZXJSZWxhdGlvbnNoaXBDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqIGNoaWxkOiBUaGUgQmVuZWZpY2lhcnkgaXMgYSBjaGlsZCBvZiB0aGUgU3Vic2NyaWJlclxyXG4gICAqL1xyXG4gIENoaWxkOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQ2hpbGRcIixcclxuICAgIGNvZGU6IFwiY2hpbGRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N1YnNjcmliZXItcmVsYXRpb25zaGlwXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogY29tbW9uOiBUaGUgQmVuZWZpY2lhcnkgaXMgYSBjb21tb24gbGF3IHNwb3VzZSBvciBlcXVpdmFsZW50IG9mIHRoZSBTdWJzY3JpYmVyXHJcbiAgICovXHJcbiAgQ29tbW9uTGF3U3BvdXNlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQ29tbW9uIExhdyBTcG91c2VcIixcclxuICAgIGNvZGU6IFwiY29tbW9uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zdWJzY3JpYmVyLXJlbGF0aW9uc2hpcFwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGluanVyZWQ6IFRoZSBCZW5lZmljaWFyeSBpcyBjb3ZlcmVkIHVuZGVyIGluc3VyYW5jZSBvZiB0aGUgc3Vic2NyaWJlciBkdWUgdG8gYW4gaW5qdXJ5LlxyXG4gICAqL1xyXG4gIEluanVyZWRQYXJ0eTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkluanVyZWQgUGFydHlcIixcclxuICAgIGNvZGU6IFwiaW5qdXJlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3Vic2NyaWJlci1yZWxhdGlvbnNoaXBcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBvdGhlcjogVGhlIEJlbmVmaWNpYXJ5IGhhcyBzb21lIG90aGVyIHJlbGF0aW9uc2hpcCB0aGUgU3Vic2NyaWJlclxyXG4gICAqL1xyXG4gIE90aGVyOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiT3RoZXJcIixcclxuICAgIGNvZGU6IFwib3RoZXJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N1YnNjcmliZXItcmVsYXRpb25zaGlwXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogcGFyZW50OiBUaGUgQmVuZWZpY2lhcnkgaXMgYSBwYXJlbnQgb2YgdGhlIFN1YnNjcmliZXJcclxuICAgKi9cclxuICBQYXJlbnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJQYXJlbnRcIixcclxuICAgIGNvZGU6IFwicGFyZW50XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zdWJzY3JpYmVyLXJlbGF0aW9uc2hpcFwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHNlbGY6IFRoZSBCZW5lZmljaWFyeSBpcyB0aGUgU3Vic2NyaWJlclxyXG4gICAqL1xyXG4gIFNlbGY6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJTZWxmXCIsXHJcbiAgICBjb2RlOiBcInNlbGZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N1YnNjcmliZXItcmVsYXRpb25zaGlwXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogc3BvdXNlOiBUaGUgQmVuZWZpY2lhcnkgaXMgYSBzcG91c2Ugb3IgZXF1aXZhbGVudCBvZiB0aGUgU3Vic2NyaWJlclxyXG4gICAqL1xyXG4gIFNwb3VzZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlNwb3VzZVwiLFxyXG4gICAgY29kZTogXCJzcG91c2VcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N1YnNjcmliZXItcmVsYXRpb25zaGlwXCIsXHJcbiAgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhpcyB2YWx1ZSBzZXQgaW5jbHVkZXMgY29kZXMgZm9yIHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgU3Vic2NyaWJlciBhbmQgdGhlIEJlbmVmaWNpYXJ5IChpbnN1cmVkL2NvdmVyZWQgcGFydHkvcGF0aWVudCkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdWJzY3JpYmVyUmVsYXRpb25zaGlwQ29kaW5nVHlwZSA9IHR5cGVvZiBTdWJzY3JpYmVyUmVsYXRpb25zaGlwQ29kaW5ncztcclxuIl19