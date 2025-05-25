// Hiragana and Katakana data with example words
const hiraganaData = [
    { 
        char: 'あ', 
        romaji: 'a',
        videoId: 'qqUnb6CMNcI',
        examples: [
            { word: 'あい', romaji: 'ai', meaning: 'love' },
            { word: 'あか', romaji: 'aka', meaning: 'red' },
            { word: 'あさ', romaji: 'asa', meaning: 'morning' }
        ]
    },
    { 
        char: 'い', 
        romaji: 'i',
        videoId: '',
        examples: [
            { word: 'いぬ', romaji: 'inu', meaning: 'dog' },
            { word: 'いち', romaji: 'ichi', meaning: 'one' },
            { word: 'いえ', romaji: 'ie', meaning: 'house' }
        ]
    },
    { 
        char: 'う', 
        romaji: 'u',
        videoId: '',
        examples: [
            { word: 'うみ', romaji: 'umi', meaning: 'sea' },
            { word: 'うし', romaji: 'ushi', meaning: 'cow' },
            { word: 'うた', romaji: 'uta', meaning: 'song' }
        ]
    },
    { 
        char: 'え', 
        romaji: 'e',
        videoId: '',
        examples: [
            { word: 'えき', romaji: 'eki', meaning: 'station' },
            { word: 'えんぴつ', romaji: 'enpitsu', meaning: 'pencil' },
            { word: 'えいご', romaji: 'eigo', meaning: 'English' }
        ]
    },
    { 
        char: 'お', 
        romaji: 'o',
        videoId: '',
        examples: [
            { word: 'おと', romaji: 'oto', meaning: 'sound' },
            { word: 'おか', romaji: 'oka', meaning: 'hill' },
            { word: 'おに', romaji: 'oni', meaning: 'demon' }
        ]
    },
    { 
        char: 'か', 
        romaji: 'ka',
        videoId: '',
        examples: [
            { word: 'かみ', romaji: 'kami', meaning: 'paper' },
            { word: 'かわ', romaji: 'kawa', meaning: 'river' },
            { word: 'かさ', romaji: 'kasa', meaning: 'umbrella' }
        ]
    },
    { 
        char: 'き', 
        romaji: 'ki',
        videoId: '',
        examples: [
            { word: 'きく', romaji: 'kiku', meaning: 'chrysanthemum' },
            { word: 'きみ', romaji: 'kimi', meaning: 'you' },
            { word: 'きもち', romaji: 'kimochi', meaning: 'feeling' }
        ]
    },
    { 
        char: 'く', 
        romaji: 'ku',
        videoId: '',
        examples: [
            { word: 'くも', romaji: 'kumo', meaning: 'cloud' },
            { word: 'くつ', romaji: 'kutsu', meaning: 'shoes' },
            { word: 'くま', romaji: 'kuma', meaning: 'bear' }
        ]
    },
    { 
        char: 'け', 
        romaji: 'ke',
        videoId: '',
        examples: [
            { word: 'けん', romaji: 'ken', meaning: 'sword' },
            { word: 'けしき', romaji: 'keshiki', meaning: 'scenery' },
            { word: 'けむり', romaji: 'kemuri', meaning: 'smoke' }
        ]
    },
    { 
        char: 'こ', 
        romaji: 'ko',
        videoId: '',
        examples: [
            { word: 'こと', romaji: 'koto', meaning: 'thing' },
            { word: 'こども', romaji: 'kodomo', meaning: 'child' },
            { word: 'こころ', romaji: 'kokoro', meaning: 'heart' }
        ]
    },
    { 
        char: 'さ', 
        romaji: 'sa',
        videoId: '',
        examples: [
            { word: 'さくら', romaji: 'sakura', meaning: 'cherry blossom' },
            { word: 'さかな', romaji: 'sakana', meaning: 'fish' },
            { word: 'さとう', romaji: 'satou', meaning: 'sugar' }
        ]
    },
    { 
        char: 'し', 
        romaji: 'shi',
        videoId: '',
        examples: [
            { word: 'しろ', romaji: 'shiro', meaning: 'white' },
            { word: 'しんぶん', romaji: 'shinbun', meaning: 'newspaper' },
            { word: 'しずか', romaji: 'shizuka', meaning: 'quiet' }
        ]
    },
    { 
        char: 'す', 
        romaji: 'su',
        videoId: '',
        examples: [
            { word: 'すみ', romaji: 'sumi', meaning: 'corner' },
            { word: 'すず', romaji: 'suzu', meaning: 'bell' },
            { word: 'すき', romaji: 'suki', meaning: 'like' }
        ]
    },
    { 
        char: 'せ', 
        romaji: 'se',
        videoId: '',
        examples: [
            { word: 'せかい', romaji: 'sekai', meaning: 'world' },
            { word: 'せんせい', romaji: 'sensei', meaning: 'teacher' },
            { word: 'せんたく', romaji: 'sentaku', meaning: 'laundry' }
        ]
    },
    { 
        char: 'そ', 
        romaji: 'so',
        videoId: '',
        examples: [
            { word: 'そら', romaji: 'sora', meaning: 'sky' },
            { word: 'そと', romaji: 'soto', meaning: 'outside' },
            { word: 'そば', romaji: 'soba', meaning: 'near' }
        ]
    },
    { 
        char: 'た', 
        romaji: 'ta',
        videoId: '',
        examples: [
            { word: 'たまご', romaji: 'tamago', meaning: 'egg' },
            { word: 'たから', romaji: 'takara', meaning: 'treasure' },
            { word: 'たのしい', romaji: 'tanoshii', meaning: 'fun' }
        ]
    },
    { 
        char: 'ち', 
        romaji: 'chi',
        videoId: '',
        examples: [
            { word: 'ちず', romaji: 'chizu', meaning: 'map' },
            { word: 'ちいさい', romaji: 'chiisai', meaning: 'small' },
            { word: 'ちから', romaji: 'chikara', meaning: 'power' }
        ]
    },
    { 
        char: 'つ', 
        romaji: 'tsu',
        videoId: '',
        examples: [
            { word: 'つき', romaji: 'tsuki', meaning: 'moon' },
            { word: 'つくえ', romaji: 'tsukue', meaning: 'desk' },
            { word: 'つよい', romaji: 'tsuyoi', meaning: 'strong' }
        ]
    },
    { 
        char: 'て', 
        romaji: 'te',
        videoId: '',
        examples: [
            { word: 'てがみ', romaji: 'tegami', meaning: 'letter' },
            { word: 'てんき', romaji: 'tenki', meaning: 'weather' },
            { word: 'てら', romaji: 'tera', meaning: 'temple' }
        ]
    },
    { 
        char: 'と', 
        romaji: 'to',
        videoId: '',
        examples: [
            { word: 'とけい', romaji: 'tokei', meaning: 'clock' },
            { word: 'とし', romaji: 'toshi', meaning: 'year' },
            { word: 'とり', romaji: 'tori', meaning: 'bird' }
        ]
    },
    { 
        char: 'な', 
        romaji: 'na',
        videoId: '',
        examples: [
            { word: 'なつ', romaji: 'natsu', meaning: 'summer' },
            { word: 'なまえ', romaji: 'namae', meaning: 'name' },
            { word: 'なか', romaji: 'naka', meaning: 'inside' }
        ]
    },
    { 
        char: 'に', 
        romaji: 'ni',
        videoId: '',
        examples: [
            { word: 'にほん', romaji: 'nihon', meaning: 'Japan' },
            { word: 'にわ', romaji: 'niwa', meaning: 'garden' },
            { word: 'にちようび', romaji: 'nichiyoubi', meaning: 'Sunday' }
        ]
    },
    { 
        char: 'ぬ', 
        romaji: 'nu',
        videoId: '',
        examples: [
            { word: 'ぬま', romaji: 'numa', meaning: 'swamp' },
            { word: 'ぬりえ', romaji: 'nurie', meaning: 'coloring book' },
            { word: 'ぬすむ', romaji: 'nusumu', meaning: 'to steal' }
        ]
    },
    { 
        char: 'ね', 
        romaji: 'ne',
        videoId: '',
        examples: [
            { word: 'ねこ', romaji: 'neko', meaning: 'cat' },
            { word: 'ねむい', romaji: 'nemui', meaning: 'sleepy' },
            { word: 'ねだん', romaji: 'nedan', meaning: 'price' }
        ]
    },
    { 
        char: 'の', 
        romaji: 'no',
        videoId: '',
        examples: [
            { word: 'のど', romaji: 'nodo', meaning: 'throat' },
            { word: 'のり', romaji: 'nori', meaning: 'seaweed' },
            { word: 'のこす', romaji: 'nokosu', meaning: 'to leave' }
        ]
    },
    { 
        char: 'は', 
        romaji: 'ha',
        videoId: '',
        examples: [
            { word: 'はな', romaji: 'hana', meaning: 'flower' },
            { word: 'はし', romaji: 'hashi', meaning: 'bridge' },
            { word: 'はる', romaji: 'haru', meaning: 'spring' }
        ]
    },
    { 
        char: 'ひ', 
        romaji: 'hi',
        videoId: '',
        examples: [
            { word: 'ひかり', romaji: 'hikari', meaning: 'light' },
            { word: 'ひこうき', romaji: 'hikouki', meaning: 'airplane' },
            { word: 'ひま', romaji: 'hima', meaning: 'free time' }
        ]
    },
    { 
        char: 'ふ', 
        romaji: 'fu',
        videoId: '',
        examples: [
            { word: 'ふゆ', romaji: 'fuyu', meaning: 'winter' },
            { word: 'ふね', romaji: 'fune', meaning: 'ship' },
            { word: 'ふた', romaji: 'futa', meaning: 'lid' }
        ]
    },
    { 
        char: 'へ', 
        romaji: 'he',
        videoId: '',
        examples: [
            { word: 'へや', romaji: 'heya', meaning: 'room' },
            { word: 'へいわ', romaji: 'heiwa', meaning: 'peace' },
            { word: 'へた', romaji: 'heta', meaning: 'unskilled' }
        ]
    },
    { 
        char: 'ほ', 
        romaji: 'ho',
        videoId: '',
        examples: [
            { word: 'ほし', romaji: 'hoshi', meaning: 'star' },
            { word: 'ほん', romaji: 'hon', meaning: 'book' },
            { word: 'ほしい', romaji: 'hoshii', meaning: 'want' }
        ]
    },
    { 
        char: 'ま', 
        romaji: 'ma',
        videoId: '',
        examples: [
            { word: 'まど', romaji: 'mado', meaning: 'window' },
            { word: 'まち', romaji: 'machi', meaning: 'town' },
            { word: 'まつ', romaji: 'matsu', meaning: 'pine tree' }
        ]
    },
    { 
        char: 'み', 
        romaji: 'mi',
        videoId: '',
        examples: [
            { word: 'みず', romaji: 'mizu', meaning: 'water' },
            { word: 'みち', romaji: 'michi', meaning: 'road' },
            { word: 'みどり', romaji: 'midori', meaning: 'green' }
        ]
    },
    { 
        char: 'む', 
        romaji: 'mu',
        videoId: '',
        examples: [
            { word: 'むし', romaji: 'mushi', meaning: 'insect' },
            { word: 'むすめ', romaji: 'musume', meaning: 'daughter' },
            { word: 'むかし', romaji: 'mukashi', meaning: 'old days' }
        ]
    },
    { 
        char: 'め', 
        romaji: 'me',
        videoId: '',
        examples: [
            { word: 'めがね', romaji: 'megane', meaning: 'glasses' },
            { word: 'めん', romaji: 'men', meaning: 'noodles' },
            { word: 'めずらしい', romaji: 'mezurashii', meaning: 'rare' }
        ]
    },
    { 
        char: 'も', 
        romaji: 'mo',
        videoId: '',
        examples: [
            { word: 'もも', romaji: 'momo', meaning: 'peach' },
            { word: 'もり', romaji: 'mori', meaning: 'forest' },
            { word: 'もん', romaji: 'mon', meaning: 'gate' }
        ]
    },
    { 
        char: 'や', 
        romaji: 'ya',
        videoId: '',
        examples: [
            { word: 'やま', romaji: 'yama', meaning: 'mountain' },
            { word: 'やさい', romaji: 'yasai', meaning: 'vegetable' },
            { word: 'やさしい', romaji: 'yasashii', meaning: 'kind' }
        ]
    },
    { 
        char: 'ゆ', 
        romaji: 'yu',
        videoId: '',
        examples: [
            { word: 'ゆき', romaji: 'yuki', meaning: 'snow' },
            { word: 'ゆめ', romaji: 'yume', meaning: 'dream' },
            { word: 'ゆうめい', romaji: 'yuumei', meaning: 'famous' }
        ]
    },
    { 
        char: 'よ', 
        romaji: 'yo',
        videoId: '',
        examples: [
            { word: 'よる', romaji: 'yoru', meaning: 'night' },
            { word: 'よみもの', romaji: 'yomimono', meaning: 'reading material' },
            { word: 'よろしい', romaji: 'yoroshii', meaning: 'good' }
        ]
    },
    { 
        char: 'ら', 
        romaji: 'ra',
        videoId: '',
        examples: [
            { word: 'らく', romaji: 'raku', meaning: 'easy' },
            { word: 'らん', romaji: 'ran', meaning: 'orchid' },
            { word: 'らくだ', romaji: 'rakuda', meaning: 'camel' }
        ]
    },
    { 
        char: 'り', 
        romaji: 'ri',
        videoId: '',
        examples: [
            { word: 'りんご', romaji: 'ringo', meaning: 'apple' },
            { word: 'りゅう', romaji: 'ryuu', meaning: 'dragon' },
            { word: 'りかい', romaji: 'rikai', meaning: 'understanding' }
        ]
    },
    { 
        char: 'る', 
        romaji: 'ru',
        videoId: '',
        examples: [
            { word: 'るす', romaji: 'rusu', meaning: 'absence' },
            { word: 'るい', romaji: 'rui', meaning: 'kind' },
            { word: 'るすばん', romaji: 'rusuban', meaning: 'house-sitting' }
        ]
    },
    { 
        char: 'れ', 
        romaji: 're',
        videoId: '',
        examples: [
            { word: 'れい', romaji: 'rei', meaning: 'zero' },
            { word: 'れきし', romaji: 'rekishi', meaning: 'history' },
            { word: 'れいぞうこ', romaji: 'reizouko', meaning: 'refrigerator' }
        ]
    },
    { 
        char: 'ろ', 
        romaji: 'ro',
        videoId: '',
        examples: [
            { word: 'ろく', romaji: 'roku', meaning: 'six' },
            { word: 'ろうか', romaji: 'rouka', meaning: 'corridor' },
            { word: 'ろうじん', romaji: 'roujin', meaning: 'elderly person' }
        ]
    },
    { 
        char: 'わ', 
        romaji: 'wa',
        videoId: '',
        examples: [
            { word: 'わか', romaji: 'waka', meaning: 'young' },
            { word: 'わし', romaji: 'washi', meaning: 'eagle' },
            { word: 'わらい', romaji: 'warai', meaning: 'laugh' }
        ]
    },
    { 
        char: 'を', 
        romaji: 'wo',
        videoId: '',
        examples: [
            { word: 'をとる', romaji: 'wotoru', meaning: 'to take' },
            { word: 'をみる', romaji: 'womiru', meaning: 'to see' },
            { word: 'をかく', romaji: 'wokaku', meaning: 'to write' }
        ]
    },
    { 
        char: 'ん', 
        romaji: 'n',
        videoId: '',
        examples: [
            { word: 'さん', romaji: 'san', meaning: 'three' },
            { word: 'にん', romaji: 'nin', meaning: 'person' },
            { word: 'ほん', romaji: 'hon', meaning: 'book' }
        ]
    }
];

