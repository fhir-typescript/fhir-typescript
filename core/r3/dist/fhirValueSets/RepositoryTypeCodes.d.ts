/**
 * Type for access of external URI
 */
export declare const RepositoryTypeCodes: {
    /**
     * directlink: When URL is clicked, the resource can be seen directly (by webpage or by download link format)
     */
    readonly ClickAndSee: "directlink";
    /**
     * login: When logged into the website, the resource can be seen.
     */
    readonly ResultCannotBeAccessUnlessAnAccountIsLoggedIn: "login";
    /**
     * oauth: When logged in and  follow the API in the website related with URL, the resource can be seen.
     */
    readonly ResultNeedToBeFetchedWithAPIAndNeedLOGINOrCookiesAreRequiredWhenVisitingTheLinkOfResource: "oauth";
    /**
     * openapi: When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format)
     */
    readonly TheURLIsTheRESTfulOrOtherKindOfAPIThatCanAccessToTheResult: "openapi";
    /**
     * other: Some other complicated or particular way to get resource from URL.
     */
    readonly SomeOtherComplicatedOrParticularWayToGetResourceFromURL: "other";
};
/**
 * Type for access of external URI
 */
export declare type RepositoryTypeCodeType = typeof RepositoryTypeCodes[keyof typeof RepositoryTypeCodes];
//# sourceMappingURL=RepositoryTypeCodes.d.ts.map