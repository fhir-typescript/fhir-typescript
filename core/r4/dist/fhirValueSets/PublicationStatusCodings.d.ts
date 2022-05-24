import { CodingArgs } from '../fhir/Coding.js';
/**
 * The lifecycle status of an artifact.
 */
export declare type PublicationStatusCodingType = {
    /**
     * active: This resource is ready for normal use.
     */
    Active: CodingArgs;
    /**
     * draft: This resource is still under development and is not yet considered to be ready for normal use.
     */
    Draft: CodingArgs;
    /**
     * retired: This resource has been withdrawn or superseded and should no longer be used.
     */
    Retired: CodingArgs;
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this resource.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: CodingArgs;
};
/**
 * The lifecycle status of an artifact.
 */
export declare const PublicationStatusCodings: PublicationStatusCodingType;
//# sourceMappingURL=PublicationStatusCodings.d.ts.map