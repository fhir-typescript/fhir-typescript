/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The reason why the supply item was requested.
 */
var SupplyrequestReasonCodings = {
    /**
     * patient-care: The supply has been requested for use in direct patient care.
     */
    PatientCare: new Coding({
        display: "Patient Care",
        code: "patient-care",
        system: "http://terminology.hl7.org/CodeSystem/supplyrequest-reason",
    }),
    /**
     * ward-stock: The supply has been requested for creating or replenishing ward stock.
     */
    WardStock: new Coding({
        display: "Ward Stock",
        code: "ward-stock",
        system: "http://terminology.hl7.org/CodeSystem/supplyrequest-reason",
    }),
};

export { SupplyrequestReasonCodings };
//# sourceMappingURL=SupplyrequestReasonCodings.js.map