let priceButton = document.querySelector(".price-button");
let priceText = document.querySelector(".price-text");

priceButton.addEventListener("click", () => {
	let result = calculateTotalPrice();
	priceText.textContent = "Your Total Price is " + result;
});

function calculateTotalPrice(quantity = 2, price = 15000000) {
	let totalPrice = quantity * price;
	return totalPrice.toLocaleString("ru-RU", {
		style: "currency",
		currency: "RUB",
	});
}
