// 接口
interface Animal {
  name: string;
  age: number;
}

// 定义抽象类实现接口
abstract class Animal implements Animal {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract move(distance: number): void;
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }
  move(distance: number): void {
    console.log(`${this.name} moved ${distance}m.`);
  }
}
