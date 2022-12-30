@classDecorator
class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `The color is ${this.color}`;
  }

  @logError("OOPS, something went wrong!!")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator foo: string
  ): void {
    if (speed === "fast") {
      console.log("Seish");
    } else {
      console.log("Nothing");
    }
    // throw new Error();
    // console.log("Swish");
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function test(target: any, key: string, desc: PropertyDescriptor) {
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;
    desc.value = () => {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot("fast", "foo");
