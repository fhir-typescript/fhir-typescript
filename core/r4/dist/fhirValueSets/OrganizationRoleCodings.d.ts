import { CodingArgs } from '../fhir/Coding.js';
/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 */
export declare type OrganizationRoleCodingType = {
    /**
     * agency: An organization such as a public health agency, community/social services provider, etc.
     */
    Agency: CodingArgs;
    /**
     * diagnostics: An organization providing diagnostic testing/laboratory services
     */
    Diagnostics: CodingArgs;
    /**
     * HIE/HIO: An organization that facilitates electronic clinical data exchange between entities
     */
    HIEHIO: CodingArgs;
    /**
     * member: A type of non-ownership relationship between entities (encompasses partnerships, collaboration, joint ventures, etc.)
     */
    Member: CodingArgs;
    /**
     * payer: An organization providing reimbursement, payment, or related services
     */
    Payer: CodingArgs;
    /**
     * Code: provider
     */
    Provider: CodingArgs;
    /**
     * research: An organization providing research-related services such as conducting research, recruiting research participants, analyzing data, etc.
     */
    Research: CodingArgs;
    /**
     * supplier: An organization that provides medical supplies (e.g. medical devices, equipment, pharmaceutical products, etc.)
     */
    Supplier: CodingArgs;
};
/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 */
export declare const OrganizationRoleCodings: OrganizationRoleCodingType;
//# sourceMappingURL=OrganizationRoleCodings.d.ts.map