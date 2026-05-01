/**
 * 出店スケジュールデータ
 *
 * ▼ 追加・変更・削除の方法
 *   { } のブロックを1件分として、追加・編集してください。
 *
 * ▼ 各項目の説明
 *   date    : 日付（例: "4月5日（土）"）
 *   place   : 場所（例: "〇〇公園マルシェ（渋谷区）"）
 *   time    : 時間（例: "10:00 〜 17:00"）
 *   isEvent : イベントタグを表示する場合は true、しない場合は false
 *
 * ▼ 件数は何件でも追加できます（, で区切ってください）
 */
const SCHEDULE = [
  {
    date: "5月2日（土）",
    place: "大崎公園",
    time: "10:00 〜 16:00",
    isEvent: false
  },
  {
    date: "5月3日（日）",
    place: "モラージュ菖蒲",
    time: "11:00 〜 17:00",
    isEvent: false
  },
  {
    date: "5月5日（火）",
    place: "膝子こいのぼり祭（さいたま市見沼区）",
    time: "10:00 〜 14:00",
    isEvent: true
  },
  {
    date: "5月9日（土）",
    place: "こつなマルシェ（春日部夢の森公園）",
    time: "10:00 〜 15:00",
    isEvent: true
  },
  {
    date: "5月10日（日）",
    place: "こつなマルシェ（予備日）",
    time: "10:00 〜 15:00",
    isEvent: true
  },
  {
    date: "5月16日（土）",
    place: "WATSUストリートマルシェ（岩槻駅周辺）",
    time: "11:00 〜 16:00",
    isEvent: true
  },
  {
    date: "5月17日（日）",
    place: "たかもとヘルスパーク（越谷市）",
    time: "10:00 〜 16:00",
    isEvent: false
  },
  {
    date: "5月23日（土）",
    place: "たかもとヘルスパーク（越谷市）",
    time: "10:00 〜 16:00",
    isEvent: false
  },
  {
    date: "5月24日（日）",
    place: "むさしフェス2026（さいたま市南区）",
    time: "10:00 〜 16:00",
    isEvent: true
  },
  {
    date: "5月31日（日）",
    place: "アニメプロジェクトin大泉（東京都練馬区）",
    time: "10:00 〜 16:30",
    isEvent: true
  }
];
