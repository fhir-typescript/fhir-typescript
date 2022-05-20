import * as fhir from '../fhir.js';
import { OperationParameterUseCodingType } from '../fhirValueSets/OperationParameterUseCodings.js';
import { OperationParameterUseCodeType } from '../fhirValueSets/OperationParameterUseCodes.js';
import { AllTypesCodingType } from '../fhirValueSets/AllTypesCodings.js';
/**
 * Valid arguments for the ParameterDefinition type.
 */
export interface ParameterDefinitionArgs extends fhir.FhirElementArgs {
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: fhir.FhirCode | string | undefined;
    /**
     * Whether the parameter is input or output for the module.
     */
    use: OperationParameterUseCodeType | null;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: fhir.FhirInteger | number | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: fhir.FhirString | string | undefined;
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * The type of the parameter.
     */
    type: fhir.FhirCode | string | undefined;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: fhir.FhirCanonical | string | undefined;
}
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export declare class ParameterDefinition extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: fhir.FhirCode | undefined;
    /**
     * Whether the parameter is input or output for the module.
     */
    use: OperationParameterUseCodeType | null;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: fhir.FhirInteger | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: fhir.FhirString | undefined;
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * The type of the parameter.
     */
    type: fhir.FhirCode | null;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: fhir.FhirCanonical | undefined;
    /**
     * Default constructor for ParameterDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ParameterDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for use (ParameterDefinition.use)
     */
    static useRequiredCoding(): OperationParameterUseCodingType;
    /**
     * Required-bound Value Set for type (ParameterDefinition.type)
     */
    static typeRequiredCoding(): AllTypesCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=ParameterDefinition.d.ts.map