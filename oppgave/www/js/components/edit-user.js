import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }
  
  render() {
  return html`   
    <div> 
      <label for="fname">First name:</label>
      <input type="text" id="newName" name="newName" value="${this.firstName}"><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="newLaName" name="newLaName" value="${this.lastName}"><br><br>
      <label for="lname">Current password:</label>
      <input type="text" id="cPassword" name="cPassword" value="${this.}"><br><br>
      <label for="lname">New password:</label>
      <input type="text" id="newPassword" name="newPassword" value="${this.}"><br><br>
      <input type="submit" value="Submit" @click=${this.uppdateUser}>
    </div>
  }

  uppdaterUser(e){
   // din kode her
    fetch(`${api/updateUser.php}`
        ).then( res => res.json()
        ).then(data => {
        }
  }
  
}
customElements.define('edit-user', EditUser);
