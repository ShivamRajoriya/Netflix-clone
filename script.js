const cards = document.querySelector(".cards");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
    cards.scrollBy({
        left: 900,
        behavior: "smooth"
    });
});

prev.addEventListener("click", () => {
    cards.scrollBy({
        left: -900,
        behavior: "smooth"
    });
});
const faqItems = document.querySelectorAll(".faqitem");

faqItems.forEach((item) => {
    const box = item.querySelector(".faqbox");
    const answer = item.querySelector(".answer");
    const icon = box.querySelector("span:last-child");

    box.addEventListener("click", () => {

        answer.classList.toggle("open");

        if(answer.classList.contains("open")){
            icon.textContent = "×";
        }else{
            icon.textContent = "+";
        }

    });
});