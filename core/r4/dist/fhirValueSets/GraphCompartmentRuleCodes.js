/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/graph-compartment-rule|4.0.1
/**
 * How a compartment must be linked.
 */
var GraphCompartmentRuleCodes = {
    /**
     * custom: The compartment rule is defined in the accompanying FHIRPath expression.
     */
    Custom: "custom",
    /**
     * different: The compartment must be different.
     */
    Different: "different",
    /**
     * identical: The compartment must be identical (the same literal reference).
     */
    Identical: "identical",
    /**
     * matching: The compartment must be the same - the record must be about the same patient, but the reference may be different.
     */
    Matching: "matching",
};

export { GraphCompartmentRuleCodes };
//# sourceMappingURL=GraphCompartmentRuleCodes.js.map
