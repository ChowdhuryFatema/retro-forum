
// display all post 

const displayPosts = (posts) => {

    // get post container 
    const postContainer = document.getElementById('posts-container');
    postContainer.innerHTML = '';
    posts.forEach(post => {
        // create div 
        const div = document.createElement('div');

        div.classList = `flex flex-col md:flex-row gap-5 bg-[#F3F3F5] p-8 rounded-2xl my-5 border border-[#797DFC1A]`
        div.innerHTML = `
        <div class="indicator mx-auto md:mx-0">
            <span
                class="indicator-item badge-secondary badge 
                ${post.isActive ? 'green': 'red' } p-[6px] h-[6px] border-2 border-white"></span>
            <div class="grid w-20 h-20 bg-base-300 place-items-center rounded-2xl">
                <img class="rounded-2xl" src="${post.image}">
            </div>
        </div>
    <div class="w-full">
        <div class="border-b-2 border-dashed border-[#12132D40] *:text-center *:md:text-left space-y-2 pb-4">

            <ul class="*:md:inline-block ">
                <li><a class="text-[#12132DCC] font-semibold mr-6" href="#"># ${post.category}</a></li>
                <li><a class="text-[#12132DCC] font-semibold" href="#">Author : ${post.author?.name}</a>
                </li>
            </ul>
            <h3 class="text-lg md:text-xl font-bold text-title-black">${post.title}</h3>
            <p class="pt-1">${post.description}</p>
        </div>
        <div class="flex justify-between gap-5 mt-4">
            <ul class="flex gap-3 md:gap-8">
                <li class="flex gap-1 md:gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    <span>${post.comment_count}</span>
                </li>
                <li class="flex gap-1 md:gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    <span>${post.view_count}</span>
                </li>
                <li class="flex gap-1 md:gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <span>${post.posted_time} min</span>
                </li>
            </ul>
            <div class="add-post">
                <img src="images/message.png" alt="">
            </div>
        </div>
    </div>
        `
        postContainer.appendChild(div);
    })


    const notFound = document.getElementById('not-found');
    if(posts <= 0){
        notFound.classList.remove('hidden')
    }
    else {
        notFound.classList.add('hidden')
    }

}


// display Latest Posts 
const displayLatestPosts = (latestPosts) => {

    // get latest post container
    const latestPostContainer = document.getElementById('latest-post-container');

    latestPosts.forEach(latestPost =>{

        // create div 
        const div = document.createElement('div')
        div.classList = `p-5 border border-[#12132D26] rounded-2xl space-y-3`
    
        div.innerHTML = `
        <img class="rounded-2xl" src="${latestPost.cover_image}" alt="">
        <div class="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <p>${latestPost.author?.posted_date || 'No publish date'}</p>
        </div>
        <h3 class="font-extrabold md:text-lg text-title-black">
        ${latestPost.title}
        </h3>
        <p>${latestPost.description}</p>
        <div class="flex gap-4">
            <div>
                <img class="size-10 rounded-full"
                    src="${latestPost.profile_image}" />
            </div>
            <div>
                <h4 class="text-title-black font-extrabold">${latestPost.author.name}</h4>
                <p class="text-sm">${latestPost.author?.designation || 'Unknown'}</p>
            </div>
        </div>
        
        `
        // appending child 
        latestPostContainer.appendChild(div)
    })

}


let countAddPost = 0;

const handleAddPost = () => {

     // handle add read post title and view 
     const addPosts = document.getElementsByClassName('add-post');

     for (let addPost of addPosts) {
         addPost.addEventListener('click', function (e) {
            const postAddCount = document.getElementById('post-add-count');
            
            countAddPost ++
            postAddCount.innerText = countAddPost;
            
             const postTitle = e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
             
             const postView = e.target.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
 
             const addPostContainer = document.getElementById('add-post-container')
             const div = document.createElement('div');
             div.classList = `flex justify-between bg-white px-3 py-5 rounded-xl mt-3`
 
             div.innerHTML = `
             
            <div>
                <h3 class="font-bold text-title-black">${postTitle}</h3>
            </div>
            <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>${postView}</span>
            </div>
             
             `
             addPostContainer.appendChild(div)
         })
     }
}