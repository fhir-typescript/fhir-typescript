import { Coding } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.
 */
export declare const TestscriptProfileOriginTypesCodings: {
    /**
     * FHIR-Client: General FHIR client used to initiate operations against a FHIR server.
     */
    readonly FHIRClient: Coding;
    /**
     * FHIR-SDC-FormFiller: A FHIR client acting as a Structured Data Capture Form Filler.
     */
    readonly FHIRSDCFormFiller: Coding;
};
/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.
 */
export declare type TestscriptProfileOriginTypesCodingType = typeof TestscriptProfileOriginTypesCodings;
//# sourceMappingURL=TestscriptProfileOriginTypesCodings.d.ts.map