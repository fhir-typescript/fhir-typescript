// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/repository-type|3.0.2
/**
 * Type for access of external URI
 */
export const RepositoryTypeCodes = {
    /**
     * directlink: When URL is clicked, the resource can be seen directly (by webpage or by download link format)
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
     * openapi: When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format)
     */
    TheURLIsTheRESTfulOrOtherKindOfAPIThatCanAccessToTheResult: "openapi",
    /**
     * other: Some other complicated or particular way to get resource from URL.
     */
    SomeOtherComplicatedOrParticularWayToGetResourceFromURL: "other",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3NpdG9yeVR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvUmVwb3NpdG9yeVR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxvRUFBb0U7QUFFcEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQzs7T0FFRztJQUNILFdBQVcsRUFBRSxZQUFZO0lBQ3pCOztPQUVHO0lBQ0gsNkNBQTZDLEVBQUUsT0FBTztJQUN0RDs7T0FFRztJQUNILHlGQUF5RixFQUFFLE9BQU87SUFDbEc7O09BRUc7SUFDSCwwREFBMEQsRUFBRSxTQUFTO0lBQ3JFOztPQUVHO0lBQ0gsdURBQXVELEVBQUUsT0FBTztDQUN4RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3JlcG9zaXRvcnktdHlwZXwzLjAuMlxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGFjY2VzcyBvZiBleHRlcm5hbCBVUklcclxuICovXHJcbmV4cG9ydCBjb25zdCBSZXBvc2l0b3J5VHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGRpcmVjdGxpbms6IFdoZW4gVVJMIGlzIGNsaWNrZWQsIHRoZSByZXNvdXJjZSBjYW4gYmUgc2VlbiBkaXJlY3RseSAoYnkgd2VicGFnZSBvciBieSBkb3dubG9hZCBsaW5rIGZvcm1hdClcclxuICAgKi9cclxuICBDbGlja0FuZFNlZTogXCJkaXJlY3RsaW5rXCIsXHJcbiAgLyoqXHJcbiAgICogbG9naW46IFdoZW4gbG9nZ2VkIGludG8gdGhlIHdlYnNpdGUsIHRoZSByZXNvdXJjZSBjYW4gYmUgc2Vlbi5cclxuICAgKi9cclxuICBSZXN1bHRDYW5ub3RCZUFjY2Vzc1VubGVzc0FuQWNjb3VudElzTG9nZ2VkSW46IFwibG9naW5cIixcclxuICAvKipcclxuICAgKiBvYXV0aDogV2hlbiBsb2dnZWQgaW4gYW5kICBmb2xsb3cgdGhlIEFQSSBpbiB0aGUgd2Vic2l0ZSByZWxhdGVkIHdpdGggVVJMLCB0aGUgcmVzb3VyY2UgY2FuIGJlIHNlZW4uXHJcbiAgICovXHJcbiAgUmVzdWx0TmVlZFRvQmVGZXRjaGVkV2l0aEFQSUFuZE5lZWRMT0dJTk9yQ29va2llc0FyZVJlcXVpcmVkV2hlblZpc2l0aW5nVGhlTGlua09mUmVzb3VyY2U6IFwib2F1dGhcIixcclxuICAvKipcclxuICAgKiBvcGVuYXBpOiBXaGVuIHRoZSBBUEkgbWV0aG9kIChlLmcuIFtiYXNlX3VybF0vW3BhcmFtZXRlcl0pIHJlbGF0ZWQgd2l0aCB0aGUgVVJMIG9mIHRoZSB3ZWJzaXRlIGlzIGV4ZWN1dGVkLCB0aGUgcmVzb3VyY2UgY2FuIGJlIHNlZW4gZGlyZWN0bHkgKHVzdWFsbHkgaW4gSlNPTiBvciBYTUwgZm9ybWF0KVxyXG4gICAqL1xyXG4gIFRoZVVSTElzVGhlUkVTVGZ1bE9yT3RoZXJLaW5kT2ZBUElUaGF0Q2FuQWNjZXNzVG9UaGVSZXN1bHQ6IFwib3BlbmFwaVwiLFxyXG4gIC8qKlxyXG4gICAqIG90aGVyOiBTb21lIG90aGVyIGNvbXBsaWNhdGVkIG9yIHBhcnRpY3VsYXIgd2F5IHRvIGdldCByZXNvdXJjZSBmcm9tIFVSTC5cclxuICAgKi9cclxuICBTb21lT3RoZXJDb21wbGljYXRlZE9yUGFydGljdWxhcldheVRvR2V0UmVzb3VyY2VGcm9tVVJMOiBcIm90aGVyXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgYWNjZXNzIG9mIGV4dGVybmFsIFVSSVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVwb3NpdG9yeVR5cGVDb2RlVHlwZSA9IHR5cGVvZiBSZXBvc2l0b3J5VHlwZUNvZGVzW2tleW9mIHR5cGVvZiBSZXBvc2l0b3J5VHlwZUNvZGVzXTtcclxuIl19