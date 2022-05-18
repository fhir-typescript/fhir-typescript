/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The reported execution result.
 */
var ReportResultCodesCodings = {
    /**
     * fail: One or more test operations failed one or more asserts.
     */
    Fail: new Coding({
        display: "Fail",
        code: "fail",
        system: "http://hl7.org/fhir/report-result-codes",
    }),
    /**
     * pass: All test operations successfully passed all asserts.
     */
    Pass: new Coding({
        display: "Pass",
        code: "pass",
        system: "http://hl7.org/fhir/report-result-codes",
    }),
    /**
     * pending: One or more test operations is pending execution completion.
     */
    Pending: new Coding({
        display: "Pending",
        code: "pending",
        system: "http://hl7.org/fhir/report-result-codes",
    }),
};

export { ReportResultCodesCodings };
//# sourceMappingURL=ReportResultCodesCodings.js.map