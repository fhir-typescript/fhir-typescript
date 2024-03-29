// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/published-in-type|4.3.0

/**
 * The type of publication such as book, database, or journal.
 */
export const PublishedInTypeCodes = {
  /**
   * D001877: Non-periodical written or printed works consisting of sheets of pages fastened or bound together within covers.
   */
  Book: "D001877",
  /**
   * D019991: A structured file of information or a set of logically related data stored and retrieved using computer-based means.
   */
  Database: "D019991",
  /**
   * D020492: Publication intended to be issued on an ongoing basis, generally more frequently than annually, containing separate articles, stories, or writings.
   */
  Periodical: "D020492",
  /**
   * D064886: Works consisting of organized collections of data, which have been stored permanently in a formalized manner suitable for communication, interpretation, or processing.
   */
  Dataset: "D064886",
} as const;

/**
 * The type of publication such as book, database, or journal.
 */
export type PublishedInTypeCodeType = typeof PublishedInTypeCodes[keyof typeof PublishedInTypeCodes];