const katakanaData = [
    { 
        char: 'ア', 
        romaji: 'a',
        videoId: '',
        examples: [
            { word: 'アニメ', romaji: 'anime', meaning: 'anime' },
            { word: 'アメリカ', romaji: 'amerika', meaning: 'America' },
            { word: 'アパート', romaji: 'apaato', meaning: 'apartment' }
        ]
    },
    { 
        char: 'イ', 
        romaji: 'i',
        videoId: '',
        examples: [
            { word: 'イギリス', romaji: 'igirisu', meaning: 'England' },
            { word: 'イタリア', romaji: 'itaria', meaning: 'Italy' },
            { word: 'インターネット', romaji: 'intaanetto', meaning: 'internet' }
        ]
    },
    { 
        char: 'ウ', 
        romaji: 'u',
        videoId: '',
        examples: [
            { word: 'ウイスキー', romaji: 'uisukii', meaning: 'whiskey' },
            { word: 'ウイルス', romaji: 'uirusu', meaning: 'virus' },
            { word: 'ウエイター', romaji: 'ueitaa', meaning: 'waiter' }
        ]
    },
    { 
        char: 'エ', 
        romaji: 'e',
        videoId: '',
        examples: [
            { word: 'エアコン', romaji: 'eakon', meaning: 'air conditioner' },
            { word: 'エレベーター', romaji: 'erebeetaa', meaning: 'elevator' },
            { word: 'エンジン', romaji: 'enjin', meaning: 'engine' }
        ]
    },
    { 
        char: 'オ', 
        romaji: 'o',
        videoId: '',
        examples: [
            { word: 'オレンジ', romaji: 'orenji', meaning: 'orange' },
            { word: 'オフィス', romaji: 'ofisu', meaning: 'office' },
            { word: 'オーストラリア', romaji: 'oosutoraria', meaning: 'Australia' }
        ]
    },
    { 
        char: 'カ', 
        romaji: 'ka',
        videoId: '',
        examples: [
            { word: 'カメラ', romaji: 'kamera', meaning: 'camera' },
            { word: 'カレンダー', romaji: 'karendaa', meaning: 'calendar' },
            { word: 'カフェ', romaji: 'kafe', meaning: 'cafe' }
        ]
    },
    { 
        char: 'キ', 
        romaji: 'ki',
        videoId: '',
        examples: [
            { word: 'キーボード', romaji: 'kiiboodo', meaning: 'keyboard' },
            { word: 'キッチン', romaji: 'kicchin', meaning: 'kitchen' },
            { word: 'キロ', romaji: 'kiro', meaning: 'kilo' }
        ]
    },
    { 
        char: 'ク', 
        romaji: 'ku',
        videoId: '',
        examples: [
            { word: 'クラス', romaji: 'kurasu', meaning: 'class' },
            { word: 'クリーム', romaji: 'kuriimu', meaning: 'cream' },
            { word: 'クッキー', romaji: 'kukkii', meaning: 'cookie' }
        ]
    },
    { 
        char: 'ケ', 
        romaji: 'ke',
        videoId: '',
        examples: [
            { word: 'ケーキ', romaji: 'keeki', meaning: 'cake' },
            { word: 'ケース', romaji: 'keesu', meaning: 'case' },
            { word: 'ケーブル', romaji: 'keeburu', meaning: 'cable' }
        ]
    },
    { 
        char: 'コ', 
        romaji: 'ko',
        videoId: '',
        examples: [
            { word: 'コーヒー', romaji: 'koohii', meaning: 'coffee' },
            { word: 'コピー', romaji: 'kopii', meaning: 'copy' },
            { word: 'コート', romaji: 'kooto', meaning: 'coat' }
        ]
    },
    { 
        char: 'サ', 
        romaji: 'sa',
        videoId: '',
        examples: [
            { word: 'サラダ', romaji: 'sarada', meaning: 'salad' },
            { word: 'サッカー', romaji: 'sakkaa', meaning: 'soccer' },
            { word: 'サンドイッチ', romaji: 'sandoicchi', meaning: 'sandwich' }
        ]
    },
    { 
        char: 'シ', 
        romaji: 'shi',
        videoId: '',
        examples: [
            { word: 'シーズン', romaji: 'shiizun', meaning: 'season' },
            { word: 'シェフ', romaji: 'shefu', meaning: 'chef' },
            { word: 'シリーズ', romaji: 'shiriizu', meaning: 'series' }
        ]
    },
    { 
        char: 'ス', 
        romaji: 'su',
        videoId: '',
        examples: [
            { word: 'スーパー', romaji: 'suupaa', meaning: 'supermarket' },
            { word: 'スカート', romaji: 'sukaato', meaning: 'skirt' },
            { word: 'スケジュール', romaji: 'sukejuuru', meaning: 'schedule' }
        ]
    },
    { 
        char: 'セ', 
        romaji: 'se',
        videoId: '',
        examples: [
            { word: 'セーター', romaji: 'seetaa', meaning: 'sweater' },
            { word: 'セミナー', romaji: 'seminaa', meaning: 'seminar' },
            { word: 'セット', romaji: 'setto', meaning: 'set' }
        ]
    },
    { 
        char: 'ソ', 
        romaji: 'so',
        videoId: '',
        examples: [
            { word: 'ソフト', romaji: 'sofuto', meaning: 'software' },
            { word: 'ソファー', romaji: 'sofaa', meaning: 'sofa' },
            { word: 'ソース', romaji: 'soosu', meaning: 'sauce' }
        ]
    },
    { 
        char: 'タ', 
        romaji: 'ta',
        videoId: '',
        examples: [
            { word: 'タクシー', romaji: 'takushii', meaning: 'taxi' },
            { word: 'タオル', romaji: 'taoru', meaning: 'towel' },
            { word: 'タワー', romaji: 'tawaa', meaning: 'tower' }
        ]
    },
    { 
        char: 'チ', 
        romaji: 'chi',
        videoId: '',
        examples: [
            { word: 'チケット', romaji: 'chiketto', meaning: 'ticket' },
            { word: 'チーズ', romaji: 'chiizu', meaning: 'cheese' },
            { word: 'チョコレート', romaji: 'chokoreeto', meaning: 'chocolate' }
        ]
    },
    { 
        char: 'ツ', 
        romaji: 'tsu',
        videoId: '',
        examples: [
            { word: 'ツアー', romaji: 'tsuaa', meaning: 'tour' },
            { word: 'ツリー', romaji: 'tsurii', meaning: 'tree' },
            { word: 'ツール', romaji: 'tsuuru', meaning: 'tool' }
        ]
    },
    { 
        char: 'テ', 
        romaji: 'te',
        videoId: '',
        examples: [
            { word: 'テレビ', romaji: 'terebi', meaning: 'television' },
            { word: 'テーブル', romaji: 'teeburu', meaning: 'table' },
            { word: 'テニス', romaji: 'tenisu', meaning: 'tennis' }
        ]
    },
    { 
        char: 'ト', 
        romaji: 'to',
        videoId: '',
        examples: [
            { word: 'トイレ', romaji: 'toire', meaning: 'toilet' },
            { word: 'トマト', romaji: 'tomato', meaning: 'tomato' },
            { word: 'トップ', romaji: 'toppu', meaning: 'top' }
        ]
    },
    { 
        char: 'ナ', 
        romaji: 'na',
        videoId: '',
        examples: [
            { word: 'ナイフ', romaji: 'naifu', meaning: 'knife' },
            { word: 'ナンバー', romaji: 'nanbaa', meaning: 'number' },
            { word: 'ナプキン', romaji: 'napukin', meaning: 'napkin' }
        ]
    },
    { 
        char: 'ニ', 
        romaji: 'ni',
        videoId: '',
        examples: [
            { word: 'ニュース', romaji: 'nyuusu', meaning: 'news' },
            { word: 'ニット', romaji: 'nitto', meaning: 'knit' },
            { word: 'ニッケル', romaji: 'nikkeru', meaning: 'nickel' }
        ]
    },
    { 
        char: 'ヌ', 
        romaji: 'nu',
        videoId: '',
        examples: [
            { word: 'ヌードル', romaji: 'nuudoru', meaning: 'noodle' },
            { word: 'ヌクレア', romaji: 'nukurea', meaning: 'nuclear' },
            { word: 'ヌーボー', romaji: 'nuuboo', meaning: 'nouveau' }
        ]
    },
    { 
        char: 'ネ', 
        romaji: 'ne',
        videoId: '',
        examples: [
            { word: 'ネクタイ', romaji: 'nekutai', meaning: 'necktie' },
            { word: 'ネイル', romaji: 'neiru', meaning: 'nail' },
            { word: 'ネーム', romaji: 'neemu', meaning: 'name' }
        ]
    },
    { 
        char: 'ノ', 
        romaji: 'no',
        videoId: '',
        examples: [
            { word: 'ノート', romaji: 'nooto', meaning: 'notebook' },
            { word: 'ノルマ', romaji: 'noruma', meaning: 'quota' },
            { word: 'ノベル', romaji: 'noberu', meaning: 'novel' }
        ]
    },
    { 
        char: 'ハ', 
        romaji: 'ha',
        videoId: '',
        examples: [
            { word: 'ハンバーガー', romaji: 'hanbaagaa', meaning: 'hamburger' },
            { word: 'ハンカチ', romaji: 'hankachi', meaning: 'handkerchief' },
            { word: 'ハンドル', romaji: 'handoru', meaning: 'handle' }
        ]
    },
    { 
        char: 'ヒ', 
        romaji: 'hi',
        videoId: '',
        examples: [
            { word: 'ヒーター', romaji: 'hiitaa', meaning: 'heater' },
            { word: 'ヒント', romaji: 'hinto', meaning: 'hint' },
            { word: 'ヒーロー', romaji: 'hiiroo', meaning: 'hero' }
        ]
    },
    { 
        char: 'フ', 
        romaji: 'fu',
        videoId: '',
        examples: [
            { word: 'フランス', romaji: 'furansu', meaning: 'France' },
            { word: 'フライパン', romaji: 'furaipan', meaning: 'frying pan' },
            { word: 'フルーツ', romaji: 'furuutsu', meaning: 'fruits' }
        ]
    },
    { 
        char: 'ヘ', 
        romaji: 'he',
        videoId: '',
        examples: [
            { word: 'ヘリコプター', romaji: 'herikoputaa', meaning: 'helicopter' },
            { word: 'ヘッドホン', romaji: 'heddohon', meaning: 'headphone' },
            { word: 'ヘルメット', romaji: 'herumetto', meaning: 'helmet' }
        ]
    },
    { 
        char: 'ホ', 
        romaji: 'ho',
        videoId: '',
        examples: [
            { word: 'ホテル', romaji: 'hoteru', meaning: 'hotel' },
            { word: 'ホーム', romaji: 'hoomu', meaning: 'home' },
            { word: 'ホワイト', romaji: 'howaito', meaning: 'white' }
        ]
    },
    { 
        char: 'マ', 
        romaji: 'ma',
        videoId: '',
        examples: [
            { word: 'マンション', romaji: 'manshon', meaning: 'apartment' },
            { word: 'マスク', romaji: 'masuku', meaning: 'mask' },
            { word: 'マフラー', romaji: 'mafuraa', meaning: 'muffler' }
        ]
    },
    { 
        char: 'ミ', 
        romaji: 'mi',
        videoId: '',
        examples: [
            { word: 'ミルク', romaji: 'miruku', meaning: 'milk' },
            { word: 'ミラー', romaji: 'miraa', meaning: 'mirror' },
            { word: 'ミニ', romaji: 'mini', meaning: 'mini' }
        ]
    },
    { 
        char: 'ム', 
        romaji: 'mu',
        videoId: '',
        examples: [
            { word: 'ムービー', romaji: 'muubii', meaning: 'movie' },
            { word: 'ムード', romaji: 'muudo', meaning: 'mood' },
            { word: 'ムース', romaji: 'muusu', meaning: 'mousse' }
        ]
    },
    { 
        char: 'メ', 
        romaji: 'me',
        videoId: '',
        examples: [
            { word: 'メニュー', romaji: 'menyuu', meaning: 'menu' },
            { word: 'メール', romaji: 'meeru', meaning: 'email' },
            { word: 'メモ', romaji: 'memo', meaning: 'memo' }
        ]
    },
    { 
        char: 'モ', 
        romaji: 'mo',
        videoId: '',
        examples: [
            { word: 'モダン', romaji: 'modan', meaning: 'modern' },
            { word: 'モニター', romaji: 'monitaa', meaning: 'monitor' },
            { word: 'モーター', romaji: 'mootaa', meaning: 'motor' }
        ]
    },
    { 
        char: 'ヤ', 
        romaji: 'ya',
        videoId: '',
        examples: [
            { word: 'ヤング', romaji: 'yangu', meaning: 'young' },
            { word: 'ヤード', romaji: 'yaado', meaning: 'yard' },
            { word: 'ヤンキー', romaji: 'yankii', meaning: 'yankee' }
        ]
    },
    { 
        char: 'ユ', 
        romaji: 'yu',
        videoId: '',
        examples: [
            { word: 'ユニーク', romaji: 'yuniiku', meaning: 'unique' },
            { word: 'ユーロ', romaji: 'yuuro', meaning: 'euro' },
            { word: 'ユニット', romaji: 'yunitto', meaning: 'unit' }
        ]
    },
    { 
        char: 'ヨ', 
        romaji: 'yo',
        videoId: '',
        examples: [
            { word: 'ヨーロッパ', romaji: 'yooroppa', meaning: 'Europe' },
            { word: 'ヨット', romaji: 'yotto', meaning: 'yacht' },
            { word: 'ヨーグルト', romaji: 'yooguruto', meaning: 'yogurt' }
        ]
    },
    { 
        char: 'ラ', 
        romaji: 'ra',
        videoId: '',
        examples: [
            { word: 'ラジオ', romaji: 'rajio', meaning: 'radio' },
            { word: 'ランチ', romaji: 'ranchi', meaning: 'lunch' },
            { word: 'ラッシュ', romaji: 'rasshu', meaning: 'rush' }
        ]
    },
    { 
        char: 'リ', 
        romaji: 'ri',
        videoId: '',
        examples: [
            { word: 'リモコン', romaji: 'rimokon', meaning: 'remote control' },
            { word: 'リズム', romaji: 'rizumu', meaning: 'rhythm' },
            { word: 'リボン', romaji: 'ribon', meaning: 'ribbon' }
        ]
    },
    { 
        char: 'ル', 
        romaji: 'ru',
        videoId: '',
        examples: [
            { word: 'ルール', romaji: 'ruuru', meaning: 'rule' },
            { word: 'ルーム', romaji: 'ruumu', meaning: 'room' },
            { word: 'ルート', romaji: 'ruuto', meaning: 'route' }
        ]
    },
    { 
        char: 'レ', 
        romaji: 're',
        videoId: '',
        examples: [
            { word: 'レストラン', romaji: 'resutoran', meaning: 'restaurant' },
            { word: 'レコード', romaji: 'rekoodo', meaning: 'record' },
            { word: 'レンズ', romaji: 'renzu', meaning: 'lens' }
        ]
    },
    { 
        char: 'ロ', 
        romaji: 'ro',
        videoId: '',
        examples: [
            { word: 'ロボット', romaji: 'robotto', meaning: 'robot' },
            { word: 'ロック', romaji: 'rokku', meaning: 'rock' },
            { word: 'ローマ', romaji: 'rooma', meaning: 'Rome' }
        ]
    },
    { 
        char: 'ワ', 
        romaji: 'wa',
        videoId: '',
        examples: [
            { word: 'ワイン', romaji: 'wain', meaning: 'wine' },
            { word: 'ワイシャツ', romaji: 'waishatsu', meaning: 'white shirt' },
            { word: 'ワット', romaji: 'watto', meaning: 'watt' }
        ]
    },
    { 
        char: 'ヲ', 
        romaji: 'wo',
        videoId: '',
        examples: [
            { word: 'ヲタク', romaji: 'wotaku', meaning: 'otaku' },
            { word: 'ヲタ芸', romaji: 'wotagei', meaning: 'otaku dance' },
            { word: 'ヲタ活', romaji: 'wotakatsu', meaning: 'otaku activity' }
        ]
    },
    { 
        char: 'ン', 
        romaji: 'n',
        videoId: '',
        examples: [
            { word: 'パン', romaji: 'pan', meaning: 'bread' },
            { word: 'リンゴ', romaji: 'ringo', meaning: 'apple' },
            { word: 'テンキ', romaji: 'tenki', meaning: 'weather' }
        ]
    }
];

