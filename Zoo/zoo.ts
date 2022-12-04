interface IType {
    nameOfType: string;
    biome: string;
    reservoir: boolean;
    area: number;
    eatting: string;
    IsPredator: boolean;
}


interface IAnimal extends IType {
    name: string;
    age: number;
    amountOfFood: number;
}

interface ISettlement {
    biome: string;
    reservoir: boolean;
    capacity: number;
    IsForPredator: boolean;
    animals: IAnimal[]
}

let cat: IAnimal = {
    name: 'Loly',
    age: 1,
    amountOfFood: 4,
    nameOfType: 'asd',
    biome: 'home',
    reservoir: true,
    area: 5,
    eatting: 'bone',
    IsPredator: true
}

let monkey: IAnimal = {
    name: 'Monny',
    age: 3,
    amountOfFood: 5,
    nameOfType: 'monkeys',
    biome: 'forest',
    reservoir: true,
    area: 10,
    eatting: 'banana',
    IsPredator: true
}

let leo: IAnimal = {
    name: 'Leo',
    age: 9,
    amountOfFood: 125,
    nameOfType: 'leo',
    biome: 'savanna',
    reservoir: false,
    area: 100,
    eatting: 'meat',
    IsPredator: true
}

let CageForMonkey: ISettlement = {
    animals: [],
    biome: 'forest',
    reservoir: true,
    capacity: 3,
    IsForPredator: false
}


function CheckCage(animal:IAnimal,cage:ISettlement) {
    let count:number=0;
   if (animal.reservoir==cage.reservoir&&animal.biome==cage.biome&&animal.IsPredator==cage.IsForPredator) {  
           for (let j = 0; j < cage.animals.length; j++) {
              count=count+1;  
           }
       if (cage.capacity>count) {
           cage.animals.push(animal);
         

       }
       else{
           console.log("there are not enough space in this cage");  
       }
   }
   else{
       console.log(`This cage is not avilable for  -${animal.name}-  animal`);
   }
}
function showNamesInCage(cage:ISettlement) {
   for (let i = 0; i < cage.animals.length; i++) {
             console.log(cage.animals[i].name); 
          } 
}

CheckCage(monkey,CageForMonkey);
CheckCage(cat,CageForMonkey);
showNamesInCage(CageForMonkey) ;