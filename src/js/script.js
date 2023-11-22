console.log('running');
document.addEventListener('DOMContentLoaded',()=>{
    // var promise = navigator.mediaDevices.getDisplayMedia();
    // console.log(promise)


    let recordButton = document.getElementById('recordButton');
    recordButton.addEventListener('click',()=>{
        console.log('clicked record');
        // console.log();
        if (recordButton.textContent == 'Record'){
            recordButton.textContent = 'Recording';
            asr();
        }
        else{
            recordButton.textContent = 'Record';
        }

    });
});

function asr(){
    console.log('start');
    let mediaRecorder;
    let audioChunks = [];
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };
            mediaRecorder.start();
        });
    
}