let globalScope = true;   // variables declared outside a function are global and can be
let firstName = "Gareth";	// accessed inside a function (global scope)


function local () {
	localScope = true;  // localScope will only be accessable in the function
	
}


console.log(globalScope); // I call the globalscope variable and it returns true.
console.log(localScope); // I try to call the localScope outside the function and it returns not defined



// I think this is how it works