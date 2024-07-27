let users = [
    {
        username: "Aryan",
        dob:"27",
        profilePic: "https://images.unsplash.com/photo-1705933040409-92e1d193a533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", 
        displayPic:"https://images.unsplash.com/photo-1702313648551-fcadc0fca13c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D", 
        location: "Bhopal, India", 
        interests: ["Music", "Beatboxing", "Rapping"], 
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, omnis?"
    },
    {
        username: "Touheed", 
        dob:"30",
        profilePic: "https://images.unsplash.com/photo-1674458146460-6c556c700a1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",  
        displayPic:"https://images.unsplash.com/photo-1702313912747-46242cc71376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D", 
        location: "Indore, India", 
        interests: ["Music", "Travel", "Writing"], 
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, omnis?"
    },
    {
        username: "Harsh",
        dob:"15",
        profilePic: "https://images.unsplash.com/photo-1701588687432-aebb1d43e2e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", 
        displayPic:"https://images.unsplash.com/photo-1671817850682-4a906550d06f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8", 
        location: "Mumbai, India", 
        interests: ["Music", "Cricket", "Travel"], 
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, omnis?"
    },
    {
        username: "Vijay",
        dob:"18",
        profilePic: "https://images.unsplash.com/photo-1718805286894-f92dc7b92dab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8", 
        displayPic:"https://images.unsplash.com/photo-1698614848938-801bcf765590?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8", 
        location: "Delhi, India", 
        interests: ["Dancing", "Photography", "Cooking"], 
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, omnis?"
    }
];


let profilePic = document.querySelector("#profile-pic");
let userLocation = document.querySelector("#user-location");
let userName = document.querySelector("#name");
let userDob = document.querySelector("#dob");
let userBio = document.querySelector("#user-bio");
let background1 = document.querySelector(".background1 img");
let background2 = document.querySelector(".background2 img");

let currentIndex = 0;
let isAnimating = false;
(function setInitials() {
    background1.src = users[currentIndex].displayPic;
    background2.src = users[currentIndex + 1]?.displayPic;
    profilePic.src = users[currentIndex].profilePic;
    userLocation.textContent = users[currentIndex].location;
    userName.textContent = users[currentIndex].username;
    userDob.textContent = users[currentIndex].dob;
    userBio.textContent = users[currentIndex].description;
    currentIndex = 2;
})(currentIndex);


function changeImage() {
    if (!isAnimating) {
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function () {
                isAnimating = false;
                let main = document.querySelector(".background1");
                let incoming = document.querySelector(".background2");
    
                incoming.classList.remove("z-[1]");
                incoming.classList.add("z-[2]");
                incoming.classList.remove("background2");
                
                main.classList.remove("z-[2]");
                main.classList.add("z-[1]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1 
                })
                if (currentIndex === users.length) currentIndex = 0;
                document.querySelector(".background1 img").src = users[currentIndex].displayPic;
                currentIndex++;
                main.classList.remove("background1");
                incoming.classList.add("background1");
                main.classList.add("background2");
            }
        });
        tl.to(".background1", {
            scale:1.1,
            opacity: 0,
            duration: .9,
            ease:"ease-out"
        },"j")
        .from(".background2", {
            scale:.9,
            opacity: 0,
            duration:.9,
            ease:"ease-in"
        },"j")
        
    }
}
let curr = 1;
function showUser() {
    if (curr === users.length) curr = 0;
    let user = users[curr];
    profilePic.src = user.profilePic;
    userLocation.textContent = user.location;
    userName.textContent = user.username;
    userDob.textContent = user.dob;
    userBio.textContent = user.description;
    curr++;
    gsap.from(".profile, .liked", {
        y: -70,
        duration: .6,
        ease: "ease-in",
        stagger: 0.13,
        opacity: 0
    });
    gsap.from("#name, #dob, .location, .interest, .bio, .buttons", {
        y: 70,
        duration: .6,
        ease: "ease-in",
        stagger: .13,
        opacity: 0
    });
    
};

let acceptBtn = document.querySelector("#accept");
acceptBtn.addEventListener("click", () => {
    changeImage();
    showUser();
});

















// let currentIndex = 0;

// const profilePic = document.getElementById('profile-pic');
// const username = document.getElementById('username');
// const userLocation = document.getElementById('user-location');
// const interests = document.getElementById('interests');
// const description = document.getElementById('description');
// const nextButton = document.getElementById('next-button');

// function showUser(index) {
//     const user = users[index];

//     document.body.style.backgroundImage = `url(${user.displayPic})`;
//     profilePic.src = user.profilePic;
//     username.textContent = user.username;
//     userLocation.textContent = `Location: ${user.location}`;
//     interests.textContent = `Interests: ${user.interests.join(', ')}`;
//     description.textContent = user.description;

//     // GSAP animations
//     gsap.fromTo('#user-container', {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 1});
//     gsap.fromTo('#next-button', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1});
// }

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % users.length;
//     showUser(currentIndex);
// });

// // Initial user display
// showUser(currentIndex);
