NoseX=0;
NoseY=0;
LeftwristX=0;
RightwristX=0;
diff=0;

function preload()
{

}

function setup() 
{
  video=createCapture(VIDEO);
  video.size(350,350);
  canvas=createCanvas(550,550);
  canvas.position(560,150);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses)    
}
function modelLoaded() 
{
 console.log("modelLoaded!");   
}

function gotPoses(results) 
{
    if(results.length>0)
    {
        console.log(results);
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;

        LeftwristX=results[0].pose.leftWrist.x;
        RightwristX=results[0].pose.rightWrist.x;


        diff=floor(LeftwristX-RightwristX);

    }
}

function draw()
{
    background('#03fcad');

    document.getElementById("square-side").innerHTML= "Width and Height of the Square will be="+diff+"px";

    fill('#adfc03');
    stroke('#03befc');
    textSize(diff);
    text('Sanju',NoseX,NoseY);
}
