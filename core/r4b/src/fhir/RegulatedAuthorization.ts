// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: RegulatedAuthorization

import * as fhir from '../fhir.js';

// @ts-ignore
import { RegulatedAuthorizationCaseTypeCodes,  RegulatedAuthorizationCaseTypeCodeType } from '../fhirValueSets/RegulatedAuthorizationCaseTypeCodes.js';
// @ts-ignore
import { RegulatedAuthorizationCaseTypeVsValidation } from '../fhirValueSets/RegulatedAuthorizationCaseTypeVsValidation.js';
// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
// @ts-ignore
import { RegulatedAuthorizationTypeCodes,  RegulatedAuthorizationTypeCodeType } from '../fhirValueSets/RegulatedAuthorizationTypeCodes.js';
// @ts-ignore
import { RegulatedAuthorizationTypeVsValidation } from '../fhirValueSets/RegulatedAuthorizationTypeVsValidation.js';
// @ts-ignore
import { JurisdictionCodes,  JurisdictionCodeType } from '../fhirValueSets/JurisdictionCodes.js';
// @ts-ignore
import { JurisdictionVsValidation } from '../fhirValueSets/JurisdictionVsValidation.js';
// @ts-ignore
import { ProductIntendedUseCodes,  ProductIntendedUseCodeType } from '../fhirValueSets/ProductIntendedUseCodes.js';
// @ts-ignore
import { ProductIntendedUseVsValidation } from '../fhirValueSets/ProductIntendedUseVsValidation.js';
// @ts-ignore
import { RegulatedAuthorizationBasisCodes,  RegulatedAuthorizationBasisCodeType } from '../fhirValueSets/RegulatedAuthorizationBasisCodes.js';
// @ts-ignore
import { RegulatedAuthorizationBasisVsValidation } from '../fhirValueSets/RegulatedAuthorizationBasisVsValidation.js';
/**
 * Valid arguments for the RegulatedAuthorizationCase type.
 */
export interface RegulatedAuthorizationCaseArgs extends fhir.BackboneElementArgs {
  /**
   * Identifier by which this case can be referenced.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * The defining type of case.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The status associated with the case.
   */
  status?: fhir.CodeableConceptArgs|undefined;
  /**
   * Relevant date for this case.
   */
  date?: fhir.Period|fhir.FhirDateTime|undefined;
  /**
   * Relevant date for this case.
   */
  datePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Relevant date for this case.
   */
  dateDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * A regulatory submission from an organization to a regulator, as part of an assessing case. Multiple applications may occur over time, with more or different information to support or modify the submission or the authorization. The applications can be considered as steps within the longer running case or procedure for this authorization process.
   */
  application?: fhir.RegulatedAuthorizationCaseArgs[]|undefined;
}

/**
 * The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page).
 */
export class RegulatedAuthorizationCase extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'RegulatedAuthorizationCase';
  /**
   * Identifier by which this case can be referenced.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * The defining type of case.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The status associated with the case.
   */
  public status?: fhir.CodeableConcept|undefined;
  /**
   * Relevant date for this case.
   */
  public date?: (fhir.Period|fhir.FhirDateTime)|undefined;
  /**
   * Internal flag to properly serialize choice-type element RegulatedAuthorization.case.date[x]
   */
  protected static readonly _fts_dateIsChoice:true = true;
  /**
   * A regulatory submission from an organization to a regulator, as part of an assessing case. Multiple applications may occur over time, with more or different information to support or modify the submission or the authorization. The applications can be considered as steps within the longer running case or procedure for this authorization process.
   */
  public application: fhir.RegulatedAuthorizationCase[];
  /**
   * Default constructor for RegulatedAuthorizationCase - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RegulatedAuthorizationCaseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier, options); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['status']) { this.status = new fhir.CodeableConcept(source.status, options); }
    if (source['date']) { this.date = source.date; }
    else if (source['datePeriod']) { this.date = new fhir.Period(source.datePeriod, options); }
    else if (source['dateDateTime'] !== undefined) { this.date = new fhir.FhirDateTime({value: source.dateDateTime}, options); }
    if (source['application']) { this.application = source.application.map((x) => new fhir.RegulatedAuthorizationCase(x, options)); }
    else { this.application = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'RegulatedAuthorization.case' }
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('status',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOA('application',exp));
    return iss;
  }
}
/**
 * Valid arguments for the RegulatedAuthorization type.
 */
