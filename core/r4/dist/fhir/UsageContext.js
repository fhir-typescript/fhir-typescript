// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: UsageContext
import * as fhir from '../fhir.js';
// @ts-ignore
import { UsageContextTypeCodings, } from '../fhirValueSets/UsageContextTypeCodings.js';
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
            this.code = new fhir.Coding(source.code);
        }
        else {
            this.code = null;
        }
        if (source['value']) {
            this.value = source.value;
        }
        else if (source['valueCodeableConcept']) {
            this.value = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        else if (source['valueQuantity']) {
            this.value = new fhir.Quantity(source.valueQuantity);
        }
        else if (source['valueRange']) {
            this.value = new fhir.Range(source.valueRange);
        }
        else if (source['valueReference']) {
            this.value = new fhir.Reference(source.valueReference);
        }
        else {
            this.value = null;
        }
    }
    /**
     * Extensible-bound Value Set for code (UsageContext.code)
     */
    static codeExtensibleCoding() {
        return UsageContextTypeCodings;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        let issues = super.doModelValidation();
        if (!this['code']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property code:fhir.Coding fhir: UsageContext.code:Coding', });
        }
        if (this["code"]) {
            issues.push(...this.code.doModelValidation());
        }
        if (!this['value']) {
            issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property value: fhir: UsageContext.value[x]:', });
        }
        return issues;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNhZ2VDb250ZXh0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9Vc2FnZUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBRWpDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBRW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsdUJBQXVCLEdBQThCLE1BQU0sNkNBQTZDLENBQUM7QUFpQ2xIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQWEsU0FBUSxJQUFJLENBQUMsV0FBVztJQWlCaEQ7O09BRUc7SUFDSCxZQUFZLFNBQW1DLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBRTthQUM1RDtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDMUIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FBRTthQUM5QyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FBRTthQUMzRyxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUFFO2FBQ3RGLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQUU7YUFDN0UsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUFFO2FBQ3pGO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FBRTtJQUM3QixDQUFDO0lBQ0Q7O09BRUc7SUFDSSxNQUFNLENBQUMsb0JBQW9CO1FBQ2hDLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCO1FBQy9CLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUcsV0FBVyxFQUFFLDJFQUEyRSxHQUFHLENBQUMsQ0FBQztTQUNsSjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFHLFdBQVcsRUFBRSwrREFBK0QsR0FBRyxDQUFDLENBQUM7U0FDdEk7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQWpERDs7R0FFRztBQUM2QiwwQkFBYSxHQUFVLGNBQWMsQ0FBQztBQVN0RTs7R0FFRztBQUN1QiwrQkFBa0IsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IFVzYWdlQ29udGV4dFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgVXNhZ2VDb250ZXh0VHlwZUNvZGluZ3MsIFVzYWdlQ29udGV4dFR5cGVDb2RpbmdUeXBlLH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Vc2FnZUNvbnRleHRUeXBlQ29kaW5ncy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgVXNhZ2VDb250ZXh0VHlwZUNvZGVzLCAgVXNhZ2VDb250ZXh0VHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Vc2FnZUNvbnRleHRUeXBlQ29kZXMuanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgVXNhZ2VDb250ZXh0IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVzYWdlQ29udGV4dEFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogQSBjb2RlIHRoYXQgaWRlbnRpZmllcyB0aGUgdHlwZSBvZiBjb250ZXh0IGJlaW5nIHNwZWNpZmllZCBieSB0aGlzIHVzYWdlIGNvbnRleHQuXHJcbiAgICovXHJcbiAgY29kZTogZmhpci5Db2RpbmdBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogQSB2YWx1ZSB0aGF0IGRlZmluZXMgdGhlIGNvbnRleHQgc3BlY2lmaWVkIGluIHRoaXMgY29udGV4dCBvZiB1c2UuIFRoZSBpbnRlcnByZXRhdGlvbiBvZiB0aGUgdmFsdWUgaXMgZGVmaW5lZCBieSB0aGUgY29kZS5cclxuICAgKi9cclxuICB2YWx1ZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUXVhbnRpdHl8Zmhpci5SYW5nZXxmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSB2YWx1ZSB0aGF0IGRlZmluZXMgdGhlIGNvbnRleHQgc3BlY2lmaWVkIGluIHRoaXMgY29udGV4dCBvZiB1c2UuIFRoZSBpbnRlcnByZXRhdGlvbiBvZiB0aGUgdmFsdWUgaXMgZGVmaW5lZCBieSB0aGUgY29kZS5cclxuICAgKi9cclxuICB2YWx1ZUNvZGVhYmxlQ29uY2VwdD86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSB2YWx1ZSB0aGF0IGRlZmluZXMgdGhlIGNvbnRleHQgc3BlY2lmaWVkIGluIHRoaXMgY29udGV4dCBvZiB1c2UuIFRoZSBpbnRlcnByZXRhdGlvbiBvZiB0aGUgdmFsdWUgaXMgZGVmaW5lZCBieSB0aGUgY29kZS5cclxuICAgKi9cclxuICB2YWx1ZVF1YW50aXR5PzogZmhpci5RdWFudGl0eUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgdmFsdWUgdGhhdCBkZWZpbmVzIHRoZSBjb250ZXh0IHNwZWNpZmllZCBpbiB0aGlzIGNvbnRleHQgb2YgdXNlLiBUaGUgaW50ZXJwcmV0YXRpb24gb2YgdGhlIHZhbHVlIGlzIGRlZmluZWQgYnkgdGhlIGNvZGUuXHJcbiAgICovXHJcbiAgdmFsdWVSYW5nZT86IGZoaXIuUmFuZ2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHZhbHVlIHRoYXQgZGVmaW5lcyB0aGUgY29udGV4dCBzcGVjaWZpZWQgaW4gdGhpcyBjb250ZXh0IG9mIHVzZS4gVGhlIGludGVycHJldGF0aW9uIG9mIHRoZSB2YWx1ZSBpcyBkZWZpbmVkIGJ5IHRoZSBjb2RlLlxyXG4gICAqL1xyXG4gIHZhbHVlUmVmZXJlbmNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNwZWNpZmllcyBjbGluaWNhbC9idXNpbmVzcy9ldGMuIG1ldGFkYXRhIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUsIGluZGV4IGFuZC9vciBjYXRlZ29yaXplIGFuIGFydGlmYWN0LiBUaGlzIG1ldGFkYXRhIGNhbiBlaXRoZXIgYmUgc3BlY2lmaWMgdG8gdGhlIGFwcGxpY2FibGUgcG9wdWxhdGlvbiAoZS5nLiwgYWdlIGNhdGVnb3J5LCBEUkcpIG9yIHRoZSBzcGVjaWZpYyBjb250ZXh0IG9mIGNhcmUgKGUuZy4sIHZlbnVlLCBjYXJlIHNldHRpbmcsIHByb3ZpZGVyIG9mIGNhcmUpLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVzYWdlQ29udGV4dCBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnVXNhZ2VDb250ZXh0JztcclxuICAvKipcclxuICAgKiBBIGNvZGUgdGhhdCBpZGVudGlmaWVzIHRoZSB0eXBlIG9mIGNvbnRleHQgYmVpbmcgc3BlY2lmaWVkIGJ5IHRoaXMgdXNhZ2UgY29udGV4dC5cclxuICAgKi9cclxuICBwdWJsaWMgY29kZTogZmhpci5Db2Rpbmd8bnVsbDtcclxuICAvKipcclxuICAgKiBBIHZhbHVlIHRoYXQgZGVmaW5lcyB0aGUgY29udGV4dCBzcGVjaWZpZWQgaW4gdGhpcyBjb250ZXh0IG9mIHVzZS4gVGhlIGludGVycHJldGF0aW9uIG9mIHRoZSB2YWx1ZSBpcyBkZWZpbmVkIGJ5IHRoZSBjb2RlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB2YWx1ZTogKGZoaXIuQ29kZWFibGVDb25jZXB0fGZoaXIuUXVhbnRpdHl8Zmhpci5SYW5nZXxmaGlyLlJlZmVyZW5jZSl8bnVsbDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IFVzYWdlQ29udGV4dC52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c192YWx1ZUlzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFVzYWdlQ29udGV4dCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFVzYWdlQ29udGV4dEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydjb2RlJ10pIHsgdGhpcy5jb2RlID0gbmV3IGZoaXIuQ29kaW5nKHNvdXJjZS5jb2RlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29kZSA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ3ZhbHVlJ10pIHsgdGhpcy52YWx1ZSA9IHNvdXJjZS52YWx1ZTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd2YWx1ZUNvZGVhYmxlQ29uY2VwdCddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnZhbHVlQ29kZWFibGVDb25jZXB0KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd2YWx1ZVF1YW50aXR5J10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLlF1YW50aXR5KHNvdXJjZS52YWx1ZVF1YW50aXR5KTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd2YWx1ZVJhbmdlJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLlJhbmdlKHNvdXJjZS52YWx1ZVJhbmdlKTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWyd2YWx1ZVJlZmVyZW5jZSddKSB7IHRoaXMudmFsdWUgPSBuZXcgZmhpci5SZWZlcmVuY2Uoc291cmNlLnZhbHVlUmVmZXJlbmNlKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMudmFsdWUgPSBudWxsOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEV4dGVuc2libGUtYm91bmQgVmFsdWUgU2V0IGZvciBjb2RlIChVc2FnZUNvbnRleHQuY29kZSlcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvZGVFeHRlbnNpYmxlQ29kaW5nKCk6VXNhZ2VDb250ZXh0VHlwZUNvZGluZ1R5cGUge1xyXG4gICAgcmV0dXJuIFVzYWdlQ29udGV4dFR5cGVDb2RpbmdzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzWydjb2RlJ10pIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ3JlcXVpcmVkJywgIGRpYWdub3N0aWNzOiAnTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBjb2RlOmZoaXIuQ29kaW5nIGZoaXI6IFVzYWdlQ29udGV4dC5jb2RlOkNvZGluZycsIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXNbXCJjb2RlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuY29kZS5kb01vZGVsVmFsaWRhdGlvbigpKTsgfVxyXG4gICAgaWYgKCF0aGlzWyd2YWx1ZSddKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdyZXF1aXJlZCcsICBkaWFnbm9zdGljczogJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgdmFsdWU6IGZoaXI6IFVzYWdlQ29udGV4dC52YWx1ZVt4XTonLCB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==