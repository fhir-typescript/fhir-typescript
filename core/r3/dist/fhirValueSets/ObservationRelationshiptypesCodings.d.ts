import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes specifying how two observations are related.
 */
export declare type ObservationRelationshiptypesCodingType = {
    /**
     * derived-from: The target resource (Observation or QuestionnaireResponse) is part of the information from which this observation value is derived. (e.g. calculated anion gap, Apgar score)  NOTE:  "derived-from" is the only logical choice when referencing QuestionnaireResponse.
     */
    DerivedFrom: CodingArgs;
    /**
     * has-member: This observation is a group observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group.
     */
    HasMember: CodingArgs;
    /**
     * interfered-by: The value of the target observation interferes (degrades quality, or prevents valid observation) with the semantics of the source observation (e.g. a hemolysis measure target from a plasma potassium measure, which has no value).
     */
    InterferedBy: CodingArgs;
    /**
     * qualified-by: The value of the target observation qualifies (refines) the semantics of the source observation (e.g. a lipemia measure target from a plasma measure).
     */
    QualifiedBy: CodingArgs;
    /**
     * replaces: This observation replaces a previous observation (i.e. a revised value). The target observation is now obsolete.
     */
    Replaces: CodingArgs;
    /**
     * sequel-to: This observation follows the target observation (e.g. timed tests such as Glucose Tolerance Test).
     */
    SequelTo: CodingArgs;
};
/**
 * Codes specifying how two observations are related.
 */
export declare const ObservationRelationshiptypesCodings: ObservationRelationshiptypesCodingType;
//# sourceMappingURL=ObservationRelationshiptypesCodings.d.ts.map