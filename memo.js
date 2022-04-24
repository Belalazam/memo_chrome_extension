store=[]
const element=document.getElementById("element");
const submit=document.getElementById("submit");
const txt=document.getElementById("txt");
const xyz=document.getElementById("xyz");

localStorage.setItem("myname")

function del(x){
    element.innerText="";
    temp=[];
    for(let i=0;i<store.length;i++)
    {
        console.log(x)
        if(i!=x)temp.push(store[i]);
    }
    store=temp;
    console.log(store)
    render();
}
submit.addEventListener("click",function(){
     store.push(txt.value);
     console.log(store);
     element.innerText="";
     render();
})
function render()
{
    for(let i=0;i<store.length;i++)
    {
        element.innerHTML+="<li>" +`<button onclick='del(${i})'><img src=del.jpg height ='12' width='12'></button>` 
        + `<a href= ${store[i]}>${store[i]}</a>` + `</li>`;
    }
}
