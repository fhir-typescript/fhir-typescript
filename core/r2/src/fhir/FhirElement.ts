// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Element

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the FhirElement type.
 */
export interface FhirElementArgs extends fhir.FhirBaseArgs {
  /**
   * unique id for the element within a resource (for internal references).
   */
  id?: fhir.FhirId|string|undefined;
  /**
   * Extended properties for primitive element: Element.id
   */
  _id?:fhir.FhirElementArgs;
  /**
   * May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: fhir.ExtensionArgs[]|undefined;
  /**
   * JSON Serialization Comments - not an actual element
   */
  fhir_comments?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Element.fhir_comments
   */
  _fhir_comments?:(fhir.FhirElementArgs|null)[];
}

/**
 * Base definition for all elements in a resource.
 */
export class FhirElement extends fhir.FhirBase {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Element';
  /**
   * unique id for the element within a resource (for internal references).
   */
  public id?: fhir.FhirId|undefined;
  /**
   * May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  public extension: fhir.Extension[];
  /**
   * JSON Serialization Comments - not an actual element
   */
  public fhir_comments: fhir.FhirString[];
  /**
   * Default constructor for FhirElement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<FhirElementArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['id']) { this.id = new fhir.FhirId({value: source.id}); }
    if (source['_id']) {
      if (this.id) { this.id.addExtendedProperties(source._id!); }
      else { this.id = new fhir.FhirId(source._id as Partial<fhir.FhirIdArgs>); }
    }
    if (source['extension']) { this.extension = source.extension.map((x) => new fhir.Extension(x)); }
    else { this.extension = []; }
    if (source['fhir_comments']) { this.fhir_comments = source.fhir_comments.map((x) => new fhir.FhirString({value: x})); }
    else { this.fhir_comments = []; }
    if (source['_fhir_comments']) {
      source._fhir_comments.forEach((x,i) => {
        if (this.fhir_comments.length >= i) { if (x) { this.fhir_comments[i].addExtendedProperties(x); } }
        else { if (x) { this.fhir_comments.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Element' }
    iss.push(...this.vOS('id',exp));
    iss.push(...this.vOA('extension',exp));
    iss.push(...this.vOA('fhir_comments',exp));
    return iss;
  }
  /**
   * Fluent-style function to add extensions
   * @param ext
   * @returns 
   */
  public addExtension(ext:fhir.ExtensionArgs):fhir.FhirElement {
    this.extension.push(new fhir.Extension(ext));
    return this;
  }
  
  /**
   * Remove ALL instances of extensions with a matching URL, optionally recurse into extension.extension.
   * @param url URL of extensions to remove
   * @param searchNested If the removal should search for nested extensions
   */
  public removeExtensions(url:fhir.FhirString|string, searchNested:boolean = false):fhir.FhirElement {
    if (this.extension.length === 0) {
      return this;
    }
    const matchUrl:string = (typeof url === 'string') ? url : (url as fhir.FhirString).value ?? '';
    let clean:fhir.Extension[] = this.extension.filter((ext) => (ext?.url?.value ?? '') !== matchUrl) ?? [];
    if (searchNested) {
      for (let i:number = 0; i < clean.length; i++) {
        clean[i] = clean[i].removeExtensions(matchUrl, searchNested) as fhir.Extension;
      }
    }
    this.extension = clean;
    return this;
  }

  /**
   * Find the first instance of an extension with a matching URL, optionally recurse into extension.extension.
   * @param url URL to search for
   * @param searchNested If the search should nest into extensions
   * @returns The FHIR Extension if found, or undefined.
   */
  public findExtension(url:fhir.FhirString|string, searchNested:boolean = false):fhir.Extension|undefined {
    if (this.extension.length === 0) {
      return undefined;
    }
    const matchUrl:string = (typeof url === 'string') ? url : (url as fhir.FhirString).value ?? '';
    if (searchNested) {
      const flat:fhir.Extension[] = FhirElement.recurseForExtension(matchUrl, this.extension);
      if (flat.length === 0) {
        return undefined;
      }
      return flat[0];
    }
    return this.extension.find((ext) => (ext?.url?.value === matchUrl));
  }

  /**
   * Find all instances of an extension with a matching URL, optionally recurse into extension.extension.
   * @param url URL to search for
   * @param searchNested If the search should nest into extensions
   * @returns A new array of FHIR Extensions, with just the desired extensions
   */
  public filterExtensions(url:fhir.FhirString|string, searchNested:boolean = false):fhir.Extension[] {
    if (this.extension.length === 0) {
      return [];
    }
    const matchUrl:string = (typeof url === 'string') ? url : (url as fhir.FhirString).value ?? '';
    if (searchNested) {
      return FhirElement.recurseForExtension(matchUrl, this.extension);
    }
    return this.extension.filter((ext) => (ext?.url?.value === matchUrl))
  }

  /**
   * Internal recursive search function
   * @param url 
   * @param exts 
   * @returns A new array (flat) of matching extensions
   */
  private static recurseForExtension(url:string, exts:fhir.Extension[]):fhir.Extension[] {
    if ((!exts) || (exts.length === 0)) {
      return [];
    }
    let val:fhir.Extension[] = [];
    exts.forEach(
      (ext) => {
        if (ext && ext.url && (ext.url.value === url)) {
          val.push(ext);
          return;
        }
        if (ext && ext.extension && (ext.extension.length > 0)) {
          val.push(...this.recurseForExtension(url, ext.extension));
          return;
        }
        return;
      },
      []);
    return val;
  }
}