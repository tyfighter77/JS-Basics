//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function() {
  var name = 'Tyler';
  return function() {
    return 'The original name was ' + name;
  };
};
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

inner();


//Next problem



var callFriend = function() {
  var friend = 'Jake';

  function callF(number) {
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

// callFriend(callF(435-215-9248));
var callJake = callFriend();
callJake("435-215-9248");

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

var makeCounter = function() {
  var counter = 0;
  return function() {
    counter = counter + 1;
    return counter;
  };
};

var count = makeCounter();
count(); // 1
count(); // 2
count(); // 3
count(); // 4



//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'. Write a second function named codeFriend that accepts the first function as it's first parameter. The second function should return a new third function. Store the third function in a variable, codeEcho which, when invoked, invokes the first, original function that was passed in, but will only ever do so once (returns null after first invocation).
*/

var codeLove = function() {
  return "I love code";
};

var codeFriend = function(fun) {
  var run = false;
  return function() {
    if (!run) {
      run = true;
      return fun();
    } else {
      return null;
    }
  };
};

var codeEcho = codeFriend(codeLove);


//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

var fnCounter = function (fun, N) {
  var count = 0;
  return function() {
      if (count < N) {
      count = count + 1;
      return fun();
    } else {
      return "STOP";
    }
  };
};


//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    // The console will log "i" every second for five seconds


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Wrong.


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
*/

var counter = function(){
  var count=1;
  for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( count++ );
    }, i*1000 );
  }
};

// var counter = function(){
//   return function() {
//     for (var i=1; i<=5; i++) {
//     setTimeout( function timer(){
//         console.log( i );
//     }, i*1000 );
//   }
// };

//Next Problem

var funcArray = function(array) {
  for (var i = 0; i < array.length; i++)
  return function{
    console.log(i);
  };
}

/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/
