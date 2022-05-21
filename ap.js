const clock=document.querySelector('.clock');

const tick=()=>{
    const now=new Date();
    const hrs=now.getHours();
    const min=now.getMinutes();
    const sec=now.getSeconds();
    console.log(hrs,min,sec);
    const html=`<span>${hrs}</span> :
                <span>${min}</span> :
                <span>${sec}</span>
                `;
    clock.innerHTML = html;
};
setInterval(tick,1000);
