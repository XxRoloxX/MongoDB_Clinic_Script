export const syncMeaseureTimeDecorator = <A extends unknown[], T>(func: (args: A) => T) => {
    return (...args: A) => {
        const start = performance.now();
        const result = func(args);
        const end = performance.now();
        console.log(`Execution time: ${end - start} ms`);
        return result;
    };
};
export const asyncMeaseureTimeDecorator = <A extends unknown[], T>(func: (args: A) => Promise<T>) => {
    return async (...args: A) => {
        const start = performance.now();
        const result = await func(args);
        const end = performance.now();
        console.log(`Execution time: ${end - start} ms`);
        return result;
    };
};
