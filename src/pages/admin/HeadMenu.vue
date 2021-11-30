<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
<template>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img src="../../assets/shu.png" style="height: 40px">
          </div>

          <MenuItem name="1" >
              <p style="color:white;margin-left: 20px;font-size: 20px;font-weight:bold;font-family: Bahnschrift">上海大学视频服务站</p>
          </MenuItem>
          <MenuItem name="6" style="float: right">
            <a @click="logout">注销</a>

          </MenuItem>
          <MenuItem name="5" style="float: right" :disabled="true" to="userCenter">
            <avatar :src="avatar"></avatar>
            <span style="color: white;margin-left: 10px">管理员</span>

          </MenuItem>


        </Menu>
      </Header>

</template>
<script>
export default {
  data(){
    return{
      back: {

        backgroundSize: "100% 100%",
        height: "100%",
        position: "fixed",
        width: "100%",

      },
    }
  }

}
</script>
