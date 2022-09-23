const loadAllCategories = async() =>{
    const url =`https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
//    return data;
displayCategories(data.data);
}

const displayCategories = categories =>{
    // console.log(categories);
    const categoriesContainer = document.getElementById('all-menu');
    categories.forEach(categorie =>{
      const categoryLi =document.createElement('li');
      categoryLi.innerHTML = `
      <a>Item 1</a>
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