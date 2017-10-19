/**
 * Create stack
 */

function v_Stack() {
    this.items = [];
}

v_Stack.prototype = {
    push: function (element) {
        this.items.push(element);
        return this.items;
    },

    pop: function () {
        return this.items.pop();
    },

    peak: function () {
        if(this.items.length !== 0) {
            return this.items[this.items.length - 1];
        } else {
            return void 0;
        }
    },

    bottom: function () {
        return this.items[0];
    },

    clear: function () {
        this.items = [];
        return this.items;
    },

    size: function () {
        return this.items.length;
    },

    isEmpty: function () {
        return this.items.length === 0;
    }
};