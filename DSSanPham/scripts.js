

    // Load product list
    function loadProductList() {
        const products = [
            { id: 1, name: 'Sản phẩm 1', price: '$10', img: 'https://via.placeholder.com/200x200?text=Product+1', category: 1 },
            { id: 2, name: 'Sản phẩm 2', price: '$15', img: 'https://via.placeholder.com/200x200?text=Product+2', category: 1 },
            { id: 3, name: 'Sản phẩm 3', price: '$20', img: 'https://via.placeholder.com/200x200?text=Product+3', category: 2 },
            { id: 4, name: 'Sản phẩm 4', price: '$25', img: 'https://via.placeholder.com/200x200?text=Product+4', category: 3 }
        ];

        // Function to display products
        function displayProducts(products) {
            $('.product-list').empty();
            products.forEach(product => {
                $('.product-list').append(`
                    <div class="product-item" data-name="${product.name}">
                        <a href="product-detail.html?id=${product.id}">
                            <img src="${product.img}" alt="${product.name}">
                            <h3>${product.name}</h3>
                            <p>Giá: ${product.price}</p>
                        </a>
                    </div>
                `);
            });
        }

        // Check current page
        if (window.location.pathname.endsWith('index.html')) {
            displayProducts(products);
        } else if (window.location.pathname.endsWith('category.html')) {
            const urlParams = new URLSearchParams(window.location.search);
            const categoryId = parseInt(urlParams.get('category'), 10);
            const filteredProducts = products.filter(product => product.category === categoryId);
            displayProducts(filteredProducts);
        }
    }

    // Load product details
    function loadProductDetails() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        const products = {
            1: { name: 'Sản phẩm 1', description: 'Mô tả cho sản phẩm 1', price: '$10', img: 'https://via.placeholder.com/600x400?text=Product+1' },
            2: { name: 'Sản phẩm 2', description: 'Mô tả cho sản phẩm 2', price: '$15', img: 'https://via.placeholder.com/600x400?text=Product+2' },
            3: { name: 'Sản phẩm 3', description: 'Mô tả cho sản phẩm 3', price: '$20', img: 'https://via.placeholder.com/600x400?text=Product+3' },
            4: { name: 'Sản phẩm 4', description: 'Mô tả cho sản phẩm 4', price: '$25', img: 'https://via.placeholder.com/600x400?text=Product+4' }
        };

        const product = products[productId];
        if (product) {
            $('#product-img').attr('src', product.img);
            $('#product-name').text(product.name);
            $('#product-description').text(product.description);
            $('#product-price').text(`Giá: ${product.price}`);
        } else {
            $('#product-name').text('Sản phẩm không tìm thấy');
            $('#product-description').text('');
            $('#product-price').text('');
        }
    }

    // Call the function to load the product list on index.html and category.html
    loadProductList();

    // Call the function to load the product details on product-detail.html
    if (window.location.pathname.endsWith('product-detail.html')) {
        loadProductDetails();
    }

