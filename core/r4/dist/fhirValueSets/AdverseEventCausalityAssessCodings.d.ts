import { Coding } from '../fhir/Coding.js';
/**
 * Codes for the assessment of whether the entity caused the event.
 */
export declare const AdverseEventCausalityAssessCodings: {
    /**
     * Certain: i) Event or laboratory test abnormality, with plausible time relationship to drug intake; ii) Cannot be explained by disease or other drugs; iii) Response to withdrawal plausible (pharmacologically, pathologically); iv) Event definitive pharmacologically or phenomenologically (i.e. an objective and specific medical disorder or a recognized pharmacological phenomenon); or v) Re-challenge satisfactory, if necessary.
     */
    readonly Certain: Coding;
    /**
     * Conditional-Classified: i) Event or laboratory test abnormality; ii) More data for proper assessment needed; or iii) Additional data under examination.
     */
    readonly ConditionalClassified: Coding;
    /**
     * Possible: i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Could also be explained by disease or other drugs; or iii) Information on drug withdrawal may be lacking or unclear.
     */
    readonly Possible: Coding;
    /**
     * Probably-Likely: i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Unlikely to be attributed to disease or other drugs; iii) Response to withdrawal clinically reasonable; or iv) Re-challenge not required.
     */
    readonly ProbablyLikely: Coding;
    /**
     * Unassessable-Unclassifiable: i) Report suggesting an adverse reaction; ii) Cannot be judged because information is insufficient or contradictory; or iii) Data cannot be supplemented or verified.
     */
    readonly UnassessableUnclassifiable: Coding;
    /**
     * Unlikely: i) Event or laboratory test abnormality, with a time to drug intake that makes a relationship improbable (but not impossible); or ii) Disease or other drugs provide plausible explanations.
     */
    readonly Unlikely: Coding;
};
/**
 * Codes for the assessment of whether the entity caused the event.
 */
export declare type AdverseEventCausalityAssessCodingType = typeof AdverseEventCausalityAssessCodings;
//# sourceMappingURL=AdverseEventCausalityAssessCodings.d.ts.map