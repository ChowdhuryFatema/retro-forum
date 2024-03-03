
// load all post data 
const loadPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    const posts = data.posts;

    displayPosts(posts)
    handleAddPost();


}



const loadCategory = async (catName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${catName}`)
    const data = await res.json()
    const posts = data.posts;

    displayPosts(posts)
    toggleLoadingSpinner(false);
    handleAddPost();

}

const loadLatestPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    const latestPosts = data;

    displayLatestPosts(latestPosts)

}

loadLatestPosts()



// handle search 
const handleSearch = (catName) => {

    toggleLoadingSpinner(true);

    const searchField = document.getElementById('search-field');

    const searchFieldText = searchField.value;
    searchField.value = '';

    loadCategory(searchFieldText);
}

// toggle Loading Spinner 
const toggleLoadingSpinner = (isLoading) => {

    const loadingSpinner = document.getElementById('loading-spinner');
   if(isLoading){
    loadingSpinner.classList.remove('hidden');
   }
   else{
    loadingSpinner.classList.add('hidden');
   }
}



loadCategory()
loadPosts()