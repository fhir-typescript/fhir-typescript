/**
 * Structure Definition Use Codes / Keywords
 */
export declare const DefinitionUseCodes: {
    /**
     * archetype: This structure captures an analysis of a domain
     */
    readonly DomainAnalysisModel: "archetype";
    /**
     * custom-resource: This structure is intended to be treated like a FHIR resource (e.g. on the FHIR API)
     */
    readonly CustomResource: "custom-resource";
    /**
     * dam: This structure captures an analysis of a domain
     */
    readonly DomainAnalysisModelDam: "dam";
    /**
     * fhir-structure: This structure is defined as part of the base FHIR Specification
     */
    readonly FHIRStructure: "fhir-structure";
    /**
     * template: This structure is a template (n.b: 'template' has many meanings)
     */
    readonly Template: "template";
    /**
     * wire-format: This structure represents and existing structure (e.g. CDA, HL7 v2)
     */
    readonly WireFormat: "wire-format";
};
/**
 * Structure Definition Use Codes / Keywords
 */
export declare type DefinitionUseCodeType = typeof DefinitionUseCodes[keyof typeof DefinitionUseCodes];
//# sourceMappingURL=DefinitionUseCodes.d.ts.map