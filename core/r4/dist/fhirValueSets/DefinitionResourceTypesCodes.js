// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/definition-resource-types|4.0.1
/**
 * A list of all the definition resource types defined in this version of the FHIR specification.
 */
export const DefinitionResourceTypesCodes = {
    /**
     * ActivityDefinition: This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
     */
    ActivityDefinition: "ActivityDefinition",
    /**
     * EventDefinition: The EventDefinition resource provides a reusable description of when a particular event can occur.
     */
    EventDefinition: "EventDefinition",
    /**
     * Measure: The Measure resource provides the definition of a quality measure.
     */
    Measure: "Measure",
    /**
     * OperationDefinition: A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
     */
    OperationDefinition: "OperationDefinition",
    /**
     * PlanDefinition: This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
     */
    PlanDefinition: "PlanDefinition",
    /**
     * Questionnaire: A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
     */
    Questionnaire: "Questionnaire",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmaW5pdGlvblJlc291cmNlVHlwZXNDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRGVmaW5pdGlvblJlc291cmNlVHlwZXNDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw4RUFBOEU7QUFFOUU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRztJQUMxQzs7T0FFRztJQUNILGtCQUFrQixFQUFFLG9CQUFvQjtJQUN4Qzs7T0FFRztJQUNILGVBQWUsRUFBRSxpQkFBaUI7SUFDbEM7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILG1CQUFtQixFQUFFLHFCQUFxQjtJQUMxQzs7T0FFRztJQUNILGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEM7O09BRUc7SUFDSCxhQUFhLEVBQUUsZUFBZTtDQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2RlZmluaXRpb24tcmVzb3VyY2UtdHlwZXN8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBBIGxpc3Qgb2YgYWxsIHRoZSBkZWZpbml0aW9uIHJlc291cmNlIHR5cGVzIGRlZmluZWQgaW4gdGhpcyB2ZXJzaW9uIG9mIHRoZSBGSElSIHNwZWNpZmljYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRGVmaW5pdGlvblJlc291cmNlVHlwZXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBBY3Rpdml0eURlZmluaXRpb246IFRoaXMgcmVzb3VyY2UgYWxsb3dzIGZvciB0aGUgZGVmaW5pdGlvbiBvZiBzb21lIGFjdGl2aXR5IHRvIGJlIHBlcmZvcm1lZCwgaW5kZXBlbmRlbnQgb2YgYSBwYXJ0aWN1bGFyIHBhdGllbnQsIHByYWN0aXRpb25lciwgb3Igb3RoZXIgcGVyZm9ybWFuY2UgY29udGV4dC5cclxuICAgKi9cclxuICBBY3Rpdml0eURlZmluaXRpb246IFwiQWN0aXZpdHlEZWZpbml0aW9uXCIsXHJcbiAgLyoqXHJcbiAgICogRXZlbnREZWZpbml0aW9uOiBUaGUgRXZlbnREZWZpbml0aW9uIHJlc291cmNlIHByb3ZpZGVzIGEgcmV1c2FibGUgZGVzY3JpcHRpb24gb2Ygd2hlbiBhIHBhcnRpY3VsYXIgZXZlbnQgY2FuIG9jY3VyLlxyXG4gICAqL1xyXG4gIEV2ZW50RGVmaW5pdGlvbjogXCJFdmVudERlZmluaXRpb25cIixcclxuICAvKipcclxuICAgKiBNZWFzdXJlOiBUaGUgTWVhc3VyZSByZXNvdXJjZSBwcm92aWRlcyB0aGUgZGVmaW5pdGlvbiBvZiBhIHF1YWxpdHkgbWVhc3VyZS5cclxuICAgKi9cclxuICBNZWFzdXJlOiBcIk1lYXN1cmVcIixcclxuICAvKipcclxuICAgKiBPcGVyYXRpb25EZWZpbml0aW9uOiBBIGZvcm1hbCBjb21wdXRhYmxlIGRlZmluaXRpb24gb2YgYW4gb3BlcmF0aW9uIChvbiB0aGUgUkVTVGZ1bCBpbnRlcmZhY2UpIG9yIGEgbmFtZWQgcXVlcnkgKHVzaW5nIHRoZSBzZWFyY2ggaW50ZXJhY3Rpb24pLlxyXG4gICAqL1xyXG4gIE9wZXJhdGlvbkRlZmluaXRpb246IFwiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIFBsYW5EZWZpbml0aW9uOiBUaGlzIHJlc291cmNlIGFsbG93cyBmb3IgdGhlIGRlZmluaXRpb24gb2YgdmFyaW91cyB0eXBlcyBvZiBwbGFucyBhcyBhIHNoYXJhYmxlLCBjb25zdW1hYmxlLCBhbmQgZXhlY3V0YWJsZSBhcnRpZmFjdC4gVGhlIHJlc291cmNlIGlzIGdlbmVyYWwgZW5vdWdoIHRvIHN1cHBvcnQgdGhlIGRlc2NyaXB0aW9uIG9mIGEgYnJvYWQgcmFuZ2Ugb2YgY2xpbmljYWwgYXJ0aWZhY3RzIHN1Y2ggYXMgY2xpbmljYWwgZGVjaXNpb24gc3VwcG9ydCBydWxlcywgb3JkZXIgc2V0cyBhbmQgcHJvdG9jb2xzLlxyXG4gICAqL1xyXG4gIFBsYW5EZWZpbml0aW9uOiBcIlBsYW5EZWZpbml0aW9uXCIsXHJcbiAgLyoqXHJcbiAgICogUXVlc3Rpb25uYWlyZTogQSBzdHJ1Y3R1cmVkIHNldCBvZiBxdWVzdGlvbnMgaW50ZW5kZWQgdG8gZ3VpZGUgdGhlIGNvbGxlY3Rpb24gb2YgYW5zd2VycyBmcm9tIGVuZC11c2Vycy4gUXVlc3Rpb25uYWlyZXMgcHJvdmlkZSBkZXRhaWxlZCBjb250cm9sIG92ZXIgb3JkZXIsIHByZXNlbnRhdGlvbiwgcGhyYXNlb2xvZ3kgYW5kIGdyb3VwaW5nIHRvIGFsbG93IGNvaGVyZW50LCBjb25zaXN0ZW50IGRhdGEgY29sbGVjdGlvbi5cclxuICAgKi9cclxuICBRdWVzdGlvbm5haXJlOiBcIlF1ZXN0aW9ubmFpcmVcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBBIGxpc3Qgb2YgYWxsIHRoZSBkZWZpbml0aW9uIHJlc291cmNlIHR5cGVzIGRlZmluZWQgaW4gdGhpcyB2ZXJzaW9uIG9mIHRoZSBGSElSIHNwZWNpZmljYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBEZWZpbml0aW9uUmVzb3VyY2VUeXBlc0NvZGVUeXBlID0gdHlwZW9mIERlZmluaXRpb25SZXNvdXJjZVR5cGVzQ29kZXNba2V5b2YgdHlwZW9mIERlZmluaXRpb25SZXNvdXJjZVR5cGVzQ29kZXNdO1xyXG4iXX0=