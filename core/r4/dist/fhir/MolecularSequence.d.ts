import * as fhir from '../fhir.js';
import { OrientationTypeCodeType } from '../fhirValueSets/OrientationTypeCodes.js';
import { StrandTypeCodeType } from '../fhirValueSets/StrandTypeCodes.js';
import { QualityTypeCodeType } from '../fhirValueSets/QualityTypeCodes.js';
import { RepositoryTypeCodeType } from '../fhirValueSets/RepositoryTypeCodes.js';
import { SequenceTypeCodeType } from '../fhirValueSets/SequenceTypeCodes.js';
/**
 * Valid arguments for the MolecularSequenceReferenceSeq type.
 */
export interface MolecularSequenceReferenceSeqArgs extends fhir.BackboneElementArgs {
    /**
     * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
     */
    chromosome?: fhir.CodeableConceptArgs | undefined;
    /**
     * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
     */
    genomeBuild?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.genomeBuild
     */
    _genomeBuild?: fhir.FhirElementArgs;
    /**
     * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
     */
    orientation?: fhir.FhirCode<OrientationTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.orientation
     */
    _orientation?: fhir.FhirElementArgs;
    /**
     * Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
     */
    referenceSeqId?: fhir.CodeableConceptArgs | undefined;
    /**
     * A pointer to another MolecularSequence entity as reference sequence.
     */
    referenceSeqPointer?: fhir.ReferenceArgs | undefined;
    /**
     * A string like "ACGT".
     */
    referenceSeqString?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.referenceSeqString
     */
    _referenceSeqString?: fhir.FhirElementArgs;
    /**
     * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
     */
    strand?: fhir.FhirCode<StrandTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.strand
     */
    _strand?: fhir.FhirElementArgs;
    /**
     * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    windowStart?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.windowStart
     */
    _windowStart?: fhir.FhirElementArgs;
    /**
     * End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    windowEnd?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.windowEnd
     */
    _windowEnd?: fhir.FhirElementArgs;
}
/**
 * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
 */
