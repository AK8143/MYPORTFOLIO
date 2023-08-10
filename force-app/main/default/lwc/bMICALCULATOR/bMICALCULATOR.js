import { LightningElement } from 'lwc';

export default class BMICALCULATOR extends LightningElement {
 height=''

weight=''
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
}


}