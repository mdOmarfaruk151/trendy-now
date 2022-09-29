const loadCategory = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  //    return data;
  displayCategory(data.data.news_category);
}

const displayCategory = categories => {
  // console.log(newses);
  const categoryContainer = document.getElementById('news-Category');
  categories.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('col');
    categoryDiv.innerHTML = `

    <p class="btn btn-primary" onclick="loadAllNews('${category.category_id}">${category.category_name}<p>
      `;

    categoryContainer.appendChild(categoryDiv);
  })
}




loadCategory();
