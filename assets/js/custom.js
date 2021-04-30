let elementor = new Vue({
    el: '.elementor',
    data:{
        title: 'This is our first Project',
        content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, maxime?',
        btn:{
           mclass: 'btn',
           pclass: 'btn-primary',
           sclass: 'btn-lg',
           btnname:'Read More',
           title: 'submit',
           link: 'localhost:8000',
        },
        fontfamily: 'Sigmar One',
        color:null, 
        textalign:'left',
        texttransform:'capitalize',
        fontsize: null,
    }
});