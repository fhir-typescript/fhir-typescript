// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ContactPoint
import * as fhir from '../fhir.js';
// @ts-ignore
import { ContactPointSystemVsValidation } from '../fhirValueSets/ContactPointSystemVsValidation.js';
// @ts-ignore
import { ContactPointUseVsValidation } from '../fhirValueSets/ContactPointUseVsValidation.js';
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export class ContactPoint extends fhir.FhirElement {
    /**
     * Default constructor for ContactPoint - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['system']) {
            this.system = new fhir.FhirCode({ value: source.system });
        }
        if (source['_system']) {
            if (this.system) {
                this.system.addExtendedProperties(source._system);
            }
            else {
                this.system = new fhir.FhirCode(source._system);
            }
        }
        if (source['value']) {
            this.value = new fhir.FhirString({ value: source.value });
        }
        if (source['_value']) {
            if (this.value) {
                this.value.addExtendedProperties(source._value);
            }
            else {
                this.value = new fhir.FhirString(source._value);
            }
        }
        if (source['use']) {
            this.use = new fhir.FhirCode({ value: source.use });
        }
        if (source['_use']) {
            if (this.use) {
                this.use.addExtendedProperties(source._use);
            }
            else {
                this.use = new fhir.FhirCode(source._use);
            }
        }
        if (source['rank']) {
            this.rank = new fhir.FhirPositiveInt({ value: source.rank });
        }
        if (source['_rank']) {
            if (this.rank) {
                this.rank.addExtendedProperties(source._rank);
            }
            else {
                this.rank = new fhir.FhirPositiveInt(source._rank);
            }
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'ContactPoint';
        }
        iss.push(...this.vOSV('system', exp, 'ContactPointSystem', ContactPointSystemVsValidation, 'r'));
        iss.push(...this.vOS('value', exp));
        iss.push(...this.vOSV('use', exp, 'ContactPointUse', ContactPointUseVsValidation, 'r'));
        iss.push(...this.vOS('rank', exp));
        iss.push(...this.vOS('period', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
ContactPoint._fts_dataType = 'ContactPoint';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFBvaW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9Db250YWN0UG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBRWpDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUdwRyxhQUFhO0FBQ2IsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saURBQWlELENBQUM7QUEyQzlGOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQWEsU0FBUSxJQUFJLENBQUMsV0FBVztJQXlCaEQ7O09BRUc7SUFDSCxZQUFZLFNBQW1DLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBNkIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUM5RyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQTZCLE1BQU0sQ0FBQyxPQUFpQyxDQUFDLENBQUM7YUFBRTtTQUNoSDtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FB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QztJQUNiLENBQUM7O0FBL0REOztHQUVHO0FBQzZCLDBCQUFhLEdBQVUsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBDb250YWN0UG9pbnRcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbnRhY3RQb2ludFN5c3RlbUNvZGVzLCAgQ29udGFjdFBvaW50U3lzdGVtQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0NvbnRhY3RQb2ludFN5c3RlbUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDb250YWN0UG9pbnRTeXN0ZW1Wc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0NvbnRhY3RQb2ludFN5c3RlbVZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgQ29udGFjdFBvaW50VXNlQ29kZXMsICBDb250YWN0UG9pbnRVc2VDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQ29udGFjdFBvaW50VXNlQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbnRhY3RQb2ludFVzZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQ29udGFjdFBvaW50VXNlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIENvbnRhY3RQb2ludCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb250YWN0UG9pbnRBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRlbGVjb21tdW5pY2F0aW9ucyBmb3JtIGZvciBjb250YWN0IHBvaW50IC0gd2hhdCBjb21tdW5pY2F0aW9ucyBzeXN0ZW0gaXMgcmVxdWlyZWQgdG8gbWFrZSB1c2Ugb2YgdGhlIGNvbnRhY3QuXHJcbiAgICovXHJcbiAgc3lzdGVtPzogZmhpci5GaGlyQ29kZTxDb250YWN0UG9pbnRTeXN0ZW1Db2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29udGFjdFBvaW50LnN5c3RlbVxyXG4gICAqL1xyXG4gIF9zeXN0ZW0/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgdGV4dCBkYXRhIHN1Y2ggYXMgcGhvbmUgZXh0ZW5zaW9uIG51bWJlcnMsIG9yIG5vdGVzIGFib3V0IHVzZSBvZiB0aGUgY29udGFjdCBhcmUgc29tZXRpbWVzIGluY2x1ZGVkIGluIHRoZSB2YWx1ZS5cclxuICAgKi9cclxuICB2YWx1ZT86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb250YWN0UG9pbnQudmFsdWVcclxuICAgKi9cclxuICBfdmFsdWU/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgbGFiZWxlZCBhcyBcIklzIE1vZGlmaWVyXCIgYmVjYXVzZSBhcHBsaWNhdGlvbnMgc2hvdWxkIG5vdCBtaXN0YWtlIGEgdGVtcG9yYXJ5IG9yIG9sZCBjb250YWN0IGV0Yy5mb3IgYSBjdXJyZW50L3Blcm1hbmVudCBvbmUuIEFwcGxpY2F0aW9ucyBjYW4gYXNzdW1lIHRoYXQgYSBjb250YWN0IGlzIGN1cnJlbnQgdW5sZXNzIGl0IGV4cGxpY2l0bHkgc2F5cyB0aGF0IGl0IGlzIHRlbXBvcmFyeSBvciBvbGQuXHJcbiAgICovXHJcbiAgdXNlPzogZmhpci5GaGlyQ29kZTxDb250YWN0UG9pbnRVc2VDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogQ29udGFjdFBvaW50LnVzZVxyXG4gICAqL1xyXG4gIF91c2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIE5vdGUgdGhhdCByYW5rIGRvZXMgbm90IG5lY2Vzc2FyaWx5IGZvbGxvdyB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIGNvbnRhY3RzIGFyZSByZXByZXNlbnRlZCBpbiB0aGUgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgcmFuaz86IGZoaXIuRmhpclBvc2l0aXZlSW50fG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvbnRhY3RQb2ludC5yYW5rXHJcbiAgICovXHJcbiAgX3Jhbms/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRpbWUgcGVyaW9kIHdoZW4gdGhlIGNvbnRhY3QgcG9pbnQgd2FzL2lzIGluIHVzZS5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0YWlscyBmb3IgYWxsIGtpbmRzIG9mIHRlY2hub2xvZ3kgbWVkaWF0ZWQgY29udGFjdCBwb2ludHMgZm9yIGEgcGVyc29uIG9yIG9yZ2FuaXphdGlvbiwgaW5jbHVkaW5nIHRlbGVwaG9uZSwgZW1haWwsIGV0Yy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0UG9pbnQgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0NvbnRhY3RQb2ludCc7XHJcbiAgLyoqXHJcbiAgICogVGVsZWNvbW11bmljYXRpb25zIGZvcm0gZm9yIGNvbnRhY3QgcG9pbnQgLSB3aGF0IGNvbW11bmljYXRpb25zIHN5c3RlbSBpcyByZXF1aXJlZCB0byBtYWtlIHVzZSBvZiB0aGUgY29udGFjdC5cclxuICAgKi9cclxuICBwdWJsaWMgc3lzdGVtPzogZmhpci5GaGlyQ29kZTxDb250YWN0UG9pbnRTeXN0ZW1Db2RlVHlwZT58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgdGV4dCBkYXRhIHN1Y2ggYXMgcGhvbmUgZXh0ZW5zaW9uIG51bWJlcnMsIG9yIG5vdGVzIGFib3V0IHVzZSBvZiB0aGUgY29udGFjdCBhcmUgc29tZXRpbWVzIGluY2x1ZGVkIGluIHRoZSB2YWx1ZS5cclxuICAgKi9cclxuICBwdWJsaWMgdmFsdWU/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgbGFiZWxlZCBhcyBcIklzIE1vZGlmaWVyXCIgYmVjYXVzZSBhcHBsaWNhdGlvbnMgc2hvdWxkIG5vdCBtaXN0YWtlIGEgdGVtcG9yYXJ5IG9yIG9sZCBjb250YWN0IGV0Yy5mb3IgYSBjdXJyZW50L3Blcm1hbmVudCBvbmUuIEFwcGxpY2F0aW9ucyBjYW4gYXNzdW1lIHRoYXQgYSBjb250YWN0IGlzIGN1cnJlbnQgdW5sZXNzIGl0IGV4cGxpY2l0bHkgc2F5cyB0aGF0IGl0IGlzIHRlbXBvcmFyeSBvciBvbGQuXHJcbiAgICovXHJcbiAgcHVibGljIHVzZT86IGZoaXIuRmhpckNvZGU8Q29udGFjdFBvaW50VXNlQ29kZVR5cGU+fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOb3RlIHRoYXQgcmFuayBkb2VzIG5vdCBuZWNlc3NhcmlseSBmb2xsb3cgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBjb250YWN0cyBhcmUgcmVwcmVzZW50ZWQgaW4gdGhlIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByYW5rPzogZmhpci5GaGlyUG9zaXRpdmVJbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRpbWUgcGVyaW9kIHdoZW4gdGhlIGNvbnRhY3QgcG9pbnQgd2FzL2lzIGluIHVzZS5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIENvbnRhY3RQb2ludCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPENvbnRhY3RQb2ludEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydzeXN0ZW0nXSkgeyB0aGlzLnN5c3RlbSA9IG5ldyBmaGlyLkZoaXJDb2RlPENvbnRhY3RQb2ludFN5c3RlbUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zeXN0ZW19KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N5c3RlbSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN5c3RlbSkgeyB0aGlzLnN5c3RlbS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zeXN0ZW0hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zeXN0ZW0gPSBuZXcgZmhpci5GaGlyQ29kZTxDb250YWN0UG9pbnRTeXN0ZW1Db2RlVHlwZT4oc291cmNlLl9zeXN0ZW0gYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3ZhbHVlJ10pIHsgdGhpcy52YWx1ZSA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UudmFsdWV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3ZhbHVlJ10pIHtcclxuICAgICAgaWYgKHRoaXMudmFsdWUpIHsgdGhpcy52YWx1ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl92YWx1ZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnZhbHVlID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3ZhbHVlIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd1c2UnXSkgeyB0aGlzLnVzZSA9IG5ldyBmaGlyLkZoaXJDb2RlPENvbnRhY3RQb2ludFVzZUNvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS51c2V9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3VzZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZSkgeyB0aGlzLnVzZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl91c2UhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy51c2UgPSBuZXcgZmhpci5GaGlyQ29kZTxDb250YWN0UG9pbnRVc2VDb2RlVHlwZT4oc291cmNlLl91c2UgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3JhbmsnXSkgeyB0aGlzLnJhbmsgPSBuZXcgZmhpci5GaGlyUG9zaXRpdmVJbnQoe3ZhbHVlOiBzb3VyY2UucmFua30pOyB9XHJcbiAgICBpZiAoc291cmNlWydfcmFuayddKSB7XHJcbiAgICAgIGlmICh0aGlzLnJhbmspIHsgdGhpcy5yYW5rLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3JhbmshKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5yYW5rID0gbmV3IGZoaXIuRmhpclBvc2l0aXZlSW50KHNvdXJjZS5fcmFuayBhcyBQYXJ0aWFsPGZoaXIuRmhpclBvc2l0aXZlSW50QXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0NvbnRhY3RQb2ludCcgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCdzeXN0ZW0nLGV4cCwnQ29udGFjdFBvaW50U3lzdGVtJyxDb250YWN0UG9pbnRTeXN0ZW1Wc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygndmFsdWUnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCd1c2UnLGV4cCwnQ29udGFjdFBvaW50VXNlJyxDb250YWN0UG9pbnRVc2VWc1ZhbGlkYXRpb24sJ3InKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmFuaycsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGVyaW9kJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==