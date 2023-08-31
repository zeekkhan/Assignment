/* Assignment # 44 */

/* Cars */

function createCar(manufacturer: string, model: string, options: { [key: string]: string }): object {
    const car: { manufacturer: string; model: string; options: { [key: string]: string } } = {
        manufacturer,
        model,
        options
    };
    return car;
}

const car1 = createCar("Toyota", "Camry", { color: "blue", features: "sunroof" });
console.log(car1);

const car2 = createCar("Tesla", "Model S", { color: "red", features: "autopilot" });
console.log(car2);
const information = "information about a car";
const result = information.replace("a", "another");
console.log(result);
