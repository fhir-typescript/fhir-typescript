import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export declare type CoverageCopayTypeCodingType = {
    /**
     * copay: A standard fixed currency amount applied to all classes or service or product not otherwise specified.
     */
    CopayAmount: CodingArgs;
    /**
     * copaypct: A standard percentage applied to all classes or service or product not otherwise specified.
     */
    CopayPercentage: CodingArgs;
    /**
     * deductible: The accumulated amount of patient payment before the coverage begins to pay for services.
     */
    Deductible: CodingArgs;
    /**
     * emergency: An episode in an emergency department.
     */
    Emergency: CodingArgs;
    /**
     * gpvisit: An office visit for a general practitioner of a discipline.
     */
    GPOfficeVisit: CodingArgs;
    /**
     * inpthosp: An episode of an Inpatient hospital stay.
     */
    InpatientHospital: CodingArgs;
    /**
     * maxoutofpocket: The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.
     */
    MaximumOutOfPocket: CodingArgs;
    /**
     * spvisit: An office visit for a specialist practitioner of a discipline
     */
    SpecialistOfficeVisit: CodingArgs;
    /**
     * televisit: A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.
     */
    TeleVisit: CodingArgs;
    /**
     * urgentcare: A visit to an urgent care facility - typically a community care clinic.
     */
    UrgentCare: CodingArgs;
};
/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export declare const CoverageCopayTypeCodings: CoverageCopayTypeCodingType;
//# sourceMappingURL=CoverageCopayTypeCodings.d.ts.map