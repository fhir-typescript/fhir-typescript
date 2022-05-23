import * as fhir from '../fhir.js';
/**
 * Valid arguments for the SubstancePolymerMonomerSetStartingMaterial type.
 */
export interface SubstancePolymerMonomerSetStartingMaterialArgs extends fhir.BackboneElementArgs {
    /**
     * Todo.
     */
    material?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    isDefining?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Todo.
     */
    amount?: fhir.SubstanceAmountArgs | undefined;
}
/**
 * Todo.
 */
export declare class SubstancePolymerMonomerSetStartingMaterial extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Todo.
     */
    material?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    isDefining?: fhir.FhirBoolean | undefined;
    /**
     * Todo.
     */
    amount?: fhir.SubstanceAmount | undefined;
    /**
     * Default constructor for SubstancePolymerMonomerSetStartingMaterial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstancePolymerMonomerSetStartingMaterialArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstancePolymerMonomerSet type.
 */
export interface SubstancePolymerMonomerSetArgs extends fhir.BackboneElementArgs {
    /**
     * Todo.
     */
    ratioType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    startingMaterial?: fhir.SubstancePolymerMonomerSetStartingMaterialArgs[] | undefined;
}
/**
 * Todo.
 */
export declare class SubstancePolymerMonomerSet extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Todo.
     */
    ratioType?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    startingMaterial: fhir.SubstancePolymerMonomerSetStartingMaterial[];
    /**
     * Default constructor for SubstancePolymerMonomerSet - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstancePolymerMonomerSetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation type.
 */
export interface SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationArgs extends fhir.BackboneElementArgs {
    /**
     * Todo.
     */
    degree?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    amount?: fhir.SubstanceAmountArgs | undefined;
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Todo.
     */
    degree?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    amount?: fhir.SubstanceAmount | undefined;
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstancePolymerRepeatRepeatUnitStructuralRepresentation type.
 */
export interface SubstancePolymerRepeatRepeatUnitStructuralRepresentationArgs extends fhir.BackboneElementArgs {
    /**
     * Todo.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    representation?: fhir.FhirString | string | undefined;
    /**
     * Todo.
     */
    attachment?: fhir.AttachmentArgs | undefined;
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    representation?: fhir.FhirString | undefined;
    /**
     * Todo.
     */
    attachment?: fhir.Attachment | undefined;
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnitStructuralRepresentation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstancePolymerRepeatRepeatUnitStructuralRepresentationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstancePolymerRepeatRepeatUnit type.
 */
export interface SubstancePolymerRepeatRepeatUnitArgs extends fhir.BackboneElementArgs {
    /**
     * Todo.
     */
    orientationOfPolymerisation?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    repeatUnit?: fhir.FhirString | string | undefined;
    /**
     * Todo.
     */
    amount?: fhir.SubstanceAmountArgs | undefined;
    /**
     * Todo.
     */
    degreeOfPolymerisation?: fhir.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationArgs[] | undefined;
    /**
     * Todo.
     */
    structuralRepresentation?: fhir.SubstancePolymerRepeatRepeatUnitStructuralRepresentationArgs[] | undefined;
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnit extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Todo.
     */
    orientationOfPolymerisation?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    repeatUnit?: fhir.FhirString | undefined;
    /**
     * Todo.
     */
    amount?: fhir.SubstanceAmount | undefined;
    /**
     * Todo.
     */
    degreeOfPolymerisation: fhir.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];
    /**
     * Todo.
     */
    structuralRepresentation: fhir.SubstancePolymerRepeatRepeatUnitStructuralRepresentation[];
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstancePolymerRepeatRepeatUnitArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstancePolymerRepeat type.
 */
export interface SubstancePolymerRepeatArgs extends fhir.BackboneElementArgs {
    /**
     * Todo.
     */
    numberOfUnits?: fhir.FhirInteger | number | undefined;
    /**
     * Todo.
     */
    averageMolecularFormula?: fhir.FhirString | string | undefined;
    /**
     * Todo.
     */
    repeatUnitAmountType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    repeatUnit?: fhir.SubstancePolymerRepeatRepeatUnitArgs[] | undefined;
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeat extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Todo.
     */
    numberOfUnits?: fhir.FhirInteger | undefined;
    /**
     * Todo.
     */
    averageMolecularFormula?: fhir.FhirString | undefined;
    /**
     * Todo.
     */
    repeatUnitAmountType?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    repeatUnit: fhir.SubstancePolymerRepeatRepeatUnit[];
    /**
     * Default constructor for SubstancePolymerRepeat - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstancePolymerRepeatArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstancePolymer type.
 */
export interface SubstancePolymerArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SubstancePolymer" | undefined;
    /**
     * Todo.
     */
    class?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    geometry?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    copolymerConnectivity?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Todo.
     */
    modification?: fhir.FhirString[] | string[] | undefined;
    /**
     * Todo.
     */
    monomerSet?: fhir.SubstancePolymerMonomerSetArgs[] | undefined;
    /**
     * Todo.
     */
    repeat?: fhir.SubstancePolymerRepeatArgs[] | undefined;
}
/**
 * Todo.
 */
export declare class SubstancePolymer extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SubstancePolymer";
    /**
     * Todo.
     */
    class?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    geometry?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    copolymerConnectivity: fhir.CodeableConcept[];
    /**
     * Todo.
     */
    modification: fhir.FhirString[];
    /**
     * Todo.
     */
    monomerSet: fhir.SubstancePolymerMonomerSet[];
    /**
     * Todo.
     */
    repeat: fhir.SubstancePolymerRepeat[];
    /**
     * Default constructor for SubstancePolymer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstancePolymerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=SubstancePolymer.d.ts.map