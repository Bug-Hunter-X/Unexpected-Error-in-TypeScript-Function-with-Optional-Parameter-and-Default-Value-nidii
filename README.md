# Unexpected Error in TypeScript Function with Optional Parameter and Default Value

This repository demonstrates an unexpected error that occurs in a TypeScript function with an optional parameter and a default value. The error is thrown even when no error object is explicitly passed as an argument.

## Bug Description

A TypeScript function is defined with three parameters: a required number, an optional string with a default value, and an optional Error object.  The function iterates and logs messages; if an error is provided, it throws the error. The issue is that the function throws an error even when the optional error parameter is omitted (undefined). 

## Reproduction Steps

1. Clone this repository.
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run `node bug.js` to execute the compiled JavaScript code.

You'll observe that the program throws an error despite no error being explicitly passed.

## Solution

The solution involves a careful check for the existence of the error object before attempting to throw it.  This ensures that only when a true Error object is provided, the error is actually thrown. See `bugSolution.ts` for the corrected code.