import { LightningElement } from 'lwc';

export default class BMICALCULATOR extends LightningElement {
 height=''

weight=''
bmivalue=''
result=''


inputhandler(event){
const {name, value} =event.target
if (name==="height") {
    this.height=value
    
}
if (name=="weight") {
    this.weight=value
}
}
submithandler(event){
    event.preventDefault()
    console.log("height", this.height)
    console.log("weight",this.weight)
    this.calculate()
}
calculate(){
 let height=Number(this.height)/100;
 let bmi=Number(this.weight)/(height*height);
 console.log('bmivalue:', bmi);
this.bmivalue=Number(bmi.toFixed(2))

if (this.bmivalue < 18.5) {
    this.result = "underweight";
  } else if (this.bmivalue >= 18.5 && this.bmivalue < 25) {
    this.result = "healthy";
  } else if (this.bmivalue >= 25 && this.bmivalue < 35) {
    this.result = "overweight";
  } else {
    this.result = "obese";
  }

  console.log('bmi value:', this.bmivalue);
  console.log('bmi result:',this.result);
}
recaculate(){
    
}
}
