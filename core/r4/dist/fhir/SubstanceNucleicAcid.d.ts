import * as fhir from '../fhir.js';
/**
 * Valid arguments for the SubstanceNucleicAcidSubunitLinkage type.
 */
export interface SubstanceNucleicAcidSubunitLinkageArgs extends fhir.BackboneElementArgs {
    /**
     * The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified.
     */
    connectivity?: fhir.FhirString | string | undefined;
    /**
     * Each linkage will be registered as a fragment and have an ID.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Residues shall be captured as described in 5.3.6.8.3.
     */
    residueSite?: fhir.FhirString | string | undefined;
}
/**
 * The linkages between sugar residues will also be captured.
 */
export declare class SubstanceNucleicAcidSubunitLinkage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified.
     */
    connectivity?: fhir.FhirString | undefined;
    /**
     * Each linkage will be registered as a fragment and have an ID.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Residues shall be captured as described in 5.3.6.8.3.
     */
    residueSite?: fhir.FhirString | undefined;
    /**
     * Default constructor for SubstanceNucleicAcidSubunitLinkage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceNucleicAcidSubunitLinkageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the SubstanceNucleicAcidSubunitSugar type.
 */
export interface SubstanceNucleicAcidSubunitSugarArgs extends fhir.BackboneElementArgs {
    /**
     * The Substance ID of the sugar or sugar-like component that make up the nucleotide.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * The name of the sugar or sugar-like component that make up the nucleotide.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above.
     */
    residueSite?: fhir.FhirString | string | undefined;
}
/**
 * 5.3.6.8.1 Sugar ID (Mandatory).
 */
export declare class SubstanceNucleicAcidSubunitSugar extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The Substance ID of the sugar or sugar-like component that make up the nucleotide.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The name of the sugar or sugar-like component that make up the nucleotide.
     */
    name?: fhir.FhirString | undefined;
    /**
     * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above.
     */
    residueSite?: fhir.FhirString | undefined;
    /**
     * Default constructor for SubstanceNucleicAcidSubunitSugar - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceNucleicAcidSubunitSugarArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the SubstanceNucleicAcidSubunit type.
 */
export interface SubstanceNucleicAcidSubunitArgs extends fhir.BackboneElementArgs {
    /**
     * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
     */
    subunit?: fhir.FhirInteger | number | undefined;
    /**
     * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured.
     */
    sequence?: fhir.FhirString | string | undefined;
    /**
     * The length of the sequence shall be captured.
     */
    length?: fhir.FhirInteger | number | undefined;
    /**
     * (TBC).
     */
    sequenceAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant.
     */
    fivePrime?: fhir.CodeableConceptArgs | undefined;
    /**
     * The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant.
     */
    threePrime?: fhir.CodeableConceptArgs | undefined;
    /**
     * The linkages between sugar residues will also be captured.
     */
    linkage?: fhir.SubstanceNucleicAcidSubunitLinkageArgs[] | undefined;
    /**
     * 5.3.6.8.1 Sugar ID (Mandatory).
     */
    sugar?: fhir.SubstanceNucleicAcidSubunitSugarArgs[] | undefined;
}
/**
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
 */
export declare class SubstanceNucleicAcidSubunit extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
     */
    subunit?: fhir.FhirInteger | undefined;
    /**
     * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured.
     */
    sequence?: fhir.FhirString | undefined;
    /**
     * The length of the sequence shall be captured.
     */
    length?: fhir.FhirInteger | undefined;
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
    linkage?: fhir.SubstanceNucleicAcidSubunitLinkage[];
    /**
     * 5.3.6.8.1 Sugar ID (Mandatory).
     */
    sugar?: fhir.SubstanceNucleicAcidSubunitSugar[];
    /**
     * Default constructor for SubstanceNucleicAcidSubunit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceNucleicAcidSubunitArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the SubstanceNucleicAcid type.
 */
export interface SubstanceNucleicAcidArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceNucleicAcid" | undefined;
    /**
     * The type of the sequence shall be specified based on a controlled vocabulary.
     */
    sequenceType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit.
     */
    numberOfSubunits?: fhir.FhirInteger | number | undefined;
    /**
     * The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue”.
     */
    areaOfHybridisation?: fhir.FhirString | string | undefined;
    /**
     * (TBC).
     */
    oligoNucleotideType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
     */
    subunit?: fhir.SubstanceNucleicAcidSubunitArgs[] | undefined;
}
/**
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.
 */
export declare class SubstanceNucleicAcid extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceNucleicAcid";
    /**
     * The type of the sequence shall be specified based on a controlled vocabulary.
     */
    sequenceType?: fhir.CodeableConcept | undefined;
    /**
     * The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit.
     */
    numberOfSubunits?: fhir.FhirInteger | undefined;
    /**
     * The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue”.
     */
    areaOfHybridisation?: fhir.FhirString | undefined;
    /**
     * (TBC).
     */
    oligoNucleotideType?: fhir.CodeableConcept | undefined;
    /**
     * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
     */
    subunit?: fhir.SubstanceNucleicAcidSubunit[];
    /**
     * Default constructor for SubstanceNucleicAcid - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceNucleicAcidArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=SubstanceNucleicAcid.d.ts.map