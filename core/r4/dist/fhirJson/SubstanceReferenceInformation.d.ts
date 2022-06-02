import * as fhir from '../fhirJson.js';
/**
 * Todo.
 */
export interface SubstanceReferenceInformationGene extends fhir.BackboneElement {
    /**
     * Todo.
     */
    geneSequenceOrigin?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    gene?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: (fhir.Reference | null)[] | undefined;
}
/**
 * Todo.
 */
export interface SubstanceReferenceInformationGeneElement extends fhir.BackboneElement {
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    element?: fhir.Identifier | undefined;
    /**
     * Todo.
     */
    source?: (fhir.Reference | null)[] | undefined;
}
/**
 * Todo.
 */
export interface SubstanceReferenceInformationClassification extends fhir.BackboneElement {
    /**
     * Todo.
     */
    domain?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    classification?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    subtype?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Todo.
     */
    source?: (fhir.Reference | null)[] | undefined;
}
/**
 * Todo.
 */
export interface SubstanceReferenceInformationTarget extends fhir.BackboneElement {
    /**
     * Todo.
     */
    target?: fhir.Identifier | undefined;
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    interaction?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    organism?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    organismType?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * Todo.
     */
    amountRange?: fhir.Range | undefined;
    /**
     * Todo.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceReferenceInformation.target.amount[x]
     */
    _amountString?: fhir.FhirElement;
    /**
     * Todo.
     */
    amountType?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: (fhir.Reference | null)[] | undefined;
}
/**
 * Todo.
 */
export interface SubstanceReferenceInformation extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceReferenceInformation" | null;
    /**
     * Todo.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceReferenceInformation.comment
     */
    _comment?: fhir.FhirElement;
    /**
     * Todo.
     */
    gene?: (fhir.SubstanceReferenceInformationGene | null)[] | undefined;
    /**
     * Todo.
     */
    geneElement?: (fhir.SubstanceReferenceInformationGeneElement | null)[] | undefined;
    /**
     * Todo.
     */
    classification?: (fhir.SubstanceReferenceInformationClassification | null)[] | undefined;
    /**
     * Todo.
     */
    target?: (fhir.SubstanceReferenceInformationTarget | null)[] | undefined;
}
//# sourceMappingURL=SubstanceReferenceInformation.d.ts.map