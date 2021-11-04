AFRAME.registerComponent('animate-model', {
    init: function(){
        let el = this.el;
        this.animateModel = function(){
            el.setAttribute('animation-mixer', 'loop: once;');
        }
        this.el.addEventListener('click', this.animateModel);

    },
    remove: function(){
        this.el.removeEventListener('click', this.animateModel);

    }
})