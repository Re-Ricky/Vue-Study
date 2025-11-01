<script lang="ts" setup>
import {reactive, ref, onMounted} from 'vue'
import axios from 'axios'
const formEmp = reactive({
  id: '',
  name: '',
  image: '',
  gender: '',
  job: '',
  entrydate: '',
  updatetime: '',
})

const tableData = [
  {
    id: 1,
    name: "谢逊",
    image: "https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/4.jpg",
    gender: 1,
    job: "1",
    entrydate: "2023-06-09",
    updatetime: "2025-05-25T08:11:11"
  },
]

const empList = ref([])

const search = () => {
  console.log('搜索...')
  axios.get(`https://web-server.itheima.net/emps/list?name=${formEmp.name}&gender=${formEmp.gender}&job=${formEmp.job}`).then((result) => {
    console.log(result);
    empList.value = result.data.data;
  }).catch((err) => {
    console.log(`err = ${err}`)
  })
}

const clear = () => {
  console.log('清除...')
}

onMounted(() => {
  search();
})
</script>

<template>
  <el-form :inline="true" :model="formEmp" class="demo-form-inline">
    <el-form-item label="姓名">
      <el-input v-model="formEmp.name" placeholder="姓名" clearable />
    </el-form-item>
    <el-form-item label="性别">
      <el-select
          v-model="formEmp.gender"
          placeholder="性别"
          clearable
      >
        <el-option label="男" value="1" />
        <el-option label="女" value="2" />
      </el-select>
    </el-form-item>
    <el-form-item label="职位">
      <el-select
          v-model="formEmp.job"
          placeholder="职位"
          clearable
      >
        <el-option label="班主任" value="1" />
        <el-option label="讲师" value="2" />
        <el-option label="其他" value="3" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="primary" @click="clear">清空</el-button>
    </el-form-item>
  </el-form>

  <el-table :data="empList" stripe style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" align="center"/>
    <el-table-column prop="name" label="姓名" width="180" align="center"/>
    <el-table-column prop="image" label="头像" width="180" align="center">
      <template #default="scope">
        <img :src="scope.row.image" width="50px">
      </template>
    </el-table-column>
    <el-table-column prop="gender" label="性别" align="center">
      <template #default="scope">
        {{ scope.row.gender == 1 ? '男' : '女' }}
      </template>
    </el-table-column>
    <el-table-column prop="job" label="职位" align="center">
      <template #default="scope">
        <span v-if="scope.row.job == 1"> 班主任 </span>
        <span v-else-if="scope.row.job == 2"> 讲师 </span>
        <span v-else="scope.row.job == 1"> 其他 </span>
      </template>
    </el-table-column>
    <el-table-column prop="entrydate" label="入职日期" align="center"/>
    <el-table-column prop="updatetime" label="更新日期" align="center"/>
  </el-table>
</template>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}


</style>