import Vue from 'vue';



const skill = {

    template: '#skill'

};

const skillsRow = {

    components: { skill },

    template: '#skills-item'

};



new Vue({

    el: "#skills-component",

    components: { skillsRow },

    data() {

        return {
            skills: {}
        }

    },
    
    template: "#skills-list"

});


