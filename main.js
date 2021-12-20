function begin(){
    navigator.mediaDevices.getUserMedia({audio:true});
y= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9hZYcs6R4/model.json',done);
}
function done(){
    y.classify(gotresult);
}
function gotresult(error,results){
if(error){
    console.log(error)  
}
else{
    console.log(results)
    document.getElementById("label").innerHTML="Detected Voice - "+results[0].label;
  r=  Math.floor(Math.random() * 255) + 1;
  g=  Math.floor(Math.random() * 255) + 1;
  b=  Math.floor(Math.random() * 255) + 1;
  document.getElementById("label").style.color= "rgb("+r+","+g+","+b+")";
  document.getElementById("dogcount").style.color= "rgb("+r+","+g+","+b+")";
  document.getElementById("catcount").style.color= "rgb("+r+","+g+","+b+")";
  dog = 0;
  cat = 0;
  ig=document.getElementById("imagee");
  if(results[0].label=="Barking"){
      ig.src='dogbarking.gif';
      dog=dog+1;
      document.getElementById("dogcount").innerHTML="No. of dogs - "+dog;
  }
  else if(results[0].label=="Meowing"){
      ig.src='catmeowing.gif';
      document.getElementById("catcount").innerHTML="No. of cats - "+cat;
  }
}
}
