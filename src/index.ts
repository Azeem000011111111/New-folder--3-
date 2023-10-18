
let age:string = "a";
console.log(age)

let sales : number = 123_456_789;
let is_published: boolean = true;
// any type
let level; 
level = 1;
level = "a";

function render(document:any){
    console.log(document);
}
// arrays
let number : number[] = [1,2,3];
// tupples
let user:[number,string] = [1,"Mosh"]
// enums : list of related contents
enum Size{Small = 1, Medium , Large};
let mySize:Size = Size.Medium;
console.log(mySize)
// Funtions
function calculateTax(income:number, taxYear = 2022):number{
    
    if (taxYear < 2022)
        return income*1.2;
    return income*1.3;
}
calculateTax(10_000);
// objects
let employee: {
    readonly id:number,
    name:string
    retire:(date:Date) => void
} = {id:1, name:'', retire:(date:Date) =>{
    console.log(date)

}
}
employee.name = "Mosh";


// advance objects
type Employee = {
    readonly id:number,
    name:string,
    retire:(date:Date)=>void
}
let employee1:Employee={
    id:1,
    name:"Mosh",
    retire(date:Date) =>{
        console.log(Date);
    }

}

// union types:we can give variable or funtion more then one type symbol = |
function kgtolbs(weights:number | string){
    // narrowing
    if (typeof weights === 'number'){
        return weights*2.2;
    } else {
        return parseInt(weights)*2.2;
    }

}
kgtolbs(10);
kgtolbs("10");

// intersection types : both number and string at same time
type Draggable = {
    drag:()=>void
};
type Resizeable = {
    resize:()=>void
}
type Uiwidget = Draggable & Resizeable;
let textbox:Uiwidget={
    drag:()=>{},
    resize:()=>{}

}

// literal types
type Quatity = 50 | 100
let quantity:Quatity = 100;

type Metric = 'cm ' | 'inch';
// nullable
function greet(name:string | null | undefined){
    if(name)
        console.log(name.toUpperCase())
    else
        console.log('hola')
}
greet(null);