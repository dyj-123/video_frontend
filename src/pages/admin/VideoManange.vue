<template>
  <div class="layout">
    <Layout :style="back">
      <HeadMenu :message="username" v-if="username.length>0"></HeadMenu>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff',margin:'64px 0 0'}">
          <SideMenu/>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px',margin: '88px 0 0', minHeight: '280px', background: '#fff'}">
            <Row>
              <Col span="24">
                <Button type="primary"  icon="md-add" style="float: left"
                        @click.native.prevent="uploadShow()"
                >上传视频</Button>
                <Input
                  v-model="searchTitle"
                  :search="true"
                  suffix="ios-search"
                  placeholder="请输入视频标题"
                  style="width: auto;float: right"
                  @on-search="searchTree" />
              </Col>
            </Row>

            <el-table
              :data="tableData"
              style="width: 100%;margin-top: 10px"
            >
              <el-table-column
                fixed
                prop="fileName"
                label="文件名"
                width="150"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="title"
                label="标题"
                width="200"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="picture"
                label="封面"
                width="100">
                <template slot-scope="scope">
                  <img :src="scope.row.picture" style="height:40px" @click="getRow(scope.$index,scope.row,4)">
                </template>
              </el-table-column>
              <el-table-column
                prop="uploadTime"
                label="上传时间"
                :formatter="dateFormat"
                width="150">
              </el-table-column>
              <el-table-column
                prop="description"
                label="简介"
                width="300"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                label="分类"
                width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.type }}</el-tag>
                    </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="author"
                label="上传者"
                width="100">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="140">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index,scope.row)"
                    type="text"
                    size="small">
                    删除
                  </el-button>
                  <el-button
                    @click.native.prevent="getRow(scope.$index,scope.row,1)"
                    type="text"
                    size="small">
                    编辑
                  </el-button>
                  <el-button
                    @click.native.prevent="getRow(scope.$index,scope.row,2)"
                    type="text"
                    size="small">
                    预览
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="block">
              <!--                <span class="demonstration">页数较少时的效果</span>-->
              <el-pagination
                :current-page="curPage"
                :page-size ="pageSize"
                :total ="total"
                style="padding:30px 0; text-align:center;"
                layout="total,prev,pager,next,jumper"
                @current-change="searchTree">
              </el-pagination>
            </div>

            <Modal
              v-model="modal1"
              title="编辑视频信息"
              @on-ok="ok"
              @on-cancel="cancel">
              <el-form label-position="left" label-width="80px" :model="videoInfo">
                <el-form-item label="视频标题">
                  <el-input v-model="videoInfo.title"></el-input>
                </el-form-item>
                <el-form-item label="视频简介">
                  <el-input  type="textarea" :autosize="{ minRows: 3, maxRows: 10}" v-model="videoInfo.description"></el-input>
                </el-form-item>
                <el-form-item label="视频分类">
                  <el-select v-model="videoInfo.type" placeholder="请选择">
                    <el-option
                      v-for="item in typeList"
                      :key="item.id"
                      :label="item.type"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </Modal>
            <Modal
              v-model="modal2"
              title="视频预览"
              @on-cancel="cancel">
              <video style="width: 475px" :src="videoInfo.url" controls='controls' autoplay>
              </video>
            </Modal>
            <Modal
              v-model="modal3"
              title="视频上传"
              @on-ok="ok3"
              @on-cancel="cancel">
              <el-form label-position="left" label-width="80px" :model="videoUpload">
                <el-form-item label="视频标题">
                  <el-input v-model="videoUpload.title"></el-input>
                </el-form-item>
                <el-form-item label="视频简介">
                  <el-input  type="textarea" :autosize="{ minRows: 3, maxRows: 10}" v-model="videoUpload.description"></el-input>
                </el-form-item>
                <el-form-item label="视频分类">
                  <el-select v-model="videoUpload.type" placeholder="请选择">
                    <el-option
                      v-for="item in typeList"
                      :key="item.id"
                      :label="item.type"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="视频封面">
                  <el-upload
                  class="upload-demo"
                  action="#"
                  multiple
                  :http-request="imgAdd"
                  :limit="1"
                  >
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </el-form-item>
                <el-form-item label="视频">
                  <el-upload
                    class="upload-demo"
                    drag
                    action="#"
                    multiple
                    :limit="1"
                    :http-request="videoAdd"
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传mp4文件</div>
                  </el-upload>
                </el-form-item>
              </el-form>
            </Modal>
            <Modal
              v-model="modal4"
              title="编辑视频"
              @on-ok="ok4"
              @on-cancel="cancel">
              <el-form label-position="left" label-width="80px" :model="videoInfo">
                                <el-form-item label="视频封面">
                                  <el-upload
                                    class="upload-demo"
                                    drag
                                    action="#"
                                    multiple
                                    :limit="1"
                                    :http-request="imgAdd"
                                  >
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                    <div class="el-upload__tip" slot="tip">只能上传图片文件</div>
                                  </el-upload>
                                </el-form-item>
              </el-form>
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>

