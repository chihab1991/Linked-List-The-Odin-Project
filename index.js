class Node {
	constructor(value = null, link = null) {
		this.value = value;
		this.link = link;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.total = 0;
	}
	append(value) {
		let node = new Node(value);
		let current;
		if (this.head == null) {
			this.head = node;
		} else {
			current = this.head;
			while (current.link) {
				current = current.link;
			}
			current.link = node;
		}
		this.total++;
	}

	prepend(value) {
		this.head = new Node(value, this.head);
		this.total++;
	}
	size() {
		return this.total;
	}
	Head() {
		if (this.total == 0) return "There is no Head here!!";
		return this.head.value;
	}
	tail() {
		let current = this.head;
		if (this.total > 0) {
			while (current.link) {
				current = current.link;
			}
			return current.value;
		}
		return null;
	}
	at(index) {
		if (index > 0 && index > this.total) {
			return "There is no Node at this index.";
		}
		if (index == 0) return this.head.value;
		let current;
		current = this.head;
		let count = 0;
		while (count < index) {
			current = current.link;
			count++;
		}
		return current.value;
	}
	pop() {
		if (this.total == 0) return "can't remove anything from an empty node!!";
		if (this.total == 1) {
			this.head = null;
			this.total--;
			return;
		}
		let current = this.head;
		let previous;
		let count = 0;
		while (count < this.total - 1) {
			count++;
			previous = current;
			current = current.link;
		}
		previous.link = current.link;
		this.total--;
	}
	contains(value) {
		if (this.total == 0) return "This node is empty!!";
		let current = this.head;
		while (current) {
			if (current.value == value) return true;
			current = current.link;
		}
		return false;
	}
	find(value) {
		if (this.total == 0) return "This node is empty!!";
		let current = this.head;
		let index = 0;
		while (current) {
			if (current.value == value) return index;
			current = current.link;
			index++;
		}
		return "This Node doesn't have this value.";
	}
	toString() {
		let current = this.head;
		let str = "";
		while (current) {
			str += `( ${current.value} ) -> `;
			current = current.link;
		}
		str += `null`;
		console.log(str);
	}
}
