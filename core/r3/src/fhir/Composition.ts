// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Composition

import * as fhir from '../fhir.js';

// @ts-ignore
import { CompositionAttestationModeCodes,  CompositionAttestationModeCodeType } from '../fhirValueSets/CompositionAttestationModeCodes.js';
// @ts-ignore
import { CompositionAttestationModeVsValidation } from '../fhirValueSets/CompositionAttestationModeVsValidation.js';
// @ts-ignore
import { DocumentRelationshipTypeCodes,  DocumentRelationshipTypeCodeType } from '../fhirValueSets/DocumentRelationshipTypeCodes.js';
// @ts-ignore
import { DocumentRelationshipTypeVsValidation } from '../fhirValueSets/DocumentRelationshipTypeVsValidation.js';
// @ts-ignore
import { V3ActCodes,  V3ActCodeType } from '../fhirValueSets/V3ActCodes.js';
// @ts-ignore
import { V3ActVsValidation } from '../fhirValueSets/V3ActVsValidation.js';
// @ts-ignore
import { DocSectionCodes,  DocSectionCodeType } from '../fhirValueSets/DocSectionCodes.js';
// @ts-ignore
import { DocSectionVsValidation } from '../fhirValueSets/DocSectionVsValidation.js';
// @ts-ignore
import { ListModeCodes,  ListModeCodeType } from '../fhirValueSets/ListModeCodes.js';
// @ts-ignore
import { ListModeVsValidation } from '../fhirValueSets/ListModeVsValidation.js';
// @ts-ignore
import { ListOrderCodes,  ListOrderCodeType } from '../fhirValueSets/ListOrderCodes.js';
// @ts-ignore
import { ListOrderVsValidation } from '../fhirValueSets/ListOrderVsValidation.js';
// @ts-ignore
import { ListEmptyReasonCodes,  ListEmptyReasonCodeType } from '../fhirValueSets/ListEmptyReasonCodes.js';
// @ts-ignore
import { ListEmptyReasonVsValidation } from '../fhirValueSets/ListEmptyReasonVsValidation.js';
// @ts-ignore
import { CompositionStatusCodes,  CompositionStatusCodeType } from '../fhirValueSets/CompositionStatusCodes.js';
// @ts-ignore
import { CompositionStatusVsValidation } from '../fhirValueSets/CompositionStatusVsValidation.js';
// @ts-ignore
import { DocTypeCodes,  DocTypeCodeType } from '../fhirValueSets/DocTypeCodes.js';
// @ts-ignore
import { DocTypeVsValidation } from '../fhirValueSets/DocTypeVsValidation.js';
// @ts-ignore
import { DocClassCodes,  DocClassCodeType } from '../fhirValueSets/DocClassCodes.js';
// @ts-ignore
import { DocClassVsValidation } from '../fhirValueSets/DocClassVsValidation.js';
// @ts-ignore
import { V3ConfidentialityClassificationCodes,  V3ConfidentialityClassificationCodeType } from '../fhirValueSets/V3ConfidentialityClassificationCodes.js';
// @ts-ignore
import { V3ConfidentialityClassificationVsValidation } from '../fhirValueSets/V3ConfidentialityClassificationVsValidation.js';
/**
 * Valid arguments for the CompositionAttester type.
 */
