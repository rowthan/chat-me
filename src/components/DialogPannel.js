/**
 * Created by rowthan on 2017/12/27.
 */
import React, {Component} from 'react';
import dialog from './dialog.css';
class DialogPanel extends Component {
  render() {
    return (
      <ul class="chat-tribes">
        <li class="chat-tribe current" data-id="group">
          <img src="https://avatars3.githubusercontent.com/u/12638456?s=50&v=4" alt="用户名"/>
          <span class="name">当前 <strong>-</strong> 人群聊</span>
          <span class="count">0</span>
        </li>
      </ul>
    )
  }
}

export default DialogPanel;