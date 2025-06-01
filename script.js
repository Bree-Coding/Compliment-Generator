    // Array of kind and gentle compliment messages
const messages = [
  "⋆˚✿˖° You're doing better than you think ⋆˚✿˖°",
  "⋆˚✿˖° Every step you take matters, even the tiny ones ⋆˚✿˖°",
  "⋆˚✿˖° You have a quiet strength that inspires others ⋆˚✿˖°",
  "⋆˚✿˖° Your presence brings calm and warmth ⋆˚✿˖°",
  "⋆˚✿˖° You are allowed to grow at your own pace ⋆˚✿˖°",
  "⋆˚✿˖° You radiate kindness wherever you go ⋆˚✿˖°",
  "⋆˚✿˖° Even on hard days, you shine through ⋆˚✿˖°",
  "⋆˚✿˖° You are enough, just as you are ⋆˚✿˖°",
  "⋆˚✿˖° The world is better with you in it ⋆˚✿˖°",
  "⋆˚✿˖° Your dreams are valid, no matter how big or small ⋆˚✿˖°",
  "⋆˚✿˖° You are blooming in your own beautiful way ⋆˚✿˖°",
  "⋆˚✿˖° Your heart is gentle, and that’s your power ⋆˚✿˖°",
  "⋆˚✿˖° You bring light to places that need it ⋆˚✿˖°",
  "⋆˚✿˖° You are becoming the version of yourself you always needed ⋆˚✿˖°",
  "⋆˚✿˖° You are a soft breeze in a chaotic world ⋆˚✿˖°",
  "⋆˚✿˖° Your journey is yours, and it's beautiful ⋆˚✿˖°",
  "⋆˚✿˖° You are not behind, you are on your path ⋆˚✿˖°",
  "⋆˚✿˖° You're more resilient than you realize ⋆˚✿˖°",
  "⋆˚✿˖° You make life a little sweeter for the people around you ⋆˚✿˖°",
  "⋆˚✿˖° Your softness is not weakness; it's magic ⋆˚✿˖°",
  "⋆˚✿˖° You are brave for choosing to keep going ⋆˚✿˖°",
  "⋆˚✿˖° It’s okay to rest, even the stars need the night ⋆˚✿˖°",
  "⋆˚✿˖° You are growing even when it feels like standing still ⋆˚✿˖°",
  "⋆˚✿˖° You don’t have to have it all figured out to move forward ⋆˚✿˖°",
  "⋆˚✿˖° You are making quiet progress, and that’s powerful ⋆˚✿˖°",
  "⋆˚✿˖° You’re glowing in your own gentle way ⋆˚✿˖°",
  "⋆˚✿˖° You bring comfort just by being yourself ⋆˚✿˖°",
  "⋆˚✿˖° You deserve space to be soft, to be safe, to be loved ⋆˚✿˖°",
  "⋆˚✿˖° Your gentle energy is healing ⋆˚✿˖°",
  "⋆˚✿˖° You have a beautiful soul, and it shows ⋆˚✿˖°",
  "⋆˚✿˖° Every effort you make is meaningful ⋆˚✿˖°",
  "⋆˚✿˖° Your kindness leaves a trail of light ⋆˚✿˖°",
  "⋆˚✿˖° You are someone’s sunshine on a cloudy day ⋆˚✿˖°",
  "⋆˚✿˖° You're turning your pain into something beautiful ⋆˚✿˖°",
  "⋆˚✿˖° Your vulnerability is a strength, not a flaw ⋆˚✿˖°",
  "⋆˚✿˖° You carry so much with grace ⋆˚✿˖°",
  "⋆˚✿˖° You matter, even when you’re quiet ⋆˚✿˖°",
  "⋆˚✿˖° Your presence is a gift ⋆˚✿˖°",
  "⋆˚✿˖° You're not late, you're unfolding right on time ⋆˚✿˖°",
  "⋆˚✿˖° You're becoming someone you're proud of ⋆˚✿˖°",
  "⋆˚✿˖° You sparkle in ways you don’t always notice ⋆˚✿˖°",
  "⋆˚✿˖° Your progress deserves celebration, no matter how small ⋆˚✿˖°",
  "⋆˚✿˖° You're softly powerful, like the moon ⋆˚✿˖°",
  "⋆˚✿˖° You're a safe place in a loud world ⋆˚✿˖°",
  "⋆˚✿˖° You make softness feel strong ⋆˚✿˖°",
  "⋆˚✿˖° You’re walking through the storm and still smiling ⋆˚✿˖°",
  "⋆˚✿˖° You are the definition of gentle resilience ⋆˚✿˖°",
  "⋆˚✿˖° You create peace by simply being ⋆˚✿˖°",
  "⋆˚✿˖° You’re allowed to take up space and grow tall ⋆˚✿˖°",
  "⋆˚✿˖° You're beautifully becoming ⋆˚✿˖°",
  "⋆˚✿˖° There is light in everything you do ⋆˚✿˖°"
];


// Get elements from the DOM
const button = document.getElementById("generate-btn");
const complimentText = document.getElementById("compliment");
const typeSound = document.getElementById("type-sound");
const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

// Types a message letter by letter with a typing sound
function typeMessage(text) {
    complimentText.textContent = '';
    let i = 0;

    // The typing sound begining
    typeSound.loop = true;
    typeSound.currentTime = 0;
    typeSound.play();

    //Function that type like a typewriter
    function type() {
        if (i < text.length) {
        typeSound.play();
        complimentText.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
        } 

        else {
        typeSound.pause(); // End of the typing sound
        typeSound.currentTime = 0;
        }
    }

    type();
}

// Event listener for generating a random message
button.addEventListener('click', () => {
const random = messages[Math.floor(Math.random() * messages.length)];
typeMessage(random);
});

// Event listener for toggling background music on/off
musicToggle.addEventListener("click", () => {
if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = "˚♪𝄞₊ Music On";
    } 
    else {
        bgMusic.pause();
        musicToggle.textContent = "˚♪𝄞₊ Music Off";
    }
});
