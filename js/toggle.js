let tabButtons = document.querySelectorAll('[data-tab-target]');
let  tabContents = document.querySelectorAll("[data-tab-content]");

//on load show first
window.addEventListener("load",function () {
    tabContents[0].classList.add('active');
});

//toggle  tab content
tabButtons.forEach(node  => {
    node.addEventListener("click", function () {
        let tab = document.querySelector(node.dataset.tabTarget);
        tabContents.forEach(tab  => tab.classList.remove('active'));
        tab.classList.add('active');
    });
});
console.log(tabButtons
,tabContents);

//remove active style on tabs
function resetActiveTab(){
    tabButtons.forEach(node =>{
        node.classList.remove("active");
    })
}

tabButtons.forEach(node =>{
    node.addEventListener("click",function () {
        resetActiveTab();
        node.classList.add("active");
    })
});