export interface CompositionAttesterArgs extends fhir.BackboneElementArgs {
  /**
   * Use more than one code where a single attester has more than one mode (professional and legal are often paired).
   */
  mode: fhir.FhirCode<CompositionAttestationModeCodeType>[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Composition.attester.mode
   */
  _mode?:(fhir.FhirElementArgs|null)[];
  /**
   * When the composition was attested by the party.
   */
  time?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Composition.attester.time
   */
  _time?:fhir.FhirElementArgs;
  /**
   * Who attested the composition in the specified way.
   */
  party?: fhir.ReferenceArgs|undefined;
}

/**
 * Only list each attester once.
 */
export class CompositionAttester extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CompositionAttester';
  /**
   * Use more than one code where a single attester has more than one mode (professional and legal are often paired).
   */
  public mode: fhir.FhirCode<CompositionAttestationModeCodeType>[];
  /**
   * When the composition was attested by the party.
   */
  public time?: fhir.FhirDateTime|undefined;
  /**
   * Who attested the composition in the specified way.
   */
  public party?: fhir.Reference|undefined;
  /**
   * Default constructor for CompositionAttester - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CompositionAttesterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['mode'] !== undefined) { this.mode = source.mode.map((x) => new fhir.FhirCode<CompositionAttestationModeCodeType>({value: x}, options)); }
    else { this.mode = []; }
    if (source['_mode']) {
      source._mode.forEach((x,i) => {
        if (this.mode.length >= i) { if (x) { this.mode[i].addExtendedProperties(x); } }
        else { if (x) { this.mode.push(new fhir.FhirCode<CompositionAttestationModeCodeType>(x as Partial<fhir.FhirCode>)); } }
      });
    }
    if (source['time'] !== undefined) { this.time = new fhir.FhirDateTime({value: source.time}, options); }
    if (source['_time']) {
      if (this.time) { this.time.addExtendedProperties(source._time!); }
      else { this.time = new fhir.FhirDateTime(source._time as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['party']) { this.party = new fhir.Reference(source.party, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Composition.attester' }
    iss.push(...this.vRAV('mode',exp,'CompositionAttestationMode',CompositionAttestationModeVsValidation,'r'));
    iss.push(...this.vOS('time',exp));
    iss.push(...this.vOS('party',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CompositionRelatesTo type.
 */
export interface CompositionRelatesToArgs extends fhir.BackboneElementArgs {
  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   */
  code: fhir.FhirCode<DocumentRelationshipTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Composition.relatesTo.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * The target composition/document of this relationship.
   */
  target?: fhir.Identifier|fhir.Reference|undefined;
  /**
   * The target composition/document of this relationship.
   */
  targetIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * The target composition/document of this relationship.
   */
  targetReference?: fhir.ReferenceArgs|undefined;
}

/**
 * A document is a version specific composition.
 */
export class CompositionRelatesTo extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CompositionRelatesTo';
  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   */
  public code: fhir.FhirCode<DocumentRelationshipTypeCodeType>|null;
  /**
   * The target composition/document of this relationship.
   */
  public target: (fhir.Identifier|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element Composition.relatesTo.target[x]
   */
  protected static readonly _fts_targetIsChoice:true = true;
  /**
   * Default constructor for CompositionRelatesTo - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CompositionRelatesToArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code'] !== undefined) { this.code = new fhir.FhirCode<DocumentRelationshipTypeCodeType>({value: source.code}, options); }
    else { this.code = null; }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode<DocumentRelationshipTypeCodeType>(source._code as Partial<fhir.FhirCode>, options); }
    }
    if (source['target']) { this.target = source.target; }
    else if (source['targetIdentifier']) { this.target = new fhir.Identifier(source.targetIdentifier, options); }
    else if (source['targetReference']) { this.target = new fhir.Reference(source.targetReference, options); }
    else { this.target = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Composition.relatesTo' }
    iss.push(...this.vRSV('code',exp,'DocumentRelationshipType',DocumentRelationshipTypeVsValidation,'r'));
    iss.push(...this.vRS('target',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CompositionEvent type.
 */
export interface CompositionEventArgs extends fhir.BackboneElementArgs {
  /**
   * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
   */
  code?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
   */
  detail?: fhir.ReferenceArgs[]|undefined;
}

/**
 * The event needs to be consistent with the type element, though can provide further information if desired.
 */
export class CompositionEvent extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CompositionEvent';
  /**
   * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
   */
  public code: fhir.CodeableConcept[];
  /**
   * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
   */
  public period?: fhir.Period|undefined;
  /**
   * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
   */
  public detail: fhir.Reference[];
  /**
   * Default constructor for CompositionEvent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CompositionEventArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = source.code.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.code = []; }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    if (source['detail']) { this.detail = source.detail.map((x) => new fhir.Reference(x, options)); }
    else { this.detail = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Composition.event' }
    iss.push(...this.vOA('code',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOA('detail',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CompositionSection type.
 */
export interface CompositionSectionArgs extends fhir.BackboneElementArgs {
  /**
   * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Composition.section.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.   If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: fhir.NarrativeArgs|undefined;
  /**
   * This element is labeled as a modifier because a change list must not be mis-understood as a complete list.
   */
  mode?: fhir.FhirCode<ListModeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Composition.section.mode
   */
  _mode?:fhir.FhirElementArgs;
  /**
   * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
   */
  orderedBy?: fhir.CodeableConceptArgs|undefined;
  /**
   * If there are no entries in the list, an emptyReason SHOULD be provided.
   */
  entry?: fhir.ReferenceArgs[]|undefined;
  /**
   * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
   */
  emptyReason?: fhir.CodeableConceptArgs|undefined;
  /**
   * Nested sections are primarily used to help human readers navigate to particular portions of the document.
   */
  section?: fhir.CompositionSectionArgs[]|undefined;
}

/**
 * The root of the sections that make up the composition.
 */
export class CompositionSection extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CompositionSection';
  /**
   * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.   If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
   */
  public text?: fhir.Narrative|undefined;
  /**
   * This element is labeled as a modifier because a change list must not be mis-understood as a complete list.
   */
  public mode?: fhir.FhirCode<ListModeCodeType>|undefined;
  /**
   * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
   */
  public orderedBy?: fhir.CodeableConcept|undefined;
  /**
   * If there are no entries in the list, an emptyReason SHOULD be provided.
   */
  public entry: fhir.Reference[];
  /**
   * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
   */
  public emptyReason?: fhir.CodeableConcept|undefined;
  /**
   * Nested sections are primarily used to help human readers navigate to particular portions of the document.
   */
  public section: fhir.CompositionSection[];
  /**
   * Default constructor for CompositionSection - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CompositionSectionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['title'] !== undefined) { this.title = new fhir.FhirString({value: source.title}, options); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    if (source['text']) { this.text = new fhir.Narrative(source.text, options); }
    if (source['mode'] !== undefined) { this.mode = new fhir.FhirCode<ListModeCodeType>({value: source.mode}, options); }
    if (source['_mode']) {
      if (this.mode) { this.mode.addExtendedProperties(source._mode!); }
      else { this.mode = new fhir.FhirCode<ListModeCodeType>(source._mode as Partial<fhir.FhirCode>, options); }
    }
    if (source['orderedBy']) { this.orderedBy = new fhir.CodeableConcept(source.orderedBy, options); }
    if (source['entry']) { this.entry = source.entry.map((x) => new fhir.Reference(x, options)); }
    else { this.entry = []; }
    if (source['emptyReason']) { this.emptyReason = new fhir.CodeableConcept(source.emptyReason, options); }
    if (source['section']) { this.section = source.section.map((x) => new fhir.CompositionSection(x, options)); }
    else { this.section = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Composition.section' }
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vOS('text',exp));
    iss.push(...this.vOSV('mode',exp,'ListMode',ListModeVsValidation,'r'));
    iss.push(...this.vOS('orderedBy',exp));
    iss.push(...this.vOA('entry',exp));
    iss.push(...this.vOS('emptyReason',exp));
    iss.push(...this.vOA('section',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Composition type.
 */
export interface CompositionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Composition"|undefined;
  /**
   * See discussion in resource definition for how these relate.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements. 
   * Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
   */
  status: fhir.FhirCode<CompositionStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Composition.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
   */
  class?: fhir.CodeableConceptArgs|undefined;
  /**
   * For clinical documents, this is usually the patient.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * Describes the clinical encounter or type of care this documentation is associated with.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
   */
  date: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Composition.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
   */
  author: fhir.ReferenceArgs[]|null;
  /**
   * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
   */
  title: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Composition.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).
   * This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
   */
  confidentiality?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Composition.confidentiality
   */
  _confidentiality?:fhir.FhirElementArgs;
  /**
   * Only list each attester once.
   */
  attester?: fhir.CompositionAttesterArgs[]|undefined;
  /**
   * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
   */
  custodian?: fhir.ReferenceArgs|undefined;
  /**
   * A document is a version specific composition.
   */
  relatesTo?: fhir.CompositionRelatesToArgs[]|undefined;
  /**
   * The event needs to be consistent with the type element, though can provide further information if desired.
   */
  event?: fhir.CompositionEventArgs[]|undefined;
  /**
   * The root of the sections that make up the composition.
   */
  section?: fhir.CompositionSectionArgs[]|undefined;
}

