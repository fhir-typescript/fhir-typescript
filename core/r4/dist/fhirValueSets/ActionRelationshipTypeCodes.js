// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-relationship-type|4.0.1
/**
 * Defines the types of relationships between actions.
 */
export const ActionRelationshipTypeCodes = {
    /**
     * after: The action must be performed after the related action.
     */
    After: "after",
    /**
     * after-end: The action must be performed after the end of the related action.
     */
    AfterEnd: "after-end",
    /**
     * after-start: The action must be performed after the start of the related action.
     */
    AfterStart: "after-start",
    /**
     * before: The action must be performed before the related action.
     */
    Before: "before",
    /**
     * before-end: The action must be performed before the end of the related action.
     */
    BeforeEnd: "before-end",
    /**
     * before-start: The action must be performed before the start of the related action.
     */
    BeforeStart: "before-start",
    /**
     * concurrent: The action must be performed concurrent with the related action.
     */
    Concurrent: "concurrent",
    /**
     * concurrent-with-end: The action must be performed concurrent with the end of the related action.
     */
    ConcurrentWithEnd: "concurrent-with-end",
    /**
     * concurrent-with-start: The action must be performed concurrent with the start of the related action.
     */
    ConcurrentWithStart: "concurrent-with-start",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uUmVsYXRpb25zaGlwVHlwZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9BY3Rpb25SZWxhdGlvbnNoaXBUeXBlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsNkVBQTZFO0FBRTdFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUc7SUFDekM7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFdBQVc7SUFDckI7O09BRUc7SUFDSCxVQUFVLEVBQUUsYUFBYTtJQUN6Qjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFlBQVk7SUFDdkI7O09BRUc7SUFDSCxXQUFXLEVBQUUsY0FBYztJQUMzQjs7T0FFRztJQUNILFVBQVUsRUFBRSxZQUFZO0lBQ3hCOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUscUJBQXFCO0lBQ3hDOztPQUVHO0lBQ0gsbUJBQW1CLEVBQUUsdUJBQXVCO0NBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYWN0aW9uLXJlbGF0aW9uc2hpcC10eXBlfDQuMC4xXHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgdHlwZXMgb2YgcmVsYXRpb25zaGlwcyBiZXR3ZWVuIGFjdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWN0aW9uUmVsYXRpb25zaGlwVHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFmdGVyOiBUaGUgYWN0aW9uIG11c3QgYmUgcGVyZm9ybWVkIGFmdGVyIHRoZSByZWxhdGVkIGFjdGlvbi5cclxuICAgKi9cclxuICBBZnRlcjogXCJhZnRlclwiLFxyXG4gIC8qKlxyXG4gICAqIGFmdGVyLWVuZDogVGhlIGFjdGlvbiBtdXN0IGJlIHBlcmZvcm1lZCBhZnRlciB0aGUgZW5kIG9mIHRoZSByZWxhdGVkIGFjdGlvbi5cclxuICAgKi9cclxuICBBZnRlckVuZDogXCJhZnRlci1lbmRcIixcclxuICAvKipcclxuICAgKiBhZnRlci1zdGFydDogVGhlIGFjdGlvbiBtdXN0IGJlIHBlcmZvcm1lZCBhZnRlciB0aGUgc3RhcnQgb2YgdGhlIHJlbGF0ZWQgYWN0aW9uLlxyXG4gICAqL1xyXG4gIEFmdGVyU3RhcnQ6IFwiYWZ0ZXItc3RhcnRcIixcclxuICAvKipcclxuICAgKiBiZWZvcmU6IFRoZSBhY3Rpb24gbXVzdCBiZSBwZXJmb3JtZWQgYmVmb3JlIHRoZSByZWxhdGVkIGFjdGlvbi5cclxuICAgKi9cclxuICBCZWZvcmU6IFwiYmVmb3JlXCIsXHJcbiAgLyoqXHJcbiAgICogYmVmb3JlLWVuZDogVGhlIGFjdGlvbiBtdXN0IGJlIHBlcmZvcm1lZCBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgcmVsYXRlZCBhY3Rpb24uXHJcbiAgICovXHJcbiAgQmVmb3JlRW5kOiBcImJlZm9yZS1lbmRcIixcclxuICAvKipcclxuICAgKiBiZWZvcmUtc3RhcnQ6IFRoZSBhY3Rpb24gbXVzdCBiZSBwZXJmb3JtZWQgYmVmb3JlIHRoZSBzdGFydCBvZiB0aGUgcmVsYXRlZCBhY3Rpb24uXHJcbiAgICovXHJcbiAgQmVmb3JlU3RhcnQ6IFwiYmVmb3JlLXN0YXJ0XCIsXHJcbiAgLyoqXHJcbiAgICogY29uY3VycmVudDogVGhlIGFjdGlvbiBtdXN0IGJlIHBlcmZvcm1lZCBjb25jdXJyZW50IHdpdGggdGhlIHJlbGF0ZWQgYWN0aW9uLlxyXG4gICAqL1xyXG4gIENvbmN1cnJlbnQ6IFwiY29uY3VycmVudFwiLFxyXG4gIC8qKlxyXG4gICAqIGNvbmN1cnJlbnQtd2l0aC1lbmQ6IFRoZSBhY3Rpb24gbXVzdCBiZSBwZXJmb3JtZWQgY29uY3VycmVudCB3aXRoIHRoZSBlbmQgb2YgdGhlIHJlbGF0ZWQgYWN0aW9uLlxyXG4gICAqL1xyXG4gIENvbmN1cnJlbnRXaXRoRW5kOiBcImNvbmN1cnJlbnQtd2l0aC1lbmRcIixcclxuICAvKipcclxuICAgKiBjb25jdXJyZW50LXdpdGgtc3RhcnQ6IFRoZSBhY3Rpb24gbXVzdCBiZSBwZXJmb3JtZWQgY29uY3VycmVudCB3aXRoIHRoZSBzdGFydCBvZiB0aGUgcmVsYXRlZCBhY3Rpb24uXHJcbiAgICovXHJcbiAgQ29uY3VycmVudFdpdGhTdGFydDogXCJjb25jdXJyZW50LXdpdGgtc3RhcnRcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSB0eXBlcyBvZiByZWxhdGlvbnNoaXBzIGJldHdlZW4gYWN0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFjdGlvblJlbGF0aW9uc2hpcFR5cGVDb2RlVHlwZSA9IHR5cGVvZiBBY3Rpb25SZWxhdGlvbnNoaXBUeXBlQ29kZXNba2V5b2YgdHlwZW9mIEFjdGlvblJlbGF0aW9uc2hpcFR5cGVDb2Rlc107XHJcbiJdfQ==