const kanjiData = [
    {
        char: '日',
        romaji: 'nichi/hi',
        meaning: 'day/sun',
        videoId: '',
        examples: [
            { word: '日本', romaji: 'nihon', meaning: 'Japan' }
        ]
    },
    {
        char: '月',
        romaji: 'getsu/tsuki',
        meaning: 'month/moon',
        videoId: '',
        examples: [
            { word: '月曜日', romaji: 'getsuyoubi', meaning: 'Monday' }
        ]
    },
    {
        char: '水',
        romaji: 'sui/mizu',
        meaning: 'water',
        videoId: '',
        examples: [
            { word: '水曜日', romaji: 'suiyoubi', meaning: 'Wednesday' }
        ]
    },
    {
        char: '火',
        romaji: 'ka/hi',
        meaning: 'fire',
        videoId: '',
        examples: [
            { word: '火曜日', romaji: 'kayoubi', meaning: 'Tuesday' }
        ]
    },
    {
        char: '木',
        romaji: 'moku/ki',
        meaning: 'tree/wood',
        videoId: '',
        examples: [
            { word: '木曜日', romaji: 'mokuyoubi', meaning: 'Thursday' }
        ]
    },
    {
        char: '金',
        romaji: 'kin/kane',
        meaning: 'gold/money',
        videoId: '',
        examples: [
            { word: '金曜日', romaji: 'kinyoubi', meaning: 'Friday' }
        ]
    },
    {
        char: '土',
        romaji: 'do/tsuchi',
        meaning: 'earth/soil',
        videoId: '',
        examples: [
            { word: '土曜日', romaji: 'doyoubi', meaning: 'Saturday' }
        ]
    },
    {
        char: '人',
        romaji: 'jin/hito',
        meaning: 'person',
        videoId: '',
        examples: [
            { word: '日本人', romaji: 'nihonjin', meaning: 'Japanese person' }
        ]
    },
    {
        char: '大',
        romaji: 'dai/oo',
        meaning: 'big/large',
        videoId: '',
        examples: [
            { word: '大人', romaji: 'otona', meaning: 'adult' }
        ]
    },
    {
        char: '小',
        romaji: 'shou/chiisai',
        meaning: 'small',
        videoId: '',
        examples: [
            { word: '小学生', romaji: 'shougakusei', meaning: 'elementary school student' }
        ]
    },
    {
        char: '中',
        romaji: 'chuu/naka',
        meaning: 'middle/center',
        videoId: '',
        examples: [
            { word: '中国', romaji: 'chuugoku', meaning: 'China' }
        ]
    },
    {
        char: '上',
        romaji: 'jou/ue',
        meaning: 'up/above',
        videoId: '',
        examples: [
            { word: '上手', romaji: 'jouzu', meaning: 'skillful' }
        ]
    },
    {
        char: '下',
        romaji: 'ka/shita',
        meaning: 'down/below',
        videoId: '',
        examples: [
            { word: '下手', romaji: 'heta', meaning: 'unskilled' }
        ]
    },
    {
        char: '年',
        romaji: 'nen/toshi',
        meaning: 'year',
        videoId: '',
        examples: [
            { word: '今年', romaji: 'kotoshi', meaning: 'this year' }
        ]
    },
    {
        char: '生',
        romaji: 'sei/iki',
        meaning: 'life/live',
        videoId: '',
        examples: [
            { word: '学生', romaji: 'gakusei', meaning: 'student' }
        ]
    },
    {
        char: '学',
        romaji: 'gaku/manabu',
        meaning: 'study/learn',
        videoId: '',
        examples: [
            { word: '学校', romaji: 'gakkou', meaning: 'school' }
        ]
    },
    {
        char: '先',
        romaji: 'sen/saki',
        meaning: 'previous/ahead',
        videoId: '',
        examples: [
            { word: '先生', romaji: 'sensei', meaning: 'teacher' }
        ]
    },
    {
        char: '見',
        romaji: 'ken/miru',
        meaning: 'see/look',
        videoId: '',
        examples: [
            { word: '見る', romaji: 'miru', meaning: 'to see' }
        ]
    },
    {
        char: '聞',
        romaji: 'bun/kiku',
        meaning: 'hear/listen',
        videoId: '',
        examples: [
            { word: '聞く', romaji: 'kiku', meaning: 'to listen' }
        ]
    },
    {
        char: '話',
        romaji: 'wa/hanashi',
        meaning: 'speak/talk',
        videoId: '',
        examples: [
            { word: '話す', romaji: 'hanasu', meaning: 'to speak' }
        ]
    },
    {
        char: '読',
        romaji: 'doku/yomu',
        meaning: 'read',
        videoId: '',
        examples: [
            { word: '読む', romaji: 'yomu', meaning: 'to read' }
        ]
    },
    {
        char: '書',
        romaji: 'sho/kaku',
        meaning: 'write',
        videoId: '',
        examples: [
            { word: '書く', romaji: 'kaku', meaning: 'to write' }
        ]
    },
    {
        char: '食',
        romaji: 'shoku/tabe',
        meaning: 'eat/food',
        videoId: '',
        examples: [
            { word: '食べる', romaji: 'taberu', meaning: 'to eat' }
        ]
    },
    {
        char: '飲',
        romaji: 'in/nomu',
        meaning: 'drink',
        videoId: '',
        examples: [
            { word: '飲む', romaji: 'nomu', meaning: 'to drink' }
        ]
    },
    {
        char: '行',
        romaji: 'kou/iku',
        meaning: 'go',
        videoId: '',
        examples: [
            { word: '行く', romaji: 'iku', meaning: 'to go' }
        ]
    },
    {
        char: '来',
        romaji: 'rai/kuru',
        meaning: 'come',
        videoId: '',
        examples: [
            { word: '来る', romaji: 'kuru', meaning: 'to come' }
        ]
    },
    {
        char: '帰',
        romaji: 'ki/kaeru',
        meaning: 'return',
        videoId: '',
        examples: [
            { word: '帰る', romaji: 'kaeru', meaning: 'to return' }
        ]
    },
    {
        char: '買',
        romaji: 'bai/kau',
        meaning: 'buy',
        videoId: '',
        examples: [
            { word: '買う', romaji: 'kau', meaning: 'to buy' }
        ]
    },
    {
        char: '売',
        romaji: 'bai/uru',
        meaning: 'sell',
        videoId: '',
        examples: [
            { word: '売る', romaji: 'uru', meaning: 'to sell' }
        ]
    },
    {
        char: '電',
        romaji: 'den',
        meaning: 'electricity',
        videoId: '',
        examples: [
            { word: '電気', romaji: 'denki', meaning: 'electricity' }
        ]
    },
    {
        char: '車',
        romaji: 'sha/kuruma',
        meaning: 'car',
        videoId: '',
        examples: [
            { word: '電車', romaji: 'densha', meaning: 'train' }
        ]
    },
    {
        char: '駅',
        romaji: 'eki',
        meaning: 'station',
        videoId: '',
        examples: [
            { word: '駅前', romaji: 'ekimae', meaning: 'in front of station' }
        ]
    },
    {
        char: '店',
        romaji: 'ten/mise',
        meaning: 'shop/store',
        videoId: '',
        examples: [
            { word: '本屋', romaji: 'honya', meaning: 'bookstore' }
        ]
    },
    {
        char: '社',
        romaji: 'sha/yashiro',
        meaning: 'company/shrine',
        videoId: '',
        examples: [
            { word: '会社', romaji: 'kaisha', meaning: 'company' }
        ]
    },
    {
        char: '会',
        romaji: 'kai/au',
        meaning: 'meet/meeting',
        videoId: '',
        examples: [
            { word: '会社', romaji: 'kaisha', meaning: 'company' }
        ]
    },
    {
        char: '工',
        romaji: 'kou',
        meaning: 'work/industry',
        videoId: '',
        examples: [
            { word: '工場', romaji: 'koujou', meaning: 'factory' }
        ]
    },
    {
        char: '場',
        romaji: 'jou/ba',
        meaning: 'place',
        videoId: '',
        examples: [
            { word: '工場', romaji: 'koujou', meaning: 'factory' }
        ]
    },
    {
        char: '校',
        romaji: 'kou',
        meaning: 'school',
        videoId: '',
        examples: [
            { word: '学校', romaji: 'gakkou', meaning: 'school' }
        ]
    },
    {
        char: '園',
        romaji: 'en/sono',
        meaning: 'garden',
        videoId: '',
        examples: [
            { word: '幼稚園', romaji: 'youchien', meaning: 'kindergarten' }
        ]
    },
    {
        char: '病',
        romaji: 'byou/yamai',
        meaning: 'illness',
        videoId: '',
        examples: [
            { word: '病院', romaji: 'byouin', meaning: 'hospital' }
        ]
    },
    {
        char: '院',
        romaji: 'in',
        meaning: 'institution',
        videoId: '',
        examples: [
            { word: '病院', romaji: 'byouin', meaning: 'hospital' }
        ]
    },
    {
        char: '館',
        romaji: 'kan/tate',
        meaning: 'building',
        videoId: '',
        examples: [
            { word: '図書館', romaji: 'toshokan', meaning: 'library' }
        ]
    },
    {
        char: '図',
        romaji: 'zu/hakaru',
        meaning: 'map/diagram',
        videoId: '',
        examples: [
            { word: '図書館', romaji: 'toshokan', meaning: 'library' }
        ]
    },
    {
        char: '書',
        romaji: 'sho/kaku',
        meaning: 'write',
        videoId: '',
        examples: [
            { word: '図書館', romaji: 'toshokan', meaning: 'library' }
        ]
    }
];

