export interface Diagnose {
    code: string
    name: string
    latin?: string
}

export type gender = "male" | "female";

export interface Patient {
    id: string
    name: string
    dateOfBirth: string
    gender: gender
    occupation: string
    ssn: string
}

export type NonSensitivePatient = Omit<Patient, 'ssn'>;