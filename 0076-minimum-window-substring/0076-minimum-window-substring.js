var minWindow = function(s, t) {
    let map = new Map();
    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    let counter = map.size;
    let start = 0, end = 0, minLen = Infinity, head = 0;
    
    while (end < s.length) {
        let endChar = s[end];
        if (map.has(endChar)) {
            map.set(endChar, map.get(endChar) - 1);
            if (map.get(endChar) === 0) counter--;
        }
        end++;
        
        while (counter === 0) {
            if (end - start < minLen) {
                minLen = end - start;
                head = start;
            }
            let startChar = s[start];
            if (map.has(startChar)) {
                map.set(startChar, map.get(startChar) + 1);
                if (map.get(startChar) > 0) counter++;
            }
            start++;
        }
    }
    return minLen === Infinity ? "" : s.substring(head, head + minLen);
};