// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: TriggerDefinition
import * as fhir from '../fhir.js';
// @ts-ignore
import { TriggerTypeVsValidation } from '../fhirValueSets/TriggerTypeVsValidation.js';
/**
 * A description of a triggering event.
 */
export class TriggerDefinition extends fhir.FhirElement {
    /**
     * Default constructor for TriggerDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['type'] !== undefined) {
            this.type = new fhir.FhirCode({ value: source.type }, options);
        }
        else {
            this.type = null;
        }
        if (source['_type']) {
            if (this.type) {
                this.type.addExtendedProperties(source._type);
            }
            else {
                this.type = new fhir.FhirCode(source._type, options);
            }
        }
        if (source['eventName'] !== undefined) {
            this.eventName = new fhir.FhirString({ value: source.eventName }, options);
        }
        if (source['_eventName']) {
            if (this.eventName) {
                this.eventName.addExtendedProperties(source._eventName);
            }
            else {
                this.eventName = new fhir.FhirString(source._eventName, options);
            }
        }
        if (source['eventTiming']) {
            this.eventTiming = source.eventTiming;
        }
        else if (source['eventTimingTiming']) {
            this.eventTiming = new fhir.Timing(source.eventTimingTiming, options);
        }
        else if (source['eventTimingReference']) {
            this.eventTiming = new fhir.Reference(source.eventTimingReference, options);
        }
        else if (source['eventTimingDate'] !== undefined) {
            this.eventTiming = new fhir.FhirDate({ value: source.eventTimingDate }, options);
        }
        else if (source['eventTimingDateTime'] !== undefined) {
            this.eventTiming = new fhir.FhirDateTime({ value: source.eventTimingDateTime }, options);
        }
        if (source['eventData']) {
            this.eventData = new fhir.DataRequirement(source.eventData, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'TriggerDefinition';
        }
        iss.push(...this.vRSV('type', exp, 'TriggerType', TriggerTypeVsValidation, 'r'));
        iss.push(...this.vOS('eventName', exp));
        iss.push(...this.vOS('eventTiming', exp));
        iss.push(...this.vOS('eventData', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
TriggerDefinition._fts_dataType = 'TriggerDefinition';
/**
 * Internal flag to properly serialize choice-type element TriggerDefinition.eventTiming[x]
 */
TriggerDefinition._fts_eventTimingIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpZ2dlckRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1RyaWdnZXJEZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHNDQUFzQztBQUV0QyxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUluQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUErQ3RGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGlCQUFrQixTQUFRLElBQUksQ0FBQyxXQUFXO0lBeUJyRDs7T0FFRztJQUNILFlBQVksU0FBd0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDOUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBc0IsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7YUFDbkg7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzFCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBc0IsTUFBTSxDQUFDLEtBQStCLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFBRTtTQUM5RztRQUNELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFNBQVMs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IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogVHJpZ2dlckRlZmluaXRpb25cclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFRyaWdnZXJUeXBlQ29kZXMsICBUcmlnZ2VyVHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9UcmlnZ2VyVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBUcmlnZ2VyVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvVHJpZ2dlclR5cGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgVHJpZ2dlckRlZmluaXRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJpZ2dlckRlZmluaXRpb25BcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIHRyaWdnZXJpbmcgZXZlbnQuXHJcbiAgICovXHJcbiAgdHlwZTogZmhpci5GaGlyQ29kZTxUcmlnZ2VyVHlwZUNvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBUcmlnZ2VyRGVmaW5pdGlvbi50eXBlXHJcbiAgICovXHJcbiAgX3R5cGU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBldmVudCAoaWYgdGhpcyBpcyBhIG5hbWVkLWV2ZW50IHRyaWdnZXIpLlxyXG4gICAqL1xyXG4gIGV2ZW50TmFtZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBUcmlnZ2VyRGVmaW5pdGlvbi5ldmVudE5hbWVcclxuICAgKi9cclxuICBfZXZlbnROYW1lPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBUaGUgdGltaW5nIG9mIHRoZSBldmVudCAoaWYgdGhpcyBpcyBhIHBlcmlvZCB0cmlnZ2VyKS5cclxuICAgKi9cclxuICBldmVudFRpbWluZz86IGZoaXIuVGltaW5nfGZoaXIuUmVmZXJlbmNlfGZoaXIuRmhpckRhdGV8Zmhpci5GaGlyRGF0ZVRpbWV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1pbmcgb2YgdGhlIGV2ZW50IChpZiB0aGlzIGlzIGEgcGVyaW9kIHRyaWdnZXIpLlxyXG4gICAqL1xyXG4gIGV2ZW50VGltaW5nVGltaW5nPzogZmhpci5UaW1pbmdBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltaW5nIG9mIHRoZSBldmVudCAoaWYgdGhpcyBpcyBhIHBlcmlvZCB0cmlnZ2VyKS5cclxuICAgKi9cclxuICBldmVudFRpbWluZ1JlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWluZyBvZiB0aGUgZXZlbnQgKGlmIHRoaXMgaXMgYSBwZXJpb2QgdHJpZ2dlcikuXHJcbiAgICovXHJcbiAgZXZlbnRUaW1pbmdEYXRlPzogZmhpci5GaGlyRGF0ZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1pbmcgb2YgdGhlIGV2ZW50IChpZiB0aGlzIGlzIGEgcGVyaW9kIHRyaWdnZXIpLlxyXG4gICAqL1xyXG4gIGV2ZW50VGltaW5nRGF0ZVRpbWU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0cmlnZ2VyaW5nIGRhdGEgb2YgdGhlIGV2ZW50IChpZiB0aGlzIGlzIGEgZGF0YSB0cmlnZ2VyKS5cclxuICAgKi9cclxuICBldmVudERhdGE/OiBmaGlyLkRhdGFSZXF1aXJlbWVudEFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBkZXNjcmlwdGlvbiBvZiBhIHRyaWdnZXJpbmcgZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJpZ2dlckRlZmluaXRpb24gZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1RyaWdnZXJEZWZpbml0aW9uJztcclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiB0cmlnZ2VyaW5nIGV2ZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0eXBlOiBmaGlyLkZoaXJDb2RlPFRyaWdnZXJUeXBlQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGV2ZW50IChpZiB0aGlzIGlzIGEgbmFtZWQtZXZlbnQgdHJpZ2dlcikuXHJcbiAgICovXHJcbiAgcHVibGljIGV2ZW50TmFtZT86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWluZyBvZiB0aGUgZXZlbnQgKGlmIHRoaXMgaXMgYSBwZXJpb2QgdHJpZ2dlcikuXHJcbiAgICovXHJcbiAgcHVibGljIGV2ZW50VGltaW5nPzogKGZoaXIuVGltaW5nfGZoaXIuUmVmZXJlbmNlfGZoaXIuRmhpckRhdGV8Zmhpci5GaGlyRGF0ZVRpbWUpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IFRyaWdnZXJEZWZpbml0aW9uLmV2ZW50VGltaW5nW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX2V2ZW50VGltaW5nSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRyaWdnZXJpbmcgZGF0YSBvZiB0aGUgZXZlbnQgKGlmIHRoaXMgaXMgYSBkYXRhIHRyaWdnZXIpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBldmVudERhdGE/OiBmaGlyLkRhdGFSZXF1aXJlbWVudHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgVHJpZ2dlckRlZmluaXRpb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxUcmlnZ2VyRGVmaW5pdGlvbkFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5GaGlyQ29kZTxUcmlnZ2VyVHlwZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS50eXBlfSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnR5cGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfdHlwZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnR5cGUpIHsgdGhpcy50eXBlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3R5cGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuRmhpckNvZGU8VHJpZ2dlclR5cGVDb2RlVHlwZT4oc291cmNlLl90eXBlIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydldmVudE5hbWUnXSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZXZlbnROYW1lID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5ldmVudE5hbWV9LCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2V2ZW50TmFtZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmV2ZW50TmFtZSkgeyB0aGlzLmV2ZW50TmFtZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9ldmVudE5hbWUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5ldmVudE5hbWUgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZXZlbnROYW1lIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4sIG9wdGlvbnMpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydldmVudFRpbWluZyddKSB7IHRoaXMuZXZlbnRUaW1pbmcgPSBzb3VyY2UuZXZlbnRUaW1pbmc7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnZXZlbnRUaW1pbmdUaW1pbmcnXSkgeyB0aGlzLmV2ZW50VGltaW5nID0gbmV3IGZoaXIuVGltaW5nKHNvdXJjZS5ldmVudFRpbWluZ1RpbWluZywgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnZXZlbnRUaW1pbmdSZWZlcmVuY2UnXSkgeyB0aGlzLmV2ZW50VGltaW5nID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5ldmVudFRpbWluZ1JlZmVyZW5jZSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnZXZlbnRUaW1pbmdEYXRlJ10gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmV2ZW50VGltaW5nID0gbmV3IGZoaXIuRmhpckRhdGUoe3ZhbHVlOiBzb3VyY2UuZXZlbnRUaW1pbmdEYXRlfSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsnZXZlbnRUaW1pbmdEYXRlVGltZSddICE9PSB1bmRlZmluZWQpIHsgdGhpcy5ldmVudFRpbWluZyA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5ldmVudFRpbWluZ0RhdGVUaW1lfSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2V2ZW50RGF0YSddKSB7IHRoaXMuZXZlbnREYXRhID0gbmV3IGZoaXIuRGF0YVJlcXVpcmVtZW50KHNvdXJjZS5ldmVudERhdGEsIG9wdGlvbnMpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnVHJpZ2dlckRlZmluaXRpb24nIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudlJTVigndHlwZScsZXhwLCdUcmlnZ2VyVHlwZScsVHJpZ2dlclR5cGVWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZXZlbnROYW1lJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdldmVudFRpbWluZycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZXZlbnREYXRhJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==