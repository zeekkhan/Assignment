"use strict";
/* Assignment # 43 */
/* Sandwiches */
function makeSandwich(...ingredients) {
    console.log(`Creating a sandwich with: ${ingredients.join(', ')}`);
}
makeSandwich("bread", "lettuce", "tomato", "cheese");
makeSandwich("bread", "turkey", "bacon", "mayo", "lettuce", "tomato");
