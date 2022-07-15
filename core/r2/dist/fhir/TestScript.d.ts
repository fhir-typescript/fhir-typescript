import * as fhir from '../fhir.js';
import { ContentTypeCodeType } from '../fhirValueSets/ContentTypeCodes.js';
import { AssertDirectionCodeType } from '../fhirValueSets/AssertDirectionCodes.js';
import { AssertOperatorCodeType } from '../fhirValueSets/AssertOperatorCodes.js';
import { AssertResponseCodeTypesCodeType } from '../fhirValueSets/AssertResponseCodeTypesCodes.js';
import { ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
/**
 * Valid arguments for the TestScriptContact type.
 */
export interface TestScriptContactArgs extends fhir.BackboneElementArgs {
    /**
     * The name of an individual to contact regarding the Test Script.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.contact.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
}
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export declare class TestScriptContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of an individual to contact regarding the Test Script.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Default constructor for TestScriptContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptMetadataLink type.
 */
export interface TestScriptMetadataLinkArgs extends fhir.BackboneElementArgs {
    /**
     * URL to a particular requirement or feature within the FHIR specification.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.link.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Short description of the link.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.link.description
     */
    _description?: fhir.FhirElementArgs;
}
/**
 * A link to the FHIR specification that this test is covering.
 */
export declare class TestScriptMetadataLink extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * URL to a particular requirement or feature within the FHIR specification.
     */
    url: fhir.FhirUri | null;
    /**
     * Short description of the link.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Default constructor for TestScriptMetadataLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptMetadataLinkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptMetadataCapability type.
 */
export interface TestScriptMetadataCapabilityArgs extends fhir.BackboneElementArgs {
    /**
     * Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
     */
    required?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.required
     */
    _required?: fhir.FhirElementArgs;
    /**
     * Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
     */
    validated?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.validated
     */
    _validated?: fhir.FhirElementArgs;
    /**
     * Description of the capabilities that this test script is requiring the server to support.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Which server these requirements apply to.
     */
    destination?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.destination
     */
    _destination?: fhir.FhirElementArgs;
    /**
     * Links to the FHIR specification that describes this interaction and the resources involved in more detail.
     */
    link?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: TestScript.metadata.capability.link
     */
    _link?: (fhir.FhirElementArgs | null)[];
    /**
     * Minimum conformance required of server for test script to execute successfully.   If server does not meet at a minimum the reference conformance definition, then all tests in this script are skipped.
     */
    conformance: fhir.ReferenceArgs | null;
}
/**
 * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
 */
export declare class TestScriptMetadataCapability extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
     */
    required?: fhir.FhirBoolean | undefined;
    /**
     * Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
     */
    validated?: fhir.FhirBoolean | undefined;
    /**
     * Description of the capabilities that this test script is requiring the server to support.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Which server these requirements apply to.
     */
    destination?: fhir.FhirInteger | undefined;
    /**
     * Links to the FHIR specification that describes this interaction and the resources involved in more detail.
     */
    link: fhir.FhirUri[];
    /**
     * Minimum conformance required of server for test script to execute successfully.   If server does not meet at a minimum the reference conformance definition, then all tests in this script are skipped.
     */
    conformance: fhir.Reference | null;
    /**
     * Default constructor for TestScriptMetadataCapability - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptMetadataCapabilityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptMetadata type.
 */
export interface TestScriptMetadataArgs extends fhir.BackboneElementArgs {
    /**
     * A link to the FHIR specification that this test is covering.
     */
    link?: fhir.TestScriptMetadataLinkArgs[] | undefined;
    /**
     * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
     */
    capability: fhir.TestScriptMetadataCapabilityArgs[] | null;
}
/**
 * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
 */
export declare class TestScriptMetadata extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A link to the FHIR specification that this test is covering.
     */
    link: fhir.TestScriptMetadataLink[];
    /**
     * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
     */
    capability: fhir.TestScriptMetadataCapability[];
    /**
     * Default constructor for TestScriptMetadata - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptMetadataArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptFixture type.
 */
export interface TestScriptFixtureArgs extends fhir.BackboneElementArgs {
    /**
     * Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
     */
    autocreate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.fixture.autocreate
     */
    _autocreate?: fhir.FhirElementArgs;
    /**
     * Whether or not to implicitly delete the fixture during teardown If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
     */
    autodelete?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.fixture.autodelete
     */
    _autodelete?: fhir.FhirElementArgs;
    /**
     * Reference to the resource (containing the contents of the resource needed for operations).
     */
    resource?: fhir.ReferenceArgs | undefined;
}
/**
 * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
 */
export declare class TestScriptFixture extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
     */
    autocreate?: fhir.FhirBoolean | undefined;
    /**
     * Whether or not to implicitly delete the fixture during teardown If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
     */
    autodelete?: fhir.FhirBoolean | undefined;
    /**
     * Reference to the resource (containing the contents of the resource needed for operations).
     */
    resource?: fhir.Reference | undefined;
    /**
     * Default constructor for TestScriptFixture - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptFixtureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptVariable type.
 */
export interface TestScriptVariableArgs extends fhir.BackboneElementArgs {
    /**
     * Descriptive name for this variable.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.
     */
    headerField?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.headerField
     */
    _headerField?: fhir.FhirElementArgs;
    /**
     * XPath or JSONPath against the fixture body.  When variables are defined, either headerField must be specified or path, but not both.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.
     */
    sourceId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.variable.sourceId
     */
    _sourceId?: fhir.FhirElementArgs;
}
/**
 * Variable is set based either on element value in response body or on header field value in the response headers.
 */
export declare class TestScriptVariable extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Descriptive name for this variable.
     */
    name: fhir.FhirString | null;
    /**
     * Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.
     */
    headerField?: fhir.FhirString | undefined;
    /**
     * XPath or JSONPath against the fixture body.  When variables are defined, either headerField must be specified or path, but not both.
     */
    path?: fhir.FhirString | undefined;
    /**
     * Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.
     */
    sourceId?: fhir.FhirId | undefined;
    /**
     * Default constructor for TestScriptVariable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptVariableArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptSetupActionOperationRequestHeader type.
 */
export interface TestScriptSetupActionOperationRequestHeaderArgs extends fhir.BackboneElementArgs {
    /**
     * The HTTP header field e.g. "Accept".
     */
    field: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.requestHeader.field
     */
    _field?: fhir.FhirElementArgs;
    /**
     * The value of the header e.g. "application/xml".
     */
    value: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.requestHeader.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * Header elements would be used to set HTTP headers.
 */
export declare class TestScriptSetupActionOperationRequestHeader extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The HTTP header field e.g. "Accept".
     */
    field: fhir.FhirString | null;
    /**
     * The value of the header e.g. "application/xml".
     */
    value: fhir.FhirString | null;
    /**
     * Default constructor for TestScriptSetupActionOperationRequestHeader - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptSetupActionOperationRequestHeaderArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptSetupActionOperation type.
 */
export interface TestScriptSetupActionOperationArgs extends fhir.BackboneElementArgs {
    /**
     * Server interaction or operation type.
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.
     */
    resource?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.resource
     */
    _resource?: fhir.FhirElementArgs;
    /**
     * The label would be used for tracking/logging purposes by test engines.
     */
    label?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.label
     */
    _label?: fhir.FhirElementArgs;
    /**
     * The description would be used by test engines for tracking and reporting purposes.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The content-type or mime-type to use for RESTful operation in the 'Accept' header.
     */
    accept?: fhir.FhirCode<ContentTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.accept
     */
    _accept?: fhir.FhirElementArgs;
    /**
     * The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.
     */
    contentType?: fhir.FhirCode<ContentTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.contentType
     */
    _contentType?: fhir.FhirElementArgs;
    /**
     * Which server to perform the operation on.
     */
    destination?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.destination
     */
    _destination?: fhir.FhirElementArgs;
    /**
     * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
     */
    encodeRequestUrl?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.encodeRequestUrl
     */
    _encodeRequestUrl?: fhir.FhirElementArgs;
    /**
     * Path plus parameters after [type].  Used to set parts of the request URL explicitly.
     */
    params?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.params
     */
    _params?: fhir.FhirElementArgs;
    /**
     * Header elements would be used to set HTTP headers.
     */
    requestHeader?: fhir.TestScriptSetupActionOperationRequestHeaderArgs[] | undefined;
    /**
     * The fixture id (maybe new) to map to the response.
     */
    responseId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.responseId
     */
    _responseId?: fhir.FhirElementArgs;
    /**
     * The id of the fixture used as the body of a PUT or POST request.
     */
    sourceId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.sourceId
     */
    _sourceId?: fhir.FhirElementArgs;
    /**
     * Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.
     */
    targetId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.targetId
     */
    _targetId?: fhir.FhirElementArgs;
    /**
     * Complete request URL.
     */
    url?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.operation.url
     */
    _url?: fhir.FhirElementArgs;
}
/**
 * The operation to perform.
 */
export declare class TestScriptSetupActionOperation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Server interaction or operation type.
     */
    type?: fhir.Coding | undefined;
    /**
     * The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.
     */
    resource?: fhir.FhirCode | undefined;
    /**
     * The label would be used for tracking/logging purposes by test engines.
     */
    label?: fhir.FhirString | undefined;
    /**
     * The description would be used by test engines for tracking and reporting purposes.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The content-type or mime-type to use for RESTful operation in the 'Accept' header.
     */
    accept?: fhir.FhirCode<ContentTypeCodeType> | undefined;
    /**
     * The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.
     */
    contentType?: fhir.FhirCode<ContentTypeCodeType> | undefined;
    /**
     * Which server to perform the operation on.
     */
    destination?: fhir.FhirInteger | undefined;
    /**
     * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
     */
    encodeRequestUrl?: fhir.FhirBoolean | undefined;
    /**
     * Path plus parameters after [type].  Used to set parts of the request URL explicitly.
     */
    params?: fhir.FhirString | undefined;
    /**
     * Header elements would be used to set HTTP headers.
     */
    requestHeader: fhir.TestScriptSetupActionOperationRequestHeader[];
    /**
     * The fixture id (maybe new) to map to the response.
     */
    responseId?: fhir.FhirId | undefined;
    /**
     * The id of the fixture used as the body of a PUT or POST request.
     */
    sourceId?: fhir.FhirId | undefined;
    /**
     * Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.
     */
    targetId?: fhir.FhirId | undefined;
    /**
     * Complete request URL.
     */
    url?: fhir.FhirString | undefined;
    /**
     * Default constructor for TestScriptSetupActionOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptSetupActionOperationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptSetupActionAssert type.
 */
export interface TestScriptSetupActionAssertArgs extends fhir.BackboneElementArgs {
    /**
     * The label would be used for tracking/logging purposes by test engines.
     */
    label?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.label
     */
    _label?: fhir.FhirElementArgs;
    /**
     * The description would be used by test engines for tracking and reporting purposes.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The direction to use for the assertion.
     */
    direction?: fhir.FhirCode<AssertDirectionCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.direction
     */
    _direction?: fhir.FhirElementArgs;
    /**
     * Id of fixture used to compare the "sourceId/path" evaluations to.
     */
    compareToSourceId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.compareToSourceId
     */
    _compareToSourceId?: fhir.FhirElementArgs;
    /**
     * XPath or JSONPath expression against fixture used to compare the "sourceId/path" evaluations to.
     */
    compareToSourcePath?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.compareToSourcePath
     */
    _compareToSourcePath?: fhir.FhirElementArgs;
    /**
     * The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.
     */
    contentType?: fhir.FhirCode<ContentTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.contentType
     */
    _contentType?: fhir.FhirElementArgs;
    /**
     * The HTTP header field name e.g. 'Location'.
     */
    headerField?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.headerField
     */
    _headerField?: fhir.FhirElementArgs;
    /**
     * The ID of a fixture.  Asserts that the response contains at a minimumId the fixture specified by minimumId.
     */
    minimumId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.minimumId
     */
    _minimumId?: fhir.FhirElementArgs;
    /**
     * Whether or not the test execution performs validation on the bundle navigation links.
     */
    navigationLinks?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.navigationLinks
     */
    _navigationLinks?: fhir.FhirElementArgs;
    /**
     * The operator type.
     */
    operator?: fhir.FhirCode<AssertOperatorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.operator
     */
    _operator?: fhir.FhirElementArgs;
    /**
     * The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.
     */
    resource?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.resource
     */
    _resource?: fhir.FhirElementArgs;
    /**
     * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
     */
    response?: fhir.FhirCode<AssertResponseCodeTypesCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.response
     */
    _response?: fhir.FhirElementArgs;
    /**
     * The value of the HTTP response code to be tested.
     */
    responseCode?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.responseCode
     */
    _responseCode?: fhir.FhirElementArgs;
    /**
     * Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
     */
    sourceId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.sourceId
     */
    _sourceId?: fhir.FhirElementArgs;
    /**
     * The ID of the Profile to validate against.
     */
    validateProfileId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.validateProfileId
     */
    _validateProfileId?: fhir.FhirElementArgs;
    /**
     * The value to compare to.
     */
    value?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * Whether or not the test execution will produce a warning only on error for this assert.
     */
    warningOnly?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.setup.action.assert.warningOnly
     */
    _warningOnly?: fhir.FhirElementArgs;
}
/**
 * Evaluates the results of previous operations to determine if the server under test behaves appropriately.
 */
export declare class TestScriptSetupActionAssert extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The label would be used for tracking/logging purposes by test engines.
     */
    label?: fhir.FhirString | undefined;
    /**
     * The description would be used by test engines for tracking and reporting purposes.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The direction to use for the assertion.
     */
    direction?: fhir.FhirCode<AssertDirectionCodeType> | undefined;
    /**
     * Id of fixture used to compare the "sourceId/path" evaluations to.
     */
    compareToSourceId?: fhir.FhirString | undefined;
    /**
     * XPath or JSONPath expression against fixture used to compare the "sourceId/path" evaluations to.
     */
    compareToSourcePath?: fhir.FhirString | undefined;
    /**
     * The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.
     */
    contentType?: fhir.FhirCode<ContentTypeCodeType> | undefined;
    /**
     * The HTTP header field name e.g. 'Location'.
     */
    headerField?: fhir.FhirString | undefined;
    /**
     * The ID of a fixture.  Asserts that the response contains at a minimumId the fixture specified by minimumId.
     */
    minimumId?: fhir.FhirString | undefined;
    /**
     * Whether or not the test execution performs validation on the bundle navigation links.
     */
    navigationLinks?: fhir.FhirBoolean | undefined;
    /**
     * The operator type.
     */
    operator?: fhir.FhirCode<AssertOperatorCodeType> | undefined;
    /**
     * The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.
     */
    path?: fhir.FhirString | undefined;
    /**
     * The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.
     */
    resource?: fhir.FhirCode | undefined;
    /**
     * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
     */
    response?: fhir.FhirCode<AssertResponseCodeTypesCodeType> | undefined;
    /**
     * The value of the HTTP response code to be tested.
     */
    responseCode?: fhir.FhirString | undefined;
    /**
     * Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
     */
    sourceId?: fhir.FhirId | undefined;
    /**
     * The ID of the Profile to validate against.
     */
    validateProfileId?: fhir.FhirId | undefined;
    /**
     * The value to compare to.
     */
    value?: fhir.FhirString | undefined;
    /**
     * Whether or not the test execution will produce a warning only on error for this assert.
     */
    warningOnly?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for TestScriptSetupActionAssert - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptSetupActionAssertArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptSetupAction type.
 */
export interface TestScriptSetupActionArgs extends fhir.BackboneElementArgs {
    /**
     * The operation to perform.
     */
    operation?: fhir.TestScriptSetupActionOperationArgs | undefined;
    /**
     * Evaluates the results of previous operations to determine if the server under test behaves appropriately.
     */
    assert?: fhir.TestScriptSetupActionAssertArgs | undefined;
}
/**
 * Action would contain either an operation or an assertion.
 */
export declare class TestScriptSetupAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The operation to perform.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
    /**
     * Evaluates the results of previous operations to determine if the server under test behaves appropriately.
     */
    assert?: fhir.TestScriptSetupActionAssert | undefined;
    /**
     * Default constructor for TestScriptSetupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptSetupActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptSetup type.
 */
export interface TestScriptSetupArgs extends fhir.BackboneElementArgs {
    /**
     * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadataArgs | undefined;
    /**
     * Action would contain either an operation or an assertion.
     */
    action: fhir.TestScriptSetupActionArgs[] | null;
}
/**
 * A series of required setup operations before tests are executed.
 */
export declare class TestScriptSetup extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadata | undefined;
    /**
     * Action would contain either an operation or an assertion.
     */
    action: fhir.TestScriptSetupAction[];
    /**
     * Default constructor for TestScriptSetup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptSetupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptTestAction type.
 */
export interface TestScriptTestActionArgs extends fhir.BackboneElementArgs {
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestScriptSetupActionOperationArgs | undefined;
    /**
     * Evaluates the results of previous operations to determine if the server under test behaves appropriately.
     */
    assert?: fhir.TestScriptSetupActionAssertArgs | undefined;
}
/**
 * Action would contain either an operation or an assertion.
 */
export declare class TestScriptTestAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
    /**
     * Evaluates the results of previous operations to determine if the server under test behaves appropriately.
     */
    assert?: fhir.TestScriptSetupActionAssert | undefined;
    /**
     * Default constructor for TestScriptTestAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptTestActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptTest type.
 */
export interface TestScriptTestArgs extends fhir.BackboneElementArgs {
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.test.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.test.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadataArgs | undefined;
    /**
     * Action would contain either an operation or an assertion.
     */
    action: fhir.TestScriptTestActionArgs[] | null;
}
/**
 * A test in this script.
 */
export declare class TestScriptTest extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: fhir.FhirString | undefined;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadata | undefined;
    /**
     * Action would contain either an operation or an assertion.
     */
    action: fhir.TestScriptTestAction[];
    /**
     * Default constructor for TestScriptTest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptTestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptTeardownAction type.
 */
export interface TestScriptTeardownActionArgs extends fhir.BackboneElementArgs {
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestScriptSetupActionOperationArgs | undefined;
}
/**
 * The teardown action will only contain an operation.
 */
export declare class TestScriptTeardownAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
    /**
     * Default constructor for TestScriptTeardownAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptTeardownActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScriptTeardown type.
 */
export interface TestScriptTeardownArgs extends fhir.BackboneElementArgs {
    /**
     * The teardown action will only contain an operation.
     */
    action: fhir.TestScriptTeardownActionArgs[] | null;
}
/**
 * A series of operations required to clean up after the all the tests are executed (successfully or otherwise).
 */
export declare class TestScriptTeardown extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The teardown action will only contain an operation.
     */
    action: fhir.TestScriptTeardownAction[];
    /**
     * Default constructor for TestScriptTeardown - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptTeardownArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the TestScript type.
 */
export interface TestScriptArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "TestScript" | undefined;
    /**
     * An absolute URL that is used to identify this Test Script. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this Test Script is (or will be) published.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * There may be multiple resource versions of the TestScript that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * A free text natural language name identifying the TestScript.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Allows filtering of TestScripts that are appropriate for use vs. not.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Allows filtering of TestScripts that are appropriate for use vs. not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Helps establish the "authority/credibility" of the Test Script.  May also allow for contact.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: fhir.TestScriptContactArgs[] | undefined;
    /**
     * The date this version of the test tcript was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the test cases change.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * A free text natural language description of the TestScript and its use.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Assist in searching for appropriate content.
     */
    useContext?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Explains why this Test Script is needed and why it's been constrained as it has.
     */
    requirements?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.requirements
     */
    _requirements?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the Test Script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */
    copyright?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: TestScript.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadataArgs | undefined;
    /**
     * If the tests apply to more than one FHIR server (e.g. cross-server interoperability tests) then multiserver=true. Defaults to false if value is unspecified.
     */
    multiserver?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: TestScript.multiserver
     */
    _multiserver?: fhir.FhirElementArgs;
    /**
     * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
     */
    fixture?: fhir.TestScriptFixtureArgs[] | undefined;
    /**
     * Reference to the profile to be used for validation.
     */
    profile?: fhir.ReferenceArgs[] | undefined;
    /**
     * Variable is set based either on element value in response body or on header field value in the response headers.
     */
    variable?: fhir.TestScriptVariableArgs[] | undefined;
    /**
     * A series of required setup operations before tests are executed.
     */
    setup?: fhir.TestScriptSetupArgs | undefined;
    /**
     * A test in this script.
     */
    test?: fhir.TestScriptTestArgs[] | undefined;
    /**
     * A series of operations required to clean up after the all the tests are executed (successfully or otherwise).
     */
    teardown?: fhir.TestScriptTeardownArgs | undefined;
}
/**
 * TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
 */
export declare class TestScript extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "TestScript";
    /**
     * An absolute URL that is used to identify this Test Script. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this Test Script is (or will be) published.
     */
    url: fhir.FhirUri | null;
    /**
     * There may be multiple resource versions of the TestScript that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: fhir.FhirString | undefined;
    /**
     * A free text natural language name identifying the TestScript.
     */
    name: fhir.FhirString | null;
    /**
     * Allows filtering of TestScripts that are appropriate for use vs. not.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | null;
    /**
     * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Allows filtering of TestScripts that are appropriate for use vs. not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Helps establish the "authority/credibility" of the Test Script.  May also allow for contact.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact: fhir.TestScriptContact[];
    /**
     * The date this version of the test tcript was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the test cases change.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * A free text natural language description of the TestScript and its use.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Assist in searching for appropriate content.
     */
    useContext: fhir.CodeableConcept[];
    /**
     * Explains why this Test Script is needed and why it's been constrained as it has.
     */
    requirements?: fhir.FhirString | undefined;
    /**
     * A copyright statement relating to the Test Script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */
    copyright?: fhir.FhirString | undefined;
    /**
     * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadata | undefined;
    /**
     * If the tests apply to more than one FHIR server (e.g. cross-server interoperability tests) then multiserver=true. Defaults to false if value is unspecified.
     */
    multiserver?: fhir.FhirBoolean | undefined;
    /**
     * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
     */
    fixture: fhir.TestScriptFixture[];
    /**
     * Reference to the profile to be used for validation.
     */
    profile: fhir.Reference[];
    /**
     * Variable is set based either on element value in response body or on header field value in the response headers.
     */
    variable: fhir.TestScriptVariable[];
    /**
     * A series of required setup operations before tests are executed.
     */
    setup?: fhir.TestScriptSetup | undefined;
    /**
     * A test in this script.
     */
    test: fhir.TestScriptTest[];
    /**
     * A series of operations required to clean up after the all the tests are executed (successfully or otherwise).
     */
    teardown?: fhir.TestScriptTeardown | undefined;
    /**
     * Default constructor for TestScript - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=TestScript.d.ts.map