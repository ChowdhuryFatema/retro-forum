
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

}

const handleSearch = (catName) => {
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;

    searchField.value = '';
    loadCategory(searchFieldText);
}



loadCategory()
loadPosts()