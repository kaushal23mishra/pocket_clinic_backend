export default {
  "abdul@gmail.com": [
    {
      "_id": "65cf3ff2915dbdf8c4b984d2",
      "dateStart": "2002-02-08T03:29:47-05:00",
      "dateEnd": "2002-02-08T03:29:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["862b3033-fcc1-028b-3810-d3f1498024e9"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2002-02-08T03:29:47-05:00",
          "endDate": "2002-02-08T03:29:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "308646001",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984cf",
      "dateStart": "2002-02-01",
      "dateEnd": "2002-02-01",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Myocardial Infarction",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Wilfredo622 Medhurst46",
      "npi2": "CAMBRIDGE HEALTH ALLIANCE",
      "resources": {
        "Encounter": ["3d7d97ed-b8d2-00f6-0d21-c6c9a71488e6"],
        "Procedure": [
          "8c2b48ca-65ed-6dd2-634c-a7d56af4040e",
          "ba4d400b-bfdf-ae4c-08ad-bf6f31cb19f7",
          "8eef6766-e75c-c83d-389b-a104e8e63d36"
        ],
        "DiagnosticReport": ["5a9021b0-0e8d-8aab-43ba-094e5941552f"],
        "DocumentReference": ["3d4c3f75-fc80-9b25-4c60-d1e042216e7d"],
        "Condition": [
          "4c9e3149-45bb-50ce-c509-0a019e38e53b",
          "fd37ea40-89cc-9f55-5146-03adc317498a"
        ],
        "MedicationRequest": [
          "af771cd8-496c-64a3-f626-23c205562b16",
          "a7c68adb-3248-0b4a-b25b-69de6107b4e5"
        ]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Wilfredo622 Medhurst46",
          "location": null,
          "startDate": "2002-02-01",
          "endDate": "2002-02-01",
          "type": "Myocardial Infarction"
        },
        {
          "resourceType": "Procedure",
          "location": "CAMBRIDGE HEALTH ALLIANCE",
          "startDate": "2002-02-01",
          "endDate": "2002-02-01",
          "display": "Echocardiography (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2002-02-01",
          "result": null,
          "display": "History and physical note",
          "data": "\n2002-02-01\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), acute bronchitis (disorder), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nacetaminophen 325 mg oral tablet; amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with myocardial infarction, history of myocardial infarction (situation). \n\n## Plan\n\nThe following procedures were conducted:\n- echocardiography (procedure)\n- percutaneous coronary intervention\n- coronary artery bypass grafting\nThe patient was prescribed the following medications:\n- atorvastatin 80 mg oral tablet\n- captopril 25 mg oral tablet\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Wilfredo622 Medhurst46",
          "startDate": "2002-02-01",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "CAMBRIDGE HEALTH ALLIANCE",
          "startDate": "2002-02-01",
          "endDate": "2002-02-01",
          "display": "Percutaneous coronary intervention (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2002-02-01",
          "startDate": "2002-02-01",
          "endDate": "2002-02-01",
          "verificationStatus": "confirmed",
          "display": "Myocardial infarction (disorder)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Procedure",
          "location": "CAMBRIDGE HEALTH ALLIANCE",
          "startDate": "2002-02-01",
          "endDate": "2002-02-01",
          "display": "Coronary artery bypass grafting (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2002-02-01",
          "category": null,
          "display": "Atorvastatin 80 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2002-02-01",
          "category": null,
          "display": "Captopril 25 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2002-02-01",
          "startDate": "2002-02-01",
          "endDate": "2002-02-01",
          "verificationStatus": "confirmed",
          "display": "History of myocardial infarction (situation)",
          "category": "encounter-diagnosis"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take atorvastatin 80 mg oral tablet daily with or without food",
        "Take captopril 25 mg oral tablet daily as directed by your healthcare provider",
        "Use nitroglycerin 0.4 mg/actuat mucosal spray as needed for chest pain. Follow specific instructions provided by your doctor"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis is myocardial infarction. No complaint was reported. Patient's social history includes an active smoking and alcoholism. Allergies were absent. Medications prescribed: acetaminophen, amlodipine, simvastatin, clopidogrel, atorvastatin, and captopril.</p><h2>Treatment and Prescriptions</h2><p>The treatment plan involved percutaneous coronary intervention and coronary artery bypass grafting. The patient has been prescribed atorvastatin 80 mg, captopril 25 mg, and nitroglycerin spray.</p><h2>Advice and Recommendations</h2><p>The patient is advised to take medications as prescribed and use nitroglycerin spray as needed for chest pain. Lifestyle changes including quitting smoking and managing alcohol consumption are recommended. Follow-up with the healthcare provider for monitoring and further instructions.</p></section>",
      "shortSummary": "You have been diagnosed with myocardial infarction. The treatment plan includes percutaneous coronary intervention and coronary artery bypass grafting. You have been prescribed atorvastatin 80 mg, captopril 25 mg, and nitroglycerin spray. Follow medication instructions carefully.",
      "doctorSummary": "Patient, Abdul218, a non-hispanic black male, 49 years old, presented with myocardial infarction and a history of the same condition. Social history indicates smoking and alcoholism. Prescribed medications include acetaminophen, amlodipine, simvastatin, clopidogrel, atorvastatin, and captopril. The treatment plan involved percutaneous coronary intervention and coronary artery bypass grafting. Lifestyle changes, medication adherence, and follow-up are crucial for this patient's recovery and long-term health.",
      "validatedTasksForUser": [
        {
          "id": "603f5ff123456789abcde001",
          "task": "Take atorvastatin 80 mg oral tablet as prescribed",
          "status": "pending",
          "note": ""
        },
        {
          "id": "603f5ff123456789abcde002",
          "task": "Take captopril 25 mg oral tablet as prescribed",
          "status": "pending",
          "note": ""
        },
        {
          "id": "603f5ff123456789abcde003",
          "task": "Use nitroglycerin 0.4 mg/actuat mucosal spray as needed for chest pain",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Take atorvastatin 80 mg oral tablet daily with or without food",
        "Take captopril 25 mg oral tablet daily as directed by your healthcare provider",
        "Use nitroglycerin 0.4 mg/actuat mucosal spray as needed for chest pain. Follow specific instructions provided by your doctor"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis is myocardial infarction. The patient presented with no complaints but has a history of part-time employment, acute bronchitis, concussion, limited social contact, reports of violence, full-time employment, viral sinusitis, intimate partner abuse, drug misuse, and stress. Social history includes active smoking, alcoholism, marriage, high socioeconomic background, and some college courses. Allergies were absent, and the patient is currently on Aetna insurance. The medication list includes acetaminophen, amlodipine, simvastatin, clopidogrel, atorvastatin, and captopril.</p><h2>Treatment and Prescriptions</h2><p>The treatment plan involved percutaneous coronary intervention and coronary artery bypass grafting. The patient has been prescribed atorvastatin 80 mg, captopril 25 mg, and nitroglycerin spray.</p><h2>Advice and Recommendations</h2><p>The patient is advised to take medications as prescribed and use nitroglycerin spray as needed for chest pain. Lifestyle changes including quitting smoking and managing alcohol consumption are recommended. Follow-up with the healthcare provider for monitoring and further instructions.</p></section>",
      "validatedShortSummary": "You have been diagnosed with myocardial infarction. The treatment plan includes percutaneous coronary intervention and coronary artery bypass grafting. You have been prescribed atorvastatin 80 mg, captopril 25 mg, and nitroglycerin spray. Follow medication instructions carefully.",
      "validatedDoctorSummary": "Patient, Abdul218, a 49-year-old non-hispanic black male, presented with myocardial infarction and a history of the same condition. The social history indicates active smoking, alcoholism, marriage, high socioeconomic background, and some college courses. Medications prescribed include acetaminophen, amlodipine, simvastatin, clopidogrel, atorvastatin, and captopril. The treatment plan involved percutaneous coronary intervention and coronary artery bypass grafting. The patient is advised to adhere to medication instructions, use nitroglycerin spray as needed, and make lifestyle changes. Follow-up with the healthcare provider is crucial for further monitoring and instructions."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984ce",
      "dateStart": "2001-12-21T03:29:47-05:00",
      "dateEnd": "2001-12-21T03:29:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["a4610b76-9714-f464-9e85-b5a2662c077b"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2001-12-21T03:29:47-05:00",
          "endDate": "2001-12-21T03:29:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185349003",
              "display": "Encounter for check up (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984d1",
      "dateStart": "2002-02-08",
      "dateEnd": "2002-02-08",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Death Certification",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": null,
      "resources": {
        "Encounter": ["984aee6c-4aa1-ab90-4881-4bb82ead7b08"],
        "DocumentReference": ["a9241263-af87-c635-aa8c-3081c9e61a8d"],
        "DiagnosticReport": [
          "a2ee710f-f29d-bb4e-6a9e-c209dc93fb8c",
          "e6fc0de8-5106-bf8b-c218-9bd36e85b0d2"
        ]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "2002-02-08",
          "endDate": "2002-02-08",
          "type": "Death Certification"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "2002-02-08",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2002-02-08",
          "result": null,
          "display": "History and physical note",
          "data": "\n2002-02-08\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), acute bronchitis (disorder), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nacetaminophen 325 mg oral tablet; amlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; atorvastatin 80 mg oral tablet; clopidogrel 75 mg oral tablet; captopril 25 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\n\n\n## Plan\n\n"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2002-02-08",
          "result": "urn:uuid:2f7089d4-6c59-8551-bc3e-520ceebed5ac",
          "display": "U.S. standard certificate of death - 2003 revision",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take prescribed medications as directed by the healthcare provider."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes acute bronchitis, concussion, viral sinusitis, and victim of intimate partner abuse. Detailed lab results are not provided.</p><h2>Treatment and Prescriptions</h2><p>Your treatment plan involves the prescription of acetaminophen, amlodipine, simvastatin, atorvastatin, clopidogrel, captopril, and nitroglycerin.</p><h2>Advice and Recommendations</h2><p>It is recommended to take the prescribed medications as directed and to address the lifestyle factors such as smoking and alcohol consumption. Follow-up appointments are crucial to monitor progress.</p></section>",
      "shortSummary": "You have been prescribed specific medications to address your health concerns. Please ensure to follow the medication directions as provided.",
      "doctorSummary": "The patient, Abdul218, presented with a history of acute bronchitis, concussion, viral sinusitis, and victim of intimate partner abuse. The patient is an active smoker, alcoholic, and has a high socioeconomic background. Medication includes acetaminophen, amlodipine, simvastatin, atorvastatin, clopidogrel, captopril, and nitroglycerin. Lifestyle modifications and follow-up appointments are recommended to address the health concerns.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Take prescribed medications as directed by the healthcare provider."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes acute bronchitis, concussion, viral sinusitis, and victim of intimate partner abuse. Detailed lab results are not provided.</p><h2>Treatment and Prescriptions</h2><p>Your treatment plan involves the prescription of acetaminophen, amlodipine, simvastatin, atorvastatin, clopidogrel, captopril, and nitroglycerin.</p><h2>Advice and Recommendations</h2><p>It is recommended to take the prescribed medications as directed and to address the lifestyle factors such as smoking and alcohol consumption. Follow-up appointments are crucial to monitor progress.</p></section>",
      "validatedShortSummary": "You have been prescribed specific medications to address your health concerns. Please ensure to follow the medication directions as provided.",
      "validatedDoctorSummary": "The patient, Abdul218, presented with a history of acute bronchitis, concussion, viral sinusitis, and victim of intimate partner abuse. The patient is an active smoker, alcoholic, and has a high socioeconomic background. Medication includes acetaminophen, amlodipine, simvastatin, atorvastatin, clopidogrel, captopril, and nitroglycerin. Lifestyle modifications and follow-up appointments are recommended to address the health concerns."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984d0",
      "dateStart": "2002-02-01T04:14:47-05:00",
      "dateEnd": "2002-02-01T04:14:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["844e9f75-3cd3-f78e-f5f9-a6758e97d41c"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2002-02-01T04:14:47-05:00",
          "endDate": "2002-02-01T04:14:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "22298006",
              "display": "Myocardial infarction (disorder)"
            },
            {
              "system": "sct",
              "code": "22298006",
              "display": "Myocardial infarction (disorder)"
            },
            {
              "system": "sct",
              "code": "40701008",
              "display": "Echocardiography (procedure)"
            },
            {
              "system": "sct",
              "code": "415070008",
              "display": "Percutaneous coronary intervention (procedure)"
            },
            {
              "system": "sct",
              "code": "232717009",
              "display": "Coronary artery bypass grafting (procedure)"
            },
            {
              "system": "sct",
              "code": "399211009",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984b0",
      "dateStart": "2001-12-21",
      "dateEnd": "2001-12-21",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for check up (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": "MOUNT AUBURN HOSPITAL",
      "resources": {
        "Encounter": ["722cb302-a047-a4fd-0e12-255ab6d62e4c"],
        "MedicationRequest": [
          "51a5fd5f-fa0d-0409-b92a-27451c29a090",
          "cfa7861d-c535-57ed-606b-bb301af6a8b4",
          "ea489f4c-349a-c9fa-9eba-3f6a762978a0",
          "87429cc1-e57e-3592-063d-8c1aa219d65f",
          "3d77aad8-96c0-edcb-b9e0-357187808091",
          "b81eabac-bc0f-02dc-31a2-ea0fe9531232",
          "ad32bc8f-cb35-7e1f-3cef-cbe79514fb76",
          "359c2ac2-56ef-7a06-87ca-27bc3b857444"
        ],
        "Immunization": ["a021758b-57fa-5677-489a-8e5ddc00b79f"],
        "DocumentReference": ["76571b33-3f0a-7661-aebe-9d38055c21ee"],
        "Condition": ["c57ecfbe-d775-5346-583c-a4930e30012b"],
        "Vitals": [
          "59c574a6-8180-71e8-7a95-b8f7250a675f",
          "d2d71e4a-c827-ec82-1c40-bd221f485b93",
          "6aafbc57-4943-59b6-c77c-f5025e76bcb1",
          "5c1c9e4d-76e6-4a16-7f9a-fb8a878db162",
          "1804ad8e-e270-05e8-0790-59e6716ec255",
          "e3562c74-f79f-2b0b-55c1-f4075b9f0705"
        ],
        "DiagnosticReport": [
          "1add006d-37b0-67fa-d4db-964b8fe68194",
          "3a7bc312-5b05-fc2e-0a17-b590ba970537",
          "32e5da68-ed3f-5cf0-f928-c438af7bb66b"
        ],
        "Labs": [
          "49493394-0303-762a-badc-22a4bd18edc5",
          "eaf4b8e5-e31b-372d-80cc-71309ebdbc73",
          "85ced57b-2182-e78b-e11a-d5296379f61a",
          "497ecea1-9abc-6ab8-ba0d-99f0ca32bf3c",
          "93b00853-196f-ce23-6290-59f2ef409c7b",
          "b96c9e2d-dd9c-b578-96d8-faf498afe909",
          "d27a02d3-34ea-b077-4ea4-98c755059e90",
          "c12c187d-2d5f-b486-707b-ae16dedade38",
          "0d819050-e3d3-406b-80f8-a9f8f6a04aad"
        ],
        "Procedure": [
          "a18c4e0c-6e41-643b-00c2-ddd5a5855a24",
          "2e7c6c52-6146-7060-d37f-2427359b457d",
          "6d46b315-ab67-71d4-aacf-ef7f8eb8ca05",
          "e450ca2d-115a-8c9b-b402-1b71d0cdfa91"
        ]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "2001-12-21",
          "endDate": "2001-12-21",
          "type": "Encounter for check up (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-12-21",
          "category": null,
          "display": "Clopidogrel 75 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-12-21",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-12-21",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Immunization",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "2001-12-21",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "2001-12-21",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2001-12-21",
          "startDate": "2001-12-21",
          "endDate": "2001-12-21",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2001-12-21",
          "result": null,
          "display": "History and physical note",
          "data": "\n2001-12-21\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\n\n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe patient was prescribed the following medications:\n- clopidogrel 75 mg oral tablet\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n- amlodipine 5 mg oral tablet\n"
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 104.2,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 1,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 30.12,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Labs",
          "result": 5.1,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Labs",
          "result": 90.38,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-12-21",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-12-21",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2001-12-21",
          "result": "urn:uuid:eaf4b8e5-e31b-372d-80cc-71309ebdbc73",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "2001-12-21",
          "endDate": "2001-12-21",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-12-21",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 15,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Labs",
          "result": 1.48,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Labs",
          "result": 24.8,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Labs",
          "result": 142.02,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Labs",
          "result": 9.71,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Labs",
          "result": 5.81,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Labs",
          "result": 14.97,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Labs",
          "result": 106.76,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-12-21",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 70,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "2001-12-21",
          "endDate": "2001-12-21",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "2001-12-21",
          "endDate": "2001-12-21",
          "display": "Medication reconciliation (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-12-21",
          "category": null,
          "display": "Clopidogrel 75 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-12-21",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2001-12-21",
          "result": "urn:uuid:0533ada3-c39c-806d-c0c6-daba3e9d31ba",
          "display": "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "2001-12-21",
          "endDate": "2001-12-21",
          "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take Clopidogrel 75 MG Oral Tablet as prescribed",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray for chest pain as directed",
        "Take Simvastatin 20 MG Oral Tablet as prescribed",
        "Continue with seasonal influenza immunization",
        "Monitor body weight, height, BMI, and pain severity regularly"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis: Full-time employment finding. No significant abnormal labs reported.</p><h2>Treatment and Prescriptions</h2><p>Prescribed medications: Clopidogrel 75 MG Oral Tablet, Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray, Simvastatin 20 MG Oral Tablet. No significant test results reported.</p><h2>Advice and Recommendations</h2><p>Dr. Lesley Fisher recommended continuing with seasonal influenza immunization, taking prescribed medications, monitoring body weight, height, BMI, and pain severity regularly.</p></section>",
      "shortSummary": "You received a check-up with Dr. Lesley Fisher. Diagnosed with Full-time employment finding. Prescribed medications: Clopidogrel, Nitroglycerin, Simvastatin. Lifestyle changes and immunizations recommended.",
      "doctorSummary": "Patient Abdul218, 49-year-old non-hispanic black male, presented with a history of full-time employment finding and various social and health issues. Prescribed Clopidogrel 75 MG, Nitroglycerin 0.4 MG, Simvastatin 20 MG, and seasonal influenza immunization. Labs revealed normal potassium, glucose, creatinine, carbon dioxide, sodium, calcium, Hemoglobin A1c, urea nitrogen, and chloride levels. Vital signs indicated body height 186cm, body weight 104.2kg, BMI 30.12kg/m2, pain severity score 1/10, and stable respiratory rate and heart rate. Recommend monitoring and compliance with prescribed medications.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Take Clopidogrel 75 MG Oral Tablet as prescribed",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray for chest pain as directed",
        "Take Simvastatin 20 MG Oral Tablet as prescribed",
        "Continue with seasonal influenza immunization",
        "Monitor body weight, height, BMI, and pain severity regularly"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis: Full-time employment finding. No significant abnormal labs reported.</p><h2>Treatment and Prescriptions</h2><p>Prescribed medications: Clopidogrel 75 MG Oral Tablet, Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray, Simvastatin 20 MG Oral Tablet. No significant test results reported.</p><h2>Advice and Recommendations</h2><p>Dr. Lesley Fisher recommended continuing with seasonal influenza immunization, taking prescribed medications, monitoring body weight, height, BMI, and pain severity regularly.</p></section>",
      "validatedShortSummary": "You received a check-up with Dr. Lesley Fisher. Diagnosed with Full-time employment finding. Prescribed medications: Clopidogrel, Nitroglycerin, Simvastatin. Lifestyle changes and immunizations recommended.",
      "validatedDoctorSummary": "Patient Abdul218, 49-year-old non-hispanic black male, presented with a history of full-time employment finding and various social and health issues. Prescribed Clopidogrel 75 MG, Nitroglycerin 0.4 MG, Simvastatin 20 MG, and seasonal influenza immunization. Labs revealed normal potassium, glucose, creatinine, carbon dioxide, sodium, calcium, Hemoglobin A1c, urea nitrogen, and chloride levels. Vital signs indicated body height 186cm, body weight 104.2kg, BMI 30.12kg/m2, pain severity score 1/10, and stable respiratory rate and heart rate. Recommend monitoring and compliance with prescribed medications."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984cd",
      "dateStart": "2001-12-15T11:29:47-05:00",
      "dateEnd": "2001-12-15T11:29:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["445576ad-50ce-bdd3-4e36-e483e71e9cac"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2001-12-15T11:29:47-05:00",
          "endDate": "2001-12-15T11:29:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185345009",
              "display": null
            },
            {
              "system": "sct",
              "code": "10509002",
              "display": "Acute bronchitis (disorder)"
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "430193006",
              "display": "Medication reconciliation (procedure)"
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "763302001",
              "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984af",
      "dateStart": "2001-12-15",
      "dateEnd": "2001-12-15",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for symptom",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": null,
      "resources": {
        "Encounter": ["14982877-7fb5-2997-06ac-3cc952d52f9f"],
        "Condition": ["f2fc1229-d1d7-9501-17c1-c547c6eef275"],
        "MedicationRequest": ["61082b2a-966b-56c8-903e-59179479323f"],
        "DiagnosticReport": ["429bc1e8-33da-7ea9-2c57-6f59bcc7703a"],
        "DocumentReference": ["99a1b7c7-731f-b036-df2f-6ef405b09626"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "2001-12-15",
          "endDate": "2001-12-15",
          "type": "Encounter for symptom"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2001-12-15",
          "startDate": "2001-12-15",
          "endDate": "2001-12-15",
          "verificationStatus": "confirmed",
          "display": "Acute bronchitis (disorder)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-12-15",
          "category": null,
          "display": "Acetaminophen 325 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2001-12-15",
          "result": null,
          "display": "History and physical note",
          "data": "\n2001-12-15\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 49 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with acute bronchitis (disorder), full-time employment (finding). \n\n## Plan\n\nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- medication reconciliation (procedure)\n- assessment of substance use (procedure)\n- assessment using alcohol use disorders identification test - consumption (procedure)\nThe patient was prescribed the following medications:\n- acetaminophen 325 mg oral tablet\n- clopidogrel 75 mg oral tablet\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n- amlodipine 5 mg oral tablet\nThe patient was placed on a careplan:\n- respiratory therapy\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "2001-12-15",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take acetaminophen 325 MG Oral Tablet as prescribed",
        "Adhere to the respiratory therapy care plan"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with acute bronchitis. The encounter indicated findings of full-time employment and assessment of substance use.</p><h2>Treatment and Prescriptions</h2><p>The healthcare provider prescribed acetaminophen 325 MG Oral Tablet, clopidogrel, nitroglycerin, simvastatin, and amlodipine. The care plan includes respiratory therapy.</p><h2>Advice and Recommendations</h2><p>It's essential to take all prescribed medications and adhere to the respiratory therapy care plan. Lifestyle changes such as quitting smoking and reducing alcohol consumption are recommended. Follow up for further evaluation and support as needed.</p></section>",
      "shortSummary": "You have been diagnosed with acute bronchitis. The healthcare provider has prescribed acetaminophen 325 MG Oral Tablet for pain relief and initiated a respiratory therapy care plan. Follow the medication instructions and adhere to the respiratory therapy plan for recovery.",
      "doctorSummary": "The patient, Abdul218, was diagnosed with acute bronchitis during the encounter. A comprehensive medication regimen including acetaminophen, clopidogrel, nitroglycerin, simvastatin, and amlodipine was prescribed. The care plan incorporates respiratory therapy. Lifestyle modifications focusing on smoking cessation and alcohol reduction have been advised. Follow-up appointments are recommended for further evaluation of the treatment and additional support.",
      "validatedTasksForUser": [
        {
          "id": "5fc2a0139f5c3211c4180a2b",
          "task": "Ensure to take all prescribed medications as directed by the healthcare provider",
          "status": "pending",
          "note": ""
        },
        {
          "id": "a1b2c3d4e5f6g7h8i9j0k1l2",
          "task": "Follow the respiratory therapy care plan as advised",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Take acetaminophen 325 MG Oral Tablet as prescribed",
        "Adhere to the respiratory therapy care plan"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with acute bronchitis. The encounter indicated findings of full-time employment and assessment of substance use.</p><h2>Treatment and Prescriptions</h2><p>The healthcare provider prescribed acetaminophen 325 MG Oral Tablet, clopidogrel, nitroglycerin, simvastatin, and amlodipine. The care plan includes respiratory therapy.</p><h2>Advice and Recommendations</h2><p>It's essential to take all prescribed medications and adhere to the respiratory therapy care plan. Lifestyle changes such as quitting smoking and reducing alcohol consumption are recommended. Follow up for further evaluation and support as needed.</p></section>",
      "validatedShortSummary": "You have been diagnosed with acute bronchitis. The healthcare provider has prescribed acetaminophen 325 MG Oral Tablet for pain relief and initiated a respiratory therapy care plan. Follow the medication instructions and adhere to the respiratory therapy plan for recovery.",
      "validatedDoctorSummary": "The patient, Abdul218, was diagnosed with acute bronchitis during the encounter. A comprehensive medication regimen including acetaminophen, clopidogrel, nitroglycerin, simvastatin, and amlodipine was prescribed. The care plan incorporates respiratory therapy. Lifestyle modifications focusing on smoking cessation and alcohol reduction have been advised. Follow-up appointments are recommended for further evaluation of the treatment and additional support."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984cb",
      "dateStart": "2000-06-09T04:29:47-04:00",
      "dateEnd": "2000-06-09T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["6f6e218c-2219-c465-8182-2824995c6195"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2000-06-09T04:29:47-04:00",
          "endDate": "2000-06-09T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "73595000",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "713106006",
              "display": "Screening for drug abuse (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984ad",
      "dateStart": "2000-06-09",
      "dateEnd": "2000-06-09",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": "PCP58532",
      "resources": {
        "Encounter": ["beddb178-40b7-e146-5330-5b6b93796e36"],
        "Condition": [
          "41315d98-fc2d-4d2e-80b8-a1d22dd54274",
          "7e1235eb-8c6d-b39a-c6e6-958c7cbfb81b"
        ],
        "Vitals": [
          "04c2f761-93ca-60fe-9bf0-5dc22c06dbe4",
          "921e03cd-571c-01cc-5699-24eafac434e7",
          "1af08651-b220-500e-7055-f8a77d1a2af8",
          "9d61e088-b60d-b1e1-b5ad-6ca136e261fe",
          "61958705-d721-a30a-eff6-549f7c5f4f41",
          "787ece16-3a1b-e365-369a-b7727fa7b1e7"
        ],
        "Labs": [
          "de969025-ef13-0605-b953-c2e53ccc1d17",
          "709ed404-cfd8-daa6-7978-6062f9512252",
          "6b955e0d-df12-d69c-69c5-c2ba61e9030f",
          "c34e61d6-0607-fe1f-ba65-a26b2fdc7688",
          "42b57652-9cb2-c528-6746-02c0d2fe29d3",
          "46c608f9-f637-70d7-0294-e8c9af53a6ab",
          "8c1d682b-1c79-9a62-70d5-88ac02cae81d",
          "443176e6-fb78-9b95-4edb-357c000869b5",
          "dfd12765-11a9-a695-57de-584d6f79044b"
        ],
        "Procedure": [
          "e6e63280-718d-e234-1e9e-16d79b7a41a4",
          "63d6b250-c084-ef02-fa9b-3374bd641ce3",
          "b846f8ed-d449-8251-7873-f0e898f8604b",
          "62d5738b-7130-66d6-dc40-94ae1e84c6d1",
          "e062e941-c430-58aa-4eeb-5700ca68ed9f"
        ],
        "MedicationRequest": [
          "5940495b-6563-f03c-d988-a4c56b0d3a28",
          "d594ca05-793a-5488-d780-a480f61358de",
          "9eeaa50f-57ce-3704-40e6-d99043a0f1fd",
          "60bc07c4-4fd7-df6c-ff48-c7005754d023"
        ],
        "Immunization": ["4ca611b3-8149-d470-077f-f5c677a71800"],
        "DiagnosticReport": [
          "43116a84-f26e-cc2c-29d3-4d25d38071f9",
          "d3135931-d6f6-4635-70cf-4d39f8eaf6da",
          "5521e7f1-3b92-d323-1055-c2547a3d61e2",
          "00027fd4-d687-48d5-f422-fb992c67a10b"
        ],
        "DocumentReference": ["b18e924e-f15f-87a4-2896-7a28beefbf5e"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "2000-06-09",
          "endDate": "2000-06-09",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2000-06-09",
          "startDate": "2000-06-09",
          "endDate": "2000-06-09",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 30.12,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 98,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 15,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Labs",
          "result": 6.08,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Labs",
          "result": 9.04,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Labs",
          "result": 1.42,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Labs",
          "result": 9.57,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2000-06-09",
          "startDate": "2000-06-09",
          "endDate": "2000-06-09",
          "verificationStatus": "confirmed",
          "display": "Stress (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 2,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 104.2,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Labs",
          "result": 110.95,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Labs",
          "result": 4.13,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Labs",
          "result": 21.62,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "2000-06-09",
          "endDate": "2000-06-09",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "2000-06-09",
          "endDate": "2000-06-09",
          "display": "Depression screening (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "2000-06-09",
          "endDate": "2000-06-09",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "2000-06-09",
          "endDate": "2000-06-09",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "2000-06-09",
          "endDate": "2000-06-09",
          "display": "Screening for drug abuse (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2000-06-09",
          "category": null,
          "display": "Clopidogrel 75 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2000-06-09",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2000-06-09",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2000-06-09",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "2000-06-09",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Labs",
          "result": 87.79,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2000-06-09",
          "resourceType": "Labs",
          "result": 139.63,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2000-06-09",
          "result": "urn:uuid:443176e6-fb78-9b95-4edb-357c000869b5",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2000-06-09",
          "result": "urn:uuid:dc50c02b-3def-a53c-7245-146aa3081b24",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2000-06-09",
          "result": "urn:uuid:53de342e-46dd-9ee0-d67a-9cb559b188fc",
          "display": "Drug Abuse Screening Test-10 [DAST-10]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2000-06-09",
          "result": null,
          "display": "History and physical note",
          "data": "\n2000-06-09\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 47 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Cigna Health.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding), stress (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n- assessment of substance use (procedure)\n- screening for drug abuse (procedure)\nThe patient was prescribed the following medications:\n- clopidogrel 75 mg oral tablet\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n- amlodipine 5 mg oral tablet\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "2000-06-09",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": ["Take medications as prescribed by the doctor."],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Your primary diagnosis includes full-time employment and stress. Your vitals indicate a high BMI, elevated heart rate, and a concerning level of pain. Lab results show high A1c level, elevated urea nitrogen, and high calcium levels.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine to manage your condition. Additionally, you received a seasonal flu vaccination.</p><h2>Advice and Recommendations</h2><p>Follow the medication regimen as prescribed. Make lifestyle changes to manage stress, improve your diet, and monitor your blood pressure regularly. Schedule a follow-up appointment for further assessment and monitoring.</p></section>",
      "shortSummary": "You have been diagnosed with full-time employment, stress, and high blood pressure. You have been prescribed medications for these conditions and received seasonal flu vaccination. Follow the medication instructions.",
      "doctorSummary": "Patient presented with full-time employment and stress, along with high BMI, elevated heart rate, and significant pain. Lab results showed elevated A1c, urea nitrogen, and calcium levels. Prescribed medications include Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine. Managed with lifestyle changes, medication adherence, and regular follow-up appointments.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Take Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine as prescribed by the doctor."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Your primary diagnosis includes full-time employment and stress. Your vitals indicate a high BMI, elevated heart rate, and a concerning level of pain. Lab results show high A1c level, elevated urea nitrogen, and high calcium levels.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine to manage your condition. Additionally, you received a seasonal flu vaccination.</p><h2>Advice and Recommendations</h2><p>Follow the medication regimen as prescribed. Make lifestyle changes to manage stress, improve your diet, and monitor your blood pressure regularly. Schedule a follow-up appointment for further assessment and monitoring.</p></section>",
      "validatedShortSummary": "You have been diagnosed with full-time employment, stress, and high blood pressure. You have been prescribed medications for these conditions and received seasonal flu vaccination. Follow the medication instructions.",
      "validatedDoctorSummary": "Patient presented with full-time employment and stress, along with high BMI, elevated heart rate, and significant pain. Lab results showed elevated A1c, urea nitrogen, and calcium levels. Prescribed medications include Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine. Managed with lifestyle changes, medication adherence, and regular follow-up appointments."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984ca",
      "dateStart": "1999-06-04T04:29:47-04:00",
      "dateEnd": "1999-06-04T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["1afa4c6b-af6b-5a8b-30e7-29e65e008ffb"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1999-06-04T04:29:47-04:00",
          "endDate": "1999-06-04T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "430193006",
              "display": "Medication reconciliation (procedure)"
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "763302001",
              "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984c9",
      "dateStart": "1998-05-29T04:29:47-04:00",
      "dateEnd": "1998-05-29T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["7ffa0d57-7996-ae87-1666-bf71fe52dcf4"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1998-05-29T04:29:47-04:00",
          "endDate": "1998-05-29T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "430193006",
              "display": "Medication reconciliation (procedure)"
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "710841007",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "713106006",
              "display": "Screening for drug abuse (procedure)"
            },
            {
              "system": "sct",
              "code": "361055000",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984ab",
      "dateStart": "1998-05-29",
      "dateEnd": "1998-05-29",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": "PCP58532",
      "resources": {
        "Vitals": [
          "8c343a1a-d190-348e-a751-1f23a312c089",
          "1f35c98d-ab16-b341-d826-2027ab9ee2b6",
          "8607db6e-2232-5392-f2e9-f3615bbd37b4",
          "ccba2000-fe4a-dcf6-6376-a55d35a3e5b8",
          "f25c0a2a-0f59-7d74-621e-ff678f9f3102",
          "ade139be-341b-f53f-7a15-995672eabeb8"
        ],
        "Labs": [
          "ea365693-b2b0-e099-e603-77b1ee893e68",
          "f2797311-ac54-e72b-3a50-7a71f6fc8c40",
          "34c65af0-b537-da79-5950-cf319b918eb8",
          "7652bde2-370e-2274-369f-e2b26651b727",
          "8e33304b-5a4c-12fb-214c-23c3216dbe27",
          "ef94d692-8b42-efd9-bfae-ea2c9dcbcaac",
          "280a798f-f20f-47b7-7fad-0812f4d3430c",
          "32b2fb7c-0a77-de15-b186-5ba16cf2dd4d",
          "e5b1e6be-e795-acbb-36c9-bdf816e821e6"
        ],
        "Condition": [
          "6a9585b8-e80c-c99b-3578-e675e9b13a1f",
          "611238a3-6f33-b319-9da7-d0ec94a46d36"
        ],
        "Encounter": ["0ae752a6-3079-af1b-3055-f1a4f1cd088f"],
        "Procedure": [
          "19a0784b-89fa-3a52-da5f-a2dda581c345",
          "9713d57f-9033-0d12-6bce-678291543de4",
          "a5694c02-5b85-c6e3-3295-bd84221a60f1",
          "2df0deaf-5138-db02-647c-dc448ed55729",
          "7abf9cc8-2b39-ae91-8eb1-246acaaa61fd",
          "ba46183e-2c1e-0b87-989b-49be937887a9",
          "81e17c2f-4ad5-4ee7-3dc2-b7582cd28e85"
        ],
        "MedicationRequest": [
          "8b8907af-f681-c634-7a40-91f8cd4cd99b",
          "ead7491f-01b3-2c9e-0a8a-13bfdaf2a28b",
          "796f0e75-88a4-0b49-2623-23d1bd294159",
          "9a9ff3cd-1b58-9492-abcf-83df4bba0c47"
        ],
        "Immunization": ["50b26965-6f4d-def7-b090-dcaad8a35e36"],
        "DiagnosticReport": [
          "008b228a-77f6-6c9a-8c0e-dc8f5e31763d",
          "ecc39b28-cfac-4533-6815-4e0bc363421a",
          "8d2b9694-17bd-8596-3631-af55868f3d2b",
          "f2f82089-5776-b2c0-c83e-8a28938beabc",
          "3fcb32c1-9764-c201-d7a1-95c8fb033dbd"
        ],
        "DocumentReference": ["7267df7a-3b3c-4a4e-103d-b4369e1c8990"]
      },
      "newDocs": [
        {
          "startDate": "1998-05-29",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 2,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 104.2,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 30.12,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Labs",
          "result": 1.37,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Labs",
          "result": 9.23,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Labs",
          "result": 143.07,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Labs",
          "result": 4.82,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Labs",
          "result": 108.42,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Labs",
          "result": 20.87,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Labs",
          "result": 6.04,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 63,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Labs",
          "result": 16.34,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1998-05-29",
          "startDate": "1998-05-29",
          "endDate": "1998-05-29",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1998-05-29",
          "endDate": "1998-05-29",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1998-05-29",
          "startDate": "1998-05-29",
          "endDate": "1998-05-29",
          "verificationStatus": "confirmed",
          "display": "Misuses drugs (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Labs",
          "result": 98,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1998-05-29",
          "endDate": "1998-05-29",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1998-05-29",
          "endDate": "1998-05-29",
          "display": "Medication reconciliation (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1998-05-29",
          "endDate": "1998-05-29",
          "display": "Assessment of anxiety (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1998-05-29",
          "endDate": "1998-05-29",
          "display": "Depression screening (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1998-05-29",
          "endDate": "1998-05-29",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1998-05-29",
          "endDate": "1998-05-29",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1998-05-29",
          "endDate": "1998-05-29",
          "display": "Screening for drug abuse (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1998-05-29",
          "category": null,
          "display": "Clopidogrel 75 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1998-05-29",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1998-05-29",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "1998-05-29",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "startDate": "1998-05-29",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 14,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1998-05-29",
          "result": "urn:uuid:f8f0f899-c866-4388-1f63-7ad7d22e3631",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1998-05-29",
          "result": "urn:uuid:8c9ae3f1-ef50-e195-222e-4dd2dab62838",
          "display": "Drug Abuse Screening Test-10 [DAST-10]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1998-05-29",
          "result": "urn:uuid:e5b1e6be-e795-acbb-36c9-bdf816e821e6",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1998-05-29",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1998-05-29",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1998-05-29",
          "result": null,
          "display": "History and physical note",
          "data": "\n1998-05-29\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 45 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Blue Cross Blue Shield.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding), misuses drugs (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- medication reconciliation (procedure)\n- assessment of anxiety (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n- assessment of substance use (procedure)\n- screening for drug abuse (procedure)\nThe patient was prescribed the following medications:\n- clopidogrel 75 mg oral tablet\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n- amlodipine 5 mg oral tablet\n"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1998-05-29",
          "result": "urn:uuid:d2381989-a412-d55f-ff94-1d76d0528a99",
          "display": "Generalized anxiety disorder 7 item (GAD-7)",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Start taking Clopidogrel 75 MG Oral Tablet, Simvastatin 20 MG Oral Tablet, Amlodipine 5 MG Oral Tablet, and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as prescribed by the doctor.",
        "Schedule an appointment to get the influenza vaccine.",
        "Attend the scheduled follow-up appointments for depression screening and substance abuse assessment.",
        "For a healthy lifestyle, consider quitting smoking, reducing alcohol intake, and improving dietary habits."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes full-time employment, drug misuse, and generalized anxiety disorder. Test results indicate elevated creatinine, calcium, and glucose levels, as well as abnormal PHQ-2 and DAST-10 scores.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed Clopidogrel, Simvastatin, Amlodipine, and Nitroglycerin. Additionally, you received the influenza vaccine. The PHQ-2 and DAST-10 screenings have been conducted for depression and substance abuse assessment.</p><h2>Advice and Recommendations</h2><p>It is recommended to follow-up for depression and substance use assessment. Lifestyle changes, including quitting smoking, reducing alcohol consumption, and improving dietary habits, are crucial for your well-being.</p></section>",
      "shortSummary": "You have been prescribed medications for your cardiovascular health and advised to get immunized. Follow-up appointments are scheduled for depression and substance use assessment. Lifestyle changes can help improve your overall well-being.",
      "doctorSummary": "The patient presented with findings of full-time employment, drug misuse, and generalized anxiety disorder. Test results revealed elevated creatinine, calcium, and glucose levels, as well as abnormal PHQ-2 and DAST-10 scores. The treatment plan includes Clopidogrel, Simvastatin, Amlodipine, and Nitroglycerin, along with the influenza vaccine. Follow-up appointments are scheduled for depression and substance abuse assessment. Lifestyle modifications, including smoking cessation, reduced alcohol intake, and dietary improvements, are crucial for the patient's overall health.",
      "validatedTasksForUser": [
        {
          "id": "1a2b3c4d5e6f7g8h9i0j",
          "task": "Start taking prescribed medications",
          "status": "pending",
          "note": ""
        },
        {
          "id": "2b3c4d5e6f7g8h9i0j1a",
          "task": "Get recommended immunizations",
          "status": "pending",
          "note": ""
        },
        {
          "id": "3c4d5e6f7g8h9i0j1a2b",
          "task": "Follow up for depression and substance use assessment",
          "status": "pending",
          "note": ""
        },
        {
          "id": "4d5e6f7g8h9i0j1a2b3c",
          "task": "Adopt healthy lifestyle changes",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Start taking Clopidogrel 75 MG Oral Tablet, as prescribed by the doctor.",
        "Start taking Simvastatin 20 MG Oral Tablet, as prescribed by the doctor.",
        "Start taking Amlodipine 5 MG Oral Tablet, as prescribed by the doctor.",
        "Start taking Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray, as prescribed by the doctor.",
        "Schedule an appointment to get the influenza vaccine.",
        "Attend the scheduled follow-up appointments for depression screening and substance abuse assessment.",
        "For a healthy lifestyle, consider quitting smoking, reducing alcohol intake, and improving dietary habits."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes full-time employment, drug misuse, and generalized anxiety disorder. Test results indicate elevated creatinine, calcium, and glucose levels, as well as abnormal PHQ-2 and DAST-10 scores.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed Clopidogrel, Simvastatin, Amlodipine, and Nitroglycerin. Additionally, you received the influenza vaccine. The PHQ-2 and DAST-10 screenings have been conducted for depression and substance abuse assessment.</p><h2>Advice and Recommendations</h2><p>It is recommended to follow-up for depression and substance use assessment. Lifestyle changes, including quitting smoking, reducing alcohol consumption, and improving dietary habits, are crucial for your well-being.</p></section>",
      "validatedShortSummary": "You have been prescribed medications for your cardiovascular health and advised to get immunized. Follow-up appointments are scheduled for depression and substance use assessment. Lifestyle changes can help improve your overall well-being.",
      "validatedDoctorSummary": "The patient presented with findings of full-time employment, drug misuse, and generalized anxiety disorder. Test results revealed elevated creatinine, calcium, and glucose levels, as well as abnormal PHQ-2 and DAST-10 scores. The treatment plan includes Clopidogrel, Simvastatin, Amlodipine, and Nitroglycerin, along with the influenza vaccine. Follow-up appointments are scheduled for depression and substance abuse assessment. Lifestyle modifications, including smoking cessation, reduced alcohol intake, and dietary improvements, are crucial for the patient's overall health."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984ac",
      "dateStart": "1999-06-04",
      "dateEnd": "1999-06-04",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": "PCP58532",
      "resources": {
        "Labs": [
          "a2210115-ace6-c0ae-e390-875cff774872",
          "6ab7b363-f3ea-3b49-1ee4-6422187c3447",
          "70d9532b-c2bc-31e7-1212-3d342373d561",
          "b125e814-87d6-1667-51a2-b92e0bf943e3",
          "3223e895-7da6-df20-5043-63574a2ba50a",
          "2cd6f306-e94f-20c1-89a7-8e17b2377134",
          "89c32d67-b20c-f2a0-f212-528ec771dc93",
          "bbc9bc62-7139-ce76-e5eb-4a30f0429fa4",
          "a40358bc-08fd-ac6b-b35e-5ebed86b6fa3",
          "a53851b5-7476-5b56-0475-2521e966e6e8",
          "8530ef56-f789-87e5-17fd-9ed0d7eccb4d",
          "fb846bc3-ee8a-c14b-b6e5-6869c6044d84",
          "3ab6ce61-517a-6d15-c4de-01b680926a85"
        ],
        "Vitals": [
          "31c2bbcf-49bc-2b8c-4319-2fd6185a10ba",
          "bdc0b291-e2f2-323e-6693-e775a3214636",
          "a1b77116-e2fa-1801-9643-4b02a2da6eaa",
          "88a218f0-92a6-c591-275f-70fe827d420e",
          "ff4dcd3b-4531-d7af-4fa6-37f69e7931bf",
          "87027b15-ca8b-a168-a10d-8eaf8377e6bf"
        ],
        "Condition": ["fce9d7a7-6ad7-c506-5d89-d7caaa9fee2f"],
        "Encounter": ["68776a69-f2f6-ffd2-b8b4-dcc240cf38c3"],
        "Procedure": [
          "b8885c65-3c99-9fb6-f763-da1dc81c7098",
          "036c68f7-df89-f65e-8b3c-75ff3f07883d",
          "df9f39ad-8931-42c5-3eff-01ba2f3b18b4",
          "905fbd23-55d5-4c1f-42d6-eba3a6295dd5",
          "82b319e3-6a5e-846b-8e83-f61e8be09153",
          "8395552d-7193-21e7-5b52-45fb6ac6e355"
        ],
        "MedicationRequest": [
          "2cc721fa-2765-dbc6-401a-7318f9c4e845",
          "34155db3-6409-489c-1129-e62665456680",
          "5384f46a-b2e3-c92a-4e9a-d7954f97f9ac",
          "4cb210d4-6f04-1458-795c-15817950db0e"
        ],
        "Immunization": ["4b0273d3-483c-b74c-2742-71014204a575"],
        "DiagnosticReport": [
          "a0861a0a-2526-93f0-dccf-4bbb64b519d9",
          "77957c39-2954-6f9a-f103-0924546c9c28",
          "3b837ecb-7cae-27d8-dfa3-04ac888811ee",
          "66e2e80f-c16c-c9a8-a798-211a1ea3aeb3",
          "9f0a9b93-220c-e11a-cdde-f40b1057546f"
        ],
        "DocumentReference": ["39bbbbf2-7a83-97d5-6ec7-ddfe2dd7a8e5"]
      },
      "newDocs": [
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 103.83,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 25.9,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 89,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1999-06-04",
          "startDate": "1999-06-04",
          "endDate": "1999-06-04",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 30.12,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1999-06-04",
          "endDate": "1999-06-04",
          "type": "General examination of patient (procedure)"
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 13,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 104.2,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 1.36,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 1,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 9.72,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 16.51,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 139.56,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 4.22,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1999-06-04",
          "endDate": "1999-06-04",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1999-06-04",
          "endDate": "1999-06-04",
          "display": "Medication reconciliation (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1999-06-04",
          "endDate": "1999-06-04",
          "display": "Depression screening (procedure)"
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 186.87,
          "display": "Cholesterol [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 64.54,
          "display": "Cholesterol in HDL [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 98.08,
          "display": "Cholesterol in LDL [Mass/volume] in Serum or Plasma by Direct assay",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 6.33,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 86.95,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1999-06-04",
          "endDate": "1999-06-04",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "startDate": "1999-06-04",
          "resourceType": "Labs",
          "result": 121.23,
          "display": "Triglyceride [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1999-06-04",
          "category": null,
          "display": "Clopidogrel 75 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1999-06-04",
          "endDate": "1999-06-04",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "1999-06-04",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1999-06-04",
          "endDate": "1999-06-04",
          "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1999-06-04",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1999-06-04",
          "result": "urn:uuid:fb846bc3-ee8a-c14b-b6e5-6869c6044d84",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1999-06-04",
          "result": "urn:uuid:bbc9bc62-7139-ce76-e5eb-4a30f0429fa4",
          "display": "Lipid Panel",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1999-06-04",
          "result": "urn:uuid:bd203e16-a630-8ad3-b405-3626f71eb303",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1999-06-04",
          "result": null,
          "display": "History and physical note",
          "data": "\n1999-06-04\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 46 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Blue Cross Blue Shield.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- medication reconciliation (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n- assessment of substance use (procedure)\n- assessment using alcohol use disorders identification test - consumption (procedure)\nThe patient was prescribed the following medications:\n- clopidogrel 75 mg oral tablet\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n- amlodipine 5 mg oral tablet\n"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1999-06-04",
          "result": "urn:uuid:5900dac6-c80d-f830-fc6e-63a5b0a53c78",
          "display": "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          "data": null
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1999-06-04",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1999-06-04",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1999-06-04",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take Clopidogrel 75 MG oral tablet once daily",
        "Use Nitroglycerin 0.4 MG/ACTUAT mucosal spray as needed for chest pain",
        "Take Simvastatin 20 MG oral tablet once daily",
        "Take Amlodipine 5 MG oral tablet once daily",
        "Follow up with doctor in 3 months for reevaluation"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with full-time employment. Your lab results indicate abnormal levels of Chloride, Carbon Dioxide, and Cholesterol. Your vitals and BMI are within the normal range.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed Clopidogrel 75 MG oral tablet, Nitroglycerin 0.4 MG/ACTUAT mucosal spray, Simvastatin 20 MG oral tablet, and Amlodipine 5 MG oral tablet. Your recent lab results and diagnostic reports indicate the need for these medications.</p><h2>Advice and Recommendations</h2><p>It is advised to follow the medication instructions provided and schedule a follow-up with your doctor in 3 months for reevaluation. Additionally, monitor your symptoms and use Nitroglycerin as needed for chest pain.</p></section>",
      "shortSummary": "You have been diagnosed with full-time employment. You have been prescribed medications including Clopidogrel, Nitroglycerine, Simvastatin, and Amlodipine. Follow the medication instructions and schedule a follow-up in 3 months.",
      "doctorSummary": "Patient Abdul218, a 46-year-old non-hispanic male, presented with a history of full-time employment, concussion, limited social contact, viral sinusitis, substance misuse, and stress. Lab results show abnormal Chloride, Carbon Dioxide, and Cholesterol levels. Prescribed medications include Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine. Follow-up in 3 months for reevaluation.",
      "validatedTasksForUser": [
        {
          "id": "5f3de53c7b2e297c925c3b5c",
          "task": "Take Clopidogrel 75 MG oral tablet once daily",
          "status": "pending",
          "note": ""
        },
        {
          "id": "2c7b8d6a3e55a4b879c3f5d5",
          "task": "Use Nitroglycerin 0.4 MG/ACTUAT mucosal spray as needed for chest pain",
          "status": "pending",
          "note": ""
        },
        {
          "id": "4bc2e3a6d5e7f5c9a854a7c3",
          "task": "Take Simvastatin 20 MG oral tablet once daily",
          "status": "pending",
          "note": ""
        },
        {
          "id": "7a8b6c9a5d3e4a2f8c5e5d7b",
          "task": "Take Amlodipine 5 MG oral tablet once daily",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Take Clopidogrel 75 MG oral tablet once daily",
        "Use Nitroglycerin 0.4 MG/ACTUAT mucosal spray as needed for chest pain",
        "Take Simvastatin 20 MG oral tablet once daily",
        "Take Amlodipine 5 MG oral tablet once daily",
        "Follow up with the doctor in 3 months for reevaluation"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with full-time employment. Your lab results indicate abnormal levels of Chloride, Carbon Dioxide, and Cholesterol. Your vitals and BMI are within the normal range.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed Clopidogrel 75 MG oral tablet, Nitroglycerin 0.4 MG/ACTUAT mucosal spray, Simvastatin 20 MG oral tablet, and Amlodipine 5 MG oral tablet. Your recent lab results and diagnostic reports indicate the need for these medications.</p><h2>Advice and Recommendations</h2><p>It is advised to follow the medication instructions provided and schedule a follow-up with your doctor in 3 months for reevaluation. Additionally, monitor your symptoms and use Nitroglycerin as needed for chest pain.</p></section>",
      "validatedShortSummary": "You have been diagnosed with full-time employment. You have been prescribed medications including Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine. Follow the medication instructions and schedule a follow-up in 3 months.",
      "validatedDoctorSummary": "Patient Abdul218, a 46-year-old non-hispanic male, presented with a history of full-time employment, concussion, limited social contact, viral sinusitis, substance misuse, and stress. Lab results show abnormal Chloride, Carbon Dioxide, and Cholesterol levels. Prescribed medications include Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine. Follow-up in 3 months for reevaluation."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984c7",
      "dateStart": "1997-05-23T04:29:47-04:00",
      "dateEnd": "1997-05-23T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["2dba853c-6a95-0d47-fa5f-27042ebb70f9"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1997-05-23T04:29:47-04:00",
          "endDate": "1997-05-23T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "430193006",
              "display": "Medication reconciliation (procedure)"
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "710841007",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "713106006",
              "display": "Screening for drug abuse (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984aa",
      "dateStart": "1997-06-12",
      "dateEnd": "1997-06-12",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for symptom",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": null,
      "resources": {
        "DiagnosticReport": ["c4e687ab-dc99-5f98-d028-b3bfd59a54bc"],
        "Encounter": ["e760b47f-956a-1ce3-aa7e-d5aa2971b5dd"],
        "Condition": ["7aa80f52-4d76-792b-fc35-7fde90cddd46"],
        "DocumentReference": ["4f9e05b5-eae0-9ffa-ca3b-b20f152af814"]
      },
      "newDocs": [
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1997-06-12",
          "result": null,
          "display": "History and physical note",
          "data": "\n1997-06-12\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 44 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with viral sinusitis (disorder). \n\n## Plan\n\n"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "1997-06-12",
          "endDate": "1997-06-12",
          "type": "Encounter for symptom"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1997-06-12",
          "startDate": "1997-06-12",
          "endDate": "1997-06-12",
          "verificationStatus": "confirmed",
          "display": "Viral sinusitis (disorder)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "1997-06-12",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take amlodipine 5 mg oral tablet once daily",
        "Take simvastatin 20 mg oral tablet once daily",
        "Take clopidogrel 75 mg oral tablet once daily",
        "Use nitroglycerin 0.4 mg/actuat mucosal spray as needed for chest pain"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>You have been diagnosed with viral sinusitis. No specific labs were mentioned in the document.</p><h2>Treatment and Prescriptions:</h2><p>You have been prescribed amlodipine 5 mg, simvastatin 20 mg, clopidogrel 75 mg, and nitroglycerin 0.4 mg/actuat mucosal spray.</p><h2>Advice and Recommendations:</h2><p>It is important to take the prescribed medications as directed. In addition, use nitroglycerin spray as needed for chest pain. Rest, stay hydrated, and avoid smoking and alcohol consumption. Follow-up with your healthcare provider if symptoms persist or worsen.</p></section>",
      "shortSummary": "You have been diagnosed with viral sinusitis. Please take the prescribed medications as directed and use nitroglycerin spray as needed for chest pain.",
      "doctorSummary": "Patient Abdul218, a 44-year-old non-hispanic black male, presented with viral sinusitis. He has a history of concussion, limited social contact, and reports of violence in the environment. He is an active smoker and alcoholic, with a high socioeconomic background. Prescribed amlodipine 5 mg, simvastatin 20 mg, clopidogrel 75 mg, and nitroglycerin 0.4 mg/actuat mucosal spray. Advice to rest, stay hydrated, avoid smoking and alcohol, and follow-up if symptoms persist.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Take amlodipine 5 mg oral tablet once daily",
        "Take simvastatin 20 mg oral tablet once daily",
        "Take clopidogrel 75 mg oral tablet once daily",
        "Use nitroglycerin 0.4 mg/actuat mucosal spray as needed for chest pain"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>You have been diagnosed with viral sinusitis. No specific labs were mentioned in the document.</p><h2>Treatment and Prescriptions:</h2><p>You have been prescribed amlodipine 5 mg, simvastatin 20 mg, clopidogrel 75 mg, and nitroglycerin 0.4 mg/actuat mucosal spray.</p><h2>Advice and Recommendations:</h2><p>It is important to take the prescribed medications as directed. In addition, use nitroglycerin spray as needed for chest pain. Rest, stay hydrated, and avoid smoking and alcohol consumption. Follow-up with your healthcare provider if symptoms persist or worsen.</p></section>",
      "validatedShortSummary": "You have been diagnosed with viral sinusitis. Please take the prescribed medications as directed and use nitroglycerin spray as needed for chest pain.",
      "validatedDoctorSummary": "Patient Abdul218, a 44-year-old non-hispanic black male, presented with viral sinusitis. He has a history of concussion, limited social contact, and reports of violence in the environment. He is an active smoker and alcoholic, with a high socioeconomic background. Prescribed amlodipine 5 mg, simvastatin 20 mg, clopidogrel 75 mg, and nitroglycerin 0.4 mg/actuat mucosal spray. Advice to rest, stay hydrated, avoid smoking and alcohol, and follow-up if symptoms persist."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984c8",
      "dateStart": "1997-06-12T14:29:47-04:00",
      "dateEnd": "1997-06-12T14:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["5eb83daa-89e9-1e07-b3dc-d55ddc072e59"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1997-06-12T14:29:47-04:00",
          "endDate": "1997-06-12T14:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185345009",
              "display": null
            },
            {
              "system": "sct",
              "code": "444814009",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984c6",
      "dateStart": "1996-10-03T07:29:47-04:00",
      "dateEnd": "1996-10-03T07:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["482b3806-c057-e43d-4e01-36b4f0195029"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1996-10-03T07:29:47-04:00",
          "endDate": "1996-10-03T07:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185345009",
              "display": null
            },
            {
              "system": "sct",
              "code": "444814009",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984c5",
      "dateStart": "1996-05-17T04:29:47-04:00",
      "dateEnd": "1996-05-17T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["7fc35661-33d0-beba-e5e8-acc4a5dadd2a"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1996-05-17T04:29:47-04:00",
          "endDate": "1996-05-17T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "430193006",
              "display": "Medication reconciliation (procedure)"
            },
            {
              "system": "sct",
              "code": "160904001",
              "display": null
            },
            {
              "system": "sct",
              "code": "423315002",
              "display": null
            },
            {
              "system": "sct",
              "code": "706893006",
              "display": null
            },
            {
              "system": "sct",
              "code": "710841007",
              "display": null
            },
            {
              "system": "sct",
              "code": "866148006",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "763302001",
              "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984a9",
      "dateStart": "1997-05-23",
      "dateEnd": "1997-05-23",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": "PCP58532",
      "resources": {
        "Encounter": ["da12f168-ca21-1de6-8d18-00ab4e57fec8"],
        "Labs": [
          "00e9fdaf-bb23-798d-29c1-fff7b09e2a01",
          "afc48c7f-e56d-daee-d2a2-47acfb4c8850",
          "321dfe84-c3b0-4601-a4a7-8f6583eecfb0",
          "7ad50cb7-a65d-f002-4bbf-8cab7bec57cc",
          "ad729ec7-f7e4-df33-f062-3ad4f38ce730",
          "10e3a15c-8e1b-5eb5-e2ee-15b55d1a0349",
          "92869ba2-b6a5-46ac-8ace-5711e5660867",
          "811722d9-87f9-5b0f-b26f-c8a991b0dc74",
          "ffa9e83e-29a6-4de1-3783-7a0e68c402b0",
          "0a3ba604-7393-54ea-fa47-77e38dcf2e7f",
          "1e89300e-9e00-d720-b8a7-69c86abe89ce",
          "3cf4af12-6b2a-ddad-b5c2-2df2edfcbd17",
          "10be10bc-4a86-df29-8951-13f53dca8bbd",
          "86c056ed-4207-8946-d8c4-b4ac88231646",
          "2c9ea667-d5a8-e9fc-c022-7cf40987a325",
          "d3526c60-a44a-dea4-6045-41d0f377ff9d",
          "7025e8d1-8cf9-b69c-0453-6b211c66bd97",
          "ab8fdc8a-5217-9bcd-911a-c41fe081a6a9",
          "d61e6543-2fdd-fa7c-40b0-dd2991a4e931",
          "0701c01a-4a04-1834-ab84-9e8d7a5f254d"
        ],
        "Condition": ["0ee32469-a905-08ab-5acd-f30a93af95fb"],
        "Vitals": [
          "4c15efc5-46b0-1c94-27a6-7e8232093a94",
          "b1c56129-c7ea-1411-6b5d-5207691405fa",
          "1c90bbad-21da-2360-081c-e88bda5b946a",
          "9e077113-efdb-d875-fbfe-9e5f26c8f16d",
          "24b4de3c-d9c4-c224-e316-69ed76e4d603",
          "74e6ee01-0f81-67b7-3ebd-304e4acda6cf"
        ],
        "Procedure": [
          "7d23a025-cf43-0392-e967-4ff5f80daf2b",
          "c61a26f1-78b4-ae2f-22e2-40ec1a40848a",
          "7da04e1d-822b-c537-35e7-bc3ce09513d5",
          "95002cd3-6ade-5faa-138f-343c32bf9fb4",
          "25f782d6-3212-a3d6-c291-8617de3cd84f",
          "193c2f66-a7fa-7565-5151-afa6125e0288",
          "7ca81107-3224-9e27-54ff-6f8b00390cac"
        ],
        "MedicationRequest": [
          "796d2860-2b9a-c6f3-d009-163de320d2aa",
          "8f39b706-030a-561a-b22b-3c59fb235995",
          "613a7b32-21d2-2664-f741-79be5d26f410",
          "c5eaa9cf-d99b-824e-bbbe-4853904cb9b9",
          "5b29fff1-26ff-963c-185f-d0919fbb3d52"
        ],
        "Immunization": ["3c5ac19e-3a7a-4b41-726c-461e5d6f9e70"],
        "DiagnosticReport": [
          "705346ff-22db-5499-6e9c-947893a7ab5e",
          "b2189080-9df6-4690-5f1a-b57cc53f479a",
          "5541abb5-fcde-ef9c-0ca2-5b187f959d69",
          "eef65442-2187-07ad-de46-b7a1d4414a71",
          "b3e79c8d-ebf5-6bf0-ca5a-252589b3ad75",
          "b3b838ac-1fa2-9893-862e-cd7e9825152e"
        ],
        "DocumentReference": ["6ffe36f5-6618-ff6c-ba64-cc1a7e15d4cc"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1997-05-23",
          "endDate": "1997-05-23",
          "type": "General examination of patient (procedure)"
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 1.37,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1997-05-23",
          "startDate": "1997-05-23",
          "endDate": "1997-05-23",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 29.71,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 13.67,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 2,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 102.8,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 4.91,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 70,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 12,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 9.08,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 94.53,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 143.75,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 207.89,
          "display": "Platelets [#/volume] in Blood by Automated count",
          "unit": "10*3/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 432.81,
          "display": "Platelet distribution width [Entitic volume] in Blood by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 110.08,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 27.18,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 5.87,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 81.021,
          "display": "MCV [Entitic volume] by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 41.413,
          "display": "Erythrocyte distribution width [Entitic volume] by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 45.855,
          "display": "Hematocrit [Volume Fraction] of Blood by Automated count",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 30.874,
          "display": "MCH [Entitic mass] by Automated count",
          "unit": "pg",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 16.49,
          "display": "Hemoglobin [Mass/volume] in Blood",
          "unit": "g/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 34.976,
          "display": "MCHC [Mass/volume] by Automated count",
          "unit": "g/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1997-05-23",
          "endDate": "1997-05-23",
          "display": "Assessment of anxiety (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1997-05-23",
          "endDate": "1997-05-23",
          "display": "Medication reconciliation (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1997-05-23",
          "endDate": "1997-05-23",
          "display": "Depression screening (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1997-05-23",
          "endDate": "1997-05-23",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1997-05-23",
          "endDate": "1997-05-23",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1997-05-23",
          "category": null,
          "display": "Clopidogrel 75 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1997-05-23",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1997-05-23",
          "category": null,
          "display": "Clopidogrel 75 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1997-05-23",
          "endDate": "1997-05-23",
          "display": "Screening for drug abuse (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1997-05-23",
          "endDate": "1997-05-23",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 10.446,
          "display": "Platelet mean volume [Entitic volume] in Blood by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "1997-05-23",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1997-05-23",
          "result": "urn:uuid:ad729ec7-f7e4-df33-f062-3ad4f38ce730",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1997-05-23",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1997-05-23",
          "result": "urn:uuid:9690696f-7091-f41a-e935-25090726c873",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1997-05-23",
          "result": null,
          "display": "History and physical note",
          "data": "\n1997-05-23\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 44 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- medication reconciliation (procedure)\n- assessment of anxiety (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n- assessment of substance use (procedure)\n- screening for drug abuse (procedure)\nThe patient was prescribed the following medications:\n- clopidogrel 75 mg oral tablet\n- clopidogrel 75 mg oral tablet\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n- amlodipine 5 mg oral tablet\n"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1997-05-23",
          "result": "urn:uuid:2f50e9b0-1fe0-e3ec-423a-49962a350539",
          "display": "Drug Abuse Screening Test-10 [DAST-10]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1997-05-23",
          "result": "urn:uuid:d61e6543-2fdd-fa7c-40b0-dd2991a4e931",
          "display": "Complete blood count (hemogram) panel - Blood by Automated count",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1997-05-23",
          "result": "urn:uuid:75ad76c1-5f0a-df7c-6fcb-e52e49ccc220",
          "display": "Generalized anxiety disorder 7 item (GAD-7)",
          "data": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1997-05-23",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1997-05-23",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 6.6153,
          "display": "Leukocytes [#/volume] in Blood by Automated count",
          "unit": "10*3/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1997-05-23",
          "resourceType": "Labs",
          "result": 5.3721,
          "display": "Erythrocytes [#/volume] in Blood by Automated count",
          "unit": "10*6/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take 75 MG Clopidogrel Oral Tablet as prescribed",
        "Use 0.4 MG/ACTUAT Nitroglycerin Mucosal Spray as needed for chest pain",
        "Take 75 MG Clopidogrel Oral Tablet as prescribed",
        "Take 20 MG Simvastatin Oral Tablet once daily",
        "Take 5 MG Amlodipine Oral Tablet once daily",
        "Schedule a follow-up appointment for drug abuse screening results"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes full-time employment-related stress and associated health issues. Lab results indicate elevated creatinine, urea nitrogen, and potassium levels, highlighting potential kidney and cardiovascular strain.</p><h2>Treatment and Prescriptions</h2><p>The treatment plan involves initiating a medication regimen, including Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine, to manage cardiovascular risks. Significant test results such as Complete Blood Count and Basic Metabolic Panel are crucial in monitoring your condition.</p><h2>Advice and Recommendations</h2><p>It's crucial to attend scheduled medication reconciliation procedures and follow up on drug abuse screening results for comprehensive care. Additionally, ensure timely administration of prescribed medications and consider lifestyle adjustments for optimal health.</p></section>",
      "shortSummary": "You received a general examination and assessment of various health aspects. You were diagnosed with full-time employment-related stress and prescribed medications for cardiovascular health. Follow up on drug abuse screening and medication regimen is essential.",
      "doctorSummary": "Patient, a 44-year-old non-hispanic black male, presented with a history of full-time employment-related stress, viral sinusitis, and a significant social background. Lab results revealed elevated creatinine, urea nitrogen, and potassium levels, indicating potential kidney and cardiovascular strain. The patient was prescribed a regimen including Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine. Follow-up for drug abuse screening is recommended along with scheduled medication reconciliation.",
      "validatedTasksForUser": [
        {
          "id": "60abba97c3e5560015f3e6f7",
          "task": "Attend scheduled medication reconciliation procedure",
          "status": "pending",
          "note": ""
        },
        {
          "id": "60abba97c3e5560015f3e6f8",
          "task": "Follow up for drug abuse screening results",
          "status": "pending",
          "note": ""
        },
        {
          "id": "60abba97c3e5560015f3e6f9",
          "task": "Initiate medication regimen as prescribed",
          "status": "pending",
          "note": ""
        },
        {
          "id": "60abba97c3e5560015f3e6fa",
          "task": "Follow up on influenza immunization",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Take 75 MG Clopidogrel Oral Tablet as prescribed",
        "Use 0.4 MG/ACTUAT Nitroglycerin Mucosal Spray as needed for chest pain",
        "Take 20 MG Simvastatin Oral Tablet once daily",
        "Take 5 MG Amlodipine Oral Tablet once daily",
        "Schedule a follow-up appointment for drug abuse screening results"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes full-time employment-related stress and associated health issues. Lab results indicate elevated creatinine, urea nitrogen, and potassium levels, highlighting potential kidney and cardiovascular strain.</p><h2>Treatment and Prescriptions</h2><p>The treatment plan involves initiating a medication regimen, including Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine, to manage cardiovascular risks. Significant test results such as Complete Blood Count and Basic Metabolic Panel are crucial in monitoring your condition.</p><h2>Advice and Recommendations</h2><p>It's crucial to attend scheduled medication reconciliation procedures and follow up on drug abuse screening results for comprehensive care. Additionally, ensure timely administration of prescribed medications and consider lifestyle adjustments for optimal health.</p></section>",
      "validatedShortSummary": "You received a general examination and assessment of various health aspects. You were diagnosed with full-time employment-related stress and prescribed medications for cardiovascular health. Follow up on drug abuse screening and medication regimen is essential.",
      "validatedDoctorSummary": "Patient, a 44-year-old non-hispanic black male, presented with a history of full-time employment-related stress, viral sinusitis, and a significant social background. Lab results revealed elevated creatinine, urea nitrogen, and potassium levels, indicating potential kidney and cardiovascular strain. The patient was prescribed a regimen including Clopidogrel, Nitroglycerin, Simvastatin, and Amlodipine. Follow-up for drug abuse screening is recommended along with scheduled medication reconciliation."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984a7",
      "dateStart": "1996-05-17",
      "dateEnd": "1996-05-17",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": "PCP58532",
      "resources": {
        "Encounter": ["07358761-e0ea-6c55-746e-72c9e1039d23"],
        "Condition": [
          "9af65e77-b3f5-481a-4cd9-38d6b5e107da",
          "ed18ee73-2b7b-ab03-e42b-61ebbfa5f590",
          "03f0b7f4-590d-3ffe-aeac-75054d9064d3"
        ],
        "Vitals": [
          "2cb786a0-7d18-744c-529e-e85f328b1f32",
          "7e43b522-9b51-052f-b52a-2f1a5846e011",
          "b7102d78-6b05-34e1-4525-7d1911be94bd",
          "004dc3b6-b9c0-9879-4e53-2da2959e37b4",
          "d6ea4721-ef3c-1099-ac3f-35f6101eafdd",
          "9b8da966-715c-dac8-d870-652bf93709bf"
        ],
        "Labs": [
          "d753c5fa-9b09-455e-273e-d3fb5a017492",
          "fdcfa8d8-caa4-9472-0866-1005454dd0be",
          "138dcbd5-ee53-b328-f1f1-698c30255dc8",
          "5757463b-6a7b-eec1-5d15-bd42e84cdca8",
          "ba670d4a-8f79-ba66-01ff-ced17b1aa2b3",
          "da35fc3e-8f32-65a3-9a36-d156e1b944bf",
          "20b05eac-645f-3a9d-9eb2-f8cf2ca8958b",
          "f4dce211-7505-de20-fd75-015026458f67",
          "72036fca-d2a2-de5c-b01b-19f7f0b3fdeb",
          "2e3545c3-afdf-e675-a092-11f7cdcc0a92",
          "085bd887-7cc9-83c9-e988-73350401ce00",
          "1be77d45-58da-23bd-e5c3-b4a4ce5c1504",
          "fac8c6f1-cbcd-d5a6-0d76-8b16fc84aab6"
        ],
        "Procedure": [
          "5eec1c58-5dd4-11fb-f208-3e3768f90978",
          "3e5f4ba4-9e71-3360-1258-a2f67cbea111",
          "5b0e7474-dd2a-06e6-eb60-84b89be23d01",
          "eab55eda-6f41-44af-aeab-e68578ff5e2f",
          "718347e2-837b-6f4e-f334-204125327e11",
          "b3a77fc6-e736-95a9-b030-5048a5c129a4",
          "4b422683-67ab-de45-6786-afb13ff086e4",
          "ec0a5310-b8a6-c942-3379-dc942f708967"
        ],
        "MedicationRequest": [
          "e7aa2bf5-aced-6484-5836-99eaa64cebd8",
          "0dcf34b6-f6a3-e387-762f-387233837be5",
          "0adeb35c-15d1-a036-5464-001f7568d58c"
        ],
        "DiagnosticReport": [
          "514818e4-a477-7d39-e64e-32fb555ef855",
          "1adb4626-6bc4-0726-97ef-403914398b3f",
          "c5d7a15f-5997-51ce-fd4c-6b1afb99da0e",
          "2d827e95-343b-0324-d2ab-14de36fe07b0",
          "3014b0c5-93f9-91f2-5b7b-b47261a932f1",
          "bcd2edc6-847a-4607-922c-73283cbb4540",
          "d0bb345b-0c22-23df-b67d-28c9c5419162"
        ],
        "Immunization": [
          "8c657d3a-b091-c10a-b88c-f1964dedb2e1",
          "420cdfdc-76f4-f951-8a0b-8ae21fb0bf4b"
        ],
        "DocumentReference": ["6f8866d4-0a47-3904-5f51-805efb875db9"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1996-05-17",
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "verificationStatus": "confirmed",
          "display": "Part-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1996-05-17",
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "verificationStatus": "confirmed",
          "display": "Limited social contact (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1996-05-17",
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "verificationStatus": "confirmed",
          "display": "Victim of intimate partner abuse (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 8.54,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 137.54,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 4.03,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 104.62,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 22.19,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 65.27,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 3,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 1.36,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 100.6,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 13,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 82,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 29.08,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 10.38,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 190.63,
          "display": "Cholesterol [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 123.94,
          "display": "Triglyceride [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 102.43,
          "display": "Cholesterol in LDL [Mass/volume] in Serum or Plasma by Direct assay",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1996-05-17",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 6.13,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "display": "Medication reconciliation (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "display": "Screening for domestic abuse (procedure)"
        },
        {
          "startDate": "1996-05-17",
          "resourceType": "Labs",
          "result": 63.41,
          "display": "Cholesterol in HDL [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "display": "Assessment of anxiety (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "display": "Depression screening (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1996-05-17",
          "endDate": "1996-05-17",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1996-05-17",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1996-05-17",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1996-05-17",
          "result": "urn:uuid:72036fca-d2a2-de5c-b01b-19f7f0b3fdeb",
          "display": "Lipid Panel",
          "data": null
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "1996-05-17",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "1996-05-17",
          "display": "Hep A, adult"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1996-05-17",
          "result": "urn:uuid:847a997d-b0fe-23db-49d3-2655552ba4d7",
          "display": "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1996-05-17",
          "result": "urn:uuid:da35fc3e-8f32-65a3-9a36-d156e1b944bf",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1996-05-17",
          "result": "urn:uuid:a8fd9860-16fd-5051-110d-fdf1081046bf",
          "display": "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1996-05-17",
          "result": null,
          "display": "History and physical note",
          "data": "\n1996-05-17\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 43 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Blue Cross Blue Shield.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with part-time employment (finding), limited social contact (finding), victim of intimate partner abuse (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free, hep a, adult. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- medication reconciliation (procedure)\n- assessment of anxiety (procedure)\n- screening for domestic abuse (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n- assessment of substance use (procedure)\n- assessment using alcohol use disorders identification test - consumption (procedure)\nThe patient was prescribed the following medications:\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n- amlodipine 5 mg oral tablet\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1996-05-17",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1996-05-17",
          "result": "urn:uuid:a1740476-acf9-2472-aeac-93fe4589d676",
          "display": "Generalized anxiety disorder 7 item (GAD-7)",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1996-05-17",
          "result": "urn:uuid:94b2cc02-61b8-6df3-4249-b1e1963a459a",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take Simvastatin 20 MG Oral Tablet daily as prescribed.",
        "Take Amlodipine 5 MG Oral Tablet daily as prescribed.",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain as instructed by the healthcare provider.",
        "Schedule a follow-up appointment for a comprehensive evaluation."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with part-time employment, limited social contact, and intimate partner abuse.</p><h2>Treatment and Prescriptions</h2><p>The healthcare provider has prescribed Simvastatin 20 MG Oral Tablet, Amlodipine 5 MG Oral Tablet, and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray. You also received immunizations for influenza and hep a.</p><h2>Advice and Recommendations</h2><p>It is advisable to schedule a follow-up appointment for a comprehensive evaluation. Additionally, consider seeking support from a counselor or therapist for coping strategies. Engage in regular physical activity and adhere to a heart-healthy diet for overall well-being.</p></section>",
      "shortSummary": "You have been diagnosed with part-time employment, limited social contact, and intimate partner abuse. The healthcare provider has prescribed Simvastatin, Amlodipine, and Nitroglycerin. Additionally, you received immunizations for influenza and hep a.",
      "doctorSummary": "The patient, a 43-year-old non-Hispanic black male, has been diagnosed with part-time employment, limited social contact, and intimate partner abuse. The healthcare provider prescribed Simvastatin 20 MG Oral Tablet, Amlodipine 5 MG Oral Tablet, and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray. Immunizations for influenza and hep a were administered. The patient is advised to schedule a follow-up appointment for a comprehensive evaluation and consider seeking support from a counselor or therapist for coping strategies. It is also recommended to engage in regular physical activity and adhere to a heart-healthy diet for overall well-being.",
      "validatedTasksForUser": [
        {
          "id": "5fc9d93751e6860014d81ac8",
          "task": "Schedule a follow-up appointment for a comprehensive evaluation.",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5fc9d93751e6860014d81ac9",
          "task": "Begin taking prescribed medications as directed by the healthcare provider.",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5fc9d93751e6860014d81aca",
          "task": "Consider seeking support from a counselor or therapist for coping strategies.",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5fc9d93751e6860014d81acb",
          "task": "Follow up with healthcare provider for any concerning symptoms or adverse effects of medications.",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5fc9d93751e6860014d81acc",
          "task": "Engage in regular physical activity and adhere to a heart-healthy diet.",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Take Simvastatin 20 MG Oral Tablet daily as prescribed.",
        "Take Amlodipine 5 MG Oral Tablet daily as prescribed.",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain as instructed by the healthcare provider.",
        "Schedule a follow-up appointment for a comprehensive evaluation."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with part-time employment, limited social contact, and intimate partner abuse. Additionally, your vitals and lab results indicate certain fluctuations, including body height, calcium, sodium, potassium, chloride, carbon dioxide, glucose, creatinine, body weight, respiratory rate, heart rate, body mass index, urea nitrogen, cholesterol, triglyceride, cholesterol in LDL, and cholesterol in HDL. You also reported a pain severity score of 3.</p><h2>Treatment and Prescriptions</h2><p>The healthcare provider has prescribed Simvastatin 20 MG Oral Tablet, Amlodipine 5 MG Oral Tablet, and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray. You also received immunizations for influenza and hep a. Your diagnostic reports include a Lipid Panel, Alcohol Use Disorder Identification Test - Consumption, and Basic Metabolic Panel.</p><h2>Advice and Recommendations</h2><p>It is advisable to schedule a follow-up appointment for a comprehensive evaluation. Additionally, consider seeking support from a counselor or therapist for coping strategies. Engage in regular physical activity, adhere to a heart-healthy diet, and monitor vital signs and lab results for your overall well-being.</p></section>",
      "validatedShortSummary": "You have been diagnosed with part-time employment, limited social contact, and intimate partner abuse. The healthcare provider has prescribed Simvastatin, Amlodipine, and Nitroglycerin. Additionally, you received immunizations for influenza and hep a.",
      "validatedDoctorSummary": "The patient, a 43-year-old non-Hispanic black male, has been diagnosed with part-time employment, limited social contact, and intimate partner abuse. The healthcare provider prescribed Simvastatin 20 MG Oral Tablet, Amlodipine 5 MG Oral Tablet, and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray. Immunizations for influenza and hep a were administered. The patient's vitals and lab results indicate fluctuations, including body height, calcium, sodium, potassium, chloride, carbon dioxide, glucose, creatinine, body weight, respiratory rate, heart rate, body mass index, urea nitrogen, cholesterol, triglyceride, cholesterol in LDL, and cholesterol in HDL, as well as a reported pain severity score of 3. Additionally, the patient underwent diagnostic tests including Lipid Panel, Alcohol Use Disorder Identification Test - Consumption, and Basic Metabolic Panel. It is recommended to schedule a follow-up appointment for a comprehensive evaluation, seek support from a counselor or therapist, engage in regular physical activity, adhere to a heart-healthy diet, and monitor vital signs and lab results for overall well-being."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984a8",
      "dateStart": "1996-10-03",
      "dateEnd": "1996-10-03",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for symptom",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": null,
      "resources": {
        "DiagnosticReport": ["7fba6eb7-fc20-82f7-fb3f-5f40a88db742"],
        "Encounter": ["38d4159f-714a-ca7f-3466-61836e530531"],
        "Condition": ["cee0d592-4021-46f5-3d6b-8985e20a8172"],
        "DocumentReference": ["39e5ccae-e02a-eb9a-c3dc-37dfc5e1c2c4"]
      },
      "newDocs": [
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1996-10-03",
          "result": null,
          "display": "History and physical note",
          "data": "\n1996-10-03\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 43 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with viral sinusitis (disorder). \n\n## Plan\n\n"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "1996-10-03",
          "endDate": "1996-10-03",
          "type": "Encounter for symptom"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1996-10-03",
          "startDate": "1996-10-03",
          "endDate": "1996-10-03",
          "verificationStatus": "confirmed",
          "display": "Viral sinusitis (disorder)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "1996-10-03",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take amlodipine 5 mg oral tablet as prescribed",
        "Take simvastatin 20 mg oral tablet as prescribed",
        "Use nitroglycerin 0.4 mg/actuat mucosal spray as needed"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with viral sinusitis. It is a confirmed condition based on the encounter diagnosis.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed amlodipine 5 mg, simvastatin 20 mg, and nitroglycerin 0.4 mg/actuat mucosal spray. Follow the instructions for each medication carefully.</p><h2>Advice and Recommendations</h2><p>Your healthcare provider advises following the prescribed medications, avoiding smoking and alcohol, and taking measures to reduce stress. Follow-up may be recommended based on your response to the treatment.</p></section>",
      "shortSummary": "You have been diagnosed with viral sinusitis. Please take the prescribed medications as directed and use nitroglycerin spray as needed. Follow the lifestyle recommendations outlined by your healthcare provider.",
      "doctorSummary": "The patient, Abdul218, a 43-year-old non-hispanic black male, presented with viral sinusitis. Based on the history and physical note, the patient has a history of part-time employment, concussion, limited social contact, reports of violence, full-time employment, and stress. The patient is an active smoker and alcoholic. The assessment suggests confirming viral sinusitis, and the treatment plan includes amlodipine 5 mg, simvastatin 20 mg, and nitroglycerin 0.4 mg/actuat mucosal spray. Lifestyle modifications, stress reduction, and follow-up based on response are advised.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Take amlodipine 5 mg oral tablet as prescribed",
        "Take simvastatin 20 mg oral tablet as prescribed",
        "Use nitroglycerin 0.4 mg/actuat mucosal spray as needed"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with viral sinusitis. It is a confirmed condition based on the encounter diagnosis.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed amlodipine 5 mg, simvastatin 20 mg, and nitroglycerin 0.4 mg/actuat mucosal spray. Follow the instructions for each medication carefully.</p><h2>Advice and Recommendations</h2><p>Your healthcare provider advises following the prescribed medications, avoiding smoking and alcohol, and taking measures to reduce stress. Follow-up may be recommended based on your response to the treatment.</p></section>",
      "validatedShortSummary": "You have been diagnosed with viral sinusitis. Please take the prescribed medications as directed and use nitroglycerin spray as needed. Follow the lifestyle recommendations outlined by your healthcare provider.",
      "validatedDoctorSummary": "The patient, Abdul218, a 43-year-old non-hispanic black male, presented with viral sinusitis. Based on the history and physical note, the patient has a history of part-time employment, concussion, limited social contact, reports of violence, full-time employment, and stress. The patient is an active smoker and alcoholic. The assessment suggests confirming viral sinusitis, and the treatment plan includes amlodipine 5 mg, simvastatin 20 mg, and nitroglycerin 0.4 mg/actuat mucosal spray. Lifestyle modifications, stress reduction, and follow-up based on response are advised."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984c4",
      "dateStart": "1995-06-27T04:57:44-04:00",
      "dateEnd": "1995-06-27T04:57:44-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["2cbd67d0-fbc2-549e-95b2-3c9f015b604d"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1995-06-27T04:57:44-04:00",
          "endDate": "1995-06-27T04:57:44-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185349003",
              "display": "Encounter for check up (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984a5",
      "dateStart": "1995-05-12",
      "dateEnd": "1995-05-12",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": "PCP58532",
      "resources": {
        "Encounter": ["164cb2c9-35bd-6dff-3c0a-1be0ae2d68d3"],
        "Condition": ["48b5c7a4-90de-ed22-9d48-b7208e02a953"],
        "Vitals": [
          "5dd8cf01-089b-4a6b-90a2-e9ad17aab6fd",
          "17bdac2b-30b8-68d7-0aff-72dcd0f91782",
          "884957f9-4c2c-22b0-0b79-84b0f1a8aafd",
          "01af6334-9229-eb9e-a593-01c37a0601e7",
          "130ef4f5-eff2-e275-abdf-69fca906c7c5",
          "ae27d382-54a8-88d0-71f6-3433c251d210"
        ],
        "Labs": [
          "88902ede-64a4-795b-db38-b386c8904183",
          "b65e8c7d-b974-67d3-9aa7-58be9cfd65dd",
          "65863971-7cf2-adba-8006-8fe5e0864ed0",
          "6c0d74ff-3fd1-2bae-dfaa-d7e0f1743a21",
          "a5cf17b2-c09e-090f-c141-7e396ec99d87",
          "8c5d769f-f334-51c0-b1e5-ba9601ecffd0",
          "d5361c42-6bd4-e9a9-557f-941b585f5dca",
          "ddc60886-aab5-63a3-f892-dd81e189b769",
          "0e14f6e3-df07-d4ad-dffc-93106c1ec370"
        ],
        "Procedure": [
          "29d41b09-50e8-f343-e174-5c9219b1ab43",
          "6f08e7b8-0b73-a4d8-0d82-4a3cbfad1137",
          "5ff488ca-21ca-4ff5-f4e6-2f9cef73a882",
          "a8cc5744-533c-610a-e8e9-7e3b0b762a63"
        ],
        "MedicationRequest": [
          "d03532ab-bb70-c7c7-937a-41d3ef152b71",
          "47411151-02f2-d77b-b6a1-39024c83a484",
          "4a61a31c-b171-b629-094a-b2484a29d86c"
        ],
        "DiagnosticReport": [
          "a1df5364-2c1b-3d85-ea21-338827c67008",
          "53c66450-50b8-e9cc-5ca1-5d55c9435bfe",
          "08e51cad-fa49-20a8-8a50-61e4b6d39461",
          "05c00beb-dc1f-4cec-710f-c1a5390ab46c"
        ],
        "Immunization": ["0d593a02-02dd-594f-b1a3-79304309fb1c"],
        "DocumentReference": ["f2c7c7cd-67e8-3cc7-df66-e00f65bfd1eb"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1995-05-12",
          "endDate": "1995-05-12",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1995-05-12",
          "startDate": "1995-05-12",
          "endDate": "1995-05-12",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 1,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Labs",
          "result": 1.34,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Labs",
          "result": 9.62,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 78,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 28.44,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Labs",
          "result": 72.88,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 14,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Labs",
          "result": 8.51,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 98.4,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Labs",
          "result": 21.95,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Labs",
          "result": 5.83,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Labs",
          "result": 143.21,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Labs",
          "result": 4.37,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1995-05-12",
          "endDate": "1995-05-12",
          "display": "Screening for drug abuse (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1995-05-12",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1995-05-12",
          "endDate": "1995-05-12",
          "display": "Assessment of anxiety (procedure)"
        },
        {
          "startDate": "1995-05-12",
          "resourceType": "Labs",
          "result": 108.5,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1995-05-12",
          "endDate": "1995-05-12",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1995-05-12",
          "result": "urn:uuid:65863971-7cf2-adba-8006-8fe5e0864ed0",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1995-05-12",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1995-05-12",
          "result": null,
          "display": "History and physical note",
          "data": "\n1995-05-12\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 42 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- assessment of anxiety (procedure)\n- assessment of substance use (procedure)\n- screening for drug abuse (procedure)\nThe patient was prescribed the following medications:\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n- amlodipine 5 mg oral tablet\n"
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "1995-05-12",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1995-05-12",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1995-05-12",
          "result": "urn:uuid:d1995c84-a496-cc19-1cad-b83fa4165727",
          "display": "Drug Abuse Screening Test-10 [DAST-10]",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1995-05-12",
          "endDate": "1995-05-12",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1995-05-12",
          "result": "urn:uuid:1787ac6e-83c1-098e-a1f0-4a6e6442052f",
          "display": "Generalized anxiety disorder 7 item (GAD-7)",
          "data": null
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1995-05-12",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as directed.",
        "Take Amlodipine 5 MG Oral Tablet and Simvastatin 20 MG Oral Tablet as prescribed."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with full-time employment. Your vital signs and lab results show a stable condition with a healthy heart rate, body weight, and normal levels of creatinine, glucose, and other essential components.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray, Amlodipine 5 MG Oral Tablet, and Simvastatin 20 MG Oral Tablet.</p><h2>Advice and Recommendations</h2><p>It is recommended to take the prescribed medications as directed and to follow the lifestyle and social care needs assessment. Regular follow-ups are advised for monitoring your condition.</p></section>",
      "shortSummary": "You have been diagnosed with full-time employment, and your vital signs and labs have been assessed. You have been prescribed Nitroglycerin, Amlodipine, and Simvastatin. Follow the medication directions provided.",
      "doctorSummary": "The patient, a 42-year-old male, presented with a history of full-time employment and various social and health care needs. Lab results indicated stable vital signs and normal levels of creatinine, glucose, and other essential components. The patient was prescribed Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray, Amlodipine 5 MG Oral Tablet, and Simvastatin 20 MG Oral Tablet. Lifestyle and social care assessment was conducted, and the patient was advised to follow up regularly for monitoring.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Take Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as directed.",
        "Take Amlodipine 5 MG Oral Tablet as prescribed.",
        "Take Simvastatin 20 MG Oral Tablet as prescribed."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with full-time employment. Your vital signs and lab results show a stable condition with a healthy heart rate, body weight, and normal levels of creatinine, glucose, and other essential components.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray, Amlodipine 5 MG Oral Tablet, and Simvastatin 20 MG Oral Tablet.</p><h2>Advice and Recommendations</h2><p>It is recommended to take the prescribed medications as directed and to follow the lifestyle and social care assessment. Regular follow-ups are advised for monitoring your condition.</p></section>",
      "validatedShortSummary": "You have been diagnosed with full-time employment, and your vital signs and labs have been assessed. You have been prescribed Nitroglycerin, Amlodipine, and Simvastatin. Follow the medication directions provided.",
      "validatedDoctorSummary": "The patient, a 42-year-old male, presented with a history of full-time employment and various social and health care needs. Lab results indicated stable vital signs and normal levels of creatinine, glucose, and other essential components. The patient was prescribed Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray, Amlodipine 5 MG Oral Tablet, and Simvastatin 20 MG Oral Tablet. Lifestyle and social care assessment was conducted, and the patient was advised to follow up regularly for monitoring."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984c3",
      "dateStart": "1995-05-12T04:29:47-04:00",
      "dateEnd": "1995-05-12T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["fb059837-39e9-d25b-adfd-012365bf505f"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1995-05-12T04:29:47-04:00",
          "endDate": "1995-05-12T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "710841007",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "713106006",
              "display": "Screening for drug abuse (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984a6",
      "dateStart": "1995-06-27",
      "dateEnd": "1995-06-27",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for 'check-up'",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": null,
      "resources": {
        "DocumentReference": ["b7ba6925-dc2f-5456-b8f0-320de1836629"],
        "Encounter": ["13dba121-a5c0-fb44-3b51-79fb03d2fbc0"],
        "DiagnosticReport": ["55e3dd28-e741-3c50-6444-93a07b6b990a"]
      },
      "newDocs": [
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "1995-06-27",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "1995-06-27",
          "endDate": "1995-06-27",
          "type": "Encounter for 'check-up'"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1995-06-27",
          "result": null,
          "display": "History and physical note",
          "data": "\n1995-06-27\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 42 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\n\n\n## Plan\n\n"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Abdul218, a 42-year-old non-hispanic black male, has a history of part-time employment, viral sinusitis, and stress. No current complaints were reported. He has a background of limited social contact and confirmed alcohol use and smoking.</p><h2>Treatment and Prescriptions</h2><p>He is currently prescribed amlodipine 5 mg, simvastatin 20 mg, nitroglycerin 0.4 mg/actuat mucosal spray. No significant test results were mentioned.</p><h2>Advice and Recommendations</h2><p>Abdul218 is advised to follow up for further guidance on lifestyle changes and management of viral sinusitis and stress.</p></section>",
      "shortSummary": "During the check-up visit, Abdul218, a 42-year-old male, was found to have a history of viral sinusitis, stress, and a background of part-time and full-time employment. He reported limited social contact and confirmed alcohol use and smoking. No allergies were recorded, and he is currently taking amlodipine, simvastatin, and nitroglycerin. Further details and guidance will follow.",
      "doctorSummary": "Patient Abdul218, a 42-year-old non-hispanic black male, presented with a history of viral sinusitis, stress, and part-time employment. He acknowledged limited social contact, alcohol use, and smoking. Prescribed amlodipine, simvastatin, and nitroglycerin. No significant results were observed. Advised to follow up for further guidance and management of viral sinusitis and stress.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Abdul218, a 42-year-old non-hispanic black male, has a history of part-time employment, viral sinusitis, and stress. No current complaints were reported. He has a background of limited social contact and confirmed alcohol use and smoking.</p><h2>Treatment and Prescriptions</h2><p>He is currently prescribed amlodipine 5 mg, simvastatin 20 mg, nitroglycerin 0.4 mg/actuat mucosal spray. No significant test results were mentioned.</p><h2>Advice and Recommendations</h2><p>Abdul218 is advised to follow up for further guidance on lifestyle changes and management of viral sinusitis and stress.</p></section>",
      "validatedShortSummary": "During the check-up visit, Abdul218, a 42-year-old male, was found to have a history of viral sinusitis, stress, and a background of part-time and full-time employment. He reported limited social contact and confirmed alcohol use and smoking. No allergies were recorded, and he is currently taking amlodipine, simvastatin, and nitroglycerin. Further details and guidance will follow.",
      "validatedDoctorSummary": "Patient Abdul218, a 42-year-old non-hispanic black male, presented with a history of viral sinusitis, stress, and part-time employment. He acknowledged limited social contact, alcohol use, and smoking. Prescribed amlodipine, simvastatin, and nitroglycerin. No significant results were observed. Advised to follow up for further guidance and management of viral sinusitis and stress."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984c0",
      "dateStart": "1994-05-06T04:29:47-04:00",
      "dateEnd": "1994-05-06T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["28a57713-2917-deb6-d120-f5f80d1d1d93"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1994-05-06T04:29:47-04:00",
          "endDate": "1994-05-06T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "430193006",
              "display": "Medication reconciliation (procedure)"
            },
            {
              "system": "sct",
              "code": "271737000",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984c1",
      "dateStart": "1994-05-06T04:29:47-04:00",
      "dateEnd": "1994-05-06T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["42fcceba-1870-9ea4-5cf7-6c404b348e70"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1994-05-06T04:29:47-04:00",
          "endDate": "1994-05-06T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185347001",
              "display": null
            },
            {
              "system": "sct",
              "code": "14768001",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "423315002",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "713106006",
              "display": "Screening for drug abuse (procedure)"
            },
            {
              "system": "sct",
              "code": "415300000",
              "display": null
            },
            {
              "system": "sct",
              "code": "430193006",
              "display": "Medication reconciliation (procedure)"
            },
            {
              "system": "sct",
              "code": "162676008",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984c2",
      "dateStart": "1995-04-24T05:42:44-04:00",
      "dateEnd": "1995-04-24T05:42:44-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["74b269ac-a1de-333b-e4bf-28991fbe9ff5"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1995-04-24T05:42:44-04:00",
          "endDate": "1995-04-24T05:42:44-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "50849002",
              "display": null
            },
            {
              "system": "sct",
              "code": "62106007",
              "display": "Concussion with no loss of consciousness (disorder)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984a4",
      "dateStart": "1995-04-24",
      "dateEnd": "1995-04-24",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Emergency room admission (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Wilfredo622 Medhurst46",
      "npi2": null,
      "resources": {
        "Condition": ["7a5f1622-3f8b-5674-db03-a15c9f814c73"],
        "Encounter": ["aa016765-0d22-7185-9d49-e0db810d1649"],
        "DiagnosticReport": ["9b2e95b2-891f-585d-2672-57c3f2ff755f"],
        "DocumentReference": ["16225116-6f1b-a350-d817-33af8a1a9096"]
      },
      "newDocs": [
        {
          "resourceType": "Condition",
          "lastUpdated": "1995-04-24",
          "startDate": "1995-04-24",
          "endDate": "1995-04-24",
          "verificationStatus": "confirmed",
          "display": "Concussion with no loss of consciousness (disorder)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Wilfredo622 Medhurst46",
          "location": null,
          "startDate": "1995-04-24",
          "endDate": "1995-04-24",
          "type": "Emergency room admission (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1995-04-24",
          "result": null,
          "display": "History and physical note",
          "data": "\n1995-04-24\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 42 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with concussion with no loss of consciousness. \n\n## Plan\n\nThe patient was placed on a careplan:\n- head injury rehabilitation\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Wilfredo622 Medhurst46",
          "startDate": "1995-04-24",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Follow the head injury rehabilitation care plan.",
        "Take the prescribed medications amlodipine, simvastatin, and nitroglycerin as directed."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis: Concussion with no loss of consciousness. The patient has a history of viral sinusitis, stress, and part-time employment.</p><h2>Treatment and Prescriptions</h2><p>The treatment plan includes head injury rehabilitation. Prescribed medications: amlodipine 5 mg oral tablet, simvastatin 20 mg oral tablet, nitroglycerin 0.4 mg/actuat mucosal spray.</p><h2>Advice and Recommendations</h2><p>Follow the head injury rehabilitation care plan. Lifestyle change: Avoid further head injuries. Medication directions: Take amlodipine, simvastatin, and nitroglycerin as directed.</p></section>",
      "shortSummary": "You have been diagnosed with a concussion and no loss of consciousness. Follow the head injury rehabilitation care plan and take the prescribed medications amlodipine, simvastatin, and nitroglycerin as directed.",
      "doctorSummary": "Patient presented with a confirmed diagnosis of concussion with no loss of consciousness. The treatment plan includes head injury rehabilitation. Prescribed medications are amlodipine 5 mg oral tablet, simvastatin 20 mg oral tablet, and nitroglycerin 0.4 mg/actuat mucosal spray. Patient has a history of viral sinusitis, stress, and part-time employment.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Follow the head injury rehabilitation care plan.",
        "Take the prescribed medications amlodipine, simvastatin, and nitroglycerin as directed."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis: Concussion with no loss of consciousness. The patient has a history of viral sinusitis, stress, and part-time employment.</p><h2>Treatment and Prescriptions</h2><p>The treatment plan includes head injury rehabilitation. Prescribed medications: amlodipine 5 mg oral tablet, simvastatin 20 mg oral tablet, nitroglycerin 0.4 mg/actuat mucosal spray.</p><h2>Advice and Recommendations</h2><p>Follow the head injury rehabilitation care plan. Lifestyle change: Avoid further head injuries. Medication directions: Take amlodipine, simvastatin, and nitroglycerin as directed.</p></section>",
      "validatedShortSummary": "You have been diagnosed with a concussion and no loss of consciousness. Follow the head injury rehabilitation care plan and take the prescribed medications amlodipine, simvastatin, and nitroglycerin as directed.",
      "validatedDoctorSummary": "Patient presented with a confirmed diagnosis of concussion with no loss of consciousness. The treatment plan includes head injury rehabilitation. Prescribed medications are amlodipine 5 mg oral tablet, simvastatin 20 mg oral tablet, and nitroglycerin 0.4 mg/actuat mucosal spray. Patient has a history of viral sinusitis, stress, and part-time employment."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984a3",
      "dateStart": "1994-05-06",
      "dateEnd": "1994-05-06",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for problem",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": "MOUNT AUBURN HOSPITAL",
      "resources": {
        "Encounter": [
          "2c401159-5242-62ea-1af1-a59896f56574",
          "f672abad-3594-cef8-9103-99582de0b2bc"
        ],
        "Vitals": [
          "5271b055-ca98-b8b2-240f-60ad4fac34c1",
          "5689fd26-2bea-43f4-26b0-01e6d0aa1ab2",
          "e8c5bb3b-a987-6ba0-096c-e89f278f91e9",
          "26e0bd70-c91a-d952-a9d5-8c9a2b47ae13",
          "5e85dd52-0f73-ee0c-7e6e-f41fff374053",
          "ac847372-a2bd-447a-9b01-58640204acba"
        ],
        "Condition": [
          "6f405f3d-f5c0-5b3a-1b75-cbf20b60a451",
          "d0ec73f3-635d-1711-5add-eb1ac8aace5c",
          "a139a452-2044-f7f2-7e1f-aefc96e1710e"
        ],
        "Labs": [
          "b0de52cf-ed73-325a-cf0d-3444ac9ca7e7",
          "ce540ab5-fb93-5efb-e2a8-5f8de46c36d2",
          "598fb9d3-9692-5272-ae30-2b7abea3e6ff",
          "357b8cf2-a4be-6e62-a17a-68132645ac33",
          "0bd39dc0-7bda-b283-5113-387fe9238c00",
          "f5cf9bcf-8221-f63b-c317-a4673c6d0714",
          "252abfdb-1eba-98ad-c266-ecf703f4edb8",
          "2a1b933a-281b-9c57-b3bc-8c531e3b2979",
          "3f60e80a-c79a-3c96-d62d-23ae5b482dcf",
          "3384ac97-bc9a-36e2-9248-ebba2e6b1ac9",
          "fe55c15b-cfb1-5db1-60ff-6db13197b8f8",
          "32b1a611-ba05-c051-52d0-a313bf607416",
          "e97a123f-9e3c-9db1-629e-5d2b29172e2a",
          "01eb0e98-fb21-f10e-f077-3e788d2f0d97",
          "3528e9d0-849b-7846-35be-a28a6a49a4ed",
          "0099f753-85e1-c41e-cb02-7c8fb87619db",
          "1cec4920-7c4c-4189-71e3-985a451c97e5",
          "a6ded45c-8284-19c3-a722-5f5041dc4c9e",
          "6969a6bc-f65f-1bdd-4dd1-71aae5cd355d",
          "6b96d447-aea1-d258-7b94-436f039336dc"
        ],
        "MedicationRequest": [
          "935244a9-0b5f-62b4-9186-a005973cd31f",
          "06ba8b64-806c-d1b4-7fee-500f0f70f95b",
          "eea4137e-6e50-02a3-bd8e-4708eee51a58",
          "63423068-8157-48bd-2f26-bb45b0e00222",
          "93036dd5-ad00-f144-76ee-211ceda47686",
          "89527483-1d86-bd4a-25f5-a23601bc8606",
          "ed3c13dc-3e11-d5dc-6834-ddccc35f4bab"
        ],
        "Immunization": [
          "e040831b-1154-760a-5948-46bb902bd9c9",
          "8ac5a1cb-3ec3-b6b5-a3c0-b5a8ede9afcd"
        ],
        "DocumentReference": [
          "f2f58149-1f0b-96c8-6ad7-ea13669494d1",
          "5a17c99d-f22a-5617-6216-c057a7eeeaed"
        ],
        "DiagnosticReport": [
          "ef1bfe24-b3bf-bd39-52c2-bb1a6f25dbd8",
          "8aee93f6-afda-bb0b-fe97-15e2ab78c036",
          "2b9e2aa1-74a9-a906-faee-d71153632348",
          "19df2ecd-db2a-adae-f648-5eaaa8de0eb3",
          "2226f7f3-3e42-cac0-4de9-f6880939dc7e",
          "28b56b48-fa95-f651-055e-62678bd6cf63"
        ],
        "Procedure": [
          "c4479c08-e010-ae03-d8d3-5c6ddfcdaf68",
          "1dcb3c3d-e5d4-ba81-d20e-be88b6f6a88e",
          "c069236a-6617-c433-7c9d-1bfcb1363a18",
          "2d5d71ba-89ed-ab73-c54e-fca819d46c50",
          "e7aaa1d9-b143-fbe3-1214-8bf91cdc90cf",
          "900fceda-8cd7-1831-4d3a-44b5eb23aceb",
          "e09a8b08-847d-5fe4-68f9-95cbed25c6be",
          "409cbd7f-6dc8-0643-1fef-37c07a4a6af9",
          "e8ee591b-f112-0fba-dd5b-25994cecca8a",
          "0fb74583-9463-20d2-47a6-5cca723a49e7"
        ]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "type": "General examination of patient (procedure)"
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": null,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 96.2,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 27.81,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 15,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1994-05-06",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "verificationStatus": "confirmed",
          "display": "Anemia (disorder)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 9.26,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 1.61,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 9.4,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 139.97,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 71.48,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 4.75,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 106.02,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 25.04,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1994-05-06",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 61,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1994-05-06",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "1994-05-06",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1994-05-06",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1994-05-06",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "type": "Encounter for problem"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1994-05-06",
          "result": "urn:uuid:0bd39dc0-7bda-b283-5113-387fe9238c00",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "1994-05-06",
          "display": "tetanus and diphtheria toxoids, adsorbed, preservative free, for adult use (5 Lf of tetanus toxoid and 2 Lf of diphtheria toxoid)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1994-05-06",
          "result": null,
          "display": "History and physical note",
          "data": "\n1994-05-06\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 41 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Humana.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nsimvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with anemia (disorder). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free, td (adult) preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- medication reconciliation (procedure)\nThe patient was prescribed the following medications:\n- amlodipine 5 mg oral tablet\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n- amlodipine 5 mg oral tablet\n"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1994-05-06",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 6.09,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "display": "Medication reconciliation (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1994-05-06",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "verificationStatus": "confirmed",
          "display": "Limited social contact (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1994-05-06",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 11.343,
          "display": "Hemoglobin [Mass/volume] in Blood",
          "unit": "g/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 84.611,
          "display": "MCV [Entitic volume] by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 4.8558,
          "display": "RBC Auto (Bld) [#/Vol]",
          "unit": "10*6/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 29.092,
          "display": "MCH [Entitic mass] by Automated count",
          "unit": "pg",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 39.719,
          "display": "RDW - Erythrocyte distribution width Auto (RBC) [Entitic vol]",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "display": "Peripheral blood smear interpretation"
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 349.99,
          "display": "Platelet distribution width [Entitic volume] in Blood by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 34.532,
          "display": "MCHC [Mass/volume] by Automated count",
          "unit": "g/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 10.547,
          "display": "Platelet mean volume [Entitic volume] in Blood by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 30.309,
          "display": "Hematocrit [Volume Fraction] of Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 9.631,
          "display": "WBC Auto (Bld) [#/Vol]",
          "unit": "10*3/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "display": "Screening for drug abuse (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "display": "Review of systems (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "display": "Medication reconciliation (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "display": "Brief general examination (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1994-05-06",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1994-05-06",
          "result": "urn:uuid:3384ac97-bc9a-36e2-9248-ebba2e6b1ac9",
          "display": "Complete blood count (hemogram) panel - Blood by Automated count",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1994-05-06",
          "result": "urn:uuid:5b1f9085-c3d2-4b4c-218c-3ac2fb7efc73",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1994-05-06",
          "result": "urn:uuid:e9cdefc7-2344-3247-27a1-694daebe7bb3",
          "display": "Drug Abuse Screening Test-10 [DAST-10]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1994-05-06",
          "result": null,
          "display": "History and physical note",
          "data": "\n1994-05-06\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 41 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Humana.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nsimvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding), limited social contact (finding). \n\n## Plan\n\nThe following procedures were conducted:\n- peripheral blood smear interpretation\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n- assessment of substance use (procedure)\n- screening for drug abuse (procedure)\n- review of systems (procedure)\n- medication reconciliation (procedure)\n- brief general examination (procedure)\nThe patient was prescribed the following medications:\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n- amlodipine 5 mg oral tablet\n"
        },
        {
          "startDate": "1994-05-06",
          "resourceType": "Labs",
          "result": 440.84,
          "display": "Platelets [#/volume] in Blood by Automated count",
          "unit": "10*3/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1994-05-06",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1994-05-06",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "1994-05-06",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1994-05-06",
          "endDate": "1994-05-06",
          "display": "Depression screening (procedure)"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take Amlodipine 5 MG Oral Tablet once daily",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain",
        "Take Simvastatin 20 MG Oral Tablet daily with food"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>During your visit, it was confirmed that you have anemia. Lab tests showed low levels of Urea Nitrogen and Hemoglobin, indicating anemia.</p><h2>Treatment and Prescriptions</h2><p>Your doctor prescribed Amlodipine 5 MG Oral Tablet to manage hypertension, Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray to relieve chest pain, and Simvastatin 20 MG Oral Tablet to control cholesterol levels. Lab results for Urea Nitrogen, Creatinine, and calcium were included in the assessment.</p><h2>Advice and Recommendations</h2><p>Your healthcare provider recommended immunizations for influenza and tetanus, lifestyle changes to manage the anemia, and regular medication adherence. Follow up is advised to monitor your condition.</p></section>",
      "shortSummary": "You have been diagnosed with anemia. Your doctor has prescribed Amlodipine, Nitroglycerin, and Simvastatin. You should take Amlodipine daily, use Nitroglycerin as needed for chest pain, and take Simvastatin daily with food.",
      "doctorSummary": "Patient Abdul218, a 41-year-old non-Hispanic black male, presented with confirmed anemia along with a history of part-time and full-time employment, limited social contact, and active smoking and alcohol use. Lab results indicated low Urea Nitrogen, Hemoglobin, and elevated MCV with a diagnosis of anemia. The treatment plan includes Amlodipine 5 MG for hypertension, Nitroglycerin 0.4 MG for chest pain, and Simvastatin 20 MG for cholesterol. Immunizations for influenza and tetanus were administered, and lifestyle changes were advised. Follow-up is recommended to monitor the patient's progress.",
      "validatedTasksForUser": [
        {
          "id": "231f8e74091208c684f65e3a",
          "task": "Take Amlodipine 5 MG Oral Tablet once daily",
          "status": "pending",
          "note": ""
        },
        {
          "id": "a692b13d8c4f56e306f97138",
          "task": "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain",
          "status": "pending",
          "note": ""
        },
        {
          "id": "d978f6654913f062483a46c1",
          "task": "Take Simvastatin 20 MG Oral Tablet daily with food",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Take Amlodipine 5 MG Oral Tablet once daily",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain",
        "Take Simvastatin 20 MG Oral Tablet daily with food"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>During your visit, it was confirmed that you have anemia. Lab tests showed low levels of Urea Nitrogen and Hemoglobin, indicating anemia.</p><h2>Treatment and Prescriptions</h2><p>Your doctor prescribed Amlodipine 5 MG Oral Tablet to manage hypertension, Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray to relieve chest pain, and Simvastatin 20 MG Oral Tablet to control cholesterol levels. Lab results for Urea Nitrogen, Creatinine, and calcium were included in the assessment.</p><h2>Advice and Recommendations</h2><p>Your healthcare provider recommended immunizations for influenza and tetanus, lifestyle changes to manage the anemia, and regular medication adherence. Follow up is advised to monitor your condition.</p></section>",
      "validatedShortSummary": "You have been diagnosed with anemia and prescribed Amlodipine, Nitroglycerin, and Simvastatin. Take Amlodipine daily, use Nitroglycerin as needed for chest pain, and take Simvastatin daily with food.",
      "validatedDoctorSummary": "Patient Abdul218, a 41-year-old non-Hispanic black male, presented with confirmed anemia along with a history of part-time and full-time employment, limited social contact, and active smoking and alcohol use. Lab results indicated low Urea Nitrogen, Hemoglobin, and elevated MCV with a diagnosis of anemia. The treatment plan includes Amlodipine 5 MG for hypertension, Nitroglycerin 0.4 MG for chest pain, and Simvastatin 20 MG for cholesterol. Immunizations for influenza and tetanus were administered, and lifestyle changes were advised. Follow-up is recommended to monitor the patient's progress."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984bf",
      "dateStart": "1993-04-30T04:29:47-04:00",
      "dateEnd": "1993-04-30T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["27e82727-88b3-bf74-1e3c-fcc5e63a253e"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1993-04-30T04:29:47-04:00",
          "endDate": "1993-04-30T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "73595000",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "763302001",
              "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984a1",
      "dateStart": "1992-04-24",
      "dateEnd": "1992-04-24",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": "PCP58532",
      "resources": {
        "Condition": [
          "d35f495c-d9b3-2cb3-c328-3d86b4753729",
          "641a6158-2fe1-213d-8177-689463b2c8f9"
        ],
        "Vitals": [
          "c1b5332c-1326-7983-65a6-376d79f2972e",
          "60e633c9-88cb-315b-43ae-abcd98cc1bfd",
          "3fa140d8-8b02-d378-f625-b045308c31c9",
          "54c895f3-a77b-9e02-ccb4-a67a7c9281b8",
          "3165a5ee-0303-a966-0f8d-0a189fe77700",
          "5cfe2c1b-c0e5-df38-866f-05c671fb907a"
        ],
        "Encounter": ["f2f337b4-33bb-1fe1-4f96-8102f9a8b75a"],
        "Labs": [
          "125441b5-936c-72ba-713d-086010c032f4",
          "5038336d-fae9-5ed6-02fb-328d50b1c210",
          "8378f4ce-04d7-babf-a3cb-c09ebaf9ecae",
          "bf3dda5e-b666-c8a2-c695-a5803dced7df",
          "efb5e814-56af-8ffd-cd9b-dfa270d58f29",
          "9f40f7c9-8011-348e-a37a-a54eb2e930a8",
          "9d337bb6-c759-f24f-d051-9f3c5d8ac9f1",
          "23a7611b-2434-095a-0bab-5672128827a3",
          "94b20f52-75e0-22d1-9585-727a19c2aac9"
        ],
        "Procedure": [
          "9adcd4d9-2c7a-4d3f-7241-958aaea403e6",
          "aea264ca-cdbc-3e10-71ed-6d938e5b0edb",
          "0bd60a10-28d6-9473-1c11-5c49c131aaec",
          "e803a0ca-acab-8416-024d-82657d1f6064",
          "6a32edf4-0aae-1098-97f3-2f516330397d",
          "4c75ca6f-61dc-ef07-dbd3-bcf7f08099b4"
        ],
        "Immunization": ["ad872b31-dfc0-1e0e-b8d7-e5ee2889b5dd"],
        "DiagnosticReport": [
          "f3528823-56cf-433d-ab91-856192aaa52e",
          "9b1cd47e-3ad0-bc00-1386-5b15087cacf4",
          "155232f1-5c1f-d918-1bfe-f1dea20f4cd1",
          "eb107f90-1e98-fa22-bd62-215f62237cde",
          "d07fe660-11fd-99d0-70f2-bff15266f93f"
        ],
        "DocumentReference": ["a5a19040-551b-840a-5077-e1c8debad2b3"],
        "MedicationRequest": [
          "44157e8e-12e7-dd8a-8025-bf679c750596",
          "e7a52e7d-d8ec-5824-b4a6-bb936b2f299a"
        ]
      },
      "newDocs": [
        {
          "resourceType": "Condition",
          "lastUpdated": "1992-04-24",
          "startDate": "1992-04-24",
          "endDate": "1992-04-24",
          "verificationStatus": "confirmed",
          "display": "Reports of violence in the environment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 29.71,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 97,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1992-04-24",
          "endDate": "1992-04-24",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1992-04-24",
          "startDate": "1992-04-24",
          "endDate": "1992-04-24",
          "verificationStatus": "confirmed",
          "display": "Part-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 102.8,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 16,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Labs",
          "result": 67.31,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Labs",
          "result": 14.84,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Labs",
          "result": 9.45,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Labs",
          "result": 23.16,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Labs",
          "result": 143.76,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Labs",
          "result": 5.07,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Labs",
          "result": 1.71,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Labs",
          "result": 108.69,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": null,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "1992-04-24",
          "resourceType": "Labs",
          "result": 6.38,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1992-04-24",
          "endDate": "1992-04-24",
          "display": "Depression screening (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1992-04-24",
          "endDate": "1992-04-24",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1992-04-24",
          "endDate": "1992-04-24",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1992-04-24",
          "endDate": "1992-04-24",
          "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1992-04-24",
          "endDate": "1992-04-24",
          "display": "Screening for domestic abuse (procedure)"
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "1992-04-24",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-24",
          "result": "urn:uuid:125441b5-936c-72ba-713d-086010c032f4",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1992-04-24",
          "endDate": "1992-04-24",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-24",
          "result": "urn:uuid:464831ec-5620-657b-e2bf-0956d6ea05d5",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-24",
          "result": null,
          "display": "History and physical note",
          "data": "\n1992-04-24\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 39 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Cigna Health.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nsimvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with part-time employment (finding), reports of violence in the environment (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- screening for domestic abuse (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n- assessment of substance use (procedure)\n- assessment using alcohol use disorders identification test - consumption (procedure)\nThe patient was prescribed the following medications:\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-24",
          "result": "urn:uuid:04f26e2f-6f54-f516-603f-58e153923570",
          "display": "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          "data": null
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1992-04-24",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-24",
          "result": "urn:uuid:058932a8-f64e-98e3-1731-526a94b6aeef",
          "display": "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
          "data": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1992-04-24",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1992-04-24",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take Simvastatin 20 MG Oral Tablet as directed",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain",
        "Cut down on alcohol intake"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with part-time employment and exposure to violence. The recent lab results show elevated glucose, urea nitrogen, and slightly low calcium levels.</p><h2>Treatment and Prescriptions</h2><p>Your doctor has prescribed Simvastatin 20 MG Oral Tablet for cholesterol management and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray for chest pain. The basic metabolic panel and AUDIT-C tests were performed.</p><h2>Advice and Recommendations</h2><p>It is essential to attend the follow-up depression screening, consider quitting smoking, reduce alcohol consumption, and take medications as prescribed. Lifestyle changes, including dietary adjustments, are crucial for your well-being.</p></section>",
      "shortSummary": "You have been diagnosed with part-time employment and exposure to violence. Your doctor has prescribed medications, conducted various screenings, and provided immunizations. Follow-up for depression screening is recommended, and lifestyle changes are advised.",
      "doctorSummary": "The patient, Abdul218, a 39-year-old non-hispanic black male, presented with a history of part-time employment and reports of violence exposure. Lab results indicate elevated glucose, urea nitrogen, and slightly low calcium levels. Medications prescribed include Simvastatin 20 MG Oral Tablet for cholesterol management, and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray for chest pain. Various screenings and immunizations were conducted, and follow-up for depression screening is advised. Lifestyle changes, including smoking cessation and alcohol reduction, are recommended.",
      "validatedTasksForUser": [
        {
          "id": "5f7a91c6e99a9459a2ed7305",
          "task": "Attend follow-up depression screening",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5f7a91c6e99a9459a2ed7306",
          "task": "Try to quit smoking",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5f7a91c6e99a9459a2ed7307",
          "task": "Reduce alcohol consumption",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5f7a91c6e99a9459a2ed7308",
          "task": "Take medications as prescribed",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Take Simvastatin 20 MG Oral Tablet as directed",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain",
        "Cut down on alcohol intake"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with part-time employment and exposure to violence. The recent lab results show elevated glucose, urea nitrogen, and slightly low calcium levels.</p><h2>Treatment and Prescriptions</h2><p>Your doctor has prescribed Simvastatin 20 MG Oral Tablet for cholesterol management and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray for chest pain. The basic metabolic panel and AUDIT-C tests were performed.</p><h2>Advice and Recommendations</h2><p>It is essential to attend the follow-up depression screening, consider quitting smoking, reduce alcohol consumption, and take medications as prescribed. Lifestyle changes, including dietary adjustments, are crucial for your well-being.</p></section>",
      "validatedShortSummary": "You have been diagnosed with part-time employment and exposure to violence. Your doctor has prescribed medications, conducted various screenings, and provided immunizations. Follow-up for depression screening is recommended, and lifestyle changes are advised.",
      "validatedDoctorSummary": "The patient, Abdul218, a 39-year-old non-hispanic black male, presented with a history of part-time employment and reports of violence exposure. Lab results indicate elevated glucose, urea nitrogen, and slightly low calcium levels. Medications prescribed include Simvastatin 20 MG Oral Tablet for cholesterol management and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray for chest pain. Various screenings and immunizations were conducted, and follow-up for depression screening is advised. Lifestyle changes, including smoking cessation and alcohol reduction, are recommended."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984a2",
      "dateStart": "1993-04-30",
      "dateEnd": "1993-04-30",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": "PCP58532",
      "resources": {
        "Encounter": ["edf391a1-4331-38fe-ff87-7f6c41ceb8ab"],
        "Condition": [
          "ff8beb27-54ed-923e-2191-630e3d74ac00",
          "c8a5a708-5041-7449-3501-cb03d2a35487"
        ],
        "Vitals": [
          "e86a4aec-77e8-119b-d45a-89c1dbfed60b",
          "e52f31db-c5e9-89e3-a405-e25a8eb47539",
          "ea5e164d-674d-45b1-dd9b-4c2321b73c72",
          "44cdb85c-91e9-d96d-f03a-4c954a6199e2",
          "e2d05d8d-6b0a-99fc-981e-853bf82c2839",
          "3e11712c-7eba-fae7-b8f8-7fa83ba5a897"
        ],
        "Labs": [
          "b4c13a57-bd01-98b8-3a35-67c4ffec5f88",
          "1731ee97-81c6-2b0f-ac4b-cce57593f778",
          "0b98cb58-c1fb-dde6-3d35-c78e12c1c7d6",
          "90ebd538-ae88-04f1-31c0-f3c7f6eba86d",
          "d37f8c2e-01de-54df-b961-245692c966c0",
          "cfe47b9e-209d-bda1-3db6-52703c4497be",
          "3bb9e032-00dd-b052-bfa3-14f4ff0a0c02",
          "c802e1c5-1872-f896-2fa3-9ebdf2f81857",
          "359caada-3d6a-2ebe-0619-98de997a60a7",
          "e75cf151-fca2-84df-065e-ed61095f998e",
          "668a2b7c-facb-39a5-d77d-ca7efa59523c",
          "47609abc-5ccb-cc88-c252-46ac8a8a029e",
          "4b7d35b3-00ab-d498-7e67-a4b9ba8e2b06"
        ],
        "Procedure": [
          "65885088-7e38-efeb-34a7-539867f61865",
          "02f5c084-e02e-e27e-f9a1-04ca2bc75114",
          "5a1cd82c-0e29-6b47-1769-ba21b7150832"
        ],
        "MedicationRequest": [
          "ea4269fb-72db-13cc-d011-9b22ae6ad6e3",
          "c1008266-fabb-9917-6092-675baad7e38e"
        ],
        "Immunization": ["5cccbe86-a16a-45cb-5e69-8eb9449bbb74"],
        "DiagnosticReport": [
          "28c36b43-2168-be3f-b22c-41d1f9913b15",
          "affb3ed5-510b-9d76-ab9b-5dda9fd5b1f2",
          "97845d0f-98a6-3045-c095-4fefa82f7a1f",
          "e0120daf-b8df-b6e5-2061-51ed138da1e7"
        ],
        "DocumentReference": ["0c2b2a9c-2f13-6fe5-6b5b-4c540a59f1db"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1993-04-30",
          "endDate": "1993-04-30",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1993-04-30",
          "startDate": "1993-04-30",
          "endDate": "1993-04-30",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 2,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 101.7,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 29.4,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 99,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 12,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 14.09,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1993-04-30",
          "startDate": "1993-04-30",
          "endDate": "1993-04-30",
          "verificationStatus": "confirmed",
          "display": "Stress (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 62.26,
          "display": "Cholesterol in HDL [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 5.99,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 27.16,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 105.8,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 149.48,
          "display": "Triglyceride [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 93.82,
          "display": "Cholesterol in LDL [Mass/volume] in Serum or Plasma by Direct assay",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 185.98,
          "display": "Cholesterol [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1993-04-30",
          "endDate": "1993-04-30",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1993-04-30",
          "endDate": "1993-04-30",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "1993-04-30",
          "endDate": "1993-04-30",
          "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 1.43,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 140.68,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 9.36,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 3.96,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1993-04-30",
          "resourceType": "Labs",
          "result": 83.63,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1993-04-30",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "1993-04-30",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1993-04-30",
          "result": "urn:uuid:4b7d35b3-00ab-d498-7e67-a4b9ba8e2b06",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1993-04-30",
          "result": "urn:uuid:c802e1c5-1872-f896-2fa3-9ebdf2f81857",
          "display": "Lipid Panel",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1993-04-30",
          "result": "urn:uuid:430c7815-526e-9585-a1b3-4175a9d938e9",
          "display": "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1993-04-30",
          "result": null,
          "display": "History and physical note",
          "data": "\n1993-04-30\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 40 year-old non-hispanic black male. Patient has a history of part-time employment (finding), limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nsimvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding), stress (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- assessment of substance use (procedure)\n- assessment using alcohol use disorders identification test - consumption (procedure)\nThe patient was prescribed the following medications:\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1993-04-30",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1993-04-30",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take the prescribed Simvastatin 20 MG Oral Tablet daily.",
        "Use the Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with full-time employment-related stress. Your vital signs and lab results indicate elevated stress levels and potential cardiovascular risk due to the prevalence of part-time employment, limited social contact, and a history of violence in your environment.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed Simvastatin 20 MG Oral Tablet to manage your cholesterol levels and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray to relieve chest pain. Your lab results for cholesterol, triglycerides, and hemoglobin A1c will be monitored closely due to the prescribed medications.</p><h2>Advice and Recommendations</h2><p>It is crucial to manage your stress levels through lifestyle changes and seek support to improve your work-life balance. You are advised to quit smoking, reduce alcohol consumption, and make dietary changes to lower your cardiovascular risk. A follow-up appointment will be scheduled to reassess your progress and make any necessary adjustments to your treatment plan.</p></section>",
      "shortSummary": "You have been diagnosed with full-time employment-related stress. You were provided with immunization for influenza and prescribed Simvastatin 20 MG Oral Tablet and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray for chest pain relief. Follow the medication instructions and make necessary lifestyle changes.",
      "doctorSummary": "The patient, a 40-year-old non-hispanic black male, presented with symptoms related to stress from full-time employment. The patient reported a history of part-time employment, limited social contact, and exposure to violence. Vital signs and lab results indicate elevated stress levels and potential cardiovascular risk. The patient was prescribed Simvastatin 20 MG Oral Tablet to manage cholesterol and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray for chest pain relief. Lifestyle changes, including smoking cessation and alcohol reduction, are crucial for risk management. Follow-up appointment scheduled for monitoring and treatment adjustments as needed.",
      "validatedTasksForUser": [
        {
          "id": "5f86a32c3b82e41317a8ca6a",
          "task": "Take Simvastatin 20 MG Oral Tablet daily",
          "status": "pending",
          "note": ""
        },
        {
          "id": "7f920ba58c4343f142f5c91d",
          "task": "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Take the prescribed Simvastatin 20 MG Oral Tablet daily.",
        "Use the Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with full-time employment-related stress. Your vital signs and lab results indicate elevated stress levels and potential cardiovascular risk due to the prevalence of part-time employment, limited social contact, and a history of violence in your environment.</p><h2>Treatment and Prescriptions</h2><p>You have been prescribed Simvastatin 20 MG Oral Tablet to manage your cholesterol levels and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray to relieve chest pain. Your lab results for cholesterol, triglycerides, and hemoglobin A1c will be monitored closely due to the prescribed medications.</p><h2>Advice and Recommendations</h2><p>It is crucial to manage your stress levels through lifestyle changes and seek support to improve your work-life balance. You are advised to quit smoking, reduce alcohol consumption, and make dietary changes to lower your cardiovascular risk. A follow-up appointment will be scheduled to reassess your progress and make any necessary adjustments to your treatment plan.</p></section>",
      "validatedShortSummary": "You have been diagnosed with full-time employment-related stress. You were provided with immunization for influenza and prescribed Simvastatin 20 MG Oral Tablet and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray for chest pain relief. Follow the medication instructions and make necessary lifestyle changes.",
      "validatedDoctorSummary": "The patient, a 40-year-old non-hispanic black male, presented with symptoms related to stress from full-time employment. The patient reported a history of part-time employment, limited social contact, and exposure to violence. Vital signs and lab results indicate elevated stress levels and potential cardiovascular risk. The patient was prescribed Simvastatin 20 MG Oral Tablet to manage cholesterol and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray for chest pain relief. Lifestyle changes, including smoking cessation and alcohol reduction, are crucial for risk management. Follow-up appointment scheduled for monitoring and treatment adjustments as needed."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984b7",
      "dateStart": "1992-04-24T04:29:47-04:00",
      "dateEnd": "1992-04-24T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["92f93870-4f6b-5ac4-e5a3-2ce5536db809"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1992-04-24T04:29:47-04:00",
          "endDate": "1992-04-24T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "160904001",
              "display": null
            },
            {
              "system": "sct",
              "code": "424393004",
              "display": null
            },
            {
              "system": "sct",
              "code": "866148006",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "763302001",
              "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984bd",
      "dateStart": "1992-04-10T04:29:47-04:00",
      "dateEnd": "1992-04-10T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["b9cfd5f1-0234-aea3-877c-2e06602610df"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1992-04-10T04:29:47-04:00",
          "endDate": "1992-04-10T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185349003",
              "display": "Encounter for check up (procedure)"
            },
            {
              "system": "sct",
              "code": "53741008",
              "display": "Coronary arteriosclerosis (disorder)"
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "430193006",
              "display": "Medication reconciliation (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984bc",
      "dateStart": "1990-02-23T03:29:47-05:00",
      "dateEnd": "1990-02-23T03:29:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["37a8c618-40cf-ef53-4eb6-ee7c1cd86c5d"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1990-02-23T03:29:47-05:00",
          "endDate": "1990-02-23T03:29:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "15777000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "73595000",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b9849f",
      "dateStart": "1992-04-10",
      "dateEnd": "1992-04-10",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for check up (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": "MOUNT AUBURN HOSPITAL",
      "resources": {
        "Condition": [
          "219f223d-5f8b-32a8-4b4e-f6e6240accc7",
          "248ebe38-3553-9bfd-8d19-41442e543b48"
        ],
        "Vitals": [
          "33648be3-5286-a324-312c-c9cf3cfedac8",
          "a5cd0f82-45c2-1f1c-b5cb-24d317cfa74b",
          "75a7476a-de6c-ce31-5b47-e5e72e7c4211",
          "26945d93-ed09-2c27-55d2-698657b29dcf",
          "9d72f8a4-a93b-8d73-8830-9065311c8b90",
          "db458166-a9ad-97d7-5650-5965b5148abd"
        ],
        "Labs": [
          "0f5075e7-dfbb-055f-aa21-df7a76b9db9e",
          "13b68964-2bb8-fbcc-6d4a-8100205e03e0",
          "8340b018-36e7-877c-9942-47f394e52f5b",
          "84319325-d054-9013-72f6-d94eae6e2db7",
          "22d28a13-8b6b-3ff4-0da6-6bd7de15c45d",
          "57ff7e5e-07f7-50f3-87a4-69109552b11b",
          "b2030d97-1707-8378-a00c-014bc9335875",
          "a6850f07-2fba-d50a-214f-34d174eb0084",
          "6920f54a-1c98-0743-c19b-935c652287f4",
          "7fac4703-bb22-a1d9-546f-e14c3d225dac",
          "cf4d73f1-fef8-ab12-4302-26a401505500",
          "806d00a9-c132-c547-fffb-4724781b2603",
          "84c593ab-8e18-4dee-7dd0-b5aa3caae01a",
          "ddab9cfe-ffba-9762-1a4f-f35260dc46a8",
          "7dd75818-0e80-5a41-8dcf-a48826c2c662",
          "1dd7eb4b-0bae-7f8a-5c9e-b7ebbbd3a15f",
          "16adcc64-aae0-e7e2-e4f8-cbb57d165612",
          "2a98a1c7-7053-9d37-3040-13e541715cfe",
          "732901b6-0142-4b0e-83a6-1e1c04a66e33",
          "af193cb5-d0a2-ed9c-f8c2-9480b1658e19"
        ],
        "Encounter": ["d331b9e7-cc03-6a74-ecac-64fedddb57a9"],
        "Procedure": [
          "49d55c87-ed5c-e8a5-420a-ab735747d2c6",
          "c552f97a-c15d-2093-458d-ceab8d7baeba",
          "8d858420-4c1d-3e1c-ef3a-b3049487b60e",
          "314ca511-6e5d-14fa-70f4-0360e6e50da7",
          "b02eaa77-e8c4-2ff3-a8f3-e2823b5872ee",
          "a3511024-929f-d337-1a37-0ad20429a08d",
          "be2a8430-0cbf-de54-cd72-ca28bb0266e9",
          "fa643524-fcdb-ecfa-0466-dfeb7389df0f"
        ],
        "MedicationRequest": [
          "c0e50da8-7aed-f2db-f893-efe740504150",
          "28fe47d9-82cf-c35d-468d-39ecd61c3b9c",
          "9f5c47fb-b639-e236-ea1a-b6bc2fcab325",
          "4d93f56b-3db5-e0a6-a4c7-f65cf2b8538d"
        ],
        "Immunization": ["cf8519ef-7838-5301-2487-ecf0a471e6f8"],
        "DiagnosticReport": [
          "50cec2eb-8a28-2bf1-498c-13c884ef1cb1",
          "ff6be95a-3459-56a1-f2c7-04f4621e8602",
          "6513974a-5cf8-9bbd-b2c0-10f28f822499",
          "73dd6b49-6889-d60f-888f-521977ef6b0b",
          "c22b6156-a703-927f-29ad-b069f1d493e1",
          "ffe090c8-1c28-d9f4-4037-4d23561ad1f3",
          "96426611-e3ed-41c6-d7b0-3e0a521c0e50"
        ],
        "DocumentReference": ["dc7cfc5d-1af7-1e61-d5d8-6773fce9b18e"]
      },
      "newDocs": [
        {
          "resourceType": "Condition",
          "lastUpdated": "1992-04-10",
          "startDate": "1992-04-10",
          "endDate": "1992-04-10",
          "verificationStatus": "confirmed",
          "display": "Coronary arteriosclerosis (disorder)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 1,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 102.8,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 29.71,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 99,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 15,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 86.31,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 9.69,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 1.5,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "1992-04-10",
          "endDate": "1992-04-10",
          "type": "Encounter for check up (procedure)"
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 31.314,
          "display": "MCH [Entitic mass] by Automated count",
          "unit": "pg",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 34.309,
          "display": "MCHC [Mass/volume] by Automated count",
          "unit": "g/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 5.2456,
          "display": "Erythrocytes [#/volume] in Blood by Automated count",
          "unit": "10*6/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 15.228,
          "display": "Hemoglobin [Mass/volume] in Blood",
          "unit": "g/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 43.925,
          "display": "Hematocrit [Volume Fraction] of Blood by Automated count",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 85.341,
          "display": "MCV [Entitic volume] by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 8.68,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 139.87,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 9.0745,
          "display": "Leukocytes [#/volume] in Blood by Automated count",
          "unit": "10*3/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 27.16,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 39.002,
          "display": "Erythrocyte distribution width [Entitic volume] by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1992-04-10",
          "endDate": "1992-04-10",
          "display": "Medication reconciliation (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1992-04-10",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1992-04-10",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1992-04-10",
          "endDate": "1992-04-10",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1992-04-10",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Immunization",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1992-04-10",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 299.67,
          "display": "Platelet distribution width [Entitic volume] in Blood by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 207.02,
          "display": "Platelets [#/volume] in Blood by Automated count",
          "unit": "10*3/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 5.89,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 9.8167,
          "display": "Platelet mean volume [Entitic volume] in Blood by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1992-04-10",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-10",
          "result": "urn:uuid:806d00a9-c132-c547-fffb-4724781b2603",
          "display": "Complete blood count (hemogram) panel - Blood by Automated count",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-10",
          "result": null,
          "display": "History and physical note",
          "data": "\n1992-04-10\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 39 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Cigna Health.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with coronary heart disease. \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- medication reconciliation (procedure)\nThe patient was prescribed the following medications:\n- simvastatin 20 mg oral tablet\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "1992-04-10",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-10",
          "result": "urn:uuid:0f5075e7-dfbb-055f-aa21-df7a76b9db9e",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1992-04-10",
          "endDate": "1992-04-10",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1992-04-10",
          "endDate": "1992-04-10",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1992-04-10",
          "startDate": "1992-04-10",
          "endDate": "1992-04-10",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1992-04-10",
          "endDate": "1992-04-10",
          "display": "Screening for domestic abuse (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1992-04-10",
          "endDate": "1992-04-10",
          "display": "Depression screening (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1992-04-10",
          "endDate": "1992-04-10",
          "display": "Assessment of anxiety (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-10",
          "result": "urn:uuid:49d53ea2-730d-5384-5201-b5133f41b1d0",
          "display": "Drug Abuse Screening Test-10 [DAST-10]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-10",
          "result": "urn:uuid:ba039cd7-9e6b-8645-1492-36cab34af26c",
          "display": "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-10",
          "result": "urn:uuid:1c28bc1a-15b1-b7e0-5ebb-eed9f14c0979",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-10",
          "result": "urn:uuid:1985244c-8a17-0e9c-ad70-1d7af62ec34d",
          "display": "Generalized anxiety disorder 7 item (GAD-7)",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "MOUNT AUBURN HOSPITAL",
          "startDate": "1992-04-10",
          "endDate": "1992-04-10",
          "display": "Screening for drug abuse (procedure)"
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 5.12,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "1992-04-10",
          "resourceType": "Labs",
          "result": 106.11,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take Simvastatin 20 MG Oral Tablet once daily.",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain.",
        "Complete the influenza, seasonal, injectable, preservative free immunization.",
        "Follow up with primary care provider for further assessments and guidance.",
        "Monitor daily body weight and report any significant changes to the healthcare provider."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>You have been diagnosed with coronary arteriosclerosis, a condition characterized by the hardening and narrowing of the arteries that supply blood to the heart muscle. Your vital signs and lab results indicate elevated body weight, high glucose levels, and abnormal levels of urea nitrogen and creatinine.</p><h2>Treatment and Prescriptions:</h2><p>Your treatment plan includes taking Simvastatin 20 MG Oral Tablet once daily to lower cholesterol levels and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain. Lab results also show an influenza immunization was administered.</p><h2>Advice and Recommendations:</h2><p>It is essential to follow up with your primary care provider for further assessments and guidance. Additionally, monitor your daily body weight and report any significant changes to the healthcare provider for ongoing management of your condition.</p></section>",
      "shortSummary": "You have been diagnosed with coronary arteriosclerosis. Your treatment includes taking Simvastatin daily and using Nitroglycerin as needed for chest pain. You also received an influenza shot. It's important to follow up with your primary care provider for further assessments and monitor your daily body weight for any changes.",
      "doctorSummary": "The patient, diagnosed with coronary arteriosclerosis, presents with elevated body weight, high glucose levels, and abnormal levels of urea nitrogen and creatinine. The treatment plan includes Simvastatin 20 MG Oral Tablet once daily to lower cholesterol levels and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain. The patient also received an influenza shot. It is advised to follow up with the primary care provider for further assessments and to monitor daily body weight for any changes.",
      "validatedTasksForUser": [
        {
          "id": "60be8d7e7175773299f6493c",
          "task": "Take Simvastatin 20 MG Oral Tablet once daily.",
          "status": "pending",
          "note": ""
        },
        {
          "id": "60be8d7e7175773299f6493d",
          "task": "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain.",
          "status": "pending",
          "note": ""
        },
        {
          "id": "60be8d7e7175773299f6493e",
          "task": "Complete the influenza, seasonal, injectable, preservative free immunization.",
          "status": "pending",
          "note": ""
        },
        {
          "id": "60be8d7e7175773299f6493f",
          "task": "Follow up with primary care provider for further assessments and guidance.",
          "status": "pending",
          "note": ""
        },
        {
          "id": "60be8d7e7175773299f64940",
          "task": "Monitor daily body weight and report any significant changes to the healthcare provider.",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Take Simvastatin 20 MG Oral Tablet once daily.",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain.",
        "Complete the influenza, seasonal, injectable, preservative free immunization.",
        "Follow up with primary care provider for further assessments and guidance.",
        "Monitor daily body weight and report any significant changes to the healthcare provider."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>You have been diagnosed with coronary arteriosclerosis, a condition characterized by the hardening and narrowing of the arteries that supply blood to the heart muscle. Your vital signs and lab results indicate elevated body weight, high glucose levels, and abnormal levels of urea nitrogen and creatinine.</p><h2>Treatment and Prescriptions:</h2><p>Your treatment plan includes taking Simvastatin 20 MG Oral Tablet once daily to lower cholesterol levels and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain. Lab results also show an influenza immunization was administered.</p><h2>Advice and Recommendations:</h2><p>It is essential to follow up with your primary care provider for further assessments and guidance. Additionally, monitor your daily body weight and report any significant changes to the healthcare provider for ongoing management of your condition.</p></section>",
      "validatedShortSummary": "You have been diagnosed with coronary arteriosclerosis. Your treatment includes taking Simvastatin daily and using Nitroglycerin as needed for chest pain. You also received an influenza shot. It's important to follow up with your primary care provider for further assessments and monitor your daily body weight for any changes.",
      "validatedDoctorSummary": "The patient, diagnosed with coronary arteriosclerosis, presents with elevated body weight, high glucose levels, and abnormal levels of urea nitrogen and creatinine. The treatment plan includes Simvastatin 20 MG Oral Tablet once daily to lower cholesterol levels and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain. The patient also received an influenza shot. It is advised to follow up with the primary care provider for further assessments and to monitor daily body weight for any changes."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b9849d",
      "dateStart": "1990-02-23",
      "dateEnd": "1990-02-23",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": null,
      "resources": {
        "Condition": [
          "335254e6-cb3b-2f1e-dee3-c2ec39d0ebf7",
          "c70fe0e1-e212-f3fb-0f12-a75e845dd816",
          "a9713149-09b4-1712-50af-61bff2353415"
        ],
        "DiagnosticReport": ["50d385f3-f6c7-c96a-8fc5-bb1af25dc8cb"],
        "DocumentReference": ["2f79cb6a-5d50-975a-ee36-e3f8fd2e16f8"],
        "Encounter": ["173485eb-e0a7-944f-7ed1-7033881c5192"]
      },
      "newDocs": [
        {
          "resourceType": "Condition",
          "lastUpdated": "1990-02-23",
          "startDate": "1990-02-23",
          "endDate": "1990-02-23",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1990-02-23",
          "startDate": "1990-02-23",
          "endDate": "1990-02-23",
          "verificationStatus": "confirmed",
          "display": "Stress (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1990-02-23",
          "result": null,
          "display": "History and physical note",
          "data": "\n1990-02-23\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 37 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with prediabetes, full-time employment (finding), stress (finding). \n\n## Plan\n\nThe patient was placed on a careplan:\n- diabetes self management plan\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1990-02-23",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1990-02-23",
          "startDate": "1990-02-23",
          "endDate": "1990-02-23",
          "verificationStatus": "confirmed",
          "display": "Prediabetes",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1990-02-23",
          "endDate": "1990-02-23",
          "type": "General examination of patient (procedure)"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Follow the diabetes self-management plan provided by Dr. Sommer719 Hilpert278.",
        "Quit smoking and limit alcohol consumption to improve overall health and manage stress."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>You have been diagnosed with prediabetes, stress, and full-time employment.</p><h2>Treatment and Prescriptions:</h2><p>Your treatment plan includes a diabetes self-management plan. No active medications were prescribed.</p><h2>Advice and Recommendations:</h2><p>Follow the diabetes self-management plan. Quit smoking, limit alcohol consumption, and manage stress for better health.</p></section>",
      "shortSummary": "You have been diagnosed with prediabetes, stress, and full-time employment. Follow the diabetes self-management plan provided by Dr. Sommer719 Hilpert278 and make lifestyle changes to manage stress and improve overall health.",
      "doctorSummary": "Patient Abdul218, a 37-year-old non-hispanic black male, presented with prediabetes, stress, and full-time employment. No active medications were prescribed, and a diabetes self-management plan was implemented. Patient is an active smoker and alcoholic. Advice given to quit smoking, limit alcohol consumption, and manage stress.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Follow the diabetes self-management plan provided by Dr. Sommer719 Hilpert278.",
        "Quit smoking and limit alcohol consumption to improve overall health and manage stress."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>You have been diagnosed with prediabetes, stress, and full-time employment.</p><h2>Treatment and Prescriptions:</h2><p>Your treatment plan includes a diabetes self-management plan. No active medications were prescribed.</p><h2>Advice and Recommendations:</h2><p>Follow the diabetes self-management plan. Quit smoking, limit alcohol consumption, and manage stress for better health.</p></section>",
      "validatedShortSummary": "You have been diagnosed with prediabetes, stress, and full-time employment. Follow the diabetes self-management plan provided by Dr. Sommer719 Hilpert278 and make lifestyle changes to manage stress and improve overall health.",
      "validatedDoctorSummary": "Patient Abdul218, a 37-year-old non-hispanic black male, presented with prediabetes, stress, and full-time employment. No active medications were prescribed, and a diabetes self-management plan was implemented. Patient is an active smoker and alcoholic. Advice given to quit smoking, limit alcohol consumption, and manage stress."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984b5",
      "dateStart": "1984-02-17T03:29:47-05:00",
      "dateEnd": "1984-02-17T03:29:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["b85e4a6e-e14b-3c88-c0a4-c12630133a52"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1984-02-17T03:29:47-05:00",
          "endDate": "1984-02-17T03:29:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "423315002",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984ae",
      "dateStart": "2001-06-15",
      "dateEnd": "2001-06-15",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": "PCP58532",
      "resources": {
        "Encounter": ["38811438-dfdb-d3c7-7d97-db7a3d35733e"],
        "Condition": ["81103219-723e-4850-cec8-61eff09ec102"],
        "Vitals": [
          "ed1e15fc-bcf4-668f-77ea-d86877c879d7",
          "741bd16b-e1be-8905-16e0-3fd2d1544df6",
          "6349b7e9-94ef-c41c-afb7-8419250d35f5",
          "a71de24a-785d-47cb-459d-893de8d4bfd3",
          "7f64a831-c0a0-c7e8-c6a7-f267cd8821cc",
          "fd431a7c-ec15-5557-b3d0-8d3c546c1714"
        ],
        "Labs": [
          "9bfd7452-c9d3-091c-6f7e-370dff82c700",
          "b150f8ad-ea0e-1c3e-d47e-eb91d6d98cbd",
          "eacb5f1d-846d-62b9-7b3b-3e86ce891d39",
          "83780698-6218-3c82-513c-41984022d0a2",
          "d74550b3-e475-2145-4859-5ca6fd3e0b72",
          "6079436b-d1d8-98e1-5360-4f37d470ae08",
          "be280322-7b46-c717-3ef1-640f90a66974",
          "5551bd8e-1f5d-41e9-3be0-90416b436e74",
          "ee0968e6-c015-7e7d-eb78-bb1976d80d92"
        ],
        "Procedure": [
          "29436927-236c-39af-e23a-e69cc90fa4fa",
          "1d08bebc-66da-4598-88f6-3b71cb6326e1"
        ],
        "MedicationRequest": [
          "f301e4e2-ad86-2639-d590-33fc527cf1e5",
          "8f50d93c-ce67-88ca-996a-1b7ba411e8ff",
          "fbd220dd-013c-374a-8af1-09afecaafae5",
          "ab3f35a0-6db6-b92c-5105-9a13b1e13476"
        ],
        "Immunization": ["85f49b27-de6b-6a2c-a8f1-03117fa6e6a3"],
        "DiagnosticReport": [
          "f6885444-8d54-4a00-c397-db010ebf307c",
          "08df31a4-af0b-2d9e-dfbe-d7e224fca862"
        ],
        "DocumentReference": ["e3e7fcad-e860-ecfe-4755-f6add1bb0ac1"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "2001-06-15",
          "endDate": "2001-06-15",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2001-06-15",
          "startDate": "2001-06-15",
          "endDate": "2001-06-15",
          "verificationStatus": "confirmed",
          "display": "Part-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 186,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": null,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 104.2,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 95,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 13,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Labs",
          "result": 77.73,
          "display": "Glucose",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Labs",
          "result": 18.7,
          "display": "Urea Nitrogen",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Labs",
          "result": 1.33,
          "display": "Creatinine",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Labs",
          "result": 8.93,
          "display": "Calcium",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Labs",
          "result": 142.06,
          "display": "Sodium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Labs",
          "result": 4.49,
          "display": "Potassium",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Labs",
          "result": 103.96,
          "display": "Chloride",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "2001-06-15",
          "endDate": "2001-06-15",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-06-15",
          "category": null,
          "display": "Simvastatin 20 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Labs",
          "result": 5.94,
          "display": "Hemoglobin A1c/Hemoglobin.total in Blood",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-06-15",
          "category": null,
          "display": "Clopidogrel 75 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Labs",
          "result": 20.01,
          "display": "Carbon Dioxide",
          "unit": "mmol/L",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-06-15",
          "category": null,
          "display": "Amlodipine 5 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2001-06-15",
          "category": null,
          "display": "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "Procedure",
          "location": "PCP58532",
          "startDate": "2001-06-15",
          "endDate": "2001-06-15",
          "display": "Medication reconciliation (procedure)"
        },
        {
          "resourceType": "Immunization",
          "location": "PCP58532",
          "startDate": "2001-06-15",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2001-06-15",
          "result": "urn:uuid:9bfd7452-c9d3-091c-6f7e-370dff82c700",
          "display": "Basic Metabolic Panel",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2001-06-15",
          "result": null,
          "display": "History and physical note",
          "data": "\n2001-06-15\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 48 year-old non-hispanic black male. Patient has a history of part-time employment (finding), concussion with no loss of consciousness, limited social contact (finding), reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), victim of intimate partner abuse (finding), misuses drugs (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Blue Cross Blue Shield.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\namlodipine 5 mg oral tablet; simvastatin 20 mg oral tablet; clopidogrel 75 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with part-time employment (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- medication reconciliation (procedure)\nThe patient was prescribed the following medications:\n- clopidogrel 75 mg oral tablet\n- nitroglycerin 0.4 mg/actuat mucosal spray\n- simvastatin 20 mg oral tablet\n- amlodipine 5 mg oral tablet\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "2001-06-15",
          "type": "History and physical note",
          "data": null
        },
        {
          "startDate": "2001-06-15",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 30.12,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take Simvastatin 20 MG Oral Tablet daily",
        "Take Clopidogrel 75 MG Oral Tablet daily",
        "Take Amlodipine 5 MG Oral Tablet daily",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>You have been diagnosed with part-time employment. Your vital signs indicate a body height of 186 cm, body weight of 104.2 kg, heart rate of 95/min, and respiratory rate of 13/min. Your lab results show glucose at 77.73 mg/dL, urea nitrogen at 18.7 mg/dL, creatinine at 1.33 mg/dL, calcium at 8.93 mg/dL, sodium at 142.06 mmol/L, potassium at 4.49 mmol/L, and chloride at 103.96 mmol/L. Your Hemoglobin A1c level is 5.94% and Carbon Dioxide is at 20.01 mmol/L.</p><h2>Treatment and Prescriptions:</h2><p>You have been prescribed Simvastatin 20 MG, Clopidogrel 75 MG, Amlodipine 5 MG, and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray. You also received the seasonal influenza vaccine.</p><h2>Advice and Recommendations:</h2><p>It is important to follow the medication schedule for effective management. Make necessary lifestyle changes, maintain a healthy diet, and consider follow-up appointments to assess your progress.</p></section>",
      "shortSummary": "You have been diagnosed with part-time employment. Your treatment plan includes taking Simvastatin, Clopidogrel, Amlodipine, and using Nitroglycerin spray as needed. Follow these instructions closely to manage your condition effectively.",
      "doctorSummary": "The patient, a 48-year-old male, presented with a confirmed diagnosis of part-time employment. Vital signs and lab results indicate normal parameters. The treatment plan includes Simvastatin 20 MG, Clopidogrel 75 MG, Amlodipine 5 MG, and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray. Lifestyle modifications, dietary recommendations, and regular follow-ups are advised for comprehensive management.",
      "validatedTasksForUser": [
        {
          "id": "60db56f7c50a04356cf85412",
          "task": "Take Simvastatin 20 MG Oral Tablet daily",
          "status": "pending",
          "note": ""
        },
        {
          "id": "60db56f7c50a04356cf85413",
          "task": "Take Clopidogrel 75 MG Oral Tablet daily",
          "status": "pending",
          "note": ""
        },
        {
          "id": "60db56f7c50a04356cf85414",
          "task": "Take Amlodipine 5 MG Oral Tablet daily",
          "status": "pending",
          "note": ""
        },
        {
          "id": "60db56f7c50a04356cf85415",
          "task": "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Take Simvastatin 20 MG Oral Tablet daily",
        "Take Clopidogrel 75 MG Oral Tablet daily",
        "Take Amlodipine 5 MG Oral Tablet daily",
        "Use Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray as needed for chest pain"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>You have been diagnosed with part-time employment. Your vital signs indicate a body height of 186 cm, body weight of 104.2 kg, heart rate of 95/min, and respiratory rate of 13/min. Your lab results show glucose at 77.73 mg/dL, urea nitrogen at 18.7 mg/dL, creatinine at 1.33 mg/dL, calcium at 8.93 mg/dL, sodium at 142.06 mmol/L, potassium at 4.49 mmol/L, and chloride at 103.96 mmol/L. Your Hemoglobin A1c level is 5.94% and Carbon Dioxide is at 20.01 mmol/L.</p><h2>Treatment and Prescriptions:</h2><p>You have been prescribed Simvastatin 20 MG, Clopidogrel 75 MG, Amlodipine 5 MG, and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray. You also received the seasonal influenza vaccine.</p><h2>Advice and Recommendations:</h2><p>It is important to follow the medication schedule for effective management. Make necessary lifestyle changes, maintain a healthy diet, and consider follow-up appointments to assess your progress.</p></section>",
      "validatedShortSummary": "You have been diagnosed with part-time employment. Your treatment plan includes taking Simvastatin, Clopidogrel, Amlodipine, and using Nitroglycerin spray as needed. Follow these instructions closely to manage your condition effectively.",
      "validatedDoctorSummary": "The patient, a 48-year-old male, presented with a confirmed diagnosis of part-time employment. Vital signs and lab results indicate normal parameters. The treatment plan includes Simvastatin 20 MG, Clopidogrel 75 MG, Amlodipine 5 MG, and Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray. Lifestyle modifications, dietary recommendations, and regular follow-ups are advised for comprehensive management."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b9849c",
      "dateStart": "1984-02-17",
      "dateEnd": "1984-02-17",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": null,
      "resources": {
        "Condition": [
          "4ac39567-65bb-0214-39b9-be6d2fd8793a",
          "204b175e-3004-a395-0d11-cc2123bebd43"
        ],
        "Encounter": ["e44915f6-9666-521e-7c74-6f5a5035db88"],
        "DocumentReference": ["f3f3ac8e-a4a7-e37a-8231-d373cd4090b9"],
        "DiagnosticReport": ["e6af684c-89c1-2dde-1bac-ad2d61bf0d9f"]
      },
      "newDocs": [
        {
          "resourceType": "Condition",
          "lastUpdated": "1984-02-17",
          "startDate": "1984-02-17",
          "endDate": "1984-02-17",
          "verificationStatus": "confirmed",
          "display": "Limited social contact (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1984-02-17",
          "endDate": "1984-02-17",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1984-02-17",
          "startDate": "1984-02-17",
          "endDate": "1984-02-17",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1984-02-17",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1984-02-17",
          "result": null,
          "display": "History and physical note",
          "data": "\n1984-02-17\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 31 year-old non-hispanic black male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Humana.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding), limited social contact (finding). \n\n## Plan\n\n"
        }
      ],
      "pass_to_gpt": true,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984cc",
      "dateStart": "2001-06-15T04:29:47-04:00",
      "dateEnd": "2001-06-15T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["0c742d4e-9801-ee50-e75c-7a34c473b827"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2001-06-15T04:29:47-04:00",
          "endDate": "2001-06-15T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "430193006",
              "display": "Medication reconciliation (procedure)"
            },
            {
              "system": "sct",
              "code": "160904001",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984b3",
      "dateStart": "1981-02-13T03:29:47-05:00",
      "dateEnd": "1981-02-13T03:29:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["b09f56d8-ebb1-c09e-0822-eecaab58b4da"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1981-02-13T03:29:47-05:00",
          "endDate": "1981-02-13T03:29:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984bb",
      "dateStart": "1977-10-25T04:29:47-04:00",
      "dateEnd": "1977-10-25T04:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["be853a3c-a369-60a0-4335-f8a943a9f2d9"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1977-10-25T04:29:47-04:00",
          "endDate": "1977-10-25T04:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185345009",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984b4",
      "dateStart": "1982-04-22T17:37:23-05:00",
      "dateEnd": "1982-04-22T17:37:23-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["a4ede53f-eb14-77f9-547b-13a420c0e317"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1982-04-22T17:37:23-05:00",
          "endDate": "1982-04-22T17:37:23-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185345009",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b9849a",
      "dateStart": "1981-02-13",
      "dateEnd": "1981-02-13",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": null,
      "resources": {
        "Encounter": ["e756ebcd-40d3-59f6-257c-4b413d4e94e8"],
        "Condition": ["896c3120-7689-0630-2698-04d5a3f5f704"],
        "DiagnosticReport": ["45b65006-6ac8-b941-ce30-5aab77f23dcb"],
        "DocumentReference": ["2bcc5b79-ee6f-63fe-765b-543ebdce04b9"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1981-02-13",
          "endDate": "1981-02-13",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1981-02-13",
          "startDate": "1981-02-13",
          "endDate": "1981-02-13",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1981-02-13",
          "result": null,
          "display": "History and physical note",
          "data": "\n1981-02-13\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 28 year-old non-hispanic black male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Cigna Health.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\n\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1981-02-13",
          "type": "History and physical note",
          "data": null
        }
      ],
      "pass_to_gpt": true,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b98499",
      "dateStart": "1978-02-10",
      "dateEnd": "1978-02-10",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": null,
      "resources": {
        "DocumentReference": ["1d8f3ee8-ede0-6688-3c44-d72afdc56ab2"],
        "DiagnosticReport": ["6d104030-0831-cd27-915d-6f4db94d28db"],
        "Encounter": ["ed03c4f1-9865-7638-37d1-d7c1fe282363"],
        "Condition": ["c21907ce-d314-d9ac-87b5-e9dff5371c13"]
      },
      "newDocs": [
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1978-02-10",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1978-02-10",
          "result": null,
          "display": "History and physical note",
          "data": "\n1978-02-10\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 25 year-old non-hispanic black male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Humana.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\n\n"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1978-02-10",
          "endDate": "1978-02-10",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1978-02-10",
          "startDate": "1978-02-10",
          "endDate": "1978-02-10",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        }
      ],
      "pass_to_gpt": true,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b9849b",
      "dateStart": "1982-04-22",
      "dateEnd": "1982-04-22",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for symptom",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": null,
      "resources": {
        "Encounter": ["e47502eb-e574-2058-f1f9-4f19844e4da8"],
        "DiagnosticReport": ["fddd664d-828f-6216-1d82-8c6c14701e82"],
        "DocumentReference": ["770b9906-cc97-b02e-ce7f-fc05e93dfc5c"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "1982-04-22",
          "endDate": "1982-04-22",
          "type": "Encounter for symptom"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1982-04-22",
          "result": null,
          "display": "History and physical note",
          "data": "\n1982-04-22\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 29 year-old non-hispanic black male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Cigna Health.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\n\n\n## Plan\n\nThe patient was placed on a careplan:\n- respiratory therapy\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "1982-04-22",
          "type": "History and physical note",
          "data": null
        }
      ],
      "pass_to_gpt": true,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b98498",
      "dateStart": "1977-10-25",
      "dateEnd": "1977-10-25",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for symptom",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": null,
      "resources": {
        "Encounter": ["dffdcaf9-384a-3472-867c-2f852dc61851"],
        "DocumentReference": ["8a4b1f5e-6a2b-27e6-ad21-b2db37863dd4"],
        "DiagnosticReport": ["451877f1-cdc4-30db-096d-2b26411fb85c"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "1977-10-25",
          "endDate": "1977-10-25",
          "type": "Encounter for symptom"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "1977-10-25",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1977-10-25",
          "result": null,
          "display": "History and physical note",
          "data": "\n1977-10-25\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 24 year-old non-hispanic black male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Humana.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\n\n\n## Plan\n\nThe patient was placed on a careplan:\n- respiratory therapy\n"
        }
      ],
      "pass_to_gpt": true,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984ba",
      "dateStart": "1971-01-29T03:29:47-05:00",
      "dateEnd": "1971-01-29T03:29:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["57b70481-d187-a169-18e3-dac424b48b39"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1971-01-29T03:29:47-05:00",
          "endDate": "1971-01-29T03:29:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "224299000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984b2",
      "dateStart": "1978-02-10T03:29:47-05:00",
      "dateEnd": "1978-02-10T03:29:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["1fc36fe4-c6e2-0fe7-1880-7055a9316a3b"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1978-02-10T03:29:47-05:00",
          "endDate": "1978-02-10T03:29:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984b9",
      "dateStart": "1959-06-03T15:33:08-04:00",
      "dateEnd": "1959-06-03T15:33:08-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["86484930-2ac8-b028-c470-b0262ccaf50b"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1959-06-03T15:33:08-04:00",
          "endDate": "1959-06-03T15:33:08-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185345009",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b98497",
      "dateStart": "1971-01-29",
      "dateEnd": "1971-01-29",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": null,
      "resources": {
        "Condition": [
          "2f9b9ad8-6dd5-b94b-e7e7-d329d204cedb",
          "8695c578-79e7-b7fa-0d3b-be91b95d4a56"
        ],
        "DocumentReference": ["000d4e35-b81a-1870-8632-6916aa5e0767"],
        "DiagnosticReport": ["2a08a747-f9f1-bc69-d8f3-265f0bde499d"],
        "Encounter": ["b04db379-2092-c969-8968-39ab3557b605"]
      },
      "newDocs": [
        {
          "resourceType": "Condition",
          "lastUpdated": "1971-01-29",
          "startDate": "1971-01-29",
          "endDate": "1971-01-29",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1971-01-29",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1971-01-29",
          "result": null,
          "display": "History and physical note",
          "data": "\n1971-01-29\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 18 year-old non-hispanic black male.\n\n# Social History\n Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with received higher education (finding), full-time employment (finding). \n\n## Plan\n\n"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1971-01-29",
          "startDate": "1971-01-29",
          "endDate": "1971-01-29",
          "verificationStatus": "confirmed",
          "display": "Received higher education (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1971-01-29",
          "endDate": "1971-01-29",
          "type": "General examination of patient (procedure)"
        }
      ],
      "pass_to_gpt": true,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984b1",
      "dateStart": "1954-04-03T12:29:47-05:00",
      "dateEnd": "1954-04-03T12:29:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["5abdaf05-ed86-543f-1226-8a86b2ab6a9b"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1954-04-03T12:29:47-05:00",
          "endDate": "1954-04-03T12:29:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185347001",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b98496",
      "dateStart": "1959-06-03",
      "dateEnd": "1959-06-03",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for symptom",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": null,
      "resources": {
        "Encounter": ["853a4e65-da0d-d531-eb6e-458a70bcf552"],
        "DiagnosticReport": ["930f6fce-46f4-f96f-c872-ef9731908516"],
        "DocumentReference": ["6c2bd038-51dd-ffe2-f293-766baf4edad9"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "1959-06-03",
          "endDate": "1959-06-03",
          "type": "Encounter for symptom"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1959-06-03",
          "result": null,
          "display": "History and physical note",
          "data": "\n1959-06-03\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 6 year-old non-hispanic black male.\n\n# Social History\n Patient quite smoking at age 18 and is an alcoholic.\n\n\nPatient comes from a high socioeconomic background.\n\nPatient currently has UnitedHealthcare.\n\n# Allergies\neggs (edible) (substance)\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\n\n\n## Plan\n\nThe patient was placed on a careplan:\n- respiratory therapy\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "1959-06-03",
          "type": "History and physical note",
          "data": null
        }
      ],
      "pass_to_gpt": true,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b98495",
      "dateStart": "1954-04-20",
      "dateEnd": "1954-04-20",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for problem",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": null,
      "resources": {
        "AllergyIntolerance": ["7f020d47-51c8-740e-5233-1a6ef6484ddb"],
        "DiagnosticReport": ["cc4ecb86-9e8a-ea63-81ed-ac4ba0d49c34"],
        "DocumentReference": ["375f6a6c-9d12-efdc-c165-84686a83be04"],
        "Encounter": ["b1ca5d4d-e3b5-e65b-e900-3844ae30f421"]
      },
      "newDocs": [
        {
          "resourceType": "AllergyIntolerance",
          "startDate": "1954-04-20",
          "display": "Eggs (edible) (substance)",
          "category": "food",
          "reaction": null,
          "verificationStatus": "confirmed"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1954-04-20",
          "result": null,
          "display": "History and physical note",
          "data": "\n1954-04-20\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 1 year-old non-hispanic black male.\n\n# Social History\n Patient quite smoking at age 18 and is an alcoholic.\n\n\nPatient comes from a high socioeconomic background.\n\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with eggs (edible) (substance). \n\n## Plan\n\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "1954-04-20",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "1954-04-20",
          "endDate": "1954-04-20",
          "type": "Encounter for problem"
        }
      ],
      "pass_to_gpt": true,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b98494",
      "dateStart": "1954-04-03",
      "dateEnd": "1954-04-03",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for problem",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": null,
      "resources": {
        "Encounter": ["a889805b-20ca-0ba6-5b5c-e617ce99b0cc"],
        "DiagnosticReport": ["26609ba6-183b-fdc3-f306-4239ef45e255"],
        "DocumentReference": ["2496ccd9-f7fe-477e-69cf-1679adfbc354"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "1954-04-03",
          "endDate": "1954-04-03",
          "type": "Encounter for problem"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1954-04-03",
          "result": null,
          "display": "History and physical note",
          "data": "\n1954-04-03\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 1 year-old non-hispanic black male.\n\n# Social History\n Patient quite smoking at age 18 and is an alcoholic.\n\n\nPatient comes from a high socioeconomic background.\n\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\n\n\n## Plan\n\nThe patient was placed on a careplan:\n- self-care interventions (procedure)\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "1954-04-03",
          "type": "History and physical note",
          "data": null
        }
      ],
      "pass_to_gpt": true,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984b8",
      "dateStart": "1954-04-20T08:29:47-05:00",
      "dateEnd": "1954-04-20T08:29:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["ac4fe80a-eef1-c20d-c8d1-4d081dcb5c9c"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1954-04-20T08:29:47-05:00",
          "endDate": "1954-04-20T08:29:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185347001",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b9849e",
      "dateStart": "1987-02-20",
      "dateEnd": "1987-02-20",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Sommer719 Hilpert278",
      "npi2": null,
      "resources": {
        "DocumentReference": ["b5deb1f1-c29d-e491-5fc8-4917246034a2"],
        "Encounter": ["1fff2e1c-2dc4-c32d-4894-c1a62c7c80be"],
        "DiagnosticReport": ["bd631626-d33f-ccb1-6ba0-d7e6a975e961"],
        "Condition": ["4fa1910c-cb03-a42f-ceae-aedd59fdb024"]
      },
      "newDocs": [
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Sommer719 Hilpert278",
          "startDate": "1987-02-20",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Sommer719 Hilpert278",
          "location": null,
          "startDate": "1987-02-20",
          "endDate": "1987-02-20",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1987-02-20",
          "result": null,
          "display": "History and physical note",
          "data": "\n1987-02-20\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 34 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\n\n"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1987-02-20",
          "startDate": "1987-02-20",
          "endDate": "1987-02-20",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis: Full-time employment (finding)</p><p>Condition: Confirmed</p><p>No significant labs reported</p><h2>Treatment and Prescriptions</h2><p>No medications prescribed</p><p>No significant test results</p><h2>Advice and Recommendations</h2><p>Your lifestyle choices, such as smoking and alcohol consumption, may impact your health. Consider seeking support to address these habits</p><p>No follow-up steps recommended at this time</p></section>",
      "shortSummary": "You had a general examination where it was noted that you have a history of full-time employment. No active complaints or medications were reported. Lifestyle choices, such as smoking and alcohol consumption, were mentioned.",
      "doctorSummary": "Patient Abdul218, a 34-year-old non-hispanic black male, presented for a general examination with a history of full-time employment. No active complaints or medications were reported. Social history indicated active smoking and alcohol consumption. No significant findings or medications were noted. Considering the patient's lifestyle choices, addressing smoking and alcohol consumption is recommended to promote better health outcomes. No immediate follow-up necessary.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis: Full-time employment (finding)</p><p>Condition: Confirmed</p><p>No significant labs reported</p><h2>Treatment and Prescriptions</h2><p>No medications prescribed</p><p>No significant test results</p><h2>Advice and Recommendations</h2><p>Your lifestyle choices, such as smoking and alcohol consumption, may impact your health. Consider seeking support to address these habits</p><p>No follow-up steps recommended at this time</p></section>",
      "validatedShortSummary": "You had a general examination where it was noted that you have a history of full-time employment. No active complaints or medications were reported. Lifestyle choices, such as smoking and alcohol consumption, were mentioned.",
      "validatedDoctorSummary": "Patient Abdul218, a 34-year-old non-hispanic black male, presented for a general examination with a history of full-time employment. No active complaints or medications were reported. Social history indicated active smoking and alcohol consumption. No significant findings or medications were noted. Considering the patient's lifestyle choices, addressing smoking and alcohol consumption is recommended to promote better health outcomes. No immediate follow-up necessary."
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984b6",
      "dateStart": "1987-02-20T03:29:47-05:00",
      "dateEnd": "1987-02-20T03:29:47-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["5cd2daab-2c6c-ad83-cdbc-c1f5c8ff4914"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1987-02-20T03:29:47-05:00",
          "endDate": "1987-02-20T03:29:47-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984be",
      "dateStart": "1992-04-11T03:29:47-04:00",
      "dateEnd": "1992-04-11T03:29:47-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["a00fe78c-efa0-9b28-8c14-425c14b2d45f"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1992-04-11T03:29:47-04:00",
          "endDate": "1992-04-11T03:29:47-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185345009",
              "display": null
            },
            {
              "system": "sct",
              "code": "444814009",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "710841007",
              "display": null
            },
            {
              "system": "sct",
              "code": "866148006",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "713106006",
              "display": "Screening for drug abuse (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf3ff2915dbdf8c4b984a0",
      "dateStart": "1992-04-11",
      "dateEnd": "1992-04-11",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for symptom",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Lesley194 Fisher429",
      "npi2": null,
      "resources": {
        "Encounter": ["6afb13cd-d1c9-d1ac-5524-6b939b91ada4"],
        "Condition": ["eaf6ba1c-5f96-1e7c-fbbe-8ff6aec9e28a"],
        "DocumentReference": ["9a2608d2-61fb-eb03-29bf-c1747581ea26"],
        "DiagnosticReport": ["850dc9d8-a929-d292-e9fd-2ba511156dd0"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Lesley194 Fisher429",
          "location": null,
          "startDate": "1992-04-11",
          "endDate": "1992-04-11",
          "type": "Encounter for symptom"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1992-04-11",
          "startDate": "1992-04-11",
          "endDate": "1992-04-11",
          "verificationStatus": "confirmed",
          "display": "Viral sinusitis (disorder)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Lesley194 Fisher429",
          "startDate": "1992-04-11",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1992-04-11",
          "result": null,
          "display": "History and physical note",
          "data": "\n1992-04-11\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nAbdul218\n is a 39 year-old non-hispanic black male. Patient has a history of limited social contact (finding), full-time employment (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a high socioeconomic background.\n Patient has completed some college courses.\nPatient currently has Cigna Health.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nsimvastatin 20 mg oral tablet; nitroglycerin 0.4 mg/actuat mucosal spray\n\n# Assessment and Plan\nPatient is presenting with viral sinusitis (disorder), full-time employment (finding). \n\n## Plan\n\nThe following procedures were conducted:\n- assessment of anxiety (procedure)\n- screening for domestic abuse (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n- assessment of substance use (procedure)\n- screening for drug abuse (procedure)\n"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take simvastatin 20 mg oral tablet and nitroglycerin 0.4 mg/actuat mucosal spray as prescribed."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with viral sinusitis. The assessment also included screening for anxiety, domestic abuse, depression, and substance use.</p><h2>Treatment and Prescriptions</h2><p>The prescribed medications are simvastatin 20 mg oral tablet and nitroglycerin 0.4 mg/actuat mucosal spray.</p><h2>Advice and Recommendations</h2><p>It is advised to take the prescribed medications as directed. Follow-up with the healthcare provider if there are any changes in symptoms. It's also recommended to address any identified issues related to anxiety, depression, and substance use.</p></section>",
      "shortSummary": "You were diagnosed with viral sinusitis. Please take the prescribed medications, simvastatin and nitroglycerin. Follow the provided instructions and keep track of any changes in your symptoms.",
      "doctorSummary": "The patient, a 39-year-old male, presented with viral sinusitis. Medications prescribed include simvastatin 20 mg oral tablet and nitroglycerin 0.4 mg/actuat mucosal spray. The assessment also involved screening for anxiety, domestic abuse, depression, and substance use. Patient was noted to be an active smoker and alcoholic. Further follow-up is recommended to monitor symptoms and address any identified mental health and substance use concerns.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Take simvastatin 20 mg oral tablet and nitroglycerin 0.4 mg/actuat mucosal spray as prescribed."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with viral sinusitis. The assessment also included screening for anxiety, domestic abuse, depression, and substance use.</p><h2>Treatment and Prescriptions</h2><p>The prescribed medications are simvastatin 20 mg oral tablet and nitroglycerin 0.4 mg/actuat mucosal spray.</p><h2>Advice and Recommendations</h2><p>It is advised to take the prescribed medications as directed. Follow-up with the healthcare provider if there are any changes in symptoms. It's also recommended to address any identified issues related to anxiety, depression, and substance use.</p></section>",
      "validatedShortSummary": "You were diagnosed with viral sinusitis. Please take the prescribed medications, simvastatin and nitroglycerin. Follow the provided instructions and keep track of any changes in your symptoms.",
      "validatedDoctorSummary": "The patient, a 39-year-old male, presented with viral sinusitis. Medications prescribed include simvastatin 20 mg oral tablet and nitroglycerin 0.4 mg/actuat mucosal spray. The assessment also involved screening for anxiety, domestic abuse, depression, and substance use. Patient was noted to be an active smoker and alcoholic. Further follow-up is recommended to monitor symptoms and address any identified mental health and substance use concerns."
    }
  ],
  "randal@gmail.com": [
    {
      "_id": "65cf474334842823bec5ee2f",
      "dateStart": "2021-05-08T20:42:34-04:00",
      "dateEnd": "2021-05-08T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["5c916472-9528-569c-35ae-4091918242b9"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2021-05-08T20:42:34-04:00",
          "endDate": "2021-05-08T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "33879002",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee2c",
      "dateStart": "2021-04-18",
      "dateEnd": "2021-04-18",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Administration of vaccine to produce active immunity (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Keven605 Mueller846",
      "npi2": "UMASS MEMORIAL MEDICAL CENTER INC",
      "resources": {
        "DocumentReference": ["4e513d78-c55f-be8c-67bb-7195e9252484"],
        "DiagnosticReport": ["c7850cc6-e173-0dec-65e5-f1368803d12f"],
        "Immunization": ["f4e1f910-350e-9c60-3265-71454e0e94a5"],
        "Encounter": ["b0f79448-642a-09a3-fb9a-e792564bc4ff"]
      },
      "newDocs": [
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Keven605 Mueller846",
          "startDate": "2021-04-18",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2021-04-18",
          "result": null,
          "display": "History and physical note",
          "data": "\n2021-04-17\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), sprain of ankle, stress (finding), social isolation (finding), severe anxiety (panic) (finding.\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nacetaminophen 325 mg oral tablet\n\n# Assessment and Plan\n\n\n## Plan\nPatient was given the following immunizations: sars-cov-2 (covid-19) vaccine, mrna, spike protein, lnp, preservative free, 30 mcg/0.3ml dose. \n"
        },
        {
          "resourceType": "Immunization",
          "location": "UMASS MEMORIAL MEDICAL CENTER INC",
          "startDate": "2021-04-18",
          "display": "SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 30 mcg/0.3mL dose"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Keven605 Mueller846",
          "location": null,
          "startDate": "2021-04-18",
          "endDate": "2021-04-18",
          "type": "Administration of vaccine to produce active immunity (procedure)"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Schedule a follow-up appointment to discuss progress and any new symptoms or concerns",
        "Stop smoking and limit alcohol consumption to improve overall health and wellbeing",
        "Take prescribed acetaminophen 325 mg oral tablets as directed for pain relief",
        "Monitor for any adverse reactions such as fever, fatigue, or injection site pain after receiving the COVID-19 vaccine",
        "Rest and elevate the sprained ankle to aid in recovery and reduce swelling",
        "Seek support and therapy for managing severe anxiety and stress"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Randal152 is a 48 year-old male with a history of viral sinusitis, sprained ankle, severe anxiety, and social isolation. The patient presented with no specific complaints.</p><h2>Treatment and Prescriptions</h2><p>The patient received the SARS-COV-2 (COVID-19) vaccine and was prescribed acetaminophen 325 mg oral tablets for pain relief.</p><h2>Advice and Recommendations</h2><p>For the sprained ankle, rest and elevation are recommended. The patient is advised to monitor for any adverse reactions after the COVID-19 vaccine. Additionally, seeking support for severe anxiety and stress management is crucial. The patient should also consider lifestyle changes to limit alcohol consumption and stop smoking.</p></section>",
      "shortSummary": "You were given the COVID-19 vaccine, acetaminophen for pain relief, and advice to rest and elevate the sprained ankle. It's essential to monitor for vaccine side effects and seek support for severe anxiety. Schedule a follow-up appointment to discuss progress.",
      "doctorSummary": "Patient Randal152, a 48-year-old male, has a history of viral sinusitis, sprained ankle, severe anxiety, and social isolation. The patient received the SARS-COV-2 (COVID-19) vaccine and was prescribed acetaminophen 325 mg oral tablets for pain relief. Advice includes rest and elevation for the sprained ankle, monitoring for vaccine adverse reactions, seeking support for severe anxiety, and considering lifestyle changes to limit alcohol consumption and stop smoking.",
      "validatedTasksForUser": [
        {
          "id": "5f7d1b03b2fa65d7f94b6f99",
          "task": "Schedule follow-up appointment",
          "status": "pending",
          "note": ""
        },
        {
          "id": "62a3e4f8d9301c4e5609f153",
          "task": "Stop smoking and limit alcohol consumption",
          "status": "pending",
          "note": ""
        },
        {
          "id": "704ce8f9b5a316d2fd7410e6",
          "task": "Take prescribed acetaminophen 325 mg oral tablets as directed",
          "status": "pending",
          "note": ""
        },
        {
          "id": "719b1be3396af6f9ee5bdbea",
          "task": "Monitor for any adverse reactions post COVID-19 vaccine",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5324560c88f1759b6ae154cc",
          "task": "Rest and elevate sprained ankle",
          "status": "pending",
          "note": ""
        },
        {
          "id": "fe8cb21f6d594e56aade9c23",
          "task": "Seek support for severe anxiety and stress management",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Schedule a follow-up appointment to discuss progress and any new symptoms or concerns",
        "Stop smoking and limit alcohol consumption to improve overall health and wellbeing",
        "Take prescribed acetaminophen 325 mg oral tablets as directed for pain relief",
        "Monitor for any adverse reactions such as fever, fatigue, or injection site pain after receiving the COVID-19 vaccine",
        "Rest and elevate the sprained ankle to aid in recovery and reduce swelling",
        "Seek support and therapy for managing severe anxiety and stress"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Randal152 is a 48 year-old male with a history of viral sinusitis, sprained ankle, severe anxiety, and social isolation. The patient presented with no specific complaints.</p><h2>Treatment and Prescriptions</h2><p>The patient received the SARS-COV-2 (COVID-19) vaccine and was prescribed acetaminophen 325 mg oral tablets for pain relief.</p><h2>Advice and Recommendations</h2><p>For the sprained ankle, rest and elevation are recommended. The patient is advised to monitor for any adverse reactions after the COVID-19 vaccine. Additionally, seeking support for severe anxiety and stress management is crucial. The patient should also consider lifestyle changes to limit alcohol consumption and stop smoking.</p></section>",
      "validatedShortSummary": "You were given the COVID-19 vaccine, acetaminophen for pain relief, and advice to rest and elevate the sprained ankle. It's essential to monitor for vaccine side effects and seek support for severe anxiety. Schedule a follow-up appointment to discuss progress.",
      "validatedDoctorSummary": "Patient Randal152, a 48-year-old male, has a history of viral sinusitis, sprained ankle, severe anxiety, and social isolation. The patient received the SARS-COV-2 (COVID-19) vaccine and was prescribed acetaminophen 325 mg oral tablets for pain relief. Advice includes rest and elevation for the sprained ankle, monitoring for vaccine adverse reactions, seeking support for severe anxiety, and considering lifestyle changes to limit alcohol consumption and stop smoking."
    },
    {
      "_id": "65cf474334842823bec5ee2b",
      "dateStart": "2020-12-27T20:48:37-05:00",
      "dateEnd": "2020-12-27T20:48:37-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["ed9e2084-224e-1fd0-a3f0-b4dd0f6be6b6"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2020-12-27T20:48:37-05:00",
          "endDate": "2020-12-27T20:48:37-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "50849002",
              "display": null
            },
            {
              "system": "sct",
              "code": "44465007",
              "display": "Sprain of ankle (disorder)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee2d",
      "dateStart": "2021-04-17T20:42:34-04:00",
      "dateEnd": "2021-04-17T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["da8f1aa3-e91e-1835-02ad-08a1cef63c1d"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2021-04-17T20:42:34-04:00",
          "endDate": "2021-04-17T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "33879002",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee2e",
      "dateStart": "2021-05-09",
      "dateEnd": "2021-05-09",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Administration of vaccine to produce active immunity (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Keven605 Mueller846",
      "npi2": "UMASS MEMORIAL MEDICAL CENTER INC",
      "resources": {
        "Encounter": ["cf873fcd-06d6-ab62-224a-7fd30ee86af7"],
        "Immunization": ["145ea9d8-a84f-b9d1-2dc8-663f673f33ef"],
        "DiagnosticReport": ["282c0f03-fafb-6d19-5703-6394170d0a2b"],
        "DocumentReference": ["6ee69943-3f55-f0e9-fdc4-b3c51b0c39ab"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Keven605 Mueller846",
          "location": null,
          "startDate": "2021-05-09",
          "endDate": "2021-05-09",
          "type": "Administration of vaccine to produce active immunity (procedure)"
        },
        {
          "resourceType": "Immunization",
          "location": "UMASS MEMORIAL MEDICAL CENTER INC",
          "startDate": "2021-05-09",
          "display": "SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 30 mcg/0.3mL dose"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2021-05-09",
          "result": null,
          "display": "History and physical note",
          "data": "\n2021-05-08\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), sprain of ankle, stress (finding), social isolation (finding), severe anxiety (panic) (finding.\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nacetaminophen 325 mg oral tablet\n\n# Assessment and Plan\n\n\n## Plan\nPatient was given the following immunizations: sars-cov-2 (covid-19) vaccine, mrna, spike protein, lnp, preservative free, 30 mcg/0.3ml dose. \n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Keven605 Mueller846",
          "startDate": "2021-05-09",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Complete the course of the COVID-19 vaccine by taking the second dose as scheduled.",
        "Quit smoking and reduce alcohol consumption to improve overall health.",
        "Follow up with the healthcare provider to discuss anxiety and stress management."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>Primary diagnosis includes receiving the SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 30 mcg/0.3mL dose. No significant abnormality reported in the history and physical note.</p><h2>Treatment and Prescriptions:</h2><p>The treatment plan includes completing the COVID-19 vaccine course. No additional medications or test results were mentioned.</p><h2>Advice and Recommendations:</h2><p>Advised to complete the COVID-19 vaccine course, manage anxiety and stress, and reduce smoking and alcohol consumption. Follow-up recommended for further discussion on anxiety and stress management.</p></section>",
      "shortSummary": "You received the COVID-19 vaccine and were advised to complete the course, manage anxiety, and reduce smoking/alcohol intake for better health.",
      "doctorSummary": "The patient received the SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 30 mcg/0.3mL dose. No significant abnormality was reported in the history and physical note. The treatment plan includes completing the COVID-19 vaccine course. Advised the patient to manage anxiety and stress, and reduce smoking and alcohol consumption. Follow-up recommended for further discussion on anxiety and stress management.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Complete the course of the COVID-19 vaccine by taking the second dose as scheduled.",
        "Quit smoking and reduce alcohol consumption to improve overall health.",
        "Follow up with the healthcare provider to discuss anxiety and stress management."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>Primary diagnosis includes receiving the SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 30 mcg/0.3mL dose. No significant abnormality reported in the history and physical note.</p><h2>Treatment and Prescriptions:</h2><p>The treatment plan includes completing the COVID-19 vaccine course. No additional medications or test results were mentioned.</p><h2>Advice and Recommendations:</h2><p>Advised to complete the COVID-19 vaccine course, manage anxiety and stress, and reduce smoking and alcohol consumption. Follow-up recommended for further discussion on anxiety and stress management.</p></section>",
      "validatedShortSummary": "You received the COVID-19 vaccine and were advised to complete the course, manage anxiety, and reduce smoking/alcohol intake for better health.",
      "validatedDoctorSummary": "The patient received the SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 30 mcg/0.3mL dose. No significant abnormality was reported in the history and physical note. The treatment plan includes completing the COVID-19 vaccine course. Advised the patient to manage anxiety and stress, and reduce smoking and alcohol consumption. Follow-up recommended for further discussion on anxiety and stress management."
    },
    {
      "_id": "65cf474334842823bec5ee29",
      "dateStart": "2020-08-08T20:42:34-04:00",
      "dateEnd": "2020-08-08T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["cc8ee8e8-7519-ecbf-f2e4-3710b1ec958f"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2020-08-08T20:42:34-04:00",
          "endDate": "2020-08-08T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "422650009",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "713106006",
              "display": "Screening for drug abuse (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee2a",
      "dateStart": "2020-12-28",
      "dateEnd": "2020-12-28",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Emergency room admission (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Keven605 Mueller846",
      "npi2": null,
      "resources": {
        "Encounter": ["2804ccd1-0a0f-d741-836e-e309f195638e"],
        "Condition": ["a6c128d3-2da0-2241-2516-2d9aedbe3116"],
        "DiagnosticReport": ["f9eb0c65-4226-ee4a-e8ed-2d1e11a0eda2"],
        "MedicationRequest": ["422496e9-7a9d-d663-ab6a-7e8f9f6b6539"],
        "DocumentReference": ["f1995ad5-3aa8-c70e-f366-ba12825cd51e"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Keven605 Mueller846",
          "location": null,
          "startDate": "2020-12-28",
          "endDate": "2020-12-28",
          "type": "Emergency room admission (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2020-12-28",
          "startDate": "2020-12-28",
          "endDate": "2020-12-28",
          "verificationStatus": "confirmed",
          "display": "Sprain of ankle (disorder)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2020-12-28",
          "result": null,
          "display": "History and physical note",
          "data": "\n2020-12-27\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding.\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with sprain of ankle. \n\n## Plan\n\nThe patient was prescribed the following medications:\n- acetaminophen 325 mg oral tablet\nThe patient was placed on a careplan:\n- physical therapy procedure\n"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2020-12-28",
          "category": null,
          "display": "Acetaminophen 325 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": true,
          "patientInstruction": null
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Keven605 Mueller846",
          "startDate": "2020-12-28",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Attend physical therapy sessions as prescribed",
        "Take acetaminophen 325 mg oral tablet as needed for pain relief",
        "Reduce alcohol consumption and consider counseling for smoking cessation",
        "Follow up with the healthcare provider for a progress check in 2 weeks",
        "Update health insurance information if necessary"
      ],
      "longSummary": "<h2>Diagnosis and Condition Overview:</h2><p>Your primary diagnosis is a sprain of the ankle. The encounter was confirmed on December 28, and the condition requires medical attention.</p><h2>Treatment and Prescriptions:</h2><p>You have been prescribed acetaminophen 325 mg oral tablets for pain relief. A care plan for physical therapy has also been recommended to facilitate the healing process.</p><h2>Advice and Recommendations:</h2><p>It is advised to reduce alcohol consumption and consider counseling for smoking cessation. Additionally, a follow-up with the healthcare provider is scheduled in 2 weeks for a progress check. If there are any changes in your health insurance, please update the information.</p>",
      "shortSummary": "You have been diagnosed with a sprain of the ankle. You have been prescribed acetaminophen 325 mg for pain relief and are required to attend physical therapy sessions. It is essential to reduce alcohol consumption and consider counseling for smoking cessation. A follow-up with the healthcare provider is scheduled in 2 weeks for a progress check.",
      "doctorSummary": "On December 28, Randal152, a 48-year-old male, presented with a confirmed sprain of the ankle. The patient was prescribed acetaminophen 325 mg oral tablet as needed for pain relief and instructed to attend physical therapy sessions. It is recommended to address the patient's alcohol consumption and smoking habits. A follow-up appointment is scheduled in 2 weeks for a progress check. Patient background includes reports of violence, viral sinusitis, stress, social isolation, and severe anxiety. Socially, the patient is married, an active smoker, and an alcoholic. The patient comes from a middle socioeconomic background and has a high school education. The patient currently has Aetna as their insurance provider.",
      "validatedTasksForUser": [
        {
          "id": "605eef9a4e38350015cdefb2",
          "task": "Attend physical therapy sessions as prescribed",
          "status": "pending",
          "note": ""
        },
        {
          "id": "605eef9a4e38350015cdefb3",
          "task": "Take acetaminophen 325 mg oral tablet as needed for pain relief",
          "status": "pending",
          "note": ""
        },
        {
          "id": "605eef9a4e38350015cdefb4",
          "task": "Reduce alcohol consumption and consider counseling for smoking cessation",
          "status": "pending",
          "note": ""
        },
        {
          "id": "605eef9a4e38350015cdefb5",
          "task": "Follow up with the healthcare provider for a progress check in 2 weeks",
          "status": "pending",
          "note": ""
        },
        {
          "id": "605eef9a4e38350015cdefb6",
          "task": "Update health insurance information if necessary",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Attend physical therapy sessions as prescribed",
        "Take acetaminophen 325 mg oral tablet as needed for pain relief",
        "Reduce alcohol consumption and consider counseling for smoking cessation",
        "Follow up with the healthcare provider for a progress check in 2 weeks",
        "Update health insurance information if necessary"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>Your primary diagnosis is a sprain of the ankle. The encounter was confirmed on December 28, and the condition requires medical attention.</p><h2>Treatment and Prescriptions:</h2><p>You have been prescribed acetaminophen 325 mg oral tablets for pain relief. A care plan for physical therapy has also been recommended to facilitate the healing process.</p><h2>Advice and Recommendations:</h2><p>It is advised to reduce alcohol consumption and consider counseling for smoking cessation. Additionally, a follow-up with the healthcare provider is scheduled in 2 weeks for a progress check. If there are any changes in your health insurance, please update the information.</p></section>",
      "validatedShortSummary": "You have been diagnosed with a sprain of the ankle. You have been prescribed acetaminophen 325 mg for pain relief and are required to attend physical therapy sessions. It is essential to reduce alcohol consumption and consider counseling for smoking cessation. A follow-up with the healthcare provider is scheduled in 2 weeks for a progress check.",
      "validatedDoctorSummary": "On December 28, Randal152, a 48-year-old male, presented with a confirmed sprain of the ankle. The patient was prescribed acetaminophen 325 mg oral tablet as needed for pain relief and instructed to attend physical therapy sessions. It is recommended to address the patient's alcohol consumption and smoking habits. A follow-up appointment is scheduled in 2 weeks for a progress check. Patient background includes reports of violence, viral sinusitis, stress, social isolation, and severe anxiety. Socially, the patient is married, an active smoker, and an alcoholic. The patient comes from a middle socioeconomic background and has a high school education. The patient currently has Aetna as their insurance provider."
    },
    {
      "_id": "65cf474334842823bec5ee28",
      "dateStart": "2018-05-21T22:42:34-04:00",
      "dateEnd": "2018-05-21T22:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["aa8305ce-73d4-8a97-ef26-65ad425e0cad"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2018-05-21T22:42:34-04:00",
          "endDate": "2018-05-21T22:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185345009",
              "display": null
            },
            {
              "system": "sct",
              "code": "444814009",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee27",
      "dateStart": "2020-08-09",
      "dateEnd": "2020-08-09",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Christi444 Swaniawski813",
      "npi2": "SOUTH COUNTY PHYSICAL THERAPY INC",
      "resources": {
        "Condition": [
          "17433522-13c1-47cd-bcc2-1989891ea5f1",
          "8f0d2624-ec9d-6b63-e572-ecd591b66879"
        ],
        "Vitals": [
          "3e98a04c-8942-232b-e540-d0bf4a725e43",
          "a6964774-4e3d-981c-72a7-52ddc55abd24",
          "47aa1eae-833e-abd9-b93e-84b8b050fdc2",
          "dad4df00-6238-aef0-9624-31a656178ac7",
          "11df3db9-dd6f-006e-bc63-5159963030a7",
          "1e309096-f3c7-c906-abd3-b8950c2d8021"
        ],
        "Encounter": ["dfccb464-61f2-7099-5337-d481352506bf"],
        "Procedure": [
          "370eb455-e8e3-4f5f-e7b0-67d4f70cad48",
          "f8817ed1-6a85-750d-d384-bc373e6818ab",
          "af2a15dd-f7e1-4b1b-db8c-fd9395c70b58",
          "19eb0183-b8c3-cd42-d45c-34534e90001d",
          "696301ce-4ee3-5812-7b18-d51ac276a184"
        ],
        "Immunization": ["5a58293f-5c71-323b-0773-87aff17265e9"],
        "DiagnosticReport": [
          "33fefd04-5c38-f0ad-8445-46a9a7aaa3b9",
          "567dd914-a8d5-c148-0fc7-6d4ef3ca897d",
          "99f06cdf-aa51-3df1-6ff6-1b45dd4b9333"
        ],
        "DocumentReference": ["dd1d6fb5-84fc-07b3-0d9a-58df788875fc"]
      },
      "newDocs": [
        {
          "resourceType": "Condition",
          "lastUpdated": "2020-08-09",
          "startDate": "2020-08-09",
          "endDate": "2020-08-09",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2020-08-09",
          "startDate": "2020-08-09",
          "endDate": "2020-08-09",
          "verificationStatus": "confirmed",
          "display": "Social isolation (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "2020-08-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 175,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Christi444 Swaniawski813",
          "location": null,
          "startDate": "2020-08-09",
          "endDate": "2020-08-09",
          "type": "General examination of patient (procedure)"
        },
        {
          "startDate": "2020-08-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 86.9,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "2020-08-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 4,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "2020-08-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 28.38,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "2020-08-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 77,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2020-08-09",
          "endDate": "2020-08-09",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "Immunization",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2020-08-09",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2020-08-09",
          "endDate": "2020-08-09",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2020-08-09",
          "endDate": "2020-08-09",
          "display": "Depression screening (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2020-08-09",
          "result": null,
          "display": "History and physical note",
          "data": "\n2020-08-08\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 48 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding.\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Anthem.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding), social isolation (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n- assessment of substance use (procedure)\n- screening for drug abuse (procedure)\n"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2020-08-09",
          "endDate": "2020-08-09",
          "display": "Screening for drug abuse (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2020-08-09",
          "result": "urn:uuid:dacbb83d-6141-46e8-0759-fc4a4b28030b",
          "display": "Drug Abuse Screening Test-10 [DAST-10]",
          "data": null
        },
        {
          "startDate": "2020-08-09",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 13,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2020-08-09",
          "endDate": "2020-08-09",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Christi444 Swaniawski813",
          "startDate": "2020-08-09",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2020-08-09",
          "result": "urn:uuid:f7fc1025-2c03-7ee6-c907-f46c27ceeb43",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Follow up on recommended immunizations and screening for drug abuse",
        "Consider making lifestyle changes to address social isolation and anxiety"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes full-time employment and social isolation. The patient also has a history of viral sinusitis, stress, and severe anxiety.</p><h2>Treatment and Prescriptions</h2><p>The patient received an influenza vaccine and underwent multiple screenings, including assessment of substance use and various depression screenings. No medications were prescribed. The Drug Abuse Screening Test-10 was performed.</p><h2>Advice and Recommendations</h2><p>Follow-up is recommended for depression screening and substance use assessment. Lifestyle changes to address social isolation and anxiety are advised.</p></section>",
      "shortSummary": "You visited the healthcare provider for full-time employment and social isolation. You were given an influenza vaccine and underwent various screenings. Follow-up for depression screening and substance use assessment is recommended.",
      "doctorSummary": "The patient presented with full-time employment and social isolation as primary concerns. A comprehensive assessment was conducted, including immunization, substance use assessment, and various screenings for depression and drug abuse. Follow-up for specific screenings and lifestyle adjustments is recommended.",
      "validatedTasksForUser": [
        {
          "id": "5f4b32c68304a079181f7a8b",
          "task": "Schedule follow-up for depression screening and assessment of substance use",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Follow up on recommended immunizations and screenings for drug abuse. Consider making lifestyle changes to address social isolation and anxiety."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes full-time employment and social isolation. The patient also has a history of viral sinusitis, stress, and severe anxiety.</p><h2>Treatment and Prescriptions</h2><p>The patient received an influenza vaccine and underwent multiple screenings, including assessment of substance use and various depression screenings. No medications were prescribed. The Drug Abuse Screening Test-10 was performed.</p><h2>Advice and Recommendations</h2><p>Follow-up is recommended for depression screening and substance use assessment. Lifestyle changes to address social isolation and anxiety are advised.</p></section>",
      "validatedShortSummary": "You visited the healthcare provider for full-time employment and social isolation. You were given an influenza vaccine and underwent various screenings. Follow-up for recommended immunizations, screenings, and lifestyle changes is recommended.",
      "validatedDoctorSummary": "The patient presented with full-time employment and social isolation as primary concerns. A comprehensive assessment was conducted, including immunization, substance use assessment, and various screenings for depression and drug abuse. Follow-up for specific screenings and lifestyle adjustments is recommended."
    },
    {
      "_id": "65cf474334842823bec5ee23",
      "dateStart": "2017-12-22T06:42:34-05:00",
      "dateEnd": "2017-12-22T06:42:34-05:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["7edad877-ec24-d688-2d3d-a06e45ea3c9e"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2017-12-22T06:42:34-05:00",
          "endDate": "2017-12-22T06:42:34-05:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185345009",
              "display": null
            },
            {
              "system": "sct",
              "code": "444814009",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee22",
      "dateStart": "2017-12-22",
      "dateEnd": "2017-12-22",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for symptom",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Alix578 Lynch190",
      "npi2": null,
      "resources": {
        "Encounter": ["a4991d08-bd17-4275-6755-f70b5619fa90"],
        "Condition": ["20b5fb77-3fd3-75b3-9d4b-eb43687da6d9"],
        "DiagnosticReport": ["e05ff35b-cb33-ba05-cbb0-c7e4ae930b1d"],
        "DocumentReference": ["7e7404a9-f770-ff76-025e-7f462ddc9a4e"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Alix578 Lynch190",
          "location": null,
          "startDate": "2017-12-22",
          "endDate": "2017-12-22",
          "type": "Encounter for symptom"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2017-12-22",
          "startDate": "2017-12-22",
          "endDate": "2017-12-22",
          "verificationStatus": "confirmed",
          "display": "Viral sinusitis (disorder)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2017-12-22",
          "result": null,
          "display": "History and physical note",
          "data": "\n2017-12-22\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 45 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), stress (finding), social isolation (finding), severe anxiety (panic) (finding.\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Humana.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with viral sinusitis (disorder). \n\n## Plan\n\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Alix578 Lynch190",
          "startDate": "2017-12-22",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis: Viral sinusitis. There were no significant labs in the diagnostic report.</p><h2>Treatment and Prescriptions</h2><p>No active medications were prescribed. The encounter was for symptom management.</p><h2>Advice and Recommendations</h2><p>The healthcare provider diagnosed you with viral sinusitis. They recommended managing the symptoms and might have discussed lifestyle changes and home remedies. Please follow up for any worsening of symptoms or new developments.</p></section>",
      "shortSummary": "You visited on 22nd December 2017 for symptom encounter. You were diagnosed with viral sinusitis. No active medications were prescribed. Please read the detailed information below for comprehensive details.",
      "doctorSummary": "During the encounter on 22nd December 2017, the patient presented with symptoms leading to the diagnosis of viral sinusitis. No active medications were prescribed, and the encounter focused on symptom management. Lifestyle changes and symptom management were advised with a follow-up for any worsening or new developments.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis: Viral sinusitis. No significant labs were found in the diagnostic report.</p><h2>Treatment and Prescriptions</h2><p>No active medications were prescribed. The encounter was for symptom management.</p><h2>Advice and Recommendations</h2><p>The healthcare provider diagnosed you with viral sinusitis. They recommended managing the symptoms and might have discussed lifestyle changes and home remedies. Please follow up for any worsening of symptoms or new developments.</p></section>",
      "validatedShortSummary": "You visited on 22nd December 2017 for a symptom encounter and were diagnosed with viral sinusitis. No active medications were prescribed. Please read the detailed information below for comprehensive details.",
      "validatedDoctorSummary": "During the encounter on 22nd December 2017, the patient presented with symptoms leading to the diagnosis of viral sinusitis. No active medications were prescribed, and the encounter focused on symptom management. Lifestyle changes and symptom management were advised with a follow-up for any worsening or new developments."
    },
    {
      "_id": "65cf474334842823bec5ee21",
      "dateStart": "2016-07-30T20:42:34-04:00",
      "dateEnd": "2016-07-30T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["d6a4d6bc-7639-471e-cdab-16545876c236"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2016-07-30T20:42:34-04:00",
          "endDate": "2016-07-30T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "73595000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710841007",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "713106006",
              "display": "Screening for drug abuse (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee20",
      "dateStart": "2014-07-26T20:42:34-04:00",
      "dateEnd": "2014-07-26T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["2070b17f-f4b6-f017-9466-f9b58bdb7ddc"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2014-07-26T20:42:34-04:00",
          "endDate": "2014-07-26T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "422650009",
              "display": null
            },
            {
              "system": "sct",
              "code": "710841007",
              "display": null
            },
            {
              "system": "sct",
              "code": "80583007",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee11",
      "dateStart": "2016-07-31",
      "dateEnd": "2016-07-31",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Christi444 Swaniawski813",
      "npi2": "SOUTH COUNTY PHYSICAL THERAPY INC",
      "resources": {
        "Vitals": [
          "6daa1c79-6c5c-253a-0df0-fe323ea414cd",
          "9505259e-6fd0-2bac-0dd2-edf6bc03301a",
          "9a4916bc-a50e-2861-ff07-b105c1c89b0d",
          "492372a0-b173-1823-3b0e-c73db0afcb98",
          "84c28053-4023-6194-2268-acc2ab95b163",
          "dbe5702c-cc4f-0363-a2fe-49386a7258f7"
        ],
        "Encounter": ["b10ff021-e368-9319-bfcc-903819a0134b"],
        "Procedure": [
          "3cc6eb74-a111-49dd-9c9a-fb98fec0e9d1",
          "3767b43c-0744-13a7-bb95-062daa40af01",
          "5212524f-26c9-d10d-6498-9cca067a19fb",
          "364f4f79-be18-c4c2-2df5-6b969473fa0c",
          "42db7c11-e4bd-1963-d661-c1912f2687af",
          "4889a352-4e1c-6c2f-017c-d39618927d9c"
        ],
        "DiagnosticReport": [
          "16112549-191b-ab4d-bc58-ba10012b08d5",
          "14e25fca-3e84-c3d5-7fe5-3cb24abbd618",
          "c5d4252c-4b25-cda7-9f26-848b5e61d480",
          "497ac50e-e1f6-4cdb-df88-4f82558f2bbc"
        ],
        "Immunization": ["41e3699c-babc-a411-9e14-5e19b7c83e6d"],
        "DocumentReference": ["692c6c37-da39-59a9-4404-2aeb9e0bb48d"],
        "Condition": [
          "2b2208a7-d049-e46e-c974-4dc9ec955efb",
          "16806666-2f7c-3f39-ef21-f4544b30a118"
        ]
      },
      "newDocs": [
        {
          "startDate": "2016-07-31",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 175,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Christi444 Swaniawski813",
          "location": null,
          "startDate": "2016-07-31",
          "endDate": "2016-07-31",
          "type": "General examination of patient (procedure)"
        },
        {
          "startDate": "2016-07-31",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 86.9,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "2016-07-31",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 15,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "2016-07-31",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 28.38,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "2016-07-31",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 60,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2016-07-31",
          "endDate": "2016-07-31",
          "display": "Assessment of anxiety (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2016-07-31",
          "result": "urn:uuid:fe77ada4-aa1b-03e8-3578-40d02628dd94",
          "display": "Generalized anxiety disorder 7 item (GAD-7)",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2016-07-31",
          "endDate": "2016-07-31",
          "display": "Depression screening (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2016-07-31",
          "endDate": "2016-07-31",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2016-07-31",
          "result": "urn:uuid:450c8926-870b-379b-16ca-e37fc26d4c28",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2016-07-31",
          "endDate": "2016-07-31",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "Immunization",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2016-07-31",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2016-07-31",
          "endDate": "2016-07-31",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2016-07-31",
          "endDate": "2016-07-31",
          "display": "Screening for drug abuse (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2016-07-31",
          "result": null,
          "display": "History and physical note",
          "data": "\n2016-07-30\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 44 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), stress (finding), social isolation (finding), severe anxiety (panic) (finding.\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Cigna Health.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding), stress (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- assessment of anxiety (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n- assessment of substance use (procedure)\n- screening for drug abuse (procedure)\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Christi444 Swaniawski813",
          "startDate": "2016-07-31",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2016-07-31",
          "result": "urn:uuid:17a631da-414d-616a-26b4-faa69c2141cc",
          "display": "Drug Abuse Screening Test-10 [DAST-10]",
          "data": null
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2016-07-31",
          "startDate": "2016-07-31",
          "endDate": "2016-07-31",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2016-07-31",
          "startDate": "2016-07-31",
          "endDate": "2016-07-31",
          "verificationStatus": "confirmed",
          "display": "Stress (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "2016-07-31",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 1,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take prescribed medications as directed by the healthcare provider.",
        "Ensure to get plenty of rest and maintain a healthy diet.",
        "Consider seeking therapy or counseling for addressing anxiety and substance use concerns.",
        "Quit smoking and reduce alcohol intake for better overall health."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes full-time employment, stress, anxiety, and substance use. No significant abnormality in vitals.</p><h2>Treatment and Prescriptions</h2><p>Received influenza vaccination. No specific medications prescribed. Screening and assessments conducted for anxiety, depression, and substance use.</p><h2>Advice and Recommendations</h2><p>Consider therapy or counseling for addressing anxiety and substance use concerns. Lifestyle changes include quitting smoking, reducing alcohol intake, and maintaining a healthy diet and rest.</p></section>",
      "shortSummary": "You were assessed for full-time employment, stress, anxiety, and substance use. Received influenza vaccination. Follow medication instructions, rest, and maintain a healthy lifestyle. Consider therapy for anxiety and substance use.",
      "doctorSummary": "The patient, a 44-year-old non-hispanic white male, presented with findings related to full-time employment and stress. Screening and assessments were conducted for anxiety, depression, and substance use. The patient received an influenza vaccination and was advised to consider therapy or counseling for anxiety and substance use concerns. Lifestyle changes such as quitting smoking, reducing alcohol intake, and maintaining a healthy diet and rest were recommended.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Take prescribed medications as directed by the healthcare provider.",
        "Ensure to get plenty of rest and maintain a healthy diet.",
        "Consider seeking therapy or counseling for addressing anxiety and substance use concerns.",
        "Quit smoking and reduce alcohol intake for better overall health."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes full-time employment, stress, anxiety, and substance use. No significant abnormality in vitals.</p><h2>Treatment and Prescriptions</h2><p>Received influenza vaccination. No specific medications prescribed. Screening and assessments conducted for anxiety, depression, and substance use.</p><h2>Advice and Recommendations</h2><p>Consider therapy or counseling for addressing anxiety and substance use concerns. Lifestyle changes include quitting smoking, reducing alcohol intake, and maintaining a healthy diet and rest.</p></section>",
      "validatedShortSummary": "You were assessed for full-time employment, stress, anxiety, and substance use. Received influenza vaccination. Follow medication instructions, rest, and maintain a healthy lifestyle. Consider therapy for anxiety and substance use.",
      "validatedDoctorSummary": "The patient, a 44-year-old non-hispanic white male, presented with findings related to full-time employment and stress. Screening and assessments were conducted for anxiety, depression, and substance use. The patient received an influenza vaccination and was advised to consider therapy or counseling for anxiety and substance use concerns. Lifestyle changes such as quitting smoking, reducing alcohol intake, and maintaining a healthy diet and rest were recommended."
    },
    {
      "_id": "65cf474334842823bec5ee10",
      "dateStart": "2014-07-27",
      "dateEnd": "2014-07-27",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Christi444 Swaniawski813",
      "npi2": "SOUTH COUNTY PHYSICAL THERAPY INC",
      "resources": {
        "Encounter": ["ea288f9d-48a8-792e-6b49-02a8c5822fa8"],
        "Vitals": [
          "09372c23-5f9c-610d-15c1-9cd21c1b70e6",
          "0de8e133-4dcd-505c-ef7d-be3c41bcaf03",
          "005f79e0-abaf-6567-235a-68895c850b76",
          "f2e3e9b8-1875-70bc-2759-67117dd23d81",
          "68bb093f-3108-b6f5-1f03-8a0751fbbbeb",
          "85212e92-c5ec-e672-8994-a2cc8d15c587"
        ],
        "Condition": [
          "4a6e6222-295e-8511-03a5-295b02478f25",
          "6ae885d3-c0b8-45b7-1f16-2e70eca4b871",
          "479562fe-767d-9bde-4d6d-458b3493a710"
        ],
        "Labs": [
          "18a0adaf-4c9e-af4c-89ad-71bc1d3ba008",
          "0f9b61d3-b99c-1502-43d1-b7390444577a",
          "80c7c09b-1b7e-d0a9-7b38-be949240ab9a",
          "88d72844-b627-88f3-8eee-2aeb3700a8a9"
        ],
        "Procedure": [
          "48fcf0ef-7bad-28a3-601a-232ae143d8fe",
          "ff99c8fc-c435-e6ad-7f62-2c64cdffa084",
          "898cfbb9-29e8-f1fd-dadb-ec775e170158",
          "2555b135-2a56-13bf-e738-80f3e2647003"
        ],
        "DiagnosticReport": [
          "02e0c960-d11f-f3b8-996f-dc07e0411a9a",
          "3d54e9f4-f4b2-f465-82f3-e931485eb524",
          "95fa84ff-9146-f6c7-4fcd-f8d5b111de57",
          "f9b79f36-ef43-b4b0-573d-b44707eb2dd7"
        ],
        "DocumentReference": ["9ee78cfb-7beb-82da-e702-28350f84ea9b"],
        "Immunization": [
          "30ed4ab2-c9c6-ebc5-ff50-014f98b6bd0a",
          "c5880b59-381d-7183-0dd8-d72fbd775461",
          "12496c1b-fe27-d118-2667-4dfc4cf3788a"
        ]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Christi444 Swaniawski813",
          "location": null,
          "startDate": "2014-07-27",
          "endDate": "2014-07-27",
          "type": "General examination of patient (procedure)"
        },
        {
          "startDate": "2014-07-27",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 86.9,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2014-07-27",
          "startDate": "2014-07-27",
          "endDate": "2014-07-27",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2014-07-27",
          "startDate": "2014-07-27",
          "endDate": "2014-07-27",
          "verificationStatus": "confirmed",
          "display": "Social isolation (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2014-07-27",
          "startDate": "2014-07-27",
          "endDate": "2014-07-27",
          "verificationStatus": "confirmed",
          "display": "Severe anxiety (panic) (finding",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "2014-07-27",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 175,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "2014-07-27",
          "resourceType": "Labs",
          "result": 112.3,
          "display": "Cholesterol in LDL [Mass/volume] in Serum or Plasma by Direct assay",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2014-07-27",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 77,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "2014-07-27",
          "resourceType": "Labs",
          "result": 197.25,
          "display": "Cholesterol [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2014-07-27",
          "resourceType": "Labs",
          "result": 111.41,
          "display": "Triglyceride [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2014-07-27",
          "resourceType": "Labs",
          "result": 62.67,
          "display": "Cholesterol in HDL [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2014-07-27",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 4,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "2014-07-27",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 28.38,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "2014-07-27",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 13,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2014-07-27",
          "endDate": "2014-07-27",
          "display": "Assessment of anxiety (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2014-07-27",
          "result": null,
          "display": "History and physical note",
          "data": "\n2014-07-26\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 42 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), stress (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Blue Cross Blue Shield.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding), social isolation (finding), severe anxiety (panic) (finding. \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free, td (adult) preservative free, hep a, adult. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- assessment of anxiety (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Christi444 Swaniawski813",
          "startDate": "2014-07-27",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Immunization",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2014-07-27",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2014-07-27",
          "endDate": "2014-07-27",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2014-07-27",
          "endDate": "2014-07-27",
          "display": "Depression screening (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2014-07-27",
          "result": "urn:uuid:0f9b61d3-b99c-1502-43d1-b7390444577a",
          "display": "Lipid Panel",
          "data": null
        },
        {
          "resourceType": "Immunization",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2014-07-27",
          "display": "Hep A, adult"
        },
        {
          "resourceType": "Immunization",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2014-07-27",
          "display": "tetanus and diphtheria toxoids, adsorbed, preservative free, for adult use (5 Lf of tetanus toxoid and 2 Lf of diphtheria toxoid)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2014-07-27",
          "endDate": "2014-07-27",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2014-07-27",
          "result": "urn:uuid:74380671-59a5-23ea-a504-b6e33b4d6d7c",
          "display": "Generalized anxiety disorder 7 item (GAD-7)",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2014-07-27",
          "result": "urn:uuid:56dabe9a-8f80-d8de-b5d0-d3f574ee4be1",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Follow the prescribed immunizations and procedures",
        "Seek supportive care and therapy for anxiety and depression"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You were diagnosed with severe anxiety (panic), social isolation, and full-time employment. Your lab results show high cholesterol and triglyceride levels.</p><h2>Treatment and Prescriptions</h2><p>You received immunizations for influenza and Hep A. No medications were prescribed. Your vital signs and lab results indicate high cholesterol and triglyceride levels.</p><h2>Advice and Recommendations</h2><p>Follow up with necessary supportive care and therapeutic interventions. Seek supportive care and therapy for anxiety and depression.</p></section>",
      "shortSummary": "You were diagnosed with severe anxiety, social isolation, and full-time employment. You received immunizations for influenza and Hep A. Your vital signs and lab results indicate high cholesterol and triglyceride levels. Follow up with necessary supportive care and therapeutic interventions.",
      "doctorSummary": "Patient presented with severe anxiety, social isolation, and full-time employment. Lab results showed high cholesterol and triglyceride levels. Immunizations for influenza and Hep A were administered. No specific medications were prescribed. Advised to follow up with necessary supportive care and therapeutic interventions for anxiety and depression.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Follow the prescribed immunizations and procedures",
        "Seek supportive care and therapy for anxiety and depression"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You were diagnosed with severe anxiety (panic), social isolation, and full-time employment. Your lab results show high cholesterol and triglyceride levels.</p><h2>Treatment and Prescriptions</h2><p>You received immunizations for influenza and Hep A. No medications were prescribed. Your vital signs and lab results indicate high cholesterol and triglyceride levels.</p><h2>Advice and Recommendations</h2><p>Follow up with necessary supportive care and therapeutic interventions. Seek supportive care and therapy for anxiety and depression.</p></section>",
      "validatedShortSummary": "You were diagnosed with severe anxiety, social isolation, and full-time employment. You received immunizations for influenza and Hep A. Your vital signs and lab results indicate high cholesterol and triglyceride levels. Follow up with necessary supportive care and therapeutic interventions.",
      "validatedDoctorSummary": "Patient presented with severe anxiety, social isolation, and full-time employment. Lab results showed high cholesterol and triglyceride levels. Immunizations for influenza and Hep A were administered. No specific medications were prescribed. Advised to follow up with necessary supportive care and therapeutic interventions for anxiety and depression."
    },
    {
      "_id": "65cf474334842823bec5ee1f",
      "dateStart": "2012-07-21T20:42:34-04:00",
      "dateEnd": "2012-07-21T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["f54e411e-84c8-ae1e-8694-a7ec16c91982"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2012-07-21T20:42:34-04:00",
          "endDate": "2012-07-21T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "430193006",
              "display": "Medication reconciliation (procedure)"
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "73595000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710841007",
              "display": null
            },
            {
              "system": "sct",
              "code": "866148006",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee1e",
      "dateStart": "2012-06-27T20:42:34-04:00",
      "dateEnd": "2012-06-27T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["89b727e3-1955-4559-eb19-448a4335ec27"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2012-06-27T20:42:34-04:00",
          "endDate": "2012-06-27T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185347001",
              "display": null
            },
            {
              "system": "sct",
              "code": "239873007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee1d",
      "dateStart": "2009-10-03T20:42:34-04:00",
      "dateEnd": "2009-10-03T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["6cfcaa09-9356-0a02-eb86-8a9df7421d04"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2009-10-03T20:42:34-04:00",
          "endDate": "2009-10-03T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "424393004",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee0f",
      "dateStart": "2012-07-22",
      "dateEnd": "2012-07-22",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Christi444 Swaniawski813",
      "npi2": "SOUTH COUNTY PHYSICAL THERAPY INC",
      "resources": {
        "Vitals": [
          "b7c9f1df-3997-c7bd-7e49-d24d1df29b17",
          "52820253-57c7-7050-ee20-31c0e565d7f4",
          "10d7a007-da2c-7052-a3ab-479f3c090cc0",
          "8a5c870c-7a4e-7761-46c8-e51cac66c4e1",
          "6fad4469-a6c2-abd4-5ba6-608d7aaf9bf7",
          "3eb04590-5e79-db63-2f12-b6d980caed32"
        ],
        "Labs": [
          "dbcc4bb2-1501-3b4a-29f4-d0bc4f997681",
          "c7a22c3e-38ac-f278-50ba-22136f75c484",
          "ab5dbc0d-1f31-41aa-5823-c95b0a3bcc28",
          "ae18af00-83e4-7e53-25e5-c62dd3f4c0a0",
          "a16ae8c6-7642-b6fd-6c27-4e61275f9cfc",
          "66da22fa-1601-3857-309f-31383ae7199d",
          "0e139078-a174-dc0e-2e49-6700d160d0e5",
          "0af14719-ab98-1ba6-a3ee-f758d5ab5b94",
          "f7a1f8ab-dc34-1b5d-c4b7-18aeb2f4c3dc",
          "e3d48b02-25d5-4fa7-771e-b154c5e9942f",
          "9d9af426-4629-ffc4-f1c3-cda6fc793b86"
        ],
        "Condition": [
          "ea04112b-50f1-d72e-320d-36721b51f115",
          "0bfd0140-9684-4d55-a26f-0d83e1667cab"
        ],
        "Procedure": [
          "34cc4e14-403c-bfba-4084-32fd74f1276d",
          "e1fb6028-239c-7f8d-f5d2-b1856532a37a",
          "43333e08-adcb-1cbc-3be4-2a2dbb6c1313",
          "12e876f5-9755-7f4c-e71f-e15f71784f05",
          "35b51504-98bf-0928-29d8-9d25e74cb19b",
          "a2641de8-8578-f861-7f5a-a2c7a9b11431"
        ],
        "Immunization": [
          "a9774a04-800b-4a73-0478-c3220f1de6fc",
          "1345f626-ff3e-5853-ff4f-074f8886e585"
        ],
        "DiagnosticReport": [
          "8f2567e6-c347-8ae1-869a-51e5a3eb0f89",
          "85031fab-a96d-6600-c59f-3a8e951b0d62",
          "8721b457-4cb1-f348-4d87-9399435eaef6",
          "0534c3f2-7675-a95a-f6d1-07914a60671d",
          "a95249ad-f221-9f54-08cd-1dd9b1916091"
        ],
        "DocumentReference": ["e5ae1e4f-6f87-0f66-240c-cbac87efd49c"],
        "Encounter": ["f8003671-4404-97cc-096f-1f2bd66234f5"]
      },
      "newDocs": [
        {
          "startDate": "2012-07-22",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 28.38,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 1,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 175,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 86.9,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Labs",
          "result": 7.5653,
          "display": "Leukocytes [#/volume] in Blood by Automated count",
          "unit": "10*3/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2012-07-22",
          "startDate": "2012-07-22",
          "endDate": "2012-07-22",
          "verificationStatus": "confirmed",
          "display": "Stress (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2012-07-22",
          "startDate": "2012-07-22",
          "endDate": "2012-07-22",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Labs",
          "result": 42.981,
          "display": "Hematocrit [Volume Fraction] of Blood by Automated count",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 88,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 15,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Labs",
          "result": 31.083,
          "display": "MCH [Entitic mass] by Automated count",
          "unit": "pg",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Labs",
          "result": 34.73,
          "display": "MCHC [Mass/volume] by Automated count",
          "unit": "g/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Labs",
          "result": 42.794,
          "display": "Erythrocyte distribution width [Entitic volume] by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Labs",
          "result": 427.09,
          "display": "Platelets [#/volume] in Blood by Automated count",
          "unit": "10*3/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Labs",
          "result": 462.68,
          "display": "Platelet distribution width [Entitic volume] in Blood by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Labs",
          "result": 16.427,
          "display": "Hemoglobin [Mass/volume] in Blood",
          "unit": "g/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Labs",
          "result": 4.5903,
          "display": "Erythrocytes [#/volume] in Blood by Automated count",
          "unit": "10*6/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2012-07-22",
          "endDate": "2012-07-22",
          "display": "Assessment of anxiety (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2012-07-22",
          "endDate": "2012-07-22",
          "display": "Screening for domestic abuse (procedure)"
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Labs",
          "result": 11.99,
          "display": "Platelet mean volume [Entitic volume] in Blood by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2012-07-22",
          "resourceType": "Labs",
          "result": 94.609,
          "display": "MCV [Entitic volume] by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Immunization",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2012-07-22",
          "display": "Hep A, adult"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2012-07-22",
          "result": "urn:uuid:dbcc4bb2-1501-3b4a-29f4-d0bc4f997681",
          "display": "Complete blood count (hemogram) panel - Blood by Automated count",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2012-07-22",
          "result": "urn:uuid:00f61f01-6322-2cc5-f9e9-f39a32505f18",
          "display": "Generalized anxiety disorder 7 item (GAD-7)",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2012-07-22",
          "result": "urn:uuid:632b643d-66d2-98b0-8b03-4156cc700e97",
          "display": "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
          "data": null
        },
        {
          "resourceType": "Immunization",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2012-07-22",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Christi444 Swaniawski813",
          "startDate": "2012-07-22",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2012-07-22",
          "endDate": "2012-07-22",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2012-07-22",
          "endDate": "2012-07-22",
          "display": "Medication reconciliation (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2012-07-22",
          "endDate": "2012-07-22",
          "display": "Depression screening (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2012-07-22",
          "endDate": "2012-07-22",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2012-07-22",
          "result": "urn:uuid:f459b169-e0ad-980a-fecb-91e1261d0a32",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2012-07-22",
          "result": null,
          "display": "History and physical note",
          "data": "\n2012-07-21\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 40 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Anthem.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding), stress (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free, hep a, adult. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- medication reconciliation (procedure)\n- assessment of anxiety (procedure)\n- screening for domestic abuse (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Christi444 Swaniawski813",
          "location": null,
          "startDate": "2012-07-22",
          "endDate": "2012-07-22",
          "type": "General examination of patient (procedure)"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Follow the prescribed medication regimen as discussed with the healthcare provider.",
        "Make efforts to reduce stress through relaxation techniques and regular physical activity.",
        "Consider seeking support for work-related stress and explore potential changes in the work environment."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with stress, as confirmed by the encounter-diagnosis. Your condition of full-time employment was also noted. Laboratory results indicate leukocytes of 7.5653 10*3/uL, hematocrit of 42.981%, and platelets of 427.09 10*3/uL.</p><h2>Treatment and Prescriptions</h2><p>The healthcare provider administered immunizations for influenza and hepatitis A. Procedures conducted include medication reconciliation, assessment of anxiety, screening for domestic abuse, depression screening, and depression screening using patient health questionnaire.</p><h2>Advice and Recommendations</h2><p>It is advisable to schedule a follow-up visit with the primary care physician. Follow the prescribed medication regimen, and focus on stress reduction through relaxation techniques and physical activity. Consider seeking support for work-related stress and explore changes in the work environment.</p></section>",
      "shortSummary": "You have been diagnosed with stress and full-time employment. Your healthcare provider administered various assessments and screenings.",
      "doctorSummary": "Patient is a 40-year-old non-Hispanic white male with a history of stress and full-time employment. Lab results showed leukocytes of 7.5653 10*3/uL, hematocrit of 42.981%, and platelets of 427.09 10*3/uL. Administered immunizations for influenza, seasonal, and Hep A, adult. Procedures conducted include medication reconciliation, assessment of anxiety, screening for domestic abuse, depression screening, and depression screening using Patient Health Questionnaire Two-Item score. Advised to schedule a follow-up visit with the primary care physician and focus on stress reduction and exploring work environment changes.",
      "validatedTasksForUser": [
        {
          "id": "5f7d8a7a54c71c8026a43e23",
          "task": "Schedule follow-up visit with the primary care physician.",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Follow the prescribed medication regimen as discussed with the healthcare provider.",
        "Make efforts to reduce stress through relaxation techniques and regular physical activity.",
        "Consider seeking support for work-related stress and explore potential changes in the work environment."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You have been diagnosed with stress, as confirmed by the encounter-diagnosis. Your condition of full-time employment was also noted. Laboratory results indicate leukocytes of 7.5653 10*3/uL, hematocrit of 42.981%, and platelets of 427.09 10*3/uL.</p><h2>Treatment and Prescriptions</h2><p>The healthcare provider administered immunizations for influenza and hepatitis A. Procedures conducted include medication reconciliation, assessment of anxiety, screening for domestic abuse, depression screening, and depression screening using patient health questionnaire.</p><h2>Advice and Recommendations</h2><p>It is advisable to schedule a follow-up visit with the primary care physician. Follow the prescribed medication regimen, and focus on stress reduction through relaxation techniques and physical activity. Consider seeking support for work-related stress and explore changes in the work environment.</p></section>",
      "validatedShortSummary": "You have been diagnosed with stress and full-time employment. Your healthcare provider administered various assessments and screenings.",
      "validatedDoctorSummary": "Patient is a 40-year-old non-Hispanic white male with a history of stress and full-time employment. Lab results showed leukocytes of 7.5653 10*3/uL, hematocrit of 42.981%, and platelets of 427.09 10*3/uL. Administered immunizations for influenza, seasonal, and Hep A, adult. Procedures conducted include medication reconciliation, assessment of anxiety, screening for domestic abuse, depression screening, and depression screening using Patient Health Questionnaire Two-Item score. Advised to schedule a follow-up visit with the primary care physician and focus on stress reduction and exploring work environment changes."
    },
    {
      "_id": "65cf474334842823bec5ee0e",
      "dateStart": "2012-06-28",
      "dateEnd": "2012-06-28",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for problem",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Alix578 Lynch190",
      "npi2": null,
      "resources": {
        "Vitals": ["f1391f9b-add3-4253-018f-146941e950c5"],
        "Encounter": ["5fa43f88-9fd4-f291-8a31-55d1e659f081"],
        "Condition": ["907e607d-64b4-fafb-930c-c2fb45cc5627"],
        "DiagnosticReport": ["786ce0a5-0251-6e3c-137e-d145ec0a57a6"],
        "MedicationRequest": ["7bfe3b0e-6090-8cd2-c072-54c3c16b13f2"],
        "DocumentReference": ["9e6e72fc-9f5a-9561-bfa3-88f5270978ed"]
      },
      "newDocs": [
        {
          "startDate": "2012-06-28",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 7,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Alix578 Lynch190",
          "location": null,
          "startDate": "2012-06-28",
          "endDate": "2012-06-28",
          "type": "Encounter for problem"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2012-06-28",
          "startDate": "2012-06-28",
          "endDate": "2012-06-28",
          "verificationStatus": "confirmed",
          "display": "Osteoarthritis of knee",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2012-06-28",
          "result": null,
          "display": "History and physical note",
          "data": "\n2012-06-27\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 39 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with osteoarthritis of knee. \n\n## Plan\n\nThe patient was prescribed the following medications:\n- naproxen sodium 220 mg oral tablet\nThe patient was placed on a careplan:\n- musculoskeletal care\n"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "2012-06-28",
          "category": null,
          "display": "Naproxen sodium 220 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": null,
          "patientInstruction": null
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Alix578 Lynch190",
          "startDate": "2012-06-28",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take naproxen sodium 220 mg oral tablet as prescribed by the healthcare provider",
        "Adhere to the musculoskeletal care plan for managing osteoarthritis of the knee",
        "Monitor and report pain severity using the verbal numeric rating scale",
        "Make necessary lifestyle changes to manage osteoarthritis",
        "Consider quitting smoking and reducing alcohol consumption for improved joint health",
        "Schedule a follow-up appointment for further evaluation"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>Primary diagnosis is osteoarthritis of the knee confirmed during the encounter. The vitals recorded a pain severity score of 7 using a verbal numeric rating scale.</p><h2>Treatment and Prescriptions:</h2><p>The treatment plan includes prescribing naproxen sodium 220 mg oral tablet for pain relief. No other active medications were prescribed. The musculoskeletal care plan was recommended.</p><h2>Advice and Recommendations:</h2><p>Patient is advised to start taking naproxen sodium as prescribed and adhere to the musculoskeletal care plan for managing osteoarthritis. The lifestyle changes, including smoking cessation, and alcohol reduction are recommended for improved joint health. A follow-up appointment is crucial for further evaluation of the condition.</p></section>",
      "shortSummary": "You have been diagnosed with osteoarthritis of the knee. You've been prescribed naproxen sodium for pain relief and given a musculoskeletal care plan. Consider making lifestyle changes to manage your condition, and monitor your pain severity. You should consider quitting smoking and reducing alcohol consumption. Schedule a follow-up appointment for further evaluation.",
      "doctorSummary": "Patient, Randal152, a 39-year-old non-hispanic white male, presented with osteoarthritis of the knee. The history and physical note indicated no current complaints. The patient is an active smoker, an alcoholic, and has a history of violence exposure. The diagnosis was confirmed during the encounter, and the patient was prescribed naproxen sodium 220 mg oral tablet for pain relief. A musculoskeletal care plan was recommended. Lifestyle modifications including smoking cessation and alcohol reduction were advised. Follow-up appointment is scheduled for further evaluation.",
      "validatedTasksForUser": [
        {
          "id": "5f7d1a6b5b014830dbbfa592",
          "task": "Start taking naproxen sodium 220 mg oral tablet as prescribed",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5eb417f9926cf53ad897635d",
          "task": "Follow musculoskeletal care plan for osteoarthritis of the knee",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5ebe7f8e2cfce786c573abb7",
          "task": "Manage pain severity using verbal numeric rating scale",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5c3a8d8ca4f8c21465ed9bd2",
          "task": "Make necessary lifestyle changes to manage osteoarthritis",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5f720b87032f4651fe8911b0",
          "task": "Consider quitting smoking and reducing alcohol consumption",
          "status": "pending",
          "note": ""
        },
        {
          "id": "5dea8c40e8c7a36541892f3a",
          "task": "Schedule follow-up appointment for evaluation",
          "status": "pending",
          "note": ""
        }
      ],
      "validatedInstructionsForUser": [
        "Take naproxen sodium 220 mg oral tablet as prescribed by the healthcare provider",
        "Adhere to the musculoskeletal care plan for managing osteoarthritis of the knee",
        "Monitor and report pain severity using the verbal numeric rating scale",
        "Make necessary lifestyle changes to manage osteoarthritis",
        "Consider quitting smoking and reducing alcohol consumption for improved joint health",
        "Schedule a follow-up appointment for further evaluation"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>Primary diagnosis is osteoarthritis of the knee confirmed during the encounter. The vitals recorded a pain severity score of 7 using a verbal numeric rating scale.</p><h2>Treatment and Prescriptions:</h2><p>The treatment plan includes prescribing naproxen sodium 220 mg oral tablet for pain relief. No other active medications were prescribed. The musculoskeletal care plan was recommended.</p><h2>Advice and Recommendations:</h2><p>Patient is advised to start taking naproxen sodium as prescribed and adhere to the musculoskeletal care plan for managing osteoarthritis. Lifestyle changes, including smoking cessation, and alcohol reduction are recommended for improved joint health. A follow-up appointment is crucial for further evaluation of the condition.</p></section>",
      "validatedShortSummary": "You have been diagnosed with osteoarthritis of the knee. You've been prescribed naproxen sodium for pain relief and given a musculoskeletal care plan. Consider making lifestyle changes to manage your condition, and monitor your pain severity. You should consider quitting smoking and reducing alcohol consumption. Schedule a follow-up appointment for further evaluation.",
      "validatedDoctorSummary": "Patient, Randal152, a 39-year-old non-hispanic white male, presented with osteoarthritis of the knee. The history and physical note indicated no current complaints. The patient is an active smoker, an alcoholic, and has a history of violence exposure. The diagnosis was confirmed during the encounter, and the patient was prescribed naproxen sodium 220 mg oral tablet for pain relief. A musculoskeletal care plan was recommended. Lifestyle modifications including smoking cessation and alcohol reduction were advised. Follow-up appointment is scheduled for further evaluation."
    },
    {
      "_id": "65cf474334842823bec5ee0c",
      "dateStart": "2008-10-26",
      "dateEnd": "2008-10-26",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Condition",
      "visitTypeSource": "Condition",
      "npi1": null,
      "npi2": null,
      "resources": {
        "Condition": ["1976086a-5381-715d-9a49-f8d90934c51f"]
      },
      "newDocs": [
        {
          "resourceType": "Condition",
          "lastUpdated": "2008-10-26",
          "startDate": "2008-10-26",
          "endDate": "2008-10-26",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee0d",
      "dateStart": "2009-10-04",
      "dateEnd": "2009-10-04",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Christi444 Swaniawski813",
      "npi2": null,
      "resources": {
        "Encounter": ["2cd49350-85c4-9970-b77c-9a72b8a19056"],
        "DiagnosticReport": ["0972ef36-03c6-9e3a-0158-224c7dfb64ca"],
        "Condition": [
          "41ad052a-31d5-3c2e-bb7f-be15e65e3aed",
          "1ec7ac38-02a1-a97e-4978-980b723bb546"
        ],
        "DocumentReference": ["ff4a8a3a-6730-4427-96f4-df53a62ba0b0"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Christi444 Swaniawski813",
          "location": null,
          "startDate": "2009-10-04",
          "endDate": "2009-10-04",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2009-10-04",
          "result": null,
          "display": "History and physical note",
          "data": "\n2009-10-03\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 37 year-old non-hispanic white male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Cigna Health.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding), reports of violence in the environment (finding). \n\n## Plan\n\n"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2009-10-04",
          "startDate": "2009-10-04",
          "endDate": "2009-10-04",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2009-10-04",
          "startDate": "2009-10-04",
          "endDate": "2009-10-04",
          "verificationStatus": "confirmed",
          "display": "Reports of violence in the environment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Christi444 Swaniawski813",
          "startDate": "2009-10-04",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis and condition include full-time employment and reports of violence in the environment.</p><h2>Treatment and Prescriptions</h2><p>No medications were prescribed, and no significant test results were reported.</p><h2>Advice and Recommendations</h2><p>No specific advice or recommendations were provided. It is advisable to discuss lifestyle and employment-related concerns with your healthcare provider for further guidance.</p></section>",
      "shortSummary": "You had a general examination visit on October 4, 2009. The visit focused on your full-time employment and reports of violence in the environment. No active medications were identified, and no specific instructions were provided post-visit.",
      "doctorSummary": "On October 4, 2009, the patient, Randal152, a 37 year-old non-hispanic white male, presented with a history of full-time employment and reports of violence in the environment. No active medications were identified, and no specific treatment or recommendations were provided. Further discussion on lifestyle, employment-related concerns, and potential support systems is recommended in the follow-up visit.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis and condition include full-time employment and reports of violence in the environment.</p><h2>Treatment and Prescriptions</h2><p>No medications were prescribed, and no significant test results were reported.</p><h2>Advice and Recommendations</h2><p>No specific advice or recommendations were provided. It is advisable to discuss lifestyle and employment-related concerns with your healthcare provider for further guidance.</p></section>",
      "validatedShortSummary": "You had a general examination visit on October 4, 2009. The visit focused on your full-time employment and reports of violence in the environment. No active medications were identified, and no specific instructions were provided post-visit.",
      "validatedDoctorSummary": "On October 4, 2009, the patient, Randal152, a 37 year-old non-hispanic white male, presented with a history of full-time employment and reports of violence in the environment. No active medications were identified, and no specific treatment or recommendations were provided. Further discussion on lifestyle, employment-related concerns, and potential support systems is recommended in the follow-up visit."
    },
    {
      "_id": "65cf474334842823bec5ee0b",
      "dateStart": "2008-10-19",
      "dateEnd": "2008-10-19",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for symptom",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Alix578 Lynch190",
      "npi2": null,
      "resources": {
        "DocumentReference": ["122151bf-4d5e-9bff-96d5-2c34697d6770"],
        "DiagnosticReport": ["01c4a3c0-e50e-1c6b-3ecc-51ef8da7a866"],
        "Encounter": ["740e87e8-27cd-e069-c96e-c3b99fce8949"]
      },
      "newDocs": [
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Alix578 Lynch190",
          "startDate": "2008-10-19",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2008-10-19",
          "result": null,
          "display": "History and physical note",
          "data": "\n2008-10-19\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 36 year-old non-hispanic white male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Cigna Health.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\n\n"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Alix578 Lynch190",
          "location": null,
          "startDate": "2008-10-19",
          "endDate": "2008-10-19",
          "type": "Encounter for symptom"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis is not specified. The patient presented with full-time employment finding.</p><h2>Treatment and Prescriptions</h2><p>No medications were prescribed. No significant test results available.</p><h2>Advice and Recommendations</h2><p>It is recommended to continue monitoring symptoms and follow up if needed.</p></section>",
      "shortSummary": "You recently had an encounter for symptom visit with Dr. Alix578 Lynch190. Please continue to monitor any symptoms and follow up with your healthcare provider if needed.",
      "doctorSummary": "The patient, Randal152, a 36-year-old non-hispanic white male, presented with a history of full-time employment finding during the encounter for symptom visit. No active medications were prescribed, and no significant test results were available. The patient's social history includes being married, an active smoker, and an alcoholic. No specific diagnosis was documented, and it is recommended to continue monitoring symptoms and follow up if needed.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis is not specified. The patient presented with a history of full-time employment finding.</p><h2>Treatment and Prescriptions</h2><p>No medications were prescribed. No significant test results available.</p><h2>Advice and Recommendations</h2><p>It is recommended to continue monitoring symptoms and follow up if needed.</p></section>",
      "validatedShortSummary": "You recently had an encounter for symptom visit with Dr. Alix578 Lynch190. Please continue to monitor any symptoms and follow up with your healthcare provider if needed.",
      "validatedDoctorSummary": "The patient, Randal152, a 36-year-old non-hispanic white male, presented with a history of full-time employment finding during the encounter for symptom visit. No active medications were prescribed, and no significant test results were available. The patient's social history includes being married, an active smoker, and an alcoholic. No specific diagnosis was documented, and it is recommended to continue monitoring symptoms and follow up if needed."
    },
    {
      "_id": "65cf474334842823bec5ee1b",
      "dateStart": "2003-09-27T20:42:34-04:00",
      "dateEnd": "2003-09-27T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["a69d6705-11f9-ac02-2b50-60ca374f4577"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2003-09-27T20:42:34-04:00",
          "endDate": "2003-09-27T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee1c",
      "dateStart": "2008-10-19T14:42:34-04:00",
      "dateEnd": "2008-10-19T14:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["a1132026-eaa2-4908-bb27-17ebfe6d6f75"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2008-10-19T14:42:34-04:00",
          "endDate": "2008-10-19T14:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185345009",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee0a",
      "dateStart": "2003-09-28",
      "dateEnd": "2003-09-28",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Christi444 Swaniawski813",
      "npi2": null,
      "resources": {
        "DiagnosticReport": ["bb6151e6-b46c-117d-4b40-71ab246c461f"],
        "Condition": ["9c552a6c-d334-d679-0fd0-cc611a84087c"],
        "DocumentReference": ["0bd72c4f-706e-66de-f4f5-1f7a04c86da1"],
        "Encounter": ["0d9725e8-6d88-9c00-9d12-e99f244b732e"]
      },
      "newDocs": [
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2003-09-28",
          "result": null,
          "display": "History and physical note",
          "data": "\n2003-09-27\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 31 year-old non-hispanic white male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Cigna Health.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\n\n"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2003-09-28",
          "startDate": "2003-09-28",
          "endDate": "2003-09-28",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Christi444 Swaniawski813",
          "startDate": "2003-09-28",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Christi444 Swaniawski813",
          "location": null,
          "startDate": "2003-09-28",
          "endDate": "2003-09-28",
          "type": "General examination of patient (procedure)"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes a history of full-time employment.</p><h2>Treatment and Prescriptions</h2><p>No active medications were noted.</p><h2>Advice and Recommendations</h2><p>The healthcare provider may have discussed your current health status, lifestyle recommendations, and potential follow-up steps.</p></section>",
      "shortSummary": "You recently visited the healthcare provider for a general examination. The visit noted your history of full-time employment, smoking, and alcohol consumption. The healthcare provider may have discussed your current health status and future considerations.",
      "doctorSummary": "Patient, Randal152, a 31-year-old non-hispanic white male, visited for a general examination. The visit noted a history of full-time employment, smoking, and alcohol consumption. No active medications were noted. Future considerations and follow-up steps may have been discussed.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes a history of full-time employment.</p><h2>Treatment and Prescriptions</h2><p>No active medications were noted.</p><h2>Advice and Recommendations</h2><p>The healthcare provider may have discussed your current health status, lifestyle recommendations, and potential follow-up steps.</p></section>",
      "validatedShortSummary": "You recently visited the healthcare provider for a general examination. The visit noted your history of full-time employment, smoking, and alcohol consumption. The healthcare provider may have discussed your current health status and future considerations.",
      "validatedDoctorSummary": "Patient, Randal152, a 31-year-old non-hispanic white male, visited for a general examination. The visit noted a history of full-time employment, smoking, and alcohol consumption. No active medications were noted. Future considerations and follow-up steps may have been discussed."
    },
    {
      "_id": "65cf474334842823bec5ee09",
      "dateStart": "2000-09-24",
      "dateEnd": "2000-09-24",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Christi444 Swaniawski813",
      "npi2": null,
      "resources": {
        "Encounter": ["1390f44f-de6c-8a62-ebd4-5ccf71eef28d"],
        "DocumentReference": ["bf9237a4-f59a-9ee7-5c3c-1fbe262ebf3a"],
        "Condition": ["c6d15f7a-c392-2e2b-a0b5-40b621b496dd"],
        "DiagnosticReport": ["c41662db-ec3d-d601-ba89-923de1cc50bb"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Christi444 Swaniawski813",
          "location": null,
          "startDate": "2000-09-24",
          "endDate": "2000-09-24",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Christi444 Swaniawski813",
          "startDate": "2000-09-24",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2000-09-24",
          "startDate": "2000-09-24",
          "endDate": "2000-09-24",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2000-09-24",
          "result": null,
          "display": "History and physical note",
          "data": "\n2000-09-23\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 28 year-old non-hispanic white male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has NO INSURANCE.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\n\n"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>Randal152, a 28-year-old male, has been diagnosed with full-time employment. The condition was confirmed during the general examination on September 24, 2000.</p><h2>Treatment and Prescriptions:</h2><p>As no active medications were noted, the treatment plan may involve addressing the patient's lifestyle, especially regarding the identified issues with smoking and alcohol consumption.</p><h2>Advice and Recommendations:</h2><p>The patient's high-risk behaviors, such as smoking and alcohol consumption, need to be addressed. Additionally, considering the lack of insurance, exploring affordable healthcare options is crucial. A follow-up for further evaluation and potential assistance with healthcare costs is recommended.</p></section>",
      "shortSummary": "You recently had a general examination with Dr. Swaniawski. The visit confirmed a diagnosis of full-time employment. Please see below for further details.",
      "doctorSummary": "Patient Randal152 has been diagnosed with full-time employment, confirmed during the general examination on September 24, 2000. As no active medications were noted, the treatment plan may involve addressing the patient's lifestyle, especially regarding the identified issues with smoking and alcohol consumption. Furthermore, due to the patient's lack of insurance, it's essential to explore affordable healthcare options and provide guidance on accessing healthcare services. Follow-up for further evaluation and potential assistance with healthcare costs is recommended.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>Randal152, a 28-year-old male, has been diagnosed with full-time employment. The condition was confirmed during the general examination on September 24, 2000.</p><h2>Treatment and Prescriptions:</h2><p>As no active medications were noted, the treatment plan may involve addressing the patient's lifestyle, especially regarding the identified issues with smoking and alcohol consumption.</p><h2>Advice and Recommendations:</h2><p>The patient's high-risk behaviors, such as smoking and alcohol consumption, need to be addressed. Additionally, considering the lack of insurance, exploring affordable healthcare options is crucial. A follow-up for further evaluation and potential assistance with healthcare costs is recommended.</p></section>",
      "validatedShortSummary": "You recently had a general examination with Dr. Swaniawski. The visit confirmed a diagnosis of full-time employment. Please see below for further details.",
      "validatedDoctorSummary": "Patient Randal152 has been diagnosed with full-time employment, confirmed during the general examination on September 24, 2000. As no active medications were noted, the treatment plan may involve addressing the patient's lifestyle, especially regarding the identified issues with smoking and alcohol consumption. Furthermore, due to the patient's lack of insurance, it's essential to explore affordable healthcare options and provide guidance on accessing healthcare services. Follow-up for further evaluation and potential assistance with healthcare costs is recommended."
    },
    {
      "_id": "65cf474334842823bec5ee1a",
      "dateStart": "2000-09-23T20:42:34-04:00",
      "dateEnd": "2000-09-23T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["b6b04e64-9de1-7a6c-ae52-ee7682ca7417"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2000-09-23T20:42:34-04:00",
          "endDate": "2000-09-23T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee08",
      "dateStart": "1998-10-11",
      "dateEnd": "1998-10-11",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for check up (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Keven605 Mueller846",
      "npi2": null,
      "resources": {
        "Condition": ["2a8ecd80-ea73-b5f6-0c02-2227f23cab0f"],
        "Encounter": ["7e139983-65b3-9f4b-2162-36005ccf6da1"],
        "DocumentReference": ["599c6e9f-619c-657e-df8a-d95f64f8f78c"],
        "DiagnosticReport": ["14e8aab8-2db9-8b59-50e7-933085954eba"]
      },
      "newDocs": [
        {
          "resourceType": "Condition",
          "lastUpdated": "1998-10-11",
          "startDate": "1998-10-11",
          "endDate": "1998-10-11",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Keven605 Mueller846",
          "location": null,
          "startDate": "1998-10-11",
          "endDate": "1998-10-11",
          "type": "Encounter for check up (procedure)"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Keven605 Mueller846",
          "startDate": "1998-10-11",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1998-10-11",
          "result": null,
          "display": "History and physical note",
          "data": "\n1998-10-10\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 26 year-old non-hispanic white male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has NO INSURANCE.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\n\n"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis is full-time employment, confirmed with no active complaints. Patient's social history includes smoking, alcohol consumption, and lack of insurance.</p><h2>Treatment and Prescriptions</h2><p>No medications prescribed. Lifestyle factors to be addressed.</p><h2>Advice and Recommendations</h2><p>Follow-up appointments and insurance coverage need to be addressed. Lifestyle changes are recommended given the patient's smoking, alcohol consumption, and lack of insurance coverage.</p></section>",
      "shortSummary": "You were seen by Dr. Keven605 Mueller846 for a check-up. The diagnosis confirms full-time employment, and there are no active complaints or medications. Lifestyle factors such as smoking and alcohol consumption were noted. It is important to consider follow-up appointments and insurance coverage.",
      "doctorSummary": "During the encounter, it was noted that the patient, a 26-year-old male, presented with a confirmed diagnosis of full-time employment. The patient has a history of smoking and alcohol consumption, and currently lacks insurance coverage. No active complaints or medications were reported. It is recommended to address the patient's lifestyle factors and consider follow-up appointments and insurance coverage.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis is full-time employment, confirmed with no active complaints. Patient's social history includes smoking, alcohol consumption, and lack of insurance.</p><h2>Treatment and Prescriptions</h2><p>No medications prescribed. Lifestyle factors to be addressed.</p><h2>Advice and Recommendations</h2><p>Follow-up appointments and insurance coverage need to be addressed. Lifestyle changes are recommended given the patient's smoking, alcohol consumption, and lack of insurance coverage.</p></section>",
      "validatedShortSummary": "You were seen by Dr. Keven605 Mueller846 for a check-up. The diagnosis confirms full-time employment, and there are no active complaints or medications. Lifestyle factors such as smoking and alcohol consumption were noted. It is important to consider follow-up appointments and insurance coverage.",
      "validatedDoctorSummary": "During the encounter, it was noted that the patient, a 26-year-old male, presented with a confirmed diagnosis of full-time employment. The patient has a history of smoking and alcohol consumption and currently lacks insurance coverage. No active complaints or medications were reported. It is recommended to address the patient's lifestyle factors and consider follow-up appointments and insurance coverage."
    },
    {
      "_id": "65cf474334842823bec5ee19",
      "dateStart": "1998-10-10T20:42:34-04:00",
      "dateEnd": "1998-10-10T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["3f7dd09a-a94c-d210-cab1-bbe94f4c03ad"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1998-10-10T20:42:34-04:00",
          "endDate": "1998-10-10T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185349003",
              "display": "Encounter for check up (procedure)"
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee18",
      "dateStart": "1997-09-14T20:59:10-04:00",
      "dateEnd": "1997-09-14T20:59:10-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["e7659920-ccf9-9508-9818-d3d73e96cb00"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1997-09-14T20:59:10-04:00",
          "endDate": "1997-09-14T20:59:10-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "371883000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee07",
      "dateStart": "1997-09-21",
      "dateEnd": "1997-09-21",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Condition",
      "visitTypeSource": "Condition",
      "npi1": null,
      "npi2": null,
      "resources": {
        "Condition": ["04f6fa8f-5e4d-f2ac-97f8-13c745230954"]
      },
      "newDocs": [
        {
          "resourceType": "Condition",
          "lastUpdated": "1997-09-21",
          "startDate": "1997-09-21",
          "endDate": "1997-09-21",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee05",
      "dateStart": "1997-06-16",
      "dateEnd": "1997-06-16",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for problem",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Alix578 Lynch190",
      "npi2": null,
      "resources": {
        "Encounter": ["c24f2114-b2ec-7ccf-7aaf-01552e5e0f77"],
        "AllergyIntolerance": ["7aee11bb-a786-7dd0-1619-44a8c45cd75f"],
        "MedicationRequest": [
          "90e9336b-993e-69dd-2478-d3d6e3ed7f8b",
          "e871633d-f1ff-b262-bd2c-e8e951c9f707"
        ],
        "DiagnosticReport": ["e8778def-738e-bd73-2a4f-f9ec6b7ed6e1"],
        "DocumentReference": ["2b389cb8-9609-a58c-c056-b515d1451de4"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Alix578 Lynch190",
          "location": null,
          "startDate": "1997-06-16",
          "endDate": "1997-06-16",
          "type": "Encounter for problem"
        },
        {
          "resourceType": "AllergyIntolerance",
          "startDate": "1997-06-16",
          "display": "Mold (organism)",
          "category": "environment",
          "reaction": null,
          "verificationStatus": "confirmed"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1997-06-16",
          "category": null,
          "display": "Fexofenadine hydrochloride 60 MG Oral Tablet",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": true,
          "patientInstruction": null
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1997-06-16",
          "category": null,
          "display": "NDA020800 0.3 ML Epinephrine 1 MG/ML Auto-Injector",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": true,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1997-06-16",
          "result": null,
          "display": "History and physical note",
          "data": "\n1997-06-16\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 24 year-old non-hispanic white male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with mold (organism). \n\n## Plan\n\nThe patient was prescribed the following medications:\n- fexofenadine hydrochloride 60 mg oral tablet\n- nda020800 0.3 ml epinephrine 1 mg/ml auto-injector\nThe patient was placed on a careplan:\n- self-care interventions (procedure)\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Alix578 Lynch190",
          "startDate": "1997-06-16",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Take fexofenadine hydrochloride 60 MG Oral Tablet as needed.",
        "Take NDA020800 0.3 ML Epinephrine 1 MG/ML Auto-Injector as needed."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>You were diagnosed with a mold allergy. Your social history includes smoking and alcohol consumption.</p><h2>Treatment and Prescriptions:</h2><p>You have been prescribed fexofenadine hydrochloride 60 MG Oral Tablet and NDA020800 0.3 ML Epinephrine 1 MG/ML Auto-Injector. A care plan includes self-care interventions.</p><h2>Advice and Recommendations:</h2><p>Follow the prescribed medication regimen and practice self-care interventions to manage your mold allergy. Consider reducing smoking and alcohol consumption. Follow up as recommended by your healthcare provider.</p></section>",
      "shortSummary": "You were diagnosed with a mold allergy. You have been prescribed fexofenadine hydrochloride and NDA020800 epinephrine auto-injector. Take the medications as needed and follow self-care interventions.",
      "doctorSummary": "Patient presented with a confirmed mold allergy. Prescribed fexofenadine hydrochloride 60 MG Oral Tablet and NDA020800 0.3 ML Epinephrine 1 MG/ML Auto-Injector. Self-care interventions recommended. Patient also has a history of smoking and alcohol consumption. Follow-up recommended for monitoring and further advice on lifestyle changes.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Take fexofenadine hydrochloride 60 MG Oral Tablet as needed.",
        "Take NDA020800 0.3 ML Epinephrine 1 MG/ML Auto-Injector as needed."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview:</h2><p>You were diagnosed with a mold allergy. Patient has a history of smoking and alcohol consumption.</p><h2>Treatment and Prescriptions:</h2><p>You have been prescribed fexofenadine hydrochloride 60 MG Oral Tablet and NDA020800 0.3 ML Epinephrine 1 MG/ML Auto-Injector. A care plan includes self-care interventions.</p><h2>Advice and Recommendations:</h2><p>Follow the prescribed medication regimen and practice self-care interventions to manage your mold allergy. Consider reducing smoking and alcohol consumption. Follow up as recommended by your healthcare provider.</p></section>",
      "validatedShortSummary": "You were diagnosed with a mold allergy. You have been prescribed fexofenadine hydrochloride and NDA020800 epinephrine auto-injector. Take the medications as needed and follow self-care interventions.",
      "validatedDoctorSummary": "Patient presented with a confirmed mold allergy. Prescribed fexofenadine hydrochloride 60 MG Oral Tablet and NDA020800 0.3 ML Epinephrine 1 MG/ML Auto-Injector. Self-care interventions recommended. Patient also has a history of smoking and alcohol consumption. Follow-up recommended for monitoring and further advice on lifestyle changes."
    },
    {
      "_id": "65cf474334842823bec5ee16",
      "dateStart": "1997-06-04T08:42:34-04:00",
      "dateEnd": "1997-06-04T08:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["fd2f5cda-99f4-de75-f4e7-96d2f982b694"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1997-06-04T08:42:34-04:00",
          "endDate": "1997-06-04T08:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185347001",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee15",
      "dateStart": "1994-09-17T20:42:34-04:00",
      "dateEnd": "1994-09-17T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["bab10714-150f-ba2d-c3dc-8399cc480e20"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1994-09-17T20:42:34-04:00",
          "endDate": "1994-09-17T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee26",
      "dateStart": "2018-08-04T20:42:34-04:00",
      "dateEnd": "2018-08-04T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["7bef2a96-5ced-5b0a-531d-9b38723ab38b"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "2018-08-04T20:42:34-04:00",
          "endDate": "2018-08-04T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "710824005",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            },
            {
              "system": "sct",
              "code": "710841007",
              "display": null
            },
            {
              "system": "sct",
              "code": "171207006",
              "display": null
            },
            {
              "system": "sct",
              "code": "454711000124102",
              "display": null
            },
            {
              "system": "sct",
              "code": "715252007",
              "display": null
            },
            {
              "system": "sct",
              "code": "428211000124100",
              "display": "Assessment of substance use (procedure)"
            },
            {
              "system": "sct",
              "code": "763302001",
              "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee17",
      "dateStart": "1997-06-16T17:56:23-04:00",
      "dateEnd": "1997-06-16T17:56:23-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["778fe311-4548-2646-7593-9341c89cbfce"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1997-06-16T17:56:23-04:00",
          "endDate": "1997-06-16T17:56:23-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185347001",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee24",
      "dateStart": "2018-05-22",
      "dateEnd": "2018-05-22",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for symptom",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Alix578 Lynch190",
      "npi2": null,
      "resources": {
        "Condition": ["b76c3169-f4ff-339f-2af4-21cf8120e889"],
        "DiagnosticReport": ["36089d72-3f5a-b82f-c524-8b9cf3f3683b"],
        "DocumentReference": ["824846eb-def0-5485-03ee-f806408fd601"],
        "Encounter": ["ebee67f8-abd8-185c-f828-1f88dddb96e4"]
      },
      "newDocs": [
        {
          "resourceType": "Condition",
          "lastUpdated": "2018-05-22",
          "startDate": "2018-05-22",
          "endDate": "2018-05-22",
          "verificationStatus": "confirmed",
          "display": "Viral sinusitis (disorder)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2018-05-22",
          "result": null,
          "display": "History and physical note",
          "data": "\n2018-05-21\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 45 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding.\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Humana.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with viral sinusitis (disorder). \n\n## Plan\n\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Alix578 Lynch190",
          "startDate": "2018-05-22",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Alix578 Lynch190",
          "location": null,
          "startDate": "2018-05-22",
          "endDate": "2018-05-22",
          "type": "Encounter for symptom"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis is viral sinusitis. No specific labs mentioned in the documents.</p><h2>Treatment and Prescriptions</h2><p>A treatment plan was recommended to address the viral sinusitis. No specific medications or test results are mentioned in the documents.</p><h2>Advice and Recommendations</h2><p>It's essential to follow the prescribed treatment plan. Additionally, consider making lifestyle changes, such as reducing stress and avoiding alcohol and smoking.</p></section>",
      "shortSummary": "You were diagnosed with viral sinusitis. Your doctor recommended a treatment plan to address the sinusitis. It's essential to follow the prescribed treatment and make necessary lifestyle changes.",
      "doctorSummary": "The patient, a 45-year-old non-hispanic white male, presented with confirmed viral sinusitis. The patient has a history of stress, social isolation, and severe anxiety. The encounter note mentions the patient's active smoking and alcoholism. No active medications are reported, and the patient has no known allergies. The treatment plan involves managing the viral sinusitis, and lifestyle changes to address smoking and alcohol consumption are recommended.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis is viral sinusitis. No specific labs mentioned in the documents.</p><h2>Treatment and Prescriptions</h2><p>A treatment plan was recommended to address the viral sinusitis. No specific medications or test results are mentioned in the documents.</p><h2>Advice and Recommendations</h2><p>It's essential to follow the prescribed treatment plan. Additionally, consider making lifestyle changes, such as reducing stress and avoiding alcohol and smoking.</p></section>",
      "validatedShortSummary": "You have been diagnosed with viral sinusitis. Your doctor recommended a treatment plan to address the sinusitis. It's essential to follow the prescribed treatment and make necessary lifestyle changes.",
      "validatedDoctorSummary": "The patient, a 45-year-old non-hispanic white male, presented with confirmed viral sinusitis. The patient has a history of stress, social isolation, and severe anxiety. The encounter note mentions the patient's active smoking and alcoholism. No active medications are reported, and the patient has no known allergies. The treatment plan involves managing the viral sinusitis, and lifestyle changes to address smoking and alcohol consumption are recommended."
    },
    {
      "_id": "65cf474334842823bec5ee14",
      "dateStart": "1991-09-14T20:42:34-04:00",
      "dateEnd": "1991-09-14T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["7e326b43-230a-8060-037e-86e6744323e8"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1991-09-14T20:42:34-04:00",
          "endDate": "1991-09-14T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee02",
      "dateStart": "1991-09-15",
      "dateEnd": "1991-09-15",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Christi444 Swaniawski813",
      "npi2": null,
      "resources": {
        "Encounter": ["3dfee8d0-a4a6-3a53-7bed-30d4665e809c"],
        "Condition": ["76637626-4285-0455-a5ea-7a6f3e15677c"],
        "DiagnosticReport": ["12d6ae74-eea4-ad03-b74b-fe8da019c163"],
        "DocumentReference": ["1c4527e5-267f-0a26-90c6-5572c33db534"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Christi444 Swaniawski813",
          "location": null,
          "startDate": "1991-09-15",
          "endDate": "1991-09-15",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1991-09-15",
          "startDate": "1991-09-15",
          "endDate": "1991-09-15",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1991-09-15",
          "result": null,
          "display": "History and physical note",
          "data": "\n1991-09-14\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 19 year-old non-hispanic white male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has UnitedHealthcare.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\n\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Christi444 Swaniawski813",
          "startDate": "1991-09-15",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes full-time employment, confirmed on September 15, 1991.</p><h2>Treatment and Prescriptions</h2><p>No medications were prescribed, and no significant test results were reported.</p><h2>Advice and Recommendations</h2><p>Given the diagnosis, further lifestyle and work-related recommendations are advised. Follow-up steps may include a review of work conditions and health impact.</p></section>",
      "shortSummary": "You had a general examination on September 15, 1991. It was confirmed that you have full-time employment. No specific tasks or instructions were provided.",
      "doctorSummary": "On September 15, 1991, you underwent a general examination, and it was confirmed that you are currently engaged in full-time employment. No medications were prescribed, and no significant test results were reported. Given the diagnosis, I recommend further lifestyle and work-related considerations, including a review of work conditions and health impact.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Primary diagnosis includes full-time employment, confirmed on September 15, 1991.</p><h2>Treatment and Prescriptions</h2><p>No medications were prescribed, and no significant test results were reported.</p><h2>Advice and Recommendations</h2><p>Given the diagnosis, further lifestyle and work-related recommendations are advised. Follow-up steps may include a review of work conditions and health impact.</p></section>",
      "validatedShortSummary": "You had a general examination on September 15, 1991. It was confirmed that you are currently engaged in full-time employment. No specific tasks or instructions were provided.",
      "validatedDoctorSummary": "On September 15, 1991, you underwent a general examination, and it was confirmed that you are currently engaged in full-time employment. No medications were prescribed, and no significant test results were reported. Given the diagnosis, I recommend further lifestyle and work-related considerations, including a review of work conditions and health impact."
    },
    {
      "_id": "65cf474334842823bec5ee13",
      "dateStart": "1990-09-08T20:42:34-04:00",
      "dateEnd": "1990-09-08T20:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["1e3a0db0-ab83-c183-1322-ed47b788e55a"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1990-09-08T20:42:34-04:00",
          "endDate": "1990-09-08T20:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "162673000",
              "display": null
            },
            {
              "system": "sct",
              "code": "105531004",
              "display": null
            },
            {
              "system": "sct",
              "code": "5251000175109",
              "display": null
            },
            {
              "system": "sct",
              "code": "160903007",
              "display": null
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee12",
      "dateStart": "1976-10-02T17:42:34-04:00",
      "dateEnd": "1976-10-02T17:42:34-04:00",
      "serverId": {
        "emr": "",
        "payer": ""
      },
      "visitType": "institutional",
      "visitTypeSource": "ExplanationOfBenefit",
      "npi1": null,
      "npi2": null,
      "resources": {
        "ExplanationOfBenefit": ["f5e4d46d-20ee-47c1-e3f2-fe17feb37b33"]
      },
      "newDocs": [
        {
          "resourceType": "ExplanationOfBenefit",
          "source": {
            "sourceType": "emr",
            "sourceName": "synthea",
            "serverID": "synthea-server-id",
            "orgNames": ["Synthea"]
          },
          "type": "institutional",
          "startDate": "1976-10-02T17:42:34-04:00",
          "endDate": "1976-10-02T17:42:34-04:00",
          "npi1": null,
          "practitioner": null,
          "costOfCare": null,
          "codes": [
            {
              "system": "sct",
              "code": "185345009",
              "display": null
            },
            {
              "system": "sct",
              "code": "40055000",
              "display": "Chronic sinusitis (disorder)"
            }
          ]
        }
      ],
      "pass_to_gpt": null,
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "",
      "shortSummary": "",
      "doctorSummary": "",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "",
      "validatedShortSummary": "",
      "validatedDoctorSummary": ""
    },
    {
      "_id": "65cf474334842823bec5ee01",
      "dateStart": "1990-09-09",
      "dateEnd": "1990-09-09",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Christi444 Swaniawski813",
      "npi2": null,
      "resources": {
        "Encounter": ["c0844159-e3a1-ef71-4c74-4e0a7bf859af"],
        "Condition": [
          "130a1fc9-801b-d3bd-5c5a-25bbf1062559",
          "22d1c37f-796b-7441-1e94-f7d12cfbd32f",
          "ece60f7e-d7a8-d551-ae87-8f98199ddb0b"
        ],
        "DiagnosticReport": ["0246fff4-71a3-0e06-bd6f-87901cfb45cf"],
        "DocumentReference": ["95e36e53-4fa1-2398-ed00-242f7298eade"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Christi444 Swaniawski813",
          "location": null,
          "startDate": "1990-09-09",
          "endDate": "1990-09-09",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1990-09-09",
          "startDate": "1990-09-09",
          "endDate": "1990-09-09",
          "verificationStatus": "confirmed",
          "display": "Housing unsatisfactory (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1990-09-09",
          "startDate": "1990-09-09",
          "endDate": "1990-09-09",
          "verificationStatus": "confirmed",
          "display": "Received certificate of high school equivalency (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1990-09-09",
          "startDate": "1990-09-09",
          "endDate": "1990-09-09",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1990-09-09",
          "result": null,
          "display": "History and physical note",
          "data": "\n1990-09-08\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 18 year-old non-hispanic white male.\n\n# Social History\n Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Blue Cross Blue Shield.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with housing unsatisfactory (finding), received certificate of high school equivalency (finding), full-time employment (finding). \n\n## Plan\n\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Christi444 Swaniawski813",
          "startDate": "1990-09-09",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>The encounter revealed conditions related to housing unsatisfactory, receiving a high school equivalency certificate, and full-time employment.</p><h2>Treatment and Prescriptions</h2><p>No specific treatment or prescriptions were mentioned in the report.</p><h2>Advice and Recommendations</h2><p>The patient is an active smoker and alcoholic. Lifestyle changes and wellness advice should be discussed in the follow-up visit.</p></section>",
      "shortSummary": "You have completed a general examination with Dr. Christi444 Swaniawski813. The primary diagnosis includes housing unsatisfactory, receiving a high school equivalency certificate, and full-time employment. Please read on for detailed information and next steps.",
      "doctorSummary": "The patient presented with findings related to housing unsatisfactory, receiving a high school equivalency certificate, and full-time employment. No specific treatment was prescribed, but the patient's social history including active smoking and alcohol consumption should be addressed in the follow-up visit for lifestyle and wellness advice.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>The encounter confirmed the patient's conditions related to housing unsatisfactory, receiving a high school equivalency certificate, and full-time employment.</p><h2>Treatment and Prescriptions</h2><p>No specific treatment or prescriptions were mentioned in the report.</p><h2>Advice and Recommendations</h2><p>The patient's social history includes being an active smoker and alcoholic, so addressing lifestyle changes and wellness advice should be discussed in the follow-up visit.</p></section>",
      "validatedShortSummary": "You have completed a general examination with Dr. Christi444 Swaniawski813. The primary diagnosis includes housing unsatisfactory, receiving a high school equivalency certificate, and full-time employment. Please read on for detailed information and next steps.",
      "validatedDoctorSummary": "The patient presented with confirmed findings related to housing unsatisfactory, receiving a high school equivalency certificate, and full-time employment. No specific treatment was prescribed, but the patient's social history including active smoking and alcohol consumption should be addressed in the follow-up visit for lifestyle and wellness advice."
    },
    {
      "_id": "65cf474334842823bec5ee00",
      "dateStart": "1976-10-02",
      "dateEnd": "1976-10-02",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for symptom",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Alix578 Lynch190",
      "npi2": null,
      "resources": {
        "Encounter": ["a37dd551-c86e-ce46-78cb-74f65aafcd09"],
        "DiagnosticReport": ["cbce9550-815b-c236-d67c-e2a7f72f7819"],
        "DocumentReference": ["f83748c8-47b9-af95-964b-fced4e2cd578"],
        "Condition": ["c47eeddb-6d69-5846-f976-8ec1411b49fc"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Alix578 Lynch190",
          "location": null,
          "startDate": "1976-10-02",
          "endDate": "1976-10-02",
          "type": "Encounter for symptom"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1976-10-02",
          "result": null,
          "display": "History and physical note",
          "data": "\n1976-10-02\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 4 year-old non-hispanic white male.\n\n# Social History\n Patient quite smoking at age 17 and is an alcoholic.\n\n\nPatient comes from a middle socioeconomic background.\n\nPatient currently has Anthem.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with chronic sinusitis (disorder). \n\n## Plan\n\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Alix578 Lynch190",
          "startDate": "1976-10-02",
          "type": "History and physical note",
          "data": null
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1976-10-02",
          "startDate": "1976-10-02",
          "endDate": "1976-10-02",
          "verificationStatus": "confirmed",
          "display": "Chronic sinusitis (disorder)",
          "category": "encounter-diagnosis"
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Diagnosis: Chronic sinusitis (disorder)</p><h2>Treatment and Prescriptions</h2><p>No active medications were prescribed. Further tests or treatments may be recommended after follow-up.</p><h2>Advice and Recommendations</h2><p>Lifestyle changes, monitoring symptoms, and scheduling a follow-up appointment with your healthcare provider are recommended.</p></section>",
      "shortSummary": "You were diagnosed with chronic sinusitis. No active medications were prescribed. Lifestyle changes and follow-up are recommended.",
      "doctorSummary": "Patient Randal152, a 4-year-old non-hispanic white male, presented with chronic sinusitis. No active medications were prescribed. Lifestyle changes, symptom monitoring, and a follow-up appointment are recommended.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>Diagnosis: Chronic sinusitis (disorder)</p><h2>Treatment and Prescriptions</h2><p>No active medications were prescribed. Further tests or treatments may be recommended after follow-up.</p><h2>Advice and Recommendations</h2><p>Lifestyle changes, monitoring symptoms, and scheduling a follow-up appointment with your healthcare provider are recommended.</p></section>",
      "validatedShortSummary": "You were diagnosed with chronic sinusitis. No active medications were prescribed. Lifestyle changes and follow-up are recommended.",
      "validatedDoctorSummary": "Patient Randal152, a 4-year-old non-hispanic white male, presented with chronic sinusitis. No active medications were prescribed. Lifestyle changes, symptom monitoring, and a follow-up appointment are recommended."
    },
    {
      "_id": "65cf474334842823bec5ee25",
      "dateStart": "2018-08-05",
      "dateEnd": "2018-08-05",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Christi444 Swaniawski813",
      "npi2": "SOUTH COUNTY PHYSICAL THERAPY INC",
      "resources": {
        "Encounter": ["1d56c57f-827e-6f75-8edb-2e004cf7febf"],
        "Condition": ["3bb7d8c3-7883-9946-6b90-37e4dfc92667"],
        "Vitals": [
          "52249b9e-2a2c-d16c-dcaf-09b20c797442",
          "117a88e0-bccd-7ea8-a175-3d1588fa6314",
          "de9f7e2e-830d-efaa-a142-ce2360c88475",
          "58b48801-8102-ab25-a095-e17e890b0e02",
          "01e6b0f4-c680-ca14-6745-1ba9511b3acf",
          "881e00e5-20fd-6499-b9ed-12d3e249e1be"
        ],
        "Labs": [
          "9e0595a1-7f4b-13cc-b0b3-e118d4c73a10",
          "44f2786e-521a-7568-699c-0a5904dae7ac",
          "7a15f6b3-f91e-a0f5-8121-0a26ed0252fd",
          "4047215d-4ab6-e347-a70f-70bfbf73bac4",
          "a678fbc8-b182-030a-ab7a-df6169a8d45d",
          "4c8684f0-aca4-7d17-ac49-30099f08d233",
          "3a53aecd-cf45-b208-b0e1-d583ae87dd75",
          "9439fe41-52f6-5e8d-9d8f-218781f61be0",
          "81d59731-a379-f0f8-944c-7f34d10a816c",
          "65fbe7fa-cd39-d90d-7224-b7a57757f709",
          "c62d1b98-abd7-cc01-b53c-0fd3621273c0",
          "46584b71-b657-00b8-7711-09c5d68087cc",
          "414f2860-7e03-439a-d463-2c915d9c956e",
          "ce784cee-ed59-0774-0bfe-cfe192cd32f3",
          "b9ec01ba-f92a-8428-b990-28848e8f6e2e"
        ],
        "Procedure": [
          "a29a896e-2440-0b60-53b2-99c900847685",
          "11742973-cd92-381a-aa0d-09ae25e0576d",
          "40f8bcdb-9357-15af-93b6-6bbab38dda9e",
          "84fc28f7-b052-7118-227d-60f3a1904dd9",
          "da2ebc34-2b46-62f5-c515-7a1188deecc9",
          "4cf596b1-bee4-4449-c15b-9911973438d5",
          "374b6c50-dc5a-9a6e-0449-c548295d6754"
        ],
        "DiagnosticReport": [
          "2f8a3d70-0ee6-cdcb-dc48-feed3c64ea91",
          "fc07a802-d844-d6b2-7079-8f8086bb22f7",
          "145e6a7a-44e2-0573-2caa-8fe91f7e7118",
          "3c6f36c6-dc05-5627-6399-66644ba4d949",
          "6c843e17-6776-01c1-0cac-9a9696182410",
          "5251d7df-598e-ca50-b9b0-4227f2f94b7b",
          "437cda77-015d-ab62-f39a-8ae6bb1c4f08"
        ],
        "Immunization": ["66daffec-d4c7-919e-d16e-a3b1153dee5b"],
        "DocumentReference": ["119ef030-dc86-6cfc-cb22-6343399229a2"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Christi444 Swaniawski813",
          "location": null,
          "startDate": "2018-08-05",
          "endDate": "2018-08-05",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "2018-08-05",
          "startDate": "2018-08-05",
          "endDate": "2018-08-05",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 175,
          "display": "Body Height",
          "unit": "cm"
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 86.9,
          "display": "Body Weight",
          "unit": "kg"
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 28.38,
          "display": "Body Mass Index",
          "unit": "kg/m2"
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 79,
          "display": "Heart rate",
          "unit": "/min"
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 12,
          "display": "Respiratory rate",
          "unit": "/min"
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 196.42,
          "display": "Cholesterol [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 111.99,
          "display": "Triglyceride [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 105.13,
          "display": "Cholesterol in LDL [Mass/volume] in Serum or Plasma by Direct assay",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Vitals",
          "outOfRange": false,
          "result": 3,
          "display": "Pain severity - 0-10 verbal numeric rating [Score] - Reported",
          "unit": "{score}"
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 68.89,
          "display": "Cholesterol in HDL [Mass/volume] in Serum or Plasma",
          "unit": "mg/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 9.5518,
          "display": "Leukocytes [#/volume] in Blood by Automated count",
          "unit": "10*3/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 3.9132,
          "display": "Erythrocytes [#/volume] in Blood by Automated count",
          "unit": "10*6/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 13.251,
          "display": "Hemoglobin [Mass/volume] in Blood",
          "unit": "g/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 354.4,
          "display": "Platelets [#/volume] in Blood by Automated count",
          "unit": "10*3/uL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 485.71,
          "display": "Platelet distribution width [Entitic volume] in Blood by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 43.567,
          "display": "Hematocrit [Volume Fraction] of Blood by Automated count",
          "unit": "%",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 90.082,
          "display": "MCV [Entitic volume] by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 32.394,
          "display": "MCH [Entitic mass] by Automated count",
          "unit": "pg",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 35.422,
          "display": "MCHC [Mass/volume] by Automated count",
          "unit": "g/dL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 39.073,
          "display": "Erythrocyte distribution width [Entitic volume] by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "startDate": "2018-08-05",
          "resourceType": "Labs",
          "result": 9.7186,
          "display": "Platelet mean volume [Entitic volume] in Blood by Automated count",
          "unit": "fL",
          "comment": null,
          "referenceRange": null,
          "low": null,
          "high": null
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2018-08-05",
          "endDate": "2018-08-05",
          "display": "Assessment of substance use (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2018-08-05",
          "endDate": "2018-08-05",
          "display": "Assessment using Alcohol Use Disorders Identification Test - Consumption (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2018-08-05",
          "endDate": "2018-08-05",
          "display": "Depression screening (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2018-08-05",
          "endDate": "2018-08-05",
          "display": "Depression screening using Patient Health Questionnaire Two-Item score (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2018-08-05",
          "result": "urn:uuid:6be60f70-c05b-3b70-4d20-a2d9a296b639",
          "display": "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2018-08-05",
          "result": "urn:uuid:d86b959e-f1ea-e098-7d05-47c3fb278348",
          "display": "PHQ-9 quick depression assessment panel [Reported.PHQ]",
          "data": null
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2018-08-05",
          "endDate": "2018-08-05",
          "display": "Depression screening using Patient Health Questionnaire Nine Item score (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2018-08-05",
          "endDate": "2018-08-05",
          "display": "Assessment of health and social care needs (procedure)"
        },
        {
          "resourceType": "Procedure",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2018-08-05",
          "endDate": "2018-08-05",
          "display": "Assessment of anxiety (procedure)"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2018-08-05",
          "result": "urn:uuid:9e0595a1-7f4b-13cc-b0b3-e118d4c73a10",
          "display": "Lipid Panel",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2018-08-05",
          "result": "urn:uuid:7ee985b1-3896-c3c4-6ef1-b44166835f48",
          "display": "Generalized anxiety disorder 7 item (GAD-7)",
          "data": null
        },
        {
          "resourceType": "Immunization",
          "location": "SOUTH COUNTY PHYSICAL THERAPY INC",
          "startDate": "2018-08-05",
          "display": "Influenza, seasonal, injectable, preservative free"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2018-08-05",
          "result": "urn:uuid:a678fbc8-b182-030a-ab7a-df6169a8d45d",
          "display": "Complete blood count (hemogram) panel - Blood by Automated count",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2018-08-05",
          "result": "urn:uuid:b1b1a820-7302-e61c-27ce-0e5ff0e3e528",
          "display": "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          "data": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "2018-08-05",
          "result": null,
          "display": "History and physical note",
          "data": "\n2018-08-04\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 46 year-old non-hispanic white male. Patient has a history of reports of violence in the environment (finding), full-time employment (finding), viral sinusitis (disorder), stress (finding), social isolation (finding), severe anxiety (panic) (finding.\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Humana.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\nPatient was given the following immunizations: influenza, seasonal, injectable, preservative free. \nThe following procedures were conducted:\n- assessment of health and social care needs (procedure)\n- assessment of anxiety (procedure)\n- depression screening (procedure)\n- depression screening using patient health questionnaire two-item score (procedure)\n- depression screening using patient health questionnaire nine item score (procedure)\n- assessment of substance use (procedure)\n- assessment using alcohol use disorders identification test - consumption (procedure)\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Christi444 Swaniawski813",
          "startDate": "2018-08-05",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Get influenza immunization (injection, preservative free)",
        "Follow up with health and social care needs assessment",
        "Undergo anxiety and depression screening using PHQ-2 and PHQ-9"
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You were diagnosed with full-time employment. Your vital signs and labs were within normal ranges, but the cholesterol levels need monitoring.</p><h2>Treatment and Prescriptions</h2><p>You received the influenza immunization and underwent various assessments and screenings.</p><h2>Advice and Recommendations</h2><p>It is recommended to monitor your cholesterol levels, schedule follow-ups for further assessments, and undergo anxiety and depression screenings using PHQ-2 and PHQ-9.</p></section>",
      "shortSummary": "You received a full-time employment diagnosis and underwent various health assessments. Get the influenza immunization and schedule follow-ups for further assessments and screenings.",
      "doctorSummary": "The patient, a 46-year-old male, presented with a history of full-time employment, social isolation, severe anxiety, and alcohol use disorder. Vital signs and laboratory results indicated normal body height, weight, BMI, heart rate, respiratory rate, with slightly elevated cholesterol levels. The patient received the influenza immunization and underwent assessments for substance use, alcohol use disorder, anxiety, depression, and health and social care needs. Follow-up plans include monitoring cholesterol levels and scheduling further assessment and screenings, including anxiety and depression evaluations using PHQ-2 and PHQ-9.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Get influenza immunization (injection, preservative free)",
        "Follow up with health and social care needs assessment",
        "Undergo anxiety and depression screening using PHQ-2 and PHQ-9"
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>You were diagnosed with full-time employment. Your vital signs and labs were within normal ranges, but the cholesterol levels need monitoring.</p><h2>Treatment and Prescriptions</h2><p>You received the influenza immunization and underwent various assessments and screenings.</p><h2>Advice and Recommendations</h2><p>It is recommended to monitor your cholesterol levels, schedule follow-ups for further assessments, and undergo anxiety and depression screenings using PHQ-2 and PHQ-9.</p></section>",
      "validatedShortSummary": "You received a full-time employment diagnosis and underwent various health assessments. Get the influenza immunization and schedule follow-ups for further assessments and screenings.",
      "validatedDoctorSummary": "The patient, a 46-year-old male, presented with a history of full-time employment, social isolation, severe anxiety, and alcohol use disorder. Vital signs and laboratory results indicated normal body height, weight, BMI, heart rate, respiratory rate, with slightly elevated cholesterol levels. The patient received the influenza immunization and underwent assessments for substance use, alcohol use disorder, anxiety, depression, and health and social care needs. Follow-up plans include monitoring cholesterol levels and scheduling further assessment and screenings, including anxiety and depression evaluations using PHQ-2 and PHQ-9."
    },
    {
      "_id": "65cf474334842823bec5ee04",
      "dateStart": "1997-06-04",
      "dateEnd": "1997-06-04",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Encounter for problem",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Alix578 Lynch190",
      "npi2": null,
      "resources": {
        "Encounter": ["b5e683a1-7d79-4fea-aa6c-66c8fc98734a"],
        "MedicationRequest": ["1230089d-edf7-8e55-2076-e95bb8bac33f"],
        "DiagnosticReport": ["f936a111-0f8b-9f6c-0f7c-bb6898d1b99c"],
        "DocumentReference": ["d1a70f72-f4e6-57b9-b3c8-73fbb4b7c341"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Alix578 Lynch190",
          "location": null,
          "startDate": "1997-06-04",
          "endDate": "1997-06-04",
          "type": "Encounter for problem"
        },
        {
          "resourceType": "MedicationRequest",
          "startDate": "1997-06-04",
          "category": null,
          "display": "Hydrocortisone 10 MG/ML Topical Cream",
          "dosageStart": null,
          "dosageEnd": null,
          "dosageFrequency": null,
          "periodUnit": null,
          "asNeededBoolean": true,
          "patientInstruction": null
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1997-06-04",
          "result": null,
          "display": "History and physical note",
          "data": "\n1997-06-04\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 24 year-old non-hispanic white male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\n\n\n## Plan\n\nThe patient was prescribed the following medications:\n- hydrocortisone 10 mg/ml topical cream\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Alix578 Lynch190",
          "startDate": "1997-06-04",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [
        "Apply hydrocortisone 10 MG/ML topical cream as needed for the skin condition."
      ],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>The patient's visit was for a non-specific encounter, with a prescription for hydrocortisone 10 MG/ML topical cream. The patient's history and present illness indicate no specific complaints, with a background of full-time employment, smoking, and alcohol use.</p><h2>Treatment and Prescriptions</h2><p>The treatment plan included a prescription for hydrocortisone 10 MG/ML topical cream. No significant test results were mentioned in the report.</p><h2>Advice and Recommendations</h2><p>The healthcare provider advised the patient to use the prescribed medication as needed for the skin condition.</p></section>",
      "shortSummary": "You were prescribed hydrocortisone 10 MG/ML topical cream for a skin condition. Remember to apply it as needed. For more details, read on.",
      "doctorSummary": "The encounter was for a non-specific problem, and the patient was prescribed hydrocortisone 10 MG/ML topical cream for a skin condition. The patient's history and present illness indicate no specific complaints, with a background of full-time employment, smoking, and alcohol use. The treatment plan includes the use of the prescribed medication as needed for the skin condition.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [
        "Apply hydrocortisone 10 MG/ML topical cream as needed for the skin condition."
      ],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>The patient's visit was for a non-specific encounter, with a prescription for hydrocortisone 10 MG/ML topical cream. The patient's history and present illness indicate no specific complaints, with a background of full-time employment, smoking, and alcohol use.</p><h2>Treatment and Prescriptions</h2><p>The treatment plan included a prescription for hydrocortisone 10 MG/ML topical cream. No significant test results were mentioned in the report.</p><h2>Advice and Recommendations</h2><p>The healthcare provider advised the patient to use the prescribed medication as needed for the skin condition.</p></section>",
      "validatedShortSummary": "You were prescribed hydrocortisone 10 MG/ML topical cream for a skin condition. Remember to apply it as needed. For more details, read on.",
      "validatedDoctorSummary": "The encounter was for a non-specific problem, and the patient was prescribed hydrocortisone 10 MG/ML topical cream for a skin condition. The patient's history and present illness indicate no specific complaints, with a background of full-time employment, smoking, and alcohol use. The treatment plan includes the use of the prescribed medication as needed for the skin condition."
    },
    {
      "_id": "65cf474334842823bec5ee03",
      "dateStart": "1994-09-18",
      "dateEnd": "1994-09-18",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "General examination of patient (procedure)",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Christi444 Swaniawski813",
      "npi2": null,
      "resources": {
        "DiagnosticReport": ["f8ed2f56-8319-13c8-46be-e236c02ce314"],
        "Encounter": ["ed8046ae-6c59-4dae-2cac-6ad90b34a3f7"],
        "Condition": ["8127b13a-3379-ba45-0253-2a9f918654ef"],
        "DocumentReference": ["21e183ea-6bb0-1766-8dca-143cc8e14017"]
      },
      "newDocs": [
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1994-09-18",
          "result": null,
          "display": "History and physical note",
          "data": "\n1994-09-17\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 22 year-old non-hispanic white male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Anthem.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\n\n"
        },
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Christi444 Swaniawski813",
          "location": null,
          "startDate": "1994-09-18",
          "endDate": "1994-09-18",
          "type": "General examination of patient (procedure)"
        },
        {
          "resourceType": "Condition",
          "lastUpdated": "1994-09-18",
          "startDate": "1994-09-18",
          "endDate": "1994-09-18",
          "verificationStatus": "confirmed",
          "display": "Full-time employment (finding)",
          "category": "encounter-diagnosis"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Christi444 Swaniawski813",
          "startDate": "1994-09-18",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p><strong>Diagnosis:</strong> Full-time employment</p><p><strong>Condition:</strong> Patient presented with a history of full-time employment. No abnormal lab results were reported.</p><h2>Treatment and Prescriptions</h2><p><strong>Treatment Plan:</strong> No active medications were prescribed.</p><h2>Advice and Recommendations</h2><p>It's crucial to discuss any lifestyle changes, including smoking and alcohol consumption, with your healthcare provider. Follow-up appointments may be necessary to monitor your condition.</p></section>",
      "shortSummary": "You had a general examination with Dr. Christi444 Swaniawski813. The diagnosis of 'Full-time employment' was confirmed. No active medications were prescribed. It's essential to discuss any lifestyle changes with your healthcare provider.",
      "doctorSummary": "Patient Randal152, a 22-year-old non-hispanic white male, presented with a history of full-time employment. No abnormal lab results were reported. No active medications were prescribed. Patient is an active smoker and alcoholic, which requires further discussion on lifestyle modifications. Follow-up appointments may be necessary to monitor the patient's condition.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p><strong>Diagnosis:</strong> Full-time employment</p><p><strong>Condition:</strong> Patient presented with a history of full-time employment. No abnormal lab results were reported.</p><h2>Treatment and Prescriptions</h2><p><strong>Treatment Plan:</strong> No active medications were prescribed.</p><h2>Advice and Recommendations</h2><p>It's crucial to discuss any lifestyle changes, including smoking and alcohol consumption, with your healthcare provider. Follow-up appointments may be necessary to monitor your condition.</p></section>",
      "validatedShortSummary": "You had a general examination with Dr. Christi444 Swaniawski813. The diagnosis of 'Full-time employment' was confirmed. No active medications were prescribed. It's essential to discuss any lifestyle changes with your healthcare provider.",
      "validatedDoctorSummary": "Patient Randal152, a 22-year-old non-hispanic white male, presented with a history of full-time employment. No abnormal lab results were reported. No active medications were prescribed. Patient is an active smoker and alcoholic, which requires further discussion on lifestyle modifications. Follow-up appointments may be necessary to monitor the patient's condition."
    },
    {
      "_id": "65cf474334842823bec5ee06",
      "dateStart": "1997-09-15",
      "dateEnd": "1997-09-15",
      "serverId": {
        "emr": "synthea-server-id",
        "payer": ""
      },
      "visitType": "Outpatient procedure",
      "visitTypeSource": "Encounter",
      "npi1": "Dr. Alix578 Lynch190",
      "npi2": null,
      "resources": {
        "Encounter": ["ee0621c7-caa1-088e-85f7-40692c90e4d9"],
        "DiagnosticReport": ["8fd5bbf4-033c-3b7b-cd90-53113d1ff34f"],
        "DocumentReference": ["029b8cc2-ea81-39dc-366a-64039f3475dc"]
      },
      "newDocs": [
        {
          "resourceType": "Encounter",
          "practioner": "Dr. Alix578 Lynch190",
          "location": null,
          "startDate": "1997-09-15",
          "endDate": "1997-09-15",
          "type": "Outpatient procedure"
        },
        {
          "resourceType": "DiagnosticReport",
          "startDate": "1997-09-15",
          "result": null,
          "display": "History and physical note",
          "data": "\n1997-09-14\n\n# Chief Complaint\nNo complaints.\n\n# History of Present Illness\nRandal152\n is a 25 year-old non-hispanic white male. Patient has a history of full-time employment (finding).\n\n# Social History\nPatient is married. Patient is an active smoker and is an alcoholic.\n Patient identifies as heterosexual.\n\nPatient comes from a middle socioeconomic background.\n Patient has a high school education.\nPatient currently has Aetna.\n\n# Allergies\nNo Known Allergies.\n\n# Medications\nNo Active Medications.\n\n# Assessment and Plan\nPatient is presenting with full-time employment (finding). \n\n## Plan\n\n"
        },
        {
          "resourceType": "DocumentReference",
          "practioner": "Dr. Alix578 Lynch190",
          "startDate": "1997-09-15",
          "type": "History and physical note",
          "data": null
        }
      ],
      "tasksForUser": [],
      "instructionsForUser": [],
      "longSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>No specific diagnosis was mentioned in the encounter. The history and physical note identified no complaints and indicated a history of full-time employment, smoking, and alcoholism.</p><h2>Treatment and Prescriptions</h2><p>There were no specific prescriptions or treatment mentioned. The patient has no active medications.</p><h2>Advice and Recommendations</h2><p>There were no specific advice, recommendations, or follow-up steps provided in the encounter.</p></section>",
      "shortSummary": "You had an outpatient procedure today with Dr. Alix578 Lynch190. The visit included a history and physical note, which identified no complaints. You are a 25-year-old male with a history of full-time employment, married, an active smoker, and alcoholic. The assessment and plan noted your presentation with full-time employment. No active medications were reported.",
      "doctorSummary": "The patient, a 25-year-old male, presented with a history of full-time employment, smoking, and alcoholism. No specific diagnosis was documented. There were no medications prescribed, and no specific advice or recommendations were provided.",
      "validatedTasksForUser": [],
      "validatedInstructionsForUser": [],
      "validatedLongSummary": "<section><h2>Diagnosis and Condition Overview</h2><p>No specific diagnosis was mentioned in the encounter. The history and physical note identified no complaints and indicated a history of full-time employment, smoking, and alcoholism.</p><h2>Treatment and Prescriptions</h2><p>There were no specific prescriptions or treatment mentioned. The patient has no active medications.</p><h2>Advice and Recommendations</h2><p>There were no specific advice, recommendations, or follow-up steps provided in the encounter.</p></section>",
      "validatedShortSummary": "You had an outpatient procedure today with Dr. Alix578 Lynch190. The visit included a history and physical note, which identified no complaints. You are a 25-year-old male with a history of full-time employment, married, an active smoker, and alcoholic. The assessment and plan noted your presentation with full-time employment. No active medications were reported.",
      "validatedDoctorSummary": "The patient, a 25-year-old male, presented with a history of full-time employment, smoking, and alcoholism. No specific diagnosis was documented. There were no medications prescribed, and no specific advice or recommendations were provided."
    }
  ]
}
