import { fhir } from '../../src/index.js';

const src = {
  "resourceType" : "Questionnaire",
  "id" : "qs1",
  "identifier" : [{
    "system" : "urn:ietf:rfc:3986"
  }],
  "version" : "4.0.0",
  "status" : "active",
  "date" : "2019-02-21T15:59:19+11:00",
  "publisher" : "Health Level Seven International (FHIR Infrastructure)",
  "item" : [{
    "linkId" : "Bundle",
    "text" : "Contains a collection of resources",
    "type" : "group",
    "required" : false,
    "repeats" : true,
    "item" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
        "valueCodeableConcept" : {
          "coding" : [{
            "system" : "http://hl7.org/fhir/questionnaire-item-control",
            "code" : "flyover",
            "display" : "Fly-over"
          }]
        }
      }],
      "text" : "A container for a collection of resources.",
      "type" : "display"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
        "valueInteger" : 1
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
        "valueString" : "string"
      }],
      "linkId" : "Bundle.id",
      "type" : "group",
      "required" : false,
      "repeats" : true,
      "item" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept" : {
            "coding" : [{
              "system" : "http://hl7.org/fhir/questionnaire-item-control",
              "code" : "flyover",
              "display" : "Fly-over"
            }]
          }
        }],
        "text" : "The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. The only time that a resource does not have an id is when it is being submitted to the server using a create operation.",
        "type" : "display"
      },
      {
        "linkId" : "Bundle.id.value",
        "text" : "Logical id of this artifact",
        "type" : "string",
        "required" : false,
        "repeats" : false
      }]
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
        "valueInteger" : 1
      }],
      "linkId" : "Bundle.meta",
      "text" : "Metadata about the resource",
      "type" : "group",
      "required" : false,
      "repeats" : true,
      "item" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept" : {
            "coding" : [{
              "system" : "http://hl7.org/fhir/questionnaire-item-control",
              "code" : "flyover",
              "display" : "Fly-over"
            }]
          }
        }],
        "text" : "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
        "type" : "display"
      }]
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
        "valueInteger" : 1
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
        "valueString" : "uri"
      }],
      "linkId" : "Bundle.implicitRules",
      "type" : "group",
      "required" : false,
      "repeats" : true,
      "item" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept" : {
            "coding" : [{
              "system" : "http://hl7.org/fhir/questionnaire-item-control",
              "code" : "flyover",
              "display" : "Fly-over"
            }]
          }
        }],
        "text" : "A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.",
        "type" : "display"
      },
      {
        "linkId" : "Bundle.implicitRules.value",
        "text" : "A set of rules under which this content was created",
        "type" : "string",
        "required" : false,
        "repeats" : false
      }]
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
        "valueInteger" : 1
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
        "valueString" : "code"
      }],
      "linkId" : "Bundle.language",
      "type" : "group",
      "required" : false,
      "repeats" : true,
      "item" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept" : {
            "coding" : [{
              "system" : "http://hl7.org/fhir/questionnaire-item-control",
              "code" : "flyover",
              "display" : "Fly-over"
            }]
          }
        }],
        "text" : "The base language in which the resource is written. Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).",
        "type" : "display"
      },
      {
        "linkId" : "Bundle.language.value",
        "text" : "language",
        "type" : "choice",
        "required" : false,
        "repeats" : false
      }]
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
        "valueInteger" : 1
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
        "valueString" : "Identifier"
      }],
      "linkId" : "Bundle.identifier",
      "text" : "Persistent identifier for the bundle",
      "type" : "group",
      "required" : false,
      "repeats" : true,
      "item" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept" : {
            "coding" : [{
              "system" : "http://hl7.org/fhir/questionnaire-item-control",
              "code" : "flyover",
              "display" : "Fly-over"
            }]
          }
        }],
        "text" : "A persistent identifier for the bundle that won't change as a bundle is copied from server to server. Persistent identity generally only matters for batches of type Document, Message, and Collection. It would not normally be populated for search and history results and servers ignore Bundle.identifier when processing batches and transactions. For Documents  the .identifier SHALL be populated such that the .identifier is globally unique.",
        "type" : "display"
      },
      {
        "linkId" : "Bundle.identifier.label",
        "text" : "label:",
        "type" : "string",
        "required" : false,
        "repeats" : false
      },
      {
        "linkId" : "Bundle.identifier.system",
        "text" : "system:",
        "type" : "string",
        "required" : false,
        "repeats" : false
      },
      {
        "linkId" : "Bundle.identifier.value",
        "text" : "value:",
        "type" : "string",
        "required" : false,
        "repeats" : false
      }]
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs",
        "valueInteger" : 1
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
        "valueInteger" : 1
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
        "valueString" : "code"
      }],
      "linkId" : "Bundle.type",
      "type" : "group",
      "required" : true,
      "repeats" : true,
      "item" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept" : {
            "coding" : [{
              "system" : "http://hl7.org/fhir/questionnaire-item-control",
              "code" : "flyover",
              "display" : "Fly-over"
            }]
          }
        }],
        "text" : "Indicates the purpose of this bundle - how it is intended to be used. It's possible to use a bundle for other purposes (e.g. a document can be accepted as a transaction). This is primarily defined so that there can be specific rules for some of the bundle types.",
        "type" : "display"
      },
      {
        "linkId" : "Bundle.type.value",
        "text" : "type",
        "type" : "choice",
        "required" : false,
        "repeats" : false
      }]
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
        "valueInteger" : 1
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
        "valueString" : "instant"
      }],
      "linkId" : "Bundle.timestamp",
      "type" : "group",
      "required" : false,
      "repeats" : true,
      "item" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept" : {
            "coding" : [{
              "system" : "http://hl7.org/fhir/questionnaire-item-control",
              "code" : "flyover",
              "display" : "Fly-over"
            }]
          }
        }],
        "text" : "The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle. For many bundles, the timestamp is equal to .meta.lastUpdated, because they are not stored (e.g. search results). When a bundle is placed in a persistent store, .meta.lastUpdated will be usually be changed by the server. When the bundle is a message, a middleware agent altering the message (even if not stored) SHOULD update .meta.lastUpdated. .timestamp is used to track the original time of the Bundle, and SHOULD be populated.  \n\nUsage:\n\n* document : the date the document was created. Note: the composition may predate the document, or be associated with multiple documents. The date of the composition - the authoring time - may be earlier than the document assembly time\n* message : the date that the content of the message was assembled. This date is not changed by middleware engines unless they add additional data that changes the meaning of the time of the message\n* history : the date that the history was assembled. This time would be used as the _since time to ask for subsequent updates\n* searchset : the time that the search set was assembled. Note that different pages MAY have different timestamps but need not. Having different timestamps does not imply that subsequent pages will represent or include changes made since the initial query\n* transaction | transaction-response | batch | batch-response | collection : no particular assigned meaning\n\nThe timestamp value should be greater than the lastUpdated and other timestamps in the resources in the bundle, and it should be equal or earlier than the .meta.lastUpdated on the Bundle itself.",
        "type" : "display"
      },
      {
        "linkId" : "Bundle.timestamp.value",
        "text" : "When the bundle was assembled",
        "type" : "dateTime",
        "required" : false,
        "repeats" : false
      }]
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
        "valueInteger" : 1
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
        "valueString" : "integer"
      }],
      "linkId" : "Bundle.total",
      "type" : "group",
      "required" : false,
      "repeats" : true,
      "item" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept" : {
            "coding" : [{
              "system" : "http://hl7.org/fhir/questionnaire-item-control",
              "code" : "flyover",
              "display" : "Fly-over"
            }]
          }
        }],
        "text" : "If a set of search matches, this is the total number of entries of type 'match' across all pages in the search.  It does not include search.mode = 'include' or 'outcome' entries and it does not provide a count of the number of entries in the Bundle. Only used if the bundle is a search result set. The total does not include resources such as OperationOutcome and included resources, only the total number of matching resources.",
        "type" : "display"
      },
      {
        "linkId" : "Bundle.total.value",
        "text" : "If search, the total number of matches",
        "type" : "integer",
        "required" : false,
        "repeats" : false
      }]
    },
    {
      "linkId" : "Bundle.link",
      "text" : "Links related to this Bundle",
      "type" : "group",
      "required" : false,
      "repeats" : true,
      "item" : [{
        "text" : "Both Bundle.link and Bundle.entry.link are defined to support providing additional context when Bundles are used (e.g. [HATEOAS](http://en.wikipedia.org/wiki/HATEOAS)). \n\nBundle.entry.link corresponds to links found in the HTTP header if the resource in the entry was [read](http.html#read) directly.\n\nThis specification defines some specific uses of Bundle.link for [searching](search.html#conformance) and [paging](http.html#paging), but no specific uses for Bundle.entry.link, and no defined function in a transaction - the meaning is implementation specific.",
        "type" : "display"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept" : {
            "coding" : [{
              "system" : "http://hl7.org/fhir/questionnaire-item-control",
              "code" : "flyover",
              "display" : "Fly-over"
            }]
          }
        }],
        "text" : "A series of links that provide context to this bundle.",
        "type" : "display"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
          "valueInteger" : 1
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
          "valueString" : "string"
        }],
        "linkId" : "Bundle.link.id",
        "type" : "group",
        "required" : false,
        "repeats" : true,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "type" : "display"
        },
        {
          "linkId" : "Bundle.link.id.value",
          "text" : "Unique id for inter-element referencing",
          "type" : "string",
          "required" : false,
          "repeats" : false
        }]
      },
      {
        "linkId" : "Bundle.link.extension",
        "text" : "Additional content defined by implementations",
        "type" : "group",
        "required" : false,
        "repeats" : true,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
          "type" : "display"
        }]
      },
      {
        "linkId" : "Bundle.link.modifierExtension",
        "text" : "Extensions that cannot be ignored even if unrecognized",
        "type" : "group",
        "required" : false,
        "repeats" : true,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
          "type" : "display"
        }]
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs",
          "valueInteger" : 1
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
          "valueInteger" : 1
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
          "valueString" : "string"
        }],
        "linkId" : "Bundle.link.relation",
        "type" : "group",
        "required" : true,
        "repeats" : true,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).",
          "type" : "display"
        },
        {
          "linkId" : "Bundle.link.relation.value",
          "text" : "See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1",
          "type" : "string",
          "required" : false,
          "repeats" : false
        }]
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs",
          "valueInteger" : 1
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
          "valueInteger" : 1
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
          "valueString" : "uri"
        }],
        "linkId" : "Bundle.link.url",
        "type" : "group",
        "required" : true,
        "repeats" : true,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "The reference details for the link.",
          "type" : "display"
        },
        {
          "linkId" : "Bundle.link.url.value",
          "text" : "Reference details for the link",
          "type" : "string",
          "required" : false,
          "repeats" : false
        }]
      }]
    },
    {
      "linkId" : "Bundle.entry",
      "text" : "Entry in the bundle - will have a resource or information",
      "type" : "group",
      "required" : false,
      "repeats" : true,
      "item" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept" : {
            "coding" : [{
              "system" : "http://hl7.org/fhir/questionnaire-item-control",
              "code" : "flyover",
              "display" : "Fly-over"
            }]
          }
        }],
        "text" : "An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).",
        "type" : "display"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
          "valueInteger" : 1
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
          "valueString" : "string"
        }],
        "linkId" : "Bundle.entry.id",
        "type" : "group",
        "required" : false,
        "repeats" : true,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "type" : "display"
        },
        {
          "linkId" : "Bundle.entry.id.value",
          "text" : "Unique id for inter-element referencing",
          "type" : "string",
          "required" : false,
          "repeats" : false
        }]
      },
      {
        "linkId" : "Bundle.entry.extension",
        "text" : "Additional content defined by implementations",
        "type" : "group",
        "required" : false,
        "repeats" : true,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
          "type" : "display"
        }]
      },
      {
        "linkId" : "Bundle.entry.modifierExtension",
        "text" : "Extensions that cannot be ignored even if unrecognized",
        "type" : "group",
        "required" : false,
        "repeats" : true,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
          "type" : "display"
        }]
      },
      {
        "linkId" : "Bundle.entry.link",
        "text" : "Links related to this entry",
        "type" : "group",
        "required" : false,
        "repeats" : true,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "A series of links that provide context to this entry.",
          "type" : "display"
        }]
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
          "valueInteger" : 1
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
          "valueString" : "uri"
        }],
        "linkId" : "Bundle.entry.fullUrl",
        "type" : "group",
        "required" : false,
        "repeats" : true,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "The Absolute URL for the resource.  The fullUrl SHALL NOT disagree with the id in the resource - i.e. if the fullUrl is not a urn:uuid, the URL shall be version-independent URL consistent with the Resource.id. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that: \n* fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle)\n* Results from operations might involve resources that are not identified. fullUrl might not be [unique in the context of a resource](bundle.html#bundle-unique). Note that since [FHIR resources do not need to be served through the FHIR API](references.html), the fullURL might be a URN or an absolute URL that does not end with the logical id of the resource (Resource.id). However, but if the fullUrl does look like a RESTful server URL (e.g. meets the [regex](references.html#regex), then the 'id' portion of the fullUrl SHALL end with the Resource.id.\n\nNote that the fullUrl is not the same as the canonical URL - it's an absolute url for an endpoint serving the resource (these will happen to have the same value on the canonical server for the resource with the canonical URL).",
          "type" : "display"
        },
        {
          "linkId" : "Bundle.entry.fullUrl.value",
          "text" : "URI for resource (Absolute URL server address or URI for UUID/OID)",
          "type" : "string",
          "required" : false,
          "repeats" : false
        }]
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
          "valueInteger" : 1
        }],
        "linkId" : "Bundle.entry.resource",
        "text" : "A resource in the bundle",
        "type" : "group",
        "required" : false,
        "repeats" : true,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type.",
          "type" : "display"
        }]
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
          "valueInteger" : 1
        }],
        "linkId" : "Bundle.entry.search",
        "text" : "Search related information",
        "type" : "group",
        "required" : false,
        "repeats" : false,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "Information about the search process that lead to the creation of this entry.",
          "type" : "display"
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "string"
          }],
          "linkId" : "Bundle.entry.search.id",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.search.id.value",
            "text" : "Unique id for inter-element referencing",
            "type" : "string",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "linkId" : "Bundle.entry.search.extension",
          "text" : "Additional content defined by implementations",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
            "type" : "display"
          }]
        },
        {
          "linkId" : "Bundle.entry.search.modifierExtension",
          "text" : "Extensions that cannot be ignored even if unrecognized",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
            "type" : "display"
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "code"
          }],
          "linkId" : "Bundle.entry.search.mode",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "Why this entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process. There is only one mode. In some corner cases, a resource may be included because it is both a match and an include. In these circumstances, 'match' takes precedence.",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.search.mode.value",
            "text" : "mode",
            "type" : "choice",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "decimal"
          }],
          "linkId" : "Bundle.entry.search.score",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "When searching, the server's search ranking score for the entry. Servers are not required to return a ranking score. 1 is most relevant, and 0 is least relevant. Often, search results are sorted by score, but the client may specify a different sort order.\n\nSee [Patient Match](patient-operation-match.html) for the EMPI search which relates to this element.",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.search.score.value",
            "text" : "Search ranking (between 0 and 1)",
            "type" : "decimal",
            "required" : false,
            "repeats" : false
          }]
        }]
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
          "valueInteger" : 1
        }],
        "linkId" : "Bundle.entry.request",
        "text" : "Additional execution information (transaction/batch/history)",
        "type" : "group",
        "required" : false,
        "repeats" : false,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.",
          "type" : "display"
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "string"
          }],
          "linkId" : "Bundle.entry.request.id",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.request.id.value",
            "text" : "Unique id for inter-element referencing",
            "type" : "string",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "linkId" : "Bundle.entry.request.extension",
          "text" : "Additional content defined by implementations",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
            "type" : "display"
          }]
        },
        {
          "linkId" : "Bundle.entry.request.modifierExtension",
          "text" : "Extensions that cannot be ignored even if unrecognized",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
            "type" : "display"
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "code"
          }],
          "linkId" : "Bundle.entry.request.method",
          "type" : "group",
          "required" : true,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.request.method.value",
            "text" : "method",
            "type" : "choice",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "uri"
          }],
          "linkId" : "Bundle.entry.request.url",
          "type" : "group",
          "required" : true,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "The URL for this entry, relative to the root (the address to which the request is posted). E.g. for a Patient Create, the method would be \"POST\" and the URL would be \"Patient\". For a Patient Update, the method would be PUT and the URL would be \"Patient/[id]\".",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.request.url.value",
            "text" : "URL for HTTP equivalent of this entry",
            "type" : "string",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "string"
          }],
          "linkId" : "Bundle.entry.request.ifNoneMatch",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "If the ETag values match, return a 304 Not Modified status. See the API documentation for [\"Conditional Read\"](http.html#cread).",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.request.ifNoneMatch.value",
            "text" : "For managing cache currency",
            "type" : "string",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "instant"
          }],
          "linkId" : "Bundle.entry.request.ifModifiedSince",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "Only perform the operation if the last updated date matches. See the API documentation for [\"Conditional Read\"](http.html#cread).",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.request.ifModifiedSince.value",
            "text" : "For managing cache currency",
            "type" : "dateTime",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "string"
          }],
          "linkId" : "Bundle.entry.request.ifMatch",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "Only perform the operation if the Etag value matches. For more information, see the API section [\"Managing Resource Contention\"](http.html#concurrency).",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.request.ifMatch.value",
            "text" : "For managing update contention",
            "type" : "string",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "string"
          }],
          "linkId" : "Bundle.entry.request.ifNoneExist",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for [\"Conditional Create\"](http.html#ccreate). This is just the query portion of the URL - what follows the \"?\" (not including the \"?\").",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.request.ifNoneExist.value",
            "text" : "For conditional creates",
            "type" : "string",
            "required" : false,
            "repeats" : false
          }]
        }]
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
          "valueInteger" : 1
        }],
        "linkId" : "Bundle.entry.response",
        "text" : "Results of execution (transaction/batch/history)",
        "type" : "group",
        "required" : false,
        "repeats" : false,
        "item" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
            "valueCodeableConcept" : {
              "coding" : [{
                "system" : "http://hl7.org/fhir/questionnaire-item-control",
                "code" : "flyover",
                "display" : "Fly-over"
              }]
            }
          }],
          "text" : "Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.",
          "type" : "display"
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "string"
          }],
          "linkId" : "Bundle.entry.response.id",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.response.id.value",
            "text" : "Unique id for inter-element referencing",
            "type" : "string",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "linkId" : "Bundle.entry.response.extension",
          "text" : "Additional content defined by implementations",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
            "type" : "display"
          }]
        },
        {
          "linkId" : "Bundle.entry.response.modifierExtension",
          "text" : "Extensions that cannot be ignored even if unrecognized",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
            "type" : "display"
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "string"
          }],
          "linkId" : "Bundle.entry.response.status",
          "type" : "group",
          "required" : true,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.response.status.value",
            "text" : "Status response code (text optional)",
            "type" : "string",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "uri"
          }],
          "linkId" : "Bundle.entry.response.location",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "The location header created by processing this operation, populated if the operation returns a location.",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.response.location.value",
            "text" : "The location (if the operation returns a location)",
            "type" : "string",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "string"
          }],
          "linkId" : "Bundle.entry.response.etag",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "The Etag for the resource, if the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)). Etags match the Resource.meta.versionId. The ETag has to match the version id in the header if a resource is included.",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.response.etag.value",
            "text" : "The Etag for the resource (if relevant)",
            "type" : "string",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-fhirType",
            "valueString" : "instant"
          }],
          "linkId" : "Bundle.entry.response.lastModified",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "The date/time that the resource was modified on the server. This has to match the same time in the meta header (meta.lastUpdated) if a resource is included.",
            "type" : "display"
          },
          {
            "linkId" : "Bundle.entry.response.lastModified.value",
            "text" : "Server's date time modified",
            "type" : "dateTime",
            "required" : false,
            "repeats" : false
          }]
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
            "valueInteger" : 1
          }],
          "linkId" : "Bundle.entry.response.outcome",
          "text" : "OperationOutcome with hints and warnings (for batch/transaction)",
          "type" : "group",
          "required" : false,
          "repeats" : true,
          "item" : [{
            "extension" : [{
              "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              "valueCodeableConcept" : {
                "coding" : [{
                  "system" : "http://hl7.org/fhir/questionnaire-item-control",
                  "code" : "flyover",
                  "display" : "Fly-over"
                }]
              }
            }],
            "text" : "An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction. For a POST/PUT operation, this is the equivalent outcome that would be returned for prefer = operationoutcome - except that the resource is always returned whether or not the outcome is returned.\n\nThis outcome is not used for error responses in batch/transaction, only for hints and warnings. In a batch operation, the error will be in Bundle.entry.response, and for transaction, there will be a single OperationOutcome instead of a bundle in the case of an error.",
            "type" : "display"
          }]
        }]
      }]
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
        "valueInteger" : 1
      }],
      "linkId" : "Bundle.signature",
      "text" : "Digital Signature",
      "type" : "group",
      "required" : false,
      "repeats" : false,
      "item" : [{
        "text" : "The signature could be created by the \"author\" of the bundle or by the originating device.   Requirements around inclusion of a signature, verification of signatures and treatment of signed/non-signed bundles is implementation-environment specific.",
        "type" : "display"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept" : {
            "coding" : [{
              "system" : "http://hl7.org/fhir/questionnaire-item-control",
              "code" : "flyover",
              "display" : "Fly-over"
            }]
          }
        }],
        "text" : "Digital Signature - base64 encoded. XML-DSig or a JWT.",
        "type" : "display"
      }]
    }]
  }]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Questionnaire');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  //expect(issues.length).toBe(0);
});
