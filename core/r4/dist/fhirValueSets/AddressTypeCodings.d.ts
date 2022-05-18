import { Coding } from '../fhir/Coding.js';
/**
 * The type of an address (physical / postal).
 */
export declare const AddressTypeCodings: {
    /**
     * both: An address that is both physical and postal.
     */
    readonly PostalAndPhysical: Coding;
    /**
     * physical: A physical address that can be visited.
     */
    readonly Physical: Coding;
    /**
     * postal: Mailing addresses - PO Boxes and care-of addresses.
     */
    readonly Postal: Coding;
};
/**
 * The type of an address (physical / postal).
 */
export declare type AddressTypeCodingType = typeof AddressTypeCodings;
//# sourceMappingURL=AddressTypeCodings.d.ts.map