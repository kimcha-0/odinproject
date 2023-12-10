const output = document.createElement('div');
for (let i = 10; i > -1; i--) {
    const para = document.createElement('p');
    para.textContent = `Countdown to ${i}`;
    output.appendChild(para); 
    console.log(i);
}


