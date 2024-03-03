
// load all post data 
const loadPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    const posts = data.posts;
    displayPosts(posts)

    handleAddPost();
}



loadPosts()