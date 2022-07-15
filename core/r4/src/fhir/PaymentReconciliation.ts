// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: PaymentReconciliation

import * as fhir from '../fhir.js';

// @ts-ignore
import { PaymentTypeCodes,  PaymentTypeCodeType } from '../fhirValueSets/PaymentTypeCodes.js';
// @ts-ignore
import { PaymentTypeVsValidation } from '../fhirValueSets/PaymentTypeVsValidation.js';
// @ts-ignore
import { NoteTypeCodes,  NoteTypeCodeType } from '../fhirValueSets/NoteTypeCodes.js';
// @ts-ignore
import { NoteTypeVsValidation } from '../fhirValueSets/NoteTypeVsValidation.js';
// @ts-ignore
import { FmStatusCodes,  FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
// @ts-ignore
import { FmStatusVsValidation } from '../fhirValueSets/FmStatusVsValidation.js';
// @ts-ignore
import { RemittanceOutcomeCodes,  RemittanceOutcomeCodeType } from '../fhirValueSets/RemittanceOutcomeCodes.js';
// @ts-ignore
import { RemittanceOutcomeVsValidation } from '../fhirValueSets/RemittanceOutcomeVsValidation.js';
// @ts-ignore
import { FormsCodes,  FormsCodeType } from '../fhirValueSets/FormsCodes.js';
// @ts-ignore
import { FormsVsValidation } from '../fhirValueSets/FormsVsValidation.js';
/**
 * Valid arguments for the PaymentReconciliationDetail type.
 */
export interface PaymentReconciliationDetailArgs extends fhir.BackboneElementArgs {
  /**
   * Unique identifier for the current payment item for the referenced payable.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * Unique identifier for the prior payment item for the referenced payable.
   */
  predecessor?: fhir.IdentifierArgs|undefined;
  /**
   * For example: payment, adjustment, funds advance, etc.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * A resource, such as a Claim, the evaluation of which could lead to payment.
   */
  request?: fhir.ReferenceArgs|undefined;
  /**
   * The party which submitted the claim or financial transaction.
   */
  submitter?: fhir.ReferenceArgs|undefined;
  /**
   * A resource, such as a ClaimResponse, which contains a commitment to payment.
   */
  response?: fhir.ReferenceArgs|undefined;
  /**
   * The date from the response resource containing a commitment to pay.
   */
  date?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.detail.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * A reference to the individual who is responsible for inquiries regarding the response and its payment.
   */
  responsible?: fhir.ReferenceArgs|undefined;
  /**
   * The party which is receiving the payment.
   */
  payee?: fhir.ReferenceArgs|undefined;
  /**
   * The monetary amount allocated from the total payment to the payable.
   */
  amount?: fhir.MoneyArgs|undefined;
}

/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export class PaymentReconciliationDetail extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PaymentReconciliationDetail';
  /**
   * Unique identifier for the current payment item for the referenced payable.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Unique identifier for the prior payment item for the referenced payable.
   */
  public predecessor?: fhir.Identifier|undefined;
  /**
   * For example: payment, adjustment, funds advance, etc.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * A resource, such as a Claim, the evaluation of which could lead to payment.
   */
  public request?: fhir.Reference|undefined;
  /**
   * The party which submitted the claim or financial transaction.
   */
  public submitter?: fhir.Reference|undefined;
  /**
   * A resource, such as a ClaimResponse, which contains a commitment to payment.
   */
  public response?: fhir.Reference|undefined;
  /**
   * The date from the response resource containing a commitment to pay.
   */
  public date?: fhir.FhirDate|undefined;
  /**
   * A reference to the individual who is responsible for inquiries regarding the response and its payment.
   */
  public responsible?: fhir.Reference|undefined;
  /**
   * The party which is receiving the payment.
   */
  public payee?: fhir.Reference|undefined;
  /**
   * The monetary amount allocated from the total payment to the payable.
   */
  public amount?: fhir.Money|undefined;
  /**
   * Default constructor for PaymentReconciliationDetail - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PaymentReconciliationDetailArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['predecessor']) { this.predecessor = new fhir.Identifier(source.predecessor); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['request']) { this.request = new fhir.Reference(source.request); }
    if (source['submitter']) { this.submitter = new fhir.Reference(source.submitter); }
    if (source['response']) { this.response = new fhir.Reference(source.response); }
    if (source['date']) { this.date = new fhir.FhirDate({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDate(source._date as Partial<fhir.FhirDateArgs>); }
    }
    if (source['responsible']) { this.responsible = new fhir.Reference(source.responsible); }
    if (source['payee']) { this.payee = new fhir.Reference(source.payee); }
    if (source['amount']) { this.amount = new fhir.Money(source.amount); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'PaymentReconciliation.detail' }
    this.vOS('identifier',exp)
    this.vOS('predecessor',exp)
    this.vRS('type',exp)
    this.vOS('request',exp)
    this.vOS('submitter',exp)
    this.vOS('response',exp)
    this.vOS('date',exp)
    this.vOS('responsible',exp)
    this.vOS('payee',exp)
    this.vOS('amount',exp)
    return issues;
  }
}
/**
 * Valid arguments for the PaymentReconciliationProcessNote type.
 */
export interface PaymentReconciliationProcessNoteArgs extends fhir.BackboneElementArgs {
  /**
   * The business purpose of the note text.
   */
  type?: fhir.FhirCode<NoteTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.processNote.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * The explanation or description associated with the processing.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.processNote.text
   */
  _text?:fhir.FhirElementArgs;
}

/**
 * A note that describes or explains the processing in a human readable form.
 */
export class PaymentReconciliationProcessNote extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PaymentReconciliationProcessNote';
  /**
   * The business purpose of the note text.
   */
  public type?: fhir.FhirCode<NoteTypeCodeType>|undefined;
  /**
   * The explanation or description associated with the processing.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * Default constructor for PaymentReconciliationProcessNote - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PaymentReconciliationProcessNoteArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.FhirCode<NoteTypeCodeType>({value: source.type}); }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<NoteTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
    if (source['text']) { this.text = new fhir.FhirString({value: source.text}); }
    if (source['_text']) {
      if (this.text) { this.text.addExtendedProperties(source._text!); }
      else { this.text = new fhir.FhirString(source._text as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'PaymentReconciliation.processNote' }
    this.vOSV('type',exp,'NoteType',NoteTypeVsValidation,'r')
    this.vOS('text',exp)
    return issues;
  }
}
/**
 * Valid arguments for the PaymentReconciliation type.
 */
export interface PaymentReconciliationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "PaymentReconciliation"|undefined;
  /**
   * A unique identifier assigned to this payment reconciliation.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<FmStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The period of time for which payments have been gathered into this bulk payment for settlement.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * The date when the resource was created.
   */
  created: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * This party is also responsible for the reconciliation.
   */
  paymentIssuer?: fhir.ReferenceArgs|undefined;
  /**
   * Original request resource reference.
   */
  request?: fhir.ReferenceArgs|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  requestor?: fhir.ReferenceArgs|undefined;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  outcome?: fhir.FhirCode<RemittanceOutcomeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.outcome
   */
  _outcome?:fhir.FhirElementArgs;
  /**
   * A human readable description of the status of the request for the reconciliation.
   */
  disposition?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.disposition
   */
  _disposition?:fhir.FhirElementArgs;
  /**
   * The date of payment as indicated on the financial instrument.
   */
  paymentDate: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.paymentDate
   */
  _paymentDate?:fhir.FhirElementArgs;
  /**
   * Total payment amount as indicated on the financial instrument.
   */
  paymentAmount: fhir.MoneyArgs|null;
  /**
   * For example: EFT number or check number.
   */
  paymentIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * Distribution of the payment amount for a previously acknowledged payable.
   */
  detail?: fhir.PaymentReconciliationDetailArgs[]|undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  formCode?: fhir.CodeableConceptArgs|undefined;
  /**
   * A note that describes or explains the processing in a human readable form.
   */
  processNote?: fhir.PaymentReconciliationProcessNoteArgs[]|undefined;
}

