import * as fhir from '../fhirJson.js';
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export interface TestScriptContact extends fhir.BackboneElement {
    /**
     * The name of an individual to contact regarding the Test Script.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.contact.name
     */
    _name?: fhir.FhirElement;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
}
/**
 * A link to the FHIR specification that this test is covering.
 */
export interface TestScriptMetadataLink extends fhir.BackboneElement {
    /**
     * URL to a particular requirement or feature within the FHIR specification.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: TestScript.metadata.link.url
     */
    _url?: fhir.FhirElement;
    /**
     * Short description of the link.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.link.description
     */
    _description?: fhir.FhirElement;
}
/**
 * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
 */
export interface TestScriptMetadataCapability extends fhir.BackboneElement {
    /**
     * Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
     */
    required?: boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.required
     */
    _required?: fhir.FhirElement;
    /**
     * Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
     */
    validated?: boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.validated
     */
    _validated?: fhir.FhirElement;
    /**
     * Description of the capabilities that this test script is requiring the server to support.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.description
     */
    _description?: fhir.FhirElement;
    /**
     * Which server these requirements apply to.
     */
    destination?: number | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.destination
     */
    _destination?: fhir.FhirElement;
    /**
     * Links to the FHIR specification that describes this interaction and the resources involved in more detail.
     */
    link?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.link
     */
    _link?: (fhir.FhirElement | null)[];
    /**
     * Minimum conformance required of server for test script to execute successfully.   If server does not meet at a minimum the reference conformance definition, then all tests in this script are skipped.
     */
    conformance: fhir.Reference | null;
}
/**
 * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
 */
export interface TestScriptMetadata extends fhir.BackboneElement {
    /**
     * A link to the FHIR specification that this test is covering.
     */
    link?: (fhir.TestScriptMetadataLink | null)[] | undefined;
    /**
     * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
     */
    capability: (fhir.TestScriptMetadataCapability | null)[] | null;
}
/**
 * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
 */
export interface TestScriptFixture extends fhir.BackboneElement {
    /**
     * Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
     */
    autocreate?: boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.fixture.autocreate
     */
    _autocreate?: fhir.FhirElement;
    /**
     * Whether or not to implicitly delete the fixture during teardown If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
     */
    autodelete?: boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.fixture.autodelete
     */
    _autodelete?: fhir.FhirElement;
    /**
     * Reference to the resource (containing the contents of the resource needed for operations).
     */
    resource?: fhir.Reference | undefined;
}
/**
 * Variable is set based either on element value in response body or on header field value in the response headers.
 */
export interface TestScriptVariable extends fhir.BackboneElement {
    /**
     * Descriptive name for this variable.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: TestScript.variable.name
     */
    _name?: fhir.FhirElement;
    /**
     * Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.
     */
    headerField?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.headerField
     */
    _headerField?: fhir.FhirElement;
    /**
     * XPath or JSONPath against the fixture body.  When variables are defined, either headerField must be specified or path, but not both.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.path
     */
    _path?: fhir.FhirElement;
    /**
     * Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.
     */
    sourceId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.sourceId
     */
    _sourceId?: fhir.FhirElement;
}
/**
 * Header elements would be used to set HTTP headers.
 */
export interface TestScriptSetupActionOperationRequestHeader extends fhir.BackboneElement {
    /**
     * The HTTP header field e.g. "Accept".
     */
    field: string | null;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.requestHeader.field
     */
    _field?: fhir.FhirElement;
    /**
     * The value of the header e.g. "application/xml".
     */
    value: string | null;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.requestHeader.value
     */
    _value?: fhir.FhirElement;
}
/**
 * The operation to perform.
 */
