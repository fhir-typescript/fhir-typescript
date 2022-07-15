import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes sample Information Category codes.
 */
export declare type ClaimInformationcategoryCodingType = {
    /**
     * attachment: Materials attached such as images, documents and resources.
     */
    Attachment: CodingArgs;
    /**
     * discharge: Discharge status and discharge to locations.
     */
    Discharge: CodingArgs;
    /**
     * employmentimpacted: An indication that the patient was unable to work, the period if known otherwise a Yes/No (boolean).
     */
    EmploymentImpacted: CodingArgs;
    /**
     * exception: Insurance policy exceptions.
     */
    Exception: CodingArgs;
    /**
     * externalcause: The external cause of an illness or injury.
     */
    ExternalCaause: CodingArgs;
    /**
     * hospitalized: An indication that the patient was hospitalized, the period if known otherwise a Yes/No (boolean).
     */
    Hospitalized: CodingArgs;
    /**
     * info: Codes conveying additional situation and condition information.
     */
    Information: CodingArgs;
    /**
     * material: Materials being forwarded, e.g. Models, molds, images, documents.
     */
    MaterialsForwarded: CodingArgs;
    /**
     * missingtooth: Teeth which are missing for any reason, for example: prior extraction, never developed.
     */
    MissingTooth: CodingArgs;
    /**
     * onset: Period, start or end dates of aspects of the Condition.
     */
    Onset: CodingArgs;
    /**
     * other: Other information identified by the type.system.
     */
    Other: CodingArgs;
    /**
     * patientreasonforvisit: The reason for the patient visit.
     */
    PatientReasonForVisit: CodingArgs;
    /**
     * prosthesis: The type of prosthesis and date of supply if a previously supplied prosthesis.
     */
    Prosthesis: CodingArgs;
    /**
     * related: Nature and date of the related event e.g. Last exam, service, X-ray etc.
     */
    RelatedServices: CodingArgs;
};
/**
 * This value set includes sample Information Category codes.
 */
export declare const ClaimInformationcategoryCodings: ClaimInformationcategoryCodingType;
//# sourceMappingURL=ClaimInformationcategoryCodings.d.ts.map