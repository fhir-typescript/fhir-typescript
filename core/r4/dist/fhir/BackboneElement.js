// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: BackboneElement
import * as fhir from '../fhir.js';
/**
 * Base definition for all elements that are defined inside a resource - but not those in a data type.
 */
export class BackboneElement extends fhir.FhirElement {
    /**
     * Default constructor for BackboneElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['modifierExtension']) {
            this.modifierExtension = source.modifierExtension.map((x) => new fhir.Extension(x));
        }
        else {
            this.modifierExtension = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'BackboneElement';
        }
        if (this["modifierExtension"]) {
            this.modifierExtension.forEach((x, i) => { issues.push(...x.doModelValidation(expression + `.modifierExtension[${i}]`)); });
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
BackboneElement._fts_dataType = 'BackboneElement';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFja2JvbmVFbGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9CYWNrYm9uZUVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBWW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGVBQWdCLFNBQVEsSUFBSSxDQUFDLFdBQVc7SUFTbkQ7O09BRUc7SUFDSCxZQUFZLFNBQXNDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQzVGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3BIO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztTQUFFO0lBQ3ZDLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLGFBQW9CLEVBQUU7UUFDdEQsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxJQUFJLFVBQVUsS0FBSyxFQUFFLEVBQUU7WUFBRSxVQUFVLEdBQUcsaUJBQWlCLENBQUE7U0FBRTtRQUN6RCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUFFO1FBQzNKLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBeEJEOztHQUVHO0FBQzZCLDZCQUFhLEdBQVUsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IEJhY2tib25lRWxlbWVudFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBCYWNrYm9uZUVsZW1lbnQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFja2JvbmVFbGVtZW50QXJncyBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGVyZSBjYW4gYmUgbm8gc3RpZ21hIGFzc29jaWF0ZWQgd2l0aCB0aGUgdXNlIG9mIGV4dGVuc2lvbnMgYnkgYW55IGFwcGxpY2F0aW9uLCBwcm9qZWN0LCBvciBzdGFuZGFyZCAtIHJlZ2FyZGxlc3Mgb2YgdGhlIGluc3RpdHV0aW9uIG9yIGp1cmlzZGljdGlvbiB0aGF0IHVzZXMgb3IgZGVmaW5lcyB0aGUgZXh0ZW5zaW9ucy4gIFRoZSB1c2Ugb2YgZXh0ZW5zaW9ucyBpcyB3aGF0IGFsbG93cyB0aGUgRkhJUiBzcGVjaWZpY2F0aW9uIHRvIHJldGFpbiBhIGNvcmUgbGV2ZWwgb2Ygc2ltcGxpY2l0eSBmb3IgZXZlcnlvbmUuXHJcbiAgICovXHJcbiAgbW9kaWZpZXJFeHRlbnNpb24/OiBmaGlyLkV4dGVuc2lvbkFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGRlZmluaXRpb24gZm9yIGFsbCBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluc2lkZSBhIHJlc291cmNlIC0gYnV0IG5vdCB0aG9zZSBpbiBhIGRhdGEgdHlwZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYWNrYm9uZUVsZW1lbnQgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0JhY2tib25lRWxlbWVudCc7XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgY2FuIGJlIG5vIHN0aWdtYSBhc3NvY2lhdGVkIHdpdGggdGhlIHVzZSBvZiBleHRlbnNpb25zIGJ5IGFueSBhcHBsaWNhdGlvbiwgcHJvamVjdCwgb3Igc3RhbmRhcmQgLSByZWdhcmRsZXNzIG9mIHRoZSBpbnN0aXR1dGlvbiBvciBqdXJpc2RpY3Rpb24gdGhhdCB1c2VzIG9yIGRlZmluZXMgdGhlIGV4dGVuc2lvbnMuICBUaGUgdXNlIG9mIGV4dGVuc2lvbnMgaXMgd2hhdCBhbGxvd3MgdGhlIEZISVIgc3BlY2lmaWNhdGlvbiB0byByZXRhaW4gYSBjb3JlIGxldmVsIG9mIHNpbXBsaWNpdHkgZm9yIGV2ZXJ5b25lLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtb2RpZmllckV4dGVuc2lvbjogZmhpci5FeHRlbnNpb25bXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBCYWNrYm9uZUVsZW1lbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxCYWNrYm9uZUVsZW1lbnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnbW9kaWZpZXJFeHRlbnNpb24nXSkgeyB0aGlzLm1vZGlmaWVyRXh0ZW5zaW9uID0gc291cmNlLm1vZGlmaWVyRXh0ZW5zaW9uLm1hcCgoeCkgPT4gbmV3IGZoaXIuRXh0ZW5zaW9uKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMubW9kaWZpZXJFeHRlbnNpb24gPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbjpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbik7XHJcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gJycpIHsgZXhwcmVzc2lvbiA9ICdCYWNrYm9uZUVsZW1lbnQnIH1cclxuICAgIGlmICh0aGlzW1wibW9kaWZpZXJFeHRlbnNpb25cIl0pIHsgdGhpcy5tb2RpZmllckV4dGVuc2lvbi5mb3JFYWNoKCh4LGkpID0+IHsgaXNzdWVzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uK2AubW9kaWZpZXJFeHRlbnNpb25bJHtpfV1gKSk7IH0pIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==