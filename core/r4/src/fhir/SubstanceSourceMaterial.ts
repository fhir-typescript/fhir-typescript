// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SubstanceSourceMaterial

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the SubstanceSourceMaterialFractionDescription type.
 */
export interface SubstanceSourceMaterialFractionDescriptionArgs extends fhir.BackboneElementArgs {
  /**
   * This element is capturing information about the fraction of a plant part, or human plasma for fractionation.
   */
  fraction?: fhir.FhirString|string|undefined;
  /**
   * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1.
   */
  materialType?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
 */
export class SubstanceSourceMaterialFractionDescription extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceSourceMaterialFractionDescription';
  /**
   * This element is capturing information about the fraction of a plant part, or human plasma for fractionation.
   */
  public fraction?: fhir.FhirString|undefined;
  /**
   * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1.
   */
  public materialType?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialFractionDescription - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceSourceMaterialFractionDescriptionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['fraction']) { this.fraction = new fhir.FhirString({value: source.fraction}); }
    if (source['materialType']) { this.materialType = new fhir.CodeableConcept(source.materialType); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["fraction"]) { issues.push(...this.fraction.doModelValidation()); }
    if (this["materialType"]) { issues.push(...this.materialType.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceSourceMaterialOrganismAuthor type.
 */
export interface SubstanceSourceMaterialOrganismAuthorArgs extends fhir.BackboneElementArgs {
  /**
   * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name.
   */
  authorType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank).
   */
  authorDescription?: fhir.FhirString|string|undefined;
}

/**
 * 4.9.13.6.1 Author type (Conditional).
 */
export class SubstanceSourceMaterialOrganismAuthor extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceSourceMaterialOrganismAuthor';
  /**
   * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name.
   */
  public authorType?: fhir.CodeableConcept|undefined;
  /**
   * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank).
   */
  public authorDescription?: fhir.FhirString|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialOrganismAuthor - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceSourceMaterialOrganismAuthorArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['authorType']) { this.authorType = new fhir.CodeableConcept(source.authorType); }
    if (source['authorDescription']) { this.authorDescription = new fhir.FhirString({value: source.authorDescription}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["authorType"]) { issues.push(...this.authorType.doModelValidation()); }
    if (this["authorDescription"]) { issues.push(...this.authorDescription.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceSourceMaterialOrganismHybrid type.
 */
export interface SubstanceSourceMaterialOrganismHybridArgs extends fhir.BackboneElementArgs {
  /**
   * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  maternalOrganismId?: fhir.FhirString|string|undefined;
  /**
   * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  maternalOrganismName?: fhir.FhirString|string|undefined;
  /**
   * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
   */
  paternalOrganismId?: fhir.FhirString|string|undefined;
  /**
   * The name of the paternal species constituting the hybrid organism shall be specified.
   */
  paternalOrganismName?: fhir.FhirString|string|undefined;
  /**
   * The hybrid type of an organism shall be specified.
   */
  hybridType?: fhir.CodeableConceptArgs|undefined;
}

/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
 */
export class SubstanceSourceMaterialOrganismHybrid extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceSourceMaterialOrganismHybrid';
  /**
   * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  public maternalOrganismId?: fhir.FhirString|undefined;
  /**
   * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  public maternalOrganismName?: fhir.FhirString|undefined;
  /**
   * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
   */
  public paternalOrganismId?: fhir.FhirString|undefined;
  /**
   * The name of the paternal species constituting the hybrid organism shall be specified.
   */
  public paternalOrganismName?: fhir.FhirString|undefined;
  /**
   * The hybrid type of an organism shall be specified.
   */
  public hybridType?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialOrganismHybrid - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceSourceMaterialOrganismHybridArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['maternalOrganismId']) { this.maternalOrganismId = new fhir.FhirString({value: source.maternalOrganismId}); }
    if (source['maternalOrganismName']) { this.maternalOrganismName = new fhir.FhirString({value: source.maternalOrganismName}); }
    if (source['paternalOrganismId']) { this.paternalOrganismId = new fhir.FhirString({value: source.paternalOrganismId}); }
    if (source['paternalOrganismName']) { this.paternalOrganismName = new fhir.FhirString({value: source.paternalOrganismName}); }
    if (source['hybridType']) { this.hybridType = new fhir.CodeableConcept(source.hybridType); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["maternalOrganismId"]) { issues.push(...this.maternalOrganismId.doModelValidation()); }
    if (this["maternalOrganismName"]) { issues.push(...this.maternalOrganismName.doModelValidation()); }
    if (this["paternalOrganismId"]) { issues.push(...this.paternalOrganismId.doModelValidation()); }
    if (this["paternalOrganismName"]) { issues.push(...this.paternalOrganismName.doModelValidation()); }
    if (this["hybridType"]) { issues.push(...this.hybridType.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceSourceMaterialOrganismOrganismGeneral type.
 */
export interface SubstanceSourceMaterialOrganismOrganismGeneralArgs extends fhir.BackboneElementArgs {
  /**
   * The kingdom of an organism shall be specified.
   */
  kingdom?: fhir.CodeableConceptArgs|undefined;
  /**
   * The phylum of an organism shall be specified.
   */
  phylum?: fhir.CodeableConceptArgs|undefined;
  /**
   * The class of an organism shall be specified.
   */
  class?: fhir.CodeableConceptArgs|undefined;
  /**
   * The order of an organism shall be specified,.
   */
  order?: fhir.CodeableConceptArgs|undefined;
}

/**
 * 4.9.13.7.1 Kingdom (Conditional).
 */
export class SubstanceSourceMaterialOrganismOrganismGeneral extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceSourceMaterialOrganismOrganismGeneral';
  /**
   * The kingdom of an organism shall be specified.
   */
  public kingdom?: fhir.CodeableConcept|undefined;
  /**
   * The phylum of an organism shall be specified.
   */
  public phylum?: fhir.CodeableConcept|undefined;
  /**
   * The class of an organism shall be specified.
   */
  public class?: fhir.CodeableConcept|undefined;
  /**
   * The order of an organism shall be specified,.
   */
  public order?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialOrganismOrganismGeneral - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceSourceMaterialOrganismOrganismGeneralArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['kingdom']) { this.kingdom = new fhir.CodeableConcept(source.kingdom); }
    if (source['phylum']) { this.phylum = new fhir.CodeableConcept(source.phylum); }
    if (source['class']) { this.class = new fhir.CodeableConcept(source.class); }
    if (source['order']) { this.order = new fhir.CodeableConcept(source.order); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["kingdom"]) { issues.push(...this.kingdom.doModelValidation()); }
    if (this["phylum"]) { issues.push(...this.phylum.doModelValidation()); }
    if (this["class"]) { issues.push(...this.class.doModelValidation()); }
    if (this["order"]) { issues.push(...this.order.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceSourceMaterialOrganism type.
 */
export interface SubstanceSourceMaterialOrganismArgs extends fhir.BackboneElementArgs {
  /**
   * The family of an organism shall be specified.
   */
  family?: fhir.CodeableConceptArgs|undefined;
  /**
   * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.
   */
  genus?: fhir.CodeableConceptArgs|undefined;
  /**
   * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.
   */
  species?: fhir.CodeableConceptArgs|undefined;
  /**
   * The Intraspecific type of an organism shall be specified.
   */
  intraspecificType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.
   */
  intraspecificDescription?: fhir.FhirString|string|undefined;
  /**
   * 4.9.13.6.1 Author type (Conditional).
   */
  author?: fhir.SubstanceSourceMaterialOrganismAuthorArgs[]|undefined;
  /**
   * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
   */
  hybrid?: fhir.SubstanceSourceMaterialOrganismHybridArgs|undefined;
  /**
   * 4.9.13.7.1 Kingdom (Conditional).
   */
  organismGeneral?: fhir.SubstanceSourceMaterialOrganismOrganismGeneralArgs|undefined;
}

/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
 */
export class SubstanceSourceMaterialOrganism extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceSourceMaterialOrganism';
  /**
   * The family of an organism shall be specified.
   */
  public family?: fhir.CodeableConcept|undefined;
  /**
   * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.
   */
  public genus?: fhir.CodeableConcept|undefined;
  /**
   * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.
   */
  public species?: fhir.CodeableConcept|undefined;
  /**
   * The Intraspecific type of an organism shall be specified.
   */
  public intraspecificType?: fhir.CodeableConcept|undefined;
  /**
   * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.
   */
  public intraspecificDescription?: fhir.FhirString|undefined;
  /**
   * 4.9.13.6.1 Author type (Conditional).
   */
  public author?: fhir.SubstanceSourceMaterialOrganismAuthor[];
  /**
   * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
   */
  public hybrid?: fhir.SubstanceSourceMaterialOrganismHybrid|undefined;
  /**
   * 4.9.13.7.1 Kingdom (Conditional).
   */
  public organismGeneral?: fhir.SubstanceSourceMaterialOrganismOrganismGeneral|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialOrganism - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceSourceMaterialOrganismArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['family']) { this.family = new fhir.CodeableConcept(source.family); }
    if (source['genus']) { this.genus = new fhir.CodeableConcept(source.genus); }
    if (source['species']) { this.species = new fhir.CodeableConcept(source.species); }
    if (source['intraspecificType']) { this.intraspecificType = new fhir.CodeableConcept(source.intraspecificType); }
    if (source['intraspecificDescription']) { this.intraspecificDescription = new fhir.FhirString({value: source.intraspecificDescription}); }
    if (source['author']) { this.author = source.author.map((x) => new fhir.SubstanceSourceMaterialOrganismAuthor(x)); }
    else { this.author = []; }
    if (source['hybrid']) { this.hybrid = new fhir.SubstanceSourceMaterialOrganismHybrid(source.hybrid); }
    if (source['organismGeneral']) { this.organismGeneral = new fhir.SubstanceSourceMaterialOrganismOrganismGeneral(source.organismGeneral); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["family"]) { issues.push(...this.family.doModelValidation()); }
    if (this["genus"]) { issues.push(...this.genus.doModelValidation()); }
    if (this["species"]) { issues.push(...this.species.doModelValidation()); }
    if (this["intraspecificType"]) { issues.push(...this.intraspecificType.doModelValidation()); }
    if (this["intraspecificDescription"]) { issues.push(...this.intraspecificDescription.doModelValidation()); }
    if (this["author"]) { this.author.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["hybrid"]) { issues.push(...this.hybrid.doModelValidation()); }
    if (this["organismGeneral"]) { issues.push(...this.organismGeneral.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceSourceMaterialPartDescription type.
 */
export interface SubstanceSourceMaterialPartDescriptionArgs extends fhir.BackboneElementArgs {
  /**
   * Entity of anatomical origin of source material within an organism.
   */
  part?: fhir.CodeableConceptArgs|undefined;
  /**
   * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply.
   */
  partLocation?: fhir.CodeableConceptArgs|undefined;
}

/**
 * To do.
 */
export class SubstanceSourceMaterialPartDescription extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceSourceMaterialPartDescription';
  /**
   * Entity of anatomical origin of source material within an organism.
   */
  public part?: fhir.CodeableConcept|undefined;
  /**
   * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply.
   */
  public partLocation?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialPartDescription - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceSourceMaterialPartDescriptionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['part']) { this.part = new fhir.CodeableConcept(source.part); }
    if (source['partLocation']) { this.partLocation = new fhir.CodeableConcept(source.partLocation); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["part"]) { issues.push(...this.part.doModelValidation()); }
    if (this["partLocation"]) { issues.push(...this.partLocation.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceSourceMaterial type.
 */
export interface SubstanceSourceMaterialArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "SubstanceSourceMaterial"|undefined;
  /**
   * General high level classification of the source material specific to the origin of the material.
   */
  sourceMaterialClass?: fhir.CodeableConceptArgs|undefined;
  /**
   * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent.
   */
  sourceMaterialType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The state of the source material when extracted.
   */
  sourceMaterialState?: fhir.CodeableConceptArgs|undefined;
  /**
   * The unique identifier associated with the source material parent organism shall be specified.
   */
  organismId?: fhir.IdentifierArgs|undefined;
  /**
   * The organism accepted Scientific name shall be provided based on the organism taxonomy.
   */
  organismName?: fhir.FhirString|string|undefined;
  /**
   * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
   */
  parentSubstanceId?: fhir.IdentifierArgs[]|undefined;
  /**
   * The parent substance of the Herbal Drug, or Herbal preparation.
   */
  parentSubstanceName?: fhir.FhirString[]|string[]|undefined;
  /**
   * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate.
   */
  countryOfOrigin?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
   */
  geographicalLocation?: fhir.FhirString[]|string[]|undefined;
  /**
   * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum).
   */
  developmentStage?: fhir.CodeableConceptArgs|undefined;
  /**
   * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
   */
  fractionDescription?: fhir.SubstanceSourceMaterialFractionDescriptionArgs[]|undefined;
  /**
   * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
   */
  organism?: fhir.SubstanceSourceMaterialOrganismArgs|undefined;
  /**
   * To do.
   */
  partDescription?: fhir.SubstanceSourceMaterialPartDescriptionArgs[]|undefined;
}

/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 */
export class SubstanceSourceMaterial extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceSourceMaterial';
  /**
   * Resource Type Name
   */
  public override resourceType: "SubstanceSourceMaterial";
  /**
   * General high level classification of the source material specific to the origin of the material.
   */
  public sourceMaterialClass?: fhir.CodeableConcept|undefined;
  /**
   * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent.
   */
  public sourceMaterialType?: fhir.CodeableConcept|undefined;
  /**
   * The state of the source material when extracted.
   */
  public sourceMaterialState?: fhir.CodeableConcept|undefined;
  /**
   * The unique identifier associated with the source material parent organism shall be specified.
   */
  public organismId?: fhir.Identifier|undefined;
  /**
   * The organism accepted Scientific name shall be provided based on the organism taxonomy.
   */
  public organismName?: fhir.FhirString|undefined;
  /**
   * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
   */
  public parentSubstanceId?: fhir.Identifier[];
  /**
   * The parent substance of the Herbal Drug, or Herbal preparation.
   */
  public parentSubstanceName?: fhir.FhirString[];
  /**
   * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate.
   */
  public countryOfOrigin?: fhir.CodeableConcept[];
  /**
   * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
   */
  public geographicalLocation?: fhir.FhirString[];
  /**
   * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum).
   */
  public developmentStage?: fhir.CodeableConcept|undefined;
  /**
   * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
   */
  public fractionDescription?: fhir.SubstanceSourceMaterialFractionDescription[];
  /**
   * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
   */
  public organism?: fhir.SubstanceSourceMaterialOrganism|undefined;
  /**
   * To do.
   */
  public partDescription?: fhir.SubstanceSourceMaterialPartDescription[];
  /**
   * Default constructor for SubstanceSourceMaterial - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceSourceMaterialArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'SubstanceSourceMaterial';
    if (source['sourceMaterialClass']) { this.sourceMaterialClass = new fhir.CodeableConcept(source.sourceMaterialClass); }
    if (source['sourceMaterialType']) { this.sourceMaterialType = new fhir.CodeableConcept(source.sourceMaterialType); }
    if (source['sourceMaterialState']) { this.sourceMaterialState = new fhir.CodeableConcept(source.sourceMaterialState); }
    if (source['organismId']) { this.organismId = new fhir.Identifier(source.organismId); }
    if (source['organismName']) { this.organismName = new fhir.FhirString({value: source.organismName}); }
    if (source['parentSubstanceId']) { this.parentSubstanceId = source.parentSubstanceId.map((x) => new fhir.Identifier(x)); }
    else { this.parentSubstanceId = []; }
    if (source['parentSubstanceName']) { this.parentSubstanceName = source.parentSubstanceName.map((x) => new fhir.FhirString({value: x})); }
    else { this.parentSubstanceName = []; }
    if (source['countryOfOrigin']) { this.countryOfOrigin = source.countryOfOrigin.map((x) => new fhir.CodeableConcept(x)); }
    else { this.countryOfOrigin = []; }
    if (source['geographicalLocation']) { this.geographicalLocation = source.geographicalLocation.map((x) => new fhir.FhirString({value: x})); }
    else { this.geographicalLocation = []; }
    if (source['developmentStage']) { this.developmentStage = new fhir.CodeableConcept(source.developmentStage); }
    if (source['fractionDescription']) { this.fractionDescription = source.fractionDescription.map((x) => new fhir.SubstanceSourceMaterialFractionDescription(x)); }
    else { this.fractionDescription = []; }
    if (source['organism']) { this.organism = new fhir.SubstanceSourceMaterialOrganism(source.organism); }
    if (source['partDescription']) { this.partDescription = source.partDescription.map((x) => new fhir.SubstanceSourceMaterialPartDescription(x)); }
    else { this.partDescription = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required',  diagnostics: 'Missing required property resourceType:"SubstanceSourceMaterial" fhir: SubstanceSourceMaterial.resourceType:"SubstanceSourceMaterial"', });
    }
    if (this["sourceMaterialClass"]) { issues.push(...this.sourceMaterialClass.doModelValidation()); }
    if (this["sourceMaterialType"]) { issues.push(...this.sourceMaterialType.doModelValidation()); }
    if (this["sourceMaterialState"]) { issues.push(...this.sourceMaterialState.doModelValidation()); }
    if (this["organismId"]) { issues.push(...this.organismId.doModelValidation()); }
    if (this["organismName"]) { issues.push(...this.organismName.doModelValidation()); }
    if (this["parentSubstanceId"]) { this.parentSubstanceId.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["parentSubstanceName"]) { this.parentSubstanceName.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["countryOfOrigin"]) { this.countryOfOrigin.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["geographicalLocation"]) { this.geographicalLocation.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["developmentStage"]) { issues.push(...this.developmentStage.doModelValidation()); }
    if (this["fractionDescription"]) { this.fractionDescription.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["organism"]) { issues.push(...this.organism.doModelValidation()); }
    if (this["partDescription"]) { this.partDescription.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
