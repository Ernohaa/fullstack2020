export const calculateBmi = (height:number,weight:number) => {   
    const bmi: number = weight/((height/100)**2);
    if (bmi <= 25 && bmi >= 18.5){
        return ("Normal (healthy weight)");
    } else if (bmi < 18.5 ) {
        return ("Underweight");
    } else if (bmi > 25 && bmi < 29 ) {
        return ("Overweight");
    } else {
        return ("OBESE");
    }
};

interface bmi {
    height: number;
    weight: number;
}

const parseArgs = (args: Array<string>): bmi => {
    if (args.length < 4) throw new Error("Not enough arguments");
    if (args.length > 4) throw new Error("Too many arguments");

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
          height: Number(args[2]),
          weight: Number(args[3])
        };
      } else {
        throw new Error('Provided values were not numbers!');
      }
};

if (require.main === module) {
    try {
        const {height,weight} = parseArgs(process.argv);
        console.log(calculateBmi(height, weight));
    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log("Error, message:", error.message);
    }
}