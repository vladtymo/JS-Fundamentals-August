// -------------- load products from the server
const api = 'https://dummyjson.com';
const productApi = api + '/products';

function loadProducts(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
    
            renderProducts(data.products);
        });
}

function renderProducts(items) {
    
    const list = document.getElementById('producList');

    for (const i of items) {
        list.innerHTML += `<div class="col">
                                <div class="card h-100">
                                    <h3 class="card-header">${i.title}</h3>
                                    <div class="card-body">
                                        <h5 class="card-title">Price: ${i.price}$</h5>
                                        <!-- <h6 class="card-subtitle text-muted">Support card subtitle</h6> -->
                                    </div>
                                <div>
                                    <img height="200" src="${i.thumbnail}" alt="Image">
                                </div>
                                    <div class="card-body">
                                        <p class="card-text">${i.description}</p>
                                    </div>
                                
                                    <div class="card-body">
                                        <a href="#" class="card-link">Buy</a>
                                        <a href="#" class="card-link">Add to Cart</a>
                                    </div>
                                </div>
                            </div>`;
    }

}

loadProducts(productApi + '?limit=10')