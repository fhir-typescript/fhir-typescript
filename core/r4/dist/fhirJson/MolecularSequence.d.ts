import * as fhir from '../fhirJson.js';
/**
 * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
 */
export interface MolecularSequenceReferenceSeq extends fhir.BackboneElement {
    /**
     * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
     */
    chromosome?: fhir.CodeableConcept | undefined;
    /**
     * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
     */
    genomeBuild?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.genomeBuild
     */
    _genomeBuild?: fhir.FhirElement;
    /**
     * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
     */
    orientation?: 'antisense' | 'sense' | undefined;
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
    referenceSeqString?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.referenceSeqString
     */
    _referenceSeqString?: fhir.FhirElement;
    /**
     * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
     */
    strand?: 'crick' | 'watson' | undefined;
    /**
     * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    windowStart?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.windowStart
     */
    _windowStart?: fhir.FhirElement;
    /**
     * End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    windowEnd?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.windowEnd
     */
    _windowEnd?: fhir.FhirElement;
}
/**
 * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
 */
export interface MolecularSequenceVariant extends fhir.BackboneElement {
    /**
     * Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.start
     */
    _start?: fhir.FhirElement;
    /**
     * End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.end
     */
    _end?: fhir.FhirElement;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    observedAllele?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.observedAllele
     */
    _observedAllele?: fhir.FhirElement;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    referenceAllele?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.referenceAllele
     */
    _referenceAllele?: fhir.FhirElement;
    /**
     * Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
     */
    cigar?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.cigar
     */
    _cigar?: fhir.FhirElement;
    /**
     * A pointer to an Observation containing variant information.
     */
    variantPointer?: fhir.Reference | undefined;
}
/**
 * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
 */
export interface MolecularSequenceQualityRoc extends fhir.BackboneElement {
    /**
     * Invidual data point representing the GQ (genotype quality) score threshold.
     */
    score?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.score
     */
    _score?: (fhir.FhirElement | null)[];
    /**
     * The number of true positives if the GQ score threshold was set to "score" field value.
     */
    numTP?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numTP
     */
    _numTP?: (fhir.FhirElement | null)[];
    /**
     * The number of false positives if the GQ score threshold was set to "score" field value.
     */
    numFP?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numFP
     */
    _numFP?: (fhir.FhirElement | null)[];
    /**
     * The number of false negatives if the GQ score threshold was set to "score" field value.
     */
    numFN?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numFN
     */
    _numFN?: (fhir.FhirElement | null)[];
    /**
     * Calculated precision if the GQ score threshold was set to "score" field value.
     */
    precision?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.precision
     */
    _precision?: (fhir.FhirElement | null)[];
    /**
     * Calculated sensitivity if the GQ score threshold was set to "score" field value.
     */
    sensitivity?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.sensitivity
     */
    _sensitivity?: (fhir.FhirElement | null)[];
    /**
     * Calculated fScore if the GQ score threshold was set to "score" field value.
     */
    fMeasure?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.fMeasure
     */
    _fMeasure?: (fhir.FhirElement | null)[];
}
/**
 * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
 */
export interface MolecularSequenceQuality extends fhir.BackboneElement {
    /**
     * INDEL / SNP / Undefined variant.
     */
    type: 'indel' | 'snp' | 'unknown' | null;
    /**
     * Gold standard sequence used for comparing against.
     */
    standardSequence?: fhir.CodeableConcept | undefined;
    /**
     * Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.start
     */
    _start?: fhir.FhirElement;
    /**
     * End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.end
     */
    _end?: fhir.FhirElement;
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
    truthTP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.truthTP
     */
    _truthTP?: fhir.FhirElement;
    /**
     * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    queryTP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.queryTP
     */
    _queryTP?: fhir.FhirElement;
    /**
     * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
     */
    truthFN?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.truthFN
     */
    _truthFN?: fhir.FhirElement;
    /**
     * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
     */
    queryFP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.queryFP
     */
    _queryFP?: fhir.FhirElement;
    /**
     * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
     */
    gtFP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.gtFP
     */
    _gtFP?: fhir.FhirElement;
    /**
     * QUERY.TP / (QUERY.TP + QUERY.FP).
     */
    precision?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.precision
     */
    _precision?: fhir.FhirElement;
    /**
     * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
     */
    recall?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.recall
     */
    _recall?: fhir.FhirElement;
    /**
     * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
     */
    fScore?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.fScore
     */
    _fScore?: fhir.FhirElement;
    /**
     * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
     */
    roc?: fhir.MolecularSequenceQualityRoc | undefined;
}
/**
 * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
 */
