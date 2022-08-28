const option = {weekday: 'long',year:'numeric', month: 'long' , day :'numeric'};
setInterval(() => {
    let a = new Date();
    let date = a.toLocaleDateString(undefined,option);
    const hour = String(a.getHours()).padStart(2, '0');
    const mint = String(a.getMinutes()).padStart(2, '0');
    const sec = String(a.getSeconds()).padStart(2, '0');
    const minec = String(a.getMilliseconds()).padStart(2, '0');
    let z = hour + ":" + mint + ":" + sec +":" +minec ;
    document.getElementById('time').innerHTML = z + " <br>on " + date;

    console.log(z);
}, 1);