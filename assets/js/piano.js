const Sound = ["assets/sounds/C4.mp3", "assets/sounds/Db4.mp3", "assets/sounds/D4.mp3", "assets/sounds/Eb4.mp3", "assets/sounds/E4.mp3", "assets/sounds/F4.mp3", "assets/sounds/Gb4.mp3", "assets/sounds/G4.mp3", "assets/sounds/Ab4.mp3", "assets/sounds/A4.mp3", "assets/sounds/Bb4.mp3", "assets/sounds/B4.mp3", "assets/sounds/C5.mp3", "assets/sounds/Db5.mp3", "assets/sounds/D5.mp3", "assets/sounds/Eb5.mp3", "assets/sounds/E5.mp3"]
const Key = ["c4", "db4", "d4", "eb4", "e4", "f4", "gb4", "g4", "ab4", "a4", "bb4", "b4", "c5", "db5", "d5", "eb5", "e5"]

function Play(x) {
    //function to loop and find index
    function search(x) {
        for (i = 0; i, Key.length; i++) {
            if (x == Key[i]) {
                return i
            }
        }
    }
    index = search(x)
    var tone = new Audio(Sound[index])
    tone.play()
    function keyboard() {
        $('#' + Key[index]).addClass("active");
        setTimeout(() => $('#' + Key[index]).removeClass("active"), 100)
    }
    keyboard()
}

// Keyboard function
window.addEventListener('keydown', ({ keyCode }) => {
    // A key   
    if (keyCode === 65) return Play('c4');
    // W key
    if (keyCode === 87) return Play('db4');
    // S key
    if (keyCode === 83) return Play('d4');
    // EkeyCodey
    if (keyCode === 69) return Play('eb4');
    // DkeyCodey
    if (keyCode === 68) return Play('e4');
    // FkeyCodey
    if (keyCode === 70) return Play('f4');
    // TkeyCodey
    if (keyCode === 84) return Play('gb4');
    // GkeyCodey
    if (keyCode === 71) return Play('g4');
    // YkeyCodey
    if (keyCode === 89) return Play('ab4');
    // HkeyCodey
    if (keyCode === 72) return Play('a4');
    // UkeyCodey
    if (keyCode === 85) return Play('bb4');
    // JkeyCodey
    if (keyCode === 74) return Play('b4');
    // KkeyCodey
    if (keyCode === 75) return Play('c5');
    // OkeyCodey
    if (keyCode === 79) return Play('db5');
    // LkeyCodey
    if (keyCode === 76) return Play('d5');
    // PkeyCodey
    if (keyCode === 80) return Play('eb5');
    // ;keyCodey
    if (keyCode === 186) return Play('e5');
});








