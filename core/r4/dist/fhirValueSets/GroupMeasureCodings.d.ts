import { CodingArgs } from '../fhir/Coding.js';
/**
 * Possible group measure aggregates (E.g. Mean, Median).
 */
export declare type GroupMeasureCodingType = {
    /**
     * mean: Aggregated using Mean of participant values.
     */
    Mean: CodingArgs;
    /**
     * mean-of-mean: Aggregated using Mean of study mean values.
     */
    MeanOfStudyMeans: CodingArgs;
    /**
     * mean-of-median: Aggregated using Mean of study median values.
     */
    MeanOfStudyMedins: CodingArgs;
    /**
     * median: Aggregated using Median of participant values.
     */
    Median: CodingArgs;
    /**
     * median-of-mean: Aggregated using Median of study mean values.
     */
    MedianOfStudyMeans: CodingArgs;
    /**
     * median-of-median: Aggregated using Median of study median values.
     */
    MedianOfStudyMedians: CodingArgs;
};
/**
 * Possible group measure aggregates (E.g. Mean, Median).
 */
export declare const GroupMeasureCodings: GroupMeasureCodingType;
//# sourceMappingURL=GroupMeasureCodings.d.ts.map