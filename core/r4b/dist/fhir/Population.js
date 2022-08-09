// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Population
import * as fhir from '../fhir.js';
/**
 * A populatioof people with some set of grouping criteria.
 */
export class Population extends fhir.BackboneElement {
    /**
     * Default constructor for Population - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['age']) {
            this.age = source.age;
        }
        else if (source['ageRange']) {
            this.age = new fhir.Range(source.ageRange, options);
        }
        else if (source['ageCodeableConcept']) {
            this.age = new fhir.CodeableConcept(source.ageCodeableConcept, options);
        }
        if (source['gender']) {
            this.gender = new fhir.CodeableConcept(source.gender, options);
        }
        if (source['race']) {
            this.race = new fhir.CodeableConcept(source.race, options);
        }
        if (source['physiologicalCondition']) {
            this.physiologicalCondition = new fhir.CodeableConcept(source.physiologicalCondition, options);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let iss = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Population';
        }
        iss.push(...this.vOS('age', exp));
        iss.push(...this.vOS('gender', exp));
        iss.push(...this.vOS('race', exp));
        iss.push(...this.vOS('physiologicalCondition', exp));
        return iss;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Population._fts_dataType = 'Population';
/**
 * Internal flag to properly serialize choice-type element Population.age[x]
 */
Population._fts_ageIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wdWxhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUG9wdWxhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFnQ25DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsZUFBZTtJQXlCbEQ7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FBRTthQUN4QyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FBRTthQUNoRixJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDbkgsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDekYsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7UUFDbkYsSUFBSSxNQUFNLENBQUMsd0JBQXdCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQUU7SUFDM0ksQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFlBQVksQ0FBQTtTQUFFO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQS9DRDs7R0FFRztBQUM2Qix3QkFBYSxHQUFVLFlBQVksQ0FBQztBQUtwRTs7R0FFRztBQUN1QiwyQkFBZ0IsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBQb3B1bGF0aW9uXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIFBvcHVsYXRpb24gdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9wdWxhdGlvbkFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhZ2Ugb2YgdGhlIHNwZWNpZmljIHBvcHVsYXRpb24uXHJcbiAgICovXHJcbiAgYWdlPzogZmhpci5SYW5nZXxmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFnZSBvZiB0aGUgc3BlY2lmaWMgcG9wdWxhdGlvbi5cclxuICAgKi9cclxuICBhZ2VSYW5nZT86IGZoaXIuUmFuZ2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgYWdlIG9mIHRoZSBzcGVjaWZpYyBwb3B1bGF0aW9uLlxyXG4gICAqL1xyXG4gIGFnZUNvZGVhYmxlQ29uY2VwdD86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGdlbmRlciBvZiB0aGUgc3BlY2lmaWMgcG9wdWxhdGlvbi5cclxuICAgKi9cclxuICBnZW5kZXI/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJhY2Ugb2YgdGhlIHNwZWNpZmljIHBvcHVsYXRpb24uXHJcbiAgICovXHJcbiAgcmFjZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGV4aXN0aW5nIHBoeXNpb2xvZ2ljYWwgY29uZGl0aW9ucyBvZiB0aGUgc3BlY2lmaWMgcG9wdWxhdGlvbiB0byB3aGljaCB0aGlzIGFwcGxpZXMuXHJcbiAgICovXHJcbiAgcGh5c2lvbG9naWNhbENvbmRpdGlvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHBvcHVsYXRpb29mIHBlb3BsZSB3aXRoIHNvbWUgc2V0IG9mIGdyb3VwaW5nIGNyaXRlcmlhLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvcHVsYXRpb24gZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdQb3B1bGF0aW9uJztcclxuICAvKipcclxuICAgKiBUaGUgYWdlIG9mIHRoZSBzcGVjaWZpYyBwb3B1bGF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZ2U/OiAoZmhpci5SYW5nZXxmaGlyLkNvZGVhYmxlQ29uY2VwdCl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgUG9wdWxhdGlvbi5hZ2VbeF1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IF9mdHNfYWdlSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGhlIGdlbmRlciBvZiB0aGUgc3BlY2lmaWMgcG9wdWxhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgZ2VuZGVyPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJhY2Ugb2YgdGhlIHNwZWNpZmljIHBvcHVsYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIHJhY2U/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGV4aXN0aW5nIHBoeXNpb2xvZ2ljYWwgY29uZGl0aW9ucyBvZiB0aGUgc3BlY2lmaWMgcG9wdWxhdGlvbiB0byB3aGljaCB0aGlzIGFwcGxpZXMuXHJcbiAgICovXHJcbiAgcHVibGljIHBoeXNpb2xvZ2ljYWxDb25kaXRpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgUG9wdWxhdGlvbiAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFBvcHVsYXRpb25BcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnYWdlJ10pIHsgdGhpcy5hZ2UgPSBzb3VyY2UuYWdlOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2FnZVJhbmdlJ10pIHsgdGhpcy5hZ2UgPSBuZXcgZmhpci5SYW5nZShzb3VyY2UuYWdlUmFuZ2UsIG9wdGlvbnMpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2FnZUNvZGVhYmxlQ29uY2VwdCddKSB7IHRoaXMuYWdlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5hZ2VDb2RlYWJsZUNvbmNlcHQsIG9wdGlvbnMpOyB9XHJcbiAgICBpZiAoc291cmNlWydnZW5kZXInXSkgeyB0aGlzLmdlbmRlciA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuZ2VuZGVyLCBvcHRpb25zKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncmFjZSddKSB7IHRoaXMucmFjZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UucmFjZSwgb3B0aW9ucyk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3BoeXNpb2xvZ2ljYWxDb25kaXRpb24nXSkgeyB0aGlzLnBoeXNpb2xvZ2ljYWxDb25kaXRpb24gPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnBoeXNpb2xvZ2ljYWxDb25kaXRpb24sIG9wdGlvbnMpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnUG9wdWxhdGlvbicgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2FnZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygnZ2VuZGVyJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdyYWNlJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdwaHlzaW9sb2dpY2FsQ29uZGl0aW9uJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==