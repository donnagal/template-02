new Vue({
    el: '#items',
    created() {
      this.paginate_total = this.items.length/this.paginate;
    },
    data: {
       current: 1,
       items: [
         { name: 'Thought Catalog', group: 'categoryOne', pic: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
         { name: 'Markus Spiske', group: 'categoryTwo', pic: 'https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
         { name: 'Barry McGee', group: 'categoryOne', pic: 'https://images.unsplash.com/photo-1528325132206-7863f64f69d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
         { name: 'Florencia Potter', group: 'categoryTwo', pic: 'https://images.unsplash.com/photo-1531700608656-7806e01d2e77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1327&q=80'},
         { name: 'Patrick Fore', group: 'categoryThree', pic: 'https://images.unsplash.com/photo-1504406438164-c0e042535100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
      ],
      paginate: 100,
      paginate_total: 0,
      search_filter: '',
      status_filter: ''
    },
    methods: {
      setPaginate: function (i) {
        if (this.current == 1) {
          return i < this.paginate;
        }
        else {
          return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
        }
      },
      setStatus: function (status) {
        this.status_filter = status;
        this.$nextTick(function () {
          this.updatePaginate();
        });
      },
      updateCurrent: function (i) {
        this.current = i;
      },
      updatePaginate: function () {
        this.current = 1;
        this.paginate_total = Math.ceil(document.querySelectorAll('tbody tr').length/this.paginate);
      }
    }
 });