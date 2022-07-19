// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: HumanName
import * as fhir from '../fhir.js';
// @ts-ignore
import { NameUseVsValidation } from '../fhirValueSets/NameUseVsValidation.js';
/**
 * A human's name with the ability to identify parts and usage.
 */
export class HumanName extends fhir.FhirElement {
    /**
     * Default constructor for HumanName - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
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
        if (source['text']) {
            this.text = new fhir.FhirString({ value: source.text });
        }
        if (source['_text']) {
            if (this.text) {
                this.text.addExtendedProperties(source._text);
            }
            else {
                this.text = new fhir.FhirString(source._text);
            }
        }
        if (source['family']) {
            this.family = new fhir.FhirString({ value: source.family });
        }
        if (source['_family']) {
            if (this.family) {
                this.family.addExtendedProperties(source._family);
            }
            else {
                this.family = new fhir.FhirString(source._family);
            }
        }
        if (source['given']) {
            this.given = source.given.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.given = [];
        }
        if (source['_given']) {
            source._given.forEach((x, i) => {
                if (this.given.length >= i) {
                    if (x) {
                        this.given[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.given.push(new fhir.FhirString(x));
                    }
                }
            });
        }
        if (source['prefix']) {
            this.prefix = source.prefix.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.prefix = [];
        }
        if (source['_prefix']) {
            source._prefix.forEach((x, i) => {
                if (this.prefix.length >= i) {
                    if (x) {
                        this.prefix[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.prefix.push(new fhir.FhirString(x));
                    }
                }
            });
        }
        if (source['suffix']) {
            this.suffix = source.suffix.map((x) => new fhir.FhirString({ value: x }));
        }
        else {
            this.suffix = [];
        }
        if (source['_suffix']) {
            source._suffix.forEach((x, i) => {
                if (this.suffix.length >= i) {
                    if (x) {
                        this.suffix[i].addExtendedProperties(x);
                    }
                }
                else {
                    if (x) {
                        this.suffix.push(new fhir.FhirString(x));
                    }
                }
            });
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
            exp = 'HumanName';
        }
        iss.push(...this.vOSV('use', exp, 'NameUse', NameUseVsValidation, 'r'));
        iss.push(...this.vOS('text', exp));
        iss.push(...this.vOS('family', exp));
        iss.push(...this.vOA('given', exp));
        iss.push(...this.vOA('prefix', exp));
        iss.push(...this.vOA('suffix', exp));
        iss.push(...this.vOS('period', exp));
        return iss;
    }
    /**
     * Convert a HumanName into a displayable string
     */
    toDisplay(familyFirst = true, includeAnnotations = false) {
        if ((this.text) && (this.text.length > 0)) {
            return this.text.toString();
        }
        var val = '';
        if (familyFirst) {
            if (this.family) {
                val = this.family.toString();
            }
            if (this.given) {
                val += (val.length > 0 ? ', ' : '') + this.given.join(' ');
            }
            if (includeAnnotations) {
                if (this.suffix) {
                    val += (val.length > 0 ? ', ' : '') + this.suffix.join(', ');
                }
                if (this.prefix) {
                    val += (val.length > 0 ? ', ' : '') + this.prefix.join(', ');
                }
            }
            return val;
        }
        if ((includeAnnotations) && (this.prefix)) {
            val += this.prefix.join(', ');
        }
        if (this.given) {
            val = (val.length > 0 ? ' ' : '') + this.given.join(' ');
        }
        if (this.family) {
            val += (val.length > 0 ? ' ' : '') + this.family;
        }
        if ((includeAnnotations) && (this.suffix)) {
            val += (val.length > 0 ? ', ' : '') + this.suffix.join(', ');
        }
        return val;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
HumanName._fts_dataType = 'HumanName';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHVtYW5OYW1lLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9IdW1hbk5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsOEJBQThCO0FBRTlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBSW5DLGFBQWE7QUFDYixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQTJEOUU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sU0FBVSxTQUFRLElBQUksQ0FBQyxXQUFXO0lBaUM3Qzs7T0FFRztJQUNILFlBQVksU0FBZ0MsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDdEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFrQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQzFGLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUMsQ0FBQzthQUFFO2lCQUMxRDtnQkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBa0IsTUFBTSxDQUFDLElBQThCLENBQUMsQ0FBQzthQUFFO1NBQy9GO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQzlFLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUFFO2lCQUM3RDtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBcUMsQ0FBQyxDQUFDO2FBQUU7U0FDeEY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDcEYsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQUU7aUJBQ25FO2dCQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUF1QyxDQUFDLENBQUM7YUFBRTtTQUM1RjtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQzFGO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FBRTtRQUN6QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFBRTtpQkFBRTtxQkFDN0U7b0JBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQWlDLENBQUMsQ0FBQyxDQUFDO3FCQUFFO2lCQUFFO1lBQzlGLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUM3RjtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDMUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUFFLElBQUksQ0FBQyxFQUFFO3dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQUU7aUJBQUU7cUJBQy9FO29CQUFFLElBQUksQ0FBQyxFQUFFO3dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFpQyxDQUFDLENBQUMsQ0FBQztxQkFBRTtpQkFBRTtZQUMvRixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDN0Y7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzFCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFO2dCQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFBRSxJQUFJLENBQUMsRUFBRTt3QkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUFFO2lCQUFFO3FCQUMvRTtvQkFBRSxJQUFJLENBQUMsRUFBRTt3QkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBaUMsQ0FBQyxDQUFDLENBQUM7cUJBQUU7aUJBQUU7WUFDL0YsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7SUFDekUsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLFdBQVcsQ0FBQTtTQUFFO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLG1CQUFtQixFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUg7O09BRUc7SUFDSCxTQUFTLENBQUMsY0FBc0IsSUFBSSxFQUFFLHFCQUE2QixLQUFLO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDN0I7UUFFRCxJQUFJLEdBQUcsR0FBVSxFQUFFLENBQUM7UUFFcEIsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDOUI7WUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUQ7WUFFRCxJQUFJLGtCQUFrQixFQUFFO2dCQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzlEO2dCQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDZixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDOUQ7YUFDRjtZQUVELE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDbEQ7UUFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5RDtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUE5SUM7O0dBRUc7QUFDNkIsdUJBQWEsR0FBVSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIENvbXBsZXhUeXBlOiBIdW1hbk5hbWVcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IE5hbWVVc2VDb2RlcywgIE5hbWVVc2VDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvTmFtZVVzZUNvZGVzLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBOYW1lVXNlVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9OYW1lVXNlVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIEh1bWFuTmFtZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBIdW1hbk5hbWVBcmdzIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEFwcGxpY2F0aW9ucyBjYW4gYXNzdW1lIHRoYXQgYSBuYW1lIGlzIGN1cnJlbnQgdW5sZXNzIGl0IGV4cGxpY2l0bHkgc2F5cyB0aGF0IGl0IGlzIHRlbXBvcmFyeSBvciBvbGQuXHJcbiAgICovXHJcbiAgdXNlPzogZmhpci5GaGlyQ29kZTxOYW1lVXNlQ29kZVR5cGU+fHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEh1bWFuTmFtZS51c2VcclxuICAgKi9cclxuICBfdXNlPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBDYW4gcHJvdmlkZSBib3RoIGEgdGV4dCByZXByZXNlbnRhdGlvbiBhbmQgcGFydHMuIEFwcGxpY2F0aW9ucyB1cGRhdGluZyBhIG5hbWUgU0hBTEwgZW5zdXJlIHRoYXQgd2hlbiBib3RoIHRleHQgYW5kIHBhcnRzIGFyZSBwcmVzZW50LCAgbm8gY29udGVudCBpcyBpbmNsdWRlZCBpbiB0aGUgdGV4dCB0aGF0IGlzbid0IGZvdW5kIGluIGEgcGFydC5cclxuICAgKi9cclxuICB0ZXh0PzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEh1bWFuTmFtZS50ZXh0XHJcbiAgICovXHJcbiAgX3RleHQ/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEZhbWlseSBOYW1lIG1heSBiZSBkZWNvbXBvc2VkIGludG8gc3BlY2lmaWMgcGFydHMgdXNpbmcgZXh0ZW5zaW9ucyAoZGUsIG5sLCBlcyByZWxhdGVkIGN1bHR1cmVzKS5cclxuICAgKi9cclxuICBmYW1pbHk/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogSHVtYW5OYW1lLmZhbWlseVxyXG4gICAqL1xyXG4gIF9mYW1pbHk/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIElmIG9ubHkgaW5pdGlhbHMgYXJlIHJlY29yZGVkLCB0aGV5IG1heSBiZSB1c2VkIGluIHBsYWNlIG9mIHRoZSBmdWxsIG5hbWUgcGFydHMuIEluaXRpYWxzIG1heSBiZSBzZXBhcmF0ZWQgaW50byBtdWx0aXBsZSBnaXZlbiBuYW1lcyBidXQgb2Z0ZW4gYXJlbid0IGR1ZSB0byBwYXJhY3RpY2FsIGxpbWl0YXRpb25zLiAgVGhpcyBlbGVtZW50IGlzIG5vdCBjYWxsZWQgXCJmaXJzdCBuYW1lXCIgc2luY2UgZ2l2ZW4gbmFtZXMgZG8gbm90IGFsd2F5cyBjb21lIGZpcnN0LlxyXG4gICAqL1xyXG4gIGdpdmVuPzogZmhpci5GaGlyU3RyaW5nW118KHN0cmluZ3xudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogSHVtYW5OYW1lLmdpdmVuXHJcbiAgICovXHJcbiAgX2dpdmVuPzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxuICAvKipcclxuICAgKiBQYXJ0IG9mIHRoZSBuYW1lIHRoYXQgaXMgYWNxdWlyZWQgYXMgYSB0aXRsZSBkdWUgdG8gYWNhZGVtaWMsIGxlZ2FsLCBlbXBsb3ltZW50IG9yIG5vYmlsaXR5IHN0YXR1cywgZXRjLiBhbmQgdGhhdCBhcHBlYXJzIGF0IHRoZSBzdGFydCBvZiB0aGUgbmFtZS5cclxuICAgKi9cclxuICBwcmVmaXg/OiBmaGlyLkZoaXJTdHJpbmdbXXwoc3RyaW5nfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBIdW1hbk5hbWUucHJlZml4XHJcbiAgICovXHJcbiAgX3ByZWZpeD86KGZoaXIuRmhpckVsZW1lbnRBcmdzfG51bGwpW107XHJcbiAgLyoqXHJcbiAgICogUGFydCBvZiB0aGUgbmFtZSB0aGF0IGlzIGFjcXVpcmVkIGFzIGEgdGl0bGUgZHVlIHRvIGFjYWRlbWljLCBsZWdhbCwgZW1wbG95bWVudCBvciBub2JpbGl0eSBzdGF0dXMsIGV0Yy4gYW5kIHRoYXQgYXBwZWFycyBhdCB0aGUgZW5kIG9mIHRoZSBuYW1lLlxyXG4gICAqL1xyXG4gIHN1ZmZpeD86IGZoaXIuRmhpclN0cmluZ1tdfChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEh1bWFuTmFtZS5zdWZmaXhcclxuICAgKi9cclxuICBfc3VmZml4PzooZmhpci5GaGlyRWxlbWVudEFyZ3N8bnVsbClbXTtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIHBlcmlvZCBvZiB0aW1lIHdoZW4gdGhpcyBuYW1lIHdhcyB2YWxpZCBmb3IgdGhlIG5hbWVkIHBlcnNvbi5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZEFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBodW1hbidzIG5hbWUgd2l0aCB0aGUgYWJpbGl0eSB0byBpZGVudGlmeSBwYXJ0cyBhbmQgdXNhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSHVtYW5OYW1lIGV4dGVuZHMgZmhpci5GaGlyRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdIdW1hbk5hbWUnO1xyXG4gIC8qKlxyXG4gICAqIEFwcGxpY2F0aW9ucyBjYW4gYXNzdW1lIHRoYXQgYSBuYW1lIGlzIGN1cnJlbnQgdW5sZXNzIGl0IGV4cGxpY2l0bHkgc2F5cyB0aGF0IGl0IGlzIHRlbXBvcmFyeSBvciBvbGQuXHJcbiAgICovXHJcbiAgcHVibGljIHVzZT86IGZoaXIuRmhpckNvZGU8TmFtZVVzZUNvZGVUeXBlPnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ2FuIHByb3ZpZGUgYm90aCBhIHRleHQgcmVwcmVzZW50YXRpb24gYW5kIHBhcnRzLiBBcHBsaWNhdGlvbnMgdXBkYXRpbmcgYSBuYW1lIFNIQUxMIGVuc3VyZSB0aGF0IHdoZW4gYm90aCB0ZXh0IGFuZCBwYXJ0cyBhcmUgcHJlc2VudCwgIG5vIGNvbnRlbnQgaXMgaW5jbHVkZWQgaW4gdGhlIHRleHQgdGhhdCBpc24ndCBmb3VuZCBpbiBhIHBhcnQuXHJcbiAgICovXHJcbiAgcHVibGljIHRleHQ/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZhbWlseSBOYW1lIG1heSBiZSBkZWNvbXBvc2VkIGludG8gc3BlY2lmaWMgcGFydHMgdXNpbmcgZXh0ZW5zaW9ucyAoZGUsIG5sLCBlcyByZWxhdGVkIGN1bHR1cmVzKS5cclxuICAgKi9cclxuICBwdWJsaWMgZmFtaWx5PzogZmhpci5GaGlyU3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBvbmx5IGluaXRpYWxzIGFyZSByZWNvcmRlZCwgdGhleSBtYXkgYmUgdXNlZCBpbiBwbGFjZSBvZiB0aGUgZnVsbCBuYW1lIHBhcnRzLiBJbml0aWFscyBtYXkgYmUgc2VwYXJhdGVkIGludG8gbXVsdGlwbGUgZ2l2ZW4gbmFtZXMgYnV0IG9mdGVuIGFyZW4ndCBkdWUgdG8gcGFyYWN0aWNhbCBsaW1pdGF0aW9ucy4gIFRoaXMgZWxlbWVudCBpcyBub3QgY2FsbGVkIFwiZmlyc3QgbmFtZVwiIHNpbmNlIGdpdmVuIG5hbWVzIGRvIG5vdCBhbHdheXMgY29tZSBmaXJzdC5cclxuICAgKi9cclxuICBwdWJsaWMgZ2l2ZW46IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIFBhcnQgb2YgdGhlIG5hbWUgdGhhdCBpcyBhY3F1aXJlZCBhcyBhIHRpdGxlIGR1ZSB0byBhY2FkZW1pYywgbGVnYWwsIGVtcGxveW1lbnQgb3Igbm9iaWxpdHkgc3RhdHVzLCBldGMuIGFuZCB0aGF0IGFwcGVhcnMgYXQgdGhlIHN0YXJ0IG9mIHRoZSBuYW1lLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcmVmaXg6IGZoaXIuRmhpclN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIFBhcnQgb2YgdGhlIG5hbWUgdGhhdCBpcyBhY3F1aXJlZCBhcyBhIHRpdGxlIGR1ZSB0byBhY2FkZW1pYywgbGVnYWwsIGVtcGxveW1lbnQgb3Igbm9iaWxpdHkgc3RhdHVzLCBldGMuIGFuZCB0aGF0IGFwcGVhcnMgYXQgdGhlIGVuZCBvZiB0aGUgbmFtZS5cclxuICAgKi9cclxuICBwdWJsaWMgc3VmZml4OiBmaGlyLkZoaXJTdHJpbmdbXTtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIHBlcmlvZCBvZiB0aW1lIHdoZW4gdGhpcyBuYW1lIHdhcyB2YWxpZCBmb3IgdGhlIG5hbWVkIHBlcnNvbi5cclxuICAgKi9cclxuICBwdWJsaWMgcGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIEh1bWFuTmFtZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEh1bWFuTmFtZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWyd1c2UnXSkgeyB0aGlzLnVzZSA9IG5ldyBmaGlyLkZoaXJDb2RlPE5hbWVVc2VDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2UudXNlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ191c2UnXSkge1xyXG4gICAgICBpZiAodGhpcy51c2UpIHsgdGhpcy51c2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fdXNlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMudXNlID0gbmV3IGZoaXIuRmhpckNvZGU8TmFtZVVzZUNvZGVUeXBlPihzb3VyY2UuX3VzZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsndGV4dCddKSB7IHRoaXMudGV4dCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UudGV4dH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfdGV4dCddKSB7XHJcbiAgICAgIGlmICh0aGlzLnRleHQpIHsgdGhpcy50ZXh0LmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3RleHQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy50ZXh0ID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX3RleHQgYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2ZhbWlseSddKSB7IHRoaXMuZmFtaWx5ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5mYW1pbHl9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2ZhbWlseSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmZhbWlseSkgeyB0aGlzLmZhbWlseS5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9mYW1pbHkhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5mYW1pbHkgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZmFtaWx5IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydnaXZlbiddKSB7IHRoaXMuZ2l2ZW4gPSBzb3VyY2UuZ2l2ZW4ubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZ2l2ZW4gPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2dpdmVuJ10pIHtcclxuICAgICAgc291cmNlLl9naXZlbi5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5naXZlbi5sZW5ndGggPj0gaSkgeyBpZiAoeCkgeyB0aGlzLmdpdmVuW2ldLmFkZEV4dGVuZGVkUHJvcGVydGllcyh4KTsgfSB9XHJcbiAgICAgICAgZWxzZSB7IGlmICh4KSB7IHRoaXMuZ2l2ZW4ucHVzaChuZXcgZmhpci5GaGlyU3RyaW5nKHggYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwcmVmaXgnXSkgeyB0aGlzLnByZWZpeCA9IHNvdXJjZS5wcmVmaXgubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucHJlZml4ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19wcmVmaXgnXSkge1xyXG4gICAgICBzb3VyY2UuX3ByZWZpeC5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcmVmaXgubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5wcmVmaXhbaV0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHgpOyB9IH1cclxuICAgICAgICBlbHNlIHsgaWYgKHgpIHsgdGhpcy5wcmVmaXgucHVzaChuZXcgZmhpci5GaGlyU3RyaW5nKHggYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzdWZmaXgnXSkgeyB0aGlzLnN1ZmZpeCA9IHNvdXJjZS5zdWZmaXgubWFwKCh4KSA9PiBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogeH0pKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3VmZml4ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdWZmaXgnXSkge1xyXG4gICAgICBzb3VyY2UuX3N1ZmZpeC5mb3JFYWNoKCh4LGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdWZmaXgubGVuZ3RoID49IGkpIHsgaWYgKHgpIHsgdGhpcy5zdWZmaXhbaV0uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHgpOyB9IH1cclxuICAgICAgICBlbHNlIHsgaWYgKHgpIHsgdGhpcy5zdWZmaXgucHVzaChuZXcgZmhpci5GaGlyU3RyaW5nKHggYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPikpOyB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydwZXJpb2QnXSkgeyB0aGlzLnBlcmlvZCA9IG5ldyBmaGlyLlBlcmlvZChzb3VyY2UucGVyaW9kKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0h1bWFuTmFtZScgfVxyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T1NWKCd1c2UnLGV4cCwnTmFtZVVzZScsTmFtZVVzZVZzVmFsaWRhdGlvbiwncicpKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCd0ZXh0JyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9TKCdmYW1pbHknLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ2dpdmVuJyxleHApKTtcclxuICAgIGlzcy5wdXNoKC4uLnRoaXMudk9BKCdwcmVmaXgnLGV4cCkpO1xyXG4gICAgaXNzLnB1c2goLi4udGhpcy52T0EoJ3N1ZmZpeCcsZXhwKSk7XHJcbiAgICBpc3MucHVzaCguLi50aGlzLnZPUygncGVyaW9kJyxleHApKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYSBIdW1hbk5hbWUgaW50byBhIGRpc3BsYXlhYmxlIHN0cmluZ1xyXG4gKi9cclxudG9EaXNwbGF5KGZhbWlseUZpcnN0OmJvb2xlYW4gPSB0cnVlLCBpbmNsdWRlQW5ub3RhdGlvbnM6Ym9vbGVhbiA9IGZhbHNlKTpzdHJpbmcge1xyXG4gIGlmICgodGhpcy50ZXh0KSAmJiAodGhpcy50ZXh0Lmxlbmd0aCA+IDApKSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZXh0LnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgdmFsOnN0cmluZyA9ICcnO1xyXG5cclxuICBpZiAoZmFtaWx5Rmlyc3QpIHtcclxuICAgIGlmICh0aGlzLmZhbWlseSkge1xyXG4gICAgICB2YWwgPSB0aGlzLmZhbWlseS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmdpdmVuKSB7XHJcbiAgICAgIHZhbCArPSAodmFsLmxlbmd0aCA+IDAgPyAnLCAnIDogJycpICsgdGhpcy5naXZlbi5qb2luKCcgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluY2x1ZGVBbm5vdGF0aW9ucykge1xyXG4gICAgICBpZiAodGhpcy5zdWZmaXgpIHtcclxuICAgICAgICB2YWwgKz0gKHZhbC5sZW5ndGggPiAwID8gJywgJyA6ICcnKSArIHRoaXMuc3VmZml4LmpvaW4oJywgJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnByZWZpeCkge1xyXG4gICAgICAgIHZhbCArPSAodmFsLmxlbmd0aCA+IDAgPyAnLCAnIDogJycpICsgdGhpcy5wcmVmaXguam9pbignLCAnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuICBpZiAoKGluY2x1ZGVBbm5vdGF0aW9ucykgJiYgKHRoaXMucHJlZml4KSkge1xyXG4gICAgdmFsICs9IHRoaXMucHJlZml4LmpvaW4oJywgJyk7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5naXZlbikge1xyXG4gICAgdmFsID0gKHZhbC5sZW5ndGggPiAwID8gJyAnIDogJycpICsgdGhpcy5naXZlbi5qb2luKCcgJyk7XHJcbiAgfVxyXG4gIGlmICh0aGlzLmZhbWlseSkge1xyXG4gICAgdmFsICs9ICh2YWwubGVuZ3RoID4gMCA/ICcgJyA6ICcnKSArIHRoaXMuZmFtaWx5O1xyXG4gIH1cclxuXHJcbiAgaWYgKChpbmNsdWRlQW5ub3RhdGlvbnMpICYmICh0aGlzLnN1ZmZpeCkpIHtcclxuICAgIHZhbCArPSAodmFsLmxlbmd0aCA+IDAgPyAnLCAnIDogJycpICsgdGhpcy5zdWZmaXguam9pbignLCAnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2YWw7XHJcbn1cclxufVxyXG4iXX0=