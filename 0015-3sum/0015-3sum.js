/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = [];
    
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements for the first position
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        // If the current number is positive, no three numbers can sum to 0
        if (nums[i] > 0) {
            break;
        }
        
        let j = i + 1;
        let k = nums.length - 1;
        
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            
            if (sum === 0) {
                results.push([nums[i], nums[j], nums[k]]);
                
                // Skip duplicate elements for the second and third positions
                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;
                
                j++;
                k--;
            } else if (sum < 0) {
                j++; // Sum is too small, move the left pointer right
            } else {
                k--; // Sum is too large, move the right pointer left
            }
        }
    }
    
    return results;
};
