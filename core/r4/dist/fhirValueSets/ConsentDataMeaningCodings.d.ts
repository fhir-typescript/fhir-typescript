import { Coding } from '../fhir/Coding.js';
/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export declare const ConsentDataMeaningCodings: {
    /**
     * authoredby: The consent applies to instances of resources that are authored by.
     */
    readonly AuthoredBy: Coding;
    /**
     * dependents: The consent applies directly to the instance of the resource and instances that refer to it.
     */
    readonly Dependents: Coding;
    /**
     * instance: The consent applies directly to the instance of the resource.
     */
    readonly Instance: Coding;
    /**
     * related: The consent applies directly to the instance of the resource and instances it refers to.
     */
    readonly Related: Coding;
};
/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export declare type ConsentDataMeaningCodingType = typeof ConsentDataMeaningCodings;
//# sourceMappingURL=ConsentDataMeaningCodings.d.ts.map