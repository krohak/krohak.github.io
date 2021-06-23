import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const   DialogModal=(props)=>{
  const {onHandleClose,open,children,title,styles={}}=props
  const {content,title:titleStyle}=styles;
  return (
    <div>
      <Dialog
        open={open}
        transitionDuration = {800}
        keepMounted
        onClose={onHandleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth='xl'
       
      >
        <DialogTitle id="alert-dialog-slide-title" style={titleStyle}>{title}</DialogTitle>
        <DialogContent  style={content}>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DialogModal;
