import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes sample Information Category codes.
 */
export declare const ClaimInformationcategoryCodings: {
    /**
     * attachment: Materials attached such as images, documents and resources.
     */
    readonly Attachment: Coding;
    /**
     * discharge: Discharge status and discharge to locations.
     */
    readonly Discharge: Coding;
    /**
     * employmentimpacted: An indication that the patient was unable to work, the period if known otherwise a Yes/No (boolean).
     */
    readonly EmploymentImpacted: Coding;
    /**
     * exception: Insurance policy exceptions.
     */
    readonly Exception: Coding;
    /**
     * externalcause: The external cause of an illness or injury.
     */
    readonly ExternalCaause: Coding;
    /**
     * hospitalized: An indication that the patient was hospitalized, the period if known otherwise a Yes/No (boolean).
     */
    readonly Hospitalized: Coding;
    /**
     * info: Codes conveying additional situation and condition information.
     */
    readonly Information: Coding;
    /**
     * material: Materials being forwarded, e.g. Models, molds, images, documents.
     */
    readonly MaterialsForwarded: Coding;
    /**
     * missingtooth: Teeth which are missing for any reason, for example: prior extraction, never developed.
     */
    readonly MissingTooth: Coding;
    /**
     * onset: Period, start or end dates of aspects of the Condition.
     */
    readonly Onset: Coding;
    /**
     * other: Other information identified by the type.system.
     */
    readonly Other: Coding;
    /**
     * patientreasonforvisit: The reason for the patient visit.
     */
    readonly PatientReasonForVisit: Coding;
    /**
     * prosthesis: The type of prosthesis and date of supply if a previously supplied prosthesis.
     */
    readonly Prosthesis: Coding;
    /**
     * related: Nature and date of the related event e.g. Last exam, service, X-ray etc.
     */
    readonly RelatedServices: Coding;
};
/**
 * This value set includes sample Information Category codes.
 */
export declare type ClaimInformationcategoryCodingType = typeof ClaimInformationcategoryCodings;
//# sourceMappingURL=ClaimInformationcategoryCodings.d.ts.map