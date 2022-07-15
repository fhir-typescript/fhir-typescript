import * as fhir from '../fhir.js';
import { DeviceStatementStatusCodeType } from '../fhirValueSets/DeviceStatementStatusCodes.js';
/**
 * Valid arguments for the DeviceUseStatement type.
 */
export interface DeviceUseStatementArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceUseStatement" | undefined;
    /**
     * An external identifier for this statement such as an IRI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
     * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
     */
    status: fhir.FhirCode<DeviceStatementStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseStatement.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The patient who used the device.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The time period over which the device was used.
     */
    whenUsed?: fhir.PeriodArgs | undefined;
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
    /**
     * The time at which the statement was made/recorded.
     */
    recordedOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseStatement.recordedOn
     */
    _recordedOn?: fhir.FhirElementArgs;
    /**
     * Who reported the device was being used by the patient.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * The details of the device used.
     */
    device: fhir.ReferenceArgs | null;
    /**
     * Reason or justification for the use of the device.
     */
    indication?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates the site on the subject's body where the device was used ( i.e. the target site).
     */
    bodySite?: fhir.CodeableConceptArgs | undefined;
    /**
     * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    note?: fhir.AnnotationArgs[] | undefined;
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
     * An external identifier for this statement such as an IRI.
     */
    identifier: fhir.Identifier[];
    /**
     * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
     * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
     */
    status: fhir.FhirCode<DeviceStatementStatusCodeType> | null;
    /**
     * The patient who used the device.
     */
    subject: fhir.Reference | null;
    /**
     * The time period over which the device was used.
     */
    whenUsed?: fhir.Period | undefined;
    /**
     * How often the device was used.
     */
    timing?: (fhir.Timing | fhir.Period | fhir.FhirDateTime) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DeviceUseStatement.timing[x]
     */
    protected static readonly _fts_timingIsChoice: true;
    /**
     * The time at which the statement was made/recorded.
     */
    recordedOn?: fhir.FhirDateTime | undefined;
    /**
     * Who reported the device was being used by the patient.
     */
    source?: fhir.Reference | undefined;
    /**
     * The details of the device used.
     */
    device: fhir.Reference | null;
    /**
     * Reason or justification for the use of the device.
     */
    indication: fhir.CodeableConcept[];
    /**
     * Indicates the site on the subject's body where the device was used ( i.e. the target site).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    note: fhir.Annotation[];
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