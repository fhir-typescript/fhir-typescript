import * as fhir from '../fhir.js';
/**
 * Valid arguments for the DeviceUseStatement type.
 */
export interface DeviceUseStatementArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceUseStatement" | undefined;
    /**
     * Knowing where the device is targeted is important for tracking if multiple sites are possible.
     */
    bodySite?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Knowing where the device is targeted is important for tracking if multiple sites are possible.
     */
    bodySiteCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Knowing where the device is targeted is important for tracking if multiple sites are possible.
     */
    bodySiteReference?: fhir.ReferenceArgs | undefined;
    /**
     * The time period over which the device was used.
     */
    whenUsed?: fhir.PeriodArgs | undefined;
    /**
     * The details of the device used.
     */
    device: fhir.ReferenceArgs | null;
    /**
     * An external identifier for this statement such as an IRI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Reason or justification for the use of the device.
     */
    indication?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    notes?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: DeviceUseStatement.notes
     */
    _notes?: (fhir.FhirElementArgs | null)[];
    /**
     * The time at which the statement was made/recorded.
     */
    recordedOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseStatement.recordedOn
     */
    _recordedOn?: fhir.FhirElementArgs;
    /**
     * The patient who used the device.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * How often the device was used.
     */
    timing?: fhir.Timing | fhir.Period | fhir.FhirDateTime | undefined;
    /**
     * How often the device was used.
     */
    timingTiming?: fhir.TimingArgs | undefined;
    /**
     * How often the device was used.
     */
    timingPeriod?: fhir.PeriodArgs | undefined;
    /**
     * How often the device was used.
     */
    timingDateTime?: fhir.FhirDateTime | string | undefined;
}
/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export declare class DeviceUseStatement extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DeviceUseStatement";
    /**
     * Knowing where the device is targeted is important for tracking if multiple sites are possible.
     */
    bodySite?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DeviceUseStatement.bodySite[x]
     */
    protected static readonly _fts_bodySiteIsChoice: true;
    /**
     * The time period over which the device was used.
     */
    whenUsed?: fhir.Period | undefined;
    /**
     * The details of the device used.
     */
    device: fhir.Reference | null;
    /**
     * An external identifier for this statement such as an IRI.
     */
    identifier: fhir.Identifier[];
    /**
     * Reason or justification for the use of the device.
     */
    indication: fhir.CodeableConcept[];
    /**
     * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    notes: fhir.FhirString[];
    /**
     * The time at which the statement was made/recorded.
     */
    recordedOn?: fhir.FhirDateTime | undefined;
    /**
     * The patient who used the device.
     */
    subject: fhir.Reference | null;
    /**
     * How often the device was used.
     */
    timing?: (fhir.Timing | fhir.Period | fhir.FhirDateTime) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DeviceUseStatement.timing[x]
     */
    protected static readonly _fts_timingIsChoice: true;
    /**
     * Default constructor for DeviceUseStatement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceUseStatementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DeviceUseStatement.d.ts.map