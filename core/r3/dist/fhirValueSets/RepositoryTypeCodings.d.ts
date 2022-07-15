import { CodingArgs } from '../fhir/Coding.js';
/**
 * Type for access of external URI
 */
export declare type RepositoryTypeCodingType = {
    /**
     * directlink: When URL is clicked, the resource can be seen directly (by webpage or by download link format)
     */
    ClickAndSee: CodingArgs;
    /**
     * login: When logged into the website, the resource can be seen.
     */
    ResultCannotBeAccessUnlessAnAccountIsLoggedIn: CodingArgs;
    /**
     * oauth: When logged in and  follow the API in the website related with URL, the resource can be seen.
     */
    ResultNeedToBeFetchedWithAPIAndNeedLOGINOrCookiesAreRequiredWhenVisitingTheLinkOfResource: CodingArgs;
    /**
     * openapi: When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format)
     */
    TheURLIsTheRESTfulOrOtherKindOfAPIThatCanAccessToTheResult: CodingArgs;
    /**
     * other: Some other complicated or particular way to get resource from URL.
     */
    SomeOtherComplicatedOrParticularWayToGetResourceFromURL: CodingArgs;
};
/**
 * Type for access of external URI
 */
export declare const RepositoryTypeCodings: RepositoryTypeCodingType;
//# sourceMappingURL=RepositoryTypeCodings.d.ts.map