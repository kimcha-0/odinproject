class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

// const loadJson = (url) => {
//     return fetch(url)
//         .then(response => {
//             if (response.status === 200) {
//                 return response.json();
//             } 
//             throw new HttpError(response.status);
//         });
// };

const loadJson = async (url) => {
    const response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    }
    throw new HttpError(response.status);
};

async function demoGithubUser() {

  let user;
  while(true) {
    let name = prompt("Enter a name?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // no error, exit loop
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // loop continues after the alert
        alert("No such user, please reenter.");
      } else {
        // unknown error, rethrow
        throw err;
      }
    }
  }


  alert(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();
