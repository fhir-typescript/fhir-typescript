/**
 * Citation artifact classifier
 */
export declare const CitationArtifactClassifierCodes: {
    /**
     * 68059040: Used with articles which include video files or clips, or for articles which are entirely video.
     */
    readonly VideoAudioMedia: "68059040";
    /**
     * audio: The article cited is an audio file.
     */
    readonly AudioFile: "audio";
    /**
     * common-share: Citation Resource containing value added data that is openly shared
     */
    readonly CommonShare: "common-share";
    /**
     * D000076942: Scientific manuscript made available prior to PEER REVIEW.
     */
    readonly Preprint: "D000076942";
    /**
     * D001877: Non-periodical written or printed works consisting of sheets of pages fastened or bound together within covers.
     */
    readonly Book: "D001877";
    /**
     * D016420: Comment
     */
    readonly Comment: "D016420";
    /**
     * D016422: Letter
     */
    readonly Letter: "D016422";
    /**
     * D016425: Published Erratum
     */
    readonly PublishedErratum: "D016425";
    /**
     * D016428: Journal Article
     */
    readonly JournalArticle: "D016428";
    /**
     * D019991: A structured file of information or a set of logically related data stored and retrieved using computer-based means.
     */
    readonly Database: "D019991";
    /**
     * D064886: Works consisting of organized collections of data, which have been stored permanently in a formalized manner suitable for communication, interpretation, or processing.
     */
    readonly Dataset: "D064886";
    /**
     * Electronic: the journal is published in electronic format only
     */
    readonly Electronic: "Electronic";
    /**
     * Electronic-eCollection: used for electronic-only journals that publish individual articles first and then later collect them into an "issue" date that is typically called an eCollection.
     */
    readonly ElectronicECollection: "Electronic-eCollection";
    /**
     * Electronic-Print: the journal is published first in electronic format followed by print (this value is currently used for just one journal, Nucleic Acids Research)
     */
    readonly ElectronicPrint: "Electronic-Print";
    /**
     * executable-app: Executable app
     */
    readonly ExecutableApp: "executable-app";
    /**
     * fhir-resource: The article cited is a FHIR resource.
     */
    readonly FHIRResource: "fhir-resource";
    /**
     * image: The article cited is an audio file.
     */
    readonly ImageFile: "image";
    /**
     * machine-code: The article cited is machine code.
     */
    readonly MachineCode: "machine-code";
    /**
     * medline-base: Citation Resource containing only data from Medline
     */
    readonly MedlineBase: "medline-base";
    /**
     * Print: the journal is published in print format only
     */
    readonly Print: "Print";
    /**
     * Print-Electronic: the journal is published in both print and electronic format
     */
    readonly PrintElectronic: "Print-Electronic";
    /**
     * project-specific: Citation Resource containing value added data specific to a project
     */
    readonly ProjectSpecific: "project-specific";
    /**
     * protocol: The article cited is the protocol of an activity and not the results or findings.
     */
    readonly Protocol: "protocol";
    /**
     * webpage: Webpage
     */
    readonly Webpage: "webpage";
};
/**
 * Citation artifact classifier
 */
export declare type CitationArtifactClassifierCodeType = typeof CitationArtifactClassifierCodes[keyof typeof CitationArtifactClassifierCodes];
//# sourceMappingURL=CitationArtifactClassifierCodes.d.ts.map