<template>
    <div>
        <h2>index</h2>
    </div>
</template>
<script>
import axios from "axios";
export default {
    created(){
        axios.get("/abc/banner/get?type=101")
        .then((data)=>{
            console.log(data);
        })
    }
}
</script>
<style>
    
</style>