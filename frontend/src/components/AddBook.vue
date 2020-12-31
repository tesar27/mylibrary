<template>
    <div>
        <div>
            <button>Add Book</button>
            <form action="/action_page.php">
                <label for="fname">Title</label>
                <input type="text" id="fname" name="title" placeholder="Book title..">

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..">

                <label for="status">Status</label>
                <select id="status" name="status">
                    <option value="taken">Taken</option>
                    <option value="nottaken">Not Taken</option>
                </select>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:"AddBook"
}
</script>

<style scoped>

</style>