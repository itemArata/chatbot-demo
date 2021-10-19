import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './TextInput'


export default class FormDialog extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        description: ""
      }

      this.inputName = this.inputName.bind(this)
      this.inputEmale = this.inputEmale.bind(this)
      this.inputDescription = this.inputDescription.bind(this)

  }




  inputName = (event) => {
    this.setState(  {name: event.target.value})
  }

  inputEmale = (event) => {
    this.setState(  {email: event.target.value})
  }

  inputDescription = (event) => {
    this.setState(  {description: event.target.value})
  }


  submitForm = (event) => {
    const name = this.state.name
    const email = this.state.email
    const discription = this.state.description

    const payload = {
      text: "お問合せがありました\n" +
            'お名前:' + name + "\n" +
            'Email: ' + email + "\n" +
            '問い合わせ内容:\n' + discription  
    }

    const url = 'https://hooks.slack.com/services/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'

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
    }).then(() => {
      alert("送信が完了しました。後ほどご連絡します。")
      this.setState({
        name:'',
        email:'',
        description:''

      })
    })
    return this.props.handleClose()
  }





 // validation is not installed in this Form.....
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">問い合わせフォーム</DialogTitle>
          <DialogContent>
            <TextInput 
              label={"Name(required)"} multiline={false} rows={1}
              value={this.state.name} type={"text"} onChange={this.inputName} />
            <TextInput 
              label={"mail-address(required)"} multiline={false} rows={1}
              value={this.state.email} type={"text"} onChange={this.inputEmale} />            
            <TextInput 
              label={"inqirey matter (required)"} multiline={true} rows={5}/>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.props.handleClose} color="danger">
              CANCEL
            </Button>
            <Button onClick={this.submitForm} color="danger" autoFocus>
              SUBMIT
            </Button>
          </DialogActions>
    </Dialog>
   )
  }
}