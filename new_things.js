let wife = "Christine, "
let husband = "Damien, "
let daughter = "Ava, "
let son1 = "Drake, "
let son2 = "Jack"
let family = husband + wife + daughter + son1 + son2

// if/else statement, kinda works...
const parents = husband + wife
const kids = daughter + son1 + son2
var group = parents
if (group === parents) {
    console.log("Adults: ", wife, husband);
} else if (group === kids) {
        console.log("Children", daughter, son1, son2); 
} else {
    console.log(family);
}