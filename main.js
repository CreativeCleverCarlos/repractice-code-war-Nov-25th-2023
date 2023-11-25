//making a repeat loop

function letRepeat(n,m){
    let total = []
    for (let i=1; i <= n; i++){
        total.push(i * m)
    }
    return total
}

console.log(letRepeat(3,4))