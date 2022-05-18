import { Coding } from '../fhir/Coding.js';
/**
 * This value sets refers to a Category of supply.
 */
export declare const SupplyrequestKindCodings: {
    /**
     * central: Supply is stored and requested from central supply.
     */
    readonly CentralSupply: Coding;
    /**
     * nonstock: Supply is not onsite and must be requested from an outside vendor using a non-stock requisition.
     */
    readonly NonStock: Coding;
};
/**
 * This value sets refers to a Category of supply.
 */
export declare type SupplyrequestKindCodingType = typeof SupplyrequestKindCodings;
//# sourceMappingURL=SupplyrequestKindCodings.d.ts.map