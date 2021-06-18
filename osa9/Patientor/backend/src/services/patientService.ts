import patientData from '../../data/patients.json';
import { Patient, NonSensitivePatient, NewPatientEntry } from '../types';
import {v1 as uuid} from 'uuid';

const patients: Array<Patient> = patientData as Array<Patient>;

const getNonSensitiveEntries = (): NonSensitivePatient [] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (patient: NewPatientEntry): Patient => {
  const NewPatientEntry = {
    id: uuid(),
    ...patient
  };

  patients.push(NewPatientEntry);
  return NewPatientEntry;
};



export default {
  getNonSensitiveEntries,
  addPatient
};