export interface MolecularSequenceRepository extends fhir.BackboneElement {
    /**
     * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
     */
    type: 'directlink' | 'login' | 'oauth' | 'openapi' | 'other' | null;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.url
     */
    _url?: fhir.FhirElement;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.name
     */
    _name?: fhir.FhirElement;
    /**
     * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
     */
    datasetId?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.datasetId
     */
    _datasetId?: fhir.FhirElement;
    /**
     * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
     */
    variantsetId?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.variantsetId
     */
    _variantsetId?: fhir.FhirElement;
    /**
     * Id of the read in this external repository.
     */
    readsetId?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.readsetId
     */
    _readsetId?: fhir.FhirElement;
}
/**
 * Structural variant outer.
 */
export interface MolecularSequenceStructureVariantOuter extends fhir.BackboneElement {
    /**
     * Structural variant outer start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.outer.start
     */
    _start?: fhir.FhirElement;
    /**
     * Structural variant outer end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.outer.end
     */
    _end?: fhir.FhirElement;
}
/**
 * Structural variant inner.
 */
export interface MolecularSequenceStructureVariantInner extends fhir.BackboneElement {
    /**
     * Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.inner.start
     */
    _start?: fhir.FhirElement;
    /**
     * Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.inner.end
     */
    _end?: fhir.FhirElement;
}
/**
 * Information about chromosome structure variation.
 */
export interface MolecularSequenceStructureVariant extends fhir.BackboneElement {
    /**
     * Information about chromosome structure variation DNA change type.
     */
    variantType?: fhir.CodeableConcept | undefined;
    /**
     * Used to indicate if the outer and inner start-end values have the same meaning.
     */
    exact?: boolean | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.exact
     */
    _exact?: fhir.FhirElement;
    /**
     * Length of the variant chromosome.
     */
    length?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.length
     */
    _length?: fhir.FhirElement;
    /**
     * Structural variant outer.
     */
    outer?: fhir.MolecularSequenceStructureVariantOuter | undefined;
    /**
     * Structural variant inner.
     */
    inner?: fhir.MolecularSequenceStructureVariantInner | undefined;
}
/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequence extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MolecularSequence";
    /**
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: 'aa' | 'dna' | 'rna' | undefined;
    /**
     * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
     */
    coordinateSystem: number | null;
    /**
     * Extended properties for primitive element: MolecularSequence.coordinateSystem
     */
    _coordinateSystem?: fhir.FhirElement;
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
    variant?: fhir.MolecularSequenceVariant[] | undefined;
    /**
     * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
     */
    observedSeq?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.observedSeq
     */
    _observedSeq?: fhir.FhirElement;
    /**
     * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality?: fhir.MolecularSequenceQuality[] | undefined;
    /**
     * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
     */
    readCoverage?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.readCoverage
     */
    _readCoverage?: fhir.FhirElement;
    /**
     * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
     */
    repository?: fhir.MolecularSequenceRepository[] | undefined;
    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer?: fhir.Reference[] | undefined;
    /**
     * Information about chromosome structure variation.
     */
    structureVariant?: fhir.MolecularSequenceStructureVariant[] | undefined;
}
//# sourceMappingURL=MolecularSequence.d.ts.map