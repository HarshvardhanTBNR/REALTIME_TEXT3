nose_x="";
nose_y="";

rightWrist_x="";
leftWrist_x="";
difference="";

function preload(){}

function setup(){
video=createCapture(VIDEO);
canvas=createCanvas(400,400);
canvas.position(500,100);
video.size(400,400);
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("Posenet Initialized");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);

nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
console.log("nose x = "+nose_x+" , nose y = "+nose_y);

rightWrist_x=results[0].pose.rightWrist.x;
leftWrist_x=results[0].pose.leftWrist.x;
difference=floor(leftWrist_x-rightWrist_x);
console.log("Text size"+difference);
}
}

function draw(){
background("#f2661f");
textSize(difference);
fill("#f2661f");
text('Harshvardhan' ,nose_x, nose_y);
document.getElementById("text_sides").innerHTML="Size = "+difference+"px";
}