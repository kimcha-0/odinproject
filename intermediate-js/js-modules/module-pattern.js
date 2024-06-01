// const Formatter = (() => {
//     const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
// 
//     const makeUppercase = (text) => {
//         log("Make uppercase");
//         return text.toUpperCase();
//     };
// 
//     const writeToDOM = (selector, message) => {
//         if (!!document && "querySelector" in document) {
//             document.querySelector(selector).innerHTML = message;
//         }
//     }
//     // exposing private method
//     return {
//         makeUppercase,
//         writeToDOM,
//     }
// })();

// we don't like this since this module is dependent on something external
// solution: dependency injection

const documentMock = (() => ({
  querySelector: (selector) => ({
    innerHTML: null,
  }),
}))();

documentMock.querySelector().innerHTML = "hello";

const Formatter = (function(doc) {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };

  const writeToDOM = (selector, message) => {
    doc.querySelector(selector).innerHTML = message;
  }

  return {
    makeUppercase,
    writeToDOM,
  }
})(documentMock);


Formatter.writeToDOM("#target", "Hi there");
Formatter.writeToDOM("", "Hi there again");
documentMock.querySelector("").innerHTML = "hello";
console.log(documentMock.querySelector("").innerHTML);
