/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
export { FhirBase } from './fhir/FhirBase.js';
export { FhirPrimitive } from './fhir/FhirPrimitive.js';
export { FhirBase64Binary } from './fhir/FhirBase64Binary.js';
export { FhirBoolean } from './fhir/FhirBoolean.js';
export { FhirCanonical } from './fhir/FhirCanonical.js';
export { FhirCode } from './fhir/FhirCode.js';
export { FhirDate } from './fhir/FhirDate.js';
export { FhirDateTime } from './fhir/FhirDateTime.js';
export { FhirDecimal } from './fhir/FhirDecimal.js';
export { FhirId } from './fhir/FhirId.js';
export { FhirInstant } from './fhir/FhirInstant.js';
export { FhirInteger } from './fhir/FhirInteger.js';
export { FhirMarkdown } from './fhir/FhirMarkdown.js';
export { FhirOid } from './fhir/FhirOid.js';
export { FhirPositiveInt } from './fhir/FhirPositiveInt.js';
export { FhirString } from './fhir/FhirString.js';
export { FhirTime } from './fhir/FhirTime.js';
export { FhirUnsignedInt } from './fhir/FhirUnsignedInt.js';
export { FhirUri } from './fhir/FhirUri.js';
export { FhirUrl } from './fhir/FhirUrl.js';
export { FhirUuid } from './fhir/FhirUuid.js';
export { FhirXhtml } from './fhir/FhirXhtml.js';
export { FhirElement } from './fhir/FhirElement.js';
export { Coding } from './fhir/Coding.js';
export { Address } from './fhir/Address.js';
export { Quantity } from './fhir/Quantity.js';
export { Age } from './fhir/Age.js';
export { Annotation } from './fhir/Annotation.js';
export { Attachment } from './fhir/Attachment.js';
export { BackboneElement } from './fhir/BackboneElement.js';
export { CodeableConcept } from './fhir/CodeableConcept.js';
export { ContactDetail } from './fhir/ContactDetail.js';
export { ContactPoint } from './fhir/ContactPoint.js';
export { Contributor } from './fhir/Contributor.js';
export { Count } from './fhir/Count.js';
export { DataRequirement, DataRequirementCodeFilter, DataRequirementDateFilter, DataRequirementSort } from './fhir/DataRequirement.js';
export { Distance } from './fhir/Distance.js';
export { Dosage, DosageDoseAndRate } from './fhir/Dosage.js';
export { Duration } from './fhir/Duration.js';
export { ElementDefinition, ElementDefinitionBase, ElementDefinitionBinding, ElementDefinitionConstraint, ElementDefinitionExample, ElementDefinitionMapping, ElementDefinitionSlicing, ElementDefinitionSlicingDiscriminator, ElementDefinitionType } from './fhir/ElementDefinition.js';
export { Expression } from './fhir/Expression.js';
export { Extension } from './fhir/Extension.js';
export { HumanName } from './fhir/HumanName.js';
export { Identifier } from './fhir/Identifier.js';
export { MarketingStatus } from './fhir/MarketingStatus.js';
export { Meta } from './fhir/Meta.js';
export { Money } from './fhir/Money.js';
export { Narrative } from './fhir/Narrative.js';
export { ParameterDefinition } from './fhir/ParameterDefinition.js';
export { Period } from './fhir/Period.js';
export { Population } from './fhir/Population.js';
export { ProdCharacteristic } from './fhir/ProdCharacteristic.js';
export { ProductShelfLife } from './fhir/ProductShelfLife.js';
export { Range } from './fhir/Range.js';
export { Ratio } from './fhir/Ratio.js';
export { Reference } from './fhir/Reference.js';
export { RelatedArtifact } from './fhir/RelatedArtifact.js';
export { SampledData } from './fhir/SampledData.js';
export { Signature } from './fhir/Signature.js';
export { SubstanceAmount, SubstanceAmountReferenceRange } from './fhir/SubstanceAmount.js';
export { Timing, TimingRepeat } from './fhir/Timing.js';
export { TriggerDefinition } from './fhir/TriggerDefinition.js';
export { UsageContext } from './fhir/UsageContext.js';
import { Resource } from './fhir/Resource.js';
export { Resource } from './fhir/Resource.js';
import { DomainResource } from './fhir/DomainResource.js';
export { DomainResource } from './fhir/DomainResource.js';
import { Account } from './fhir/Account.js';
export { Account, AccountCoverage, AccountGuarantor } from './fhir/Account.js';
import { ActivityDefinition } from './fhir/ActivityDefinition.js';
export { ActivityDefinition, ActivityDefinitionDynamicValue, ActivityDefinitionParticipant } from './fhir/ActivityDefinition.js';
import { AdverseEvent } from './fhir/AdverseEvent.js';
export { AdverseEvent, AdverseEventSuspectEntity, AdverseEventSuspectEntityCausality } from './fhir/AdverseEvent.js';
import { AllergyIntolerance } from './fhir/AllergyIntolerance.js';
export { AllergyIntolerance, AllergyIntoleranceReaction } from './fhir/AllergyIntolerance.js';
import { Appointment } from './fhir/Appointment.js';
export { Appointment, AppointmentParticipant } from './fhir/Appointment.js';
import { AppointmentResponse } from './fhir/AppointmentResponse.js';
export { AppointmentResponse } from './fhir/AppointmentResponse.js';
import { AuditEvent } from './fhir/AuditEvent.js';
export { AuditEvent, AuditEventAgent, AuditEventAgentNetwork, AuditEventEntity, AuditEventEntityDetail, AuditEventSource } from './fhir/AuditEvent.js';
import { Basic } from './fhir/Basic.js';
export { Basic } from './fhir/Basic.js';
import { Binary } from './fhir/Binary.js';
export { Binary } from './fhir/Binary.js';
import { BiologicallyDerivedProduct } from './fhir/BiologicallyDerivedProduct.js';
export { BiologicallyDerivedProduct, BiologicallyDerivedProductCollection, BiologicallyDerivedProductManipulation, BiologicallyDerivedProductProcessing, BiologicallyDerivedProductStorage } from './fhir/BiologicallyDerivedProduct.js';
import { BodyStructure } from './fhir/BodyStructure.js';
export { BodyStructure } from './fhir/BodyStructure.js';
import { Bundle } from './fhir/Bundle.js';
export { Bundle, BundleEntry, BundleEntryRequest, BundleEntryResponse, BundleEntrySearch, BundleLink } from './fhir/Bundle.js';
import { CapabilityStatement } from './fhir/CapabilityStatement.js';
export { CapabilityStatement, CapabilityStatementDocument, CapabilityStatementImplementation, CapabilityStatementMessaging, CapabilityStatementMessagingEndpoint, CapabilityStatementMessagingSupportedMessage, CapabilityStatementRest, CapabilityStatementRestInteraction, CapabilityStatementRestResource, CapabilityStatementRestResourceInteraction, CapabilityStatementRestResourceOperation, CapabilityStatementRestResourceSearchParam, CapabilityStatementRestSecurity, CapabilityStatementSoftware } from './fhir/CapabilityStatement.js';
import { CarePlan } from './fhir/CarePlan.js';
export { CarePlan, CarePlanActivity, CarePlanActivityDetail } from './fhir/CarePlan.js';
import { CareTeam } from './fhir/CareTeam.js';
export { CareTeam, CareTeamParticipant } from './fhir/CareTeam.js';
import { CatalogEntry } from './fhir/CatalogEntry.js';
export { CatalogEntry, CatalogEntryRelatedEntry } from './fhir/CatalogEntry.js';
import { ChargeItem } from './fhir/ChargeItem.js';
export { ChargeItem, ChargeItemPerformer } from './fhir/ChargeItem.js';
import { ChargeItemDefinition } from './fhir/ChargeItemDefinition.js';
export { ChargeItemDefinition, ChargeItemDefinitionApplicability, ChargeItemDefinitionPropertyGroup, ChargeItemDefinitionPropertyGroupPriceComponent } from './fhir/ChargeItemDefinition.js';
import { Claim } from './fhir/Claim.js';
export { Claim, ClaimAccident, ClaimCareTeam, ClaimDiagnosis, ClaimInsurance, ClaimItem, ClaimItemDetail, ClaimItemDetailSubDetail, ClaimPayee, ClaimProcedure, ClaimRelated, ClaimSupportingInfo } from './fhir/Claim.js';
import { ClaimResponse } from './fhir/ClaimResponse.js';
export { ClaimResponse, ClaimResponseAddItem, ClaimResponseAddItemDetail, ClaimResponseAddItemDetailSubDetail, ClaimResponseError, ClaimResponseInsurance, ClaimResponseItem, ClaimResponseItemAdjudication, ClaimResponseItemDetail, ClaimResponseItemDetailSubDetail, ClaimResponsePayment, ClaimResponseProcessNote, ClaimResponseTotal } from './fhir/ClaimResponse.js';
import { ClinicalImpression } from './fhir/ClinicalImpression.js';
export { ClinicalImpression, ClinicalImpressionFinding, ClinicalImpressionInvestigation } from './fhir/ClinicalImpression.js';
import { CodeSystem } from './fhir/CodeSystem.js';
export { CodeSystem, CodeSystemConcept, CodeSystemConceptDesignation, CodeSystemConceptProperty, CodeSystemFilter, CodeSystemProperty } from './fhir/CodeSystem.js';
import { Communication } from './fhir/Communication.js';
export { Communication, CommunicationPayload } from './fhir/Communication.js';
import { CommunicationRequest } from './fhir/CommunicationRequest.js';
export { CommunicationRequest, CommunicationRequestPayload } from './fhir/CommunicationRequest.js';
import { CompartmentDefinition } from './fhir/CompartmentDefinition.js';
export { CompartmentDefinition, CompartmentDefinitionResource } from './fhir/CompartmentDefinition.js';
import { Composition } from './fhir/Composition.js';
export { Composition, CompositionAttester, CompositionEvent, CompositionRelatesTo, CompositionSection } from './fhir/Composition.js';
import { ConceptMap } from './fhir/ConceptMap.js';
export { ConceptMap, ConceptMapGroup, ConceptMapGroupElement, ConceptMapGroupElementTarget, ConceptMapGroupElementTargetDependsOn, ConceptMapGroupUnmapped } from './fhir/ConceptMap.js';
import { Condition } from './fhir/Condition.js';
export { Condition, ConditionEvidence, ConditionStage } from './fhir/Condition.js';
import { Consent } from './fhir/Consent.js';
export { Consent, ConsentPolicy, ConsentProvision, ConsentProvisionActor, ConsentProvisionData, ConsentVerification } from './fhir/Consent.js';
import { Contract } from './fhir/Contract.js';
export { Contract, ContractContentDefinition, ContractFriendly, ContractLegal, ContractRule, ContractSigner, ContractTerm, ContractTermAction, ContractTermActionSubject, ContractTermAsset, ContractTermAssetContext, ContractTermAssetValuedItem, ContractTermOffer, ContractTermOfferAnswer, ContractTermOfferParty, ContractTermSecurityLabel } from './fhir/Contract.js';
import { Coverage } from './fhir/Coverage.js';
export { Coverage, CoverageClass, CoverageCostToBeneficiary, CoverageCostToBeneficiaryException } from './fhir/Coverage.js';
import { CoverageEligibilityRequest } from './fhir/CoverageEligibilityRequest.js';
export { CoverageEligibilityRequest, CoverageEligibilityRequestInsurance, CoverageEligibilityRequestItem, CoverageEligibilityRequestItemDiagnosis, CoverageEligibilityRequestSupportingInfo } from './fhir/CoverageEligibilityRequest.js';
import { CoverageEligibilityResponse } from './fhir/CoverageEligibilityResponse.js';
export { CoverageEligibilityResponse, CoverageEligibilityResponseError, CoverageEligibilityResponseInsurance, CoverageEligibilityResponseInsuranceItem, CoverageEligibilityResponseInsuranceItemBenefit } from './fhir/CoverageEligibilityResponse.js';
import { DetectedIssue } from './fhir/DetectedIssue.js';
export { DetectedIssue, DetectedIssueEvidence, DetectedIssueMitigation } from './fhir/DetectedIssue.js';
import { Device } from './fhir/Device.js';
export { Device, DeviceDeviceName, DeviceProperty, DeviceSpecialization, DeviceUdiCarrier, DeviceVersion } from './fhir/Device.js';
import { DeviceDefinition } from './fhir/DeviceDefinition.js';
export { DeviceDefinition, DeviceDefinitionCapability, DeviceDefinitionDeviceName, DeviceDefinitionMaterial, DeviceDefinitionProperty, DeviceDefinitionSpecialization, DeviceDefinitionUdiDeviceIdentifier } from './fhir/DeviceDefinition.js';
import { DeviceMetric } from './fhir/DeviceMetric.js';
export { DeviceMetric, DeviceMetricCalibration } from './fhir/DeviceMetric.js';
import { DeviceRequest } from './fhir/DeviceRequest.js';
export { DeviceRequest, DeviceRequestParameter } from './fhir/DeviceRequest.js';
import { DeviceUseStatement } from './fhir/DeviceUseStatement.js';
export { DeviceUseStatement } from './fhir/DeviceUseStatement.js';
import { DiagnosticReport } from './fhir/DiagnosticReport.js';
export { DiagnosticReport, DiagnosticReportMedia } from './fhir/DiagnosticReport.js';
import { DocumentManifest } from './fhir/DocumentManifest.js';
export { DocumentManifest, DocumentManifestRelated } from './fhir/DocumentManifest.js';
import { DocumentReference } from './fhir/DocumentReference.js';
export { DocumentReference, DocumentReferenceContent, DocumentReferenceContext, DocumentReferenceRelatesTo } from './fhir/DocumentReference.js';
import { EffectEvidenceSynthesis } from './fhir/EffectEvidenceSynthesis.js';
export { EffectEvidenceSynthesis, EffectEvidenceSynthesisCertainty, EffectEvidenceSynthesisCertaintyCertaintySubcomponent, EffectEvidenceSynthesisEffectEstimate, EffectEvidenceSynthesisEffectEstimatePrecisionEstimate, EffectEvidenceSynthesisResultsByExposure, EffectEvidenceSynthesisSampleSize } from './fhir/EffectEvidenceSynthesis.js';
import { Encounter } from './fhir/Encounter.js';
export { Encounter, EncounterClassHistory, EncounterDiagnosis, EncounterHospitalization, EncounterLocation, EncounterParticipant, EncounterStatusHistory } from './fhir/Encounter.js';
import { Endpoint } from './fhir/Endpoint.js';
export { Endpoint } from './fhir/Endpoint.js';
import { EnrollmentRequest } from './fhir/EnrollmentRequest.js';
export { EnrollmentRequest } from './fhir/EnrollmentRequest.js';
import { EnrollmentResponse } from './fhir/EnrollmentResponse.js';
export { EnrollmentResponse } from './fhir/EnrollmentResponse.js';
import { EpisodeOfCare } from './fhir/EpisodeOfCare.js';
export { EpisodeOfCare, EpisodeOfCareDiagnosis, EpisodeOfCareStatusHistory } from './fhir/EpisodeOfCare.js';
import { EventDefinition } from './fhir/EventDefinition.js';
export { EventDefinition } from './fhir/EventDefinition.js';
import { Evidence } from './fhir/Evidence.js';
export { Evidence } from './fhir/Evidence.js';
import { EvidenceVariable } from './fhir/EvidenceVariable.js';
export { EvidenceVariable, EvidenceVariableCharacteristic } from './fhir/EvidenceVariable.js';
import { ExampleScenario } from './fhir/ExampleScenario.js';
export { ExampleScenario, ExampleScenarioActor, ExampleScenarioInstance, ExampleScenarioInstanceContainedInstance, ExampleScenarioInstanceVersion, ExampleScenarioProcess, ExampleScenarioProcessStep, ExampleScenarioProcessStepAlternative, ExampleScenarioProcessStepOperation } from './fhir/ExampleScenario.js';
import { ExplanationOfBenefit } from './fhir/ExplanationOfBenefit.js';
export { ExplanationOfBenefit, ExplanationOfBenefitAccident, ExplanationOfBenefitAddItem, ExplanationOfBenefitAddItemDetail, ExplanationOfBenefitAddItemDetailSubDetail, ExplanationOfBenefitBenefitBalance, ExplanationOfBenefitBenefitBalanceFinancial, ExplanationOfBenefitCareTeam, ExplanationOfBenefitDiagnosis, ExplanationOfBenefitInsurance, ExplanationOfBenefitItem, ExplanationOfBenefitItemAdjudication, ExplanationOfBenefitItemDetail, ExplanationOfBenefitItemDetailSubDetail, ExplanationOfBenefitPayee, ExplanationOfBenefitPayment, ExplanationOfBenefitProcedure, ExplanationOfBenefitProcessNote, ExplanationOfBenefitRelated, ExplanationOfBenefitSupportingInfo, ExplanationOfBenefitTotal } from './fhir/ExplanationOfBenefit.js';
import { FamilyMemberHistory } from './fhir/FamilyMemberHistory.js';
export { FamilyMemberHistory, FamilyMemberHistoryCondition } from './fhir/FamilyMemberHistory.js';
import { Flag } from './fhir/Flag.js';
export { Flag } from './fhir/Flag.js';
import { Goal } from './fhir/Goal.js';
export { Goal, GoalTarget } from './fhir/Goal.js';
import { GraphDefinition } from './fhir/GraphDefinition.js';
export { GraphDefinition, GraphDefinitionLink, GraphDefinitionLinkTarget, GraphDefinitionLinkTargetCompartment } from './fhir/GraphDefinition.js';
import { Group } from './fhir/Group.js';
export { Group, GroupCharacteristic, GroupMember } from './fhir/Group.js';
import { GuidanceResponse } from './fhir/GuidanceResponse.js';
export { GuidanceResponse } from './fhir/GuidanceResponse.js';
import { HealthcareService } from './fhir/HealthcareService.js';
export { HealthcareService, HealthcareServiceAvailableTime, HealthcareServiceEligibility, HealthcareServiceNotAvailable } from './fhir/HealthcareService.js';
import { ImagingStudy } from './fhir/ImagingStudy.js';
export { ImagingStudy, ImagingStudySeries, ImagingStudySeriesInstance, ImagingStudySeriesPerformer } from './fhir/ImagingStudy.js';
import { Immunization } from './fhir/Immunization.js';
export { Immunization, ImmunizationEducation, ImmunizationPerformer, ImmunizationProtocolApplied, ImmunizationReaction } from './fhir/Immunization.js';
import { ImmunizationEvaluation } from './fhir/ImmunizationEvaluation.js';
export { ImmunizationEvaluation } from './fhir/ImmunizationEvaluation.js';
import { ImmunizationRecommendation } from './fhir/ImmunizationRecommendation.js';
export { ImmunizationRecommendation, ImmunizationRecommendationRecommendation, ImmunizationRecommendationRecommendationDateCriterion } from './fhir/ImmunizationRecommendation.js';
import { ImplementationGuide } from './fhir/ImplementationGuide.js';
export { ImplementationGuide, ImplementationGuideDefinition, ImplementationGuideDefinitionGrouping, ImplementationGuideDefinitionPage, ImplementationGuideDefinitionParameter, ImplementationGuideDefinitionResource, ImplementationGuideDefinitionTemplate, ImplementationGuideDependsOn, ImplementationGuideGlobal, ImplementationGuideManifest, ImplementationGuideManifestPage, ImplementationGuideManifestResource } from './fhir/ImplementationGuide.js';
import { InsurancePlan } from './fhir/InsurancePlan.js';
export { InsurancePlan, InsurancePlanContact, InsurancePlanCoverage, InsurancePlanCoverageBenefit, InsurancePlanCoverageBenefitLimit, InsurancePlanPlan, InsurancePlanPlanGeneralCost, InsurancePlanPlanSpecificCost, InsurancePlanPlanSpecificCostBenefit, InsurancePlanPlanSpecificCostBenefitCost } from './fhir/InsurancePlan.js';
import { Invoice } from './fhir/Invoice.js';
export { Invoice, InvoiceLineItem, InvoiceLineItemPriceComponent, InvoiceParticipant } from './fhir/Invoice.js';
import { Library } from './fhir/Library.js';
export { Library } from './fhir/Library.js';
import { Linkage } from './fhir/Linkage.js';
export { Linkage, LinkageItem } from './fhir/Linkage.js';
import { List } from './fhir/List.js';
export { List, ListEntry } from './fhir/List.js';
import { Location } from './fhir/Location.js';
export { Location, LocationHoursOfOperation, LocationPosition } from './fhir/Location.js';
import { Measure } from './fhir/Measure.js';
export { Measure, MeasureGroup, MeasureGroupPopulation, MeasureGroupStratifier, MeasureGroupStratifierComponent, MeasureSupplementalData } from './fhir/Measure.js';
import { MeasureReport } from './fhir/MeasureReport.js';
export { MeasureReport, MeasureReportGroup, MeasureReportGroupPopulation, MeasureReportGroupStratifier, MeasureReportGroupStratifierStratum, MeasureReportGroupStratifierStratumComponent, MeasureReportGroupStratifierStratumPopulation } from './fhir/MeasureReport.js';
import { Media } from './fhir/Media.js';
export { Media } from './fhir/Media.js';
import { Medication } from './fhir/Medication.js';
export { Medication, MedicationBatch, MedicationIngredient } from './fhir/Medication.js';
import { MedicationAdministration } from './fhir/MedicationAdministration.js';
export { MedicationAdministration, MedicationAdministrationDosage, MedicationAdministrationPerformer } from './fhir/MedicationAdministration.js';
import { MedicationDispense } from './fhir/MedicationDispense.js';
export { MedicationDispense, MedicationDispensePerformer, MedicationDispenseSubstitution } from './fhir/MedicationDispense.js';
import { MedicationKnowledge } from './fhir/MedicationKnowledge.js';
export { MedicationKnowledge, MedicationKnowledgeAdministrationGuidelines, MedicationKnowledgeAdministrationGuidelinesDosage, MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics, MedicationKnowledgeCost, MedicationKnowledgeDrugCharacteristic, MedicationKnowledgeIngredient, MedicationKnowledgeKinetics, MedicationKnowledgeMedicineClassification, MedicationKnowledgeMonitoringProgram, MedicationKnowledgeMonograph, MedicationKnowledgePackaging, MedicationKnowledgeRegulatory, MedicationKnowledgeRegulatoryMaxDispense, MedicationKnowledgeRegulatorySchedule, MedicationKnowledgeRegulatorySubstitution, MedicationKnowledgeRelatedMedicationKnowledge } from './fhir/MedicationKnowledge.js';
import { MedicationRequest } from './fhir/MedicationRequest.js';
export { MedicationRequest, MedicationRequestDispenseRequest, MedicationRequestDispenseRequestInitialFill, MedicationRequestSubstitution } from './fhir/MedicationRequest.js';
import { MedicationStatement } from './fhir/MedicationStatement.js';
export { MedicationStatement } from './fhir/MedicationStatement.js';
import { MedicinalProduct } from './fhir/MedicinalProduct.js';
export { MedicinalProduct, MedicinalProductManufacturingBusinessOperation, MedicinalProductName, MedicinalProductNameCountryLanguage, MedicinalProductNameNamePart, MedicinalProductSpecialDesignation } from './fhir/MedicinalProduct.js';
import { MedicinalProductAuthorization } from './fhir/MedicinalProductAuthorization.js';
export { MedicinalProductAuthorization, MedicinalProductAuthorizationJurisdictionalAuthorization, MedicinalProductAuthorizationProcedure } from './fhir/MedicinalProductAuthorization.js';
import { MedicinalProductContraindication } from './fhir/MedicinalProductContraindication.js';
export { MedicinalProductContraindication, MedicinalProductContraindicationOtherTherapy } from './fhir/MedicinalProductContraindication.js';
import { MedicinalProductIndication } from './fhir/MedicinalProductIndication.js';
export { MedicinalProductIndication, MedicinalProductIndicationOtherTherapy } from './fhir/MedicinalProductIndication.js';
import { MedicinalProductIngredient } from './fhir/MedicinalProductIngredient.js';
export { MedicinalProductIngredient, MedicinalProductIngredientSpecifiedSubstance, MedicinalProductIngredientSpecifiedSubstanceStrength, MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength, MedicinalProductIngredientSubstance } from './fhir/MedicinalProductIngredient.js';
import { MedicinalProductInteraction } from './fhir/MedicinalProductInteraction.js';
export { MedicinalProductInteraction, MedicinalProductInteractionInteractant } from './fhir/MedicinalProductInteraction.js';
import { MedicinalProductManufactured } from './fhir/MedicinalProductManufactured.js';
export { MedicinalProductManufactured } from './fhir/MedicinalProductManufactured.js';
import { MedicinalProductPackaged } from './fhir/MedicinalProductPackaged.js';
export { MedicinalProductPackaged, MedicinalProductPackagedBatchIdentifier, MedicinalProductPackagedPackageItem } from './fhir/MedicinalProductPackaged.js';
import { MedicinalProductPharmaceutical } from './fhir/MedicinalProductPharmaceutical.js';
export { MedicinalProductPharmaceutical, MedicinalProductPharmaceuticalCharacteristics, MedicinalProductPharmaceuticalRouteOfAdministration, MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies, MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod } from './fhir/MedicinalProductPharmaceutical.js';
import { MedicinalProductUndesirableEffect } from './fhir/MedicinalProductUndesirableEffect.js';
export { MedicinalProductUndesirableEffect } from './fhir/MedicinalProductUndesirableEffect.js';
import { MessageDefinition } from './fhir/MessageDefinition.js';
export { MessageDefinition, MessageDefinitionAllowedResponse, MessageDefinitionFocus } from './fhir/MessageDefinition.js';
import { MessageHeader } from './fhir/MessageHeader.js';
export { MessageHeader, MessageHeaderDestination, MessageHeaderResponse, MessageHeaderSource } from './fhir/MessageHeader.js';
import { MolecularSequence } from './fhir/MolecularSequence.js';
export { MolecularSequence, MolecularSequenceQuality, MolecularSequenceQualityRoc, MolecularSequenceReferenceSeq, MolecularSequenceRepository, MolecularSequenceStructureVariant, MolecularSequenceStructureVariantInner, MolecularSequenceStructureVariantOuter, MolecularSequenceVariant } from './fhir/MolecularSequence.js';
import { NamingSystem } from './fhir/NamingSystem.js';
export { NamingSystem, NamingSystemUniqueId } from './fhir/NamingSystem.js';
import { NutritionOrder } from './fhir/NutritionOrder.js';
export { NutritionOrder, NutritionOrderEnteralFormula, NutritionOrderEnteralFormulaAdministration, NutritionOrderOralDiet, NutritionOrderOralDietNutrient, NutritionOrderOralDietTexture, NutritionOrderSupplement } from './fhir/NutritionOrder.js';
import { Observation } from './fhir/Observation.js';
export { Observation, ObservationComponent, ObservationReferenceRange } from './fhir/Observation.js';
import { ObservationDefinition } from './fhir/ObservationDefinition.js';
export { ObservationDefinition, ObservationDefinitionQualifiedInterval, ObservationDefinitionQuantitativeDetails } from './fhir/ObservationDefinition.js';
import { OperationDefinition } from './fhir/OperationDefinition.js';
export { OperationDefinition, OperationDefinitionOverload, OperationDefinitionParameter, OperationDefinitionParameterBinding, OperationDefinitionParameterReferencedFrom } from './fhir/OperationDefinition.js';
import { OperationOutcome } from './fhir/OperationOutcome.js';
export { OperationOutcome, OperationOutcomeIssue } from './fhir/OperationOutcome.js';
import { Organization } from './fhir/Organization.js';
export { Organization, OrganizationContact } from './fhir/Organization.js';
import { OrganizationAffiliation } from './fhir/OrganizationAffiliation.js';
export { OrganizationAffiliation } from './fhir/OrganizationAffiliation.js';
import { Parameters } from './fhir/Parameters.js';
export { Parameters, ParametersParameter } from './fhir/Parameters.js';
import { Patient } from './fhir/Patient.js';
export { Patient, PatientCommunication, PatientContact, PatientLink } from './fhir/Patient.js';
import { PaymentNotice } from './fhir/PaymentNotice.js';
export { PaymentNotice } from './fhir/PaymentNotice.js';
import { PaymentReconciliation } from './fhir/PaymentReconciliation.js';
export { PaymentReconciliation, PaymentReconciliationDetail, PaymentReconciliationProcessNote } from './fhir/PaymentReconciliation.js';
import { Person } from './fhir/Person.js';
export { Person, PersonLink } from './fhir/Person.js';
import { PlanDefinition } from './fhir/PlanDefinition.js';
export { PlanDefinition, PlanDefinitionAction, PlanDefinitionActionCondition, PlanDefinitionActionDynamicValue, PlanDefinitionActionParticipant, PlanDefinitionActionRelatedAction, PlanDefinitionGoal, PlanDefinitionGoalTarget } from './fhir/PlanDefinition.js';
import { Practitioner } from './fhir/Practitioner.js';
export { Practitioner, PractitionerQualification } from './fhir/Practitioner.js';
import { PractitionerRole } from './fhir/PractitionerRole.js';
export { PractitionerRole, PractitionerRoleAvailableTime, PractitionerRoleNotAvailable } from './fhir/PractitionerRole.js';
import { Procedure } from './fhir/Procedure.js';
export { Procedure, ProcedureFocalDevice, ProcedurePerformer } from './fhir/Procedure.js';
import { Provenance } from './fhir/Provenance.js';
export { Provenance, ProvenanceAgent, ProvenanceEntity } from './fhir/Provenance.js';
import { Questionnaire } from './fhir/Questionnaire.js';
export { Questionnaire, QuestionnaireItem, QuestionnaireItemAnswerOption, QuestionnaireItemEnableWhen, QuestionnaireItemInitial } from './fhir/Questionnaire.js';
import { QuestionnaireResponse } from './fhir/QuestionnaireResponse.js';
export { QuestionnaireResponse, QuestionnaireResponseItem, QuestionnaireResponseItemAnswer } from './fhir/QuestionnaireResponse.js';
import { RelatedPerson } from './fhir/RelatedPerson.js';
export { RelatedPerson, RelatedPersonCommunication } from './fhir/RelatedPerson.js';
import { RequestGroup } from './fhir/RequestGroup.js';
export { RequestGroup, RequestGroupAction, RequestGroupActionCondition, RequestGroupActionRelatedAction } from './fhir/RequestGroup.js';
import { ResearchDefinition } from './fhir/ResearchDefinition.js';
export { ResearchDefinition } from './fhir/ResearchDefinition.js';
import { ResearchElementDefinition } from './fhir/ResearchElementDefinition.js';
export { ResearchElementDefinition, ResearchElementDefinitionCharacteristic } from './fhir/ResearchElementDefinition.js';
import { ResearchStudy } from './fhir/ResearchStudy.js';
export { ResearchStudy, ResearchStudyArm, ResearchStudyObjective } from './fhir/ResearchStudy.js';
import { ResearchSubject } from './fhir/ResearchSubject.js';
export { ResearchSubject } from './fhir/ResearchSubject.js';
import { RiskAssessment } from './fhir/RiskAssessment.js';
export { RiskAssessment, RiskAssessmentPrediction } from './fhir/RiskAssessment.js';
import { RiskEvidenceSynthesis } from './fhir/RiskEvidenceSynthesis.js';
export { RiskEvidenceSynthesis, RiskEvidenceSynthesisCertainty, RiskEvidenceSynthesisCertaintyCertaintySubcomponent, RiskEvidenceSynthesisRiskEstimate, RiskEvidenceSynthesisRiskEstimatePrecisionEstimate, RiskEvidenceSynthesisSampleSize } from './fhir/RiskEvidenceSynthesis.js';
import { Schedule } from './fhir/Schedule.js';
export { Schedule } from './fhir/Schedule.js';
import { SearchParameter } from './fhir/SearchParameter.js';
export { SearchParameter, SearchParameterComponent } from './fhir/SearchParameter.js';
import { ServiceRequest } from './fhir/ServiceRequest.js';
export { ServiceRequest } from './fhir/ServiceRequest.js';
import { Slot } from './fhir/Slot.js';
export { Slot } from './fhir/Slot.js';
import { Specimen } from './fhir/Specimen.js';
export { Specimen, SpecimenCollection, SpecimenContainer, SpecimenProcessing } from './fhir/Specimen.js';
import { SpecimenDefinition } from './fhir/SpecimenDefinition.js';
export { SpecimenDefinition, SpecimenDefinitionTypeTested, SpecimenDefinitionTypeTestedContainer, SpecimenDefinitionTypeTestedContainerAdditive, SpecimenDefinitionTypeTestedHandling } from './fhir/SpecimenDefinition.js';
import { StructureDefinition } from './fhir/StructureDefinition.js';
export { StructureDefinition, StructureDefinitionContext, StructureDefinitionDifferential, StructureDefinitionMapping, StructureDefinitionSnapshot } from './fhir/StructureDefinition.js';
import { StructureMap } from './fhir/StructureMap.js';
export { StructureMap, StructureMapGroup, StructureMapGroupInput, StructureMapGroupRule, StructureMapGroupRuleDependent, StructureMapGroupRuleSource, StructureMapGroupRuleTarget, StructureMapGroupRuleTargetParameter, StructureMapStructure } from './fhir/StructureMap.js';
import { Subscription } from './fhir/Subscription.js';
export { Subscription, SubscriptionChannel } from './fhir/Subscription.js';
import { Substance } from './fhir/Substance.js';
export { Substance, SubstanceIngredient, SubstanceInstance } from './fhir/Substance.js';
import { SubstanceNucleicAcid } from './fhir/SubstanceNucleicAcid.js';
export { SubstanceNucleicAcid, SubstanceNucleicAcidSubunit, SubstanceNucleicAcidSubunitLinkage, SubstanceNucleicAcidSubunitSugar } from './fhir/SubstanceNucleicAcid.js';
import { SubstancePolymer } from './fhir/SubstancePolymer.js';
export { SubstancePolymer, SubstancePolymerMonomerSet, SubstancePolymerMonomerSetStartingMaterial, SubstancePolymerRepeat, SubstancePolymerRepeatRepeatUnit, SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation, SubstancePolymerRepeatRepeatUnitStructuralRepresentation } from './fhir/SubstancePolymer.js';
import { SubstanceProtein } from './fhir/SubstanceProtein.js';
export { SubstanceProtein, SubstanceProteinSubunit } from './fhir/SubstanceProtein.js';
import { SubstanceReferenceInformation } from './fhir/SubstanceReferenceInformation.js';
export { SubstanceReferenceInformation, SubstanceReferenceInformationClassification, SubstanceReferenceInformationGene, SubstanceReferenceInformationGeneElement, SubstanceReferenceInformationTarget } from './fhir/SubstanceReferenceInformation.js';
import { SubstanceSourceMaterial } from './fhir/SubstanceSourceMaterial.js';
export { SubstanceSourceMaterial, SubstanceSourceMaterialFractionDescription, SubstanceSourceMaterialOrganism, SubstanceSourceMaterialOrganismAuthor, SubstanceSourceMaterialOrganismHybrid, SubstanceSourceMaterialOrganismOrganismGeneral, SubstanceSourceMaterialPartDescription } from './fhir/SubstanceSourceMaterial.js';
import { SubstanceSpecification } from './fhir/SubstanceSpecification.js';
export { SubstanceSpecification, SubstanceSpecificationCode, SubstanceSpecificationMoiety, SubstanceSpecificationName, SubstanceSpecificationNameOfficial, SubstanceSpecificationProperty, SubstanceSpecificationRelationship, SubstanceSpecificationStructure, SubstanceSpecificationStructureIsotope, SubstanceSpecificationStructureIsotopeMolecularWeight, SubstanceSpecificationStructureRepresentation } from './fhir/SubstanceSpecification.js';
import { SupplyDelivery } from './fhir/SupplyDelivery.js';
export { SupplyDelivery, SupplyDeliverySuppliedItem } from './fhir/SupplyDelivery.js';
import { SupplyRequest } from './fhir/SupplyRequest.js';
export { SupplyRequest, SupplyRequestParameter } from './fhir/SupplyRequest.js';
import { Task } from './fhir/Task.js';
export { Task, TaskInput, TaskOutput, TaskRestriction } from './fhir/Task.js';
import { TerminologyCapabilities } from './fhir/TerminologyCapabilities.js';
export { TerminologyCapabilities, TerminologyCapabilitiesClosure, TerminologyCapabilitiesCodeSystem, TerminologyCapabilitiesCodeSystemVersion, TerminologyCapabilitiesCodeSystemVersionFilter, TerminologyCapabilitiesExpansion, TerminologyCapabilitiesExpansionParameter, TerminologyCapabilitiesImplementation, TerminologyCapabilitiesSoftware, TerminologyCapabilitiesTranslation, TerminologyCapabilitiesValidateCode } from './fhir/TerminologyCapabilities.js';
import { TestReport } from './fhir/TestReport.js';
export { TestReport, TestReportParticipant, TestReportSetup, TestReportSetupAction, TestReportSetupActionAssert, TestReportSetupActionOperation, TestReportTeardown, TestReportTeardownAction, TestReportTest, TestReportTestAction } from './fhir/TestReport.js';
import { TestScript } from './fhir/TestScript.js';
export { TestScript, TestScriptDestination, TestScriptFixture, TestScriptMetadata, TestScriptMetadataCapability, TestScriptMetadataLink, TestScriptOrigin, TestScriptSetup, TestScriptSetupAction, TestScriptSetupActionAssert, TestScriptSetupActionOperation, TestScriptSetupActionOperationRequestHeader, TestScriptTeardown, TestScriptTeardownAction, TestScriptTest, TestScriptTestAction, TestScriptVariable } from './fhir/TestScript.js';
import { ValueSet } from './fhir/ValueSet.js';
export { ValueSet, ValueSetCompose, ValueSetComposeInclude, ValueSetComposeIncludeConcept, ValueSetComposeIncludeConceptDesignation, ValueSetComposeIncludeFilter, ValueSetExpansion, ValueSetExpansionContains, ValueSetExpansionParameter } from './fhir/ValueSet.js';
import { VerificationResult } from './fhir/VerificationResult.js';
export { VerificationResult, VerificationResultAttestation, VerificationResultPrimarySource, VerificationResultValidator } from './fhir/VerificationResult.js';
import { VisionPrescription } from './fhir/VisionPrescription.js';
export { VisionPrescription, VisionPrescriptionLensSpecification, VisionPrescriptionLensSpecificationPrism } from './fhir/VisionPrescription.js';

