
const Sidebar=document.getElementById("sidebar");
const closebtn=document.getElementById("close-btn");
const menu=document.getElementById("menu-btn");
const Hom=document.getElementById("Hom");
const Ser=document.getElementById("Ser");
const Cont=document.getElementById("Cont");
const Homey=document.getElementById("Homey");
const Servy=document.getElementById("Servy");
const Conty=document.getElementById("Conty");
const About=document.getElementById("about");
const Abouty=document.getElementById("abouty");
const Loany=document.getElementById("Loany");
const Kazy=document.getElementById("Kazy");
const Kazi=document.getElementById("Kazi");
const loan=document.getElementById("Loan");
const Lovey=document.getElementById("Lovey");
const Foota=document.getElementById("Foota");
const Financials=document.getElementById("Financials");
const Statements=document.getElementById("Statements");

window.onload=()=>{
    Homey.style.display="none";
    Servy.style.display="none";
    Conty.style.display="none";
    Abouty.style.display="none";
    loan.style.display="none"; 
    Kazy.style.display="none";
    Lovey.style.marginTop="0px";

}

menu.addEventListener("click",()=>{
    clicked=true;
    if(clicked){
    Sidebar.classList.toggle("active");
    Foota.style.display="grid";
}
});
closebtn.addEventListener("click",()=>{
    Sidebar.classList.remove("active");
    Homey.style.display="none";
    Servy.style.display="none";
    Conty.style.display="none";
    Foota.style.display="none";
});

Hom.addEventListener("mouseover",()=>{
    Homey.style.display="block";
    Servy.style.display="none";
    Conty.style.display="none";
    Abouty.style.display="none";
    loan.style.display="none"; 
    Kazi.style.display="none";
    Lovey.style.marginTop="60px";
    Loany.style.display="none";
    Kazy.style.display="none";
    Financials.style.display="none";
});
Ser.addEventListener("mouseover",()=>{
    Servy.style.display="block";
    Homey.style.display="none";
    Conty.style.display="none";
    Abouty.style.display="none";
    loan.style.display="none"; 
    Kazi.style.display="none";
    Lovey.style.marginTop="45px";
    Loany.style.display="none";
    Kazy.style.display="none";
    Financials.style.display="none";
});
Cont.addEventListener("mouseover",()=>{
    Conty.style.display="block";
    Servy.style.display="none";
    Homey.style.display="none";
    Abouty.style.display="none";
    loan.style.display="none"; 
    Kazi.style.display="none";
    Lovey.style.marginTop="55px";
    Loany.style.display="none";
    Kazy.style.display="none";
    Financials.style.display="none";
});
About.addEventListener("click",()=>{
    Abouty.style.display="block";
    Conty.style.display="none";
    Servy.style.display="none";
    Homey.style.display="none";
    loan.style.display="none"; 
    Kazi.style.display="none";
    Lovey.style.marginTop="45px";
    Loany.style.display="none";
    Kazy.style.display="none";
    Financials.style.display="none";
});
Lovey.addEventListener("click",()=>{
    Loany.style.display="block";
    Kazy.style.display="block";
    Financials.style.display="block";
    Conty.style.display="none";
    Homey.style.display="none";
    Servy.style.display="none";
    Sidebar.classList.remove("active");
    Abouty.style.display="none";
    Lovey.style.animation="Loe 3s linear 1s forwards";
});
Loany.addEventListener("click",()=>{
    loan.style.display="block"; 
    Kazi.classList.remove("Kazi-active");
    Sidebar.classList.remove("active")
    Statements.style.display="none";
});
Kazy.addEventListener("click",()=>{
   Kazi.classList.toggle("Kazi-active");
   loan.style.display="none";
   Sidebar.classList.remove("active");
   Statements.style.display="none";
});
Financials.addEventListener("click",()=>{
    Statements.style.display="grid";
    loan.style.display="none";
    Sidebar.classList.remove("active");
    Kazi.classList.remove("Kazi-active");
});

