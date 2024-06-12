class BasicData {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  set name(nameValue) {
    if (typeof nameValue === "string") {
      this._name = nameValue;
    } else {
      console.error("x");
    }
  }
  set age(ageValue){
    if(ageValue>0&& ageValue<100){
      this._age=ageValue;
    }else{
      this._age=0;
    }
  }
  // set age(ageValue) {
  //   if (typeof ageValue === "number") {
  //     this._age = ageValue;
  //   } else {
  //     console.error("x");
  //   }
  // }
  set job(jobValue) {
    if (typeof jobValue === "string") {
      this._job = jobValue;
    } else {
      console.error("x");
    }
  }
}
module.exports={BasicData,name}
// const component = () => {
//   let obj = new BasicData("test", 20, "미정");
//   console.log(obj);
//   // const decision = () => {
//   //   if (obj instanceof BasicData) {
//   //     return `<h1>${obj._name}</h1>`;
//   //   } else {
//   //     throw new Error("Error");
//   //   }
//   // };
//   return `<h1>${obj._name}</h1>`;
// };
// console.log(component())
// component()