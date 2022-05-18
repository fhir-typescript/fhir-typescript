/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirElement } from './FhirElement.js';
import { FhirString } from './FhirString.js';
import { FhirBase64Binary } from './FhirBase64Binary.js';
import { FhirBoolean } from './FhirBoolean.js';
import { FhirCanonical } from './FhirCanonical.js';
import { FhirCode } from './FhirCode.js';
import { FhirDate } from './FhirDate.js';
import { FhirDateTime } from './FhirDateTime.js';
import { FhirDecimal } from './FhirDecimal.js';
import { FhirId } from './FhirId.js';
import { FhirInstant } from './FhirInstant.js';
import { FhirInteger } from './FhirInteger.js';
import { FhirMarkdown } from './FhirMarkdown.js';
import { FhirOid } from './FhirOid.js';
import { FhirPositiveInt } from './FhirPositiveInt.js';
import { FhirTime } from './FhirTime.js';
import { FhirUnsignedInt } from './FhirUnsignedInt.js';
import { FhirUri } from './FhirUri.js';
import { FhirUrl } from './FhirUrl.js';
import { FhirUuid } from './FhirUuid.js';
import { Address } from './Address.js';
import { Age } from './Age.js';
import { Annotation } from './Annotation.js';
import { Attachment } from './Attachment.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Coding } from './Coding.js';
import { ContactPoint } from './ContactPoint.js';
import { Count } from './Count.js';
import { Distance } from './Distance.js';
import { Duration } from './Duration.js';
import { HumanName } from './HumanName.js';
import { Identifier } from './Identifier.js';
import { Money } from './Money.js';
import { Period } from './Period.js';
import { Quantity } from './Quantity.js';
import { Range } from './Range.js';
import { Ratio } from './Ratio.js';
import { Reference } from './Reference.js';
import { SampledData } from './SampledData.js';
import { Signature } from './Signature.js';
import { Timing } from './Timing.js';
import { ContactDetail } from './ContactDetail.js';
import { Contributor } from './Contributor.js';
import { DataRequirement } from './DataRequirement.js';
import { Expression } from './Expression.js';
import { ParameterDefinition } from './ParameterDefinition.js';
import { RelatedArtifact } from './RelatedArtifact.js';
import { TriggerDefinition } from './TriggerDefinition.js';
import { UsageContext } from './UsageContext.js';
import { Dosage } from './Dosage.js';
import { Meta } from './Meta.js';

// <auto-generated/>
/**
 * Optional Extension Element - found in all resources.
 */
