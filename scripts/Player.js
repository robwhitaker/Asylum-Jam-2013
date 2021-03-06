function Player() {
	this.x = 0;
	this.y = 0;
	this.fieldOfView = 0;
	this.inventory = []; //{item,action(function)}
}

Player.prototype.has = function(item) {
	for(var iii=0; iii<this.inventory.length; iii++)
		if(this.inventory[iii]['item'] === item)
			return true;
	return false;
}

//edit the inventory
Player.prototype.items = function(mode,item,action) {
	var arrElement = null;
	var iii = 0;
	for(iii=0; iii<this.inventory.length; iii++) {
		if(this.inventory[iii]["item"] === item) {
			arrElement = this.inventory[iii];
			break;
		}
	}

	switch(mode) {
		case "set":
			if(arrElement != null)
				this.inventory[iii] = {"item": item, "action": action};
			else
				this.inventory.push({"item": item, "action": action});
			updateInventory(this.inventory);
		break;
		case "get":
			if(arrElement != null)
				return arrElement["action"];
			break;
		case "remove":
			if(arrElement != null)
				this.inventory.splice(iii,1);
			updateInventory(this.inventory);
			break;
		default:
			return null;
	}
};