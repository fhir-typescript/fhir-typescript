// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: TestReport

import * as fhir from '../fhir.js';

// @ts-ignore
import { ReportParticipantTypeCodings, ReportParticipantTypeCodingType,} from '../fhirValueSets/ReportParticipantTypeCodings.js';
// @ts-ignore
import { ReportParticipantTypeCodes,  ReportParticipantTypeCodeType } from '../fhirValueSets/ReportParticipantTypeCodes.js';
// @ts-ignore
import { ReportActionResultCodings, ReportActionResultCodingType,} from '../fhirValueSets/ReportActionResultCodings.js';
// @ts-ignore
import { ReportActionResultCodes,  ReportActionResultCodeType } from '../fhirValueSets/ReportActionResultCodes.js';
// @ts-ignore
import { ReportStatusCodings, ReportStatusCodingType,} from '../fhirValueSets/ReportStatusCodings.js';
// @ts-ignore
import { ReportStatusCodes,  ReportStatusCodeType } from '../fhirValueSets/ReportStatusCodes.js';
// @ts-ignore
import { ReportResultCodings, ReportResultCodingType,} from '../fhirValueSets/ReportResultCodings.js';
// @ts-ignore
import { ReportResultCodes,  ReportResultCodeType } from '../fhirValueSets/ReportResultCodes.js';
/**
 * Valid arguments for the TestReportParticipant type.
 */
export interface TestReportParticipantArgs extends fhir.BackboneElementArgs {
  /**
   * The type of participant.
   */
  type: fhir.FhirCode<ReportParticipantTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.participant.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * The uri of the participant. An absolute URL is preferred.
   */
  uri: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.participant.uri
   */
  _uri?:fhir.FhirElementArgs;
  /**
   * The display name of the participant.
   */
  display?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.participant.display
   */
  _display?:fhir.FhirElementArgs;
}

