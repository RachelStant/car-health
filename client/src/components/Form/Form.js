import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'




//Get the current id

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '', serviceTitle: '', serviceDescription: '', serviceShop: '', serviceCost: '', tags: '', selectedFile: '', userServiceDate: null 
    })
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();


   

    //Use useEffect to populate the values of the form, when post changes from null to the find post value
    useEffect(() => {
        if(post) setPostData(post);
    },[post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData))
        
        } else {
            dispatch(createPost(postData)); 
        }
        clear();
        
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', serviceTitle: '', serviceDescription: '', serviceShop: '', serviceCost: '', tags: '', selectedFile: '', userSeviceDate: null })

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Editing' : 'New'} Service Record</Typography>
                <TextField name='creator' variant='outlined' label='Car Owner' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value }) }/>
                <TextField name='serviceTitle' variant='outlined' label='Service Type (oil change, inspection)' fullWidth value={postData.serviceTitle} onChange={(e) => setPostData({ ...postData, serviceTitle: e.target.value }) }/>
                <TextField name='serviceDescription' variant='outlined' label='Service Description' fullWidth value={postData.serviceDescription} onChange={(e) => setPostData({ ...postData, serviceDescription: e.target.value }) }/>
                <TextField name='serviceShop' variant='outlined' label='Service Shop' fullWidth value={postData.serviceShop} onChange={(e) => setPostData({ ...postData, serviceShop: e.target.value }) }/>
                <TextField name='serviceCost' variant='outlined' label='Service Cost' fullWidth value={postData.serviceCost} onChange={(e) => setPostData({ ...postData, serviceCost: e.target.value }) }/>
                <TextField name='tags' variant='outlined' label='Tags (comma-separated)' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') }) }/>
                <style>
                    {`.date-picker input {
                        width: 91%;
                        padding: 10px;
                        border: 1px solid #A3A3A3;
                        border-radius: 3px;
                        margin-top: 5px;
                        margin-bottom: 5px;
                        margin-left: 5px;
                        font-size: 16px;
                        
                    }`}
                </style>
                <DatePicker wrapperClassName='date-picker' placeholderText='Service Date' name='serviceDate' isClearable dateFormat='MM/dd/yyyy' selected={postData.userServiceDate} onChange={(date) => setPostData({ ...postData, userServiceDate: date })} />
              
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' size='large' type='submit' fullWidth>Add Record</Button>
                <Button className={classes.buttonClear} variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
    )
}

export default Form;