/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.
 */
export declare const TestscriptProfileOriginTypesCodes: {
    /**
     * FHIR-Client: General FHIR client used to initiate operations against a FHIR server.
     */
    readonly FHIRClient: "FHIR-Client";
    /**
     * FHIR-SDC-FormFiller: A FHIR client acting as a Structured Data Capture Form Filler.
     */
    readonly FHIRSDCFormFiller: "FHIR-SDC-FormFiller";
};
/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.
 */
export declare type TestscriptProfileOriginTypesCodeType = typeof TestscriptProfileOriginTypesCodes[keyof typeof TestscriptProfileOriginTypesCodes];
//# sourceMappingURL=TestscriptProfileOriginTypesCodes.d.ts.map