// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/citation-artifact-classifier|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Citation artifact classifier
 */
export type CitationArtifactClassifierCodingType = {
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
}

/**
 * Citation artifact classifier
 */
export const CitationArtifactClassifierCodings:CitationArtifactClassifierCodingType = {
  /**
   * 68059040: Used with articles which include video files or clips, or for articles which are entirely video.
   */
  VideoAudioMedia: {
    display: "Video-Audio Media",
    code: "68059040",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * audio: The article cited is an audio file.
   */
  AudioFile: {
    display: "Audio file",
    code: "audio",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * common-share: Citation Resource containing value added data that is openly shared
   */
  CommonShare: {
    display: "Common Share",
    code: "common-share",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * D000076942: Scientific manuscript made available prior to PEER REVIEW.
   */
  Preprint: {
    display: "Preprint",
    code: "D000076942",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * D001877: Non-periodical written or printed works consisting of sheets of pages fastened or bound together within covers.
   */
  Book: {
    display: "Book",
    code: "D001877",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * D016420: Comment
   */
  Comment: {
    display: "Comment",
    code: "D016420",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * D016422: Letter
   */
  Letter: {
    display: "Letter",
    code: "D016422",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * D016425: Published Erratum
   */
  PublishedErratum: {
    display: "Published Erratum",
    code: "D016425",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * D016428: Journal Article
   */
  JournalArticle: {
    display: "Journal Article",
    code: "D016428",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * D019991: A structured file of information or a set of logically related data stored and retrieved using computer-based means.
   */
  Database: {
    display: "Database",
    code: "D019991",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * D064886: Works consisting of organized collections of data, which have been stored permanently in a formalized manner suitable for communication, interpretation, or processing.
   */
  Dataset: {
    display: "Dataset",
    code: "D064886",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * Electronic: the journal is published in electronic format only
   */
  Electronic: {
    display: "Electronic",
    code: "Electronic",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * Electronic-eCollection: used for electronic-only journals that publish individual articles first and then later collect them into an "issue" date that is typically called an eCollection.
   */
  ElectronicECollection: {
    display: "Electronic-eCollection",
    code: "Electronic-eCollection",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * Electronic-Print: the journal is published first in electronic format followed by print (this value is currently used for just one journal, Nucleic Acids Research)
   */
  ElectronicPrint: {
    display: "Electronic-Print",
    code: "Electronic-Print",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * executable-app: Executable app
   */
  ExecutableApp: {
    display: "Executable app",
    code: "executable-app",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * fhir-resource: The article cited is a FHIR resource.
   */
  FHIRResource: {
    display: "FHIR Resource",
    code: "fhir-resource",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * image: The article cited is an audio file.
   */
  ImageFile: {
    display: "Image file",
    code: "image",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * machine-code: The article cited is machine code.
   */
  MachineCode: {
    display: "Machine code",
    code: "machine-code",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * medline-base: Citation Resource containing only data from Medline
   */
  MedlineBase: {
    display: "Medline Base",
    code: "medline-base",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * Print: the journal is published in print format only
   */
  Print: {
    display: "Print",
    code: "Print",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * Print-Electronic: the journal is published in both print and electronic format
   */
  PrintElectronic: {
    display: "Print Electronic",
    code: "Print-Electronic",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * project-specific: Citation Resource containing value added data specific to a project
   */
  ProjectSpecific: {
    display: "Project Specific",
    code: "project-specific",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * protocol: The article cited is the protocol of an activity and not the results or findings.
   */
  Protocol: {
    display: "Protocol",
    code: "protocol",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
  /**
   * webpage: Webpage
   */
  Webpage: {
    display: "Webpage",
    code: "webpage",
    system: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  },
} as const;
