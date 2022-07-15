import { CodingArgs } from '../fhir/Coding.js';
/**
 *  A set of codes specifying the motivation, cause, or rationale of an Act, when such rationale is not reasonably represented as an ActRelationship of type "has reason" linking to another Act.  Examples:
 * Example reasons that might qualify for being coded in this field might be: "routine requirement", "infectious disease reporting requirement", "on patient request", "required by law".
 */
export declare type V3ActReasonCodingType = {
    /**
     * _ActAccommodationReason: Identifies the reason the patient is assigned to this accommodation type
     */
    ActAccommodationReason: CodingArgs;
    /**
     * _ActBillableClinicalServiceReason: Reason for Clinical Service being performed.
     *
     *                         This domain excludes reasons specified by diagnosed conditions.
     *
     *                         Examples of values from this domain include duplicate therapy and fraudulent prescription.
     */
    ActBillableClinicalServiceReason: CodingArgs;
    /**
     * _ActBillableServiceReason: Definition: This domain is used to document reasons for providing a billable service; the billable services may include both clinical services and social services.
     */
    ActBillableServiceReason: CodingArgs;
    /**
     * _ActConsentInformationAccessOverrideReason: To perform one or more operations on information to which the patient has not consented as deemed necessary by authorized entities for providing care in the best interest of the patient; providing immediately needed health care for an emergent condition;  or for protecting public or third party safety.
     *
     *
     *                            Usage Notes: Used to convey the reason that a provider or other entity may or has accessed personal healthcare information.  Typically, this involves overriding the subject's consent directives.
     */
    ActConsentInformationAccessOverrideReason: CodingArgs;
    /**
     * _ActCoverageReason: Description:Codes used to specify reasons or criteria relating to coverage provided under a policy or program.  May be used to convey reasons pertaining to coverage contractual provisions, including criteria for eligibility, coverage limitations, coverage maximums, or financial participation required of covered parties.
     */
    ActCoverageReason: CodingArgs;
    /**
     * _ActHealthInformationManagementReason: Description:The rationale or purpose for an act relating to health information management, such as archiving information for the purpose of complying with an organization policy or jurisdictional law relating to  data retention.
     */
    ActHealthInformationManagementReason: CodingArgs;
    /**
     * _ActIneligibilityReason: Identifies the reason or rational for why a person is not eligibile for benefits under an insurance policy.
     *
     *                         Examples are client deceased &amp; adopted client has been given a new policy identifier.
     */
    ActIneligibilityReason: CodingArgs;
    /**
     * _ActInformationManagementReason: Description:The rationale or purpose for an act relating to information management, such as archiving information for the purpose of complying with an enterprise data retention policy.
     */
    ActInformationManagementReason: CodingArgs;
    /**
     * _ActInformationPrivacyReason: Description:The rationale or purpose for an act relating to the management of personal information, such as disclosing personal tax information for the purpose of complying with a court order.
     */
    ActInformationPrivacyReason: CodingArgs;
    /**
     * _ActInvalidReason: Description: Types of reasons why a substance is invalid for use.
     */
    ActInvalidReason: CodingArgs;
    /**
     * _ActInvoiceCancelReason: Domain specifies the codes used to describe reasons why a Provider is cancelling an Invoice or Invoice Grouping.
     */
    ActInvoiceCancelReason: CodingArgs;
    /**
     * _ActNoImmunizationReason: A coded description of the reason for why a patient did not receive a scheduled immunization.
     *
     *                         (important for public health strategy
     */
    ActNoImmunizationReason: CodingArgs;
    /**
     * _ActSupplyFulfillmentRefusalReason: Indicates why a fulfiller refused to fulfill a supply order, and considered it important to notify other providers of their decision.  E.g. "Suspect fraud", "Possible abuse", "Contraindicated".
     *
     *                         (used when capturing 'refusal to fill' annotations)
     */
    ActSupplyFulfillmentRefusalReason: CodingArgs;
    /**
     * _ClinicalResearchEventReason: Definition:Specifies the reason that an event occurred in a clinical research study.
     */
    ClinicalResearchEventReason: CodingArgs;
    /**
     * _ClinicalResearchObservationReason: Definition:SSpecifies the reason that a test was performed or observation collected in a clinical research study.
     *
     *
     *                            Note:This set of codes are not strictly reasons, but are used in the currently Normative standard.  Future revisions of the specification will model these as ActRelationships and thes codes may subsequently be retired.  Thus, these codes should not be used for new specifications.
     */
    ClinicalResearchObservationReason: CodingArgs;
    /**
     * _CombinedPharmacyOrderSuspendReasonCode: Description:Indicates why the prescription should be suspended.
     */
    CombinedPharmacyOrderSuspendReasonCode: CodingArgs;
    /**
     * _ControlActNullificationReasonCode: Description:Identifies reasons for nullifying (retracting) a particular control act.
     */
    ControlActNullificationReasonCode: CodingArgs;
    /**
     * _ControlActNullificationRefusalReasonType: Description: Reasons to refuse a transaction to be undone.
     */
    ControlActNullificationRefusalReasonType: CodingArgs;
    /**
     * _ControlActReason: Identifies why a specific query, request, or other trigger event occurred.
     */
    ControlActReason: CodingArgs;
    /**
     * _CoverageEligibilityReason: Definition: Identifies the reason or rational for why a person is eligibile for benefits under an insurance policy or progam.
     *
     *
     *                            Examples:  A person is a claimant under an automobile insurance policy are client deceased &amp; adopted client has been given a new policy identifier.  A new employee is eligible for health insurance as an employment benefit.  A person meets a government program eligibility criteria for financial, age or health status.
     */
    CoverageEligibilityReason: CodingArgs;
    /**
     * _EligibilityActReasonCode: Identifies the reason or rational for why a person is eligibile for benefits under an insurance policy or progam.
     *
     *
     *                            Examples:  A person is a claimant under an automobile insurance policy are client deceased &amp; adopted client has been given a new policy identifier.  A new employee is eligible for health insurance as an employment benefit.  A person meets a government program eligibility criteria for financial, age or health status.
     */
    EligibilityActReasonCode: CodingArgs;
    /**
     * _GenericUpdateReasonCode: Description:Identifies why a change is being made to a  record.
     */
    GenericUpdateReasonCode: CodingArgs;
    /**
     * _MedicationOrderAbortReasonCode: Description:Indicates the reason the medication order should be aborted.
     */
    MedicationOrderAbortReason: CodingArgs;
    /**
     * _MedicationOrderReleaseReasonCode: Definition:A collection of concepts that indicate why the prescription should be released from suspended state.
     */
    MedicationOrderReleaseReason: CodingArgs;
    /**
     * _ModifyPrescriptionReasonType: Types of reason why a prescription is being changed.
     */
    ModifyPrescriptionReasonType: CodingArgs;
    /**
     * _PatientProfileQueryReasonCode: Definition:A collection of concepts identifying why the patient's profile is being queried.
     */
    PatientProfileQueryReason: CodingArgs;
    /**
     * _PharmacySupplyEventAbortReason: Definition:Identifies why the dispense event was not completed.
     */
    PharmacySupplyEventAbortReason: CodingArgs;
    /**
     * _PharmacySupplyEventStockReasonCode: Definition:A collection of concepts that indicates the reason for a "bulk supply" of medication.
     */
    PharmacySupplyEventStockReason: CodingArgs;
    /**
     * _PharmacySupplyRequestFulfillerRevisionRefusalReasonCode: Definition:Indicates why the request to transfer a prescription from one dispensing facility to another has been refused.
     */
    PharmacySupplyRequestFulfillerRevisionRefusalReasonCode: CodingArgs;
    /**
     * _PharmacySupplyRequestRenewalRefusalReasonCode: Definition:A collection of concepts that identifies why a renewal prescription has been refused.
     */
    PharmacySupplyRequestRenewalRefusalReason: CodingArgs;
    /**
     * _RefusalReasonCode: Description: Identifies why a request to add (or activate) a record is being refused.  Examples include the receiving system not able to match the identifier and find that record in the receiving system, having no permission, or a detected issue exists which precludes the requested action.
     */
    RefusalReasonCode: CodingArgs;
    /**
     * _SchedulingActReason: Reasons for cancelling or rescheduling an Appointment
     */
    SchedulingActReason: CodingArgs;
    /**
     * _StatusRevisionRefusalReasonCode: Indicates why the act revision (status update) is being refused.
     */
    StatusRevisionRefusalReasonCode: CodingArgs;
    /**
     * _SubstanceAdministrationPermissionRefusalReasonCode: Definition:Indicates why the requested authorization to prescribe or dispense a medication has been refused.
     */
    SubstanceAdministrationPermissionRefusalReasonCode: CodingArgs;
    /**
     * _SubstanceAdminSubstitutionNotAllowedReason: Reasons why substitution of a substance administration request is not permitted.
     */
    SubstanceAdminSubstitutionNotAllowedReason: CodingArgs;
    /**
     * _SubstanceAdminSubstitutionReason: SubstanceAdminSubstitutionReason
     */
    SubstanceAdminSubstitutionReason: CodingArgs;
    /**
     * _SupplyOrderAbortReasonCode: Definition:A collection of concepts that indicates why the prescription should no longer be allowed to be dispensed (but can still administer what is already being dispensed).
     */
    SupplyOrderAbortReason: CodingArgs;
    /**
     * _TransferActReason: The explanation for why a patient is moved from one location to another within the organization
     */
    TransferActReason: CodingArgs;
    /**
     * ACCRED: Description:Operational activities conducted for the purposes of meeting of criteria defined by an accrediting entity for an activity, product, or service
     */
    Accreditation: CodingArgs;
    /**
     * ACCREQNA: Accommodation requested is not available.
     */
    AccommodationRequestedNotAvailable: CodingArgs;
    /**
     * ADMINERROR: Order was created with incorrect data and is changed to reflect the intended accuracy of the order.
     */
    AdministrativeErrorInOrder: CodingArgs;
    /**
     * ADMREV: Definition: To evaluate for service authorization, payment, reporting, or performance/outcome measures.
     */
    AdministrativeReview: CodingArgs;
    /**
     * ADVSTORAGE: Description: Storage conditions caused the substance to be ineffective.
     */
    AdverseStorageCondition: CodingArgs;
    /**
     * AGE: A person becomes eligible for a program based on age.
     *
     *
     *                            Example:  In the U.S., a person who is 65 years of age or older is eligible for Medicare.
     */
    AgeEligibility: CodingArgs;
    /**
     * ALGINT: Definition: Patient has had a prior allergic intolerance response to alternate product or one of its components.
     */
    AllergyIntolerance: CodingArgs;
    /**
     * ALREADYRX: Definition:Patient has already been given a new (renewal) prescription.
     */
    NewPrescriptionExists: CodingArgs;
    /**
     * ALTCHOICE: Description:This therapy has been ordered as a backup to a preferred therapy.  This order will be released when and if the preferred therapy is unsuccessful.
     */
    TryAnotherTreatmentFirst: CodingArgs;
    /**
     * ALTD: Description:The decision on which the recorded information was based was changed before the decision had an effect.
     *
     *
     *                            Example:Aborted prescription before patient left office, released prescription before suspend took effect.
     */
    AlteredDecision: CodingArgs;
    /**
     * BLK: The time slots previously allocated are now blocked and no longer available for booking Appointments
     */
    UnexpectedBlockOfSchedule: CodingArgs;
    /**
     * Code: BONUS
     */
    BONUS: CodingArgs;
    /**
     * CAREMGT: To perform one or more operations on information for provision of health care coordination.
     */
    CareManagement: CodingArgs;
    /**
     * CHD: Description:The level of coverage under the policy or program is available only to children
     */
    ChildrenOnly: CodingArgs;
    /**
     * CHGDATA: Description:Information has changed since the record was created.
     */
    InformationChange: CodingArgs;
    /**
     * CLARIF: Description:Clarification is required before the order can be acted upon.
     */
    PrescriptionRequiresClarification: CodingArgs;
    /**
     * CLINMOD: Order is changed based on a clinical reason.
     */
    ClinicalModification: CodingArgs;
    /**
     * CLINTRCH: To perform one or more operations on information for conducting scientific investigations in accordance with clinical trial protocols to obtain health care knowledge.
     */
    ClinicalTrialResearch: CodingArgs;
    /**
     * CLINTRL: To perform health care as part of the clinical trial protocol.
     */
    ClinicalTrial: CodingArgs;
    /**
     * CLMATTCH: To perform one or more operations on information for provision of additional clinical evidence in support of a request for coverage or payment for health services.
     */
    ClaimAttachment: CodingArgs;
    /**
     * COLDCHNBRK: Description: Cold chain was not maintained for the substance.
     */
    ColdChainBreak: CodingArgs;
    /**
     * COMPCON: Definition: Patient has compliance issues with medication such as differing appearance, flavor, size, shape or consistency.
     */
    ComplianceConcern: CodingArgs;
    /**
     * COMPL: Description:Operational activities required to meet a mandate related to an activity, product, or service
     */
    Compliance: CodingArgs;
    /**
     * CONTRA: Definition:Contraindication identified
     */
    Contraindication: CodingArgs;
    /**
     * COVAUTH: To perform one or more operations on information for conducting prior authorization or predetermination of coverage for services.
     */
    CoverageAuthorization: CodingArgs;
    /**
     * COVERAGE: To perform one or more operations on information for conducting activities related to coverage under a program or policy.
     */
    CoverageUnderPolicyOrProgram: CodingArgs;
    /**
     * COVSUS: When a client has no contact with the health system for an extended period, coverage is suspended.  Client will be reinstated to original start date upon proof of identification, residency etc.
     *
     *                         Example: Coverage may be suspended during a strike situation, when employer benefits for employees are not covered (i.e. not in effect).
     */
    CoverageSuspended: CodingArgs;
    /**
     * CRIME: A person becomes eligible for insurance or a program because of crime related health condition or injury.
     *
     *
     *                            Example:  A person is a claimant under the U.S. Crime Victims Compensation program.
     */
    CrimeVictim: CodingArgs;
    /**
     * CT: Indicates that the decision to substitute or to not substitute was driven by a desire to maintain consistency with a pre-existing therapy.  I.e. The performer provided the same item/service as had been previously provided rather than providing exactly what was ordered, or rather than substituting with a lower-cost equivalent.
     */
    ContinuingTherapy: CodingArgs;
    /**
     * DEC: The Patient is deceased
     */
    PatientDeceased: CodingArgs;
    /**
     * DECSD: Client deceased.
     */
    Deceased: CodingArgs;
    /**
     * DEP: Description:The level of coverage under the policy or program is available only to a subscriber's dependents.
     */
    DependentsOnly: CodingArgs;
    /**
     * DIS: A person becomes a claimant under a disability income insurance policy or a disability rehabilitation program because of a health condition or injury which limits the person's ability to earn an income or function without institutionalization.
     */
    Disability: CodingArgs;
    /**
     * DISASTER: To perform one or more operations on information used for provision of immediately needed health care to a population of living subjects located in a disaster zone.
     */
    Disaster: CodingArgs;
    /**
     * DISCONT: Description:The medication is no longer being manufactured or is otherwise no longer available.
     */
    ProductDiscontinued: CodingArgs;
    /**
     * DONAT: To perform one or more operations on information used for cadaveric organ, eye or tissue donation.
     */
    Donation: CodingArgs;
    /**
     * DOSECHG: Description:The medication is being re-prescribed at a different dosage.
     */
    ChangeInMedicationDose: CodingArgs;
    /**
     * DRUGHIGH: Description:The current level of the medication in the patient's system is too high.  The medication is suspended to allow the level to subside to a safer level.
     */
    DrugLevelTooHigh: CodingArgs;
    /**
     * ECH: Description:The level of coverage under the policy or program is available to an employee and his or her children.
     */
    EmployeeAndChildren: CodingArgs;
    /**
     * Code: EDU
     */
    EDU: CodingArgs;
    /**
     * EIE: Description:The information was recorded incorrectly or was recorded in the wrong record.
     */
    EnteredInError: CodingArgs;
    /**
     * ELIGDTRM: To perform one or more operations on information used for conducting eligibility determination for coverage in a program or policy.  May entail review of financial status or disability assessment.
     */
    EligibilityDetermination: CodingArgs;
    /**
     * ELIGVER: To perform one or more operations on information used for conducting eligibility verification of coverage in a program or policy.  May entail provider contacting coverage source (e.g., government health program such as workers compensation or health plan) for confirmation of enrollment, eligibility for specific services, and any applicable copays.
     */
    EligibilityVerification: CodingArgs;
    /**
     * EMP: Description:The level of coverage under the policy or program is available only to an employee.
     */
    EmployeeOnly: CodingArgs;
    /**
     * EMPLOY: A person becomes eligible for insurance provided as an employment benefit based on employment status.
     */
    EmploymentBenefit: CodingArgs;
    /**
     * ENADMIN: Description:Operational activities conducted to administer information relating to entities involves with an activity, product, or service
     */
    EntityAdministration: CodingArgs;
    /**
     * ENROLLM: To perform one or more operations on information used for enrolling a covered party in a program or policy.  May entail recording of covered party's and any dependent's demographic information and benefit choices.
     */
    Enrollment: CodingArgs;
    /**
     * ER: Moved to an error in placing the patient in the original location.
     */
    Error: CodingArgs;
    /**
     * ESP: Description:The level of coverage under the policy or program is available to an employee and his or her spouse.
     */
    EmployeeAndSpouse: CodingArgs;
    /**
     * ETREAT: To perform one or more operations on information for provision of immediately needed health care for an emergent condition.
     */
    EmergencyTreatment: CodingArgs;
    /**
     * EXPLOT: Description: The lot from which the substance was drawn was expired.
     */
    ExpiredLot: CodingArgs;
    /**
     * FAM: Description:The level of coverage under the policy or program is available to a subscriber's family.
     */
    Family: CodingArgs;
    /**
     * FAMPHYS: Definition:Request for further authorization must be done through patient's family physician.
     */
    FamilyPhysicianMustAuthorizeFurtherFills: CodingArgs;
    /**
     * FAMRQT: To perform one or more operations on information in response to a request by a family member authorized by the patient.
     */
    FamilyRequested: CodingArgs;
    /**
     * FILLED: Ordered quantity has already been completely fulfilled.
     */
    FullyFilled: CodingArgs;
    /**
     * FIN: Patient unable to pay and not covered by insurance
     */
    NoFinancialBacking: CodingArgs;
    /**
     * FINAN: A person becomes eligible for a program based on financial criteria.
     *
     *
     *                            Example:  A person whose family income is below a financial threshold for eligibility for Medicaid or SCHIP.
     */
    FinancialEligibility: CodingArgs;
    /**
     * FIXDATA: Description:Previously recorded information was erroneous and is being corrected.
     */
    ErrorCorrection: CodingArgs;
    /**
     * FLRCNV: Accommodation is assigned for floor convenience.
     */
    FloorConvenience: CodingArgs;
    /**
     * FLRSTCK: Definition:The bulk supply is issued to replenish a ward for local dispensing.  (Includes both mobile and fixed-location ward stocks.)
     */
    FloorStock: CodingArgs;
    /**
     * FOABORT: Definition:Order to be fulfilled was aborted
     */
    OrderAborted: CodingArgs;
    /**
     * FOSUSP: Definition:Order to be fulfilled was suspended
     */
    OrderSuspended: CodingArgs;
    /**
     * FP: Indicates that the decision to substitute or to not substitute was driven by a policy expressed within the formulary.
     */
    FormularyPolicy: CodingArgs;
    /**
     * FRAUD: To perform one or more operations on information used for fraud detection and prevention processes.
     */
    Fraud: CodingArgs;
    /**
     * FRR01: Definition:The order has been stopped by the prescriber but this fact has not necessarily captured electronically.
     *
     *
     *                            Example:A verbal stop, a fax, etc.
     */
    OrderStopped: CodingArgs;
    /**
     * FRR02: Definition:Order has not been fulfilled within a reasonable amount of time, and may not be current.
     */
    StaleDatedOrder: CodingArgs;
    /**
     * FRR03: Definition:Data needed to safely act on the order which was expected to become available independent of the order is not yet available
     *
     *
     *                            Example:Lab results, diagnostic imaging, etc.
     */
    IncompleteData: CodingArgs;
    /**
     * FRR04: Definition:Product not available or manufactured. Cannot supply.
     */
    ProductUnavailable: CodingArgs;
    /**
     * FRR05: Definition:The dispenser has ethical, religious or moral objections to fulfilling the order/dispensing the product.
     */
    EthicalReligious: CodingArgs;
    /**
     * FRR06: Definition:Fulfiller not able to provide appropriate care associated with fulfilling the order.
     *
     *
     *                            Example:Therapy requires ongoing monitoring by fulfiller and fulfiller will be ending practice, leaving town, unable to schedule necessary time, etc.
     */
    UnableToProvideCare: CodingArgs;
    /**
     * GOV: To perform one or more operations on information used within government processes.
     */
    Government: CodingArgs;
    /**
     * HACCRED: To perform one or more operations on information for conducting activities related to meeting accreditation criteria.
     */
    HealthAccreditation: CodingArgs;
    /**
     * HCOMPL: To perform one or more operations on information used for conducting activities required to meet a mandate.
     */
    HealthCompliance: CodingArgs;
    /**
     * HDECD: To perform one or more operations on information used for handling deceased patient matters.
     */
    Decedent: CodingArgs;
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
    Directory: CodingArgs;
    /**
     * HEALTH: A person becomes eligible for a program because of a qualifying health condition or injury.
     *
     *
     *                            Examples:  A person is determined to have a qualifying health conditions include pregnancy, HIV/AIDs, tuberculosis, end stage renal disease, breast or cervical cancer, or other condition requiring specialized health services, hospice, institutional or community based care provided under a program
     */
    HealthStatus: CodingArgs;
    /**
     * HLEGAL: To perform one or more operations on information for conducting activities required by legal proceeding.
     */
    Legal: CodingArgs;
    /**
     * HMARKT: To perform one or more operations on information for marketing services and products related to health care.
     */
    HealthcareMarketing: CodingArgs;
    /**
     * HOLDDONE: Definition:The original reason for suspending the medication has ended.
     */
    SuspendReasonNoLongerApplies: CodingArgs;
    /**
     * HOLDINAP: Definition:
     */
    SuspendReasonInappropriate: CodingArgs;
    /**
     * HOPERAT: To perform one or more operations on information used for conducting administrative and contractual activities related to the provision of health care.
     */
    HealthcareOperations: CodingArgs;
    /**
     * HOSPADM: Description:The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.
     */
    AdmissionToHospital: CodingArgs;
    /**
     * HOUTCOMS: To perform one or more operations on information used for assessing results and comparative effectiveness achieved by health care practices and interventions.
     */
    HealthOutcomeMeasure: CodingArgs;
    /**
     * HPAYMT: To perform one or more operations on information for conducting financial or contractual activities related to payment for provision of health care.
     */
    HealthcarePayment: CodingArgs;
    /**
     * HPRGRP: To perform one or more operations on information used for conducting activities to meet program accounting requirements.
     */
    HealthProgramReporting: CodingArgs;
    /**
     * HQUALIMP: To perform one or more operations on information used for conducting administrative activities to improve health care quality.
     */
    HealthQualityImprovement: CodingArgs;
    /**
     * HRESCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge.
     */
    HealthcareResearch: CodingArgs;
    /**
     * HSYSADMIN: To perform one or more operations on information to administer the electronic systems used for the delivery of health care.
     */
    HealthSystemAdministration: CodingArgs;
    /**
     * IMMUNE: Definition:Testing has shown that the patient already has immunity to the agent targeted by the immunization.
     */
    Immunity: CodingArgs;
    /**
     * IMPROV: Definition:The patient's medical condition has nearly abated.
     */
    ConditionImproved: CodingArgs;
    /**
     * INCCOVPTY: The covered party (patient) specified with the Invoice is not correct.
     */
    IncorrectCoveredPartyAsPatient: CodingArgs;
    /**
     * INCINVOICE: The billing information, specified in the Invoice Elements, is not correct.  This could include incorrect costing for items included in the Invoice.
     */
    IncorrectBilling: CodingArgs;
    /**
     * INCPOLICY: The policy specified with the Invoice is not correct.  For example, it may belong to another Adjudicator or Covered Party.
     */
    IncorrectPolicy: CodingArgs;
    /**
     * INCPROV: The provider specified with the Invoice is not correct.
     */
    IncorrectProvider: CodingArgs;
    /**
     * IND: Description:The level of coverage under the policy or program is available to an individual.
     */
    Individual: CodingArgs;
    /**
     * INEFFECT: Description:The therapy has been found to not have the desired therapeutic benefit on the patient.
     */
    Ineffective: CodingArgs;
    /**
     * INRQSTATE: The record is already in the requested state.
     */
    InRequestedState: CodingArgs;
    /**
     * INTOL: Description:The patient has an intolerance to the medication.
     */
    Intolerance: CodingArgs;
    /**
     * Code: INVOICE
     */
    INVOICE: CodingArgs;
    /**
     * LABINT: Description:The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.
     */
    LabInterferenceIssues: CodingArgs;
    /**
     * LEGAL: Definition:To provide information as a result of a subpoena.
     */
    Subpoena: CodingArgs;
    /**
     * LOCKED: Definition:The prescription may not be reassigned from the original pharmacy.
     */
    Locked: CodingArgs;
    /**
     * LTC: Definition:The bulk supply will be administered within a long term care facility.
     */
    LongTermCareUse: CodingArgs;
    /**
     * MARKT: Description:
     */
    Marketing: CodingArgs;
    /**
     * MDATA: Information is combined into the record.
     */
    MergeData: CodingArgs;
    /**
     * MED: The medical condition of the Patient has changed
     */
    MedicalStatusAltered: CodingArgs;
    /**
     * MEDNEC: Required for medical reasons(s).
     */
    MedicalNecessity: CodingArgs;
    /**
     * MEDPREC: Definition:The patient currently has a medical condition for which the vaccine is contraindicated or for which precaution is warranted.
     */
    MedicalPrecaution: CodingArgs;
    /**
     * MEMADMIN: To perform one or more operations on information to administer health care coverage to an enrollee under a policy or program.
     */
    MemberAdministration: CodingArgs;
    /**
     * MODIFY: Definition:Therapy has been changed and new prescription issued
     */
    ModifiedPrescriptionExists: CodingArgs;
    /**
     * MONIT: Description:Monitoring the patient while taking the medication, the decision has been made that the therapy is no longer appropriate.
     */
    ResponseToMonitoring: CodingArgs;
    /**
     * MTG: The Physician is in a meeting.  For example, he/she may request administrative time to talk to family after appointment
     */
    InAnOutsideMeeting: CodingArgs;
    /**
     * MULTI: A person becomes eligible for a program based on more than one criterion.
     *
     *
     *                            Examples:  In the U.S., a child whose familiy income meets Medicaid financial thresholds and whose age is less than 18 is eligible for the Early and Periodic Screening, Diagnostic, and Treatment program (EPSDT).  A person whose family income meets Medicaid financial thresholds and whose age is 65 years or older is eligible for Medicaid and Medicare, and are referred to as dual eligibles.
     */
    MultipleCriteriaEligibility: CodingArgs;
    /**
     * NEEDAPMT: Definition:Patient must see prescriber prior to further fills.
     */
    PatientMustMakeAppointment: CodingArgs;
    /**
     * NEWDATA: Description:New information has become available to supplement the record.
     */
    NewInformation: CodingArgs;
    /**
     * NEWSTR: Definition:The current medication will be replaced by a new strength of the same medication.
     */
    NewStrength: CodingArgs;
    /**
     * NEWTHER: Definition:A new therapy will be commenced when current supply exhausted.
     */
    NewTherapy: CodingArgs;
    /**
     * NOAGNTPERM: Description: The agent does not have permission.
     */
    NoAgentPermission: CodingArgs;
    /**
     * NOMATCH: Description: There is no match.
     */
    NoMatch: CodingArgs;
    /**
     * NON-AVAIL: Description:Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.
     */
    PatientNotAvailable: CodingArgs;
    /**
     * NOPERM: Description: There is no permission.
     */
    NoPermission: CodingArgs;
    /**
     * NOPICK: Definition:Patient did not come to get medication
     */
    NotPickedUp: CodingArgs;
    /**
     * NOPRODMTCH: Description: There is no match for the product in the master file repository.
     */
    NoProductMatch: CodingArgs;
    /**
     * NORECMTCH: Description: There is no match for the record in the database.
     */
    NoRecordMatch: CodingArgs;
    /**
     * NOREQ: Description:The underlying condition has been resolved or has evolved such that a different treatment is no longer needed.
     */
    NoLongerRequiredForTreatment: CodingArgs;
    /**
     * NOSERMTCH: Description: There is no match for the service in the master file repository.
     */
    NoServiceMatch: CodingArgs;
    /**
     * NOTAVAIL: Definition:Original prescriber is no longer available to prescribe and no other prescriber has taken responsibility for the patient.
     */
    PrescriberNotAvailable: CodingArgs;
    /**
     * NOTCOVER: Description:The product does not have (or no longer has) coverage under the patientaTMs insurance policy.
     */
    NotCovered: CodingArgs;
    /**
     * NOTPAT: Definition:Patient no longer or has never been under this prescribers care.
     */
    PatientNoLongerInThisPractice: CodingArgs;
    /**
     * NOUSERPERM: Definition:The user does not have permission
     */
    NoUserPermission: CodingArgs;
    /**
     * NOUSRPERM: Description: The user does not have permission.
     */
    NoUserPermissionNOUSRPERM: CodingArgs;
    /**
     * NOVERMTCH: Description: There is no match for the record and version.
     */
    NoVersionMatch: CodingArgs;
    /**
     * NPT: Definition:The observation or test was neither defined or scheduled in the study protocol.
     */
    NonProtocol: CodingArgs;
    /**
     * OFFICE: Definition:The bulk supply is intended for general clinician office use.
     */
    OfficeUse: CodingArgs;
    /**
     * ONHOLD: Definition:This medication is on hold.
     */
    MedicationOnHold: CodingArgs;
    /**
     * OPERAT: Description:Administrative and contractual processes required to support an activity, product, or service
     */
    Operations: CodingArgs;
    /**
     * OS: In the case of 'substitution', indicates that the substitution occurred because the ordered item was not in stock.  In the case of 'no substitution', indicates that a cheaper equivalent was not substituted because it was not in stock.
     */
    OutOfStock: CodingArgs;
    /**
     * OSTOCK: Definition:There was no supply of the product on hand to perform the service.
     */
    ProductOutOfStock: CodingArgs;
    /**
     * OUTCOMS: Description:Operational activities conducted for the purposes of assessing the results of an activity, product, or service
     */
    OutcomeMeasure: CodingArgs;
    /**
     * OUTSIDESCHED: The substance was administered outside of the recommended schedule or practice.
     */
    AdministeredOutsideRecommendedScheduleOrPractice: CodingArgs;
    /**
     * OVRER: To perform one or more operations on information to which the patient has not consented by authorized entities for treating a condition which poses an immediate threat to the patient's health and which requires immediate medical intervention.
     *
     *
     *                            Usage Notes: The patient is unable to provide consent, but the provider determines they have an urgent healthcare related reason to access the record.
     */
    EmergencyTreatmentOverride: CodingArgs;
    /**
     * OVRPJ: To perform one or more operations on information to which the patient declined to consent for providing health care.
     *
     *
     *                            Usage Notes: The patient, while able to give consent, has not.  However the provider believes it is in the patient's interest to access the record without patient consent.
     */
    ProfessionalJudgmentOverride: CodingArgs;
    /**
     * OVRPS: To perform one or more operations on information to which the patient has not consented for public safety reasons.
     *
     *
     *                            Usage Notes: The patient, while able to give consent, has not.  However, the provider believes that access to masked patient information is justified because of concerns related to public safety.
     */
    PublicSafetyOverride: CodingArgs;
    /**
     * OVRTPS: To perform one or more operations on information to which the patient has not consented for third party safety.
     *
     *
     *                            Usage Notes: The patient, while able to give consent, has not.  However, the provider believes that access to masked patient information is justified because of concerns related to the health and safety of one or more third parties.
     */
    ThirdPartySafetyOverride: CodingArgs;
    /**
     * PAT: The Patient requested the action
     */
    PatientRequest: CodingArgs;
    /**
     * PATADMIN: To perform one or more operations on information used for operational activities conducted to administer the delivery of health care to a patient.
     */
    PatientAdministration: CodingArgs;
    /**
     * PATCAR: Definition:To obtain records as part of patient care.
     */
    PatientCare: CodingArgs;
    /**
     * PATDEC: Definition:Patient changed their mind regarding obtaining medication
     */
    PatientChangedMind: CodingArgs;
    /**
     * PATINELIG: Definition:Patient not eligible for drug
     */
    PatientNotEligible: CodingArgs;
    /**
     * PATOBJ: Definition:The patient or their guardian objects to receiving the vaccine.
     */
    PatientObjection: CodingArgs;
    /**
     * PATREQ: Definition:Patient requests information from their profile.
     */
    PatientRequestQuery: CodingArgs;
    /**
     * PATRQT: To perform one or more operations on information in response to a patient's request.
     */
    PatientRequested: CodingArgs;
    /**
     * PATSFTY: To perform one or more operations on information in processes related to ensuring the safety of health care.
     */
    PatientSafety: CodingArgs;
    /**
     * PAYMT: Description:Administrative, financial, and contractual processes related to payment for an activity, product, or service
     */
    Payment: CodingArgs;
    /**
     * PERFMSR: To perform one or more operations on information used for monitoring performance of recommended health care practices and interventions.
     */
    PerformanceMeasure: CodingArgs;
    /**
     * PHARM: Definition:The bulk supply is being transferred to another dispensing facility to.
     *
     *
     *                            Example:Alleviate a temporary shortage.
     */
    PharmacyTransfer: CodingArgs;
    /**
     * PHILISOP: Definition:The patient or their guardian objects to receiving the vaccine because of philosophical beliefs.
     */
    PhilosophicalObjection: CodingArgs;
    /**
     * PHY: The Physician requested the action
     */
    PhysicianRequest: CodingArgs;
    /**
     * PNC: A person becomes a claimant under a property and casualty insurance policy because of a related health condition or injury resulting from a circumstance covered under the terms of the policy.
     *
     *
     *                            Example:  A person is a claimant under a homeowners insurance policy because of an injury sustained on the policyholderaTMs premises.
     */
    PropertyAndCasualtyCondition: CodingArgs;
    /**
     * POPHLTH: To perform one or more operations on information for provision of health care to a population of living subjects, e.g., needle exchange program.
     */
    PopulationHealth: CodingArgs;
    /**
     * PPT: Definition:The observation or test occurred due to it being defined in the research protocol, and during an activity or event that was scheduled in the protocol.
     */
    PerProtocol: CodingArgs;
    /**
     * PRCREV: Definition:To evaluate the provider's current practice for professional-improvement reasons.
     */
    PracticeReview: CodingArgs;
    /**
     * PREFUS: Description:The patient refused to take the product.
     */
    PatientRefuse: CodingArgs;
    /**
     * PREG: Description:The patient is pregnant or breast feeding.  The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.
     */
    ParentIsPregnantBreastFeeding: CodingArgs;
    /**
     * PRGRPT: Description:Operational activities conducted to meet program accounting requirements related to an activity, product, or service
     */
    ProgramReporting: CodingArgs;
    /**
     * PRNA: Description:This product is not available or manufactured.
     */
    ProductNotAvailable: CodingArgs;
    /**
     * Code: PROA
     */
    PROA: CodingArgs;
    /**
     * PRODRECALL: Description: The substance was recalled by the manufacturer.
     */
    ProductRecall: CodingArgs;
    /**
     * PROG: Definition:The bulk supply is intended for dispensing according to a specific program.
     *
     *
     *                            Example:Mass immunization.
     */
    ProgramUse: CodingArgs;
    /**
     * PROTUNMET: Definition:Patient does not meet required protocol
     */
    ProtocolNotMet: CodingArgs;
    /**
     * PROVUNAUTH: Definition:Provider is not authorized to prescribe or dispense
     */
    ProviderNotAuthorized: CodingArgs;
    /**
     * PUBHLTH: To perform one or more operations on information for conducting public health activities, such as the reporting of notifiable conditions.
     */
    PublicHealth: CodingArgs;
    /**
     * PurposeOfUse: Reason for performing one or more operations on information, which may be permitted by source system's security policy in accordance with one or more privacy policies and consent directives.
     *
     *
     *                            Usage Notes: The rationale or purpose for an act relating to the management of personal health information, such as collecting personal health information for research or public health purposes.
     */
    PurposeOfUse: CodingArgs;
    /**
     * PWATRNY: To perform one or more operations on information in response to a request by a person appointed as the patient's legal representative.
     */
    PowerOfAttorney: CodingArgs;
    /**
     * QUALIMP: Description:Operational activities conducted for the purposes of improving the quality of an activity, product, or service
     */
    QualityImprovement: CodingArgs;
    /**
     * QUANTCHG: Definition:Patient requested a revised quantity of medication
     */
    ChangeSupplyQuantity: CodingArgs;
    /**
     * RECALL: Description:The manufacturer or other agency has requested that stocks of a medication be removed from circulation.
     */
    ProductRecalled: CodingArgs;
    /**
     * RECORDMGT: To perform one or more operations on information used within the health records management process.
     */
    RecordsManagement: CodingArgs;
    /**
     * Code: RECOV
     */
    RECOV: CodingArgs;
    /**
     * REGERR: Client was registered in error.
     */
    RegisteredInError: CodingArgs;
    /**
     * REGUL: Description:Review for the purpose of regulatory compliance.
     */
    RegulatoryReview: CodingArgs;
    /**
     * RELIG: Definition:The patient or their guardian objects to receiving the vaccine on religious grounds.
     */
    ReligiousObjection: CodingArgs;
    /**
     * REMITADV: To perform one or more operations on information about the amount remitted for a health care claim.
     */
    RemittanceAdvice: CodingArgs;
    /**
     * REPLACE: Description:Item in current order is no longer in use as requested and a new one has/will be created to replace it.
     */
    ChangeInOrder: CodingArgs;
    /**
     * REPLACEFIX: Description:Current order was issued with incorrect data and a new order has/will be created to replace it.
     */
    ErrorInOrder: CodingArgs;
    /**
     * RESCH: Description:Investigative activities conducted for the purposes of obtaining knowledge
     */
    Research: CodingArgs;
    /**
     * RET: Definition:The event occurred so that a test or observation performed at a prior event could be performed again due to conditions set forth in the protocol.
     */
    Retest: CodingArgs;
    /**
     * Code: RETRO
     */
    RETRO: CodingArgs;
    /**
     * RQ: Moved at the request of the patient.
     */
    Request: CodingArgs;
    /**
     * RR: Indicates that the decision to substitute or to not substitute was driven by a jurisdictional regulatory requirement mandating or prohibiting substitution.
     */
    RegulatoryRequirement: CodingArgs;
    /**
     * RSRCH: Definition:To provide research data, as authorized by the patient.
     */
    ResearchRSRCH: CodingArgs;
    /**
     * SALG: Description:The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    Allergy: CodingArgs;
    /**
     * SCH: Definition:The event occurred due to it being scheduled in the research protocol.
     */
    Scheduled: CodingArgs;
    /**
     * SDDI: Description:The drug interacts with a short-term treatment that is more urgently required.  This order will be resumed when the short-term treatment is complete.
     */
    DrugInteractsWithAnotherDrug: CodingArgs;
    /**
     * SDUPTHER: Description:Another short-term co-occurring therapy fulfills the same purpose as this therapy.  This therapy will be resumed when the co-occuring therapy is complete.
     */
    DuplicateTherapy: CodingArgs;
    /**
     * SINTOL: Description:The patient is believed to have an intolerance to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    SuspectedIntolerance: CodingArgs;
    /**
     * SPC: Description:The level of coverage under the policy or program is available to a subscriber's spouse and children
     */
    SpouseAndChildren: CodingArgs;
    /**
     * SPO: Description:The level of coverage under the policy or program is available only to a subscribers spouse
     */
    SpouseOnly: CodingArgs;
    /**
     * SRVC: Description:Provision of a service, product, or capability to an individual or organization
     */
    Service: CodingArgs;
    /**
     * STATUTORY: A person becomes eligible for a program based on statutory criteria.
     *
     *
     *                            Examples:  A person is a member of an indigenous group, a veteran of military service, or  in the U.S., a recipient of adoption assistance and foster care under Title IV-E of the Social Security.
     */
    StatutoryEligibility: CodingArgs;
    /**
     * STOPMED: Renewing or original prescriber informed patient to stop using the medication.
     */
    PrescriberStoppedMedicationForPatient: CodingArgs;
    /**
     * SUPNWK: To perform one or more operations on information in response to a request by a person authorized by the patient.
     */
    SupportNetwork: CodingArgs;
    /**
     * SURG: Description:The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future.  The drug will be resumed when the patient has sufficiently recovered from the surgery.
     */
    PatientScheduledForSurgery: CodingArgs;
    /**
     * SYSADMN: Description:Operational activities conducted to administer the electronic systems used for an activity, product, or service
     */
    SystemAdministration: CodingArgs;
    /**
     * THERCHAR: The prescribed product has specific clinical release or other therapeutic characteristics not shared by other substitutable medications.
     */
    TherapeuticCharacteristics: CodingArgs;
    /**
     * THREAT: To perform one or more operations on information used to prevent injury or disease to living subjects who may be the target of violence.
     */
    Threat: CodingArgs;
    /**
     * TOOEARLY: Definition:The patient should have medication remaining.
     */
    TooEarly: CodingArgs;
    /**
     * TRAIN: To perform one or more operations on information used in training and education.
     */
    Training: CodingArgs;
    /**
     * Code: TRAN
     */
    TRAN: CodingArgs;
    /**
     * TREAT: To perform one or more operations on information for provision of health care.
     */
    Treatment: CodingArgs;
    /**
     * TRIAL: Definition: The specific manufactured drug is part of a clinical trial.
     */
    ClinicalTrialDrug: CodingArgs;
    /**
     * TRM: Definition:The event occurred in order to terminate the subject's participation in the study.
     */
    Termination: CodingArgs;
    /**
     * UMDATA: Information is separated from the record.
     */
    UnmergeData: CodingArgs;
    /**
     * UNABLE: Description:&lt;The patient is not (or is no longer) able to use the medication in a manner prescribed.
     *
     *
     *                            Example:CanaTMt swallow.
     */
    UnableToUse: CodingArgs;
    /**
     * UNKWNTARGET: Definition:The target facility does not recognize the dispensing facility.
     */
    UnknownTarget: CodingArgs;
    /**
     * UNS: Definition:The event that occurred was initiated by a study participant (e.g. the subject or the investigator), and did not occur for protocol reasons.
     */
    Unscheduled: CodingArgs;
    /**
     * UPT: :The observation or test occurred as defined in the research protocol, but at a point in time not specified in the study protocol.
     */
    PerDefinition: CodingArgs;
    /**
     * VACEFF: Definition:The intended vaccine has expired or is otherwise believed to no longer be effective.
     *
     *
     *                            Example:Due to temperature exposure.
     */
    VaccineEfficacyConcerns: CodingArgs;
    /**
     * VACSAF: Definition:The patient or their guardian objects to receiving the vaccine because of concerns over its safety.
     */
    VaccineSafetyConcerns: CodingArgs;
    /**
     * VALIDATION: Description:To validate the patient's record.
     *
     *
     *                            Example:Merging or unmerging records.
     */
    ValidationReview: CodingArgs;
    /**
     * VEHIC: A person becomes a claimant under a motor vehicle accident insurance because of a motor vehicle accident related health condition or injury.
     */
    MotorVehicleAccidentVictim: CodingArgs;
    /**
     * WASHOUT: Description:The patient was previously receiving a medication contraindicated with the current medication.  The current medication will remain on hold until the prior medication has been cleansed from their system.
     */
    WaitingForOldDrugToWashOut: CodingArgs;
    /**
     * WORK: A person becomes eligible for insurance or a program because of a work related health condition or injury.
     *
     *
     *                            Example:  A person is a claimant under the U.S. Black Lung Program.
     */
    WorkRelated: CodingArgs;
    /**
     * WRNGVER: Description: The record and version requested to update is not the current version.
     */
    WrongVersion: CodingArgs;
};
/**
 *  A set of codes specifying the motivation, cause, or rationale of an Act, when such rationale is not reasonably represented as an ActRelationship of type "has reason" linking to another Act.  Examples:
 * Example reasons that might qualify for being coded in this field might be: "routine requirement", "infectious disease reporting requirement", "on patient request", "required by law".
 */
export declare const V3ActReasonCodings: V3ActReasonCodingType;
//# sourceMappingURL=V3ActReasonCodings.d.ts.map