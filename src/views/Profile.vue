<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img src="https://i.imgur.com/wAoYezk.jpg" class="user-img" />
            <h4>Kriss Kawa</h4>
            <p>
              Founder at Kriss, Developer, Content Writer
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Favorites</a>
              </li>
            </ul>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href="profile.html"><img src="https://i.imgur.com/wAoYezk.jpg" /></a>
              <div class="info">
                <a href="" class="author">Kriss Kawa</a>
                <span class="date">February 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 28
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>How to build robust and dynamic React Native apps</h1>
              <p>Learn about basics of React Native app development</p>
              <span>Read more...</span>
            </a>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
              <div class="info">
                <a href="" class="author">Gaza Lang</a>
                <span class="date">March 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 10
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>The mark of good web developer.</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </a>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href=""><img src="https://i.imgur.com/wAoYezk.jpg"/></a>
              <div class="info">
                <a href="" class="author">Kriss Kawa</a>
                <span class="date">April 25th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 19
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>
                Flutter Image Upload with Firebase
              </h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li class="tag-default tag-pill">Flutter</li>
                <li class="tag-default tag-pill">Dart</li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
