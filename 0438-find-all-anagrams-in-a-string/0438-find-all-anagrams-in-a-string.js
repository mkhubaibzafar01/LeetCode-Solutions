var findAnagrams = function(s, p) {
    let res = [];
    if (s.length < p.length) return res;
    let pCount = new Array(26).fill(0);
    let sCount = new Array(26).fill(0);
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 97]++;
        sCount[s.charCodeAt(i) - 97]++;
    }
    if (pCount.toString() === sCount.toString()) {
        res.push(0);
    }
    for (let i = p.length; i < s.length; i++) {
        sCount[s.charCodeAt(i) - 97]++;
        sCount[s.charCodeAt(i - p.length) - 97]--;
        if (pCount.toString() === sCount.toString()) {
            res.push(i - p.length + 1);
        }
    }
    return res;
};