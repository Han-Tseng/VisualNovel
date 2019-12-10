// DOM MANIPULATION Visual Novel Game

// Create a new event
// Select the button you want to edit
// Run a function when it is clicked

//Sound Variables
var hitSound = new Audio("sounds/hitsound.mp3");
var loseSound = new Audio("sounds/losesound.mp3");
var tigerSound = new Audio("sounds/tigersound.mp3");
var waterSound = new Audio("sounds/watersound.mp3");
var winSound = new Audio("sounds/winsound.mp3");

//1 Start Button
document.querySelector(".start-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>Once upon a time, you decided to embark on the journey of a luxury cruise ship to spend the best week of your life. Unfortunately, there was a disaster in the middle of the ocean. Your ship sank and you are now the only survivor.</p><img src='images/1.jpg'>";
    // Erase buttons
    document.querySelector(".start-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".continue1-btn").classList.remove("invisible");
    //Change Background
    document.querySelector(".container").classList.add("island-newbg");
});

//1 Reset Button
document.querySelector(".reset-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>Once upon a time, you decided to embark on the journey of a luxury cruise ship to spend the best week of your life. Unfortunately, there was a disaster in the middle of the ocean. Your ship sank and you are now the only survivor.</p><img src='images/1.jpg'>";
    // Erase buttons
    document.querySelector(".reset-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".continue1-btn").classList.remove("invisible");
    //Change Background
    document.querySelector(".container").classList.add("island-newbg");
});

//2 Continue Button
document.querySelector(".continue1-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You look around and see no signs of life on this island that you landed on. To your left is a tall mountain, and to your right is a dense rainforest. Where do you go to stay alive?</p>";
    // Erase buttons
    document.querySelector(".continue1-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".mountain-btn").classList.remove("invisible");
    document.querySelector(".rainforest-btn").classList.remove("invisible");
});

//3-1 Mountain Button
document.querySelector(".mountain-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>As you slowly climb up, you eventually reached the mountain's peak. As it oversees the entire island with breathtaking views, you see a ship from far away. What do you do to get the ship's attention?</p>";
    // Erase buttons
    document.querySelector(".mountain-btn").classList.add("invisible");
    document.querySelector(".rainforest-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".jump-btn").classList.remove("invisible");
    document.querySelector(".fire-btn").classList.remove("invisible");
    //Change Background
    document.querySelector(".container").classList.add("mountain-newbg");
});

//3-2 Rainforest Button
document.querySelector(".rainforest-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>Since you decided to go to the rainforests, you follow a small trail to your right. Suddenly, a loud animal noise comes from the side. How do you respond?</p>";
    // Erase buttons
    document.querySelector(".mountain-btn").classList.add("invisible");
    document.querySelector(".rainforest-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".approach-btn").classList.remove("invisible");
    document.querySelector(".run-btn").classList.remove("invisible");
    //Change Background
    document.querySelector(".container").classList.add("rainforest-newbg");

});