var Extension = /** @class */ (function (_super) {
    __extends(Extension, _super);
    /**
     * Default constructor for Extension - initializes any required elements to null if a value is not provided.
     */
    function Extension(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['url']) {
            _this.url = new FhirString({ value: source.url });
        }
        else {
            _this.url = null;
        }
        if (source['value']) {
            _this.value = source.value;
        }
        else if (source['valueBase64Binary']) {
            _this.value = new FhirBase64Binary({ value: source.valueBase64Binary });
        }
        else if (source['valueBoolean']) {
            _this.value = new FhirBoolean({ value: source.valueBoolean });
        }
        else if (source['valueCanonical']) {
            _this.value = new FhirCanonical({ value: source.valueCanonical });
        }
        else if (source['valueCode']) {
            _this.value = new FhirCode({ value: source.valueCode });
        }
        else if (source['valueDate']) {
            _this.value = new FhirDate({ value: source.valueDate });
        }
        else if (source['valueDateTime']) {
            _this.value = new FhirDateTime({ value: source.valueDateTime });
        }
        else if (source['valueDecimal']) {
            _this.value = new FhirDecimal({ value: source.valueDecimal });
        }
        else if (source['valueId']) {
            _this.value = new FhirId({ value: source.valueId });
        }
        else if (source['valueInstant']) {
            _this.value = new FhirInstant({ value: source.valueInstant });
        }
        else if (source['valueInteger']) {
            _this.value = new FhirInteger({ value: source.valueInteger });
        }
        else if (source['valueMarkdown']) {
            _this.value = new FhirMarkdown({ value: source.valueMarkdown });
        }
        else if (source['valueOid']) {
            _this.value = new FhirOid({ value: source.valueOid });
        }
        else if (source['valuePositiveInt']) {
            _this.value = new FhirPositiveInt({ value: source.valuePositiveInt });
        }
        else if (source['valueString']) {
            _this.value = new FhirString({ value: source.valueString });
        }
        else if (source['valueTime']) {
            _this.value = new FhirTime({ value: source.valueTime });
        }
        else if (source['valueUnsignedInt']) {
            _this.value = new FhirUnsignedInt({ value: source.valueUnsignedInt });
        }
        else if (source['valueUri']) {
            _this.value = new FhirUri({ value: source.valueUri });
        }
        else if (source['valueUrl']) {
            _this.value = new FhirUrl({ value: source.valueUrl });
        }
        else if (source['valueUuid']) {
            _this.value = new FhirUuid({ value: source.valueUuid });
        }
        else if (source['valueAddress']) {
            _this.value = new Address(source.valueAddress);
        }
        else if (source['valueAge']) {
            _this.value = new Age(source.valueAge);
        }
        else if (source['valueAnnotation']) {
            _this.value = new Annotation(source.valueAnnotation);
        }
        else if (source['valueAttachment']) {
            _this.value = new Attachment(source.valueAttachment);
        }
        else if (source['valueCodeableConcept']) {
            _this.value = new CodeableConcept(source.valueCodeableConcept);
        }
        else if (source['valueCoding']) {
            _this.value = new Coding(source.valueCoding);
        }
        else if (source['valueContactPoint']) {
            _this.value = new ContactPoint(source.valueContactPoint);
        }
        else if (source['valueCount']) {
            _this.value = new Count(source.valueCount);
        }
        else if (source['valueDistance']) {
            _this.value = new Distance(source.valueDistance);
        }
        else if (source['valueDuration']) {
            _this.value = new Duration(source.valueDuration);
        }
        else if (source['valueHumanName']) {
            _this.value = new HumanName(source.valueHumanName);
        }
        else if (source['valueIdentifier']) {
            _this.value = new Identifier(source.valueIdentifier);
        }
        else if (source['valueMoney']) {
            _this.value = new Money(source.valueMoney);
        }
        else if (source['valuePeriod']) {
            _this.value = new Period(source.valuePeriod);
        }
        else if (source['valueQuantity']) {
            _this.value = new Quantity(source.valueQuantity);
        }
        else if (source['valueRange']) {
            _this.value = new Range(source.valueRange);
        }
        else if (source['valueRatio']) {
            _this.value = new Ratio(source.valueRatio);
        }
        else if (source['valueReference']) {
            _this.value = new Reference(source.valueReference);
        }
        else if (source['valueSampledData']) {
            _this.value = new SampledData(source.valueSampledData);
        }
        else if (source['valueSignature']) {
            _this.value = new Signature(source.valueSignature);
        }
        else if (source['valueTiming']) {
            _this.value = new Timing(source.valueTiming);
        }
        else if (source['valueContactDetail']) {
            _this.value = new ContactDetail(source.valueContactDetail);
        }
        else if (source['valueContributor']) {
            _this.value = new Contributor(source.valueContributor);
        }
        else if (source['valueDataRequirement']) {
            _this.value = new DataRequirement(source.valueDataRequirement);
        }
        else if (source['valueExpression']) {
            _this.value = new Expression(source.valueExpression);
        }
        else if (source['valueParameterDefinition']) {
            _this.value = new ParameterDefinition(source.valueParameterDefinition);
        }
        else if (source['valueRelatedArtifact']) {
            _this.value = new RelatedArtifact(source.valueRelatedArtifact);
        }
        else if (source['valueTriggerDefinition']) {
            _this.value = new TriggerDefinition(source.valueTriggerDefinition);
        }
        else if (source['valueUsageContext']) {
            _this.value = new UsageContext(source.valueUsageContext);
        }
        else if (source['valueDosage']) {
            _this.value = new Dosage(source.valueDosage);
        }
        else if (source['valueMeta']) {
            _this.value = new Meta(source.valueMeta);
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Extension.prototype.doModelValidation = function () {
        var _a;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['url']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property url:fhir.FhirString fhir: Extension.url:string', }));
        }
        if (this["url"]) {
            (_a = outcome.issue).push.apply(_a, this.url.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Create an extension object with a specified URL and FhirBase value
     * @param url
     * @param value
     * @returns
     */
    Extension.fromValue = function (url, value) {
        var ext = new Extension({ url: url });
        if (!value) {
            return ext;
        }
        var vName = 'value' + (value._fts_dataType) ? value._fts_dataType : value.constructor.name;
        ext[vName] = value;
        return ext;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    Extension._fts_dataType = 'Extension';
    /**
     * Internal flag to properly serialize choice-type element Extension.value[x]
     */
    Extension._fts_valueIsChoice = true;
    return Extension;
}(FhirElement));

export { Extension };
//# sourceMappingURL=Extension.js.map
