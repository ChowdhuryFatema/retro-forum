
// load all post data 
const loadPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()

    // loading spinner show 
    toggleLoadingSpinner(true);

    // display all post data after 2ms 
    setTimeout(() => {

        // data load 
        const posts = data.posts;

        // display all post 
        displayPosts(posts)

        // add read card 
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
    latestPostSpinner(true)
    const latestPosts = data;

    // display latest posts data

    setTimeout(() => {
        latestPostSpinner(false)
        displayLatestPosts(latestPosts)
    }, 2000);


}


loadLatestPosts()

// handle search 
const handleSearch = () => {

    // get search field
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;

    // search field validation 
    if (searchFieldText === "") {
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
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        setTimeout(() => {
            loadingSpinner.classList.add('hidden');
        }, 2000);
    }
}



const latestPostSpinner = (isLoading) => {
    const loadingSpinnerLatest = document.getElementById('loading-spinner-latest');

    // loading spinner show and hide 
    if (isLoading) {
        loadingSpinnerLatest.classList.remove('hidden');
    }
    else {
        loadingSpinnerLatest.classList.add('hidden');
    }
}



loadCategory();
loadPosts();
