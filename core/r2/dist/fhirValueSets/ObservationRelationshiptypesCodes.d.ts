/**
 * Codes specifying how two observations are related.
 */
export declare const ObservationRelationshiptypesCodes: {
    /**
     * derived-from: The target resource (Observation or QuestionnaireResponse) is part of the information from which this observation value is derived. (e.g. calculated anion gap, Apgar score)  NOTE:  "derived-from" is only logical choice when referencing QuestionnaireResponse.
     */
    readonly DerivedFrom: "derived-from";
    /**
     * has-member: This observation is a group observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group.
     */
    readonly HasMember: "has-member";
    /**
     * interfered-by: The value of the target observation interferes (degrades quality, or prevents valid observation) with the semantics of the source observation (e.g. a hemolysis measure target from a plasma potassium measure which has no value).
     */
    readonly InterferedBy: "interfered-by";
    /**
     * qualified-by: The value of the target observation qualifies (refines) the semantics of the source observation (e.g. a lipemia measure target from a plasma measure).
     */
    readonly QualifiedBy: "qualified-by";
    /**
     * replaces: This observation replaces a previous observation (i.e. a revised value). The target observation is now obsolete.
     */
    readonly Replaces: "replaces";
    /**
     * sequel-to: This observation follows the target observation (e.g. timed tests such as Glucose Tolerance Test).
     */
    readonly SequelTo: "sequel-to";
};
/**
 * Codes specifying how two observations are related.
 */
export declare type ObservationRelationshiptypesCodeType = typeof ObservationRelationshiptypesCodes[keyof typeof ObservationRelationshiptypesCodes];
//# sourceMappingURL=ObservationRelationshiptypesCodes.d.ts.map