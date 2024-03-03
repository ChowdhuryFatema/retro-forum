
// display all post 

const displayPosts = (posts) => {

    // get post container 
    const postContainer = document.getElementById('posts-container');

    posts.forEach(post => {

        // create div 
        const div = document.createElement('div');

        div.classList = `flex flex-col md:flex-row gap-5 bg-[#F3F3F5] p-8 rounded-2xl my-5 border border-[#797DFC1A]`
        div.innerHTML = `
        <div class="indicator">
        <span
            class="indicator-item badge badge-secondary p-[6px] h-[6px] border-2 border-white"></span>
        <div class="grid w-20 h-20 bg-base-300 place-items-center rounded-2xl">
            <img class="rounded-2xl" src="${post.image}">
        </div>
    </div>
    <div>
        <div class="border-b-2 border-dashed border-[#12132D40] space-y-2 pb-4">

            <ul class="*:inline-block">
                <li><a class="text-[#12132DCC] font-semibold mr-5" href="#"># ${post.category}</a></li>
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
}



const handleAddPost = () => {
     // handle add read post title and view 
     const addPosts = document.getElementsByClassName('add-post');

     for (let addPost of addPosts) {
         addPost.addEventListener('click', function (e) {
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