//import SideMenu from "@/components/SideMenu";
import moment from 'moment'
import HeadMenu from "./HeadMenu";
import SideMenu from "./SideMenu";


import {
  deleteVideo,
  editPicture,
  editVideo,

  getPersonalVideoByTitle, getTypeList,
  uploadVideoToServer
} from "../../api/api";
export default {
  name: "VideoManange",
  components: {SideMenu, HeadMenu},
  //components:{ Menu},
  data(){
    return{
      modal1: false,
      modal2:false,
      modal3: false,
      modal4:false,
      username:'',
      curPage:1,
      pageSize:10,
      total:0,
      searchTitle:'',
      typeList:[{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      back: {
        backgroundSize: "100% 100%",
        height: "100%",
        position: "fixed",
        width: "100%",
      },
      tableData: [{
        id:1,
        fileName: 'text1',
        title: '我的视频',
        picture: '图片url',
        uploadTime: '2021-11-20',
        description: '这是一个视频',
        author: '管理员'
      }],
      videoInfo: {
        id:'',
        title:'',
        description:'',
        picture:'',
        url:'',
        type:''
      },
      videoUpload:{
        title:'',
        description:'',
        picture:'',
        file:'',
        type:''
      }
    }
  },
  methods: {
    ok () {
      this.editRow();
      console.log(this.videoInfo);
    },
    ok3() {
      this.uploadVideo();
    },
    ok4(){
      this.editPicture()
    },
    async uploadVideo(){
     // alert(this.videoUpload.type);
      var formdata = new FormData();
      formdata.append('file', this.videoUpload.file.file);
      formdata.append('title',this.videoUpload.title);
      formdata.append('description',this.videoUpload.description);
      formdata.append('picture',this.videoUpload.picture.file);
      formdata.append('typeId',this.videoUpload.type);
      var data =(await uploadVideoToServer(formdata)).data;
      if(data.status===200){
        this.$Message.success(data.msg);
        this.getAllVideo(1);
      }else{
        this.$message.error("Fail");
      }
    },
    cancel () {
      this.$Message.info('Clicked cancel');
    },
    //时间戳格式化
    dateFormat(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },

    async deleteVideo(videoId){
      var data  = (await(deleteVideo(videoId))).data;
      if(data.status===200){
        this.$message.success("删除成功")

      }else{
        this.$message.error("删除失败")
      }

    },


    deleteRow(index,rows) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteVideo(rows.id);
        this.getAllVideo();
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    //保存图片到后台
    async imgAdd($file){
      console.log($file)
      // this.videoInfo.id=rows.id;
      this.videoInfo.picture = $file;
      this.videoUpload.picture = $file;
    },
    async videoAdd($file){
      this.videoUpload.file = $file;
      console.log(this.videoUpload)

    },
    uploadShow(){
    this.modal3 = true
    },
    // editShow(){
    //   // alert("hahah")
    //   this.modal4 = true
    // },

    getRow(index, rows,val) {
      if(val===1){
        this.modal1=true;
      }else if(val===2){
        this.modal2=true;
      }else if (val === 4){
        this.modal4 = true
      }
      this.videoInfo.id=rows.id;
      this.videoInfo.url=rows.url;
      // this.imgAdd()


    },
    async editPicture(){
      var formdata = new FormData();
      // alert(this.videoInfo.picture)
      formdata.append('file', this.videoInfo.picture.file);
      formdata.append('videoId',this.videoInfo.id);
      var data =(await editPicture(formdata)).data;
      if(data.status===200){
        this.$Message.success(data.msg);
        location.reload();
      }else{
        this.$message.error("Fail");
      }
    },

    async editRow(){
      var formdata = new FormData();
       //alert(this.videoInfo.type);
      // formdata.append('file', this.videoInfo.picture.file);
      formdata.append('title',this.videoInfo.title);
      formdata.append('description',this.videoInfo.description);
      formdata.append('videoId',this.videoInfo.id);
      formdata.append('type',this.videoInfo.type);
      var data =(await editVideo(formdata)).data;
      if(data.status===200){
        this.$Message.success(data.msg);
        this.getAllVideo(1);
      }else{
        this.$message.error("Fail");
      }

    },

    searchTree(){
      this.getAllVideo(1)
    },

    async getAllVideo(val){
      if(val){
        this.curPage = val;
      }
      var data = (await (getPersonalVideoByTitle(this.searchTitle,this.curPage,this.pageSize))).data;
      if(data.status === 200){
        this.tableData = data.data.videoList;
        this.total = data.data.total;
      }
    },
    async getTypeList(){
      var data = (await (getTypeList())).data;
      if(data.status === 200){
        this.typeList = data.data.typeList;

      }
    }
  },

  beforeRemove(file, fileList) {
    return this.$confirm(`确定移除 ${ file.name }？`);
  },
  mounted() {
    this.username = localStorage.getItem("username");
    //获取视频列表
    this.getAllVideo();
    //获取分类
    this.getTypeList();

  }
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
