import { Coding } from '../fhir/Coding.js';
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export declare const ServiceReferralMethodCodings: {
    /**
     * elec: Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages.
     */
    readonly SecureMessaging: Coding;
    /**
     * fax: Referrals may be accepted by fax.
     */
    readonly Fax: Coding;
    /**
     * mail: Referrals may be accepted via regular postage (or hand delivered).
     */
    readonly Mail: Coding;
    /**
     * phone: Referrals may be accepted over the phone from a practitioner.
     */
    readonly Phone: Coding;
    /**
     * semail: Referrals may be accepted via a secure email. To send please encrypt with the services public key.
     */
    readonly SecureEmail: Coding;
};
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export declare type ServiceReferralMethodCodingType = typeof ServiceReferralMethodCodings;
//# sourceMappingURL=ServiceReferralMethodCodings.d.ts.map