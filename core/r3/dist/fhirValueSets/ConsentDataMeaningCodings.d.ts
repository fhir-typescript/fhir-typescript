import { CodingArgs } from '../fhir/Coding.js';
/**
 * How a resource reference is interpreted when testing consent restrictions
 */
export declare type ConsentDataMeaningCodingType = {
    /**
     * authoredby: The consent applies to instances of resources that are authored by
     */
    AuthoredBy: CodingArgs;
    /**
     * dependents: The consent applies directly to the instance of the resource and instances that refer to it
     */
    Dependents: CodingArgs;
    /**
     * instance: The consent applies directly to the instance of the resource
     */
    Instance: CodingArgs;
    /**
     * related: The consent applies directly to the instance of the resource and instances it refers to
     */
    Related: CodingArgs;
};
/**
 * How a resource reference is interpreted when testing consent restrictions
 */
export declare const ConsentDataMeaningCodings: ConsentDataMeaningCodingType;
//# sourceMappingURL=ConsentDataMeaningCodings.d.ts.map