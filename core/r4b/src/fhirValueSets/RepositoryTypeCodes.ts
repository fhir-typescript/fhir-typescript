// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/repository-type|4.3.0

/**
 * Type for access of external URI.
 */
export const RepositoryTypeCodes = {
  /**
   * directlink: When URL is clicked, the resource can be seen directly (by webpage or by download link format).
   */
  ClickAndSee: "directlink",
  /**
   * login: When logged into the website, the resource can be seen.
   */
  ResultCannotBeAccessUnlessAnAccountIsLoggedIn: "login",
  /**
   * oauth: When logged in and  follow the API in the website related with URL, the resource can be seen.
   */
  ResultNeedToBeFetchedWithAPIAndNeedLOGINOrCookiesAreRequiredWhenVisitingTheLinkOfResource: "oauth",
  /**
   * openapi: When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format).
   */
  TheURLIsTheRESTfulOrOtherKindOfAPIThatCanAccessToTheResult: "openapi",
  /**
   * other: Some other complicated or particular way to get resource from URL.
   */
  SomeOtherComplicatedOrParticularWayToGetResourceFromURL: "other",
} as const;

/**
 * Type for access of external URI.
 */
export type RepositoryTypeCodeType = typeof RepositoryTypeCodes[keyof typeof RepositoryTypeCodes];
