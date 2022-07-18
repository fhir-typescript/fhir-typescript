import * as fhir from '../fhirJson.js';
/**
 * A description of a triggering event.
 */
export interface TriggerDefinition extends fhir.FhirElement {
    /**
     * The type of triggering event.
     */
    type: 'data-access-ended' | 'data-accessed' | 'data-added' | 'data-modified' | 'data-removed' | 'named-event' | 'periodic' | null;
    /**
     * Extended properties for primitive element: TriggerDefinition.type
     */
    _type?: fhir.FhirElement;
    /**
     * The name of the event (if this is a named-event trigger).
     */
    eventName?: string | undefined;
    /**
     * Extended properties for primitive element: TriggerDefinition.eventName
     */
    _eventName?: fhir.FhirElement;
    /**
     * The timing of the event (if this is a period trigger).
     */
    eventTimingTiming?: fhir.Timing | undefined;
    /**
     * The timing of the event (if this is a period trigger).
     */
    eventTimingReference?: fhir.Reference | undefined;
    /**
     * The timing of the event (if this is a period trigger).
     */
    eventTimingDate?: string | undefined;
    /**
     * Extended properties for primitive element: TriggerDefinition.eventTiming[x]
     */
    _eventTimingDate?: fhir.FhirElement;
    /**
     * The timing of the event (if this is a period trigger).
     */
    eventTimingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: TriggerDefinition.eventTiming[x]
     */
    _eventTimingDateTime?: fhir.FhirElement;
    /**
     * The triggering data of the event (if this is a data trigger).
     */
    eventData?: fhir.DataRequirement | undefined;
}
//# sourceMappingURL=TriggerDefinition.d.ts.map