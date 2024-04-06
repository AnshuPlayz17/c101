var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function Start()
{
    recognition.start();
} 

recognition.onresult=function(event){
    content=event.results[0][0].transcript;
    if(content=="take my selfie"){
        speak();
    }
}




function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id="result1";
        take_snapshot();
        speak_data="Taking your next Selfie in 10 seconds";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 5000);

    setTimeout(function(){
        img_id="result2";
        take_snapshot();
        speak_data="Taking your next Selfie in 15 seconds";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 10000);

    setTimeout(function(){
        img_id="result3";
        take_snapshot();
       
    }, 15000);
}
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id=="result1"){
            document.getElementById("result1").innerHTML='<img id="result1" src="'+data_uri+'"/>'
        }
        if(img_id=="result2"){
            document.getElementById("result2").innerHTML='<img id="result2" src="'+data_uri+'"/>'
        }
        if(img_id=="result3"){
            document.getElementById("result3").innerHTML='<img id="result3" src="'+data_uri+'"/>'
        }
    });
}