/**
 * Create Queue class
 */

function v_Queue() {
    this.items = [];
}

v_Queue.prototype = {
    enqueue: function (element) {
        this.items.push(element);
        return this.items;
    },

    dequeue: function () {
        return this.items.shift();
    },

    front: function () {
        return this.items[0];
    },

    rear: function () {
        if (this.items.length !== 0) {
            return this.items[this.items.length - 1];
        } else {
            return void 0;
        }
    },

    size: function () {
        return this.items.length;
    },

    clear: function () {
        this.items = [];
        return this.items;
    },

    isEmpty: function () {
        return this.items.length === 0;
    }
};