import { CodingArgs } from '../fhir/Coding.js';
/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export declare type OrganizationTypeCodingType = {
    /**
     * bus: An organization that is a registered business or corporation but not identified by other types.
     */
    NonHealthcareBusinessOrCorporation: CodingArgs;
    /**
     * cg: An un-incorporated community group.
     */
    CommunityGroup: CodingArgs;
    /**
     * crs: An organization that is identified as a Pharmaceutical/Clinical Research Sponsor.
     */
    ClinicalResearchSponsor: CodingArgs;
    /**
     * dept: A department or ward within a hospital (Generally is not applicable to top level organizations)
     */
    HospitalDepartment: CodingArgs;
    /**
     * edu: An educational institution that provides education or research facilities.
     */
    EducationalInstitute: CodingArgs;
    /**
     * govt: A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government.
     */
    Government: CodingArgs;
    /**
     * ins: A company that provides insurance to its subscribers that may include healthcare related policies.
     */
    InsuranceCompany: CodingArgs;
    /**
     * other: Other type of organization not already specified.
     */
    Other: CodingArgs;
    /**
     * pay: A company, charity, or governmental organization, which processes claims and/or issues payments to providers on behalf of patients or groups of patients.
     */
    Payer: CodingArgs;
    /**
     * prov: An organization that provides healthcare services.
     */
    HealthcareProvider: CodingArgs;
    /**
     * reli: An organization that is identified as a part of a religious institution.
     */
    ReligiousInstitution: CodingArgs;
    /**
     * team: An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department).
     */
    OrganizationalTeam: CodingArgs;
};
/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export declare const OrganizationTypeCodings: OrganizationTypeCodingType;
//# sourceMappingURL=OrganizationTypeCodings.d.ts.map