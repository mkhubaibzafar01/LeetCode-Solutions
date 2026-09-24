/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculate the width between the two vertical lines
        const width = right - left;
        
        // The water height is restricted by the shorter line
        const currentHeight = Math.min(height[left], height[right]);
        
        // Calculate current area and update maxWater if it's larger
        const currentArea = width * currentHeight;
        maxWater = Math.max(maxWater, currentArea);

        // Move the pointer pointing to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};
