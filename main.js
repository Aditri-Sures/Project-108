function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/XjgkPVDv9/model.json",modelReady);
}

function modelReady(){
    console.log("model Loaded");
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        r=Math.floor(Math.random()*255);
        g=Math.floor(Math.random()*255);
        b=Math.floor(Math.random()*255);
        document.getElementById("result_label").innerHTML="I can here- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";

        img1=document.getElementById("img");
        

        if(results[0].label=="Dog"){
            img1.src="Dogimage.jpg";
            
        }
        else  if(results[0].label=="Cat"){
            img1.src="Catimage.jpg";
           
        }
       
        else{
            img1.src="ear.gif";
            
        }
    }
}