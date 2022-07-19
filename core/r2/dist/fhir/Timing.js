// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Timing
import * as fhir from '../fhir.js';
// @ts-ignore
import { UnitsOfTimeVsValidation } from '../fhirValueSets/UnitsOfTimeVsValidation.js';
// @ts-ignore
import { EventTimingVsValidation } from '../fhirValueSets/EventTimingVsValidation.js';
/**
 * Many timing schedules are determined by regular repetitions.
 */
export class TimingRepeat extends fhir.FhirElement {
    /**
     * Default constructor for TimingRepeat - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['bounds']) {
            this.bounds = source.bounds;
        }
        else if (source['boundsQuantity']) {
            this.bounds = new fhir.Quantity(source.boundsQuantity);
        }
        else if (source['boundsRange']) {
            this.bounds = new fhir.Range(source.boundsRange);
        }
        else if (source['boundsPeriod']) {
            this.bounds = new fhir.Period(source.boundsPeriod);
        }
        if (source['count']) {
            this.count = new fhir.FhirInteger({ value: source.count });
        }
        if (source['_count']) {
            if (this.count) {
                this.count.addExtendedProperties(source._count);
            }
            else {
                this.count = new fhir.FhirInteger(source._count);
            }
        }
        if (source['duration']) {
            this.duration = new fhir.FhirDecimal({ value: source.duration });
        }
        if (source['_duration']) {
            if (this.duration) {
                this.duration.addExtendedProperties(source._duration);
            }
            else {
                this.duration = new fhir.FhirDecimal(source._duration);
            }
        }
        if (source['durationMax']) {
            this.durationMax = new fhir.FhirDecimal({ value: source.durationMax });
        }
        if (source['_durationMax']) {
            if (this.durationMax) {
                this.durationMax.addExtendedProperties(source._durationMax);
            }
            else {
                this.durationMax = new fhir.FhirDecimal(source._durationMax);
            }
        }
        if (source['durationUnits']) {
            this.durationUnits = new fhir.FhirCode({ value: source.durationUnits });
        }
        if (source['_durationUnits']) {
            if (this.durationUnits) {
                this.durationUnits.addExtendedProperties(source._durationUnits);
            }
            else {
                this.durationUnits = new fhir.FhirCode(source._durationUnits);
            }
        }
        if (source['frequency']) {
            this.frequency = new fhir.FhirInteger({ value: source.frequency });
        }
        if (source['_frequency']) {
            if (this.frequency) {
                this.frequency.addExtendedProperties(source._frequency);
            }
            else {
                this.frequency = new fhir.FhirInteger(source._frequency);
            }
        }
        if (source['frequencyMax']) {
            this.frequencyMax = new fhir.FhirInteger({ value: source.frequencyMax });
        }
        if (source['_frequencyMax']) {
            if (this.frequencyMax) {
                this.frequencyMax.addExtendedProperties(source._frequencyMax);
            }
            else {
                this.frequencyMax = new fhir.FhirInteger(source._frequencyMax);
            }
        }
        if (source['period']) {
            this.period = new fhir.FhirDecimal({ value: source.period });
        }
        if (source['_period']) {
            if (this.period) {
                this.period.addExtendedProperties(source._period);
            }
            else {
                this.period = new fhir.FhirDecimal(source._period);
            }
        }
        if (source['periodMax']) {
            this.periodMax = new fhir.FhirDecimal({ value: source.periodMax });
        }
        if (source['_periodMax']) {
            if (this.periodMax) {
                this.periodMax.addExtendedProperties(source._periodMax);
            }
            else {
                this.periodMax = new fhir.FhirDecimal(source._periodMax);
            }
        }
        if (source['periodUnits']) {
            this.periodUnits = new fhir.FhirCode({ value: source.periodUnits });
        }
        if (source['_periodUnits']) {
            if (this.periodUnits) {
                this.periodUnits.addExtendedProperties(source._periodUnits);
            }
            else {
                this.periodUnits = new fhir.FhirCode(source._periodUnits);
            }
        }
        if (source['when']) {
            this.when = new fhir.FhirCode({ value: source.when });
        }
        if (source['_when']) {
            if (this.when) {
                this.when.addExtendedProperties(source._when);
            }
            else {
                this.when = new fhir.FhirCode(source._when);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Timing.repeat';
        }
        iss.push(...this.vOS('bounds', exp));
        iss.push(...this.vOS('count', exp));
        iss.push(...this.vOS('duration', exp));
        iss.push(...this.vOS('durationMax', exp));
        iss.push(...this.vOSV('durationUnits', exp, 'UnitsOfTime', UnitsOfTimeVsValidation, 'r'));
        iss.push(...this.vOS('frequency', exp));
        iss.push(...this.vOS('frequencyMax', exp));
        iss.push(...this.vOS('period', exp));
        iss.push(...this.vOS('periodMax', exp));
        iss.push(...this.vOSV('periodUnits', exp, 'UnitsOfTime', UnitsOfTimeVsValidation, 'r'));
        iss.push(...this.vOSV('when', exp, 'EventTiming', EventTimingVsValidation, 'r'));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
TimingRepeat._fts_dataType = 'TimingRepeat';
/**
 * Internal flag to properly serialize choice-type element Timing.repeat.bounds[x]
 */
TimingRepeat._fts_boundsIsChoice = true;
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds.
 */
export class Timing extends fhir.FhirElement {
    /**
     * Default constructor for Timing - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['event']) {
            this.event = source.event.map((x) => new fhir.FhirDateTime({ value: x }));
        }
        else {
            this.event = [];
        }
        if (source['_event']) {
            source._event.forEach((x, i) => {
                if (this.event.length >= i) {
                    if (x) {
                        this.event[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.event.push(new fhir.FhirDateTime(x));
                    }
                }
            });
        }
        if (source['repeat']) {
            this.repeat = new fhir.TimingRepeat(source.repeat);
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Timing';
        }
        iss.push(...this.vOA('event', exp));
        iss.push(...this.vOS('repeat', exp));
        iss.push(...this.vOS('code', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Timing._fts_dataType = 'Timing';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltaW5nLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9UaW1pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBRTNCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUd0RixhQUFhO0FBQ2IsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUF1R3RGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQWEsU0FBUSxJQUFJLENBQUMsV0FBVztJQXFEaEQ7O09BRUc7SUFDSCxZQUFZLFNBQW1DLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FBRTthQUNqRCxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQUU7YUFDekYsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FBRTthQUNoRixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUFFO1FBQ3hGLElBQUksTUFBTSxD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QU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUExQ0Q7O0dBRUc7QUFDNkIsb0JBQWEsR0FBVSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IFRpbWluZ1xyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgVW5pdHNPZlRpbWVDb2RlcywgIFVuaXRzT2ZUaW1lQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1VuaXRzT2ZUaW1lQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFVuaXRzT2ZUaW1lVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Vbml0c09mVGltZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRXZlbnRUaW1pbmdDb2RlcywgIEV2ZW50VGltaW5nQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0V2ZW50VGltaW5nQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEV2ZW50VGltaW5nVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9FdmVudFRpbWluZ1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBUaW1pbmdSZXBlYXQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltaW5nUmVwZWF0QXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBFaXRoZXIgYSBkdXJhdGlvbiBmb3IgdGhlIGxlbmd0aCBvZiB0aGUgdGltaW5nIHNjaGVkdWxlLCBhIHJhbmdlIG9mIHBvc3NpYmxlIGxlbmd0aCwgb3Igb3V0ZXIgYm91bmRzIGZvciBzdGFydCBhbmQvb3IgZW5kIGxpbWl0cyBvZiB0aGUgdGltaW5nIHNjaGVkdWxlLlxyXG4gICAqL1xyXG4gIGJvdW5kcz86IGZoaXIuUXVhbnRpdHl8Zmhpci5SYW5nZXxmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRWl0aGVyIGEgZHVyYXRpb24gZm9yIHRoZSBsZW5ndGggb2YgdGhlIHRpbWluZyBzY2hlZHVsZSwgYSByYW5nZSBvZiBwb3NzaWJsZSBsZW5ndGgsIG9yIG91dGVyIGJvdW5kcyBmb3Igc3RhcnQgYW5kL29yIGVuZCBsaW1pdHMgb2YgdGhlIHRpbWluZyBzY2hlZHVsZS5cclxuICAgKi9cclxuICBib3VuZHNRdWFudGl0eT86IGZoaXIuUXVhbnRpdHlBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFaXRoZXIgYSBkdXJhdGlvbiBmb3IgdGhlIGxlbmd0aCBvZiB0aGUgdGltaW5nIHNjaGVkdWxlLCBhIHJhbmdlIG9mIHBvc3NpYmxlIGxlbmd0aCwgb3Igb3V0ZXIgYm91bmRzIGZvciBzdGFydCBhbmQvb3IgZW5kIGxpbWl0cyBvZiB0aGUgdGltaW5nIHNjaGVkdWxlLlxyXG4gICAqL1xyXG4gIGJvdW5kc1JhbmdlPzogZmhpci5SYW5nZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEVpdGhlciBhIGR1cmF0aW9uIGZvciB0aGUgbGVuZ3RoIG9mIHRoZSB0aW1pbmcgc2NoZWR1bGUsIGEgcmFuZ2Ugb2YgcG9zc2libGUgbGVuZ3RoLCBvciBvdXRlciBib3VuZHMgZm9yIHN0YXJ0IGFuZC9vciBlbmQgbGltaXRzIG9mIHRoZSB0aW1pbmcgc2NoZWR1bGUuXHJcbiAgICovXHJcbiAgYm91bmRzUGVyaW9kPzogZmhpci5QZXJpb2RBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSZXBldGl0aW9ucyBtYXkgYmUgbGltaXRlZCBieSBlbmQgdGltZSBvciB0b3RhbCBvY2N1cnJlbmNlcy5cclxuICAgKi9cclxuICBjb3VudD86IGZoaXIuRmhpckludGVnZXJ8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogVGltaW5nLnJlcGVhdC5jb3VudFxyXG4gICAqL1xyXG4gIF9jb3VudD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogU29tZSBhY3Rpdml0aWVzIGFyZSBub3QgaW5zdGFudGFuZW91cyBhbmQgbmVlZCB0byBiZSBtYWludGFpbmVkIGZvciBhIHBlcmlvZCBvZiB0aW1lLlxyXG4gICAqL1xyXG4gIGR1cmF0aW9uPzogZmhpci5GaGlyRGVjaW1hbHxudW1iZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBUaW1pbmcucmVwZWF0LmR1cmF0aW9uXHJcbiAgICovXHJcbiAgX2R1cmF0aW9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBTb21lIGFjdGl2aXRpZXMgYXJlIG5vdCBpbnN0YW50YW5lb3VzIGFuZCBuZWVkIHRvIGJlIG1haW50YWluZWQgZm9yIGEgcGVyaW9kIG9mIHRpbWUuXHJcbiAgICovXHJcbiAgZHVyYXRpb25NYXg/OiBmaGlyLkZoaXJEZWNpbWFsfG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFRpbWluZy5yZXBlYXQuZHVyYXRpb25NYXhcclxuICAgKi9cclxuICBfZHVyYXRpb25NYXg/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB1bml0cyBvZiB0aW1lIGZvciB0aGUgZHVyYXRpb24sIGluIFVDVU0gdW5pdHMuXHJcbiAgICovXHJcbiAgZHVyYXRpb25Vbml0cz86IGZoaXIuRmhpckNvZGU8VW5pdHNPZlRpbWVDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogVGltaW5nLnJlcGVhdC5kdXJhdGlvblVuaXRzXHJcbiAgICovXHJcbiAgX2R1cmF0aW9uVW5pdHM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBhY3Rpb24gd2l0aGluIHRoZSBzcGVjaWZpZWQgcGVyaW9kIC8gcGVyaW9kIHJhbmdlIChpLmUuIGJvdGggcGVyaW9kIGFuZCBwZXJpb2RNYXggcHJvdmlkZWQpLlxyXG4gICAqL1xyXG4gIGZyZXF1ZW5jeT86IGZoaXIuRmhpckludGVnZXJ8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogVGltaW5nLnJlcGVhdC5mcmVxdWVuY3lcclxuICAgKi9cclxuICBfZnJlcXVlbmN5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJZiBwcmVzZW50LCBpbmRpY2F0ZXMgdGhhdCB0aGUgZnJlcXVlbmN5IGlzIGEgcmFuZ2UgLSBzbyByZXBlYXQgYmV0d2VlbiBbZnJlcXVlbmN5XSBhbmQgW2ZyZXF1ZW5jeU1heF0gdGltZXMgd2l0aGluIHRoZSBwZXJpb2Qgb3IgcGVyaW9kIHJhbmdlLlxyXG4gICAqL1xyXG4gIGZyZXF1ZW5jeU1heD86IGZoaXIuRmhpckludGVnZXJ8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogVGltaW5nLnJlcGVhdC5mcmVxdWVuY3lNYXhcclxuICAgKi9cclxuICBfZnJlcXVlbmN5TWF4PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGR1cmF0aW9uIG9mIHRpbWUgb3ZlciB3aGljaCByZXBldGl0aW9ucyBhcmUgdG8gb2NjdXI7IGUuZy4gdG8gZXhwcmVzcyBcIjMgdGltZXMgcGVyIGRheVwiLCAzIHdvdWxkIGJlIHRoZSBmcmVxdWVuY3kgYW5kIFwiMSBkYXlcIiB3b3VsZCBiZSB0aGUgcGVyaW9kLlxyXG4gICAqL1xyXG4gIHBlcmlvZD86IGZoaXIuRmhpckRlY2ltYWx8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogVGltaW5nLnJlcGVhdC5wZXJpb2RcclxuICAgKi9cclxuICBfcGVyaW9kPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBJZiBwcmVzZW50LCBpbmRpY2F0ZXMgdGhhdCB0aGUgcGVyaW9kIGlzIGEgcmFuZ2UgZnJvbSBbcGVyaW9kXSB0byBbcGVyaW9kTWF4XSwgYWxsb3dpbmcgZXhwcmVzc2luZyBjb25jZXB0cyBzdWNoIGFzIFwiZG8gdGhpcyBvbmNlIGV2ZXJ5IDMtNSBkYXlzLlxyXG4gICAqL1xyXG4gIHBlcmlvZE1heD86IGZoaXIuRmhpckRlY2ltYWx8bnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogVGltaW5nLnJlcGVhdC5wZXJpb2RNYXhcclxuICAgKi9cclxuICBfcGVyaW9kTWF4PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgdW5pdHMgb2YgdGltZSBmb3IgdGhlIHBlcmlvZCBpbiBVQ1VNIHVuaXRzLlxyXG4gICAqL1xyXG4gIHBlcmlvZFVuaXRzPzogZmhpci5GaGlyQ29kZTxVbml0c09mVGltZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBUaW1pbmcucmVwZWF0LnBlcmlvZFVuaXRzXHJcbiAgICovXHJcbiAgX3BlcmlvZFVuaXRzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaW1pbmdzIGFyZSBmcmVxdWVudGx5IGRldGVybWluZWQgYnkgb2NjdXJyZW5jZXMgc3VjaCBhcyB3YWtpbmcsIGVhdGluZyBhbmQgc2xlZXAuXHJcbiAgICovXHJcbiAgd2hlbj86IGZoaXIuRmhpckNvZGV8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogVGltaW5nLnJlcGVhdC53aGVuXHJcbiAgICovXHJcbiAgX3doZW4/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogTWFueSB0aW1pbmcgc2NoZWR1bGVzIGFyZSBkZXRlcm1pbmVkIGJ5IHJlZ3VsYXIgcmVwZXRpdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGltaW5nUmVwZWF0IGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdUaW1pbmdSZXBlYXQnO1xyXG4gIC8qKlxyXG4gICAqIEVpdGhlciBhIGR1cmF0aW9uIGZvciB0aGUgbGVuZ3RoIG9mIHRoZSB0aW1pbmcgc2NoZWR1bGUsIGEgcmFuZ2Ugb2YgcG9zc2libGUgbGVuZ3RoLCBvciBvdXRlciBib3VuZHMgZm9yIHN0YXJ0IGFuZC9vciBlbmQgbGltaXRzIG9mIHRoZSB0aW1pbmcgc2NoZWR1bGUuXHJcbiAgICovXHJcbiAgcHVibGljIGJvdW5kcz86IChmaGlyLlF1YW50aXR5fGZoaXIuUmFuZ2V8Zmhpci5QZXJpb2QpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IFRpbWluZy5yZXBlYXQuYm91bmRzW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX2JvdW5kc0lzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIFJlcGV0aXRpb25zIG1heSBiZSBsaW1pdGVkIGJ5IGVuZCB0aW1lIG9yIHRvdGFsIG9jY3VycmVuY2VzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3VudD86IGZoaXIuRmhpckludGVnZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNvbWUgYWN0aXZpdGllcyBhcmUgbm90IGluc3RhbnRhbmVvdXMgYW5kIG5lZWQgdG8gYmUgbWFpbnRhaW5lZCBmb3IgYSBwZXJpb2Qgb2YgdGltZS5cclxuICAgKi9cclxuICBwdWJsaWMgZHVyYXRpb24/OiBmaGlyLkZoaXJEZWNpbWFsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTb21lIGFjdGl2aXRpZXMgYXJlIG5vdCBpbnN0YW50YW5lb3VzIGFuZCBuZWVkIHRvIGJlIG1haW50YWluZWQgZm9yIGEgcGVyaW9kIG9mIHRpbWUuXHJcbiAgICovXHJcbiAgcHVibGljIGR1cmF0aW9uTWF4PzogZmhpci5GaGlyRGVjaW1hbHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHVuaXRzIG9mIHRpbWUgZm9yIHRoZSBkdXJhdGlvbiwgaW4gVUNVTSB1bml0cy5cclxuICAgKi9cclxuICBwdWJsaWMgZHVyYXRpb25Vbml0cz86IGZoaXIuRmhpckNvZGU8VW5pdHNPZlRpbWVDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBhY3Rpb24gd2l0aGluIHRoZSBzcGVjaWZpZWQgcGVyaW9kIC8gcGVyaW9kIHJhbmdlIChpLmUuIGJvdGggcGVyaW9kIGFuZCBwZXJpb2RNYXggcHJvdmlkZWQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBmcmVxdWVuY3k/OiBmaGlyLkZoaXJJbnRlZ2VyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBwcmVzZW50LCBpbmRpY2F0ZXMgdGhhdCB0aGUgZnJlcXVlbmN5IGlzIGEgcmFuZ2UgLSBzbyByZXBlYXQgYmV0d2VlbiBbZnJlcXVlbmN5XSBhbmQgW2ZyZXF1ZW5jeU1heF0gdGltZXMgd2l0aGluIHRoZSBwZXJpb2Qgb3IgcGVyaW9kIHJhbmdlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBmcmVxdWVuY3lNYXg/OiBmaGlyLkZoaXJJbnRlZ2VyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGR1cmF0aW9uIG9mIHRpbWUgb3ZlciB3aGljaCByZXBldGl0aW9ucyBhcmUgdG8gb2NjdXI7IGUuZy4gdG8gZXhwcmVzcyBcIjMgdGltZXMgcGVyIGRheVwiLCAzIHdvdWxkIGJlIHRoZSBmcmVxdWVuY3kgYW5kIFwiMSBkYXlcIiB3b3VsZCBiZSB0aGUgcGVyaW9kLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2Q/OiBmaGlyLkZoaXJEZWNpbWFsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBwcmVzZW50LCBpbmRpY2F0ZXMgdGhhdCB0aGUgcGVyaW9kIGlzIGEgcmFuZ2UgZnJvbSBbcGVyaW9kXSB0byBbcGVyaW9kTWF4XSwgYWxsb3dpbmcgZXhwcmVzc2luZyBjb25jZXB0cyBzdWNoIGFzIFwiZG8gdGhpcyBvbmNlIGV2ZXJ5IDMtNSBkYXlzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2RNYXg/OiBmaGlyLkZoaXJEZWNpbWFsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdW5pdHMgb2YgdGltZSBmb3IgdGhlIHBlcmlvZCBpbiBVQ1VNIHVuaXRzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwZXJpb2RVbml0cz86IGZoaXIuRmhpckNvZGU8VW5pdHNPZlRpbWVDb2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRpbWluZ3MgYXJlIGZyZXF1ZW50bHkgZGV0ZXJtaW5lZCBieSBvY2N1cnJlbmNlcyBzdWNoIGFzIHdha2luZywgZWF0aW5nIGFuZCBzbGVlcC5cclxuICAgKi9cclxuICBwdWJsaWMgd2hlbj86IGZoaXIuRmhpckNvZGV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFRpbWluZ1JlcGVhdCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFRpbWluZ1JlcGVhdEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydib3VuZHMnXSkgeyB0aGlzLmJvdW5kcyA9IHNvdXJjZS5ib3VuZHM7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYm91bmRzUXVhbnRpdHknXSkgeyB0aGlzLmJvdW5kcyA9IG5ldyBmaGlyLlF1YW50aXR5KHNvdXJjZS5ib3VuZHNRdWFudGl0eSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYm91bmRzUmFuZ2UnXSkgeyB0aGlzLmJvdW5kcyA9IG5ldyBmaGlyLlJhbmdlKHNvdXJjZS5ib3VuZHNSYW5nZSk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnYm91bmRzUGVyaW9kJ10pIHsgdGhpcy5ib3VuZHMgPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLmJvdW5kc1BlcmlvZCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvdW50J10pIHsgdGhpcy5jb3VudCA9IG5ldyBmaGlyLkZoaXJJbnRlZ2VyKHt2YWx1ZTogc291cmNlLmNvdW50fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jb3VudCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvdW50KSB7IHRoaXMuY291bnQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY291bnQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jb3VudCA9IG5ldyBmaGlyLkZoaXJJbnRlZ2VyKHNvdXJjZS5fY291bnQgYXMgUGFydGlhbDxmaGlyLkZoaXJJbnRlZ2VyQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydkdXJhdGlvbiddKSB7IHRoaXMuZHVyYXRpb24gPSBuZXcgZmhpci5GaGlyRGVjaW1hbCh7dmFsdWU6IHNvdXJjZS5kdXJhdGlvbn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZHVyYXRpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5kdXJhdGlvbikgeyB0aGlzLmR1cmF0aW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2R1cmF0aW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZHVyYXRpb24gPSBuZXcgZmhpci5GaGlyRGVjaW1hbChzb3VyY2UuX2R1cmF0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGVjaW1hbEFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZHVyYXRpb25NYXgnXSkgeyB0aGlzLmR1cmF0aW9uTWF4ID0gbmV3IGZoaXIuRmhpckRlY2ltYWwoe3ZhbHVlOiBzb3VyY2UuZHVyYXRpb25NYXh9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2R1cmF0aW9uTWF4J10pIHtcclxuICAgICAgaWYgKHRoaXMuZHVyYXRpb25NYXgpIHsgdGhpcy5kdXJhdGlvbk1heC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kdXJhdGlvbk1heCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmR1cmF0aW9uTWF4ID0gbmV3IGZoaXIuRmhpckRlY2ltYWwoc291cmNlLl9kdXJhdGlvbk1heCBhcyBQYXJ0aWFsPGZoaXIuRmhpckRlY2ltYWxBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2R1cmF0aW9uVW5pdHMnXSkgeyB0aGlzLmR1cmF0aW9uVW5pdHMgPSBuZXcgZmhpci5GaGlyQ29kZTxVbml0c09mVGltZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5kdXJhdGlvblVuaXRzfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kdXJhdGlvblVuaXRzJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZHVyYXRpb25Vbml0cykgeyB0aGlzLmR1cmF0aW9uVW5pdHMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZHVyYXRpb25Vbml0cyEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmR1cmF0aW9uVW5pdHMgPSBuZXcgZmhpci5GaGlyQ29kZTxVbml0c09mVGltZUNvZGVUeXBlPihzb3VyY2UuX2R1cmF0aW9uVW5pdHMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2ZyZXF1ZW5jeSddKSB7IHRoaXMuZnJlcXVlbmN5ID0gbmV3IGZoaXIuRmhpckludGVnZXIoe3ZhbHVlOiBzb3VyY2UuZnJlcXVlbmN5fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19mcmVxdWVuY3knXSkge1xyXG4gICAgICBpZiAodGhpcy5mcmVxdWVuY3kpIHsgdGhpcy5mcmVxdWVuY3kuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZnJlcXVlbmN5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZnJlcXVlbmN5ID0gbmV3IGZoaXIuRmhpckludGVnZXIoc291cmNlLl9mcmVxdWVuY3kgYXMgUGFydGlhbDxmaGlyLkZoaXJJbnRlZ2VyQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydmcmVxdWVuY3lNYXgnXSkgeyB0aGlzLmZyZXF1ZW5jeU1heCA9IG5ldyBmaGlyLkZoaXJJbnRlZ2VyKHt2YWx1ZTogc291cmNlLmZyZXF1ZW5jeU1heH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZnJlcXVlbmN5TWF4J10pIHtcclxuICAgICAgaWYgKHRoaXMuZnJlcXVlbmN5TWF4KSB7IHRoaXMuZnJlcXVlbmN5TWF4LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2ZyZXF1ZW5jeU1heCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmZyZXF1ZW5jeU1heCA9IG5ldyBmaGlyLkZoaXJJbnRlZ2VyKHNvdXJjZS5fZnJlcXVlbmN5TWF4IGFzIFBhcnRpYWw8Zmhpci5GaGlySW50ZWdlckFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncGVyaW9kJ10pIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5GaGlyRGVjaW1hbCh7dmFsdWU6IHNvdXJjZS5wZXJpb2R9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3BlcmlvZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnBlcmlvZCkgeyB0aGlzLnBlcmlvZC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9wZXJpb2QhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5wZXJpb2QgPSBuZXcgZmhpci5GaGlyRGVjaW1hbChzb3VyY2UuX3BlcmlvZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckRlY2ltYWxBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3BlcmlvZE1heCddKSB7IHRoaXMucGVyaW9kTWF4ID0gbmV3IGZoaXIuRmhpckRlY2ltYWwoe3ZhbHVlOiBzb3VyY2UucGVyaW9kTWF4fSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19wZXJpb2RNYXgnXSkge1xyXG4gICAgICBpZiAodGhpcy5wZXJpb2RNYXgpIHsgdGhpcy5wZXJpb2RNYXguYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fcGVyaW9kTWF4ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucGVyaW9kTWF4ID0gbmV3IGZoaXIuRmhpckRlY2ltYWwoc291cmNlLl9wZXJpb2RNYXggYXMgUGFydGlhbDxmaGlyLkZoaXJEZWNpbWFsQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2RVbml0cyddKSB7IHRoaXMucGVyaW9kVW5pdHMgPSBuZXcgZmhpci5GaGlyQ29kZTxVbml0c09mVGltZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5wZXJpb2RVbml0c30pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcGVyaW9kVW5pdHMnXSkge1xyXG4gICAgICBpZiAodGhpcy5wZXJpb2RVbml0cykgeyB0aGlzLnBlcmlvZFVuaXRzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3BlcmlvZFVuaXRzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucGVyaW9kVW5pdHMgPSBuZXcgZmhpci5GaGlyQ29kZTxVbml0c09mVGltZUNvZGVUeXBlPihzb3VyY2UuX3BlcmlvZFVuaXRzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd3aGVuJ10pIHsgdGhpcy53aGVuID0gbmV3IGZoaXIuRmhpckNvZGUoe3ZhbHVlOiBzb3VyY2Uud2hlbn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfd2hlbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLndoZW4pIHsgdGhpcy53aGVuLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3doZW4hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy53aGVuID0gbmV3IGZoaXIuRmhpckNvZGUoc291cmNlLl93aGVuIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1RpbWluZy5yZXBlYXQnIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdib3VuZHMnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2NvdW50JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdkdXJhdGlvbicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZHVyYXRpb25NYXgnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCdkdXJhdGlvblVuaXRzJyxleHAsJ1VuaXRzT2ZUaW1lJyxVbml0c09mVGltZVZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdmcmVxdWVuY3knLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2ZyZXF1ZW5jeU1heCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGVyaW9kJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwZXJpb2RNYXgnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCdwZXJpb2RVbml0cycsZXhwLCdVbml0c09mVGltZScsVW5pdHNPZlRpbWVWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ3doZW4nLGV4cCwnRXZlbnRUaW1pbmcnLEV2ZW50VGltaW5nVnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFRpbWluZyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUaW1pbmdBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEluIGFuIE1BUiwgZm9yIGluc3RhbmNlLCB5b3UgbmVlZCB0byB0YWtlIGEgZ2VuZXJhbCBzcGVjaWZpY2F0aW9uLCBhbmQgdHVybiBpdCBpbnRvIGEgcHJlY2lzZSBzcGVjaWZpY2F0aW9uLlxyXG4gICAqL1xyXG4gIGV2ZW50PzogZmhpci5GaGlyRGF0ZVRpbWVbXXwoc3RyaW5nfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBUaW1pbmcuZXZlbnRcclxuICAgKi9cclxuICBfZXZlbnQ/OihmaGlyLkZoaXJFbGVtZW50QXJnc3xudWxsKVtdO1xyXG4gIC8qKlxyXG4gICAqIE1hbnkgdGltaW5nIHNjaGVkdWxlcyBhcmUgZGV0ZXJtaW5lZCBieSByZWd1bGFyIHJlcGV0aXRpb25zLlxyXG4gICAqL1xyXG4gIHJlcGVhdD86IGZoaXIuVGltaW5nUmVwZWF0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBjb2RlIGZvciB0aGUgdGltaW5nIHBhdHRlcm4uIFNvbWUgY29kZXMgc3VjaCBhcyBCSUQgYXJlIHViaXF1aXRvdXMsIGJ1dCBtYW55IGluc3RpdHV0aW9ucyBkZWZpbmUgdGhlaXIgb3duIGFkZGl0aW9uYWwgY29kZXMuXHJcbiAgICovXHJcbiAgY29kZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTcGVjaWZpZXMgYW4gZXZlbnQgdGhhdCBtYXkgb2NjdXIgbXVsdGlwbGUgdGltZXMuIFRpbWluZyBzY2hlZHVsZXMgYXJlIHVzZWQgdG8gcmVjb3JkIHdoZW4gdGhpbmdzIGFyZSBleHBlY3RlZCBvciByZXF1ZXN0ZWQgdG8gb2NjdXIuIFRoZSBtb3N0IGNvbW1vbiB1c2FnZSBpcyBpbiBkb3NhZ2UgaW5zdHJ1Y3Rpb25zIGZvciBtZWRpY2F0aW9ucy4gVGhleSBhcmUgYWxzbyB1c2VkIHdoZW4gcGxhbm5pbmcgY2FyZSBvZiB2YXJpb3VzIGtpbmRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRpbWluZyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnVGltaW5nJztcclxuICAvKipcclxuICAgKiBJbiBhbiBNQVIsIGZvciBpbnN0YW5jZSwgeW91IG5lZWQgdG8gdGFrZSBhIGdlbmVyYWwgc3BlY2lmaWNhdGlvbiwgYW5kIHR1cm4gaXQgaW50byBhIHByZWNpc2Ugc3BlY2lmaWNhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZXZlbnQ6IGZoaXIuRmhpckRhdGVUaW1lW107XHJcbiAgLyoqXHJcbiAgICogTWFueSB0aW1pbmcgc2NoZWR1bGVzIGFyZSBkZXRlcm1pbmVkIGJ5IHJlZ3VsYXIgcmVwZXRpdGlvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIHJlcGVhdD86IGZoaXIuVGltaW5nUmVwZWF0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNvZGUgZm9yIHRoZSB0aW1pbmcgcGF0dGVybi4gU29tZSBjb2RlcyBzdWNoIGFzIEJJRCBhcmUgdWJpcXVpdG91cywgYnV0IG1hbnkgaW5zdGl0dXRpb25zIGRlZmluZSB0aGVpciBvd24gYWRkaXRpb25hbCBjb2Rlcy5cclxuICAgKi9cclxuICBwdWJsaWMgY29kZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBUaW1pbmcgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxUaW1pbmdBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnZXZlbnQnXSkgeyB0aGlzLmV2ZW50ID0gc291cmNlLmV2ZW50Lm1hcCgoeCkgPT4gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZXZlbnQgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2V2ZW50J10pIHtcclxuICAgICAgc291cmNlLl9ldmVudC5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudC5sZW5ndGggPj0gaSkgeyBpZiAoeCkgeyB0aGlzLmV2ZW50W2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMuZXZlbnQucHVzaChuZXcgZmhpci5GaGlyRGF0ZVRpbWUoeCBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pKTsgfSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsncmVwZWF0J10pIHsgdGhpcy5yZXBlYXQgPSBuZXcgZmhpci5UaW1pbmdSZXBlYXQoc291cmNlLnJlcGVhdCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvZGUnXSkgeyB0aGlzLmNvZGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmNvZGUpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnVGltaW5nJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPQSgnZXZlbnQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ3JlcGVhdCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnY29kZScsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=