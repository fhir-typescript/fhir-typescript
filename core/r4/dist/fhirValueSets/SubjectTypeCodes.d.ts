/**
 * Possible types of subjects.
 */
export declare const SubjectTypeCodes: {
    /**
     * Device: A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
     */
    readonly Device: "Device";
    /**
     * Location: Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
     */
    readonly Location: "Location";
    /**
     * Organization: A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
     */
    readonly Organization: "Organization";
    /**
     * Patient: Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
    readonly Patient: "Patient";
    /**
     * Practitioner: A person who is directly or indirectly involved in the provisioning of healthcare.
     */
    readonly Practitioner: "Practitioner";
};
/**
 * Possible types of subjects.
 */
export declare type SubjectTypeCodeType = typeof SubjectTypeCodes[keyof typeof SubjectTypeCodes];
//# sourceMappingURL=SubjectTypeCodes.d.ts.map