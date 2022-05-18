import { Coding } from '../fhir/Coding.js';
/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 */
export declare const OrganizationRoleCodings: {
    /**
     * agency: An organization such as a public health agency, community/social services provider, etc.
     */
    readonly Agency: Coding;
    /**
     * diagnostics: An organization providing diagnostic testing/laboratory services
     */
    readonly Diagnostics: Coding;
    /**
     * HIE/HIO: An organization that facilitates electronic clinical data exchange between entities
     */
    readonly HIEHIO: Coding;
    /**
     * member: A type of non-ownership relationship between entities (encompasses partnerships, collaboration, joint ventures, etc.)
     */
    readonly Member: Coding;
    /**
     * payer: An organization providing reimbursement, payment, or related services
     */
    readonly Payer: Coding;
    /**
     * Code: provider
     */
    readonly Provider: Coding;
    /**
     * research: An organization providing research-related services such as conducting research, recruiting research participants, analyzing data, etc.
     */
    readonly Research: Coding;
    /**
     * supplier: An organization that provides medical supplies (e.g. medical devices, equipment, pharmaceutical products, etc.)
     */
    readonly Supplier: Coding;
};
/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 */
export declare type OrganizationRoleCodingType = typeof OrganizationRoleCodings;
//# sourceMappingURL=OrganizationRoleCodings.d.ts.map