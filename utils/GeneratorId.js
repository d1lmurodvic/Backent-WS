const GeneratorId = () => {
    const timestamp = new Date().getDate();
    return `${timestamp}`;
}

module.exports = GeneratorId