/**
 * Import functions which returns promises
 */
const user = require('./utils/user');

/**
 * A. Promises use with concatenation
 *
 * Yay, no more callback hell!
 */
user.login('Paolo', '12345') // login
    .then(res => user.getUserPosts(res.user)) // get user's posts
    .then(res => console.log(res)) // show results
    .catch(error => console.log(error.message)); // in case of error

/**
 * B. Promises use with Async / Await
 *
 * Make async code look more the SYNC way
 * easier to read than dot concatenations
 */
async function displayUserPosts() {
    try {
        const loggedUser = await user.login('Beatrix', '54321');
        const posts = await user.getUserPosts(loggedUser.user);

        console.log(`${loggedUser.user} has ${posts.totPosts} posts in total`);
    } catch (error) {
        console.log(error.message);
    }
}
// Function call
displayUserPosts();
