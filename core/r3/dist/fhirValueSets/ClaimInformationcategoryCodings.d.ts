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
     * exception: Insurance policy exceptions.
     */
    Exception: CodingArgs;
    /**
     * info: Codes conveying additional situation and condition information.
     */
    Information: CodingArgs;
    /**
     * material: Materials being forwarded, eg. Models, molds, images, documents.
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
     * prosthesis: The type of prosthesis and date of supply if a previously supplied prosthesis.
     */
    Prosthesis: CodingArgs;
    /**
     * related: Nature and date of the related event eg. Last exam, service, Xray etc.
     */
    RelatedServices: CodingArgs;
};
/**
 * This value set includes sample Information Category codes.
 */
export declare const ClaimInformationcategoryCodings: ClaimInformationcategoryCodingType;
//# sourceMappingURL=ClaimInformationcategoryCodings.d.ts.map