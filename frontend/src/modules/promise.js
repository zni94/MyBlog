export const promise = (fn) => {
    return new Promise((resolve, reject) => {
        resolve(fn)
    })
}