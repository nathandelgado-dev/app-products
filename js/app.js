document.getElementById('productForm')
    .addEventListener('submit', (e) => {
        const nameProduct = document.getElementById('nameProduct').value;
        const priceProduct = document.getElementById('priceProduct').value;
        const dateProduct = document.getElementById('dateProduct').value;

        const product = new Product(nameProduct, priceProduct, dateProduct);
        const ui = new UI();
        ui.addProduct(product);
        ui.resetForm();
        ui.showAction('Added succesfully!', 'success');
        e.preventDefault();
    });

document.getElementById('productList')
    .addEventListener('click', (e) => {
        const ui = new UI();
        ui.deleteProduct(e.target);
    });