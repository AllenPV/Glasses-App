 rightEyeX = 0;
 rightEyeY = 0;

 function preload() {
glasses = loadImage("https://image.flaticon.com/icons/png/512/64/64945.png");
 }

 function setup() {
     Canvas = createCanvas(300,300);
     Canvas.center();
     Video = createCapture(VIDEO);
     Video.size(300,300);
     Video.hide();
     poseNet = ml5.poseNet(Video, modelLoaded);
     poseNet.on('pose', gotPoses);
 }

 function modelLoaded() {
     console.log("poseNet loaded");
 }

 function gotPoses(results) {
     if (results.length > 0) {
         console.log(results);
         righEyeX = results[0].pose.rightEye.x - 100;
         rightEyeY = results[0].pose.leftEye.y;
     }
 }

 function draw() {
     image(Video,0,0,300,300);
     image(glasses,rightEyeX,rightEyeY,30,30);
 }

 function Take_Snapshot() {
     save("Result.png");
 }