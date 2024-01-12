const generator =
    <T>(documentGeneratorFunction: () => Promise<T>) =>
    (n: number) => {
        const documentPromises = new Array(n).fill(0).map(() => documentGeneratorFunction());

        return Promise.all(documentPromises);
    };

export default generator;
