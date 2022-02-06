// Array-1

// let arr = []
// let n = prompt('n =')
// let first = 1
// for ( let index = 0; index < n; index++) {
//     arr.push(first)
//     first+=2
// }
// console.log(arr)

// let arr = []
// let n = prompt('n =')
// let first = 2
// for ( let index = 0; index < n; index++) {
//     arr.push(first)
//     first*=2
// }
// console.log(arr)

// let arr = []
// let n = prompt('n =')
// let a = Number(prompt('a ='))
// let d = Number(prompt('d ='))
// for ( let index = 0; index < n; index++) {
//     arr.push(a)
//     d=d*1+1
//     a=a*1+d*1 
// }
// console.log(arr)


// let arr = []
// let n = prompt('n =')
// let a = Number(prompt('a ='))
// let d = Number(prompt('d ='))
// for ( let index = 0; index < n; index++) {
//     arr.push(a)
//     a=(a*1)*(d*1) 
// }
// console.log(arr)

// 5 ????????????????????????

let arr = [a, b, f] 
n = prompt('n =')
a = Number(prompt('a ='))
b = Number(prompt('b ='))
f = 0
for ( let index = 2; index < n; index++) {
    arr.push(a, b, f)
    f = arr[2] + arr[1]
}
console.log(arr)