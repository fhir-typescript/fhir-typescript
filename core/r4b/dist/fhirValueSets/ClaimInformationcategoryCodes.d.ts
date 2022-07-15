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
     * employmentimpacted: An indication that the patient was unable to work, the period if known otherwise a Yes/No (boolean).
     */
    readonly EmploymentImpacted: "employmentimpacted";
    /**
     * exception: Insurance policy exceptions.
     */
    readonly Exception: "exception";
    /**
     * externalcause: The external cause of an illness or injury.
     */
    readonly ExternalCaause: "externalcause";
    /**
     * hospitalized: An indication that the patient was hospitalized, the period if known otherwise a Yes/No (boolean).
     */
    readonly Hospitalized: "hospitalized";
    /**
     * info: Codes conveying additional situation and condition information.
     */
    readonly Information: "info";
    /**
     * material: Materials being forwarded, e.g. Models, molds, images, documents.
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
     * patientreasonforvisit: The reason for the patient visit.
     */
    readonly PatientReasonForVisit: "patientreasonforvisit";
    /**
     * prosthesis: The type of prosthesis and date of supply if a previously supplied prosthesis.
     */
    readonly Prosthesis: "prosthesis";
    /**
     * related: Nature and date of the related event e.g. Last exam, service, X-ray etc.
     */
    readonly RelatedServices: "related";
};
/**
 * This value set includes sample Information Category codes.
 */
export declare type ClaimInformationcategoryCodeType = typeof ClaimInformationcategoryCodes[keyof typeof ClaimInformationcategoryCodes];
//# sourceMappingURL=ClaimInformationcategoryCodes.d.ts.map