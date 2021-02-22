/**
 * User login
 */
exports.login = (user, password) => {
    return new Promise((resolve, reject) => {
        // Your async operation
        console.log('Emulating login action, 3sec.');
        setTimeout(() => {
            // if all goes okay
            resolve({
                user,
                password,
            });

            // In case of error
            //reject(new Error('User is offline'));
        }, 3000);
    });
};

/**
 * Get logged in user posts
 */
exports.getUserPosts = user => {
    return new Promise((resolve, reject) => {
        // Your async operation
        console.log('Emulating get posts action, 3sec.');
        setTimeout(() => {
            // if all goes okay
            resolve({
                user,
                totPosts: 20,
            });

            // In case of error
            //reject(new Error('User has no posts yet'));
        }, 3000);
    });
};
