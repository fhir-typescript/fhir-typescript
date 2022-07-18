// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/media-type|4.3.0

/**
 * Codes for high level media categories.
 */
export const MediaTypeCodes = {
  /**
   * audio: The media consists of a sound recording
   */
  Audio: "audio",
  /**
   * image: The media consists of one or more unmoving images, including photographs, computer-generated graphs and charts, and scanned documents
   */
  Image: "image",
  /**
   * video: The media consists of a series of frames that capture a moving image
   */
  Video: "video",
} as const;

/**
 * Codes for high level media categories.
 */
export type MediaTypeCodeType = typeof MediaTypeCodes[keyof typeof MediaTypeCodes];