let currentIndex = 0;
let currentMode = 'hiragana';
let currentData = hiraganaData;

// DOM Elements
const card = document.querySelector('.card');
const japaneseChar = document.querySelector('.japanese');
const romajiText = document.querySelector('.romaji');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const hiraganaBtn = document.getElementById('hiraganaBtn');
const katakanaBtn = document.getElementById('katakanaBtn');
const kanjiBtn = document.getElementById('kanjiBtn');

// Create example words container
const cardFront = document.querySelector('.card-front');
const examplesContainer = document.createElement('div');
examplesContainer.className = 'examples-container';
cardFront.appendChild(examplesContainer);

// Update card content
function updateCard() {
    const currentChar = currentData[currentIndex];
    japaneseChar.textContent = currentChar.char;
    
    // Update romaji display based on mode
    if (currentMode === 'kanji') {
        romajiText.textContent = `${currentChar.romaji} (${currentChar.meaning})`;
    } else {
        romajiText.textContent = currentChar.romaji;
    }
    
    // Update examples
    examplesContainer.innerHTML = '';
    currentChar.examples.forEach(example => {
        const exampleDiv = document.createElement('div');
        exampleDiv.className = 'example-word';
        exampleDiv.innerHTML = `
            <span class="word">${example.word}</span>
            <span class="word-romaji">${example.romaji}</span>
            <span class="word-meaning">${example.meaning}</span>
        `;
        examplesContainer.appendChild(exampleDiv);
    });
}

