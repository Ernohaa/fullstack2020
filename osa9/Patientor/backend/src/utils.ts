import { Gender, NewPatientEntry } from "./types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDate = (dateOfBirth: unknown): string => {
    if(!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
        throw new Error('Incorrect date form or missing input ' + dateOfBirth);
    }
    return dateOfBirth;
};

const parseString = (data: unknown): string => {
    if (!data || !isString(data)) {
      throw new Error('Incorrect or missing input ' + data );
    }
    return data;
};

const parseGender = (gender: unknown): Gender => {
    if(!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing input ' + gender);
    }
    return gender;
};

type Fields = {name: unknown, dateOfBirth: unknown, gender: unknown, occupation: unknown, ssn: unknown};

export const toNewPatientEntry = ({name, dateOfBirth, gender, occupation, ssn}: Fields): NewPatientEntry => {
    
    const newEntry: NewPatientEntry = {
        name: parseString(name),
        dateOfBirth: parseDate(dateOfBirth),
        gender: parseGender(gender),
        occupation: parseString(occupation),
        ssn: parseString(ssn)
    };

    return newEntry;
};

export default toNewPatientEntry;