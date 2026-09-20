var groupAnagrams = function(strs) {
    const map = new Map();
    
    for (let str of strs) {
        // ہر لفظ کے حروف کو ترتیب دے کر ایک کی (key) بنا لیں
        const sorted = str.split('').sort().join('');
        
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        
        map.get(sorted).push(str);
    }
    
    return Array.from(map.values());
};