export default [
  {
    _id: "65cf4741262cd4bd46f00890",
    customerID: "65cf47375f82ddc73126e61a",
    id: "f83748c8-47b9-af95-964b-fced4e2cd578",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
      display: "Dr. Alix578 Lynch190",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1976-10-02 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 4 year-old non-hispanic white male. # Social History Patient quite smoking at age 17 and is an alcoholic. Patient comes from a middle socioeconomic background. Patient currently has Anthem. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with chronic sinusitis (disorder). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
      display: "EMERSON HOSPITAL -",
    },
    date: "1976-10-02T17:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:cbce9550-815b-c236-d67c-e2a7f72f7819",
    },
    idm: {
      _id: null,
      id: "f83748c8-47b9-af95-964b-fced4e2cd578",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Alix578 Lynch190",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1976-10-02",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "f83748c8-47b9-af95-964b-fced4e2cd578",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:cbce9550-815b-c236-d67c-e2a7f72f7819",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "1976-10-02T17:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
          display: "Dr. Alix578 Lynch190",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
        display: "EMERSON HOSPITAL -",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1976-10-02 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 4 year-old non-hispanic white male. # Social History Patient quite smoking at age 17 and is an alcoholic. Patient comes from a middle socioeconomic background. Patient currently has Anthem. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with chronic sinusitis (disorder). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:a37dd551-c86e-ce46-78cb-74f65aafcd09",
          },
        ],
        period: {
          start: "1976-10-02T17:27:34-04:00",
          end: "1976-10-02T17:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4741262cd4bd46f008b4",
    customerID: "65cf47375f82ddc73126e61a",
    id: "95e36e53-4fa1-2398-ed00-242f7298eade",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
      display: "Dr. Christi444 Swaniawski813",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1990-09-08 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 18 year-old non-hispanic white male. # Social History Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with housing unsatisfactory (finding), received certificate of high school equivalency (finding), full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
      display: "SOUTH COUNTY PHYSICAL THERAPY INC",
    },
    date: "1990-09-08T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:0246fff4-71a3-0e06-bd6f-87901cfb45cf",
    },
    idm: {
      _id: null,
      id: "95e36e53-4fa1-2398-ed00-242f7298eade",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Christi444 Swaniawski813",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1990-09-09",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "95e36e53-4fa1-2398-ed00-242f7298eade",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:0246fff4-71a3-0e06-bd6f-87901cfb45cf",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "1990-09-08T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
          display: "Dr. Christi444 Swaniawski813",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
        display: "SOUTH COUNTY PHYSICAL THERAPY INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1990-09-08 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 18 year-old non-hispanic white male. # Social History Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with housing unsatisfactory (finding), received certificate of high school equivalency (finding), full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:c0844159-e3a1-ef71-4c74-4e0a7bf859af",
          },
        ],
        period: {
          start: "1990-09-08T20:27:34-04:00",
          end: "1990-09-08T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4741262cd4bd46f008e6",
    customerID: "65cf47375f82ddc73126e61a",
    id: "1c4527e5-267f-0a26-90c6-5572c33db534",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
      display: "Dr. Christi444 Swaniawski813",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1991-09-14 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 19 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
      display: "SOUTH COUNTY PHYSICAL THERAPY INC",
    },
    date: "1991-09-14T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:12d6ae74-eea4-ad03-b74b-fe8da019c163",
    },
    idm: {
      _id: null,
      id: "1c4527e5-267f-0a26-90c6-5572c33db534",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Christi444 Swaniawski813",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1991-09-15",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "1c4527e5-267f-0a26-90c6-5572c33db534",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:12d6ae74-eea4-ad03-b74b-fe8da019c163",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "1991-09-14T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
          display: "Dr. Christi444 Swaniawski813",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
        display: "SOUTH COUNTY PHYSICAL THERAPY INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1991-09-14 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 19 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:3dfee8d0-a4a6-3a53-7bed-30d4665e809c",
          },
        ],
        period: {
          start: "1991-09-14T20:27:34-04:00",
          end: "1991-09-14T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f00905",
    customerID: "65cf47375f82ddc73126e61a",
    id: "21e183ea-6bb0-1766-8dca-143cc8e14017",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
      display: "Dr. Christi444 Swaniawski813",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1994-09-17 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 22 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Anthem. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
      display: "SOUTH COUNTY PHYSICAL THERAPY INC",
    },
    date: "1994-09-17T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:f8ed2f56-8319-13c8-46be-e236c02ce314",
    },
    idm: {
      _id: null,
      id: "21e183ea-6bb0-1766-8dca-143cc8e14017",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Christi444 Swaniawski813",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1994-09-18",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "21e183ea-6bb0-1766-8dca-143cc8e14017",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:f8ed2f56-8319-13c8-46be-e236c02ce314",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "1994-09-17T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
          display: "Dr. Christi444 Swaniawski813",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
        display: "SOUTH COUNTY PHYSICAL THERAPY INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1994-09-17 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 22 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Anthem. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:ed8046ae-6c59-4dae-2cac-6ad90b34a3f7",
          },
        ],
        period: {
          start: "1994-09-17T20:27:34-04:00",
          end: "1994-09-17T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f00962",
    customerID: "65cf47375f82ddc73126e61a",
    id: "2b389cb8-9609-a58c-c056-b515d1451de4",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
      display: "Dr. Alix578 Lynch190",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1997-06-16 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 24 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with mold (organism). ## Plan The patient was prescribed the following medications: - fexofenadine hydrochloride 60 mg oral tablet - nda020800 0.3 ml epinephrine 1 mg/ml auto-injector The patient was placed on a careplan: - self-care interventions (procedure)",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
      display: "EMERSON HOSPITAL -",
    },
    date: "1997-06-16T17:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:e8778def-738e-bd73-2a4f-f9ec6b7ed6e1",
    },
    idm: {
      _id: null,
      id: "2b389cb8-9609-a58c-c056-b515d1451de4",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Alix578 Lynch190",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1997-06-16",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "2b389cb8-9609-a58c-c056-b515d1451de4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e8778def-738e-bd73-2a4f-f9ec6b7ed6e1",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "1997-06-16T17:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
          display: "Dr. Alix578 Lynch190",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
        display: "EMERSON HOSPITAL -",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1997-06-16 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 24 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with mold (organism). ## Plan The patient was prescribed the following medications: - fexofenadine hydrochloride 60 mg oral tablet - nda020800 0.3 ml epinephrine 1 mg/ml auto-injector The patient was placed on a careplan: - self-care interventions (procedure)",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:c24f2114-b2ec-7ccf-7aaf-01552e5e0f77",
          },
        ],
        period: {
          start: "1997-06-16T17:27:34-04:00",
          end: "1997-06-16T17:56:23-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f0097a",
    customerID: "65cf47375f82ddc73126e61a",
    id: "029b8cc2-ea81-39dc-366a-64039f3475dc",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
      display: "Dr. Alix578 Lynch190",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1997-09-14 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 25 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
      display: "EMERSON HOSPITAL -",
    },
    date: "1997-09-14T20:16:05.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:8fd5bbf4-033c-3b7b-cd90-53113d1ff34f",
    },
    idm: {
      _id: null,
      id: "029b8cc2-ea81-39dc-366a-64039f3475dc",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Alix578 Lynch190",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1997-09-15",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "029b8cc2-ea81-39dc-366a-64039f3475dc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:8fd5bbf4-033c-3b7b-cd90-53113d1ff34f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "1997-09-14T20:16:05.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
          display: "Dr. Alix578 Lynch190",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
        display: "EMERSON HOSPITAL -",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1997-09-14 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 25 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:ee0621c7-caa1-088e-85f7-40692c90e4d9",
          },
        ],
        period: {
          start: "1997-09-14T20:16:05-04:00",
          end: "1997-09-14T20:59:10-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f00994",
    customerID: "65cf47375f82ddc73126e61a",
    id: "599c6e9f-619c-657e-df8a-d95f64f8f78c",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999489",
      display: "Dr. Keven605 Mueller846",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1998-10-10 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 26 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has NO INSURANCE. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|f99c74cc-7d1a-3f95-9a33-4a9357bf2f2a",
      display: "UMASS MEMORIAL MEDICAL CENTER INC",
    },
    date: "1998-10-10T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:14e8aab8-2db9-8b59-50e7-933085954eba",
    },
    idm: {
      _id: null,
      id: "599c6e9f-619c-657e-df8a-d95f64f8f78c",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Keven605 Mueller846",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1998-10-11",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "599c6e9f-619c-657e-df8a-d95f64f8f78c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:14e8aab8-2db9-8b59-50e7-933085954eba",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "1998-10-10T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999489",
          display: "Dr. Keven605 Mueller846",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|f99c74cc-7d1a-3f95-9a33-4a9357bf2f2a",
        display: "UMASS MEMORIAL MEDICAL CENTER INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1998-10-10 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 26 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has NO INSURANCE. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:7e139983-65b3-9f4b-2162-36005ccf6da1",
          },
        ],
        period: {
          start: "1998-10-10T20:27:34-04:00",
          end: "1998-10-10T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f009af",
    customerID: "65cf47375f82ddc73126e61a",
    id: "bf9237a4-f59a-9ee7-5c3c-1fbe262ebf3a",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
      display: "Dr. Christi444 Swaniawski813",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2000-09-23 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 28 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has NO INSURANCE. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
      display: "SOUTH COUNTY PHYSICAL THERAPY INC",
    },
    date: "2000-09-23T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:c41662db-ec3d-d601-ba89-923de1cc50bb",
    },
    idm: {
      _id: null,
      id: "bf9237a4-f59a-9ee7-5c3c-1fbe262ebf3a",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Christi444 Swaniawski813",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2000-09-24",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "bf9237a4-f59a-9ee7-5c3c-1fbe262ebf3a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:c41662db-ec3d-d601-ba89-923de1cc50bb",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2000-09-23T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
          display: "Dr. Christi444 Swaniawski813",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
        display: "SOUTH COUNTY PHYSICAL THERAPY INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2000-09-23 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 28 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has NO INSURANCE. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:1390f44f-de6c-8a62-ebd4-5ccf71eef28d",
          },
        ],
        period: {
          start: "2000-09-23T20:27:34-04:00",
          end: "2000-09-23T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f009c6",
    customerID: "65cf47375f82ddc73126e61a",
    id: "122151bf-4d5e-9bff-96d5-2c34697d6770",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
      display: "Dr. Alix578 Lynch190",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2008-10-19 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 36 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
      display: "EMERSON HOSPITAL -",
    },
    date: "2008-10-19T14:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:01c4a3c0-e50e-1c6b-3ecc-51ef8da7a866",
    },
    idm: {
      _id: null,
      id: "122151bf-4d5e-9bff-96d5-2c34697d6770",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Alix578 Lynch190",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2008-10-19",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "122151bf-4d5e-9bff-96d5-2c34697d6770",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:01c4a3c0-e50e-1c6b-3ecc-51ef8da7a866",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2008-10-19T14:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
          display: "Dr. Alix578 Lynch190",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
        display: "EMERSON HOSPITAL -",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2008-10-19 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 36 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:740e87e8-27cd-e069-c96e-c3b99fce8949",
          },
        ],
        period: {
          start: "2008-10-19T14:27:34-04:00",
          end: "2008-10-19T14:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f009dd",
    customerID: "65cf47375f82ddc73126e61a",
    id: "0bd72c4f-706e-66de-f4f5-1f7a04c86da1",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
      display: "Dr. Christi444 Swaniawski813",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2003-09-27 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 31 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
      display: "SOUTH COUNTY PHYSICAL THERAPY INC",
    },
    date: "2003-09-27T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:bb6151e6-b46c-117d-4b40-71ab246c461f",
    },
    idm: {
      _id: null,
      id: "0bd72c4f-706e-66de-f4f5-1f7a04c86da1",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Christi444 Swaniawski813",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2003-09-28",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "0bd72c4f-706e-66de-f4f5-1f7a04c86da1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:bb6151e6-b46c-117d-4b40-71ab246c461f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2003-09-27T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
          display: "Dr. Christi444 Swaniawski813",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
        display: "SOUTH COUNTY PHYSICAL THERAPY INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2003-09-27 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 31 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:0d9725e8-6d88-9c00-9d12-e99f244b732e",
          },
        ],
        period: {
          start: "2003-09-27T20:27:34-04:00",
          end: "2003-09-27T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f009ea",
    customerID: "65cf47375f82ddc73126e61a",
    id: "ff4a8a3a-6730-4427-96f4-df53a62ba0b0",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
      display: "Dr. Christi444 Swaniawski813",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2009-10-03 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 37 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), reports of violence in the environment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
      display: "SOUTH COUNTY PHYSICAL THERAPY INC",
    },
    date: "2009-10-03T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:0972ef36-03c6-9e3a-0158-224c7dfb64ca",
    },
    idm: {
      _id: null,
      id: "ff4a8a3a-6730-4427-96f4-df53a62ba0b0",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Christi444 Swaniawski813",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2009-10-04",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "ff4a8a3a-6730-4427-96f4-df53a62ba0b0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:0972ef36-03c6-9e3a-0158-224c7dfb64ca",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2009-10-03T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
          display: "Dr. Christi444 Swaniawski813",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
        display: "SOUTH COUNTY PHYSICAL THERAPY INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2009-10-03 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 37 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), reports of violence in the environment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:2cd49350-85c4-9970-b77c-9a72b8a19056",
          },
        ],
        period: {
          start: "2009-10-03T20:27:34-04:00",
          end: "2009-10-03T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f00a1e",
    customerID: "65cf47375f82ddc73126e61a",
    id: "9e6e72fc-9f5a-9561-bfa3-88f5270978ed",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
      display: "Dr. Alix578 Lynch190",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2012-06-27 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 39 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with osteoarthritis of knee. ## Plan The patient was prescribed the following medications: - naproxen sodium 220 mg oral tablet The patient was placed on a careplan: - musculoskeletal care",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
      display: "EMERSON HOSPITAL -",
    },
    date: "2012-06-27T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:786ce0a5-0251-6e3c-137e-d145ec0a57a6",
    },
    idm: {
      _id: null,
      id: "9e6e72fc-9f5a-9561-bfa3-88f5270978ed",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Alix578 Lynch190",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2012-06-28",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "9e6e72fc-9f5a-9561-bfa3-88f5270978ed",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:786ce0a5-0251-6e3c-137e-d145ec0a57a6",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2012-06-27T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
          display: "Dr. Alix578 Lynch190",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
        display: "EMERSON HOSPITAL -",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2012-06-27 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 39 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with osteoarthritis of knee. ## Plan The patient was prescribed the following medications: - naproxen sodium 220 mg oral tablet The patient was placed on a careplan: - musculoskeletal care",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:5fa43f88-9fd4-f291-8a31-55d1e659f081",
          },
        ],
        period: {
          start: "2012-06-27T20:27:34-04:00",
          end: "2012-06-27T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f00a32",
    customerID: "65cf47375f82ddc73126e61a",
    id: "d1a70f72-f4e6-57b9-b3c8-73fbb4b7c341",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
      display: "Dr. Alix578 Lynch190",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1997-06-04 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 24 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan ## Plan The patient was prescribed the following medications: - hydrocortisone 10 mg/ml topical cream",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
      display: "EMERSON HOSPITAL -",
    },
    date: "1997-06-04T08:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:f936a111-0f8b-9f6c-0f7c-bb6898d1b99c",
    },
    idm: {
      _id: null,
      id: "d1a70f72-f4e6-57b9-b3c8-73fbb4b7c341",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Alix578 Lynch190",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1997-06-04",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "d1a70f72-f4e6-57b9-b3c8-73fbb4b7c341",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:f936a111-0f8b-9f6c-0f7c-bb6898d1b99c",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "1997-06-04T08:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
          display: "Dr. Alix578 Lynch190",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
        display: "EMERSON HOSPITAL -",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1997-06-04 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 24 year-old non-hispanic white male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan ## Plan The patient was prescribed the following medications: - hydrocortisone 10 mg/ml topical cream",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:b5e683a1-7d79-4fea-aa6c-66c8fc98734a",
          },
        ],
        period: {
          start: "1997-06-04T08:27:34-04:00",
          end: "1997-06-04T08:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f00aef",
    customerID: "65cf47375f82ddc73126e61a",
    id: "e5ae1e4f-6f87-0f66-240c-cbac87efd49c",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
      display: "Dr. Christi444 Swaniawski813",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2012-07-21 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 40 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Anthem. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), stress (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free, hep a, adult. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - assessment of anxiety (procedure) - screening for domestic abuse (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure)",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
      display: "SOUTH COUNTY PHYSICAL THERAPY INC",
    },
    date: "2012-07-21T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:a95249ad-f221-9f54-08cd-1dd9b1916091",
    },
    idm: {
      _id: null,
      id: "e5ae1e4f-6f87-0f66-240c-cbac87efd49c",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Christi444 Swaniawski813",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2012-07-22",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "e5ae1e4f-6f87-0f66-240c-cbac87efd49c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:a95249ad-f221-9f54-08cd-1dd9b1916091",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2012-07-21T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
          display: "Dr. Christi444 Swaniawski813",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
        display: "SOUTH COUNTY PHYSICAL THERAPY INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2012-07-21 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 40 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Anthem. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), stress (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free, hep a, adult. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - assessment of anxiety (procedure) - screening for domestic abuse (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure)",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:f8003671-4404-97cc-096f-1f2bd66234f5",
          },
        ],
        period: {
          start: "2012-07-21T20:27:34-04:00",
          end: "2012-07-21T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f00bb0",
    customerID: "65cf47375f82ddc73126e61a",
    id: "9ee78cfb-7beb-82da-e702-28350f84ea9b",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
      display: "Dr. Christi444 Swaniawski813",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2014-07-26 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 42 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), social isolation (finding), severe anxiety (panic) (finding. ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free, td (adult) preservative free, hep a, adult. The following procedures were conducted: - assessment of health and social care needs (procedure) - assessment of anxiety (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure)",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
      display: "SOUTH COUNTY PHYSICAL THERAPY INC",
    },
    date: "2014-07-26T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:02e0c960-d11f-f3b8-996f-dc07e0411a9a",
    },
    idm: {
      _id: null,
      id: "9ee78cfb-7beb-82da-e702-28350f84ea9b",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Christi444 Swaniawski813",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2014-07-27",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "9ee78cfb-7beb-82da-e702-28350f84ea9b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:02e0c960-d11f-f3b8-996f-dc07e0411a9a",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2014-07-26T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
          display: "Dr. Christi444 Swaniawski813",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
        display: "SOUTH COUNTY PHYSICAL THERAPY INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2014-07-26 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 42 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), social isolation (finding), severe anxiety (panic) (finding. ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free, td (adult) preservative free, hep a, adult. The following procedures were conducted: - assessment of health and social care needs (procedure) - assessment of anxiety (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure)",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:ea288f9d-48a8-792e-6b49-02a8c5822fa8",
          },
        ],
        period: {
          start: "2014-07-26T20:27:34-04:00",
          end: "2014-07-26T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f00c5c",
    customerID: "65cf47375f82ddc73126e61a",
    id: "7e7404a9-f770-ff76-025e-7f462ddc9a4e",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
      display: "Dr. Alix578 Lynch190",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2017-12-22 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 45 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with viral sinusitis (disorder). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
      display: "EMERSON HOSPITAL -",
    },
    date: "2017-12-22T06:27:34.661-05:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:e05ff35b-cb33-ba05-cbb0-c7e4ae930b1d",
    },
    idm: {
      _id: null,
      id: "7e7404a9-f770-ff76-025e-7f462ddc9a4e",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Alix578 Lynch190",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2017-12-22",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "7e7404a9-f770-ff76-025e-7f462ddc9a4e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e05ff35b-cb33-ba05-cbb0-c7e4ae930b1d",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2017-12-22T06:27:34.661-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
          display: "Dr. Alix578 Lynch190",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
        display: "EMERSON HOSPITAL -",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2017-12-22 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 45 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with viral sinusitis (disorder). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:a4991d08-bd17-4275-6755-f70b5619fa90",
          },
        ],
        period: {
          start: "2017-12-22T06:27:34-05:00",
          end: "2017-12-22T06:42:34-05:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f00c61",
    customerID: "65cf47375f82ddc73126e61a",
    id: "692c6c37-da39-59a9-4404-2aeb9e0bb48d",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
      display: "Dr. Christi444 Swaniawski813",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2016-07-30 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 44 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), stress (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - assessment of anxiety (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure)",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
      display: "SOUTH COUNTY PHYSICAL THERAPY INC",
    },
    date: "2016-07-30T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:c5d4252c-4b25-cda7-9f26-848b5e61d480",
    },
    idm: {
      _id: null,
      id: "692c6c37-da39-59a9-4404-2aeb9e0bb48d",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Christi444 Swaniawski813",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2016-07-31",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "692c6c37-da39-59a9-4404-2aeb9e0bb48d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:c5d4252c-4b25-cda7-9f26-848b5e61d480",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2016-07-30T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
          display: "Dr. Christi444 Swaniawski813",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
        display: "SOUTH COUNTY PHYSICAL THERAPY INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2016-07-30 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 44 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), stress (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - assessment of anxiety (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure)",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:b10ff021-e368-9319-bfcc-903819a0134b",
          },
        ],
        period: {
          start: "2016-07-30T20:27:34-04:00",
          end: "2016-07-30T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4742262cd4bd46f00c8f",
    customerID: "65cf47375f82ddc73126e61a",
    id: "824846eb-def0-5485-03ee-f806408fd601",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
      display: "Dr. Alix578 Lynch190",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2018-05-21 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 45 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with viral sinusitis (disorder). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
      display: "EMERSON HOSPITAL -",
    },
    date: "2018-05-21T22:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:36089d72-3f5a-b82f-c524-8b9cf3f3683b",
    },
    idm: {
      _id: null,
      id: "824846eb-def0-5485-03ee-f806408fd601",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Alix578 Lynch190",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2018-05-22",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "824846eb-def0-5485-03ee-f806408fd601",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:36089d72-3f5a-b82f-c524-8b9cf3f3683b",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2018-05-21T22:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999649",
          display: "Dr. Alix578 Lynch190",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|03347b4d-994e-302b-848b-58019a4e274d",
        display: "EMERSON HOSPITAL -",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2018-05-21 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 45 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with viral sinusitis (disorder). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:ebee67f8-abd8-185c-f828-1f88dddb96e4",
          },
        ],
        period: {
          start: "2018-05-21T22:27:34-04:00",
          end: "2018-05-21T22:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4743262cd4bd46f00d60",
    customerID: "65cf47375f82ddc73126e61a",
    id: "119ef030-dc86-6cfc-cb22-6343399229a2",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
      display: "Dr. Christi444 Swaniawski813",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2018-08-04 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 46 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - assessment of anxiety (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - depression screening using patient health questionnaire nine item score (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure)",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
      display: "SOUTH COUNTY PHYSICAL THERAPY INC",
    },
    date: "2018-08-04T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:437cda77-015d-ab62-f39a-8ae6bb1c4f08",
    },
    idm: {
      _id: null,
      id: "119ef030-dc86-6cfc-cb22-6343399229a2",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Christi444 Swaniawski813",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2018-08-05",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "119ef030-dc86-6cfc-cb22-6343399229a2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:437cda77-015d-ab62-f39a-8ae6bb1c4f08",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2018-08-04T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
          display: "Dr. Christi444 Swaniawski813",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
        display: "SOUTH COUNTY PHYSICAL THERAPY INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2018-08-04 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 46 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - assessment of anxiety (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - depression screening using patient health questionnaire nine item score (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure)",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:1d56c57f-827e-6f75-8edb-2e004cf7febf",
          },
        ],
        period: {
          start: "2018-08-04T20:27:34-04:00",
          end: "2018-08-04T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4743262cd4bd46f00dcb",
    customerID: "65cf47375f82ddc73126e61a",
    id: "dd1d6fb5-84fc-07b3-0d9a-58df788875fc",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
      display: "Dr. Christi444 Swaniawski813",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2020-08-08 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Anthem. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), social isolation (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure)",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
      display: "SOUTH COUNTY PHYSICAL THERAPY INC",
    },
    date: "2020-08-08T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:33fefd04-5c38-f0ad-8445-46a9a7aaa3b9",
    },
    idm: {
      _id: null,
      id: "dd1d6fb5-84fc-07b3-0d9a-58df788875fc",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Christi444 Swaniawski813",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2020-08-09",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "dd1d6fb5-84fc-07b3-0d9a-58df788875fc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:33fefd04-5c38-f0ad-8445-46a9a7aaa3b9",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2020-08-08T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999929539",
          display: "Dr. Christi444 Swaniawski813",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|3db6151a-809b-3539-a615-9eb24297e44d",
        display: "SOUTH COUNTY PHYSICAL THERAPY INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2020-08-08 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Anthem. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), social isolation (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure)",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:dfccb464-61f2-7099-5337-d481352506bf",
          },
        ],
        period: {
          start: "2020-08-08T20:27:34-04:00",
          end: "2020-08-08T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4743262cd4bd46f00de2",
    customerID: "65cf47375f82ddc73126e61a",
    id: "4e513d78-c55f-be8c-67bb-7195e9252484",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999489",
      display: "Dr. Keven605 Mueller846",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2021-04-17 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), sprain of ankle, stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications acetaminophen 325 mg oral tablet # Assessment and Plan ## Plan Patient was given the following immunizations: sars-cov-2 (covid-19) vaccine, mrna, spike protein, lnp, preservative free, 30 mcg/0.3ml dose. ",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|f99c74cc-7d1a-3f95-9a33-4a9357bf2f2a",
      display: "UMASS MEMORIAL MEDICAL CENTER INC",
    },
    date: "2021-04-17T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:c7850cc6-e173-0dec-65e5-f1368803d12f",
    },
    idm: {
      _id: null,
      id: "4e513d78-c55f-be8c-67bb-7195e9252484",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Keven605 Mueller846",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2021-04-18",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "4e513d78-c55f-be8c-67bb-7195e9252484",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:c7850cc6-e173-0dec-65e5-f1368803d12f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2021-04-17T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999489",
          display: "Dr. Keven605 Mueller846",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|f99c74cc-7d1a-3f95-9a33-4a9357bf2f2a",
        display: "UMASS MEMORIAL MEDICAL CENTER INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2021-04-17 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), sprain of ankle, stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications acetaminophen 325 mg oral tablet # Assessment and Plan ## Plan Patient was given the following immunizations: sars-cov-2 (covid-19) vaccine, mrna, spike protein, lnp, preservative free, 30 mcg/0.3ml dose. ",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:b0f79448-642a-09a3-fb9a-e792564bc4ff",
          },
        ],
        period: {
          start: "2021-04-17T20:27:34-04:00",
          end: "2021-04-17T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4743262cd4bd46f00dfe",
    customerID: "65cf47375f82ddc73126e61a",
    id: "f1995ad5-3aa8-c70e-f366-ba12825cd51e",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999489",
      display: "Dr. Keven605 Mueller846",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2020-12-27 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with sprain of ankle. ## Plan The patient was prescribed the following medications: - acetaminophen 325 mg oral tablet The patient was placed on a careplan: - physical therapy procedure",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|f99c74cc-7d1a-3f95-9a33-4a9357bf2f2a",
      display: "UMASS MEMORIAL MEDICAL CENTER INC",
    },
    date: "2020-12-27T19:48:37.661-05:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:f9eb0c65-4226-ee4a-e8ed-2d1e11a0eda2",
    },
    idm: {
      _id: null,
      id: "f1995ad5-3aa8-c70e-f366-ba12825cd51e",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Keven605 Mueller846",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2020-12-28",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "f1995ad5-3aa8-c70e-f366-ba12825cd51e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:f9eb0c65-4226-ee4a-e8ed-2d1e11a0eda2",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2020-12-27T19:48:37.661-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999489",
          display: "Dr. Keven605 Mueller846",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|f99c74cc-7d1a-3f95-9a33-4a9357bf2f2a",
        display: "UMASS MEMORIAL MEDICAL CENTER INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2020-12-27 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with sprain of ankle. ## Plan The patient was prescribed the following medications: - acetaminophen 325 mg oral tablet The patient was placed on a careplan: - physical therapy procedure",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:2804ccd1-0a0f-d741-836e-e309f195638e",
          },
        ],
        period: {
          start: "2020-12-27T19:48:37-05:00",
          end: "2020-12-27T20:48:37-05:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "superseded",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf4743262cd4bd46f00e02",
    customerID: "65cf47375f82ddc73126e61a",
    id: "6ee69943-3f55-f0e9-fdc4-b3c51b0c39ab",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999489",
      display: "Dr. Keven605 Mueller846",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2021-05-08 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), sprain of ankle, stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications acetaminophen 325 mg oral tablet # Assessment and Plan ## Plan Patient was given the following immunizations: sars-cov-2 (covid-19) vaccine, mrna, spike protein, lnp, preservative free, 30 mcg/0.3ml dose. ",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|f99c74cc-7d1a-3f95-9a33-4a9357bf2f2a",
      display: "UMASS MEMORIAL MEDICAL CENTER INC",
    },
    date: "2021-05-08T20:27:34.661-04:00",
    empi: "65cf473f34842823bec5edff",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:282c0f03-fafb-6d19-5703-6394170d0a2b",
    },
    idm: {
      _id: null,
      id: "6ee69943-3f55-f0e9-fdc4-b3c51b0c39ab",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf473f34842823bec5edff",
      serverPatientID: null,
      practioner: "Dr. Keven605 Mueller846",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2021-05-09",
      type: "History and physical note",
      data: null,
      status: "current",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "6ee69943-3f55-f0e9-fdc4-b3c51b0c39ab",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:282c0f03-fafb-6d19-5703-6394170d0a2b",
        },
      ],
      status: "current",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
      },
      date: "2021-05-08T20:27:34.661-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999489",
          display: "Dr. Keven605 Mueller846",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|f99c74cc-7d1a-3f95-9a33-4a9357bf2f2a",
        display: "UMASS MEMORIAL MEDICAL CENTER INC",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2021-05-08 # Chief Complaint No complaints. # History of Present Illness Randal152 is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), sprain of ankle, stress (finding), social isolation (finding), severe anxiety (panic) (finding. # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a middle socioeconomic background. Patient has a high school education. Patient currently has Aetna. # Allergies No Known Allergies. # Medications acetaminophen 325 mg oral tablet # Assessment and Plan ## Plan Patient was given the following immunizations: sars-cov-2 (covid-19) vaccine, mrna, spike protein, lnp, preservative free, 30 mcg/0.3ml dose. ",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:cf873fcd-06d6-ab62-224a-7fd30ee86af7",
          },
        ],
        period: {
          start: "2021-05-08T20:27:34-04:00",
          end: "2021-05-08T20:42:34-04:00",
        },
      },
    },
    sourcePatientID: "3ce79121-6f1a-8d00-726d-bc0af611d017",
    status: "current",
    subject: {
      reference: "urn:uuid:3ce79121-6f1a-8d00-726d-bc0af611d017",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fee262cd4bd46ef4d2b",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "2496ccd9-f7fe-477e-69cf-1679adfbc354",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1954-04-03 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 1 year-old non-hispanic black male. # Social History Patient quite smoking at age 18 and is an alcoholic. Patient comes from a high socioeconomic background. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan ## Plan The patient was placed on a careplan: - self-care interventions (procedure)",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "1954-04-03T12:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:26609ba6-183b-fdc3-f306-4239ef45e255",
    },
    idm: {
      _id: null,
      id: "2496ccd9-f7fe-477e-69cf-1679adfbc354",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1954-04-03",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "2496ccd9-f7fe-477e-69cf-1679adfbc354",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:26609ba6-183b-fdc3-f306-4239ef45e255",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1954-04-03T12:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1954-04-03 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 1 year-old non-hispanic black male. # Social History Patient quite smoking at age 18 and is an alcoholic. Patient comes from a high socioeconomic background. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan ## Plan The patient was placed on a careplan: - self-care interventions (procedure)",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:a889805b-20ca-0ba6-5b5c-e617ce99b0cc",
          },
        ],
        period: {
          start: "1954-04-03T12:14:47-05:00",
          end: "1954-04-03T12:29:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fee262cd4bd46ef4d4e",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "375f6a6c-9d12-efdc-c165-84686a83be04",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1954-04-20 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 1 year-old non-hispanic black male. # Social History Patient quite smoking at age 18 and is an alcoholic. Patient comes from a high socioeconomic background. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with eggs (edible) (substance). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "1954-04-20T08:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:cc4ecb86-9e8a-ea63-81ed-ac4ba0d49c34",
    },
    idm: {
      _id: null,
      id: "375f6a6c-9d12-efdc-c165-84686a83be04",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1954-04-20",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "375f6a6c-9d12-efdc-c165-84686a83be04",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:cc4ecb86-9e8a-ea63-81ed-ac4ba0d49c34",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1954-04-20T08:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1954-04-20 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 1 year-old non-hispanic black male. # Social History Patient quite smoking at age 18 and is an alcoholic. Patient comes from a high socioeconomic background. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with eggs (edible) (substance). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:b1ca5d4d-e3b5-e65b-e900-3844ae30f421",
          },
        ],
        period: {
          start: "1954-04-20T08:14:47-05:00",
          end: "1954-04-20T08:29:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fee262cd4bd46ef4d82",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "6c2bd038-51dd-ffe2-f293-766baf4edad9",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1959-06-03 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 6 year-old non-hispanic black male. # Social History Patient quite smoking at age 18 and is an alcoholic. Patient comes from a high socioeconomic background. Patient currently has UnitedHealthcare. # Allergies eggs (edible) (substance) # Medications No Active Medications. # Assessment and Plan ## Plan The patient was placed on a careplan: - respiratory therapy",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "1959-06-03T15:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:930f6fce-46f4-f96f-c872-ef9731908516",
    },
    idm: {
      _id: null,
      id: "6c2bd038-51dd-ffe2-f293-766baf4edad9",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1959-06-03",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "6c2bd038-51dd-ffe2-f293-766baf4edad9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:930f6fce-46f4-f96f-c872-ef9731908516",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1959-06-03T15:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1959-06-03 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 6 year-old non-hispanic black male. # Social History Patient quite smoking at age 18 and is an alcoholic. Patient comes from a high socioeconomic background. Patient currently has UnitedHealthcare. # Allergies eggs (edible) (substance) # Medications No Active Medications. # Assessment and Plan ## Plan The patient was placed on a careplan: - respiratory therapy",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:853a4e65-da0d-d531-eb6e-458a70bcf552",
          },
        ],
        period: {
          start: "1959-06-03T15:14:47-04:00",
          end: "1959-06-03T15:33:08-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fee262cd4bd46ef4d8d",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "000d4e35-b81a-1870-8632-6916aa5e0767",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1971-01-29 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 18 year-old non-hispanic black male. # Social History Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with received higher education (finding), full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1971-01-29T03:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:2a08a747-f9f1-bc69-d8f3-265f0bde499d",
    },
    idm: {
      _id: null,
      id: "000d4e35-b81a-1870-8632-6916aa5e0767",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1971-01-29",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "000d4e35-b81a-1870-8632-6916aa5e0767",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:2a08a747-f9f1-bc69-d8f3-265f0bde499d",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1971-01-29T03:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1971-01-29 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 18 year-old non-hispanic black male. # Social History Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with received higher education (finding), full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:b04db379-2092-c969-8968-39ab3557b605",
          },
        ],
        period: {
          start: "1971-01-29T03:14:47-05:00",
          end: "1971-01-29T03:29:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fee262cd4bd46ef4dab",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "8a4b1f5e-6a2b-27e6-ad21-b2db37863dd4",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1977-10-25 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 24 year-old non-hispanic black male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan ## Plan The patient was placed on a careplan: - respiratory therapy",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "1977-10-25T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:451877f1-cdc4-30db-096d-2b26411fb85c",
    },
    idm: {
      _id: null,
      id: "8a4b1f5e-6a2b-27e6-ad21-b2db37863dd4",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1977-10-25",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "8a4b1f5e-6a2b-27e6-ad21-b2db37863dd4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:451877f1-cdc4-30db-096d-2b26411fb85c",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1977-10-25T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1977-10-25 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 24 year-old non-hispanic black male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan ## Plan The patient was placed on a careplan: - respiratory therapy",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:dffdcaf9-384a-3472-867c-2f852dc61851",
          },
        ],
        period: {
          start: "1977-10-25T04:14:47-04:00",
          end: "1977-10-25T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fef262cd4bd46ef4dcf",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "1d8f3ee8-ede0-6688-3c44-d72afdc56ab2",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1978-02-10 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 25 year-old non-hispanic black male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1978-02-10T03:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:6d104030-0831-cd27-915d-6f4db94d28db",
    },
    idm: {
      _id: null,
      id: "1d8f3ee8-ede0-6688-3c44-d72afdc56ab2",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1978-02-10",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "1d8f3ee8-ede0-6688-3c44-d72afdc56ab2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:6d104030-0831-cd27-915d-6f4db94d28db",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1978-02-10T03:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1978-02-10 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 25 year-old non-hispanic black male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:ed03c4f1-9865-7638-37d1-d7c1fe282363",
          },
        ],
        period: {
          start: "1978-02-10T03:14:47-05:00",
          end: "1978-02-10T03:29:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fef262cd4bd46ef4de7",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "2bcc5b79-ee6f-63fe-765b-543ebdce04b9",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1981-02-13 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 28 year-old non-hispanic black male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1981-02-13T03:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:45b65006-6ac8-b941-ce30-5aab77f23dcb",
    },
    idm: {
      _id: null,
      id: "2bcc5b79-ee6f-63fe-765b-543ebdce04b9",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1981-02-13",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "2bcc5b79-ee6f-63fe-765b-543ebdce04b9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:45b65006-6ac8-b941-ce30-5aab77f23dcb",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1981-02-13T03:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1981-02-13 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 28 year-old non-hispanic black male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:e756ebcd-40d3-59f6-257c-4b413d4e94e8",
          },
        ],
        period: {
          start: "1981-02-13T03:14:47-05:00",
          end: "1981-02-13T03:29:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fef262cd4bd46ef4e2c",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "f3f3ac8e-a4a7-e37a-8231-d373cd4090b9",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1984-02-17 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 31 year-old non-hispanic black male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), limited social contact (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1984-02-17T03:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:e6af684c-89c1-2dde-1bac-ad2d61bf0d9f",
    },
    idm: {
      _id: null,
      id: "f3f3ac8e-a4a7-e37a-8231-d373cd4090b9",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1984-02-17",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "f3f3ac8e-a4a7-e37a-8231-d373cd4090b9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e6af684c-89c1-2dde-1bac-ad2d61bf0d9f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1984-02-17T03:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1984-02-17 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 31 year-old non-hispanic black male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Humana. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding), limited social contact (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:e44915f6-9666-521e-7c74-6f5a5035db88",
          },
        ],
        period: {
          start: "1984-02-17T03:14:47-05:00",
          end: "1984-02-17T03:29:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fef262cd4bd46ef4e30",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "b5deb1f1-c29d-e491-5fc8-4917246034a2",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1987-02-20 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 34 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1987-02-20T03:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:bd631626-d33f-ccb1-6ba0-d7e6a975e961",
    },
    idm: {
      _id: null,
      id: "b5deb1f1-c29d-e491-5fc8-4917246034a2",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1987-02-20",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "b5deb1f1-c29d-e491-5fc8-4917246034a2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:bd631626-d33f-ccb1-6ba0-d7e6a975e961",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1987-02-20T03:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1987-02-20 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 34 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:1fff2e1c-2dc4-c32d-4894-c1a62c7c80be",
          },
        ],
        period: {
          start: "1987-02-20T03:14:47-05:00",
          end: "1987-02-20T03:29:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fef262cd4bd46ef4e60",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "2f79cb6a-5d50-975a-ee36-e3f8fd2e16f8",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1990-02-23 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 37 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with prediabetes, full-time employment (finding), stress (finding). ## Plan The patient was placed on a careplan: - diabetes self management plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1990-02-23T03:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:50d385f3-f6c7-c96a-8fc5-bb1af25dc8cb",
    },
    idm: {
      _id: null,
      id: "2f79cb6a-5d50-975a-ee36-e3f8fd2e16f8",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1990-02-23",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "2f79cb6a-5d50-975a-ee36-e3f8fd2e16f8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:50d385f3-f6c7-c96a-8fc5-bb1af25dc8cb",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1990-02-23T03:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1990-02-23 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 37 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with prediabetes, full-time employment (finding), stress (finding). ## Plan The patient was placed on a careplan: - diabetes self management plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:173485eb-e0a7-944f-7ed1-7033881c5192",
          },
        ],
        period: {
          start: "1990-02-23T03:14:47-05:00",
          end: "1990-02-23T03:29:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fef262cd4bd46ef4f3c",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "dc7cfc5d-1af7-1e61-d5d8-6773fce9b18e",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1992-04-10 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 39 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with coronary heart disease. ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) The patient was prescribed the following medications: - simvastatin 20 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "1992-04-10T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:ff6be95a-3459-56a1-f2c7-04f4621e8602",
    },
    idm: {
      _id: null,
      id: "dc7cfc5d-1af7-1e61-d5d8-6773fce9b18e",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1992-04-10",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "dc7cfc5d-1af7-1e61-d5d8-6773fce9b18e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:ff6be95a-3459-56a1-f2c7-04f4621e8602",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1992-04-10T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1992-04-10 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 39 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan Patient is presenting with coronary heart disease. ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) The patient was prescribed the following medications: - simvastatin 20 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:d331b9e7-cc03-6a74-ecac-64fedddb57a9",
          },
        ],
        period: {
          start: "1992-04-10T04:14:47-04:00",
          end: "1992-04-10T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fef262cd4bd46ef4f8a",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "9a2608d2-61fb-eb03-29bf-c1747581ea26",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1992-04-11 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 39 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with viral sinusitis (disorder), full-time employment (finding). ## Plan The following procedures were conducted: - assessment of anxiety (procedure) - screening for domestic abuse (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure)",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "1992-04-11T03:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:850dc9d8-a929-d292-e9fd-2ba511156dd0",
    },
    idm: {
      _id: null,
      id: "9a2608d2-61fb-eb03-29bf-c1747581ea26",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1992-04-11",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "9a2608d2-61fb-eb03-29bf-c1747581ea26",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:850dc9d8-a929-d292-e9fd-2ba511156dd0",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1992-04-11T03:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1992-04-11 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 39 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with viral sinusitis (disorder), full-time employment (finding). ## Plan The following procedures were conducted: - assessment of anxiety (procedure) - screening for domestic abuse (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure)",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:6afb13cd-d1c9-d1ac-5524-6b939b91ada4",
          },
        ],
        period: {
          start: "1992-04-11T03:14:47-04:00",
          end: "1992-04-11T03:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fef262cd4bd46ef5057",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "770b9906-cc97-b02e-ce7f-fc05e93dfc5c",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1982-04-22 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 29 year-old non-hispanic black male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan ## Plan The patient was placed on a careplan: - respiratory therapy",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "1982-04-22T17:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:fddd664d-828f-6216-1d82-8c6c14701e82",
    },
    idm: {
      _id: null,
      id: "770b9906-cc97-b02e-ce7f-fc05e93dfc5c",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1982-04-22",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "770b9906-cc97-b02e-ce7f-fc05e93dfc5c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:fddd664d-828f-6216-1d82-8c6c14701e82",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1982-04-22T17:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1982-04-22 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 29 year-old non-hispanic black male. Patient has a history of full-time employment (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications No Active Medications. # Assessment and Plan ## Plan The patient was placed on a careplan: - respiratory therapy",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:e47502eb-e574-2058-f1f9-4f19844e4da8",
          },
        ],
        period: {
          start: "1982-04-22T17:14:47-05:00",
          end: "1982-04-22T17:37:23-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fef262cd4bd46ef509a",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "a5a19040-551b-840a-5077-e1c8debad2b3",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1992-04-24 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 39 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with part-time employment (finding), reports of violence in the environment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - screening for domestic abuse (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure) The patient was prescribed the following medications: - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1992-04-24T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:155232f1-5c1f-d918-1bfe-f1dea20f4cd1",
    },
    idm: {
      _id: null,
      id: "a5a19040-551b-840a-5077-e1c8debad2b3",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1992-04-24",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "a5a19040-551b-840a-5077-e1c8debad2b3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:155232f1-5c1f-d918-1bfe-f1dea20f4cd1",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1992-04-24T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1992-04-24 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 39 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with part-time employment (finding), reports of violence in the environment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - screening for domestic abuse (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure) The patient was prescribed the following medications: - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:f2f337b4-33bb-1fe1-4f96-8102f9a8b75a",
          },
        ],
        period: {
          start: "1992-04-24T04:14:47-04:00",
          end: "1992-04-24T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fef262cd4bd46ef512f",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "0c2b2a9c-2f13-6fe5-6b5b-4c540a59f1db",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1993-04-30 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 40 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding), stress (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure) The patient was prescribed the following medications: - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1993-04-30T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:e0120daf-b8df-b6e5-2061-51ed138da1e7",
    },
    idm: {
      _id: null,
      id: "0c2b2a9c-2f13-6fe5-6b5b-4c540a59f1db",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1993-04-30",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "0c2b2a9c-2f13-6fe5-6b5b-4c540a59f1db",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e0120daf-b8df-b6e5-2061-51ed138da1e7",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1993-04-30T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1993-04-30 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 40 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding), stress (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure) The patient was prescribed the following medications: - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:edf391a1-4331-38fe-ff87-7f6c41ceb8ab",
          },
        ],
        period: {
          start: "1993-04-30T04:14:47-04:00",
          end: "1993-04-30T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3fef262cd4bd46ef51da",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "f2f58149-1f0b-96c8-6ad7-ea13669494d1",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1994-05-06 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 41 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Humana. # Allergies No Known Allergies. # Medications simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with anemia (disorder). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free, td (adult) preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) The patient was prescribed the following medications: - amlodipine 5 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1994-05-06T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:8aee93f6-afda-bb0b-fe97-15e2ab78c036",
    },
    idm: {
      _id: null,
      id: "f2f58149-1f0b-96c8-6ad7-ea13669494d1",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1994-05-06",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "f2f58149-1f0b-96c8-6ad7-ea13669494d1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:8aee93f6-afda-bb0b-fe97-15e2ab78c036",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1994-05-06T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1994-05-06 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 41 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Humana. # Allergies No Known Allergies. # Medications simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with anemia (disorder). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free, td (adult) preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) The patient was prescribed the following medications: - amlodipine 5 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:2c401159-5242-62ea-1af1-a59896f56574",
          },
        ],
        period: {
          start: "1994-05-06T04:14:47-04:00",
          end: "1994-05-06T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff0262cd4bd46ef52a2",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "16225116-6f1b-a350-d817-33af8a1a9096",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999959",
      display: "Dr. Wilfredo622 Medhurst46",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1995-04-24 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 42 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with concussion with no loss of consciousness. ## Plan The patient was placed on a careplan: - head injury rehabilitation",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|e002090d-4e92-300e-b41e-7d1f21dee4c6",
      display: "CAMBRIDGE HEALTH ALLIANCE",
    },
    date: "1995-04-24T04:42:44.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:9b2e95b2-891f-585d-2672-57c3f2ff755f",
    },
    idm: {
      _id: null,
      id: "16225116-6f1b-a350-d817-33af8a1a9096",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Wilfredo622 Medhurst46",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1995-04-24",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "16225116-6f1b-a350-d817-33af8a1a9096",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:9b2e95b2-891f-585d-2672-57c3f2ff755f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1995-04-24T04:42:44.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999959",
          display: "Dr. Wilfredo622 Medhurst46",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|e002090d-4e92-300e-b41e-7d1f21dee4c6",
        display: "CAMBRIDGE HEALTH ALLIANCE",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1995-04-24 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 42 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with concussion with no loss of consciousness. ## Plan The patient was placed on a careplan: - head injury rehabilitation",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:aa016765-0d22-7185-9d49-e0db810d1649",
          },
        ],
        period: {
          start: "1995-04-24T04:42:44-04:00",
          end: "1995-04-24T05:42:44-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff0262cd4bd46ef5350",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "b7ba6925-dc2f-5456-b8f0-320de1836629",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1995-06-27 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 42 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "1995-06-27T04:42:44.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:55e3dd28-e741-3c50-6444-93a07b6b990a",
    },
    idm: {
      _id: null,
      id: "b7ba6925-dc2f-5456-b8f0-320de1836629",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1995-06-27",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "b7ba6925-dc2f-5456-b8f0-320de1836629",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:55e3dd28-e741-3c50-6444-93a07b6b990a",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1995-06-27T04:42:44.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1995-06-27 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 42 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:13dba121-a5c0-fb44-3b51-79fb03d2fbc0",
          },
        ],
        period: {
          start: "1995-06-27T04:42:44-04:00",
          end: "1995-06-27T04:57:44-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff0262cd4bd46ef539d",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "f2c7c7cd-67e8-3cc7-df66-e00f65bfd1eb",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1995-05-12 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 42 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - assessment of anxiety (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure) The patient was prescribed the following medications: - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1995-05-12T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:53c66450-50b8-e9cc-5ca1-5d55c9435bfe",
    },
    idm: {
      _id: null,
      id: "f2c7c7cd-67e8-3cc7-df66-e00f65bfd1eb",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1995-05-12",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "f2c7c7cd-67e8-3cc7-df66-e00f65bfd1eb",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:53c66450-50b8-e9cc-5ca1-5d55c9435bfe",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1995-05-12T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1995-05-12 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 42 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - assessment of anxiety (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure) The patient was prescribed the following medications: - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:164cb2c9-35bd-6dff-3c0a-1be0ae2d68d3",
          },
        ],
        period: {
          start: "1995-05-12T04:14:47-04:00",
          end: "1995-05-12T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff0262cd4bd46ef5447",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "6f8866d4-0a47-3904-5f51-805efb875db9",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1996-05-17 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 43 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with part-time employment (finding), limited social contact (finding), victim of intimate partner abuse (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free, hep a, adult. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - assessment of anxiety (procedure) - screening for domestic abuse (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure) The patient was prescribed the following medications: - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1996-05-17T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:3014b0c5-93f9-91f2-5b7b-b47261a932f1",
    },
    idm: {
      _id: null,
      id: "6f8866d4-0a47-3904-5f51-805efb875db9",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1996-05-17",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "6f8866d4-0a47-3904-5f51-805efb875db9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:3014b0c5-93f9-91f2-5b7b-b47261a932f1",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1996-05-17T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1996-05-17 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 43 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with part-time employment (finding), limited social contact (finding), victim of intimate partner abuse (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free, hep a, adult. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - assessment of anxiety (procedure) - screening for domestic abuse (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure) The patient was prescribed the following medications: - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:07358761-e0ea-6c55-746e-72c9e1039d23",
          },
        ],
        period: {
          start: "1996-05-17T04:14:47-04:00",
          end: "1996-05-17T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff0262cd4bd46ef544e",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "39e5ccae-e02a-eb9a-c3dc-37dfc5e1c2c4",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1996-10-03 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 43 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with viral sinusitis (disorder). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "1996-10-03T07:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:7fba6eb7-fc20-82f7-fb3f-5f40a88db742",
    },
    idm: {
      _id: null,
      id: "39e5ccae-e02a-eb9a-c3dc-37dfc5e1c2c4",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1996-10-03",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "39e5ccae-e02a-eb9a-c3dc-37dfc5e1c2c4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:7fba6eb7-fc20-82f7-fb3f-5f40a88db742",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1996-10-03T07:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1996-10-03 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 43 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with viral sinusitis (disorder). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:38d4159f-714a-ca7f-3466-61836e530531",
          },
        ],
        period: {
          start: "1996-10-03T07:14:47-04:00",
          end: "1996-10-03T07:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff0262cd4bd46ef54c2",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "5a17c99d-f22a-5617-6216-c057a7eeeaed",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1994-05-06 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 41 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Humana. # Allergies No Known Allergies. # Medications simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding), limited social contact (finding). ## Plan The following procedures were conducted: - peripheral blood smear interpretation - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure) - review of systems (procedure) - medication reconciliation (procedure) - brief general examination (procedure) The patient was prescribed the following medications: - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "1994-05-06T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:28b56b48-fa95-f651-055e-62678bd6cf63",
    },
    idm: {
      _id: null,
      id: "5a17c99d-f22a-5617-6216-c057a7eeeaed",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1994-05-06",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "5a17c99d-f22a-5617-6216-c057a7eeeaed",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:28b56b48-fa95-f651-055e-62678bd6cf63",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1994-05-06T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1994-05-06 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 41 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Humana. # Allergies No Known Allergies. # Medications simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding), limited social contact (finding). ## Plan The following procedures were conducted: - peripheral blood smear interpretation - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure) - review of systems (procedure) - medication reconciliation (procedure) - brief general examination (procedure) The patient was prescribed the following medications: - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:f672abad-3594-cef8-9103-99582de0b2bc",
          },
        ],
        period: {
          start: "1994-05-06T04:14:47-04:00",
          end: "1994-05-06T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff0262cd4bd46ef5529",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "6ffe36f5-6618-ff6c-ba64-cc1a7e15d4cc",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1997-05-23 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 44 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - assessment of anxiety (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure) The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1997-05-23T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:5541abb5-fcde-ef9c-0ca2-5b187f959d69",
    },
    idm: {
      _id: null,
      id: "6ffe36f5-6618-ff6c-ba64-cc1a7e15d4cc",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1997-05-23",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "6ffe36f5-6618-ff6c-ba64-cc1a7e15d4cc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:5541abb5-fcde-ef9c-0ca2-5b187f959d69",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1997-05-23T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1997-05-23 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 44 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - assessment of anxiety (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure) The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:da12f168-ca21-1de6-8d18-00ab4e57fec8",
          },
        ],
        period: {
          start: "1997-05-23T04:14:47-04:00",
          end: "1997-05-23T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff0262cd4bd46ef5571",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "4f9e05b5-eae0-9ffa-ca3b-b20f152af814",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1997-06-12 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 44 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with viral sinusitis (disorder). ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "1997-06-12T14:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:c4e687ab-dc99-5f98-d028-b3bfd59a54bc",
    },
    idm: {
      _id: null,
      id: "4f9e05b5-eae0-9ffa-ca3b-b20f152af814",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1997-06-12",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "4f9e05b5-eae0-9ffa-ca3b-b20f152af814",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:c4e687ab-dc99-5f98-d028-b3bfd59a54bc",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1997-06-12T14:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1997-06-12 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 44 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has UnitedHealthcare. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with viral sinusitis (disorder). ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:e760b47f-956a-1ce3-aa7e-d5aa2971b5dd",
          },
        ],
        period: {
          start: "1997-06-12T14:14:47-04:00",
          end: "1997-06-12T14:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff0262cd4bd46ef562f",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "7267df7a-3b3c-4a4e-103d-b4369e1c8990",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1998-05-29 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 45 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding), misuses drugs (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - assessment of anxiety (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure) The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1998-05-29T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:f2f82089-5776-b2c0-c83e-8a28938beabc",
    },
    idm: {
      _id: null,
      id: "7267df7a-3b3c-4a4e-103d-b4369e1c8990",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1998-05-29",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "7267df7a-3b3c-4a4e-103d-b4369e1c8990",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:f2f82089-5776-b2c0-c83e-8a28938beabc",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1998-05-29T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1998-05-29 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 45 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding), misuses drugs (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - assessment of anxiety (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure) The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:0ae752a6-3079-af1b-3055-f1a4f1cd088f",
          },
        ],
        period: {
          start: "1998-05-29T04:14:47-04:00",
          end: "1998-05-29T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff0262cd4bd46ef56e1",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "39bbbbf2-7a83-97d5-6ec7-ddfe2dd7a8e5",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "1999-06-04 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 46 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure) The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "1999-06-04T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:66e2e80f-c16c-c9a8-a798-211a1ea3aeb3",
    },
    idm: {
      _id: null,
      id: "39bbbbf2-7a83-97d5-6ec7-ddfe2dd7a8e5",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "1999-06-04",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "39bbbbf2-7a83-97d5-6ec7-ddfe2dd7a8e5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:66e2e80f-c16c-c9a8-a798-211a1ea3aeb3",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "1999-06-04T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "1999-06-04 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 46 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure) The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:68776a69-f2f6-ffd2-b8b4-dcc240cf38c3",
          },
        ],
        period: {
          start: "1999-06-04T04:14:47-04:00",
          end: "1999-06-04T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff0262cd4bd46ef5781",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "b18e924e-f15f-87a4-2896-7a28beefbf5e",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2000-06-09 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 47 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding), stress (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure) The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "2000-06-09T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:00027fd4-d687-48d5-f422-fb992c67a10b",
    },
    idm: {
      _id: null,
      id: "b18e924e-f15f-87a4-2896-7a28beefbf5e",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2000-06-09",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "b18e924e-f15f-87a4-2896-7a28beefbf5e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:00027fd4-d687-48d5-f422-fb992c67a10b",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "2000-06-09T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2000-06-09 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 47 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Cigna Health. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with full-time employment (finding), stress (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - depression screening (procedure) - depression screening using patient health questionnaire two-item score (procedure) - assessment of substance use (procedure) - screening for drug abuse (procedure) The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:beddb178-40b7-e146-5330-5b6b93796e36",
          },
        ],
        period: {
          start: "2000-06-09T04:14:47-04:00",
          end: "2000-06-09T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff1262cd4bd46ef5840",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "e3e7fcad-e860-ecfe-4755-f6add1bb0ac1",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2001-06-15 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 48 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with part-time employment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "2001-06-15T04:14:47.085-04:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:08df31a4-af0b-2d9e-dfbe-d7e224fca862",
    },
    idm: {
      _id: null,
      id: "e3e7fcad-e860-ecfe-4755-f6add1bb0ac1",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2001-06-15",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "e3e7fcad-e860-ecfe-4755-f6add1bb0ac1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:08df31a4-af0b-2d9e-dfbe-d7e224fca862",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "2001-06-15T04:14:47.085-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2001-06-15 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 48 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Blue Cross Blue Shield. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with part-time employment (finding). ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:38811438-dfdb-d3c7-7d97-db7a3d35733e",
          },
        ],
        period: {
          start: "2001-06-15T04:14:47-04:00",
          end: "2001-06-15T04:29:47-04:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff1262cd4bd46ef584b",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "76571b33-3f0a-7661-aebe-9d38055c21ee",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2001-12-21 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "2001-12-21T03:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:1add006d-37b0-67fa-d4db-964b8fe68194",
    },
    idm: {
      _id: null,
      id: "76571b33-3f0a-7661-aebe-9d38055c21ee",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2001-12-21",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "76571b33-3f0a-7661-aebe-9d38055c21ee",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:1add006d-37b0-67fa-d4db-964b8fe68194",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "2001-12-21T03:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2001-12-21 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan ## Plan Patient was given the following immunizations: influenza, seasonal, injectable, preservative free. The patient was prescribed the following medications: - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:722cb302-a047-a4fd-0e12-255ab6d62e4c",
          },
        ],
        period: {
          start: "2001-12-21T03:14:47-05:00",
          end: "2001-12-21T03:29:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff1262cd4bd46ef58f5",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "99a1b7c7-731f-b036-df2f-6ef405b09626",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
      display: "Dr. Lesley194 Fisher429",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2001-12-15 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with acute bronchitis (disorder), full-time employment (finding). ## Plan The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure) The patient was prescribed the following medications: - acetaminophen 325 mg oral tablet - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet The patient was placed on a careplan: - respiratory therapy",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
      display: "MOUNT AUBURN HOSPITAL",
    },
    date: "2001-12-15T11:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:429bc1e8-33da-7ea9-2c57-6f59bcc7703a",
    },
    idm: {
      _id: null,
      id: "99a1b7c7-731f-b036-df2f-6ef405b09626",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Lesley194 Fisher429",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2001-12-15",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "99a1b7c7-731f-b036-df2f-6ef405b09626",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:429bc1e8-33da-7ea9-2c57-6f59bcc7703a",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "2001-12-15T11:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999989",
          display: "Dr. Lesley194 Fisher429",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|69176529-fd1f-3b3f-abce-a0a3626769eb",
        display: "MOUNT AUBURN HOSPITAL",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2001-12-15 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with acute bronchitis (disorder), full-time employment (finding). ## Plan The following procedures were conducted: - assessment of health and social care needs (procedure) - medication reconciliation (procedure) - assessment of substance use (procedure) - assessment using alcohol use disorders identification test - consumption (procedure) The patient was prescribed the following medications: - acetaminophen 325 mg oral tablet - clopidogrel 75 mg oral tablet - nitroglycerin 0.4 mg/actuat mucosal spray - simvastatin 20 mg oral tablet - amlodipine 5 mg oral tablet The patient was placed on a careplan: - respiratory therapy",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:14982877-7fb5-2997-06ac-3cc952d52f9f",
          },
        ],
        period: {
          start: "2001-12-15T11:14:47-05:00",
          end: "2001-12-15T11:29:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff1262cd4bd46ef5929",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "a9241263-af87-c635-aa8c-3081c9e61a8d",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
      display: "Dr. Sommer719 Hilpert278",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2002-02-08 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), acute bronchitis (disorder), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications acetaminophen 325 mg oral tablet; amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; atorvastatin 80 mg oral tablet; clopidogrel 75 mg oral tablet; captopril 25 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan ## Plan",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
      display: "PCP58532",
    },
    date: "2002-02-08T03:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:a2ee710f-f29d-bb4e-6a9e-c209dc93fb8c",
    },
    idm: {
      _id: null,
      id: "a9241263-af87-c635-aa8c-3081c9e61a8d",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Sommer719 Hilpert278",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2002-02-08",
      type: "History and physical note",
      data: null,
      status: "current",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "a9241263-af87-c635-aa8c-3081c9e61a8d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:a2ee710f-f29d-bb4e-6a9e-c209dc93fb8c",
        },
      ],
      status: "current",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "2002-02-08T03:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999968019",
          display: "Dr. Sommer719 Hilpert278",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|214935b6-3ba3-31a9-9d96-56095ee9654a",
        display: "PCP58532",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2002-02-08 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), acute bronchitis (disorder), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications acetaminophen 325 mg oral tablet; amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; atorvastatin 80 mg oral tablet; clopidogrel 75 mg oral tablet; captopril 25 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan ## Plan",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:984aee6c-4aa1-ab90-4881-4bb82ead7b08",
          },
        ],
        period: {
          start: "2002-02-08T03:14:47-05:00",
          end: "2002-02-08T03:29:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "current",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
  {
    _id: "65cf3ff1262cd4bd46ef592a",
    customerID: "65cf3fe15f82ddc73126e5c3",
    id: "3d4c3f75-fc80-9b25-4c60-d1e042216e7d",
    source: {
      sourceType: "emr",
      sourceName: "synthea",
      serverID: "synthea-server-id",
      orgNames: ["Synthea"],
    },
    author: {
      reference:
        "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999959",
      display: "Dr. Wilfredo622 Medhurst46",
    },
    category: {
      "us-core-documentreference-category": "clinical-note",
      "us-core-documentreference-categoryDisplay": "Clinical Note",
    },
    content: [
      {
        attachment: {
          contentType: "text/plain; charset=utf-8",
          data: "2002-02-01 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), acute bronchitis (disorder), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications acetaminophen 325 mg oral tablet; amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with myocardial infarction, history of myocardial infarction (situation). ## Plan The following procedures were conducted: - echocardiography (procedure) - percutaneous coronary intervention - coronary artery bypass grafting The patient was prescribed the following medications: - atorvastatin 80 mg oral tablet - captopril 25 mg oral tablet",
        },
        format: {
          system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
          code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
          display: "mimeType Sufficient",
        },
      },
    ],
    context: {},
    custodian: {
      reference:
        "Organization?identifier=https://github.com/synthetichealth/synthea|e002090d-4e92-300e-b41e-7d1f21dee4c6",
      display: "CAMBRIDGE HEALTH ALLIANCE",
    },
    date: "2002-02-01T03:14:47.085-05:00",
    empi: "65cf3fea915dbdf8c4b98493",
    identifier: {
      "urn:ietf:rfc:3986": "urn:uuid:5a9021b0-0e8d-8aab-43ba-094e5941552f",
    },
    idm: {
      _id: null,
      id: "3d4c3f75-fc80-9b25-4c60-d1e042216e7d",
      resourceType: "DocumentReference",
      encounterID: null,
      sourceName: "synthea",
      serverID: "synthea-server-id",
      sourceType: "emr",
      receivedOn: "",
      empi: "65cf3fea915dbdf8c4b98493",
      serverPatientID: null,
      practioner: "Dr. Wilfredo622 Medhurst46",
      hedisQualityVS: null,
      medicationVS: null,
      riskVS: null,
      startDate: "2002-02-01",
      type: "History and physical note",
      data: null,
      status: "superseded",
    },
    meta: {
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
      ],
    },
    pVersion: "v3.0",
    resourceType: "DocumentReference",
    root: {
      resourceType: "DocumentReference",
      id: "3d4c3f75-fc80-9b25-4c60-d1e042216e7d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:5a9021b0-0e8d-8aab-43ba-094e5941552f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: {
        reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
      },
      date: "2002-02-01T03:14:47.085-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999959",
          display: "Dr. Wilfredo622 Medhurst46",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|e002090d-4e92-300e-b41e-7d1f21dee4c6",
        display: "CAMBRIDGE HEALTH ALLIANCE",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "2002-02-01 # Chief Complaint No complaints. # History of Present Illness Abdul218 is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), acute bronchitis (disorder), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding). # Social History Patient is married. Patient is an active smoker and is an alcoholic. Patient identifies as heterosexual. Patient comes from a high socioeconomic background. Patient has completed some college courses. Patient currently has Aetna. # Allergies No Known Allergies. # Medications acetaminophen 325 mg oral tablet; amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray # Assessment and Plan Patient is presenting with myocardial infarction, history of myocardial infarction (situation). ## Plan The following procedures were conducted: - echocardiography (procedure) - percutaneous coronary intervention - coronary artery bypass grafting The patient was prescribed the following medications: - atorvastatin 80 mg oral tablet - captopril 25 mg oral tablet",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          {
            reference: "urn:uuid:3d7d97ed-b8d2-00f6-0d21-c6c9a71488e6",
          },
        ],
        period: {
          start: "2002-02-01T03:14:47-05:00",
          end: "2002-02-01T04:14:47-05:00",
        },
      },
    },
    sourcePatientID: "b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    status: "superseded",
    subject: {
      reference: "urn:uuid:b0a06ead-cc42-aa48-dad6-841d4aa679fa",
    },
    type: {
      loinc: "34117-2",
      loincDisplay: "History and physical note",
      loinc_1: "51847-2",
      loincDisplay_1: "Evaluation+Plan note",
    },
  },
];
