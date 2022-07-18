import { FhirElement } from './fhirJson/FhirElement.js';
import { Coding } from './fhirJson/Coding.js';
import { Address } from './fhirJson/Address.js';
import { Quantity } from './fhirJson/Quantity.js';
import { Age } from './fhirJson/Age.js';
import { Annotation } from './fhirJson/Annotation.js';
import { Attachment } from './fhirJson/Attachment.js';
import { BackboneElement } from './fhirJson/BackboneElement.js';
import { CodeableConcept } from './fhirJson/CodeableConcept.js';
import { ContactDetail } from './fhirJson/ContactDetail.js';
import { ContactPoint } from './fhirJson/ContactPoint.js';
import { Contributor } from './fhirJson/Contributor.js';
import { Count } from './fhirJson/Count.js';
import { DataRequirement, DataRequirementCodeFilter, DataRequirementDateFilter } from './fhirJson/DataRequirement.js';
import { Distance } from './fhirJson/Distance.js';
import { Dosage } from './fhirJson/Dosage.js';
import { Duration } from './fhirJson/Duration.js';
import { ElementDefinition, ElementDefinitionSlicing, ElementDefinitionSlicingDiscriminator, ElementDefinitionBase, ElementDefinitionType, ElementDefinitionExample, ElementDefinitionConstraint, ElementDefinitionBinding, ElementDefinitionMapping } from './fhirJson/ElementDefinition.js';
import { Extension } from './fhirJson/Extension.js';
import { HumanName } from './fhirJson/HumanName.js';
import { Identifier } from './fhirJson/Identifier.js';
import { Meta } from './fhirJson/Meta.js';
import { Money } from './fhirJson/Money.js';
import { Narrative } from './fhirJson/Narrative.js';
import { ParameterDefinition } from './fhirJson/ParameterDefinition.js';
import { Period } from './fhirJson/Period.js';
import { Range } from './fhirJson/Range.js';
import { Ratio } from './fhirJson/Ratio.js';
import { Reference } from './fhirJson/Reference.js';
import { RelatedArtifact } from './fhirJson/RelatedArtifact.js';
import { SampledData } from './fhirJson/SampledData.js';
import { Signature } from './fhirJson/Signature.js';
import { Timing, TimingRepeat } from './fhirJson/Timing.js';
import { TriggerDefinition } from './fhirJson/TriggerDefinition.js';
import { UsageContext } from './fhirJson/UsageContext.js';
import { Resource } from './fhirJson/Resource.js';
import { DomainResource } from './fhirJson/DomainResource.js';
import { Account, AccountCoverage, AccountGuarantor } from './fhirJson/Account.js';
import { ActivityDefinition, ActivityDefinitionParticipant, ActivityDefinitionDynamicValue } from './fhirJson/ActivityDefinition.js';
import { AdverseEvent, AdverseEventSuspectEntity } from './fhirJson/AdverseEvent.js';
import { AllergyIntolerance, AllergyIntoleranceReaction } from './fhirJson/AllergyIntolerance.js';
import { Appointment, AppointmentParticipant } from './fhirJson/Appointment.js';
import { AppointmentResponse } from './fhirJson/AppointmentResponse.js';
import { AuditEvent, AuditEventAgent, AuditEventAgentNetwork, AuditEventSource, AuditEventEntity, AuditEventEntityDetail } from './fhirJson/AuditEvent.js';
import { Basic } from './fhirJson/Basic.js';
import { Binary } from './fhirJson/Binary.js';
import { BodySite } from './fhirJson/BodySite.js';
import { Bundle, BundleLink, BundleEntry, BundleEntrySearch, BundleEntryRequest, BundleEntryResponse } from './fhirJson/Bundle.js';
import { CapabilityStatement, CapabilityStatementSoftware, CapabilityStatementImplementation, CapabilityStatementRest, CapabilityStatementRestSecurity, CapabilityStatementRestSecurityCertificate, CapabilityStatementRestResource, CapabilityStatementRestResourceInteraction, CapabilityStatementRestResourceSearchParam, CapabilityStatementRestInteraction, CapabilityStatementRestOperation, CapabilityStatementMessaging, CapabilityStatementMessagingEndpoint, CapabilityStatementMessagingSupportedMessage, CapabilityStatementMessagingEvent, CapabilityStatementDocument } from './fhirJson/CapabilityStatement.js';
import { CarePlan, CarePlanActivity, CarePlanActivityDetail } from './fhirJson/CarePlan.js';
import { CareTeam, CareTeamParticipant } from './fhirJson/CareTeam.js';
import { ChargeItem, ChargeItemParticipant } from './fhirJson/ChargeItem.js';
import { Claim, ClaimRelated, ClaimPayee, ClaimCareTeam, ClaimInformation, ClaimDiagnosis, ClaimProcedure, ClaimInsurance, ClaimAccident, ClaimItem, ClaimItemDetail, ClaimItemDetailSubDetail } from './fhirJson/Claim.js';
import { ClaimResponse, ClaimResponseItem, ClaimResponseItemAdjudication, ClaimResponseItemDetail, ClaimResponseItemDetailSubDetail, ClaimResponseAddItem, ClaimResponseAddItemDetail, ClaimResponseError, ClaimResponsePayment, ClaimResponseProcessNote, ClaimResponseInsurance } from './fhirJson/ClaimResponse.js';
import { ClinicalImpression, ClinicalImpressionInvestigation, ClinicalImpressionFinding } from './fhirJson/ClinicalImpression.js';
import { CodeSystem, CodeSystemFilter, CodeSystemProperty, CodeSystemConcept, CodeSystemConceptDesignation, CodeSystemConceptProperty } from './fhirJson/CodeSystem.js';
import { Communication, CommunicationPayload } from './fhirJson/Communication.js';
import { CommunicationRequest, CommunicationRequestPayload, CommunicationRequestRequester } from './fhirJson/CommunicationRequest.js';
import { CompartmentDefinition, CompartmentDefinitionResource } from './fhirJson/CompartmentDefinition.js';
import { Composition, CompositionAttester, CompositionRelatesTo, CompositionEvent, CompositionSection } from './fhirJson/Composition.js';
import { ConceptMap, ConceptMapGroup, ConceptMapGroupElement, ConceptMapGroupElementTarget, ConceptMapGroupElementTargetDependsOn, ConceptMapGroupUnmapped } from './fhirJson/ConceptMap.js';
import { Condition, ConditionStage, ConditionEvidence } from './fhirJson/Condition.js';
import { Consent, ConsentActor, ConsentPolicy, ConsentData, ConsentExcept, ConsentExceptActor, ConsentExceptData } from './fhirJson/Consent.js';
import { Contract, ContractAgent, ContractSigner, ContractValuedItem, ContractTerm, ContractTermAgent, ContractTermValuedItem, ContractFriendly, ContractLegal, ContractRule } from './fhirJson/Contract.js';
import { Coverage, CoverageGrouping } from './fhirJson/Coverage.js';
import { DataElement, DataElementMapping } from './fhirJson/DataElement.js';
import { DetectedIssue, DetectedIssueMitigation } from './fhirJson/DetectedIssue.js';
import { Device, DeviceUdi } from './fhirJson/Device.js';
import { DeviceComponent, DeviceComponentProductionSpecification } from './fhirJson/DeviceComponent.js';
import { DeviceMetric, DeviceMetricCalibration } from './fhirJson/DeviceMetric.js';
import { DeviceRequest, DeviceRequestRequester } from './fhirJson/DeviceRequest.js';
import { DeviceUseStatement } from './fhirJson/DeviceUseStatement.js';
import { DiagnosticReport, DiagnosticReportPerformer, DiagnosticReportImage } from './fhirJson/DiagnosticReport.js';
import { DocumentManifest, DocumentManifestContent, DocumentManifestRelated } from './fhirJson/DocumentManifest.js';
import { DocumentReference, DocumentReferenceRelatesTo, DocumentReferenceContent, DocumentReferenceContext, DocumentReferenceContextRelated } from './fhirJson/DocumentReference.js';
import { EligibilityRequest } from './fhirJson/EligibilityRequest.js';
import { EligibilityResponse, EligibilityResponseInsurance, EligibilityResponseInsuranceBenefitBalance, EligibilityResponseInsuranceBenefitBalanceFinancial, EligibilityResponseError } from './fhirJson/EligibilityResponse.js';
import { Encounter, EncounterStatusHistory, EncounterClassHistory, EncounterParticipant, EncounterDiagnosis, EncounterHospitalization, EncounterLocation } from './fhirJson/Encounter.js';
import { Endpoint } from './fhirJson/Endpoint.js';
import { EnrollmentRequest } from './fhirJson/EnrollmentRequest.js';
import { EnrollmentResponse } from './fhirJson/EnrollmentResponse.js';
import { EpisodeOfCare, EpisodeOfCareStatusHistory, EpisodeOfCareDiagnosis } from './fhirJson/EpisodeOfCare.js';
import { ExpansionProfile, ExpansionProfileFixedVersion, ExpansionProfileExcludedSystem, ExpansionProfileDesignation, ExpansionProfileDesignationInclude, ExpansionProfileDesignationIncludeDesignation, ExpansionProfileDesignationExclude, ExpansionProfileDesignationExcludeDesignation } from './fhirJson/ExpansionProfile.js';
import { ExplanationOfBenefit, ExplanationOfBenefitRelated, ExplanationOfBenefitPayee, ExplanationOfBenefitInformation, ExplanationOfBenefitCareTeam, ExplanationOfBenefitDiagnosis, ExplanationOfBenefitProcedure, ExplanationOfBenefitInsurance, ExplanationOfBenefitAccident, ExplanationOfBenefitItem, ExplanationOfBenefitItemAdjudication, ExplanationOfBenefitItemDetail, ExplanationOfBenefitItemDetailSubDetail, ExplanationOfBenefitAddItem, ExplanationOfBenefitAddItemDetail, ExplanationOfBenefitPayment, ExplanationOfBenefitProcessNote, ExplanationOfBenefitBenefitBalance, ExplanationOfBenefitBenefitBalanceFinancial } from './fhirJson/ExplanationOfBenefit.js';
import { FamilyMemberHistory, FamilyMemberHistoryCondition } from './fhirJson/FamilyMemberHistory.js';
import { Flag } from './fhirJson/Flag.js';
import { Goal, GoalTarget } from './fhirJson/Goal.js';
import { GraphDefinition, GraphDefinitionLink, GraphDefinitionLinkTarget, GraphDefinitionLinkTargetCompartment } from './fhirJson/GraphDefinition.js';
import { Group, GroupCharacteristic, GroupMember } from './fhirJson/Group.js';
import { GuidanceResponse } from './fhirJson/GuidanceResponse.js';
import { HealthcareService, HealthcareServiceAvailableTime, HealthcareServiceNotAvailable } from './fhirJson/HealthcareService.js';
import { ImagingManifest, ImagingManifestStudy, ImagingManifestStudySeries, ImagingManifestStudySeriesInstance } from './fhirJson/ImagingManifest.js';
import { ImagingStudy, ImagingStudySeries, ImagingStudySeriesInstance } from './fhirJson/ImagingStudy.js';
import { Immunization, ImmunizationPractitioner, ImmunizationExplanation, ImmunizationReaction, ImmunizationVaccinationProtocol } from './fhirJson/Immunization.js';
import { ImmunizationRecommendation, ImmunizationRecommendationRecommendation, ImmunizationRecommendationRecommendationDateCriterion, ImmunizationRecommendationRecommendationProtocol } from './fhirJson/ImmunizationRecommendation.js';
import { ImplementationGuide, ImplementationGuideDependency, ImplementationGuidePackage, ImplementationGuidePackageResource, ImplementationGuideGlobal, ImplementationGuidePage } from './fhirJson/ImplementationGuide.js';
import { Library } from './fhirJson/Library.js';
import { Linkage, LinkageItem } from './fhirJson/Linkage.js';
import { List, ListEntry } from './fhirJson/List.js';
import { Location, LocationPosition } from './fhirJson/Location.js';
import { Measure, MeasureGroup, MeasureGroupPopulation, MeasureGroupStratifier, MeasureSupplementalData } from './fhirJson/Measure.js';
import { MeasureReport, MeasureReportGroup, MeasureReportGroupPopulation, MeasureReportGroupStratifier, MeasureReportGroupStratifierStratum, MeasureReportGroupStratifierStratumPopulation } from './fhirJson/MeasureReport.js';
import { Media } from './fhirJson/Media.js';
import { Medication, MedicationIngredient, MedicationPackage, MedicationPackageContent, MedicationPackageBatch } from './fhirJson/Medication.js';
import { MedicationAdministration, MedicationAdministrationPerformer, MedicationAdministrationDosage } from './fhirJson/MedicationAdministration.js';
import { MedicationDispense, MedicationDispensePerformer, MedicationDispenseSubstitution } from './fhirJson/MedicationDispense.js';
import { MedicationRequest, MedicationRequestRequester, MedicationRequestDispenseRequest, MedicationRequestSubstitution } from './fhirJson/MedicationRequest.js';
import { MedicationStatement } from './fhirJson/MedicationStatement.js';
import { MessageDefinition, MessageDefinitionFocus, MessageDefinitionAllowedResponse } from './fhirJson/MessageDefinition.js';
import { MessageHeader, MessageHeaderDestination, MessageHeaderSource, MessageHeaderResponse } from './fhirJson/MessageHeader.js';
import { NamingSystem, NamingSystemUniqueId } from './fhirJson/NamingSystem.js';
import { NutritionOrder, NutritionOrderOralDiet, NutritionOrderOralDietNutrient, NutritionOrderOralDietTexture, NutritionOrderSupplement, NutritionOrderEnteralFormula, NutritionOrderEnteralFormulaAdministration } from './fhirJson/NutritionOrder.js';
import { Observation, ObservationReferenceRange, ObservationRelated, ObservationComponent } from './fhirJson/Observation.js';
import { OperationDefinition, OperationDefinitionParameter, OperationDefinitionParameterBinding, OperationDefinitionOverload } from './fhirJson/OperationDefinition.js';
import { OperationOutcome, OperationOutcomeIssue } from './fhirJson/OperationOutcome.js';
import { Organization, OrganizationContact } from './fhirJson/Organization.js';
import { Parameters, ParametersParameter } from './fhirJson/Parameters.js';
import { Patient, PatientContact, PatientAnimal, PatientCommunication, PatientLink } from './fhirJson/Patient.js';
import { PaymentNotice } from './fhirJson/PaymentNotice.js';
import { PaymentReconciliation, PaymentReconciliationDetail, PaymentReconciliationProcessNote } from './fhirJson/PaymentReconciliation.js';
import { Person, PersonLink } from './fhirJson/Person.js';
import { PlanDefinition, PlanDefinitionGoal, PlanDefinitionGoalTarget, PlanDefinitionAction, PlanDefinitionActionCondition, PlanDefinitionActionRelatedAction, PlanDefinitionActionParticipant, PlanDefinitionActionDynamicValue } from './fhirJson/PlanDefinition.js';
import { Practitioner, PractitionerQualification } from './fhirJson/Practitioner.js';
import { PractitionerRole, PractitionerRoleAvailableTime, PractitionerRoleNotAvailable } from './fhirJson/PractitionerRole.js';
import { Procedure, ProcedurePerformer, ProcedureFocalDevice } from './fhirJson/Procedure.js';
import { ProcedureRequest, ProcedureRequestRequester } from './fhirJson/ProcedureRequest.js';
import { ProcessRequest, ProcessRequestItem } from './fhirJson/ProcessRequest.js';
import { ProcessResponse, ProcessResponseProcessNote } from './fhirJson/ProcessResponse.js';
import { Provenance, ProvenanceAgent, ProvenanceEntity } from './fhirJson/Provenance.js';
import { Questionnaire, QuestionnaireItem, QuestionnaireItemEnableWhen, QuestionnaireItemOption } from './fhirJson/Questionnaire.js';
import { QuestionnaireResponse, QuestionnaireResponseItem, QuestionnaireResponseItemAnswer } from './fhirJson/QuestionnaireResponse.js';
import { ReferralRequest, ReferralRequestRequester } from './fhirJson/ReferralRequest.js';
import { RelatedPerson } from './fhirJson/RelatedPerson.js';
import { RequestGroup, RequestGroupAction, RequestGroupActionCondition, RequestGroupActionRelatedAction } from './fhirJson/RequestGroup.js';
import { ResearchStudy, ResearchStudyArm } from './fhirJson/ResearchStudy.js';
import { ResearchSubject } from './fhirJson/ResearchSubject.js';
import { RiskAssessment, RiskAssessmentPrediction } from './fhirJson/RiskAssessment.js';
import { Schedule } from './fhirJson/Schedule.js';
import { SearchParameter, SearchParameterComponent } from './fhirJson/SearchParameter.js';
import { Sequence, SequenceReferenceSeq, SequenceVariant, SequenceQuality, SequenceRepository } from './fhirJson/Sequence.js';
import { ServiceDefinition } from './fhirJson/ServiceDefinition.js';
import { Slot } from './fhirJson/Slot.js';
import { Specimen, SpecimenCollection, SpecimenProcessing, SpecimenContainer } from './fhirJson/Specimen.js';
import { StructureDefinition, StructureDefinitionMapping, StructureDefinitionSnapshot, StructureDefinitionDifferential } from './fhirJson/StructureDefinition.js';
import { StructureMap, StructureMapStructure, StructureMapGroup, StructureMapGroupInput, StructureMapGroupRule, StructureMapGroupRuleSource, StructureMapGroupRuleTarget, StructureMapGroupRuleTargetParameter, StructureMapGroupRuleDependent } from './fhirJson/StructureMap.js';
import { Subscription, SubscriptionChannel } from './fhirJson/Subscription.js';
import { Substance, SubstanceInstance, SubstanceIngredient } from './fhirJson/Substance.js';
import { SupplyDelivery, SupplyDeliverySuppliedItem } from './fhirJson/SupplyDelivery.js';
import { SupplyRequest, SupplyRequestOrderedItem, SupplyRequestRequester } from './fhirJson/SupplyRequest.js';
import { Task, TaskRequester, TaskRestriction, TaskInput, TaskOutput } from './fhirJson/Task.js';
import { TestReport, TestReportParticipant, TestReportSetup, TestReportSetupAction, TestReportSetupActionOperation, TestReportSetupActionAssert, TestReportTest, TestReportTestAction, TestReportTeardown, TestReportTeardownAction } from './fhirJson/TestReport.js';
import { TestScript, TestScriptOrigin, TestScriptDestination, TestScriptMetadata, TestScriptMetadataLink, TestScriptMetadataCapability, TestScriptFixture, TestScriptVariable, TestScriptRule, TestScriptRuleParam, TestScriptRuleset, TestScriptRulesetRule, TestScriptRulesetRuleParam, TestScriptSetup, TestScriptSetupAction, TestScriptSetupActionOperation, TestScriptSetupActionOperationRequestHeader, TestScriptSetupActionAssert, TestScriptSetupActionAssertRule, TestScriptSetupActionAssertRuleParam, TestScriptSetupActionAssertRuleset, TestScriptSetupActionAssertRulesetRule, TestScriptSetupActionAssertRulesetRuleParam, TestScriptTest, TestScriptTestAction, TestScriptTeardown, TestScriptTeardownAction } from './fhirJson/TestScript.js';
import { ValueSet, ValueSetCompose, ValueSetComposeInclude, ValueSetComposeIncludeConcept, ValueSetComposeIncludeConceptDesignation, ValueSetComposeIncludeFilter, ValueSetExpansion, ValueSetExpansionParameter, ValueSetExpansionContains } from './fhirJson/ValueSet.js';
import { VisionPrescription, VisionPrescriptionDispense } from './fhirJson/VisionPrescription.js';
/**
 * Resource binding for generic use.
 */
