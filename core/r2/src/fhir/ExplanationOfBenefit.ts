// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ExplanationOfBenefit

import * as fhir from '../fhir.js';

// @ts-ignore
import { RemittanceOutcomeCodes,  RemittanceOutcomeCodeType } from '../fhirValueSets/RemittanceOutcomeCodes.js';
// @ts-ignore
import { RemittanceOutcomeVsValidation } from '../fhirValueSets/RemittanceOutcomeVsValidation.js';
/**
 * Valid arguments for the ExplanationOfBenefit type.
 */
export interface ExplanationOfBenefitArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ExplanationOfBenefit"|undefined;
  /**
   * The Response business identifier.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Original request resource reference.
   */
  request?: fhir.ReferenceArgs|undefined;
  /**
   * Transaction status: error, complete.
   */
  outcome?: fhir.FhirCode<RemittanceOutcomeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ExplanationOfBenefit.outcome
   */
  _outcome?:fhir.FhirElementArgs;
  /**
   * A description of the status of the adjudication.
   */
  disposition?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ExplanationOfBenefit.disposition
   */
  _disposition?:fhir.FhirElementArgs;
  /**
   * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
   */
  ruleset?: fhir.CodingArgs|undefined;
  /**
   * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
   */
  originalRuleset?: fhir.CodingArgs|undefined;
  /**
   * The date when the enclosed suite of services were performed or completed.
   */
  created?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ExplanationOfBenefit.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * The Insurer who produced this adjudicated response.
   */
  organization?: fhir.ReferenceArgs|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  requestProvider?: fhir.ReferenceArgs|undefined;
  /**
   * The organization which is responsible for the services rendered to the patient.
   */
  requestOrganization?: fhir.ReferenceArgs|undefined;
}

/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export class ExplanationOfBenefit extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ExplanationOfBenefit';
  /**
   * Resource Type Name
   */
  public override resourceType: "ExplanationOfBenefit";
  /**
   * The Response business identifier.
   */
  public identifier: fhir.Identifier[];
  /**
   * Original request resource reference.
   */
  public request?: fhir.Reference|undefined;
  /**
   * Transaction status: error, complete.
   */
  public outcome?: fhir.FhirCode<RemittanceOutcomeCodeType>|undefined;
  /**
   * A description of the status of the adjudication.
   */
  public disposition?: fhir.FhirString|undefined;
  /**
   * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
   */
  public ruleset?: fhir.Coding|undefined;
  /**
   * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
   */
  public originalRuleset?: fhir.Coding|undefined;
  /**
   * The date when the enclosed suite of services were performed or completed.
   */
  public created?: fhir.FhirDateTime|undefined;
  /**
   * The Insurer who produced this adjudicated response.
   */
  public organization?: fhir.Reference|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  public requestProvider?: fhir.Reference|undefined;
  /**
   * The organization which is responsible for the services rendered to the patient.
   */
  public requestOrganization?: fhir.Reference|undefined;
  /**
   * Default constructor for ExplanationOfBenefit - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ExplanationOfBenefitArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ExplanationOfBenefit';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['request']) { this.request = new fhir.Reference(source.request); }
    if (source['outcome']) { this.outcome = new fhir.FhirCode<RemittanceOutcomeCodeType>({value: source.outcome}); }
    if (source['_outcome']) {
      if (this.outcome) { this.outcome.addExtendedProperties(source._outcome!); }
      else { this.outcome = new fhir.FhirCode<RemittanceOutcomeCodeType>(source._outcome as Partial<fhir.FhirCode>); }
    }
    if (source['disposition']) { this.disposition = new fhir.FhirString({value: source.disposition}); }
    if (source['_disposition']) {
      if (this.disposition) { this.disposition.addExtendedProperties(source._disposition!); }
      else { this.disposition = new fhir.FhirString(source._disposition as Partial<fhir.FhirStringArgs>); }
    }
    if (source['ruleset']) { this.ruleset = new fhir.Coding(source.ruleset); }
    if (source['originalRuleset']) { this.originalRuleset = new fhir.Coding(source.originalRuleset); }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['organization']) { this.organization = new fhir.Reference(source.organization); }
    if (source['requestProvider']) { this.requestProvider = new fhir.Reference(source.requestProvider); }
    if (source['requestOrganization']) { this.requestOrganization = new fhir.Reference(source.requestOrganization); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ExplanationOfBenefit' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('request',exp));
    iss.push(...this.vOSV('outcome',exp,'RemittanceOutcome',RemittanceOutcomeVsValidation,'r'));
    iss.push(...this.vOS('disposition',exp));
    iss.push(...this.vOS('ruleset',exp));
    iss.push(...this.vOS('originalRuleset',exp));
    iss.push(...this.vOS('created',exp));
    iss.push(...this.vOS('organization',exp));
    iss.push(...this.vOS('requestProvider',exp));
    iss.push(...this.vOS('requestOrganization',exp));
    return iss;
  }
}
