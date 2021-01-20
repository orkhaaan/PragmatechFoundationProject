let cars=[]

class car{
    constructor(_name,_model,_price){
        this.Name=_name
        this.Model=_model
        this.Price=_price
    }
    ShowcarDetails(){
        let carDetails=`${this.Name} | ${this.Model} | ${this.Price}`
        console.log(carDetails)
    }
}
let car01=new car('niva','Lada',12.500)
let car02=new car('x5','Bmw',21.500)
let car03=new car('prado','Toyota',60.500)
let car04=new car('c300','Mercedes',50.000)
let car05=new car('X6','Bmw',23.500)
cars.push(car01)
cars.push(car02)
cars.push(car03)
cars.push(car04)
cars.push(car05)

function showCarByName(_carname){
    for(let i=0;i<cars.length;i++){
        if(cars[i].Name==_carname){
            cars[i].ShowcarDetails()
        }
    }
}
function showCarByPrice(_carprice){
    for(let i=0;i<cars.length;i++){
        if(cars[i].Price>_carprice){
            cars[i].ShowcarDetails()
        }
    }
}
function showCarByModel(_modelname){
    for(let i=0;i<cars.length;i++){
        if(cars[i].Model==_modelname){
            cars[i].ShowcarDetails()
        }
    }
}