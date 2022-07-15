import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates whether the account is available to be used.
 */
export declare type AccountStatusCodingType = {
    /**
     * active: This account is active and may be used.
     */
    Active: CodingArgs;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: CodingArgs;
    /**
     * inactive: This account is inactive and should not be used to track financial information.
     */
    Inactive: CodingArgs;
};
/**
 * Indicates whether the account is available to be used.
 */
export declare const AccountStatusCodings: AccountStatusCodingType;
//# sourceMappingURL=AccountStatusCodings.d.ts.map