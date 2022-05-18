/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { ExpressionLanguageCodings } from '../fhirValueSets/ExpressionLanguageCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirElement } from './FhirElement.js';
import { FhirString } from './FhirString.js';
import { FhirId } from './FhirId.js';
import { FhirCode } from './FhirCode.js';
import { FhirUri } from './FhirUri.js';

// <auto-generated/>
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
var Expression = /** @class */ (function (_super) {
    __extends(Expression, _super);
    /**
     * Default constructor for Expression - initializes any required elements to null if a value is not provided.
     */
    function Expression(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['description']) {
            _this.description = new FhirString({ value: source.description });
        }
        if (source['name']) {
            _this.name = new FhirId({ value: source.name });
        }
        if (source['language']) {
            _this.language = new FhirCode({ value: source.language });
        }
        else {
            _this.language = null;
        }
        if (source['expression']) {
            _this.expression = new FhirString({ value: source.expression });
        }
        if (source['reference']) {
            _this.reference = new FhirUri({ value: source.reference });
        }
        return _this;
    }
    /**
     * Extensible-bound Value Set for language (Expression.language)
     */
    Expression.languageExtensibleCoding = function () {
        return ExpressionLanguageCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Expression.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["description"]) {
            (_a = outcome.issue).push.apply(_a, this.description.doModelValidation().issue);
        }
        if (this["name"]) {
            (_b = outcome.issue).push.apply(_b, this.name.doModelValidation().issue);
        }
        if (!this['language']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property language:fhir.FhirCode fhir: Expression.language:code', }));
        }
        if (this["language"]) {
            (_c = outcome.issue).push.apply(_c, this.language.doModelValidation().issue);
        }
        if (this["expression"]) {
            (_d = outcome.issue).push.apply(_d, this.expression.doModelValidation().issue);
        }
        if (this["reference"]) {
            (_e = outcome.issue).push.apply(_e, this.reference.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    Expression._fts_dataType = 'Expression';
    return Expression;
}(FhirElement));

export { Expression };
//# sourceMappingURL=Expression.js.map