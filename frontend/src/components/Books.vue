<template>
    <div>
    <h1>Books</h1>
      <div class="legend">
          <span>Double click to mark as taken</span>
          <span>
          <span class="incomplete-box"></span> = Free
          </span>
          <span>
          <span class="complete-box"></span> = Taken
          </span>
          </div>
      <div class="books">
        <div 
        class="book" 
        v-for="book in allBooks" 
        @dblclick="onDblClick(book)"
        :key="book.key"
        v-bind:class="{'is-complete':book.completed}">
          {{book.title}}
          <i class="fas fa-trash" v-on:click="deleteBook(book.id)"></i>
          <button>Test</button>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name:"Books",
    methods:{
        ...mapActions(['fetchBooks', 'deleteBook', 'updateBook']),
        onDblClick(book) {
          const updatedBook = {
            id: book.id,
            title: book.title,
            taken: !book.taken
          }
          this.updateBook(updatedBook);
        }
    },
    computed: mapGetters(['allBooks']),
    created(){
        this.fetchBooks();
    }
}
</script>

<style scoped>
.books {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .book {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .complete-box,
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .complete-box {
    background: #35495e;
  }
  .incomplete-box {
    background: #41b883;
  }
  .is-complete {
    color: #fff;
    background: #35495e;
  }
  @media (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
</style>