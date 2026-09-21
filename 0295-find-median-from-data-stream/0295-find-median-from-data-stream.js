var MedianFinder = function() {
    this.small = new MaxPriorityQueue();
    this.large = new MinPriorityQueue();
};

MedianFinder.prototype.addNum = function(num) {
    this.small.enqueue(num);
    this.large.enqueue(this.small.dequeue());
    if (this.small.size() < this.large.size()) {
        this.small.enqueue(this.large.dequeue());
    }
};

MedianFinder.prototype.findMedian = function() {
    if (this.small.size() > this.large.size()) {
        return this.small.front();
    }
    return (this.small.front() + this.large.front()) / 2;
};