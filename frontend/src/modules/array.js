export const array = {
    push(arr, obj) {
        console.log('PUSH')
        console.log('arr', arr);
        console.log('obj', obj);
        arr.push(obj)
        console.log('new arr', arr);
        return arr
    },
    pop(arr, key) {
        console.log('POP')
    }
}