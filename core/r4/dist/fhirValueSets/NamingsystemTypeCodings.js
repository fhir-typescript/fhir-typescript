/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Identifies the purpose of the naming system.
 */
var NamingsystemTypeCodings = {
    /**
     * codesystem: The naming system is used to define concepts and symbols to represent those concepts; e.g. UCUM, LOINC, NDC code, local lab codes, etc.
     */
    CodeSystem: new Coding({
        display: "Code System",
        code: "codesystem",
        system: "http://hl7.org/fhir/namingsystem-type",
    }),
    /**
     * identifier: The naming system is used to manage identifiers (e.g. license numbers, order numbers, etc.).
     */
    Identifier: new Coding({
        display: "Identifier",
        code: "identifier",
        system: "http://hl7.org/fhir/namingsystem-type",
    }),
    /**
     * root: The naming system is used as the root for other identifiers and naming systems.
     */
    Root: new Coding({
        display: "Root",
        code: "root",
        system: "http://hl7.org/fhir/namingsystem-type",
    }),
};

export { NamingsystemTypeCodings };
//# sourceMappingURL=NamingsystemTypeCodings.js.map
