// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (value)=> {return value.json()})
    .then((posts)=> {
        let postsBox=document.getElementsByClassName('posts-box')[0];
        for (const post of posts) {
            let pPost=document.createElement('p');
            pPost.innerText = `${post.id} - ${post.title}`;
            let detailsBtn=document.createElement('Button');
            detailsBtn.innerText='details';
            detailsBtn.addEventListener('click',(ev => {
                console.log('print post', post.id);
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.userId}/comments/`)
                    .then(value => value.json())
                    .then(value => {
                        console.log(value);
                    })
            }));
            pPost.appendChild(detailsBtn)
            postsBox.append(pPost);
        }
    });
//