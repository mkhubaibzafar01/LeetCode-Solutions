class TrieNode {
    constructor() {
        this.children = {}; // Maps characters to child TrieNodes
        this.isWordEnd = false; // True if a word ends at this node
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /** 
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isWordEnd = true;
    }

    /** 
     * Returns true if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isWordEnd;
    }

    /** 
     * Returns true if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}
