// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//
//
//
//
fetch('https://jsonplaceholder.typicode.com/users')
    .then( (value)=> {return value.json()})
    .then((users)=> {
        let usersBox=document.getElementsByClassName('users-box')[0];
        for (const user of users) {
            let pUser=document.createElement('p');
            pUser.innerText = `${user.id} - ${user.name}`;
            let detailsBtn=document.createElement('Button');
            detailsBtn.innerText='details';
            detailsBtn.onclick = function (){
                console.log('print posts of user', user.id);
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts/`)
                    .then(value => value.json())
                    .then((posts)=> {
                        let postsBox=document.getElementsByClassName('posts-box')[0];
                        for (const post of posts) {
                            let pPost=document.createElement('p');
                            pPost.innerText = `${post.id} - ${post.title}`;
                            let detailsBtn=document.createElement('Button');
                            detailsBtn.innerText='details';
                            detailsBtn.onclick = function (){
                                console.log('print post', post.id);
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments/`)
                                    .then(value => value.json())
                                    .then(value => {
                                        console.log(value);
                                    })
                            }
                            pPost.appendChild(detailsBtn)
                            postsBox.append(pPost);
                        }
                    });
            }
            pUser.appendChild(detailsBtn)
            usersBox.append(pUser);
        }
    });


//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( (value)=> {return value.json()})
    // .then((posts)=> {
    //     let postsBox=document.getElementsByClassName('posts-box')[0];
    //     for (const post of posts) {
    //         let pPost=document.createElement('p');
    //         pPost.innerText = `${post.id} - ${post.title}`;
    //         let detailsBtn=document.createElement('Button');
    //         detailsBtn.innerText='details';
    //         detailsBtn.onclick = function (){
    //             console.log('print post', post.id);
    //             fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments/`)
    //                 .then(value => value.json())
    //                 .then(value => {
    //                     console.log(value);
    //                 })
    //         }
    //         pPost.appendChild(detailsBtn)
    //         postsBox.append(pPost);
    //     }
    // });



