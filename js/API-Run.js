// Category Function Start
const loadCategory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data.data.news_category)
}

const displayCategory = categories =>{
    const categorytContainer = document.getElementById('news-Category');
    categories.forEach(category =>{
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col');
        categoryDiv.innerHTML = `
        <p class="btn btn-primary" onclick="loadAllNews('${category.category_id}')">${category.category_name}</p>
        `
    
        categorytContainer.appendChild(categoryDiv);
    });   
}

// Category Function End

//All News Function Start

const loadAllNews = async id =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayAllNews(data.data)
}

const displayAllNews = allNews =>{
    const allNewsContainer = document.getElementById('all-news-container');
    allNewsContainer.textContent = '';
    allNews.forEach(news =>{
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div class="card">
            <img src="${news.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">${news.details.length > 500 ? news.details.slice(0,250) + '...': news.details}</p>
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <img style="width: 24px; height: 24px" src="${news.author.img}" alt="">
                        <div class="d-flex flex-column p-2">
                            <p class="mb-0">${news.author.name ? news.author.name : 'No Author'}</p>
                            <p class="mb-0">${news.author.published_date}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-regular fa-eye"></i>
                        <p class="mb-0">${news.total_view ? news.total_view : 'No views'}</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <i onclick="loadNewsDetails('${news._id}')" class="fa-sharp fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#newsDetailModal"></i>
                    </div>
                </div>
            </div>
        </div>
        `
        allNewsContainer.appendChild(newsDiv);
    });
    
}
//All News Function End

const loadNewsDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data[0]);
}

const displayNewsDetails = details =>{
    console.log(details);
    const modalTitle = document.getElementById('newsDetailModalLabel');
    modalTitle.innerText = details.title;
    const modalDetails = document.getElementById('modal-news-detail');
    modalDetails.innerHTML = `
    <p>${details.details}</p>
    <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
            <img style="width: 24px; height: 24px" src="${details.author.img}" alt="">
            <div class="d-flex flex-column p-2">
                <p class="mb-0">${details.author.name ? details.author.name : 'No Author'}</p>
                <p class="mb-0">${details.author.published_date}</p>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <i class="fa-regular fa-eye"></i>
            <p class="mb-0">${details.total_view ? details.total_view : 'No views'}</p>
        </div>
    </div>
    `
}

loadCategory();