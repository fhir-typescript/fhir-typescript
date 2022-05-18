/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Types of resources that are part of group.
 */
var GroupTypeCodings = {
    /**
     * animal: Group contains "animal" Patient resources.
     */
    Animal: new Coding({
        display: "Animal",
        code: "animal",
        system: "http://hl7.org/fhir/group-type",
    }),
    /**
     * device: Group contains Device resources.
     */
    Device: new Coding({
        display: "Device",
        code: "device",
        system: "http://hl7.org/fhir/group-type",
    }),
    /**
     * medication: Group contains Medication resources.
     */
    Medication: new Coding({
        display: "Medication",
        code: "medication",
        system: "http://hl7.org/fhir/group-type",
    }),
    /**
     * person: Group contains "person" Patient resources.
     */
    Person: new Coding({
        display: "Person",
        code: "person",
        system: "http://hl7.org/fhir/group-type",
    }),
    /**
     * practitioner: Group contains healthcare practitioner resources (Practitioner or PractitionerRole).
     */
    Practitioner: new Coding({
        display: "Practitioner",
        code: "practitioner",
        system: "http://hl7.org/fhir/group-type",
    }),
    /**
     * substance: Group contains Substance resources.
     */
    Substance: new Coding({
        display: "Substance",
        code: "substance",
        system: "http://hl7.org/fhir/group-type",
    }),
};

export { GroupTypeCodings };
//# sourceMappingURL=GroupTypeCodings.js.map