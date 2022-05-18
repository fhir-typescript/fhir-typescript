import { Coding } from '../fhir/Coding.js';
/**
 * Telecommunications form for contact point.
 */
export declare const ContactPointSystemCodings: {
    /**
     * email: The value is an email address.
     */
    readonly Email: Coding;
    /**
     * fax: The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    readonly Fax: Coding;
    /**
     * other: A contact that is not a phone, fax, page or email address and is not expressible as a URL.  E.g. Internal mail address.  This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.)  Extensions may be used to distinguish "other" contact types.
     */
    readonly Other: Coding;
    /**
     * pager: The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.
     */
    readonly Pager: Coding;
    /**
     * phone: The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    readonly Phone: Coding;
    /**
     * sms: A contact that can be used for sending an sms message (e.g. mobile phones, some landlines).
     */
    readonly SMS: Coding;
    /**
     * url: A contact that is not a phone, fax, pager or email address and is expressed as a URL.  This is intended for various institutional or personal contacts including web sites, blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.
     */
    readonly URL: Coding;
};
/**
 * Telecommunications form for contact point.
 */
export declare type ContactPointSystemCodingType = typeof ContactPointSystemCodings;
//# sourceMappingURL=ContactPointSystemCodings.d.ts.map