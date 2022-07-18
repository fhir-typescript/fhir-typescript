// Minimum TypeScript Version: 3.7
// FHIR Primitive: decimal
import * as fhir from '../fhir.js';
/**
 * Do not use an IEEE type floating point type, instead use something that works like a true decimal, with inbuilt precision (e.g. Java BigInteger)
 */
export class FhirDecimal extends fhir.FhirPrimitive {
    /**
       * Create a FhirDecimal
       * @param value Do not use an IEEE type floating point type, instead use something that works like a true decimal, with inbuilt precision (e.g. Java BigInteger)
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source = {}, options = {}) {
        super(source, options);
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if ((this.value !== undefined) && (this.value !== null) && ((typeof this.value !== 'number') || (!FhirDecimal._fts_regex.test(this.value.toString())))) {
            issues.push({ severity: 'error', code: 'invalid', details: { text: 'Invalid value in primitive type decimal' }, expression: [exp] });
        }
        return issues;
    }
    /**
     * Returns a string representation of an object.
     * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
     */
    toString(radix) { return (this.value ?? NaN).toString(radix); }
    /**
     * Returns a string representing a number in fixed-point notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toFixed(fractionDigits) { return (this.value ?? NaN).toFixed(fractionDigits); }
    /**
     * Returns a string containing a number represented in exponential notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toExponential(fractionDigits) { return (this.value ?? NaN).toExponential(fractionDigits); }
    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
     * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
     */
    toPrecision(precision) { return (this.value ?? NaN).toPrecision(precision); }
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf() { return (this.value ?? NaN); }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirDecimal._fts_dataType = 'Decimal';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirDecimal._fts_jsonType = 'number';
// published regex: -?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?
FhirDecimal._fts_regex = /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckRlY2ltYWwuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJEZWNpbWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQywwQkFBMEI7QUFFMUIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sV0FBWSxTQUFRLElBQUksQ0FBQyxhQUFhO0lBZWpEOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBa0MsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDekYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0SixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSx5Q0FBeUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUNySTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRDs7O09BR0c7SUFDYyxRQUFRLENBQUMsS0FBYSxJQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUY7OztPQUdHO0lBQ0ksT0FBTyxDQUFDLGNBQXNCLElBQVcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRzs7O09BR0c7SUFDSSxhQUFhLENBQUMsY0FBc0IsSUFBVyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pIOzs7T0FHRztJQUNJLFdBQVcsQ0FBQyxTQUFpQixJQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkc7O09BRUc7SUFDYSxPQUFPLEtBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQXpEakU7O0dBRUc7QUFDNkIseUJBQWEsR0FBVSxTQUFTLENBQUM7QUFDakU7O0dBRUc7QUFDNkIseUJBQWEsR0FBVSxRQUFRLENBQUM7QUFDaEUsa0VBQWtFO0FBQ2xDLHNCQUFVLEdBQVUsa0RBQWtELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUHJpbWl0aXZlOiBkZWNpbWFsXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIERvIG5vdCB1c2UgYW4gSUVFRSB0eXBlIGZsb2F0aW5nIHBvaW50IHR5cGUsIGluc3RlYWQgdXNlIHNvbWV0aGluZyB0aGF0IHdvcmtzIGxpa2UgYSB0cnVlIGRlY2ltYWwsIHdpdGggaW5idWlsdCBwcmVjaXNpb24gKGUuZy4gSmF2YSBCaWdJbnRlZ2VyKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGaGlyRGVjaW1hbEFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmVBcmdzIHtcclxuICAvKipcclxuICAgKiBEbyBub3QgdXNlIGFuIElFRUUgdHlwZSBmbG9hdGluZyBwb2ludCB0eXBlLCBpbnN0ZWFkIHVzZSBzb21ldGhpbmcgdGhhdCB3b3JrcyBsaWtlIGEgdHJ1ZSBkZWNpbWFsLCB3aXRoIGluYnVpbHQgcHJlY2lzaW9uIChlLmcuIEphdmEgQmlnSW50ZWdlcilcclxuICAgKi9cclxuICB2YWx1ZT86RmhpckRlY2ltYWx8bnVtYmVyfHVuZGVmaW5lZHxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogRG8gbm90IHVzZSBhbiBJRUVFIHR5cGUgZmxvYXRpbmcgcG9pbnQgdHlwZSwgaW5zdGVhZCB1c2Ugc29tZXRoaW5nIHRoYXQgd29ya3MgbGlrZSBhIHRydWUgZGVjaW1hbCwgd2l0aCBpbmJ1aWx0IHByZWNpc2lvbiAoZS5nLiBKYXZhIEJpZ0ludGVnZXIpXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmhpckRlY2ltYWwgZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRGVjaW1hbCc7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgSlNPTiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2pzb25UeXBlOnN0cmluZyA9ICdudW1iZXInO1xyXG4gIC8vIHB1Ymxpc2hlZCByZWdleDogLT8oMHxbMS05XVswLTldKikoXFwuWzAtOV0rKT8oW2VFXVsrLV0/WzAtOV0rKT9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfcmVnZXg6UmVnRXhwID0gL14tPygwfFsxLTldWzAtOV0qKShcXC5bMC05XSspPyhbZUVdWystXT9bMC05XSspPyQvXHJcbiAgLyoqXHJcbiAgICogQSBkZWNpbWFsIHZhbHVlLCByZXByZXNlbnRlZCBhcyBhIEpTIG51bWJlclxyXG4gICAqL1xyXG4gIGRlY2xhcmUgdmFsdWU/Om51bWJlcnxudWxsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgICAqIENyZWF0ZSBhIEZoaXJEZWNpbWFsXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgRG8gbm90IHVzZSBhbiBJRUVFIHR5cGUgZmxvYXRpbmcgcG9pbnQgdHlwZSwgaW5zdGVhZCB1c2Ugc29tZXRoaW5nIHRoYXQgd29ya3MgbGlrZSBhIHRydWUgZGVjaW1hbCwgd2l0aCBpbmJ1aWx0IHByZWNpc2lvbiAoZS5nLiBKYXZhIEJpZ0ludGVnZXIpXHJcbiAgICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nICh1bmNvbW1vbiBvbiBwcmltaXRpdmVzKVxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyB0byBleHRlbnNpb24gY29uc3RydWN0b3JzXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGaGlyRGVjaW1hbEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0geyB9ICkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmICgodGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAodGhpcy52YWx1ZSAhPT0gbnVsbCkgJiYgKCh0eXBlb2YgdGhpcy52YWx1ZSAhPT0gJ251bWJlcicpIHx8ICghRmhpckRlY2ltYWwuX2Z0c19yZWdleC50ZXN0KHRoaXMudmFsdWUudG9TdHJpbmcoKSkpKSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAnaW52YWxpZCcsIGRldGFpbHM6IHsgdGV4dDogJ0ludmFsaWQgdmFsdWUgaW4gcHJpbWl0aXZlIHR5cGUgZGVjaW1hbCcgfSwgZXhwcmVzc2lvbjogW2V4cF19KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYW4gb2JqZWN0LlxyXG4gICAqIEBwYXJhbSByYWRpeCBTcGVjaWZpZXMgYSByYWRpeCBmb3IgY29udmVydGluZyBudW1lcmljIHZhbHVlcyB0byBzdHJpbmdzLiBUaGlzIHZhbHVlIGlzIG9ubHkgdXNlZCBmb3IgbnVtYmVycy5cclxuICAgKi9cclxuICAgcHVibGljIG92ZXJyaWRlIHRvU3RyaW5nKHJhZGl4PzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyBOYU4pLnRvU3RyaW5nKHJhZGl4KTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBudW1iZXIgaW4gZml4ZWQtcG9pbnQgbm90YXRpb24uXHJcbiAgICAqIEBwYXJhbSBmcmFjdGlvbkRpZ2l0cyBOdW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LiBNdXN0IGJlIGluIHRoZSByYW5nZSAwIC0gMjAsIGluY2x1c2l2ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0ZpeGVkKGZyYWN0aW9uRGlnaXRzPzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyBOYU4pLnRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBudW1iZXIgcmVwcmVzZW50ZWQgaW4gZXhwb25lbnRpYWwgbm90YXRpb24uXHJcbiAgICAqIEBwYXJhbSBmcmFjdGlvbkRpZ2l0cyBOdW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LiBNdXN0IGJlIGluIHRoZSByYW5nZSAwIC0gMjAsIGluY2x1c2l2ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0V4cG9uZW50aWFsKGZyYWN0aW9uRGlnaXRzPzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyBOYU4pLnRvRXhwb25lbnRpYWwoZnJhY3Rpb25EaWdpdHMpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBudW1iZXIgcmVwcmVzZW50ZWQgZWl0aGVyIGluIGV4cG9uZW50aWFsIG9yIGZpeGVkLXBvaW50IG5vdGF0aW9uIHdpdGggYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRpZ2l0cy5cclxuICAgICogQHBhcmFtIHByZWNpc2lvbiBOdW1iZXIgb2Ygc2lnbmlmaWNhbnQgZGlnaXRzLiBNdXN0IGJlIGluIHRoZSByYW5nZSAxIC0gMjEsIGluY2x1c2l2ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1ByZWNpc2lvbihwcmVjaXNpb24/Om51bWJlcik6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/IE5hTikudG9QcmVjaXNpb24ocHJlY2lzaW9uKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgcHJpbWl0aXZlIHZhbHVlIG9mIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIG92ZXJyaWRlIHZhbHVlT2YoKTpudW1iZXIgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gTmFOKTsgfVxyXG4gIH1cclxuIl19