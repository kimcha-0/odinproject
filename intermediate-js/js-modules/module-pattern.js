// everything in the function body is "bound" to that module
const SomeModule = (() => {})();

const Formatter = (() => {
    

    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const makeUppercase = (text) => {
        log("Make uppercase");
        return text.toUpperCase();
    };

    const writeToDOM = (selector, message) => {
        if (!!document && "querySelector" in document) {
            document.querySelector(selector).innerHTML = message;
        }
    }
    // exposing private method
    return {
        makeUppercase,
        writeToDOM,
    }
})();
// we don't like this since this module is dependent on something external
// solution: dependency injection

const FormatterDI = ((doc) => {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const makeUppercase = (text) => {
        log("Making uppercase");
        return text.toUpperCase();
    };

    const writeToDOM = (selector, message) => {
        if (!!doc && "querySelector" in doc) {
            doc.querySelector(selector).innerHTML = message;
        }
    }

    return {
        makeUppercase,
        writeToDOM,
    }
})(document);
Formatter.writeToDOM("#target", "Hi there");
