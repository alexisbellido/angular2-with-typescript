export class Person {

  public firstName: string;
  public lastName: string;
  public age: number;
  private _ssn: string;

  constructor(firstName: string, lastName: string, age: number, _ssn: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this._ssn = _ssn;
    this.setupStuff();
  }

  get ssn(): string {
    return this._ssn;
  }

  set ssn(value: string) {
    this._ssn = value;
  }

  setupStuff(): void {
    console.log('We are setting up stuff');
  }

  doSomething(howManyTimes: number = 1): void {
    for (let i: number = 1; i < howManyTimes; i++) {
      console.log(`${i} -- Doing something`);
    }
  }

}

export class Employee extends Person {

  department: string;

  constructor(firstName: string, lastName: string, age: number, _ssn: string, department: string) {
    super(firstName, lastName, age, _ssn);
    this.department = department;
  }

  doSomething(howManyTimes: number = 1): void {
    super.doSomething(howManyTimes);
    console.log('Calling from child doSomething');
  }
}
