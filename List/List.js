
function CreateList () {
	// 线性表的当前长度
	this.ListLength = 0;
	// 线性表的最大长度
	this.MaxLength = 20;
	// 当前表
	this.List = [];
}

// 建立一个空的线性表 L 
CreateList.prototype.InitList = function (ListLength, content) {
	if (ListLength < 0 || ListLength > this.MaxLength) {
		throw '超出最大长度';
	}
	if (content.length !== ListLength) {
		throw '表长度不一致'
	}
	this.ListLength = ListLength;
	this.List = content;
}

// 若线性表为空，返回 true，否则返回 false
CreateList.prototype.ListEmpty = function () {
	return this.ListLength === 0 ? true : false;
}

// 将线性表清空
CreateList.prototype.ClearList = function () {
	this.List.length = 0;
	this.ListLength = 0;
}

// 获取表中指定位置的值
CreateList.prototype.GetElem = function (key) {
	if (key < 0 || key > this.ListLength) {
		throw '传入的索引不在指定范围内';
	}
	return this.List[key];
}

// 在线性表中查找与给定值相等的元素，如果查找成功，返回该元素在表中序号表示成功。否则返回 0 表示失败。如果有相同元素，放在一个数组中全部返回
CreateList.prototype.LocateElem = function (value) {
	let _arr = [];
	this.List.forEach((item, index) => {
		if (item === value) {
			_arr.push(index);
		}
	})
	return _arr.length === 0 ? 0 : _arr;
}

// 在线性表中的第 key 个位置插入新元素 e
CreateList.prototype.ListInsert = function (key, value) {
	if (key < 0 || key > this.ListLength) {
		throw '传入的索引不在指定范围内';
	}
	this.List.splice(key, 0, value);
}

// 删除线性表中的第 key 个元素，并返沪被删除的值
CreateList.prototype.ListDelete = function (key) {
	if (key < 0 || key > this.ListLength) {
		throw '传入的索引不在指定范围内';
	}
	let _value = this.List[key]
	this.List.splice(key, 1);
	this.ListLength--;
	return _value;
}


let newList = new CreateList();

let arr1 = [0, 1, '0', 'sd', '0'];
newList.InitList(arr1.length, arr1);
console.log(newList.ListLength)
console.log(newList.ListDelete(3), newList.ListLength);

// console.log(newList.InitList());