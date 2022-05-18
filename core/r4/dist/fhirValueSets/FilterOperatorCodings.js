/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The kind of operation to perform as a part of a property based filter.
 */
var FilterOperatorCodings = {
    /**
     * =: The specified property of the code equals the provided value.
     */
    Equals: new Coding({
        display: "Equals",
        code: "=",
        system: "http://hl7.org/fhir/filter-operator",
    }),
    /**
     * descendent-of: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, excluding the provided concept itself i.e. include descendant codes only).
     */
    DescendentOfBySubsumption: new Coding({
        display: "Descendent Of (by subsumption)",
        code: "descendent-of",
        system: "http://hl7.org/fhir/filter-operator",
    }),
    /**
     * exists: The specified property of the code has at least one value (if the specified value is true; if the specified value is false, then matches when the specified property of the code has no values).
     */
    Exists: new Coding({
        display: "Exists",
        code: "exists",
        system: "http://hl7.org/fhir/filter-operator",
    }),
    /**
     * generalizes: Includes all concept ids that have a transitive is-a relationship from the concept Id provided as the value, including the provided concept itself (i.e. include ancestor codes and self).
     */
    GeneralizesBySubsumption: new Coding({
        display: "Generalizes (by Subsumption)",
        code: "generalizes",
        system: "http://hl7.org/fhir/filter-operator",
    }),
    /**
     * in: The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).
     */
    InSet: new Coding({
        display: "In Set",
        code: "in",
        system: "http://hl7.org/fhir/filter-operator",
    }),
    /**
     * is-a: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself (include descendant codes and self).
     */
    IsABySubsumption: new Coding({
        display: "Is A (by subsumption)",
        code: "is-a",
        system: "http://hl7.org/fhir/filter-operator",
    }),
    /**
     * is-not-a: The specified property of the code does not have an is-a relationship with the provided value.
     */
    NotIsABySubsumption: new Coding({
        display: "Not (Is A) (by subsumption)",
        code: "is-not-a",
        system: "http://hl7.org/fhir/filter-operator",
    }),
    /**
     * not-in: The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).
     */
    NotInSet: new Coding({
        display: "Not in Set",
        code: "not-in",
        system: "http://hl7.org/fhir/filter-operator",
    }),
    /**
     * regex: The specified property of the code  matches the regex specified in the provided value.
     */
    RegularExpression: new Coding({
        display: "Regular Expression",
        code: "regex",
        system: "http://hl7.org/fhir/filter-operator",
    }),
};

export { FilterOperatorCodings };
//# sourceMappingURL=FilterOperatorCodings.js.map
