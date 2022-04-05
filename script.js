(function() {
    let currentRating = null;
    const ratings = document.querySelector(".ratings");
    const ratingBoxSteps = document.querySelectorAll(".interactive-ratings-component .step");
    const ratingBtns = ratings.querySelectorAll(".btn");
    const submitRating = document.querySelector(".large-btn");


    ratingBtns.forEach(
        function(btn) {
            btn.addEventListener("click", function(e) {
                if(currentRating === Number(e.target.dataset.value)) return;
                currentRating = Number(e.target.dataset.value);
                const currentActive = Array.from(ratingBtns).filter( btn => btn.classList.contains("active"));
                
                if(currentActive[0]) {
                    currentActive[0].classList.remove("active")
                }
                ratingBtns[currentRating-1].classList.add("active");
            })
        }
    )

    submitRating.addEventListener("click", function(e){
        if(!currentRating){
            return;
        }
        document.querySelector("#selected-rating").innerHTML = currentRating;
        ratingBoxSteps[0].addEventListener("animationend", showStep2)
        ratingBoxSteps[0].classList.add("animate__fadeOut");
        
    })
    
    function showStep2(){
        ratingBoxSteps[0].removeEventListener("animationend", showStep2)
        ratingBoxSteps[0].classList.remove("active");
        ratingBoxSteps[1].classList.add("active");
        ratingBoxSteps[1].classList.add("animate__zoomIn");
    }
})()