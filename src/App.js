import React, { Component } from 'react';
import $ from 'jquery';
import io from 'socket.io-client';
import './App.css';
import UserInfo from './components/UserInfo';
import DialogPannel from './components/DialogPannel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="chat">
          <div class="chat-info">
            <UserInfo/>
            <DialogPannel/>
          </div>
          <div class="chat-main">
            <nav class="chat-tab">
              <span>tab1</span>
              <span>tab2</span>
              <span>tab3</span>
            </nav>
            <div class="tab-container">
                <div class="tab-main">
                  <div class="tab-content">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>55</div>
                    <div>6</div>
                    <div>7</div>
                    <div>7</div>
                    <div>2</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>55</div>
                    <div>6</div>
                    <div>7</div>
                    <div>7</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>55</div>
                    <div>6</div>
                    <div>7</div>
                    <div>7</div>
                  </div>
                  <div class="input-area">
                    <textarea type="text" class="chat-input" placeholder="按 Ctrl+Enter 发送"></textarea>
                    <span class="chat-send-btn">发送</span>
                  </div>
                </div>
                <aside class="tab-aside">
                  <section>
                    <ul>
                      <li>m1</li>
                      <li>m2</li>
                      <li>m3</li>
                      <li>m4</li>
                      <li>m5</li>
                      <li>m6</li>
                    </ul>
                  </section>
                </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
