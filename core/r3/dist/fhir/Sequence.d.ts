import * as fhir from '../fhir.js';
import { QualityTypeCodeType } from '../fhirValueSets/QualityTypeCodes.js';
import { RepositoryTypeCodeType } from '../fhirValueSets/RepositoryTypeCodes.js';
/**
 * Valid arguments for the SequenceReferenceSeq type.
 */
export interface SequenceReferenceSeqArgs extends fhir.BackboneElementArgs {
    /**
     * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
     */
    chromosome?: fhir.CodeableConceptArgs | undefined;
    /**
     * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
     */
    genomeBuild?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.referenceSeq.genomeBuild
     */
    _genomeBuild?: fhir.FhirElementArgs;
    /**
     * Reference identifier of reference sequence submitted to NCBI. It must match the type in the Sequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
     */
    referenceSeqId?: fhir.CodeableConceptArgs | undefined;
    /**
     * A Pointer to another Sequence entity as reference sequence.
     */
    referenceSeqPointer?: fhir.ReferenceArgs | undefined;
    /**
     * A string like "ACGT".
     */
    referenceSeqString?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.referenceSeq.referenceSeqString
     */
    _referenceSeqString?: fhir.FhirElementArgs;
    /**
     * Directionality of DNA sequence. Available values are "1" for the plus strand (5' to 3')/Watson/Sense/positive  and "-1" for the minus strand(3' to 5')/Crick/Antisense/negative.
     */
    strand?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.referenceSeq.strand
     */
    _strand?: fhir.FhirElementArgs;
    /**
     * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    windowStart: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.referenceSeq.windowStart
     */
    _windowStart?: fhir.FhirElementArgs;
    /**
     * End position of the window on the reference sequence. If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    windowEnd: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.referenceSeq.windowEnd
     */
    _windowEnd?: fhir.FhirElementArgs;
}
/**
 * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
 */
export declare class SequenceReferenceSeq extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
     */
    chromosome?: fhir.CodeableConcept | undefined;
    /**
     * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
     */
    genomeBuild?: fhir.FhirString | undefined;
    /**
     * Reference identifier of reference sequence submitted to NCBI. It must match the type in the Sequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
     */
    referenceSeqId?: fhir.CodeableConcept | undefined;
    /**
     * A Pointer to another Sequence entity as reference sequence.
     */
    referenceSeqPointer?: fhir.Reference | undefined;
    /**
     * A string like "ACGT".
     */
    referenceSeqString?: fhir.FhirString | undefined;
    /**
     * Directionality of DNA sequence. Available values are "1" for the plus strand (5' to 3')/Watson/Sense/positive  and "-1" for the minus strand(3' to 5')/Crick/Antisense/negative.
     */
    strand?: fhir.FhirInteger | undefined;
    /**
     * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    windowStart: fhir.FhirInteger | null;
    /**
     * End position of the window on the reference sequence. If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    windowEnd: fhir.FhirInteger | null;
    /**
     * Default constructor for SequenceReferenceSeq - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SequenceReferenceSeqArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SequenceVariant type.
 */
export interface SequenceVariantArgs extends fhir.BackboneElementArgs {
    /**
     * Start position of the variant on the  reference sequence.If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.variant.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * End position of the variant on the reference sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.variant.end
     */
    _end?: fhir.FhirElementArgs;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    observedAllele?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.variant.observedAllele
     */
    _observedAllele?: fhir.FhirElementArgs;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    referenceAllele?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.variant.referenceAllele
     */
    _referenceAllele?: fhir.FhirElementArgs;
    /**
     * Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
     */
    cigar?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.variant.cigar
     */
    _cigar?: fhir.FhirElementArgs;
    /**
     * A pointer to an Observation containing variant information.
     */
    variantPointer?: fhir.ReferenceArgs | undefined;
}
/**
 * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
 */
export declare class SequenceVariant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Start position of the variant on the  reference sequence.If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: fhir.FhirInteger | undefined;
    /**
     * End position of the variant on the reference sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: fhir.FhirInteger | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    observedAllele?: fhir.FhirString | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    referenceAllele?: fhir.FhirString | undefined;
    /**
     * Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
     */
    cigar?: fhir.FhirString | undefined;
    /**
     * A pointer to an Observation containing variant information.
     */
    variantPointer?: fhir.Reference | undefined;
    /**
     * Default constructor for SequenceVariant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SequenceVariantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SequenceQuality type.
 */
export interface SequenceQualityArgs extends fhir.BackboneElementArgs {
    /**
     * INDEL / SNP / Undefined variant.
     */
    type: fhir.FhirCode<QualityTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.quality.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Gold standard sequence used for comparing against.
     */
    standardSequence?: fhir.CodeableConceptArgs | undefined;
    /**
     * Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.quality.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * End position of the sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.quality.end
     */
    _end?: fhir.FhirElementArgs;
    /**
     * The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
     */
    score?: fhir.QuantityArgs | undefined;
    /**
     * Which method is used to get sequence quality.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    truthTP?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.quality.truthTP
     */
    _truthTP?: fhir.FhirElementArgs;
    /**
     * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    queryTP?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.quality.queryTP
     */
    _queryTP?: fhir.FhirElementArgs;
    /**
     * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
     */
    truthFN?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.quality.truthFN
     */
    _truthFN?: fhir.FhirElementArgs;
    /**
     * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
     */
    queryFP?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.quality.queryFP
     */
    _queryFP?: fhir.FhirElementArgs;
    /**
     * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
     */
    gtFP?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.quality.gtFP
     */
    _gtFP?: fhir.FhirElementArgs;
    /**
     * QUERY.TP / (QUERY.TP + QUERY.FP).
     */
    precision?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.quality.precision
     */
    _precision?: fhir.FhirElementArgs;
    /**
     * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
     */
    recall?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.quality.recall
     */
    _recall?: fhir.FhirElementArgs;
    /**
     * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
     */
    fScore?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.quality.fScore
     */
    _fScore?: fhir.FhirElementArgs;
}
/**
 * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
 */
