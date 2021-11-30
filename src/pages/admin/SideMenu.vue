<template>

      <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
        <MenuItem name="1-1" to="/VideoManage">
          <Icon type="ios-navigate" ></Icon>
          <span>我的视频</span>
        </MenuItem>
        <MenuItem name="1-4" to = "/videoList">
          <Icon type="ios-navigate"></Icon>
          <span>视频广场</span>
        </MenuItem>
      </Menu>

</template>

<script>
export default {
  name: "SideMenu"
}
</script>

<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>
