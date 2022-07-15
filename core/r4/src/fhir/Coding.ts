// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Coding

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Coding type.
 */
export interface CodingArgs extends fhir.FhirElementArgs {
  /**
   * The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.
   */
  system?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Coding.system
   */
  _system?:fhir.FhirElementArgs;
  /**
   * Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Coding.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
   */
  code?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Coding.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * A representation of the meaning of the code in the system, following the rules of the system.
   */
  display?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Coding.display
   */
  _display?:fhir.FhirElementArgs;
  /**
   * Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.
   */
  userSelected?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Coding.userSelected
   */
  _userSelected?:fhir.FhirElementArgs;
}

/**
 * A reference to a code defined by a terminology system.
 */
export class Coding extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Coding';
  /**
   * The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.
   */
  public system?: fhir.FhirUri|undefined;
  /**
   * Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.
   */
  public version?: fhir.FhirString|undefined;
  /**
   * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
   */
  public code?: fhir.FhirCode|undefined;
  /**
   * A representation of the meaning of the code in the system, following the rules of the system.
   */
  public display?: fhir.FhirString|undefined;
  /**
   * Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.
   */
  public userSelected?: fhir.FhirBoolean|undefined;
  /**
   * Default constructor for Coding - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CodingArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['system']) { this.system = new fhir.FhirUri({value: source.system}); }
    if (source['_system']) {
      if (this.system) { this.system.addExtendedProperties(source._system!); }
      else { this.system = new fhir.FhirUri(source._system as Partial<fhir.FhirUriArgs>); }
    }
    if (source['version']) { this.version = new fhir.FhirString({value: source.version}); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>); }
    }
    if (source['code']) { this.code = new fhir.FhirCode({value: source.code}); }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode(source._code as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['display']) { this.display = new fhir.FhirString({value: source.display}); }
    if (source['_display']) {
      if (this.display) { this.display.addExtendedProperties(source._display!); }
      else { this.display = new fhir.FhirString(source._display as Partial<fhir.FhirStringArgs>); }
    }
    if (source['userSelected']) { this.userSelected = new fhir.FhirBoolean({value: source.userSelected}); }
    if (source['_userSelected']) {
      if (this.userSelected) { this.userSelected.addExtendedProperties(source._userSelected!); }
      else { this.userSelected = new fhir.FhirBoolean(source._userSelected as Partial<fhir.FhirBooleanArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Coding' }
    this.vOS('system',exp)
    this.vOS('version',exp)
    this.vOS('code',exp)
    this.vOS('display',exp)
    this.vOS('userSelected',exp)
    return issues;
  }
}
