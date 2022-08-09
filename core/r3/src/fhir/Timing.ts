// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Timing

import * as fhir from '../fhir.js';

// @ts-ignore
import { UnitsOfTimeCodes,  UnitsOfTimeCodeType } from '../fhirValueSets/UnitsOfTimeCodes.js';
// @ts-ignore
import { UnitsOfTimeVsValidation } from '../fhirValueSets/UnitsOfTimeVsValidation.js';
// @ts-ignore
import { DaysOfWeekCodes,  DaysOfWeekCodeType } from '../fhirValueSets/DaysOfWeekCodes.js';
// @ts-ignore
import { DaysOfWeekVsValidation } from '../fhirValueSets/DaysOfWeekVsValidation.js';
// @ts-ignore
import { EventTimingCodes,  EventTimingCodeType } from '../fhirValueSets/EventTimingCodes.js';
// @ts-ignore
import { EventTimingVsValidation } from '../fhirValueSets/EventTimingVsValidation.js';
// @ts-ignore
import { TimingAbbreviationCodes,  TimingAbbreviationCodeType } from '../fhirValueSets/TimingAbbreviationCodes.js';
// @ts-ignore
import { TimingAbbreviationVsValidation } from '../fhirValueSets/TimingAbbreviationVsValidation.js';
/**
 * Valid arguments for the TimingRepeat type.
 */
