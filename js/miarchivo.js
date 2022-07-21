'use strict'

async function getDatos(usr,pass) {
    //let url = 'https://pokeapi.co/api/v2/pokemon';
    let url = './datos.json';
    //let body = {a: 1, b: 'Textual content'};
    try {
        let res = await fetch(url);
        return res.json();
    } catch (error) {
        console.log(error);
    }
}
var datos = getDatos();
datos.then((res) => { 
    console.log(res)
    var list = [];
    var html = '';
    if(res.results.length>0){
        for(let a=0;a<res.results.length;a++){
            list.push(res.results[a]);
        }
    }

    if(list.length>0){
        html += '<ul>';
        for(let a=0;a<list.length;a++){
            html += '<li>'+list[a].name+'</li>';
        }
        html += '</ul>';
    }else{
        html = "no existen pokemones";
    }

    document.getElementById('ul-list').innerHTML = html;
});
