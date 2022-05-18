/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Example use codes for the List resource - typical kinds of use.
 */
var ListExampleCodesCodings = {
    /**
     * adverserxns: A list of part adverse reactions.
     */
    AdverseReactions: new Coding({
        display: "Adverse Reactions",
        code: "adverserxns",
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
    }),
    /**
     * alerts: A list of alerts for the patient.
     */
    Alerts: new Coding({
        display: "Alerts",
        code: "alerts",
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
    }),
    /**
     * allergies: A list of Allergies for the patient.
     */
    Allergies: new Coding({
        display: "Allergies",
        code: "allergies",
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
    }),
    /**
     * medications: A list of medication statements for the patient.
     */
    MedicationList: new Coding({
        display: "Medication List",
        code: "medications",
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
    }),
    /**
     * plans: A set of care plans that apply in a particular context of care.
     */
    CarePlans: new Coding({
        display: "Care Plans",
        code: "plans",
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
    }),
    /**
     * problems: A list of problems that the patient is known of have (or have had in the past).
     */
    ProblemList: new Coding({
        display: "Problem List",
        code: "problems",
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
    }),
    /**
     * protocols: A set of protocols to be followed.
     */
    Protocols: new Coding({
        display: "Protocols",
        code: "protocols",
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
    }),
    /**
     * waiting: A list of items waiting for an event (perhaps a surgical patient waiting list).
     */
    WaitingList: new Coding({
        display: "Waiting List",
        code: "waiting",
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
    }),
    /**
     * worklist: A list of items that constitute a set of work to be performed (typically this code would be specialized for more specific uses, such as a ward round list).
     */
    Worklist: new Coding({
        display: "Worklist",
        code: "worklist",
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
    }),
};

export { ListExampleCodesCodings };
//# sourceMappingURL=ListExampleCodesCodings.js.map