noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#eecda3');

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference +"px"
    fill('#F90093')
    stroke('#F90093')
    square(noseX, noseY, difference);

}

function modelLoaded() {
    console.log('PoseNet has been initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = leftWristX - rightWristX;
        difference = floor(leftWristX - rightWristY);
        
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX);

    }
}






