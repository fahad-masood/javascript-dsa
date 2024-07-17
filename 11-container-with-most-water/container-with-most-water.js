/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let sum = 0;
    
    while(left < right){
        let currentSum = 0;
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