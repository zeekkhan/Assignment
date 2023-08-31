/* Assignment # 43 */

/* Sandwiches */

function makeSandwich(...ingredients: string[]): void {
    console.log(`Creating a sandwich with: ${ingredients.join(', ')}`);
}

makeSandwich("bread", "lettuce", "tomato", "cheese");
makeSandwich("bread", "turkey", "bacon", "mayo", "lettuce", "tomato");