// Switch between modes
function switchMode(mode) {
    currentMode = mode;
    currentData = mode === 'hiragana' ? hiraganaData : 
                 mode === 'katakana' ? katakanaData : 
                 kanjiData;
    currentIndex = 0;
    updateCard();
    
    // Update active button
    hiraganaBtn.classList.toggle('active', mode === 'hiragana');
    katakanaBtn.classList.toggle('active', mode === 'katakana');
    kanjiBtn.classList.toggle('active', mode === 'kanji');
}

// Navigation functions
function nextCard() {
    card.classList.add('slide-left');
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % currentData.length;
        updateCard();
        card.classList.remove('slide-left');
    }, 500);
}

function prevCard() {
    card.classList.add('slide-right');
    setTimeout(() => {
        currentIndex = (currentIndex - 1 + currentData.length) % currentData.length;
        updateCard();
        card.classList.remove('slide-right');
    }, 500);
}

// Event Listeners
prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);
hiraganaBtn.addEventListener('click', () => switchMode('hiragana'));
katakanaBtn.addEventListener('click', () => switchMode('katakana'));
kanjiBtn.addEventListener('click', () => switchMode('kanji'));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevCard();
    } else if (e.key === 'ArrowRight') {
        nextCard();
    }
});

// Add touch swipe functionality
let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 50; // Minimum distance for swipe

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
    const diff = touchEndX - touchStartX;
    
    // Show swipe indicator
    const leftIndicator = document.querySelector('.swipe-indicator.left');
    const rightIndicator = document.querySelector('.swipe-indicator.right');
    
    if (diff > SWIPE_THRESHOLD) {
        rightIndicator?.classList.add('visible');
        leftIndicator?.classList.remove('visible');
    } else if (diff < -SWIPE_THRESHOLD) {
        leftIndicator?.classList.add('visible');
        rightIndicator?.classList.remove('visible');
    } else {
        leftIndicator?.classList.remove('visible');
        rightIndicator?.classList.remove('visible');
    }
}

