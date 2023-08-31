"use strict";
/* Assignment # 41 */
/* Great Magicians */
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
}
const magicians = ["Merlin", "David Copperfield", "Houdini"];
const greatMagicians = makeGreat(magicians);
showMagicians(greatMagicians);
