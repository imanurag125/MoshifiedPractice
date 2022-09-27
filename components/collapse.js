const collapsible = document.querySelector(".collapsible");
const chevron = document.querySelector(".collapsible__chevron");
// chevron.forEach(ele=>{
// collapsible.classList.toggle(".collapsible__expanded");
// })

chevron.addEventListener("click", function ab() {
  collapsible.classList.toggle("collapsible__expanded");
});
