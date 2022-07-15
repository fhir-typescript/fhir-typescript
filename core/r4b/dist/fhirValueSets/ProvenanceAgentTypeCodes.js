// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/provenance-agent-type|4.3.0
/**
 * The type of participation a provenance participant.
 */
export const ProvenanceAgentTypeCodes = {
    /**
     * assembler: A device that operates independently of an author on custodian's algorithms for data extraction of existing information for purpose of generating a new artifact.
     */
    Assembler: "assembler",
    /**
     * attester: A verifier who attests to the accuracy of the resource
     */
    Attester: "attester",
    /**
     * author: A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource
     */
    Author: "author",
    /**
     * composer: A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.
     */
    Composer: "composer",
    /**
     * custodian: The entity that is accountable for maintaining a true an accurate copy of the original record
     */
    Custodian: "custodian",
    /**
     * enterer: A person entering the data into the originating system
     */
    Enterer: "enterer",
    /**
     * informant: A person who reported information that contributed to the resource
     */
    Informant: "informant",
    /**
     * legal: The person authenticated the content and accepted legal responsibility for its content
     */
    LegalAuthenticator: "legal",
    /**
     * performer: A person, animal, organization or device that who actually and principally carries out the activity
     */
    Performer: "performer",
    /**
     * verifier: A person who verifies the correctness and appropriateness of activity
     */
    Verifier: "verifier",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmVuYW5jZUFnZW50VHlwZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Qcm92ZW5hbmNlQWdlbnRUeXBlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsMEVBQTBFO0FBRTFFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEM7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILGtCQUFrQixFQUFFLE9BQU87SUFDM0I7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0NBQ1osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcHJvdmVuYW5jZS1hZ2VudC10eXBlfDQuMy4wXHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgcGFydGljaXBhdGlvbiBhIHByb3ZlbmFuY2UgcGFydGljaXBhbnQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUHJvdmVuYW5jZUFnZW50VHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFzc2VtYmxlcjogQSBkZXZpY2UgdGhhdCBvcGVyYXRlcyBpbmRlcGVuZGVudGx5IG9mIGFuIGF1dGhvciBvbiBjdXN0b2RpYW4ncyBhbGdvcml0aG1zIGZvciBkYXRhIGV4dHJhY3Rpb24gb2YgZXhpc3RpbmcgaW5mb3JtYXRpb24gZm9yIHB1cnBvc2Ugb2YgZ2VuZXJhdGluZyBhIG5ldyBhcnRpZmFjdC5cclxuICAgKi9cclxuICBBc3NlbWJsZXI6IFwiYXNzZW1ibGVyXCIsXHJcbiAgLyoqXHJcbiAgICogYXR0ZXN0ZXI6IEEgdmVyaWZpZXIgd2hvIGF0dGVzdHMgdG8gdGhlIGFjY3VyYWN5IG9mIHRoZSByZXNvdXJjZVxyXG4gICAqL1xyXG4gIEF0dGVzdGVyOiBcImF0dGVzdGVyXCIsXHJcbiAgLyoqXHJcbiAgICogYXV0aG9yOiBBIHBhcnR5IHRoYXQgb3JpZ2luYXRlcyB0aGUgcmVzb3VyY2UgYW5kIHRoZXJlZm9yZSBoYXMgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBpbmZvcm1hdGlvbiBnaXZlbiBpbiB0aGUgcmVzb3VyY2UgYW5kIG93bmVyc2hpcCBvZiB0aGlzIHJlc291cmNlXHJcbiAgICovXHJcbiAgQXV0aG9yOiBcImF1dGhvclwiLFxyXG4gIC8qKlxyXG4gICAqIGNvbXBvc2VyOiBBIGRldmljZSB1c2VkIGJ5IGFuIGF1dGhvciB0byByZWNvcmQgbmV3IGluZm9ybWF0aW9uLCB3aGljaCBtYXkgYWxzbyBiZSB1c2VkIGJ5IHRoZSBhdXRob3IgdG8gc2VsZWN0IGV4aXN0aW5nIGluZm9ybWF0aW9uIGZvciBhZ2dyZWdhdGlvbiB3aXRoIG5ld2x5IHJlY29yZGVkIGluZm9ybWF0aW9uIGZvciB0aGUgcHVycG9zZSBvZiBnZW5lcmF0aW5nIGEgbmV3IGFydGlmYWN0LlxyXG4gICAqL1xyXG4gIENvbXBvc2VyOiBcImNvbXBvc2VyXCIsXHJcbiAgLyoqXHJcbiAgICogY3VzdG9kaWFuOiBUaGUgZW50aXR5IHRoYXQgaXMgYWNjb3VudGFibGUgZm9yIG1haW50YWluaW5nIGEgdHJ1ZSBhbiBhY2N1cmF0ZSBjb3B5IG9mIHRoZSBvcmlnaW5hbCByZWNvcmRcclxuICAgKi9cclxuICBDdXN0b2RpYW46IFwiY3VzdG9kaWFuXCIsXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlcjogQSBwZXJzb24gZW50ZXJpbmcgdGhlIGRhdGEgaW50byB0aGUgb3JpZ2luYXRpbmcgc3lzdGVtXHJcbiAgICovXHJcbiAgRW50ZXJlcjogXCJlbnRlcmVyXCIsXHJcbiAgLyoqXHJcbiAgICogaW5mb3JtYW50OiBBIHBlcnNvbiB3aG8gcmVwb3J0ZWQgaW5mb3JtYXRpb24gdGhhdCBjb250cmlidXRlZCB0byB0aGUgcmVzb3VyY2VcclxuICAgKi9cclxuICBJbmZvcm1hbnQ6IFwiaW5mb3JtYW50XCIsXHJcbiAgLyoqXHJcbiAgICogbGVnYWw6IFRoZSBwZXJzb24gYXV0aGVudGljYXRlZCB0aGUgY29udGVudCBhbmQgYWNjZXB0ZWQgbGVnYWwgcmVzcG9uc2liaWxpdHkgZm9yIGl0cyBjb250ZW50XHJcbiAgICovXHJcbiAgTGVnYWxBdXRoZW50aWNhdG9yOiBcImxlZ2FsXCIsXHJcbiAgLyoqXHJcbiAgICogcGVyZm9ybWVyOiBBIHBlcnNvbiwgYW5pbWFsLCBvcmdhbml6YXRpb24gb3IgZGV2aWNlIHRoYXQgd2hvIGFjdHVhbGx5IGFuZCBwcmluY2lwYWxseSBjYXJyaWVzIG91dCB0aGUgYWN0aXZpdHlcclxuICAgKi9cclxuICBQZXJmb3JtZXI6IFwicGVyZm9ybWVyXCIsXHJcbiAgLyoqXHJcbiAgICogdmVyaWZpZXI6IEEgcGVyc29uIHdobyB2ZXJpZmllcyB0aGUgY29ycmVjdG5lc3MgYW5kIGFwcHJvcHJpYXRlbmVzcyBvZiBhY3Rpdml0eVxyXG4gICAqL1xyXG4gIFZlcmlmaWVyOiBcInZlcmlmaWVyXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgcGFydGljaXBhdGlvbiBhIHByb3ZlbmFuY2UgcGFydGljaXBhbnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQcm92ZW5hbmNlQWdlbnRUeXBlQ29kZVR5cGUgPSB0eXBlb2YgUHJvdmVuYW5jZUFnZW50VHlwZUNvZGVzW2tleW9mIHR5cGVvZiBQcm92ZW5hbmNlQWdlbnRUeXBlQ29kZXNdO1xyXG4iXX0=