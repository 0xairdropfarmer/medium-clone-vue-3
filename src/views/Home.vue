<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Medium Clone</h1>
        <p>Get close in personal with great ideas.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
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

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p><strong>Popular Tags</strong></p>

            <div class="tag-list">
              <a href="" class="tag-pill tag-default">mobiledevelopment</a>
              <a href="" class="tag-pill tag-default">react</a>
              <a href="" class="tag-pill tag-default">reactnative</a>
              <a href="" class="tag-pill tag-default">vue</a>
              <a href="" class="tag-pill tag-default">sql</a>
              <a href="" class="tag-pill tag-default">angular</a>
              <a href="" class="tag-pill tag-default">nodejs</a>
              <a href="" class="tag-pill tag-default">webdevelopment</a>
              <a href="" class="tag-pill tag-default">flutter</a>
              <a href="" class="tag-pill tag-default">dart</a>
              <a href="" class="tag-pill tag-default">cryto</a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  }
};
</script>
