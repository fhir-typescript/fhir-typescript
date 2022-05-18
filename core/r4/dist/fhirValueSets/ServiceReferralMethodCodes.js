/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/service-referral-method|4.0.1
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
var ServiceReferralMethodCodes = {
    /**
     * elec: Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages.
     */
    SecureMessaging: "elec",
    /**
     * fax: Referrals may be accepted by fax.
     */
    Fax: "fax",
    /**
     * mail: Referrals may be accepted via regular postage (or hand delivered).
     */
    Mail: "mail",
    /**
     * phone: Referrals may be accepted over the phone from a practitioner.
     */
    Phone: "phone",
    /**
     * semail: Referrals may be accepted via a secure email. To send please encrypt with the services public key.
     */
    SecureEmail: "semail",
};

export { ServiceReferralMethodCodes };
//# sourceMappingURL=ServiceReferralMethodCodes.js.map
