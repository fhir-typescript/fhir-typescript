// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Element

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the FhirElement type.
 */
export interface FhirElementArgs extends fhir.FhirBaseArgs {
  /**
   * unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Element.id
   */
  _id?:fhir.FhirElementArgs;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  extension?: fhir.ExtensionArgs[]|undefined;
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
   * unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  public id?: fhir.FhirString|undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  public extension: fhir.Extension[];
  /**
   * Default constructor for FhirElement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<FhirElementArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['id']) { this.id = new fhir.FhirString({value: source.id}); }
    if (source['_id']) {
      if (this.id) { this.id.addExtendedProperties(source._id!); }
      else { this.id = new fhir.FhirString(source._id as Partial<fhir.FhirStringArgs>); }
    }
    if (source['extension']) { this.extension = source.extension.map((x) => new fhir.Extension(x)); }
    else { this.extension = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Element' }
    iss.push(...this.vOS('id',exp));
    iss.push(...this.vOA('extension',exp));
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
