import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of the measure report.
 */
export declare type MeasureReportTypeCodingType = {
    /**
     * data-collection: A data collection report that contains data-of-interest for the measure.
     */
    DataCollection: CodingArgs;
    /**
     * individual: An individual report that provides information on the performance for a given measure with respect to a single subject.
     */
    Individual: CodingArgs;
    /**
     * subject-list: A subject list report that includes a listing of subjects that satisfied each population criteria in the measure.
     */
    SubjectList: CodingArgs;
    /**
     * summary: A summary report that returns the number of members in each population criteria for the measure.
     */
    Summary: CodingArgs;
};
/**
 * The type of the measure report.
 */
export declare const MeasureReportTypeCodings: MeasureReportTypeCodingType;
//# sourceMappingURL=MeasureReportTypeCodings.d.ts.map