/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Use of contact point.
 */
var ContactPointUseCodings = {
    /**
     * home: A communication contact point at a home; attempted contacts for business purposes might intrude privacy and chances are one will contact family or other household members instead of the person one wishes to call. Typically used with urgent cases, or if no other contacts are available.
     */
    Home: new Coding({
        display: "Home",
        code: "home",
        system: "http://hl7.org/fhir/contact-point-use",
    }),
    /**
     * mobile: A telecommunication device that moves and stays with its owner. May have characteristics of all other use codes, suitable for urgent matters, not the first choice for routine business.
     */
    Mobile: new Coding({
        display: "Mobile",
        code: "mobile",
        system: "http://hl7.org/fhir/contact-point-use",
    }),
    /**
     * old: This contact point is no longer in use (or was never correct, but retained for records).
     */
    Old: new Coding({
        display: "Old",
        code: "old",
        system: "http://hl7.org/fhir/contact-point-use",
    }),
    /**
     * temp: A temporary contact point. The period can provide more detailed information.
     */
    Temp: new Coding({
        display: "Temp",
        code: "temp",
        system: "http://hl7.org/fhir/contact-point-use",
    }),
    /**
     * work: An office contact point. First choice for business related contacts during business hours.
     */
    Work: new Coding({
        display: "Work",
        code: "work",
        system: "http://hl7.org/fhir/contact-point-use",
    }),
};

export { ContactPointUseCodings };
//# sourceMappingURL=ContactPointUseCodings.js.map