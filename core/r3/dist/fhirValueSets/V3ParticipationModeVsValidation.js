// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Validation: http://hl7.org/fhir/ValueSet/v3-ParticipationMode|2016-11-11
/**
 *  A set of codes specifying the modality by which the Entity playing the Role is participating in the Act.  Examples:
 * Physically present, over the telephone, written communication.  Rationale:
 * Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically.  Open Issue:
 * There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.
 */
export const V3ParticipationModeVsValidation = [
    "DICTATE",
    "ELECTRONIC",
    "EMAILWRIT",
    "FACE",
    "FAXWRIT",
    "HANDWRIT",
    "http://hl7.org/fhir/v3/ParticipationMode|DICTATE",
    "http://hl7.org/fhir/v3/ParticipationMode|ELECTRONIC",
    "http://hl7.org/fhir/v3/ParticipationMode|EMAILWRIT",
    "http://hl7.org/fhir/v3/ParticipationMode|FACE",
    "http://hl7.org/fhir/v3/ParticipationMode|FAXWRIT",
    "http://hl7.org/fhir/v3/ParticipationMode|HANDWRIT",
    "http://hl7.org/fhir/v3/ParticipationMode|MAILWRIT",
    "http://hl7.org/fhir/v3/ParticipationMode|ONLINEWRIT",
    "http://hl7.org/fhir/v3/ParticipationMode|PHONE",
    "http://hl7.org/fhir/v3/ParticipationMode|PHYSICAL",
    "http://hl7.org/fhir/v3/ParticipationMode|REMOTE",
    "http://hl7.org/fhir/v3/ParticipationMode|TYPEWRIT",
    "http://hl7.org/fhir/v3/ParticipationMode|VERBAL",
    "http://hl7.org/fhir/v3/ParticipationMode|VIDEOCONF",
    "http://hl7.org/fhir/v3/ParticipationMode|WRITTEN",
    "MAILWRIT",
    "ONLINEWRIT",
    "PHONE",
    "PHYSICAL",
    "REMOTE",
    "TYPEWRIT",
    "VERBAL",
    "VIDEOCONF",
    "WRITTEN",
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVjNQYXJ0aWNpcGF0aW9uTW9kZVZzVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvVjNQYXJ0aWNpcGF0aW9uTW9kZVZzVmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx5RkFBeUY7QUFFekY7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBc0I7SUFDaEUsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsTUFBTTtJQUNOLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0RBQWtEO0lBQ2xELHFEQUFxRDtJQUNyRCxvREFBb0Q7SUFDcEQsK0NBQStDO0lBQy9DLGtEQUFrRDtJQUNsRCxtREFBbUQ7SUFDbkQsbURBQW1EO0lBQ25ELHFEQUFxRDtJQUNyRCxnREFBZ0Q7SUFDaEQsbURBQW1EO0lBQ25ELGlEQUFpRDtJQUNqRCxtREFBbUQ7SUFDbkQsaURBQWlEO0lBQ2pELG9EQUFvRDtJQUNwRCxrREFBa0Q7SUFDbEQsVUFBVTtJQUNWLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YsUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0NBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldCBWYWxpZGF0aW9uOiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3YzLVBhcnRpY2lwYXRpb25Nb2RlfDIwMTYtMTEtMTFcclxuXHJcbi8qKlxyXG4gKiAgQSBzZXQgb2YgY29kZXMgc3BlY2lmeWluZyB0aGUgbW9kYWxpdHkgYnkgd2hpY2ggdGhlIEVudGl0eSBwbGF5aW5nIHRoZSBSb2xlIGlzIHBhcnRpY2lwYXRpbmcgaW4gdGhlIEFjdC4gIEV4YW1wbGVzOlxyXG4gKiBQaHlzaWNhbGx5IHByZXNlbnQsIG92ZXIgdGhlIHRlbGVwaG9uZSwgd3JpdHRlbiBjb21tdW5pY2F0aW9uLiAgUmF0aW9uYWxlOlxyXG4gKiBQYXJ0aWN1bGFybHkgZm9yIGF1dGhvciAob3JpZ2luYXRvcikgcGFydGljaXBhbnRzIHRoaXMgaXMgdXNlZCB0byBzcGVjaWZ5IHdoZXRoZXIgdGhlIGluZm9ybWF0aW9uIHJlcHJlc2VudGVkIGJ5IHRoZSBhY3Qgd2FzIGluaXRpYWxseSBwcm92aWRlZCB2ZXJiYWxseSwgKGhhbmQtKXdyaXR0ZW4sIG9yIGVsZWN0cm9uaWNhbGx5LiAgT3BlbiBJc3N1ZTpcclxuICogVGhlcmUgbmVlZHMgdG8gYmUgYSByZWV4YW1pbmF0aW9uIG9mIHRoZSBoaWVyYXJjaGllcyBhcyB0aGVyZSBzZWVtcyB0byBiZSBzb21lIG11ZGRsaW5nIGJldHdlZW4gRUxFQ1RST05JQyBhbmQgb3RoZXIgY29uY2VwdHMgdGhhdCBpbnZvbHZlIGVsZWN0cm9uaWMgY29tbXVuaWNhdGlvbiB0aGF0IGFyZSBpbiBvdGhlciBoaWVyYXJjaGllcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBWM1BhcnRpY2lwYXRpb25Nb2RlVnNWYWxpZGF0aW9uOiByZWFkb25seSBzdHJpbmdbXSA9IFtcclxuICBcIkRJQ1RBVEVcIixcclxuICBcIkVMRUNUUk9OSUNcIixcclxuICBcIkVNQUlMV1JJVFwiLFxyXG4gIFwiRkFDRVwiLFxyXG4gIFwiRkFYV1JJVFwiLFxyXG4gIFwiSEFORFdSSVRcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvUGFydGljaXBhdGlvbk1vZGV8RElDVEFURVwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9QYXJ0aWNpcGF0aW9uTW9kZXxFTEVDVFJPTklDXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL1BhcnRpY2lwYXRpb25Nb2RlfEVNQUlMV1JJVFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9QYXJ0aWNpcGF0aW9uTW9kZXxGQUNFXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL1BhcnRpY2lwYXRpb25Nb2RlfEZBWFdSSVRcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvUGFydGljaXBhdGlvbk1vZGV8SEFORFdSSVRcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvUGFydGljaXBhdGlvbk1vZGV8TUFJTFdSSVRcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvUGFydGljaXBhdGlvbk1vZGV8T05MSU5FV1JJVFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9QYXJ0aWNpcGF0aW9uTW9kZXxQSE9ORVwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9QYXJ0aWNpcGF0aW9uTW9kZXxQSFlTSUNBTFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9QYXJ0aWNpcGF0aW9uTW9kZXxSRU1PVEVcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvUGFydGljaXBhdGlvbk1vZGV8VFlQRVdSSVRcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvUGFydGljaXBhdGlvbk1vZGV8VkVSQkFMXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL1BhcnRpY2lwYXRpb25Nb2RlfFZJREVPQ09ORlwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9QYXJ0aWNpcGF0aW9uTW9kZXxXUklUVEVOXCIsXHJcbiAgXCJNQUlMV1JJVFwiLFxyXG4gIFwiT05MSU5FV1JJVFwiLFxyXG4gIFwiUEhPTkVcIixcclxuICBcIlBIWVNJQ0FMXCIsXHJcbiAgXCJSRU1PVEVcIixcclxuICBcIlRZUEVXUklUXCIsXHJcbiAgXCJWRVJCQUxcIixcclxuICBcIlZJREVPQ09ORlwiLFxyXG4gIFwiV1JJVFRFTlwiLFxyXG5dIGFzIGNvbnN0O1xyXG4iXX0=