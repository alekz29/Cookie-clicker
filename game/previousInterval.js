import count from "./count";

const PreviousInterval = (previous) => {
    clearInterval(count.subtract(previous, 1))
}


export default PreviousInterval