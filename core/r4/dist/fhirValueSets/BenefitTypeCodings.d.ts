import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes a smattering of Benefit type codes.
 */
export declare const BenefitTypeCodings: {
    /**
     * benefit: Maximum benefit allowable.
     */
    readonly Benefit: Coding;
    /**
     * copay: Copayment per service
     */
    readonly CopaymentPerService: Coding;
    /**
     * copay-maximum: Copayment maximum per service
     */
    readonly CopaymentMaximumPerService: Coding;
    /**
     * copay-percent: Copayment percentage per service
     */
    readonly CopaymentPercentPerService: Coding;
    /**
     * deductible: Cost to be incurred before benefits are applied
     */
    readonly Deductible: Coding;
    /**
     * medical-primarycare: Medical Primary Health Coverage
     */
    readonly MedicalPrimaryHealthCoverage: Coding;
    /**
     * pharmacy-dispense: Pharmacy Dispense Coverage
     */
    readonly PharmacyDispenseCoverage: Coding;
    /**
     * room: Type of room
     */
    readonly Room: Coding;
    /**
     * vision-contacts: Contact Lenses
     */
    readonly VisionContactsCoverage: Coding;
    /**
     * vision-exam: Vision Exam
     */
    readonly VisionExam: Coding;
    /**
     * vision-glasses: Frames and lenses
     */
    readonly VisionGlasses: Coding;
    /**
     * visit: Service visit
     */
    readonly Visit: Coding;
};
/**
 * This value set includes a smattering of Benefit type codes.
 */
export declare type BenefitTypeCodingType = typeof BenefitTypeCodings;
//# sourceMappingURL=BenefitTypeCodings.d.ts.map