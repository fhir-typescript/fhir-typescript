import { CodingArgs } from '../fhir/Coding.js';
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export declare type ServiceReferralMethodCodingType = {
    /**
     * elec: Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages.
     */
    SecureMessaging: CodingArgs;
    /**
     * fax: Referrals may be accepted by fax.
     */
    Fax: CodingArgs;
    /**
     * mail: Referrals may be accepted via regular postage (or hand delivered).
     */
    Mail: CodingArgs;
    /**
     * phone: Referrals may be accepted over the phone from a practitioner.
     */
    Phone: CodingArgs;
    /**
     * semail: Referrals may be accepted via a secure email. To send please encrypt with the services public key.
     */
    SecureEmail: CodingArgs;
};
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export declare const ServiceReferralMethodCodings: ServiceReferralMethodCodingType;
//# sourceMappingURL=ServiceReferralMethodCodings.d.ts.map