/**
 * This value set includes a smattering of Benefit type codes.
 */
export declare const BenefitTypeCodes: {
    /**
     * benefit: Maximum benefit allowable.
     */
    readonly Benefit: "benefit";
    /**
     * copay: Copayment per service
     */
    readonly CopaymentPerService: "copay";
    /**
     * copay-maximum: Copayment maximum per service
     */
    readonly CopaymentMaximumPerService: "copay-maximum";
    /**
     * copay-percent: Copayment percentage per service
     */
    readonly CopaymentPercentPerService: "copay-percent";
    /**
     * deductable: Cost to be incurred before benefits are applied
     */
    readonly Deductable: "deductable";
    /**
     * medical-primarycare: Medical Primary Health Coverage
     */
    readonly MedicalPrimaryHealthCoverage: "medical-primarycare";
    /**
     * pharmacy-dispense: Pharmacy Dispense Coverage
     */
    readonly PharmacyDispenseCoverage: "pharmacy-dispense";
    /**
     * room: Type of room
     */
    readonly Room: "room";
    /**
     * vision-contacts: Contact Lenses
     */
    readonly VisionContactsCoverage: "vision-contacts";
    /**
     * vision-exam: Vision Exam
     */
    readonly VisionExam: "vision-exam";
    /**
     * vision-glasses: Frames and lenses
     */
    readonly VisionGlasses: "vision-glasses";
    /**
     * visit: Service visit
     */
    readonly Visit: "visit";
};
/**
 * This value set includes a smattering of Benefit type codes.
 */
export declare type BenefitTypeCodeType = typeof BenefitTypeCodes[keyof typeof BenefitTypeCodes];
//# sourceMappingURL=BenefitTypeCodes.d.ts.map