
function Ship() {
    this.capacity = 100;
    this.speed = 100;

    this.cargo = {
        resources: {'iron': 0, 'oil': 0, 'uranium': 0, 'iridium': 0}
    };

    this.reward = function(resource, quantity, silent) {
        if (quantity < 0) return false;
        if (Player.checkReputation('generosity', silent)) quantity *= 2;
        this.cargo.resources[resource] += quantity;
        if (!silent) message("Gained " + quantity.toFixed(2) + " of " + resource);
    };

    this.withdraw = function(resource, quantity, silent) {
        if (this.cargo.resources[resource] - quantity < 0) {
            return false;
        }
        this.cargo.resources[resource] -= quantity;
        if (!silent) message("Paid " + quantity.toFixed(2) + " of " + resource);
        return true;
    };

    this.getCargoCapacity = function () {
        return this.capacity;
    };

    this.getCargoFullness = function () {
        return sum(this.cargo.resources);
    };

    this.repair = function () {

    };

    this.getSpeed = function () {
        return this.speed;
    };

}