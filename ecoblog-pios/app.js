// 1. app.js 최상단 모듈 불러오는 곳에 아래 한 줄 추가
const Parser = require('rss-parser');

// 2. 라우터들이 모여있는 곳에 아래 파서 엔진 및 API 추가
const rssParser = new Parser({
    headers: {
        // 🛡️ 파이 본사의 봇 방어막을 뚫기 위해 일반 크롬 브라우저로 위장!
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml'
    }
});

// 🚀 파이 공식 블로그 글 다이렉트 수집 라우터
app.get('/api/pi-blog', async (req, res) => {
    try {
        // 파이 본사 블로그 피드를 직접 긁어옵니다.
        const feed = await rssParser.parseURL('https://minepi.com/blog/feed/');
        
        // 프론트엔드가 기존에 쓰던 rss2json과 똑같은 모양(status: 'ok', items: 배열)으로 포장해서 쏴줍니다.
        res.json({ 
            status: 'ok', 
            items: feed.items 
        });
    } catch (error) {
        console.error("❌ [파이 블로그 RSS 수집 에러]:", error.message);
        res.status(500).json({ status: 'error', message: '피드를 불러오지 못했습니다.' });
    }
});