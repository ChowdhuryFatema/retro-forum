
// load all post data 
const loadPosts = async () => {

    toggleLoadingSpinner(true);
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    
    // display all post data after 2ms 
    setTimeout(() => {
        toggleLoadingSpinner(false);
        const posts = data.posts;
        displayPosts(posts)
        handleAddPost();
    }, 2000)


}

// load category data
const loadCategory = async (catName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${catName}`)
    const data = await res.json()

    // loading spinner hidden 
    toggleLoadingSpinner(false);

    // display category data after 2ms 
    setTimeout(() => {
        const posts = data.posts;
        displayPosts(posts)
        handleAddPost();
    }, 2000);

}

// load latest posts data 
const loadLatestPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    const latestPosts = data;

    // display latest posts data
    displayLatestPosts(latestPosts)

}

loadLatestPosts()



// handle search 
const handleSearch = () => {

    // get search field
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;

    // search field validation 
    if(searchFieldText === ""){
        return alert('Please provide a category name!!!')
    }
    toggleLoadingSpinner(true);
    searchField.value = '';

    // load category data 
    loadCategory(searchFieldText);
    
}

// toggle Loading Spinner 
const toggleLoadingSpinner = (isLoading) => {

    // get loading spinner 
    const loadingSpinner = document.getElementById('loading-spinner');

    // loading spinner show and hide 
   if(isLoading){
    loadingSpinner.classList.remove('hidden');
   }
   else{
        setTimeout(() => {
            loadingSpinner.classList.add('hidden');
        }, 2000)
   }
}



loadCategory();
loadPosts();
