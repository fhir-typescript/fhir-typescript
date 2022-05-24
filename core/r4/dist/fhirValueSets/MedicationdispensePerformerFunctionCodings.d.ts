import { CodingArgs } from '../fhir/Coding.js';
/**
 * MedicationDispense Performer Function Codes
 */
export declare type MedicationdispensePerformerFunctionCodingType = {
    /**
     * checker: Performed initial quality assurance on the prepared medication
     */
    Checker: CodingArgs;
    /**
     * dataenterer: Recorded the details of the request
     */
    DataEnterer: CodingArgs;
    /**
     * finalchecker: Performed the final quality assurance on the prepared medication against the request. Typically, this is a pharmacist function.
     */
    FinalChecker: CodingArgs;
    /**
     * packager: Prepared the medication.
     */
    Packager: CodingArgs;
};
/**
 * MedicationDispense Performer Function Codes
 */
export declare const MedicationdispensePerformerFunctionCodings: MedicationdispensePerformerFunctionCodingType;
//# sourceMappingURL=MedicationdispensePerformerFunctionCodings.d.ts.map