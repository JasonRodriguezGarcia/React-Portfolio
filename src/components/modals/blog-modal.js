import React, { Component } from 'react'
import ReactModal from 'react-modal';
import BlogForm from '../blog/blog-form';
// app-wrapper appears on /static/index.html
ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component {
  constructor(props) {
    super(props);
// Styling with ReactModal embedded objects
    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%",
        width: "800px"
      },
      overlay: {  // 1,1,1=back; 0.75%=opacity
        backgroundColor: "rgba(1, 1, 1, 0.75)"
      }
    };
    this.handleSuccessfulFormSubmission =
      this.handleSuccessfulFormSubmission.bind(this);

  }

  handleSuccessfulFormSubmission(blog) {
  //  console.log("blog from BlogForm", blog);
    this.props.handleSuccessfulNewBlogSubmission(blog);
  }

  render() {
    return (
      <ReactModal 
        style={this.customStyles}
        onRequestClose= {()=> {
//handleModalClose is inside funtion arrow
// that's why ()
          this.props.handleModalClose();
        }} 
        isOpen={this.props.modalIsOpen}
      >
        <BlogForm handleSuccessfulFormSubmission
          ={this.handleSuccessfulFormSubmission}/>
      </ReactModal>
    )
  }
}
