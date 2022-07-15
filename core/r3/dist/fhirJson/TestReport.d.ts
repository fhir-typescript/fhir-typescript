import * as fhir from '../fhirJson.js';
/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export interface TestReportParticipant extends fhir.BackboneElement {
    /**
     * The type of participant.
     */
    type: 'client' | 'server' | 'test-engine' | null;
    /**
     * Extended properties for primitive element: TestReport.participant.type
     */
    _type?: fhir.FhirElement;
    /**
     * The uri of the participant. An absolute URL is preferred.
     */
    uri: string | null;
    /**
     * Extended properties for primitive element: TestReport.participant.uri
     */
    _uri?: fhir.FhirElement;
    /**
     * The display name of the participant.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.participant.display
     */
    _display?: fhir.FhirElement;
}
/**
 * The operation performed.
 */
export interface TestReportSetupActionOperation extends fhir.BackboneElement {
    /**
     * The result of this operation.
     */
    result: 'error' | 'fail' | 'pass' | 'skip' | 'warning' | null;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.result
     */
    _result?: fhir.FhirElement;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.message
     */
    _message?: fhir.FhirElement;
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.detail
     */
    _detail?: fhir.FhirElement;
}
/**
 * The results of the assertion performed on the previous operations.
 */
export interface TestReportSetupActionAssert extends fhir.BackboneElement {
    /**
     * The result of this assertion.
     */
    result: 'error' | 'fail' | 'pass' | 'skip' | 'warning' | null;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.result
     */
    _result?: fhir.FhirElement;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.message
     */
    _message?: fhir.FhirElement;
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.detail
     */
    _detail?: fhir.FhirElement;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface TestReportSetupAction extends fhir.BackboneElement {
    /**
     * The operation performed.
     */
    operation?: fhir.TestReportSetupActionOperation | undefined;
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.TestReportSetupActionAssert | undefined;
}
/**
 * The results of the series of required setup operations before the tests were executed.
 */
export interface TestReportSetup extends fhir.BackboneElement {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: (fhir.TestReportSetupAction | null)[] | null;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface TestReportTestAction extends fhir.BackboneElement {
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestReportSetupActionOperation | undefined;
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.TestReportSetupActionAssert | undefined;
}
/**
 * A test executed from the test script.
 */
export interface TestReportTest extends fhir.BackboneElement {
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.test.name
     */
    _name?: fhir.FhirElement;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.test.description
     */
    _description?: fhir.FhirElement;
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: (fhir.TestReportTestAction | null)[] | null;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface TestReportTeardownAction extends fhir.BackboneElement {
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhir.TestReportSetupActionOperation | null;
}
/**
 * The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).
 */
export interface TestReportTeardown extends fhir.BackboneElement {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: (fhir.TestReportTeardownAction | null)[] | null;
}
/**
 * A summary of information based on the results of executing a TestScript.
 */
export interface TestReport extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "TestReport" | null;
    /**
     * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Not expected to be globally unique.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.name
     */
    _name?: fhir.FhirElement;
    /**
     * The status represents where the execution is currently within the test script execution life cycle.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'completed' | 'entered-in-error' | 'in-progress' | 'stopped' | 'waiting' | null;
    /**
     * Extended properties for primitive element: TestReport.status
     */
    _status?: fhir.FhirElement;
    /**
     * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
     */
    testScript: fhir.Reference | null;
    /**
     * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
     */
    result: 'fail' | 'pass' | 'pending' | null;
    /**
     * Extended properties for primitive element: TestReport.result
     */
    _result?: fhir.FhirElement;
    /**
     * The final score (percentage of tests passed) resulting from the execution of the TestScript.
     */
    score?: number | undefined;
    /**
     * Extended properties for primitive element: TestReport.score
     */
    _score?: fhir.FhirElement;
    /**
     * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
     */
    tester?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.tester
     */
    _tester?: fhir.FhirElement;
    /**
     * Additional specific dates may be added as extensions.
     */
    issued?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.issued
     */
    _issued?: fhir.FhirElement;
    /**
     * A participant in the test execution, either the execution engine, a client, or a server.
     */
    participant?: (fhir.TestReportParticipant | null)[] | undefined;
    /**
     * The results of the series of required setup operations before the tests were executed.
     */
    setup?: fhir.TestReportSetup | undefined;
    /**
     * A test executed from the test script.
     */
    test?: (fhir.TestReportTest | null)[] | undefined;
    /**
     * The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).
     */
    teardown?: fhir.TestReportTeardown | undefined;
}
//# sourceMappingURL=TestReport.d.ts.map