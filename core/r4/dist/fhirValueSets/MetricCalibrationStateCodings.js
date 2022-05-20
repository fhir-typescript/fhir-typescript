// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/metric-calibration-state|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Describes the state of a metric calibration.
 */
export const MetricCalibrationStateCodings = {
    /**
     * calibrated: The metric has been calibrated.
     */
    Calibrated: new Coding({
        display: "Calibrated",
        code: "calibrated",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
    /**
     * calibration-required: The metric needs to be calibrated.
     */
    CalibrationRequired: new Coding({
        display: "Calibration Required",
        code: "calibration-required",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
    /**
     * not-calibrated: The metric has not been calibrated.
     */
    NotCalibrated: new Coding({
        display: "Not Calibrated",
        code: "not-calibrated",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
    /**
     * unspecified: The state of calibration of this metric is unspecified.
     */
    Unspecified: new Coding({
        display: "Unspecified",
        code: "unspecified",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0cmljQ2FsaWJyYXRpb25TdGF0ZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL01ldHJpY0NhbGlicmF0aW9uU3RhdGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDZFQUE2RTtBQUU3RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFMUM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBRztJQUMzQzs7T0FFRztJQUNILFVBQVUsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNyQixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsOENBQThDO0tBQ3ZELENBQUM7SUFDRjs7T0FFRztJQUNILG1CQUFtQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzlCLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsSUFBSSxFQUFFLHNCQUFzQjtRQUM1QixNQUFNLEVBQUUsOENBQThDO0tBQ3ZELENBQUM7SUFDRjs7T0FFRztJQUNILGFBQWEsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUN4QixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxXQUFXLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDdEIsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RCxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZXRyaWMtY2FsaWJyYXRpb24tc3RhdGV8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyB0aGUgc3RhdGUgb2YgYSBtZXRyaWMgY2FsaWJyYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWV0cmljQ2FsaWJyYXRpb25TdGF0ZUNvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogY2FsaWJyYXRlZDogVGhlIG1ldHJpYyBoYXMgYmVlbiBjYWxpYnJhdGVkLlxyXG4gICAqL1xyXG4gIENhbGlicmF0ZWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJDYWxpYnJhdGVkXCIsXHJcbiAgICBjb2RlOiBcImNhbGlicmF0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21ldHJpYy1jYWxpYnJhdGlvbi1zdGF0ZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGNhbGlicmF0aW9uLXJlcXVpcmVkOiBUaGUgbWV0cmljIG5lZWRzIHRvIGJlIGNhbGlicmF0ZWQuXHJcbiAgICovXHJcbiAgQ2FsaWJyYXRpb25SZXF1aXJlZDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkNhbGlicmF0aW9uIFJlcXVpcmVkXCIsXHJcbiAgICBjb2RlOiBcImNhbGlicmF0aW9uLXJlcXVpcmVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tZXRyaWMtY2FsaWJyYXRpb24tc3RhdGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBub3QtY2FsaWJyYXRlZDogVGhlIG1ldHJpYyBoYXMgbm90IGJlZW4gY2FsaWJyYXRlZC5cclxuICAgKi9cclxuICBOb3RDYWxpYnJhdGVkOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiTm90IENhbGlicmF0ZWRcIixcclxuICAgIGNvZGU6IFwibm90LWNhbGlicmF0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21ldHJpYy1jYWxpYnJhdGlvbi1zdGF0ZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHVuc3BlY2lmaWVkOiBUaGUgc3RhdGUgb2YgY2FsaWJyYXRpb24gb2YgdGhpcyBtZXRyaWMgaXMgdW5zcGVjaWZpZWQuXHJcbiAgICovXHJcbiAgVW5zcGVjaWZpZWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJVbnNwZWNpZmllZFwiLFxyXG4gICAgY29kZTogXCJ1bnNwZWNpZmllZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWV0cmljLWNhbGlicmF0aW9uLXN0YXRlXCIsXHJcbiAgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogRGVzY3JpYmVzIHRoZSBzdGF0ZSBvZiBhIG1ldHJpYyBjYWxpYnJhdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIE1ldHJpY0NhbGlicmF0aW9uU3RhdGVDb2RpbmdUeXBlID0gdHlwZW9mIE1ldHJpY0NhbGlicmF0aW9uU3RhdGVDb2RpbmdzO1xyXG4iXX0=