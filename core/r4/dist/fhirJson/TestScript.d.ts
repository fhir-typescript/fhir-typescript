import * as fhir from '../fhirJson.js';
/**
 * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
 */
export interface TestScriptOrigin extends fhir.BackboneElement {
    /**
     * A given origin index (e.g. 1) can appear only once in the list (e.g. Origin 1 cannot be specified twice ... once as FormFiller and again as FormProcessor within the same script as that could get confusing during test configuration).
     * Different origin indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Filler).
     * The origin indices provided elsewhere in the test script must be one of these origin indices.
     */
    index: number | null;
    /**
     * Extended properties for primitive element: TestScript.origin.index
     */
    _index?: fhir.FhirElement;
    /**
     * Must be a "sender"/"client" profile.
     */
    profile: fhir.Coding | null;
}
/**
 * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
 */
export interface TestScriptDestination extends fhir.BackboneElement {
    /**
     * A given destination index (e.g. 1) can appear only once in the list (e.g. Destination 1 cannot be specified twice ... once as Form-Manager and again as Form-Processor within the same script as that could get confusing during test configuration).
     * Different destination indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Manager).
     * The destination indices provided elsewhere in the test script must be one of these destination indices.
     */
    index: number | null;
    /**
     * Extended properties for primitive element: TestScript.destination.index
     */
    _index?: fhir.FhirElement;
    /**
     * Must be a "receiver"/"server" profile.
     */
    profile: fhir.Coding | null;
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
 * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
 */
export interface TestScriptMetadataCapability extends fhir.BackboneElement {
    /**
     * Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
     */
    required: boolean | null;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.required
     */
    _required?: fhir.FhirElement;
    /**
     * Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
     */
    validated: boolean | null;
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
     * Which origin server these requirements apply to.
     */
    origin?: number[] | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.origin
     */
    _origin?: (fhir.FhirElement | null)[];
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
    link?: string[] | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.link
     */
    _link?: (fhir.FhirElement | null)[];
    /**
     * The conformance statement of the server has to contain at a minimum the contents of the reference pointed to by this element.
     */
    capabilities: string | null;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.capabilities
     */
    _capabilities?: fhir.FhirElement;
}
/**
 * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
 */
export interface TestScriptMetadata extends fhir.BackboneElement {
    /**
     * A link to the FHIR specification that this test is covering.
     */
    link?: fhir.TestScriptMetadataLink[] | undefined;
    /**
     * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
     */
    capability: fhir.TestScriptMetadataCapability[] | null;
}
/**
 * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
 */
export interface TestScriptFixture extends fhir.BackboneElement {
    /**
     * Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
     */
    autocreate: boolean | null;
    /**
     * Extended properties for primitive element: TestScript.fixture.autocreate
     */
    _autocreate?: fhir.FhirElement;
    /**
     * Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
     */
    autodelete: boolean | null;
    /**
     * Extended properties for primitive element: TestScript.fixture.autodelete
     */
    _autodelete?: fhir.FhirElement;
    /**
     * See http://build.fhir.org/resourcelist.html for complete list of resource types.
     */
    resource?: fhir.Reference | undefined;
}
/**
 * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
 */
export interface TestScriptVariable extends fhir.BackboneElement {
    /**
     * Placeholders would contain the variable name wrapped in ${} in "operation.params", "operation.requestHeader.value", and "operation.url" elements.  These placeholders would need to be replaced by the variable value before the operation is executed.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: TestScript.variable.name
     */
    _name?: fhir.FhirElement;
    /**
     * The purpose of this element is to allow for a pre-defined value that can be used as a default or as an override value. Test engines can optionally use this as a placeholder for user-defined execution time values.
     */
    defaultValue?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.defaultValue
     */
    _defaultValue?: fhir.FhirElement;
    /**
     * A free text natural language description of the variable and its purpose.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.description
     */
    _description?: fhir.FhirElement;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.expression
     */
    _expression?: fhir.FhirElement;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define both headerField and path.
     */
    headerField?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.headerField
     */
    _headerField?: fhir.FhirElement;
    /**
     * Displayable text string with hint help information to the user when entering a default value.
     */
    hint?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.hint
     */
    _hint?: fhir.FhirElement;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.path
     */
    _path?: fhir.FhirElement;
    /**
     * This can be a statically defined fixture (at the top of the TestScript) or a dynamically set fixture created by responseId of the `action.operation` element.
     */
    sourceId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.sourceId
     */
    _sourceId?: fhir.FhirElement;
}
/**
 * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
 */
export interface TestScriptSetupActionOperationRequestHeader extends fhir.BackboneElement {
    /**
     * If header element is specified, then field is required.
     */
    field: string | null;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.requestHeader.field
     */
    _field?: fhir.FhirElement;
    /**
     * If header element is specified, then value is required.  No conversions will be done by the test engine e.g. "xml" to "application/fhir+xml".  The values will be set in HTTP headers "as-is".  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
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
     * See http://build.fhir.org/http.html for list of server interactions.
     */
    type?: fhir.Coding | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored. For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present. For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url. For "vread" and "history" operations, the versionId value will also be used.
     */
    resource?: 'Account' | 'ActivityDefinition' | 'Address' | 'AdverseEvent' | 'Age' | 'AllergyIntolerance' | 'Annotation' | 'Appointment' | 'AppointmentResponse' | 'Attachment' | 'AuditEvent' | 'BackboneElement' | 'base64Binary' | 'Basic' | 'Binary' | 'BiologicallyDerivedProduct' | 'BodyStructure' | 'boolean' | 'Bundle' | 'canonical' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'CatalogEntry' | 'ChargeItem' | 'ChargeItemDefinition' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'code' | 'CodeableConcept' | 'CodeSystem' | 'Coding' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'ContactDetail' | 'ContactPoint' | 'Contract' | 'Contributor' | 'Count' | 'Coverage' | 'CoverageEligibilityRequest' | 'CoverageEligibilityResponse' | 'DataRequirement' | 'date' | 'dateTime' | 'decimal' | 'DetectedIssue' | 'Device' | 'DeviceDefinition' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'Distance' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Dosage' | 'Duration' | 'EffectEvidenceSynthesis' | 'Element' | 'ElementDefinition' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'EventDefinition' | 'Evidence' | 'EvidenceVariable' | 'ExampleScenario' | 'ExplanationOfBenefit' | 'Expression' | 'Extension' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'HumanName' | 'id' | 'Identifier' | 'ImagingStudy' | 'Immunization' | 'ImmunizationEvaluation' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'instant' | 'InsurancePlan' | 'integer' | 'Invoice' | 'Library' | 'Linkage' | 'List' | 'Location' | 'markdown' | 'MarketingStatus' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationKnowledge' | 'MedicationRequest' | 'MedicationStatement' | 'MedicinalProduct' | 'MedicinalProductAuthorization' | 'MedicinalProductContraindication' | 'MedicinalProductIndication' | 'MedicinalProductIngredient' | 'MedicinalProductInteraction' | 'MedicinalProductManufactured' | 'MedicinalProductPackaged' | 'MedicinalProductPharmaceutical' | 'MedicinalProductUndesirableEffect' | 'MessageDefinition' | 'MessageHeader' | 'Meta' | 'MolecularSequence' | 'Money' | 'MoneyQuantity' | 'NamingSystem' | 'Narrative' | 'NutritionOrder' | 'Observation' | 'ObservationDefinition' | 'oid' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'OrganizationAffiliation' | 'ParameterDefinition' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Period' | 'Person' | 'PlanDefinition' | 'Population' | 'positiveInt' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProdCharacteristic' | 'ProductShelfLife' | 'Provenance' | 'Quantity' | 'Questionnaire' | 'QuestionnaireResponse' | 'Range' | 'Ratio' | 'Reference' | 'RelatedArtifact' | 'RelatedPerson' | 'RequestGroup' | 'ResearchDefinition' | 'ResearchElementDefinition' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'RiskEvidenceSynthesis' | 'SampledData' | 'Schedule' | 'SearchParameter' | 'ServiceRequest' | 'Signature' | 'SimpleQuantity' | 'Slot' | 'Specimen' | 'SpecimenDefinition' | 'string' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SubstanceAmount' | 'SubstanceNucleicAcid' | 'SubstancePolymer' | 'SubstanceProtein' | 'SubstanceReferenceInformation' | 'SubstanceSourceMaterial' | 'SubstanceSpecification' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TerminologyCapabilities' | 'TestReport' | 'TestScript' | 'time' | 'Timing' | 'TriggerDefinition' | 'unsignedInt' | 'uri' | 'url' | 'UsageContext' | 'uuid' | 'ValueSet' | 'VerificationResult' | 'VisionPrescription' | 'xhtml' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.resource
     */
    _resource?: fhir.FhirElement;
    /**
     * This has no impact on the verification itself.
     */
    label?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.label
     */
    _label?: fhir.FhirElement;
    /**
     * This has no impact on the verification itself.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.description
     */
    _description?: fhir.FhirElement;
    /**
     * If this is specified, then test engine shall set the 'Accept' header to the corresponding value.  If you'd like to explicitly set the 'Accept' to some other value then use the 'requestHeader' element.
     */
    accept?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.accept
     */
    _accept?: fhir.FhirElement;
    /**
     * If this is specified, then test engine shall set the 'Content-Type' header to the corresponding value.  If you'd like to explicitly set the 'Content-Type' to some other value then use the 'requestHeader' element.
     */
    contentType?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.contentType
     */
    _contentType?: fhir.FhirElement;
    /**
     * If multiple TestScript.destination elements are defined and operation.destination is undefined, test engine will report an error as it cannot determine what destination to use for the exchange.
     */
    destination?: number | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.destination
     */
    _destination?: fhir.FhirElement;
    /**
     * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
     */
    encodeRequestUrl: boolean | null;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.encodeRequestUrl
     */
    _encodeRequestUrl?: fhir.FhirElement;
    /**
     * The primary purpose of the explicit HTTP method is support of  HTTP POST method invocation of the FHIR search. Other uses will include support of negative testing.
     */
    method?: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.method
     */
    _method?: fhir.FhirElement;
    /**
     * If absent, test engine will send the message.  When present, test engine will not send the request message but will wait for the request message to be sent from this origin server.
     */
    origin?: number | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.origin
     */
    _origin?: fhir.FhirElement;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.   Test engines would append whatever is specified for "params" to the URL after the resource type without tampering with the string (beyond encoding the URL for HTTP).  The "params" element does not correspond exactly to "search parameters".  Nor is it the "path".  It corresponds to the part of the URL that comes after the [type] (when "resource" element is specified); e.g. It corresponds to "/[id]/_history/[vid] {?_format=[mime-type]}" in the following operation: GET [base]/[type]/[id]/_history/[vid] {?_format=[mime-type]}  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    params?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.params
     */
    _params?: fhir.FhirElement;
    /**
     * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
     */
    requestHeader?: fhir.TestScriptSetupActionOperationRequestHeader[] | undefined;
    /**
     * If a requestId is supplied, then the resulting request (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "requestId".  If requestId is not specified, it is the test engine's responsibility to store the request and use it as the requestId in subsequent assertions when assertion path and/or headerField is specified, direction is equal to request, and the requestId in not specified.
     */
    requestId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.requestId
     */
    _requestId?: fhir.FhirElement;
    /**
     * If a responseId is supplied, and the server responds, then the resulting response (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "responseId".  If responseId is not specified, it is the test engine's responsibility to store the response and use it as the responseId in subsequent assertions when assertion path and/or headerField is specified and the responseId is not specified.
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
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.
     */
    targetId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.targetId
     */
    _targetId?: fhir.FhirElement;
    /**
     * Used to set the request URL explicitly.  If "url" element is defined, then "targetId", "resource", and "params" elements will be ignored.  Test engines would use whatever is specified in "url" without tampering with the string (beyond encoding the URL for HTTP).  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.url
     */
    _url?: fhir.FhirElement;
}
/**
 * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
 */
export interface TestScriptSetupActionAssert extends fhir.BackboneElement {
    /**
     * This has no impact on the verification itself.
     */
    label?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.label
     */
    _label?: fhir.FhirElement;
    /**
     * This has no impact on the verification itself.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.description
     */
    _description?: fhir.FhirElement;
    /**
     * If the direction is specified as "response" (the default), then the processing of this assert is against the received response message. If the direction is specified as "request", then the processing of this assert is against the sent request message.
     */
    direction?: 'request' | 'response' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.direction
     */
    _direction?: fhir.FhirElement;
    /**
     * Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition.
     */
    compareToSourceId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.compareToSourceId
     */
    _compareToSourceId?: fhir.FhirElement;
    /**
     * Thefhirpath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
     */
    compareToSourceExpression?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.compareToSourceExpression
     */
    _compareToSourceExpression?: fhir.FhirElement;
    /**
     * The XPath or JSONPath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
     */
    compareToSourcePath?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.compareToSourcePath
     */
    _compareToSourcePath?: fhir.FhirElement;
    /**
     * If this is specified, then test engine shall confirm that the content-type of the last operation's headers is set to this value.  If "assert.sourceId" element is specified, then the evaluation will be done against the headers mapped to that sourceId (and not the last operation's headers).  If you'd like to have more control over the string, then use 'assert.headerField' instead.
     */
    contentType?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.contentType
     */
    _contentType?: fhir.FhirElement;
    /**
     * If both "expression" and a "fixtureId" are specified, then the expression will be evaluated against the request or response body mapped to the fixtureId.  If "expression" is specified and a "fixtureId" is not, then the expression will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.expression
     */
    _expression?: fhir.FhirElement;
    /**
     * If "headerField" is specified then "value" must be specified.  If "sourceId" is not specified, then "headerField" will be evaluated against the last operation's response headers.  Test engines are to keep track of the last operation's response body and response headers.
     */
    headerField?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.headerField
     */
    _headerField?: fhir.FhirElement;
    /**
     * Asserts that the response contains all the element/content in another fixture pointed to by minimumId.  This can be a statically defined fixture or one that is dynamically set via responseId.
     */
    minimumId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.minimumId
     */
    _minimumId?: fhir.FhirElement;
    /**
     * Asserts that the Bundle contains first, last, and next links.
     */
    navigationLinks?: boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.navigationLinks
     */
    _navigationLinks?: fhir.FhirElement;
    /**
     * Operators are useful especially for negative testing.  If operator is not specified, then the "equals" operator is assumed; e.g. ```&lt;code&gt;   &lt;assert&gt;  &lt;operator value="in" /&gt;  &lt;responseCode value="200,201,204" /&gt;    &lt;/assert&gt;    &lt;assert&gt;  &lt;operator value="notEquals" /&gt;  &lt;response value="okay"/&gt;   &lt;/assert&gt;    &lt;assert&gt;  &lt;operator value="greaterThan" /&gt;    &lt;responseHeader&gt;     &lt;field value="Content-Length" /&gt;     &lt;value value="0" /&gt;    &lt;/responseHeader/&gt;   &lt;/assert&gt; &lt;/code&gt; ```.
     */
    operator?: 'contains' | 'empty' | 'equals' | 'eval' | 'greaterThan' | 'in' | 'lessThan' | 'notContains' | 'notEmpty' | 'notEquals' | 'notIn' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.operator
     */
    _operator?: fhir.FhirElement;
    /**
     * If both "path" and a "fixtureId" are specified, then the path will be evaluated against the request or response body mapped to the fixtureId.  If "path" is specified and a "fixtureId" is not, then the path will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.path
     */
    _path?: fhir.FhirElement;
    /**
     * If "requestMethod" is specified then it will be used in place of "value". The "requestMethod" will evaluate against the last operation's request HTTP operation.
     */
    requestMethod?: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.requestMethod
     */
    _requestMethod?: fhir.FhirElement;
    /**
     * If "requestURL" is specified then it will be used in place of "value". The "requestURL" will evaluate against the last operation's full request URL path string.
     */
    requestURL?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.requestURL
     */
    _requestURL?: fhir.FhirElement;
    /**
     * This will be expected resource type in response body e.g. in read, vread, search, etc.  See http://build.fhir.org/resourcelist.html for complete list of resource types; e.g. &lt;assert &gt; &lt;resourceType value="Patient" &lt;/assert&gt;.
     */
    resource?: 'Account' | 'ActivityDefinition' | 'Address' | 'AdverseEvent' | 'Age' | 'AllergyIntolerance' | 'Annotation' | 'Appointment' | 'AppointmentResponse' | 'Attachment' | 'AuditEvent' | 'BackboneElement' | 'base64Binary' | 'Basic' | 'Binary' | 'BiologicallyDerivedProduct' | 'BodyStructure' | 'boolean' | 'Bundle' | 'canonical' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'CatalogEntry' | 'ChargeItem' | 'ChargeItemDefinition' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'code' | 'CodeableConcept' | 'CodeSystem' | 'Coding' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'ContactDetail' | 'ContactPoint' | 'Contract' | 'Contributor' | 'Count' | 'Coverage' | 'CoverageEligibilityRequest' | 'CoverageEligibilityResponse' | 'DataRequirement' | 'date' | 'dateTime' | 'decimal' | 'DetectedIssue' | 'Device' | 'DeviceDefinition' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'Distance' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Dosage' | 'Duration' | 'EffectEvidenceSynthesis' | 'Element' | 'ElementDefinition' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'EventDefinition' | 'Evidence' | 'EvidenceVariable' | 'ExampleScenario' | 'ExplanationOfBenefit' | 'Expression' | 'Extension' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'HumanName' | 'id' | 'Identifier' | 'ImagingStudy' | 'Immunization' | 'ImmunizationEvaluation' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'instant' | 'InsurancePlan' | 'integer' | 'Invoice' | 'Library' | 'Linkage' | 'List' | 'Location' | 'markdown' | 'MarketingStatus' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationKnowledge' | 'MedicationRequest' | 'MedicationStatement' | 'MedicinalProduct' | 'MedicinalProductAuthorization' | 'MedicinalProductContraindication' | 'MedicinalProductIndication' | 'MedicinalProductIngredient' | 'MedicinalProductInteraction' | 'MedicinalProductManufactured' | 'MedicinalProductPackaged' | 'MedicinalProductPharmaceutical' | 'MedicinalProductUndesirableEffect' | 'MessageDefinition' | 'MessageHeader' | 'Meta' | 'MolecularSequence' | 'Money' | 'MoneyQuantity' | 'NamingSystem' | 'Narrative' | 'NutritionOrder' | 'Observation' | 'ObservationDefinition' | 'oid' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'OrganizationAffiliation' | 'ParameterDefinition' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Period' | 'Person' | 'PlanDefinition' | 'Population' | 'positiveInt' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProdCharacteristic' | 'ProductShelfLife' | 'Provenance' | 'Quantity' | 'Questionnaire' | 'QuestionnaireResponse' | 'Range' | 'Ratio' | 'Reference' | 'RelatedArtifact' | 'RelatedPerson' | 'RequestGroup' | 'ResearchDefinition' | 'ResearchElementDefinition' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'RiskEvidenceSynthesis' | 'SampledData' | 'Schedule' | 'SearchParameter' | 'ServiceRequest' | 'Signature' | 'SimpleQuantity' | 'Slot' | 'Specimen' | 'SpecimenDefinition' | 'string' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SubstanceAmount' | 'SubstanceNucleicAcid' | 'SubstancePolymer' | 'SubstanceProtein' | 'SubstanceReferenceInformation' | 'SubstanceSourceMaterial' | 'SubstanceSpecification' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TerminologyCapabilities' | 'TestReport' | 'TestScript' | 'time' | 'Timing' | 'TriggerDefinition' | 'unsignedInt' | 'uri' | 'url' | 'UsageContext' | 'uuid' | 'ValueSet' | 'VerificationResult' | 'VisionPrescription' | 'xhtml' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.resource
     */
    _resource?: fhir.FhirElement;
    /**
     * This is a shorter way of achieving similar verifications via "assert.responseCode".  If you need more control, then use "assert.responseCode"  e.g. &lt;assert&gt;  &lt;contentType value="json" /&gt;  &lt;response value="okay"/&gt; &lt;/assert&gt;.
     */
    response?: 'bad' | 'conflict' | 'created' | 'forbidden' | 'gone' | 'methodNotAllowed' | 'noContent' | 'notFound' | 'notModified' | 'okay' | 'preconditionFailed' | 'unprocessable' | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.response
     */
    _response?: fhir.FhirElement;
    /**
     * To be used with "operator" attribute value. Asserts that the response code equals this value if "operator" is not specified.   If the operator is "in" or "notIn" then the responseCode would be a comma-separated list of values e.g. "200,201". Otherwise, it's expected to be a numeric value.   If "fixture" is not specified, then the "responseBodyId" value of the last operation is assumed.
     */
    responseCode?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.responseCode
     */
    _responseCode?: fhir.FhirElement;
    /**
     * This can be a statically defined fixture (at the top of the testscript) or a dynamically set fixture created by responseId of the action.operation element.
     */
    sourceId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.sourceId
     */
    _sourceId?: fhir.FhirElement;
    /**
     * The ID of a Profile fixture. Asserts that the response is valid according to the Profile specified by validateProfileId.
     */
    validateProfileId?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.validateProfileId
     */
    _validateProfileId?: fhir.FhirElement;
    /**
     * The string-representation of a number, string, or boolean that is expected.  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before comparing this value to the actual value.
     */
    value?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.value
     */
    _value?: fhir.FhirElement;
    /**
     * If this element is specified and it is true, then assertion failures can be logged by test engine but should not stop the test script execution from proceeding.  There are likely cases where the spec is not clear on what should happen. If the spec says something is optional (maybe a response header for example), but a server doesn’t do it, we could choose to issue a warning.
     */
    warningOnly: boolean | null;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.warningOnly
     */
    _warningOnly?: fhir.FhirElement;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface TestScriptSetupAction extends fhir.BackboneElement {
    /**
     * The operation to perform.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
    /**
     * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
     */
    assert?: fhir.TestScriptSetupActionAssert | undefined;
}
/**
 * A series of required setup operations before tests are executed.
 */
export interface TestScriptSetup extends fhir.BackboneElement {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptSetupAction[] | null;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface TestScriptTestAction extends fhir.BackboneElement {
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
    /**
     * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
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
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptTestAction[] | null;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface TestScriptTeardownAction extends fhir.BackboneElement {
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhir.TestScriptSetupActionOperation | null;
}
/**
 * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
 */
export interface TestScriptTeardown extends fhir.BackboneElement {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptTeardownAction[] | null;
}
/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
export interface TestScript extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "TestScript";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: TestScript.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this test script outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * There may be different test script instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the test script with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: TestScript.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of test scripts that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: TestScript.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of test scripts that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the test script. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the test script is the organization or individual primarily responsible for the maintenance and upkeep of the test script. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the test script. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the test script was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the test script as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the test script is presumed to be the predominant language in the place the test script was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the test script to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the test script. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this test script.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: TestScript.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
     */
    origin?: fhir.TestScriptOrigin[] | undefined;
    /**
     * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
     */
    destination?: fhir.TestScriptDestination[] | undefined;
    /**
     * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadata | undefined;
    /**
     * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
     */
    fixture?: fhir.TestScriptFixture[] | undefined;
    /**
     * See http://build.fhir.org/resourcelist.html for complete list of resource types.
     */
    profile?: fhir.Reference[] | undefined;
    /**
     * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
     */
    variable?: fhir.TestScriptVariable[] | undefined;
    /**
     * A series of required setup operations before tests are executed.
     */
    setup?: fhir.TestScriptSetup | undefined;
    /**
     * A test in this script.
     */
    test?: fhir.TestScriptTest[] | undefined;
    /**
     * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
     */
    teardown?: fhir.TestScriptTeardown | undefined;
}
//# sourceMappingURL=TestScript.d.ts.map