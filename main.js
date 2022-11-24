function preload(){
    beard=loadImage('https://i.postimg.cc/vmPwycNv/beard.png');
    
    }
    nosex=0;
    nosey=0;
    rightx=0;
    righty=0;
    function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
    
    }
    function modelloaded(){
        console.log(" posenet is initialized");
    
    }
    function takephoto(){
        save('filterimage.png');
    }
    
    function draw(){
    image(video,0,0,300,300);
    fill("red");
    stroke("red");
    image(beard,nosex-40,nosey+1,75,50);
    
    }
    function gotPoses(results){
        if (results.length>0){
            nosex=results[0].pose.nose.x;
            nosey=results[0].pose.nose.y;
            rightx=results[0].pose.rightEye.x;
            righty=results[0].pose.rightEye.y;
            console.log("nose x= "+nosex);
            console.log("nose y= "+nosey);
        }
    }
    