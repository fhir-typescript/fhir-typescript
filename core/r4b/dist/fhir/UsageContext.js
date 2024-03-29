// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: UsageContext
import * as fhir from '../fhir.js';
/**
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export class UsageContext extends fhir.FhirElement {
    /**
     * Default constructor for UsageContext - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['code']) {
            this.code = new fhir.Coding(source.code, options);
        }
        else {
            this.code = null;
        }
        if (source['value']) {
            this.value = source.value;
        }
        else if (source['valueCodeableConcept']) {
            this.value = new fhir.CodeableConcept(source.valueCodeableConcept, options);
        }
        else if (source['valueQuantity']) {
            this.value = new fhir.Quantity(source.valueQuantity, options);
        }
        else if (source['valueRange']) {
            this.value = new fhir.Range(source.valueRange, options);
        }
        else if (source['valueReference']) {
            this.value = new fhir.Reference(source.valueReference, options);
        }
        else {
            this.value = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'UsageContext';
        }
        iss.push(...this.vRS('code', exp));
        iss.push(...this.vRS('value', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
UsageContext._fts_dataType = 'UsageContext';
/**
 * Internal flag to properly serialize choice-type element UsageContext.value[x]
 */
UsageContext._fts_valueIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNhZ2VDb250ZXh0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9Vc2FnZUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBRWpDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBb0NuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxZQUFhLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUFpQmhEOztPQUVHO0lBQ0gsWUFBWSxTQUFtQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUN6RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQ3JFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUFFO2FBQzlDLElBQUksTUFBTSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTthQUNwSCxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTthQUMvRixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTthQUN0RixJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUFFO2FBQ2xHO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FBRTtJQUM3QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxHQUFHLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsY0FBYyxDQUFBO1NBQUU7UUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXZDRDs7R0FFRztBQUM2QiwwQkFBYSxHQUFVLGNBQWMsQ0FBQztBQVN0RTs7R0FFRztBQUN1QiwrQkFBa0IsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBVc2FnZUNvbnRleHRcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFVzYWdlQ29udGV4dFR5cGVDb2RlcywgIFVzYWdlQ29udGV4dFR5cGVDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvVXNhZ2VDb250ZXh0VHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBVc2FnZUNvbnRleHRUeXBlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Vc2FnZUNvbnRleHRUeXBlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFVzYWdlQ29udGV4dCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVc2FnZUNvbnRleHRBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEEgY29kZSB0aGF0IGlkZW50aWZpZXMgdGhlIHR5cGUgb2YgY29udGV4dCBiZWluZyBzcGVjaWZpZWQgYnkgdGhpcyB1c2FnZSBjb250ZXh0LlxyXG4gICAqL1xyXG4gIGNvZGU6IGZoaXIuQ29kaW5nQXJnc3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgdmFsdWUgdGhhdCBkZWZpbmVzIHRoZSBjb250ZXh0IHNwZWNpZmllZCBpbiB0aGlzIGNvbnRleHQgb2YgdXNlLiBUaGUgaW50ZXJwcmV0YXRpb24gb2YgdGhlIHZhbHVlIGlzIGRlZmluZWQgYnkgdGhlIGNvZGUuXHJcbiAgICovXHJcbiAgdmFsdWU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxmaGlyLlF1YW50aXR5fGZoaXIuUmFuZ2V8Zmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgdmFsdWUgdGhhdCBkZWZpbmVzIHRoZSBjb250ZXh0IHNwZWNpZmllZCBpbiB0aGlzIGNvbnRleHQgb2YgdXNlLiBUaGUgaW50ZXJwcmV0YXRpb24gb2YgdGhlIHZhbHVlIGlzIGRlZmluZWQgYnkgdGhlIGNvZGUuXHJcbiAgICovXHJcbiAgdmFsdWVDb2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgdmFsdWUgdGhhdCBkZWZpbmVzIHRoZSBjb250ZXh0IHNwZWNpZmllZCBpbiB0aGlzIGNvbnRleHQgb2YgdXNlLiBUaGUgaW50ZXJwcmV0YXRpb24gb2YgdGhlIHZhbHVlIGlzIGRlZmluZWQgYnkgdGhlIGNvZGUuXHJcbiAgICovXHJcbiAgdmFsdWVRdWFudGl0eT86IGZoaXIuUXVhbnRpdHlBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHZhbHVlIHRoYXQgZGVmaW5lcyB0aGUgY29udGV4dCBzcGVjaWZpZWQgaW4gdGhpcyBjb250ZXh0IG9mIHVzZS4gVGhlIGludGVycHJldGF0aW9uIG9mIHRoZSB2YWx1ZSBpcyBkZWZpbmVkIGJ5IHRoZSBjb2RlLlxyXG4gICAqL1xyXG4gIHZhbHVlUmFuZ2U/OiBmaGlyLlJhbmdlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSB2YWx1ZSB0aGF0IGRlZmluZXMgdGhlIGNvbnRleHQgc3BlY2lmaWVkIGluIHRoaXMgY29udGV4dCBvZiB1c2UuIFRoZSBpbnRlcnByZXRhdGlvbiBvZiB0aGUgdmFsdWUgaXMgZGVmaW5lZCBieSB0aGUgY29kZS5cclxuICAgKi9cclxuICB2YWx1ZVJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTcGVjaWZpZXMgY2xpbmljYWwvYnVzaW5lc3MvZXRjLiBtZXRhZGF0YSB0aGF0IGNhbiBiZSB1c2VkIHRvIHJldHJpZXZlLCBpbmRleCBhbmQvb3IgY2F0ZWdvcml6ZSBhbiBhcnRpZmFjdC4gVGhpcyBtZXRhZGF0YSBjYW4gZWl0aGVyIGJlIHNwZWNpZmljIHRvIHRoZSBhcHBsaWNhYmxlIHBvcHVsYXRpb24gKGUuZy4sIGFnZSBjYXRlZ29yeSwgRFJHKSBvciB0aGUgc3BlY2lmaWMgY29udGV4dCBvZiBjYXJlIChlLmcuLCB2ZW51ZSwgY2FyZSBzZXR0aW5nLCBwcm92aWRlciBvZiBjYXJlKS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBVc2FnZUNvbnRleHQgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ1VzYWdlQ29udGV4dCc7XHJcbiAgLyoqXHJcbiAgICogQSBjb2RlIHRoYXQgaWRlbnRpZmllcyB0aGUgdHlwZSBvZiBjb250ZXh0IGJlaW5nIHNwZWNpZmllZCBieSB0aGlzIHVzYWdlIGNvbnRleHQuXHJcbiAgICovXHJcbiAgcHVibGljIGNvZGU6IGZoaXIuQ29kaW5nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQSB2YWx1ZSB0aGF0IGRlZmluZXMgdGhlIGNvbnRleHQgc3BlY2lmaWVkIGluIHRoaXMgY29udGV4dCBvZiB1c2UuIFRoZSBpbnRlcnByZXRhdGlvbiBvZiB0aGUgdmFsdWUgaXMgZGVmaW5lZCBieSB0aGUgY29kZS5cclxuICAgKi9cclxuICBwdWJsaWMgdmFsdWU6IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxmaGlyLlF1YW50aXR5fGZoaXIuUmFuZ2V8Zmhpci5SZWZlcmVuY2UpfG51bGw7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBVc2FnZUNvbnRleHQudmFsdWVbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfdmFsdWVJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBVc2FnZUNvbnRleHQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxVc2FnZUNvbnRleHRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnY29kZSddKSB7IHRoaXMuY29kZSA9IG5ldyBmaGlyLkNvZGluZyhzb3VyY2UuY29kZSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmNvZGUgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWyd2YWx1ZSddKSB7IHRoaXMudmFsdWUgPSBzb3VyY2UudmFsdWU7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVDb2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS52YWx1ZUNvZGVhYmxlQ29uY2VwdCwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVRdWFudGl0eSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UudmFsdWVRdWFudGl0eSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVSYW5nZSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5SYW5nZShzb3VyY2UudmFsdWVSYW5nZSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsndmFsdWVSZWZlcmVuY2UnXSkgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS52YWx1ZVJlZmVyZW5jZSwgb3B0aW9ucyk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnZhbHVlID0gbnVsbDsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1VzYWdlQ29udGV4dCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ2NvZGUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52UlMoJ3ZhbHVlJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==