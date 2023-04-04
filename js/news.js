const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        showCategories(data.data);
    } catch (error) {
        console.log(error);
    }
};

// show categories
const showCategories = catData => {

    // console.log(catData);
    const categoriesContainer = document.getElementById('categories-container');
    catData?.news_category.forEach(singleCategory => {
        // categoriesContainer.innerHTML += `<a class="nav-link" href="#">${singleCategory?.category_name}</a>`;

        const linkContainer = document.createElement('p');
        linkContainer.innerHTML = `<a class="nav-link" href="#" onclick="fetchCategoryNews('${singleCategory.category_id}', '${singleCategory?.category_name}')" >${singleCategory?.category_name}</a>`;
        categoriesContainer.appendChild(linkContainer);

        // console.log(singleCategory);
    })
};


// to get all category news
const fetchCategoryNews = async (category_id, category_name) => {
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    // console.log(url);
    try{
        const res = await fetch(url);
        const data = await res.json();
        showAllNews(data.data, category_name);
    } catch (error) {
        console.log(error);
    }
};

// show all news in alert
const showAllNews = (data, category_name) => {
    // console.log(data, category_name);
    console.log(data.length);
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category-news').innerText = category_name;
}









