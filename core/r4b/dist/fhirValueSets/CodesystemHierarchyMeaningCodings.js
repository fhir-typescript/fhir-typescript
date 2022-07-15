// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/codesystem-hierarchy-meaning|4.3.0
/**
 * The meaning of the hierarchy of concepts in a code system.
 */
export const CodesystemHierarchyMeaningCodings = {
    /**
     * classified-with: Child concepts in the hierarchy may have only one parent, and there is a presumption that the code system is a "closed world" meaning all things must be in the hierarchy. This results in concepts such as "not otherwise classified.".
     */
    ClassifiedWith: {
        display: "Classified With",
        code: "classified-with",
        system: "http://hl7.org/fhir/codesystem-hierarchy-meaning",
    },
    /**
     * grouped-by: No particular relationship between the concepts can be assumed, except what can be determined by inspection of the definitions of the elements (possible reasons to use this: importing from a source where this is not defined, or where various parts of the hierarchy have different meanings).
     */
    GroupedBy: {
        display: "Grouped By",
        code: "grouped-by",
        system: "http://hl7.org/fhir/codesystem-hierarchy-meaning",
    },
    /**
     * is-a: A hierarchy where the child concepts have an IS-A relationship with the parents - that is, all the properties of the parent are also true for its child concepts. Not that is-a is a property of the concepts, so additional subsumption relationships may be defined using properties or the [subsumes](extension-codesystem-subsumes.html) extension.
     */
    IsA: {
        display: "Is-A",
        code: "is-a",
        system: "http://hl7.org/fhir/codesystem-hierarchy-meaning",
    },
    /**
     * part-of: Child elements list the individual parts of a composite whole (e.g. body site).
     */
    PartOf: {
        display: "Part Of",
        code: "part-of",
        system: "http://hl7.org/fhir/codesystem-hierarchy-meaning",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29kZXN5c3RlbUhpZXJhcmNoeU1lYW5pbmdDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Db2Rlc3lzdGVtSGllcmFyY2h5TWVhbmluZ0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsaUZBQWlGO0FBMEJqRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUF3QztJQUNwRjs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixNQUFNLEVBQUUsa0RBQWtEO0tBQzNEO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsa0RBQWtEO0tBQzNEO0lBQ0Q7O09BRUc7SUFDSCxHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLGtEQUFrRDtLQUMzRDtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsa0RBQWtEO0tBQzNEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29kZXN5c3RlbS1oaWVyYXJjaHktbWVhbmluZ3w0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtZWFuaW5nIG9mIHRoZSBoaWVyYXJjaHkgb2YgY29uY2VwdHMgaW4gYSBjb2RlIHN5c3RlbS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvZGVzeXN0ZW1IaWVyYXJjaHlNZWFuaW5nQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjbGFzc2lmaWVkLXdpdGg6IENoaWxkIGNvbmNlcHRzIGluIHRoZSBoaWVyYXJjaHkgbWF5IGhhdmUgb25seSBvbmUgcGFyZW50LCBhbmQgdGhlcmUgaXMgYSBwcmVzdW1wdGlvbiB0aGF0IHRoZSBjb2RlIHN5c3RlbSBpcyBhIFwiY2xvc2VkIHdvcmxkXCIgbWVhbmluZyBhbGwgdGhpbmdzIG11c3QgYmUgaW4gdGhlIGhpZXJhcmNoeS4gVGhpcyByZXN1bHRzIGluIGNvbmNlcHRzIHN1Y2ggYXMgXCJub3Qgb3RoZXJ3aXNlIGNsYXNzaWZpZWQuXCIuXHJcbiAgICovXHJcbiAgQ2xhc3NpZmllZFdpdGg6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZ3JvdXBlZC1ieTogTm8gcGFydGljdWxhciByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgY29uY2VwdHMgY2FuIGJlIGFzc3VtZWQsIGV4Y2VwdCB3aGF0IGNhbiBiZSBkZXRlcm1pbmVkIGJ5IGluc3BlY3Rpb24gb2YgdGhlIGRlZmluaXRpb25zIG9mIHRoZSBlbGVtZW50cyAocG9zc2libGUgcmVhc29ucyB0byB1c2UgdGhpczogaW1wb3J0aW5nIGZyb20gYSBzb3VyY2Ugd2hlcmUgdGhpcyBpcyBub3QgZGVmaW5lZCwgb3Igd2hlcmUgdmFyaW91cyBwYXJ0cyBvZiB0aGUgaGllcmFyY2h5IGhhdmUgZGlmZmVyZW50IG1lYW5pbmdzKS5cclxuICAgKi9cclxuICBHcm91cGVkQnk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaXMtYTogQSBoaWVyYXJjaHkgd2hlcmUgdGhlIGNoaWxkIGNvbmNlcHRzIGhhdmUgYW4gSVMtQSByZWxhdGlvbnNoaXAgd2l0aCB0aGUgcGFyZW50cyAtIHRoYXQgaXMsIGFsbCB0aGUgcHJvcGVydGllcyBvZiB0aGUgcGFyZW50IGFyZSBhbHNvIHRydWUgZm9yIGl0cyBjaGlsZCBjb25jZXB0cy4gTm90IHRoYXQgaXMtYSBpcyBhIHByb3BlcnR5IG9mIHRoZSBjb25jZXB0cywgc28gYWRkaXRpb25hbCBzdWJzdW1wdGlvbiByZWxhdGlvbnNoaXBzIG1heSBiZSBkZWZpbmVkIHVzaW5nIHByb3BlcnRpZXMgb3IgdGhlIFtzdWJzdW1lc10oZXh0ZW5zaW9uLWNvZGVzeXN0ZW0tc3Vic3VtZXMuaHRtbCkgZXh0ZW5zaW9uLlxyXG4gICAqL1xyXG4gIElzQTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwYXJ0LW9mOiBDaGlsZCBlbGVtZW50cyBsaXN0IHRoZSBpbmRpdmlkdWFsIHBhcnRzIG9mIGEgY29tcG9zaXRlIHdob2xlIChlLmcuIGJvZHkgc2l0ZSkuXHJcbiAgICovXHJcbiAgUGFydE9mOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIG1lYW5pbmcgb2YgdGhlIGhpZXJhcmNoeSBvZiBjb25jZXB0cyBpbiBhIGNvZGUgc3lzdGVtLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvZGVzeXN0ZW1IaWVyYXJjaHlNZWFuaW5nQ29kaW5nczpDb2Rlc3lzdGVtSGllcmFyY2h5TWVhbmluZ0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY2xhc3NpZmllZC13aXRoOiBDaGlsZCBjb25jZXB0cyBpbiB0aGUgaGllcmFyY2h5IG1heSBoYXZlIG9ubHkgb25lIHBhcmVudCwgYW5kIHRoZXJlIGlzIGEgcHJlc3VtcHRpb24gdGhhdCB0aGUgY29kZSBzeXN0ZW0gaXMgYSBcImNsb3NlZCB3b3JsZFwiIG1lYW5pbmcgYWxsIHRoaW5ncyBtdXN0IGJlIGluIHRoZSBoaWVyYXJjaHkuIFRoaXMgcmVzdWx0cyBpbiBjb25jZXB0cyBzdWNoIGFzIFwibm90IG90aGVyd2lzZSBjbGFzc2lmaWVkLlwiLlxyXG4gICAqL1xyXG4gIENsYXNzaWZpZWRXaXRoOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNsYXNzaWZpZWQgV2l0aFwiLFxyXG4gICAgY29kZTogXCJjbGFzc2lmaWVkLXdpdGhcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvZGVzeXN0ZW0taGllcmFyY2h5LW1lYW5pbmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGdyb3VwZWQtYnk6IE5vIHBhcnRpY3VsYXIgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIGNvbmNlcHRzIGNhbiBiZSBhc3N1bWVkLCBleGNlcHQgd2hhdCBjYW4gYmUgZGV0ZXJtaW5lZCBieSBpbnNwZWN0aW9uIG9mIHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgZWxlbWVudHMgKHBvc3NpYmxlIHJlYXNvbnMgdG8gdXNlIHRoaXM6IGltcG9ydGluZyBmcm9tIGEgc291cmNlIHdoZXJlIHRoaXMgaXMgbm90IGRlZmluZWQsIG9yIHdoZXJlIHZhcmlvdXMgcGFydHMgb2YgdGhlIGhpZXJhcmNoeSBoYXZlIGRpZmZlcmVudCBtZWFuaW5ncykuXHJcbiAgICovXHJcbiAgR3JvdXBlZEJ5OiB7XHJcbiAgICBkaXNwbGF5OiBcIkdyb3VwZWQgQnlcIixcclxuICAgIGNvZGU6IFwiZ3JvdXBlZC1ieVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29kZXN5c3RlbS1oaWVyYXJjaHktbWVhbmluZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaXMtYTogQSBoaWVyYXJjaHkgd2hlcmUgdGhlIGNoaWxkIGNvbmNlcHRzIGhhdmUgYW4gSVMtQSByZWxhdGlvbnNoaXAgd2l0aCB0aGUgcGFyZW50cyAtIHRoYXQgaXMsIGFsbCB0aGUgcHJvcGVydGllcyBvZiB0aGUgcGFyZW50IGFyZSBhbHNvIHRydWUgZm9yIGl0cyBjaGlsZCBjb25jZXB0cy4gTm90IHRoYXQgaXMtYSBpcyBhIHByb3BlcnR5IG9mIHRoZSBjb25jZXB0cywgc28gYWRkaXRpb25hbCBzdWJzdW1wdGlvbiByZWxhdGlvbnNoaXBzIG1heSBiZSBkZWZpbmVkIHVzaW5nIHByb3BlcnRpZXMgb3IgdGhlIFtzdWJzdW1lc10oZXh0ZW5zaW9uLWNvZGVzeXN0ZW0tc3Vic3VtZXMuaHRtbCkgZXh0ZW5zaW9uLlxyXG4gICAqL1xyXG4gIElzQToge1xyXG4gICAgZGlzcGxheTogXCJJcy1BXCIsXHJcbiAgICBjb2RlOiBcImlzLWFcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvZGVzeXN0ZW0taGllcmFyY2h5LW1lYW5pbmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBhcnQtb2Y6IENoaWxkIGVsZW1lbnRzIGxpc3QgdGhlIGluZGl2aWR1YWwgcGFydHMgb2YgYSBjb21wb3NpdGUgd2hvbGUgKGUuZy4gYm9keSBzaXRlKS5cclxuICAgKi9cclxuICBQYXJ0T2Y6IHtcclxuICAgIGRpc3BsYXk6IFwiUGFydCBPZlwiLFxyXG4gICAgY29kZTogXCJwYXJ0LW9mXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb2Rlc3lzdGVtLWhpZXJhcmNoeS1tZWFuaW5nXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19