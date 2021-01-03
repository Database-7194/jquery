// Selector //

$ = function (e) {
	try {
		let arr;
		if (typeof e == "string") {
			arr = document.querySelectorAll(e);
		} else if (typeof e == "object") {
			return e;
			//arr = Element.querySelectorAll([...e]);
		}

		return arr.length > 1 ? [...arr] : arr[0];

	} catch (err) {
		return undefined;
	}
}
// Selector End //

/*

Array.prototype.name = function(className){
	this.forEach(function(item, index){
		console.log(item);
	});
	return this;
}

Object.prototype.name = function(className){
	console.log(this);
	return this;
}

Template End */


// On //

Array.prototype.on = function (_event, callback) {
	this.forEach(function (item, index) {
		item.addEventListener(_event, callback);
	});
	return this;
}

Object.prototype.on = function (_event, callback) {
	this.addEventListener(_event, callback);
	return this;
}

// On End //

// AddClass //

Array.prototype.addClass = function (className) {
	this.forEach(function (item, index) {
		item.classList.add(className)
	});
	return this;
}

Object.prototype.addClass = function (className) {
	this.classList.add(className);
	return this;
}

// AddClass End //

// RemoveClass //

Array.prototype.removeClass = function (className) {
	this.forEach(function (item, index) {
		item.classList.remove(className)
	});
	return this;
}

Object.prototype.removeClass = function (className) {
	this.classList.remove(className);
	return this;
}

// RemoveClass End //


// ToggleClass //

Array.prototype.toggleClass = function (className) {
	this.forEach(function (item, index) {
		item.classList.toggle(className);
	});
	return this;
}

Object.prototype.toggleClass = function (className) {
	this.classList.toggle(className);
	return this;
}

// ToggleClass End //

// HTML //

Array.prototype.html = function (html) {

	if (html) {
		this.forEach(function (item, index) {
			item.innerHTML = html;
		});
	} else {
		let items = [];
		this.forEach(function (item, index) {
			items[index] = item.innerHTML;
		});
		return items;

	}
}

Object.prototype.html = function (html = undefined) {
	if (html) {
		return this.innerHTML = html;
	} else {
		return this.innerHTML;
	}
}

// HTML End //

// Each //
Array.prototype.each = function (callback) {
	this.forEach(callback);
	return this;
}
// Each End //


// Hide //

Array.prototype.hide = function(){
	this.forEach(function(item, index){
		item.style.display = "none";
	});
	return this;
}

Object.prototype.hide = function(){
	this.style.display  = "none";
	return this;
}

// Hide End //