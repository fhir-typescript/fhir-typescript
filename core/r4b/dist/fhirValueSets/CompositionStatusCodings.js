// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/composition-status|4.3.0
/**
 * The workflow/clinical status of the composition.
 */
export const CompositionStatusCodings = {
    /**
     * amended: The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person.
     */
    Amended: {
        display: "Amended",
        code: "amended",
        system: "http://hl7.org/fhir/composition-status",
    },
    /**
     * entered-in-error: The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/composition-status",
    },
    /**
     * final: This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.
     */
    Final: {
        display: "Final",
        code: "final",
        system: "http://hl7.org/fhir/composition-status",
    },
    /**
     * preliminary: This is a preliminary composition or document (also known as initial or interim). The content may be incomplete or unverified.
     */
    Preliminary: {
        display: "Preliminary",
        code: "preliminary",
        system: "http://hl7.org/fhir/composition-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9zaXRpb25TdGF0dXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Db21wb3NpdGlvblN0YXR1c0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsdUVBQXVFO0FBMEJ2RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUErQjtJQUNsRTs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbXBvc2l0aW9uLXN0YXR1c3w0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSB3b3JrZmxvdy9jbGluaWNhbCBzdGF0dXMgb2YgdGhlIGNvbXBvc2l0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tcG9zaXRpb25TdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFtZW5kZWQ6IFRoZSBjb21wb3NpdGlvbiBjb250ZW50IG9yIHRoZSByZWZlcmVuY2VkIHJlc291cmNlcyBoYXZlIGJlZW4gbW9kaWZpZWQgKGVkaXRlZCBvciBhZGRlZCB0bykgc3Vic2VxdWVudCB0byBiZWluZyByZWxlYXNlZCBhcyBcImZpbmFsXCIgYW5kIHRoZSBjb21wb3NpdGlvbiBpcyBjb21wbGV0ZSBhbmQgdmVyaWZpZWQgYnkgYW4gYXV0aG9yaXplZCBwZXJzb24uXHJcbiAgICovXHJcbiAgQW1lbmRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgY29tcG9zaXRpb24gb3IgZG9jdW1lbnQgd2FzIG9yaWdpbmFsbHkgY3JlYXRlZC9pc3N1ZWQgaW4gZXJyb3IsIGFuZCB0aGlzIGlzIGFuIGFtZW5kbWVudCB0aGF0IG1hcmtzIHRoYXQgdGhlIGVudGlyZSBzZXJpZXMgc2hvdWxkIG5vdCBiZSBjb25zaWRlcmVkIGFzIHZhbGlkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGZpbmFsOiBUaGlzIHZlcnNpb24gb2YgdGhlIGNvbXBvc2l0aW9uIGlzIGNvbXBsZXRlIGFuZCB2ZXJpZmllZCBieSBhbiBhcHByb3ByaWF0ZSBwZXJzb24gYW5kIG5vIGZ1cnRoZXIgd29yayBpcyBwbGFubmVkLiBBbnkgc3Vic2VxdWVudCB1cGRhdGVzIHdvdWxkIGJlIG9uIGEgbmV3IHZlcnNpb24gb2YgdGhlIGNvbXBvc2l0aW9uLlxyXG4gICAqL1xyXG4gIEZpbmFsOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHByZWxpbWluYXJ5OiBUaGlzIGlzIGEgcHJlbGltaW5hcnkgY29tcG9zaXRpb24gb3IgZG9jdW1lbnQgKGFsc28ga25vd24gYXMgaW5pdGlhbCBvciBpbnRlcmltKS4gVGhlIGNvbnRlbnQgbWF5IGJlIGluY29tcGxldGUgb3IgdW52ZXJpZmllZC5cclxuICAgKi9cclxuICBQcmVsaW1pbmFyeTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB3b3JrZmxvdy9jbGluaWNhbCBzdGF0dXMgb2YgdGhlIGNvbXBvc2l0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbXBvc2l0aW9uU3RhdHVzQ29kaW5nczpDb21wb3NpdGlvblN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYW1lbmRlZDogVGhlIGNvbXBvc2l0aW9uIGNvbnRlbnQgb3IgdGhlIHJlZmVyZW5jZWQgcmVzb3VyY2VzIGhhdmUgYmVlbiBtb2RpZmllZCAoZWRpdGVkIG9yIGFkZGVkIHRvKSBzdWJzZXF1ZW50IHRvIGJlaW5nIHJlbGVhc2VkIGFzIFwiZmluYWxcIiBhbmQgdGhlIGNvbXBvc2l0aW9uIGlzIGNvbXBsZXRlIGFuZCB2ZXJpZmllZCBieSBhbiBhdXRob3JpemVkIHBlcnNvbi5cclxuICAgKi9cclxuICBBbWVuZGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFtZW5kZWRcIixcclxuICAgIGNvZGU6IFwiYW1lbmRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29tcG9zaXRpb24tc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgY29tcG9zaXRpb24gb3IgZG9jdW1lbnQgd2FzIG9yaWdpbmFsbHkgY3JlYXRlZC9pc3N1ZWQgaW4gZXJyb3IsIGFuZCB0aGlzIGlzIGFuIGFtZW5kbWVudCB0aGF0IG1hcmtzIHRoYXQgdGhlIGVudGlyZSBzZXJpZXMgc2hvdWxkIG5vdCBiZSBjb25zaWRlcmVkIGFzIHZhbGlkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVudGVyZWQgaW4gRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29tcG9zaXRpb24tc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBmaW5hbDogVGhpcyB2ZXJzaW9uIG9mIHRoZSBjb21wb3NpdGlvbiBpcyBjb21wbGV0ZSBhbmQgdmVyaWZpZWQgYnkgYW4gYXBwcm9wcmlhdGUgcGVyc29uIGFuZCBubyBmdXJ0aGVyIHdvcmsgaXMgcGxhbm5lZC4gQW55IHN1YnNlcXVlbnQgdXBkYXRlcyB3b3VsZCBiZSBvbiBhIG5ldyB2ZXJzaW9uIG9mIHRoZSBjb21wb3NpdGlvbi5cclxuICAgKi9cclxuICBGaW5hbDoge1xyXG4gICAgZGlzcGxheTogXCJGaW5hbFwiLFxyXG4gICAgY29kZTogXCJmaW5hbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29tcG9zaXRpb24tc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwcmVsaW1pbmFyeTogVGhpcyBpcyBhIHByZWxpbWluYXJ5IGNvbXBvc2l0aW9uIG9yIGRvY3VtZW50IChhbHNvIGtub3duIGFzIGluaXRpYWwgb3IgaW50ZXJpbSkuIFRoZSBjb250ZW50IG1heSBiZSBpbmNvbXBsZXRlIG9yIHVudmVyaWZpZWQuXHJcbiAgICovXHJcbiAgUHJlbGltaW5hcnk6IHtcclxuICAgIGRpc3BsYXk6IFwiUHJlbGltaW5hcnlcIixcclxuICAgIGNvZGU6IFwicHJlbGltaW5hcnlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbXBvc2l0aW9uLXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==