function handleTouchEnd() {
    const diff = touchEndX - touchStartX;
    
    // Hide swipe indicators
    document.querySelectorAll('.swipe-indicator').forEach(indicator => {
        indicator.classList.remove('visible');
    });
    
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff > 0) {
            // Swipe right - go to previous
            if (currentIndex > 0) {
                showPreviousCard();
            }
        } else {
            // Swipe left - go to next
            if (currentIndex < currentData.length - 1) {
                showNextCard();
            }
        }
    }
}

// Add swipe indicators to the card container
function addSwipeIndicators() {
    const cardContainer = document.querySelector('.card-container');
    
    const leftIndicator = document.createElement('div');
    leftIndicator.className = 'swipe-indicator left';
    leftIndicator.innerHTML = '←';
    
    const rightIndicator = document.createElement('div');
    rightIndicator.className = 'swipe-indicator right';
    rightIndicator.innerHTML = '→';
    
    cardContainer.appendChild(leftIndicator);
    cardContainer.appendChild(rightIndicator);
}

// Initialize touch events
function initializeTouchEvents() {
    const cardContainer = document.querySelector('.card-container');
    
    cardContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    cardContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
    cardContainer.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    addSwipeIndicators();
}

// Call this after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // ... existing initialization code ...
    
    initializeTouchEvents();
});

