// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-target-list-mode|3.0.2
/**
 * If field is a list, how to manage the production
 */
export const MapTargetListModeCodes = {
    /**
     * collate: re-use the first item in the list, and keep adding content to it
     */
    Collate: "collate",
    /**
     * first: when the target list is being assembled, the items for this rule go first. If more that one rule defines a first item (for a given instance of mapping) then this is an error
     */
    First: "first",
    /**
     * last: when the target list is being assembled, the items for this rule go last. If more that one rule defines a last item (for a given instance of mapping) then this is an error
     */
    Last: "last",
    /**
     * share: the target instance is shared with the target instances generated by another rule (up to the first common n items, then create new ones)
     */
    Share: "share",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwVGFyZ2V0TGlzdE1vZGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTWFwVGFyZ2V0TGlzdE1vZGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx5RUFBeUU7QUFFekU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQzs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztDQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWFwLXRhcmdldC1saXN0LW1vZGV8My4wLjJcclxuXHJcbi8qKlxyXG4gKiBJZiBmaWVsZCBpcyBhIGxpc3QsIGhvdyB0byBtYW5hZ2UgdGhlIHByb2R1Y3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBNYXBUYXJnZXRMaXN0TW9kZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbGxhdGU6IHJlLXVzZSB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIGtlZXAgYWRkaW5nIGNvbnRlbnQgdG8gaXRcclxuICAgKi9cclxuICBDb2xsYXRlOiBcImNvbGxhdGVcIixcclxuICAvKipcclxuICAgKiBmaXJzdDogd2hlbiB0aGUgdGFyZ2V0IGxpc3QgaXMgYmVpbmcgYXNzZW1ibGVkLCB0aGUgaXRlbXMgZm9yIHRoaXMgcnVsZSBnbyBmaXJzdC4gSWYgbW9yZSB0aGF0IG9uZSBydWxlIGRlZmluZXMgYSBmaXJzdCBpdGVtIChmb3IgYSBnaXZlbiBpbnN0YW5jZSBvZiBtYXBwaW5nKSB0aGVuIHRoaXMgaXMgYW4gZXJyb3JcclxuICAgKi9cclxuICBGaXJzdDogXCJmaXJzdFwiLFxyXG4gIC8qKlxyXG4gICAqIGxhc3Q6IHdoZW4gdGhlIHRhcmdldCBsaXN0IGlzIGJlaW5nIGFzc2VtYmxlZCwgdGhlIGl0ZW1zIGZvciB0aGlzIHJ1bGUgZ28gbGFzdC4gSWYgbW9yZSB0aGF0IG9uZSBydWxlIGRlZmluZXMgYSBsYXN0IGl0ZW0gKGZvciBhIGdpdmVuIGluc3RhbmNlIG9mIG1hcHBpbmcpIHRoZW4gdGhpcyBpcyBhbiBlcnJvclxyXG4gICAqL1xyXG4gIExhc3Q6IFwibGFzdFwiLFxyXG4gIC8qKlxyXG4gICAqIHNoYXJlOiB0aGUgdGFyZ2V0IGluc3RhbmNlIGlzIHNoYXJlZCB3aXRoIHRoZSB0YXJnZXQgaW5zdGFuY2VzIGdlbmVyYXRlZCBieSBhbm90aGVyIHJ1bGUgKHVwIHRvIHRoZSBmaXJzdCBjb21tb24gbiBpdGVtcywgdGhlbiBjcmVhdGUgbmV3IG9uZXMpXHJcbiAgICovXHJcbiAgU2hhcmU6IFwic2hhcmVcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBJZiBmaWVsZCBpcyBhIGxpc3QsIGhvdyB0byBtYW5hZ2UgdGhlIHByb2R1Y3Rpb25cclxuICovXHJcbmV4cG9ydCB0eXBlIE1hcFRhcmdldExpc3RNb2RlQ29kZVR5cGUgPSB0eXBlb2YgTWFwVGFyZ2V0TGlzdE1vZGVDb2Rlc1trZXlvZiB0eXBlb2YgTWFwVGFyZ2V0TGlzdE1vZGVDb2Rlc107XHJcbiJdfQ==