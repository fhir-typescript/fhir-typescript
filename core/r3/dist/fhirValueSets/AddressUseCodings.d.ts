import { CodingArgs } from '../fhir/Coding.js';
/**
 * The use of an address
 */
export declare type AddressUseCodingType = {
    /**
     * home: A communication address at a home.
     */
    Home: CodingArgs;
    /**
     * old: This address is no longer in use (or was never correct, but retained for records).
     */
    OldIncorrect: CodingArgs;
    /**
     * temp: A temporary address. The period can provide more detailed information.
     */
    Temporary: CodingArgs;
    /**
     * work: An office address. First choice for business related contacts during business hours.
     */
    Work: CodingArgs;
};
/**
 * The use of an address
 */
export declare const AddressUseCodings: AddressUseCodingType;
//# sourceMappingURL=AddressUseCodings.d.ts.map