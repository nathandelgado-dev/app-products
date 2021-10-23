//The User Interface class
class UI {
    //View the created product 
    addProduct(product) {
        const productList = document.getElementById('productList');

        const element = document.createElement('div');
        const price = product.price;
        element.innerHTML = `
        <div class="card text-center mb-2">
            <div class="card-body">
                <strong>Product:</strong> ${product.name}
                <strong>Price:</strong> ${product.price}
                <strong>Date:</strong> ${product.date}
                <a href="#" class="btn btn-danger" name="deleteProduct">Delete</a>
            </div>
        </div>
       `;

        productList.appendChild(element);
    }

    //Format of money
    /* formatMoney(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
    } */

    //Cleaning the form
    resetForm() {
        document.getElementById('productForm').reset();
    }

    //Delete a product of the product list
    deleteProduct(element) {
        if (element.name === 'deleteProduct') {
            element.parentElement.parentElement.parentElement.remove();
            this.showAction('Deleted succesfully!', 'danger');
        }
    }

    //View a popup window when a product is created or deleted 
    showAction(message, look) {
        const element = document.createElement('div');
        element.className = `alert alert-${look} mt-4`;
        element.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(element, app);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 1500);
    }
}