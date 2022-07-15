import { CodingArgs } from '../fhir/Coding.js';
/**
 * This example value set defines a set of codes that can be used to indicate the purpose for which you would contact a contact party.
 */
export declare type ContactentityTypeCodingType = {
    /**
     * ADMIN: Contact details for administrative enquiries.
     */
    Administrative: CodingArgs;
    /**
     * BILL: Contact details for information regarding to billing/general finance enquiries.
     */
    Billing: CodingArgs;
    /**
     * HR: Contact details for issues related to Human Resources, such as staff matters, OH&amp;S etc.
     */
    HumanResource: CodingArgs;
    /**
     * PATINF: Generic information contact for patients.
     */
    Patient: CodingArgs;
    /**
     * PAYOR: Contact details for dealing with issues related to insurance claims/adjudication/payment.
     */
    Payor: CodingArgs;
    /**
     * PRESS: Dedicated contact point for matters relating to press enquiries.
     */
    Press: CodingArgs;
};
/**
 * This example value set defines a set of codes that can be used to indicate the purpose for which you would contact a contact party.
 */
export declare const ContactentityTypeCodings: ContactentityTypeCodingType;
//# sourceMappingURL=ContactentityTypeCodings.d.ts.map