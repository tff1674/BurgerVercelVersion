import React, { Component } from 'react'
import './style.css'

const { Fragment } = React;
class UploadImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
          file:'',
          showImg:'none',
          imagePreviewUrl:'',
        }
      }
    handleImageChange(e) {
        e.preventDefault();
        
        var reader = new FileReader();
        var file = e.target.files[0];
        
        reader.onloadend = () => {
          console.log('文件名为—',file);
          console.log('文件结果为—',reader.result);
          this.setState({
          file: file,
          imagePreviewUrl: reader.result
          });
        }
        
        reader.readAsDataURL(file)
      }
      render() {
        var {imagePreviewUrl,showImg} = this.state;
        var imagePreview = null;
        if (imagePreviewUrl) {
          imagePreview = ( <label  for="avatarFor">< img style={{width:'100px',height:'100px'}} src={imagePreviewUrl} /></label>);
          showImg = 'none';
        } else {
          showImg = 'block';
        }
    
        return (
          <div className='wrapper'>
                <input id="avatarFor" className='upload' type="file" onChange={(e)=>this.handleImageChange(e)}/>
                {imagePreview}
                <label style={{display:showImg}} className="label" for="avatarFor">+ Click to upload picture</label>
               
          </div>
        );
      }
    
}

export default UploadImg
