import { Coding } from '../fhir/Coding.js';
/**
 * A code that identifies the status of the family history record.
 */
export declare const HistoryStatusCodings: {
    /**
     * completed: All available related health information is captured as of the date (and possibly time) when the family member history was taken.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: Coding;
    /**
     * health-unknown: Health information for this family member is unavailable/unknown.
     */
    readonly HealthUnknown: Coding;
    /**
     * partial: Some health information is known and captured, but not complete - see notes for details.
     */
    readonly Partial: Coding;
};
/**
 * A code that identifies the status of the family history record.
 */
export declare type HistoryStatusCodingType = typeof HistoryStatusCodings;
//# sourceMappingURL=HistoryStatusCodings.d.ts.map