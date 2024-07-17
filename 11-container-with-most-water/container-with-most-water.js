/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let sum = 0;
    // for(let i = 0; i < height.length - 1; i++){
    //     for(let j = i+1; j < height.length; j++){
    //         let currentSum = 0;
    //         currentSum = Math.min(height[i], height[j]) * (j - i);
    //         if(currentSum > sum){
    //             sum = currentSum;
    //         }
    //     }
    // }
    // return sum;

    while(left < right){
        let currentSum = 0;
        currentSum = Math.min(height[left], height[right]) * (right - left);
        if(height[left] > height[right]){
            currentSum = height[right] * (right - left);
            right--;
            if(currentSum > sum){
                sum = currentSum;
            }
        }else{
            currentSum = height[left] * (right - left);
            left++;
            if(currentSum > sum){
                sum = currentSum;
            }
        }
    }
    return sum;
};