//4-1 End Jump Button
document.querySelector(".jump-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>Unfortunately, strong winds suddenly blow from the side. After a second of panic, you fall off and hit the beach.</p><h1>The end.</h1><img src='images/4-1.jpg'>";
    // Erase buttons
    document.querySelector(".jump-btn").classList.add("invisible");
    document.querySelector(".fire-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});

//4-2 Fire Button
document.querySelector(".fire-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>Because the flames were too small, it was unable to catch the ship captain's attention. What do you do now?</p><img src='images/4-2.jpg'>";
    // Erase buttons
    document.querySelector(".jump-btn").classList.add("invisible");
    document.querySelector(".fire-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".tryagain-btn").classList.remove("invisible");
    document.querySelector(".giveup-btn").classList.remove("invisible");
});

//4-3 Approach Button
document.querySelector(".approach-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You decided to get closer to the noise, only to see a huge tiger looking right at you with a hungry expression. There is a large rock beside you. What do you do?</p><img src='images/4-3.jpg'>";
    // Erase buttons
    document.querySelector(".approach-btn").classList.add("invisible");
    document.querySelector(".run-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".attiger-btn").classList.remove("invisible");
    document.querySelector(".atsticks-btn").classList.remove("invisible");
    //Play Sound
    tigerSound.play();
});

//4-4 Run Button
document.querySelector(".run-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>Despite running to escape the noise after a while, you realize that it is still getting closer. The tiger has been following you! How do you escape?</p><img src='images/4-4.jpg'>";
    // Erase buttons
    document.querySelector(".approach-btn").classList.add("invisible");
    document.querySelector(".run-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".stop-btn").classList.remove("invisible");
    document.querySelector(".keeprunning-btn").classList.remove("invisible");
});

//5-1 Try Again Button
document.querySelector(".tryagain-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You make larger flames this time, and after a while, it finally captures the attention of a cargo container ship. The captain blinks his shiplights back at you. What do you do to get onto that ship?</p><img src='images/5-1.jpg'>";
    // Erase buttons
    document.querySelector(".tryagain-btn").classList.add("invisible");
    document.querySelector(".giveup-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".swim-btn").classList.remove("invisible");
    document.querySelector(".wait-btn").classList.remove("invisible");
});

//5-2 End Give Up Button
document.querySelector(".giveup-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You decide to make a temporary shelter on the mountain peak, hoping for other ships to see the small flames. Time passes by, and you eventually die of dehydration.</p><h1>The end.</h1><img src='images/5-2.jpg'>";
    // Erase buttons
    document.querySelector(".tryagain-btn").classList.add("invisible");
    document.querySelector(".giveup-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});

//5-3 At Tiger Button
document.querySelector(".attiger-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>The rock hit the tiger right in the eye, and it starts bleeding. However, he isn't killed, and comes angrily towards you. How do you respond?</p>";
    // Erase buttons
    document.querySelector(".attiger-btn").classList.add("invisible");
    document.querySelector(".atsticks-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".apologize-btn").classList.remove("invisible");
    document.querySelector(".throwagain-btn").classList.remove("invisible");
    //Play Sound
    hitSound.play();
});

//5-4 At Sticks Button
document.querySelector(".atsticks-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You pick up the rock and threw it at the middle of the pile, creating a loud bang that echoed throughout the rainforest. The tiger, shocked and scared, initially turns towards you yet slowly walks away.</p><img src='images/5-4.jpg'>";
    // Erase buttons
    document.querySelector(".attiger-btn").classList.add("invisible");
    document.querySelector(".atsticks-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".continue54-btn").classList.remove("invisible");
    //Play Sound
    hitSound.play();
});

//5-5 End Stop Button
document.querySelector(".stop-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>As soon as you stopped, the tiger unintentionally bumps right into your back. He sends you flying high into the sky before you fall down again.</p><h1>The end.</h1><img src='images/5-5_6-3_6-4.jpg'>";
    // Erase buttons
    document.querySelector(".stop-btn").classList.add("invisible");
    document.querySelector(".keeprunning-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});

//5-6 End Keep Running Button
document.querySelector(".keeprunning-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>As you get exausted and decrease your running speed, the tiger leaps forward and bite right at your body with his razor-like jaws.</p><h1>The end.</h1><img src='images/5-6.jpg'>";
    // Erase buttons
    document.querySelector(".stop-btn").classList.add("invisible");
    document.querySelector(".keeprunning-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});

//6-1 Swim Button
document.querySelector(".swim-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You start swimming out into the pitch blue water and after eight hours, still continue in the same direction without reach any ship.</p><img src='images/6-1.jpg'>";
    // Erase buttons
    document.querySelector(".swim-btn").classList.add("invisible");
    document.querySelector(".wait-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".continue61-btn").classList.remove("invisible");
    //Change Background
    document.querySelector(".container").classList.add("ocean-newbg");
    //Play Sound
    waterSound.play();
});

//6-2 Wait Button
document.querySelector(".wait-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>As you race back to the beach, the ship gets closer and closer to you. You get more and more excited that you are finally able to get out of this island!</p>";
    // Erase buttons
    document.querySelector(".swim-btn").classList.add("invisible");
    document.querySelector(".wait-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".continue62-btn").classList.remove("invisible");
    //Change Background
    document.querySelector(".container").classList.add("beach-newbg");
});

//6-3 End Apologize Button
document.querySelector(".apologize-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>Obviously, the tiger doesn't understand human langauge. He seizes his opportunity and furiously open his jaws wide at you. Your last sight is his sharp, razor-like teeth.</p><h1>The end.</h1><img src='images/5-5_6-3_6-4.jpg'>";
    // Erase buttons
    document.querySelector(".apologize-btn").classList.add("invisible");
    document.querySelector(".throwagain-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});

//6-4 End At Tiger Button
document.querySelector(".throwagain-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You reach for the rock and aim at the same wounds again. This further infuriates the tiger, causing him to furiously open his jaws wide at you. Your last sight is his sharp, razor-like teeth.</p><h1>The end.</h1><img src='images/5-5_6-3_6-4.jpg'>";
    // Erase buttons
    document.querySelector(".apologize-btn").classList.add("invisible");
    document.querySelector(".throwagain-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});

//6-5 Continue Button
document.querySelector(".continue54-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You thought you almost lost your life, but is glad that you didn't. You continue moving through the jungle, and soon hear the sound of running water. You see it coming from a stream that emerges from a cave, but where do you go?</p><img src='images/6-5.jpg'>";
    // Erase buttons
    document.querySelector(".continue54-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".stream-btn").classList.remove("invisible");
    document.querySelector(".cave-btn").classList.remove("invisible");
});

//7-1 End Continue Button
document.querySelector(".continue61-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>As you are getting extremely tired, a school of hungry and ravenous sharks approach you. They haven't had such a dinner in a while.</p><h1>The end.</h1><img src='images/7-1.jpg'>";
    // Erase buttons
    document.querySelector(".continue61-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});

//7-2 End Continue Button
document.querySelector(".continue62-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>However, right when the ship reaches shallow waters, its cargo compartment hits the shallow rocks on the seabed and immediately blows up. This leaves no time for you and everyone onboard to escape.</p><h1>The end.</h1><img src='images/7-2.jpg'>";
    // Erase buttons
    document.querySelector(".continue62-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});

//7-3 Stream Button
document.querySelector(".stream-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You walk back and forth and eventually find the narrowest part of the stream, but crossing it requires a long jump that you used to do during sports days. How do you get across?</p><img src='images/7-3.jpeg'>";
    // Erase buttons
    document.querySelector(".stream-btn").classList.add("invisible");
    document.querySelector(".cave-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".longjump-btn").classList.remove("invisible");
    document.querySelector(".liedown-btn").classList.remove("invisible");
    //Change Background
    document.querySelector(".container").classList.add("stream-newbg");
});  

//7-4 Cave Button
document.querySelector(".cave-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You reached the opening of the cave and start to wander inside. As you continue to go deeper, there is a really small opening to an inside cave that you're not sure if you can fit into. Should you go in?</p><img src='images/7-4.jpg'>";
    // Erase buttons
    document.querySelector(".stream-btn").classList.add("invisible");
    document.querySelector(".cave-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".goin-btn").classList.remove("invisible");
    document.querySelector(".returnback-btn").classList.remove("invisible");
    //Change Background
    document.querySelector(".container").classList.add("cave-newbg");
}); 

//8-1 End Long Jump Button
document.querySelector(".longjump-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You jump forward and in the middle of the air, realized that you underestimated the distance. You fall down and hit your head hard on rocks at the bottom.</p><h1>The end.</h1><img src='images/8-1.jpg'>";
    // Erase buttons
    document.querySelector(".longjump-btn").classList.add("invisible");
    document.querySelector(".liedown-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});  

//8-2 Lie Down Button
document.querySelector(".liedown-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>After you lied down, the currents gently carried you down the stream until you reached a bay where a small rowboat is parked. You quickly climb into it, but where do you go?</p><img src='images/8-2.jpg'>";
    // Erase buttons
    document.querySelector(".longjump-btn").classList.add("invisible");
    document.querySelector(".liedown-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".circulate-btn").classList.remove("invisible");
    document.querySelector(".land-btn").classList.remove("invisible");
    //Play Sound
    waterSound.play();
});  

//8-3 End Go In Button
document.querySelector(".goin-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You head went through, however, your body wasn't as lucky. You fidget around, but your body remains as still as the rocks.</p><h1>The end.</h1><img src='images/8-3.jpg'>";
    // Erase buttons
    document.querySelector(".goin-btn").classList.add("invisible");
    document.querySelector(".returnback-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});  

//8-4 End Return Back Button
document.querySelector(".returnback-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>As you were walking back, time starts to get late and the sun sets. Stranded in the middle of complete darkness, you scream for help again and again to hear nothing but echo again and again as the only response.</p><h1>The end.</h1><img src='images/8-4.jpg'>";
    // Erase buttons
    document.querySelector(".goin-btn").classList.add("invisible");
    document.querySelector(".returnback-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});  

//9-1 Success Circulate Button
document.querySelector(".circulate-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>Within a short time of circulating the island, a search airplane identifies you as a moving object from above the sky. It informs a rescue team that comes with helicopters and boats.</p><h1>Congratulations, you are successfully saved!</h1><img src='images/9-1.jpg'>";
    // Erase buttons
    document.querySelector(".circulate-btn").classList.add("invisible");
    document.querySelector(".land-btn").classList.add("invisible");
    //Change Background
    document.querySelector(".container").classList.add("island-newbg");
    //Play Sound
    winSound.play();
});  

//9-2 End Land Button
document.querySelector(".land-btn").addEventListener("click", function() {
    // Story
    document.querySelector(".story").innerHTML = "<p>You set sail and continue hour after hour, however, the ocean is simply too big to reach land again. A disaster strikes again, and your rowboat tips over within seconds.</p><h1>The end.</h1><img src='images/9-2.jpg'>";
    // Erase buttons
    document.querySelector(".circulate-btn").classList.add("invisible");
    document.querySelector(".land-btn").classList.add("invisible");
    // Show next buttons
    document.querySelector(".reset-btn").classList.remove("invisible");
    //Play Sound
    loseSound.play();
});  