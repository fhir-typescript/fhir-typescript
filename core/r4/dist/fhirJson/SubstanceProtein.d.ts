import * as fhir from '../fhirJson.js';
/**
 * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times.
 */
export interface SubstanceProteinSubunit extends fhir.BackboneElement {
    /**
     * Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
     */
    subunit?: number | undefined;
    /**
     * Extended properties for primitive element: SubstanceProtein.subunit.subunit
     */
    _subunit?: fhir.FhirElement;
    /**
     * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
     */
    sequence?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceProtein.subunit.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * Length of linear sequences of amino acids contained in the subunit.
     */
    length?: number | undefined;
    /**
     * Extended properties for primitive element: SubstanceProtein.subunit.length
     */
    _length?: fhir.FhirElement;
    /**
     * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
     */
    sequenceAttachment?: fhir.Attachment | undefined;
    /**
     * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
     */
    nTerminalModificationId?: fhir.Identifier | undefined;
    /**
     * The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified.
     */
    nTerminalModification?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceProtein.subunit.nTerminalModification
     */
    _nTerminalModification?: fhir.FhirElement;
    /**
     * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
     */
    cTerminalModificationId?: fhir.Identifier | undefined;
    /**
     * The modification at the C-terminal shall be specified.
     */
    cTerminalModification?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceProtein.subunit.cTerminalModification
     */
    _cTerminalModification?: fhir.FhirElement;
}
/**
 * A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.
 */
export interface SubstanceProtein extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceProtein" | null;
    /**
     * The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence.
     */
    sequenceType?: fhir.CodeableConcept | undefined;
    /**
     * Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable.
     */
    numberOfSubunits?: number | undefined;
    /**
     * Extended properties for primitive element: SubstanceProtein.numberOfSubunits
     */
    _numberOfSubunits?: fhir.FhirElement;
    /**
     * The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions.
     */
    disulfideLinkage?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubstanceProtein.disulfideLinkage
     */
    _disulfideLinkage?: (fhir.FhirElement | null)[];
    /**
     * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times.
     */
    subunit?: (fhir.SubstanceProteinSubunit | null)[] | undefined;
}
//# sourceMappingURL=SubstanceProtein.d.ts.map