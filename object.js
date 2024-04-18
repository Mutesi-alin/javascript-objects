const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  
  function Adultsage(peopleArray) {
    const adults = peopleArray.filter(person => person.age >= 18);
    const adultNames = adults.map(person => person.name);
    return adultNames;
  }
  

console.log(Adultsage(people))
//q3

  

  //q4
  const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
  function AgeMethod(car) {
    car.age = function() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
    return car;
  }
  const updatedCar = AgeMethod(car);
  console.log(updatedCar.age());

  
//q3

const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  function StudentsMarks(students) {
    return students.filter(student => {
      const avgScore = student.scores.reduce((a, b) => a + b, ) / student.scores.length;
      return avgScore >= 85;
    }).map(student => student.name);
  }
  console.log(StudentsMarks(students));


  //Q2

  const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
  function allCategory(products) {
    return products.reduce((acc, product) => {
      (acc[product.category] = acc[product.category] || []).push(product);
      return acc;
    }, {});
  }
  console.log(allCategory(products))
  //