leftEarX=0

leftEarY=0

rightEarX=0

rightEarY=0

function preload() {
    orega1=loadImage ("https://i.postimg.cc/6p6DCLrJ/maxresdefault-removebg-preview-2-removebg-preview.png");
    orega2=loadImage ("https://i.postimg.cc/jqP0Tjx9/maxresdefault-removebg-preview.png"); 
}


function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet-esta-en-trancicion');
}

function gotPoses(results){
    if( results.length > 0)
    {
        console.log(results);
        console.log("leftEar x= " + results[0].pose.leftEar.x);
        console.log("leftEar y= " + results[0].pose.leftEar.y);
        console.log("rightEar x= " + results[0].pose.rightEar.x);
        console.log("rightEar y= " + results[0].pose.rightEar.y);


        leftEarX=results[0].pose.leftEar.x-165;
        leftEarY=results[0].pose.leftEar.y-190;
        rightEarX=results[0].pose.rightEar.x-120;
        rightEarY=results[0].pose.rightEar.y-190;
    }
}



function draw(){
    image(video, 0, 0, 300, 300);
    fill(80,123,250);
image(orega1,  leftEarX,leftEarY,300, 400);
image(orega2, rightEarX,rightEarY,300, 400);
}

function take_snapshot(){
    save('Ternura3000.png');
}
