import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: "#app",
        data: {
            currencies: {},
            selectedCurrency: 0,
        },
        mounted() {
            this.getCurrenices()
        },
        methods: {
            getCurrenices: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(res => res.json())
                .then(data => this.currencies = data)
              },
        },

    });
});

// Link to API: https://api.exchangeratesapi.io/latest