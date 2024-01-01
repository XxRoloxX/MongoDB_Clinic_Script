const generator =
    <T>(documentGeneratorFunction: () => T) =>
    (n: number) => {
        const documentPromises = new Array(n).fill(0).map(() => documentGeneratorFunction());

        return documentPromises;
    };

export default generator;
