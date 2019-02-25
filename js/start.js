window.onload = function(){
	const funFactGen = () => {

	    let FFG = Math.floor(Math.random() * funFactGenerator.length);
	    let pID = document.getElementById("funFact");
	    pID.innerHTML = funFactGenerator[FFG];
	}

	let funFactGenerator = [
	    "this website was coded by kids using subline text",
	    "Shigeru Miyamoto, the creator of Super Mario Bros. and Donkey Kong, is not allowed to bike to work because his safety is too important to Nintendo.",
	    " Ghostbusters: The Video Game (2009) has voice acting from all four of the original cast members (Bill Murray, Dan Aykroyd, Harold Ramis, Ernie Hudson), who helped write the script as well. Aykroyd considers it 'essentially the third movie'.",
	    "Many American public libraries carry video games as an attempt to lure teenagers into a library. The result is more teenagers coming to the library and books are being checked out at a rate that exceeds what it was before the gamers arrived.",
	    "credits to github foor letting us make this",
	    "Konami had a sense of humor dealing with Nintendo piracy. If Teenage Mutant Ninja Turtles III senses it isn't an authentic copy the game silently reduces the damage the player deals out, doubles the damage they take and makes Shredder immortal.",	    
	    "PETA had a problem with the whaling segment of Assassins Creed: Black Flag. Ubisoft dismissed it saying they did not condone whaling any more than they condoned a pirate lifestyle.", 
	    "sign up for coding classes in Discovery bay, Hong Kong, China <a href='codingkidshk.com/#!/home'>here</a>.",
	    "Alan Tudyk, Adam Baldwin, and Nathan Fillion all voiced marines in Halo 3. Their characters were given personalities resembling the characters they played in Firefly.",
	    "Grand Theft Auto was originally a racing game called Race'n'Chase, however, a glitch made the police cars go crazy, ramming the player. This glitch was so popular with testers that they rebuilt the game around it, creating GTA",
	    "Henry Cavill almost missed the call for the role of Superman because he was playing 'World of Warcraft'.",
	    "Playing action video games trains people to make the right decisions faster without loss of accuracy. Video game players develop a heightened sensitivity to what is going on around them, which helps with multitasking, driving, keeping track of friends in a crowd, and navigating around town."
	];
	funFactGen()
};