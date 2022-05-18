/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export declare const CoverageCopayTypeCodes: {
    /**
     * copay: A standard fixed currency amount applied to all classes or service or product not otherwise specified.
     */
    readonly CopayAmount: "copay";
    /**
     * copaypct: A standard percentage applied to all classes or service or product not otherwise specified.
     */
    readonly CopayPercentage: "copaypct";
    /**
     * deductible: The accumulated amount of patient payment before the coverage begins to pay for services.
     */
    readonly Deductible: "deductible";
    /**
     * emergency: An episode in an emergency department.
     */
    readonly Emergency: "emergency";
    /**
     * gpvisit: An office visit for a general practitioner of a discipline.
     */
    readonly GPOfficeVisit: "gpvisit";
    /**
     * inpthosp: An episode of an Inpatient hospital stay.
     */
    readonly InpatientHospital: "inpthosp";
    /**
     * maxoutofpocket: The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.
     */
    readonly MaximumOutOfPocket: "maxoutofpocket";
    /**
     * spvisit: An office visit for a specialist practitioner of a discipline
     */
    readonly SpecialistOfficeVisit: "spvisit";
    /**
     * televisit: A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.
     */
    readonly TeleVisit: "televisit";
    /**
     * urgentcare: A visit to an urgent care facility - typically a community care clinic.
     */
    readonly UrgentCare: "urgentcare";
};
/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export declare type CoverageCopayTypeCodeType = typeof CoverageCopayTypeCodes[keyof typeof CoverageCopayTypeCodes];
//# sourceMappingURL=CoverageCopayTypeCodes.d.ts.map