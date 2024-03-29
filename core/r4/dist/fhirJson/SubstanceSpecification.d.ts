import * as fhir from '../fhirJson.js';
/**
 * Moiety, for structural modifications.
 */
export interface SubstanceSpecificationMoiety extends fhir.BackboneElement {
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
    name?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.moiety.name
     */
    _name?: fhir.FhirElement;
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
    molecularFormula?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.moiety.molecularFormula
     */
    _molecularFormula?: fhir.FhirElement;
    /**
     * Quantitative value for this moiety.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.moiety.amount[x]
     */
    _amountString?: fhir.FhirElement;
}
/**
 * General specifications for this substance, including how it is related to other substances.
 */
export interface SubstanceSpecificationProperty extends fhir.BackboneElement {
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
    parameters?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.property.parameters
     */
    _parameters?: fhir.FhirElement;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceReference?: fhir.Reference | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Quantitative value for this property.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * Quantitative value for this property.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.property.amount[x]
     */
    _amountString?: fhir.FhirElement;
}
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export interface SubstanceSpecificationStructureIsotopeMolecularWeight extends fhir.BackboneElement {
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
}
/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
 */
export interface SubstanceSpecificationStructureIsotope extends fhir.BackboneElement {
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
}
/**
 * Molecular structural representation.
 */
export interface SubstanceSpecificationStructureRepresentation extends fhir.BackboneElement {
    /**
     * The type of structure (e.g. Full, Partial, Representative).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
     */
    representation?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.representation.representation
     */
    _representation?: fhir.FhirElement;
    /**
     * An attached file with the structural representation.
     */
    attachment?: fhir.Attachment | undefined;
}
/**
 * Structural information.
 */
export interface SubstanceSpecificationStructure extends fhir.BackboneElement {
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
    molecularFormula?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.molecularFormula
     */
    _molecularFormula?: fhir.FhirElement;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.molecularFormulaByMoiety
     */
    _molecularFormulaByMoiety?: fhir.FhirElement;
    /**
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
     */
    isotope?: (fhir.SubstanceSpecificationStructureIsotope | null)[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Supporting literature.
     */
    source?: (fhir.Reference | null)[] | undefined;
    /**
     * Molecular structural representation.
     */
    representation?: (fhir.SubstanceSpecificationStructureRepresentation | null)[] | undefined;
}
/**
 * Codes associated with the substance.
 */
export interface SubstanceSpecificationCode extends fhir.BackboneElement {
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
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.code.statusDate
     */
    _statusDate?: fhir.FhirElement;
    /**
     * Any comment can be provided in this field, if necessary.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.code.comment
     */
    _comment?: fhir.FhirElement;
    /**
     * Supporting literature.
     */
    source?: (fhir.Reference | null)[] | undefined;
}
/**
 * Details of the official nature of this name.
 */
export interface SubstanceSpecificationNameOfficial extends fhir.BackboneElement {
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
    date?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.official.date
     */
    _date?: fhir.FhirElement;
}
/**
 * Names applicable to this substance.
 */
export interface SubstanceSpecificationName extends fhir.BackboneElement {
    /**
     * The actual name.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.name
     */
    _name?: fhir.FhirElement;
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
    preferred?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.preferred
     */
    _preferred?: fhir.FhirElement;
    /**
     * Language of the name.
     */
    language?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
     */
    domain?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The jurisdiction where this name applies.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A synonym of this name.
     */
    synonym?: (fhir.SubstanceSpecificationName | null)[] | undefined;
    /**
     * A translation for this name.
     */
    translation?: (fhir.SubstanceSpecificationName | null)[] | undefined;
    /**
     * Details of the official nature of this name.
     */
    official?: (fhir.SubstanceSpecificationNameOfficial | null)[] | undefined;
    /**
     * Supporting literature.
     */
    source?: (fhir.Reference | null)[] | undefined;
}
/**
 * A link between this substance and another, with details of the relationship.
 */
export interface SubstanceSpecificationRelationship extends fhir.BackboneElement {
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceReference?: fhir.Reference | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * For example "salt to parent", "active moiety", "starting material".
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.relationship.isDefining
     */
    _isDefining?: fhir.FhirElement;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRange?: fhir.Range | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRatio?: fhir.Ratio | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.relationship.amount[x]
     */
    _amountString?: fhir.FhirElement;
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
    source?: (fhir.Reference | null)[] | undefined;
}
/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export interface SubstanceSpecification extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceSpecification" | null;
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
    description?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.description
     */
    _description?: fhir.FhirElement;
    /**
     * Supporting literature.
     */
    source?: (fhir.Reference | null)[] | undefined;
    /**
     * Textual comment about this record of a substance.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.comment
     */
    _comment?: fhir.FhirElement;
    /**
     * Moiety, for structural modifications.
     */
    moiety?: (fhir.SubstanceSpecificationMoiety | null)[] | undefined;
    /**
     * General specifications for this substance, including how it is related to other substances.
     */
    property?: (fhir.SubstanceSpecificationProperty | null)[] | undefined;
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
    code?: (fhir.SubstanceSpecificationCode | null)[] | undefined;
    /**
     * Names applicable to this substance.
     */
    name?: (fhir.SubstanceSpecificationName | null)[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: (fhir.SubstanceSpecificationStructureIsotopeMolecularWeight | null)[] | undefined;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: (fhir.SubstanceSpecificationRelationship | null)[] | undefined;
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
}
//# sourceMappingURL=SubstanceSpecification.d.ts.map