let eecs = document.getElementById("eecs")
let heap = document.getElementById("heap")
let salesman = document.getElementById("salesman")
let party = document.getElementById("party")

let click_notification = document.getElementById("click_notification")
eecs.addEventListener("mouseover", function(){
  click_notification.style.display = "block"
});
eecs.addEventListener("mouseout", function(){
  click_notification.style.display = "none"
});

heap.addEventListener("mouseover", function(){
  click_notification.style.display = "block"
});
heap.addEventListener("mouseout", function(){
  click_notification.style.display = "none"
});

salesman.addEventListener("mouseover", function(){
  click_notification.style.display = "block"
});
salesman.addEventListener("mouseout", function(){
  click_notification.style.display = "none"
});

party.addEventListener("mouseover", function(){
  click_notification.style.display = "block"
});
party.addEventListener("mouseout", function(){
  click_notification.style.display = "none"
});