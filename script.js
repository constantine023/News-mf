// Developer account is only limmited to 100 requests over a 24hr time period
// So only 50 requests available per 12hr
// And make sure you run this using live server or any other server  


// Initial display
topHeadlines();

// Home 
document.getElementById('home').addEventListener('click', ()=>{
  topHeadlines();
})

// Funtion that fetches top headlines from API (Indian region)
function topHeadlines() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=a41f9037920f4603ae86dc393da457bd",
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      let newsArr = JSON.parse(this.responseText);
      let articles = newsArr.articles;
      // console.log(articles);
      let newsHtml = "";
      articles.forEach(function (element, index) {
        let news = `<div class="newsBox" style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${element["urlToImage"]});
          "> 
          <h1 class="heading"> <a href="${element["url"]}" class="links">${element["title"]}</a></h1>
          </div>`;
        newsHtml += news;
      });
      document.getElementById("newsCon").innerHTML = newsHtml;
    } else {
      console.log("Error bc");
    }
  };
  xhr.send();
}

// Categories 
document.getElementById("anime").addEventListener("click", () => {
  xhrReq("anime");
});
document.getElementById("Marvel").addEventListener("click", () => {
  xhrReq("marvel");
});
document.getElementById("DC").addEventListener("click", () => {
  xhrReq("dc");
});
document.getElementById("bollywood").addEventListener("click", () => {
  xhrReq("bollywood");
});

// search function
let search = document.getElementById("searchBtn");
search.addEventListener("click", () => {
  let searchVal = document.getElementById("search").value;
  xhrReq(searchVal);
});


// Function to fethch headlines 

function xhrReq(param) {
  // console.log("clicked");
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://newsapi.org/v2/everything?q=${param}&apiKey=a41f9037920f4603ae86dc393da457bd`,
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      let newsArr = JSON.parse(this.responseText);
      let articles = newsArr.articles;
      // console.log(articles);
      let newsHtml = "";
      articles.forEach(function (element, index) {
        let news = `<div class="newsBox" style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${element["urlToImage"]});
          ">
    <h1 class="heading"> <a href="${element["url"]}" class="links">${element["title"]}</a></h1>
    </div>`;
        newsHtml += news;
      });
      document.getElementById("newsCon").innerHTML = newsHtml;
    } else {
      console.log("Error bc");
    }
  };
  xhr.send();
}

// Dark mode
let darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", () => {
  if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
    document.getElementById("darkMode").innerText = "Dark mode";
  } else {
    document.body.style.backgroundColor = "black";
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.color = "white";
    document.getElementById("darkMode").style.color = "white";
    document.getElementById("searchBtn").style.color = "black";
    document.getElementById("darkMode").innerHTML="Light mode"
  }
});
  