"use strict";
/* Assignment # 37 */
/* Cities */
function describeCity(city, country = "unknown") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi", "Pakistan");
describeCity("Paris", "France");
describeCity("New York");
