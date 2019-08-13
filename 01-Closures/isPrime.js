var isPrime = (function(){
    var result = {};

    return function(n){
        if (typeof result[n] !== 'undefined')
            return result[n];
        result[n] = true;
		console.log('processing ', n);
        for(var i=2; i <= (n/2); i++)
            if (n % i === 0){
                result[n] = false;
                break;
            }
        return result[n];
    }
})();

var isPrime = (function(){
    var result = {};

    function checkPrime(n){
        console.log('processing ', n);
        for(var i=2; i <= (n/2); i++)
            if (n % i === 0){
                return false;
            }
        return true;
    }
    return function(n){
        if (typeof result[n] === 'undefined')
            result[n] = checkPrime(n);
        return result[n];
    }
})();

var isOddOrEven = (function(){
    var result = {};

    function checkAddOrEven(n){
        console.log('processing ', n);
        return n % 2 === 0 ? 'even' : 'odd';
    }
    return function(n){
        if (typeof result[n] === 'undefined')
            result[n] = checkAddOrEven(n);
        return result[n];
    }
})();

function memoize(fn){
    var result = {};
    return function(n){
        if (typeof result[n] === 'undefined')
            result[n] = fn(n);
        return result[n];
    }
}

var isPrime = memoize(function checkPrime(n){
    console.log('processing ', n);
    for(var i=2; i <= (n/2); i++)
        if (n % i === 0){
            return false;
        }
    return true;
});

function memoize(fn){
    var result = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof result[key] === 'undefined')
            result[key] = fn.apply(undefined, arguments);
        return result[key];
    }
}

var isPrime = memoize(function checkPrime(n){
        console.log('processing ', n);
        for(var i=2; i <= (n/2); i++)
            if (n % i === 0){
                return false;
            }
        return true;
    })

var add = memoize(function(x,y){
    console.log('processing ', x , ' and ', y);
    return x + y;
})

var add3 = memoize(function(x,y,z){
    console.log('processing ', x , ' and ', y, ' and ', z);
    return x + y + z;
})