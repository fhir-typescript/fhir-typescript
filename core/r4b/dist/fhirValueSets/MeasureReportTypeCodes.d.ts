/**
 * The type of the measure report.
 */
export declare const MeasureReportTypeCodes: {
    /**
     * data-collection: A data collection report that contains data-of-interest for the measure.
     */
    readonly DataCollection: "data-collection";
    /**
     * individual: An individual report that provides information on the performance for a given measure with respect to a single subject.
     */
    readonly Individual: "individual";
    /**
     * subject-list: A subject list report that includes a listing of subjects that satisfied each population criteria in the measure.
     */
    readonly SubjectList: "subject-list";
    /**
     * summary: A summary report that returns the number of members in each population criteria for the measure.
     */
    readonly Summary: "summary";
};
/**
 * The type of the measure report.
 */
export declare type MeasureReportTypeCodeType = typeof MeasureReportTypeCodes[keyof typeof MeasureReportTypeCodes];
//# sourceMappingURL=MeasureReportTypeCodes.d.ts.map