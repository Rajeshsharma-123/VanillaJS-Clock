console.log(`hello`)
setInterval(() => {
    d = new Date();
    htime = d.getHours();   //getHours(), getMinutes(), and getSeconds() are all built-in methods provided by the JavaScript Date object 
    mtime = d.getMinutes();   
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;
    secondHand.style.transform = `rotate(${srotation}deg)`;
}, 1000);