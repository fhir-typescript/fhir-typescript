import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes a smattering of Benefit type codes.
 */
export declare type BenefitTypeCodingType = {
    /**
     * benefit: Maximum benefit allowable.
     */
    Benefit: CodingArgs;
    /**
     * copay: Copayment per service
     */
    CopaymentPerService: CodingArgs;
    /**
     * copay-maximum: Copayment maximum per service
     */
    CopaymentMaximumPerService: CodingArgs;
    /**
     * copay-percent: Copayment percentage per service
     */
    CopaymentPercentPerService: CodingArgs;
    /**
     * deductible: Cost to be incurred before benefits are applied
     */
    Deductible: CodingArgs;
    /**
     * medical-primarycare: Medical Primary Health Coverage
     */
    MedicalPrimaryHealthCoverage: CodingArgs;
    /**
     * pharmacy-dispense: Pharmacy Dispense Coverage
     */
    PharmacyDispenseCoverage: CodingArgs;
    /**
     * room: Type of room
     */
    Room: CodingArgs;
    /**
     * vision-contacts: Contact Lenses
     */
    VisionContactsCoverage: CodingArgs;
    /**
     * vision-exam: Vision Exam
     */
    VisionExam: CodingArgs;
    /**
     * vision-glasses: Frames and lenses
     */
    VisionGlasses: CodingArgs;
    /**
     * visit: Service visit
     */
    Visit: CodingArgs;
};
/**
 * This value set includes a smattering of Benefit type codes.
 */
export declare const BenefitTypeCodings: BenefitTypeCodingType;
//# sourceMappingURL=BenefitTypeCodings.d.ts.map