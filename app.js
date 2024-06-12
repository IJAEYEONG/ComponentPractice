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

  set age(ageValue) {
    if (typeof ageValue === "number") {
      this._age = ageValue;
    } else {
      console.error("x");
    }
  }

  set job(jobValue) {
    if (typeof jobValue === "string") {
      this._job = jobValue;
    } else {
      console.error("x");
    }
  }
}

const component = () => {
  let obj = new BasicData("test", 20, "미정");
  console.log(obj);
  const decision = () => {
    if (obj instanceof BasicData) {
      return `<h1>${obj._name}</h1>`;
    } else {
      throw new Error("Error");
    }
  };
  return decision();
};
console.log(component())
component()

