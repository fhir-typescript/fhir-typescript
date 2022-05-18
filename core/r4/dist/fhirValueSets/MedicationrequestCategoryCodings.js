/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * MedicationRequest Category Codes
 */
var MedicationrequestCategoryCodings = {
    /**
     * community: Includes requests for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    Community: new Coding({
        display: "Community",
        code: "community",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
    }),
    /**
     * discharge: Includes requests for medications created when the patient is being released from a facility
     */
    Discharge: new Coding({
        display: "Discharge",
        code: "discharge",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
    }),
    /**
     * inpatient: Includes requests for medications to be administered or consumed in an inpatient or acute care setting
     */
    Inpatient: new Coding({
        display: "Inpatient",
        code: "inpatient",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
    }),
    /**
     * outpatient: Includes requests for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    Outpatient: new Coding({
        display: "Outpatient",
        code: "outpatient",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
    }),
};

export { MedicationrequestCategoryCodings };
//# sourceMappingURL=MedicationrequestCategoryCodings.js.map