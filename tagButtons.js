
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
	selectedTags.push(tagName);
	updateView();
	listItem.innerHTML = tagName;
	listItem.id = "_" + tagName;

	//selectedList.appendChild(listItem);
}

function RemoveFromList(tagName) {
	var listItem = document.getElementById("_" + tagName);
	var index = selectedTags.indexOf(tagName);

	selectedTags.splice(index, 1);
	updateView();
	//listItem.parentNode.removeChild(listItem);
}



function ConstructButtons(tagList) {

	for (var i = 0; i < tagList.length; i++) {

		var btn = document.createElement("button");

		btn.id = "button" + i;
		btn.setAttribute("class", "up");
		btn.innerHTML = tagList[i];

		btn.onclick = function() {
			SetState(this);
		};

		tagDiv.appendChild(btn);
	}
}

function getTagArray() {
	return tagArray;
}
