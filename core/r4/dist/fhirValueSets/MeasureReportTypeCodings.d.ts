import { Coding } from '../fhir/Coding.js';
/**
 * The type of the measure report.
 */
export declare const MeasureReportTypeCodings: {
    /**
     * data-collection: A data collection report that contains data-of-interest for the measure.
     */
    readonly DataCollection: Coding;
    /**
     * individual: An individual report that provides information on the performance for a given measure with respect to a single subject.
     */
    readonly Individual: Coding;
    /**
     * subject-list: A subject list report that includes a listing of subjects that satisfied each population criteria in the measure.
     */
    readonly SubjectList: Coding;
    /**
     * summary: A summary report that returns the number of members in each population criteria for the measure.
     */
    readonly Summary: Coding;
};
/**
 * The type of the measure report.
 */
export declare type MeasureReportTypeCodingType = typeof MeasureReportTypeCodings;
//# sourceMappingURL=MeasureReportTypeCodings.d.ts.map