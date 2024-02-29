const x=document.getElementById('check');
const b=document.getElementById('main')
function rand()
{
    let y=Math.floor(Math.random()*100);
    let z =prompt("enter your number");
    if(y==z)
    {
        const a=document.createElement('p');
        a.innerText="Congratulations...........................you won the Game";
        b.appendChild('a')
        alert("congratulations");

    }
    else
    {
        const c=document.createElement('p');
        c.innerText="Sorry ............You lost the Game";
        b.appendChild('c');
        alert("sorry");
        
    }
}
x.addEventListener('click',rand);
console.log(y);