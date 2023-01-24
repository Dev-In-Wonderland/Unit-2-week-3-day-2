let block = document.getElementById('block')




  class Person {
    constructor(name,surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    compareAge(other) {
        if (this.age < other.age){
             block.innerText = `${other.name} è più vecchio di ${this.name}.`
        }else if (this.age > other.age){
             block.innerText = `${other.name} è più giovane di ${this.name}.`
        }else{
             block.innerText = `${other.name} è della stessa età di ${this.name}.`
        }
    }
}
  



let p1 = new Person('Mario', 'Rossi', 12)
let p2 = new Person('Luigi', 'Verdi', 42)
let p3 = new Person('Jacqueline', 'Chan', 65)


console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));

//     if (p1.age > p2.age && p1.age > p3.age) {
//       block.innerText = `Ciao sono ${p1.name} ${p1.surname} e sono la persona più vecchia `
//     } else if (p2.age > p1.age && p2.age > p3.age) { 
//       block.innerText = `Ciao sono ${p2.name} ${p2.surname} e sono la persona più vecchia `
//     } else if (p3.age > p2.age && p3.age > p1.age) { 
//       block.innerText = `Ciao sono ${p3.name} ${p3.surname} e sono la persona più vecchia `
      
//     } }
