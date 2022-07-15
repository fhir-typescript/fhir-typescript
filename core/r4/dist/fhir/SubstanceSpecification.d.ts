import * as fhir from '../fhir.js';
/**
 * Valid arguments for the SubstanceSpecificationMoiety type.
 */
export interface SubstanceSpecificationMoietyArgs extends fhir.BackboneElementArgs {
    /**
     * Role that the moiety is playing.
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifier by which this moiety substance is known.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Textual name for this moiety substance.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.moiety.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.CodeableConceptArgs | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.CodeableConceptArgs | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.moiety.molecularFormula
     */
    _molecularFormula?: fhir.FhirElementArgs;
    /**
     * Quantitative value for this moiety.
     */
    amount?: fhir.Quantity | fhir.FhirString | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountString?: fhir.FhirString | string | undefined;
}
/**
 * Moiety, for structural modifications.
 */
export declare class SubstanceSpecificationMoiety extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Role that the moiety is playing.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Identifier by which this moiety substance is known.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Textual name for this moiety substance.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.CodeableConcept | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.CodeableConcept | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: fhir.FhirString | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amount?: (fhir.Quantity | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SubstanceSpecification.moiety.amount[x]
     */
    protected static readonly _fts_amountIsChoice: true;
    /**
     * Default constructor for SubstanceSpecificationMoiety - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceSpecificationMoietyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceSpecificationProperty type.
 */
export interface SubstanceSpecificationPropertyArgs extends fhir.BackboneElementArgs {
    /**
     * A category for this property, e.g. Physical, Chemical, Enzymatic.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * Property type e.g. viscosity, pH, isoelectric point.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
     */
    parameters?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.property.parameters
     */
    _parameters?: fhir.FhirElementArgs;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstance?: fhir.Reference | fhir.CodeableConcept | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceReference?: fhir.ReferenceArgs | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Quantitative value for this property.
     */
    amount?: fhir.Quantity | fhir.FhirString | undefined;
    /**
     * Quantitative value for this property.
     */
    amountQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Quantitative value for this property.
     */
    amountString?: fhir.FhirString | string | undefined;
}
/**
 * General specifications for this substance, including how it is related to other substances.
 */
export declare class SubstanceSpecificationProperty extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A category for this property, e.g. Physical, Chemical, Enzymatic.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Property type e.g. viscosity, pH, isoelectric point.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
     */
    parameters?: fhir.FhirString | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstance?: (fhir.Reference | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SubstanceSpecification.property.definingSubstance[x]
     */
    protected static readonly _fts_definingSubstanceIsChoice: true;
    /**
     * Quantitative value for this property.
     */
    amount?: (fhir.Quantity | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SubstanceSpecification.property.amount[x]
     */
    protected static readonly _fts_amountIsChoice: true;
    /**
     * Default constructor for SubstanceSpecificationProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceSpecificationPropertyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceSpecificationStructureIsotopeMolecularWeight type.
 */
export interface SubstanceSpecificationStructureIsotopeMolecularWeightArgs extends fhir.BackboneElementArgs {
    /**
     * The method by which the molecular weight was determined.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * Type of molecular weight such as exact, average (also known as. number average), weight average.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amount?: fhir.QuantityArgs | undefined;
}
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export declare class SubstanceSpecificationStructureIsotopeMolecularWeight extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The method by which the molecular weight was determined.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Type of molecular weight such as exact, average (also known as. number average), weight average.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureIsotopeMolecularWeight - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceSpecificationStructureIsotopeMolecularWeightArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceSpecificationStructureIsotope type.
 */
export interface SubstanceSpecificationStructureIsotopeArgs extends fhir.BackboneElementArgs {
    /**
     * Substance identifier for each non-natural or radioisotope.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Substance name for each non-natural or radioisotope.
     */
    name?: fhir.CodeableConceptArgs | undefined;
    /**
     * The type of isotopic substitution present in a single substance.
     */
    substitution?: fhir.CodeableConceptArgs | undefined;
    /**
     * Half life - for a non-natural nuclide.
     */
    halfLife?: fhir.QuantityArgs | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeightArgs | undefined;
}
/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
 */
export declare class SubstanceSpecificationStructureIsotope extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Substance identifier for each non-natural or radioisotope.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Substance name for each non-natural or radioisotope.
     */
    name?: fhir.CodeableConcept | undefined;
    /**
     * The type of isotopic substitution present in a single substance.
     */
    substitution?: fhir.CodeableConcept | undefined;
    /**
     * Half life - for a non-natural nuclide.
     */
    halfLife?: fhir.Quantity | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureIsotope - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceSpecificationStructureIsotopeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceSpecificationStructureRepresentation type.
 */
export interface SubstanceSpecificationStructureRepresentationArgs extends fhir.BackboneElementArgs {
    /**
     * The type of structure (e.g. Full, Partial, Representative).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
     */
    representation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.representation.representation
     */
    _representation?: fhir.FhirElementArgs;
    /**
     * An attached file with the structural representation.
     */
    attachment?: fhir.AttachmentArgs | undefined;
}
/**
 * Molecular structural representation.
 */
export declare class SubstanceSpecificationStructureRepresentation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of structure (e.g. Full, Partial, Representative).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
     */
    representation?: fhir.FhirString | undefined;
    /**
     * An attached file with the structural representation.
     */
    attachment?: fhir.Attachment | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureRepresentation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceSpecificationStructureRepresentationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceSpecificationStructure type.
 */
export interface SubstanceSpecificationStructureArgs extends fhir.BackboneElementArgs {
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.CodeableConceptArgs | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.CodeableConceptArgs | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.molecularFormula
     */
    _molecularFormula?: fhir.FhirElementArgs;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.molecularFormulaByMoiety
     */
    _molecularFormulaByMoiety?: fhir.FhirElementArgs;
    /**
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
     */
    isotope?: fhir.SubstanceSpecificationStructureIsotopeArgs[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeightArgs | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.ReferenceArgs[] | undefined;
    /**
     * Molecular structural representation.
     */
    representation?: fhir.SubstanceSpecificationStructureRepresentationArgs[] | undefined;
}
/**
 * Structural information.
 */
export declare class SubstanceSpecificationStructure extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.CodeableConcept | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.CodeableConcept | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: fhir.FhirString | undefined;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: fhir.FhirString | undefined;
    /**
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
     */
    isotope: fhir.SubstanceSpecificationStructureIsotope[];
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Supporting literature.
     */
    source: fhir.Reference[];
    /**
     * Molecular structural representation.
     */
    representation: fhir.SubstanceSpecificationStructureRepresentation[];
    /**
     * Default constructor for SubstanceSpecificationStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceSpecificationStructureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceSpecificationCode type.
 */
export interface SubstanceSpecificationCodeArgs extends fhir.BackboneElementArgs {
    /**
     * The specific code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Status of the code assignment.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * The date at which the code status is changed as part of the terminology maintenance.
     */
    statusDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.code.statusDate
     */
    _statusDate?: fhir.FhirElementArgs;
    /**
     * Any comment can be provided in this field, if necessary.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.code.comment
     */
    _comment?: fhir.FhirElementArgs;
    /**
     * Supporting literature.
     */
    source?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Codes associated with the substance.
 */
export declare class SubstanceSpecificationCode extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The specific code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Status of the code assignment.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the code status is changed as part of the terminology maintenance.
     */
    statusDate?: fhir.FhirDateTime | undefined;
    /**
     * Any comment can be provided in this field, if necessary.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Supporting literature.
     */
    source: fhir.Reference[];
    /**
     * Default constructor for SubstanceSpecificationCode - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceSpecificationCodeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceSpecificationNameOfficial type.
 */
export interface SubstanceSpecificationNameOfficialArgs extends fhir.BackboneElementArgs {
    /**
     * Which authority uses this official name.
     */
    authority?: fhir.CodeableConceptArgs | undefined;
    /**
     * The status of the official name.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * Date of official name change.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.official.date
     */
    _date?: fhir.FhirElementArgs;
}
/**
 * Details of the official nature of this name.
 */
export declare class SubstanceSpecificationNameOfficial extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Which authority uses this official name.
     */
    authority?: fhir.CodeableConcept | undefined;
    /**
     * The status of the official name.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Date of official name change.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for SubstanceSpecificationNameOfficial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceSpecificationNameOfficialArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceSpecificationName type.
 */
export interface SubstanceSpecificationNameArgs extends fhir.BackboneElementArgs {
    /**
     * The actual name.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Name type.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The status of the name.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.preferred
     */
    _preferred?: fhir.FhirElementArgs;
    /**
     * Language of the name.
     */
    language?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
     */
    domain?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The jurisdiction where this name applies.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A synonym of this name.
     */
    synonym?: fhir.SubstanceSpecificationNameArgs[] | undefined;
    /**
     * A translation for this name.
     */
    translation?: fhir.SubstanceSpecificationNameArgs[] | undefined;
    /**
     * Details of the official nature of this name.
     */
    official?: fhir.SubstanceSpecificationNameOfficialArgs[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Names applicable to this substance.
 */
export declare class SubstanceSpecificationName extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The actual name.
     */
    name: fhir.FhirString | null;
    /**
     * Name type.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The status of the name.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: fhir.FhirBoolean | undefined;
    /**
     * Language of the name.
     */
    language: fhir.CodeableConcept[];
    /**
     * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
     */
    domain: fhir.CodeableConcept[];
    /**
     * The jurisdiction where this name applies.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * A synonym of this name.
     */
    synonym: fhir.SubstanceSpecificationName[];
    /**
     * A translation for this name.
     */
    translation: fhir.SubstanceSpecificationName[];
    /**
     * Details of the official nature of this name.
     */
    official: fhir.SubstanceSpecificationNameOfficial[];
    /**
     * Supporting literature.
     */
    source: fhir.Reference[];
    /**
     * Default constructor for SubstanceSpecificationName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceSpecificationNameArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceSpecificationRelationship type.
 */
export interface SubstanceSpecificationRelationshipArgs extends fhir.BackboneElementArgs {
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substance?: fhir.Reference | fhir.CodeableConcept | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceReference?: fhir.ReferenceArgs | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example "salt to parent", "active moiety", "starting material".
     */
    relationship?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.relationship.isDefining
     */
    _isDefining?: fhir.FhirElementArgs;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amount?: fhir.Quantity | fhir.Range | fhir.Ratio | fhir.FhirString | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountQuantity?: fhir.QuantityArgs | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRange?: fhir.RangeArgs | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRatio?: fhir.RatioArgs | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountString?: fhir.FhirString | string | undefined;
    /**
     * For use when the numeric.
     */
    amountRatioLowLimit?: fhir.RatioArgs | undefined;
    /**
     * An operator for the amount, for example "average", "approximately", "less than".
     */
    amountType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.ReferenceArgs[] | undefined;
}
/**
 * A link between this substance and another, with details of the relationship.
 */
export declare class SubstanceSpecificationRelationship extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substance?: (fhir.Reference | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SubstanceSpecification.relationship.substance[x]
     */
    protected static readonly _fts_substanceIsChoice: true;
    /**
     * For example "salt to parent", "active moiety", "starting material".
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: fhir.FhirBoolean | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amount?: (fhir.Quantity | fhir.Range | fhir.Ratio | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SubstanceSpecification.relationship.amount[x]
     */
    protected static readonly _fts_amountIsChoice: true;
    /**
     * For use when the numeric.
     */
    amountRatioLowLimit?: fhir.Ratio | undefined;
    /**
     * An operator for the amount, for example "average", "approximately", "less than".
     */
    amountType?: fhir.CodeableConcept | undefined;
    /**
     * Supporting literature.
     */
    source: fhir.Reference[];
    /**
     * Default constructor for SubstanceSpecificationRelationship - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceSpecificationRelationshipArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceSpecification type.
 */
export interface SubstanceSpecificationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceSpecification" | undefined;
    /**
     * Identifier by which this substance is known.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * High level categorization, e.g. polymer or nucleic acid.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Status of substance within the catalogue e.g. approved.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * If the substance applies to only human or veterinary use.
     */
    domain?: fhir.CodeableConceptArgs | undefined;
    /**
     * Textual description of the substance.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Supporting literature.
     */
    source?: fhir.ReferenceArgs[] | undefined;
    /**
     * Textual comment about this record of a substance.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.comment
     */
    _comment?: fhir.FhirElementArgs;
    /**
     * Moiety, for structural modifications.
     */
    moiety?: fhir.SubstanceSpecificationMoietyArgs[] | undefined;
    /**
     * General specifications for this substance, including how it is related to other substances.
     */
    property?: fhir.SubstanceSpecificationPropertyArgs[] | undefined;
    /**
     * General information detailing this substance.
     */
    referenceInformation?: fhir.ReferenceArgs | undefined;
    /**
     * Structural information.
     */
    structure?: fhir.SubstanceSpecificationStructureArgs | undefined;
    /**
     * Codes associated with the substance.
     */
    code?: fhir.SubstanceSpecificationCodeArgs[] | undefined;
    /**
     * Names applicable to this substance.
     */
    name?: fhir.SubstanceSpecificationNameArgs[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeightArgs[] | undefined;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: fhir.SubstanceSpecificationRelationshipArgs[] | undefined;
    /**
     * Data items specific to nucleic acids.
     */
    nucleicAcid?: fhir.ReferenceArgs | undefined;
    /**
     * Data items specific to polymers.
     */
    polymer?: fhir.ReferenceArgs | undefined;
    /**
     * Data items specific to proteins.
     */
    protein?: fhir.ReferenceArgs | undefined;
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: fhir.ReferenceArgs | undefined;
}
/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export declare class SubstanceSpecification extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceSpecification";
    /**
     * Identifier by which this substance is known.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * High level categorization, e.g. polymer or nucleic acid.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Status of substance within the catalogue e.g. approved.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * If the substance applies to only human or veterinary use.
     */
    domain?: fhir.CodeableConcept | undefined;
    /**
     * Textual description of the substance.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Supporting literature.
     */
    source: fhir.Reference[];
    /**
     * Textual comment about this record of a substance.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Moiety, for structural modifications.
     */
    moiety: fhir.SubstanceSpecificationMoiety[];
    /**
     * General specifications for this substance, including how it is related to other substances.
     */
    property: fhir.SubstanceSpecificationProperty[];
    /**
     * General information detailing this substance.
     */
    referenceInformation?: fhir.Reference | undefined;
    /**
     * Structural information.
     */
    structure?: fhir.SubstanceSpecificationStructure | undefined;
    /**
     * Codes associated with the substance.
     */
    code: fhir.SubstanceSpecificationCode[];
    /**
     * Names applicable to this substance.
     */
    name: fhir.SubstanceSpecificationName[];
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight: fhir.SubstanceSpecificationStructureIsotopeMolecularWeight[];
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship: fhir.SubstanceSpecificationRelationship[];
    /**
     * Data items specific to nucleic acids.
     */
    nucleicAcid?: fhir.Reference | undefined;
    /**
     * Data items specific to polymers.
     */
    polymer?: fhir.Reference | undefined;
    /**
     * Data items specific to proteins.
     */
    protein?: fhir.Reference | undefined;
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: fhir.Reference | undefined;
    /**
     * Default constructor for SubstanceSpecification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceSpecificationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=SubstanceSpecification.d.ts.map