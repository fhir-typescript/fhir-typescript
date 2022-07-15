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
     * other: A contact that is not a phone, fax, page or email address and is not expressible as a URL.  E.g. Internal mail address.  This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.)  Extensions may be used to distinguish "other" contact types.
     */
    Other: CodingArgs;
    /**
     * pager: The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.
     */
    Pager: CodingArgs;
    /**
     * phone: The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    Phone: CodingArgs;
    /**
     * sms: A contact that can be used for sending an sms message (e.g. mobide phones, some landlines)
     */
    SMS: CodingArgs;
    /**
     * url: A contact that is not a phone, fax, pager or email address and is expressed as a URL.  This is intended for various personal contacts including blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.
     */
    URL: CodingArgs;
};
/**
 * Telecommunications form for contact point
 */
export declare const ContactPointSystemCodings: ContactPointSystemCodingType;
//# sourceMappingURL=ContactPointSystemCodings.d.ts.map