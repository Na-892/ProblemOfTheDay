let numerator = [1,2,2,8];
let denominator = [2,4,6,12];
count = 0;
for (N=0 ; N<= 3; N++){
        if(( numerator[N]/denominator[N] + numerator[N]/denominator[N]) == 1){
            count++
        }
    }
console.log(count)
