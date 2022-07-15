import { CodingArgs } from '../fhir/Coding.js';
/**
 * Classification of relationship between a therapy and a contraindication or an indication.
 */
export declare type TherapyRelationshipTypeCodingType = {
    /**
     * contraindicated-except-with: Contraindicated unless the other therapy is given
     */
    ContraindicatedUnlessTheOtherTherapyIsGiven: CodingArgs;
    /**
     * contraindicated-only-with: Only contraindicated if the other therapy is given
     */
    OnlyContraindicatedIfTheOtherTherapyIsGiven: CodingArgs;
    /**
     * indicated-except-with: Indicated except when the other therapy is given
     */
    IndicatedExceptWhenTheOtherTherapyIsGiven: CodingArgs;
    /**
     * indicated-only-before: Indicated only if the other therapy is planned to be given afterwards (prep)
     */
    IndicatedOnlyIfTheOtherTherapyIsPlannedToBeGivenAfterwardsPrep: CodingArgs;
    /**
     * indicated-only-with: Indicated only when the other therapy is given (co-occurrent)
     */
    IndicatedOnlyWhenTheOtherTherapyIsGivenCoOccurrent: CodingArgs;
    /**
     * replace-other-therapy: Indicated to replace the other therapy
     */
    IndicatedToReplaceTheOtherTherapy: CodingArgs;
    /**
     * replace-other-therapy-contraindicated: Indicated to replace the other contraindicated therapy.
     */
    IndicatedToReplaceTheOtherContraindicatedTherapy: CodingArgs;
    /**
     * replace-other-therapy-not-effective: Indicated to replace the other therapy not effective on patient
     */
    IndicatedToReplaceTheOtherTherapyNotEffectiveOnPatient: CodingArgs;
    /**
     * replace-other-therapy-not-tolerated: Indicated to replace the other therapy not well tolerated by patient
     */
    IndicatedToReplaceTheOtherTherapyNotWellToleratedByPatient: CodingArgs;
};
/**
 * Classification of relationship between a therapy and a contraindication or an indication.
 */
export declare const TherapyRelationshipTypeCodings: TherapyRelationshipTypeCodingType;
//# sourceMappingURL=TherapyRelationshipTypeCodings.d.ts.map