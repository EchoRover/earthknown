let lastScrollTop = 0;
// const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const chars  = [
    "Carbon emissions",
    "Renewable energy",
    "Greenhouse gases",
    "Melting ice caps",
    "Rising sea levels",
    "Climate crisis",
    "Sustainable living",
    "Clean energy",
    "Eco-friendly",
    "Climate action",
    "Carbon footprint",
    "Renewable resources",
    "Fossil fuels",
    "Conservation",
    "Global temperature rise",
    "Clean transportation",
    "Energy efficiency",
    "Solar power",
    "Wind energy",
    "Green technologies",
    "Electric vehicles",
    "Ocean acidification",
    "Climate justice",
    "Climate resilience",
    "Biodiversity loss",
    "Green economy",
    "Environmental stewardship",
    "Ecological balance",
    "Sustainable agriculture",
    "Reforestation",
    "Carbon neutrality",
    "Climate adaptation",
    "Eco-consciousness",
    "Sustainable development",
    "Sustainable fashion",
    "Circular economy",
    "Sustainable consumption",
    "Low carbon lifestyle",
    "Climate science",
    "Climate policy",
    "Paris Agreement",
    "Climate activism",
    "Climate education",
    "Climate awareness",
    "Clean oceans",
    "Carbon capture",
    "Green innovation",
    "Renewable future",
    "Climate challenges",
    "Earth's future",
    "Climate solutions",
    "Climate hope",
    "Green investments",
    "Climate leadership",
    "Climate commitment",
    "Eco warriors",
    "Climate pioneers",
    "Green initiatives",
    "Planet preservation",
    "Sustainable choices",
    "Climate champions",
    "Climate responsibility",
    "Environmental advocacy",
    "Climate advocates",
    "Sustainable goals",
    "Climate change reversal",
    "Climate consciousness",
    "Eco-conscious living",
    "Green movements",
    "Climate resilience",
    "Climate emergency",
    "Sustainable practices",
    "Climate collaboration",
    "Renewable power",
    "Climate restoration",
    "Climate awareness",
    "Climate courage",
    "Eco-conscious choices",
    "Carbon reduction",
    "Climate urgency",
    "Climate recovery",
    "Eco-friendly solutions",
    "Sustainable lifestyles",
    "Earth's protection",
    "Climate warriors",
    "Green leadership",
    "Climate commitment",
    "Environmental responsibility",
    "Climate advocacy",
    "Eco-friendly habits",
    "Carbon-free future",
    "Climate unity",
    "Green energy transition",
    "Climate dedication",
    "Climate action heroes",
    "Sustainable solutions",
    "Climate resilience",
    "Earth's preservation",
    "Climate solidarity",
    "A sustainable tomorrow"
  ];

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))] + " ",
    randomString = length => Array.from(Array(length)).map(randomChar).join("");




let mural_letter = document.getElementsByClassName("letters")[0]

const card = document.getElementsByClassName("mural_words")[0]
mural_letter.innerText = randomString(1530)


function boldletters(){
    const textArray = mural_letter.textContent.split(" ")
    const randomIndex = () => Math.floor(Math.random() * textArray.length);
    for(let i = 0;i <40;i++){
        const index = randomIndex();
        textArray[index] = `<div class="bold-letter">${textArray[index]}</div>`;




    }

    mural_letter.innerHTML = textArray.join(' ');

}

const handleOnMove = e => {
    
  
    // mural_letter.style.setProperty("--x", `${x}px`);
    // mural_letter.style.setProperty("--y", `${y}px`);
  
    mural_letter.innerText = randomString(200);   
    boldletters() 
  }
  
boldletters()
card.addEventListener("mousemove",handleOnMove)






const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting && window.scrollY > lastScrollTop) {

            entry.target.classList.add('show_up');
        }
    });


    lastScrollTop = window.scrollY;
});
const observer2 = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('loadbar');
        }
    });


    lastScrollTop = window.scrollY;
});


document.querySelectorAll('.scrollup').forEach(element => {
    observer.observe(element);
});

document.querySelectorAll('.color').forEach(element => {
    observer2.observe(element);
});

