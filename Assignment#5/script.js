/*
    Assignment 05
    Sravan Reddy Soma
    W0766138
    2022-10-26
*/

$(function () {
    // your code here
    class ContentItem {
        constructor(id, title, description, categoryGenre) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.categoryGenre = categoryGenre;
        };

        updateContentItem(id, title, description, categoryGenre) {
            if(id==this.id){
            if((title || description || categoryGenre) == !null) {
                ContentItem.title = this.title;
                ContentItem.description = this.description;
                ContentItem.categoryGenre = this.categoryGenre;
            }else{
                return;
            }
        }
        }; 

        toString() {
            return `<div class='content-item-wrapper' id='content-item-0'">
            <h2>${this.title}</h2>
            <p>${this.description}</p>
            <div>${this.categoryGenre}</div>
            </div>`
        } 

    }

    let item1 = new ContentItem("1", "Ford vs Ferrari (2019)", "American automotive designer Carroll Shelby and fearless British race car driver Ken Miles battle corporate interference, the laws of physics and their own personal demons to build a revolutionary vehicle for the Ford Motor Co. Together, they plan to compete against the race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.", "Drama/Sport");
    let item2 = new ContentItem("2", "The Terminal (2004)", "When Viktor Navorski (Tom Hanks), an Eastern European tourist, arrives at JFK in New York, war breaks out in his country and he finds himself caught up in international politics. Because of the war, the Department of Homeland Security won't let him enter or exit the United States.", "Drama/Romance");
    let item3 = new ContentItem("3", "The Shawshank Redemption (1994)", "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes", "Drama/Crime");
    let item4 = new ContentItem("4", "Pulp Fiction (1994)", "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames)", "Crime/Drama");
    let item5 = new ContentItem("5", "The Prestige (2006)", "Period thriller set in Edwardian London where two rival magicians, partners until the tragic death of an assistant during a show, feud bitterly after one of them performs the ultimate magic trick - teleportation. His rival tries desperately to uncover the secret of his routine, experimenting with dangerous new science as his quest takes him to the brink of insanity and jeopardises the lives of everyone around the pair.", "Mystery/Mystery");

    $("div#content-item-list").append(item1.toString());
    $("div#content-item-list").append(item2.toString());
    $("div#content-item-list").append(item3.toString());
    $("div#content-item-list").append(item4.toString());
    $("div#content-item-list").append(item5.toString());

    $("div.content-item-wrapper").css(
                {
                    "border":"solid black 1px",
                    "width":"80%",
                    "padding":"20px",
                    "margin":"auto",
                    "margin-bottom":"10px",
                    "margin-top":"10px",  
                });
    

    console.log(item1);
    console.log(item2);
    console.log(item3);
    console.log(item4);
    console.log(item5); 

});


