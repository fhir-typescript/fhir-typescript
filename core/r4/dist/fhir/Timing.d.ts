import * as fhir from '../fhir.js';
import { UnitsOfTimeCodeType } from '../fhirValueSets/UnitsOfTimeCodes.js';
import { DaysOfWeekCodeType } from '../fhirValueSets/DaysOfWeekCodes.js';
import { TimingAbbreviationCodingType } from '../fhirValueSets/TimingAbbreviationCodings.js';
/**
 * Valid arguments for the TimingRepeat type.
 */
export interface TimingRepeatArgs extends fhir.FhirElementArgs {
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    bounds?: fhir.Duration | fhir.Range | fhir.Period | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsDuration?: fhir.DurationArgs | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsRange?: fhir.RangeArgs | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsPeriod?: fhir.PeriodArgs | undefined;
    /**
     * If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.
     */
    count?: fhir.FhirPositiveInt | number | undefined;
    /**
     * If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.
     */
    countMax?: fhir.FhirPositiveInt | number | undefined;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    duration?: fhir.FhirDecimal | number | undefined;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    durationMax?: fhir.FhirDecimal | number | undefined;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnit?: fhir.FhirCode<UnitsOfTimeCodeType> | string | undefined;
    /**
     * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.
     */
    frequency?: fhir.FhirPositiveInt | number | undefined;
    /**
     * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
     */
    frequencyMax?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.
     */
    period?: fhir.FhirDecimal | number | undefined;
    /**
     * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
     */
    periodMax?: fhir.FhirDecimal | number | undefined;
    /**
     * The units of time for the period in UCUM units.
     */
    periodUnit?: fhir.FhirCode<UnitsOfTimeCodeType> | string | undefined;
    /**
     * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
     */
    dayOfWeek?: fhir.FhirCode<DaysOfWeekCodeType>[] | string[] | undefined;
    /**
     * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
     */
    timeOfDay?: fhir.FhirTime[] | string[] | undefined;
    /**
     * When more than one event is listed, the event is tied to the union of the specified events.
     */
    when?: fhir.FhirCode[] | string[] | undefined;
    /**
     * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
     */
    offset?: fhir.FhirUnsignedInt | number | undefined;
}
/**
 * A set of rules that describe when the event is scheduled.
 */
export declare class TimingRepeat extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    bounds?: (fhir.Duration | fhir.Range | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Timing.repeat.bounds[x]
     */
    protected static readonly _fts_boundsIsChoice: true;
    /**
     * If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.
     */
    count?: fhir.FhirPositiveInt | undefined;
    /**
     * If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.
     */
    countMax?: fhir.FhirPositiveInt | undefined;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    duration?: fhir.FhirDecimal | undefined;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    durationMax?: fhir.FhirDecimal | undefined;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnit?: fhir.FhirCode<UnitsOfTimeCodeType> | undefined;
    /**
     * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.
     */
    frequency?: fhir.FhirPositiveInt | undefined;
    /**
     * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
     */
    frequencyMax?: fhir.FhirPositiveInt | undefined;
    /**
     * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.
     */
    period?: fhir.FhirDecimal | undefined;
    /**
     * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
     */
    periodMax?: fhir.FhirDecimal | undefined;
    /**
     * The units of time for the period in UCUM units.
     */
    periodUnit?: fhir.FhirCode<UnitsOfTimeCodeType> | undefined;
    /**
     * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
     */
    dayOfWeek: fhir.FhirCode<DaysOfWeekCodeType>[];
    /**
     * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
     */
    timeOfDay: fhir.FhirTime[];
    /**
     * When more than one event is listed, the event is tied to the union of the specified events.
     */
    when: fhir.FhirCode[];
    /**
     * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
     */
    offset?: fhir.FhirUnsignedInt | undefined;
    /**
     * Default constructor for TimingRepeat - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TimingRepeatArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for durationUnit (Timing.repeat.durationUnit)
     */
    static get durationUnitRequiredCodes(): {
        readonly Year: "a";
        readonly Day: "d";
        readonly Hour: "h";
        readonly Minute: "min";
        readonly Month: "mo";
        readonly Second: "s";
        readonly Week: "wk";
    };
    /**
     * Required-bound Value Set for periodUnit (Timing.repeat.periodUnit)
     */
    static get periodUnitRequiredCodes(): {
        readonly Year: "a";
        readonly Day: "d";
        readonly Hour: "h";
        readonly Minute: "min";
        readonly Month: "mo";
        readonly Second: "s";
        readonly Week: "wk";
    };
    /**
     * Required-bound Value Set for dayOfWeek (Timing.repeat.dayOfWeek)
     */
    static get dayOfWeekRequiredCodes(): {
        readonly Friday: "fri";
        readonly Monday: "mon";
        readonly Saturday: "sat";
        readonly Sunday: "sun";
        readonly Thursday: "thu";
        readonly Tuesday: "tue";
        readonly Wednesday: "wed";
    };
    /**
     * Required-bound Value Set for when (Timing.repeat.when)
     */
    static get whenRequiredCodes(): {
        readonly AC: "AC";
        readonly ACD: "ACD";
        readonly ACM: "ACM";
        readonly ACV: "ACV";
        readonly Afternoon: "AFT";
        readonly EarlyAfternoon: "AFT.early";
        readonly LateAfternoon: "AFT.late";
        readonly C: "C";
        readonly CD: "CD";
        readonly CM: "CM";
        readonly CV: "CV";
        readonly Evening: "EVE";
        readonly EarlyEvening: "EVE.early";
        readonly LateEvening: "EVE.late";
        readonly HS: "HS";
        readonly Morning: "MORN";
        readonly EarlyMorning: "MORN.early";
        readonly LateMorning: "MORN.late";
        readonly Night: "NIGHT";
        readonly Noon: "NOON"; /**
         * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.
         */
        readonly PC: "PC";
        readonly PCD: "PCD";
        readonly PCM: "PCM";
        readonly PCV: "PCV";
        readonly AfterSleep: "PHS";
        readonly WAKE: "WAKE";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Timing type.
 */
export interface TimingArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies specific times when the event occurs.
     */
    event?: fhir.FhirDateTime[] | string[] | undefined;
    /**
     * A set of rules that describe when the event is scheduled.
     */
    repeat?: fhir.TimingRepeatArgs | undefined;
    /**
     * BID etc. are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always at 7am and 6pm".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or a structured representation should be used (in this case, specifying the two event times).
     */
    code?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
export declare class Timing extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies specific times when the event occurs.
     */
    event: fhir.FhirDateTime[];
    /**
     * A set of rules that describe when the event is scheduled.
     */
    repeat?: fhir.TimingRepeat | undefined;
    /**
     * BID etc. are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always at 7am and 6pm".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or a structured representation should be used (in this case, specifying the two event times).
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for Timing - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TimingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for code (Timing.code)
     */
    static get codePreferredCodings(): TimingAbbreviationCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Timing.d.ts.map