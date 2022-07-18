// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/restful-security-service|4.3.0
/**
 * Types of security services used with FHIR.
 */
export const RestfulSecurityServiceCodes = {
    /**
     * Basic: Basic authentication defined in HTTP specification.
     */
    Basic: "Basic",
    /**
     * Certificates: SSL where client must have a certificate registered with the server.
     */
    Certificates: "Certificates",
    /**
     * Kerberos: see http://www.ietf.org/rfc/rfc4120.txt.
     */
    Kerberos: "Kerberos",
    /**
     * NTLM: Microsoft NTLM Authentication.
     */
    NTLM: "NTLM",
    /**
     * OAuth: OAuth (unspecified version see oauth.net).
     */
    OAuth: "OAuth",
    /**
     * SMART-on-FHIR: OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).
     */
    SMARTOnFHIR: "SMART-on-FHIR",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdGZ1bFNlY3VyaXR5U2VydmljZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9SZXN0ZnVsU2VjdXJpdHlTZXJ2aWNlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsNkVBQTZFO0FBRTdFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUc7SUFDekM7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsWUFBWSxFQUFFLGNBQWM7SUFDNUI7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGVBQWU7Q0FDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVzdGZ1bC1zZWN1cml0eS1zZXJ2aWNlfDQuMy4wXHJcblxyXG4vKipcclxuICogVHlwZXMgb2Ygc2VjdXJpdHkgc2VydmljZXMgdXNlZCB3aXRoIEZISVIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVzdGZ1bFNlY3VyaXR5U2VydmljZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEJhc2ljOiBCYXNpYyBhdXRoZW50aWNhdGlvbiBkZWZpbmVkIGluIEhUVFAgc3BlY2lmaWNhdGlvbi5cclxuICAgKi9cclxuICBCYXNpYzogXCJCYXNpY1wiLFxyXG4gIC8qKlxyXG4gICAqIENlcnRpZmljYXRlczogU1NMIHdoZXJlIGNsaWVudCBtdXN0IGhhdmUgYSBjZXJ0aWZpY2F0ZSByZWdpc3RlcmVkIHdpdGggdGhlIHNlcnZlci5cclxuICAgKi9cclxuICBDZXJ0aWZpY2F0ZXM6IFwiQ2VydGlmaWNhdGVzXCIsXHJcbiAgLyoqXHJcbiAgICogS2VyYmVyb3M6IHNlZSBodHRwOi8vd3d3LmlldGYub3JnL3JmYy9yZmM0MTIwLnR4dC5cclxuICAgKi9cclxuICBLZXJiZXJvczogXCJLZXJiZXJvc1wiLFxyXG4gIC8qKlxyXG4gICAqIE5UTE06IE1pY3Jvc29mdCBOVExNIEF1dGhlbnRpY2F0aW9uLlxyXG4gICAqL1xyXG4gIE5UTE06IFwiTlRMTVwiLFxyXG4gIC8qKlxyXG4gICAqIE9BdXRoOiBPQXV0aCAodW5zcGVjaWZpZWQgdmVyc2lvbiBzZWUgb2F1dGgubmV0KS5cclxuICAgKi9cclxuICBPQXV0aDogXCJPQXV0aFwiLFxyXG4gIC8qKlxyXG4gICAqIFNNQVJULW9uLUZISVI6IE9BdXRoMiB1c2luZyBTTUFSVC1vbi1GSElSIHByb2ZpbGUgKHNlZSBodHRwOi8vZG9jcy5zbWFydGhlYWx0aGl0Lm9yZy8pLlxyXG4gICAqL1xyXG4gIFNNQVJUT25GSElSOiBcIlNNQVJULW9uLUZISVJcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUeXBlcyBvZiBzZWN1cml0eSBzZXJ2aWNlcyB1c2VkIHdpdGggRkhJUi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlc3RmdWxTZWN1cml0eVNlcnZpY2VDb2RlVHlwZSA9IHR5cGVvZiBSZXN0ZnVsU2VjdXJpdHlTZXJ2aWNlQ29kZXNba2V5b2YgdHlwZW9mIFJlc3RmdWxTZWN1cml0eVNlcnZpY2VDb2Rlc107XHJcbiJdfQ==