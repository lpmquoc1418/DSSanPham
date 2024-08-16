$(document).ready(function() {
    function loadProductDetails() {
        // Example product data
        const products = [
            { id: 1, name: 'Sản phẩm 1', price: '$10', image: 'https://via.placeholder.com/200x200?text=Product+1' },
            { id: 2, name: 'Sản phẩm 2', price: '$15', image: 'https://via.placeholder.com/200x200?text=Product+2' },
            { id: 3, name: 'Sản phẩm 3', price: '$20', image: 'https://via.placeholder.com/200x200?text=Product+3' },
            { id: 4, name: 'Sản phẩm 4', price: '$25', image: 'https://via.placeholder.com/200x200?text=Product+4' }
        ];

        const $container = $('#product-list');
        $container.empty();

        products.forEach(product => {
            const productHtml = `
                <div class="product-item">
                    <a href="product-detail.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>Giá: ${product.price}</p>
                    </a>
                </div>
            `;
            $container.append(productHtml);
        });
    }

    // Load products on page load
    loadProductDetails();

    // Function to cycle carousel
    function cycleCarousel() {
        let $active = $('.carousel-item.active');
        let $next = $active.next('.carousel-item').length ? $active.next('.carousel-item') : $('.carousel-item').first();
        
        $active.removeClass('active');
        $next.addClass('active');
    }

    // Start the carousel
    setInterval(cycleCarousel, 3000); // Chuyển slide mỗi 3 giây

    // Function to filter products
    $('#search-button').click(function() {
        let query = $('#search-input').val().toLowerCase();
        $('.product-item').each(function() {
            let productName = $(this).find('h3').text().toLowerCase();
            if (productName.includes(query)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Automatically filter on input change
    $('#search-input').on('input', function() {
        $('#search-button').click();
    });

    // Carousel control buttons
    $('#next-slide').click(function() {
        cycleCarousel();
    });

    $('#prev-slide').click(function() {
        let $active = $('.carousel-item.active');
        let $prev = $active.prev('.carousel-item').length ? $active.prev('.carousel-item') : $('.carousel-item').last();
        
        $active.removeClass('active');
        $prev.addClass('active');
    });
});
