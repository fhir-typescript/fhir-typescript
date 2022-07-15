/**
 * The type of an element - one of the FHIR data types.
 */
export declare const DataTypesCodes: {
    /**
     * Address: An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
     */
    readonly Address: "Address";
    /**
     * Age: A duration of time during which an organism (or a process) has existed.
     */
    readonly Age: "Age";
    /**
     * Annotation: A  text note which also  contains information about who made the statement and when.
     */
    readonly Annotation: "Annotation";
    /**
     * Attachment: For referring to data content defined in other formats.
     */
    readonly Attachment: "Attachment";
    /**
     * BackboneElement: Base definition for all elements that are defined inside a resource - but not those in a data type.
     */
    readonly BackboneElement: "BackboneElement";
    /**
     * base64Binary: A stream of bytes
     */
    readonly Base64Binary: "base64Binary";
    /**
     * boolean: Value of "true" or "false"
     */
    readonly VALBoolean: "boolean";
    /**
     * code: A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
     */
    readonly Code: "code";
    /**
     * CodeableConcept: A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
     */
    readonly CodeableConcept: "CodeableConcept";
    /**
     * Coding: A reference to a code defined by a terminology system.
     */
    readonly Coding: "Coding";
    /**
     * ContactDetail: Specifies contact information for a person or organization.
     */
    readonly ContactDetail: "ContactDetail";
    /**
     * ContactPoint: Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
     */
    readonly ContactPoint: "ContactPoint";
    /**
     * Contributor: A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
     */
    readonly Contributor: "Contributor";
    /**
     * Count: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
     */
    readonly Count: "Count";
    /**
     * DataRequirement: Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
     */
    readonly DataRequirement: "DataRequirement";
    /**
     * date: A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
     */
    readonly Date: "date";
    /**
     * dateTime: A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.
     */
    readonly DateTime: "dateTime";
    /**
     * decimal: A rational number with implicit precision
     */
    readonly Decimal: "decimal";
    /**
     * Distance: A length - a value with a unit that is a physical distance.
     */
    readonly Distance: "Distance";
    /**
     * Dosage: Indicates how the medication is/was taken or should be taken by the patient.
     */
    readonly Dosage: "Dosage";
    /**
     * Duration: A length of time.
     */
    readonly Duration: "Duration";
    /**
     * Element: Base definition for all elements in a resource.
     */
    readonly VALElement: "Element";
    /**
     * ElementDefinition: Captures constraints on each element within the resource, profile, or extension.
     */
    readonly ElementDefinition: "ElementDefinition";
    /**
     * Extension: Optional Extension Element - found in all resources.
     */
    readonly Extension: "Extension";
    /**
     * HumanName: A human's name with the ability to identify parts and usage.
     */
    readonly HumanName: "HumanName";
    /**
     * id: Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
     */
    readonly Id: "id";
    /**
     * Identifier: A technical identifier - identifies some entity uniquely and unambiguously.
     */
    readonly Identifier: "Identifier";
    /**
     * instant: An instant in time - known at least to the second
     */
    readonly Instant: "instant";
    /**
     * integer: A whole number
     */
    readonly Integer: "integer";
    /**
     * markdown: A string that may contain markdown syntax for optional processing by a mark down presentation engine
     */
    readonly Markdown: "markdown";
    /**
     * Meta: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
     */
    readonly Meta: "Meta";
    /**
     * Money: An amount of economic utility in some recognized currency.
     */
    readonly Money: "Money";
    /**
     * Narrative: A human-readable formatted text, including images.
     */
    readonly Narrative: "Narrative";
    /**
     * oid: An OID represented as a URI
     */
    readonly Oid: "oid";
    /**
     * ParameterDefinition: The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
     */
    readonly ParameterDefinition: "ParameterDefinition";
    /**
     * Period: A time period defined by a start and end date and optionally time.
     */
    readonly Period: "Period";
    /**
     * positiveInt: An integer with a value that is positive (e.g. &gt;0)
     */
    readonly PositiveInt: "positiveInt";
    /**
     * Quantity: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
     */
    readonly Quantity: "Quantity";
    /**
     * Range: A set of ordered Quantities defined by a low and high limit.
     */
    readonly Range: "Range";
    /**
     * Ratio: A relationship of two Quantity values - expressed as a numerator and a denominator.
     */
    readonly Ratio: "Ratio";
    /**
     * Reference: A reference from one resource to another.
     */
    readonly Reference: "Reference";
    /**
     * RelatedArtifact: Related artifacts such as additional documentation, justification, or bibliographic references.
     */
    readonly RelatedArtifact: "RelatedArtifact";
    /**
     * SampledData: A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
     */
    readonly SampledData: "SampledData";
    /**
     * Signature: A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different signature approaches have different utilities.
     */
    readonly Signature: "Signature";
    /**
     * Code: SimpleQuantity
     */
    readonly SimpleQuantity: "SimpleQuantity";
    /**
     * string: A sequence of Unicode characters
     */
    readonly VALString: "string";
    /**
     * time: A time during the day, with no date specified
     */
    readonly Time: "time";
    /**
     * Timing: Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
     */
    readonly Timing: "Timing";
    /**
     * TriggerDefinition: A description of a triggering event.
     */
    readonly TriggerDefinition: "TriggerDefinition";
    /**
     * unsignedInt: An integer with a value that is not negative (e.g. &gt;= 0)
     */
    readonly UnsignedInt: "unsignedInt";
    /**
     * uri: String of characters used to identify a name or a resource
     */
    readonly Uri: "uri";
    /**
     * UsageContext: Specifies clinical/business/etc metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
     */
    readonly UsageContext: "UsageContext";
    /**
     * uuid: A UUID, represented as a URI
     */
    readonly Uuid: "uuid";
    /**
     * xhtml: XHTML format, as defined by W3C, but restricted usage (mainly, no active content)
     */
    readonly XHTML: "xhtml";
};
/**
 * The type of an element - one of the FHIR data types.
 */
export declare type DataTypesCodeType = typeof DataTypesCodes[keyof typeof DataTypesCodes];
//# sourceMappingURL=DataTypesCodes.d.ts.map