var names = ['James', 'Jen', 'Mike'];

// names.forEach(function (name) {
//     console.log('forEach:', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc:', name);
// });

var person = {
    name: 'Ben',
    greet: function() {
        names.forEach(function(name) {
            console.log(this.name+' says hi to '+ name)
        })
    }
}

person.greet();