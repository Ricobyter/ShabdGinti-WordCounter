const countwords = ()=>{
    let countchar = document.getElementById('words').value;
    var withoutSpace = countchar.replace(/ /g,"");
var length = withoutSpace.length;
    let countword = document.getElementById('words').value;
countword = countword.trim().split(/\s+/);
countword= countword.length ;
// from w --> only take the first letter
// from + --> only take the first word 
// from g --> take a group and this will give us length
console.log(countword);

    document.getElementById('showdata').innerHTML= "Characters : " + length;

    document.getElementById('wordscount').innerHTML= "Words : " + countword;

}  