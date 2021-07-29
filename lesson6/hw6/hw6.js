// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( (value)=> {return value.json()})
//     .then((posts)=> {
//         let postsBox=document.getElementsByClassName('posts-box')[0];
//         for (const post of posts) {
//             let pPost=document.createElement('p');
//             pPost.innerText = `${post.id} - ${post.title}`;
//             let detailsBtn=document.createElement('Button');
//             detailsBtn.innerText='details';
//             detailsBtn.onclick = function (){
//                 console.log('print post', post.id);
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments/`)
//                     .then(value => value.json())
//                     .then(value => {
//                         console.log(value);
//                     })
//             }
//             pPost.appendChild(detailsBtn)
//             postsBox.append(pPost);
//         }
//     });


//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments
//
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        let commentsBox=document.getElementsByClassName('comments-box')[0];
        for (const comment of comments) {
            let pComments=document.createElement('p');
            pComments.innerText= `${comment.id} - ${comment.name}`
            let detailsBtn= document.createElement('Button');
            detailsBtn.innerText='Details';
            detailsBtn.addEventListener('click',(ev => {
                console.log('print comment', comment.id);
                fetch(`https://jsonplaceholder.typicode.com/comments/${comment.id}/comments/`)
                    .then(value => value.json())
                    .then(value => {
                        console.log(value)
                    })
            }))
            pComments.appendChild(detailsBtn)
            commentsBox.append(pComments);
        }
    });