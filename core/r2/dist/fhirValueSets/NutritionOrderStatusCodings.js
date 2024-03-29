// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/nutrition-order-status|1.0.2
/**
 * Codes specifying the state of the request. Describes the lifecycle of the nutrition order.
 */
export const NutritionOrderStatusCodings = {
    /**
     * active: The request is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    Active: {
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/nutrition-order-status",
    },
    /**
     * cancelled: The request has been withdrawn and is no longer actionable.
     */
    Cancelled: {
        display: "Cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/nutrition-order-status",
    },
    /**
     * completed: All actions that are implied by the order have occurred and no continuation is planned (this will rarely be made explicit).
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/nutrition-order-status",
    },
    /**
     * draft: The request is in preliminary form prior to being sent.
     */
    Draft: {
        display: "Draft",
        code: "draft",
        system: "http://hl7.org/fhir/nutrition-order-status",
    },
    /**
     * on-hold: Actions implied by the request have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    OnHold: {
        display: "On-Hold",
        code: "on-hold",
        system: "http://hl7.org/fhir/nutrition-order-status",
    },
    /**
     * planned: The request has been planned.
     */
    Planned: {
        display: "Planned",
        code: "planned",
        system: "http://hl7.org/fhir/nutrition-order-status",
    },
    /**
     * proposed: The request has been proposed.
     */
    Proposed: {
        display: "Proposed",
        code: "proposed",
        system: "http://hl7.org/fhir/nutrition-order-status",
    },
    /**
     * requested: The request has been placed.
     */
    Requested: {
        display: "Requested",
        code: "requested",
        system: "http://hl7.org/fhir/nutrition-order-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnV0cml0aW9uT3JkZXJTdGF0dXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9OdXRyaXRpb25PcmRlclN0YXR1c0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkVBQTJFO0FBMEMzRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFrQztJQUN4RTs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsNENBQTRDO0tBQ3JEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSw0Q0FBNEM7S0FDckQ7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbnV0cml0aW9uLW9yZGVyLXN0YXR1c3wxLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENvZGVzIHNwZWNpZnlpbmcgdGhlIHN0YXRlIG9mIHRoZSByZXF1ZXN0LiBEZXNjcmliZXMgdGhlIGxpZmVjeWNsZSBvZiB0aGUgbnV0cml0aW9uIG9yZGVyLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTnV0cml0aW9uT3JkZXJTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjdGl2ZTogVGhlIHJlcXVlc3QgaXMgJ2FjdGlvbmFibGUnLCBidXQgbm90IGFsbCBhY3Rpb25zIHRoYXQgYXJlIGltcGxpZWQgYnkgaXQgaGF2ZSBvY2N1cnJlZCB5ZXQuXHJcbiAgICovXHJcbiAgQWN0aXZlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogVGhlIHJlcXVlc3QgaGFzIGJlZW4gd2l0aGRyYXduIGFuZCBpcyBubyBsb25nZXIgYWN0aW9uYWJsZS5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBBbGwgYWN0aW9ucyB0aGF0IGFyZSBpbXBsaWVkIGJ5IHRoZSBvcmRlciBoYXZlIG9jY3VycmVkIGFuZCBubyBjb250aW51YXRpb24gaXMgcGxhbm5lZCAodGhpcyB3aWxsIHJhcmVseSBiZSBtYWRlIGV4cGxpY2l0KS5cclxuICAgKi9cclxuICBDb21wbGV0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZHJhZnQ6IFRoZSByZXF1ZXN0IGlzIGluIHByZWxpbWluYXJ5IGZvcm0gcHJpb3IgdG8gYmVpbmcgc2VudC5cclxuICAgKi9cclxuICBEcmFmdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBvbi1ob2xkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIHJlcXVlc3QgaGF2ZSBiZWVuIHRlbXBvcmFyaWx5IGhhbHRlZCwgYnV0IGFyZSBleHBlY3RlZCB0byBjb250aW51ZSBsYXRlci4gTWF5IGFsc28gYmUgY2FsbGVkIFwic3VzcGVuZGVkXCIuXHJcbiAgICovXHJcbiAgT25Ib2xkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHBsYW5uZWQ6IFRoZSByZXF1ZXN0IGhhcyBiZWVuIHBsYW5uZWQuXHJcbiAgICovXHJcbiAgUGxhbm5lZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwcm9wb3NlZDogVGhlIHJlcXVlc3QgaGFzIGJlZW4gcHJvcG9zZWQuXHJcbiAgICovXHJcbiAgUHJvcG9zZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmVxdWVzdGVkOiBUaGUgcmVxdWVzdCBoYXMgYmVlbiBwbGFjZWQuXHJcbiAgICovXHJcbiAgUmVxdWVzdGVkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQ29kZXMgc3BlY2lmeWluZyB0aGUgc3RhdGUgb2YgdGhlIHJlcXVlc3QuIERlc2NyaWJlcyB0aGUgbGlmZWN5Y2xlIG9mIHRoZSBudXRyaXRpb24gb3JkZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTnV0cml0aW9uT3JkZXJTdGF0dXNDb2RpbmdzOk51dHJpdGlvbk9yZGVyU3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhY3RpdmU6IFRoZSByZXF1ZXN0IGlzICdhY3Rpb25hYmxlJywgYnV0IG5vdCBhbGwgYWN0aW9ucyB0aGF0IGFyZSBpbXBsaWVkIGJ5IGl0IGhhdmUgb2NjdXJyZWQgeWV0LlxyXG4gICAqL1xyXG4gIEFjdGl2ZToge1xyXG4gICAgZGlzcGxheTogXCJBY3RpdmVcIixcclxuICAgIGNvZGU6IFwiYWN0aXZlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9udXRyaXRpb24tb3JkZXItc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBjYW5jZWxsZWQ6IFRoZSByZXF1ZXN0IGhhcyBiZWVuIHdpdGhkcmF3biBhbmQgaXMgbm8gbG9uZ2VyIGFjdGlvbmFibGUuXHJcbiAgICovXHJcbiAgQ2FuY2VsbGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNhbmNlbGxlZFwiLFxyXG4gICAgY29kZTogXCJjYW5jZWxsZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL251dHJpdGlvbi1vcmRlci1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogQWxsIGFjdGlvbnMgdGhhdCBhcmUgaW1wbGllZCBieSB0aGUgb3JkZXIgaGF2ZSBvY2N1cnJlZCBhbmQgbm8gY29udGludWF0aW9uIGlzIHBsYW5uZWQgKHRoaXMgd2lsbCByYXJlbHkgYmUgbWFkZSBleHBsaWNpdCkuXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNvbXBsZXRlZFwiLFxyXG4gICAgY29kZTogXCJjb21wbGV0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL251dHJpdGlvbi1vcmRlci1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRyYWZ0OiBUaGUgcmVxdWVzdCBpcyBpbiBwcmVsaW1pbmFyeSBmb3JtIHByaW9yIHRvIGJlaW5nIHNlbnQuXHJcbiAgICovXHJcbiAgRHJhZnQ6IHtcclxuICAgIGRpc3BsYXk6IFwiRHJhZnRcIixcclxuICAgIGNvZGU6IFwiZHJhZnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL251dHJpdGlvbi1vcmRlci1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG9uLWhvbGQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgcmVxdWVzdCBoYXZlIGJlZW4gdGVtcG9yYXJpbHkgaGFsdGVkLCBidXQgYXJlIGV4cGVjdGVkIHRvIGNvbnRpbnVlIGxhdGVyLiBNYXkgYWxzbyBiZSBjYWxsZWQgXCJzdXNwZW5kZWRcIi5cclxuICAgKi9cclxuICBPbkhvbGQ6IHtcclxuICAgIGRpc3BsYXk6IFwiT24tSG9sZFwiLFxyXG4gICAgY29kZTogXCJvbi1ob2xkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9udXRyaXRpb24tb3JkZXItc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwbGFubmVkOiBUaGUgcmVxdWVzdCBoYXMgYmVlbiBwbGFubmVkLlxyXG4gICAqL1xyXG4gIFBsYW5uZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUGxhbm5lZFwiLFxyXG4gICAgY29kZTogXCJwbGFubmVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9udXRyaXRpb24tb3JkZXItc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwcm9wb3NlZDogVGhlIHJlcXVlc3QgaGFzIGJlZW4gcHJvcG9zZWQuXHJcbiAgICovXHJcbiAgUHJvcG9zZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUHJvcG9zZWRcIixcclxuICAgIGNvZGU6IFwicHJvcG9zZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL251dHJpdGlvbi1vcmRlci1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlcXVlc3RlZDogVGhlIHJlcXVlc3QgaGFzIGJlZW4gcGxhY2VkLlxyXG4gICAqL1xyXG4gIFJlcXVlc3RlZDoge1xyXG4gICAgZGlzcGxheTogXCJSZXF1ZXN0ZWRcIixcclxuICAgIGNvZGU6IFwicmVxdWVzdGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9udXRyaXRpb24tb3JkZXItc3RhdHVzXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19