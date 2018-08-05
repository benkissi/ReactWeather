// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('city not found');
// }

// getTempCallback('london', function(err, temp) {
//     if (err) {
//         console.log('error', err);
//     }else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise (location) {
//     return new Promise (function (resolve, reject) {
//         setTimeout(function() {
//             resolve(79);
//             reject('city not found');
//         }, 2000)
//     });
// }

// getTempPromise('london').then(function(temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error', err)
// })

function addPromise (a, b) {
    return new Promise(function(resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            var c = a + b;
            resolve(c);
        }else {
            reject('one/tow of the arguments is empty or not a number');
        }
    })
}

addPromise(2,10).then(function(ans) {
    console.log('promise success', ans);
}, function(err) {
    console.log('promise error', err);
})