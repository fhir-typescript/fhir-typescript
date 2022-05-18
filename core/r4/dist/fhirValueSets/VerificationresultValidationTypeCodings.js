/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * What the target is validated against
 */
var VerificationresultValidationTypeCodings = {
    /**
     * Code: multiple
     */
    MultipleSources: new Coding({
        display: "Multiple Sources",
        code: "multiple",
        system: "http://terminology.hl7.org/CodeSystem/validation-type",
    }),
    /**
     * Code: nothing
     */
    Nothing: new Coding({
        display: "Nothing",
        code: "nothing",
        system: "http://terminology.hl7.org/CodeSystem/validation-type",
    }),
    /**
     * Code: primary
     */
    PrimarySource: new Coding({
        display: "Primary Source",
        code: "primary",
        system: "http://terminology.hl7.org/CodeSystem/validation-type",
    }),
};

export { VerificationresultValidationTypeCodings };
//# sourceMappingURL=VerificationresultValidationTypeCodings.js.map