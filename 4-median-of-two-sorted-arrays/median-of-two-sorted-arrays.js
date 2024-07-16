/**
@param {number[]} nums1
@param {number[]} nums2
@return {number}
 */
var findMedianSortedArrays = function(arr1, arr2) {
    let mergedArr = [];
    let i=0,j=0;

    while(i<arr1.length && j< arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArr.push(arr1[i++])
        }else{
            mergedArr.push(arr2[j++])
        }
    }

    while(i<arr1.length) mergedArr.push(arr1[i++])
    while(j<arr2.length) mergedArr.push(arr2[j++])

    let mid = Math.floor(mergedArr.length /2)

    if(mergedArr.length %2 ===0){
        return (mergedArr[mid-1] + mergedArr[mid])/2
    }else 
        return mergedArr[mid]

}; 