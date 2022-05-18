import { Coding } from '../fhir/Coding.js';
/**
 * The use of a human name.
 */
export declare const NameUseCodings: {
    /**
     * anonymous: Anonymous assigned name, alias, or pseudonym (used to protect a person's identity for privacy reasons).
     */
    readonly Anonymous: Coding;
    /**
     * maiden: A name used prior to changing name because of marriage. This name use is for use by applications that collect and store names that were used prior to a marriage. Marriage naming customs vary greatly around the world, and are constantly changing. This term is not gender specific. The use of this term does not imply any particular history for a person's name.
     */
    readonly NameChangedForMarriage: Coding;
    /**
     * nickname: A name that is used to address the person in an informal manner, but is not part of their formal or usual name.
     */
    readonly Nickname: Coding;
    /**
     * official: The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called "legal name".
     */
    readonly Official: Coding;
    /**
     * old: This name is no longer in use (or was never correct, but retained for records).
     */
    readonly Old: Coding;
    /**
     * temp: A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations.
     */
    readonly Temp: Coding;
    /**
     * usual: Known as/conventional/the one you normally use.
     */
    readonly Usual: Coding;
};
/**
 * The use of a human name.
 */
export declare type NameUseCodingType = typeof NameUseCodings;
//# sourceMappingURL=NameUseCodings.d.ts.map