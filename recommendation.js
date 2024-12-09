let searchButton = document.querySelector(".search-btn");
let searchInput = document.querySelector(".search-input");
let displayData = document.getElementById("data");
let recommendations;

searchButton.addEventListener("click", displayRecommendation);

async function displayRecommendation() {
  const response = await fetch("./recommendation.json");
  const data = await response.json();
  if (searchInput.value.toLowerCase() === "beach") {
    recommendations = data.beaches.map(
      (beach) =>
        `<div class="card">
       
            <img src="${beach.imageUrl}" alt="Destination" class="card-image">
      <div class="card-body">
        <h2 class="card-title">${beach.name}</h2>
        <p class="card-description">
            ${beach.description}
        </p>
        <button class="card-button">En savoir plus</button>
      </div>
       </div>
        
            
            `
    );

    displayData.innerHTML = recommendations.join("");
    console.log(displayData);
  }

  if (searchInput.value.toLowerCase() === "countries") {
    recommendations = data.countries.map(
      (country) =>
        `<div class="card">
        <img src="${country.cities.imageUrl}" alt="Destination" class="card-image">
        <div class="card-body">
            <h2 class="card-title">${country.name} ${country.cities[0].name}</h2>
            <p class="card-description">
                ${country.cities[0].description}
            </p>
            <button class="card-button">En savoir plus</button>
        </div>
            </div>
            
                
                    
              
              `
    );
    displayData.innerHTML = recommendations.join("");
  }

  if (searchInput.value.toLowerCase() === "temples") {
    recommendations = data.temples.map(
      (temple) =>
        `<div class="card">
          <img src="${temple.imageUrl}" alt="Destination" class="card-image">
          <div class="card-body">
              <h2 class="card-title">${temple.name}</h2>
              <p class="card-description">
                  ${temple.description}
              </p>
              <button class="card-button">En savoir plus</button>
          </div>
              </div>
              
                  
                      
                
                `
    );
    displayData.innerHTML = recommendations.join("");
  }
}
