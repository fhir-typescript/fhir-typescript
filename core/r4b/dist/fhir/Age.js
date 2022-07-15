// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Age
import * as fhir from '../fhir.js';
/**
 * A duration of time during which an organism (or a process) has existed.
 */
export class Age extends fhir.Quantity {
    /**
     * Default constructor for Age - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'Age';
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
Age._fts_dataType = 'Age';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9BZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsd0JBQXdCO0FBRXhCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBUW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLEdBQUksU0FBUSxJQUFJLENBQUMsUUFBUTtJQUtwQzs7T0FFRztJQUNILFlBQVksU0FBMEIsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDaEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFBO1NBQUU7UUFDL0IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFqQkQ7O0dBRUc7QUFDNkIsaUJBQWEsR0FBVSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBBZ2VcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgQWdlIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEFnZUFyZ3MgZXh0ZW5kcyBmaGlyLlF1YW50aXR5QXJncyB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGR1cmF0aW9uIG9mIHRpbWUgZHVyaW5nIHdoaWNoIGFuIG9yZ2FuaXNtIChvciBhIHByb2Nlc3MpIGhhcyBleGlzdGVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFnZSBleHRlbmRzIGZoaXIuUXVhbnRpdHkge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQWdlJztcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBBZ2UgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxBZ2VBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0FnZScgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19