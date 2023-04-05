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
    const dropdownContainer = document.getElementById('dropdown-list');
    catData?.news_category.forEach(singleCategory => {
        // categoriesContainer.innerHTML += `<a class="nav-link" href="#">${singleCategory?.category_name}</a>`;

        const linkContainer = document.createElement('p');
        linkContainer.innerHTML = `<a class="nav-link" href="#" onclick="fetchCategoryNews('${singleCategory.category_id}', '${singleCategory?.category_name}')" >${singleCategory?.category_name}</a>`;
        categoriesContainer.appendChild(linkContainer);

        // for dropDown List
        const dropDownList = document.createElement('option');
        dropDownList.innerHTML = `<a class="nav-link" href="#" onclick="CategoryNewsDropDown('${singleCategory.category_id}', '${singleCategory?.category_name}')" >${singleCategory?.category_name}</a>`;
        dropdownContainer.appendChild(dropDownList);

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

// to get all category news
const CategoryNewsDropDown = async (category_id, category_name) => {
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

    const allNewsContainer = document.getElementById('all-news');
    allNewsContainer.innerHTML = '';
    data.forEach(singleNews => {
        // console.log(singleNews);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card', 'mb-3');
        newsDiv.innerHTML = `
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${singleNews.image_url}" class="img-fluid h-100 rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${singleNews.title}</h5>
                <p class="card-text">${singleNews.details}</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>`;
        allNewsContainer.appendChild(newsDiv);
    })
}









