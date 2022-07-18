// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/questionnaire-answers-status|4.3.0
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
     * completed: This QuestionnaireResponse has been filled out with answers and the current content is regarded as definitive.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/questionnaire-answers-status",
    },
    /**
     * entered-in-error: This QuestionnaireResponse was entered in error and voided.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/questionnaire-answers-status",
    },
    /**
     * in-progress: This QuestionnaireResponse has been partially filled out with answers but changes or additions are still expected to be made to it.
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/questionnaire-answers-status",
    },
    /**
     * stopped: This QuestionnaireResponse has been partially filled out with answers but has been abandoned. It is unknown whether changes or additions are expected to be made to it.
     */
    Stopped: {
        display: "Stopped",
        code: "stopped",
        system: "http://hl7.org/fhir/questionnaire-answers-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25uYWlyZUFuc3dlcnNTdGF0dXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9RdWVzdGlvbm5haXJlQW5zd2Vyc1N0YXR1c0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsaUZBQWlGO0FBOEJqRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUF3QztJQUNwRjs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRDtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSxrREFBa0Q7S0FDM0Q7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSxrREFBa0Q7S0FDM0Q7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3F1ZXN0aW9ubmFpcmUtYW5zd2Vycy1zdGF0dXN8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBMaWZlY3ljbGUgc3RhdHVzIG9mIHRoZSBxdWVzdGlvbm5haXJlIHJlc3BvbnNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUXVlc3Rpb25uYWlyZUFuc3dlcnNTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFtZW5kZWQ6IFRoaXMgUXVlc3Rpb25uYWlyZVJlc3BvbnNlIGhhcyBiZWVuIGZpbGxlZCBvdXQgd2l0aCBhbnN3ZXJzLCB0aGVuIG1hcmtlZCBhcyBjb21wbGV0ZSwgeWV0IGNoYW5nZXMgb3IgYWRkaXRpb25zIGhhdmUgYmVlbiBtYWRlIHRvIGl0IGFmdGVyd2FyZHMuXHJcbiAgICovXHJcbiAgQW1lbmRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IFRoaXMgUXVlc3Rpb25uYWlyZVJlc3BvbnNlIGhhcyBiZWVuIGZpbGxlZCBvdXQgd2l0aCBhbnN3ZXJzIGFuZCB0aGUgY3VycmVudCBjb250ZW50IGlzIHJlZ2FyZGVkIGFzIGRlZmluaXRpdmUuXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoaXMgUXVlc3Rpb25uYWlyZVJlc3BvbnNlIHdhcyBlbnRlcmVkIGluIGVycm9yIGFuZCB2b2lkZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoaXMgUXVlc3Rpb25uYWlyZVJlc3BvbnNlIGhhcyBiZWVuIHBhcnRpYWxseSBmaWxsZWQgb3V0IHdpdGggYW5zd2VycyBidXQgY2hhbmdlcyBvciBhZGRpdGlvbnMgYXJlIHN0aWxsIGV4cGVjdGVkIHRvIGJlIG1hZGUgdG8gaXQuXHJcbiAgICovXHJcbiAgSW5Qcm9ncmVzczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdG9wcGVkOiBUaGlzIFF1ZXN0aW9ubmFpcmVSZXNwb25zZSBoYXMgYmVlbiBwYXJ0aWFsbHkgZmlsbGVkIG91dCB3aXRoIGFuc3dlcnMgYnV0IGhhcyBiZWVuIGFiYW5kb25lZC4gSXQgaXMgdW5rbm93biB3aGV0aGVyIGNoYW5nZXMgb3IgYWRkaXRpb25zIGFyZSBleHBlY3RlZCB0byBiZSBtYWRlIHRvIGl0LlxyXG4gICAqL1xyXG4gIFN0b3BwZWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaWZlY3ljbGUgc3RhdHVzIG9mIHRoZSBxdWVzdGlvbm5haXJlIHJlc3BvbnNlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9ubmFpcmVBbnN3ZXJzU3RhdHVzQ29kaW5nczpRdWVzdGlvbm5haXJlQW5zd2Vyc1N0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYW1lbmRlZDogVGhpcyBRdWVzdGlvbm5haXJlUmVzcG9uc2UgaGFzIGJlZW4gZmlsbGVkIG91dCB3aXRoIGFuc3dlcnMsIHRoZW4gbWFya2VkIGFzIGNvbXBsZXRlLCB5ZXQgY2hhbmdlcyBvciBhZGRpdGlvbnMgaGF2ZSBiZWVuIG1hZGUgdG8gaXQgYWZ0ZXJ3YXJkcy5cclxuICAgKi9cclxuICBBbWVuZGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFtZW5kZWRcIixcclxuICAgIGNvZGU6IFwiYW1lbmRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcXVlc3Rpb25uYWlyZS1hbnN3ZXJzLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBUaGlzIFF1ZXN0aW9ubmFpcmVSZXNwb25zZSBoYXMgYmVlbiBmaWxsZWQgb3V0IHdpdGggYW5zd2VycyBhbmQgdGhlIGN1cnJlbnQgY29udGVudCBpcyByZWdhcmRlZCBhcyBkZWZpbml0aXZlLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDoge1xyXG4gICAgZGlzcGxheTogXCJDb21wbGV0ZWRcIixcclxuICAgIGNvZGU6IFwiY29tcGxldGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9xdWVzdGlvbm5haXJlLWFuc3dlcnMtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGlzIFF1ZXN0aW9ubmFpcmVSZXNwb25zZSB3YXMgZW50ZXJlZCBpbiBlcnJvciBhbmQgdm9pZGVkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVudGVyZWQgaW4gRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcXVlc3Rpb25uYWlyZS1hbnN3ZXJzLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoaXMgUXVlc3Rpb25uYWlyZVJlc3BvbnNlIGhhcyBiZWVuIHBhcnRpYWxseSBmaWxsZWQgb3V0IHdpdGggYW5zd2VycyBidXQgY2hhbmdlcyBvciBhZGRpdGlvbnMgYXJlIHN0aWxsIGV4cGVjdGVkIHRvIGJlIG1hZGUgdG8gaXQuXHJcbiAgICovXHJcbiAgSW5Qcm9ncmVzczoge1xyXG4gICAgZGlzcGxheTogXCJJbiBQcm9ncmVzc1wiLFxyXG4gICAgY29kZTogXCJpbi1wcm9ncmVzc1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcXVlc3Rpb25uYWlyZS1hbnN3ZXJzLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc3RvcHBlZDogVGhpcyBRdWVzdGlvbm5haXJlUmVzcG9uc2UgaGFzIGJlZW4gcGFydGlhbGx5IGZpbGxlZCBvdXQgd2l0aCBhbnN3ZXJzIGJ1dCBoYXMgYmVlbiBhYmFuZG9uZWQuIEl0IGlzIHVua25vd24gd2hldGhlciBjaGFuZ2VzIG9yIGFkZGl0aW9ucyBhcmUgZXhwZWN0ZWQgdG8gYmUgbWFkZSB0byBpdC5cclxuICAgKi9cclxuICBTdG9wcGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlN0b3BwZWRcIixcclxuICAgIGNvZGU6IFwic3RvcHBlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcXVlc3Rpb25uYWlyZS1hbnN3ZXJzLXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==