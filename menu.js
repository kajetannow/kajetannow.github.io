const body = document.body;
var o = window.screen.orientation.type;
var nav = document.createElement('nav');
var ul = document.createElement('ul');
if(o == 'landscape-primary' || o== 'landscape-secondary' || o == '90' || o == '270'){
    nav.appendChild(ul);
    var sections = document.querySelectorAll('section');

    for(var i = 0; i < sections.length; i++){
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + sections[i].id;
        a.innerText = sections[i].querySelector('h1').innerText;
        if(i==0)
            a.innerText = 'Strona Główna';
        li.appendChild(a);
        ul.appendChild(li);
    }
    body.appendChild(nav)
}