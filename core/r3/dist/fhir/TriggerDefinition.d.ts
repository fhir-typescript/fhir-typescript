import * as fhir from '../fhir.js';
import { TriggerTypeCodeType } from '../fhirValueSets/TriggerTypeCodes.js';
/**
 * Valid arguments for the TriggerDefinition type.
 */
export interface TriggerDefinitionArgs extends fhir.FhirElementArgs {
    /**
     * The type of triggering event.
     */
    type: fhir.FhirCode<TriggerTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TriggerDefinition.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The name of the event (if this is a named-event trigger).
     */
    eventName?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TriggerDefinition.eventName
     */
    _eventName?: fhir.FhirElementArgs;
    /**
     * The timing of the event (if this is a period trigger).
     */
    eventTiming?: fhir.Timing | fhir.Reference | fhir.FhirDate | fhir.FhirDateTime | undefined;
    /**
     * The timing of the event (if this is a period trigger).
     */
    eventTimingTiming?: fhir.TimingArgs | undefined;
    /**
     * The timing of the event (if this is a period trigger).
     */
    eventTimingReference?: fhir.ReferenceArgs | undefined;
    /**
     * The timing of the event (if this is a period trigger).
     */
    eventTimingDate?: fhir.FhirDate | string | undefined;
    /**
     * The timing of the event (if this is a period trigger).
     */
    eventTimingDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The triggering data of the event (if this is a data trigger).
     */
    eventData?: fhir.DataRequirementArgs | undefined;
}
/**
 * A description of a triggering event.
 */
export declare class TriggerDefinition extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of triggering event.
     */
    type: fhir.FhirCode<TriggerTypeCodeType> | null;
    /**
     * The name of the event (if this is a named-event trigger).
     */
    eventName?: fhir.FhirString | undefined;
    /**
     * The timing of the event (if this is a period trigger).
     */
    eventTiming?: (fhir.Timing | fhir.Reference | fhir.FhirDate | fhir.FhirDateTime) | undefined;
    /**
     * Internal flag to properly serialize choice-type element TriggerDefinition.eventTiming[x]
     */
    protected static readonly _fts_eventTimingIsChoice: true;
    /**
     * The triggering data of the event (if this is a data trigger).
     */
    eventData?: fhir.DataRequirement | undefined;
    /**
     * Default constructor for TriggerDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TriggerDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=TriggerDefinition.d.ts.map