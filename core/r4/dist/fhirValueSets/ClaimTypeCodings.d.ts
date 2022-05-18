import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes Claim Type codes.
 */
export declare const ClaimTypeCodings: {
    /**
     * institutional: Hospital, clinic and typically inpatient claims.
     */
    readonly Institutional: Coding;
    /**
     * oral: Dental, Denture and Hygiene claims.
     */
    readonly Oral: Coding;
    /**
     * pharmacy: Pharmacy claims for goods and services.
     */
    readonly Pharmacy: Coding;
    /**
     * professional: Typically, outpatient claims from Physician, Psychological, Chiropractor, Physiotherapy, Speech Pathology, rehabilitative, consulting.
     */
    readonly Professional: Coding;
    /**
     * vision: Vision claims for professional services and products such as glasses and contact lenses.
     */
    readonly Vision: Coding;
};
/**
 * This value set includes Claim Type codes.
 */
export declare type ClaimTypeCodingType = typeof ClaimTypeCodings;
//# sourceMappingURL=ClaimTypeCodings.d.ts.map