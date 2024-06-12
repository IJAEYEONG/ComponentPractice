const basicData=() =>{
  return{
    name:"test",
    age:20,
    job:"미정"
  }
}
class BasicData{
  constructor(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
  }
}

const commponent =()=>{  
  let obj=basicData();
  const decision=()=>{};
  return`<html></html>`
}