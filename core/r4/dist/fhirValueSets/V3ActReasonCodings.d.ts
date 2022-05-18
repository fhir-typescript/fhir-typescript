import { Coding } from '../fhir/Coding.js';
/**
 *  A set of codes specifying the motivation, cause, or rationale of an Act, when such rationale is not reasonably represented as an ActRelationship of type "has reason" linking to another Act.  Examples:
 * Example reasons that might qualify for being coded in this field might be: "routine requirement", "infectious disease reporting requirement", "on patient request", "required by law".
 */
export declare const V3ActReasonCodings: {
    /**
     * _ActAccommodationReason: Identifies the reason the patient is assigned to this accommodation type
     */
    readonly ActAccommodationReason: Coding;
    /**
     * _ActBillableClinicalServiceReason: Reason for Clinical Service being performed.
     *
     *                         This domain excludes reasons specified by diagnosed conditions.
     *
     *                         Examples of values from this domain include duplicate therapy and fraudulent prescription.
     */
    readonly ActBillableClinicalServiceReason: Coding;
    /**
     * _ActBillableServiceReason: Definition: This domain is used to document reasons for providing a billable service; the billable services may include both clinical services and social services.
     */
    readonly ActBillableServiceReason: Coding;
    /**
     * _ActConsentInformationAccessOverrideReason: To perform one or more operations on information to which the patient has not consented as deemed necessary by authorized entities for providing care in the best interest of the patient; providing immediately needed health care for an emergent condition;  or for protecting public or third party safety.
     *
     *
     *                            Usage Notes: Used to convey the reason that a provider or other entity may or has accessed personal healthcare information.  Typically, this involves overriding the subject's consent directives.
     */
    readonly ActConsentInformationAccessOverrideReason: Coding;
    /**
     * _ActCoverageReason: Description:Codes used to specify reasons or criteria relating to coverage provided under a policy or program.  May be used to convey reasons pertaining to coverage contractual provisions, including criteria for eligibility, coverage limitations, coverage maximums, or financial participation required of covered parties.
     */
    readonly ActCoverageReason: Coding;
    /**
     * _ActHealthInformationManagementReason: Description:The rationale or purpose for an act relating to health information management, such as archiving information for the purpose of complying with an organization policy or jurisdictional law relating to  data retention.
     */
    readonly ActHealthInformationManagementReason: Coding;
    /**
     * _ActIneligibilityReason: Identifies the reason or rational for why a person is not eligibile for benefits under an insurance policy.
     *
     *                         Examples are client deceased &amp; adopted client has been given a new policy identifier.
     */
    readonly ActIneligibilityReason: Coding;
    /**
     * _ActInformationManagementReason: Description:The rationale or purpose for an act relating to information management, such as archiving information for the purpose of complying with an enterprise data retention policy.
     */
    readonly ActInformationManagementReason: Coding;
    /**
     * _ActInformationPrivacyReason: Description:The rationale or purpose for an act relating to the management of personal information, such as disclosing personal tax information for the purpose of complying with a court order.
     */
    readonly ActInformationPrivacyReason: Coding;
    /**
     * _ActInvalidReason: Description: Types of reasons why a substance is invalid for use.
     */
    readonly ActInvalidReason: Coding;
    /**
     * _ActInvoiceCancelReason: Domain specifies the codes used to describe reasons why a Provider is cancelling an Invoice or Invoice Grouping.
     */
    readonly ActInvoiceCancelReason: Coding;
    /**
     * _ActNoImmunizationReason: A coded description of the reason for why a patient did not receive a scheduled immunization.
     *
     *                         (important for public health strategy
     */
    readonly ActNoImmunizationReason: Coding;
    /**
     * _ActSupplyFulfillmentRefusalReason: Indicates why a fulfiller refused to fulfill a supply order, and considered it important to notify other providers of their decision.  E.g. "Suspect fraud", "Possible abuse", "Contraindicated".
     *
     *                         (used when capturing 'refusal to fill' annotations)
     */
    readonly ActSupplyFulfillmentRefusalReason: Coding;
    /**
     * _ClinicalResearchEventReason: Definition:Specifies the reason that an event occurred in a clinical research study.
     */
    readonly ClinicalResearchEventReason: Coding;
    /**
     * _ClinicalResearchObservationReason: Definition:SSpecifies the reason that a test was performed or observation collected in a clinical research study.
     *
     *
     *                            Note:This set of codes are not strictly reasons, but are used in the currently Normative standard.  Future revisions of the specification will model these as ActRelationships and thes codes may subsequently be retired.  Thus, these codes should not be used for new specifications.
     */
    readonly ClinicalResearchObservationReason: Coding;
    /**
     * _CombinedPharmacyOrderSuspendReasonCode: Description:Indicates why the prescription should be suspended.
     */
    readonly CombinedPharmacyOrderSuspendReasonCode: Coding;
    /**
     * _ControlActNullificationReasonCode: Description:Identifies reasons for nullifying (retracting) a particular control act.
     */
    readonly ControlActNullificationReasonCode: Coding;
    /**
     * _ControlActNullificationRefusalReasonType: Description: Reasons to refuse a transaction to be undone.
     */
    readonly ControlActNullificationRefusalReasonType: Coding;
    /**
     * _ControlActReason: Identifies why a specific query, request, or other trigger event occurred.
     */
    readonly ControlActReason: Coding;
    /**
     * _CoverageEligibilityReason: Definition: Identifies the reason or rational for why a person is eligibile for benefits under an insurance policy or progam.
     *
     *
     *                            Examples:  A person is a claimant under an automobile insurance policy are client deceased &amp; adopted client has been given a new policy identifier.  A new employee is eligible for health insurance as an employment benefit.  A person meets a government program eligibility criteria for financial, age or health status.
     */
    readonly CoverageEligibilityReason: Coding;
    /**
     * _EligibilityActReasonCode: Identifies the reason or rational for why a person is eligibile for benefits under an insurance policy or progam.
     *
     *
     *                            Examples:  A person is a claimant under an automobile insurance policy are client deceased &amp; adopted client has been given a new policy identifier.  A new employee is eligible for health insurance as an employment benefit.  A person meets a government program eligibility criteria for financial, age or health status.
     */
    readonly EligibilityActReasonCode: Coding;
    /**
     * _GenericUpdateReasonCode: Description:Identifies why a change is being made to a  record.
     */
    readonly GenericUpdateReasonCode: Coding;
    /**
     * _MedicationOrderAbortReasonCode: Description:Indicates the reason the medication order should be aborted.
     */
    readonly MedicationOrderAbortReason: Coding;
    /**
     * _MedicationOrderReleaseReasonCode: Definition:A collection of concepts that indicate why the prescription should be released from suspended state.
     */
    readonly MedicationOrderReleaseReason: Coding;
    /**
     * _ModifyPrescriptionReasonType: Types of reason why a prescription is being changed.
     */
    readonly ModifyPrescriptionReasonType: Coding;
    /**
     * _PatientProfileQueryReasonCode: Definition:A collection of concepts identifying why the patient's profile is being queried.
     */
    readonly PatientProfileQueryReason: Coding;
    /**
     * _PharmacySupplyEventAbortReason: Definition:Identifies why the dispense event was not completed.
     */
    readonly PharmacySupplyEventAbortReason: Coding;
    /**
     * _PharmacySupplyEventStockReasonCode: Definition:A collection of concepts that indicates the reason for a "bulk supply" of medication.
     */
    readonly PharmacySupplyEventStockReason: Coding;
    /**
     * _PharmacySupplyRequestFulfillerRevisionRefusalReasonCode: Definition:Indicates why the request to transfer a prescription from one dispensing facility to another has been refused.
     */
    readonly PharmacySupplyRequestFulfillerRevisionRefusalReasonCode: Coding;
    /**
     * _PharmacySupplyRequestRenewalRefusalReasonCode: Definition:A collection of concepts that identifies why a renewal prescription has been refused.
     */
    readonly PharmacySupplyRequestRenewalRefusalReason: Coding;
    /**
     * _RefusalReasonCode: Description: Identifies why a request to add (or activate) a record is being refused.  Examples include the receiving system not able to match the identifier and find that record in the receiving system, having no permission, or a detected issue exists which precludes the requested action.
     */
    readonly RefusalReasonCode: Coding;
    /**
     * _SchedulingActReason: Reasons for cancelling or rescheduling an Appointment
     */
    readonly SchedulingActReason: Coding;
    /**
     * _StatusRevisionRefusalReasonCode: Indicates why the act revision (status update) is being refused.
     */
    readonly StatusRevisionRefusalReasonCode: Coding;
    /**
     * _SubstanceAdministrationPermissionRefusalReasonCode: Definition:Indicates why the requested authorization to prescribe or dispense a medication has been refused.
     */
    readonly SubstanceAdministrationPermissionRefusalReasonCode: Coding;
    /**
     * _SubstanceAdminSubstitutionNotAllowedReason: Reasons why substitution of a substance administration request is not permitted.
     */
    readonly SubstanceAdminSubstitutionNotAllowedReason: Coding;
    /**
     * _SubstanceAdminSubstitutionReason: SubstanceAdminSubstitutionReason
     */
    readonly SubstanceAdminSubstitutionReason: Coding;
    /**
     * _SupplyOrderAbortReasonCode: Definition:A collection of concepts that indicates why the prescription should no longer be allowed to be dispensed (but can still administer what is already being dispensed).
     */
    readonly SupplyOrderAbortReason: Coding;
    /**
     * _TransferActReason: The explanation for why a patient is moved from one location to another within the organization
     */
    readonly TransferActReason: Coding;
    /**
     * ACCRED: Description:Operational activities conducted for the purposes of meeting of criteria defined by an accrediting entity for an activity, product, or service
     */
    readonly Accreditation: Coding;
    /**
     * ACCREQNA: Accommodation requested is not available.
     */
    readonly AccommodationRequestedNotAvailable: Coding;
    /**
     * ADMINERROR: Order was created with incorrect data and is changed to reflect the intended accuracy of the order.
     */
    readonly AdministrativeErrorInOrder: Coding;
    /**
     * ADMREV: Definition: To evaluate for service authorization, payment, reporting, or performance/outcome measures.
     */
    readonly AdministrativeReview: Coding;
    /**
     * ADVSTORAGE: Description: Storage conditions caused the substance to be ineffective.
     */
    readonly AdverseStorageCondition: Coding;
    /**
     * AGE: A person becomes eligible for a program based on age.
     *
     *
     *                            Example:  In the U.S., a person who is 65 years of age or older is eligible for Medicare.
     */
    readonly AgeEligibility: Coding;
    /**
     * ALGINT: Definition: Patient has had a prior allergic intolerance response to alternate product or one of its components.
     */
    readonly AllergyIntolerance: Coding;
    /**
     * ALREADYRX: Definition:Patient has already been given a new (renewal) prescription.
     */
    readonly NewPrescriptionExists: Coding;
    /**
     * ALTCHOICE: Description:This therapy has been ordered as a backup to a preferred therapy.  This order will be released when and if the preferred therapy is unsuccessful.
     */
    readonly TryAnotherTreatmentFirst: Coding;
    /**
     * ALTD: Description:The decision on which the recorded information was based was changed before the decision had an effect.
     *
     *
     *                            Example:Aborted prescription before patient left office, released prescription before suspend took effect.
     */
    readonly AlteredDecision: Coding;
    /**
     * BIORCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge. Use of the data must be related to specified biomedical basic or applied research.  For example, research on rare plants to determine whether biologic properties may be useful for pharmaceutical development. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    readonly BiomedicalResearch: Coding;
    /**
     * BLK: The time slots previously allocated are now blocked and no longer available for booking Appointments
     */
    readonly UnexpectedBlockOfSchedule: Coding;
    /**
     * Code: BONUS
     */
    readonly BONUS: Coding;
    /**
     * BTG: To perform policy override operations on information for provision of immediately needed health care for an emergent condition affecting potential harm, death or patient safety by end users who are not provisioned for this purpose of use.  Includes override of organizational provisioning policies and may include override of subject of care consent directive restricting access.
     *
     *
     *                            Map: Partially Maps to ISO 14265 Classification Term "Emergency care provision to an individual subject of care" described as "To inform persons needing to provide health care services to the subject of care urgently, possibly needing to over-ride the  policies and consents pertaining to Purpose 1 above." Purpose 1 is equivalent to HL7 treatment purpose of use: "Clinical care provision to an individual subject of care" described as "To inform persons or processes responsible for providing health care services to the subject of care."
     * The ISO description conflates both of the proposed specializations of HL7 ETREAT: break the glass and the typically broader access to health information normally available to providers who are provisioned for emergency workflows on a regular basis, e.g., Emergency Room providers. Examples of greater access than is normally accessible by providers based on the need to know are access to sensitive information for which access typically requires a patient's consent.  This is not an override of a patient's dissent to disclose sensitive information in cases where the applicable policy waives the need for that consent to access this information. In US, Title 38 Section 7332 and 42 CFR Part 2 both permit emergency access without the need to override a patient's consent directive; rather, this access is a limitation to the patient's right to dissent from disclosure.
     */
    readonly BreakTheGlass: Coding;
    /**
     * CAREMGT: To perform analytics, evaluation and other secondary uses of treatment and healthcare related information to manage the quality, efficacy, patient safety, population health, and cost effectiveness of healthcare delivery. Explicitly excludes the use of information to organize the delivery of health care for care coordination and case management, or to provide healthcare treatment.
     *
     *
     *                            Usage Note: The concept of care management is narrower than the list of activities related to more general organizational objectives such as provider profiling, education of healthcare and non-healthcare professionals; insurance underwriting, premium rating, reinsurance; organizational legal, medical review, auditing, compliance and fraud and abuse detection; business planning, development, and restructuring; fund-raising; and customer service.
     *
     *
     *                            Map: Maps to ISO 14265 Classification Term "Health service management and quality assurance" described as "To inform persons or processes responsible for determining the availability, quality, safety, equity and cost-effectiveness of health care services."
     *
     *                         There is a semantic gap in concepts.  This classification term  is described as activities, i.e., "to inform persons" or "to inform processes" rather than the rationale for performing actions/operations on information related to the activity.
     */
    readonly CareManagement: Coding;
    /**
     * CHD: Description:The level of coverage under the policy or program is available only to children
     */
    readonly ChildrenOnly: Coding;
    /**
     * CHGDATA: Description:Information has changed since the record was created.
     */
    readonly InformationChange: Coding;
    /**
     * CLARIF: Description:Clarification is required before the order can be acted upon.
     */
    readonly PrescriptionRequiresClarification: Coding;
    /**
     * CLINMOD: Order is changed based on a clinical reason.
     */
    readonly ClinicalModification: Coding;
    /**
     * CLINTRCH: To perform one or more operations on information for conducting scientific investigations in accordance with clinical trial protocols to obtain health care knowledge.
     */
    readonly ClinicalTrialResearch: Coding;
    /**
     * CLINTRCHNPC: To perform one or more operations on information for conducting scientific investigations in accordance with clinical trial protocols to obtain health care knowledge without provision of patient care. May be post-coordinated or used with other purposes of use such as disease, discipline, specialty, population origins or ancestry, translational healthcare research. For example, a clinical trial conducted on laboratory specimens collected from a specified patient population.
     */
    readonly ClinicalTrialResearchWithoutPatientCare: Coding;
    /**
     * CLINTRCHPC: To perform one or more operations on information for conducting scientific investigations with patient care in accordance with clinical trial protocols to obtain health care knowledge. May be post-coordinated or used with other purposes of use such as disease, discipline, specialty, population origins or ancestry, translational healthcare research. For example, an "off-label" drug used for cancer therapy administer to a specified patient population.
     */
    readonly ClinicalTrialResearchWithPatientCare: Coding;
    /**
     * CLINTRL: To perform health care as part of the clinical trial protocol.
     */
    readonly ClinicalTrial: Coding;
    /**
     * CLMATTCH: To perform one or more operations on information for provision of additional clinical evidence in support of a request for coverage or payment for health services.
     */
    readonly ClaimAttachment: Coding;
    /**
     * COC: To perform one or more actions on information in order to organize the provision and case management of an individualâ€™s healthcare, including: Monitoring a person's goals, needs, and preferences; acting as the communication link between two or more participants concerned with a person's health and wellness; organizing and facilitating care activities and promoting self-management by advocating for, empowering, and educating a person; and ensuring safe, appropriate, non-duplicative, and effective integrated care.
     *
     *
     *                            Usage Note: Use when describing these functions: 1. Monitoring a personâ€™s goals, needs, and preferences.   2. Acting as the communication link between two or more participants concerned with a person's health and wellness.  3. Organizing and facilitating care activities and promoting self-management by advocating for, empowering, and educating a person.  4. Ensuring safe, appropriate, non-duplicative, and effective integrated care.
     *
     *                         The goal is to clearly differentiate this type of coordination of care from HIPAA Operations by specifying that these actions on information are undertaken in the provision of healthcare treatment.
     *
     *                         For similar uses of this concept, see SAMHSA Confidentiality of Substance Use Disorder Patient Records Supplemental notice of proposed rulemaking, which differentiates concepts of care coordination and case management for the provision of treatment as specifically distinct from activities related to health care delivery management and the operations of organizational entities involved in the delivery of healthcare.
     *
     *
     *                            Map: Maps to ISO 14265 Classification Terms: "Support of care activities within the provider organisation for an individual subject of care" described as "To inform persons or processes enabling others to provide health care services to the subject of care."  "Subject of Care Uses" described as "To inform the subject of care in support of his or her own interests."
     */
    readonly CoordinationOfCare: Coding;
    /**
     * COLDCHNBRK: Description: Cold chain was not maintained for the substance.
     */
    readonly ColdChainBreak: Coding;
    /**
     * COMPCON: Definition: Patient has compliance issues with medication such as differing appearance, flavor, size, shape or consistency.
     */
    readonly ComplianceConcern: Coding;
    /**
     * COMPL: Description:Operational activities required to meet a mandate related to an activity, product, or service
     */
    readonly Compliance: Coding;
    /**
     * CONTRA: Definition:Contraindication identified
     */
    readonly Contraindication: Coding;
    /**
     * COVAUTH: To perform one or more operations on information for conducting prior authorization or predetermination of coverage for services.
     */
    readonly CoverageAuthorization: Coding;
    /**
     * COVERAGE: To perform one or more operations on information for conducting activities related to coverage under a program or policy.
     */
    readonly CoverageUnderPolicyOrProgram: Coding;
    /**
     * COVSUS: When a client has no contact with the health system for an extended period, coverage is suspended.  Client will be reinstated to original start date upon proof of identification, residency etc.
     *
     *                         Example: Coverage may be suspended during a strike situation, when employer benefits for employees are not covered (i.e. not in effect).
     */
    readonly CoverageSuspended: Coding;
    /**
     * CRIME: A person becomes eligible for insurance or a program because of crime related health condition or injury.
     *
     *
     *                            Example:  A person is a claimant under the U.S. Crime Victims Compensation program.
     */
    readonly CrimeVictim: Coding;
    /**
     * CT: Indicates that the decision to substitute or to not substitute was driven by a desire to maintain consistency with a pre-existing therapy.  I.e. The performer provided the same item/service as had been previously provided rather than providing exactly what was ordered, or rather than substituting with a lower-cost equivalent.
     */
    readonly ContinuingTherapy: Coding;
    /**
     * DEC: The Patient is deceased
     */
    readonly PatientDeceased: Coding;
    /**
     * DECSD: Client deceased.
     */
    readonly Deceased: Coding;
    /**
     * DEP: Description:The level of coverage under the policy or program is available only to a subscriber's dependents.
     */
    readonly DependentsOnly: Coding;
    /**
     * DIS: A person becomes a claimant under a disability income insurance policy or a disability rehabilitation program because of a health condition or injury which limits the person's ability to earn an income or function without institutionalization.
     */
    readonly Disability: Coding;
    /**
     * DISASTER: To perform one or more operations on information used for provision of immediately needed health care to a population of living subjects located in a disaster zone.
     */
    readonly Disaster: Coding;
    /**
     * DISCONT: Description:The medication is no longer being manufactured or is otherwise no longer available.
     */
    readonly ProductDiscontinued: Coding;
    /**
     * DONAT: To perform one or more operations on information used for cadaveric organ, eye or tissue donation.
     */
    readonly Donation: Coding;
    /**
     * DOSECHG: Description:The medication is being re-prescribed at a different dosage.
     */
    readonly ChangeInMedicationDose: Coding;
    /**
     * DRUGHIGH: Description:The current level of the medication in the patient's system is too high.  The medication is suspended to allow the level to subside to a safer level.
     */
    readonly DrugLevelTooHigh: Coding;
    /**
     * DSRCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge. Use of the data must be related to specified conditions, diagnosis, or disease healthcare research.  For example, conducting cancer research by testing reaction of tumor cells to certain biologics. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    readonly DiseaseSpecificHealthcareResearch: Coding;
    /**
     * ECH: Description:The level of coverage under the policy or program is available to an employee and his or her children.
     */
    readonly EmployeeAndChildren: Coding;
    /**
     * Code: EDU
     */
    readonly EDU: Coding;
    /**
     * EIE: Description:The information was recorded incorrectly or was recorded in the wrong record.
     */
    readonly EnteredInError: Coding;
    /**
     * ELIGDTRM: To perform one or more operations on information used for conducting eligibility determination for coverage in a program or policy.  May entail review of financial status or disability assessment.
     */
    readonly EligibilityDetermination: Coding;
    /**
     * ELIGVER: To perform one or more operations on information used for conducting eligibility verification of coverage in a program or policy.  May entail provider contacting coverage source (e.g., government health program such as workers compensation or health plan) for confirmation of enrollment, eligibility for specific services, and any applicable copays.
     */
    readonly EligibilityVerification: Coding;
    /**
     * EMP: Description:The level of coverage under the policy or program is available only to an employee.
     */
    readonly EmployeeOnly: Coding;
    /**
     * EMPLOY: A person becomes eligible for insurance provided as an employment benefit based on employment status.
     */
    readonly EmploymentBenefit: Coding;
    /**
     * ENADMIN: Description:Operational activities conducted to administer information relating to entities involves with an activity, product, or service
     */
    readonly EntityAdministration: Coding;
    /**
     * ENROLLM: To perform one or more operations on information used for enrolling a covered party in a program or policy.  May entail recording of covered party's and any dependent's demographic information and benefit choices.
     */
    readonly Enrollment: Coding;
    /**
     * ER: Moved to an error in placing the patient in the original location.
     */
    readonly Error: Coding;
    /**
     * ERTREAT: To perform one or more operations on information for provision of immediately needed health care for an emergent condition in an emergency room or similar emergent care context by end users provisioned for this purpose, which does not constitute as policy override such as in a "Break the Glass" purpose of use.
     *
     *                         Map:Partially Maps to ISO 14265 Classification Term "Emergency care provision to an individual subject of care" described as "To inform persons needing to provide health care services to the subject of care urgently, possibly needing to over-ride the  policies and consents pertaining to Purpose 1 above." Purpose 1 is equivalent to HL7 treatment purpose of use: "Clinical care provision to an individual subject of care" described as "To inform persons or processes responsible for providing health care services to the subject of care."
     *
     *                         The ISO description conflates both of the proposed specializations of HL7 ETREAT: break the glass and the typically broader access to health information normally available to providers who are provisioned for emergency workflows on a regular basis, e.g., Emergency Room providers. Examples of greater access than is normally accessible by providers based on the need to know are access to sensitive information for which access typically requires a patient's consent.  This is not an override of a patient's dissent to disclose sensitive information in cases where the applicable policy waives the need for that consent to access this information. In US, Title 38 Section 7332 and 42 CFR Part 2 both permit emergency access without the need to override a patient's consent directive; rather, this access is a limitation to the patient's right to dissent from disclosure.
     *
     *                         There is a semantic gap in concepts.  This classification term is described as activities â€œto inform personsâ€? rather than the rationale for performing actions/operations on information related to the activity.
     */
    readonly EmergencyRoomTreatment: Coding;
    /**
     * ESP: Description:The level of coverage under the policy or program is available to an employee and his or her spouse.
     */
    readonly EmployeeAndSpouse: Coding;
    /**
     * ETREAT: To perform one or more operations on information for provision of immediately needed health care for an emergent condition.
     */
    readonly EmergencyTreatment: Coding;
    /**
     * EXPLOT: Description: The lot from which the substance was drawn was expired.
     */
    readonly ExpiredLot: Coding;
    /**
     * FAM: Description:The level of coverage under the policy or program is available to a subscriber's family.
     */
    readonly Family: Coding;
    /**
     * FAMPHYS: Definition:Request for further authorization must be done through patient's family physician.
     */
    readonly FamilyPhysicianMustAuthorizeFurtherFills: Coding;
    /**
     * FAMRQT: To perform one or more operations on information in response to a request by a family member authorized by the patient.
     */
    readonly FamilyRequested: Coding;
    /**
     * FILLED: Ordered quantity has already been completely fulfilled.
     */
    readonly FullyFilled: Coding;
    /**
     * FIN: Patient unable to pay and not covered by insurance
     */
    readonly NoFinancialBacking: Coding;
    /**
     * FINAN: A person becomes eligible for a program based on financial criteria.
     *
     *
     *                            Example:  A person whose family income is below a financial threshold for eligibility for Medicaid or SCHIP.
     */
    readonly FinancialEligibility: Coding;
    /**
     * FIXDATA: Description:Previously recorded information was erroneous and is being corrected.
     */
    readonly ErrorCorrection: Coding;
    /**
     * FLRCNV: Accommodation is assigned for floor convenience.
     */
    readonly FloorConvenience: Coding;
    /**
     * FLRSTCK: Definition:The bulk supply is issued to replenish a ward for local dispensing.  (Includes both mobile and fixed-location ward stocks.)
     */
    readonly FloorStock: Coding;
    /**
     * FOABORT: Definition:Order to be fulfilled was aborted
     */
    readonly OrderAborted: Coding;
    /**
     * FOSUSP: Definition:Order to be fulfilled was suspended
     */
    readonly OrderSuspended: Coding;
    /**
     * FP: Indicates that the decision to substitute or to not substitute was driven by a policy expressed within the formulary.
     */
    readonly FormularyPolicy: Coding;
    /**
     * FRAUD: To perform one or more operations on information used for fraud detection and prevention processes.
     */
    readonly Fraud: Coding;
    /**
     * FRR01: Definition:The order has been stopped by the prescriber but this fact has not necessarily captured electronically.
     *
     *
     *                            Example:A verbal stop, a fax, etc.
     */
    readonly OrderStopped: Coding;
    /**
     * FRR02: Definition:Order has not been fulfilled within a reasonable amount of time, and may not be current.
     */
    readonly StaleDatedOrder: Coding;
    /**
     * FRR03: Definition:Data needed to safely act on the order which was expected to become available independent of the order is not yet available
     *
     *
     *                            Example:Lab results, diagnostic imaging, etc.
     */
    readonly IncompleteData: Coding;
    /**
     * FRR04: Definition:Product not available or manufactured. Cannot supply.
     */
    readonly ProductUnavailable: Coding;
    /**
     * FRR05: Definition:The dispenser has ethical, religious or moral objections to fulfilling the order/dispensing the product.
     */
    readonly EthicalReligious: Coding;
    /**
     * FRR06: Definition:Fulfiller not able to provide appropriate care associated with fulfilling the order.
     *
     *
     *                            Example:Therapy requires ongoing monitoring by fulfiller and fulfiller will be ending practice, leaving town, unable to schedule necessary time, etc.
     */
    readonly UnableToProvideCare: Coding;
    /**
     * GOV: To perform one or more operations on information used within government processes.
     */
    readonly Government: Coding;
    /**
     * HACCRED: To perform one or more operations on information for conducting activities related to meeting accreditation criteria.
     */
    readonly HealthAccreditation: Coding;
    /**
     * HCOMPL: To perform one or more operations on information used for conducting activities required to meet a mandate.
     */
    readonly HealthCompliance: Coding;
    /**
     * HDECD: To perform one or more operations on information used for handling deceased patient matters.
     */
    readonly Decedent: Coding;
    /**
     * HDIRECT: To perform one or more operation operations on information used to manage a patient directory.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            facility
     *                            enterprise
     *                            payer
     *                            health information exchange patient directory
     */
    readonly Directory: Coding;
    /**
     * HDM: To perform one or more actions on information used for conducting administrative and contractual activities by or on behalf of organizational entities responsible for delivery of  an individual's benefits in a healthcare program, health plan or insurance.   Explicitly excludes the use of information to organize the delivery of health care for care coordination and case management, or to provide healthcare treatment.
     *
     *
     *                            Usage Note: Examples of activities conducted under this purpose of use: provider profiling, risk adjustment, underwriting, fraud and abuse, quality improvement population health and care management. Aligns with HIPAA Operation POU minus coordination of care or other treatment related activities. Similar to the description in SAMHSA Confidentiality of Substance Use Disorder Patient Records Supplemental notice of proposed rulemaking.
     *
     *
     *                            Map: Maps to ISO 14265 Classification Term  "Administration of care for an individual subject of care" described as "To inform persons or processes responsible for enabling the availability of resources or funding or permissions for providing health care services to the subject of care."
     *
     *                         However, this classification term is described as activities, i.e., "to inform persons" or "to inform processes" rather than the rationale for performing actions/operations on information related to the activity.
     */
    readonly HealthcareDeliveryManagement: Coding;
    /**
     * HEALTH: A person becomes eligible for a program because of a qualifying health condition or injury.
     *
     *
     *                            Examples:  A person is determined to have a qualifying health conditions include pregnancy, HIV/AIDs, tuberculosis, end stage renal disease, breast or cervical cancer, or other condition requiring specialized health services, hospice, institutional or community based care provided under a program
     */
    readonly HealthStatus: Coding;
    /**
     * HLEGAL: To perform one or more operations on information for conducting activities required by legal proceeding.
     */
    readonly Legal: Coding;
    /**
     * HMARKT: To perform one or more operations on information for marketing services and products related to health care.
     */
    readonly HealthcareMarketing: Coding;
    /**
     * HOLDDONE: Definition:The original reason for suspending the medication has ended.
     */
    readonly SuspendReasonNoLongerApplies: Coding;
    /**
     * HOLDINAP: Definition:
     */
    readonly SuspendReasonInappropriate: Coding;
    /**
     * HOPERAT: To perform one or more operations on information used for conducting administrative and contractual activities related to the provision of health care.
     */
    readonly HealthcareOperations: Coding;
    /**
     * HOSPADM: Description:The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.
     */
    readonly AdmissionToHospital: Coding;
    /**
     * HOUTCOMS: To perform one or more operations on information used for assessing results and comparative effectiveness achieved by health care practices and interventions.
     */
    readonly HealthOutcomeMeasure: Coding;
    /**
     * HPAYMT: To perform one or more operations on information for conducting financial or contractual activities related to payment for provision of health care.
     */
    readonly HealthcarePayment: Coding;
    /**
     * HPRGRP: To perform one or more operations on information used for conducting activities to meet program accounting requirements.
     */
    readonly HealthProgramReporting: Coding;
    /**
     * HQUALIMP: To perform one or more operations on information used for conducting administrative activities to improve health care quality.
     */
    readonly HealthQualityImprovement: Coding;
    /**
     * HRESCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge.  Use of the data iincludes basic and applied research such as biomedical, population origin or ancestry, translational research, and disease, discipline, specialty specific healthcare research and clinical trial research.
     */
    readonly HealthcareResearch: Coding;
    /**
     * HSYSADMIN: To perform one or more operations on information to administer the electronic systems used for the delivery of health care.
     */
    readonly HealthSystemAdministration: Coding;
    /**
     * HTEST: To perform one or more operations on information that is simulated or synthetic health data used for testing system capabilities outside of a production or operational system environment.
     *
     *
     *                            Usage Note: Data marked with a HTEST security label enables an access control system to permit interfacing systems or end users provisioned with a clearance, which includes a HTEST purpose of use attribute, to test, verify, or validate that a system or application will operate in production as intended based on design specifications.
     */
    readonly TestHealthData: Coding;
    /**
     * IMMUNE: Definition:Testing has shown that the patient already has immunity to the agent targeted by the immunization.
     */
    readonly Immunity: Coding;
    /**
     * IMPROV: Definition:The patient's medical condition has nearly abated.
     */
    readonly ConditionImproved: Coding;
    /**
     * INCCOVPTY: The covered party (patient) specified with the Invoice is not correct.
     */
    readonly IncorrectCoveredPartyAsPatient: Coding;
    /**
     * INCINVOICE: The billing information, specified in the Invoice Elements, is not correct.  This could include incorrect costing for items included in the Invoice.
     */
    readonly IncorrectBilling: Coding;
    /**
     * INCPOLICY: The policy specified with the Invoice is not correct.  For example, it may belong to another Adjudicator or Covered Party.
     */
    readonly IncorrectPolicy: Coding;
    /**
     * INCPROV: The provider specified with the Invoice is not correct.
     */
    readonly IncorrectProvider: Coding;
    /**
     * IND: Description:The level of coverage under the policy or program is available to an individual.
     */
    readonly Individual: Coding;
    /**
     * INEFFECT: Description:The therapy has been found to not have the desired therapeutic benefit on the patient.
     */
    readonly Ineffective: Coding;
    /**
     * INRQSTATE: The record is already in the requested state.
     */
    readonly InRequestedState: Coding;
    /**
     * INTOL: Description:The patient has an intolerance to the medication.
     */
    readonly Intolerance: Coding;
    /**
     * Code: INVOICE
     */
    readonly INVOICE: Coding;
    /**
     * LABELING: To perform one or more operations on information to assign, persist, and manage labels to healthcare data to characterize various aspects, such as its security classification, sensitivity, compartment, integrity, and provenance; applicable privacy, consent, security, provenance, and trust policies; and handling caveats such as purpose of use, obligations, and refrain policies.
     *
     *                         Label management includes classification of target data by constructing and binding of a label set per applicable policies, security policy information file semantics, and classification guides.  Label management also includes process and procedures for subsequent revision of a label for, e.g., reclassification, downgrading classification, and declassification.
     *
     *                         Label revisions may be triggered by, e.g., expiry of classification period; changes in applicable policy, e.g., revocation of a consent directive; or changes in the governing policy domain in which the data is relocated or a copy of the data is sent.  If a label is revised, an audit log should be kept and the provenance of the label changes should be tracked.
     */
    readonly Labeling: Coding;
    /**
     * LABINT: Description:The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.
     */
    readonly LabInterferenceIssues: Coding;
    /**
     * LEGAL: Definition:To provide information as a result of a subpoena.
     */
    readonly Subpoena: Coding;
    /**
     * LOCKED: Definition:The prescription may not be reassigned from the original pharmacy.
     */
    readonly Locked: Coding;
    /**
     * LTC: Definition:The bulk supply will be administered within a long term care facility.
     */
    readonly LongTermCareUse: Coding;
    /**
     * MARKT: Description:
     */
    readonly Marketing: Coding;
    /**
     * MDATA: Information is combined into the record.
     */
    readonly MergeData: Coding;
    /**
     * MED: The medical condition of the Patient has changed
     */
    readonly MedicalStatusAltered: Coding;
    /**
     * MEDNEC: Required for medical reasons(s).
     */
    readonly MedicalNecessity: Coding;
    /**
     * MEDPREC: Definition:The patient currently has a medical condition for which the vaccine is contraindicated or for which precaution is warranted.
     */
    readonly MedicalPrecaution: Coding;
    /**
     * MEMADMIN: To perform one or more operations on information to administer health care coverage to an enrollee under a policy or program.
     */
    readonly MemberAdministration: Coding;
    /**
     * METAMGT: To perform one or more operations on information to assign, persist, and manage metadata to healthcare data to characterize various aspects used for its indexing, discovery, retrieval, and processing by systems, applications, and end users.  For example, master index identifier, media type, and location.
     */
    readonly MetadataManagement: Coding;
    /**
     * MILCDM: To perform one or more operations on information for conducting activities required by military processes, procedures, policies, or law.
     */
    readonly MilitaryCommand: Coding;
    /**
     * MILDCRG: To perform one or more operations on information for the process of releasing military personnel from their service obligations, which may include determining service merit, discharge benefits, and disability assessment.
     */
    readonly MilitaryDischarge: Coding;
    /**
     * MODIFY: Definition:Therapy has been changed and new prescription issued
     */
    readonly ModifiedPrescriptionExists: Coding;
    /**
     * MONIT: Description:Monitoring the patient while taking the medication, the decision has been made that the therapy is no longer appropriate.
     */
    readonly ResponseToMonitoring: Coding;
    /**
     * MTG: The Physician is in a meeting.  For example, he/she may request administrative time to talk to family after appointment
     */
    readonly InAnOutsideMeeting: Coding;
    /**
     * MULTI: A person becomes eligible for a program based on more than one criterion.
     *
     *
     *                            Examples:  In the U.S., a child whose familiy income meets Medicaid financial thresholds and whose age is less than 18 is eligible for the Early and Periodic Screening, Diagnostic, and Treatment program (EPSDT).  A person whose family income meets Medicaid financial thresholds and whose age is 65 years or older is eligible for Medicaid and Medicare, and are referred to as dual eligibles.
     */
    readonly MultipleCriteriaEligibility: Coding;
    /**
     * NEEDAPMT: Definition:Patient must see prescriber prior to further fills.
     */
    readonly PatientMustMakeAppointment: Coding;
    /**
     * NEWDATA: Description:New information has become available to supplement the record.
     */
    readonly NewInformation: Coding;
    /**
     * NEWSTR: Definition:The current medication will be replaced by a new strength of the same medication.
     */
    readonly NewStrength: Coding;
    /**
     * NEWTHER: Definition:A new therapy will be commenced when current supply exhausted.
     */
    readonly NewTherapy: Coding;
    /**
     * NOAGNTPERM: Description: The agent does not have permission.
     */
    readonly NoAgentPermission: Coding;
    /**
     * NOMATCH: Description: There is no match.
     */
    readonly NoMatch: Coding;
    /**
     * NON-AVAIL: Description:Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.
     */
    readonly PatientNotAvailable: Coding;
    /**
     * NOPERM: Description: There is no permission.
     */
    readonly NoPermission: Coding;
    /**
     * NOPICK: Definition:Patient did not come to get medication
     */
    readonly NotPickedUp: Coding;
    /**
     * NOPRODMTCH: Description: There is no match for the product in the master file repository.
     */
    readonly NoProductMatch: Coding;
    /**
     * NORECMTCH: Description: There is no match for the record in the database.
     */
    readonly NoRecordMatch: Coding;
    /**
     * NOREQ: Description:The underlying condition has been resolved or has evolved such that a different treatment is no longer needed.
     */
    readonly NoLongerRequiredForTreatment: Coding;
    /**
     * NOSERMTCH: Description: There is no match for the service in the master file repository.
     */
    readonly NoServiceMatch: Coding;
    /**
     * NOTAVAIL: Definition:Original prescriber is no longer available to prescribe and no other prescriber has taken responsibility for the patient.
     */
    readonly PrescriberNotAvailable: Coding;
    /**
     * NOTCOVER: Description:The product does not have (or no longer has) coverage under the patientaTMs insurance policy.
     */
    readonly NotCovered: Coding;
    /**
     * NOTPAT: Definition:Patient no longer or has never been under this prescribers care.
     */
    readonly PatientNoLongerInThisPractice: Coding;
    /**
     * NOUSERPERM: Definition:The user does not have permission
     */
    readonly NoUserPermission: Coding;
    /**
     * NOUSRPERM: Description: The user does not have permission.
     */
    readonly NoUserPermissionNOUSRPERM: Coding;
    /**
     * NOVERMTCH: Description: There is no match for the record and version.
     */
    readonly NoVersionMatch: Coding;
    /**
     * NPT: Definition:The observation or test was neither defined or scheduled in the study protocol.
     */
    readonly NonProtocol: Coding;
    /**
     * OFFICE: Definition:The bulk supply is intended for general clinician office use.
     */
    readonly OfficeUse: Coding;
    /**
     * ONHOLD: Definition:This medication is on hold.
     */
    readonly MedicationOnHold: Coding;
    /**
     * OPERAT: Description:Administrative and contractual processes required to support an activity, product, or service
     */
    readonly Operations: Coding;
    /**
     * OS: In the case of 'substitution', indicates that the substitution occurred because the ordered item was not in stock.  In the case of 'no substitution', indicates that a cheaper equivalent was not substituted because it was not in stock.
     */
    readonly OutOfStock: Coding;
    /**
     * OSTOCK: Definition:There was no supply of the product on hand to perform the service.
     */
    readonly ProductOutOfStock: Coding;
    /**
     * OUTCOMS: Description:Operational activities conducted for the purposes of assessing the results of an activity, product, or service
     */
    readonly OutcomeMeasure: Coding;
    /**
     * OUTSIDESCHED: The substance was administered outside of the recommended schedule or practice.
     */
    readonly AdministeredOutsideRecommendedScheduleOrPractice: Coding;
    /**
     * OVRER: To perform one or more operations on information to which the patient has not consented by authorized entities for treating a condition which poses an immediate threat to the patient's health and which requires immediate medical intervention.
     *
     *
     *                            Usage Notes: The patient is unable to provide consent, but the provider determines they have an urgent healthcare related reason to access the record.
     */
    readonly EmergencyTreatmentOverride: Coding;
    /**
     * OVRINCOMP: To perform one or more operations on information to which the patient has not consented because deemed incompetent to provide consent.
     *
     *
     *                            Usage Note: Maps to v2 CON-16 Subject Competence Indicator (ID) 01791 Definition: Identifies whether the subject was deemed competent to provide consent. Refer to table HL7 Table 0136 - Yes/No Indicator and CON-23 Non-Subject Consenter Reason User-defined Table 0502 - Non-Subject Consenter Reason code NC "Subject is not competent to consent".
     */
    readonly IncompetencyOverride: Coding;
    /**
     * OVRPJ: To perform one or more operations on information to which the patient declined to consent for providing health care.
     *
     *
     *                            Usage Notes: The patient, while able to give consent, has not.  However the provider believes it is in the patient's interest to access the record without patient consent.
     */
    readonly ProfessionalJudgmentOverride: Coding;
    /**
     * OVRPS: To perform one or more operations on information to which the patient has not consented for public safety reasons.
     *
     *
     *                            Usage Notes: The patient, while able to give consent, has not.  However, the provider believes that access to masked patient information is justified because of concerns related to public safety.
     */
    readonly PublicSafetyOverride: Coding;
    /**
     * OVRTPS: To perform one or more operations on information to which the patient has not consented for third party safety.
     *
     *
     *                            Usage Notes: The patient, while able to give consent, has not.  However, the provider believes that access to masked patient information is justified because of concerns related to the health and safety of one or more third parties.
     */
    readonly ThirdPartySafetyOverride: Coding;
    /**
     * PAT: The Patient requested the action
     */
    readonly PatientRequest: Coding;
    /**
     * PATADMIN: To perform one or more operations on information used for operational activities conducted to administer the delivery of health care to a patient.
     */
    readonly PatientAdministration: Coding;
    /**
     * PATCAR: Definition:To obtain records as part of patient care.
     */
    readonly PatientCare: Coding;
    /**
     * PATDEC: Definition:Patient changed their mind regarding obtaining medication
     */
    readonly PatientChangedMind: Coding;
    /**
     * PATINELIG: Definition:Patient not eligible for drug
     */
    readonly PatientNotEligible: Coding;
    /**
     * PATOBJ: Definition:The patient or their guardian objects to receiving the vaccine.
     */
    readonly PatientObjection: Coding;
    /**
     * PATREQ: Definition:Patient requests information from their profile.
     */
    readonly PatientRequestQuery: Coding;
    /**
     * PATRQT: To perform one or more operations on information in response to a patient's request.
     */
    readonly PatientRequested: Coding;
    /**
     * PATSFTY: To perform one or more operations on information in processes related to ensuring the safety of health care.
     */
    readonly PatientSafety: Coding;
    /**
     * PAYMT: Description:Administrative, financial, and contractual processes related to payment for an activity, product, or service
     */
    readonly Payment: Coding;
    /**
     * PERFMSR: To perform one or more operations on information used for monitoring performance of recommended health care practices and interventions.
     */
    readonly PerformanceMeasure: Coding;
    /**
     * PHARM: Definition:The bulk supply is being transferred to another dispensing facility to.
     *
     *
     *                            Example:Alleviate a temporary shortage.
     */
    readonly PharmacyTransfer: Coding;
    /**
     * PHILISOP: Definition:The patient or their guardian objects to receiving the vaccine because of philosophical beliefs.
     */
    readonly PhilosophicalObjection: Coding;
    /**
     * PHY: The Physician requested the action
     */
    readonly PhysicianRequest: Coding;
    /**
     * PNC: A person becomes a claimant under a property and casualty insurance policy because of a related health condition or injury resulting from a circumstance covered under the terms of the policy.
     *
     *
     *                            Example:  A person is a claimant under a homeowners insurance policy because of an injury sustained on the policyholderaTMs premises.
     */
    readonly PropertyAndCasualtyCondition: Coding;
    /**
     * POARCH: To perform one or more operations on information, including genealogical pedigrees, historical records, surveys, family health data, health records, and genetic information, for conducting scientific investigations to obtain health care knowledge. Use of the data must be related to population origins and/or ancestry healthcare research.  For example, gathering genetic specimens from a specific population in order to determine the ancestry and population origins of that group. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    readonly PopulationOriginsOrAncestryHealthcareResearch: Coding;
    /**
     * POPHLTH: To perform one or more operations on information for provision of health care to a population of living subjects, e.g., needle exchange program.
     */
    readonly PopulationHealth: Coding;
    /**
     * PPT: Definition:The observation or test occurred due to it being defined in the research protocol, and during an activity or event that was scheduled in the protocol.
     */
    readonly PerProtocol: Coding;
    /**
     * PRCREV: Definition:To evaluate the provider's current practice for professional-improvement reasons.
     */
    readonly PracticeReview: Coding;
    /**
     * PRECLINTRCH: To perform one or more operations on information in preparation for conducting scientific investigation to obtain health care knowledge, such as research on animals or review of patient health records, to determine the feasibility of a clinical trial study; assist with protocol design; or in preparation for institutional review board or ethics committee approval process.  May be post-coordinated or used with other purposes of use such as disease, discipline, specialty, population origins or ancestry, translational healthcare research.
     */
    readonly PreclinicalTrialResearch: Coding;
    /**
     * PREFUS: Description:The patient refused to take the product.
     */
    readonly PatientRefuse: Coding;
    /**
     * PREG: Description:The patient is pregnant or breast feeding.  The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.
     */
    readonly ParentIsPregnantBreastFeeding: Coding;
    /**
     * PRGRPT: Description:Operational activities conducted to meet program accounting requirements related to an activity, product, or service
     */
    readonly ProgramReporting: Coding;
    /**
     * PRNA: Description:This product is not available or manufactured.
     */
    readonly ProductNotAvailable: Coding;
    /**
     * Code: PROA
     */
    readonly PROA: Coding;
    /**
     * PRODRECALL: Description: The substance was recalled by the manufacturer.
     */
    readonly ProductRecall: Coding;
    /**
     * PROG: Definition:The bulk supply is intended for dispensing according to a specific program.
     *
     *
     *                            Example:Mass immunization.
     */
    readonly ProgramUse: Coding;
    /**
     * PROTUNMET: Definition:Patient does not meet required protocol
     */
    readonly ProtocolNotMet: Coding;
    /**
     * PROVUNAUTH: Definition:Provider is not authorized to prescribe or dispense
     */
    readonly ProviderNotAuthorized: Coding;
    /**
     * PUBHLTH: To perform one or more operations on information for conducting public health activities, such as the reporting of notifiable conditions.
     */
    readonly PublicHealth: Coding;
    /**
     * PurposeOfUse: Reason for performing one or more operations on information, which may be permitted by source system's security policy in accordance with one or more privacy policies and consent directives.
     *
     *
     *                            Usage Notes: The rationale or purpose for an act relating to the management of personal health information, such as collecting personal health information for research or public health purposes.
     */
    readonly PurposeOfUse: Coding;
    /**
     * PWATRNY: To perform one or more operations on information in response to a request by a person appointed as the patient's legal representative.
     */
    readonly PowerOfAttorney: Coding;
    /**
     * QUALIMP: Description:Operational activities conducted for the purposes of improving the quality of an activity, product, or service
     */
    readonly QualityImprovement: Coding;
    /**
     * QUANTCHG: Definition:Patient requested a revised quantity of medication
     */
    readonly ChangeSupplyQuantity: Coding;
    /**
     * RECALL: Description:The manufacturer or other agency has requested that stocks of a medication be removed from circulation.
     */
    readonly ProductRecalled: Coding;
    /**
     * RECORDMGT: To perform one or more operations on information used within the health records management process.
     */
    readonly RecordsManagement: Coding;
    /**
     * Code: RECOV
     */
    readonly RECOV: Coding;
    /**
     * REGERR: Client was registered in error.
     */
    readonly RegisteredInError: Coding;
    /**
     * REGUL: Description:Review for the purpose of regulatory compliance.
     */
    readonly RegulatoryReview: Coding;
    /**
     * RELIG: Definition:The patient or their guardian objects to receiving the vaccine on religious grounds.
     */
    readonly ReligiousObjection: Coding;
    /**
     * REMITADV: To perform one or more operations on information about the amount remitted for a health care claim.
     */
    readonly RemittanceAdvice: Coding;
    /**
     * REPLACE: Description:Item in current order is no longer in use as requested and a new one has/will be created to replace it.
     */
    readonly ChangeInOrder: Coding;
    /**
     * REPLACEFIX: Description:Current order was issued with incorrect data and a new order has/will be created to replace it.
     */
    readonly ErrorInOrder: Coding;
    /**
     * RESCH: Description:Investigative activities conducted for the purposes of obtaining knowledge
     */
    readonly Research: Coding;
    /**
     * RET: Definition:The event occurred so that a test or observation performed at a prior event could be performed again due to conditions set forth in the protocol.
     */
    readonly Retest: Coding;
    /**
     * Code: RETRO
     */
    readonly RETRO: Coding;
    /**
     * RQ: Moved at the request of the patient.
     */
    readonly Request: Coding;
    /**
     * RR: Indicates that the decision to substitute or to not substitute was driven by a jurisdictional regulatory requirement mandating or prohibiting substitution.
     */
    readonly RegulatoryRequirement: Coding;
    /**
     * RSRCH: Definition:To provide research data, as authorized by the patient.
     */
    readonly ResearchRSRCH: Coding;
    /**
     * SALG: Description:The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    readonly Allergy: Coding;
    /**
     * SCH: Definition:The event occurred due to it being scheduled in the research protocol.
     */
    readonly Scheduled: Coding;
    /**
     * SDDI: Description:The drug interacts with a short-term treatment that is more urgently required.  This order will be resumed when the short-term treatment is complete.
     */
    readonly DrugInteractsWithAnotherDrug: Coding;
    /**
     * SDUPTHER: Description:Another short-term co-occurring therapy fulfills the same purpose as this therapy.  This therapy will be resumed when the co-occuring therapy is complete.
     */
    readonly DuplicateTherapy: Coding;
    /**
     * SINTOL: Description:The patient is believed to have an intolerance to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    readonly SuspectedIntolerance: Coding;
    /**
     * SPC: Description:The level of coverage under the policy or program is available to a subscriber's spouse and children
     */
    readonly SpouseAndChildren: Coding;
    /**
     * SPO: Description:The level of coverage under the policy or program is available only to a subscribers spouse
     */
    readonly SpouseOnly: Coding;
    /**
     * SRVC: Description:Provision of a service, product, or capability to an individual or organization
     */
    readonly Service: Coding;
    /**
     * STATUTORY: A person becomes eligible for a program based on statutory criteria.
     *
     *
     *                            Examples:  A person is a member of an indigenous group, a veteran of military service, or  in the U.S., a recipient of adoption assistance and foster care under Title IV-E of the Social Security.
     */
    readonly StatutoryEligibility: Coding;
    /**
     * STOPMED: Renewing or original prescriber informed patient to stop using the medication.
     */
    readonly PrescriberStoppedMedicationForPatient: Coding;
    /**
     * SUPNWK: To perform one or more operations on information in response to a request by a person authorized by the patient.
     */
    readonly SupportNetwork: Coding;
    /**
     * SURG: Description:The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future.  The drug will be resumed when the patient has sufficiently recovered from the surgery.
     */
    readonly PatientScheduledForSurgery: Coding;
    /**
     * SYSADMN: Description:Operational activities conducted to administer the electronic systems used for an activity, product, or service
     */
    readonly SystemAdministration: Coding;
    /**
     * SYSDEV: To perform one or more operations on information to design, develop, implement, test, or deploy a healthcare system or application.
     */
    readonly SystemDevelopment: Coding;
    /**
     * THERCHAR: The prescribed product has specific clinical release or other therapeutic characteristics not shared by other substitutable medications.
     */
    readonly TherapeuticCharacteristics: Coding;
    /**
     * THREAT: To perform one or more operations on information used to prevent injury or disease to living subjects who may be the target of violence.
     */
    readonly Threat: Coding;
    /**
     * TOOEARLY: Definition:The patient should have medication remaining.
     */
    readonly TooEarly: Coding;
    /**
     * TRAIN: To perform one or more operations on information used in training and education.
     */
    readonly Training: Coding;
    /**
     * Code: TRAN
     */
    readonly TRAN: Coding;
    /**
     * TRANSRCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge related to evidence based medicine during the course of providing healthcare treatment.  Sometimes referred to as "bench to bedside", which is the iterative feedback loop between healthcare research and clinical trials with input from information collected in the course of routine provision of healthcare. For example, by extending a patient encounter to conduct a survey related to a research topic such as attitudes about use of a wellness device that a patient agreed to use. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    readonly TranslationalHealthcareResearch: Coding;
    /**
     * TREAT: To perform one or more operations on information for provision of health care.
     */
    readonly Treatment: Coding;
    /**
     * TRIAL: Definition: The specific manufactured drug is part of a clinical trial.
     */
    readonly ClinicalTrialDrug: Coding;
    /**
     * TRM: Definition:The event occurred in order to terminate the subject's participation in the study.
     */
    readonly Termination: Coding;
    /**
     * UMDATA: Information is separated from the record.
     */
    readonly UnmergeData: Coding;
    /**
     * UNABLE: Description:&lt;The patient is not (or is no longer) able to use the medication in a manner prescribed.
     *
     *
     *                            Example:CanaTMt swallow.
     */
    readonly UnableToUse: Coding;
    /**
     * UNKWNTARGET: Definition:The target facility does not recognize the dispensing facility.
     */
    readonly UnknownTarget: Coding;
    /**
     * UNS: Definition:The event that occurred was initiated by a study participant (e.g. the subject or the investigator), and did not occur for protocol reasons.
     */
    readonly Unscheduled: Coding;
    /**
     * UPT: :The observation or test occurred as defined in the research protocol, but at a point in time not specified in the study protocol.
     */
    readonly PerDefinition: Coding;
    /**
     * VACEFF: Definition:The intended vaccine has expired or is otherwise believed to no longer be effective.
     *
     *
     *                            Example:Due to temperature exposure.
     */
    readonly VaccineEfficacyConcerns: Coding;
    /**
     * VACSAF: Definition:The patient or their guardian objects to receiving the vaccine because of concerns over its safety.
     */
    readonly VaccineSafetyConcerns: Coding;
    /**
     * VALIDATION: Description:To validate the patient's record.
     *
     *
     *                            Example:Merging or unmerging records.
     */
    readonly ValidationReview: Coding;
    /**
     * VEHIC: A person becomes a claimant under a motor vehicle accident insurance because of a motor vehicle accident related health condition or injury.
     */
    readonly MotorVehicleAccidentVictim: Coding;
    /**
     * WASHOUT: Description:The patient was previously receiving a medication contraindicated with the current medication.  The current medication will remain on hold until the prior medication has been cleansed from their system.
     */
    readonly WaitingForOldDrugToWashOut: Coding;
    /**
     * WORK: A person becomes eligible for insurance or a program because of a work related health condition or injury.
     *
     *
     *                            Example:  A person is a claimant under the U.S. Black Lung Program.
     */
    readonly WorkRelated: Coding;
    /**
     * WRNGVER: Description: The record and version requested to update is not the current version.
     */
    readonly WrongVersion: Coding;
};
/**
 *  A set of codes specifying the motivation, cause, or rationale of an Act, when such rationale is not reasonably represented as an ActRelationship of type "has reason" linking to another Act.  Examples:
 * Example reasons that might qualify for being coded in this field might be: "routine requirement", "infectious disease reporting requirement", "on patient request", "required by law".
 */
export declare type V3ActReasonCodingType = typeof V3ActReasonCodings;
//# sourceMappingURL=V3ActReasonCodings.d.ts.map