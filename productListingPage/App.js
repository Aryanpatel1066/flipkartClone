

const storeApi = "https://fakestoreapi.com/products";
// let img = document.querySelectorAll(".image");
// let itemTitle = document.querySelector(".itemTitle");
 
let productContainer = document.querySelector(".productContainer");
// console.log(productContainer)
async function storeData() {
  try {
     let response = await fetch(storeApi);
    let data = await response.json();
     for (datas of data) {
      let itemBox = document.createElement("div");
      let itemTitle = document.createElement("h3");
      let img = document.createElement("img");
      let price = document.createElement("div");
      let ratingBox = document.createElement("div");
      let rating = document.createElement("div");
      let itemRatingCount = document.createElement("div");
      let ratingText = document.createElement("div");
      let priceSymbol = document.createElement("span");
      let priceBox = document.createElement("div");
      let starIcon = document.createElement("div");
      let revewBox = document.createElement("div");


      // console.log(datas.title)
      //  console.log(itemTitle)
      itemBox.classList.add("itemBox");
      productContainer.appendChild(itemBox);
      // console.log(price)
      img.setAttribute("src", datas.image);
      img.classList.add("image");
      itemBox.appendChild(img);
      itemTitle.innerText = datas.title;
      itemTitle.classList.add("itemTitle")
      itemBox.appendChild(itemTitle);

      priceBox.classList.add("priceBox");
      //  console.log(priceBox)
      itemBox.appendChild(priceBox)
      priceSymbol.classList.add("pricesymbol")
      priceSymbol.innerText = "₹";

      //  priceSymbol.classList.add("itemRatingStar");
      priceBox.appendChild(priceSymbol);
      price.innerText = datas.price;
      price.classList.add("itemPrice");
      priceBox.appendChild(price);


      starIcon.classList.add("itemRatingStar");
      starIcon.innerText = "⋆";
      ratingBox.classList.add("itemRatingBox");
      itemBox.appendChild(ratingBox);
      rating.innerText = datas.rating.rate;
      rating.classList.add("itemRating");
      rating.appendChild(starIcon)
      ratingBox.appendChild(rating);

      revewBox.classList.add("revewBox")
      ratingBox.appendChild(revewBox)

      itemRatingCount.innerText = datas.rating.count;
      itemRatingCount.classList.add("itemRatingCount")
      revewBox.appendChild(itemRatingCount);
      ratingText.innerText = "Ratings";
      ratingText.classList.add("rating")
      revewBox.appendChild(ratingText);
    }
  }
  catch (err) {
    console.error(err)
  }
}
let loader = document.querySelector(".loader");
  setTimeout(() => {
  storeData()
 loader.style.display="none"
},1000);
