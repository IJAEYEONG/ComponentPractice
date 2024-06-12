const component = (age,job) => {
  let obj = {
    name:"test",
    age:age,
    job:job
  };
  
  let innerFunc = () => {
    if(obj.age>20){
      return "여름엔 역시 맥주가 최고지!";
    }else{
      return "여름엔 역시 요쿠르트가 최고지!"
    }
  }
  let anotherFunc =()=>{
    if(obj.job==="t"){
      return "ok"
    }else{
      return "error"
    }
  }
  return `
  <h1>${obj.name}</h1>;
  <h2>${innerFunc()}</h2>
  <h3>${anotherFunc()}</h3>`;

}
console.log(component())