// <auto-generated/>
/**
 * Factory creator for FHIR Resources
 */
function resourceFactory(source) {
    switch (source["resourceType"]) {
        case "Account": return new Account(source);
        case "ActivityDefinition": return new ActivityDefinition(source);
        case "AdverseEvent": return new AdverseEvent(source);
        case "AllergyIntolerance": return new AllergyIntolerance(source);
        case "Appointment": return new Appointment(source);
        case "AppointmentResponse": return new AppointmentResponse(source);
        case "AuditEvent": return new AuditEvent(source);
        case "Basic": return new Basic(source);
        case "Binary": return new Binary(source);
        case "BiologicallyDerivedProduct": return new BiologicallyDerivedProduct(source);
        case "BodyStructure": return new BodyStructure(source);
        case "Bundle": return new Bundle(source);
        case "CapabilityStatement": return new CapabilityStatement(source);
        case "CarePlan": return new CarePlan(source);
        case "CareTeam": return new CareTeam(source);
        case "CatalogEntry": return new CatalogEntry(source);
        case "ChargeItem": return new ChargeItem(source);
        case "ChargeItemDefinition": return new ChargeItemDefinition(source);
        case "Claim": return new Claim(source);
        case "ClaimResponse": return new ClaimResponse(source);
        case "ClinicalImpression": return new ClinicalImpression(source);
        case "CodeSystem": return new CodeSystem(source);
        case "Communication": return new Communication(source);
        case "CommunicationRequest": return new CommunicationRequest(source);
        case "CompartmentDefinition": return new CompartmentDefinition(source);
        case "Composition": return new Composition(source);
        case "ConceptMap": return new ConceptMap(source);
        case "Condition": return new Condition(source);
        case "Consent": return new Consent(source);
        case "Contract": return new Contract(source);
        case "Coverage": return new Coverage(source);
        case "CoverageEligibilityRequest": return new CoverageEligibilityRequest(source);
        case "CoverageEligibilityResponse": return new CoverageEligibilityResponse(source);
        case "DetectedIssue": return new DetectedIssue(source);
        case "Device": return new Device(source);
        case "DeviceDefinition": return new DeviceDefinition(source);
        case "DeviceMetric": return new DeviceMetric(source);
        case "DeviceRequest": return new DeviceRequest(source);
        case "DeviceUseStatement": return new DeviceUseStatement(source);
        case "DiagnosticReport": return new DiagnosticReport(source);
        case "DocumentManifest": return new DocumentManifest(source);
        case "DocumentReference": return new DocumentReference(source);
        case "DomainResource": return new DomainResource(source);
        case "EffectEvidenceSynthesis": return new EffectEvidenceSynthesis(source);
        case "Encounter": return new Encounter(source);
        case "Endpoint": return new Endpoint(source);
        case "EnrollmentRequest": return new EnrollmentRequest(source);
        case "EnrollmentResponse": return new EnrollmentResponse(source);
        case "EpisodeOfCare": return new EpisodeOfCare(source);
        case "EventDefinition": return new EventDefinition(source);
        case "Evidence": return new Evidence(source);
        case "EvidenceVariable": return new EvidenceVariable(source);
        case "ExampleScenario": return new ExampleScenario(source);
        case "ExplanationOfBenefit": return new ExplanationOfBenefit(source);
        case "FamilyMemberHistory": return new FamilyMemberHistory(source);
        case "Flag": return new Flag(source);
        case "Goal": return new Goal(source);
        case "GraphDefinition": return new GraphDefinition(source);
        case "Group": return new Group(source);
        case "GuidanceResponse": return new GuidanceResponse(source);
        case "HealthcareService": return new HealthcareService(source);
        case "ImagingStudy": return new ImagingStudy(source);
        case "Immunization": return new Immunization(source);
        case "ImmunizationEvaluation": return new ImmunizationEvaluation(source);
        case "ImmunizationRecommendation": return new ImmunizationRecommendation(source);
        case "ImplementationGuide": return new ImplementationGuide(source);
        case "InsurancePlan": return new InsurancePlan(source);
        case "Invoice": return new Invoice(source);
        case "Library": return new Library(source);
        case "Linkage": return new Linkage(source);
        case "List": return new List(source);
        case "Location": return new Location(source);
        case "Measure": return new Measure(source);
        case "MeasureReport": return new MeasureReport(source);
        case "Media": return new Media(source);
        case "Medication": return new Medication(source);
        case "MedicationAdministration": return new MedicationAdministration(source);
        case "MedicationDispense": return new MedicationDispense(source);
        case "MedicationKnowledge": return new MedicationKnowledge(source);
        case "MedicationRequest": return new MedicationRequest(source);
        case "MedicationStatement": return new MedicationStatement(source);
        case "MedicinalProduct": return new MedicinalProduct(source);
        case "MedicinalProductAuthorization": return new MedicinalProductAuthorization(source);
        case "MedicinalProductContraindication": return new MedicinalProductContraindication(source);
        case "MedicinalProductIndication": return new MedicinalProductIndication(source);
        case "MedicinalProductIngredient": return new MedicinalProductIngredient(source);
        case "MedicinalProductInteraction": return new MedicinalProductInteraction(source);
        case "MedicinalProductManufactured": return new MedicinalProductManufactured(source);
        case "MedicinalProductPackaged": return new MedicinalProductPackaged(source);
        case "MedicinalProductPharmaceutical": return new MedicinalProductPharmaceutical(source);
        case "MedicinalProductUndesirableEffect": return new MedicinalProductUndesirableEffect(source);
        case "MessageDefinition": return new MessageDefinition(source);
        case "MessageHeader": return new MessageHeader(source);
        case "MolecularSequence": return new MolecularSequence(source);
        case "NamingSystem": return new NamingSystem(source);
        case "NutritionOrder": return new NutritionOrder(source);
        case "Observation": return new Observation(source);
        case "ObservationDefinition": return new ObservationDefinition(source);
        case "OperationDefinition": return new OperationDefinition(source);
        case "OperationOutcome": return new OperationOutcome(source);
        case "Organization": return new Organization(source);
        case "OrganizationAffiliation": return new OrganizationAffiliation(source);
        case "Parameters": return new Parameters(source);
        case "Patient": return new Patient(source);
        case "PaymentNotice": return new PaymentNotice(source);
        case "PaymentReconciliation": return new PaymentReconciliation(source);
        case "Person": return new Person(source);
        case "PlanDefinition": return new PlanDefinition(source);
        case "Practitioner": return new Practitioner(source);
        case "PractitionerRole": return new PractitionerRole(source);
        case "Procedure": return new Procedure(source);
        case "Provenance": return new Provenance(source);
        case "Questionnaire": return new Questionnaire(source);
        case "QuestionnaireResponse": return new QuestionnaireResponse(source);
        case "RelatedPerson": return new RelatedPerson(source);
        case "RequestGroup": return new RequestGroup(source);
        case "ResearchDefinition": return new ResearchDefinition(source);
        case "ResearchElementDefinition": return new ResearchElementDefinition(source);
        case "ResearchStudy": return new ResearchStudy(source);
        case "ResearchSubject": return new ResearchSubject(source);
        case "Resource": return new Resource(source);
        case "RiskAssessment": return new RiskAssessment(source);
        case "RiskEvidenceSynthesis": return new RiskEvidenceSynthesis(source);
        case "Schedule": return new Schedule(source);
        case "SearchParameter": return new SearchParameter(source);
        case "ServiceRequest": return new ServiceRequest(source);
        case "Slot": return new Slot(source);
        case "Specimen": return new Specimen(source);
        case "SpecimenDefinition": return new SpecimenDefinition(source);
        case "StructureDefinition": return new StructureDefinition(source);
        case "StructureMap": return new StructureMap(source);
        case "Subscription": return new Subscription(source);
        case "Substance": return new Substance(source);
        case "SubstanceNucleicAcid": return new SubstanceNucleicAcid(source);
        case "SubstancePolymer": return new SubstancePolymer(source);
        case "SubstanceProtein": return new SubstanceProtein(source);
        case "SubstanceReferenceInformation": return new SubstanceReferenceInformation(source);
        case "SubstanceSourceMaterial": return new SubstanceSourceMaterial(source);
        case "SubstanceSpecification": return new SubstanceSpecification(source);
        case "SupplyDelivery": return new SupplyDelivery(source);
        case "SupplyRequest": return new SupplyRequest(source);
        case "Task": return new Task(source);
        case "TerminologyCapabilities": return new TerminologyCapabilities(source);
        case "TestReport": return new TestReport(source);
        case "TestScript": return new TestScript(source);
        case "ValueSet": return new ValueSet(source);
        case "VerificationResult": return new VerificationResult(source);
        case "VisionPrescription": return new VisionPrescription(source);
        default: return null;
    }
}
/**
 * Function to remove invalid element values from serialization
 * @param obj
 * @returns
 */
