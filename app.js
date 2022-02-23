const Bike = function(){
    const drivetrain = 'shimano';
    const cleaner = 'simple green'
    return {
        poweredby: function(){
            console.log("I ride ", drivetrain)
        },
        cleaner: function(){
            console.log('I clean with', cleaner)
        },
        send: "send or naw",
    }
}

const hakka = Bike();
console.log(hakka)
// {send: 'send or naw', poweredby: ƒ, cleaner: ƒ}
// cleaner: ƒ ()
// poweredby: ƒ ()
// send: "send or naw"
// [[Prototype]]: Object
hakka.poweredby();
// => I ride  shimano

hakka.cleaner();
// => I clean with simple green

console.log(hakka.send)
// =>send or naw


const sender = (state) =>({
    send:() => console.log(`I sent ${state.location}`)
})
const washer = (state) =>({
    wash: () => console.log(`I ${state.service} my bike`)
})
const climber = (state) =>({
    climb: () => console.log(`I climbed ${state.mtn} at ${state.age} years old`)
})

const Rider = (age) =>{
    let state = {
        age: age = age || 100,
        location: 'tamarancho',
        service: 'lubed',
        mtn: 'diablo'
    }
    return {
        ...sender(state),
        ...washer(state),
        ...climber(state)
    }
}

console.log(Rider(33))
// => {send: ƒ, wash: ƒ, climb: ƒ}

Rider().climb();
// => I climbed diablo at 100 years old
Rider().send();
// => I sent tamarancho

Rider().wash()
// => I lubed my bike



// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
//   let count = 0;

//   return function() {
//     count++;
//     this.textContent = `Clicks: ${count}`;
//   };
// };

// buttonEl.addEventListener('click', clickHandler());

const containerEl = document.getElementById('container');

const clickHandler = function(event) {
  if (event.target.matches('button')) {
    event.target.textContent = 'Clicked!';
  }
};

containerEl.addEventListener('click', clickHandler);

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const findIndex = (num) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      console.log(`${num} found at index ${i}`);
    }
  }
};
