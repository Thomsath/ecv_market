export default (title, color, price, size) {

	if (title) {
		console.log('title');
	}
	var items = [];
	var product = {
		title: 'mon titre',
		price: 'mon prix',
	}
    items.push(product);
    localStorage.setItem("products", JSON.stringify(items));
    console.log(JSON.parse(localStorage.getItem('item'))[0].title);
}