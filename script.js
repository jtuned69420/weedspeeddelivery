function enterSite(){
  document.getElementById("ageGate").style.display = "none";
}

function addToCart(item){
  const li = document.createElement("li");
  li.textContent = item;
  document.getElementById("cartList").appendChild(li);
}