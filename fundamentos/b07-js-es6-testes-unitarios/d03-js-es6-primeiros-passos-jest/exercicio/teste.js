const circle = (radius) => {
    const PI = 3.14;
  
    if (!radius || typeof radius !== 'number') { return undefined; }
  
    return {
      radius,
      area: PI * radius * radius,
      circumference: 2 * PI * radius,
    };
  };
  
console.log(Object.keys(circle(5)).length)

const objCircle = Object.keys(circle(5)).length

console.log(Object.keys(circle(5)));

console.log(Object.values(circle(5))[1])

  module.exports = circle;