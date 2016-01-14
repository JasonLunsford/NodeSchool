function repeat(operation, num) {
    if (num <= 0) return;
    // expose innerworkings of this function to the trampoline function
    // thereby avoiding excessive stack issues
    return function() {
        operation();
        return repeat(operation, --num);
    };
}

function trampoline(fn) {
    // accepts, and executes, each function independently, without first building
    // a gianormous stack, for as long as a function exists to process
    while (fn && typeof fn === 'function') {
        fn = fn();
    }
}

module.exports = function(operation, num) {
    // trampolines EXECUTE the recursive function, returning each cycle back to 
    // original caller
    trampoline(function() {
        return repeat(operation, num);
    });
};

/*
    Execution context:

    var _repeat = require(./trampoline.js),
    var count   = 0;

    _repeat(function() {
        count++
    }, 100000);

    console.log('executed %d times.', count);

*/