/**
 * A set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. While a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained.
 */
export class Composition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Composition';
  /**
   * Resource Type Name
   */
  public override resourceType: "Composition";
  /**
   * See discussion in resource definition for how these relate.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements. 
   * Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
   */
  public status: fhir.FhirCode<CompositionStatusCodeType>|null;
  /**
   * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
   */
  public class?: fhir.CodeableConcept|undefined;
  /**
   * For clinical documents, this is usually the patient.
   */
  public subject: fhir.Reference|null;
  /**
   * Describes the clinical encounter or type of care this documentation is associated with.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
   */
  public date: fhir.FhirDateTime|null;
  /**
   * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
   */
  public author: fhir.Reference[];
  /**
   * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
   */
  public title: fhir.FhirString|null;
  /**
   * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).
   * This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
   */
  public confidentiality?: fhir.FhirCode|undefined;
  /**
   * Only list each attester once.
   */
  public attester: fhir.CompositionAttester[];
  /**
   * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
   */
  public custodian?: fhir.Reference|undefined;
  /**
   * A document is a version specific composition.
   */
  public relatesTo: fhir.CompositionRelatesTo[];
  /**
   * The event needs to be consistent with the type element, though can provide further information if desired.
   */
  public event: fhir.CompositionEvent[];
  /**
   * The root of the sections that make up the composition.
   */
  public section: fhir.CompositionSection[];
  /**
   * Default constructor for Composition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CompositionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Composition';
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier, options); }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<CompositionStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<CompositionStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    else { this.type = null; }
    if (source['class']) { this.class = new fhir.CodeableConcept(source.class, options); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter, options); }
    if (source['date'] !== undefined) { this.date = new fhir.FhirDateTime({value: source.date}, options); }
    else { this.date = null; }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['author']) { this.author = source.author.map((x) => new fhir.Reference(x, options)); }
    else { this.author = []; }
    if (source['title'] !== undefined) { this.title = new fhir.FhirString({value: source.title}, options); }
    else { this.title = null; }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['confidentiality'] !== undefined) { this.confidentiality = new fhir.FhirCode({value: source.confidentiality}, options); }
    if (source['_confidentiality']) {
      if (this.confidentiality) { this.confidentiality.addExtendedProperties(source._confidentiality!); }
      else { this.confidentiality = new fhir.FhirCode(source._confidentiality as Partial<fhir.FhirCodeArgs>, options); }
    }
    if (source['attester']) { this.attester = source.attester.map((x) => new fhir.CompositionAttester(x, options)); }
    else { this.attester = []; }
    if (source['custodian']) { this.custodian = new fhir.Reference(source.custodian, options); }
    if (source['relatesTo']) { this.relatesTo = source.relatesTo.map((x) => new fhir.CompositionRelatesTo(x, options)); }
    else { this.relatesTo = []; }
    if (source['event']) { this.event = source.event.map((x) => new fhir.CompositionEvent(x, options)); }
    else { this.event = []; }
    if (source['section']) { this.section = source.section.map((x) => new fhir.CompositionSection(x, options)); }
    else { this.section = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Composition' }
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vRSV('status',exp,'CompositionStatus',CompositionStatusVsValidation,'r'));
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOS('class',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vRS('date',exp));
    iss.push(...this.vRA('author',exp));
    iss.push(...this.vRS('title',exp));
    iss.push(...this.vOSV('confidentiality',exp,'V3ConfidentialityClassification',V3ConfidentialityClassificationVsValidation,'r'));
    iss.push(...this.vOA('attester',exp));
    iss.push(...this.vOS('custodian',exp));
    iss.push(...this.vOA('relatesTo',exp));
    iss.push(...this.vOA('event',exp));
    iss.push(...this.vOA('section',exp));
    return iss;
  }
}
