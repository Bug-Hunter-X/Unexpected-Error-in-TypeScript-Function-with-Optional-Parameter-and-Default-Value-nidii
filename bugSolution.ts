function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine

function printNumbersWithOptionalParam(n: number, message?: string): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (message) {
      console.log(message);
    }
  }
}

printNumbersWithOptionalParam(5, "Hello"); // Works fine
printNumbersWithOptionalParam(5); // Also works fine, no message is printed

function printNumbersWithOptionalParamAndDefault(n: number, message: string = "Default message"): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    console.log(message);
  }
}

printNumbersWithOptionalParamAndDefault(5); // Works fine, default message is printed
printNumbersWithOptionalParamAndDefault(5, "Overridden message"); // Works fine, overridden message is printed

//Corrected function
function printNumbersWithOptionalParamAndDefaultAndError(n: number, message: string = "Default message", error?: Error): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    console.log(message);
    if(error){
        throw error; 
    }
  }
}

printNumbersWithOptionalParamAndDefaultAndError(5); // Works fine now
printNumbersWithOptionalParamAndDefaultAndError(5, "Overridden message", new Error("Something went wrong!")); // Throws error as expected