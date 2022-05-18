/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IdentifierUseCodings } from '../fhirValueSets/IdentifierUseCodings.js';
import { IdentifierTypeCodings } from '../fhirValueSets/IdentifierTypeCodings.js';
import { FhirElement } from './FhirElement.js';
import { CodeableConcept } from './CodeableConcept.js';
import { FhirUri } from './FhirUri.js';
import { FhirString } from './FhirString.js';
import { Period } from './Period.js';
import { Reference } from './Reference.js';

// <auto-generated/>
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
var Identifier = /** @class */ (function (_super) {
    __extends(Identifier, _super);
    /**
     * Default constructor for Identifier - initializes any required elements to null if a value is not provided.
     */
    function Identifier(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['use']) {
            _this.use = source.use;
        }
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        if (source['system']) {
            _this.system = new FhirUri({ value: source.system });
        }
        if (source['value']) {
            _this.value = new FhirString({ value: source.value });
        }
        if (source['period']) {
            _this.period = new Period(source.period);
        }
        if (source['assigner']) {
            _this.assigner = new Reference(source.assigner);
        }
        return _this;
    }
    /**
     * Required-bound Value Set for use (Identifier.use)
     */
    Identifier.useRequiredCoding = function () {
        return IdentifierUseCodings;
    };
    /**
     * Extensible-bound Value Set for type (Identifier.type)
     */
    Identifier.typeExtensibleCoding = function () {
        return IdentifierTypeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Identifier.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["type"]) {
            (_a = outcome.issue).push.apply(_a, this.type.doModelValidation().issue);
        }
        if (this["system"]) {
            (_b = outcome.issue).push.apply(_b, this.system.doModelValidation().issue);
        }
        if (this["value"]) {
            (_c = outcome.issue).push.apply(_c, this.value.doModelValidation().issue);
        }
        if (this["period"]) {
            (_d = outcome.issue).push.apply(_d, this.period.doModelValidation().issue);
        }
        if (this["assigner"]) {
            (_e = outcome.issue).push.apply(_e, this.assigner.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    Identifier._fts_dataType = 'Identifier';
    return Identifier;
}(FhirElement));

export { Identifier };
//# sourceMappingURL=Identifier.js.map
