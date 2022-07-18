// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-grouping-behavior|3.0.2
/**
 * Defines organization behavior of a group
 */
export const ActionGroupingBehaviorCodings = {
    /**
     * logical-group: A group with this behavior logically groups its sub-elements, and may be shown as a visual group to the end user, but it is not required to do so
     */
    LogicalGroup: {
        display: "Logical Group",
        code: "logical-group",
        system: "http://hl7.org/fhir/action-grouping-behavior",
    },
    /**
     * sentence-group: A group of related alternative actions is a sentence group if the target referenced by the action is the same in all the actions and each action simply constitutes a different variation on how to specify the details for the target. For example, two actions that could be in a SentenceGroup are "aspirin, 500 mg, 2 times per day" and "aspirin, 300 mg, 3 times per day". In both cases, aspirin is the target referenced by the action, and the two actions represent different options for how aspirin might be ordered for the patient. Note that a SentenceGroup would almost always have an associated selection behavior of "AtMostOne", unless it's a required action, in which case, it would be "ExactlyOne"
     */
    SentenceGroup: {
        display: "Sentence Group",
        code: "sentence-group",
        system: "http://hl7.org/fhir/action-grouping-behavior",
    },
    /**
     * visual-group: Any group marked with this behavior should be displayed as a visual group to the end user
     */
    VisualGroup: {
        display: "Visual Group",
        code: "visual-group",
        system: "http://hl7.org/fhir/action-grouping-behavior",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uR3JvdXBpbmdCZWhhdmlvckNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0FjdGlvbkdyb3VwaW5nQmVoYXZpb3JDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDZFQUE2RTtBQXNCN0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBb0M7SUFDNUU7O09BRUc7SUFDSCxZQUFZLEVBQUU7UUFDWixPQUFPLEVBQUUsZUFBZTtRQUN4QixJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLGNBQWM7UUFDdkIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYWN0aW9uLWdyb3VwaW5nLWJlaGF2aW9yfDMuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogRGVmaW5lcyBvcmdhbml6YXRpb24gYmVoYXZpb3Igb2YgYSBncm91cFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQWN0aW9uR3JvdXBpbmdCZWhhdmlvckNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogbG9naWNhbC1ncm91cDogQSBncm91cCB3aXRoIHRoaXMgYmVoYXZpb3IgbG9naWNhbGx5IGdyb3VwcyBpdHMgc3ViLWVsZW1lbnRzLCBhbmQgbWF5IGJlIHNob3duIGFzIGEgdmlzdWFsIGdyb3VwIHRvIHRoZSBlbmQgdXNlciwgYnV0IGl0IGlzIG5vdCByZXF1aXJlZCB0byBkbyBzb1xyXG4gICAqL1xyXG4gIExvZ2ljYWxHcm91cDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzZW50ZW5jZS1ncm91cDogQSBncm91cCBvZiByZWxhdGVkIGFsdGVybmF0aXZlIGFjdGlvbnMgaXMgYSBzZW50ZW5jZSBncm91cCBpZiB0aGUgdGFyZ2V0IHJlZmVyZW5jZWQgYnkgdGhlIGFjdGlvbiBpcyB0aGUgc2FtZSBpbiBhbGwgdGhlIGFjdGlvbnMgYW5kIGVhY2ggYWN0aW9uIHNpbXBseSBjb25zdGl0dXRlcyBhIGRpZmZlcmVudCB2YXJpYXRpb24gb24gaG93IHRvIHNwZWNpZnkgdGhlIGRldGFpbHMgZm9yIHRoZSB0YXJnZXQuIEZvciBleGFtcGxlLCB0d28gYWN0aW9ucyB0aGF0IGNvdWxkIGJlIGluIGEgU2VudGVuY2VHcm91cCBhcmUgXCJhc3BpcmluLCA1MDAgbWcsIDIgdGltZXMgcGVyIGRheVwiIGFuZCBcImFzcGlyaW4sIDMwMCBtZywgMyB0aW1lcyBwZXIgZGF5XCIuIEluIGJvdGggY2FzZXMsIGFzcGlyaW4gaXMgdGhlIHRhcmdldCByZWZlcmVuY2VkIGJ5IHRoZSBhY3Rpb24sIGFuZCB0aGUgdHdvIGFjdGlvbnMgcmVwcmVzZW50IGRpZmZlcmVudCBvcHRpb25zIGZvciBob3cgYXNwaXJpbiBtaWdodCBiZSBvcmRlcmVkIGZvciB0aGUgcGF0aWVudC4gTm90ZSB0aGF0IGEgU2VudGVuY2VHcm91cCB3b3VsZCBhbG1vc3QgYWx3YXlzIGhhdmUgYW4gYXNzb2NpYXRlZCBzZWxlY3Rpb24gYmVoYXZpb3Igb2YgXCJBdE1vc3RPbmVcIiwgdW5sZXNzIGl0J3MgYSByZXF1aXJlZCBhY3Rpb24sIGluIHdoaWNoIGNhc2UsIGl0IHdvdWxkIGJlIFwiRXhhY3RseU9uZVwiXHJcbiAgICovXHJcbiAgU2VudGVuY2VHcm91cDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB2aXN1YWwtZ3JvdXA6IEFueSBncm91cCBtYXJrZWQgd2l0aCB0aGlzIGJlaGF2aW9yIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYSB2aXN1YWwgZ3JvdXAgdG8gdGhlIGVuZCB1c2VyXHJcbiAgICovXHJcbiAgVmlzdWFsR3JvdXA6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIG9yZ2FuaXphdGlvbiBiZWhhdmlvciBvZiBhIGdyb3VwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWN0aW9uR3JvdXBpbmdCZWhhdmlvckNvZGluZ3M6QWN0aW9uR3JvdXBpbmdCZWhhdmlvckNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogbG9naWNhbC1ncm91cDogQSBncm91cCB3aXRoIHRoaXMgYmVoYXZpb3IgbG9naWNhbGx5IGdyb3VwcyBpdHMgc3ViLWVsZW1lbnRzLCBhbmQgbWF5IGJlIHNob3duIGFzIGEgdmlzdWFsIGdyb3VwIHRvIHRoZSBlbmQgdXNlciwgYnV0IGl0IGlzIG5vdCByZXF1aXJlZCB0byBkbyBzb1xyXG4gICAqL1xyXG4gIExvZ2ljYWxHcm91cDoge1xyXG4gICAgZGlzcGxheTogXCJMb2dpY2FsIEdyb3VwXCIsXHJcbiAgICBjb2RlOiBcImxvZ2ljYWwtZ3JvdXBcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2FjdGlvbi1ncm91cGluZy1iZWhhdmlvclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc2VudGVuY2UtZ3JvdXA6IEEgZ3JvdXAgb2YgcmVsYXRlZCBhbHRlcm5hdGl2ZSBhY3Rpb25zIGlzIGEgc2VudGVuY2UgZ3JvdXAgaWYgdGhlIHRhcmdldCByZWZlcmVuY2VkIGJ5IHRoZSBhY3Rpb24gaXMgdGhlIHNhbWUgaW4gYWxsIHRoZSBhY3Rpb25zIGFuZCBlYWNoIGFjdGlvbiBzaW1wbHkgY29uc3RpdHV0ZXMgYSBkaWZmZXJlbnQgdmFyaWF0aW9uIG9uIGhvdyB0byBzcGVjaWZ5IHRoZSBkZXRhaWxzIGZvciB0aGUgdGFyZ2V0LiBGb3IgZXhhbXBsZSwgdHdvIGFjdGlvbnMgdGhhdCBjb3VsZCBiZSBpbiBhIFNlbnRlbmNlR3JvdXAgYXJlIFwiYXNwaXJpbiwgNTAwIG1nLCAyIHRpbWVzIHBlciBkYXlcIiBhbmQgXCJhc3BpcmluLCAzMDAgbWcsIDMgdGltZXMgcGVyIGRheVwiLiBJbiBib3RoIGNhc2VzLCBhc3BpcmluIGlzIHRoZSB0YXJnZXQgcmVmZXJlbmNlZCBieSB0aGUgYWN0aW9uLCBhbmQgdGhlIHR3byBhY3Rpb25zIHJlcHJlc2VudCBkaWZmZXJlbnQgb3B0aW9ucyBmb3IgaG93IGFzcGlyaW4gbWlnaHQgYmUgb3JkZXJlZCBmb3IgdGhlIHBhdGllbnQuIE5vdGUgdGhhdCBhIFNlbnRlbmNlR3JvdXAgd291bGQgYWxtb3N0IGFsd2F5cyBoYXZlIGFuIGFzc29jaWF0ZWQgc2VsZWN0aW9uIGJlaGF2aW9yIG9mIFwiQXRNb3N0T25lXCIsIHVubGVzcyBpdCdzIGEgcmVxdWlyZWQgYWN0aW9uLCBpbiB3aGljaCBjYXNlLCBpdCB3b3VsZCBiZSBcIkV4YWN0bHlPbmVcIlxyXG4gICAqL1xyXG4gIFNlbnRlbmNlR3JvdXA6IHtcclxuICAgIGRpc3BsYXk6IFwiU2VudGVuY2UgR3JvdXBcIixcclxuICAgIGNvZGU6IFwic2VudGVuY2UtZ3JvdXBcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2FjdGlvbi1ncm91cGluZy1iZWhhdmlvclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdmlzdWFsLWdyb3VwOiBBbnkgZ3JvdXAgbWFya2VkIHdpdGggdGhpcyBiZWhhdmlvciBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGEgdmlzdWFsIGdyb3VwIHRvIHRoZSBlbmQgdXNlclxyXG4gICAqL1xyXG4gIFZpc3VhbEdyb3VwOiB7XHJcbiAgICBkaXNwbGF5OiBcIlZpc3VhbCBHcm91cFwiLFxyXG4gICAgY29kZTogXCJ2aXN1YWwtZ3JvdXBcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2FjdGlvbi1ncm91cGluZy1iZWhhdmlvclwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==