/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The type of the measure report.
 */
var MeasureReportTypeCodings = {
    /**
     * data-collection: A data collection report that contains data-of-interest for the measure.
     */
    DataCollection: new Coding({
        display: "Data Collection",
        code: "data-collection",
        system: "http://hl7.org/fhir/measure-report-type",
    }),
    /**
     * individual: An individual report that provides information on the performance for a given measure with respect to a single subject.
     */
    Individual: new Coding({
        display: "Individual",
        code: "individual",
        system: "http://hl7.org/fhir/measure-report-type",
    }),
    /**
     * subject-list: A subject list report that includes a listing of subjects that satisfied each population criteria in the measure.
     */
    SubjectList: new Coding({
        display: "Subject List",
        code: "subject-list",
        system: "http://hl7.org/fhir/measure-report-type",
    }),
    /**
     * summary: A summary report that returns the number of members in each population criteria for the measure.
     */
    Summary: new Coding({
        display: "Summary",
        code: "summary",
        system: "http://hl7.org/fhir/measure-report-type",
    }),
};

export { MeasureReportTypeCodings };
//# sourceMappingURL=MeasureReportTypeCodings.js.map
