/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.
 */
var ContractContentDerivativeCodings = {
    /**
     * registration: Content derivative that conveys sufficient information needed to register the source basal content from which it is derived.  This derivative content may be used to register the basal content as it changes status in its lifecycle.  For example, content registration may occur when the basal content is created, updated, inactive, or deleted.
     */
    ContentRegistration: new Coding({
        display: "Content Registration",
        code: "registration",
        system: "http://terminology.hl7.org/CodeSystem/contract-content-derivative",
    }),
    /**
     * retrieval: A content derivative that conveys sufficient information to locate and retrieve the content.
     */
    ContentRetrieval: new Coding({
        display: "Content Retrieval",
        code: "retrieval",
        system: "http://terminology.hl7.org/CodeSystem/contract-content-derivative",
    }),
    /**
     * shareable: A Content Derivative that conveys sufficient information to determine the authorized entities with which the content may be shared.
     */
    ShareableContent: new Coding({
        display: "Shareable Content",
        code: "shareable",
        system: "http://terminology.hl7.org/CodeSystem/contract-content-derivative",
    }),
    /**
     * statement: Content derivative that has less than full fidelity to the basal information source from which it was 'transcribed'. It provides recipients with the full content representation they may require for compliance purposes, and typically include a reference to or an attached unstructured representation for recipients needing an exact copy of the legal agreement.
     */
    ContentStatement: new Coding({
        display: "Content Statement",
        code: "statement",
        system: "http://terminology.hl7.org/CodeSystem/contract-content-derivative",
    }),
};

export { ContractContentDerivativeCodings };
//# sourceMappingURL=ContractContentDerivativeCodings.js.map
