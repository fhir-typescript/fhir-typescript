// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/questionnaire-answers-status|1.0.2
/**
 * Lifecycle status of the questionnaire response.
 */
export const QuestionnaireAnswersStatusCodings = {
    /**
     * amended: This QuestionnaireResponse has been filled out with answers, then marked as complete, yet changes or additions have been made to it afterwards.
     */
    Amended: {
        display: "Amended",
        code: "amended",
        system: "http://hl7.org/fhir/questionnaire-answers-status",
    },
    /**
     * completed: This QuestionnaireResponse has been filled out with answers, and the current content is regarded as definitive.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/questionnaire-answers-status",
    },
    /**
     * in-progress: This QuestionnaireResponse has been partially filled out with answers, but changes or additions are still expected to be made to it.
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/questionnaire-answers-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25uYWlyZUFuc3dlcnNTdGF0dXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9RdWVzdGlvbm5haXJlQW5zd2Vyc1N0YXR1c0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUZBQWlGO0FBc0JqRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUF3QztJQUNwRjs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRDtJQUNEOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcXVlc3Rpb25uYWlyZS1hbnN3ZXJzLXN0YXR1c3wxLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIExpZmVjeWNsZSBzdGF0dXMgb2YgdGhlIHF1ZXN0aW9ubmFpcmUgcmVzcG9uc2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBRdWVzdGlvbm5haXJlQW5zd2Vyc1N0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYW1lbmRlZDogVGhpcyBRdWVzdGlvbm5haXJlUmVzcG9uc2UgaGFzIGJlZW4gZmlsbGVkIG91dCB3aXRoIGFuc3dlcnMsIHRoZW4gbWFya2VkIGFzIGNvbXBsZXRlLCB5ZXQgY2hhbmdlcyBvciBhZGRpdGlvbnMgaGF2ZSBiZWVuIG1hZGUgdG8gaXQgYWZ0ZXJ3YXJkcy5cclxuICAgKi9cclxuICBBbWVuZGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhpcyBRdWVzdGlvbm5haXJlUmVzcG9uc2UgaGFzIGJlZW4gZmlsbGVkIG91dCB3aXRoIGFuc3dlcnMsIGFuZCB0aGUgY3VycmVudCBjb250ZW50IGlzIHJlZ2FyZGVkIGFzIGRlZmluaXRpdmUuXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBUaGlzIFF1ZXN0aW9ubmFpcmVSZXNwb25zZSBoYXMgYmVlbiBwYXJ0aWFsbHkgZmlsbGVkIG91dCB3aXRoIGFuc3dlcnMsIGJ1dCBjaGFuZ2VzIG9yIGFkZGl0aW9ucyBhcmUgc3RpbGwgZXhwZWN0ZWQgdG8gYmUgbWFkZSB0byBpdC5cclxuICAgKi9cclxuICBJblByb2dyZXNzOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogTGlmZWN5Y2xlIHN0YXR1cyBvZiB0aGUgcXVlc3Rpb25uYWlyZSByZXNwb25zZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBRdWVzdGlvbm5haXJlQW5zd2Vyc1N0YXR1c0NvZGluZ3M6UXVlc3Rpb25uYWlyZUFuc3dlcnNTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFtZW5kZWQ6IFRoaXMgUXVlc3Rpb25uYWlyZVJlc3BvbnNlIGhhcyBiZWVuIGZpbGxlZCBvdXQgd2l0aCBhbnN3ZXJzLCB0aGVuIG1hcmtlZCBhcyBjb21wbGV0ZSwgeWV0IGNoYW5nZXMgb3IgYWRkaXRpb25zIGhhdmUgYmVlbiBtYWRlIHRvIGl0IGFmdGVyd2FyZHMuXHJcbiAgICovXHJcbiAgQW1lbmRlZDoge1xyXG4gICAgZGlzcGxheTogXCJBbWVuZGVkXCIsXHJcbiAgICBjb2RlOiBcImFtZW5kZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3F1ZXN0aW9ubmFpcmUtYW5zd2Vycy1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhpcyBRdWVzdGlvbm5haXJlUmVzcG9uc2UgaGFzIGJlZW4gZmlsbGVkIG91dCB3aXRoIGFuc3dlcnMsIGFuZCB0aGUgY3VycmVudCBjb250ZW50IGlzIHJlZ2FyZGVkIGFzIGRlZmluaXRpdmUuXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNvbXBsZXRlZFwiLFxyXG4gICAgY29kZTogXCJjb21wbGV0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3F1ZXN0aW9ubmFpcmUtYW5zd2Vycy1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBUaGlzIFF1ZXN0aW9ubmFpcmVSZXNwb25zZSBoYXMgYmVlbiBwYXJ0aWFsbHkgZmlsbGVkIG91dCB3aXRoIGFuc3dlcnMsIGJ1dCBjaGFuZ2VzIG9yIGFkZGl0aW9ucyBhcmUgc3RpbGwgZXhwZWN0ZWQgdG8gYmUgbWFkZSB0byBpdC5cclxuICAgKi9cclxuICBJblByb2dyZXNzOiB7XHJcbiAgICBkaXNwbGF5OiBcIkluIFByb2dyZXNzXCIsXHJcbiAgICBjb2RlOiBcImluLXByb2dyZXNzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9xdWVzdGlvbm5haXJlLWFuc3dlcnMtc3RhdHVzXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19