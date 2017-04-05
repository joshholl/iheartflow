"use babel"

// tells flow that this is a flow script file
// @flow

 function cube(n: number) : string {
 	return (n*n*n).toString()
 }

console.log(cube(5) + ' the result of cubing')



