<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center mb-4" v-if="fileProgress > 0">
                <div class="progress" style="">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"  :style="{ width: fileProgress +'%'}">{{ fileCurrent}}%</div>
                </div>
            </div>
        </div>
        <div class="row" v-for="(download) in downloads">

            <div class="col-sm-6">
                <div class="input-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="customFile" name="file" @change="fileInputChange(download)">
                        <label class="custom-file-label" for="customFile">Выберите файл</label>
                    </div>
                    <div class="input-group-prepend">
                        <button type="button" class="btn btn-outline-secondary" @click="uploadFile(download)">Загрузить</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                downloads: 1,
                fileProgress: 0,
                fileCurrent: '',
            };
        },
        mounted() {
            console.log('Подключился')
        },
        methods:{
            fileInputChange(){
                console.log('qq all');
                this.attachment = event.target.files[0];
            },
            uploadFile(download){
                let form = new FormData();
                form.append('file', download.file);

                axios.get('download', form, {
                    onUploadProgress: (itemUpload) => {
                        this.fileProgress = Math.round((itemUpload.loaded/itemUpload.total) * 100);
                        this.fileCurrent = this.fileProgress;
                    }
                })
                    .then(response => {
                        download.id = response.data;

                    })
                    .catch(error =>{
                        console.log(error);
                    });
                this.fileProgress = 0;
                this.fileCurrent ='';
            }
        }

    }
</script>
