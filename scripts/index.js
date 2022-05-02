import { navbar } from "../components/navbar.js";

let n = document.getElementById("navbar")

n.innerHTML = navbar();

let search = (e) => {

    if (e.key === "Enter") {

        let value = document.getElementById("query").value
        searchNews(value, ).then((data) => {

            console.log(data)

            // let container = document.getElementById("container")
            // container.innerHTML = null



        });
    }
}

document.getElementById("query").addEventListener("keydown", search)

// let searchNews = async() => {

//     let value = document.getElementById("query").value

//     try {

//         let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country={"in"}https://masai-mock-api.herokuapp.com/news?q={"tesla"} `)

//         let data = await res.json()

//         console.log(data)

//     } catch (err) {
//         console.log(err)
//     }
// }

// let sidebar = document.getElementById("sidebar").children

// for(let el of sidebar)
// {
//     el.addEventListener("click" , csearch)
// }

// function csearch()
// {
//     console.log(this.id)
// }


// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page