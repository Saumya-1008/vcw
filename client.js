const webrtc = new SimpleWebRTC({
    localVideoEl: 'localVideo',
    remoteVideosEl: 'remoteVideos',
    autoRequestMedia: true
});

webrtc.on('readyToCall', function () {
    webrtc.joinRoom('video-conference-room');
});
