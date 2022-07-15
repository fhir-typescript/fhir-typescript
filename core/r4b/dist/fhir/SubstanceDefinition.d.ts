import * as fhir from '../fhir.js';
/**
 * Valid arguments for the SubstanceDefinitionMoiety type.
 */
export interface SubstanceDefinitionMoietyArgs extends fhir.BackboneElementArgs {
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
     * Extended properties for primitive element: SubstanceDefinition.moiety.name
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
     * Molecular formula for this moiety of this substance, typically using the Hill system.
     */
    molecularFormula?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.moiety.molecularFormula
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
    /**
     * The measurement type of the quantitative value. In capturing the actual relative amounts of substances or molecular fragments it may be necessary to indicate whether the amount refers to, for example, a mole ratio or weight ratio.
     */
    measurementType?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Moiety, for structural modifications.
 */
export declare class SubstanceDefinitionMoiety extends fhir.BackboneElement {
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
     * Molecular formula for this moiety of this substance, typically using the Hill system.
     */
    molecularFormula?: fhir.FhirString | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amount?: (fhir.Quantity | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SubstanceDefinition.moiety.amount[x]
     */
    protected static readonly _fts_amountIsChoice: true;
    /**
     * The measurement type of the quantitative value. In capturing the actual relative amounts of substances or molecular fragments it may be necessary to indicate whether the amount refers to, for example, a mole ratio or weight ratio.
     */
    measurementType?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceDefinitionMoiety - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceDefinitionMoietyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceDefinitionProperty type.
 */
export interface SubstanceDefinitionPropertyArgs extends fhir.BackboneElementArgs {
    /**
     * A code expressing the type of property.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * A value for the property.
     */
    value?: fhir.CodeableConcept | fhir.Quantity | fhir.FhirDate | fhir.FhirBoolean | fhir.Attachment | undefined;
    /**
     * A value for the property.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A value for the property.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * A value for the property.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * A value for the property.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * A value for the property.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
}
/**
 * General specifications for this substance.
 */
export declare class SubstanceDefinitionProperty extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code expressing the type of property.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A value for the property.
     */
    value?: (fhir.CodeableConcept | fhir.Quantity | fhir.FhirDate | fhir.FhirBoolean | fhir.Attachment) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SubstanceDefinition.property.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for SubstanceDefinitionProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceDefinitionPropertyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceDefinitionMolecularWeight type.
 */
export interface SubstanceDefinitionMolecularWeightArgs extends fhir.BackboneElementArgs {
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
    amount: fhir.QuantityArgs | null;
}
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export declare class SubstanceDefinitionMolecularWeight extends fhir.BackboneElement {
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
    amount: fhir.Quantity | null;
    /**
     * Default constructor for SubstanceDefinitionMolecularWeight - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceDefinitionMolecularWeightArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceDefinitionStructureRepresentation type.
 */
export interface SubstanceDefinitionStructureRepresentationArgs extends fhir.BackboneElementArgs {
    /**
     * The kind of structural representation (e.g. full, partial).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The structural representation or characterization as a text string in a standard format.
     */
    representation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.structure.representation.representation
     */
    _representation?: fhir.FhirElementArgs;
    /**
     * The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF. The logical content type rather than the physical file format of a document.
     */
    format?: fhir.CodeableConceptArgs | undefined;
    /**
     * An attached file with the structural representation or characterization e.g. a molecular structure graphic of the substance, a JCAMP or AnIML file.
     */
    document?: fhir.ReferenceArgs | undefined;
}
/**
 * A depiction of the structure or characterization of the substance.
 */
export declare class SubstanceDefinitionStructureRepresentation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The kind of structural representation (e.g. full, partial).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The structural representation or characterization as a text string in a standard format.
     */
    representation?: fhir.FhirString | undefined;
    /**
     * The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF. The logical content type rather than the physical file format of a document.
     */
    format?: fhir.CodeableConcept | undefined;
    /**
     * An attached file with the structural representation or characterization e.g. a molecular structure graphic of the substance, a JCAMP or AnIML file.
     */
    document?: fhir.Reference | undefined;
    /**
     * Default constructor for SubstanceDefinitionStructureRepresentation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceDefinitionStructureRepresentationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceDefinitionStructure type.
 */
export interface SubstanceDefinitionStructureArgs extends fhir.BackboneElementArgs {
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.CodeableConceptArgs | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.CodeableConceptArgs | undefined;
    /**
     * Molecular formula of this substance, typically using the Hill system.
     */
    molecularFormula?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.structure.molecularFormula
     */
    _molecularFormula?: fhir.FhirElementArgs;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.structure.molecularFormulaByMoiety
     */
    _molecularFormulaByMoiety?: fhir.FhirElementArgs;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceDefinitionMolecularWeightArgs | undefined;
    /**
     * The method used to elucidate the structure or characterization of the drug substance. Examples: X-ray, HPLC, NMR, Peptide mapping, Ligand binding assay.
     */
    technique?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The source of information about the structure.
     */
    sourceDocument?: fhir.ReferenceArgs[] | undefined;
    /**
     * A depiction of the structure or characterization of the substance.
     */
    representation?: fhir.SubstanceDefinitionStructureRepresentationArgs[] | undefined;
}
/**
 * Structural information.
 */
export declare class SubstanceDefinitionStructure extends fhir.BackboneElement {
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
     * Molecular formula of this substance, typically using the Hill system.
     */
    molecularFormula?: fhir.FhirString | undefined;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: fhir.FhirString | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceDefinitionMolecularWeight | undefined;
    /**
     * The method used to elucidate the structure or characterization of the drug substance. Examples: X-ray, HPLC, NMR, Peptide mapping, Ligand binding assay.
     */
    technique: fhir.CodeableConcept[];
    /**
     * The source of information about the structure.
     */
    sourceDocument: fhir.Reference[];
    /**
     * A depiction of the structure or characterization of the substance.
     */
    representation: fhir.SubstanceDefinitionStructureRepresentation[];
    /**
     * Default constructor for SubstanceDefinitionStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceDefinitionStructureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceDefinitionCode type.
 */
export interface SubstanceDefinitionCodeArgs extends fhir.BackboneElementArgs {
    /**
     * The specific code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Status of the code assignment, for example 'provisional', 'approved'.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * The date at which the code status was changed as part of the terminology maintenance.
     */
    statusDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.code.statusDate
     */
    _statusDate?: fhir.FhirElementArgs;
    /**
     * Any comment can be provided in this field, if necessary.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Codes associated with the substance.
 */
export declare class SubstanceDefinitionCode extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The specific code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Status of the code assignment, for example 'provisional', 'approved'.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the code status was changed as part of the terminology maintenance.
     */
    statusDate?: fhir.FhirDateTime | undefined;
    /**
     * Any comment can be provided in this field, if necessary.
     */
    note: fhir.Annotation[];
    /**
     * Supporting literature.
     */
    source: fhir.Reference[];
    /**
     * Default constructor for SubstanceDefinitionCode - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceDefinitionCodeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceDefinitionNameOfficial type.
 */
export interface SubstanceDefinitionNameOfficialArgs extends fhir.BackboneElementArgs {
    /**
     * Which authority uses this official name.
     */
    authority?: fhir.CodeableConceptArgs | undefined;
    /**
     * The status of the official name, for example 'draft', 'active', 'retired'.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * Date of the official name change.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.name.official.date
     */
    _date?: fhir.FhirElementArgs;
}
/**
 * Details of the official nature of this name.
 */
export declare class SubstanceDefinitionNameOfficial extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Which authority uses this official name.
     */
    authority?: fhir.CodeableConcept | undefined;
    /**
     * The status of the official name, for example 'draft', 'active', 'retired'.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Date of the official name change.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for SubstanceDefinitionNameOfficial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceDefinitionNameOfficialArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceDefinitionName type.
 */
export interface SubstanceDefinitionNameArgs extends fhir.BackboneElementArgs {
    /**
     * The actual name.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.name.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Name type, for example 'systematic',  'scientific, 'brand'.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The status of the name, for example 'current', 'proposed'.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.name.preferred
     */
    _preferred?: fhir.FhirElementArgs;
    /**
     * Human language that the name is written in.
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
     * A synonym of this particular name, by which the substance is also known.
     */
    synonym?: fhir.SubstanceDefinitionNameArgs[] | undefined;
    /**
     * A translation for this name into another human language.
     */
    translation?: fhir.SubstanceDefinitionNameArgs[] | undefined;
    /**
     * Details of the official nature of this name.
     */
    official?: fhir.SubstanceDefinitionNameOfficialArgs[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Names applicable to this substance.
 */
export declare class SubstanceDefinitionName extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The actual name.
     */
    name: fhir.FhirString | null;
    /**
     * Name type, for example 'systematic',  'scientific, 'brand'.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The status of the name, for example 'current', 'proposed'.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: fhir.FhirBoolean | undefined;
    /**
     * Human language that the name is written in.
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
     * A synonym of this particular name, by which the substance is also known.
     */
    synonym: fhir.SubstanceDefinitionName[];
    /**
     * A translation for this name into another human language.
     */
    translation: fhir.SubstanceDefinitionName[];
    /**
     * Details of the official nature of this name.
     */
    official: fhir.SubstanceDefinitionNameOfficial[];
    /**
     * Supporting literature.
     */
    source: fhir.Reference[];
    /**
     * Default constructor for SubstanceDefinitionName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceDefinitionNameArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceDefinitionRelationship type.
 */
export interface SubstanceDefinitionRelationshipArgs extends fhir.BackboneElementArgs {
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceDefinition?: fhir.Reference | fhir.CodeableConcept | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceDefinitionReference?: fhir.ReferenceArgs | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceDefinitionCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example "salt to parent", "active moiety", "starting material", "polymorph", "impurity of".
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.relationship.isDefining
     */
    _isDefining?: fhir.FhirElementArgs;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amount?: fhir.Quantity | fhir.Ratio | fhir.FhirString | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountQuantity?: fhir.QuantityArgs | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRatio?: fhir.RatioArgs | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountString?: fhir.FhirString | string | undefined;
    /**
     * For use when the numeric has an uncertain range.
     */
    ratioHighLimitAmount?: fhir.RatioArgs | undefined;
    /**
     * An operator for the amount, for example "average", "approximately", "less than".
     */
    comparator?: fhir.CodeableConceptArgs | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.ReferenceArgs[] | undefined;
}
/**
 * A link between this substance and another, with details of the relationship.
 */
export declare class SubstanceDefinitionRelationship extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceDefinition?: (fhir.Reference | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SubstanceDefinition.relationship.substanceDefinition[x]
     */
    protected static readonly _fts_substanceDefinitionIsChoice: true;
    /**
     * For example "salt to parent", "active moiety", "starting material", "polymorph", "impurity of".
     */
    type: fhir.CodeableConcept | null;
    /**
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: fhir.FhirBoolean | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amount?: (fhir.Quantity | fhir.Ratio | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SubstanceDefinition.relationship.amount[x]
     */
    protected static readonly _fts_amountIsChoice: true;
    /**
     * For use when the numeric has an uncertain range.
     */
    ratioHighLimitAmount?: fhir.Ratio | undefined;
    /**
     * An operator for the amount, for example "average", "approximately", "less than".
     */
    comparator?: fhir.CodeableConcept | undefined;
    /**
     * Supporting literature.
     */
    source: fhir.Reference[];
    /**
     * Default constructor for SubstanceDefinitionRelationship - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceDefinitionRelationshipArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceDefinitionSourceMaterial type.
 */
export interface SubstanceDefinitionSourceMaterialArgs extends fhir.BackboneElementArgs {
    /**
     * A classification that provides the origin of the raw material. Example: cat hair would be an Animal source type.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The genus of an organism, typically referring to the Latin epithet of the genus element of the plant/animal scientific name.
     */
    genus?: fhir.CodeableConceptArgs | undefined;
    /**
     * The species of an organism, typically referring to the Latin epithet of the species of the plant/animal.
     */
    species?: fhir.CodeableConceptArgs | undefined;
    /**
     * An anatomical origin of the source material within an organism.
     */
    part?: fhir.CodeableConceptArgs | undefined;
    /**
     * The country or countries where the material is harvested.
     */
    countryOfOrigin?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Material or taxonomic/anatomical source for the substance.
 */
export declare class SubstanceDefinitionSourceMaterial extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A classification that provides the origin of the raw material. Example: cat hair would be an Animal source type.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The genus of an organism, typically referring to the Latin epithet of the genus element of the plant/animal scientific name.
     */
    genus?: fhir.CodeableConcept | undefined;
    /**
     * The species of an organism, typically referring to the Latin epithet of the species of the plant/animal.
     */
    species?: fhir.CodeableConcept | undefined;
    /**
     * An anatomical origin of the source material within an organism.
     */
    part?: fhir.CodeableConcept | undefined;
    /**
     * The country or countries where the material is harvested.
     */
    countryOfOrigin: fhir.CodeableConcept[];
    /**
     * Default constructor for SubstanceDefinitionSourceMaterial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceDefinitionSourceMaterialArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceDefinition type.
 */
export interface SubstanceDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceDefinition" | undefined;
    /**
     * Identifier by which this substance is known.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A business level version identifier of the substance.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * Status of substance within the catalogue e.g. active, retired.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * A high level categorization, e.g. polymer or nucleic acid, or food, chemical, biological, or a lower level such as the general types of polymer (linear or branch chain) or type of impurity (process related or contaminant).
     */
    classification?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If the substance applies to human or veterinary use.
     */
    domain?: fhir.CodeableConceptArgs | undefined;
    /**
     * The quality standard, established benchmark, to which substance complies (e.g. USP/NF, Ph. Eur, JP, BP, Company Standard).
     */
    grade?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Textual description of the substance.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Supporting literature.
     */
    informationSource?: fhir.ReferenceArgs[] | undefined;
    /**
     * Textual comment about the substance's catalogue or registry record.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * The entity that creates, makes, produces or fabricates the substance. This is a set of potential manufacturers but is not necessarily comprehensive.
     */
    manufacturer?: fhir.ReferenceArgs[] | undefined;
    /**
     * An entity that is the source for the substance. It may be different from the manufacturer. Supplier is synonymous to a distributor.
     */
    supplier?: fhir.ReferenceArgs[] | undefined;
    /**
     * Moiety, for structural modifications.
     */
    moiety?: fhir.SubstanceDefinitionMoietyArgs[] | undefined;
    /**
     * General specifications for this substance.
     */
    property?: fhir.SubstanceDefinitionPropertyArgs[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceDefinitionMolecularWeightArgs[] | undefined;
    /**
     * Structural information.
     */
    structure?: fhir.SubstanceDefinitionStructureArgs | undefined;
    /**
     * Codes associated with the substance.
     */
    code?: fhir.SubstanceDefinitionCodeArgs[] | undefined;
    /**
     * Names applicable to this substance.
     */
    name?: fhir.SubstanceDefinitionNameArgs[] | undefined;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: fhir.SubstanceDefinitionRelationshipArgs[] | undefined;
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: fhir.SubstanceDefinitionSourceMaterialArgs | undefined;
}
/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export declare class SubstanceDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceDefinition";
    /**
     * Identifier by which this substance is known.
     */
    identifier: fhir.Identifier[];
    /**
     * A business level version identifier of the substance.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Status of substance within the catalogue e.g. active, retired.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * A high level categorization, e.g. polymer or nucleic acid, or food, chemical, biological, or a lower level such as the general types of polymer (linear or branch chain) or type of impurity (process related or contaminant).
     */
    classification: fhir.CodeableConcept[];
    /**
     * If the substance applies to human or veterinary use.
     */
    domain?: fhir.CodeableConcept | undefined;
    /**
     * The quality standard, established benchmark, to which substance complies (e.g. USP/NF, Ph. Eur, JP, BP, Company Standard).
     */
    grade: fhir.CodeableConcept[];
    /**
     * Textual description of the substance.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * Supporting literature.
     */
    informationSource: fhir.Reference[];
    /**
     * Textual comment about the substance's catalogue or registry record.
     */
    note: fhir.Annotation[];
    /**
     * The entity that creates, makes, produces or fabricates the substance. This is a set of potential manufacturers but is not necessarily comprehensive.
     */
    manufacturer: fhir.Reference[];
    /**
     * An entity that is the source for the substance. It may be different from the manufacturer. Supplier is synonymous to a distributor.
     */
    supplier: fhir.Reference[];
    /**
     * Moiety, for structural modifications.
     */
    moiety: fhir.SubstanceDefinitionMoiety[];
    /**
     * General specifications for this substance.
     */
    property: fhir.SubstanceDefinitionProperty[];
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight: fhir.SubstanceDefinitionMolecularWeight[];
    /**
     * Structural information.
     */
    structure?: fhir.SubstanceDefinitionStructure | undefined;
    /**
     * Codes associated with the substance.
     */
    code: fhir.SubstanceDefinitionCode[];
    /**
     * Names applicable to this substance.
     */
    name: fhir.SubstanceDefinitionName[];
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship: fhir.SubstanceDefinitionRelationship[];
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: fhir.SubstanceDefinitionSourceMaterial | undefined;
    /**
     * Default constructor for SubstanceDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=SubstanceDefinition.d.ts.map