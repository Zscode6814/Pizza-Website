menu_list_array = ["Spicy BBQ Chicken Pizza", "Chicken Tikke Pizza", "Teriyaki Chicken Pizza", "Mamma Mia Pizza", "Meat Lovers Pizza", "Double Trouble Pizza", "Meatball Pizza", "Tex Mex Pizza", "Philly Chesse Steak Pizza"]

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++)
    {
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTMl = htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+ '<div class="card">' + '<img src="https://www.bakedbyanintrovert.com/wp-content/uploads/2021/01/BBQ-Chicken-Pizza-6.jpg.webp"/>' + menu_list_array[i] + '</div>';
    }
    htmldata=htmldata+"</section>";
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}