import * as fhir from '../fhirJson.js';
/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
 */
export interface SubstanceSourceMaterialFractionDescription extends fhir.BackboneElement {
    /**
     * This element is capturing information about the fraction of a plant part, or human plasma for fractionation.
     */
    fraction?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.fractionDescription.fraction
     */
    _fraction?: fhir.FhirElement;
    /**
     * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1.
     */
    materialType?: fhir.CodeableConcept | undefined;
}
/**
 * 4.9.13.6.1 Author type (Conditional).
 */
export interface SubstanceSourceMaterialOrganismAuthor extends fhir.BackboneElement {
    /**
     * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name.
     */
    authorType?: fhir.CodeableConcept | undefined;
    /**
     * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank).
     */
    authorDescription?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.author.authorDescription
     */
    _authorDescription?: fhir.FhirElement;
}
/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
 */
export interface SubstanceSourceMaterialOrganismHybrid extends fhir.BackboneElement {
    /**
     * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
     */
    maternalOrganismId?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.maternalOrganismId
     */
    _maternalOrganismId?: fhir.FhirElement;
    /**
     * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
     */
    maternalOrganismName?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.maternalOrganismName
     */
    _maternalOrganismName?: fhir.FhirElement;
    /**
     * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
     */
    paternalOrganismId?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.paternalOrganismId
     */
    _paternalOrganismId?: fhir.FhirElement;
    /**
     * The name of the paternal species constituting the hybrid organism shall be specified.
     */
    paternalOrganismName?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.paternalOrganismName
     */
    _paternalOrganismName?: fhir.FhirElement;
    /**
     * The hybrid type of an organism shall be specified.
     */
    hybridType?: fhir.CodeableConcept | undefined;
}
/**
 * 4.9.13.7.1 Kingdom (Conditional).
 */
export interface SubstanceSourceMaterialOrganismOrganismGeneral extends fhir.BackboneElement {
    /**
     * The kingdom of an organism shall be specified.
     */
    kingdom?: fhir.CodeableConcept | undefined;
    /**
     * The phylum of an organism shall be specified.
     */
    phylum?: fhir.CodeableConcept | undefined;
    /**
     * The class of an organism shall be specified.
     */
    class?: fhir.CodeableConcept | undefined;
    /**
     * The order of an organism shall be specified,.
     */
    order?: fhir.CodeableConcept | undefined;
}
/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
 */
export interface SubstanceSourceMaterialOrganism extends fhir.BackboneElement {
    /**
     * The family of an organism shall be specified.
     */
    family?: fhir.CodeableConcept | undefined;
    /**
     * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.
     */
    genus?: fhir.CodeableConcept | undefined;
    /**
     * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.
     */
    species?: fhir.CodeableConcept | undefined;
    /**
     * The Intraspecific type of an organism shall be specified.
     */
    intraspecificType?: fhir.CodeableConcept | undefined;
    /**
     * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.
     */
    intraspecificDescription?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.intraspecificDescription
     */
    _intraspecificDescription?: fhir.FhirElement;
    /**
     * 4.9.13.6.1 Author type (Conditional).
     */
    author?: (fhir.SubstanceSourceMaterialOrganismAuthor | null)[] | undefined;
    /**
     * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
     */
    hybrid?: fhir.SubstanceSourceMaterialOrganismHybrid | undefined;
    /**
     * 4.9.13.7.1 Kingdom (Conditional).
     */
    organismGeneral?: fhir.SubstanceSourceMaterialOrganismOrganismGeneral | undefined;
}
/**
 * To do.
 */
export interface SubstanceSourceMaterialPartDescription extends fhir.BackboneElement {
    /**
     * Entity of anatomical origin of source material within an organism.
     */
    part?: fhir.CodeableConcept | undefined;
    /**
     * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply.
     */
    partLocation?: fhir.CodeableConcept | undefined;
}
/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 */
export interface SubstanceSourceMaterial extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceSourceMaterial" | null;
    /**
     * General high level classification of the source material specific to the origin of the material.
     */
    sourceMaterialClass?: fhir.CodeableConcept | undefined;
    /**
     * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent.
     */
    sourceMaterialType?: fhir.CodeableConcept | undefined;
    /**
     * The state of the source material when extracted.
     */
    sourceMaterialState?: fhir.CodeableConcept | undefined;
    /**
     * The unique identifier associated with the source material parent organism shall be specified.
     */
    organismId?: fhir.Identifier | undefined;
    /**
     * The organism accepted Scientific name shall be provided based on the organism taxonomy.
     */
    organismName?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organismName
     */
    _organismName?: fhir.FhirElement;
    /**
     * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
     */
    parentSubstanceId?: (fhir.Identifier | null)[] | undefined;
    /**
     * The parent substance of the Herbal Drug, or Herbal preparation.
     */
    parentSubstanceName?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.parentSubstanceName
     */
    _parentSubstanceName?: (fhir.FhirElement | null)[];
    /**
     * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate.
     */
    countryOfOrigin?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
     */
    geographicalLocation?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.geographicalLocation
     */
    _geographicalLocation?: (fhir.FhirElement | null)[];
    /**
     * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum).
     */
    developmentStage?: fhir.CodeableConcept | undefined;
    /**
     * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
     */
    fractionDescription?: (fhir.SubstanceSourceMaterialFractionDescription | null)[] | undefined;
    /**
     * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
     */
    organism?: fhir.SubstanceSourceMaterialOrganism | undefined;
    /**
     * To do.
     */
    partDescription?: (fhir.SubstanceSourceMaterialPartDescription | null)[] | undefined;
}
//# sourceMappingURL=SubstanceSourceMaterial.d.ts.map