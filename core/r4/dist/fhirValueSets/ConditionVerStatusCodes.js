/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/condition-ver-status|4.0.1
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
var ConditionVerStatusCodes = {
    /**
     * confirmed: There is sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    Confirmed: "confirmed",
    /**
     * differential: One of a set of potential (and typically mutually exclusive) diagnoses asserted to further guide the diagnostic process and preliminary treatment.
     */
    Differential: "differential",
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    EnteredInError: "entered-in-error",
    /**
     * provisional: This is a tentative diagnosis - still a candidate that is under consideration.
     */
    Provisional: "provisional",
    /**
     * refuted: This condition has been ruled out by diagnostic and clinical evidence.
     */
    Refuted: "refuted",
    /**
     * unconfirmed: There is not sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    Unconfirmed: "unconfirmed",
};

export { ConditionVerStatusCodes };
//# sourceMappingURL=ConditionVerStatusCodes.js.map
