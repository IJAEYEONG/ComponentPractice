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
class Test{
  constructor(a,b,c){
    this.a=a;
    this.b=b;
    this.c=c
  }
}
module.exports={BasicData}