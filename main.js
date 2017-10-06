"use strict";

var note = document.getElementById("note");
var note_list = document.getElementById("note-list");

(function(){
    for(var n in localStorage){
        var note_node = document.createElement("li");
        try {
            note_node.appendChild(document.createTextNode(n));
            note_list.appendChild(note_node);
        } catch (error) {
            console.log(error);
        }
    }
})();

var addNote = function(){
    event.preventDefault();
        if(note.value === "" || note.value == null){
            note.setAttribute("placeholder","must enter note");
            note.style.border = "solid thin red";
        }else if(note.value !== ""){
            note.style.border = "solid thin black";
            try {
                localStorage.setItem(note.value,"");
                location.reload(); 
            } catch (error) {
                console.log(error);
            }
        }
};

var nodes = document.getElementsByTagName('li');

(function(){
    for(var i=0;i<nodes.length;i++){
        nodes[i].addEventListener('click',function(){
            try {
                localStorage.removeItem(this.textContent);
                location.reload();            
            } catch (error) {
                console.log(error);
            }
        });
    }
})();