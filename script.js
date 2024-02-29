let value=0;
let savevar=0;
const x=document.getElementById('increment-btn');
const y=document.getElementById('save-btn');
function add()
{
    value++;
    document.getElementById('count-el').innerHTML=value;
}
function save()
{
    let temp=value;
    let savedvalue=savevar+temp;
    document.getElementById('check').innerHTML="the previous two saved values are:"+savedvalue+" "+savevar;
    savevar=savedvalue
    value=0;


}
x.addEventListener('click',add);
y.addEventListener('click',save);

