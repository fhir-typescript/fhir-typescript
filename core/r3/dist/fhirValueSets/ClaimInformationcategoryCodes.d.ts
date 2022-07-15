/**
 * This value set includes sample Information Category codes.
 */
export declare const ClaimInformationcategoryCodes: {
    /**
     * attachment: Materials attached such as images, documents and resources.
     */
    readonly Attachment: "attachment";
    /**
     * discharge: Discharge status and discharge to locations.
     */
    readonly Discharge: "discharge";
    /**
     * exception: Insurance policy exceptions.
     */
    readonly Exception: "exception";
    /**
     * info: Codes conveying additional situation and condition information.
     */
    readonly Information: "info";
    /**
     * material: Materials being forwarded, eg. Models, molds, images, documents.
     */
    readonly MaterialsForwarded: "material";
    /**
     * missingtooth: Teeth which are missing for any reason, for example: prior extraction, never developed.
     */
    readonly MissingTooth: "missingtooth";
    /**
     * onset: Period, start or end dates of aspects of the Condition.
     */
    readonly Onset: "onset";
    /**
     * other: Other information identified by the type.system.
     */
    readonly Other: "other";
    /**
     * prosthesis: The type of prosthesis and date of supply if a previously supplied prosthesis.
     */
    readonly Prosthesis: "prosthesis";
    /**
     * related: Nature and date of the related event eg. Last exam, service, Xray etc.
     */
    readonly RelatedServices: "related";
};
/**
 * This value set includes sample Information Category codes.
 */
export declare type ClaimInformationcategoryCodeType = typeof ClaimInformationcategoryCodes[keyof typeof ClaimInformationcategoryCodes];
//# sourceMappingURL=ClaimInformationcategoryCodes.d.ts.map