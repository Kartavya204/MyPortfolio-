import API_URL from "./api.js";

const reviewList = document.getElementById("review-list");
const reviewForm = document.getElementById("reviewForm");

async function loadReviews() {

    try{

        const res = await fetch(API_URL);

        const reviews = await res.json();

        reviewList.innerHTML="";

        reviews.forEach(addReviewCard);

    }

    catch(err){

        console.log(err);

    }

}

function addReviewCard(review){

    const card=document.createElement("div");

    card.className="review-card";

    card.innerHTML=`

        <div class="review-top">

            <div>

                <h3>${review.name}</h3>

                <span>${new Date(review.createdAt).toLocaleDateString()}</span>

            </div>

            <div class="stars">

                ${"★".repeat(review.rating)}

            </div>

        </div>

        <p>${review.message}</p>

        <button class="like-btn">

            ❤️ ${review.likes}

        </button>

    `;

    card.querySelector(".like-btn").onclick=async()=>{

        await fetch(`${API_URL}/${review._id}/like`,{

            method:"PATCH"

        });

        loadReviews();

    }

    reviewList.appendChild(card);

}

reviewForm.addEventListener("submit",async(e)=>{

    e.preventDefault();

    const data={

        name:reviewForm.name.value,

        rating:reviewForm.rating.value,

        message:reviewForm.message.value

    };

    const res=await fetch(API_URL,{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify(data)

    });

    if(res.ok){

        reviewForm.reset();

        loadReviews();

    }

});

loadReviews();