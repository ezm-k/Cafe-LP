'use strict';
// -----------------------
// スムーススクロール
// -----------------------

// a href = "id名"となっている要素を取得
//smoothScrollTrigger [a , a , a , a.btn]
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      //1. デフォルトのイベントを無効化。これがないとスムーススクロールできない。
      e.preventDefault();

      //2. smoothScrollTriggerの中のhref=""の中身を取得　#menu
      let href = smoothScrollTrigger[i].getAttribute('href');

      //3. let href を取得 = hrefの中身を取得。さらにreplace()でhrefの「#」を取り除く。 menu
      let targetElement = document.getElementById(href.replace('#', ''));
      //これで、ジャンプ先のid名を抜き出した。

      //4. ターゲットの位置を取得。
      //ブラウザ上端を基準にした要素の座標位置を取得.top = y座標の距離px。(y: - px)
      const rect = targetElement.getBoundingClientRect().top;
      //縦方向スクロール量を取得
      const offset = window.pageYOffset;
      //固定ヘッダー分の高さ
      const gap = 0;
      //ページ上端から要素上端までの距離
      const target = rect + offset - gap;
      
      //5. スクロールの処理。
      window.scrollTo({
        //ページ上端からターゲットまで
        top: target,
        //スムーズにスクロール
        behavior: 'smooth',
      });
    });
  }