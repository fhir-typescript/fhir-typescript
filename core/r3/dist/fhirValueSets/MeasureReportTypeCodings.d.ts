import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of the measure report
 */
export declare type MeasureReportTypeCodingType = {
    /**
     * individual: An individual report that provides information on the performance for a given measure with respect to a single patient
     */
    Individual: CodingArgs;
    /**
     * patient-list: A patient list report that includes a listing of patients that satisfied each population criteria in the measure
     */
    PatientList: CodingArgs;
    /**
     * summary: A summary report that returns the number of patients in each population criteria for the measure
     */
    Summary: CodingArgs;
};
/**
 * The type of the measure report
 */
export declare const MeasureReportTypeCodings: MeasureReportTypeCodingType;
//# sourceMappingURL=MeasureReportTypeCodings.d.ts.map