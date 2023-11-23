const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// Gallery Modal functionality
var modal = document.getElementById("gallery-modal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("modal-caption");
const galleryImages = document.querySelectorAll(`[id^="gimg-"]`);
// console.log(galleryImages)
galleryImages.forEach((item)=>{
  item.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  })
})

var span = document.getElementsByClassName("close")[0];
if (span){
span.onclick = function() {
  modal.style.display = "none";
} 
}