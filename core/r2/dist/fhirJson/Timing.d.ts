import * as fhir from '../fhirJson.js';
/**
 * Many timing schedules are determined by regular repetitions.
 */
export interface TimingRepeat extends fhir.FhirElement {
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsQuantity?: fhir.Quantity | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsRange?: fhir.Range | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsPeriod?: fhir.Period | undefined;
    /**
     * Repetitions may be limited by end time or total occurrences.
     */
    count?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.count
     */
    _count?: fhir.FhirElement;
    /**
     * Some activities are not instantaneous and need to be maintained for a period of time.
     */
    duration?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.duration
     */
    _duration?: fhir.FhirElement;
    /**
     * Some activities are not instantaneous and need to be maintained for a period of time.
     */
    durationMax?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.durationMax
     */
    _durationMax?: fhir.FhirElement;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnits?: 'a' | 'd' | 'h' | 'min' | 'mo' | 's' | 'wk' | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.durationUnits
     */
    _durationUnits?: fhir.FhirElement;
    /**
     * The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).
     */
    frequency?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.frequency
     */
    _frequency?: fhir.FhirElement;
    /**
     * If present, indicates that the frequency is a range - so repeat between [frequency] and [frequencyMax] times within the period or period range.
     */
    frequencyMax?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.frequencyMax
     */
    _frequencyMax?: fhir.FhirElement;
    /**
     * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period.
     */
    period?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.period
     */
    _period?: fhir.FhirElement;
    /**
     * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
     */
    periodMax?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.periodMax
     */
    _periodMax?: fhir.FhirElement;
    /**
     * The units of time for the period in UCUM units.
     */
    periodUnits?: 'a' | 'd' | 'h' | 'min' | 'mo' | 's' | 'wk' | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.periodUnits
     */
    _periodUnits?: fhir.FhirElement;
    /**
     * Timings are frequently determined by occurrences such as waking, eating and sleep.
     */
    when?: 'AC' | 'ACD' | 'ACM' | 'ACV' | 'C' | 'CD' | 'CM' | 'CV' | 'HS' | 'PC' | 'PCD' | 'PCM' | 'PCV' | 'WAKE' | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.when
     */
    _when?: fhir.FhirElement;
}
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds.
 */
export interface Timing extends fhir.FhirElement {
    /**
     * In an MAR, for instance, you need to take a general specification, and turn it into a precise specification.
     */
    event?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Timing.event
     */
    _event?: (fhir.FhirElement | null)[];
    /**
     * Many timing schedules are determined by regular repetitions.
     */
    repeat?: fhir.TimingRepeat | undefined;
    /**
     * A code for the timing pattern. Some codes such as BID are ubiquitous, but many institutions define their own additional codes.
     */
    code?: fhir.CodeableConcept | undefined;
}
//# sourceMappingURL=Timing.d.ts.map