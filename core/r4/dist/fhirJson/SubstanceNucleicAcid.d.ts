import * as fhir from '../fhirJson.js';
/**
 * The linkages between sugar residues will also be captured.
 */
export interface SubstanceNucleicAcidSubunitLinkage extends fhir.BackboneElement {
    /**
     * The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified.
     */
    connectivity?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceNucleicAcid.subunit.linkage.connectivity
     */
    _connectivity?: fhir.FhirElement;
    /**
     * Each linkage will be registered as a fragment and have an ID.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceNucleicAcid.subunit.linkage.name
     */
    _name?: fhir.FhirElement;
    /**
     * Residues shall be captured as described in 5.3.6.8.3.
     */
    residueSite?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceNucleicAcid.subunit.linkage.residueSite
     */
    _residueSite?: fhir.FhirElement;
}
/**
 * 5.3.6.8.1 Sugar ID (Mandatory).
 */
export interface SubstanceNucleicAcidSubunitSugar extends fhir.BackboneElement {
    /**
     * The Substance ID of the sugar or sugar-like component that make up the nucleotide.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The name of the sugar or sugar-like component that make up the nucleotide.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceNucleicAcid.subunit.sugar.name
     */
    _name?: fhir.FhirElement;
    /**
     * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above.
     */
    residueSite?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceNucleicAcid.subunit.sugar.residueSite
     */
    _residueSite?: fhir.FhirElement;
}
/**
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
 */
export interface SubstanceNucleicAcidSubunit extends fhir.BackboneElement {
    /**
     * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
     */
    subunit?: number | undefined;
    /**
     * Extended properties for primitive element: SubstanceNucleicAcid.subunit.subunit
     */
    _subunit?: fhir.FhirElement;
    /**
     * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured.
     */
    sequence?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceNucleicAcid.subunit.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * The length of the sequence shall be captured.
     */
    length?: number | undefined;
    /**
     * Extended properties for primitive element: SubstanceNucleicAcid.subunit.length
     */
    _length?: fhir.FhirElement;
    /**
     * (TBC).
     */
    sequenceAttachment?: fhir.Attachment | undefined;
    /**
     * The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant.
     */
    fivePrime?: fhir.CodeableConcept | undefined;
    /**
     * The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant.
     */
    threePrime?: fhir.CodeableConcept | undefined;
    /**
     * The linkages between sugar residues will also be captured.
     */
    linkage?: (fhir.SubstanceNucleicAcidSubunitLinkage | null)[] | undefined;
    /**
     * 5.3.6.8.1 Sugar ID (Mandatory).
     */
    sugar?: (fhir.SubstanceNucleicAcidSubunitSugar | null)[] | undefined;
}
/**
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.
 */
export interface SubstanceNucleicAcid extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceNucleicAcid" | null;
    /**
     * The type of the sequence shall be specified based on a controlled vocabulary.
     */
    sequenceType?: fhir.CodeableConcept | undefined;
    /**
     * The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit.
     */
    numberOfSubunits?: number | undefined;
    /**
     * Extended properties for primitive element: SubstanceNucleicAcid.numberOfSubunits
     */
    _numberOfSubunits?: fhir.FhirElement;
    /**
     * The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue”.
     */
    areaOfHybridisation?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceNucleicAcid.areaOfHybridisation
     */
    _areaOfHybridisation?: fhir.FhirElement;
    /**
     * (TBC).
     */
    oligoNucleotideType?: fhir.CodeableConcept | undefined;
    /**
     * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
     */
    subunit?: (fhir.SubstanceNucleicAcidSubunit | null)[] | undefined;
}
//# sourceMappingURL=SubstanceNucleicAcid.d.ts.map