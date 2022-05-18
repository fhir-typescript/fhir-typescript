import * as fhir from '../fhir.js';
import { DeviceStatementStatusCodingType } from '../fhirValueSets/DeviceStatementStatusCodings.js';
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
     * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
     * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
     */
    status: DeviceStatementStatusCodeType | null;
    /**
     * The patient who used the device.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The most common use cases for deriving a DeviceUseStatement comes from creating it from a request or from an observation or a claim. it should be noted that the amount of information that is available varies from the type resource that you derive the DeviceUseStatement from.
     */
    derivedFrom?: fhir.ReferenceArgs[] | undefined;
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
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates another resource whose existence justifies this DeviceUseStatement.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
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
    identifier?: fhir.Identifier[];
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
     */
    basedOn?: fhir.Reference[];
    /**
     * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
     * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
     */
    status: DeviceStatementStatusCodeType | null;
    /**
     * The patient who used the device.
     */
    subject: fhir.Reference | null;
    /**
     * The most common use cases for deriving a DeviceUseStatement comes from creating it from a request or from an observation or a claim. it should be noted that the amount of information that is available varies from the type resource that you derive the DeviceUseStatement from.
     */
    derivedFrom?: fhir.Reference[];
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
    reasonCode?: fhir.CodeableConcept[];
    /**
     * Indicates another resource whose existence justifies this DeviceUseStatement.
     */
    reasonReference?: fhir.Reference[];
    /**
     * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    note?: fhir.Annotation[];
    /**
     * Default constructor for DeviceUseStatement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceUseStatementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (DeviceUseStatement.status)
     */
    static statusRequiredCoding(): DeviceStatementStatusCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=DeviceUseStatement.d.ts.map