export interface RegulatedAuthorizationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "RegulatedAuthorization"|undefined;
  /**
   * Business identifier for the authorization, typically assigned by the authorizing body.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The product type, treatment, facility or activity that is being authorized.
   */
  subject?: fhir.ReferenceArgs[]|undefined;
  /**
   * Overall type of this authorization, for example drug marketing approval, orphan drug designation.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * General textual supporting information.
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: RegulatedAuthorization.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted.
   */
  region?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The status that is authorised e.g. approved. Intermediate states and actions can be tracked with cases and applications.
   */
  status?: fhir.CodeableConceptArgs|undefined;
  /**
   * The date at which the current status was assigned.
   */
  statusDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: RegulatedAuthorization.statusDate
   */
  _statusDate?:fhir.FhirElementArgs;
  /**
   * The time period in which the regulatory approval, clearance or licencing is in effect. As an example, a Marketing Authorization includes the date of authorization and/or an expiration date.
   */
  validityPeriod?: fhir.PeriodArgs|undefined;
  /**
   * Condition for which the use of the regulated product applies.
   */
  indication?: fhir.CodeableReferenceArgs|undefined;
  /**
   * The intended use of the product, e.g. prevention, treatment, diagnosis.
   */
  intendedUse?: fhir.CodeableConceptArgs|undefined;
  /**
   * The legal or regulatory framework against which this authorization is granted, or other reasons for it.
   */
  basis?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The organization that has been granted this authorization, by some authoritative body (the 'regulator').
   */
  holder?: fhir.ReferenceArgs|undefined;
  /**
   * The regulatory authority or authorizing body granting the authorization. For example, European Medicines Agency (EMA), Food and Drug Administration (FDA), Health Canada (HC), etc.
   */
  regulator?: fhir.ReferenceArgs|undefined;
  /**
   * The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page).
   */
  case?: fhir.RegulatedAuthorizationCaseArgs|undefined;
}

/**
 * Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
 */
export class RegulatedAuthorization extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'RegulatedAuthorization';
  /**
   * Resource Type Name
   */
  public override resourceType: "RegulatedAuthorization";
  /**
   * Business identifier for the authorization, typically assigned by the authorizing body.
   */
  public identifier: fhir.Identifier[];
  /**
   * The product type, treatment, facility or activity that is being authorized.
   */
  public subject: fhir.Reference[];
  /**
   * Overall type of this authorization, for example drug marketing approval, orphan drug designation.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * General textual supporting information.
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted.
   */
  public region: fhir.CodeableConcept[];
  /**
   * The status that is authorised e.g. approved. Intermediate states and actions can be tracked with cases and applications.
   */
  public status?: fhir.CodeableConcept|undefined;
  /**
   * The date at which the current status was assigned.
   */
  public statusDate?: fhir.FhirDateTime|undefined;
  /**
   * The time period in which the regulatory approval, clearance or licencing is in effect. As an example, a Marketing Authorization includes the date of authorization and/or an expiration date.
   */
  public validityPeriod?: fhir.Period|undefined;
  /**
   * Condition for which the use of the regulated product applies.
   */
  public indication?: fhir.CodeableReference|undefined;
  /**
   * The intended use of the product, e.g. prevention, treatment, diagnosis.
   */
  public intendedUse?: fhir.CodeableConcept|undefined;
  /**
   * The legal or regulatory framework against which this authorization is granted, or other reasons for it.
   */
  public basis: fhir.CodeableConcept[];
  /**
   * The organization that has been granted this authorization, by some authoritative body (the 'regulator').
   */
  public holder?: fhir.Reference|undefined;
  /**
   * The regulatory authority or authorizing body granting the authorization. For example, European Medicines Agency (EMA), Food and Drug Administration (FDA), Health Canada (HC), etc.
   */
  public regulator?: fhir.Reference|undefined;
  /**
   * The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page).
   */
  public case?: fhir.RegulatedAuthorizationCase|undefined;
  /**
   * Default constructor for RegulatedAuthorization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RegulatedAuthorizationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'RegulatedAuthorization';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['subject']) { this.subject = source.subject.map((x) => new fhir.Reference(x, options)); }
    else { this.subject = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['description'] !== undefined) { this.description = new fhir.FhirMarkdown({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirMarkdown(source._description as Partial<fhir.FhirMarkdownArgs>, options); }
    }
    if (source['region']) { this.region = source.region.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.region = []; }
    if (source['status']) { this.status = new fhir.CodeableConcept(source.status, options); }
    if (source['statusDate'] !== undefined) { this.statusDate = new fhir.FhirDateTime({value: source.statusDate}, options); }
    if (source['_statusDate']) {
      if (this.statusDate) { this.statusDate.addExtendedProperties(source._statusDate!); }
      else { this.statusDate = new fhir.FhirDateTime(source._statusDate as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['validityPeriod']) { this.validityPeriod = new fhir.Period(source.validityPeriod, options); }
    if (source['indication']) { this.indication = new fhir.CodeableReference(source.indication, options); }
    if (source['intendedUse']) { this.intendedUse = new fhir.CodeableConcept(source.intendedUse, options); }
    if (source['basis']) { this.basis = source.basis.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.basis = []; }
    if (source['holder']) { this.holder = new fhir.Reference(source.holder, options); }
    if (source['regulator']) { this.regulator = new fhir.Reference(source.regulator, options); }
    if (source['case']) { this.case = new fhir.RegulatedAuthorizationCase(source.case, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'RegulatedAuthorization' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('subject',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('region',exp));
    iss.push(...this.vOS('status',exp));
    iss.push(...this.vOS('statusDate',exp));
    iss.push(...this.vOS('validityPeriod',exp));
    iss.push(...this.vOS('indication',exp));
    iss.push(...this.vOS('intendedUse',exp));
    iss.push(...this.vOA('basis',exp));
    iss.push(...this.vOS('holder',exp));
    iss.push(...this.vOS('regulator',exp));
    iss.push(...this.vOS('case',exp));
    return iss;
  }
}
