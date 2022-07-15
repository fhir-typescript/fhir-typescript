/**
 * The type of the measure report
 */
export declare const MeasureReportTypeCodes: {
    /**
     * individual: An individual report that provides information on the performance for a given measure with respect to a single patient
     */
    readonly Individual: "individual";
    /**
     * patient-list: A patient list report that includes a listing of patients that satisfied each population criteria in the measure
     */
    readonly PatientList: "patient-list";
    /**
     * summary: A summary report that returns the number of patients in each population criteria for the measure
     */
    readonly Summary: "summary";
};
/**
 * The type of the measure report
 */
export declare type MeasureReportTypeCodeType = typeof MeasureReportTypeCodes[keyof typeof MeasureReportTypeCodes];
//# sourceMappingURL=MeasureReportTypeCodes.d.ts.map