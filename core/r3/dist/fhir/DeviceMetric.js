// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceMetric
import * as fhir from '../fhir.js';
// @ts-ignore
import { MetricCalibrationTypeVsValidation } from '../fhirValueSets/MetricCalibrationTypeVsValidation.js';
// @ts-ignore
import { MetricCalibrationStateVsValidation } from '../fhirValueSets/MetricCalibrationStateVsValidation.js';
// @ts-ignore
import { MetricOperationalStatusVsValidation } from '../fhirValueSets/MetricOperationalStatusVsValidation.js';
// @ts-ignore
import { MetricColorVsValidation } from '../fhirValueSets/MetricColorVsValidation.js';
// @ts-ignore
import { MetricCategoryVsValidation } from '../fhirValueSets/MetricCategoryVsValidation.js';
/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export class DeviceMetricCalibration extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceMetricCalibration - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['type'] !== undefined) {
            this.type = new fhir.FhirCode({ value: source.type }, options);
        }
        if (source['_type']) {
            if (this.type) {
                this.type.addExtendedProperties(source._type);
            }
            else {
                this.type = new fhir.FhirCode(source._type, options);
            }
        }
        if (source['state'] !== undefined) {
            this.state = new fhir.FhirCode({ value: source.state }, options);
        }
        if (source['_state']) {
            if (this.state) {
                this.state.addExtendedProperties(source._state);
            }
            else {
                this.state = new fhir.FhirCode(source._state, options);
            }
        }
        if (source['time'] !== undefined) {
            this.time = new fhir.FhirInstant({ value: source.time }, options);
        }
        if (source['_time']) {
            if (this.time) {
                this.time.addExtendedProperties(source._time);
            }
            else {
                this.time = new fhir.FhirInstant(source._time, options);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DeviceMetric.calibration';
        }
        iss.push(...this.vOSV('type', exp, 'MetricCalibrationType', MetricCalibrationTypeVsValidation, 'r'));
        iss.push(...this.vOSV('state', exp, 'MetricCalibrationState', MetricCalibrationStateVsValidation, 'r'));
        iss.push(...this.vOS('time', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DeviceMetricCalibration._fts_dataType = 'DeviceMetricCalibration';
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export class DeviceMetric extends fhir.DomainResource {
    /**
     * Default constructor for DeviceMetric - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'DeviceMetric';
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier, options);
        }
        else {
            this.identifier = null;
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type, options);
        }
        else {
            this.type = null;
        }
        if (source['unit']) {
            this.unit = new fhir.CodeableConcept(source.unit, options);
        }
        if (source['source']) {
            this.source = new fhir.Reference(source.source, options);
        }
        if (source['parent']) {
            this.parent = new fhir.Reference(source.parent, options);
        }
        if (source['operationalStatus'] !== undefined) {
            this.operationalStatus = new fhir.FhirCode({ value: source.operationalStatus }, options);
        }
        if (source['_operationalStatus']) {
            if (this.operationalStatus) {
                this.operationalStatus.addExtendedProperties(source._operationalStatus);
            }
            else {
                this.operationalStatus = new fhir.FhirCode(source._operationalStatus, options);
            }
        }
        if (source['color'] !== undefined) {
            this.color = new fhir.FhirCode({ value: source.color }, options);
        }
        if (source['_color']) {
            if (this.color) {
                this.color.addExtendedProperties(source._color);
            }
            else {
                this.color = new fhir.FhirCode(source._color, options);
            }
        }
        if (source['category'] !== undefined) {
            this.category = new fhir.FhirCode({ value: source.category }, options);
        }
        else {
            this.category = null;
        }
        if (source['_category']) {
            if (this.category) {
                this.category.addExtendedProperties(source._category);
            }
            else {
                this.category = new fhir.FhirCode(source._category, options);
            }
        }
        if (source['measurementPeriod']) {
            this.measurementPeriod = new fhir.Timing(source.measurementPeriod, options);
        }
        if (source['calibration']) {
            this.calibration = source.calibration.map((x) => new fhir.DeviceMetricCalibration(x, options));
        }
        else {
            this.calibration = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DeviceMetric';
        }
        iss.push(...this.vRS('identifier', exp));
        iss.push(...this.vRS('type', exp));
        iss.push(...this.vOS('unit', exp));
        iss.push(...this.vOS('source', exp));
        iss.push(...this.vOS('parent', exp));
        iss.push(...this.vOSV('operationalStatus', exp, 'MetricOperationalStatus', MetricOperationalStatusVsValidation, 'r'));
        iss.push(...this.vOSV('color', exp, 'MetricColor', MetricColorVsValidation, 'r'));
        iss.push(...this.vRSV('category', exp, 'MetricCategory', MetricCategoryVsValidation, 'r'));
        iss.push(...this.vOS('measurementPeriod', exp));
        iss.push(...this.vOA('calibration', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DeviceMetric._fts_dataType = 'DeviceMetric';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlTWV0cmljLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9EZXZpY2VNZXRyaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUcxRyxhQUFhO0FBQ2IsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFHNUcsYUFBYTtBQUNiLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRzlHLGFBQWE7QUFDYixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUd0RixhQUFhO0FBQ2IsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUErQjVGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHVCQUF3QixTQUFRLElBQUksQ0FBQyxlQUFlO0lBaUIvRDs7T0FFRztJQUNILFlBQVksU0FBOEMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDcEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBZ0MsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDbEksSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtB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LEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBQyxHQUFHLEVBQUMseUJBQXlCLEVBQUMsbUNBQW1DLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsSCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLGFBQWEsRUFBQyx1QkFBdUIsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUMsZ0JBQWdCLEVBQUMsMEJBQTBCLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFsR0Q7O0dBRUc7QUFDNkIsMEJBQWEsR0FBVSxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IERldmljZU1ldHJpY1xyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTWV0cmljQ2FsaWJyYXRpb25UeXBlQ29kZXMsICBNZXRyaWNDYWxpYnJhdGlvblR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTWV0cmljQ2FsaWJyYXRpb25UeXBlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE1ldHJpY0NhbGlicmF0aW9uVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTWV0cmljQ2FsaWJyYXRpb25UeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBNZXRyaWNDYWxpYnJhdGlvblN0YXRlQ29kZXMsICBNZXRyaWNDYWxpYnJhdGlvblN0YXRlQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL01ldHJpY0NhbGlicmF0aW9uU3RhdGVDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTWV0cmljQ2FsaWJyYXRpb25TdGF0ZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTWV0cmljQ2FsaWJyYXRpb25TdGF0ZVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTWV0cmljT3BlcmF0aW9uYWxTdGF0dXNDb2RlcywgIE1ldHJpY09wZXJhdGlvbmFsU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL01ldHJpY09wZXJhdGlvbmFsU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE1ldHJpY09wZXJhdGlvbmFsU3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9NZXRyaWNPcGVyYXRpb25hbFN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTWV0cmljQ29sb3JDb2RlcywgIE1ldHJpY0NvbG9yQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL01ldHJpY0NvbG9yQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE1ldHJpY0NvbG9yVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9NZXRyaWNDb2xvclZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgTWV0cmljQ2F0ZWdvcnlDb2RlcywgIE1ldHJpY0NhdGVnb3J5Q29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL01ldHJpY0NhdGVnb3J5Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE1ldHJpY0NhdGVnb3J5VnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9NZXRyaWNDYXRlZ29yeVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBEZXZpY2VNZXRyaWNDYWxpYnJhdGlvbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VNZXRyaWNDYWxpYnJhdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlcyB0aGUgdHlwZSBvZiB0aGUgY2FsaWJyYXRpb24gbWV0aG9kLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkZoaXJDb2RlPE1ldHJpY0NhbGlicmF0aW9uVHlwZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXZpY2VNZXRyaWMuY2FsaWJyYXRpb24udHlwZVxyXG4gICAqL1xyXG4gIF90eXBlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBEZXNjcmliZXMgdGhlIHN0YXRlIG9mIHRoZSBjYWxpYnJhdGlvbi5cclxuICAgKi9cclxuICBzdGF0ZT86IGZoaXIuRmhpckNvZGU8TWV0cmljQ2FsaWJyYXRpb25TdGF0ZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXZpY2VNZXRyaWMuY2FsaWJyYXRpb24uc3RhdGVcclxuICAgKi9cclxuICBfc3RhdGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlcyB0aGUgdGltZSBsYXN0IGNhbGlicmF0aW9uIGhhcyBiZWVuIHBlcmZvcm1lZC5cclxuICAgKi9cclxuICB0aW1lPzogZmhpci5GaGlySW5zdGFudHxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXZpY2VNZXRyaWMuY2FsaWJyYXRpb24udGltZVxyXG4gICAqL1xyXG4gIF90aW1lPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyB0aGUgY2FsaWJyYXRpb25zIHRoYXQgaGF2ZSBiZWVuIHBlcmZvcm1lZCBvciB0aGF0IGFyZSByZXF1aXJlZCB0byBiZSBwZXJmb3JtZWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGV2aWNlTWV0cmljQ2FsaWJyYXRpb24gZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdEZXZpY2VNZXRyaWNDYWxpYnJhdGlvbic7XHJcbiAgLyoqXHJcbiAgICogRGVzY3JpYmVzIHRoZSB0eXBlIG9mIHRoZSBjYWxpYnJhdGlvbiBtZXRob2QuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU/OiBmaGlyLkZoaXJDb2RlPE1ldHJpY0NhbGlicmF0aW9uVHlwZUNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVzY3JpYmVzIHRoZSBzdGF0ZSBvZiB0aGUgY2FsaWJyYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRlPzogZmhpci5GaGlyQ29kZTxNZXRyaWNDYWxpYnJhdGlvblN0YXRlQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXNjcmliZXMgdGhlIHRpbWUgbGFzdCBjYWxpYnJhdGlvbiBoYXMgYmVlbiBwZXJmb3JtZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHRpbWU/OiBmaGlyLkZoaXJJbnN0YW50fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBEZXZpY2VNZXRyaWNDYWxpYnJhdGlvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPERldmljZU1ldHJpY0NhbGlicmF0aW9uQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudHlwZSA9IG5ldyBmaGlyLkZoaXJDb2RlPE1ldHJpY0NhbGlicmF0aW9uVHlwZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS50eXBlfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ190eXBlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudHlwZSkgeyB0aGlzLnR5cGUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdHlwZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxNZXRyaWNDYWxpYnJhdGlvblR5cGVDb2RlVHlwZT4oc291cmNlLl90eXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzdGF0ZSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zdGF0ZSA9IG5ldyBmaGlyLkZoaXJDb2RlPE1ldHJpY0NhbGlicmF0aW9uU3RhdGVDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdGV9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXRlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUpIHsgdGhpcy5zdGF0ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnN0YXRlID0gbmV3IGZoaXIuRmhpckNvZGU8TWV0cmljQ2FsaWJyYXRpb25TdGF0ZUNvZGVUeXBlPihzb3VyY2UuX3N0YXRlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd0aW1lJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnRpbWUgPSBuZXcgZmhpci5GaGlySW5zdGFudCh7dmFsdWU6IHNvdXJjZS50aW1lfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ190aW1lJ10pIHtcclxuICAgICAgaWYgKHRoaXMudGltZSkgeyB0aGlzLnRpbWUuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdGltZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnRpbWUgPSBuZXcgZmhpci5GaGlySW5zdGFudChzb3VyY2UuX3RpbWUgYXMgUGFydGlhbDxmaGlyLkZoaXJJbnN0YW50QXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRGV2aWNlTWV0cmljLmNhbGlicmF0aW9uJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ3R5cGUnLGV4cCwnTWV0cmljQ2FsaWJyYXRpb25UeXBlJyxNZXRyaWNDYWxpYnJhdGlvblR5cGVWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ3N0YXRlJyxleHAsJ01ldHJpY0NhbGlicmF0aW9uU3RhdGUnLE1ldHJpY0NhbGlicmF0aW9uU3RhdGVWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndGltZScsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgRGV2aWNlTWV0cmljIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERldmljZU1ldHJpY0FyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkRldmljZU1ldHJpY1wifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXNjcmliZXMgdGhlIHVuaXF1ZSBpZGVudGlmaWNhdGlvbiBvZiB0aGlzIG1ldHJpYyB0aGF0IGhhcyBiZWVuIGFzc2lnbmVkIGJ5IHRoZSBkZXZpY2Ugb3IgZ2F0ZXdheSBzb2Z0d2FyZS4gRm9yIGV4YW1wbGU6IGhhbmRsZSBJRC4gIEl0IHNob3VsZCBiZSBub3RlZCB0aGF0IGluIG9yZGVyIHRvIG1ha2UgdGhlIGlkZW50aWZpZXIgdW5pcXVlLCB0aGUgc3lzdGVtIGVsZW1lbnQgb2YgdGhlIGlkZW50aWZpZXIgc2hvdWxkIGJlIHNldCB0byB0aGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGRldmljZS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRGV2aWNlTWV0cmljLnR5cGUgY2FuIGJlIHJlZmVycmVkIHRvIGVpdGhlciBJRUVFIDExMDczLTEwMTAxIG9yIExPSU5DLlxyXG4gICAqL1xyXG4gIHR5cGU6IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIERldmljZU1ldHJpYy51bml0IGNhbiByZWZlciB0byBlaXRoZXIgVUNVTSBvciBwcmVmZXJhYmxlIGEgUlRNTVMgY29kaW5nIHN5c3RlbS5cclxuICAgKi9cclxuICB1bml0PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXNjcmliZXMgdGhlIGxpbmsgdG8gdGhlICBEZXZpY2UgdGhhdCB0aGlzIERldmljZU1ldHJpYyBiZWxvbmdzIHRvIGFuZCB0aGF0IGNvbnRhaW5zIGFkbWluaXN0cmF0aXZlIGRldmljZSBpbmZvcm1hdGlvbiBzdWNoIGFzIG1hbnVmYWN0dXJlciwgc2VyaWFsIG51bWJlciwgZXRjLlxyXG4gICAqL1xyXG4gIHNvdXJjZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVzY3JpYmVzIHRoZSBsaW5rIHRvIHRoZSAgRGV2aWNlQ29tcG9uZW50IHRoYXQgdGhpcyBEZXZpY2VNZXRyaWMgYmVsb25ncyB0byBhbmQgdGhhdCBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBsb2NhdGlvbiBvZiB0aGlzIERldmljZU1ldHJpYyBpbiB0aGUgY29udGFpbm1lbnQgc3RydWN0dXJlIG9mIHRoZSBwYXJlbnQgRGV2aWNlLiBBbiBleGFtcGxlIHdvdWxkIGJlIGEgRGV2aWNlQ29tcG9uZW50IHRoYXQgcmVwcmVzZW50cyBhIENoYW5uZWwuIFRoaXMgcmVmZXJlbmNlIGNhbiBiZSB1c2VkIGJ5IGEgY2xpZW50IGFwcGxpY2F0aW9uIHRvIGRpc3Rpbmd1aXNoIERldmljZU1ldHJpY3MgdGhhdCBoYXZlIHRoZSBzYW1lIHR5cGUsIGJ1dCBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYmFzZWQgb24gdGhlaXIgY29udGFpbm1lbnQgbG9jYXRpb24uXHJcbiAgICovXHJcbiAgcGFyZW50PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgY3VycmVudCBvcGVyYXRpb25hbCBzdGF0ZSBvZiB0aGUgZGV2aWNlLiBGb3IgZXhhbXBsZTogT24sIE9mZiwgU3RhbmRieSwgZXRjLlxyXG4gICAqL1xyXG4gIG9wZXJhdGlvbmFsU3RhdHVzPzogZmhpci5GaGlyQ29kZTxNZXRyaWNPcGVyYXRpb25hbFN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEZXZpY2VNZXRyaWMub3BlcmF0aW9uYWxTdGF0dXNcclxuICAgKi9cclxuICBfb3BlcmF0aW9uYWxTdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlcyB0aGUgY29sb3IgcmVwcmVzZW50YXRpb24gZm9yIHRoZSBtZXRyaWMuIFRoaXMgaXMgb2Z0ZW4gdXNlZCB0byBhaWQgY2xpbmljaWFucyB0byB0cmFjayBhbmQgaWRlbnRpZnkgcGFyYW1ldGVyIHR5cGVzIGJ5IGNvbG9yLiBJbiBwcmFjdGljZSwgY29uc2lkZXIgYSBQYXRpZW50IE1vbml0b3IgdGhhdCBoYXMgRUNHL0hSIGFuZCBQbGV0aCBmb3IgZXhhbXBsZTsgdGhlIHBhcmFtZXRlcnMgYXJlIGRpc3BsYXllZCBpbiBkaWZmZXJlbnQgY2hhcmFjdGVyaXN0aWMgY29sb3JzLCBzdWNoIGFzIEhSLWJsdWUsIEJQLWdyZWVuLCBhbmQgUFIgYW5kIFNwTzItIG1hZ2VudGEuXHJcbiAgICovXHJcbiAgY29sb3I/OiBmaGlyLkZoaXJDb2RlPE1ldHJpY0NvbG9yQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERldmljZU1ldHJpYy5jb2xvclxyXG4gICAqL1xyXG4gIF9jb2xvcj86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHRoZSBjYXRlZ29yeSBvZiB0aGUgb2JzZXJ2YXRpb24gZ2VuZXJhdGlvbiBwcm9jZXNzLiBBIERldmljZU1ldHJpYyBjYW4gYmUgZm9yIGV4YW1wbGUgYSBzZXR0aW5nLCBtZWFzdXJlbWVudCwgb3IgY2FsY3VsYXRpb24uXHJcbiAgICovXHJcbiAgY2F0ZWdvcnk6IGZoaXIuRmhpckNvZGU8TWV0cmljQ2F0ZWdvcnlDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRGV2aWNlTWV0cmljLmNhdGVnb3J5XHJcbiAgICovXHJcbiAgX2NhdGVnb3J5PzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBEZXNjcmliZXMgdGhlIG1lYXN1cmVtZW50IHJlcGV0aXRpb24gdGltZS4gVGhpcyBpcyBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgYXMgdGhlIHVwZGF0ZSBwZXJpb2QuIFRoZSBtZWFzdXJlbWVudCByZXBldGl0aW9uIHRpbWUgY2FuIHJhbmdlIGZyb20gbWlsbGlzZWNvbmRzIHVwIHRvIGhvdXJzLiBBbiBleGFtcGxlIGZvciBhIG1lYXN1cmVtZW50IHJlcGV0aXRpb24gdGltZSBpbiB0aGUgcmFuZ2Ugb2YgbWlsbGlzZWNvbmRzIGlzIHRoZSBzYW1wbGluZyByYXRlIG9mIGFuIEVDRy4gQW4gZXhhbXBsZSBmb3IgYSBtZWFzdXJlbWVudCByZXBldGl0aW9uIHRpbWUgaW4gdGhlIHJhbmdlIG9mIGhvdXJzIGlzIGEgTklCUCB0aGF0IGlzIHRyaWdnZXJlZCBhdXRvbWF0aWNhbGx5IGV2ZXJ5IGhvdXIuIFRoZSB1cGRhdGUgcGVyaW9kIG1heSBiZSBkaWZmZXJlbnQgdGhhbiB0aGUgbWVhc3VyZW1lbnQgcmVwZXRpdGlvbiB0aW1lLCBpZiB0aGUgZGV2aWNlIGRvZXMgbm90IHVwZGF0ZSB0aGUgcHVibGlzaGVkIG9ic2VydmVkIHZhbHVlIHdpdGggdGhlIHNhbWUgZnJlcXVlbmN5IGFzIGl0IHdhcyBtZWFzdXJlZC5cclxuICAgKi9cclxuICBtZWFzdXJlbWVudFBlcmlvZD86IGZoaXIuVGltaW5nQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVzY3JpYmVzIHRoZSBjYWxpYnJhdGlvbnMgdGhhdCBoYXZlIGJlZW4gcGVyZm9ybWVkIG9yIHRoYXQgYXJlIHJlcXVpcmVkIHRvIGJlIHBlcmZvcm1lZC5cclxuICAgKi9cclxuICBjYWxpYnJhdGlvbj86IGZoaXIuRGV2aWNlTWV0cmljQ2FsaWJyYXRpb25BcmdzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogRGVzY3JpYmVzIGEgbWVhc3VyZW1lbnQsIGNhbGN1bGF0aW9uIG9yIHNldHRpbmcgY2FwYWJpbGl0eSBvZiBhIG1lZGljYWwgZGV2aWNlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERldmljZU1ldHJpYyBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRGV2aWNlTWV0cmljJztcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgcmVzb3VyY2VUeXBlOiBcIkRldmljZU1ldHJpY1wiO1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlcyB0aGUgdW5pcXVlIGlkZW50aWZpY2F0aW9uIG9mIHRoaXMgbWV0cmljIHRoYXQgaGFzIGJlZW4gYXNzaWduZWQgYnkgdGhlIGRldmljZSBvciBnYXRld2F5IHNvZnR3YXJlLiBGb3IgZXhhbXBsZTogaGFuZGxlIElELiAgSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQgaW4gb3JkZXIgdG8gbWFrZSB0aGUgaWRlbnRpZmllciB1bmlxdWUsIHRoZSBzeXN0ZW0gZWxlbWVudCBvZiB0aGUgaWRlbnRpZmllciBzaG91bGQgYmUgc2V0IHRvIHRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZGV2aWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJ8bnVsbDtcclxuICAvKipcclxuICAgKiBEZXZpY2VNZXRyaWMudHlwZSBjYW4gYmUgcmVmZXJyZWQgdG8gZWl0aGVyIElFRUUgMTEwNzMtMTAxMDEgb3IgTE9JTkMuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU6IGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGw7XHJcbiAgLyoqXHJcbiAgICogRGV2aWNlTWV0cmljLnVuaXQgY2FuIHJlZmVyIHRvIGVpdGhlciBVQ1VNIG9yIHByZWZlcmFibGUgYSBSVE1NUyBjb2Rpbmcgc3lzdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1bml0PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlc2NyaWJlcyB0aGUgbGluayB0byB0aGUgIERldmljZSB0aGF0IHRoaXMgRGV2aWNlTWV0cmljIGJlbG9uZ3MgdG8gYW5kIHRoYXQgY29udGFpbnMgYWRtaW5pc3RyYXRpdmUgZGV2aWNlIGluZm9ybWF0aW9uIHN1Y2ggYXMgbWFudWZhY3R1cmVyLCBzZXJpYWwgbnVtYmVyLCBldGMuXHJcbiAgICovXHJcbiAgcHVibGljIHNvdXJjZT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXNjcmliZXMgdGhlIGxpbmsgdG8gdGhlICBEZXZpY2VDb21wb25lbnQgdGhhdCB0aGlzIERldmljZU1ldHJpYyBiZWxvbmdzIHRvIGFuZCB0aGF0IHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2F0aW9uIG9mIHRoaXMgRGV2aWNlTWV0cmljIGluIHRoZSBjb250YWlubWVudCBzdHJ1Y3R1cmUgb2YgdGhlIHBhcmVudCBEZXZpY2UuIEFuIGV4YW1wbGUgd291bGQgYmUgYSBEZXZpY2VDb21wb25lbnQgdGhhdCByZXByZXNlbnRzIGEgQ2hhbm5lbC4gVGhpcyByZWZlcmVuY2UgY2FuIGJlIHVzZWQgYnkgYSBjbGllbnQgYXBwbGljYXRpb24gdG8gZGlzdGluZ3Vpc2ggRGV2aWNlTWV0cmljcyB0aGF0IGhhdmUgdGhlIHNhbWUgdHlwZSwgYnV0IHNob3VsZCBiZSBpbnRlcnByZXRlZCBiYXNlZCBvbiB0aGVpciBjb250YWlubWVudCBsb2NhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgcGFyZW50PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBjdXJyZW50IG9wZXJhdGlvbmFsIHN0YXRlIG9mIHRoZSBkZXZpY2UuIEZvciBleGFtcGxlOiBPbiwgT2ZmLCBTdGFuZGJ5LCBldGMuXHJcbiAgICovXHJcbiAgcHVibGljIG9wZXJhdGlvbmFsU3RhdHVzPzogZmhpci5GaGlyQ29kZTxNZXRyaWNPcGVyYXRpb25hbFN0YXR1c0NvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVzY3JpYmVzIHRoZSBjb2xvciByZXByZXNlbnRhdGlvbiBmb3IgdGhlIG1ldHJpYy4gVGhpcyBpcyBvZnRlbiB1c2VkIHRvIGFpZCBjbGluaWNpYW5zIHRvIHRyYWNrIGFuZCBpZGVudGlmeSBwYXJhbWV0ZXIgdHlwZXMgYnkgY29sb3IuIEluIHByYWN0aWNlLCBjb25zaWRlciBhIFBhdGllbnQgTW9uaXRvciB0aGF0IGhhcyBFQ0cvSFIgYW5kIFBsZXRoIGZvciBleGFtcGxlOyB0aGUgcGFyYW1ldGVycyBhcmUgZGlzcGxheWVkIGluIGRpZmZlcmVudCBjaGFyYWN0ZXJpc3RpYyBjb2xvcnMsIHN1Y2ggYXMgSFItYmx1ZSwgQlAtZ3JlZW4sIGFuZCBQUiBhbmQgU3BPMi0gbWFnZW50YS5cclxuICAgKi9cclxuICBwdWJsaWMgY29sb3I/OiBmaGlyLkZoaXJDb2RlPE1ldHJpY0NvbG9yQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGNhdGVnb3J5IG9mIHRoZSBvYnNlcnZhdGlvbiBnZW5lcmF0aW9uIHByb2Nlc3MuIEEgRGV2aWNlTWV0cmljIGNhbiBiZSBmb3IgZXhhbXBsZSBhIHNldHRpbmcsIG1lYXN1cmVtZW50LCBvciBjYWxjdWxhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgY2F0ZWdvcnk6IGZoaXIuRmhpckNvZGU8TWV0cmljQ2F0ZWdvcnlDb2RlVHlwZT58bnVsbDtcclxuICAvKipcclxuICAgKiBEZXNjcmliZXMgdGhlIG1lYXN1cmVtZW50IHJlcGV0aXRpb24gdGltZS4gVGhpcyBpcyBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgYXMgdGhlIHVwZGF0ZSBwZXJpb2QuIFRoZSBtZWFzdXJlbWVudCByZXBldGl0aW9uIHRpbWUgY2FuIHJhbmdlIGZyb20gbWlsbGlzZWNvbmRzIHVwIHRvIGhvdXJzLiBBbiBleGFtcGxlIGZvciBhIG1lYXN1cmVtZW50IHJlcGV0aXRpb24gdGltZSBpbiB0aGUgcmFuZ2Ugb2YgbWlsbGlzZWNvbmRzIGlzIHRoZSBzYW1wbGluZyByYXRlIG9mIGFuIEVDRy4gQW4gZXhhbXBsZSBmb3IgYSBtZWFzdXJlbWVudCByZXBldGl0aW9uIHRpbWUgaW4gdGhlIHJhbmdlIG9mIGhvdXJzIGlzIGEgTklCUCB0aGF0IGlzIHRyaWdnZXJlZCBhdXRvbWF0aWNhbGx5IGV2ZXJ5IGhvdXIuIFRoZSB1cGRhdGUgcGVyaW9kIG1heSBiZSBkaWZmZXJlbnQgdGhhbiB0aGUgbWVhc3VyZW1lbnQgcmVwZXRpdGlvbiB0aW1lLCBpZiB0aGUgZGV2aWNlIGRvZXMgbm90IHVwZGF0ZSB0aGUgcHVibGlzaGVkIG9ic2VydmVkIHZhbHVlIHdpdGggdGhlIHNhbWUgZnJlcXVlbmN5IGFzIGl0IHdhcyBtZWFzdXJlZC5cclxuICAgKi9cclxuICBwdWJsaWMgbWVhc3VyZW1lbnRQZXJpb2Q/OiBmaGlyLlRpbWluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVzY3JpYmVzIHRoZSBjYWxpYnJhdGlvbnMgdGhhdCBoYXZlIGJlZW4gcGVyZm9ybWVkIG9yIHRoYXQgYXJlIHJlcXVpcmVkIHRvIGJlIHBlcmZvcm1lZC5cclxuICAgKi9cclxuICBwdWJsaWMgY2FsaWJyYXRpb246IGZoaXIuRGV2aWNlTWV0cmljQ2FsaWJyYXRpb25bXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBEZXZpY2VNZXRyaWMgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxEZXZpY2VNZXRyaWNBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnRGV2aWNlTWV0cmljJztcclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBuZXcgZmhpci5JZGVudGlmaWVyKHNvdXJjZS5pZGVudGlmaWVyLCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnR5cGUsIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy50eXBlID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsndW5pdCddKSB7IHRoaXMudW5pdCA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UudW5pdCwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3NvdXJjZSddKSB7IHRoaXMuc291cmNlID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zb3VyY2UsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydwYXJlbnQnXSkgeyB0aGlzLnBhcmVudCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucGFyZW50LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3BlcmF0aW9uYWxTdGF0dXMnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMub3BlcmF0aW9uYWxTdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxNZXRyaWNPcGVyYXRpb25hbFN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5vcGVyYXRpb25hbFN0YXR1c30sIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydfb3BlcmF0aW9uYWxTdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5vcGVyYXRpb25hbFN0YXR1cykgeyB0aGlzLm9wZXJhdGlvbmFsU3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX29wZXJhdGlvbmFsU3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMub3BlcmF0aW9uYWxTdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxNZXRyaWNPcGVyYXRpb25hbFN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX29wZXJhdGlvbmFsU3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb2xvciddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5jb2xvciA9IG5ldyBmaGlyLkZoaXJDb2RlPE1ldHJpY0NvbG9yQ29kZVR5cGU+KHt2YWx1ZTogc291cmNlLmNvbG9yfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jb2xvciddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbG9yKSB7IHRoaXMuY29sb3IuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY29sb3IhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jb2xvciA9IG5ldyBmaGlyLkZoaXJDb2RlPE1ldHJpY0NvbG9yQ29kZVR5cGU+KHNvdXJjZS5fY29sb3IgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPiwgb3B0aW9ucyk7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NhdGVnb3J5J10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNhdGVnb3J5ID0gbmV3IGZoaXIuRmhpckNvZGU8TWV0cmljQ2F0ZWdvcnlDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UuY2F0ZWdvcnl9LCBvcHRpb25zKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY2F0ZWdvcnkgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfY2F0ZWdvcnknXSkge1xyXG4gICAgICBpZiAodGhpcy5jYXRlZ29yeSkgeyB0aGlzLmNhdGVnb3J5LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NhdGVnb3J5ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY2F0ZWdvcnkgPSBuZXcgZmhpci5GaGlyQ29kZTxNZXRyaWNDYXRlZ29yeUNvZGVUeXBlPihzb3VyY2UuX2NhdGVnb3J5IGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydtZWFzdXJlbWVudFBlcmlvZCddKSB7IHRoaXMubWVhc3VyZW1lbnRQZXJpb2QgPSBuZXcgZmhpci5UaW1pbmcoc291cmNlLm1lYXN1cmVtZW50UGVyaW9kLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY2FsaWJyYXRpb24nXSkgeyB0aGlzLmNhbGlicmF0aW9uID0gc291cmNlLmNhbGlicmF0aW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuRGV2aWNlTWV0cmljQ2FsaWJyYXRpb24oeCwgb3B0aW9ucykpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jYWxpYnJhdGlvbiA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRGV2aWNlTWV0cmljJyB9XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygnaWRlbnRpZmllcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZSUygndHlwZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndW5pdCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnc291cmNlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwYXJlbnQnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCdvcGVyYXRpb25hbFN0YXR1cycsZXhwLCdNZXRyaWNPcGVyYXRpb25hbFN0YXR1cycsTWV0cmljT3BlcmF0aW9uYWxTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPU1YoJ2NvbG9yJyxleHAsJ01ldHJpY0NvbG9yJyxNZXRyaWNDb2xvclZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVignY2F0ZWdvcnknLGV4cCwnTWV0cmljQ2F0ZWdvcnknLE1ldHJpY0NhdGVnb3J5VnNWYWxpZGF0aW9uLCdyJykpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ21lYXN1cmVtZW50UGVyaW9kJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdjYWxpYnJhdGlvbicsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=