/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * This value set includes sample Coverage Copayment Type codes.
 */
var CoverageCopayTypeCodings = {
    /**
     * copay: A standard fixed currency amount applied to all classes or service or product not otherwise specified.
     */
    CopayAmount: new Coding({
        display: "Copay Amount",
        code: "copay",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
    }),
    /**
     * copaypct: A standard percentage applied to all classes or service or product not otherwise specified.
     */
    CopayPercentage: new Coding({
        display: "Copay Percentage",
        code: "copaypct",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
    }),
    /**
     * deductible: The accumulated amount of patient payment before the coverage begins to pay for services.
     */
    Deductible: new Coding({
        display: "Deductible",
        code: "deductible",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
    }),
    /**
     * emergency: An episode in an emergency department.
     */
    Emergency: new Coding({
        display: "Emergency",
        code: "emergency",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
    }),
    /**
     * gpvisit: An office visit for a general practitioner of a discipline.
     */
    GPOfficeVisit: new Coding({
        display: "GP Office Visit",
        code: "gpvisit",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
    }),
    /**
     * inpthosp: An episode of an Inpatient hospital stay.
     */
    InpatientHospital: new Coding({
        display: "Inpatient Hospital",
        code: "inpthosp",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
    }),
    /**
     * maxoutofpocket: The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.
     */
    MaximumOutOfPocket: new Coding({
        display: "Maximum out of pocket",
        code: "maxoutofpocket",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
    }),
    /**
     * spvisit: An office visit for a specialist practitioner of a discipline
     */
    SpecialistOfficeVisit: new Coding({
        display: "Specialist Office Visit",
        code: "spvisit",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
    }),
    /**
     * televisit: A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.
     */
    TeleVisit: new Coding({
        display: "Tele-visit",
        code: "televisit",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
    }),
    /**
     * urgentcare: A visit to an urgent care facility - typically a community care clinic.
     */
    UrgentCare: new Coding({
        display: "Urgent Care",
        code: "urgentcare",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
    }),
};

export { CoverageCopayTypeCodings };
//# sourceMappingURL=CoverageCopayTypeCodings.js.map
