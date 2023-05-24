$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'eoTpdTU8nTA',
        containment: '#main_visual',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#conVideo').YTPlayer({
        videoURL: 'eoTpdTU8nTA',
        containment: '#bgm',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#conVideo2').YTPlayer({
        videoURL: 'eoTpdTU8nTA',
        containment: '#bgm2',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });


    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });
})