let myClockElement = document.querySelector('.Clock');

myClockElement.append(stripeArea());
myClockElement.append(numberArea());
myClockElement.append(handlerArea());




function stripeArea (){
    let createParentDiv = document.createElement ('div');
    createParentDiv.classList.add('stripe-area')

    for (let i = 1; i<=60; i++){

        let createSpanDiv = document.createElement('span')


        createSpanDiv.style.transform = `rotate(${i * 6}deg)`;

        if(i % 5 == 0){
            createSpanDiv.classList.add ('stripe','circle');
        }
        else {
            createSpanDiv.classList.add('stripe');
        }
        createParentDiv.append(createSpanDiv);
    }
    return createParentDiv;
    
}


function numberArea (){
    let numberAreaDiv = document.createElement('div');
    numberAreaDiv.classList.add('number-area');

 for(let i = 1; i <=12; i++){
    let numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.style.transform =`rotate(${i * 30}deg)`;
    
let spanParent = document.createElement('span');
spanParent.textContent = i;
spanParent.style.transform =`rotate(-${i * 30}deg)`;


numberDiv.append(spanParent);
numberAreaDiv.append(numberDiv);
 }
 return numberAreaDiv;
}

// function numberArea (){
//     let numberAreaParentElement = document.createElement('div');
//     numberAreaParentElement.classList.add('number-area');

//     for(let i = 1; i <= 12; i++) {
//         let createNumberdiv = document.createElement('div');
//         createNumberdiv.classList.add('number');
//         createNumberdiv.style.transform = `rotate(${i * 30}deg)`;

//         let createSpanTagForNumber = document.createElement('span');
//         createSpanTagForNumber.textContent = i;
//         createSpanTagForNumber.style.transform =`rotate(-${i * 30}deg)`;

//         createNumberdiv.append(createSpanTagForNumber);
//         numberAreaParentElement.append(createNumberdiv)
        
//     }
//     return numberAreaParentElement;
// }

// function stripeArea(){
// let createParentDiv = document.createElement('div');
// createParentDiv.classList.add('stripe-area');

// for(let i = 1; i <= 60; i++)  {
//     let createSpan = document.createElement('span');

//     createSpan.style.transform = `rotate(${i * 6}deg)`;
//     if(i % 5 == 0){
//      createSpan.classList.add('stripe','circle');   
//     } else {
//     createSpan.classList.add('stripe');
//     }
    

//     createParentDiv.append(createSpan);

// }
// return createParentDiv;
// }

// function namberArea(){
//     let namberAreaParent = document.createElement('div');
//     namberAreaParent.classList.add('namber-area');

//     for(let i = 1; i <= 12; i++){
//         let createNamber = document.createElement ('div');
//         createNamber.classList.add('namber'); 
//         createNamber.style.transform = `rotate($(i * 30)deg)`;


//         let createSpanTag = document.createElement('span');
//         createSpanTag.textContent = i;
//         createSpanTag.style.transform = `rotate(-$(i * 30)deg)`;


//         createNamber.append(createSpanTag);
//         namberAreaParent.append(createNamber);

//     }
//     return namberAreaParent;

   
// }

// function numberArea (){
//     let numberAreaParentElement = document.createElement('div');
//     numberAreaParentElement.classList.add('number-area');

//     for(let i = 1; i <= 12; i++) {
//         let createNumberdiv = document.createElement('div');
//         createNumberdiv.classList.add('number');
//         createNumberdiv.style.transform = `rotate(${i * 30}deg)`;

//         let createSpanTagForNumber = document.createElement('span');
//         createSpanTagForNumber.textContent = i;
//         createSpanTagForNumber.style.transform =`rotate(-${i * 30}deg)`;

//         createNumberdiv.append(createSpanTagForNumber);
//         numberAreaParentElement.append(createNumberdiv)
        
//     }
//     return numberAreaParentElement;
// }


function handlerArea(){
    let handlerParentElement = document.createElement('div');
    handlerParentElement.classList.add('time-handler');
    let hrElement = document.createElement('div');
    hrElement.classList.add('hr');
    let minElement = document.createElement('div');
    minElement.classList.add('min');
    let secElement = document.createElement('div');
    secElement.classList.add('sec');

    // let d = new Date();
    // let sec = d.getSeconds() / 60;
    // let min = d.getMinutes();
    // let hr = d.getHours();

    // secElement.style.transform = `rotate(-${sec * 360}deg)`;

    handlerParentElement.append(hrElement);
    handlerParentElement.append(minElement);
    handlerParentElement.append(secElement);

    return handlerParentElement;

}

function startOurClock() {
    let d = new Date();
    let sec  = d.getSeconds() / 60;
    let min = (sec + d.getMinutes()) / 60;
    let hr = ( min + d.getHours()) / 12;

    let secElem = document.querySelector('.sec');
    let minElem = document.querySelector('.min');
    let hrElem = document.querySelector('.hr');

    secElem.style.transform = `rotate(${sec * 360}deg)`;
    minElem.style.transform = `rotate(${min * 360}deg)`;
    hrElem.style.transform = `rotate(${hr * 360}deg)`;

}
startOurClock();
setInterval(startOurClock, 1000);
