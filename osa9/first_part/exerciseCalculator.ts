export interface result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number; 
}

export const exerciseCalculator = (weeklyHours: Array<number>, target: number): result => {
    const periodLength = weeklyHours.length;
    const average = weeklyHours.reduce((current:number , sum: number) => sum + current) / weeklyHours.length;
    const trainingDays = weeklyHours.filter(a => a != 0).length;
    const success = average >= target;
    let rating;
    let ratingDescription;
    if (success) {
        rating = 3;
        ratingDescription = "you did it! job well done";
    } else if (average - target > -1 ){
        rating = 2;
        ratingDescription = "well, you almost made it";
    } else {
        rating = 1;
        ratingDescription = "you've still got some work to do";
    }
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};

interface exerciseArgs {
    values: Array<number>
    target: number
}

const parseArguments = (args: Array<string>): exerciseArgs => {
    args = args.slice(2);
    if (args.length === 1) throw new Error("Not enough arguments");
    if (!args.map(a => Number(a)).includes(NaN)) {
        const values = args.map(a => Number(a));
        console.log(values);
        // last argument is the target value
        const target = values.pop();
        return {
            values: values,
            target: Number(target)
        };
    } else {
        throw new Error('Some of the provided values were not numbers!');
    }
};

if (require.main === module) {
    try {
        const {values,target} = parseArguments(process.argv);
        console.log(exerciseCalculator(values, target));
    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log("Error, message:", error.message);
    }
}