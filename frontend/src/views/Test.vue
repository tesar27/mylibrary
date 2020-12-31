<template>
 <div class="container p-4">
    <AddBook />
	<FilterBooks />
	<Books />
    <router-view/>
 </div>
</template>
<script>
import AddBook from "../components/AddBook";
import FilterBooks from "../components/FilterBooks";
import Books from "../components/Books";
export default {
    components: {
        AddBook,
        FilterBooks,
        Books
    }
}
</script>