export interface TestScriptSetupActionOperation extends fhir.BackboneElement {
    /**
     * Server interaction or operation type.
     */
    type?: fhir.Coding | undefined;
    /**
     * The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.
     */
    resource?: 'Account' | 'Address' | 'Age' | 'AllergyIntolerance' | 'Annotation' | 'Appointment' | 'AppointmentResponse' | 'Attachment' | 'AuditEvent' | 'BackboneElement' | 'base64Binary' | 'Basic' | 'Binary' | 'BodySite' | 'boolean' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'code' | 'CodeableConcept' | 'Coding' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'ContactPoint' | 'Contract' | 'Count' | 'Coverage' | 'DataElement' | 'date' | 'dateTime' | 'decimal' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'Distance' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Duration' | 'Element' | 'ElementDefinition' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'Extension' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'HumanName' | 'id' | 'Identifier' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'instant' | 'integer' | 'List' | 'Location' | 'markdown' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'Meta' | 'Money' | 'NamingSystem' | 'Narrative' | 'NutritionOrder' | 'Observation' | 'oid' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Period' | 'Person' | 'positiveInt' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Quantity' | 'Questionnaire' | 'QuestionnaireResponse' | 'Range' | 'Ratio' | 'Reference' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'SampledData' | 'Schedule' | 'SearchParameter' | 'Signature' | 'SimpleQuantity' | 'Slot' | 'Specimen' | 'string' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'time' | 'Timing' | 'unsignedInt' | 'uri' | 'uuid' | 'ValueSet' | 'VisionPrescription' | 'xhtml' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.resource
     */
    _resource?: fhir.FhirElement;
    /**
     * The label would be used for tracking/logging purposes by test engines.
     */
    label?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.label
     */
    _label?: fhir.FhirElement;
    /**
     * The description would be used by test engines for tracking and reporting purposes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.description
     */
    _description?: fhir.FhirElement;
    /**
     * The content-type or mime-type to use for RESTful operation in the 'Accept' header.
     */
    accept?: 'json' | 'xml' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.accept
     */
    _accept?: fhir.FhirElement;
    /**
     * The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.
     */
    contentType?: 'json' | 'xml' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.contentType
     */
    _contentType?: fhir.FhirElement;
    /**
     * Which server to perform the operation on.
     */
    destination?: number | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.destination
     */
    _destination?: fhir.FhirElement;
    /**
     * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
     */
    encodeRequestUrl?: boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.encodeRequestUrl
     */
    _encodeRequestUrl?: fhir.FhirElement;
    /**
     * Path plus parameters after [type].  Used to set parts of the request URL explicitly.
     */
    params?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.params
     */
    _params?: fhir.FhirElement;
    /**
     * Header elements would be used to set HTTP headers.
     */
    requestHeader?: (fhir.TestScriptSetupActionOperationRequestHeader | null)[] | undefined;
    /**
     * The fixture id (maybe new) to map to the response.
     */
    responseId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.responseId
     */
    _responseId?: fhir.FhirElement;
    /**
     * The id of the fixture used as the body of a PUT or POST request.
     */
    sourceId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.sourceId
     */
    _sourceId?: fhir.FhirElement;
    /**
     * Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.
     */
    targetId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.targetId
     */
    _targetId?: fhir.FhirElement;
    /**
     * Complete request URL.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.url
     */
    _url?: fhir.FhirElement;
}
/**
 * Evaluates the results of previous operations to determine if the server under test behaves appropriately.
 */
