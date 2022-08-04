import { fhir } from '../../src/index.js';

const src = {

  "resourceType": "Bundle",

  "type": "transaction",

  "timestamp": "2018-03-09T15:21:51.2112Z", 

  "entry": [

    {

      "resource": {

        "resourceType": "ServiceRequest",

        "id": 1,

			"text": {
				"status": "generated",
				"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> </div>"
			},

        "status": "active",

        "intent": "proposal",

        "priority": "routine",

        "subject": {

          "reference": "Patient/1"

        },

        "authoredOn": "2018-03-09T15:21:51Z",

        "requester": {

          "reference": "PractitionerRole/1"

        },

        "performer": {

          "reference": "https://www.caredove.com/FHIR3/HealthcareService/8654"

        },

        "reasonCode": [

          {

            "text": "Reason for referral narrative goes here"

          }

        ],

        "supportingInfo": [

          {

            "reference": "DocumentReference/1"

          }

        ],

        "note": [

          {

            "text": "Allergies: Penicillin \nSocial History: History of family conflict \nlow social interaction \nFood Allergies: Peanuts"

          }

        ]

      },

      "request": {

        "method": "POST",

        "url": "ServiceRequest"

      }

    },

    {

      "resource": {

        "resourceType": "Patient",

        "id": 1,

			"text": {
				"status": "generated",
				"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> </div>"
			},

			"identifier": [

          {

            "type": {

              "coding": [

                {

                  "code": "JHN",

                  "system": "http://hl7.org/fhir/v2/0203"

                }

              ],

              "text": "Ontario PHN"

            },

            "value": "4455 044 033",

            "system": "http://ehealthontario.ca/API/FHIR/NamingSystem/ca-on-patient-hcn",

            "extension": [

              {

                "url": "https://www.caredove.com/FHIR3/StructureDefinition/caredove-healthcardversion",

                "valueString": "H"

              }

            ]

          }

        ],

        "name": [

          {

            "given": [

              "John",

              "Scott"

            ],

            "family": "Smith"

          }

        ],

        "telecom": [

          {

            "system": "phone",

            "value": "(555) 111-1111",

            "use": "mobile",

            "rank": 1

          },

          {

            "system": "phone",

            "value": "(555) 222-2222",

            "rank": 2

          },

          {

            "system": "email",

            "value": "testpatient@caredove.com"

          }

        ],

        "gender": "male",

        "birthDate": "1928-06-29",

        "address": [

          {

            "use": "home",

            "type": "physical",

            "line": [

              "Unit 2",

              "50 Albert St."

            ],

            "city": "Waterloo",

            "state": "ON",

            "postalCode": "K8N 1N1",

            "country": "Can"

          }

        ],

        "maritalStatus": {

          "coding": [

            {

              "code": "M",

              "display": "Married"

            }

          ],

          "text": "Married"

        },

        "contact": [

          {

            "relationship": [

              {

                "text": "Alternate Contact"

              }

            ],

            "name": {

              "given": [

                "Shemergency",

                "Scott"

              ],

              "family": "McContact"

            },

            "telecom": [

              {

                "system": "phone",

                "value": "(555) 111-1111",

                "use": "mobile",

                "rank": 1

              },

              {

                "system": "phone",

                "value": "(555) 222-2222",

                "rank": 2

              },

              {

                "system": "email",

                "value": "testcontact@caredove.com"

              }

            ],

            "address": {

              "use": "home",

              "type": "physical",

              "line": [

                "Unit 2",

                "50 Albert St."

              ],

              "city": "Waterloo",

              "state": "ON",

              "postalCode": "32819",

              "country": "Can"

            },

            "gender": "female"

          }

        ],

        "communication": [

          {

            "language": {

              "coding": [

                {

                  "code": "en",

                  "display": "English"

                }

              ],

              "text": "English"

            },

            "preferred": true

          }

        ],

        "generalPractitioner": [

          {

            "reference": "PractitionerRole/2"

          }

        ]

      },

      "request": {

        "method": "POST",

        "url": "Patient"

      }

    },

    {

      "resource": {

        "resourceType": "PractitionerRole",

        "id": 1,
			"text": {
				"status": "generated",
				"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> </div>"
			},

        "practitioner": {

          "reference": "Practitioner/1"

        },

        "organization": {

          "reference": "Organization/1"

        },

        "location": [

          {

            "reference": "Location/1"

          }

        ],

        "telecom": [

          {

            "system": "phone",

            "value": "(555) 111-1111",

            "use": "work"

          },

          {

            "system": "email",

            "value": "testsender@caredove.com",

            "use": "work"

          }

        ]

      },

      "request": {

        "method": "POST",

        "url": "PractitionerRole"

      }

    },

    {

      "resource": {

        "resourceType": "Practitioner",

        "id": 1,

        "name": [

          {

            "given": [

              "Requesty"

            ],

            "family": "McSenderson"

          }

        ]

      },

      "request": {

        "method": "POST",

        "url": "Practitioner"

      }

    },

    {

      "resource": {

        "resourceType": "Organization",

        "id": 1,

        "name": "North Sender Clinic"

      },

      "request": {

        "method": "POST",

        "url": "Organization"

      }

    },

    {

      "resource": {

        "resourceType": "Location",
			"text": {
				"status": "generated",
				"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> </div>"
			},

        "id": 1,

        "name": "Downtown Sender Hub",

        "address": {

          "use": "work",

          "type": "physical",

          "line": [

            "Suite 11",

            "11 King st. West"

          ],

          "city": "Kitchener",

          "state": "ON",

          "postalCode": "N2L 1T1",

          "country": "Can"

        }

      },

      "request": {

        "method": "POST",

        "url": "Location"

      }

    },

    {

      "resource": {

        "resourceType": "PractitionerRole",
			"text": {
				"status": "generated",
				"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> </div>"
			},

        "id": 2,

        "practitioner": {

          "reference": "Practitioner/2"

        },

        "organization": {

          "reference": "Organization/2"

        },

        "location": [

          {

            "reference": "Location/2"

          }

        ],

        "telecom": [

          {

            "system": "phone",

            "value": "(555) 222-2222",

            "use": "work"

          },

          {

            "system": "email",

            "value": "familydoc@caredove.com",

            "use": "work"

          }

        ]

      },

      "request": {

        "method": "POST",

        "url": "PractitionerRole"

      }

    },

    {

      "resource": {

        "resourceType": "Practitioner",
			"text": {
				"status": "generated",
				"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> </div>"
			},

        "id": 2,

        "name": [

          {

            "given": [

              "Dr. Prim"

            ],

            "family": "Caredoc"

          }

        ]

      },

      "request": {

        "method": "POST",

        "url": "Practitioner"

      }

    },

    {

      "resource": {

        "resourceType": "Organization",

        "id": 2,

        "name": "Star Family Health Team"

      },

      "request": {

        "method": "POST",

        "url": "Organization"

      }

    },

    {

      "resource": {

        "resourceType": "DocumentReference",
			"text": {
				"status": "generated",
				"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> </div>"
			},

        "id": 1,

        "status": "current",

        "created": "2018-03-09T15:21:51.2112Z",

        "description": "Filename or Document Title goes here",

        "content": [

          {

            "attachment": "NEEDS WORK - ATTACHMENT DATA TYPE",

            "format": "NEEDS WORK - FORMAT INFO"

          }

        ]

      },

      "request": {

        "method": "POST",

        "url": "Practitioner"

      }

    },

    {

      "resource": {

        "resourceType": "Location",
			"text": {
				"status": "generated",
				"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> </div>"
			},

        "id": 2,

        "name": "West Side GP Office",

        "address": {

          "use": "work",

          "type": "physical",

          "line": [

            "22 Weber st. East"

          ],

          "city": "Kitchener",

          "state": "ON",

          "postalCode": "N2L 2T2",

          "country": "Can"

        }

      },

      "request": {

        "method": "POST",

        "url": "Location"

      }

    },

    {

      "resource": {

        "resourceType": "Task",
			"text": {
				"status": "generated",
				"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> </div>"
			},

        "id": 1,

        "basedOn" : {

          "reference" : "ServiceRequest/1"

        },

        "status" : "requested",

        "businessStatus " : {

          "text" : "Waiting for preliminary review"

        },

        "intent" : "proposal",

        "code" : {

          "text" : "Process Request"

        },

        "description" : "Process and close this referral request",

        "authoredOn" : "2018-03-09T15:21:51Z",

        "lastModified" : "2018-03-09T15:21:51Z"

      },

      "request": {

        "method": "POST",

        "url": "Task"

      }

    }   

  ]

}
;
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Bundle');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
});
