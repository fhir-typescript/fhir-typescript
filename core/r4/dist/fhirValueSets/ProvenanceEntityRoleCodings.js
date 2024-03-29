// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/provenance-entity-role|4.0.1
/**
 * How an entity was used in an activity.
 */
export const ProvenanceEntityRoleCodings = {
    /**
     * derivation: A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity.
     */
    Derivation: {
        display: "Derivation",
        code: "derivation",
        system: "http://hl7.org/fhir/provenance-entity-role",
    },
    /**
     * quotation: The repeat of (some or all of) an entity, such as text or image, by someone who might or might not be its original author.
     */
    Quotation: {
        display: "Quotation",
        code: "quotation",
        system: "http://hl7.org/fhir/provenance-entity-role",
    },
    /**
     * removal: A derivation for which the entity is removed from accessibility usually through the use of the Delete operation.
     */
    Removal: {
        display: "Removal",
        code: "removal",
        system: "http://hl7.org/fhir/provenance-entity-role",
    },
    /**
     * revision: A derivation for which the resulting entity is a revised version of some original.
     */
    Revision: {
        display: "Revision",
        code: "revision",
        system: "http://hl7.org/fhir/provenance-entity-role",
    },
    /**
     * source: A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.
     */
    Source: {
        display: "Source",
        code: "source",
        system: "http://hl7.org/fhir/provenance-entity-role",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmVuYW5jZUVudGl0eVJvbGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Qcm92ZW5hbmNlRW50aXR5Um9sZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkVBQTJFO0FBOEIzRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFrQztJQUN4RTs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSw0Q0FBNEM7S0FDckQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSw0Q0FBNEM7S0FDckQ7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsNENBQTRDO0tBQ3JEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9wcm92ZW5hbmNlLWVudGl0eS1yb2xlfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogSG93IGFuIGVudGl0eSB3YXMgdXNlZCBpbiBhbiBhY3Rpdml0eS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFByb3ZlbmFuY2VFbnRpdHlSb2xlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBkZXJpdmF0aW9uOiBBIHRyYW5zZm9ybWF0aW9uIG9mIGFuIGVudGl0eSBpbnRvIGFub3RoZXIsIGFuIHVwZGF0ZSBvZiBhbiBlbnRpdHkgcmVzdWx0aW5nIGluIGEgbmV3IG9uZSwgb3IgdGhlIGNvbnN0cnVjdGlvbiBvZiBhIG5ldyBlbnRpdHkgYmFzZWQgb24gYSBwcmUtZXhpc3RpbmcgZW50aXR5LlxyXG4gICAqL1xyXG4gIERlcml2YXRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcXVvdGF0aW9uOiBUaGUgcmVwZWF0IG9mIChzb21lIG9yIGFsbCBvZikgYW4gZW50aXR5LCBzdWNoIGFzIHRleHQgb3IgaW1hZ2UsIGJ5IHNvbWVvbmUgd2hvIG1pZ2h0IG9yIG1pZ2h0IG5vdCBiZSBpdHMgb3JpZ2luYWwgYXV0aG9yLlxyXG4gICAqL1xyXG4gIFF1b3RhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZW1vdmFsOiBBIGRlcml2YXRpb24gZm9yIHdoaWNoIHRoZSBlbnRpdHkgaXMgcmVtb3ZlZCBmcm9tIGFjY2Vzc2liaWxpdHkgdXN1YWxseSB0aHJvdWdoIHRoZSB1c2Ugb2YgdGhlIERlbGV0ZSBvcGVyYXRpb24uXHJcbiAgICovXHJcbiAgUmVtb3ZhbDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZXZpc2lvbjogQSBkZXJpdmF0aW9uIGZvciB3aGljaCB0aGUgcmVzdWx0aW5nIGVudGl0eSBpcyBhIHJldmlzZWQgdmVyc2lvbiBvZiBzb21lIG9yaWdpbmFsLlxyXG4gICAqL1xyXG4gIFJldmlzaW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHNvdXJjZTogQSBwcmltYXJ5IHNvdXJjZSBmb3IgYSB0b3BpYyByZWZlcnMgdG8gc29tZXRoaW5nIHByb2R1Y2VkIGJ5IHNvbWUgYWdlbnQgd2l0aCBkaXJlY3QgZXhwZXJpZW5jZSBhbmQga25vd2xlZGdlIGFib3V0IHRoZSB0b3BpYywgYXQgdGhlIHRpbWUgb2YgdGhlIHRvcGljJ3Mgc3R1ZHksIHdpdGhvdXQgYmVuZWZpdCBmcm9tIGhpbmRzaWdodC5cclxuICAgKi9cclxuICBTb3VyY2U6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIb3cgYW4gZW50aXR5IHdhcyB1c2VkIGluIGFuIGFjdGl2aXR5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFByb3ZlbmFuY2VFbnRpdHlSb2xlQ29kaW5nczpQcm92ZW5hbmNlRW50aXR5Um9sZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZGVyaXZhdGlvbjogQSB0cmFuc2Zvcm1hdGlvbiBvZiBhbiBlbnRpdHkgaW50byBhbm90aGVyLCBhbiB1cGRhdGUgb2YgYW4gZW50aXR5IHJlc3VsdGluZyBpbiBhIG5ldyBvbmUsIG9yIHRoZSBjb25zdHJ1Y3Rpb24gb2YgYSBuZXcgZW50aXR5IGJhc2VkIG9uIGEgcHJlLWV4aXN0aW5nIGVudGl0eS5cclxuICAgKi9cclxuICBEZXJpdmF0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIkRlcml2YXRpb25cIixcclxuICAgIGNvZGU6IFwiZGVyaXZhdGlvblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcHJvdmVuYW5jZS1lbnRpdHktcm9sZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcXVvdGF0aW9uOiBUaGUgcmVwZWF0IG9mIChzb21lIG9yIGFsbCBvZikgYW4gZW50aXR5LCBzdWNoIGFzIHRleHQgb3IgaW1hZ2UsIGJ5IHNvbWVvbmUgd2hvIG1pZ2h0IG9yIG1pZ2h0IG5vdCBiZSBpdHMgb3JpZ2luYWwgYXV0aG9yLlxyXG4gICAqL1xyXG4gIFF1b3RhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJRdW90YXRpb25cIixcclxuICAgIGNvZGU6IFwicXVvdGF0aW9uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9wcm92ZW5hbmNlLWVudGl0eS1yb2xlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZW1vdmFsOiBBIGRlcml2YXRpb24gZm9yIHdoaWNoIHRoZSBlbnRpdHkgaXMgcmVtb3ZlZCBmcm9tIGFjY2Vzc2liaWxpdHkgdXN1YWxseSB0aHJvdWdoIHRoZSB1c2Ugb2YgdGhlIERlbGV0ZSBvcGVyYXRpb24uXHJcbiAgICovXHJcbiAgUmVtb3ZhbDoge1xyXG4gICAgZGlzcGxheTogXCJSZW1vdmFsXCIsXHJcbiAgICBjb2RlOiBcInJlbW92YWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Byb3ZlbmFuY2UtZW50aXR5LXJvbGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJldmlzaW9uOiBBIGRlcml2YXRpb24gZm9yIHdoaWNoIHRoZSByZXN1bHRpbmcgZW50aXR5IGlzIGEgcmV2aXNlZCB2ZXJzaW9uIG9mIHNvbWUgb3JpZ2luYWwuXHJcbiAgICovXHJcbiAgUmV2aXNpb246IHtcclxuICAgIGRpc3BsYXk6IFwiUmV2aXNpb25cIixcclxuICAgIGNvZGU6IFwicmV2aXNpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Byb3ZlbmFuY2UtZW50aXR5LXJvbGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHNvdXJjZTogQSBwcmltYXJ5IHNvdXJjZSBmb3IgYSB0b3BpYyByZWZlcnMgdG8gc29tZXRoaW5nIHByb2R1Y2VkIGJ5IHNvbWUgYWdlbnQgd2l0aCBkaXJlY3QgZXhwZXJpZW5jZSBhbmQga25vd2xlZGdlIGFib3V0IHRoZSB0b3BpYywgYXQgdGhlIHRpbWUgb2YgdGhlIHRvcGljJ3Mgc3R1ZHksIHdpdGhvdXQgYmVuZWZpdCBmcm9tIGhpbmRzaWdodC5cclxuICAgKi9cclxuICBTb3VyY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiU291cmNlXCIsXHJcbiAgICBjb2RlOiBcInNvdXJjZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcHJvdmVuYW5jZS1lbnRpdHktcm9sZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==