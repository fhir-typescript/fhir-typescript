import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code that identifies the status of the family history record.
 */
export declare type HistoryStatusCodingType = {
    /**
     * completed: All available related health information is captured as of the date (and possibly time) when the family member history was taken.
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: CodingArgs;
    /**
     * health-unknown: Health information for this family member is unavailable/unknown.
     */
    HealthUnknown: CodingArgs;
    /**
     * partial: Some health information is known and captured, but not complete - see notes for details.
     */
    Partial: CodingArgs;
};
/**
 * A code that identifies the status of the family history record.
 */
export declare const HistoryStatusCodings: HistoryStatusCodingType;
//# sourceMappingURL=HistoryStatusCodings.d.ts.map