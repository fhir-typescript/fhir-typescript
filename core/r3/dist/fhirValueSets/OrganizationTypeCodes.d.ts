/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export declare const OrganizationTypeCodes: {
    /**
     * bus: An organization that is a registered business or corporation but not identified by other types.
     */
    readonly NonHealthcareBusinessOrCorporation: "bus";
    /**
     * cg: An un-incorporated community group.
     */
    readonly CommunityGroup: "cg";
    /**
     * crs: An organization that is identified as a Pharmaceutical/Clinical Research Sponsor.
     */
    readonly ClinicalResearchSponsor: "crs";
    /**
     * dept: A department or ward within a hospital (Generally is not applicable to top level organizations)
     */
    readonly HospitalDepartment: "dept";
    /**
     * edu: An educational institution that provides education or research facilities.
     */
    readonly EducationalInstitute: "edu";
    /**
     * govt: A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government.
     */
    readonly Government: "govt";
    /**
     * ins: A company that provides insurance to its subscribers that may include healthcare related policies.
     */
    readonly InsuranceCompany: "ins";
    /**
     * other: Other type of organization not already specified.
     */
    readonly Other: "other";
    /**
     * prov: An organization that provides healthcare services.
     */
    readonly HealthcareProvider: "prov";
    /**
     * reli: An organization that is identified as a part of a religious institution.
     */
    readonly ReligiousInstitution: "reli";
    /**
     * team: An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department).
     */
    readonly OrganizationalTeam: "team";
};
/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export declare type OrganizationTypeCodeType = typeof OrganizationTypeCodes[keyof typeof OrganizationTypeCodes];
//# sourceMappingURL=OrganizationTypeCodes.d.ts.map