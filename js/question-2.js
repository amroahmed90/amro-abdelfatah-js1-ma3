const API_KEY = "edc2efbb7cc2451e9d10315a9884f018a";

const url =
   "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE";

const urlWithKey = url.replace("INSERTAPIKEYHERE", API_KEY);

// console.log(urlWithKey)

fetch(urlWithKey)
   .then((respose) => respose.json())
   .then((data) => {
      const results = data.results;
      document.querySelector(".results").innerHTML = ""
      document.querySelector(".loading").innerHTML = ""
      for (let i = 0; i < 8; i++) {
        let name = results[i].name ? results[i].name : "Name Unavailable"
        let rating = results[i].rating ? results[i].rating : "Rating Unavailable"
        let number_of_tags = results[i].tags.length ? results[i].tags.length : "No Tags"
        let backgroundImage = results[i].background_image ? results[i].background_image : ""
        // console.log(name, rating, number_of_tags, backgroundImage);
        document.querySelector(".results").innerHTML += `
        <div class="item" style="background-image: url('${backgroundImage}')">
            <div class="info">
                <span style="text-align:center">${name}</span>
                <span>Rating: ${rating}</span>
                <span>Tags: ${number_of_tags}</span>
            </div>
        </div>`
      }
   })
   .catch((error) => document.querySelector(".loading").innerHTML = `<div class="error"> ${error} </div>`);
