// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/dicm-405-mediatype|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Media Type Code
 */
export const Dicm405MediatypeCodings = {
  /**
   * 110010: Film type of output
   */
  Film: new Coding({
    display: "Film",
    code: "110010",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110030: A device that connects using the USB hard drive interface. These may be USB-Sticks, portable hard drives, and other technologies
   */
  USBDiskEmulation: new Coding({
    display: "USB Disk Emulation",
    code: "110030",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110031: Email and email attachments used as a media for data transport
   */
  Email: new Coding({
    display: "Email",
    code: "110031",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110032: CD-R, CD-ROM, and CD-RW media used for data transport
   */
  CD: new Coding({
    display: "CD",
    code: "110032",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110033: DVD, DVD-RAM, and other DVD formatted media used for data transport
   */
  DVD: new Coding({
    display: "DVD",
    code: "110033",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110034: Media that comply with the Compact Flash standard
   */
  CompactFlash: new Coding({
    display: "Compact Flash",
    code: "110034",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110035: Media that comply with the Multi-media Card standard
   */
  MultiMediaCard: new Coding({
    display: "Multi-media Card",
    code: "110035",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110036: Media that comply with the Secure Digital Card standard
   */
  SecureDigitalCard: new Coding({
    display: "Secure Digital Card",
    code: "110036",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110037: URI Identifier for network or other resource, see RFC 3968
   */
  URI: new Coding({
    display: "URI",
    code: "110037",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110038: Any paper or similar document
   */
  PaperDocument: new Coding({
    display: "Paper Document",
    code: "110038",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
} as const;

/**
 * Media Type Code
 */
export type Dicm405MediatypeCodingType = typeof Dicm405MediatypeCodings;
