import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const   DialogModal=(props)=>{
  const {onHandleClose,onHandleExited,open,fullScreen,children,title,styles={}}=props
  const {content,title:titleStyle}=styles;
  return (
    <div>
      <Dialog
        open={open}
        transitionDuration = {700}
        keepMounted
        onClose={onHandleClose}
        onExited={onHandleExited}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth='xl'
        fullScreen={fullScreen}
       
      >
        <DialogTitle id="alert-dialog-slide-title" style={{...titleStyle,fontSize:'2.4rem', paddingTop:'2rem'}} disableTypography>{title}</DialogTitle>
        <DialogContent style={{...content, paddingBottom: '2rem'}}>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DialogModal;
