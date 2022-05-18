import * as fhir from '../fhir.js';
import { ResourceTypesCodingType } from '../fhirValueSets/ResourceTypesCodings.js';
import { PublicationStatusCodingType } from '../fhirValueSets/PublicationStatusCodings.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { CompartmentTypeCodingType } from '../fhirValueSets/CompartmentTypeCodings.js';
import { CompartmentTypeCodeType } from '../fhirValueSets/CompartmentTypeCodes.js';
/**
 * Valid arguments for the CompartmentDefinitionResource type.
 */
export interface CompartmentDefinitionResourceArgs extends fhir.BackboneElementArgs {
    /**
     * The name of a resource supported by the server.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * If no search parameters are listed, then the resource is not linked to the compartment.
     */
    param?: fhir.FhirString[] | string[] | undefined;
    /**
     * Additional documentation about the resource and compartment.
     */
    documentation?: fhir.FhirString | string | undefined;
}
/**
 * Information about how a resource is related to the compartment.
 */
export declare class CompartmentDefinitionResource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of a resource supported by the server.
     */
    code: fhir.FhirCode | null;
    /**
     * If no search parameters are listed, then the resource is not linked to the compartment.
     */
    param?: fhir.FhirString[];
    /**
     * Additional documentation about the resource and compartment.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for CompartmentDefinitionResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompartmentDefinitionResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for code (CompartmentDefinition.resource.code)
     */
    static codeRequiredCoding(): ResourceTypesCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the CompartmentDefinition type.
 */
export interface CompartmentDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CompartmentDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * There may be different compartment definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the compartment definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.This is often the same as the code for the parameter, but does not need to be.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the compartment definition is presumed to be the predominant language in the place the compartment definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * This element does not describe the usage of the compartment definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Only the specification can define the compartments that can exist. Servers can choose to support them.
     */
    code: CompartmentTypeCodeType | null;
    /**
     * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
     */
    search: fhir.FhirBoolean | boolean | undefined;
    /**
     * Information about how a resource is related to the compartment.
     */
    resource?: fhir.CompartmentDefinitionResourceArgs[] | undefined;
}
/**
 * A compartment definition that defines how resources are accessed on a server.
 */
export declare class CompartmentDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CompartmentDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | null;
    /**
     * There may be different compartment definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the compartment definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.This is often the same as the code for the parameter, but does not need to be.
     */
    name: fhir.FhirString | null;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the compartment definition is presumed to be the predominant language in the place the compartment definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[];
    /**
     * This element does not describe the usage of the compartment definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * Only the specification can define the compartments that can exist. Servers can choose to support them.
     */
    code: CompartmentTypeCodeType | null;
    /**
     * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
     */
    search: fhir.FhirBoolean | null;
    /**
     * Information about how a resource is related to the compartment.
     */
    resource?: fhir.CompartmentDefinitionResource[];
    /**
     * Default constructor for CompartmentDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompartmentDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (CompartmentDefinition.status)
     */
    static statusRequiredCoding(): PublicationStatusCodingType;
    /**
     * Required-bound Value Set for code (CompartmentDefinition.code)
     */
    static codeRequiredCoding(): CompartmentTypeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=CompartmentDefinition.d.ts.map