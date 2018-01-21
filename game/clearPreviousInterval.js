import Count from "./count";

const clearPreviousInterval = (previous) => {
    clearInterval(Count.subtract(previous, 1))
}


export default clearPreviousInterval()