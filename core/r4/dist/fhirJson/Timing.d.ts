import * as fhir from '../fhirJson.js';
/**
 * A set of rules that describe when the event is scheduled.
 */
export interface TimingRepeat extends fhir.FhirElement {
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsDuration?: fhir.Duration | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsRange?: fhir.Range | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsPeriod?: fhir.Period | undefined;
    /**
     * If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.
     */
    count?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.count
     */
    _count?: fhir.FhirElement;
    /**
     * If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.
     */
    countMax?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.countMax
     */
    _countMax?: fhir.FhirElement;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    duration?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.duration
     */
    _duration?: fhir.FhirElement;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    durationMax?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.durationMax
     */
    _durationMax?: fhir.FhirElement;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnit?: 'a' | 'd' | 'h' | 'min' | 'mo' | 's' | 'wk' | undefined;
    /**
     * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.
     */
    frequency?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.frequency
     */
    _frequency?: fhir.FhirElement;
    /**
     * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
     */
    frequencyMax?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.frequencyMax
     */
    _frequencyMax?: fhir.FhirElement;
    /**
     * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.
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
    periodUnit?: 'a' | 'd' | 'h' | 'min' | 'mo' | 's' | 'wk' | undefined;
    /**
     * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
     */
    dayOfWeek?: ('fri' | 'mon' | 'sat' | 'sun' | 'thu' | 'tue' | 'wed')[] | undefined;
    /**
     * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
     */
    timeOfDay?: string[] | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.timeOfDay
     */
    _timeOfDay?: (fhir.FhirElement | null)[];
    /**
     * When more than one event is listed, the event is tied to the union of the specified events.
     */
    when?: ('AC' | 'ACD' | 'ACM' | 'ACV' | 'AFT' | 'AFT.early' | 'AFT.late' | 'C' | 'CD' | 'CM' | 'CV' | 'EVE' | 'EVE.early' | 'EVE.late' | 'HS' | 'MORN' | 'MORN.early' | 'MORN.late' | 'NIGHT' | 'NOON' | 'PC' | 'PCD' | 'PCM' | 'PCV' | 'PHS' | 'WAKE')[] | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.when
     */
    _when?: (fhir.FhirElement | null)[];
    /**
     * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
     */
    offset?: number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.offset
     */
    _offset?: fhir.FhirElement;
}
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
export interface Timing extends fhir.BackboneElement {
    /**
     * Identifies specific times when the event occurs.
     */
    event?: string[] | undefined;
    /**
     * Extended properties for primitive element: Timing.event
     */
    _event?: (fhir.FhirElement | null)[];
    /**
     * A set of rules that describe when the event is scheduled.
     */
    repeat?: fhir.TimingRepeat | undefined;
    /**
     * BID etc. are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always at 7am and 6pm".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or a structured representation should be used (in this case, specifying the two event times).
     */
    code?: fhir.CodeableConcept | undefined;
}
//# sourceMappingURL=Timing.d.ts.map