/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export class PaymentReconciliation extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PaymentReconciliation';
  /**
   * Resource Type Name
   */
  public override resourceType: "PaymentReconciliation";
  /**
   * A unique identifier assigned to this payment reconciliation.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<FmStatusCodeType>|null;
  /**
   * The period of time for which payments have been gathered into this bulk payment for settlement.
   */
  public period?: fhir.Period|undefined;
  /**
   * The date when the resource was created.
   */
  public created: fhir.FhirDateTime|null;
  /**
   * This party is also responsible for the reconciliation.
   */
  public paymentIssuer?: fhir.Reference|undefined;
  /**
   * Original request resource reference.
   */
  public request?: fhir.Reference|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  public requestor?: fhir.Reference|undefined;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  public outcome?: fhir.FhirCode<RemittanceOutcomeCodeType>|undefined;
  /**
   * A human readable description of the status of the request for the reconciliation.
   */
  public disposition?: fhir.FhirString|undefined;
  /**
   * The date of payment as indicated on the financial instrument.
   */
  public paymentDate: fhir.FhirDate|null;
  /**
   * Total payment amount as indicated on the financial instrument.
   */
  public paymentAmount: fhir.Money|null;
  /**
   * For example: EFT number or check number.
   */
  public paymentIdentifier?: fhir.Identifier|undefined;
  /**
   * Distribution of the payment amount for a previously acknowledged payable.
   */
  public detail: fhir.PaymentReconciliationDetail[];
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  public formCode?: fhir.CodeableConcept|undefined;
  /**
   * A note that describes or explains the processing in a human readable form.
   */
  public processNote: fhir.PaymentReconciliationProcessNote[];
  /**
   * Default constructor for PaymentReconciliation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PaymentReconciliationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'PaymentReconciliation';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<FmStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<FmStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    else { this.created = null; }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['paymentIssuer']) { this.paymentIssuer = new fhir.Reference(source.paymentIssuer); }
    if (source['request']) { this.request = new fhir.Reference(source.request); }
    if (source['requestor']) { this.requestor = new fhir.Reference(source.requestor); }
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
    if (source['paymentDate']) { this.paymentDate = new fhir.FhirDate({value: source.paymentDate}); }
    else { this.paymentDate = null; }
    if (source['_paymentDate']) {
      if (this.paymentDate) { this.paymentDate.addExtendedProperties(source._paymentDate!); }
      else { this.paymentDate = new fhir.FhirDate(source._paymentDate as Partial<fhir.FhirDateArgs>); }
    }
    if (source['paymentAmount']) { this.paymentAmount = new fhir.Money(source.paymentAmount); }
    else { this.paymentAmount = null; }
    if (source['paymentIdentifier']) { this.paymentIdentifier = new fhir.Identifier(source.paymentIdentifier); }
    if (source['detail']) { this.detail = source.detail.map((x) => new fhir.PaymentReconciliationDetail(x)); }
    else { this.detail = []; }
    if (source['formCode']) { this.formCode = new fhir.CodeableConcept(source.formCode); }
    if (source['processNote']) { this.processNote = source.processNote.map((x) => new fhir.PaymentReconciliationProcessNote(x)); }
    else { this.processNote = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'PaymentReconciliation' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vRSV('status',exp,'FmStatus',FmStatusVsValidation,'r')
    this.vOS('period',exp)
    this.vRS('created',exp)
    this.vOS('paymentIssuer',exp)
    this.vOS('request',exp)
    this.vOS('requestor',exp)
    this.vOSV('outcome',exp,'RemittanceOutcome',RemittanceOutcomeVsValidation,'r')
    this.vOS('disposition',exp)
    this.vRS('paymentDate',exp)
    this.vRS('paymentAmount',exp)
    this.vOS('paymentIdentifier',exp)
    this.vOA('detail',exp)
    this.vOS('formCode',exp)
    this.vOA('processNote',exp)
    return issues;
  }
}