export declare class MolecularSequenceReferenceSeq extends fhir.BackboneElement {
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
     * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
     */
    orientation?: fhir.FhirCode<OrientationTypeCodeType> | undefined;
    /**
     * Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
     */
    referenceSeqId?: fhir.CodeableConcept | undefined;
    /**
     * A pointer to another MolecularSequence entity as reference sequence.
     */
    referenceSeqPointer?: fhir.Reference | undefined;
    /**
     * A string like "ACGT".
     */
    referenceSeqString?: fhir.FhirString | undefined;
    /**
     * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
     */
    strand?: fhir.FhirCode<StrandTypeCodeType> | undefined;
    /**
     * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    windowStart?: fhir.FhirInteger | undefined;
    /**
     * End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    windowEnd?: fhir.FhirInteger | undefined;
    /**
     * Default constructor for MolecularSequenceReferenceSeq - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MolecularSequenceReferenceSeqArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for orientation (MolecularSequence.referenceSeq.orientation)
     */
    static get orientationRequiredCodes(): {
        readonly AntisenseOrientationOfReferenceSeq: "antisense";
        readonly SenseOrientationOfReferenceSeq: "sense";
    };
    /**
     * Required-bound Value Set for strand (MolecularSequence.referenceSeq.strand)
     */
    static get strandRequiredCodes(): {
        readonly CrickStrandOfReferenceSeq: "crick";
        readonly WatsonStrandOfReferenceSeq: "watson";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MolecularSequenceVariant type.
 */
export interface MolecularSequenceVariantArgs extends fhir.BackboneElementArgs {
    /**
     * Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.end
     */
    _end?: fhir.FhirElementArgs;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    observedAllele?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.observedAllele
     */
    _observedAllele?: fhir.FhirElementArgs;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    referenceAllele?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.referenceAllele
     */
    _referenceAllele?: fhir.FhirElementArgs;
    /**
     * Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
     */
    cigar?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.cigar
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
export declare class MolecularSequenceVariant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: fhir.FhirInteger | undefined;
    /**
     * End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
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
     * Default constructor for MolecularSequenceVariant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MolecularSequenceVariantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MolecularSequenceQualityRoc type.
 */
export interface MolecularSequenceQualityRocArgs extends fhir.BackboneElementArgs {
    /**
     * Invidual data point representing the GQ (genotype quality) score threshold.
     */
    score?: fhir.FhirInteger[] | number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.score
     */
    _score?: (fhir.FhirElementArgs | null)[];
    /**
     * The number of true positives if the GQ score threshold was set to "score" field value.
     */
    numTP?: fhir.FhirInteger[] | number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numTP
     */
    _numTP?: (fhir.FhirElementArgs | null)[];
    /**
     * The number of false positives if the GQ score threshold was set to "score" field value.
     */
    numFP?: fhir.FhirInteger[] | number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numFP
     */
    _numFP?: (fhir.FhirElementArgs | null)[];
    /**
     * The number of false negatives if the GQ score threshold was set to "score" field value.
     */
    numFN?: fhir.FhirInteger[] | number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numFN
     */
    _numFN?: (fhir.FhirElementArgs | null)[];
    /**
     * Calculated precision if the GQ score threshold was set to "score" field value.
     */
    precision?: fhir.FhirDecimal[] | number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.precision
     */
    _precision?: (fhir.FhirElementArgs | null)[];
    /**
     * Calculated sensitivity if the GQ score threshold was set to "score" field value.
     */
    sensitivity?: fhir.FhirDecimal[] | number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.sensitivity
     */
    _sensitivity?: (fhir.FhirElementArgs | null)[];
    /**
     * Calculated fScore if the GQ score threshold was set to "score" field value.
     */
    fMeasure?: fhir.FhirDecimal[] | number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.fMeasure
     */
    _fMeasure?: (fhir.FhirElementArgs | null)[];
}
/**
 * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
 */
export declare class MolecularSequenceQualityRoc extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Invidual data point representing the GQ (genotype quality) score threshold.
     */
    score: fhir.FhirInteger[];
    /**
     * The number of true positives if the GQ score threshold was set to "score" field value.
     */
    numTP: fhir.FhirInteger[];
    /**
     * The number of false positives if the GQ score threshold was set to "score" field value.
     */
    numFP: fhir.FhirInteger[];
    /**
     * The number of false negatives if the GQ score threshold was set to "score" field value.
     */
    numFN: fhir.FhirInteger[];
    /**
     * Calculated precision if the GQ score threshold was set to "score" field value.
     */
    precision: fhir.FhirDecimal[];
    /**
     * Calculated sensitivity if the GQ score threshold was set to "score" field value.
     */
    sensitivity: fhir.FhirDecimal[];
    /**
     * Calculated fScore if the GQ score threshold was set to "score" field value.
     */
    fMeasure: fhir.FhirDecimal[];
    /**
     * Default constructor for MolecularSequenceQualityRoc - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MolecularSequenceQualityRocArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MolecularSequenceQuality type.
 */
export interface MolecularSequenceQualityArgs extends fhir.BackboneElementArgs {
    /**
     * INDEL / SNP / Undefined variant.
     */
    type: fhir.FhirCode<QualityTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.type
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
     * Extended properties for primitive element: MolecularSequence.quality.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.end
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
     * Extended properties for primitive element: MolecularSequence.quality.truthTP
     */
    _truthTP?: fhir.FhirElementArgs;
    /**
     * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    queryTP?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.queryTP
     */
    _queryTP?: fhir.FhirElementArgs;
    /**
     * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
     */
    truthFN?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.truthFN
     */
    _truthFN?: fhir.FhirElementArgs;
    /**
     * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
     */
    queryFP?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.queryFP
     */
    _queryFP?: fhir.FhirElementArgs;
    /**
     * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
     */
    gtFP?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.gtFP
     */
    _gtFP?: fhir.FhirElementArgs;
    /**
     * QUERY.TP / (QUERY.TP + QUERY.FP).
     */
    precision?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.precision
     */
    _precision?: fhir.FhirElementArgs;
    /**
     * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
     */
    recall?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.recall
     */
    _recall?: fhir.FhirElementArgs;
    /**
     * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
     */
    fScore?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.fScore
     */
    _fScore?: fhir.FhirElementArgs;
    /**
     * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
     */
    roc?: fhir.MolecularSequenceQualityRocArgs | undefined;
}
/**
 * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
 */
export declare class MolecularSequenceQuality extends fhir.BackboneElement {
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
     * End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
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
     * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
     */
    roc?: fhir.MolecularSequenceQualityRoc | undefined;
    /**
     * Default constructor for MolecularSequenceQuality - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MolecularSequenceQualityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (MolecularSequence.quality.type)
     */
    static get typeRequiredCodes(): {
        readonly INDELComparison: "indel";
        readonly SNPComparison: "snp";
        readonly UNKNOWNComparison: "unknown";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MolecularSequenceRepository type.
 */
export interface MolecularSequenceRepositoryArgs extends fhir.BackboneElementArgs {
    /**
     * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
     */
    type: fhir.FhirCode<RepositoryTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
     */
    datasetId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.datasetId
     */
    _datasetId?: fhir.FhirElementArgs;
    /**
     * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
     */
    variantsetId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.variantsetId
     */
    _variantsetId?: fhir.FhirElementArgs;
    /**
     * Id of the read in this external repository.
     */
    readsetId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.readsetId
     */
    _readsetId?: fhir.FhirElementArgs;
}
/**
 * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
 */
export declare class MolecularSequenceRepository extends fhir.BackboneElement {
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
     * Default constructor for MolecularSequenceRepository - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MolecularSequenceRepositoryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (MolecularSequence.repository.type)
     */
    static get typeRequiredCodes(): {
        readonly ClickAndSee: "directlink";
        readonly ResultCannotBeAccessUnlessAnAccountIsLoggedIn: "login";
        readonly ResultNeedToBeFetchedWithAPIAndNeedLOGINOrCookiesAreRequiredWhenVisitingTheLinkOfResource: "oauth";
        readonly TheURLIsTheRESTfulOrOtherKindOfAPIThatCanAccessToTheResult: "openapi";
        readonly SomeOtherComplicatedOrParticularWayToGetResourceFromURL: "other";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MolecularSequenceStructureVariantOuter type.
 */
export interface MolecularSequenceStructureVariantOuterArgs extends fhir.BackboneElementArgs {
    /**
     * Structural variant outer start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.outer.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * Structural variant outer end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.outer.end
     */
    _end?: fhir.FhirElementArgs;
}
/**
 * Structural variant outer.
 */
export declare class MolecularSequenceStructureVariantOuter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Structural variant outer start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: fhir.FhirInteger | undefined;
    /**
     * Structural variant outer end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: fhir.FhirInteger | undefined;
    /**
     * Default constructor for MolecularSequenceStructureVariantOuter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MolecularSequenceStructureVariantOuterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MolecularSequenceStructureVariantInner type.
 */
export interface MolecularSequenceStructureVariantInnerArgs extends fhir.BackboneElementArgs {
    /**
     * Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.inner.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.inner.end
     */
    _end?: fhir.FhirElementArgs;
}
/**
 * Structural variant inner.
 */
export declare class MolecularSequenceStructureVariantInner extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: fhir.FhirInteger | undefined;
    /**
     * Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: fhir.FhirInteger | undefined;
    /**
     * Default constructor for MolecularSequenceStructureVariantInner - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MolecularSequenceStructureVariantInnerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MolecularSequenceStructureVariant type.
 */
export interface MolecularSequenceStructureVariantArgs extends fhir.BackboneElementArgs {
    /**
     * Information about chromosome structure variation DNA change type.
     */
    variantType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Used to indicate if the outer and inner start-end values have the same meaning.
     */
    exact?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.exact
     */
    _exact?: fhir.FhirElementArgs;
    /**
     * Length of the variant chromosome.
     */
    length?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.length
     */
    _length?: fhir.FhirElementArgs;
    /**
     * Structural variant outer.
     */
    outer?: fhir.MolecularSequenceStructureVariantOuterArgs | undefined;
    /**
     * Structural variant inner.
     */
    inner?: fhir.MolecularSequenceStructureVariantInnerArgs | undefined;
}
/**
 * Information about chromosome structure variation.
 */
export declare class MolecularSequenceStructureVariant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Information about chromosome structure variation DNA change type.
     */
    variantType?: fhir.CodeableConcept | undefined;
    /**
     * Used to indicate if the outer and inner start-end values have the same meaning.
     */
    exact?: fhir.FhirBoolean | undefined;
    /**
     * Length of the variant chromosome.
     */
    length?: fhir.FhirInteger | undefined;
    /**
     * Structural variant outer.
     */
    outer?: fhir.MolecularSequenceStructureVariantOuter | undefined;
    /**
     * Structural variant inner.
     */
    inner?: fhir.MolecularSequenceStructureVariantInner | undefined;
    /**
     * Default constructor for MolecularSequenceStructureVariant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MolecularSequenceStructureVariantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MolecularSequence type.
 */
export interface MolecularSequenceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MolecularSequence" | undefined;
    /**
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: fhir.FhirCode<SequenceTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
     */
    coordinateSystem: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.coordinateSystem
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
     * The number of copies of the sequence of interest. (RNASeq).
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
     */
    referenceSeq?: fhir.MolecularSequenceReferenceSeqArgs | undefined;
    /**
     * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
     */
    variant?: fhir.MolecularSequenceVariantArgs[] | undefined;
    /**
     * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
     */
    observedSeq?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.observedSeq
     */
    _observedSeq?: fhir.FhirElementArgs;
    /**
     * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality?: fhir.MolecularSequenceQualityArgs[] | undefined;
    /**
     * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
     */
    readCoverage?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.readCoverage
     */
    _readCoverage?: fhir.FhirElementArgs;
    /**
     * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
     */
    repository?: fhir.MolecularSequenceRepositoryArgs[] | undefined;
    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer?: fhir.ReferenceArgs[] | undefined;
    /**
     * Information about chromosome structure variation.
     */
    structureVariant?: fhir.MolecularSequenceStructureVariantArgs[] | undefined;
}
/**
 * Raw data describing a biological sequence.
 */
export declare class MolecularSequence extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MolecularSequence";
    /**
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier: fhir.Identifier[];
    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: fhir.FhirCode<SequenceTypeCodeType> | undefined;
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
     * The number of copies of the sequence of interest. (RNASeq).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
     */
    referenceSeq?: fhir.MolecularSequenceReferenceSeq | undefined;
    /**
     * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
     */
    variant: fhir.MolecularSequenceVariant[];
    /**
     * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
     */
    observedSeq?: fhir.FhirString | undefined;
    /**
     * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality: fhir.MolecularSequenceQuality[];
    /**
     * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
     */
    readCoverage?: fhir.FhirInteger | undefined;
    /**
     * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
     */
    repository: fhir.MolecularSequenceRepository[];
    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer: fhir.Reference[];
    /**
     * Information about chromosome structure variation.
     */
    structureVariant: fhir.MolecularSequenceStructureVariant[];
    /**
     * Default constructor for MolecularSequence - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MolecularSequenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (MolecularSequence.type)
     */
    static get typeRequiredCodes(): {
        readonly AASequence: "aa";
        readonly DNASequence: "dna";
        readonly RNASequence: "rna";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MolecularSequence.d.ts.map