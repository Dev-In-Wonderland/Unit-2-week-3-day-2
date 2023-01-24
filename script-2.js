let block = document.getElementById('block')



class Person {
    // qua definisco la classe
    constructor(name, surname, age) {
      this.name = name
      this.surname = surname
      this.age = age
    }
  }


  let p1 = new Person('Mario', 'Rossi', 12)
  let p2 = new Person('Luigi', 'Verdi', 42)
  let p3 = new Person('Jacqueline', 'Chan', 65)



  if (p1.age > p2.age && p1.age > p3.age) {
    block.innerText = `Ciao sono ${p1.name} ${p1.surname} e sono la persona più vecchia `
  } else if (p2.age > p1.age && p2.age > p3.age) { 
    block.innerText = `Ciao sono ${p2.name} ${p2.surname} e sono la persona più vecchia `
  } else if (p3.age > p2.age && p3.age > p1.age) { 
    block.innerText = `Ciao sono ${p3.name} ${p3.surname} e sono la persona più vecchia `
    
  } 