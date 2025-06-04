// 初始讀取 localStorage 中的金額，沒有的話就設 0
let total = parseInt(localStorage.getItem("cartTotal")) || 0;

// 初始化畫面顯示
document.getElementById("totalDisplay").textContent = total;
console.log("目前購物車總額為 $" + total);

// 函式：更新金額到網頁和 localStorage
function updateDisplay() {
  document.getElementById("totalDisplay").textContent = total;
  localStorage.setItem("cartTotal", total);
  console.log("目前購物車總額為 $" + total);
}

// 函式：加入商品金額
function addToCart(price) {
  total += price;
  updateDisplay();
}

// 函式：清空購物車
function clearCart() {
  total = 0;
  updateDisplay();
  console.log("購物車已清空！");
}

// 綁定事件
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".addBtn");
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const price = parseInt(this.getAttribute("data-price"));
      addToCart(price);
    });
  });

  document.getElementById("clearCart").addEventListener("click", clearCart);
});
