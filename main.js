Webcam.set(
width= 360,
height=300,
img_format='png',
png_quality= 90
);
camera=document.getElementById("webcam");
Webcam.attach(camera);
function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
     document.getElementById("image").innerHTML="<img id='img' src='"+data_uri+"'>"
    })
}
console.log("ML5 Version:", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/G1j-fHxZi/model.json",modelLoaded);
function modelLoaded()
{
    console.log("Model is Loaded");
}
function check()
{
    photo=document.getElementById("img");
    classifier.classify(photo,got_result);
}
function got_result(error,result)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
    console.log(result);
    prediction_1=document.getElementById("prediction1").innerHTML=result[0].label;
    prediction_2=document.getElementById("prediction2").innerHTML=result[1].label;
    speak()
    if(prediction_1 == "Amazing")
    {
        document.getElementById("emoji1").innerHTML="👌";
    }
    if(prediction_1 == "Okay")
    {
        document.getElementById("emoji1").innerHTML="👍";
    }
    if(prediction_1 == "Victory")
    {
        document.getElementById("emoji1").innerHTML="✌";
    }
    if(prediction_1 == "Spock")
    {
        document.getElementById("emoji1").innerHTML="🖖";
    }
    if(prediction_2 == "Amazing")
    {
        document.getElementById("emoji2").innerHTML="👌";
    }
    if(prediction_2 == "Okay")
    {
        document.getElementById("emoji2").innerHTML="👍";
    }
    if(prediction_2 == "Victory")
    {
        document.getElementById("emoji2").innerHTML="✌";
    }
    if(prediction_2 == "Spock")
    {
        document.getElementById("emoji2").innerHTML="🖖";
    }

    }
}
function speak()
{
    speech=window.speechSynthesis
    data="The First Prediction is "+prediction_1+" and The Second Prediction is"+prediction_2;
    voice=new SpeechSynthesisUtterance(data);
    speech.speak(voice);
}