export interface TestScriptSetupActionAssert extends fhir.BackboneElement {
    /**
     * The label would be used for tracking/logging purposes by test engines.
     */
    label?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.label
     */
    _label?: fhir.FhirElement;
    /**
     * The description would be used by test engines for tracking and reporting purposes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.description
     */
    _description?: fhir.FhirElement;
    /**
     * The direction to use for the assertion.
     */
    direction?: 'request' | 'response' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.direction
     */
    _direction?: fhir.FhirElement;
    /**
     * Id of fixture used to compare the "sourceId/path" evaluations to.
     */
    compareToSourceId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.compareToSourceId
     */
    _compareToSourceId?: fhir.FhirElement;
    /**
     * XPath or JSONPath expression against fixture used to compare the "sourceId/path" evaluations to.
     */
    compareToSourcePath?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.compareToSourcePath
     */
    _compareToSourcePath?: fhir.FhirElement;
    /**
     * The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.
     */
    contentType?: 'json' | 'xml' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.contentType
     */
    _contentType?: fhir.FhirElement;
    /**
     * The HTTP header field name e.g. 'Location'.
     */
    headerField?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.headerField
     */
    _headerField?: fhir.FhirElement;
    /**
     * The ID of a fixture.  Asserts that the response contains at a minimumId the fixture specified by minimumId.
     */
    minimumId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.minimumId
     */
    _minimumId?: fhir.FhirElement;
    /**
     * Whether or not the test execution performs validation on the bundle navigation links.
     */
    navigationLinks?: boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.navigationLinks
     */
    _navigationLinks?: fhir.FhirElement;
    /**
     * The operator type.
     */
    operator?: 'contains' | 'empty' | 'equals' | 'greaterThan' | 'in' | 'lessThan' | 'notContains' | 'notEmpty' | 'notEquals' | 'notIn' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.operator
     */
    _operator?: fhir.FhirElement;
    /**
     * The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.path
     */
    _path?: fhir.FhirElement;
    /**
     * The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.
     */
    resource?: 'Account' | 'Address' | 'Age' | 'AllergyIntolerance' | 'Annotation' | 'Appointment' | 'AppointmentResponse' | 'Attachment' | 'AuditEvent' | 'BackboneElement' | 'base64Binary' | 'Basic' | 'Binary' | 'BodySite' | 'boolean' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'code' | 'CodeableConcept' | 'Coding' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'ContactPoint' | 'Contract' | 'Count' | 'Coverage' | 'DataElement' | 'date' | 'dateTime' | 'decimal' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'Distance' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Duration' | 'Element' | 'ElementDefinition' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'Extension' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'HumanName' | 'id' | 'Identifier' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'instant' | 'integer' | 'List' | 'Location' | 'markdown' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'Meta' | 'Money' | 'NamingSystem' | 'Narrative' | 'NutritionOrder' | 'Observation' | 'oid' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Period' | 'Person' | 'positiveInt' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Quantity' | 'Questionnaire' | 'QuestionnaireResponse' | 'Range' | 'Ratio' | 'Reference' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'SampledData' | 'Schedule' | 'SearchParameter' | 'Signature' | 'SimpleQuantity' | 'Slot' | 'Specimen' | 'string' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'time' | 'Timing' | 'unsignedInt' | 'uri' | 'uuid' | 'ValueSet' | 'VisionPrescription' | 'xhtml' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.resource
     */
    _resource?: fhir.FhirElement;
    /**
     * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
     */
    response?: 'bad' | 'conflict' | 'created' | 'forbidden' | 'gone' | 'methodNotAllowed' | 'noContent' | 'notFound' | 'notModified' | 'okay' | 'preconditionFailed' | 'unprocessable' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.response
     */
    _response?: fhir.FhirElement;
    /**
     * The value of the HTTP response code to be tested.
     */
    responseCode?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.responseCode
     */
    _responseCode?: fhir.FhirElement;
    /**
     * Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
     */
    sourceId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.sourceId
     */
    _sourceId?: fhir.FhirElement;
    /**
     * The ID of the Profile to validate against.
     */
    validateProfileId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.validateProfileId
     */
    _validateProfileId?: fhir.FhirElement;
    /**
     * The value to compare to.
     */
    value?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.value
     */
    _value?: fhir.FhirElement;
    /**
     * Whether or not the test execution will produce a warning only on error for this assert.
     */
    warningOnly?: boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.warningOnly
     */
    _warningOnly?: fhir.FhirElement;
}
/**
 * Action would contain either an operation or an assertion.
 */
export interface TestScriptSetupAction extends fhir.BackboneElement {
    /**
     * The operation to perform.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
    /**
     * Evaluates the results of previous operations to determine if the server under test behaves appropriately.
     */
    assert?: fhir.TestScriptSetupActionAssert | undefined;
}
/**
 * A series of required setup operations before tests are executed.
 */
