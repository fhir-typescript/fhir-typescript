// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/cited-artifact-abstract-type|4.3.0
/**
 * Used to express the reason and specific aspect for the variant abstract, such as language and specific language.
 */
export const CitedArtifactAbstractTypeCodes = {
    /**
     * autotranslated: Machine translated form of abstract in a different language, language element codes the language into which it was translated by machine
     */
    DifferentLanguageDerivedFromAutotranslation: "autotranslated",
    /**
     * different-publisher: Abstract produced by a different publisher than the cited artifact
     */
    DifferentPublisherForAbstract: "different-publisher",
    /**
     * duplicate-pmid: Alternative form of abstract in two or more Medline entries
     */
    DifferentTextInAdditionalMedlineEntry: "duplicate-pmid",
    /**
     * earlier-abstract: Alternative form of abstract in an earlier version such as epub ahead of print
     */
    DifferentTextInAnEarlierVersion: "earlier-abstract",
    /**
     * language: Additional form of abstract in a different language
     */
    DifferentLanguage: "language",
    /**
     * long-abstract: Long version of the abstract, for use when abstracts are provided in different sizes or lengths
     */
    LongAbstract: "long-abstract",
    /**
     * plain-language: Additional form of abstract written for the general public
     */
    PlainLanguage: "plain-language",
    /**
     * primary-human-use: Human-friendly main or official abstract
     */
    PrimaryHumanUse: "primary-human-use",
    /**
     * primary-machine-use: Machine-friendly main or official abstract
     */
    PrimaryMachineUse: "primary-machine-use",
    /**
     * short-abstract: Brief abstract, for use when abstracts are provided in different sizes or lengths
     */
    ShortAbstract: "short-abstract",
    /**
     * truncated: Truncated abstract
     */
    Truncated: "truncated",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2l0ZWRBcnRpZmFjdEFic3RyYWN0VHlwZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9DaXRlZEFydGlmYWN0QWJzdHJhY3RUeXBlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsaUZBQWlGO0FBRWpGOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sOEJBQThCLEdBQUc7SUFDNUM7O09BRUc7SUFDSCwyQ0FBMkMsRUFBRSxnQkFBZ0I7SUFDN0Q7O09BRUc7SUFDSCw2QkFBNkIsRUFBRSxxQkFBcUI7SUFDcEQ7O09BRUc7SUFDSCxxQ0FBcUMsRUFBRSxnQkFBZ0I7SUFDdkQ7O09BRUc7SUFDSCwrQkFBK0IsRUFBRSxrQkFBa0I7SUFDbkQ7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxVQUFVO0lBQzdCOztPQUVHO0lBQ0gsWUFBWSxFQUFFLGVBQWU7SUFDN0I7O09BRUc7SUFDSCxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9COztPQUVHO0lBQ0gsZUFBZSxFQUFFLG1CQUFtQjtJQUNwQzs7T0FFRztJQUNILGlCQUFpQixFQUFFLHFCQUFxQjtJQUN4Qzs7T0FFRztJQUNILGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0I7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztDQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NpdGVkLWFydGlmYWN0LWFic3RyYWN0LXR5cGV8NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBVc2VkIHRvIGV4cHJlc3MgdGhlIHJlYXNvbiBhbmQgc3BlY2lmaWMgYXNwZWN0IGZvciB0aGUgdmFyaWFudCBhYnN0cmFjdCwgc3VjaCBhcyBsYW5ndWFnZSBhbmQgc3BlY2lmaWMgbGFuZ3VhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ2l0ZWRBcnRpZmFjdEFic3RyYWN0VHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGF1dG90cmFuc2xhdGVkOiBNYWNoaW5lIHRyYW5zbGF0ZWQgZm9ybSBvZiBhYnN0cmFjdCBpbiBhIGRpZmZlcmVudCBsYW5ndWFnZSwgbGFuZ3VhZ2UgZWxlbWVudCBjb2RlcyB0aGUgbGFuZ3VhZ2UgaW50byB3aGljaCBpdCB3YXMgdHJhbnNsYXRlZCBieSBtYWNoaW5lXHJcbiAgICovXHJcbiAgRGlmZmVyZW50TGFuZ3VhZ2VEZXJpdmVkRnJvbUF1dG90cmFuc2xhdGlvbjogXCJhdXRvdHJhbnNsYXRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGRpZmZlcmVudC1wdWJsaXNoZXI6IEFic3RyYWN0IHByb2R1Y2VkIGJ5IGEgZGlmZmVyZW50IHB1Ymxpc2hlciB0aGFuIHRoZSBjaXRlZCBhcnRpZmFjdFxyXG4gICAqL1xyXG4gIERpZmZlcmVudFB1Ymxpc2hlckZvckFic3RyYWN0OiBcImRpZmZlcmVudC1wdWJsaXNoZXJcIixcclxuICAvKipcclxuICAgKiBkdXBsaWNhdGUtcG1pZDogQWx0ZXJuYXRpdmUgZm9ybSBvZiBhYnN0cmFjdCBpbiB0d28gb3IgbW9yZSBNZWRsaW5lIGVudHJpZXNcclxuICAgKi9cclxuICBEaWZmZXJlbnRUZXh0SW5BZGRpdGlvbmFsTWVkbGluZUVudHJ5OiBcImR1cGxpY2F0ZS1wbWlkXCIsXHJcbiAgLyoqXHJcbiAgICogZWFybGllci1hYnN0cmFjdDogQWx0ZXJuYXRpdmUgZm9ybSBvZiBhYnN0cmFjdCBpbiBhbiBlYXJsaWVyIHZlcnNpb24gc3VjaCBhcyBlcHViIGFoZWFkIG9mIHByaW50XHJcbiAgICovXHJcbiAgRGlmZmVyZW50VGV4dEluQW5FYXJsaWVyVmVyc2lvbjogXCJlYXJsaWVyLWFic3RyYWN0XCIsXHJcbiAgLyoqXHJcbiAgICogbGFuZ3VhZ2U6IEFkZGl0aW9uYWwgZm9ybSBvZiBhYnN0cmFjdCBpbiBhIGRpZmZlcmVudCBsYW5ndWFnZVxyXG4gICAqL1xyXG4gIERpZmZlcmVudExhbmd1YWdlOiBcImxhbmd1YWdlXCIsXHJcbiAgLyoqXHJcbiAgICogbG9uZy1hYnN0cmFjdDogTG9uZyB2ZXJzaW9uIG9mIHRoZSBhYnN0cmFjdCwgZm9yIHVzZSB3aGVuIGFic3RyYWN0cyBhcmUgcHJvdmlkZWQgaW4gZGlmZmVyZW50IHNpemVzIG9yIGxlbmd0aHNcclxuICAgKi9cclxuICBMb25nQWJzdHJhY3Q6IFwibG9uZy1hYnN0cmFjdFwiLFxyXG4gIC8qKlxyXG4gICAqIHBsYWluLWxhbmd1YWdlOiBBZGRpdGlvbmFsIGZvcm0gb2YgYWJzdHJhY3Qgd3JpdHRlbiBmb3IgdGhlIGdlbmVyYWwgcHVibGljXHJcbiAgICovXHJcbiAgUGxhaW5MYW5ndWFnZTogXCJwbGFpbi1sYW5ndWFnZVwiLFxyXG4gIC8qKlxyXG4gICAqIHByaW1hcnktaHVtYW4tdXNlOiBIdW1hbi1mcmllbmRseSBtYWluIG9yIG9mZmljaWFsIGFic3RyYWN0XHJcbiAgICovXHJcbiAgUHJpbWFyeUh1bWFuVXNlOiBcInByaW1hcnktaHVtYW4tdXNlXCIsXHJcbiAgLyoqXHJcbiAgICogcHJpbWFyeS1tYWNoaW5lLXVzZTogTWFjaGluZS1mcmllbmRseSBtYWluIG9yIG9mZmljaWFsIGFic3RyYWN0XHJcbiAgICovXHJcbiAgUHJpbWFyeU1hY2hpbmVVc2U6IFwicHJpbWFyeS1tYWNoaW5lLXVzZVwiLFxyXG4gIC8qKlxyXG4gICAqIHNob3J0LWFic3RyYWN0OiBCcmllZiBhYnN0cmFjdCwgZm9yIHVzZSB3aGVuIGFic3RyYWN0cyBhcmUgcHJvdmlkZWQgaW4gZGlmZmVyZW50IHNpemVzIG9yIGxlbmd0aHNcclxuICAgKi9cclxuICBTaG9ydEFic3RyYWN0OiBcInNob3J0LWFic3RyYWN0XCIsXHJcbiAgLyoqXHJcbiAgICogdHJ1bmNhdGVkOiBUcnVuY2F0ZWQgYWJzdHJhY3RcclxuICAgKi9cclxuICBUcnVuY2F0ZWQ6IFwidHJ1bmNhdGVkXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVXNlZCB0byBleHByZXNzIHRoZSByZWFzb24gYW5kIHNwZWNpZmljIGFzcGVjdCBmb3IgdGhlIHZhcmlhbnQgYWJzdHJhY3QsIHN1Y2ggYXMgbGFuZ3VhZ2UgYW5kIHNwZWNpZmljIGxhbmd1YWdlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2l0ZWRBcnRpZmFjdEFic3RyYWN0VHlwZUNvZGVUeXBlID0gdHlwZW9mIENpdGVkQXJ0aWZhY3RBYnN0cmFjdFR5cGVDb2Rlc1trZXlvZiB0eXBlb2YgQ2l0ZWRBcnRpZmFjdEFic3RyYWN0VHlwZUNvZGVzXTtcclxuIl19