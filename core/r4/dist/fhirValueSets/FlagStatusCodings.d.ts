import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export declare type FlagStatusCodingType = {
    /**
     * active: A current flag that should be displayed to a user. A system may use the category to determine which user roles should view the flag.
     */
    Active: CodingArgs;
    /**
     * entered-in-error: The flag was added in error and should no longer be displayed.
     */
    EnteredInError: CodingArgs;
    /**
     * inactive: The flag no longer needs to be displayed.
     */
    Inactive: CodingArgs;
};
/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export declare const FlagStatusCodings: FlagStatusCodingType;
//# sourceMappingURL=FlagStatusCodings.d.ts.map