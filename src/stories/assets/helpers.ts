export function disableArg(argName: string) {
    return {
        [argName]: {
            table: {
                disable: true
            }
        }
    };
}