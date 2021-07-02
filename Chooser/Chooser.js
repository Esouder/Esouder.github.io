let form = document.forms['options']; 
let numOptions=3;
let options=[];

function chooseButtonPress(){
    let numOptions=3;
    let options=[];
    options.push(document.getElementById("option1").value);
    options.push(document.getElementById("option2").value);
    options.push(document.getElementById("option3").value);

    let answer = Math.floor(numOptions*Math.random());

    document.getElementById("response").innerHTML = "<br><br><br><h1>You have selected: "+options[answer]+"</p1>";



}

function addButtonPress(){
    numOptions++;
    document.getElementById("options").innerHTML += '<label for="option'+numOptions+'" id="option'+numOptions+'label">Option '+numOptions+': </label><input type="text" id="option'+numOptions+'" name="option1"> ';
}

function delButtonPress(){
    let form=document.getElementById("options");
    document.getElementById("option"+String(numOptions)).remove();
    document.getElementById("option"+String(numOptions)+"label").remove();

    numOptions--;
}