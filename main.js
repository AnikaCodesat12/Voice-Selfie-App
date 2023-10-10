var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    
    if(content== "take my selfie")
    {
        console.log("take my selfie");


    }
    console.log(content);

}
 function speak()
 {
    var synthesis=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds"
    var speakThis= new SpeechSynthesisUtterance(speak_data);
    synthesis.speak(speakThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save()
    },5000)
    
 }
 Webcam.set({
    width:450,
    height:350,
    image_format:'png',
    png_quality:90
 });
 camera=document.getElementById("camera");
 
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="snapshot" src="'+data_uri+'"/>';
    })
}

function save()
{
    link=document.getElementById("link");
    final_image=document.getElementById("snapshot").src;
    link.href=final_image;
    link.click();
}