function fhirToJson(obj) {
    var _a;
    var c = {};
    var _loop_1 = function (key) {
        if ((obj[key] === undefined) ||
            (obj[key] === null) ||
            (obj[key] === '') ||
            (obj[key] === NaN)) {
            return "continue";
        }
        if (key.startsWith('__')) {
            return "continue";
        }
        var dKey = key + (obj['__' + key + 'IsChoice'] ? ((_a = obj[key]['__dataType']) !== null && _a !== void 0 ? _a : '') : '');
        if (Array.isArray(obj[key])) {
            if (obj[key].length === 0) {
                return "continue";
            }
            if (obj[key][0]['__isPrimitive']) {
                var eName_1 = '_' + dKey;
                var foundAnyVal_1 = false;
                var foundAnyExt_1 = false;
                c[dKey] = [];
                c[eName_1] = [];
                obj[key].forEach(function (av) {
                    var addElement = false;
                    if ((av['value'] !== undefined) && (av['value'] !== null)) {
                        c[dKey].push(av.valueOf());
                        foundAnyVal_1 = true;
                        addElement = true;
                    }
                    else {
                        c[dKey].push(null);
                    }
                    var ao = {};
                    if (av.id) {
                        ao['id'] = av.id;
                    }
                    if (av.extension) {
                        ao['extension'] = [];
                        av.extension.forEach(function (e) {
                            ao['extension'].push(fhirToJson(e));
                        });
                    }
                    if (Object.keys(ao).length !== 0) {
                        c[eName_1].push(ao);
                        foundAnyExt_1 = true;
                        addElement = true;
                    }
                    else {
                        c[eName_1].push(null);
                    }
                    if (!addElement) {
                        c[dKey].pop();
                        c[eName_1].pop();
                    }
                });
                if (!foundAnyVal_1) {
                    delete c[dKey];
                }
                if (!foundAnyExt_1) {
                    delete c[eName_1];
                }
            }
            else if (obj[key][0]['__dataType']) {
                c[dKey] = [];
                obj[key].forEach(function (v) {
                    c[dKey].push(fhirToJson(v));
                });
            }
            else {
                c[dKey] = obj[key];
            }
        }
        else {
            if (obj[key]['__isPrimitive']) {
                if (obj[key]['value']) {
                    c[dKey] = obj[key].valueOf();
                }
                var eName_2 = '_' + dKey;
                c[eName_2] = {};
                if (obj[key]['id']) {
                    c[eName_2]['id'] = obj[key]['id'];
                }
                if (obj[key]['extension']) {
                    c[eName_2]['extension'] = [];
                    obj[key]['extension'].forEach(function (e) {
                        c[eName_2]['extension'].push(fhirToJson(e));
                    });
                }
                if (Object.keys(c[eName_2]).length === 0) {
                    delete c[eName_2];
                }
            }
            else if (obj[key]['__dataType']) {
                c[dKey] = fhirToJson(obj[key]);
            }
            else {
                c[dKey] = obj[key];
            }
        }
    };
    for (var key in obj) {
        _loop_1(key);
    }
    return c;
}

export { fhirToJson, resourceFactory };
//# sourceMappingURL=fhir.js.map