// Initialize
updateCard();

// Stroke Order Functionality
const strokeOrderBtn = document.querySelector('.stroke-order-btn');
const strokeOrderPopup = document.querySelector('.stroke-order-popup');
const closePopupBtn = document.querySelector('.close-popup');
const strokeOrderContainer = document.querySelector('.stroke-order-container');

// Toggle popup
strokeOrderBtn.addEventListener('click', () => {
    strokeOrderPopup.classList.add('active');
    updateStrokeOrder();
});

closePopupBtn.addEventListener('click', () => {
    strokeOrderPopup.classList.remove('active');
});

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    if (!strokeOrderPopup.contains(e.target) && !strokeOrderBtn.contains(e.target)) {
        strokeOrderPopup.classList.remove('active');
    }
});

// Update stroke order content
function updateStrokeOrder() {
    const currentChar = currentData[currentIndex];
    strokeOrderContainer.innerHTML = ''; // Clear previous content
    
    // Get video container and update with current character's video
    const videoContainer = document.querySelector('.video-container');
    
    // Check if the character has a video ID
    if (currentChar.videoId) {
        videoContainer.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${currentChar.videoId}" 
                title="Stroke Order Video for ${currentChar.char}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    } else {
        // Show placeholder if no video is available
        videoContainer.innerHTML = `
            <div class="video-placeholder">
                <i class="fab fa-youtube"></i>
                <p>No video available for ${currentChar.char}</p>
            </div>
        `;
    }
} 