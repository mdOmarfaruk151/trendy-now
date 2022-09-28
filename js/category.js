const loadAllCategories = async() =>{
    const url =`https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
    const res = await fetch(url);
    const data = await res.json();
//    return data;
displayCategories(data.data);
}

const displayCategories = categories =>{
    // console.log(categories);
    const categoriesContainer = document.getElementById('all-menu');
    categories.forEach(categorie =>{
      const categoryLi =document.createElement('div');
      categoryLi.classList.add('flex');
      categoryLi.innerHTML = `

      <div>
      <figure><img src="${categorie.thumbnail_url}" alt="Album"/></figure>
    </div>
    <div class="card-body">
      <h1 class="card-title">${categorie.title}</h1>
      <p class="font-serif
      ">${categorie.details}</p>
  
      <div class="flex items-center gap-20">
        <div class="flex items-center">
          <div class="avatar">
            <div class="w-20 rounded-full justify-start">
              <img src="${categorie.author.img}" />
            </div>
          </div>
    
          <div class="ml-3 ">
            <h6>${categorie.author.name}</h6>
          <h6>${categorie.author.published_date}</h6>
          </div>
        </div>
        
        <div class="flex items-center ">
          <img src="images/eye.png" alt="">
          <h1 class="ml-1">${categorie.total_view}</h1>
        </div>
  
        <div class="rating justify-center  ">
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        </div>
  
        <div class="card-actions place-items-end ml-3 ">
          <button class="btn btn-primary">Listen</button>
        </div>
  



      `
      categoriesContainer.appendChild(categoryLi);
    })

}







// const setAllMenu = async ()=>{
//     const data = await loadAllProducts();
//     // console.log(data);
//    for(const product of data){
//     console.log(product)
//    }

// }

// setAllMenu();
loadAllCategories();