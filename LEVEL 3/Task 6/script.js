
const API_URL = "https://dummyjson.com/recipes";

const container = document.getElementById("recipeContainer");
const message = document.getElementById("message");

async function getRecipes() {
    message.innerText = "Loading recipes...";
    container.innerHTML = "";

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch recipes");
        }

        const data = await response.json();

        displayRecipes(data.recipes);

    } catch (error) {
        message.innerText = "Error: " + error.message;
    }
}

function displayRecipes(recipes) {

    container.innerHTML = "";

    if (recipes.length === 0) {
        message.innerText = "No recipes found!";
        return;
    }

    message.innerText = "Total Recipes: " + recipes.length;

    recipes.forEach(recipe => {

        const card = document.createElement("div");
        card.className = "recipe-card";

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">

            <h2>${recipe.name}</h2>

            <p><b>Cuisine:</b> ${recipe.cuisine}</p>

            <p><b>Difficulty:</b> ${recipe.difficulty}</p>

            <p><b>Preparation:</b> ${recipe.prepTimeMinutes} minutes</p>

            <p><b>Cooking:</b> ${recipe.cookTimeMinutes} minutes</p>

            <p><b>Rating:</b> ⭐ ${recipe.rating}</p>

            <button onclick="showDetails(${recipe.id})">
                View Details
            </button>
        `;

        container.appendChild(card);
    });
}

async function searchRecipes() {

    const query = document.getElementById("searchInput").value.trim();

    if (!query) {
        getRecipes();
        return;
    }

    message.innerText = "Searching...";
    container.innerHTML = "";

    try {
        const response = await fetch(
            `${API_URL}/search?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error("Search failed");
        }

        const data = await response.json();

        displayRecipes(data.recipes);

    } catch (error) {
        message.innerText = "Error: " + error.message;
    }
}

async function showDetails(id) {

    try {
        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
            throw new Error("Unable to get recipe details");
        }

        const recipe = await response.json();

        alert(
            "Recipe: " + recipe.name +
            "\n\nIngredients:\n" + recipe.ingredients.join("\n") +
            "\n\nInstructions:\n" + recipe.instructions.join("\n")
        );

    } catch (error) {
        alert(error.message);
    }
}

getRecipes();
