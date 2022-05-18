/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * A code to indicate if the substance is actively used.
 */
var SubstanceStatusCodings = {
    /**
     * active: The substance is considered for use or reference.
     */
    Active: new Coding({
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/substance-status",
    }),
    /**
     * entered-in-error: The substance was entered in error.
     */
    EnteredInError: new Coding({
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/substance-status",
    }),
    /**
     * inactive: The substance is considered for reference, but not for use.
     */
    Inactive: new Coding({
        display: "Inactive",
        code: "inactive",
        system: "http://hl7.org/fhir/substance-status",
    }),
};

export { SubstanceStatusCodings };
//# sourceMappingURL=SubstanceStatusCodings.js.map
