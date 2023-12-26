export default function cleanDefinitions(definitionsArray) {
    return definitionsArray.map((definition) => {
        definition.definition = definition.definition.split('[').join('').split(']').join('');
        return definition;
    });
}
