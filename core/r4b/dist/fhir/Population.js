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
            this.age = new fhir.Range(source.ageRange);
        }
        else if (source['ageCodeableConcept']) {
            this.age = new fhir.CodeableConcept(source.ageCodeableConcept);
        }
        if (source['gender']) {
            this.gender = new fhir.CodeableConcept(source.gender);
        }
        if (source['race']) {
            this.race = new fhir.CodeableConcept(source.race);
        }
        if (source['physiologicalCondition']) {
            this.physiologicalCondition = new fhir.CodeableConcept(source.physiologicalCondition);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wdWxhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvUG9wdWxhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFnQ25DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsZUFBZTtJQXlCbEQ7O09BRUc7SUFDSCxZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFFO1FBQ3ZGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FBRTthQUN4QyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUFFO2FBQ3ZFLElBQUksTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUFFO1FBQzFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7UUFDaEYsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBRTtRQUMxRSxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUFFO0lBQ2xJLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLEdBQUcsR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxZQUFZLENBQUE7U0FBRTtRQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUEvQ0Q7O0dBRUc7QUFDNkIsd0JBQWEsR0FBVSxZQUFZLENBQUM7QUFLcEU7O0dBRUc7QUFDdUIsMkJBQWdCLEdBQVEsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBDb21wbGV4VHlwZTogUG9wdWxhdGlvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBQb3B1bGF0aW9uIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBvcHVsYXRpb25BcmdzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnRBcmdzIHtcclxuICAvKipcclxuICAgKiBUaGUgYWdlIG9mIHRoZSBzcGVjaWZpYyBwb3B1bGF0aW9uLlxyXG4gICAqL1xyXG4gIGFnZT86IGZoaXIuUmFuZ2V8Zmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhZ2Ugb2YgdGhlIHNwZWNpZmljIHBvcHVsYXRpb24uXHJcbiAgICovXHJcbiAgYWdlUmFuZ2U/OiBmaGlyLlJhbmdlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFnZSBvZiB0aGUgc3BlY2lmaWMgcG9wdWxhdGlvbi5cclxuICAgKi9cclxuICBhZ2VDb2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBnZW5kZXIgb2YgdGhlIHNwZWNpZmljIHBvcHVsYXRpb24uXHJcbiAgICovXHJcbiAgZ2VuZGVyPzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSYWNlIG9mIHRoZSBzcGVjaWZpYyBwb3B1bGF0aW9uLlxyXG4gICAqL1xyXG4gIHJhY2U/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBleGlzdGluZyBwaHlzaW9sb2dpY2FsIGNvbmRpdGlvbnMgb2YgdGhlIHNwZWNpZmljIHBvcHVsYXRpb24gdG8gd2hpY2ggdGhpcyBhcHBsaWVzLlxyXG4gICAqL1xyXG4gIHBoeXNpb2xvZ2ljYWxDb25kaXRpb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBwb3B1bGF0aW9vZiBwZW9wbGUgd2l0aCBzb21lIHNldCBvZiBncm91cGluZyBjcml0ZXJpYS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb3B1bGF0aW9uIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnUG9wdWxhdGlvbic7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFnZSBvZiB0aGUgc3BlY2lmaWMgcG9wdWxhdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgYWdlPzogKGZoaXIuUmFuZ2V8Zmhpci5Db2RlYWJsZUNvbmNlcHQpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBmbGFnIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBjaG9pY2UtdHlwZSBlbGVtZW50IFBvcHVsYXRpb24uYWdlW3hdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBfZnRzX2FnZUlzQ2hvaWNlOnRydWUgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBnZW5kZXIgb2YgdGhlIHNwZWNpZmljIHBvcHVsYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGdlbmRlcj86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSYWNlIG9mIHRoZSBzcGVjaWZpYyBwb3B1bGF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByYWNlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBleGlzdGluZyBwaHlzaW9sb2dpY2FsIGNvbmRpdGlvbnMgb2YgdGhlIHNwZWNpZmljIHBvcHVsYXRpb24gdG8gd2hpY2ggdGhpcyBhcHBsaWVzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwaHlzaW9sb2dpY2FsQ29uZGl0aW9uPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFBvcHVsYXRpb24gLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxQb3B1bGF0aW9uQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2FnZSddKSB7IHRoaXMuYWdlID0gc291cmNlLmFnZTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydhZ2VSYW5nZSddKSB7IHRoaXMuYWdlID0gbmV3IGZoaXIuUmFuZ2Uoc291cmNlLmFnZVJhbmdlKTsgfVxyXG4gICAgZWxzZSBpZiAoc291cmNlWydhZ2VDb2RlYWJsZUNvbmNlcHQnXSkgeyB0aGlzLmFnZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuYWdlQ29kZWFibGVDb25jZXB0KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnZ2VuZGVyJ10pIHsgdGhpcy5nZW5kZXIgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLmdlbmRlcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JhY2UnXSkgeyB0aGlzLnJhY2UgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnJhY2UpOyB9XHJcbiAgICBpZiAoc291cmNlWydwaHlzaW9sb2dpY2FsQ29uZGl0aW9uJ10pIHsgdGhpcy5waHlzaW9sb2dpY2FsQ29uZGl0aW9uID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5waHlzaW9sb2dpY2FsQ29uZGl0aW9uKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ1BvcHVsYXRpb24nIH1cclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdhZ2UnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1MoJ2dlbmRlcicsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncmFjZScsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGh5c2lvbG9naWNhbENvbmRpdGlvbicsZXhwKSk7XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxufVxyXG4iXX0=