import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes Claim Type codes.
 */
export declare type ClaimTypeCodingType = {
    /**
     * institutional: Hospital, clinic and typically inpatient claims.
     */
    Institutional: CodingArgs;
    /**
     * oral: Dental, Denture and Hygiene claims.
     */
    Oral: CodingArgs;
    /**
     * pharmacy: Pharmacy claims for goods and services.
     */
    Pharmacy: CodingArgs;
    /**
     * professional: Typically, outpatient claims from Physician, Psychological, Chiropractor, Physiotherapy, Speech Pathology, rehabilitative, consulting.
     */
    Professional: CodingArgs;
    /**
     * vision: Vision claims for professional services and products such as glasses and contact lenses.
     */
    Vision: CodingArgs;
};
/**
 * This value set includes Claim Type codes.
 */
export declare const ClaimTypeCodings: ClaimTypeCodingType;
//# sourceMappingURL=ClaimTypeCodings.d.ts.map