import { Coding } from '../fhir/Coding.js';
/**
 * MedicationDispense Performer Function Codes
 */
export declare const MedicationdispensePerformerFunctionCodings: {
    /**
     * checker: Performed initial quality assurance on the prepared medication
     */
    readonly Checker: Coding;
    /**
     * dataenterer: Recorded the details of the request
     */
    readonly DataEnterer: Coding;
    /**
     * finalchecker: Performed the final quality assurance on the prepared medication against the request. Typically, this is a pharmacist function.
     */
    readonly FinalChecker: Coding;
    /**
     * packager: Prepared the medication.
     */
    readonly Packager: Coding;
};
/**
 * MedicationDispense Performer Function Codes
 */
export declare type MedicationdispensePerformerFunctionCodingType = typeof MedicationdispensePerformerFunctionCodings;
//# sourceMappingURL=MedicationdispensePerformerFunctionCodings.d.ts.map