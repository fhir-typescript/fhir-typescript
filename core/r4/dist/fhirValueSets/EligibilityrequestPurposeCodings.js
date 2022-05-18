/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * A code specifying the types of information being requested.
 */
var EligibilityrequestPurposeCodings = {
    /**
     * auth-requirements: The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    CoverageAuthRequirements: new Coding({
        display: "Coverage auth-requirements",
        code: "auth-requirements",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose",
    }),
    /**
     * benefits: The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    CoverageBenefits: new Coding({
        display: "Coverage benefits",
        code: "benefits",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose",
    }),
    /**
     * discovery: The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    CoverageDiscovery: new Coding({
        display: "Coverage Discovery",
        code: "discovery",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose",
    }),
    /**
     * validation: A check that the specified coverages are in-force is requested.
     */
    CoverageValidation: new Coding({
        display: "Coverage Validation",
        code: "validation",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose",
    }),
};

export { EligibilityrequestPurposeCodings };
//# sourceMappingURL=EligibilityrequestPurposeCodings.js.map