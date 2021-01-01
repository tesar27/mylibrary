<template>
    <div class="box-border p-4 border-4">
        <button>Add Book</button>
        <form @submit.prevent="addBook(book)" >
            <label class="p-2 bg-black text-white" for="fname">Title</label>
            <input type="text" id="fname" name="title" v-model="book.title" placeholder="Book title..">

            <label class="p-2 bg-black text-white" for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" v-model="book.body" placeholder="Book Desc..">

            <label class="p-2 bg-black text-white" for="status">Status</label>
            <select id="status" name="status" v-model="book.taken">
                <option value="1">Taken</option>
                <option value="0">Not Taken</option>
            </select>
            <input class="p-2" type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name:"AddBook",
    data() {
        return {
            book: {
                title: '',
                body: '',
                taken: ''
            }
        }
    },
    methods: mapActions(['addBook'])
}
</script>

<style scoped>

</style>