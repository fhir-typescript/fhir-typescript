/**
 * The type of relationship to the related artifact.
 */
export declare const RelatedArtifactTypeCodes: {
    /**
     * citation: Bibliographic citation for papers, references, or other relevant material for the knowledge resource. This is intended to allow for citation of related material, but that was not necessarily specifically prepared in connection with this knowledge resource.
     */
    readonly Citation: "citation";
    /**
     * composed-of: The knowledge resource is composed of the given related artifact.
     */
    readonly ComposedOf: "composed-of";
    /**
     * depends-on: The knowledge resource depends on the given related artifact.
     */
    readonly DependsOn: "depends-on";
    /**
     * derived-from: The knowledge resource is derived from the related artifact. This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but is modified to capture either a different set of overall requirements, or a more specific set of requirements such as those involved in a particular institution or clinical setting.
     */
    readonly DerivedFrom: "derived-from";
    /**
     * documentation: Additional documentation for the knowledge resource. This would include additional instructions on usage as well as additional information on clinical context or appropriateness.
     */
    readonly Documentation: "documentation";
    /**
     * justification: A summary of the justification for the knowledge resource including supporting evidence, relevant guidelines, or other clinically important information. This information is intended to provide a way to make the justification for the knowledge resource available to the consumer of interventions or results produced by the knowledge resource.
     */
    readonly Justification: "justification";
    /**
     * predecessor: The previous version of the knowledge resource.
     */
    readonly Predecessor: "predecessor";
    /**
     * successor: The next version of the knowledge resource.
     */
    readonly Successor: "successor";
};
/**
 * The type of relationship to the related artifact.
 */
export declare type RelatedArtifactTypeCodeType = typeof RelatedArtifactTypeCodes[keyof typeof RelatedArtifactTypeCodes];
//# sourceMappingURL=RelatedArtifactTypeCodes.d.ts.map