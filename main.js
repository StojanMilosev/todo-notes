"use strict";

var note = document.getElementById("note");
var note_list = document.getElementById("note-list");

for(var n in localStorage){
    var note_node = document.createElement("li");
    try {
        note_node.appendChild(document.createTextNode(n));
        note_list.appendChild(note_node);
    } catch (error) {
        console.log(error);
    }
}

var addNote = function(){
    event.preventDefault();
        if(note.value === "" || note.value == null){
            note.setAttribute("placeholder","must enter note");
            note.style.border = "solid thin red";
        }else if(note.value !== ""){
            note.style.border = "solid thin black";
            localStorage.setItem(note.value,"");
            location.reload(); 
        }
};

var nodes = document.getElementsByTagName('li');

for(var i=0;i<nodes.length;i++){
    console.log(nodes[i].textContent);
    nodes[i].addEventListener('click',function(){
        localStorage.removeItem(this.textContent);
        location.reload();
    });
}