/**
 * Created by rowthan on 2017/12/27.
 */
import React, {Component} from 'react';
import css from './userinfo.css';
class UserInfo extends Component{
  render(){
    return(
      <div class="userinfo">
        <img src="https://avatars3.githubusercontent.com/u/12638456?s=50&v=4" alt="user logo" style={{height:"50px",width:"50px"}}/>
        <span class="username">用户002</span>
      </div>
    )
  }
}
export default UserInfo;