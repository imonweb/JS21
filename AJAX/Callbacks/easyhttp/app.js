const http = new easyHTTP;

// Get Posts
// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(error, posts) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
  
// });


// console.log(posts);

// Get single post
/*
http.get('https://jsonplaceholder.typicode.com/posts/1', 
function(error, post) {
  if(err){
    console.log(err);
  } else {
    console.log(post);
  }
  
});
*/

/*  Create data */
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
   if(err){
    console.log(err);
  } else {
    console.log(post);
  }
});