export declare class SequenceQuality extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * INDEL / SNP / Undefined variant.
     */
    type: fhir.FhirCode<QualityTypeCodeType> | null;
    /**
     * Gold standard sequence used for comparing against.
     */
    standardSequence?: fhir.CodeableConcept | undefined;
    /**
     * Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: fhir.FhirInteger | undefined;
    /**
     * End position of the sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: fhir.FhirInteger | undefined;
    /**
     * The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
     */
    score?: fhir.Quantity | undefined;
    /**
     * Which method is used to get sequence quality.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    truthTP?: fhir.FhirDecimal | undefined;
    /**
     * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    queryTP?: fhir.FhirDecimal | undefined;
    /**
     * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
     */
    truthFN?: fhir.FhirDecimal | undefined;
    /**
     * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
     */
    queryFP?: fhir.FhirDecimal | undefined;
    /**
     * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
     */
    gtFP?: fhir.FhirDecimal | undefined;
    /**
     * QUERY.TP / (QUERY.TP + QUERY.FP).
     */
    precision?: fhir.FhirDecimal | undefined;
    /**
     * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
     */
    recall?: fhir.FhirDecimal | undefined;
    /**
     * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
     */
    fScore?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for SequenceQuality - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SequenceQualityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SequenceRepository type.
 */
export interface SequenceRepositoryArgs extends fhir.BackboneElementArgs {
    /**
     * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
     */
    type: fhir.FhirCode<RepositoryTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.repository.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.repository.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.repository.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
     */
    datasetId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.repository.datasetId
     */
    _datasetId?: fhir.FhirElementArgs;
    /**
     * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
     */
    variantsetId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.repository.variantsetId
     */
    _variantsetId?: fhir.FhirElementArgs;
    /**
     * Id of the read in this external repository.
     */
    readsetId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.repository.readsetId
     */
    _readsetId?: fhir.FhirElementArgs;
}
/**
 * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
 */
export declare class SequenceRepository extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
     */
    type: fhir.FhirCode<RepositoryTypeCodeType> | null;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
     */
    datasetId?: fhir.FhirString | undefined;
    /**
     * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
     */
    variantsetId?: fhir.FhirString | undefined;
    /**
     * Id of the read in this external repository.
     */
    readsetId?: fhir.FhirString | undefined;
    /**
     * Default constructor for SequenceRepository - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SequenceRepositoryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Sequence type.
 */
export interface SequenceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Sequence" | undefined;
    /**
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
     */
    coordinateSystem: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.coordinateSystem
     */
    _coordinateSystem?: fhir.FhirElementArgs;
    /**
     * The patient whose sequencing results are described by this resource.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * Specimen used for sequencing.
     */
    specimen?: fhir.ReferenceArgs | undefined;
    /**
     * The method for sequencing, for example, chip information.
     */
    device?: fhir.ReferenceArgs | undefined;
    /**
     * The organization or lab that should be responsible for this result.
     */
    performer?: fhir.ReferenceArgs | undefined;
    /**
     * The number of copies of the seqeunce of interest. (RNASeq).
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
     */
    referenceSeq?: fhir.SequenceReferenceSeqArgs | undefined;
    /**
     * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
     */
    variant?: fhir.SequenceVariantArgs[] | undefined;
    /**
     * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall starts from referenceSeq.windowStart and end by referenceSeq.windowEnd.
     */
    observedSeq?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Sequence.observedSeq
     */
    _observedSeq?: fhir.FhirElementArgs;
    /**
     * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality?: fhir.SequenceQualityArgs[] | undefined;
    /**
     * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
     */
    readCoverage?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Sequence.readCoverage
     */
    _readCoverage?: fhir.FhirElementArgs;
    /**
     * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
     */
    repository?: fhir.SequenceRepositoryArgs[] | undefined;
    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Raw data describing a biological sequence.
 */
export declare class Sequence extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Sequence";
    /**
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier: fhir.Identifier[];
    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: fhir.FhirCode | undefined;
    /**
     * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
     */
    coordinateSystem: fhir.FhirInteger | null;
    /**
     * The patient whose sequencing results are described by this resource.
     */
    patient?: fhir.Reference | undefined;
    /**
     * Specimen used for sequencing.
     */
    specimen?: fhir.Reference | undefined;
    /**
     * The method for sequencing, for example, chip information.
     */
    device?: fhir.Reference | undefined;
    /**
     * The organization or lab that should be responsible for this result.
     */
    performer?: fhir.Reference | undefined;
    /**
     * The number of copies of the seqeunce of interest. (RNASeq).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
     */
    referenceSeq?: fhir.SequenceReferenceSeq | undefined;
    /**
     * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
     */
    variant: fhir.SequenceVariant[];
    /**
     * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall starts from referenceSeq.windowStart and end by referenceSeq.windowEnd.
     */
    observedSeq?: fhir.FhirString | undefined;
    /**
     * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality: fhir.SequenceQuality[];
    /**
     * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
     */
    readCoverage?: fhir.FhirInteger | undefined;
    /**
     * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
     */
    repository: fhir.SequenceRepository[];
    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer: fhir.Reference[];
    /**
     * Default constructor for Sequence - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SequenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Sequence.d.ts.map