/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export class TestReportParticipant extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'TestReportParticipant';
  /**
   * The type of participant.
   */
  public type: fhir.FhirCode<ReportParticipantTypeCodeType>|null;
  /**
   * The uri of the participant. An absolute URL is preferred.
   */
  public uri: fhir.FhirUri|null;
  /**
   * The display name of the participant.
   */
  public display?: fhir.FhirString|undefined;
  /**
   * Default constructor for TestReportParticipant - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TestReportParticipantArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.FhirCode<ReportParticipantTypeCodeType>({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<ReportParticipantTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
    if (source['uri']) { this.uri = new fhir.FhirUri({value: source.uri}); }
    else { this.uri = null; }
    if (source['_uri']) {
      if (this.uri) { this.uri.addExtendedProperties(source._uri!); }
      else { this.uri = new fhir.FhirUri(source._uri as Partial<fhir.FhirUriArgs>); }
    }
    if (source['display']) { this.display = new fhir.FhirString({value: source.display}); }
    if (source['_display']) {
      if (this.display) { this.display.addExtendedProperties(source._display!); }
      else { this.display = new fhir.FhirString(source._display as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Required-bound Value Set for type (TestReport.participant.type)
   */
  public static get typeRequiredCodes() {
    return ReportParticipantTypeCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['type']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property type:fhir.FhirCode<ReportParticipantTypeCodeType> fhir: TestReport.participant.type:code' });
    }
    if (this['type'] && (!Object.values(ReportParticipantTypeCodes).includes(this.type as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property type:fhir.FhirCode<ReportParticipantTypeCodeType> fhir: TestReport.participant.type:code Required binding to: ReportParticipantType' });
    }
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (!this['uri']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property uri:fhir.FhirUri fhir: TestReport.participant.uri:uri' });
    }
    if (this["uri"]) { issues.push(...this.uri.doModelValidation()); }
    if (this["display"]) { issues.push(...this.display.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the TestReportSetupActionOperation type.
 */
export interface TestReportSetupActionOperationArgs extends fhir.BackboneElementArgs {
  /**
   * The result of this operation.
   */
  result: fhir.FhirCode<ReportActionResultCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.setup.action.operation.result
   */
  _result?:fhir.FhirElementArgs;
  /**
   * An explanatory message associated with the result.
   */
  message?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.setup.action.operation.message
   */
  _message?:fhir.FhirElementArgs;
  /**
   * A link to further details on the result.
   */
  detail?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.setup.action.operation.detail
   */
  _detail?:fhir.FhirElementArgs;
}

/**
 * The operation performed.
 */
export class TestReportSetupActionOperation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'TestReportSetupActionOperation';
  /**
   * The result of this operation.
   */
  public result: fhir.FhirCode<ReportActionResultCodeType>|null;
  /**
   * An explanatory message associated with the result.
   */
  public message?: fhir.FhirMarkdown|undefined;
  /**
   * A link to further details on the result.
   */
  public detail?: fhir.FhirUri|undefined;
  /**
   * Default constructor for TestReportSetupActionOperation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TestReportSetupActionOperationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['result']) { this.result = new fhir.FhirCode<ReportActionResultCodeType>({value: source.result}); }
    else { this.result = null; }
    if (source['_result']) {
      if (this.result) { this.result.addExtendedProperties(source._result!); }
      else { this.result = new fhir.FhirCode<ReportActionResultCodeType>(source._result as Partial<fhir.FhirCode>); }
    }
    if (source['message']) { this.message = new fhir.FhirMarkdown({value: source.message}); }
    if (source['_message']) {
      if (this.message) { this.message.addExtendedProperties(source._message!); }
      else { this.message = new fhir.FhirMarkdown(source._message as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['detail']) { this.detail = new fhir.FhirUri({value: source.detail}); }
    if (source['_detail']) {
      if (this.detail) { this.detail.addExtendedProperties(source._detail!); }
      else { this.detail = new fhir.FhirUri(source._detail as Partial<fhir.FhirUriArgs>); }
    }
  }
  /**
   * Required-bound Value Set for result (TestReport.setup.action.operation.result)
   */
  public static get resultRequiredCodes() {
    return ReportActionResultCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['result']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property result:fhir.FhirCode<ReportActionResultCodeType> fhir: TestReport.setup.action.operation.result:code' });
    }
    if (this['result'] && (!Object.values(ReportActionResultCodes).includes(this.result as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property result:fhir.FhirCode<ReportActionResultCodeType> fhir: TestReport.setup.action.operation.result:code Required binding to: ReportActionResult' });
    }
    if (this["result"]) { issues.push(...this.result.doModelValidation()); }
    if (this["message"]) { issues.push(...this.message.doModelValidation()); }
    if (this["detail"]) { issues.push(...this.detail.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the TestReportSetupActionAssert type.
 */
export interface TestReportSetupActionAssertArgs extends fhir.BackboneElementArgs {
  /**
   * The result of this assertion.
   */
  result: fhir.FhirCode<ReportActionResultCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.setup.action.assert.result
   */
  _result?:fhir.FhirElementArgs;
  /**
   * An explanatory message associated with the result.
   */
  message?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.setup.action.assert.message
   */
  _message?:fhir.FhirElementArgs;
  /**
   * A link to further details on the result.
   */
  detail?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.setup.action.assert.detail
   */
  _detail?:fhir.FhirElementArgs;
}

/**
 * The results of the assertion performed on the previous operations.
 */
export class TestReportSetupActionAssert extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'TestReportSetupActionAssert';
  /**
   * The result of this assertion.
   */
  public result: fhir.FhirCode<ReportActionResultCodeType>|null;
  /**
   * An explanatory message associated with the result.
   */
  public message?: fhir.FhirMarkdown|undefined;
  /**
   * A link to further details on the result.
   */
  public detail?: fhir.FhirString|undefined;
  /**
   * Default constructor for TestReportSetupActionAssert - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TestReportSetupActionAssertArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['result']) { this.result = new fhir.FhirCode<ReportActionResultCodeType>({value: source.result}); }
    else { this.result = null; }
    if (source['_result']) {
      if (this.result) { this.result.addExtendedProperties(source._result!); }
      else { this.result = new fhir.FhirCode<ReportActionResultCodeType>(source._result as Partial<fhir.FhirCode>); }
    }
    if (source['message']) { this.message = new fhir.FhirMarkdown({value: source.message}); }
    if (source['_message']) {
      if (this.message) { this.message.addExtendedProperties(source._message!); }
      else { this.message = new fhir.FhirMarkdown(source._message as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['detail']) { this.detail = new fhir.FhirString({value: source.detail}); }
    if (source['_detail']) {
      if (this.detail) { this.detail.addExtendedProperties(source._detail!); }
      else { this.detail = new fhir.FhirString(source._detail as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Required-bound Value Set for result (TestReport.setup.action.assert.result)
   */
  public static get resultRequiredCodes() {
    return ReportActionResultCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['result']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property result:fhir.FhirCode<ReportActionResultCodeType> fhir: TestReport.setup.action.assert.result:code' });
    }
    if (this['result'] && (!Object.values(ReportActionResultCodes).includes(this.result as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property result:fhir.FhirCode<ReportActionResultCodeType> fhir: TestReport.setup.action.assert.result:code Required binding to: ReportActionResult' });
    }
    if (this["result"]) { issues.push(...this.result.doModelValidation()); }
    if (this["message"]) { issues.push(...this.message.doModelValidation()); }
    if (this["detail"]) { issues.push(...this.detail.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the TestReportSetupAction type.
 */
export interface TestReportSetupActionArgs extends fhir.BackboneElementArgs {
  /**
   * The operation performed.
   */
  operation?: fhir.TestReportSetupActionOperationArgs|undefined;
  /**
   * The results of the assertion performed on the previous operations.
   */
  assert?: fhir.TestReportSetupActionAssertArgs|undefined;
}

/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export class TestReportSetupAction extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'TestReportSetupAction';
  /**
   * The operation performed.
   */
  public operation?: fhir.TestReportSetupActionOperation|undefined;
  /**
   * The results of the assertion performed on the previous operations.
   */
  public assert?: fhir.TestReportSetupActionAssert|undefined;
  /**
   * Default constructor for TestReportSetupAction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TestReportSetupActionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['operation']) { this.operation = new fhir.TestReportSetupActionOperation(source.operation); }
    if (source['assert']) { this.assert = new fhir.TestReportSetupActionAssert(source.assert); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["operation"]) { issues.push(...this.operation.doModelValidation()); }
    if (this["assert"]) { issues.push(...this.assert.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the TestReportSetup type.
 */
export interface TestReportSetupArgs extends fhir.BackboneElementArgs {
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  action: fhir.TestReportSetupActionArgs[]|null;
}

/**
 * The results of the series of required setup operations before the tests were executed.
 */
export class TestReportSetup extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'TestReportSetup';
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  public action: fhir.TestReportSetupAction[];
  /**
   * Default constructor for TestReportSetup - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TestReportSetupArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['action']) { this.action = source.action.map((x) => new fhir.TestReportSetupAction(x)); }
    else { this.action = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['action']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property action:fhir.TestReportSetupAction[] fhir: TestReport.setup.action:action' });
    } else if (!Array.isArray(this.action)) {
      issues.push({ severity: 'error', code: 'structure', diagnostics: 'Found scalar in array property action:fhir.TestReportSetupAction[] fhir: TestReport.setup.action:action' });
    } else if (this.action.length === 0) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property action:fhir.TestReportSetupAction[] fhir: TestReport.setup.action:action' });
    }
    if (this["action"]) { this.action.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the TestReportTestAction type.
 */
export interface TestReportTestActionArgs extends fhir.BackboneElementArgs {
  /**
   * An operation would involve a REST request to a server.
   */
  operation?: fhir.TestReportSetupActionOperationArgs|undefined;
  /**
   * The results of the assertion performed on the previous operations.
   */
  assert?: fhir.TestReportSetupActionAssertArgs|undefined;
}

/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export class TestReportTestAction extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'TestReportTestAction';
  /**
   * An operation would involve a REST request to a server.
   */
  public operation?: fhir.TestReportSetupActionOperation|undefined;
  /**
   * The results of the assertion performed on the previous operations.
   */
  public assert?: fhir.TestReportSetupActionAssert|undefined;
  /**
   * Default constructor for TestReportTestAction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TestReportTestActionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['operation']) { this.operation = new fhir.TestReportSetupActionOperation(source.operation); }
    if (source['assert']) { this.assert = new fhir.TestReportSetupActionAssert(source.assert); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["operation"]) { issues.push(...this.operation.doModelValidation()); }
    if (this["assert"]) { issues.push(...this.assert.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the TestReportTest type.
 */
export interface TestReportTestArgs extends fhir.BackboneElementArgs {
  /**
   * The name of this test used for tracking/logging purposes by test engines.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.test.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * A short description of the test used by test engines for tracking and reporting purposes.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.test.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  action: fhir.TestReportTestActionArgs[]|null;
}

/**
 * A test executed from the test script.
 */
export class TestReportTest extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'TestReportTest';
  /**
   * The name of this test used for tracking/logging purposes by test engines.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * A short description of the test used by test engines for tracking and reporting purposes.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  public action: fhir.TestReportTestAction[];
  /**
   * Default constructor for TestReportTest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TestReportTestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['action']) { this.action = source.action.map((x) => new fhir.TestReportTestAction(x)); }
    else { this.action = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["name"]) { issues.push(...this.name.doModelValidation()); }
    if (this["description"]) { issues.push(...this.description.doModelValidation()); }
    if (!this['action']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property action:fhir.TestReportTestAction[] fhir: TestReport.test.action:action' });
    } else if (!Array.isArray(this.action)) {
      issues.push({ severity: 'error', code: 'structure', diagnostics: 'Found scalar in array property action:fhir.TestReportTestAction[] fhir: TestReport.test.action:action' });
    } else if (this.action.length === 0) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property action:fhir.TestReportTestAction[] fhir: TestReport.test.action:action' });
    }
    if (this["action"]) { this.action.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the TestReportTeardownAction type.
 */
export interface TestReportTeardownActionArgs extends fhir.BackboneElementArgs {
  /**
   * An operation would involve a REST request to a server.
   */
  operation: fhir.TestReportSetupActionOperationArgs|null;
}

/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export class TestReportTeardownAction extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'TestReportTeardownAction';
  /**
   * An operation would involve a REST request to a server.
   */
  public operation: fhir.TestReportSetupActionOperation|null;
  /**
   * Default constructor for TestReportTeardownAction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TestReportTeardownActionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['operation']) { this.operation = new fhir.TestReportSetupActionOperation(source.operation); }
    else { this.operation = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['operation']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property operation:fhir.TestReportSetupActionOperation fhir: TestReport.teardown.action.operation:TestReport.setup.action.operation' });
    }
    if (this["operation"]) { issues.push(...this.operation.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the TestReportTeardown type.
 */
export interface TestReportTeardownArgs extends fhir.BackboneElementArgs {
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  action: fhir.TestReportTeardownActionArgs[]|null;
}

/**
 * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
 */
export class TestReportTeardown extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'TestReportTeardown';
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  public action: fhir.TestReportTeardownAction[];
  /**
   * Default constructor for TestReportTeardown - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TestReportTeardownArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['action']) { this.action = source.action.map((x) => new fhir.TestReportTeardownAction(x)); }
    else { this.action = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['action']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property action:fhir.TestReportTeardownAction[] fhir: TestReport.teardown.action:action' });
    } else if (!Array.isArray(this.action)) {
      issues.push({ severity: 'error', code: 'structure', diagnostics: 'Found scalar in array property action:fhir.TestReportTeardownAction[] fhir: TestReport.teardown.action:action' });
    } else if (this.action.length === 0) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property action:fhir.TestReportTeardownAction[] fhir: TestReport.teardown.action:action' });
    }
    if (this["action"]) { this.action.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the TestReport type.
 */
export interface TestReportArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "TestReport"|undefined;
  /**
   * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * Not expected to be globally unique.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * The status represents where the execution is currently within the test script execution life cycle.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<ReportStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
   */
  testScript: fhir.ReferenceArgs|null;
  /**
   * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
   */
  result: fhir.FhirCode<ReportResultCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.result
   */
  _result?:fhir.FhirElementArgs;
  /**
   * The final score (percentage of tests passed) resulting from the execution of the TestScript.
   */
  score?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: TestReport.score
   */
  _score?:fhir.FhirElementArgs;
  /**
   * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
   */
  tester?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.tester
   */
  _tester?:fhir.FhirElementArgs;
  /**
   * Additional specific dates may be added as extensions.
   */
  issued?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: TestReport.issued
   */
  _issued?:fhir.FhirElementArgs;
  /**
   * A participant in the test execution, either the execution engine, a client, or a server.
   */
  participant?: fhir.TestReportParticipantArgs[]|undefined;
  /**
   * The results of the series of required setup operations before the tests were executed.
   */
  setup?: fhir.TestReportSetupArgs|undefined;
  /**
   * A test executed from the test script.
   */
  test?: fhir.TestReportTestArgs[]|undefined;
  /**
   * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
   */
  teardown?: fhir.TestReportTeardownArgs|undefined;
}

/**
 * A summary of information based on the results of executing a TestScript.
 */
export class TestReport extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'TestReport';
  /**
   * Resource Type Name
   */
  public override resourceType: "TestReport";
  /**
   * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Not expected to be globally unique.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * The status represents where the execution is currently within the test script execution life cycle.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<ReportStatusCodeType>|null;
  /**
   * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
   */
  public testScript: fhir.Reference|null;
  /**
   * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
   */
  public result: fhir.FhirCode<ReportResultCodeType>|null;
  /**
   * The final score (percentage of tests passed) resulting from the execution of the TestScript.
   */
  public score?: fhir.FhirDecimal|undefined;
  /**
   * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
   */
  public tester?: fhir.FhirString|undefined;
  /**
   * Additional specific dates may be added as extensions.
   */
  public issued?: fhir.FhirDateTime|undefined;
  /**
   * A participant in the test execution, either the execution engine, a client, or a server.
   */
  public participant: fhir.TestReportParticipant[];
  /**
   * The results of the series of required setup operations before the tests were executed.
   */
  public setup?: fhir.TestReportSetup|undefined;
  /**
   * A test executed from the test script.
   */
  public test: fhir.TestReportTest[];
  /**
   * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
   */
  public teardown?: fhir.TestReportTeardown|undefined;
  /**
   * Default constructor for TestReport - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<TestReportArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'TestReport';
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['status']) { this.status = new fhir.FhirCode<ReportStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ReportStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['testScript']) { this.testScript = new fhir.Reference(source.testScript); }
    else { this.testScript = null; }
    if (source['result']) { this.result = new fhir.FhirCode<ReportResultCodeType>({value: source.result}); }
    else { this.result = null; }
    if (source['_result']) {
      if (this.result) { this.result.addExtendedProperties(source._result!); }
      else { this.result = new fhir.FhirCode<ReportResultCodeType>(source._result as Partial<fhir.FhirCode>); }
    }
    if (source['score']) { this.score = new fhir.FhirDecimal({value: source.score}); }
    if (source['_score']) {
      if (this.score) { this.score.addExtendedProperties(source._score!); }
      else { this.score = new fhir.FhirDecimal(source._score as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['tester']) { this.tester = new fhir.FhirString({value: source.tester}); }
    if (source['_tester']) {
      if (this.tester) { this.tester.addExtendedProperties(source._tester!); }
      else { this.tester = new fhir.FhirString(source._tester as Partial<fhir.FhirStringArgs>); }
    }
    if (source['issued']) { this.issued = new fhir.FhirDateTime({value: source.issued}); }
    if (source['_issued']) {
      if (this.issued) { this.issued.addExtendedProperties(source._issued!); }
      else { this.issued = new fhir.FhirDateTime(source._issued as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['participant']) { this.participant = source.participant.map((x) => new fhir.TestReportParticipant(x)); }
    else { this.participant = []; }
    if (source['setup']) { this.setup = new fhir.TestReportSetup(source.setup); }
    if (source['test']) { this.test = source.test.map((x) => new fhir.TestReportTest(x)); }
    else { this.test = []; }
    if (source['teardown']) { this.teardown = new fhir.TestReportTeardown(source.teardown); }
  }
  /**
   * Required-bound Value Set for status (TestReport.status)
   */
  public static get statusRequiredCodes() {
    return ReportStatusCodes;
  }
  /**
   * Required-bound Value Set for result (TestReport.result)
   */
  public static get resultRequiredCodes() {
    return ReportResultCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"TestReport" fhir: TestReport.resourceType:"TestReport"' });
    }
    if (this["identifier"]) { issues.push(...this.identifier.doModelValidation()); }
    if (this["name"]) { issues.push(...this.name.doModelValidation()); }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<ReportStatusCodeType> fhir: TestReport.status:code' });
    }
    if (this['status'] && (!Object.values(ReportStatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<ReportStatusCodeType> fhir: TestReport.status:code Required binding to: ReportStatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (!this['testScript']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property testScript:fhir.Reference fhir: TestReport.testScript:Reference' });
    }
    if (this["testScript"]) { issues.push(...this.testScript.doModelValidation()); }
    if (!this['result']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property result:fhir.FhirCode<ReportResultCodeType> fhir: TestReport.result:code' });
    }
    if (this['result'] && (!Object.values(ReportResultCodes).includes(this.result as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property result:fhir.FhirCode<ReportResultCodeType> fhir: TestReport.result:code Required binding to: ReportResult' });
    }
    if (this["result"]) { issues.push(...this.result.doModelValidation()); }
    if (this["score"]) { issues.push(...this.score.doModelValidation()); }
    if (this["tester"]) { issues.push(...this.tester.doModelValidation()); }
    if (this["issued"]) { issues.push(...this.issued.doModelValidation()); }
    if (this["participant"]) { this.participant.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["setup"]) { issues.push(...this.setup.doModelValidation()); }
    if (this["test"]) { this.test.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["teardown"]) { issues.push(...this.teardown.doModelValidation()); }
    return issues;
  }
}
