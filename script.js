var signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Invalid date"];
var messages = ["This is your week, ", ". Don't let it get away.","You might feel like you are being pulled in two directions, ",
    ", but you know in your heart which way to go.", "If your head is above the clouds, ",
    ", don't forget to come back to Earth every once in a while.", "Pick your battles, ", ". Some things aren't worth fighting for.",
    "Grab life by the horns, ", ", but don't be afraid to let it gallop by every once in a while.", "Gemini, you're the gem in my eye. Stay cool, ",
    ".", "Don't let life's worries get in your way, ", ". Keep moving forward, especially when you don't think you can anymore.",
    ", your symbol is the lion for a reason. Don't let your mighty roar be silenced.", "You might not know what to do now, ",
    ", but your heart is always in the right place.", "Open your heart, ", ". The world deserves to know what's inside.",
    "Congrats, ", ", your sign is the best. You rock! Stop letting the world tell you otherwise.", "It's okay to let loose, ",
    ". You'll always end up right where you need to be.", "Happy birthday, ", "! Today is your day. You rock!"];
var imageSources = ["images/capricorn.png", "images/aquarius.png", "images/pisces.png", "images/aries.png",
    "images/taurus.png", "images/gemini.png", "images/cancer.png", "images/leo.png", "images/virgo.png",
    "images/libra.png", "images/scorpio.png", "images/sagittarius.png"];

function onSubmit(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    var sign = determineSign(month, day);
    document.getElementById("sign").innerHTML = sign;

    var name = document.getElementById("name").value;

    var horoscope = determineHoroscope(sign, name, month, day);
    document.getElementById("horoscope").innerHTML = horoscope;

    var source = determineImage(sign);
    document.getElementById("image").src = source;

}


function determineSign(month, day){
    var sign = "";
    if(month==0){
        if(day<=20){
            sign = signs[0];
        }else{
            sign = signs[1];
        }
    }else if(month==1){
        if(day<=18){
            sign = signs[1];
        }else if(day<=28){
            sign = signs[2];
        }else{
            sign = signs[12];
        }
    }else if(month==2){
        if(day<=20){
            sign = signs[2];
        }else{
            sign = signs[3];
        }
    }else if(month==3){
        if(day<=19){
            sign = signs[3];
        }else if(day<=30){
            sign = signs[4];
        }else{
            sign = signs[12];
        }
    }else if(month==4){
        if(day<=20){
            sign = signs[4];
        }else{
            sign = signs[5];
        }
    }else if(month==5){
        if(day<=20){
            sign = signs[5];
        }else if(day<=30){
            sign = signs[6];
        }else{
            sign = signs[12];
        }
    }else if(month==6){
        if(day<=22){
            sign = signs[6];
        }else{
            sign = signs[7];
        }
    }else if(month==7){
        if(day<=18){
            sign = signs[7];
        }else{
            sign = signs[8];
        }
    }else if(month==8){
        if(day<=23){
            sign = signs[8];
        }else if(day<=30){
            sign = signs[9];
        }else{
            sign = signs[12];
        }
    }else if(month==9){
        if(day<=23){
            sign = signs[9];
        }else{
            sign = signs[10];
        }
    }else if(month==10){
        if(day<=22){
            sign = signs[10];
        }else if(day<=30){
            sign = signs[11];
        }else{
            sign = signs[12];
        }
    }else if(month==11) {
        if (day <= 22) {
            sign = signs[11];
        } else {
            sign = signs[0];
        }
    }
    return sign;
}

function determineHoroscope(sign, name, month, day){
    var horoscope = "";

    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    if(currentMonth == month && currentDay == day){
        horoscope = messages[23] + name + messages[24];
    }else{
        if(sign == "Capricorn"){
            horoscope = messages[0] + name + messages[1];
        }
        if(sign == "Aquarius"){
            horoscope = messages[2] + name + messages[3];
        }
        if(sign == "Pisces"){
            horoscope = messages[4] + name + messages[5];
        }
        if(sign == "Aries"){
            horoscope = messages[6] + name + messages[7];
        }
        if(sign == "Taurus"){
            horoscope = messages[8] + name + messages[9];
        }
        if(sign == "Gemini"){
            horoscope = messages[10] + name + messages[11];
        }
        if(sign == "Cancer"){
            horoscope = messages[12] + name + messages[13];
        }
        if(sign == "Leo"){
            horoscope = name + messages[14];
        }
        if(sign == "Virgo"){
            horoscope = messages[15] + name + messages[16];
        }
        if(sign == "Libra"){
            horoscope = messages[17] + name + messages[18];
        }
        if(sign == "Scorpio"){
            horoscope = messages[19] + name + messages[20];
        }
        if(sign == "Sagittarius"){
            horoscope = messages[21] + name + messages[22];
        }
    }
    return horoscope;
}

function determineImage(sign){
    var source = "";
    if(sign == "Capricorn"){
        source = imageSources[0];
    }
    if(sign == "Aquarius"){
        source = imageSources[1];
    }
    if(sign == "Pisces"){
        source = imageSources[2];
    }
    if(sign == "Aries"){
        source = imageSources[3];
    }
    if(sign == "Taurus"){
        source = imageSources[4];
    }
    if(sign == "Gemini"){
        source = imageSources[5];
    }
    if(sign == "Cancer"){
        source = imageSources[6];
    }
    if(sign == "Leo"){
        source = imageSources[7];
    }
    if(sign == "Virgo"){
        source = imageSources[8];
    }
    if(sign == "Libra"){
        source = imageSources[9];
    }
    if(sign == "Scorpio"){
        source = imageSources[10];
    }
    if(sign == "Sagittarius"){
        source = imageSources[11];
    }
    return source;
}







