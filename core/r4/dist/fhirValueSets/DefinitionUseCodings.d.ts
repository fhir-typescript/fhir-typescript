import { CodingArgs } from '../fhir/Coding.js';
/**
 * Structure Definition Use Codes / Keywords
 */
export declare type DefinitionUseCodingType = {
    /**
     * archetype: This structure captures an analysis of a domain
     */
    DomainAnalysisModel: CodingArgs;
    /**
     * custom-resource: This structure is intended to be treated like a FHIR resource (e.g. on the FHIR API)
     */
    CustomResource: CodingArgs;
    /**
     * dam: This structure captures an analysis of a domain
     */
    DomainAnalysisModelDam: CodingArgs;
    /**
     * fhir-structure: This structure is defined as part of the base FHIR Specification
     */
    FHIRStructure: CodingArgs;
    /**
     * template: This structure is a template (n.b: 'template' has many meanings)
     */
    Template: CodingArgs;
    /**
     * wire-format: This structure represents and existing structure (e.g. CDA, HL7 v2)
     */
    WireFormat: CodingArgs;
};
/**
 * Structure Definition Use Codes / Keywords
 */
export declare const DefinitionUseCodings: DefinitionUseCodingType;
//# sourceMappingURL=DefinitionUseCodings.d.ts.map