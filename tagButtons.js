
var tagArray = [];

function SetState(b) {
	if(!selected.includes(b))  {

		selected.push(b);
		b.className = "down";
		AddToList(b.innerHTML);
	} else {

		const index = selected.indexOf(b);
		selected.splice(index, 1);
		b.className = "up";
		RemoveFromList(b.innerHTML);
	}

	var radnum = b.value.replace(/[^1-9]/gi,"");
}

function AddToList(tagName) {
	var listItem = document.createElement("li");
	tagArray.push(tagName);

	listItem.innerHTML = tagName;
	listItem.id = "_" + tagName;
	listItem.style.color = GetRandomColor();
	selectedList.appendChild(listItem);
}

function RemoveFromList(tagName) {
	var listItem = document.getElementById("_" + tagName);
	var index = tagArray.indexOf(tagName);

	tagArray.splice(index, 1);

	listItem.parentNode.removeChild(listItem);
}

function GetRandomColor() {
	var r = (Math.floor(Math.random() * 256));
	var g = (Math.floor(Math.random() * 256));
	var b = (Math.floor(Math.random() * 256));

	return 'rgb(' + r + ',' + g + ',' + b + ')';

}

function ConstructButtons(tagList) {

	for (var i = 0; i < tagList.length; i++) {

		var btn = document.createElement("button");

		btn.id = "button" + i;
		btn.setAttribute("class", "up");
		btn.innerHTML = tagList[i];

		btn.onclick = function() {
			updateView();
			SetState(this);

		};

		tagDiv.appendChild(btn);
	}
}

function ClearSelected(){
	tagArray = [];

	updateView();

}
function getTagArray() {
	return tagArray;
}
