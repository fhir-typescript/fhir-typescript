import { Coding } from '../fhir/Coding.js';
/**
 * The lifecycle status of an artifact.
 */
export declare const PublicationStatusCodings: {
    /**
     * active: This resource is ready for normal use.
     */
    readonly Active: Coding;
    /**
     * draft: This resource is still under development and is not yet considered to be ready for normal use.
     */
    readonly Draft: Coding;
    /**
     * retired: This resource has been withdrawn or superseded and should no longer be used.
     */
    readonly Retired: Coding;
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this resource.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    readonly Unknown: Coding;
};
/**
 * The lifecycle status of an artifact.
 */
export declare type PublicationStatusCodingType = typeof PublicationStatusCodings;
//# sourceMappingURL=PublicationStatusCodings.d.ts.map