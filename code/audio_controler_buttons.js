const audio_file = document.getElementById("audio-file");

const play_button = document.getElementById("audio-toggle_play_pause");
const play_button_icon = document.getElementById("audio-toggle-img");

const audio_time_display = document.getElementById("audio-time_display");

const audio_progress_slider = document.getElementById("audio-progress_slider");

const audio_volume_button = document.getElementById("audio-volume_toggle_button");
const audio_volume_slider = document.getElementById("audio-volume_slider");


// audio play/pause toggle button
play_button.onclick = () => {
    if(audio_file.paused == true){
        audio_file.play();
        play_button_icon.src = "images/pause_button.png";
    }else{
        audio_file.pause();
        play_button_icon.src = "images/play_button.png";
    }
};