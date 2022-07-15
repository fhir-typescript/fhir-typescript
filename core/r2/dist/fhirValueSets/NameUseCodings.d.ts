import { CodingArgs } from '../fhir/Coding.js';
/**
 * The use of a human name
 */
export declare type NameUseCodingType = {
    /**
     * anonymous: Anonymous assigned name, alias, or pseudonym (used to protect a person's identity for privacy reasons)
     */
    Anonymous: CodingArgs;
    /**
     * maiden: A name used prior to marriage. Marriage naming customs vary greatly around the world. This name use is for use by applications that collect and store "maiden" names. Though the concept of maiden name is often gender specific, the use of this term is not gender specific. The use of this term does not imply any particular history for a person's name, nor should the maiden name be determined algorithmically.
     */
    Maiden: CodingArgs;
    /**
     * nickname: A name that is used to address the person in an informal manner, but is not part of their formal or usual name
     */
    Nickname: CodingArgs;
    /**
     * official: The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called "legal name".
     */
    Official: CodingArgs;
    /**
     * old: This name is no longer in use (or was never correct, but retained for records)
     */
    Old: CodingArgs;
    /**
     * temp: A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations.
     */
    Temp: CodingArgs;
    /**
     * usual: Known as/conventional/the one you normally use
     */
    Usual: CodingArgs;
};
/**
 * The use of a human name
 */
export declare const NameUseCodings: NameUseCodingType;
//# sourceMappingURL=NameUseCodings.d.ts.map