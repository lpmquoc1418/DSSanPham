$(document).ready(function() {
    // Function to get URL parameters
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get category from URL
    const categoryId = getQueryParam('category');
    const categoryTitle = `Danh mục ${categoryId}`;

    // Set category title
    $('#category-title').text(categoryTitle);

    // Example: Load products based on category
    function loadProductsByCategory(categoryId) {
        // Simulate an API call to fetch products for the selected category
        const products = [
            { id: 1, name: 'Sản phẩm 1', price: '$10', category: '1' },
            { id: 1, name: 'Sản phẩm 2', price: '$10', category: '1' },
            { id: 2, name: 'Sản phẩm 2', price: '$15', category: '2' },
            { id: 3, name: 'Sản phẩm 3', price: '$20', category: '3' },
            { id: 4, name: 'Sản phẩm 4', price: '$25', category: '4' }
        ];

        const filteredProducts = products.filter(product => product.category === categoryId);
        
        // Append products to the category-products div
        const productList = filteredProducts.map(product => `
            <div class="product-item">
                <img src="https://via.placeholder.com/200x200?text=${product.name}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Giá: ${product.price}</p>
            </div>
        `).join('');
        
        $('#category-products').html(productList);
    }

    // Load products for the selected category
    if (categoryId) {
        loadProductsByCategory(categoryId);
    } else {
        $('#category-products').html('<p>Danh mục không hợp lệ.</p>');
    }
});
