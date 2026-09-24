function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = []; // stores indices of temperatures

    for (let i = 0; i < n; i++) {
        // While stack is not empty and current temp is warmer than the top stack index
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return answer;
}
