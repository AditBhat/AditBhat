import { LightningElement,wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACC_OBJECT from '@salesforce/schema/Account';





//import {sum,firstName} from './demo'
//import {oddoreven} from 'c/myUtil'


        export default class DataBinding extends LightningElement {
            
            accobj
            @wire(getRecord,{ recordId:`001Iw000003MlWCIA0`,fields:['ACC_OBJECT.Name','ACC_OBJECT.Email']})
            getRecordInfo({data,error})
            {
            if(data){
                this.accobj=data.fields;
            }
            if(error){
            console.log(error.message);
            }
        }
        }



/* 
fields=[LASTNAME,NAME]
            handleClick(){
                const event =new CustomEvent('myevent',{
                    bubbles:true,
                    composed:true,
                    detail:{message:'hello from thr child'},
                });
                this.dispatchEvent(event);
            }

handleclick(event){
this.template.querySelector("lightning-input[data-id1]").value="INPUT1"
this.template.querySelector("lightning-input[data-id2]").value="INPUT2"
console.log(event.target.dataset.btn)
}

  const v=this.template.querySelectorAll("p")
console.log(v.innerHTML);

Array.from(v).forEach((element)=>{
    console.log(element.innerHTML)
}

)
const elementdiv=this.template.querySelector(".dynamic");
elementdiv.innerHTML="<p style='background:blue'> Welcome to dynamic </p>"
}





//
posts=[]
user_name(firstName){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        
    
        if(firstName=="Adit")
        resolve("verified account");
        else
        reject("new Account");
    }, 2000)
}) 
https://sfdev36-dev-ed.my.salesforce-sites.com/services/apexrest/employees
}
 handleclick(){

const p=this.template.querySelector(".fname").value
console.log(p);
const v=this.template.querySelector("p")
console.log(v.innerHTML);
 

let  url="https://jsonplaceholder.typicode.com/posts";
  try{
let response=await fetch(url,{method:'GET'})
let data= await response.json();
this.posts=data
console.log(this.posts)
  }
catch(e){
console.log(e)
}
}
/*

    try{
    const response=await this.user_name("At")
    console.log(response)
    }
    catch(e){
        console.log(e);
    }
}
}

/*
@track tasks=[]
@track newtask='';
clickhandle(event){
this.newtask=event.target.value

}
clickhandle1(){
   if(this.newtask){
    let task={
id:Date.now(),
taskname:this.newtask
    }
    this.tasks.push(task);
   }
   
    }
    delete1(e){
let taskid=e.target.value
this.tasks=this.tasks.filter(task=>task.id !== taskid)
    }

}

/*
 sum1() {
   alert( sum(10,20));
   alert( firstName);
alert(oddoreven(5));
}














   input;
    input1
    input2=0;
    
 @track products=[
    {
    name :"product1",
    price:300,
    stock:100
  }
 

]
clickhandler1(event){
    this.input2=event.target.value
this.products.stock= this.input2
}
    clickhandler(event){
        this.input=event.target.value
this.input1=this.input.toUpperCase()
    }

   p=["aj","ad","an","aas"]
    employees=[
        {
            name:"adit",
            city:"hyd"
        },
        {
            name:"aditya",
            city:"hyd65"
        },
        {
            name:"adit654hg",
            city:"hydbvff"
        }
    ]
@track person=["john",2000];
get personName(){
return this.person[0];
}
@track per={
    name:"AJ",
    position:'developer'
}
isShow=false
blue1(event){
this.isShow=!this.isShow;
    this.person[0]="adit"
    this.per.position="lead"
}

    input1;
    input2;
    ans;
    customStyle='demo';
    firstname='mr Adit';
    person={
  age:21,
  position:'developer',
  salary:23444,
  Address: {
city:'jammu',
district:'jammu',
zip:234543

  }
 
    }
    fruits=['apple','orange'];
    display(){

    }
    //getter method
 /*   get fruit(){
        return this.fruits[0];
    }
   
   add(e){
    if(e.target.name=="adds"){
    this.ans=this.input1 + this.input2;
    }
    else if(e.target.name=="subs"){
        this.ans=this.input1 - this.input2;
    }
    else if(e.target.name=="muls"){
        this.ans=this.input1 * this.input2;
    }
    else if(e.target.name=="divs")
    {
        this.ans=this.input1 /this.input2;
    }
    else 
    {
        this.input1=0;
        this.input2=0;
        this.ans=0;
    }
       
   }
   
changehandler1(event){
     
    this.input1=parseInt(event.target.value);
    
       }
    changehandler2(event1){
        
    this.input2=parseInt(event1.target.value);
        
    }
    red1(event){
        this.customStyle='redcss';
        this.person[0]="Mr X"
        this.per.position="Arctict"
    }
*/