export interface TestScriptSetup extends fhir.BackboneElement {
    /**
     * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadata | undefined;
    /**
     * Action would contain either an operation or an assertion.
     */
    action: (fhir.TestScriptSetupAction | null)[] | null;
}
/**
 * Action would contain either an operation or an assertion.
 */
export interface TestScriptTestAction extends fhir.BackboneElement {
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
    /**
     * Evaluates the results of previous operations to determine if the server under test behaves appropriately.
     */
    assert?: fhir.TestScriptSetupActionAssert | undefined;
}
/**
 * A test in this script.
 */
export interface TestScriptTest extends fhir.BackboneElement {
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.test.name
     */
    _name?: fhir.FhirElement;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.test.description
     */
    _description?: fhir.FhirElement;
    /**
     * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadata | undefined;
    /**
     * Action would contain either an operation or an assertion.
     */
    action: (fhir.TestScriptTestAction | null)[] | null;
}
/**
 * The teardown action will only contain an operation.
 */
export interface TestScriptTeardownAction extends fhir.BackboneElement {
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
}
/**
 * A series of operations required to clean up after the all the tests are executed (successfully or otherwise).
 */
export interface TestScriptTeardown extends fhir.BackboneElement {
    /**
     * The teardown action will only contain an operation.
     */
    action: (fhir.TestScriptTeardownAction | null)[] | null;
}
/**
 * TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
 */
export interface TestScript extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "TestScript" | null;
    /**
     * An absolute URL that is used to identify this Test Script. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this Test Script is (or will be) published.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: TestScript.url
     */
    _url?: fhir.FhirElement;
    /**
     * There may be multiple resource versions of the TestScript that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.version
     */
    _version?: fhir.FhirElement;
    /**
     * A free text natural language name identifying the TestScript.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: TestScript.name
     */
    _name?: fhir.FhirElement;
    /**
     * Allows filtering of TestScripts that are appropriate for use vs. not.
     */
    status: 'active' | 'draft' | 'retired' | null;
    /**
     * Extended properties for primitive element: TestScript.status
     */
    _status?: fhir.FhirElement;
    /**
     * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Allows filtering of TestScripts that are appropriate for use vs. not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Helps establish the "authority/credibility" of the Test Script.  May also allow for contact.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: (fhir.TestScriptContact | null)[] | undefined;
    /**
     * The date this version of the test tcript was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the test cases change.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.date
     */
    _date?: fhir.FhirElement;
    /**
     * A free text natural language description of the TestScript and its use.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.description
     */
    _description?: fhir.FhirElement;
    /**
     * Assist in searching for appropriate content.
     */
    useContext?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Explains why this Test Script is needed and why it's been constrained as it has.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.requirements
     */
    _requirements?: fhir.FhirElement;
    /**
     * A copyright statement relating to the Test Script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadata | undefined;
    /**
     * If the tests apply to more than one FHIR server (e.g. cross-server interoperability tests) then multiserver=true. Defaults to false if value is unspecified.
     */
    multiserver?: boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.multiserver
     */
    _multiserver?: fhir.FhirElement;
    /**
     * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
     */
    fixture?: (fhir.TestScriptFixture | null)[] | undefined;
    /**
     * Reference to the profile to be used for validation.
     */
    profile?: (fhir.Reference | null)[] | undefined;
    /**
     * Variable is set based either on element value in response body or on header field value in the response headers.
     */
    variable?: (fhir.TestScriptVariable | null)[] | undefined;
    /**
     * A series of required setup operations before tests are executed.
     */
    setup?: fhir.TestScriptSetup | undefined;
    /**
     * A test in this script.
     */
    test?: (fhir.TestScriptTest | null)[] | undefined;
    /**
     * A series of operations required to clean up after the all the tests are executed (successfully or otherwise).
     */
    teardown?: fhir.TestScriptTeardown | undefined;
}
//# sourceMappingURL=TestScript.d.ts.map