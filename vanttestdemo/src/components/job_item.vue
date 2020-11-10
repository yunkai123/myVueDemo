<template>
<div>
    <div class="jobsWrap">
        <div class="jobItems">
            <h1>{{itemObj.title}}</h1>
            <p>{{ itemObj.h2_txt}}</p>
            <ul class="areaUl">
                <li v-for='(n, inx) in itemObj.area'> {{n}}</li>
            </ul>
            <label> {{ itemObj.hr.hr_txt }} </label>
            <span> {{ itemObj.salary }} </span>
        </div>
    </div>
</div>
</template>

<script>




export default {
     name: 'job_item',
     props: ['itemObj']
}
</script>

<style scoped>
.jobItems {
    padding: 0.3rem 0;
    border-bottom: 0.1rem solid #eaeaea;
    position: relative;
}

ul.areaUl {
    height: 0.3rem;
    margin: 0 0 0.2rem 0.2rem;
}

ul.areaUl li{
    font-size: 0.1rem;
    float: left;
    margin-right: 0.1rem;
    background: #f2f3f5;
    padding: 0.02rem 0.07rem; /* 增大padding会导致 label到本行 why?*/
    color: #666;
}

.jobItems h1 {
    font-size: 0.25rem;
    font-weight: bold;
    margin: 0 0 0.1rem 0.2rem;
}

.jobItems p {
    font-size: 0.2rem;
    color: #666;
    margin: 0 0 0.1rem 0.2rem;   
}

.jobItems label {
    font-size: 0.2rem;
    color: #666;
    margin: 0 0 0.1rem 0.2rem;
}

.jobItems span {
    font-size: 0.25rem;
    color: #14c1bb;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
}
</style>