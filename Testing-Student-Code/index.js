console.log("titanic".toUpperCase());
console.log("QUIETLY".toLowerCase);
console.log("Java".repeat(10));
console.log("berry".charAt(1));
console.log("berry".charAt(0));
console.log("banana".includes("nan"));
console.log("banana".endsWith("ana"));
console.log("blueberry".replace("blue", "black"));

// With Booleans //
let myBool = "pie" + true;
console.log(myBool);

myBool = "pie" + false;
console.log(myBool);

let myBool2 = false + 8;
console.log(myBool2);

myBool2 = true + 8;
console.log(myBool2);

function greeter(name) {
  console.log(name);
  if (name === "darth vader") {
    console.log("Go away!");
  } else if (name === "luke skywalker") {
    console.log("Hello luke skywalker, you are a wonderful friend!");
  } else if (name === "lex luthor") {
    console.log("Be gone, you villain!!!");
  } else {
    console.log(`welcome ${name}`);
  }

  if(name.includes("darth")){
    console.log(`I recognize you ${name}`);
  }
}

greeter("john");
greeter("darth vader");
greeter("luke escoto");
greeter("luke skywalker");
greeter("lex luthor");