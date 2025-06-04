let total = parseInt(localStorage.getItem("cartTotal")) || 0;

function updateTotalDisplay() {
  document.getElementById("totalDisplay").textContent = total;
  localStorage.setItem("cartTotal", total);
  console.log("目前購物車總額為 $" + total);
}

function addToCart(price) {
  total += price;
  console.log("已加入商品，當前總額為 $" + total);
  updateTotalDisplay();
}

function clearCart() {
  total = 0;
  console.log("購物車已清空！");
  updateTotalDisplay();
}

document.addEventListener("DOMContentLoaded", function () {
  updateTotalDisplay();

  document.getElementById("showTotal").addEventListener("click", updateTotalDisplay);
  document.getElementById("clearCart").addEventListener("click", clearCart);

  document.querySelectorAll(".addBtn").forEach(button => {
    button.addEventListener("click", function () {
      const price = parseInt(this.getAttribute("data-price"));
      addToCart(price);
    });
  });
});
