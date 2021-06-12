import express = require('express');
import { calculateBmi } from './bmiCalculator';
import { exerciseCalculator } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
  if (!isNaN(Number(req.query.height)) && !isNaN(Number(req.query.weight))) {
    const height = Number(req.query.height);
    const weight =  Number(req.query.weight);
    const bmi = calculateBmi(height,weight);
    const result = {
      weight: weight,
      height: height,
      bmi: bmi
    };
    return res.json(result);
  } else {
    return res.json({
      error: "malformatted parameters"
    });
  }
});

app.post('/exercises', (req, res) => {
 // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
 const {daily_exercises, target} = req.body;
 if (!daily_exercises || !target){
  return res.json({
    error: "parameters missing"
    });
 }
 if (Array.isArray(daily_exercises) && !daily_exercises.map(a => Number(a)).includes(NaN) && !isNaN(Number(target))) {
    const result = exerciseCalculator(daily_exercises,target);
    return res.json(result);
 } else {
  return res.json({
    error: "malformatted parameters"
    });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});