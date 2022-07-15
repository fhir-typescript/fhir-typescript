import { CodingArgs } from '../fhir/Coding.js';
/**
 * Citation artifact classifier
 */
export declare type CitationArtifactClassifierCodingType = {
    /**
     * 68059040: Used with articles which include video files or clips, or for articles which are entirely video.
     */
    VideoAudioMedia: CodingArgs;
    /**
     * audio: The article cited is an audio file.
     */
    AudioFile: CodingArgs;
    /**
     * common-share: Citation Resource containing value added data that is openly shared
     */
    CommonShare: CodingArgs;
    /**
     * D000076942: Scientific manuscript made available prior to PEER REVIEW.
     */
    Preprint: CodingArgs;
    /**
     * D001877: Non-periodical written or printed works consisting of sheets of pages fastened or bound together within covers.
     */
    Book: CodingArgs;
    /**
     * D016420: Comment
     */
    Comment: CodingArgs;
    /**
     * D016422: Letter
     */
    Letter: CodingArgs;
    /**
     * D016425: Published Erratum
     */
    PublishedErratum: CodingArgs;
    /**
     * D016428: Journal Article
     */
    JournalArticle: CodingArgs;
    /**
     * D019991: A structured file of information or a set of logically related data stored and retrieved using computer-based means.
     */
    Database: CodingArgs;
    /**
     * D064886: Works consisting of organized collections of data, which have been stored permanently in a formalized manner suitable for communication, interpretation, or processing.
     */
    Dataset: CodingArgs;
    /**
     * Electronic: the journal is published in electronic format only
     */
    Electronic: CodingArgs;
    /**
     * Electronic-eCollection: used for electronic-only journals that publish individual articles first and then later collect them into an "issue" date that is typically called an eCollection.
     */
    ElectronicECollection: CodingArgs;
    /**
     * Electronic-Print: the journal is published first in electronic format followed by print (this value is currently used for just one journal, Nucleic Acids Research)
     */
    ElectronicPrint: CodingArgs;
    /**
     * executable-app: Executable app
     */
    ExecutableApp: CodingArgs;
    /**
     * fhir-resource: The article cited is a FHIR resource.
     */
    FHIRResource: CodingArgs;
    /**
     * image: The article cited is an audio file.
     */
    ImageFile: CodingArgs;
    /**
     * machine-code: The article cited is machine code.
     */
    MachineCode: CodingArgs;
    /**
     * medline-base: Citation Resource containing only data from Medline
     */
    MedlineBase: CodingArgs;
    /**
     * Print: the journal is published in print format only
     */
    Print: CodingArgs;
    /**
     * Print-Electronic: the journal is published in both print and electronic format
     */
    PrintElectronic: CodingArgs;
    /**
     * project-specific: Citation Resource containing value added data specific to a project
     */
    ProjectSpecific: CodingArgs;
    /**
     * protocol: The article cited is the protocol of an activity and not the results or findings.
     */
    Protocol: CodingArgs;
    /**
     * webpage: Webpage
     */
    Webpage: CodingArgs;
};
/**
 * Citation artifact classifier
 */
export declare const CitationArtifactClassifierCodings: CitationArtifactClassifierCodingType;
//# sourceMappingURL=CitationArtifactClassifierCodings.d.ts.map