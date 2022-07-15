import * as fhir from '../fhir.js';
import { FlagStatusCodeType } from '../fhirValueSets/FlagStatusCodes.js';
/**
 * Valid arguments for the Flag type.
 */
export interface FlagArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Flag" | undefined;
    /**
     * Identifier assigned to the flag for external use (outside the FHIR environment).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<FlagStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Flag.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows an flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * If non coded, use CodeableConcept.text.  This element should always be included in the narrative.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The patient, location, group , organization , or practitioner, etc. this is about record this flag is associated with.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The person, organization or device that created the flag.
     */
    author?: fhir.ReferenceArgs | undefined;
}
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export declare class Flag extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Flag";
    /**
     * Identifier assigned to the flag for external use (outside the FHIR environment).
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<FlagStatusCodeType> | null;
    /**
     * Allows an flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If non coded, use CodeableConcept.text.  This element should always be included in the narrative.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The patient, location, group , organization , or practitioner, etc. this is about record this flag is associated with.
     */
    subject: fhir.Reference | null;
    /**
     * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */
    period?: fhir.Period | undefined;
    /**
     * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The person, organization or device that created the flag.
     */
    author?: fhir.Reference | undefined;
    /**
     * Default constructor for Flag - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<FlagArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Flag.d.ts.map