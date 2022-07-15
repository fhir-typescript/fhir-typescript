import { CodingArgs } from '../fhir/Coding.js';
/**
 * Telecommunications form for contact point
 */
export declare type ContactPointSystemCodingType = {
    /**
     * email: The value is an email address.
     */
    Email: CodingArgs;
    /**
     * fax: The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    Fax: CodingArgs;
    /**
     * other: A contact that is not a phone, fax, or email address. The format of the value SHOULD be a URL. This is intended for various personal contacts including blogs, Twitter, Facebook, etc. Do not use for email addresses. If this is not a URL, then it will require human interpretation.
     */
    URL: CodingArgs;
    /**
     * pager: The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.
     */
    Pager: CodingArgs;
    /**
     * phone: The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    Phone: CodingArgs;
};
/**
 * Telecommunications form for contact point
 */
export declare const ContactPointSystemCodings: ContactPointSystemCodingType;
//# sourceMappingURL=ContactPointSystemCodings.d.ts.map