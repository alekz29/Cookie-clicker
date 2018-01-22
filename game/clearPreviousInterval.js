import count from "./count";

const clearPreviousInterval = (previous) => {
    clearInterval(count.subtract(previous, 1))
}


export default clearPreviousInterval