/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The validation status of the target
 */
var VerificationresultStatusCodings = {
    /**
     * attested: ***TODO***
     */
    Attested: new Coding({
        display: "Attested",
        code: "attested",
        system: "http://hl7.org/fhir/CodeSystem/status",
    }),
    /**
     * in-process: ***TODO***
     */
    InProcess: new Coding({
        display: "In process",
        code: "in-process",
        system: "http://hl7.org/fhir/CodeSystem/status",
    }),
    /**
     * req-revalid: ***TODO***
     */
    RequiresRevalidation: new Coding({
        display: "Requires revalidation",
        code: "req-revalid",
        system: "http://hl7.org/fhir/CodeSystem/status",
    }),
    /**
     * reval-fail: ***TODO***
     */
    ReValidationFailed: new Coding({
        display: "Re-Validation failed",
        code: "reval-fail",
        system: "http://hl7.org/fhir/CodeSystem/status",
    }),
    /**
     * val-fail: ***TODO***
     */
    ValidationFailed: new Coding({
        display: "Validation failed",
        code: "val-fail",
        system: "http://hl7.org/fhir/CodeSystem/status",
    }),
    /**
     * validated: ***TODO***
     */
    Validated: new Coding({
        display: "Validated",
        code: "validated",
        system: "http://hl7.org/fhir/CodeSystem/status",
    }),
};

export { VerificationresultStatusCodings };
//# sourceMappingURL=VerificationresultStatusCodings.js.map