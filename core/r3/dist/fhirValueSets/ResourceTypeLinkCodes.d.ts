/**
 * The type of payee Resource
 */
export declare const ResourceTypeLinkCodes: {
    /**
     * organization: Organization resource
     */
    readonly Organization: "organization";
    /**
     * patient: Patient resource
     */
    readonly Patient: "patient";
    /**
     * practitioner: Practitioner resource
     */
    readonly Practitioner: "practitioner";
    /**
     * relatedperson: RelatedPerson resource
     */
    readonly RelatedPerson: "relatedperson";
};
/**
 * The type of payee Resource
 */
export declare type ResourceTypeLinkCodeType = typeof ResourceTypeLinkCodes[keyof typeof ResourceTypeLinkCodes];
//# sourceMappingURL=ResourceTypeLinkCodes.d.ts.map