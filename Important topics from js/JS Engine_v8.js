// JS runs literally everywhere from smart watch to robots to browsers because of Javascript Runtime Environment (JRE).

// JRE is like a big container which has everything which are required to run Javascript code.

// JRE consists of a JS Engine (❤️ of JRE), set of APIs to connect with outside environment, event loop, Callback queue, Microtask queue etc.

// Browser can execute javascript code because it has the Javascript Runtime Environment.

// ECMAScript is a governing body of JS. It has set of rules which are followed by all JS engines like Chakra(Internet Explorer), V8 Engine (Edge) Spidermonkey(Firefox)(first javascript engine created by JS creator himself), v8(Chrome)

// Javascript Engine is not a machine. Its software written in low level languages (eg. C++) that takes in hi-level code in JS and spits out low level machine code.

// Code inside Javascript Engine passes through 3 steps : Parsing, Compilation and Execution

// Parsing - Code is broken down into tokens. In "let a = 7" -> let, a, =, 7 are all tokens. Also we have a syntax parser that takes code and converts it into an AST (Abstract Syntax Tree) which is a JSON with all key values like type, start, end, body etc (looks like package.json but for a line of code in JS. Kinda unimportant)(Check out astexplorer.net -> converts line of code into AST).
// Compilation - JS has something called Just-in-time(JIT) Compilation - uses both interpreter & compiler. Also compilation and execution both go hand in hand. The AST from previous step goes to interpreter which converts hi-level code to byte code and moves to execeution. While interpreting, compiler also works hand in hand to compile and form optimized code during runtime. Does JavaScript really Compiles? The answer is a loud YES. More info at: Link 1, Link 2, Link 3. JS used to be only interpreter in old times, but now has both to compile and interpreter code and this make JS a JIT compiled language, its like best of both world.
// Execution - Needs 2 components ie. Memory heap(place where all memory is stored) and Call Stack(same call stack from prev episodes). There is also a garbage collector. It uses an algo called Mark and Sweep. JS Engine Demo GiF Demo JS Engine Demo
// Companies use different JS engines and each try to make theirs the best.

// v8 of Google has Interpreter called Ignition, a compiler called Turbo Fan and garbage collector called Orinoco
