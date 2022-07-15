import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of an element - one of the FHIR data types.
 */
export declare type DataTypesCodingType = {
    /**
     * Address: An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
     */
    Address: CodingArgs;
    /**
     * Age: A duration of time during which an organism (or a process) has existed.
     */
    Age: CodingArgs;
    /**
     * Annotation: A  text note which also  contains information about who made the statement and when.
     */
    Annotation: CodingArgs;
    /**
     * Attachment: For referring to data content defined in other formats.
     */
    Attachment: CodingArgs;
    /**
     * BackboneElement: Base definition for all elements that are defined inside a resource - but not those in a data type.
     */
    BackboneElement: CodingArgs;
    /**
     * base64Binary: A stream of bytes
     */
    Base64Binary: CodingArgs;
    /**
     * boolean: Value of "true" or "false"
     */
    VALBoolean: CodingArgs;
    /**
     * code: A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
     */
    Code: CodingArgs;
    /**
     * CodeableConcept: A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
     */
    CodeableConcept: CodingArgs;
    /**
     * Coding: A reference to a code defined by a terminology system.
     */
    Coding: CodingArgs;
    /**
     * ContactDetail: Specifies contact information for a person or organization.
     */
    ContactDetail: CodingArgs;
    /**
     * ContactPoint: Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
     */
    ContactPoint: CodingArgs;
    /**
     * Contributor: A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
     */
    Contributor: CodingArgs;
    /**
     * Count: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
     */
    Count: CodingArgs;
    /**
     * DataRequirement: Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
     */
    DataRequirement: CodingArgs;
    /**
     * date: A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
     */
    Date: CodingArgs;
    /**
     * dateTime: A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.
     */
    DateTime: CodingArgs;
    /**
     * decimal: A rational number with implicit precision
     */
    Decimal: CodingArgs;
    /**
     * Distance: A length - a value with a unit that is a physical distance.
     */
    Distance: CodingArgs;
    /**
     * Dosage: Indicates how the medication is/was taken or should be taken by the patient.
     */
    Dosage: CodingArgs;
    /**
     * Duration: A length of time.
     */
    Duration: CodingArgs;
    /**
     * Element: Base definition for all elements in a resource.
     */
    VALElement: CodingArgs;
    /**
     * ElementDefinition: Captures constraints on each element within the resource, profile, or extension.
     */
    ElementDefinition: CodingArgs;
    /**
     * Extension: Optional Extension Element - found in all resources.
     */
    Extension: CodingArgs;
    /**
     * HumanName: A human's name with the ability to identify parts and usage.
     */
    HumanName: CodingArgs;
    /**
     * id: Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
     */
    Id: CodingArgs;
    /**
     * Identifier: A technical identifier - identifies some entity uniquely and unambiguously.
     */
    Identifier: CodingArgs;
    /**
     * instant: An instant in time - known at least to the second
     */
    Instant: CodingArgs;
    /**
     * integer: A whole number
     */
    Integer: CodingArgs;
    /**
     * markdown: A string that may contain markdown syntax for optional processing by a mark down presentation engine
     */
    Markdown: CodingArgs;
    /**
     * Meta: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
     */
    Meta: CodingArgs;
    /**
     * Money: An amount of economic utility in some recognized currency.
     */
    Money: CodingArgs;
    /**
     * Narrative: A human-readable formatted text, including images.
     */
    Narrative: CodingArgs;
    /**
     * oid: An OID represented as a URI
     */
    Oid: CodingArgs;
    /**
     * ParameterDefinition: The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
     */
    ParameterDefinition: CodingArgs;
    /**
     * Period: A time period defined by a start and end date and optionally time.
     */
    Period: CodingArgs;
    /**
     * positiveInt: An integer with a value that is positive (e.g. &gt;0)
     */
    PositiveInt: CodingArgs;
    /**
     * Quantity: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
     */
    Quantity: CodingArgs;
    /**
     * Range: A set of ordered Quantities defined by a low and high limit.
     */
    Range: CodingArgs;
    /**
     * Ratio: A relationship of two Quantity values - expressed as a numerator and a denominator.
     */
    Ratio: CodingArgs;
    /**
     * Reference: A reference from one resource to another.
     */
    Reference: CodingArgs;
    /**
     * RelatedArtifact: Related artifacts such as additional documentation, justification, or bibliographic references.
     */
    RelatedArtifact: CodingArgs;
    /**
     * SampledData: A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
     */
    SampledData: CodingArgs;
    /**
     * Signature: A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different signature approaches have different utilities.
     */
    Signature: CodingArgs;
    /**
     * Code: SimpleQuantity
     */
    SimpleQuantity: CodingArgs;
    /**
     * string: A sequence of Unicode characters
     */
    VALString: CodingArgs;
    /**
     * time: A time during the day, with no date specified
     */
    Time: CodingArgs;
    /**
     * Timing: Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
     */
    Timing: CodingArgs;
    /**
     * TriggerDefinition: A description of a triggering event.
     */
    TriggerDefinition: CodingArgs;
    /**
     * unsignedInt: An integer with a value that is not negative (e.g. &gt;= 0)
     */
    UnsignedInt: CodingArgs;
    /**
     * uri: String of characters used to identify a name or a resource
     */
    Uri: CodingArgs;
    /**
     * UsageContext: Specifies clinical/business/etc metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
     */
    UsageContext: CodingArgs;
    /**
     * uuid: A UUID, represented as a URI
     */
    Uuid: CodingArgs;
    /**
     * xhtml: XHTML format, as defined by W3C, but restricted usage (mainly, no active content)
     */
    XHTML: CodingArgs;
};
/**
 * The type of an element - one of the FHIR data types.
 */
export declare const DataTypesCodings: DataTypesCodingType;
//# sourceMappingURL=DataTypesCodings.d.ts.map