/* Assignment # 41 */

/* Great Magicians */

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
}

const magicians: string[] = ["Merlin", "David Copperfield", "Houdini"];
const greatMagicians: string[] = makeGreat(magicians);
showMagicians(greatMagicians);
