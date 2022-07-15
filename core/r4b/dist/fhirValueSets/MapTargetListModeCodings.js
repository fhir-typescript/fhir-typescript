// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-target-list-mode|4.3.0
/**
 * If field is a list, how to manage the production.
 */
export const MapTargetListModeCodings = {
    /**
     * collate: re-use the first item in the list, and keep adding content to it.
     */
    Collate: {
        display: "Collate",
        code: "collate",
        system: "http://hl7.org/fhir/map-target-list-mode",
    },
    /**
     * first: when the target list is being assembled, the items for this rule go first. If more than one rule defines a first item (for a given instance of mapping) then this is an error.
     */
    First: {
        display: "First",
        code: "first",
        system: "http://hl7.org/fhir/map-target-list-mode",
    },
    /**
     * last: when the target list is being assembled, the items for this rule go last. If more than one rule defines a last item (for a given instance of mapping) then this is an error.
     */
    Last: {
        display: "Last",
        code: "last",
        system: "http://hl7.org/fhir/map-target-list-mode",
    },
    /**
     * share: the target instance is shared with the target instances generated by another rule (up to the first common n items, then create new ones).
     */
    Share: {
        display: "Share",
        code: "share",
        system: "http://hl7.org/fhir/map-target-list-mode",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwVGFyZ2V0TGlzdE1vZGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9NYXBUYXJnZXRMaXN0TW9kZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMseUVBQXlFO0FBMEJ6RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUErQjtJQUNsRTs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWFwLXRhcmdldC1saXN0LW1vZGV8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBJZiBmaWVsZCBpcyBhIGxpc3QsIGhvdyB0byBtYW5hZ2UgdGhlIHByb2R1Y3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNYXBUYXJnZXRMaXN0TW9kZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY29sbGF0ZTogcmUtdXNlIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0LCBhbmQga2VlcCBhZGRpbmcgY29udGVudCB0byBpdC5cclxuICAgKi9cclxuICBDb2xsYXRlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGZpcnN0OiB3aGVuIHRoZSB0YXJnZXQgbGlzdCBpcyBiZWluZyBhc3NlbWJsZWQsIHRoZSBpdGVtcyBmb3IgdGhpcyBydWxlIGdvIGZpcnN0LiBJZiBtb3JlIHRoYW4gb25lIHJ1bGUgZGVmaW5lcyBhIGZpcnN0IGl0ZW0gKGZvciBhIGdpdmVuIGluc3RhbmNlIG9mIG1hcHBpbmcpIHRoZW4gdGhpcyBpcyBhbiBlcnJvci5cclxuICAgKi9cclxuICBGaXJzdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBsYXN0OiB3aGVuIHRoZSB0YXJnZXQgbGlzdCBpcyBiZWluZyBhc3NlbWJsZWQsIHRoZSBpdGVtcyBmb3IgdGhpcyBydWxlIGdvIGxhc3QuIElmIG1vcmUgdGhhbiBvbmUgcnVsZSBkZWZpbmVzIGEgbGFzdCBpdGVtIChmb3IgYSBnaXZlbiBpbnN0YW5jZSBvZiBtYXBwaW5nKSB0aGVuIHRoaXMgaXMgYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgTGFzdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzaGFyZTogdGhlIHRhcmdldCBpbnN0YW5jZSBpcyBzaGFyZWQgd2l0aCB0aGUgdGFyZ2V0IGluc3RhbmNlcyBnZW5lcmF0ZWQgYnkgYW5vdGhlciBydWxlICh1cCB0byB0aGUgZmlyc3QgY29tbW9uIG4gaXRlbXMsIHRoZW4gY3JlYXRlIG5ldyBvbmVzKS5cclxuICAgKi9cclxuICBTaGFyZTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIElmIGZpZWxkIGlzIGEgbGlzdCwgaG93IHRvIG1hbmFnZSB0aGUgcHJvZHVjdGlvbi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBNYXBUYXJnZXRMaXN0TW9kZUNvZGluZ3M6TWFwVGFyZ2V0TGlzdE1vZGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbGxhdGU6IHJlLXVzZSB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIGtlZXAgYWRkaW5nIGNvbnRlbnQgdG8gaXQuXHJcbiAgICovXHJcbiAgQ29sbGF0ZToge1xyXG4gICAgZGlzcGxheTogXCJDb2xsYXRlXCIsXHJcbiAgICBjb2RlOiBcImNvbGxhdGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21hcC10YXJnZXQtbGlzdC1tb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBmaXJzdDogd2hlbiB0aGUgdGFyZ2V0IGxpc3QgaXMgYmVpbmcgYXNzZW1ibGVkLCB0aGUgaXRlbXMgZm9yIHRoaXMgcnVsZSBnbyBmaXJzdC4gSWYgbW9yZSB0aGFuIG9uZSBydWxlIGRlZmluZXMgYSBmaXJzdCBpdGVtIChmb3IgYSBnaXZlbiBpbnN0YW5jZSBvZiBtYXBwaW5nKSB0aGVuIHRoaXMgaXMgYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgRmlyc3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiRmlyc3RcIixcclxuICAgIGNvZGU6IFwiZmlyc3RcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21hcC10YXJnZXQtbGlzdC1tb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBsYXN0OiB3aGVuIHRoZSB0YXJnZXQgbGlzdCBpcyBiZWluZyBhc3NlbWJsZWQsIHRoZSBpdGVtcyBmb3IgdGhpcyBydWxlIGdvIGxhc3QuIElmIG1vcmUgdGhhbiBvbmUgcnVsZSBkZWZpbmVzIGEgbGFzdCBpdGVtIChmb3IgYSBnaXZlbiBpbnN0YW5jZSBvZiBtYXBwaW5nKSB0aGVuIHRoaXMgaXMgYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgTGFzdDoge1xyXG4gICAgZGlzcGxheTogXCJMYXN0XCIsXHJcbiAgICBjb2RlOiBcImxhc3RcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21hcC10YXJnZXQtbGlzdC1tb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBzaGFyZTogdGhlIHRhcmdldCBpbnN0YW5jZSBpcyBzaGFyZWQgd2l0aCB0aGUgdGFyZ2V0IGluc3RhbmNlcyBnZW5lcmF0ZWQgYnkgYW5vdGhlciBydWxlICh1cCB0byB0aGUgZmlyc3QgY29tbW9uIG4gaXRlbXMsIHRoZW4gY3JlYXRlIG5ldyBvbmVzKS5cclxuICAgKi9cclxuICBTaGFyZToge1xyXG4gICAgZGlzcGxheTogXCJTaGFyZVwiLFxyXG4gICAgY29kZTogXCJzaGFyZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWFwLXRhcmdldC1saXN0LW1vZGVcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=