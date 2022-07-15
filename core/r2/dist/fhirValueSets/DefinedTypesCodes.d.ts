/**
 * Either a resource or a data type.
 */
export declare const DefinedTypesCodes: {
    /**
     * Account: A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centres, etc.
     */
    readonly Account: "Account";
    /**
     * Address: There is a variety of postal address formats defined around the world. This format defines a superset that is the basis for all addresses around the world.
     */
    readonly Address: "Address";
    /**
     * Code: Age
     */
    readonly Age: "Age";
    /**
     * AllergyIntolerance: Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
     */
    readonly AllergyIntolerance: "AllergyIntolerance";
    /**
     * Annotation: A  text note which also  contains information about who made the statement and when.
     */
    readonly Annotation: "Annotation";
    /**
     * Appointment: A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
     */
    readonly Appointment: "Appointment";
    /**
     * AppointmentResponse: A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
     */
    readonly AppointmentResponse: "AppointmentResponse";
    /**
     * Attachment: For referring to data content defined in other formats.
     */
    readonly Attachment: "Attachment";
    /**
     * AuditEvent: A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
     */
    readonly AuditEvent: "AuditEvent";
    /**
     * BackboneElement: Base definition for all elements that are defined inside a resource - but not those in a data type.
     */
    readonly BackboneElement: "BackboneElement";
    /**
     * base64Binary: A stream of bytes
     */
    readonly Base64Binary: "base64Binary";
    /**
     * Basic: Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
     */
    readonly Basic: "Basic";
    /**
     * Binary: A binary resource can contain any content, whether text, image, pdf, zip archive, etc.
     */
    readonly Binary: "Binary";
    /**
     * BodySite: Record details about the anatomical location of a specimen or body part.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
     */
    readonly BodySite: "BodySite";
    /**
     * boolean: Value of "true" or "false"
     */
    readonly VALBoolean: "boolean";
    /**
     * Bundle: A container for a collection of resources.
     */
    readonly Bundle: "Bundle";
    /**
     * CarePlan: Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
     */
    readonly CarePlan: "CarePlan";
    /**
     * Claim: A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
     */
    readonly Claim: "Claim";
    /**
     * ClaimResponse: This resource provides the adjudication details from the processing of a Claim resource.
     */
    readonly ClaimResponse: "ClaimResponse";
    /**
     * ClinicalImpression: A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
     */
    readonly ClinicalImpression: "ClinicalImpression";
    /**
     * code: A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
     */
    readonly Code: "code";
    /**
     * CodeableConcept: A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
     */
    readonly CodeableConcept: "CodeableConcept";
    /**
     * Coding: A reference to a code defined by a terminology system.
     */
    readonly Coding: "Coding";
    /**
     * Communication: An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency was notified about a reportable condition.
     */
    readonly Communication: "Communication";
    /**
     * CommunicationRequest: A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
     */
    readonly CommunicationRequest: "CommunicationRequest";
    /**
     * Composition: A set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. While a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained.
     */
    readonly Composition: "Composition";
    /**
     * ConceptMap: A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.
     */
    readonly ConceptMap: "ConceptMap";
    /**
     * Condition: Use to record detailed information about conditions, problems or diagnoses recognized by a clinician. There are many uses including: recording a diagnosis during an encounter; populating a problem list or a summary statement, such as a discharge summary.
     */
    readonly Condition: "Condition";
    /**
     * Conformance: A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
    readonly Conformance: "Conformance";
    /**
     * ContactPoint: Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
     */
    readonly ContactPoint: "ContactPoint";
    /**
     * Contract: A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
     */
    readonly Contract: "Contract";
    /**
     * Code: Count
     */
    readonly Count: "Count";
    /**
     * Coverage: Financial instrument which may be used to pay for or reimburse health care products and services.
     */
    readonly Coverage: "Coverage";
    /**
     * DataElement: The formal description of a single piece of information that can be gathered and reported.
     */
    readonly DataElement: "DataElement";
    /**
     * date: A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
     */
    readonly Date: "date";
    /**
     * dateTime: A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.
     */
    readonly DateTime: "dateTime";
    /**
     * decimal: A rational number with implicit precision
     */
    readonly Decimal: "decimal";
    /**
     * DetectedIssue: Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
     */
    readonly DetectedIssue: "DetectedIssue";
    /**
     * Device: This resource identifies an instance of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.  Medical devices includes durable (reusable) medical equipment, implantable devices, as well as disposable equipment used for diagnostic, treatment, and research for healthcare and public health.  Non-medical devices may include items such as a machine, cellphone, computer, application, etc.
     */
    readonly Device: "Device";
    /**
     * DeviceComponent: Describes the characteristics, operational status and capabilities of a medical-related component of a medical device.
     */
    readonly DeviceComponent: "DeviceComponent";
    /**
     * DeviceMetric: Describes a measurement, calculation or setting capability of a medical device.
     */
    readonly DeviceMetric: "DeviceMetric";
    /**
     * DeviceUseRequest: Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
     */
    readonly DeviceUseRequest: "DeviceUseRequest";
    /**
     * DeviceUseStatement: A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
     */
    readonly DeviceUseStatement: "DeviceUseStatement";
    /**
     * DiagnosticOrder: A record of a request for a diagnostic investigation service to be performed.
     */
    readonly DiagnosticOrder: "DiagnosticOrder";
    /**
     * DiagnosticReport: The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
     */
    readonly DiagnosticReport: "DiagnosticReport";
    /**
     * Code: Distance
     */
    readonly Distance: "Distance";
    /**
     * DocumentManifest: A manifest that defines a set of documents.
     */
    readonly DocumentManifest: "DocumentManifest";
    /**
     * DocumentReference: A reference to a document .
     */
    readonly DocumentReference: "DocumentReference";
    /**
     * DomainResource: --- Abstract Type! ---A resource that includes narrative, extensions, and contained resources.
     */
    readonly DomainResource: "DomainResource";
    /**
     * Code: Duration
     */
    readonly Duration: "Duration";
    /**
     * Element: Base definition for all elements in a resource.
     */
    readonly VALElement: "Element";
    /**
     * ElementDefinition: Captures constraints on each element within the resource, profile, or extension.
     */
    readonly ElementDefinition: "ElementDefinition";
    /**
     * EligibilityRequest: This resource provides the insurance eligibility details from the insurer regarding a specified coverage and optionally some class of service.
     */
    readonly EligibilityRequest: "EligibilityRequest";
    /**
     * EligibilityResponse: This resource provides eligibility and plan details from the processing of an Eligibility resource.
     */
    readonly EligibilityResponse: "EligibilityResponse";
    /**
     * Encounter: An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
     */
    readonly Encounter: "Encounter";
    /**
     * EnrollmentRequest: This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
     */
    readonly EnrollmentRequest: "EnrollmentRequest";
    /**
     * EnrollmentResponse: This resource provides enrollment and plan details from the processing of an Enrollment resource.
     */
    readonly EnrollmentResponse: "EnrollmentResponse";
    /**
     * EpisodeOfCare: An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
     */
    readonly EpisodeOfCare: "EpisodeOfCare";
    /**
     * ExplanationOfBenefit: This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
     */
    readonly ExplanationOfBenefit: "ExplanationOfBenefit";
    /**
     * Extension: Optional Extensions Element - found in all resources.
     */
    readonly Extension: "Extension";
    /**
     * FamilyMemberHistory: Significant health events and conditions for a person related to the patient relevant in the context of care for the patient.
     */
    readonly FamilyMemberHistory: "FamilyMemberHistory";
    /**
     * Flag: Prospective warnings of potential issues when providing care to the patient.
     */
    readonly Flag: "Flag";
    /**
     * Goal: Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
     */
    readonly Goal: "Goal";
    /**
     * Group: Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
     */
    readonly Group: "Group";
    /**
     * HealthcareService: The details of a healthcare service available at a location.
     */
    readonly HealthcareService: "HealthcareService";
    /**
     * HumanName: A human's name with the ability to identify parts and usage.
     */
    readonly HumanName: "HumanName";
    /**
     * id: Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
     */
    readonly Id: "id";
    /**
     * Identifier: A technical identifier - identifies some entity uniquely and unambiguously.
     */
    readonly Identifier: "Identifier";
    /**
     * ImagingObjectSelection: A manifest of a set of DICOM Service-Object Pair Instances (SOP Instances).  The referenced SOP Instances (images or other content) are for a single patient, and may be from one or more studies. The referenced SOP Instances have been selected for a purpose, such as quality assurance, conference, or consult. Reflecting that range of purposes, typical ImagingObjectSelection resources may include all SOP Instances in a study (perhaps for sharing through a Health Information Exchange); key images from multiple studies (for reference by a referring or treating physician); a multi-frame ultrasound instance ("cine" video clip) and a set of measurements taken from that instance (for inclusion in a teaching file); and so on.
     */
    readonly ImagingObjectSelection: "ImagingObjectSelection";
    /**
     * ImagingStudy: Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
     */
    readonly ImagingStudy: "ImagingStudy";
    /**
     * Immunization: Describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party and may include vaccine reaction information and what vaccination protocol was followed.
     */
    readonly Immunization: "Immunization";
    /**
     * ImmunizationRecommendation: A patient's point-in-time immunization and recommendation (i.e. forecasting a patient's immunization eligibility according to a published schedule) with optional supporting justification.
     */
    readonly ImmunizationRecommendation: "ImmunizationRecommendation";
    /**
     * ImplementationGuide: A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.
     */
    readonly ImplementationGuide: "ImplementationGuide";
    /**
     * instant: An instant in time - known at least to the second
     */
    readonly Instant: "instant";
    /**
     * integer: A whole number
     */
    readonly Integer: "integer";
    /**
     * List: A set of information summarized from a list of other resources.
     */
    readonly List: "List";
    /**
     * Location: Details and position information for a physical place where services are provided  and resources and participants may be stored, found, contained or accommodated.
     */
    readonly Location: "Location";
    /**
     * markdown: A string that may contain markdown syntax for optional processing by a mark down presentation engine
     */
    readonly Markdown: "markdown";
    /**
     * Media: A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
     */
    readonly Media: "Media";
    /**
     * Medication: This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.
     */
    readonly Medication: "Medication";
    /**
     * MedicationAdministration: Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
     */
    readonly MedicationAdministration: "MedicationAdministration";
    /**
     * MedicationDispense: Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
     */
    readonly MedicationDispense: "MedicationDispense";
    /**
     * MedicationOrder: An order for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationOrder" rather than "MedicationPrescription" to generalize the use across inpatient and outpatient settings as well as for care plans, etc.
     */
    readonly MedicationOrder: "MedicationOrder";
    /**
     * MedicationStatement: A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now, or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from e.g. the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains
     * The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
     */
    readonly MedicationStatement: "MedicationStatement";
    /**
     * MessageHeader: The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
     */
    readonly MessageHeader: "MessageHeader";
    /**
     * Meta: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
     */
    readonly Meta: "Meta";
    /**
     * Code: Money
     */
    readonly Money: "Money";
    /**
     * NamingSystem: A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
     */
    readonly NamingSystem: "NamingSystem";
    /**
     * Narrative: A human-readable formatted text, including images.
     */
    readonly Narrative: "Narrative";
    /**
     * NutritionOrder: A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
     */
    readonly NutritionOrder: "NutritionOrder";
    /**
     * Observation: Measurements and simple assertions made about a patient, device or other subject.
     */
    readonly Observation: "Observation";
    /**
     * oid: An oid represented as a URI
     */
    readonly Oid: "oid";
    /**
     * OperationDefinition: A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
     */
    readonly OperationDefinition: "OperationDefinition";
    /**
     * OperationOutcome: A collection of error, warning or information messages that result from a system action.
     */
    readonly OperationOutcome: "OperationOutcome";
    /**
     * Order: A request to perform an action.
     */
    readonly Order: "Order";
    /**
     * OrderResponse: A response to an order.
     */
    readonly OrderResponse: "OrderResponse";
    /**
     * Organization: A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, etc.
     */
    readonly Organization: "Organization";
    /**
     * Parameters: This special resource type is used to represent an operation request and response (operations.html). It has no other use, and there is no RESTful endpoint associated with it.
     */
    readonly Parameters: "Parameters";
    /**
     * Patient: Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
    readonly Patient: "Patient";
    /**
     * PaymentNotice: This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
     */
    readonly PaymentNotice: "PaymentNotice";
    /**
     * PaymentReconciliation: This resource provides payment details and claim references supporting a bulk payment.
     */
    readonly PaymentReconciliation: "PaymentReconciliation";
    /**
     * Period: A time period defined by a start and end date and optionally time.
     */
    readonly Period: "Period";
    /**
     * Person: Demographics and administrative information about a person independent of a specific health-related context.
     */
    readonly Person: "Person";
    /**
     * positiveInt: An integer with a value that is positive (e.g. &gt;0)
     */
    readonly PositiveInt: "positiveInt";
    /**
     * Practitioner: A person who is directly or indirectly involved in the provisioning of healthcare.
     */
    readonly Practitioner: "Practitioner";
    /**
     * Procedure: An action that is or was performed on a patient. This can be a physical intervention like an operation, or less invasive like counseling or hypnotherapy.
     */
    readonly Procedure: "Procedure";
    /**
     * ProcedureRequest: A request for a procedure to be performed. May be a proposal or an order.
     */
    readonly ProcedureRequest: "ProcedureRequest";
    /**
     * ProcessRequest: This resource provides the target, request and response, and action details for an action to be performed by the target on or about existing resources.
     */
    readonly ProcessRequest: "ProcessRequest";
    /**
     * ProcessResponse: This resource provides processing status, errors and notes from the processing of a resource.
     */
    readonly ProcessResponse: "ProcessResponse";
    /**
     * Provenance: Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
     */
    readonly Provenance: "Provenance";
    /**
     * Quantity: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
     */
    readonly Quantity: "Quantity";
    /**
     * Questionnaire: A structured set of questions intended to guide the collection of answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
     */
    readonly Questionnaire: "Questionnaire";
    /**
     * QuestionnaireResponse: A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
     */
    readonly QuestionnaireResponse: "QuestionnaireResponse";
    /**
     * Range: A set of ordered Quantities defined by a low and high limit.
     */
    readonly Range: "Range";
    /**
     * Ratio: A relationship of two Quantity values - expressed as a numerator and a denominator.
     */
    readonly Ratio: "Ratio";
    /**
     * Reference: A reference from one resource to another.
     */
    readonly Reference: "Reference";
    /**
     * ReferralRequest: Used to record and send details about a request for referral service or transfer of a patient to the care of another provider or provider organization.
     */
    readonly ReferralRequest: "ReferralRequest";
    /**
     * RelatedPerson: Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
     */
    readonly RelatedPerson: "RelatedPerson";
    /**
     * Resource: --- Abstract Type! ---This is the base resource type for everything.
     */
    readonly Resource: "Resource";
    /**
     * RiskAssessment: An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
     */
    readonly RiskAssessment: "RiskAssessment";
    /**
     * SampledData: A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
     */
    readonly SampledData: "SampledData";
    /**
     * Schedule: A container for slot(s) of time that may be available for booking appointments.
     */
    readonly Schedule: "Schedule";
    /**
     * SearchParameter: A search parameter that defines a named search item that can be used to search/filter on a resource.
     */
    readonly SearchParameter: "SearchParameter";
    /**
     * Signature: A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different Signature approaches have different utilities.
     */
    readonly Signature: "Signature";
    /**
     * Code: SimpleQuantity
     */
    readonly SimpleQuantity: "SimpleQuantity";
    /**
     * Slot: A slot of time on a schedule that may be available for booking appointments.
     */
    readonly Slot: "Slot";
    /**
     * Specimen: A sample to be used for analysis.
     */
    readonly Specimen: "Specimen";
    /**
     * string: A sequence of Unicode characters
     */
    readonly VALString: "string";
    /**
     * StructureDefinition: A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions, and constraints on resources and data types.
     */
    readonly StructureDefinition: "StructureDefinition";
    /**
     * Subscription: The subscription resource is used to define a push based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system is able to take an appropriate action.
     */
    readonly Subscription: "Subscription";
    /**
     * Substance: A homogeneous material with a definite composition.
     */
    readonly Substance: "Substance";
    /**
     * SupplyDelivery: Record of delivery of what is supplied.
     */
    readonly SupplyDelivery: "SupplyDelivery";
    /**
     * SupplyRequest: A record of a request for a medication, substance or device used in the healthcare setting.
     */
    readonly SupplyRequest: "SupplyRequest";
    /**
     * TestScript: TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
    readonly TestScript: "TestScript";
    /**
     * time: A time during the day, with no date specified
     */
    readonly Time: "time";
    /**
     * Timing: Specifies an event that may occur multiple times. Timing schedules are used to record when things are expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds.
     */
    readonly Timing: "Timing";
    /**
     * unsignedInt: An integer with a value that is not negative (e.g. &gt;= 0)
     */
    readonly UnsignedInt: "unsignedInt";
    /**
     * uri: String of characters used to identify a name or a resource
     */
    readonly Uri: "uri";
    /**
     * uuid: A UUID, represented as a URI
     */
    readonly Uuid: "uuid";
    /**
     * ValueSet: A value set specifies a set of codes drawn from one or more code systems.
     */
    readonly ValueSet: "ValueSet";
    /**
     * VisionPrescription: An authorization for the supply of glasses and/or contact lenses to a patient.
     */
    readonly VisionPrescription: "VisionPrescription";
    /**
     * xhtml: XHTML format, as defined by W3C, but restricted usage (mainly, no active content)
     */
    readonly XHTML: "xhtml";
};
/**
 * Either a resource or a data type.
 */
export declare type DefinedTypesCodeType = typeof DefinedTypesCodes[keyof typeof DefinedTypesCodes];
//# sourceMappingURL=DefinedTypesCodes.d.ts.map