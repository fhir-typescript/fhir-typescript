// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SubstanceProtein

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the SubstanceProteinSubunit type.
 */
export interface SubstanceProteinSubunitArgs extends fhir.BackboneElementArgs {
  /**
   * Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
   */
  subunit?: fhir.FhirInteger|number|undefined;
  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
   */
  sequence?: fhir.FhirString|string|undefined;
  /**
   * Length of linear sequences of amino acids contained in the subunit.
   */
  length?: fhir.FhirInteger|number|undefined;
  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
   */
  sequenceAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   */
  nTerminalModificationId?: fhir.IdentifierArgs|undefined;
  /**
   * The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified.
   */
  nTerminalModification?: fhir.FhirString|string|undefined;
  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   */
  cTerminalModificationId?: fhir.IdentifierArgs|undefined;
  /**
   * The modification at the C-terminal shall be specified.
   */
  cTerminalModification?: fhir.FhirString|string|undefined;
}

/**
 * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times.
 */
export class SubstanceProteinSubunit extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceProteinSubunit';
  /**
   * Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
   */
  public subunit?: fhir.FhirInteger|undefined;
  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
   */
  public sequence?: fhir.FhirString|undefined;
  /**
   * Length of linear sequences of amino acids contained in the subunit.
   */
  public length?: fhir.FhirInteger|undefined;
  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
   */
  public sequenceAttachment?: fhir.Attachment|undefined;
  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   */
  public nTerminalModificationId?: fhir.Identifier|undefined;
  /**
   * The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified.
   */
  public nTerminalModification?: fhir.FhirString|undefined;
  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   */
  public cTerminalModificationId?: fhir.Identifier|undefined;
  /**
   * The modification at the C-terminal shall be specified.
   */
  public cTerminalModification?: fhir.FhirString|undefined;
  /**
   * Default constructor for SubstanceProteinSubunit - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceProteinSubunitArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['subunit']) { this.subunit = new fhir.FhirInteger({value: source.subunit}); }
    if (source['sequence']) { this.sequence = new fhir.FhirString({value: source.sequence}); }
    if (source['length']) { this.length = new fhir.FhirInteger({value: source.length}); }
    if (source['sequenceAttachment']) { this.sequenceAttachment = new fhir.Attachment(source.sequenceAttachment); }
    if (source['nTerminalModificationId']) { this.nTerminalModificationId = new fhir.Identifier(source.nTerminalModificationId); }
    if (source['nTerminalModification']) { this.nTerminalModification = new fhir.FhirString({value: source.nTerminalModification}); }
    if (source['cTerminalModificationId']) { this.cTerminalModificationId = new fhir.Identifier(source.cTerminalModificationId); }
    if (source['cTerminalModification']) { this.cTerminalModification = new fhir.FhirString({value: source.cTerminalModification}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["subunit"]) { issues.push(...this.subunit.doModelValidation()); }
    if (this["sequence"]) { issues.push(...this.sequence.doModelValidation()); }
    if (this["length"]) { issues.push(...this.length.doModelValidation()); }
    if (this["sequenceAttachment"]) { issues.push(...this.sequenceAttachment.doModelValidation()); }
    if (this["nTerminalModificationId"]) { issues.push(...this.nTerminalModificationId.doModelValidation()); }
    if (this["nTerminalModification"]) { issues.push(...this.nTerminalModification.doModelValidation()); }
    if (this["cTerminalModificationId"]) { issues.push(...this.cTerminalModificationId.doModelValidation()); }
    if (this["cTerminalModification"]) { issues.push(...this.cTerminalModification.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceProtein type.
 */
export interface SubstanceProteinArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "SubstanceProtein"|undefined;
  /**
   * The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence.
   */
  sequenceType?: fhir.CodeableConceptArgs|undefined;
  /**
   * Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable.
   */
  numberOfSubunits?: fhir.FhirInteger|number|undefined;
  /**
   * The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions.
   */
  disulfideLinkage?: fhir.FhirString[]|string[]|undefined;
  /**
   * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times.
   */
  subunit?: fhir.SubstanceProteinSubunitArgs[]|undefined;
}

/**
 * A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.
 */
export class SubstanceProtein extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceProtein';
  /**
   * Resource Type Name
   */
  public override resourceType: "SubstanceProtein";
  /**
   * The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence.
   */
  public sequenceType?: fhir.CodeableConcept|undefined;
  /**
   * Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable.
   */
  public numberOfSubunits?: fhir.FhirInteger|undefined;
  /**
   * The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions.
   */
  public disulfideLinkage: fhir.FhirString[];
  /**
   * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times.
   */
  public subunit: fhir.SubstanceProteinSubunit[];
  /**
   * Default constructor for SubstanceProtein - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceProteinArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'SubstanceProtein';
    if (source['sequenceType']) { this.sequenceType = new fhir.CodeableConcept(source.sequenceType); }
    if (source['numberOfSubunits']) { this.numberOfSubunits = new fhir.FhirInteger({value: source.numberOfSubunits}); }
    if (source['disulfideLinkage']) { this.disulfideLinkage = source.disulfideLinkage.map((x) => new fhir.FhirString({value: x})); }
    else { this.disulfideLinkage = []; }
    if (source['subunit']) { this.subunit = source.subunit.map((x) => new fhir.SubstanceProteinSubunit(x)); }
    else { this.subunit = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"SubstanceProtein" fhir: SubstanceProtein.resourceType:"SubstanceProtein"' });
    }
    if (this["sequenceType"]) { issues.push(...this.sequenceType.doModelValidation()); }
    if (this["numberOfSubunits"]) { issues.push(...this.numberOfSubunits.doModelValidation()); }
    if (this["disulfideLinkage"]) { this.disulfideLinkage.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["subunit"]) { this.subunit.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