export interface TimingRepeatArgs extends fhir.FhirElementArgs {
  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
   */
  bounds?: fhir.Duration|fhir.Range|fhir.Period|undefined;
  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
   */
  boundsDuration?: fhir.DurationArgs|undefined;
  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
   */
  boundsRange?: fhir.RangeArgs|undefined;
  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
   */
  boundsPeriod?: fhir.PeriodArgs|undefined;
  /**
   * If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.
   */
  count?: fhir.FhirInteger|number|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.count
   */
  _count?:fhir.FhirElementArgs;
  /**
   * A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).
   */
  countMax?: fhir.FhirInteger|number|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.countMax
   */
  _countMax?:fhir.FhirElementArgs;
  /**
   * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
   */
  duration?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.duration
   */
  _duration?:fhir.FhirElementArgs;
  /**
   * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
   */
  durationMax?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.durationMax
   */
  _durationMax?:fhir.FhirElementArgs;
  /**
   * The units of time for the duration, in UCUM units.
   */
  durationUnit?: fhir.FhirCode<UnitsOfTimeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.durationUnit
   */
  _durationUnit?:fhir.FhirElementArgs;
  /**
   * The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).
   */
  frequency?: fhir.FhirInteger|number|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.frequency
   */
  _frequency?:fhir.FhirElementArgs;
  /**
   * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
   */
  frequencyMax?: fhir.FhirInteger|number|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.frequencyMax
   */
  _frequencyMax?:fhir.FhirElementArgs;
  /**
   * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period.
   */
  period?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.period
   */
  _period?:fhir.FhirElementArgs;
  /**
   * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
   */
  periodMax?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.periodMax
   */
  _periodMax?:fhir.FhirElementArgs;
  /**
   * The units of time for the period in UCUM units.
   */
  periodUnit?: fhir.FhirCode<UnitsOfTimeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.periodUnit
   */
  _periodUnit?:fhir.FhirElementArgs;
  /**
   * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
   */
  dayOfWeek?: fhir.FhirCode<DaysOfWeekCodeType>[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.dayOfWeek
   */
  _dayOfWeek?:(fhir.FhirElementArgs|null)[];
  /**
   * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
   */
  timeOfDay?: fhir.FhirTime[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.timeOfDay
   */
  _timeOfDay?:(fhir.FhirElementArgs|null)[];
  /**
   * When more than one event is listed, the event is tied to the union of the specified events.
   */
  when?: fhir.FhirCode[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.when
   */
  _when?:(fhir.FhirElementArgs|null)[];
  /**
   * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
   */
  offset?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: Timing.repeat.offset
   */
  _offset?:fhir.FhirElementArgs;
}

/**
 * A set of rules that describe when the event is scheduled.
 */
export class TimingRepeat extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'TimingRepeat';
  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
   */
  public bounds?: (fhir.Duration|fhir.Range|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Timing.repeat.bounds[x]
   */
  protected static readonly _fts_boundsIsChoice:true = true;
  /**
   * If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.
   */
  public count?: fhir.FhirInteger|undefined;
  /**
   * A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).
   */
  public countMax?: fhir.FhirInteger|undefined;
  /**
   * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
   */
  public duration?: fhir.FhirDecimal|undefined;
  /**
   * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
   */
  public durationMax?: fhir.FhirDecimal|undefined;
  /**
   * The units of time for the duration, in UCUM units.
   */
  public durationUnit?: fhir.FhirCode<UnitsOfTimeCodeType>|undefined;
  /**
   * The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).
   */
  public frequency?: fhir.FhirInteger|undefined;
  /**
   * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
   */
  public frequencyMax?: fhir.FhirInteger|undefined;
  /**
   * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period.
   */
  public period?: fhir.FhirDecimal|undefined;
  /**
   * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
   */
  public periodMax?: fhir.FhirDecimal|undefined;
  /**
   * The units of time for the period in UCUM units.
   */
  public periodUnit?: fhir.FhirCode<UnitsOfTimeCodeType>|undefined;
  /**
   * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
   */
  public dayOfWeek: fhir.FhirCode<DaysOfWeekCodeType>[];
  /**
   * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
   */
  public timeOfDay: fhir.FhirTime[];
  /**
   * When more than one event is listed, the event is tied to the union of the specified events.
   */
  public when: fhir.FhirCode[];
  /**
   * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
   */
  public offset?: fhir.FhirUnsignedInt|undefined;
  /**
   * Default constructor for TimingRepeat - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TimingRepeatArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['bounds']) { this.bounds = source.bounds; }
    else if (source['boundsDuration']) { this.bounds = new fhir.Duration(source.boundsDuration, options); }
    else if (source['boundsRange']) { this.bounds = new fhir.Range(source.boundsRange, options); }
    else if (source['boundsPeriod']) { this.bounds = new fhir.Period(source.boundsPeriod, options); }
    if (source['count'] !== undefined) { this.count = new fhir.FhirInteger({value: source.count}, options); }
    if (source['_count']) {
      if (this.count) { this.count.addExtendedProperties(source._count!); }
      else { this.count = new fhir.FhirInteger(source._count as Partial<fhir.FhirIntegerArgs>, options); }
    }
    if (source['countMax'] !== undefined) { this.countMax = new fhir.FhirInteger({value: source.countMax}, options); }
    if (source['_countMax']) {
      if (this.countMax) { this.countMax.addExtendedProperties(source._countMax!); }
      else { this.countMax = new fhir.FhirInteger(source._countMax as Partial<fhir.FhirIntegerArgs>, options); }
    }
    if (source['duration'] !== undefined) { this.duration = new fhir.FhirDecimal({value: source.duration}, options); }
    if (source['_duration']) {
      if (this.duration) { this.duration.addExtendedProperties(source._duration!); }
      else { this.duration = new fhir.FhirDecimal(source._duration as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['durationMax'] !== undefined) { this.durationMax = new fhir.FhirDecimal({value: source.durationMax}, options); }
    if (source['_durationMax']) {
      if (this.durationMax) { this.durationMax.addExtendedProperties(source._durationMax!); }
      else { this.durationMax = new fhir.FhirDecimal(source._durationMax as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['durationUnit'] !== undefined) { this.durationUnit = new fhir.FhirCode<UnitsOfTimeCodeType>({value: source.durationUnit}, options); }
    if (source['_durationUnit']) {
      if (this.durationUnit) { this.durationUnit.addExtendedProperties(source._durationUnit!); }
      else { this.durationUnit = new fhir.FhirCode<UnitsOfTimeCodeType>(source._durationUnit as Partial<fhir.FhirCode>, options); }
    }
    if (source['frequency'] !== undefined) { this.frequency = new fhir.FhirInteger({value: source.frequency}, options); }
    if (source['_frequency']) {
      if (this.frequency) { this.frequency.addExtendedProperties(source._frequency!); }
      else { this.frequency = new fhir.FhirInteger(source._frequency as Partial<fhir.FhirIntegerArgs>, options); }
    }
    if (source['frequencyMax'] !== undefined) { this.frequencyMax = new fhir.FhirInteger({value: source.frequencyMax}, options); }
    if (source['_frequencyMax']) {
      if (this.frequencyMax) { this.frequencyMax.addExtendedProperties(source._frequencyMax!); }
      else { this.frequencyMax = new fhir.FhirInteger(source._frequencyMax as Partial<fhir.FhirIntegerArgs>, options); }
    }
    if (source['period'] !== undefined) { this.period = new fhir.FhirDecimal({value: source.period}, options); }
    if (source['_period']) {
      if (this.period) { this.period.addExtendedProperties(source._period!); }
      else { this.period = new fhir.FhirDecimal(source._period as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['periodMax'] !== undefined) { this.periodMax = new fhir.FhirDecimal({value: source.periodMax}, options); }
    if (source['_periodMax']) {
      if (this.periodMax) { this.periodMax.addExtendedProperties(source._periodMax!); }
      else { this.periodMax = new fhir.FhirDecimal(source._periodMax as Partial<fhir.FhirDecimalArgs>, options); }
    }
    if (source['periodUnit'] !== undefined) { this.periodUnit = new fhir.FhirCode<UnitsOfTimeCodeType>({value: source.periodUnit}, options); }
    if (source['_periodUnit']) {
      if (this.periodUnit) { this.periodUnit.addExtendedProperties(source._periodUnit!); }
      else { this.periodUnit = new fhir.FhirCode<UnitsOfTimeCodeType>(source._periodUnit as Partial<fhir.FhirCode>, options); }
    }
    if (source['dayOfWeek'] !== undefined) { this.dayOfWeek = source.dayOfWeek.map((x) => new fhir.FhirCode<DaysOfWeekCodeType>({value: x}, options)); }
    else { this.dayOfWeek = []; }
    if (source['_dayOfWeek']) {
      source._dayOfWeek.forEach((x,i) => {
        if (this.dayOfWeek.length >= i) { if (x) { this.dayOfWeek[i].addExtendedProperties(x); } }
        else { if (x) { this.dayOfWeek.push(new fhir.FhirCode<DaysOfWeekCodeType>(x as Partial<fhir.FhirCode>)); } }
      });
    }
    if (source['timeOfDay'] !== undefined) { this.timeOfDay = source.timeOfDay.map((x) => new fhir.FhirTime({value: x}, options)); }
    else { this.timeOfDay = []; }
    if (source['_timeOfDay']) {
      source._timeOfDay.forEach((x,i) => {
        if (this.timeOfDay.length >= i) { if (x) { this.timeOfDay[i].addExtendedProperties(x); } }
        else { if (x) { this.timeOfDay.push(new fhir.FhirTime(x as Partial<fhir.FhirTimeArgs>)); } }
      });
    }
    if (source['when'] !== undefined) { this.when = source.when.map((x) => new fhir.FhirCode({value: x}, options)); }
    else { this.when = []; }
    if (source['_when']) {
      source._when.forEach((x,i) => {
        if (this.when.length >= i) { if (x) { this.when[i].addExtendedProperties(x); } }
        else { if (x) { this.when.push(new fhir.FhirCode(x as Partial<fhir.FhirCodeArgs>)); } }
      });
    }
    if (source['offset'] !== undefined) { this.offset = new fhir.FhirUnsignedInt({value: source.offset}, options); }
    if (source['_offset']) {
      if (this.offset) { this.offset.addExtendedProperties(source._offset!); }
      else { this.offset = new fhir.FhirUnsignedInt(source._offset as Partial<fhir.FhirUnsignedIntArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Timing.repeat' }
    iss.push(...this.vOS('bounds',exp));
    iss.push(...this.vOS('count',exp));
    iss.push(...this.vOS('countMax',exp));
    iss.push(...this.vOS('duration',exp));
    iss.push(...this.vOS('durationMax',exp));
    iss.push(...this.vOSV('durationUnit',exp,'UnitsOfTime',UnitsOfTimeVsValidation,'r'));
    iss.push(...this.vOS('frequency',exp));
    iss.push(...this.vOS('frequencyMax',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('periodMax',exp));
    iss.push(...this.vOSV('periodUnit',exp,'UnitsOfTime',UnitsOfTimeVsValidation,'r'));
    iss.push(...this.vOAV('dayOfWeek',exp,'DaysOfWeek',DaysOfWeekVsValidation,'r'));
    iss.push(...this.vOA('timeOfDay',exp));
    iss.push(...this.vOAV('when',exp,'EventTiming',EventTimingVsValidation,'r'));
    iss.push(...this.vOS('offset',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Timing type.
 */
export interface TimingArgs extends fhir.FhirElementArgs {
  /**
   * Identifies specific times when the event occurs.
   */
  event?: fhir.FhirDateTime[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Timing.event
   */
  _event?:(fhir.FhirElementArgs|null)[];
  /**
   * A set of rules that describe when the event is scheduled.
   */
  repeat?: fhir.TimingRepeatArgs|undefined;
  /**
   * BID etc are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always at 7am and 6pm".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or the a structured representation should be used (in this case, specifying the two event times).
   */
  code?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
export class Timing extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Timing';
  /**
   * Identifies specific times when the event occurs.
   */
  public event: fhir.FhirDateTime[];
  /**
   * A set of rules that describe when the event is scheduled.
   */
  public repeat?: fhir.TimingRepeat|undefined;
  /**
   * BID etc are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always at 7am and 6pm".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or the a structured representation should be used (in this case, specifying the two event times).
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for Timing - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TimingArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['event'] !== undefined) { this.event = source.event.map((x) => new fhir.FhirDateTime({value: x}, options)); }
    else { this.event = []; }
    if (source['_event']) {
      source._event.forEach((x,i) => {
        if (this.event.length >= i) { if (x) { this.event[i].addExtendedProperties(x); } }
        else { if (x) { this.event.push(new fhir.FhirDateTime(x as Partial<fhir.FhirDateTimeArgs>)); } }
      });
    }
    if (source['repeat']) { this.repeat = new fhir.TimingRepeat(source.repeat, options); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Timing' }
    iss.push(...this.vOA('event',exp));
    iss.push(...this.vOS('repeat',exp));
    iss.push(...this.vOS('code',exp));
    return iss;
  }
}
