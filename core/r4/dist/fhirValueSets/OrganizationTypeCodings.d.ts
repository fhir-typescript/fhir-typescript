import { Coding } from '../fhir/Coding.js';
/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export declare const OrganizationTypeCodings: {
    /**
     * bus: An organization that is a registered business or corporation but not identified by other types.
     */
    readonly NonHealthcareBusinessOrCorporation: Coding;
    /**
     * cg: An un-incorporated community group.
     */
    readonly CommunityGroup: Coding;
    /**
     * crs: An organization that is identified as a Pharmaceutical/Clinical Research Sponsor.
     */
    readonly ClinicalResearchSponsor: Coding;
    /**
     * dept: A department or ward within a hospital (Generally is not applicable to top level organizations)
     */
    readonly HospitalDepartment: Coding;
    /**
     * edu: An educational institution that provides education or research facilities.
     */
    readonly EducationalInstitute: Coding;
    /**
     * govt: A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government.
     */
    readonly Government: Coding;
    /**
     * ins: A company that provides insurance to its subscribers that may include healthcare related policies.
     */
    readonly InsuranceCompany: Coding;
    /**
     * other: Other type of organization not already specified.
     */
    readonly Other: Coding;
    /**
     * pay: A company, charity, or governmental organization, which processes claims and/or issues payments to providers on behalf of patients or groups of patients.
     */
    readonly Payer: Coding;
    /**
     * prov: An organization that provides healthcare services.
     */
    readonly HealthcareProvider: Coding;
    /**
     * reli: An organization that is identified as a part of a religious institution.
     */
    readonly ReligiousInstitution: Coding;
    /**
     * team: An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department).
     */
    readonly OrganizationalTeam: Coding;
};
/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export declare type OrganizationTypeCodingType = typeof OrganizationTypeCodings;
//# sourceMappingURL=OrganizationTypeCodings.d.ts.map