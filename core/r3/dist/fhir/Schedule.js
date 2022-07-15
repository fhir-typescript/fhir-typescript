// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Schedule
import * as fhir from '../fhir.js';
/**
 * A container for slots of time that may be available for booking appointments.
 */
export class Schedule extends fhir.DomainResource {
    /**
     * Default constructor for Schedule - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'Schedule';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['active']) {
            this.active = new fhir.FhirBoolean({ value: source.active });
        }
        if (source['_active']) {
            if (this.active) {
                this.active.addExtendedProperties(source._active);
            }
            else {
                this.active = new fhir.FhirBoolean(source._active);
            }
        }
        if (source['serviceCategory']) {
            this.serviceCategory = new fhir.CodeableConcept(source.serviceCategory);
        }
        if (source['serviceType']) {
            this.serviceType = source.serviceType.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.serviceType = [];
        }
        if (source['specialty']) {
            this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.specialty = [];
        }
        if (source['actor']) {
            this.actor = source.actor.map((x) => new fhir.Reference(x));
        }
        else {
            this.actor = [];
        }
        if (source['planningHorizon']) {
            this.planningHorizon = new fhir.Period(source.planningHorizon);
        }
        if (source['comment']) {
            this.comment = new fhir.FhirString({ value: source.comment });
        }
        if (source['_comment']) {
            if (this.comment) {
                this.comment.addExtendedProperties(source._comment);
            }
            else {
                this.comment = new fhir.FhirString(source._comment);
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Schedule';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vOS('active', exp);
        this.vOS('serviceCategory', exp);
        this.vOA('serviceType', exp);
        this.vOA('specialty', exp);
        this.vRA('actor', exp);
        this.vOS('planningHorizon', exp);
        this.vOS('comment', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Schedule._fts_dataType = 'Schedule';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL1NjaGVkdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQWdFbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUyxTQUFRLElBQUksQ0FBQyxjQUFjO0lBeUMvQzs7T0FFRztJQUNILFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDckYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztRQUMvQixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNyRixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQXdDLENBQUMsQ0FBQzthQUFFO1NBQzlGO1FBQ0QsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUFFO1FBQzNHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUN4RztZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDL0IsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2xHO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUM3QixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEY7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQ3pCLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7U0FBRTtRQUNsRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDdkYsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUFFLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFFBQVMsQ0FBQyxDQUFDO2FBQUU7aUJBQ3RFO2dCQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUF3QyxDQUFDLENBQUM7YUFBRTtTQUM5RjtJQUNILENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLEdBQUcsR0FBRyxVQUFVLENBQUE7U0FBRTtRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFuRkQ7O0dBRUc7QUFDNkIsc0JBQWEsR0FBVSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFNjaGVkdWxlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTZXJ2aWNlQ2F0ZWdvcnlDb2RlcywgIFNlcnZpY2VDYXRlZ29yeUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TZXJ2aWNlQ2F0ZWdvcnlDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgU2VydmljZUNhdGVnb3J5VnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TZXJ2aWNlQ2F0ZWdvcnlWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFNlcnZpY2VUeXBlQ29kZXMsICBTZXJ2aWNlVHlwZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9TZXJ2aWNlVHlwZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBTZXJ2aWNlVHlwZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvU2VydmljZVR5cGVWc1ZhbGlkYXRpb24uanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IEM4MFByYWN0aWNlQ29kZXMsICBDODBQcmFjdGljZUNvZGVUeXBlIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9DODBQcmFjdGljZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBDODBQcmFjdGljZVZzVmFsaWRhdGlvbiB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvQzgwUHJhY3RpY2VWc1ZhbGlkYXRpb24uanMnO1xyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU2NoZWR1bGUgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2NoZWR1bGVBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJTY2hlZHVsZVwifHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBJZHMgZm9yIHRoaXMgaXRlbS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgaXQgbWF5IGJlIHVzZWQgdG8gbWFyayB0aGF0IHRoZSByZXNvdXJjZSB3YXMgY3JlYXRlZCBpbiBlcnJvci5cclxuICAgKi9cclxuICBhY3RpdmU/OiBmaGlyLkZoaXJCb29sZWFufGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTY2hlZHVsZS5hY3RpdmVcclxuICAgKi9cclxuICBfYWN0aXZlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBBIGJyb2FkIGNhdGVnb3Jpc2F0aW9uIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgdG8gYmUgcGVyZm9ybWVkIGR1cmluZyB0aGlzIGFwcG9pbnRtZW50LlxyXG4gICAqL1xyXG4gIHNlcnZpY2VDYXRlZ29yeT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNwZWNpZmljIHNlcnZpY2UgdGhhdCBpcyB0byBiZSBwZXJmb3JtZWQgZHVyaW5nIHRoaXMgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgc2VydmljZVR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNwZWNpYWx0eSBvZiBhIHByYWN0aXRpb25lciB0aGF0IHdvdWxkIGJlIHJlcXVpcmVkIHRvIHBlcmZvcm0gdGhlIHNlcnZpY2UgcmVxdWVzdGVkIGluIHRoaXMgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgc3BlY2lhbHR5PzogZmhpci5Db2RlYWJsZUNvbmNlcHRBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjYXBhY2l0eSB0byBzdXBwb3J0IG11bHRpcGxlIHJlZmVyZW5jZWQgcmVzb3VyY2UgdHlwZXMgc2hvdWxkIGJlIHVzZWQgaW4gY2FzZXMgd2hlcmUgdGhlIHNwZWNpZmljIHJlc291cmNlcyB0aGVtc2VsdmVzIGNhbm5vdCBiZSBzY2hlZHVsZWQgd2l0aG91dCB0aGUgb3RoZXIsIGFuZCB0aHVzIG9ubHkgbWFrZSBzZW5zZSB0byB0aGUgc3lzdGVtIGV4cG9zaW5nIHRoZW0gYXMgYSBncm91cC4gQ29tbW9uIGV4YW1wbGVzIG9mIHRoaXMgYXJlIHdoZXJlIHRoZSBjb21iaW5hdGlvbiBvZiBhIHByYWNpdGlvbmVyIGFuZCBhIHJvb20obG9jYXRpb24pIGFyZSBhbHdheXMgcmVxdWlyZWQgYnkgYSBzeXN0ZW0uXHJcbiAgICovXHJcbiAgYWN0b3I6IGZoaXIuUmVmZXJlbmNlQXJnc1tdfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBlcmlvZCBvZiB0aW1lIHRoYXQgdGhlIHNsb3RzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIHRoaXMgU2NoZWR1bGUgcmVzb3VyY2UgY292ZXIgKGV2ZW4gaWYgbm9uZSBleGlzdCkuIFRoZXNlICBjb3ZlciB0aGUgYW1vdW50IG9mIHRpbWUgdGhhdCBhbiBvcmdhbml6YXRpb24ncyBwbGFubmluZyBob3Jpem9uOyB0aGUgaW50ZXJ2YWwgZm9yIHdoaWNoIHRoZXkgYXJlIGN1cnJlbnRseSBhY2NlcHRpbmcgYXBwb2ludG1lbnRzLiBUaGlzIGRvZXMgbm90IGRlZmluZSBhIFwidGVtcGxhdGVcIiBmb3IgcGxhbm5pbmcgb3V0c2lkZSB0aGVzZSBkYXRlcy5cclxuICAgKi9cclxuICBwbGFubmluZ0hvcml6b24/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENvbW1lbnRzIG9uIHRoZSBhdmFpbGFiaWxpdHkgdG8gZGVzY3JpYmUgYW55IGV4dGVuZGVkIGluZm9ybWF0aW9uLiBTdWNoIGFzIGN1c3RvbSBjb25zdHJhaW50cyBvbiB0aGUgc2xvdHMgdGhhdCBtYXkgYmUgYXNzb2NpYXRlZC5cclxuICAgKi9cclxuICBjb21tZW50PzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFNjaGVkdWxlLmNvbW1lbnRcclxuICAgKi9cclxuICBfY29tbWVudD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbnRhaW5lciBmb3Igc2xvdHMgb2YgdGltZSB0aGF0IG1heSBiZSBhdmFpbGFibGUgZm9yIGJvb2tpbmcgYXBwb2ludG1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdTY2hlZHVsZSc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJTY2hlZHVsZVwiO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIElkcyBmb3IgdGhpcyBpdGVtLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyOiBmaGlyLklkZW50aWZpZXJbXTtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgaXQgbWF5IGJlIHVzZWQgdG8gbWFyayB0aGF0IHRoZSByZXNvdXJjZSB3YXMgY3JlYXRlZCBpbiBlcnJvci5cclxuICAgKi9cclxuICBwdWJsaWMgYWN0aXZlPzogZmhpci5GaGlyQm9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBicm9hZCBjYXRlZ29yaXNhdGlvbiBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHRvIGJlIHBlcmZvcm1lZCBkdXJpbmcgdGhpcyBhcHBvaW50bWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgc2VydmljZUNhdGVnb3J5PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzcGVjaWZpYyBzZXJ2aWNlIHRoYXQgaXMgdG8gYmUgcGVyZm9ybWVkIGR1cmluZyB0aGlzIGFwcG9pbnRtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXJ2aWNlVHlwZTogZmhpci5Db2RlYWJsZUNvbmNlcHRbXTtcclxuICAvKipcclxuICAgKiBUaGUgc3BlY2lhbHR5IG9mIGEgcHJhY3RpdGlvbmVyIHRoYXQgd291bGQgYmUgcmVxdWlyZWQgdG8gcGVyZm9ybSB0aGUgc2VydmljZSByZXF1ZXN0ZWQgaW4gdGhpcyBhcHBvaW50bWVudC5cclxuICAgKi9cclxuICBwdWJsaWMgc3BlY2lhbHR5OiBmaGlyLkNvZGVhYmxlQ29uY2VwdFtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjYXBhY2l0eSB0byBzdXBwb3J0IG11bHRpcGxlIHJlZmVyZW5jZWQgcmVzb3VyY2UgdHlwZXMgc2hvdWxkIGJlIHVzZWQgaW4gY2FzZXMgd2hlcmUgdGhlIHNwZWNpZmljIHJlc291cmNlcyB0aGVtc2VsdmVzIGNhbm5vdCBiZSBzY2hlZHVsZWQgd2l0aG91dCB0aGUgb3RoZXIsIGFuZCB0aHVzIG9ubHkgbWFrZSBzZW5zZSB0byB0aGUgc3lzdGVtIGV4cG9zaW5nIHRoZW0gYXMgYSBncm91cC4gQ29tbW9uIGV4YW1wbGVzIG9mIHRoaXMgYXJlIHdoZXJlIHRoZSBjb21iaW5hdGlvbiBvZiBhIHByYWNpdGlvbmVyIGFuZCBhIHJvb20obG9jYXRpb24pIGFyZSBhbHdheXMgcmVxdWlyZWQgYnkgYSBzeXN0ZW0uXHJcbiAgICovXHJcbiAgcHVibGljIGFjdG9yOiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2Qgb2YgdGltZSB0aGF0IHRoZSBzbG90cyB0aGF0IGFyZSBhdHRhY2hlZCB0byB0aGlzIFNjaGVkdWxlIHJlc291cmNlIGNvdmVyIChldmVuIGlmIG5vbmUgZXhpc3QpLiBUaGVzZSAgY292ZXIgdGhlIGFtb3VudCBvZiB0aW1lIHRoYXQgYW4gb3JnYW5pemF0aW9uJ3MgcGxhbm5pbmcgaG9yaXpvbjsgdGhlIGludGVydmFsIGZvciB3aGljaCB0aGV5IGFyZSBjdXJyZW50bHkgYWNjZXB0aW5nIGFwcG9pbnRtZW50cy4gVGhpcyBkb2VzIG5vdCBkZWZpbmUgYSBcInRlbXBsYXRlXCIgZm9yIHBsYW5uaW5nIG91dHNpZGUgdGhlc2UgZGF0ZXMuXHJcbiAgICovXHJcbiAgcHVibGljIHBsYW5uaW5nSG9yaXpvbj86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb21tZW50cyBvbiB0aGUgYXZhaWxhYmlsaXR5IHRvIGRlc2NyaWJlIGFueSBleHRlbmRlZCBpbmZvcm1hdGlvbi4gU3VjaCBhcyBjdXN0b20gY29uc3RyYWludHMgb24gdGhlIHNsb3RzIHRoYXQgbWF5IGJlIGFzc29jaWF0ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbW1lbnQ/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIFNjaGVkdWxlIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8U2NoZWR1bGVBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnU2NoZWR1bGUnO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWN0aXZlJ10pIHsgdGhpcy5hY3RpdmUgPSBuZXcgZmhpci5GaGlyQm9vbGVhbih7dmFsdWU6IHNvdXJjZS5hY3RpdmV9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2FjdGl2ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkgeyB0aGlzLmFjdGl2ZS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9hY3RpdmUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5hY3RpdmUgPSBuZXcgZmhpci5GaGlyQm9vbGVhbihzb3VyY2UuX2FjdGl2ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckJvb2xlYW5BcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3NlcnZpY2VDYXRlZ29yeSddKSB7IHRoaXMuc2VydmljZUNhdGVnb3J5ID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS5zZXJ2aWNlQ2F0ZWdvcnkpOyB9XHJcbiAgICBpZiAoc291cmNlWydzZXJ2aWNlVHlwZSddKSB7IHRoaXMuc2VydmljZVR5cGUgPSBzb3VyY2Uuc2VydmljZVR5cGUubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zZXJ2aWNlVHlwZSA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydzcGVjaWFsdHknXSkgeyB0aGlzLnNwZWNpYWx0eSA9IHNvdXJjZS5zcGVjaWFsdHkubWFwKCh4KSA9PiBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5zcGVjaWFsdHkgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYWN0b3InXSkgeyB0aGlzLmFjdG9yID0gc291cmNlLmFjdG9yLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYWN0b3IgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsncGxhbm5pbmdIb3Jpem9uJ10pIHsgdGhpcy5wbGFubmluZ0hvcml6b24gPSBuZXcgZmhpci5QZXJpb2Qoc291cmNlLnBsYW5uaW5nSG9yaXpvbik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbW1lbnQnXSkgeyB0aGlzLmNvbW1lbnQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmNvbW1lbnR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2NvbW1lbnQnXSkge1xyXG4gICAgICBpZiAodGhpcy5jb21tZW50KSB7IHRoaXMuY29tbWVudC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9jb21tZW50ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuY29tbWVudCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9jb21tZW50IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnU2NoZWR1bGUnIH1cclxuICAgIHRoaXMudlJTKCdyZXNvdXJjZVR5cGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApXHJcbiAgICB0aGlzLnZPUygnYWN0aXZlJyxleHApXHJcbiAgICB0aGlzLnZPUygnc2VydmljZUNhdGVnb3J5JyxleHApXHJcbiAgICB0aGlzLnZPQSgnc2VydmljZVR5cGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdzcGVjaWFsdHknLGV4cClcclxuICAgIHRoaXMudlJBKCdhY3RvcicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3BsYW5uaW5nSG9yaXpvbicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2NvbW1lbnQnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==