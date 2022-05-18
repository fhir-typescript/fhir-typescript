/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Identifies types of events that might trigger the start of a goal.
 */
var GoalStartEventCodings = {
    /**
     * Code: 308283009
     */
    DischargeFromHospital: new Coding({
        display: "Discharge from hospital",
        code: "308283009",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 32485007
     */
    AdmissionToHospital: new Coding({
        display: "Admission to hospital",
        code: "32485007",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 386216000
     */
    Childbirth: new Coding({
        display: "Childbirth",
        code: "386216000",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 442137000
     */
    CompletionTimeOfProcedure: new Coding({
        display: "Completion time of procedure",
        code: "442137000",
        system: "http://snomed.info/sct",
    }),
};

export { GoalStartEventCodings };
//# sourceMappingURL=GoalStartEventCodings.js.map