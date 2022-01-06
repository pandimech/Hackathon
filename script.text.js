async function cats() {
    try {
        let cat = await fetch(`https://cataas.com/api/cats`);
        let result = await cat.json();
        console.log(result);
        for (let i in result) {
            var list = document.createElement('li')
            list.setAttribute("type", "1")
            list.innerHTML = (result[i].tags)
            box_part.append(list)

        };

    } catch (error) {
        console.log(error);
    }

};
cats()

async function cats1() {
    try {
        let data = document.getElementById("CAT").value;
        let cat1 = await fetch(`https://cataas.com/api/cats?tags=${data}`);
        let result1 = await cat1.json();
        for (let i in result1) {

            var list1 = document.createElement('li')
            list1.setAttribute("type", "1");
            var image = document.createElement("img")
            image.setAttribute("src", `https://cataas.com/api/cats?tags=${data}${result1[i].id}`)
            image.setAttribute("width", "200");
            image.setAttribute("height", "150");
            var list2 = document.createElement("li")
            list2.innerHTML = (`https://cataas.com/api/cats?tags=${data}${result1[i].id}`)
            list1.append(image, list2)
            box_part1.append(list1)
        }

    } catch (error) {
        console.log(error);
    }
}


var search = document.createElement("input");
search.setAttribute("type", "text");
search.setAttribute("id", "CAT");

var button = document.createElement("button");
button.setAttribute("type", "onClick");
button.innerHTML = "Search"
button.setAttribute("onClick", "cats1()");

var box = foo("div", "box");
var box_part = foo("div", "box-part");
var box_part1 = foo("div", "box-part1")
var container = foo("div", "container")
container.setAttribute("id", "cont")
var row = foo("div", "row");
var col = foo("div", "col-lg-6 col-md-6 col-sm-6 col-xs-6")
var col1 = foo("div", "col-lg-6 col-md-6 col-sm-6 col-xs-6")


function foo(elename, className, id, value) {
    var div = document.createElement(elename);
    div.className = className
    return div;
}
box_part1.append(search, button)
col.append(box_part);
col1.append(box_part1);

row.append(col, col1);
container.append(row);
box.append(container)
document.body.append(box);