/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 */
export declare const OrganizationRoleCodes: {
    /**
     * agency: An organization such as a public health agency, community/social services provider, etc.
     */
    readonly Agency: "agency";
    /**
     * diagnostics: An organization providing diagnostic testing/laboratory services
     */
    readonly Diagnostics: "diagnostics";
    /**
     * HIE/HIO: An organization that facilitates electronic clinical data exchange between entities
     */
    readonly HIEHIO: "HIE/HIO";
    /**
     * member: A type of non-ownership relationship between entities (encompasses partnerships, collaboration, joint ventures, etc.)
     */
    readonly Member: "member";
    /**
     * payer: An organization providing reimbursement, payment, or related services
     */
    readonly Payer: "payer";
    /**
     * Code: provider
     */
    readonly Provider: "provider";
    /**
     * research: An organization providing research-related services such as conducting research, recruiting research participants, analyzing data, etc.
     */
    readonly Research: "research";
    /**
     * supplier: An organization that provides medical supplies (e.g. medical devices, equipment, pharmaceutical products, etc.)
     */
    readonly Supplier: "supplier";
};
/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 */
export declare type OrganizationRoleCodeType = typeof OrganizationRoleCodes[keyof typeof OrganizationRoleCodes];
//# sourceMappingURL=OrganizationRoleCodes.d.ts.map