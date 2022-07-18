// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/digital-media-type|3.0.2

/**
 * Whether the media is a photo, video, or audio
 */
export const DigitalMediaTypeCodes = {
  /**
   * audio: The media consists of a sound recording
   */
  Audio: "audio",
  /**
   * photo: The media consists of one or more unmoving images, including photographs, computer-generated graphs and charts, and scanned documents
   */
  Photo: "photo",
  /**
   * video: The media consists of a series of frames that capture a moving image
   */
  Video: "video",
} as const;

/**
 * Whether the media is a photo, video, or audio
 */
export type DigitalMediaTypeCodeType = typeof DigitalMediaTypeCodes[keyof typeof DigitalMediaTypeCodes];