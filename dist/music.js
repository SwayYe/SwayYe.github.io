const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
	theme: '#2EA9DF',
	lrcType: 3,
    audio: [
	{
        name: 'Flower Dance',
        artist: 'DJ Okawari',
        url: 'http://music.163.com/song/media/outer/url?id=406238.mp3',
        cover: 'http://p1.music.126.net/P1ac-TWkFzjDqcvl5_oK7Q==/881808325476577.jpg?param=300x300',
		lrc: 'lrc/Flower Dance-DJ Okawari.lrc',
      },
	  {
		name: 'Utakata',
		artist: 'Anan Ryoko',
		url: 'http://music.163.com/song/media/outer/url?id=22712182.mp3',
		cover: 'http://p2.music.126.net/HpNhvHFZXTLwrVXMT7WP8g==/109951163028848374.jpg?param=300x300',
		lrc: 'lrc/Utakata-Anan Ryoko.lrc'
	  },
	  {
		  name: 'カノン',
		  artist: 'DJ Okawari',
		  url: 'http://music.163.com/song/media/outer/url?id=4894309.mp3',
		  cover: 'http://p1.music.126.net/McvWb5wc7YTbRbGbVpzG0g==/2523379185812325.jpg?param=300x300',
		  lrc: 'lrc/カノン-DJ Okawari.lrc'
	  },
	  {
		  name: 'Lemon（Cover 米津玄師）',
		  artist: '茶理理,人形兎',
		  url: 'http://music.163.com/song/media/outer/url?id=39685649.mp3',
		  cover: 'http://p2.music.126.net/6FG8ZczNpS3Ec_u2tit6MA==/109951163358943073.jpg?param=300x300',
		  lrc: 'lrc/Lemon（Cover 米津玄師）-茶理理,人形兎.lrc'
	  },
	  {
		name: '僕が死のうと思ったのは',
		artist: '中島美嘉',
		url: 'http://music.163.com/song/media/outer/url?id=26830207.mp3',
		cover: 'http://p1.music.126.net/Rv7XgyTNKwJNS-PAtXvRag==/18247494975126406.jpg?param=300x300',
		lrc: 'lrc/僕が死のうと思ったのは-中島美嘉.lrc',
	  },
	  {
		  name: 'アイロニ',
		  artist: 'H△G',
		  url: 'http://music.163.com/song/media/outer/url?id=476638472.mp3',
		  cover: 'http://p1.music.126.net/knuZxQIl0tWXn8bHjnyq_w==/17770306928531115.jpg?param=300x300',
		  lrc: 'lrc/アイロニ-H△G.lrc',
	  },
	  {
		  name: '父亲写的散文诗',
		  artist: '许飞',
		  url: 'http://music.163.com/song/media/outer/url?id=417250673.mp3',
		  cover: 'http://p2.music.126.net/klZM86P-K_DHWpOj0gJ3Mg==/3252355400229043.jpg?param=300x300',
		  lrc: 'lrc/父亲写的散文诗-许飞.lrc',
	  },
	  {
		  name: '盗将行',
		  artist: '花粥,马雨阳',
		  url: 'http://music.163.com/song/media/outer/url?id=574566207.mp3',
		  cover: 'http://p2.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg?param=300x300',
		  lrc: 'lrc/盗将行-花粥,马雨阳.lrc',
	  },
	  {
		  name: '年少有为',
		  artist: '李荣浩',
		  url: 'http://music.163.com/song/media/outer/url?id=1293886117.mp3',
		  cover: 'http://p2.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg?param=300x300',
		  lrc: 'lrc/年少有为-李荣浩.lrc',
	  }
    ]
});