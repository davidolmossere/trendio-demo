(function () {

    // Const & Var

    let videoContainer = document.getElementById('video'),
        currentVideo,
        nextVideo,
        videoObjects =
        [
            document.createElement('video'),
            document.createElement('video')
        ],
        vidSources =
        [
            "../media/videos/product-video.mp4",
            "../media/videos/the-ordinary.mp4",
            "../media/videos/live-shopping.mp4",
            "../media/videos/street.mp4",
            "../media/videos/trish.mp4",
            "../media/videos/urban-decay.mp4",
            "../media/videos/user-cx.mp4",
            "../media/videos/new-cc.mp4",
            "../media/videos/john-hardy.mp4",
            "../media/videos/jessica.mp4",
            "../media/videos/indie-lee.mp4",
            "../media/videos/caudalie.mp4",
            "../media/videos/fall-fashion.mp4",
            "../media/videos/ana-luisa.mp4",
            "../media/videos/lizzy.mp4"
        ],
        firstVideo,
        nextActiveVideo;
    let curtain = document.getElementById('video-curtain');

    // Methods

    function initVideoSourceAndActions () 
    {
        // Populate the video data-source with a default value
        if ( getCookie('videoTarget') !== '') {
            videoContainer.setAttribute("data-source",getCookie('videoTarget'));
        } 
        else
        {
            videoContainer.setAttribute("data-source","product-video");
        }

        // Populate the catalog Watch Now link
        let watchNow =  document.getElementById('watch-now');
        if (typeof(watchNow) != 'undefined' && watchNow != null)
        {
          watchNow.setAttribute('data-source',getCookie('videoTarget'));
        }
        firstVideo = videoContainer.getAttribute('data-source'),
        nextActiveVideo = vidSources.indexOf("../media/videos/" + firstVideo + ".mp4");
    }

    function initVideoElement(video)
    {
        video.playsinline = true;
        video.muted = true;
        video.preload = 'auto'; //but do not set autoplay, because it deletes preload
        video.controls = true;

        //loadedmetadata is wrong because if we use it then we get endless loop
        video.onplaying = function(e)
        {
            //select next index. If is equal vidSources.length then it is 0
            nextActiveVideo = ++nextActiveVideo % vidSources.length;

            //replace the video elements against each other:
            if(this.inx == 0) {
                currentVideo = videoObjects[0];
                nextVideo = videoObjects[1];
            }
            else {
                currentVideo = videoObjects[1];
                nextVideo = videoObjects[0];
            }
            nextVideo.src = vidSources[nextActiveVideo];
            nextVideo.pause();

            //updates the action buttons
            let prodPage = document.getElementById("product-page");
            if(typeof(prodPage) != 'undefined' && prodPage != null) {
                updateButtonsBg(currentVideo);
            }

            //updates info about the last video watched
            setCookie('videoTarget',currentVideo.src.split('/').pop('').replace('.mp4',''),7);
        };

        video.onended = function(e)
        {
            this.style.display = 'none';
            nextVideo.style.display = 'block';
            nextVideo.play();
            if(document.getElementById('product-page') != null) {
                refreshSet();
            }
        };
    }

    function updateButtonsBg(runningVideo){
        
        let topLeft = parseInt(document.getElementById('product-follow').offsetLeft);
        let topTop = parseInt(document.getElementById('follow-wrapper').offsetTop);
        let skipH = parseInt(document.getElementById('skip-wrapper').offsetHeight);
        let skipTop = parseInt(document.getElementById('skip-wrapper').offsetTop);
        let printH = parseInt(skipTop + skipH - topTop);
        let printW = parseInt(document.getElementById('product-follow').offsetWidth);
        
        let screenW = window.innerWidth;
        let screenH = window.innerWidth / 1.77778;

        let myCanvas = document.getElementById('my_canvas');
                
        // Always set canvas width and height as attr
        
        myCanvas.setAttribute('width', screenW);
        myCanvas.setAttribute('height', screenH);

        let myCanvasContext = myCanvas.getContext('2d');

        // Draw the current frame of the video onto the hidden canvas
        myCanvasContext.drawImage(runningVideo, 0, 0, screenW, screenH, 0, 0, screenW, screenH);
        
        // Pull the image data from the canvas
        let frameData = myCanvasContext.getImageData(topLeft, topTop, printW, printH).data;
        
        // Get the length of the data, divide that by 4 to get the number of pixels
        // then divide that by 4 again so we check the color of every 4th pixel
        let frameDataLength = (frameData.length / 4) / 4;

        // Loop through the raw image data, adding the rgb of every 4th pixel to rgb_sums
        let pixel_count = 0;
        let rgb_sums = [0, 0, 0];
        for(var i = 0; i < frameDataLength; i += 4){
            rgb_sums[0] += frameData[i*4];
            rgb_sums[1] += frameData[i*4+1];
            rgb_sums[2] += frameData[i*4+2];
            pixel_count++;
        }

        // Average the rgb sums to get the average color of the frame in rgb
        rgb_sums[0] = Math.floor(rgb_sums[0]/pixel_count);
        rgb_sums[1] = Math.floor(rgb_sums[1]/pixel_count);
        rgb_sums[2] = Math.floor(rgb_sums[2]/pixel_count);

        let hsl = rgbToHsl(rgb_sums[0], rgb_sums[2], rgb_sums[2]);
        let boxes = document.querySelectorAll('.product-action-level-0');
        boxes.forEach(function(item){   
            if(hsl[2] > .75) {
                if (!item.parentNode.classList.contains("dark-mode")) {
                    item.parentNode.classList.toggle("dark-mode");
                }
            } else {
                if (item.parentNode.classList.contains("dark-mode")) {
                    item.parentNode.classList.toggle("dark-mode");
                }
            }
        });        
    };

    // Campanilla en el catalogo
    function checkChime() {
        var element = document.getElementById("catalog-page");
        if(typeof(element) != 'undefined' && element != null) {
            if (getCookie('loggedin') == "0") {
                var currentVideo = document.querySelectorAll('video')[0];
                currentVideo.pause();
                var coinsChime = document.getElementById('coinsChime');
                document.querySelector('.logo-transition-container').style.opacity = 1;
                setTimeout(function() {
                    coinsChime.play();
                }, 700);
                document.querySelector('.logo-box').addEventListener("animationend", function() {
                    coinsChime.pause();
                    document.querySelector('.logo-transition-container').style.display = 'none';
                    currentVideo.play();
                }, false);
            }
            setCookie('loggedin',"1");
        }
    }

    function skipReset() {
        currentVideo.style.display = 'none';
        nextVideo.style.display = 'block';
        nextVideo.play();
        let nextVideoId = nextVideo.src.split('/').pop('').replace('.mp4','');
        
        // Populate data-source in video tags
        var catalogPage = document.getElementById("catalog-page");
        if(typeof(catalogPage) != 'undefined' && catalogPage != null) {
            document.getElementById('watch-now').setAttribute('data-source',nextVideoId);
        }
        
        // Refresh sets in Product Page
        let prodPage = document.getElementById("product-page");
        if(typeof(prodPage) != 'undefined' && prodPage != null) {
            document.getElementById('video').setAttribute('data-source',nextVideoId);
            refreshSet();
        }
    }

    // Inits & Event Listeners

    initVideoSourceAndActions();
    
    videoObjects[0].inx = 0; //set index
    videoObjects[1].inx = 1;

    initVideoElement(videoObjects[0]);
    initVideoElement(videoObjects[1]);

    videoObjects[0].autoplay = true;
    videoObjects[0].src = vidSources[nextActiveVideo];
    videoContainer.insertBefore(videoObjects[0],curtain);
    videoObjects[1].style.display = 'none';
    videoContainer.insertBefore(videoObjects[1],curtain);

    document.querySelectorAll('video').forEach(item => {
        item.muted = false;
        item.volume = 1;
    })

    // Check that chime chimes once
    checkChime();
    
    // Listen to Skip action button
    let sig = document.getElementById('siguiente');
    sig.addEventListener('click', skipReset, false);

})();