declare type FhirResource = Account | ActivityDefinition | AdverseEvent | AllergyIntolerance | Appointment | AppointmentResponse | AuditEvent | Basic | Binary | BodySite | Bundle | CapabilityStatement | CarePlan | CareTeam | ChargeItem | Claim | ClaimResponse | ClinicalImpression | CodeSystem | Communication | CommunicationRequest | CompartmentDefinition | Composition | ConceptMap | Condition | Consent | Contract | Coverage | DataElement | DetectedIssue | Device | DeviceComponent | DeviceMetric | DeviceRequest | DeviceUseStatement | DiagnosticReport | DocumentManifest | DocumentReference | DomainResource | EligibilityRequest | EligibilityResponse | Encounter | Endpoint | EnrollmentRequest | EnrollmentResponse | EpisodeOfCare | ExpansionProfile | ExplanationOfBenefit | FamilyMemberHistory | Flag | Goal | GraphDefinition | Group | GuidanceResponse | HealthcareService | ImagingManifest | ImagingStudy | Immunization | ImmunizationRecommendation | ImplementationGuide | Library | Linkage | List | Location | Measure | MeasureReport | Media | Medication | MedicationAdministration | MedicationDispense | MedicationRequest | MedicationStatement | MessageDefinition | MessageHeader | NamingSystem | NutritionOrder | Observation | OperationDefinition | OperationOutcome | Organization | Parameters | Patient | PaymentNotice | PaymentReconciliation | Person | PlanDefinition | Practitioner | PractitionerRole | Procedure | ProcedureRequest | ProcessRequest | ProcessResponse | Provenance | Questionnaire | QuestionnaireResponse | ReferralRequest | RelatedPerson | RequestGroup | ResearchStudy | ResearchSubject | Resource | RiskAssessment | Schedule | SearchParameter | Sequence | ServiceDefinition | Slot | Specimen | StructureDefinition | StructureMap | Subscription | Substance | SupplyDelivery | SupplyRequest | Task | TestReport | TestScript | ValueSet | VisionPrescription;
export { type FhirElement, type Coding, type Address, type Quantity, type Age, type Annotation, type Attachment, type BackboneElement, type CodeableConcept, type ContactDetail, type ContactPoint, type Contributor, type Count, type DataRequirement, type DataRequirementCodeFilter, type DataRequirementDateFilter, type Distance, type Dosage, type Duration, type ElementDefinition, type ElementDefinitionSlicing, type ElementDefinitionSlicingDiscriminator, type ElementDefinitionBase, type ElementDefinitionType, type ElementDefinitionExample, type ElementDefinitionConstraint, type ElementDefinitionBinding, type ElementDefinitionMapping, type Extension, type HumanName, type Identifier, type Meta, type Money, type Narrative, type ParameterDefinition, type Period, type Range, type Ratio, type Reference, type RelatedArtifact, type SampledData, type Signature, type Timing, type TimingRepeat, type TriggerDefinition, type UsageContext, type Resource, type DomainResource, type Account, type AccountCoverage, type AccountGuarantor, type ActivityDefinition, type ActivityDefinitionParticipant, type ActivityDefinitionDynamicValue, type AdverseEvent, type AdverseEventSuspectEntity, type AllergyIntolerance, type AllergyIntoleranceReaction, type Appointment, type AppointmentParticipant, type AppointmentResponse, type AuditEvent, type AuditEventAgent, type AuditEventAgentNetwork, type AuditEventSource, type AuditEventEntity, type AuditEventEntityDetail, type Basic, type Binary, type BodySite, type Bundle, type BundleLink, type BundleEntry, type BundleEntrySearch, type BundleEntryRequest, type BundleEntryResponse, type CapabilityStatement, type CapabilityStatementSoftware, type CapabilityStatementImplementation, type CapabilityStatementRest, type CapabilityStatementRestSecurity, type CapabilityStatementRestSecurityCertificate, type CapabilityStatementRestResource, type CapabilityStatementRestResourceInteraction, type CapabilityStatementRestResourceSearchParam, type CapabilityStatementRestInteraction, type CapabilityStatementRestOperation, type CapabilityStatementMessaging, type CapabilityStatementMessagingEndpoint, type CapabilityStatementMessagingSupportedMessage, type CapabilityStatementMessagingEvent, type CapabilityStatementDocument, type CarePlan, type CarePlanActivity, type CarePlanActivityDetail, type CareTeam, type CareTeamParticipant, type ChargeItem, type ChargeItemParticipant, type Claim, type ClaimRelated, type ClaimPayee, type ClaimCareTeam, type ClaimInformation, type ClaimDiagnosis, type ClaimProcedure, type ClaimInsurance, type ClaimAccident, type ClaimItem, type ClaimItemDetail, type ClaimItemDetailSubDetail, type ClaimResponse, type ClaimResponseItem, type ClaimResponseItemAdjudication, type ClaimResponseItemDetail, type ClaimResponseItemDetailSubDetail, type ClaimResponseAddItem, type ClaimResponseAddItemDetail, type ClaimResponseError, type ClaimResponsePayment, type ClaimResponseProcessNote, type ClaimResponseInsurance, type ClinicalImpression, type ClinicalImpressionInvestigation, type ClinicalImpressionFinding, type CodeSystem, type CodeSystemFilter, type CodeSystemProperty, type CodeSystemConcept, type CodeSystemConceptDesignation, type CodeSystemConceptProperty, type Communication, type CommunicationPayload, type CommunicationRequest, type CommunicationRequestPayload, type CommunicationRequestRequester, type CompartmentDefinition, type CompartmentDefinitionResource, type Composition, type CompositionAttester, type CompositionRelatesTo, type CompositionEvent, type CompositionSection, type ConceptMap, type ConceptMapGroup, type ConceptMapGroupElement, type ConceptMapGroupElementTarget, type ConceptMapGroupElementTargetDependsOn, type ConceptMapGroupUnmapped, type Condition, type ConditionStage, type ConditionEvidence, type Consent, type ConsentActor, type ConsentPolicy, type ConsentData, type ConsentExcept, type ConsentExceptActor, type ConsentExceptData, type Contract, type ContractAgent, type ContractSigner, type ContractValuedItem, type ContractTerm, type ContractTermAgent, type ContractTermValuedItem, type ContractFriendly, type ContractLegal, type ContractRule, type Coverage, type CoverageGrouping, type DataElement, type DataElementMapping, type DetectedIssue, type DetectedIssueMitigation, type Device, type DeviceUdi, type DeviceComponent, type DeviceComponentProductionSpecification, type DeviceMetric, type DeviceMetricCalibration, type DeviceRequest, type DeviceRequestRequester, type DeviceUseStatement, type DiagnosticReport, type DiagnosticReportPerformer, type DiagnosticReportImage, type DocumentManifest, type DocumentManifestContent, type DocumentManifestRelated, type DocumentReference, type DocumentReferenceRelatesTo, type DocumentReferenceContent, type DocumentReferenceContext, type DocumentReferenceContextRelated, type EligibilityRequest, type EligibilityResponse, type EligibilityResponseInsurance, type EligibilityResponseInsuranceBenefitBalance, type EligibilityResponseInsuranceBenefitBalanceFinancial, type EligibilityResponseError, type Encounter, type EncounterStatusHistory, type EncounterClassHistory, type EncounterParticipant, type EncounterDiagnosis, type EncounterHospitalization, type EncounterLocation, type Endpoint, type EnrollmentRequest, type EnrollmentResponse, type EpisodeOfCare, type EpisodeOfCareStatusHistory, type EpisodeOfCareDiagnosis, type ExpansionProfile, type ExpansionProfileFixedVersion, type ExpansionProfileExcludedSystem, type ExpansionProfileDesignation, type ExpansionProfileDesignationInclude, type ExpansionProfileDesignationIncludeDesignation, type ExpansionProfileDesignationExclude, type ExpansionProfileDesignationExcludeDesignation, type ExplanationOfBenefit, type ExplanationOfBenefitRelated, type ExplanationOfBenefitPayee, type ExplanationOfBenefitInformation, type ExplanationOfBenefitCareTeam, type ExplanationOfBenefitDiagnosis, type ExplanationOfBenefitProcedure, type ExplanationOfBenefitInsurance, type ExplanationOfBenefitAccident, type ExplanationOfBenefitItem, type ExplanationOfBenefitItemAdjudication, type ExplanationOfBenefitItemDetail, type ExplanationOfBenefitItemDetailSubDetail, type ExplanationOfBenefitAddItem, type ExplanationOfBenefitAddItemDetail, type ExplanationOfBenefitPayment, type ExplanationOfBenefitProcessNote, type ExplanationOfBenefitBenefitBalance, type ExplanationOfBenefitBenefitBalanceFinancial, type FamilyMemberHistory, type FamilyMemberHistoryCondition, type Flag, type Goal, type GoalTarget, type GraphDefinition, type GraphDefinitionLink, type GraphDefinitionLinkTarget, type GraphDefinitionLinkTargetCompartment, type Group, type GroupCharacteristic, type GroupMember, type GuidanceResponse, type HealthcareService, type HealthcareServiceAvailableTime, type HealthcareServiceNotAvailable, type ImagingManifest, type ImagingManifestStudy, type ImagingManifestStudySeries, type ImagingManifestStudySeriesInstance, type ImagingStudy, type ImagingStudySeries, type ImagingStudySeriesInstance, type Immunization, type ImmunizationPractitioner, type ImmunizationExplanation, type ImmunizationReaction, type ImmunizationVaccinationProtocol, type ImmunizationRecommendation, type ImmunizationRecommendationRecommendation, type ImmunizationRecommendationRecommendationDateCriterion, type ImmunizationRecommendationRecommendationProtocol, type ImplementationGuide, type ImplementationGuideDependency, type ImplementationGuidePackage, type ImplementationGuidePackageResource, type ImplementationGuideGlobal, type ImplementationGuidePage, type Library, type Linkage, type LinkageItem, type List, type ListEntry, type Location, type LocationPosition, type Measure, type MeasureGroup, type MeasureGroupPopulation, type MeasureGroupStratifier, type MeasureSupplementalData, type MeasureReport, type MeasureReportGroup, type MeasureReportGroupPopulation, type MeasureReportGroupStratifier, type MeasureReportGroupStratifierStratum, type MeasureReportGroupStratifierStratumPopulation, type Media, type Medication, type MedicationIngredient, type MedicationPackage, type MedicationPackageContent, type MedicationPackageBatch, type MedicationAdministration, type MedicationAdministrationPerformer, type MedicationAdministrationDosage, type MedicationDispense, type MedicationDispensePerformer, type MedicationDispenseSubstitution, type MedicationRequest, type MedicationRequestRequester, type MedicationRequestDispenseRequest, type MedicationRequestSubstitution, type MedicationStatement, type MessageDefinition, type MessageDefinitionFocus, type MessageDefinitionAllowedResponse, type MessageHeader, type MessageHeaderDestination, type MessageHeaderSource, type MessageHeaderResponse, type NamingSystem, type NamingSystemUniqueId, type NutritionOrder, type NutritionOrderOralDiet, type NutritionOrderOralDietNutrient, type NutritionOrderOralDietTexture, type NutritionOrderSupplement, type NutritionOrderEnteralFormula, type NutritionOrderEnteralFormulaAdministration, type Observation, type ObservationReferenceRange, type ObservationRelated, type ObservationComponent, type OperationDefinition, type OperationDefinitionParameter, type OperationDefinitionParameterBinding, type OperationDefinitionOverload, type OperationOutcome, type OperationOutcomeIssue, type Organization, type OrganizationContact, type Parameters, type ParametersParameter, type Patient, type PatientContact, type PatientAnimal, type PatientCommunication, type PatientLink, type PaymentNotice, type PaymentReconciliation, type PaymentReconciliationDetail, type PaymentReconciliationProcessNote, type Person, type PersonLink, type PlanDefinition, type PlanDefinitionGoal, type PlanDefinitionGoalTarget, type PlanDefinitionAction, type PlanDefinitionActionCondition, type PlanDefinitionActionRelatedAction, type PlanDefinitionActionParticipant, type PlanDefinitionActionDynamicValue, type Practitioner, type PractitionerQualification, type PractitionerRole, type PractitionerRoleAvailableTime, type PractitionerRoleNotAvailable, type Procedure, type ProcedurePerformer, type ProcedureFocalDevice, type ProcedureRequest, type ProcedureRequestRequester, type ProcessRequest, type ProcessRequestItem, type ProcessResponse, type ProcessResponseProcessNote, type Provenance, type ProvenanceAgent, type ProvenanceEntity, type Questionnaire, type QuestionnaireItem, type QuestionnaireItemEnableWhen, type QuestionnaireItemOption, type QuestionnaireResponse, type QuestionnaireResponseItem, type QuestionnaireResponseItemAnswer, type ReferralRequest, type ReferralRequestRequester, type RelatedPerson, type RequestGroup, type RequestGroupAction, type RequestGroupActionCondition, type RequestGroupActionRelatedAction, type ResearchStudy, type ResearchStudyArm, type ResearchSubject, type RiskAssessment, type RiskAssessmentPrediction, type Schedule, type SearchParameter, type SearchParameterComponent, type Sequence, type SequenceReferenceSeq, type SequenceVariant, type SequenceQuality, type SequenceRepository, type ServiceDefinition, type Slot, type Specimen, type SpecimenCollection, type SpecimenProcessing, type SpecimenContainer, type StructureDefinition, type StructureDefinitionMapping, type StructureDefinitionSnapshot, type StructureDefinitionDifferential, type StructureMap, type StructureMapStructure, type StructureMapGroup, type StructureMapGroupInput, type StructureMapGroupRule, type StructureMapGroupRuleSource, type StructureMapGroupRuleTarget, type StructureMapGroupRuleTargetParameter, type StructureMapGroupRuleDependent, type Subscription, type SubscriptionChannel, type Substance, type SubstanceInstance, type SubstanceIngredient, type SupplyDelivery, type SupplyDeliverySuppliedItem, type SupplyRequest, type SupplyRequestOrderedItem, type SupplyRequestRequester, type Task, type TaskRequester, type TaskRestriction, type TaskInput, type TaskOutput, type TestReport, type TestReportParticipant, type TestReportSetup, type TestReportSetupAction, type TestReportSetupActionOperation, type TestReportSetupActionAssert, type TestReportTest, type TestReportTestAction, type TestReportTeardown, type TestReportTeardownAction, type TestScript, type TestScriptOrigin, type TestScriptDestination, type TestScriptMetadata, type TestScriptMetadataLink, type TestScriptMetadataCapability, type TestScriptFixture, type TestScriptVariable, type TestScriptRule, type TestScriptRuleParam, type TestScriptRuleset, type TestScriptRulesetRule, type TestScriptRulesetRuleParam, type TestScriptSetup, type TestScriptSetupAction, type TestScriptSetupActionOperation, type TestScriptSetupActionOperationRequestHeader, type TestScriptSetupActionAssert, type TestScriptSetupActionAssertRule, type TestScriptSetupActionAssertRuleParam, type TestScriptSetupActionAssertRuleset, type TestScriptSetupActionAssertRulesetRule, type TestScriptSetupActionAssertRulesetRuleParam, type TestScriptTest, type TestScriptTestAction, type TestScriptTeardown, type TestScriptTeardownAction, type ValueSet, type ValueSetCompose, type ValueSetComposeInclude, type ValueSetComposeIncludeConcept, type ValueSetComposeIncludeConceptDesignation, type ValueSetComposeIncludeFilter, type ValueSetExpansion, type ValueSetExpansionParameter, type ValueSetExpansionContains, type VisionPrescription, type VisionPrescriptionDispense, type FhirResource, };
//# sourceMappingURL=fhirJson.d.ts.map