/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
var AllergyintoleranceVerificationCodings = {
    /**
     * confirmed: A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.
     */
    Confirmed: new Coding({
        display: "Confirmed",
        code: "confirmed",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
    }),
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    EnteredInError: new Coding({
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
    }),
    /**
     * refuted: A propensity for a reaction to the identified substance has been disputed or disproven with a sufficient level of clinical certainty to justify invalidating the assertion. This might or might not include testing or rechallenge.
     */
    Refuted: new Coding({
        display: "Refuted",
        code: "refuted",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
    }),
    /**
     * unconfirmed: A low level of certainty about the propensity for a reaction to the identified substance.
     */
    Unconfirmed: new Coding({
        display: "Unconfirmed",
        code: "unconfirmed",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
    }),
};

export { AllergyintoleranceVerificationCodings };
//# sourceMappingURL=AllergyintoleranceVerificationCodings.js.map