import "reflect-metadata";

// const test = {
//   name: "DE",
// };

// Reflect.defineMetadata("age", 20, test);
// const log = Reflect.getMetadata("age", test);
// console.log(log);

// Reflect.defineMetadata("age", 30, test, "name");
// const log2 = Reflect.getMetadata("age", test, "name");
// console.log(log2);

// console.log(Reflect.getMetadataKeys(test));

//----------------------------------------------

@printMetadata
class Test {
  name: string;

  @print("Mostafa-DE")
  test(): void {
    console.log("test test!!");
  }
}

// Factory Decorator
function print(prefix: string) {
  return (target: Test, key: string) => {
    Reflect.defineMetadata("secret", prefix, target, key);
    console.log(target);
  };
}

// const secret = Reflect.getMetadata("secret", Test.prototype, "test");
// console.log(secret);

// Class Decorator
function printMetadata(target: typeof Test) {
  // for some reason (target.prototype) is return empty object
  // so we use (Object.getOwnPropertyNames(target.prototype)) to get all keys as array
  // const keys = Object.getOwnPropertyNames(target.prototype);
  // for (let key of keys) {
  //   if (key === "constructor") continue;
  //   const value: string = Reflect.getMetadata("secret", target.prototype, key);
  //   console.log(value);
  // }
}
