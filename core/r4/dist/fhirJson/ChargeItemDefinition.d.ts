import * as fhir from '../fhirJson.js';
/**
 * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
 */
export interface ChargeItemDefinitionApplicability extends fhir.BackboneElement {
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.applicability.description
     */
    _description?: fhir.FhirElement;
    /**
     * The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.applicability.language
     */
    _language?: fhir.FhirElement;
    /**
     * Please note that FHIRPath Expressions can only be evaluated in the scope of the current ChargeItem resource to which this definition is being applied.
     * FHIRPath expressions can traverse into other resources linked from the ChargeItem resource, however, testing rules such as that a billing code may be billed only once per encounter need a wider scope. In such scenarios, CQL may be the appropriate choice.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.applicability.expression
     */
    _expression?: fhir.FhirElement;
}
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
 */
export interface ChargeItemDefinitionPropertyGroupPriceComponent extends fhir.BackboneElement {
    /**
     * This code identifies the type of the component.
     */
    type: 'base' | 'deduction' | 'discount' | 'informational' | 'surcharge' | 'tax' | null;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.propertyGroup.priceComponent.type
     */
    _type?: fhir.FhirElement;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The factor that has been applied on the base price for calculating this component.
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.propertyGroup.priceComponent.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * The amount calculated for this component.
     */
    amount?: fhir.Money | undefined;
}
/**
 * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
 */
export interface ChargeItemDefinitionPropertyGroup extends fhir.BackboneElement {
    /**
     * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
     */
    applicability?: fhir.ChargeItemDefinitionApplicability[] | undefined;
    /**
     * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
     */
    priceComponent?: fhir.ChargeItemDefinitionPropertyGroupPriceComponent[] | undefined;
}
/**
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 */
export interface ChargeItemDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ChargeItemDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this charge item definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different charge item definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the charge item definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.title
     */
    _title?: fhir.FhirElement;
    /**
     * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
     */
    derivedFromUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.derivedFromUri
     */
    _derivedFromUri?: (fhir.FhirElement | null)[];
    /**
     * A larger definition of which this particular definition is a component or step.
     */
    partOf?: string[] | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.partOf
     */
    _partOf?: (fhir.FhirElement | null)[];
    /**
     * As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
     */
    replaces?: string[] | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.replaces
     */
    _replaces?: (fhir.FhirElement | null)[];
    /**
     * Allows filtering of charge item definitions that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of charge item definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the charge item definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the charge item definition is the organization or individual primarily responsible for the maintenance and upkeep of the charge item definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the charge item definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the charge item definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the charge item definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the charge item definition is presumed to be the predominant language in the place the charge item definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the charge item definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItemDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a charge item definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * The defined billing details in this resource pertain to the given billing code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * In case of highly customized, individually produced or fitted devices/substances, the pricing information may be different for each instance of the product. This reference links pricing details to specific product instances.
     */
    instance?: fhir.Reference[] | undefined;
    /**
     * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
     */
    applicability?: fhir.ChargeItemDefinitionApplicability[] | undefined;
    /**
     * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
     */
    propertyGroup?: fhir.ChargeItemDefinitionPropertyGroup[] | undefined;
}
//# sourceMappingURL=ChargeItemDefinition.d.ts.map