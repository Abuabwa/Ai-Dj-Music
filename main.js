song= "";
song2= "";
song3= "";
song4= "";
leftWristx="";
leftWristy="";
rightWristx="";
rightWristy="";
function preload() {
    song=loadSound("Song.mp3");
    song2=loadSound("Song2.mp3");
    song3=loadSound("Song3.mp3");
    song4=loadSound("Song4.mp3");
}
function setup() {
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("poseNetisinitialized")
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY"+leftWristY)
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY"+rightWristY)
    }
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1)
}
function stop() {
    song.pause();
}
