let count = 0;
document.getElementById("deceraseBtn").onclick = function(){
    count-=1;
    document.getElementById("countlabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("countlabel").innerHTML = count;
}