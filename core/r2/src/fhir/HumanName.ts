// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: HumanName

import * as fhir from '../fhir.js';

// @ts-ignore
import { NameUseCodes,  NameUseCodeType } from '../fhirValueSets/NameUseCodes.js';
// @ts-ignore
import { NameUseVsValidation } from '../fhirValueSets/NameUseVsValidation.js';
/**
 * Valid arguments for the HumanName type.
 */
export interface HumanNameArgs extends fhir.FhirElementArgs {
  /**
   * Allows the appropriate name for a particular context of use to be selected from among a set of names.
   */
  use?: fhir.FhirCode<NameUseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: HumanName.use
   */
  _use?:fhir.FhirElementArgs;
  /**
   * A renderable, unencoded form.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: HumanName.text
   */
  _text?:fhir.FhirElementArgs;
  /**
   * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
   */
  family?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: HumanName.family
   */
  _family?:(fhir.FhirElementArgs|null)[];
  /**
   * Given name.
   */
  given?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: HumanName.given
   */
  _given?:(fhir.FhirElementArgs|null)[];
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
   */
  prefix?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: HumanName.prefix
   */
  _prefix?:(fhir.FhirElementArgs|null)[];
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
   */
  suffix?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: HumanName.suffix
   */
  _suffix?:(fhir.FhirElementArgs|null)[];
  /**
   * Allows names to be placed in historical context.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * A human's name with the ability to identify parts and usage.
 */
export class HumanName extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'HumanName';
  /**
   * Allows the appropriate name for a particular context of use to be selected from among a set of names.
   */
  public use?: fhir.FhirCode<NameUseCodeType>|undefined;
  /**
   * A renderable, unencoded form.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
   */
  public family: fhir.FhirString[];
  /**
   * Given name.
   */
  public given: fhir.FhirString[];
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
   */
  public prefix: fhir.FhirString[];
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
   */
  public suffix: fhir.FhirString[];
  /**
   * Allows names to be placed in historical context.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for HumanName - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<HumanNameArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['use']) { this.use = new fhir.FhirCode<NameUseCodeType>({value: source.use}); }
    if (source['_use']) {
      if (this.use) { this.use.addExtendedProperties(source._use!); }
      else { this.use = new fhir.FhirCode<NameUseCodeType>(source._use as Partial<fhir.FhirCode>); }
    }
    if (source['text']) { this.text = new fhir.FhirString({value: source.text}); }
    if (source['_text']) {
      if (this.text) { this.text.addExtendedProperties(source._text!); }
      else { this.text = new fhir.FhirString(source._text as Partial<fhir.FhirStringArgs>); }
    }
    if (source['family']) { this.family = source.family.map((x) => new fhir.FhirString({value: x})); }
    else { this.family = []; }
    if (source['_family']) {
      source._family.forEach((x,i) => {
        if (this.family.length >= i) { if (x) { this.family[i].addExtendedProperties(x); } }
        else { if (x) { this.family.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['given']) { this.given = source.given.map((x) => new fhir.FhirString({value: x})); }
    else { this.given = []; }
    if (source['_given']) {
      source._given.forEach((x,i) => {
        if (this.given.length >= i) { if (x) { this.given[i].addExtendedProperties(x); } }
        else { if (x) { this.given.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['prefix']) { this.prefix = source.prefix.map((x) => new fhir.FhirString({value: x})); }
    else { this.prefix = []; }
    if (source['_prefix']) {
      source._prefix.forEach((x,i) => {
        if (this.prefix.length >= i) { if (x) { this.prefix[i].addExtendedProperties(x); } }
        else { if (x) { this.prefix.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['suffix']) { this.suffix = source.suffix.map((x) => new fhir.FhirString({value: x})); }
    else { this.suffix = []; }
    if (source['_suffix']) {
      source._suffix.forEach((x,i) => {
        if (this.suffix.length >= i) { if (x) { this.suffix[i].addExtendedProperties(x); } }
        else { if (x) { this.suffix.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'HumanName' }
    iss.push(...this.vOSV('use',exp,'NameUse',NameUseVsValidation,'r'));
    iss.push(...this.vOS('text',exp));
    iss.push(...this.vOA('family',exp));
    iss.push(...this.vOA('given',exp));
    iss.push(...this.vOA('prefix',exp));
    iss.push(...this.vOA('suffix',exp));
    iss.push(...this.vOS('period',exp));
    return iss;
  }

/**
 * Convert a HumanName into a displayable string
 */
toDisplay(familyFirst:boolean = true, includeAnnotations:boolean = false):string {
  if ((this.text) && (this.text.length > 0)) {
    return this.text.toString();
  }

  var val:string = '';

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
