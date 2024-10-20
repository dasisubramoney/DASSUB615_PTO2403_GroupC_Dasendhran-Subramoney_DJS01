/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const Distance1 = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelburnrate = 0.5; // fuel burn rate (kg/s)


const NewDistance = Distance1 + ((vel/3600)*time) //calcultes new distance
const Remainingfuel = fuel - (fuelburnrate*time) //calculates remaining fuel
const NewVel = calcNewVel(vel, acc, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel (vel, acc, time) { 
  // Checks if all inputs are numbers
  if (typeof vel !== 'number') {
    throw new Error('Invalid velocity: must be a number.');
  }
  if (typeof acc !== 'number') {
    throw new Error('Invalid acceleration: must be a number.');
  }
  if (typeof time !== 'number') {
    throw new Error('Invalid time: must be a number.');
  }

  // Checks if time variable is correct
  if (time < 0) {
    throw new Error('Invalid time: time must be a postive number.');
  }

  // Return the calculated new velocity
  return vel + (acc*12960) ;
}

console.log(`Corrected New Velocity: ${NewVel} km/h`);
console.log(`Corrected New Distance: ${NewDistance} km`);
console.log(`Corrected Remaining Fuel: ${fuelburnrate} kg`);






