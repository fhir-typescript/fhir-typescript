// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/organization-type|4.3.0
/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export const OrganizationTypeCodes = {
    /**
     * bus: An organization that is a registered business or corporation but not identified by other types.
     */
    NonHealthcareBusinessOrCorporation: "bus",
    /**
     * cg: An un-incorporated community group.
     */
    CommunityGroup: "cg",
    /**
     * crs: An organization that is identified as a Pharmaceutical/Clinical Research Sponsor.
     */
    ClinicalResearchSponsor: "crs",
    /**
     * dept: A department or ward within a hospital (Generally is not applicable to top level organizations)
     */
    HospitalDepartment: "dept",
    /**
     * edu: An educational institution that provides education or research facilities.
     */
    EducationalInstitute: "edu",
    /**
     * govt: A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government.
     */
    Government: "govt",
    /**
     * ins: A company that provides insurance to its subscribers that may include healthcare related policies.
     */
    InsuranceCompany: "ins",
    /**
     * other: Other type of organization not already specified.
     */
    Other: "other",
    /**
     * pay: A company, charity, or governmental organization, which processes claims and/or issues payments to providers on behalf of patients or groups of patients.
     */
    Payer: "pay",
    /**
     * prov: An organization that provides healthcare services.
     */
    HealthcareProvider: "prov",
    /**
     * reli: An organization that is identified as a part of a religious institution.
     */
    ReligiousInstitution: "reli",
    /**
     * team: An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department).
     */
    OrganizationalTeam: "team",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JnYW5pemF0aW9uVHlwZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Pcmdhbml6YXRpb25UeXBlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsc0VBQXNFO0FBRXRFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUc7SUFDbkM7O09BRUc7SUFDSCxrQ0FBa0MsRUFBRSxLQUFLO0lBQ3pDOztPQUVHO0lBQ0gsY0FBYyxFQUFFLElBQUk7SUFDcEI7O09BRUc7SUFDSCx1QkFBdUIsRUFBRSxLQUFLO0lBQzlCOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUUsTUFBTTtJQUMxQjs7T0FFRztJQUNILG9CQUFvQixFQUFFLEtBQUs7SUFDM0I7O09BRUc7SUFDSCxVQUFVLEVBQUUsTUFBTTtJQUNsQjs7T0FFRztJQUNILGdCQUFnQixFQUFFLEtBQUs7SUFDdkI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsS0FBSyxFQUFFLEtBQUs7SUFDWjs7T0FFRztJQUNILGtCQUFrQixFQUFFLE1BQU07SUFDMUI7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSxNQUFNO0lBQzVCOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUUsTUFBTTtDQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9vcmdhbml6YXRpb24tdHlwZXw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhhbXBsZSB2YWx1ZSBzZXQgZGVmaW5lcyBhIHNldCBvZiBjb2RlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGluZGljYXRlIGEgdHlwZSBvZiBvcmdhbml6YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT3JnYW5pemF0aW9uVHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGJ1czogQW4gb3JnYW5pemF0aW9uIHRoYXQgaXMgYSByZWdpc3RlcmVkIGJ1c2luZXNzIG9yIGNvcnBvcmF0aW9uIGJ1dCBub3QgaWRlbnRpZmllZCBieSBvdGhlciB0eXBlcy5cclxuICAgKi9cclxuICBOb25IZWFsdGhjYXJlQnVzaW5lc3NPckNvcnBvcmF0aW9uOiBcImJ1c1wiLFxyXG4gIC8qKlxyXG4gICAqIGNnOiBBbiB1bi1pbmNvcnBvcmF0ZWQgY29tbXVuaXR5IGdyb3VwLlxyXG4gICAqL1xyXG4gIENvbW11bml0eUdyb3VwOiBcImNnXCIsXHJcbiAgLyoqXHJcbiAgICogY3JzOiBBbiBvcmdhbml6YXRpb24gdGhhdCBpcyBpZGVudGlmaWVkIGFzIGEgUGhhcm1hY2V1dGljYWwvQ2xpbmljYWwgUmVzZWFyY2ggU3BvbnNvci5cclxuICAgKi9cclxuICBDbGluaWNhbFJlc2VhcmNoU3BvbnNvcjogXCJjcnNcIixcclxuICAvKipcclxuICAgKiBkZXB0OiBBIGRlcGFydG1lbnQgb3Igd2FyZCB3aXRoaW4gYSBob3NwaXRhbCAoR2VuZXJhbGx5IGlzIG5vdCBhcHBsaWNhYmxlIHRvIHRvcCBsZXZlbCBvcmdhbml6YXRpb25zKVxyXG4gICAqL1xyXG4gIEhvc3BpdGFsRGVwYXJ0bWVudDogXCJkZXB0XCIsXHJcbiAgLyoqXHJcbiAgICogZWR1OiBBbiBlZHVjYXRpb25hbCBpbnN0aXR1dGlvbiB0aGF0IHByb3ZpZGVzIGVkdWNhdGlvbiBvciByZXNlYXJjaCBmYWNpbGl0aWVzLlxyXG4gICAqL1xyXG4gIEVkdWNhdGlvbmFsSW5zdGl0dXRlOiBcImVkdVwiLFxyXG4gIC8qKlxyXG4gICAqIGdvdnQ6IEEgcG9saXRpY2FsIGJvZHksIG9mdGVuIHVzZWQgd2hlbiBpbmNsdWRpbmcgb3JnYW5pemF0aW9uIHJlY29yZHMgZm9yIGdvdmVybm1lbnQgYm9kaWVzIHN1Y2ggYXMgYSBGZWRlcmFsIEdvdmVybm1lbnQsIFN0YXRlIG9yIExvY2FsIEdvdmVybm1lbnQuXHJcbiAgICovXHJcbiAgR292ZXJubWVudDogXCJnb3Z0XCIsXHJcbiAgLyoqXHJcbiAgICogaW5zOiBBIGNvbXBhbnkgdGhhdCBwcm92aWRlcyBpbnN1cmFuY2UgdG8gaXRzIHN1YnNjcmliZXJzIHRoYXQgbWF5IGluY2x1ZGUgaGVhbHRoY2FyZSByZWxhdGVkIHBvbGljaWVzLlxyXG4gICAqL1xyXG4gIEluc3VyYW5jZUNvbXBhbnk6IFwiaW5zXCIsXHJcbiAgLyoqXHJcbiAgICogb3RoZXI6IE90aGVyIHR5cGUgb2Ygb3JnYW5pemF0aW9uIG5vdCBhbHJlYWR5IHNwZWNpZmllZC5cclxuICAgKi9cclxuICBPdGhlcjogXCJvdGhlclwiLFxyXG4gIC8qKlxyXG4gICAqIHBheTogQSBjb21wYW55LCBjaGFyaXR5LCBvciBnb3Zlcm5tZW50YWwgb3JnYW5pemF0aW9uLCB3aGljaCBwcm9jZXNzZXMgY2xhaW1zIGFuZC9vciBpc3N1ZXMgcGF5bWVudHMgdG8gcHJvdmlkZXJzIG9uIGJlaGFsZiBvZiBwYXRpZW50cyBvciBncm91cHMgb2YgcGF0aWVudHMuXHJcbiAgICovXHJcbiAgUGF5ZXI6IFwicGF5XCIsXHJcbiAgLyoqXHJcbiAgICogcHJvdjogQW4gb3JnYW5pemF0aW9uIHRoYXQgcHJvdmlkZXMgaGVhbHRoY2FyZSBzZXJ2aWNlcy5cclxuICAgKi9cclxuICBIZWFsdGhjYXJlUHJvdmlkZXI6IFwicHJvdlwiLFxyXG4gIC8qKlxyXG4gICAqIHJlbGk6IEFuIG9yZ2FuaXphdGlvbiB0aGF0IGlzIGlkZW50aWZpZWQgYXMgYSBwYXJ0IG9mIGEgcmVsaWdpb3VzIGluc3RpdHV0aW9uLlxyXG4gICAqL1xyXG4gIFJlbGlnaW91c0luc3RpdHV0aW9uOiBcInJlbGlcIixcclxuICAvKipcclxuICAgKiB0ZWFtOiBBbiBvcmdhbml6YXRpb25hbCB0ZWFtIGlzIHVzdWFsbHkgYSBncm91cGluZyBvZiBwcmFjdGl0aW9uZXJzIHRoYXQgcGVyZm9ybSBhIHNwZWNpZmljIGZ1bmN0aW9uIHdpdGhpbiBhbiBvcmdhbml6YXRpb24gKHdoaWNoIGNvdWxkIGJlIGEgdG9wIGxldmVsIG9yZ2FuaXphdGlvbiwgb3IgYSBkZXBhcnRtZW50KS5cclxuICAgKi9cclxuICBPcmdhbml6YXRpb25hbFRlYW06IFwidGVhbVwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhhbXBsZSB2YWx1ZSBzZXQgZGVmaW5lcyBhIHNldCBvZiBjb2RlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGluZGljYXRlIGEgdHlwZSBvZiBvcmdhbml6YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBPcmdhbml6YXRpb25UeXBlQ29kZVR5cGUgPSB0eXBlb2YgT3JnYW5pemF0aW9uVHlwZUNvZGVzW2tleW9mIHR5cGVvZiBPcmdhbml6YXRpb25UeXBlQ29kZXNdO1xyXG4iXX0=