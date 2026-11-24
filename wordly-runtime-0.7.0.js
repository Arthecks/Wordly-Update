// Wordly runtime API 1
module.exports = (function () {
// --- Modül yükleyici (CommonJS benzeri) ---
const __wordlyModules = {};
const __wordlyCache = {};
function __wordlyRequire(request) {
  const name = request.split("/").pop().replace(/\.js$/, "");
  if (__wordlyCache[name]) return __wordlyCache[name].exports;
  const factory = __wordlyModules[name];
  if (!factory) throw new Error("Wordly: modül bulunamadı: " + request);
  const module = { exports: {} };
  __wordlyCache[name] = module;
  factory(module, module.exports, __wordlyRequire);
  return module.exports;
}

// --- Üretilen modül: appInfo ---
__wordlyModules["appInfo"] = function (module, exports, require) {
module.exports = {"version":"0.7.0"};
};

// --- Üretilen modül: wordLists (data/*.json) ---
__wordlyModules["wordLists"] = function (module, exports, require) {
module.exports = [
  {
    "category": "irregular_verbs",
    "language": "en-tr",
    "total": 100,
    "verbs": [
      {"id":1,"v1":"be","v2":"was/were","v3":"been","turkishMeaning":"olmak","exampleSentence":"I want to be a good student.","exampleTranslation":"İyi bir öğrenci olmak istiyorum.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":2,"v1":"have","v2":"had","v3":"had","turkishMeaning":"sahip olmak","exampleSentence":"I have a lot of homework today.","exampleTranslation":"Bugün çok ödevim var.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":3,"v1":"do","v2":"did","v3":"done","turkishMeaning":"yapmak","exampleSentence":"I do my homework after school.","exampleTranslation":"Ödevimi okuldan sonra yaparım.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":4,"v1":"go","v2":"went","v3":"gone","turkishMeaning":"gitmek","exampleSentence":"I go to school every morning.","exampleTranslation":"Her sabah okula giderim.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":5,"v1":"get","v2":"got","v3":"got/gotten","turkishMeaning":"almak, edinmek","exampleSentence":"I got a message from my friend.","exampleTranslation":"Arkadaşımdan bir mesaj aldım.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":6,"v1":"make","v2":"made","v3":"made","turkishMeaning":"yapmak, üretmek","exampleSentence":"She makes breakfast every day.","exampleTranslation":"O her gün kahvaltı hazırlar.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":7,"v1":"know","v2":"knew","v3":"known","turkishMeaning":"bilmek, tanımak","exampleSentence":"I know the answer.","exampleTranslation":"Cevabı biliyorum.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":8,"v1":"think","v2":"thought","v3":"thought","turkishMeaning":"düşünmek","exampleSentence":"I think this is a good idea.","exampleTranslation":"Bunun iyi bir fikir olduğunu düşünüyorum.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":9,"v1":"take","v2":"took","v3":"taken","turkishMeaning":"almak, götürmek","exampleSentence":"Please take your notebook.","exampleTranslation":"Lütfen defterini al.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":10,"v1":"see","v2":"saw","v3":"seen","turkishMeaning":"görmek","exampleSentence":"I saw him yesterday.","exampleTranslation":"Onu dün gördüm.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":11,"v1":"come","v2":"came","v3":"come","turkishMeaning":"gelmek","exampleSentence":"Please come here.","exampleTranslation":"Lütfen buraya gel.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":12,"v1":"find","v2":"found","v3":"found","turkishMeaning":"bulmak","exampleSentence":"I found my keys.","exampleTranslation":"Anahtarlarımı buldum.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":13,"v1":"give","v2":"gave","v3":"given","turkishMeaning":"vermek","exampleSentence":"Can you give me a hand?","exampleTranslation":"Bana yardım edebilir misin?","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":14,"v1":"tell","v2":"told","v3":"told","turkishMeaning":"anlatmak, söylemek","exampleSentence":"Tell me the truth.","exampleTranslation":"Bana gerçeği söyle.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":15,"v1":"feel","v2":"felt","v3":"felt","turkishMeaning":"hissetmek","exampleSentence":"I feel better today.","exampleTranslation":"Bugün kendimi daha iyi hissediyorum.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":16,"v1":"become","v2":"became","v3":"become","turkishMeaning":"olmak, hâline gelmek","exampleSentence":"She wants to become a teacher.","exampleTranslation":"Öğretmen olmak istiyor.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":17,"v1":"leave","v2":"left","v3":"left","turkishMeaning":"ayrılmak, terk etmek","exampleSentence":"We leave home at eight.","exampleTranslation":"Saat sekizde evden ayrılırız.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":18,"v1":"put","v2":"put","v3":"put","turkishMeaning":"koymak","exampleSentence":"Put the book on the table.","exampleTranslation":"Kitabı masanın üzerine koy.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":19,"v1":"mean","v2":"meant","v3":"meant","turkishMeaning":"anlamına gelmek","exampleSentence":"What does this word mean?","exampleTranslation":"Bu kelime ne anlama geliyor?","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":20,"v1":"keep","v2":"kept","v3":"kept","turkishMeaning":"tutmak, saklamak","exampleSentence":"Keep your phone in your bag.","exampleTranslation":"Telefonunu çantanda tut.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":21,"v1":"let","v2":"let","v3":"let","turkishMeaning":"izin vermek","exampleSentence":"Let me help you.","exampleTranslation":"Sana yardım etmeme izin ver.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":22,"v1":"begin","v2":"began","v3":"begun","turkishMeaning":"başlamak","exampleSentence":"The lesson begins at nine.","exampleTranslation":"Ders saat dokuzda başlar.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":23,"v1":"show","v2":"showed","v3":"shown","turkishMeaning":"göstermek","exampleSentence":"Can you show me the way?","exampleTranslation":"Bana yolu gösterebilir misin?","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":24,"v1":"hear","v2":"heard","v3":"heard","turkishMeaning":"duymak","exampleSentence":"I can hear music.","exampleTranslation":"Müzik duyabiliyorum.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":25,"v1":"run","v2":"ran","v3":"run","turkishMeaning":"koşmak","exampleSentence":"He runs in the park.","exampleTranslation":"O parkta koşar.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":26,"v1":"hold","v2":"held","v3":"held","turkishMeaning":"tutmak","exampleSentence":"Hold my hand.","exampleTranslation":"Elimi tut.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":27,"v1":"bring","v2":"brought","v3":"brought","turkishMeaning":"getirmek","exampleSentence":"Please bring your book.","exampleTranslation":"Lütfen kitabını getir.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":28,"v1":"write","v2":"wrote","v3":"written","turkishMeaning":"yazmak","exampleSentence":"I write in my notebook.","exampleTranslation":"Defterime yazarım.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":29,"v1":"sit","v2":"sat","v3":"sat","turkishMeaning":"oturmak","exampleSentence":"Please sit here.","exampleTranslation":"Lütfen buraya otur.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":30,"v1":"stand","v2":"stood","v3":"stood","turkishMeaning":"ayakta durmak","exampleSentence":"We stand near the door.","exampleTranslation":"Kapının yanında duruyoruz.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":31,"v1":"lose","v2":"lost","v3":"lost","turkishMeaning":"kaybetmek","exampleSentence":"Don't lose your keys.","exampleTranslation":"Anahtarlarını kaybetme.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":32,"v1":"pay","v2":"paid","v3":"paid","turkishMeaning":"ödemek","exampleSentence":"I paid for lunch.","exampleTranslation":"Öğle yemeğinin parasını ödedim.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":33,"v1":"meet","v2":"met","v3":"met","turkishMeaning":"tanışmak, buluşmak","exampleSentence":"I met my friend yesterday.","exampleTranslation":"Dün arkadaşımla buluştum.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":34,"v1":"set","v2":"set","v3":"set","turkishMeaning":"ayarlamak, koymak","exampleSentence":"Set the alarm for seven.","exampleTranslation":"Alarmı yediye kur.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":35,"v1":"lead","v2":"led","v3":"led","turkishMeaning":"yönetmek, önderlik etmek","exampleSentence":"She leads the team.","exampleTranslation":"Takıma liderlik ediyor.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":36,"v1":"understand","v2":"understood","v3":"understood","turkishMeaning":"anlamak","exampleSentence":"I understand the question.","exampleTranslation":"Soruyu anlıyorum.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":37,"v1":"speak","v2":"spoke","v3":"spoken","turkishMeaning":"konuşmak","exampleSentence":"I speak English at school.","exampleTranslation":"Okulda İngilizce konuşurum.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":38,"v1":"sleep","v2":"slept","v3":"slept","turkishMeaning":"uyumak","exampleSentence":"I sleep for eight hours.","exampleTranslation":"Sekiz saat uyurum.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":39,"v1":"teach","v2":"taught","v3":"taught","turkishMeaning":"öğretmek","exampleSentence":"They teach English here.","exampleTranslation":"Burada İngilizce öğretiyorlar.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":40,"v1":"drive","v2":"drove","v3":"driven","turkishMeaning":"sürmek","exampleSentence":"My father drives to work.","exampleTranslation":"Babam işe arabayla gider.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":41,"v1":"break","v2":"broke","v3":"broken","turkishMeaning":"kırmak","exampleSentence":"Be careful not to break the glass.","exampleTranslation":"Bardağı kırmamaya dikkat et.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":42,"v1":"choose","v2":"chose","v3":"chosen","turkishMeaning":"seçmek","exampleSentence":"You can choose one book.","exampleTranslation":"Bir kitap seçebilirsin.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":43,"v1":"wear","v2":"wore","v3":"worn","turkishMeaning":"giymek","exampleSentence":"I wear a uniform at school.","exampleTranslation":"Okulda üniforma giyerim.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":44,"v1":"catch","v2":"caught","v3":"caught","turkishMeaning":"yakalamak","exampleSentence":"I caught the bus.","exampleTranslation":"Otobüse yetiştim.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":45,"v1":"fight","v2":"fought","v3":"fought","turkishMeaning":"savaşmak, kavga etmek","exampleSentence":"They never fight.","exampleTranslation":"Onlar asla kavga etmez.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":46,"v1":"forget","v2":"forgot","v3":"forgotten","turkishMeaning":"unutmak","exampleSentence":"Don't forget your homework.","exampleTranslation":"Ödevini unutma.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":47,"v1":"forgive","v2":"forgave","v3":"forgiven","turkishMeaning":"affetmek","exampleSentence":"I hope you can forgive me.","exampleTranslation":"Umarım beni affedebilirsin.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":48,"v1":"freeze","v2":"froze","v3":"frozen","turkishMeaning":"donmak, dondurmak","exampleSentence":"Water freezes in cold weather.","exampleTranslation":"Soğuk havada su donar.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":49,"v1":"fly","v2":"flew","v3":"flown","turkishMeaning":"uçmak","exampleSentence":"Birds fly in the sky.","exampleTranslation":"Kuşlar gökyüzünde uçar.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":50,"v1":"draw","v2":"drew","v3":"drawn","turkishMeaning":"çizmek","exampleSentence":"She draws very well.","exampleTranslation":"O çok güzel resim çizer.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":51,"v1":"sing","v2":"sang","v3":"sung","turkishMeaning":"şarkı söylemek","exampleSentence":"We sing together.","exampleTranslation":"Birlikte şarkı söyleriz.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":52,"v1":"swim","v2":"swam","v3":"swum","turkishMeaning":"yüzmek","exampleSentence":"I swim every weekend.","exampleTranslation":"Her hafta sonu yüzerim.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":53,"v1":"ride","v2":"rode","v3":"ridden","turkishMeaning":"binmek, sürmek","exampleSentence":"He rides his bike to school.","exampleTranslation":"Okula bisikletiyle gider.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":54,"v1":"rise","v2":"rose","v3":"risen","turkishMeaning":"yükselmek","exampleSentence":"The sun rises in the east.","exampleTranslation":"Güneş doğudan doğar.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":55,"v1":"ring","v2":"rang","v3":"rung","turkishMeaning":"çalmak (zil/telefon)","exampleSentence":"The phone rang twice.","exampleTranslation":"Telefon iki kez çaldı.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":56,"v1":"shake","v2":"shook","v3":"shaken","turkishMeaning":"sallamak","exampleSentence":"Shake the bottle before use.","exampleTranslation":"Kullanmadan önce şişeyi çalkala.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":57,"v1":"steal","v2":"stole","v3":"stolen","turkishMeaning":"çalmak","exampleSentence":"It is wrong to steal.","exampleTranslation":"Hırsızlık yapmak yanlıştır.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":58,"v1":"throw","v2":"threw","v3":"thrown","turkishMeaning":"fırlatmak","exampleSentence":"Throw the ball to me.","exampleTranslation":"Topu bana at.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":59,"v1":"wake","v2":"woke","v3":"woken","turkishMeaning":"uyanmak, uyandırmak","exampleSentence":"I wake up early.","exampleTranslation":"Erken uyanırım.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":60,"v1":"blow","v2":"blew","v3":"blown","turkishMeaning":"üflemek, esmek","exampleSentence":"The wind blows strongly.","exampleTranslation":"Rüzgâr kuvvetli eser.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":61,"v1":"bite","v2":"bit","v3":"bitten","turkishMeaning":"ısırmak","exampleSentence":"Some insects bite.","exampleTranslation":"Bazı böcekler ısırır.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":62,"v1":"hide","v2":"hid","v3":"hidden","turkishMeaning":"saklanmak, gizlemek","exampleSentence":"The child likes to hide.","exampleTranslation":"Çocuk saklanmayı sever.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":63,"v1":"hit","v2":"hit","v3":"hit","turkishMeaning":"vurmak","exampleSentence":"He hit the ball.","exampleTranslation":"Topa vurdu.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":64,"v1":"hurt","v2":"hurt","v3":"hurt","turkishMeaning":"incitmek, acıtmak","exampleSentence":"My leg hurts.","exampleTranslation":"Bacağım ağrıyor.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":65,"v1":"cost","v2":"cost","v3":"cost","turkishMeaning":"mal olmak, fiyatı olmak","exampleSentence":"This book costs ten dollars.","exampleTranslation":"Bu kitap on dolar.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":66,"v1":"shut","v2":"shut","v3":"shut","turkishMeaning":"kapatmak","exampleSentence":"Please shut the door.","exampleTranslation":"Lütfen kapıyı kapat.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":67,"v1":"sell","v2":"sold","v3":"sold","turkishMeaning":"satmak","exampleSentence":"They sell fresh bread.","exampleTranslation":"Taze ekmek satıyorlar.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":68,"v1":"feed","v2":"fed","v3":"fed","turkishMeaning":"beslemek","exampleSentence":"I feed my cat every morning.","exampleTranslation":"Kedimi her sabah beslerim.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":69,"v1":"lend","v2":"lent","v3":"lent","turkishMeaning":"ödünç vermek","exampleSentence":"Can you lend me a pen?","exampleTranslation":"Bana kalem ödünç verebilir misin?","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":70,"v1":"borrow","v2":"borrowed","v3":"borrowed","turkishMeaning":"ödünç almak","exampleSentence":"Can I borrow your dictionary?","exampleTranslation":"Sözlüğünü ödünç alabilir miyim?","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":71,"v1":"learn","v2":"learned/learnt","v3":"learned/learnt","turkishMeaning":"öğrenmek","exampleSentence":"I learn new words every day.","exampleTranslation":"Her gün yeni kelimeler öğrenirim.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":72,"v1":"dream","v2":"dreamed/dreamt","v3":"dreamed/dreamt","turkishMeaning":"rüya görmek, hayal etmek","exampleSentence":"I dream about travelling.","exampleTranslation":"Seyahat etmeyi hayal ediyorum.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":73,"v1":"burn","v2":"burned/burnt","v3":"burned/burnt","turkishMeaning":"yanmak, yakmak","exampleSentence":"Be careful not to burn the food.","exampleTranslation":"Yemeği yakmamaya dikkat et.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":74,"v1":"smell","v2":"smelled/smelt","v3":"smelled/smelt","turkishMeaning":"koklamak, kokmak","exampleSentence":"These flowers smell nice.","exampleTranslation":"Bu çiçekler güzel kokuyor.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":75,"v1":"spell","v2":"spelled/spelt","v3":"spelled/spelt","turkishMeaning":"hecelemek","exampleSentence":"Can you spell your name?","exampleTranslation":"Adını harf harf söyleyebilir misin?","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":76,"v1":"sweep","v2":"swept","v3":"swept","turkishMeaning":"süpürmek","exampleSentence":"I sweep the floor on Saturdays.","exampleTranslation":"Cumartesileri yeri süpürürüm.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":77,"v1":"dig","v2":"dug","v3":"dug","turkishMeaning":"kazmak","exampleSentence":"They dig a hole in the garden.","exampleTranslation":"Bahçede bir çukur kazarlar.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":78,"v1":"stick","v2":"stuck","v3":"stuck","turkishMeaning":"yapışmak, batırmak","exampleSentence":"The label sticks to the box.","exampleTranslation":"Etiket kutuya yapışır.","level":"A2","category":"irregular_verbs","source":"image"},
      {"id":79,"v1":"strike","v2":"struck","v3":"struck","turkishMeaning":"vurmak, çarpmak","exampleSentence":"Lightning can strike a tree.","exampleTranslation":"Yıldırım bir ağaca çarpabilir.","level":"B1","category":"irregular_verbs","source":"image"},
      {"id":80,"v1":"build","v2":"built","v3":"built","turkishMeaning":"inşa etmek","exampleSentence":"They built a new school.","exampleTranslation":"Yeni bir okul inşa ettiler.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":81,"v1":"buy","v2":"bought","v3":"bought","turkishMeaning":"satın almak","exampleSentence":"I bought a new notebook.","exampleTranslation":"Yeni bir defter satın aldım.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":82,"v1":"send","v2":"sent","v3":"sent","turkishMeaning":"göndermek","exampleSentence":"I sent her an email.","exampleTranslation":"Ona bir e-posta gönderdim.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":83,"v1":"spend","v2":"spent","v3":"spent","turkishMeaning":"harcamak, vakit geçirmek","exampleSentence":"I spend time with my family.","exampleTranslation":"Ailemle vakit geçiririm.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":84,"v1":"grow","v2":"grew","v3":"grown","turkishMeaning":"büyümek, yetiştirmek","exampleSentence":"Plants grow in the spring.","exampleTranslation":"Bitkiler ilkbaharda büyür.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":85,"v1":"fall","v2":"fell","v3":"fallen","turkishMeaning":"düşmek","exampleSentence":"Leaves fall in autumn.","exampleTranslation":"Sonbaharda yapraklar düşer.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":86,"v1":"win","v2":"won","v3":"won","turkishMeaning":"kazanmak","exampleSentence":"Our team won the game.","exampleTranslation":"Takımımız maçı kazandı.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":87,"v1":"eat","v2":"ate","v3":"eaten","turkishMeaning":"yemek","exampleSentence":"We ate dinner together.","exampleTranslation":"Birlikte akşam yemeği yedik.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":88,"v1":"drink","v2":"drank","v3":"drunk","turkishMeaning":"içmek","exampleSentence":"I drink water every day.","exampleTranslation":"Her gün su içerim.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":89,"v1":"lay","v2":"laid","v3":"laid","turkishMeaning":"yatırmak, sermek","exampleSentence":"Please lay the papers on the desk.","exampleTranslation":"Lütfen kâğıtları masanın üzerine koy.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":90,"v1":"beat","v2":"beat","v3":"beaten","turkishMeaning":"yenmek, vurmak","exampleSentence":"Our team beat the champions.","exampleTranslation":"Takımımız şampiyonları yendi.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":91,"v1":"tear","v2":"tore","v3":"torn","turkishMeaning":"yırtmak","exampleSentence":"Be careful not to tear the page.","exampleTranslation":"Sayfayı yırtmamaya dikkat et.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":92,"v1":"swear","v2":"swore","v3":"sworn","turkishMeaning":"yemin etmek, küfretmek","exampleSentence":"He swore to tell the truth.","exampleTranslation":"Gerçeği söyleyeceğine yemin etti.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":93,"v1":"sink","v2":"sank","v3":"sunk","turkishMeaning":"batmak, batırmak","exampleSentence":"The stone sank to the bottom.","exampleTranslation":"Taş dibe battı.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":94,"v1":"shine","v2":"shone","v3":"shone","turkishMeaning":"parlamak","exampleSentence":"The sun shines brightly.","exampleTranslation":"Güneş parlak bir şekilde parlar.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":95,"v1":"slide","v2":"slid","v3":"slid","turkishMeaning":"kaymak, kaydırmak","exampleSentence":"The children slide down the hill.","exampleTranslation":"Çocuklar tepeden aşağı kayar.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":96,"v1":"weep","v2":"wept","v3":"wept","turkishMeaning":"ağlamak","exampleSentence":"The character wept quietly.","exampleTranslation":"Karakter sessizce ağladı.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":97,"v1":"lie","v2":"lay","v3":"lain","turkishMeaning":"uzanmak","exampleSentence":"I like to lie on the sofa.","exampleTranslation":"Kanepede uzanmayı severim.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":98,"v1":"light","v2":"lit","v3":"lit","turkishMeaning":"yakmak, aydınlatmak","exampleSentence":"Please light the candle.","exampleTranslation":"Lütfen mumu yak.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":99,"v1":"quit","v2":"quit","v3":"quit","turkishMeaning":"bırakmak, vazgeçmek","exampleSentence":"He quit his job last year.","exampleTranslation":"Geçen yıl işinden ayrıldı.","level":"B1","category":"irregular_verbs","source":"added"},
      {"id":100,"v1":"seek","v2":"sought","v3":"sought","turkishMeaning":"aramak","exampleSentence":"They seek a better solution.","exampleTranslation":"Daha iyi bir çözüm arıyorlar.","level":"B1","category":"irregular_verbs","source":"added"}
    ]
  }
];
};

// --- Modül: src/core/wordValidator.js ---
__wordlyModules["wordValidator"] = function (module, exports, require) {
// Wordly — kelime listesi doğrulama ve normalleştirme
//
// Bu modül platformdan bağımsızdır: Scriptable API'si, Node.js API'si veya
// tarayıcı API'si kullanmaz. Hem Scriptable (importModule) hem Node (require)
// tarafından yüklenebilir. Yalnızca YAPIYI kontrol eder; anlam ve çeviri
// içeriğini yorumlamaz.

// Kilit ekranında okunabilirlik için örnek cümle üst sınırı (aşılırsa uyarı)
const MAX_EXAMPLE_LENGTH = 45;

// Her kayıtta bulunması zorunlu metin alanları
const REQUIRED_TEXT_FIELDS = ["turkishMeaning", "exampleSentence", "exampleTranslation"];

// İsteğe bağlı metin alanları (varsa metin olmalı)
const OPTIONAL_TEXT_FIELDS = ["v2", "v3", "level", "source", "category"];

// Listenin kayıt dizisini döndürür (fiil listeleri "verbs", diğerleri "words")
function getEntries(list) {
  if (list && Array.isArray(list.verbs)) return list.verbs;
  if (list && Array.isArray(list.words)) return list.words;
  return null;
}

// Kaydın ana kelimesini döndürür (fiillerde v1, diğerlerinde word)
function getHeadword(entry) {
  if (typeof entry.v1 === "string") return entry.v1;
  if (typeof entry.word === "string") return entry.word;
  return null;
}

function isNonEmptyText(value) {
  return typeof value === "string" && value.trim() !== "";
}

// Listeyi doğrular. Hatalar listenin kullanılamayacağını, uyarılar ise
// kullanılabilir ama gözden geçirilmesi gereken durumları belirtir.
// Dönüş: { valid: boolean, errors: string[], warnings: string[] }
function validateWordList(list) {
  const errors = [];
  const warnings = [];

  if (list === null || typeof list !== "object" || Array.isArray(list)) {
    return { valid: false, errors: ["Liste bir JSON nesnesi olmalı."], warnings: warnings };
  }

  if (!isNonEmptyText(list.category)) {
    errors.push("Kök 'category' alanı eksik veya boş.");
  }

  const entries = getEntries(list);
  if (entries === null) {
    errors.push("Kök nesnede 'verbs' veya 'words' dizisi bulunamadı.");
    return { valid: false, errors: errors, warnings: warnings };
  }

  if (entries.length === 0) {
    errors.push("Kelime listesi boş.");
  }

  if (list.total !== undefined && list.total !== entries.length) {
    warnings.push("'total' (" + list.total + ") gerçek kayıt sayısıyla (" + entries.length + ") eşleşmiyor.");
  }

  const seenIds = {};
  const seenHeadwords = {};

  entries.forEach(function (entry, index) {
    const label = "Kayıt #" + (index + 1);

    if (entry === null || typeof entry !== "object" || Array.isArray(entry)) {
      errors.push(label + ": nesne olmalı.");
      return;
    }

    // id: pozitif tam sayı ve benzersiz
    if (typeof entry.id !== "number" || !Number.isInteger(entry.id) || entry.id < 1) {
      errors.push(label + ": 'id' pozitif bir tam sayı olmalı.");
    } else if (seenIds[entry.id]) {
      errors.push(label + ": 'id' " + entry.id + " birden fazla kayıtta kullanılmış.");
    } else {
      seenIds[entry.id] = true;
    }

    // Ana kelime (v1 veya word)
    const headword = getHeadword(entry);
    if (!isNonEmptyText(headword)) {
      errors.push(label + ": 'v1' veya 'word' alanı eksik veya boş.");
    } else {
      const normalized = headword.trim().toLowerCase();
      if (seenHeadwords[normalized]) {
        warnings.push(label + ": '" + headword + "' kelimesi listede birden fazla kez geçiyor.");
      }
      seenHeadwords[normalized] = true;
    }

    REQUIRED_TEXT_FIELDS.forEach(function (field) {
      if (!isNonEmptyText(entry[field])) {
        errors.push(label + ": '" + field + "' alanı eksik veya boş.");
      }
    });

    OPTIONAL_TEXT_FIELDS.forEach(function (field) {
      if (entry[field] !== undefined && typeof entry[field] !== "string") {
        errors.push(label + ": '" + field + "' alanı metin olmalı.");
      }
    });

    // Baştaki/sondaki boşluklar widget'ta hizalamayı bozabilir
    REQUIRED_TEXT_FIELDS.concat(OPTIONAL_TEXT_FIELDS, ["v1", "word"]).forEach(function (field) {
      const value = entry[field];
      if (typeof value === "string" && value !== value.trim()) {
        warnings.push(label + ": '" + field + "' başında veya sonunda boşluk var.");
      }
    });

    if (typeof entry.exampleSentence === "string" && entry.exampleSentence.length > MAX_EXAMPLE_LENGTH) {
      warnings.push(
        label + ": örnek cümle " + entry.exampleSentence.length + " karakter (önerilen en fazla " + MAX_EXAMPLE_LENGTH + ")."
      );
    }
  });

  return { valid: errors.length === 0, errors: errors, warnings: warnings };
}

// Listeyi widget'ın kullanacağı ortak biçime çevirir. Veri dosyasındaki alan
// adlarına bağımlılık yalnızca burada kalır; böylece arayüz kodu dosya
// yapısındaki değişikliklerden etkilenmez.
// Not: Önce validateWordList ile doğrulanmış bir liste verilmelidir.
function normalizeWordList(list) {
  const category = list.category;
  return getEntries(list).map(function (entry) {
    return {
      key: category + "-" + entry.id,
      id: entry.id,
      category: category,
      word: getHeadword(entry),
      pastSimple: entry.v2 !== undefined ? entry.v2 : null,
      pastParticiple: entry.v3 !== undefined ? entry.v3 : null,
      turkishMeaning: entry.turkishMeaning,
      exampleSentence: entry.exampleSentence,
      exampleTranslation: entry.exampleTranslation,
      level: entry.level !== undefined ? entry.level : null,
    };
  });
}

module.exports = {
  MAX_EXAMPLE_LENGTH: MAX_EXAMPLE_LENGTH,
  validateWordList: validateWordList,
  normalizeWordList: normalizeWordList,
};
};

// --- Modül: src/core/wordSelector.js ---
__wordlyModules["wordSelector"] = function (module, exports, require) {
// Wordly — zamana dayalı kelime seçimi
//
// Bu modül platformdan bağımsızdır. iOS widget'ı ne zaman yenileyeceğine
// kendisi karar verdiği için seçim rastgele DEĞİL, deterministiktir: aynı
// zaman dilimi içinde her çalıştırmada aynı kelime seçilir.
//
// Zaman dilimleri yerel gece yarısına hizalanır. Örneğin 6 saatlik aralıkta
// kelime 00:00, 06:00, 12:00 ve 18:00'de değişir.

// Kullanıcının seçebileceği değişim aralıkları (saat). Hepsi 24'ü tam böler.
const ALLOWED_INTERVAL_HOURS = [1, 2, 4, 6, 12, 24];

// Parametre verilmezse veya geçersizse kullanılan aralık
const DEFAULT_INTERVAL_HOURS = 6;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

// Widget parametresini (örn. "6", " 12 ", "4h") aralığa çevirir.
// Geçersiz veya boş değerde varsayılan aralık döner.
function parseIntervalHours(parameter, fallback = DEFAULT_INTERVAL_HOURS) {
  if (parameter === null || parameter === undefined) return fallback;
  const hours = parseInt(String(parameter).trim(), 10);
  if (ALLOWED_INTERVAL_HOURS.indexOf(hours) === -1) return fallback;
  return hours;
}

function assertValidInterval(intervalHours) {
  if (ALLOWED_INTERVAL_HOURS.indexOf(intervalHours) === -1) {
    throw new Error("Geçersiz aralık: " + intervalHours + ". İzin verilenler: " + ALLOWED_INTERVAL_HOURS.join(", "));
  }
}

// Verilen anın, sabit bir başlangıçtan bu yana kaçıncı zaman diliminde
// olduğunu döndürür. Gün sayısı yerel takvim tarihinden hesaplanır; böylece
// saat dilimi ve yaz saati geçişleri gün sayımını kaydırmaz.
function getSlotIndex(date, intervalHours) {
  assertValidInterval(intervalHours);
  const dayNumber = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / MS_PER_DAY);
  const slotsPerDay = 24 / intervalHours;
  const slotInDay = Math.floor(date.getHours() / intervalHours);
  return dayNumber * slotsPerDay + slotInDay;
}

// Verilen an için gösterilecek kelimenin dizideki sırasını döndürür.
// Liste sonuna gelince başa döner.
function selectWordIndex(wordCount, date, intervalHours) {
  if (!Number.isInteger(wordCount) || wordCount < 1) {
    throw new Error("Kelime sayısı en az 1 olmalı.");
  }
  const slot = getSlotIndex(date, intervalHours);
  // Negatif değerlere karşı güvenli mod alma
  return ((slot % wordCount) + wordCount) % wordCount;
}

// Verilen an için gösterilecek kelimeyi döndürür.
function selectWord(words, date, intervalHours) {
  return words[selectWordIndex(words.length, date, intervalHours)];
}

// Bir sonraki kelime değişiminin zamanını döndürür. Widget'ın
// refreshAfterDate değeri için kullanılır (iOS bunu garanti etmez).
function getNextChangeDate(date, intervalHours) {
  assertValidInterval(intervalHours);
  const nextSlotStartHour = (Math.floor(date.getHours() / intervalHours) + 1) * intervalHours;
  // Yerel saatle oluşturulur; 24 saat değeri JavaScript'te ertesi günün 00:00'ına taşar
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), nextSlotStartHour, 0, 0, 0);
}

module.exports = {
  ALLOWED_INTERVAL_HOURS: ALLOWED_INTERVAL_HOURS,
  DEFAULT_INTERVAL_HOURS: DEFAULT_INTERVAL_HOURS,
  parseIntervalHours: parseIntervalHours,
  getSlotIndex: getSlotIndex,
  selectWordIndex: selectWordIndex,
  selectWord: selectWord,
  getNextChangeDate: getNextChangeDate,
};
};

// --- Modül: src/core/wordFormatter.js ---
__wordlyModules["wordFormatter"] = function (module, exports, require) {
// Wordly — widget metinlerini biçimlendirme
//
// Platformdan bağımsızdır. Normalleştirilmiş kelime nesnesini
// (bkz. wordValidator.normalizeWordList) ekranda gösterilecek metne çevirir.

const FORM_SEPARATOR = " · ";
const INLINE_SEPARATOR = " – ";

// Fiillerde üç hali birlikte gösterir: "go · went · gone".
// Çekim bilgisi olmayan kelimelerde yalnızca kelimeyi döndürür.
function formatVerbForms(word) {
  if (word.pastSimple && word.pastParticiple) {
    return [word.word, word.pastSimple, word.pastParticiple].join(FORM_SEPARATOR);
  }
  return word.word;
}

// Saatin üstündeki tek satırlık kilit ekranı widget'ı için: "go – gitmek"
function formatInlineText(word) {
  return word.word + INLINE_SEPARATOR + word.turkishMeaning;
}

module.exports = {
  formatVerbForms: formatVerbForms,
  formatInlineText: formatInlineText,
};
};

// --- Modül: src/core/wordRepository.js ---
__wordlyModules["wordRepository"] = function (module, exports, require) {
// Wordly — kelime havuzunu oluşturma
//
// Platformdan bağımsızdır. Birden fazla kelime listesini doğrular ve tek bir
// havuzda birleştirir. Hatalı listeler havuza alınmaz; hatalar gizlenmez,
// çağıran tarafa döndürülür.

const { validateWordList, normalizeWordList } = require("./wordValidator.js");

// Dönüş: { words: object[], errors: string[] }
function loadWordPool(lists) {
  const words = [];
  const errors = [];

  (lists || []).forEach(function (list, index) {
    const result = validateWordList(list);
    const name = list && typeof list.category === "string" ? list.category : "liste #" + (index + 1);
    if (!result.valid) {
      result.errors.forEach(function (error) {
        errors.push(name + ": " + error);
      });
      return;
    }
    normalizeWordList(list).forEach(function (word) {
      words.push(word);
    });
  });

  if (words.length === 0 && errors.length === 0) {
    errors.push("Gösterilecek kelime bulunamadı.");
  }

  return { words: words, errors: errors };
}

module.exports = {
  loadWordPool: loadWordPool,
};
};

// --- Modül: src/core/textFit.js ---
__wordlyModules["textFit"] = function (module, exports, require) {
// Wordly — metin genişliği tahmini ve yazı boyutu sığdırma
//
// Platformdan bağımsızdır. iOS'un otomatik küçültmesi (minimumScaleFactor)
// kilit ekranında güvenilir çalışmadığı için (cihazda "borr..." kesilmesi
// görüldü) yazı boyutu, metnin tahmini genişliğine göre önceden hesaplanır.
//
// Genişlikler iOS sistem yazı tipine (SF Pro) yakın değerlerdir (em = yazı
// boyutunun katı). 22.11.2026 tarihli cihaz ekran görüntüsüyle kalibre
// edildi: tahminler ölçümden %2–7 büyük çıkar (bilinçli güvenlik payı).

// İnce boşluk (U+2009): sıkışık ayırıcılarda kullanılır
const THIN_SPACE = String.fromCharCode(0x2009);

// Dar ve geniş karakterler
const NARROW_CHARS = "iljtfrI.,;:'!|·ıİ";
const WIDE_CHARS = "mwMW";

const CHAR_WIDTH_EM = {
  space: 0.27,
  thinSpace: 0.14,
  narrow: 0.34,
  wide: 0.86,
  upper: 0.68,
  digit: 0.6,
  regular: 0.58,
};

// Tahmini genişliğe eklenen güvenlik payı
const SAFETY_MARGIN = 1.05;

function charWidthEm(char) {
  if (char === " ") return CHAR_WIDTH_EM.space;
  if (char === THIN_SPACE) return CHAR_WIDTH_EM.thinSpace;
  if (NARROW_CHARS.indexOf(char) !== -1) return CHAR_WIDTH_EM.narrow;
  if (WIDE_CHARS.indexOf(char) !== -1) return CHAR_WIDTH_EM.wide;
  if (char >= "0" && char <= "9") return CHAR_WIDTH_EM.digit;
  if (char !== char.toLowerCase()) return CHAR_WIDTH_EM.upper;
  return CHAR_WIDTH_EM.regular;
}

// Metnin, verilen yazı boyutunda tahmini genişliği (pt)
function estimateTextWidth(text, fontSize) {
  let em = 0;
  for (let i = 0; i < text.length; i++) em += charWidthEm(text[i]);
  return em * fontSize * SAFETY_MARGIN;
}

// Metnin tek satırda sığacağı en büyük yazı boyutu (0,5 pt adımlarla).
// minSize'a kadar sığmıyorsa null döner.
function fitSingleLine(text, availableWidth, maxSize, minSize) {
  for (let size = maxSize; size >= minSize; size -= 0.5) {
    if (estimateTextWidth(text, size) <= availableWidth) return size;
  }
  return null;
}

// Metnin kelime sınırlarından sarıldığında kaç satır tutacağını tahmin eder.
// Tek başına satıra sığmayan bir kelime varsa Infinity döner (kesilirdi).
function countWrappedLines(text, fontSize, availableWidth) {
  const words = text.split(" ");
  let lines = 1;
  let current = "";
  for (let i = 0; i < words.length; i++) {
    if (estimateTextWidth(words[i], fontSize) > availableWidth) return Infinity;
    const candidate = current === "" ? words[i] : current + " " + words[i];
    if (estimateTextWidth(candidate, fontSize) <= availableWidth) {
      current = candidate;
    } else {
      lines++;
      current = words[i];
    }
  }
  return lines;
}

// Metni en fazla maxLines satıra sığdıran en büyük yazı boyutu (0,5 pt adımlarla).
// minSize'a kadar sığmıyorsa null döner.
function fitWrapped(text, availableWidth, maxSize, minSize, maxLines) {
  for (let size = maxSize; size >= minSize; size -= 0.5) {
    if (countWrappedLines(text, size, availableWidth) <= maxLines) return size;
  }
  return null;
}

module.exports = {
  THIN_SPACE: THIN_SPACE,
  estimateTextWidth: estimateTextWidth,
  fitSingleLine: fitSingleLine,
  countWrappedLines: countWrappedLines,
  fitWrapped: fitWrapped,
};
};

// --- Modül: src/core/lockScreenLayout.js ---
__wordlyModules["lockScreenLayout"] = function (module, exports, require) {
// Wordly — kilit ekranı dikdörtgen widget'ı yerleşim planı
//
// Platformdan bağımsızdır. Seçilen kelime için her satırın metnini, yazı
// boyutunu ve satır sayısını hesaplar; widgetView yalnızca bu planı çizer.
//
// Kurallar:
// - Fiil halleri (V1 · V2 · V3) hiçbir zaman kesilmez.
//   1) Normal ayırıcıyla tek satır  2) Sıkışık ayırıcıyla tek satır
//   3) Tek satırda okunamayacak kadar küçülecekse iki satır: "V1 · V2" / "V3"
// - Kısa kelimeler en büyük boyutta kalır; gereksiz küçültme yapılmaz.
// - Toplam yükseklik widget yüksekliğini aşmaz.

const { THIN_SPACE, estimateTextWidth, fitSingleLine, fitWrapped } = require("./textFit.js");

const NORMAL_SEPARATOR = " · ";
const COMPACT_SEPARATOR = THIN_SPACE + "·" + THIN_SPACE;

function lineHeight(size, metrics) {
  return size * metrics.lineHeightFactor;
}

// Fiil halleri satırını planlar. Dönüş: { text, size, lines }
function planForms(word, metrics) {
  const f = metrics.forms;
  const forms = [word.word];
  if (word.pastSimple && word.pastParticiple) forms.push(word.pastSimple, word.pastParticiple);

  // Çekimsiz kelime: tek satır, gerekirse küçülür
  if (forms.length === 1) {
    const size = fitSingleLine(word.word, metrics.width, f.maxSize, f.fallbackMinSize);
    return { text: word.word, size: size === null ? f.fallbackMinSize : size, lines: 1 };
  }

  // 1 ve 2: tek satır (önce normal, sonra sıkışık ayırıcı)
  const separators = [NORMAL_SEPARATOR, COMPACT_SEPARATOR];
  for (let i = 0; i < separators.length; i++) {
    const text = forms.join(separators[i]);
    const size = fitSingleLine(text, metrics.width, f.maxSize, f.minSize);
    if (size !== null) return { text: text, size: size, lines: 1 };
  }

  // 3: iki satır — "V1 · V2" ve "V3"
  const firstLine = forms[0] + NORMAL_SEPARATOR + forms[1];
  const secondLine = forms[2];
  for (let size = f.twoLineMaxSize; size >= f.fallbackMinSize; size -= 0.5) {
    if (estimateTextWidth(firstLine, size) <= metrics.width && estimateTextWidth(secondLine, size) <= metrics.width) {
      return { text: firstLine + "\n" + secondLine, size: size, lines: 2 };
    }
  }

  // Son çare (bu veriyle oluşmaz): sıkışık tek satır, en küçük boyut
  return { text: forms.join(COMPACT_SEPARATOR), size: f.fallbackMinSize, lines: 1 };
}

// Tek satır veya (izin verilirse) sarılmış metni planlar
function planTextLine(text, spec, metrics, maxLines) {
  const single = fitSingleLine(text, metrics.width, spec.maxSize, spec.minSize);
  if (single !== null) return { text: text, size: single, lines: 1 };

  if (maxLines >= 2) {
    const wrapped = fitWrapped(text, metrics.width, spec.twoLineMaxSize, spec.minSize, 2);
    if (wrapped !== null) return { text: text, size: wrapped, lines: 2 };
  }

  const shrunk = fitSingleLine(text, metrics.width, spec.minSize, spec.fallbackMinSize);
  return { text: text, size: shrunk === null ? spec.fallbackMinSize : shrunk, lines: 1 };
}

function blockHeight(block, metrics) {
  return lineHeight(block.size, metrics) * block.lines;
}

// Dikdörtgen kilit ekranı widget'ının tam planı.
// metrics: THEME.lockScreen (bkz. src/theme/theme.js)
// Dönüş: { forms, meaning, example, totalHeight } — her biri { text, size, lines }
function planRectangularLayout(word, metrics) {
  const forms = planForms(word, metrics);
  const meaning = planTextLine(word.turkishMeaning, metrics.meaning, metrics, 1);

  // Örnek cümle: yükseklik yetiyorsa iki satıra izin verilir
  const usedHeight = blockHeight(forms, metrics) + blockHeight(meaning, metrics);
  let example = planTextLine(word.exampleSentence, metrics.example, metrics, 2);
  if (usedHeight + blockHeight(example, metrics) > metrics.height) {
    example = planTextLine(word.exampleSentence, metrics.example, metrics, 1);
  }

  return {
    forms: forms,
    meaning: meaning,
    example: example,
    totalHeight: usedHeight + blockHeight(example, metrics),
  };
}

module.exports = {
  NORMAL_SEPARATOR: NORMAL_SEPARATOR,
  COMPACT_SEPARATOR: COMPACT_SEPARATOR,
  planForms: planForms,
  planRectangularLayout: planRectangularLayout,
};
};

// --- Modül: src/core/wordHistory.js ---
__wordlyModules["wordHistory"] = function (module, exports, require) {
// Wordly — gün içinde kelime tekrarını önleyen seçim
//
// Platformdan bağımsızdır ve yan etkisizdir: geçmişi (history) okur, yeni
// geçmişi DÖNDÜRÜR; dosyaya yazmak çağıran tarafın (historyStore) işidir.
//
// Kurallar:
// - Aynı zaman diliminde (aynı aralık için) her çalıştırmada aynı kelime döner.
// - Yeni zaman diliminde, o takvim gününde henüz gösterilmemiş bir kelime seçilir.
// - Öncelik: hiç gösterilmemiş kelimeler (liste sırasıyla), sonra en uzun
//   süredir gösterilmeyenler (eşitlikte liste sırası).
// - O gün gösterilecek yeni kelime kalmadıysa mevcut kelime korunur.
// - Gün, cihazın yerel tarihine göre hesaplanır; yeni günde günlük liste sıfırlanır.

const { getSlotIndex } = require("./wordSelector.js");

const HISTORY_VERSION = 1;

function createEmptyHistory() {
  return {
    version: HISTORY_VERSION,
    // Geçmişin ait olduğu yerel gün ("YYYY-MM-DD")
    day: null,
    // Bu gün gösterilen kelime anahtarları (gösterim sırasıyla)
    shownToday: [],
    // Kelime anahtarı → en son gösterildiği yerel gün
    lastShownDay: {},
    // Aralık (saat) → { slot, key }: o aralık için şu anki dilim ve kelimesi
    currentByInterval: {},
  };
}

function pad2(value) {
  return value < 10 ? "0" + value : String(value);
}

// Yerel takvim günü: "2026-11-22"
function formatLocalDay(date) {
  return date.getFullYear() + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate());
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

// Dosyadan okunan geçmişi doğrular. Bozuk veya eski biçimli geçmiş yerine
// boş geçmiş döner (widget hiçbir zaman bozuk dosya yüzünden çökmemeli).
function normalizeHistory(raw) {
  const empty = createEmptyHistory();
  if (!isPlainObject(raw) || raw.version !== HISTORY_VERSION) return empty;

  const history = createEmptyHistory();
  history.day = typeof raw.day === "string" ? raw.day : null;
  if (Array.isArray(raw.shownToday)) {
    history.shownToday = raw.shownToday.filter(function (key) {
      return typeof key === "string";
    });
  }
  if (isPlainObject(raw.lastShownDay)) {
    Object.keys(raw.lastShownDay).forEach(function (key) {
      if (typeof raw.lastShownDay[key] === "string") history.lastShownDay[key] = raw.lastShownDay[key];
    });
  }
  if (isPlainObject(raw.currentByInterval)) {
    Object.keys(raw.currentByInterval).forEach(function (interval) {
      const entry = raw.currentByInterval[interval];
      if (isPlainObject(entry) && typeof entry.slot === "number" && typeof entry.key === "string") {
        history.currentByInterval[interval] = { slot: entry.slot, key: entry.key };
      }
    });
  }
  return history;
}

// Bugün gösterilmemiş adaylar arasından en öncelikli kelimeyi seçer
function pickCandidate(candidates, lastShownDay) {
  let best = null;
  let bestDay = null;
  candidates.forEach(function (word) {
    // Hiç gösterilmemiş kelime "" ile en öne geçer
    const day = lastShownDay[word.key] || "";
    if (best === null || day < bestDay) {
      best = word;
      bestDay = day;
    }
  });
  return best;
}

// Verilen an için kelimeyi seçer.
// words: normalleştirilmiş kelimeler (bkz. normalizeWordList), boş olmamalı
// history: önceki geçmiş (null/bozuk olabilir)
// Dönüş: { word, history, changed } — changed true ise geçmiş kaydedilmeli
function selectWordWithHistory(words, history, now, intervalHours, knownKeys) {
  if (!words || words.length === 0) throw new Error("Kelime listesi boş.");

  const today = formatLocalDay(now);
  const slot = getSlotIndex(now, intervalHours);
  const intervalKey = String(intervalHours);
  const state = normalizeHistory(history);

  const wordsByKey = {};
  words.forEach(function (word) {
    wordsByKey[word.key] = word;
  });

  // Yeni gün: günlük liste ve dilim kayıtları sıfırlanır
  if (state.day !== today) {
    state.day = today;
    state.shownToday = [];
    state.currentByInterval = {};
  }

  // Aynı dilim: aynı kelime, geçmiş değişmez
  const current = state.currentByInterval[intervalKey];
  if (current && current.slot === slot && wordsByKey[current.key]) {
    // Dosyadaki geçmiş normalleştirmeyle değiştiyse (ör. bozuk alan) yeniden kaydedilir
    return { word: wordsByKey[current.key], history: state, changed: !isSameHistory(history, state) };
  }

  const shownToday = {};
  state.shownToday.forEach(function (key) {
    shownToday[key] = true;
  });
  const candidates = words.filter(function (word) {
    return !shownToday[word.key];
  });

  let chosen;
  if (candidates.length > 0) {
    chosen = pickCandidate(candidates, state.lastShownDay);
  } else {
    // Bugün gösterilecek yeni kelime kalmadı: mevcut kelime korunur
    chosen = current && wordsByKey[current.key] ? wordsByKey[current.key] : lastShownTodayWord(state, wordsByKey) || words[0];
  }

  state.currentByInterval[intervalKey] = { slot: slot, key: chosen.key };
  if (!shownToday[chosen.key]) state.shownToday.push(chosen.key);
  state.lastShownDay[chosen.key] = today;
  pruneRemovedWords(state, knownKeys || new Set(Object.keys(wordsByKey)));

  return { word: chosen, history: state, changed: true };
}

function lastShownTodayWord(state, wordsByKey) {
  for (let i = state.shownToday.length - 1; i >= 0; i--) {
    if (wordsByKey[state.shownToday[i]]) return wordsByKey[state.shownToday[i]];
  }
  return null;
}

// Listeden çıkarılmış kelimeleri geçmişten temizler (dosya büyümesin)
function pruneRemovedWords(state, knownKeys) {
  Object.keys(state.lastShownDay).forEach(function (key) {
    if (!knownKeys.has(key)) delete state.lastShownDay[key];
  });
  state.shownToday = state.shownToday.filter(function (key) {
    return knownKeys.has(key);
  });
}

function isSameHistory(a, b) {
  return JSON.stringify(normalizeHistory(a)) === JSON.stringify(b);
}

module.exports = {
  HISTORY_VERSION: HISTORY_VERSION,
  createEmptyHistory: createEmptyHistory,
  formatLocalDay: formatLocalDay,
  normalizeHistory: normalizeHistory,
  selectWordWithHistory: selectWordWithHistory,
};
};

// --- Modül: src/theme/theme.js ---
__wordlyModules["theme"] = function (module, exports, require) {
// Wordly — tema değerleri
//
// Yalnızca veri içerir (renk kodları, yazı boyutları, boşluklar); Scriptable
// API'si kullanmaz. Böylece Swift'e geçişte değerler aynen taşınabilir.
//
// Not: Kilit ekranı widget'larında iOS renkleri kendi tonuyla değiştirir.
// Bu yüzden kilit ekranında renk yerine yalnızca opaklık (opacity) ile
// hiyerarşi kurulur. Palet tam olarak ana ekran widget'ında görünür.

const THEME = {
  colors: {
    // Krem zemin / koyu modda sıcak koyu kahve
    background: { light: "#F6F0E6", dark: "#2A231E" },
    // Ana metin: koyu kahve / krem
    primaryText: { light: "#4A3A2E", dark: "#F2E8DA" },
    // İkincil metin (anlam, çeviri): yumuşak kahve / bej
    secondaryText: { light: "#7A6555", dark: "#CDBBA6" },
    // Vurgu (başlık etiketi): bej-kahve
    accent: { light: "#A07E62", dark: "#C9A784" },
  },

  // Kilit ekranı dikdörtgen widget'ı ölçüleri (pt).
  // width/height: iPhone 14 Pro ekran görüntüsünden ölçülen alanın (~165 pt
  // genişlik) biraz altında, güvenli tarafta tutulmuştur.
  lockScreen: {
    width: 158,
    height: 68,
    lineHeightFactor: 1.22,
    // Fiil halleri: tek satırda 17→11 pt; daha küçüğü gerekirse iki satır (en fazla 14 pt)
    forms: { maxSize: 17, minSize: 11, twoLineMaxSize: 14, fallbackMinSize: 8 },
    meaning: { maxSize: 14, minSize: 11, twoLineMaxSize: 13, fallbackMinSize: 9 },
    // Örnek cümle: tek satırda 13→11,5 pt; daha küçüğü gerekirse (yükseklik yetiyorsa)
    // iki satır (en fazla 12 pt); yetmiyorsa tek satırda küçülür
    example: { maxSize: 13, minSize: 11.5, twoLineMaxSize: 12, fallbackMinSize: 8 },
  },

  // Diğer yazı boyutları (pt)
  fontSizes: {
    circularWord: 14,
    circularMeaning: 10,
    homeLabel: 9,
    homeTitle: 18,
    homeMeaning: 13,
    homeExample: 12,
  },

  // Kilit ekranında metin hiyerarşisi için opaklık değerleri (0–1)
  lockOpacity: {
    meaning: 0.9,
    example: 0.7,
  },

  // Boşluklar (pt)
  spacing: {
    homePadding: 14,
    homeBlockGap: 6,
  },
};

module.exports = {
  THEME: THEME,
};
};

// --- Wordly — gömülü Nori görselleri ---
// Yeni bir kıyafet veya poz için aynı yarım vücut kadrajıyla bir PNG ekleyin.
__wordlyModules["noriAssets"] = function (module, exports, require) {
module.exports = [
  { outfit: "hoodie", pose: "wave", png: "iVBORw0KGgoAAAANSUhEUgAAAJMAAACACAYAAAAPp1sgAABrS0lEQVR42u39d3xd1ZU2jj/71Ft11Xt1l3uVCy7gGAM2poQSCAZsaiD8JpMEwoQkEEiZF5IwZODNC6GTwgAJ1WCDsY2Ni2RLSLItS7KaZfWu2+89bf/+4O7zPbq6skkGmGSS+/noY0u3nbL22ms961nPIvgHeqxbt84TCASW6Lq+CsBUnufzOY5LMQzDQykVCCEKIWQAwGlK6Sld1xt4nq9SVbWhqqoqhH8+zvgg/wgnOXfuXKcoij8QRfEaAEW6rnPRaBS6rpuvMQwDAMBxHHieN384jotyHNdMCNmjqupbgiAcKC8vD//TdP4Bjen88893joyMbON5/txQKARFUYz09HQjKyuLejwe4vF4iMvlgiiKiEQiCAQCGBwcpMPDw3RwcJAEg0Ge4zhit9shCAIA1AF4WRTF3+7fv3/gnyb0D2RMS5YsuZHn+RcikUikpKRE+NrXvsYtWLAABQUFsNvtE75vYGAA3d3dOHr0KCoqKowTJ04Yvb29nCiKgsPhgK7rnYSQ/ydJ0v/bv3//yD9N6R/AmJYuXfpzSum9iqJoTz31lFBWVmY+F41GEQ6HoWkaCCEQRRGiKEKSJPA8P+Zzuru78dFHH+HNN980jh07RiVJEt1uN3RdP2EYxrcPHz78wT+N6X+/Md1GCHlqeHhY+dGPfiRs3rwZHR0dKC8vx9DQECKRCAgh4DgOlFJwHAeHw4HU1FSkp6cjPz+f5OTkQJZlygxw9+7deOmll4za2lrd5XLJHMcZuq4/UllZ+f2/tfO/+eabUwkhD1BKF1BK9wD45XPPPef/Ir6L/99uTOnp6UMcx20FYGtra6MbN24kgiCQXbt2kXA4DF3XoWkaFEVBNBpFJBLB6Ogouru70dzcjMbGRtLQ0ICBgQEiCALS09MxdepUbNq0iciyzFdXV+uhUAgOh2N1VlbWkry8vPe7u7v/ZgL0RYsWvSnL8tcNwyiy2WxrFEWx1dTUvP9PY/orHn19faO5ubkZDofjnIGBAb27u5u77LLLSDAYRHt7O2w2GyilZibHcRwEQYAoipBlGYZhIBAIoL29HQ0NDejo6IBhGMjKykJZWRmWLFlCamtr0dXVpblcrlJK6brCwsL3Ozs7vf/T537TTTd9QxTFbymKEqGUarHzlKqrq5/+pzH9lY/u7u4P0tPT19lstpLq6mrd7/dzN9xwA21sbITf7ze3uDH7PyHmvzzPQ5IkcByH4eFh1NfXo7m5GXa7HXPmzMGFF15IGhoauJMnT6oOhyNf07Q1OTk5f+7p6fkfw6a2bNlSwPP8HymldkopRymloihKuq7vq66u/vM/jekzPFauXJmRl5c3PTc3d2lubu55BQUFF+fk5KwRRdGtadp0u91Oq6qqiKIo2LBhA+rq6qBpGjiOGx9QEjLud4ZDeb1e1NfXY3h4GNOnT8cll1yCY8eOcY2NjarL5co3DGNud3f3H/6nrsPChQt/JYriak3T1E+dLidQSocB3PTJJ598IZDG/4oAfMmSJYs5jltHKV0LYBqAfEIIbxgGNE0zAUlCiM7zPOF5HiMjI9i0aRPWrl2Luro6E8CklJpGxLwVIWScYbHng8EgMjIycNlllyErKws33XQTjh8/rrlcLklRlJ9UVVXd/2Vfj1tuuWUWgMOGYdgIIToA8DwvGIZxxTPPPPPGP7O5uMe6des8fr//a4ZhbCWElBFCOBZAcxyn8zxvuN1uJCUlQRRFGIZBvF4v5/V6oaoqDMOAoihYtmwZli1bhmg0ClVVx2xviTwVIQSUUhiGAUopeJ6HruvgOA4bN25EWloarr32Wur1eqndbqccx5176NChg1/mtdm6desbkiRdpqqqSgiBIAiiqqr/+txzz/36n9BA3GPx4sW3cRz3XY7jpsWwIsNut+tTp07FggULuOnTp5OSkhKkpqbCbrdDFEVQShGNRjE0NIT29nYcP34clZWVqKqqAs/zOPfcc1FaWopIJDLOmKwBOqV0THzF4ARKKUKhEC6//HLS39+P73znO5rH4xEppQcqKipWfomx0gWSJG3XNE0jhFBJkiRVVR955pln7p3A8OYRQi4zDKM3GAy+9Nprr4X/IYxp0aJF53Ac90ue55eFw2GEw2Fl6tSp3Pr168maNWvI9OnTYbPZrOdFz3TOuq7T8vJyvPbaa9izZw/mzp2LBQsWIBwOm16IGUqirY95J2ZohBCEQiFccskl+NOf/oRt27bRpKQkXlXVHxmGcZwQ4uI4LkII8QqC0K/rekd5efnw54wrHRQEYbmmaSFJkhyKovzh2Wef3TxBtncvz/M/EATBTQhBJBL503PPPXfV/3pjWrRo0VUcx71ECLH5fD510qRJ5LrrruM2bNiA5ORk83wURcHw8DD6+/tpf38/fD4fIpEIdF03vYgoinA4HCQnJ4dOmTIFycnJqKurwxNPPIFQKITp06ebBhSPhFvjKhaLWbM+TdMgSRLy8vLwm9/8BqqqAgDH3sO2SUqpBmDEMIxGAFUADnIcd7iiouLUX3uNbrzxxstkWX5D1/WgLMtORVHeeeaZZy6Jf911112XY7fbnxYEYaOqqgYABYAQe3rus88+W//XfL/wd4JiF+u6/jQAWyQSUTZv3izccccdSE1NBQCi6zr6+/tpc3MzbWlpwcDAABRFgaZp4wJowzDYD2V4ksfjwZQpU3DXXXfh+PHjOHXqlBkHWb2R1Zis3oo9DMOAIAiIRqPo7OxEcnIy6uvrIQiCZjUm8umDFwQhQ5KkDEEQVhqG8S1KaWDJkiVHALxGKd1WWVnZ8Rel5jzvliQJlFKnoigfhcPhcR7p1ltvXUEpfVoQhJmqqkZjGT1HCOEppUFKqfd/tWdasmTJd3me/2UwGFRuu+024a677jKPv62tDRUVFfTUqVOIRqOE53kao46M2ZqssY7VSFgwHYlEIIoi8vPzoWkaRkZGxhlSIgOKhxGs39HZ2QlN01BQUAC32w1RFOH3+zE8PIzBwUE6MDCAvr4+Y2RkhALgJEkSHA4HCCHQNG0UwDZK6f+rrKz8TAH85s2bnbIs38dxnEgI+dlvf/tbb1yWdyuAxwghDl3Xo+TTg+aEGB1C07T7n3322Z/8rzamsrKynxJCvu/z+fTf//73/MKFCxEOh/Hhhx+itrYWuq5DFEXwPD/u5n8WQ7AamKqqjMdkhRT+sosa2wIdDgdKSkrgdruRkpICj8cDl8uFlJQUCIIAXdfR3d2NxsZGVFRUoLKykjY1NRmqqsLpdIo2mw26rhuU0jc5jnukoqKi4r+R4f0fQRDuNQxDBxAFYBNFkdM0jQLYoev6488///z2/859+rvY5gghxwkhHKVUf/3117Fw4ULwPA/DMKDrOhwOxxg8KVGMkwhDsnoowzBM5kCijM0a75ztwT47FAqhuroauq6b75Vl2TSuoqIiTJ48GevWrcO6deugqiqprKzkd+zYgX379uk9PT2GzWbj7Hb7V3Vd37RkyZLfE0LuP3z4cOdfWFZ5XBCEu3RdDwKwSZLk0DQtoqrqOwB+8+yzz370D4OAz5gxoycajV4vy7K7rq7OsNlsZPHixZg2bRo6OzvR1dXFsrgxW9rZQEcrphT//ETvt/7tTF6PvUcQBEiSBEmSIIoigE+ZB8PDw2hqasLRo0dx7Ngx9Pf3w2azYc6cOTjvvPOwYcMGkpyczJ0+fZr09vZqoijykiQtNAzjqry8vK7u7u66z3r95s+f/x+yLKcDkAzD8BuG8QfDML7x3HPPPV5dXX3q87pPfxfG1NbWFs7LyxslhFxKCNEOHDhARkdHybx581BWVoZgMIiWlhYAgCiKEwKP1t8nMrB4Q4o3OhZoJzKc+NdZPWJ81sfzPGRZNj1YR0cH6urq0NjYiEgkgpKSEixbtgwbN26ELMvciRMnMDo6qtrt9lQAV+Xk5CR1d3d/8BmNqZ3juDRd118hhNz57LPPvlBdXd37Dw1aLlq06OeCIHxf13XN5/MZU6ZMEW655RZs2LABra2t+Oijj9Df32/erHijiDeiRN7mbHFWIm8Vl/JP+FmJ/h7/flVVoaoq0tPTsWDBAixbtgyiKKKhoYH84he/wKFDh3Sn0wme5wVd13dKkrTl4MGD3X8L9+fvqtDb09OzKy8vTwWw1uFwiENDQ9qHH37I7d27F06nE/Pnz0dWVhYAjAEe2Y2a6P+JDC3RdjaRUU60fSZKAs4UZ8XSe5OP3tTUhBMnTkAURcyZM4dceumlIISQ8vJyouu6KoriNF3XLygpKXm3o6Pjf5zy8ndZTikrKzuPUvpTQsgKADQUCtFoNIq0tDRMnz4daWlpsNlsUBQFkiTB6XSaFBIWbFvR63jDifcw8UbCgvWJno/fLhN5pYkKx/GGGo1GYRgGpk2bho0bNyI5ORk7duzAQw89hGAwqLpcLllV1VpCyMV/aWD+T2Maa1SXaZr2vCiKHgBGMBgk0WgUhBDIsmwS3CRJMoNh9mOz2ZCdnY2cnJwJt8QzeZxE22CirS3e8yXa4ibiUlk/PxwOw+PxYP369ZgzZw5qampwzz33oL+/X3M4HJKqqhWiKJ43URvW+eef7/T7/ck8z/NOpzPwwQcfDP/TmOJiKELIdzRNEwzDIIWFhYhEIiZMoOu6SS2RJAmyLMPj8SAzMxMpKSlwOp1nxKASbYPstfEwQyI0/GzBPav9nWkLtIKgqqqCUoq1a9di1apVOH78OG6//XZ4vV7N6XRKuq6/UFVVtRUAzjvvvKJoNLrKMIzVhmHMJYSkcRznpJTyACIAfBzHtRmGUanr+gFRFA8fPHjQ/w9pTGVlZa+Ionh1KBTSeZ4nd999N9auXQufz4fDhw+jvr7evBnMG51pq/us6b51i5vICBj6zjye9bsYBmVlILDnzpRdss9l7IeysjJs3LgRhw8fxl133QVN0wxJkgTDMH7OcVw2z/NX6LruYdSaOF4XeJ4fc00IIacIIe8SQl4qLy8//A9jTIsXL35eFMUtgUBA8Xg8wiOPPILly5cDAA4fPoyPP/4YmqZNCD7GG4DVO8R7m4m2skTxkCAI4HkeqqoSv9+PgYEBOjIygljzJzRNM2uB1h9ZlkEIMT3Pmch47BEOh1FWVoZLLrkE77//Pn74wx+CEEIFQeAjkQiCwSCSk5PV4uJiTJ06lWRmZkKWZRI7PjoyMoKWlhba0tJCBwYGeF3XebfbDUEQdErpH3Rd/3llZWXj/2pjWrJkyZOCINweDAaV1NRU4T/+4z8wf/58aJqGXbt2oaKiwsSa4qv6ZzOqREG11ZgS1foMwzCpvH6/H11dXWhra8PQ0BBRFIXKsgzWDRwrgSEQCMDr9YLjOCQnJ6O4uBhFRUVIT08HACiKMg67ijcmjuPg9/tx/vnnY+nSpbjmmmvQ1tYGXdf17OxsXHjhhdxFF11EZs6cGc98ILBQc4aGhlBTU4M9e/YY+/btMwYGBgS3280RQkYopb86cuTIz/5XGtPixYu/L4riz8PhsOJ2u/nHH3+czJs3D5qmYfv27aisrITD4UgIGE60jcRnZvGeKZGnshgUFUURPp8PJ0+eRENDA/X7/bSwsBBLlizh58+fj/z8fHg8HpOkF41GMTAwgK6uLjQ0NODo0aM4efIkKKUoKSlBaWkp0tPTzVhvIkIeOzZN09DY2Ii6ujrIsoxrrrkG1113HTIzM01jGRoawujoKMsMic1mo6ykk5GRYRr56dOn8cc//pH++c9/NoLBoJicnAxd1z/kef6WQ4cOtf+vMaZly5at03V9u2EYlBDCPfbYY+Scc86Brut47733cOTIETidzs8U05wtY4tL0anVG8XX9jo6Ooyamhqjr6+PlpaWcpdddpm4cuVKmp2dbRZz47ZcwqgvAOD3+2llZSVef/11HDx4EJIkYdasWZg1axZEURxDJY43KMMwUFFRgRMnTqCkpAQ/+clPcM4550BVVdTU1KC+vh7d3d0IBAJjYkX2eaIoIi0tDQUFBSgtLcW0adMAAPX19Xj00Ufp/v37dY/HI1FKTxmG8dXKysrqv3tjWrly5SRFUfYTQrL9fr/+4IMPcldeeSUAYNeuXThw4ABsNtu4gHoiQzlTXMK2AGshOPY7Zdsmu8mffPKJeuzYMS0jI4O78cYbbRs3biTJyckIh8NjjCDu+4n1GAVBoHa7HZqm4cCBA3jqqafosWPHUFJSQpYsWYLk5ORx3TOMN9XQ0IDy8nKUlJTg8ccfx5QpU3Do0CEcPnwYfX194DjOLNlYVV7YZzDE3TAM8DyPgoICLFq0CAsXLiQA8Pjjj9OnnnpKs9lsEsdx/RzHXXIm5sLfBQKemZn5R0EQFoyMjGg33HADf/vttwMAjhw5gj179iBGCPtMXofdYJZxMe8TF6PQCdJ2KggCFEXBwYMHo3V1dUpZWZnws5/9zH7eeecRwzAQCoVMQ7R+Row7RKx0YGt2xoDJtWvXknA4TA8ePKgPDAwgMzOTuN1uxtg0H5IkgTVHPP3008jOzsaLL76IAwcOQFEU2Gw2c/tKlDAw42KIO+sJPHHiBNrb20lWVhbWrVtHcnNz+T179mgAkgghG3Jzc9/t7u4e+rs0prKyspsEQfiu3+9X586dy//sZz+DJEloaWnB22+/DZ7nx3gAKyluoiDa8jyN+5vVIml84M3zPMLhsPHxxx+HWltblSuvvNL54IMP2jIyMuD3+yek+TJ25UQAKDvmaDQKm82GtWvXEo/Hw+3fv1/t6emhGRkZxOVyEaueFPuuK6+8ErNmzcJTTz2Frq4uuFyuceQ/6/lbkxIrZGGFC/r7+3H06FEiSRLOP/98TJo0ifvwww81QkgygNV5eXmvJWqB/5s2pjVr1mSrqvonwzDsgiDgF7/4BSksLCSjo6N4/fXXEQ6HTSwnfts6A2OATmRME3glyjyNYRg4cOBAqLW1NXr99dcnfe9735MMw0A0GoUgCGeq1bGtjZ7p+Nh3KIqCsrIyJCcn87t27VIGBgZoTk4OibWyE/Y6QggURUFNTQ28Xi/sdrv590SeOp7sF1++YYYlSRJ0Xcfx48cRDoexYcMGkpmZye3YsUO12+25APK7urpe/7sypoyMjAdFUVw3MjKibtmyRbj88suJpml477330NraOkYnYKK4KFEsxAyEGUtcwE7j0GoaAz5JdXV18OjRo6GrrrrKc++999rY9mRtLz8TK/OzPkcIQTgcxsKFC0Ep5Xfv3q0oioKioiLO8jrCumHC4TAEQTCNxXpNLJz3syL01kyVNV40NTXB6/WSK664AoFAgDt48KDmdDrnZ2dnH+/u7q7/uzCm5cuXzwDwVCQSEYqLi8lDDz1E7HY7amtrsXfvXjgcjnGZW3zqzrYmSZJMXjjHcZS5c8YXj11cGu89mHFJkkQ6OzuVgwcPepcuXep46KGH3JqmmU0HE+FVCRzUX2Rs0WgUS5YsIV1dXfTw4cOK0+kkWVlZnDV+4nmeWANsSumYThymNcXCAWuMxF6XyKOzBWmz2dDS0gJd13H99dfj448/Rk9PDxFFcXlOTs7vrXoKf7O0XVVV7xRF0RWNRpUbbrhBSE1NpT6fD/v27YMgCBNmZMygYsEnDYfD8Hq9htfrNcLhMI1EIgYAarPZqMvlIm63m/N4PJzdbieUUhrjRI+JZyKRiFFZWTmakpKC733veymSJCEUCk1oSJRSwpzcmY4x0ZYT7yl0Xce//Mu/SHV1dUptbW00MzOT83g8XAwisb6PsK2KLZxgMIjR0VH4/X4Eg0GoqgpJkkzk3eVyQZZlM6NjSUF8XOVwOLBz504UFBTg+9//Prd161aN47hCALcD+NnftGdasWJFrmEYj4fDYfv06dPJvffeSyRJwr59+3DixAnY7XbEtQ6ZF5+h3/39/cbRo0eN8vJy9dixY1pnZ6c2ODiohkIh3ev1at3d3Upra2u0sbEx3N7eHhkdHdUopdTpdHKSJHGGYVDDMKgkSeT48eP+EydOBL/73e8Wr1q1CoFAIGGgHQ+3xAXwxPJzVq/EzktVVcRKIdLOnTtDPM+T3NxcPnbDWVxPYpx4EksS0NTUhJqaGhw7dgydnZ0YGRmBz+fDwMAATp06hZMnT2JwcBCEEHg8HjNOSmTUrFRUV1eHCy+8EF6vl3zyySew2+0z8/Pzf9/V1RX8m/VMqqreJAhCps/nUy+//HLe6XRiYGAANTU1ZpAZD94xl97b20uPHj2qnzp1Spdl2Zg7dy43f/5826RJk7isrCw4nU4zJunr60NbW5tWX18fPnr0aKCurs6XkZHBz5gxw1FSUmKXJInz+/3qiRMnvCtWrHBdcskl8Pv9hOd5OlGZZiI4YqLnztaswPM8AoEAzj//fLz99ttiY2NjdOrUqUJycjLPvKhhGOjr66OZmZlcd3c3amtrSX9/P3JycnDppZdixowZyM3NhcPhQCgUMoXMYnqdaGpqwpIlS5CWlgZG4Ul0HMFgENu3b8e1115LduzYoQPIoZReD+CXf7PGRCm9OhKJ0IKCAnL++ecDAGpqahAIBMxYKT7t13UdDQ0NRk1NjU4p1Tds2CBceuml8qxZs+ByuUxKCstYBEHAnDlzwPO8GA6Hxa6uLve+ffv0bdu29X388cdDra2tUllZWUpPT0/Y7/dHr7vuusmSJEFRFJooaLV4IRofzMa2vTHPTUQdTlT60TQNSUlJ+OpXv+p64IEH+js6OpSUlBQbQ9Rj265x8OBBo6urC5Ik8bfeeit38cUXo6CgwIyPrB04AMjAwAD27t1LX3zxRWzfvh2rVq1CSUkJFEUZU3tkhu5wOFBdXY25c+di/fr15I033qBJSUmbmTH9zW1zZWVlqziOu8fv99PLLruMXHTRRWRkZATvv//+uIvMgkxd11FVVaVXVVXphYWFuP/+++UtW7ZwOTk5UFUVoVCIqKpKWNBsGAZUVYWiKCQSicAwDJqSkoJFixZx69evd+fk5KRWV1cPHT9+fKSvry80f/785FtvvTVJUZSEOk5nysosWxydqFh8NmIei4VycnLw8ccfR7u7u9XCwkIppsBCOY4jsiyjtrZWS0tLI/fff79w9dVXw2azIRwOmxwvVVWJqqokGo2SaDQKWZYxb948rF+/HuFwGDt37kRycjKSk5NNBkM8dKJpGsLhMObNm0c+/PBDKopidmFh4f7Ozs427m/QK20CwNvtdmPt2rUEAE6cOIGhoaExTAB2oqqqoqKiQq+rq9PPP/987sknn5RWrFgBn8+HYDBolj/iu3yt4vEsc/J6vZAkCddccw157rnnJp933nmZ4XBYveqqq/KsHvFsNz/OK42BJVgPnSzLcDgccDqdcDqdcDgcZnqfqPtFVVWkpKSgrKzMMTIyooyOjmoxjI1GIhHDbrfD4/HQZcuW8WvXrsXQ0BCY8VvQeMp+Z4G23++H0+nED37wA3LHHXeQQ4cOYWRkZExyYUXN7XY7WltbIUkSJk2apCuKQgBc8DfpmfLz838ajUbzioqK6B133EF4nseHH34Ir9drFkeZ2+V5HkePHtWPHTumXXjhhfyPf/xjgcUFFmScnCk4ThTbRCIRJCcnY9WqVY5zzjkne+7cuWOmGUy0HZ3JuFgDptPpRCQSwenTp5kAK1pbWzE8PAxBEJCamgqbzWYWh62sgRj9WPjggw+8sixzmZmZIjsGWZaJoii0srJSXblypZSammoabiKPybDU2AIlkUgEy5cvRyQSwb59+zB58uSERs0WsM1mAyEEJ06c4ERRJF1dXc/9TcVMy5Yty9M0bUYgEKBz5swhLpeLnD59mvb09JhipeziiqKIlpYWo7a2Vl+6dCn3ox/9SOA4DtFo1PQ2E6TdxPK3hIE0z/OIRqMAgLlz55JoNDoO3DwT/+nTlxIzOOY4Dm63G6dOncKOHTvCBw8e7Orq6goEg0FV13VqGAZEURRycnJcs2bNSjv//PPTysrKwPM8FEUxvaqqqpg0aRJycnL4oaGhqKZpdo7jSKxgS9PS0ojX69UqKipw7bXXIhwOxxerx5WSrOfi8/lwxx13oLu7G6dOnUJxcTETTxvzGaIoore3F9nZ2QQAdF2fsWjRonThf9h4plBK5wmCMJcQUqRp2lSO45IkSTIWLFhAANCmpiaEw2GTXsJwFL/fT2tra/Xk5GTj7rvvttntdgSDQdOlx7MDJsimiIlUxoLk+IscDofp2bxPIuYmpZQYhgFZlqmmaXj66aejr732WsPg4GBYkiTeZrPxDodDsPKk+vv7A6dPn/a99957p84555zcu+++O6egoMDEtBRFQUpKCvLy8qTjx48HAVCe50mMkstwM7pv377IxRdfbLNu4+w7LMowVvYCtT5/++234+c//7nZLhafMLDMTpIkJCcnG+FwOFWW5WlfujFdeumlyQMDA9dSSr+uadpcXdeTGGUjtpXogiCQuXPnAgBaWlrMrMISdNOmpiZjYGBAv/vuu+Vp06bB5/NZ62kMf6GWIJJaDCahF4nbCqlF7IskQsfPEHxTXdeJ3W7HwMAAfvKTn7SXl5f3OJ1OISUlxWYYBlUURVdV1TAMg3IcR9iP2+3mOI7jDx061P2d73wn8PDDD08tKCgwPaUkSSgqKrJVVVV5g8GglpycLDIPKEkSl5SUROrr66MDAwM2p9MJn89nLkCXywWXy4WYNxlX3I4BtMjPz8cFF1yAiooKJCUljYudOI5j2ulEFEU9Eolwmqblf6nGtHTp0tv6+vru1jRtKrPszMxMtbCwEOnp6XC73YQQwkuShJycHMpANlmWrauejo6O0sbGRq20tJRccsklhK3c+DKIxYgQb0jxiPVE3KO/MHkw/7Xb7XRgYAD33HPPyYaGhuH09HSboii61+uNyrLMp6WlOXJychwej0emlKKvry/Y3d0d8Pv9iqZpisvlktva2kYfeeSRjl//+tcFTDuTEILs7GxZ13U9FArpycnJoqWeSD0eD+nq6lL37NljTJ06lfP7/SYVhdGES0pKYLfboev6OJiDGdSqVavQ1taGYDA4zrsxuCASiYDneUbfyf1SjKmsrGwmx3H/1zCMc71eLzIyMpQNGzZwa9euJbNmzeIZ99myzRAAjNMMS/0Moiiiu7vbCAaDxqWXXmpLTk5G7IIRAIzAdjZyE00EGhqGQSxxFonDkSgAYv18a4Af+xzKEoNIJIIHHnigraGhYTg5OVkeHh6OpKSk2K688srJa9asSZ48eTLYNCld1xGJROD1etHS0oKDBw8OHzp0qGt0dDQaCoUUJvPDjsXlcgm6ruuapumx7zSNyeVyEUVR9ObmZmXGjBk2VodjRtDf3w+/349Zs2ZRFjrELyJd15GUlISioiLU1taaxhgfH8aOi8TuTZbwJRjSpYSQZwKBQLrD4VBvvvlmcvXVVwuFhYXma0KhEEZHRzE0NIRQKARd16nL5UJbW5tJ9GI3UdM0dHV16dnZ2Vi5ciWJRqPWNNYaBo3L4OKJAVb2YWy10UTlDmY0Z4rBrH93OBx47LHH/JWVlX0pKSmy1+uNrl69uuAb3/hG3vTp06HrukmIY9uXKIrIyspCUVER1q5dm9re3p567NgxlJaWQpZlE0gEwLpZDMaQYefECrM8zxsjIyO6FXxkCyIGvJKTJ09i9uzZZp3TcnEI2+JLSkpw9OhRTISPMXgltoA8X6gxLV++/HpK6fOjo6P8zJkzlR/84AfCwoULTatuampCfX09enp64PP5zLjJenIx2WVraYEODQ0Zy5cv53Nycqzw/zhDiOcw6bpO2Geyi8h6yuL5TNYt7ixduZRtk7qugzEbXn/99ZNJSUliMBhUt27dOue2225zAoDP5xvDwLR+vqZp8Pl8AICsrCwUFxcjGo0SRVFofMGY4ziDnQOLu2L/QpZlDA8Pq1YpRSvWJYoiAoEAent7UVRUNEauka00wzCQlpbGtsNxtch4FT4AgvAFxkfXUEqf93q9uPjii7X7779fcLvdAD4lrB84cADt7e2m6hvrOUu0P8cCRhoTgzeCwaA+b948m91uj09daYKyBGUBp91up4IgoKurC0NDQxAEAVlZWUhPT0cMFaYWL0cTxU0T1disW+vLL7/cGwqFNEEQuK1bt86544477H6/nxiGQa3M0ETaAlYFuxjMQa3bMcdx6Ovri4bDYSMSiWgxaR4uGo0azHh4nqeRSERngbdhGOPQd47jMDg4iLy8vAn1FJxOJ2w2mzkSJJHyi8VbGcIXZEhLATzr9XrJ5Zdfbjz00EMcK1h+8MEHqK6uNlFgK/5h3X7ijYndy0AgYMiyTEtKSgjzKPHvT9CSZCK3r7766nBVVVXv6OhoRFVVw+FwiMuWLcu94YYbMqdMmUL8fj+1eg3GEbeyFON5VOx7ZFlGa2srKisre1VVpevXry+87bbb7H6/H7E0HhN5u0QGyl5vfa2qqsjPz5cLCgrEqqqqwcHBQWXq1KlJbrdbNAyD6rpuEEIMTdOMBAq/Y6SomQi/NXayXjebzQZJksY8F++ZmVejlIY+93LKmjVrkimlL/j9fsfatWv1Bx54gON5Hn19fXjhhRdQUVFhKqnFt01bmYFxiDNlwXUgEDBEUUR6erp5Ime6KZRSOJ1OfPzxx7jtttuq33jjjZODg4PhcDisFRQUJK1evTq/p6cncMstt3yybds2xAYSJgzCJ/oeZvSyLOP48eMYHh6OFBcXu++8884sRmQ7E7sgkShYovPgOA7hcBjr1q3D7373u9Kvf/3rk06fPu3fvXt3b0NDg595cCPG9LNcW2Ip3BJroM2Oz9rZwxYM2y0SEefYeyxbcP/n7pnC4fBDkUhkRl5ennL//fcLMVoIXn75ZQwNDcHtdieUs7HOLmH/KooC1gbE9rBoNEpFUaRWKsqZJAQlSUJTUxMefvjh46qq6ikpKbaRkZHImjVrCh555JE8j8dDAKRt374d//Zv/3aEUrp406ZNCAQCiMvsaLzHszIFGB/7+PHjQ5FIBDfddNOsgoICjI6OjrshiWKwRAaWSAyDtVl5PB5861vfcpSWls766U9/2lhTUzMqSRLn8XgkwzAMjuOo1UhiBkXjr7n1Gk4kvjERaMuMMfb8EPc5B9xLDMO4XVVV7Xvf+x6fmZmJ0dFR/OlPf8LQ0NAYzjZTKLGqlNhsNrMoG8vaoCgKtW53hBDKsogzIdHMnfM8j+eff75/YGAgZLfbBU3TDLfbLd111115Ho+HMMD0oosuwhVXXDH94YcfrmxpaYEsyywAoxOUTBISyHw+X3TKlCnutWvXjsFoEmV+8dBEPH8ovnOElTF6e3uhqiqGh4dxwQUX4Be/+MX0jIwMoampKdDS0hLkOA52u51jAbplARDrTmBtBk1kyEzsIpFuVUyzAIqiMF56x+dqTJTSH0SjUWnDhg103bp1hHXbnjp1yqytWW8Cu0ChUIjFGjh48CAOHDiAyspK9PT0WPva6KcpgwBVVQ1r3SlRIBtDhNHT04Pjx48P2u12TtM0Q1VVIy0tzZ6WlkbYSqeUEl3XyYoVK5KGh4e1F198cSAOBKVWNROm+xRvVLFSRO7DDz88SxTFMVnSBJlgQl6UpmkmCzISieDNN9/Um5qaYBgG3nzzTX9FRYUhSRIEQcDIyAhWrlyJf/3Xf50SjUa1oaEhRdd1Q5KkhAvMui2zecTx8RIz3kgkAkVRxkEC7D6Ew2GqqqpgGIYCoPVzM6ZzzjlnXjQavUiSJH3Lli0cANTV1eHYsWNwu91gXCLWLh0zCjQ2NmL37t3Yu3cvjh49ir6+PoTDYQwPD8Pr9ZqpPzuJmCKcMTQ0NI6DHR+AS5KEtrY2DA4OhiRJ4mMXgfT09AR6e3vNsgBLfbu6umC321FZWdnb3t5uLgBmDIIgwOFwYGRkBD09PWO0x1lAW1xcjClTpkDTtDFgayLyfqJkQZIk1NfX4w9/+MNIKBRCc3Mz6urqBimlTJU3NGnSJM7qDZmHWrx4cUowGFQppTQ1NVW0wirx10fXdZMDnqgFiuM4eL1eM5OL96ocxyEQCNDY9ek5cuTIyc8tZiKEXKcoinTuuecqs2fPFiKRCA4cOABBEMyDYXs0z/MYHBzEkSNHMDQ0hNLSUlx11VWYPXs2GLV2YGAA9913Hx0eHqaFhYVmoOh2u7lIJEI7OzuxYsWKhKxF62N4eBiKouh2u52PrU6i6zr9zW9+0/GrX/0q3+PxAPh0Ovgbb7xxMqaVGY61aCNGngPP8wiFQvjNb34ztHfv3o5IJKIvW7Ys58c//nFufIbEtld2k+x2OxijgbV6x2susf8Hg0FUV1eHsrKynBzH4dChQ/7s7GxnTk4O3nrrrUhJSYlnxowZCTUIrr766ozKyspRwzCQmZkpxntu6788zyM3N3ccl97qfdjYEIfDEb9dQtd1DA8PM6ij5nOj7a5Zs8YWiUQu4TgOF154IQcAR48exenTp8c0BjLK6ODgIPbs2QO3243vf//7WLduHVJSUswVTAhBVlYWkpKSMDAwQAsLCwkD1NxuNxEEgTY2NkYVRZHPpmMUX16JIdTCwYMHu7Zu3Rq+6KKLJkWjUX3btm0t3d3dAbvdLoTDYbW9vT3AcZzLwhfCfffd13Xw4MGu2267bV5hYaHMPG18uYGxP3meh9PpZAotQ5s3b07Lzc01DSH+BsmyjLq6OnR2dvqvvPLKrK6uLvT19QUvv/zybK/Xi46ODv/FF1+c4XA4zKnn7DsjkQjmzZuH6dOnu2tra/2qqlLr4rUuNkVRUFxcbOoYTKSD3tnZOc4rMa8VDAYxMjJCY3HZx5+bMUWj0UWRSGRyRkaGsXz5ci5Gox0TI7FAW1EUlJeXY9q0aXjggQcwbdo0BAIBE/n9/+BUAbm5uaipqaFz5swhLJZwOBzE4/FwNTU1Ia/XK7OgfiLt7bS0NIiiyFlZj5RSuFwusbm5efSXv/zlEWZgkiRxLKUOBoOqdQvTdR1z587N+PrXv563cuVKswwSCoUSZjl2ux2qquLRRx/1v/zyyyeCwSAdGhqKPPzww3ln4lBVV1dH0tPTHZMnT8bevXuRmZnpKC0thaIouOiiizKmTp1qzsSzxkJs25o5c6a7qqrK39nZGVFV1WVllzK6cm5uLkpKSsyFG29IgiDA6/Wiu7t7XIDOttaBgQEaDodFnuc1juM+AoDPJWYSBGGlruvCzJkztbS0NJw+fRrd3d2QZRlW3rUgCKiqqkJBQQH+8z//E5MmTcLo6KjpdhkJDAA8Hg/mzp1LfD4fHR4eNmIZHhVFkWRnZwunTp1Sjh49Oq5bxYokK4qCgoICpKen241Pq7hWj0VtNhufnJwsp6SkyMzg2GfIssyzm8yIaTfffLO0YMECDAwMwOfzwe/3j8mUWFzk8XjQ0dGBe+655/Tvfve7OrvdLmRnZ8v79+/v3Ldv37imCOvWkZ6ebluzZo3b4XBg6dKluPbaa5Ni2RkWL14MFlhPNFwxLy/PbhgGHR4eVtiWyoyIUori4mLMmDFjQjiAlVsaGhpMWMOaAbLj7u3tNWLvP1xRUVH1uRmTrusLVVXF1KlTCQA0NjaO6b9naSirWP/oRz9CcnIyAoGA+RqrOASlFC0tLeYkpPb2dsOaceTk5IgAsG3btkB8b7217KCqKvLy8jBlypSUaDSqcxxHrJkJQ4w1TTNYU2PsGEhmZqbDin1RSjE6OmrqG1gNn73O7XaD53m88sor+MY3vlFbWVnZm5qaamN1M13X6d69e/snamkXBAEXXnihOZHT7XaDxXSMTjyRCAc7Ro/Hw0mShHA4rKuqCkEQYLfbkZ+fjwULFmDKlCkT4lpsUQeDQRw9etTcvuM9qN/vR29vLwRBIISQV02n8nkYk6ZpxTF9HwIAnZ2d44A3nufR1NSEzZs3Y8aMGRgZGRnD6WZ7u8/nQ0tLC/x+PzweD0pKSkhvb6/u8/mI2+0mqqoaHo+Hy83NFffv3+87fPiwa/ny5fD5fGPEI9jFEUURl112Wf6hQ4e6LRyniXhNLKPiZ86cKVjbsOMVTqzlCYfDAV3X6ZEjR/C73/2u49ChQ12EECKKIuf3+5VYrMg7nU7xxIkTQ0NDQ5ms/SpROYj9PV71JF57MxFGxYZcE0LIzJkzkZKSYo7WYIXtidrUGYp/8OBBDA4OjtNyYHBLZ2cnVRRFEASh3zAM05i4zyH4dlFKU2NENxiGgYGBAZOnwzyK3+9HVlYWNmzYgGAwOGYvZisiFAqhsbERfr8fPM8jKSkJCxYs4ILBIJqbm/VYly14nieTJ0+WKaX47W9/OxQIBMxpTPGxRDAYxPLly7FmzZqC0dFRRRAEbiKGpCAIXCAQUBYtWpQ9a9ascbFJPNbkdrtBCMGhQ4fwve99r/P2228vP3ToUFdJSUny4sWLs5cvX553zjnn5M2cOTM9KSlJikaj2sjISKS3t9fcrhIh3tb0O877jOsIjvcy4XCYLQjO4/EQp9PJRFHNTHIiQ7LZbGhvbzd1QeO3YkEQ4Pf7cfr0aUOSJALgpaqqqp7PzTPZ7XZ7IBCQY16AeL1esxRh5WEHg0GsW7cOGRkZ8Pl8SFT07OjoQDgcNg0j1p/FHThwgOvs7FQLCgpIZmYmpyiKkZ6eLkydOtVWVVUVfPLJJx333HOP3UrdjfdQ3/nOd3J6enoC9fX1Qx6PR2ZxE6uo8zzPhcNhzePxyLfeemu+tQPGyiNii6S7uxuHDh2iH374YfuRI0d6BUEgK1euzJs/f35mdna27HK5xoxfDQQCqKqqGvzggw/aBgcHx+glnImREGf0jHpMWINDPLbW1dUVJoSQ5ORkQZIkalXwPUOYAlmWwfoTWYYafzyCIKC5uZmGQiFeluWAYRhPjnn+TAd/ww035AmC8BPDMCYZhvHUSy+99HL8a1RVNQghBqvT+Hw+WPWM2MGmpqZiyZIlsDYyWgNHxjS07tOGYSApKQlr1qwR/uu//kttbGzUkpKSxFg8RKdPn273+/3qyy+/3JeVlVWwZcsWnn2/1euwwTb/8R//MfXRRx9N2rNnz2lN0wxZlnlCCNE0zYhEImpeXp7zvvvum1NaWopgMGj2sTFtyvr6etTV1RmffPJJb2y7CmuaZpSWlqZedNFFk/Lz8wUWSLP4xgJHYMWKFekfffTRaa/Xe9bZdWcaApSodYkBsI2NjX5VVZGdnS3bbDYT9J3ImJhH8nq9eP311zEwMDBOiY9tf729vWhvbzdsNpuo6/pjVVVVLZ/ZmARB+E+73f7VGCtwzfXXX9/xu9/9bn9cvBTkOC4c28poOBwmjB1pNYqUlBSkpaUl1HpkxsQMLd7IFi9ezJ08eVKsra1VmpqatFg8QwVBILNnz3aGw2HtP//zP9tDoVD+9ddfL8WvVlZtT0pKwkMPPZT10UcfZb3//vvd7e3tPl3XaWZmpmPWrFnpl1xyiTM/P9+sqTFD8vl8+PGPf9xeV1c3GAgE1Fi2J3AcR5YsWZJz5ZVXFrHygxUAtHpHTdPYMGjeGvN8lmbOCZ4b004lyzLa2trQ3NwckCSJlJaWumRZHieIFg9cOhwOdHR04L333kN/f/84RJzFb+FwGA0NDQbP8yKltJlS+stx9nKWWtusaDSq6rqu8jzv4Hn+EQArrK/Zu3dvZMWKFYOqqqKrqwu5ubljqCHsgFwu1xkr5kzWZSIJmk2bNknd3d1aU1OTSggxpk+fLsa8C+fxeKShoSGlu7s7wnGcFE+nsKLThBCsXbsWa9asyfV6vbmMosKAQGZI1sbHhoYGHDhwoCc5OVn0eDxy7OJqhYWFSZdeemkRAEauP6MBxDppCYtHzqQ3cBb+OrG+lxEMP/74Y3V4eFjNyMiwLV68mA+Hw+OwN+sMmXA4jH379uHQoUPm1PNE5ReO41BbW0tHR0chy7JhGMa/VlVVjZsidcYA3DCM1ziOEwHwhmFEZVlefvPNN9+S4KV1hBAcO3aMRqPRcUDXRHNE4vfjWHA4hqPNBESTkpJwxRVX2B0OB9fS0qKePn1ak2WZP3nyZLS5uTmyevXq1Pvuu88z0SAcaz8dm+nmcDjAYhu/359QvEvXdRQXFyM/P98Z+92IRqO6zWYTLr/88mkMnEyk1RS/INjNzczMNCnEiOsyPhOdxho7xdNSBgYGsGPHjl5KKZk2bZprxowZJiwgyzJsNhscDgeYbnlVVRX++Mc/0t27d1OG1ieCCwRBQGNjI7q6unSbzSYYhvEfhw8ffjfROZ6xPby2tnbP3Llzz5EkaVqsMixQSmctWLDg+erqaoW9Li8vL4njuCsikYixYMEC7tSpU/HQAdxuN2bPnj3hheY4DgMDA9A0jSSqdmuahuzsbJKdnS02Njaqp0+fVkZGRrRTp05FUlJSuP/zf/5PhsfjoezGMpoKMxB2wWJqKXA4HJBleYx4eyKKiKZpSElJwdGjR/WmpqZRh8MhKoqiL1iwIGvx4sWe+I7XiR6xlDrS1NQ0vHnz5ixLh3J8F8yEGV6i51knySuvvKLu2rVrQJZlIS8vzxEIBGz9/f1kaGgI/f396OzsxIkTJ1BRUUH37dtn1NXV0VAoRGRZJhOxVGVZRnNzM06ePKnJsizpur79yJEjN07oEM52EVwu13WhUOhdnueXaJoWliRpsqZptwH4leWkdnEc19/f359RU1NjOJ1OYs3Y2BbDPJaiKMxbEY7jKNvzU1JSEJOESSiPFwgEMG3aNG7Lli1J77zzTqCvry8KAJs3b84sLi6mDLFlXiASiSA9PR2NjY0oLy+PfPWrX7X19fXhnXfeGbziiivSWafIROq8rNWFEIIrr7wyt7y8vEfXdYPneW7u3LkZiTxuojFhDEM7ffq0Lz8/3x3jnCdS+D0rnTfe47vdblRXV+P3v/99e6wfT05NTRVra2uD+FTAnou1kJMYy5IIgsAxI0qExDMvfuLECTQ3N2uyLEuGYXw8MjJyzZmO56xL6vHHHx/Qdf0KXddPchxn1zRNpZTetnnzZid7TUVFRR/P87sAkF27dulWrhHj/gwODqKmpgadnZ3QNA1Op5NlSebKLCwsTKhVaa0JRaNRTJkyhaxevdoeDoeRnZ0trV+/nmctT8yj7Nixw/jggw80TdNw5MgRxefzaZqmkerqaj0nJ8eZl5c3Tls7wU2lhBASDofJ0qVLce655xYMDAwoLpdLTEtLk1mR9LMEzYqioK6ubvCcc87JZ7HJmUTuJ2qpsoYAsizD7/fjV7/6Vaff79cJIVxRUZFDEATObrdzTqeTl2WZkySJk2WZs9vtHCPNJRoJyxIONuGgqamJGVIVgKuam5t9ZwxVbrzxRpsgCFcKgpCm6/r2Z5555mT8i1544YWOLVu2XMnz/C5JkjKi0WiBpmkeAEHLVvSEJElX9vX1kY6ODhQVFSEajaKrqwuDg4Pw+XzYtWuX2R+2evVqXHLJJTQ7O5sEAgGT9D9t2jScOHECqqqOQcitcD6lFN3d3Xo0GiXTp0+3Z2dnIxgMmgbX3t6O9vb20KpVq1ynT59GV1dX6Pzzz0/2er20ra1tdPXq1WlutxuJtqgEM+UopZQoioJvfOMbmceOHRvwer1RlpUmMvx472G323H06NGAqqr6+eefLzCVls/igRIJT1i6TvCzn/1ssKGhIWCz2cSioiJHRkaGpGka5TiOmwjHYgL3rBeQxayEEPT19aG+vt7w+/2w2WySrutvcBx3S3l5+VmHHXKCIDwhy/LveJ5/jBBSfvPNN3830QtfeOGFY4ZhbNI07R0AP/yv//qvMUOGDx06dFDTtBdEURRPnjyp9/T0oK6uDrW1tTh58iRCoRAkSYKmaTh27BieeOIJ3Hnnnfjoo49MCRlN05Camop58+YhNTV1zABC9v+YaBWGh4cNVVVJUVGRFH/hjx07xlBy1NTUULvdLkybNg1NTU1ISkqSZ8yYgXivkuj/rPmScZFyc3Px/e9/f1YkEtHffffdFlajS7RVWLe32KCg1q9//eszmQCZFdG2tlOdbfavruvmWPuf//znIzt37uy32WxCenq6raioyBFTtrMG9+ZPIs4So+56vV7U1tbSqqoqPRQKCbIsC5qm/erw4cNf/SyGBAD8ggUL/mAYBtU+zeddoiheMH/+/HPnzp17oqamZozB1NTUdH3yyScvV1dXH0r0YUVFRRWapl0BIL2vr0/3er2E4zjccMMNuOeee3Drrbfi4osvxtSpU9Hd3Y3GxkYcOHAAM2bMwNSpU83Ktt1uR0ZGhrkVMnqpw+FAcnIycnJycODAAaOjo0O/4IIL7HPmzCGKokAURQwNDWHPnj2h2bNnO6dMmYLKykq1tLTUPm3aNIiiiGnTpkmxbCohFzsRnmNlIUyePBmTJk3Ke+WVV5qHh4e1OXPmJLNFEq8EJ8syBEHAiy++2FxYWJj0rW99y5NIF2GiiZrxsZeu63A6nQgEAvjpT386tHPnzl6XyyVxHMeXlpa6XS6XwH36IJbxGuP+5XmeMPWU4eFhNDc3Gw0NDfrw8LAYA3LrdF3fWlVV9X//kmoIP3/+/PU2m21KbHVplFJNEIQpAK6bP3++XF1d/dFn/bDOzs5gfn7+EULI5YQQOyGEPvTQQ9xNN91EsrOz4XQ6kZqaijlz5uCCCy5AS0uLqfy6Zs0aVjA1V7rb7UZ6ejoyMjKQmZmJjIwMZGRkwOFw4P3339fb2tr0RYsWSfPnzyes7hQjwYuLFi2Cy+XCpEmT+JKSElBKkZycjKSkJDOV/yya3FaDYyDqtGnTMG/evLwdO3Z0Hzp0qN/j8bjS09NFlnozI+rq6tJeeumlxvT0dMdPfvKTfObFzlRCiR+OyIRfZVmGy+XCiRMncN99952urKwccbvdMqWUA8ANDg7qPp+PxpiehBBiBtyUUqJpGolGoyQQCJDh4WGcPn2anjx50mhtbYXX6xV4nucJIUOU0l/Ksnx7RUXFsb+Ybbt169ZJPM8/AeACQRC4WCEzQikloijKiqJs8/v9m1977bXPPOp8yZIllT6fb9H111+v/eAHP+BVVaXRaNTM4gzDQHJyMnp7e8lNN91EW1payL/+67/i1ltvpbEskFiJ/ImaHR988EHt7bffDl999dW2+++/X4w1OppxEzPK+HltiUbSn6FLd8JalsvlwvDwMJ555pnRDz/88JTT6RSLioo8DodDiEajen9/f8jr9UbXr19ffMstt7hYWedMMALD1awGGYlE0NXVhfb2drS1tamvv/56e29vb1SWZVFVVcJxHB9LpHiO43hBEHie53lBEHhBEHhCCEcI4TVNI4qicLqu8zGIh1gWVDOAVzmOe7qiouLUX81re/7551sBbLj55pvLFEW5hhByiSAIk2MYS8ThcFxMCLkMwIuf5QNXr15dGgwG5yQlJdErr7ySAKCKooxjJPb19ZHc3FxcfvnlePTRR1FZWYnrr7+efBo3jheIsG4FdrsdeXl5PCGEq6+v14aGhkTriDA2SdJK55iIJ54IX7HaFBIoqjDOj9PpxL333pt83XXXza+pqSGNjY3e4eHhcEpKim3JkiU5K1as4EpKShAIBJAIGIzvWpZlGbIsw+v14vjx46iuro7U1NQM1NXVjfb39+uGYfBut5tLT0+3OxwOURAEnnkmRVHg8/lo7LsoIYTGOnKZuhuJgZA8x3EhSmmTruufcBz3tt1u37V3797Af5skyf7z7LPPHgZw+LbbbnvQMIw1hJDrAZwbiUR8hmG0fNYPNAxjtqZp0owZM7SioiKOFT3jb6IkSTQSiWDGjBnE7XbTvr4+DAwMkNgUSGoJTGkC/hRmzZpF7HY719zcbHzyySdYt26dyUb4LDqTiTK3BH+nCYzLSpWlfr8fGRkZuPjii+nGjRuTACQx78NEV8/EH+I4Di6XC7quo6WlBXv37o3s2bPn9LFjx7yKonDZ2dnSvHnz0mfPnp06ffp0OTs7G8nJyXC73Wb9M9a/hkAgwGJRWldXp5w4cUJn7WIOh4MjhHQLgvAgpXTnwYMHuz/vBtxxoOVvf/tbL4C3Abx92223FWqapj3//POf+YsppYW6riM7O5vabDYmkTOu8GmpWNNY2wwCgQDNyspivBs6EWbj9/sxZ84clJaWiseOHVNee+216PLly2VrYfezTsA8U0NCAuCUxmdejNGZSIx9IrUTq5JbJBLBwYMH8fbbb/d8/PHHncPDw7SgoMB+zTXXTFm1alXKjBkzkJSUhEgkgtHRUYyOjqKnpwd+vx+appnezOFwIC0tDVOmTMHKlSsJz/PyyMgI9u7di9dee00/evQoFUWxkOO4H6uqqgP4/RduTHGGdfqvaHlyiaKI3NxcylZn/FRJ6yMYDELTNNhsNlPyzipxHH8jWOMmpRQzZszg6+rq+MrKSv0Pf/iD8c1vfpNjEs9nonL8JQ9rdX4iqms8C3Oiwi3bzpxOJ1RVxe7du/Hqq6+2HzhwoJdSSs4555zsyy67rHDhwoUQBAEdHR3Yu3cvPXXqVNDn82mKolCWrVlwIvNfQgiRZZlzu91cfn6+MGfOHGzcuBGXXXYZv2PHDjz66KO0o6OjODk5+XdlZWWzDh8+/P0vzZj+moeqqhxT1rBiP6wGZo2FeJ5HR0cHIpEI7HY7AoEAUlJSxvRpMUNk3iYYDKKhoQGHDh3C6OgosrOz+dHRUfz+97+P5uXl2S+++GJzMvfZ0v6zVeqt5Y44BblxGd/ZBuuwjhVRFHH48GG89NJLp/fu3dvLcRzZuHFjyTXXXJNZXFyM06dPY9u2bWpbW1sgEokYoihykiRxgiDwkiQRK+BoETk1/24YBnw+H44ePapVV1eTt99+m1uyZAm58MILsXTpUvLAAw9ou3fvpsnJyf+2ePFitbKy8v7P695/rjrgmzZtmqUoyjcikUjJwoULjSlTpnCBQMDU+WEVe3ahRVHEH/7wB3L69GlkZGSgu7sbDQ0N6O3tBWNs+nw+dHd3o6WlBdXV1dizZw/Ky8vh8/ngcDiI2+0mvb29NBqN4uOPP1ZdLpe4aNEiMxCfqEj6Wba7ROPgEz1/pu9gCYDb7UZHRwcef/zx4ccee6yuubk5uH79+oIf//jH0zds2OBsbm7GG2+84S0vLw+Mjo6qoijyNpuN5z91eWM8kUWIYgySzf7GcRzheZ4TRZGLRCKor68nR44cQX5+PrZu3Uq6urrIJ598otvt9vOys7OP9PT0NH0e9/+/PfD5qquuSu3r69saCoW+Hg6H5xqGIQAwWPdGSkoK8vPzUVZWhpUrV5pi5RzH4eTJk+Sb3/wmdF2n8+fPR0pKCiKRiEkbZaxLq/QOmxVnDWAHBwdpU1OTriiKHo1Gja985SvC7bffLhYXFyMcDpvxzET6SGcxMBLHJZqQERkvEsHzPLXb7VAUBW+99RZ99tlnT7S2tkZXrFiRdueddxZNnToVFRUVKC8vHwkGg7rdbhdisAixyAUz+cMxwGO8R7IMkyYWdWDzOVY5uOSSS3Deeedh8+bNen19vWi32w8fPnx46f+4MS1duvSrPM8/Gg6HiwRBQEFBgTFt2jRaUlJCnE4ngsEgOjo60NjYiMbGRmiahnXr1uHGG2/E/Pnzce+99+JPf/oTCgoKsHDhwnFbE9sm45mJ1gCZzUM7ffo0ra+v13meN4LBoJ6dnY2vfvWrtgsuuIDk5eWZVFqrssjZYql4Y7JyreKPgX0eK3WwKZVtbW14/vnn+7dv396TlpYm3HHHHaXr16/njh8/jo8++sgbCAQ0h8MhxNqhLF9lHpxpTOzvVkNjf2fGY206sE4qZ9fR7/fjlls+paTdfPPN1G63cwDWHD58+OP/MWM655xzHgyHw/dHIhF85StfUbZs2cLNnTuXE+KUDZkIaE9PD/noo4/oiy++iMHBQWzatAkHDhxAKBTCwoULkZKSMobSm4iFmGjKJcdx6O3tRWtrqxGNRgkhxCCEaKqq0kgkomdlZZFly5aJ5557rjhr1iwkJyeb9TIGosbrjE80GTIeFWelHsaXUhTF3JJra2sDdXV1o62trYH+/n7toosuyvrmN7+ZoWka3nnnnWBvb2/E6XQKPM9zMW2uMWQ5ZjTWuXLWeMlae2OeyrrtJaoXWkW8vvnNb+L+++/Xa2pqRKfT+XB5efm//Y8YU1lZ2UOGYfxIEATte9/7Hi6//HKO0SwCgcAYoVOWHsuyTGw2G+3v78dTTz2FV155BSkpKRBFEdOnT0dGRoa5eiaaUxLPmAyFQujq6qLd3d0GAJHjuBDP82FFUZIURTE4jjN8Pp8uSZLhdDpRUFDAzZw5U5g5c6ZUWFiIgoICuN1uMHmaBKPnx8VBrCCtaRpGR0fR1dXFDCjU0NDgO336dGhgYCDK8zxRVZXa7Xb+rrvumrJ+/Xpu165d9MiRIyOSJPGyLHNWT2T53nFeyWJbpjeybmPxxjVRkyW7fl6vF5s2bcKJEyf0l156SfR4PNvKy8s3fenGtHz58mui0ejLgiAojz32GLd8+XJOURQEg8FxAa81vWYdtJIkweVykVdeeYX++te/NrtY3G63kZ6eTlNTUznW62X1Aow1oKoqAoEAHRgYoDHmgBSb4niUENKk6/qFgUBAvvXWW7mVK1di586dxu7du1Wfz2dEIhE91r1reDweJCUlkczMTD4nJ4fPzMwUkpOTebvdzsXkj83ziEajCIfDNBAIaMPDw2p/f7/S29sbGRkZUYPBoBYMBrXYiieSJBGbzcb7fD6tpKTEcd999+UKgoA33ngj4PV6NabGErd9jqGDWFJ/61ZFLIKtxPo+q/HFsxYSZbLhcBhTp04Fz/P6s88+Kzocjn0VFRVrvlRoYNWqVQWRSOTXiqIYDz74ILd8+XIuHA4jHA6bDX7WFcYCVgZAskLs6Ogoveaaa9De3o6XX34ZbrcbwWBQCAQC6OzshCiKmizLRoziYcoih8NhGo1Gia7rItvmBEEY0jTtP3mef80wjPeCwaDz8ssv17797W+D4ziEQiGur69PHBkZMYaGhrhAIGAoimJommYMDAwYfX19ak1NTVTTNEoIMWJDoKllXIbB+usopZTjOHMMRuyHczqdss1m43ieJ+Fw2BgaGtLOP//8jG9/+9ueyspK7N2712u323mHwyGy+XCJDMoSG1lnm4zxTrGtnXAcx2amEFVVxyjCseNjsVu83CBreLWQGPUvHWfSdf3BYDCY+bWvfU25+OKLhWg0aiLccQVVYl0R1m4R5okCgQCuu+467N271xgeHuZlWX7fMAzJMIyFkUjEw1RGJih/eAkhxyil2wRB+K/Dhw+3L1u27P/oul48bdo05d577xU4jsMbb7yBt956Cx6Ph2RkZHBpaWmcrus0HA4boVCIRiIRg/2wOSbMeFRVNdh8NkIIFUWRUXgpz/PEbreTGJOROBwOjuM40tjYGPL7/cY3vvGNgksuuUT405/+pLS2tkaSkpJES6AeH1iPMRxLMG96IEEQCMdxRFVV+P1++P1+BAIBhMNhEtMJNyUDWROAJElwOp1IT09HWlqauZAZB0tVVbS3t7NLO/qlGtOaNWsWj46Obs7JydHvuOMOXtd1BAKBMeJVViV/aw2LZTgx72LWkzIzM7F06VLjnXfeERwOR01FRcW/LViwYArHcSU8z+cDKKKUZsRWZUDX9W4ALYIg1JeXlzez71i0aFGOYRhbVFWlW7du5ZOTk3H8+HHs3r2boepEVVXC9DCdTifvdDoppZSjnz4Q43Sx6eF0ZGRE7+7uVln6lp2dLRQUFIixgiwRRZEJ1JPh4WEthg/RH/7whwVz5szB008/HQ4Gg0ZSUpKYgI05ZgaexZOz60gYcyISicDv92NwcNAYHR0lgUCAGIZBPnWS3LgWcha7RqNR+P1+9PX1weFwoLi4GKmpqeb98vl86OrqYsXnyi/VmFRVvSsajYrXXnutmpGRwY+OjiJOAX9cDCYIApqamrB//35Eo1HMmzcPS5YsgcfjwcjICAghyM/PJ7HSyWwAqK6ubo5RIj7zQ5bl1eFwOCs3N1dds2YNr6oqduzYYXarWqRlGAZDLVsKRWzUliAI5iSAlJQUwePxCE1NTUo0GqVdXV00LS0NmZmZPGN/iqKIYDBIKysrI7qu84899limLMt48sknQ5IkEVmW+fggOw5WIHFbHCRJIoZhYGRkBL29vXR4eBjhcJjous7FqCbEmoiwWJKNz2ACY9b6ZCgUQn19PUpLS5GRkQEA8Hq98Pl8fKxjZ++XZkyrVq0qCAQCm3Jzc+mmTZs4TdPACPzWtDNOqJRqmobCwkKsXbsW1dXV+OMf/4gnnngCl1xyCS699FIzrY4Fu8ZfnUUQslRRFDpjxgykpKSQhoYG2tLSAiZSmkD3kgWt1GpQVnljTdNocnIyP3v2bFtjY6Pq9/uNuro63eVy8TabjcQCc3ro0KFoJBLhf/WrX3kURcHLL78ccTgcvIXOSxKUWIgVOmHMx0gkQnt6etDb20u9Xi9i3pQjhJAYe9LsgWOwBKXUbCMzDAM9PT2orq5GJBIxxScY9aW1tRVJSUlwuVzo6+szKKUCpbQ+NTW15kszJsMwNkQikdQVK1aomZmZwvDw8LhZHonGbLEguaSkBKWlpbj00kvxzjvv4IknnsDhw4fx7//+72htbaWxMstfTYkwDCNP0zSSkZEBwzDQ1tZmekYrjmQNUBOk3sxbsXOjrJ42depUcuLECd3n8xnNzc3GokWLREVRaHl5udrb20seeeSRpKGhIezYsUNJSkriGWKfACMbk23FvCEikQh6enpod3c3gsEgdF3nBEHgJEkirFHU7XabZSlG/o8lNkQQBHPsfHp6OrZv344HHnjArHkyz8yEZwGgv7+fxq7Pqzt37gx+acakqupGjuPoypUr2Z5MBEGg8YDYRABjLLUGz/O47rrrUFZWhm9+85u4/fbb4fV6SaxP7sB/p77M5HM4jqOyLCMajZqCpCwgtWY3CTAYEgNcmXcilFIa6/zlJ0+ezDU2Nurd3d0oKSnBwMAA7ejo4H70ox85otEo3nvvPdXj8XCKojDMipwB6yEMIe/u7qZ9fX0IhUIcpZTIskxSU1ORmpqKpKQk2O12xAPBlqI5G6mKqqoqtLS0YP369bjooouQlZWFe+65B/39/WPax0ZHRzEyMgJN03ie58OCILzypRV6ly9fnhmNRh9yu93ub3zjG2A3ypLejgm+Eafkz4yM4UaBQAA5OTkoLS3FSy+9RBVFESRJGrbb7d9tb2//q9h+ubm58wkhawAYBQUF3O9+9zscPXoUAwMD5s/Q0JDZDiXL8piuEoZm9/f3o7a2Fq2trSQSiRCXy0VEUSQxHIyoqsoNDQ2R0dFRtLW14eabbxYLCwvJBx98YIRCIVJdXU1jk86J3W4nLpeLxBiOJFar43ieJ8FgkJw6dYqcPHmS9PX1cQA4j8dDcnNzSVFREfLy8uDxeEwjii8jsdTfMp7L1NA8evQoQqEQ1q1bh6VLl+Ljjz+Gz+cz28YikQjC4bAmCIJgGMazlZWVL3xpxjR58uQ5wWDwX4uLi/Wvfe1rhKXsicoM1q3OegHipxYFg0EUFhZiYGCAnDhxwnA6naJhGDs6Ojr+Kv5xZmbmkCAIN/r9fvH999/HyZMnCbt47Bg0TUMgEMDg4CBGRkZMSogkSWCzXerq6rBq1SqsXbsW9fX16OvrQ0ZGBgghJDYmlfj9fm5wcJCbP38+t2zZMvLRRx9hdHQUJ06cIKtXr+avvvpqvr+/n1RXV5O0tDTO4XAQAESSJBKNRsmpU6dIQ0MDGRwcJIIgkIyMDEyaNAn5+flISUmxzpSJV7kbs3hZqzsTnGDJEFNDGRoawtq1azFnzhx8+OGHVmENSgjhAYQ5jtvS3d099KXxmSilkzRNQ1pamuF0Onkm5j5B2YFa1UNsNpsJB1hVy1hKu2DBAmzbto1SSiVVVR9bsmRJLcdxvCiKJymluw8cOLD/s5yEJEmplNKooij2aDRq5OTkQNd1OBwOkxsViUQQCoUQCoUQCAQQCoUwMjKCvLw8JCcn4+TJk9i0aRN+/OMfQ5IkFBQU4Ic//CFCoRBSU1OhqipcLhfS09PBcRxWrlyJffv2QdM01NXVkY0bN+LBBx+EYRhYunQp2bJlC9ra2pCWlmY2BZw+fdrkjhcXFyM9Pd3MvFhVn4G8iaSdrZQYptCXkZExrhBus9lw+PBh8DyPa6+9Fvfffz+++93vsu3XEARB1HX9xcOHD5/8UslxiqIkAYDL5UKiVp1EzENBENDZ2cmaHjF9+nTzojINJubCNU3jIpGIoWnaPADzGPtSkqQHly1btovjuB8dPHjw0ETHt2LFivsMw/ix3+8XcnJyjK1bt5LVq1djcHAQ5eXlqKqqgqIoptqJqqoIh8Pw+Xzw+Xzwer0maW3r1q3m2CyPx2PGWNYCb1paGgoKCtDa2mqm2Lqu46qrrjJrk2yiZW9vLzo7O9HS0oJwOAyPx4Np06YhNTXV1FOwjsSwtlTFL1braFRRFNHZ2WmqmsQ3TTBI5MCBA7Db7bjssstw6tQp/PrXv6Yej0fUNK3bMIz78Tk/zmpMzIswXtBERhRPlWVdoh988AG6urowf/58XHvttSgqKoLX64WmaWhra4OmacjKysLMmTO1DRs20JGREUaCIyMjI1/xeDwrV6xY8f87ePDg03H0lyye55+MRqOXhUIhY9OmTca3vvUtkpubaxZknU4n7Ha7yRJg3tFms8HtdpvjHIaGhnDBBRegpKQEg4ODcLvd2LdvHyKRiCk/zVqVnE4nCCHw+/1g08HnzJlj6pnH1E7Q3d1tjvOwgoYMvLWKuVsNiLEsWHWfLTwrU2JgYACRSATFxcUmqh0fXhBCYLfbsXv3bqSnp+P2229HfX09du7cSZOSkgRCiBvA4JdqTIQQH8dxGB4eNrs/JqJpsP/ruo7MzExcc801uOyyy3DkyBE888wzuPnmm3H33XfjoosuQldXF3bt2gVKKb7+9a9j8+bNJvp5xRVX4NSpU3j66afV9957T3Q6nb9dvXp15r59+34Wo7/MA/BfkUhkht1uV77//e/zV1xxBQGAEydO4MMPP8Tx48fNFSrLMo3dRMKoJxzHIT09HUlJSRgeHsaqVatMCkw4HMbRo0eRkZExxpjivQOrAmzcuNGU8uN5Ho2NjRgeHkZKSgqKi4vHlDOsnoh9HuPJS5IEu92OgoICMmfOHEydOhV//OMfKRvKw4ytt7cXkyZNGsOiSJRVs2Tj7bffRl5eHh544AFy8uRJvbe3N1OSpGcAfOXzNKazBuAFBQUypfTWYDBIvvKVryA5OTmhDE18DY3FSrquY/Lkybj00kvR1dWFxx9/HCUlJXj99ddRWVkJj8cDwzCwfPlyfPDBB/jggw/gcrkwbdo0fOUrX+E4jqP79u0zOI5bl5eXV1dQUOAC8P7IyEhhcXGx8uijjwrnnnsu8fv9eOONN/DKK6+gq6sLsizDqjZi8bTEyuIcGBgAz/O46667AAAOhwNtbW14/fXXQQgxRbLiM1RRFBGNRtHW1obNmzejoKAAwWAQLpcLH330ESoqKrBgwQKzhGG9ZsyIQqEQBEHAlClTsGLFCqxbtw7r16/H6tWrMXv2bKSnp6O9vZ2cPn0aMSouOjs7QQhBYWHhmOJ6og5k9l2qquLUqVM499xzUVxcTLZt26aJojiloKAg3NnZeeDLNCY/gKv8fn9aSUmJMW/ePMIyg7OxFNmqiUaj0HUd5557Lo4ePYoXXngBHR0dsNvtKCoqgs/nw/DwMObNm4c333wTtbW1GBkZwaRJk7B8+XISjUZx8OBByLJ8PsdxNwQCgdTFixerv/71r4VJkybh6NGj+O1vf4uamhrTiOI5PRYu0JiaYWtrKxYuXIivfvWrCAaDkGUZO3fuxM6dO80RY36/39Q7YOcUDofR0tICnuexZcsWUwtSFEVs374dp06dQklJyTgEnud5k5S3YsUKfP3rX8cFF1yA2bNnIycnx/yOoaEhSJLENJKI3W4HpRRtbW0oKCgwJ6on0tCM91Zs8tPo6Cg2bdqEkZERUl5eTu12+zmTJk16o729ffBL2eYOHjzoX7p06ZuyLN/z5z//mX7lK18xTySRAkjckGQmi2wCbeeddx6qqqrMirbT6YSu69ixYwfY+PPe3l589NFHaGtrw6233opvf/vbpKWlhe7evTtVkiSce+652sMPP8zb7Xa88847ePvtt01F20RakawaH4/VsJrW4sWLTTYDpZQcO3YMNpuNTps2Df39/ejv78fw8LCJ/SiKYupfzp49G9nZ2YhEIuZz7e3tpjezYllMTSU1NRWbN2/GvHnzTIYmY1+43W40NzcjFAohKytrTFLDZpkkJyePUS0+W8cNk/U5cuQIZsyYQb71rW/h0KFDemdnp5NS+u8ALvs8jOkzicorivJbURRHm5ub+eeff5663e6EjMhETYhxKTxCoZAZHzARiVixFtu3b0coFDKDx1OnTuGpp56C3+/H9773PZKcnKxLkqTfd999vN1uxzPPPIM33njD7M1PxNBMcJHZjDRz3MbcuXMRiURIbEwEOjs7kZycjJSUFEyePNn0GkybnOM4FBQUEIfDQSZNmgSLpCCCwSB6enrGjdVi2016ejq+853vYN68eQgGg2a8xGpsNTU1OHjwIKZNm2Y2UjABru7ubqSkpJyx1T3+x3ovRFHEW2+9RTmOwz333MMriqIRQi5dvnz5lV+aMVVXVzcbhvGD5ORk7s9//rPx3HPPmXNCEt1ANrmSnUys85QMDAzgvffeA4MarOg4m+rY399vZk52ux3t7e14+umnUVhYiGuvvZZ0d3eTt99+mz777LPYu3ev2UJlbfRMdEEtOAwjlWFoaAiZmZkoKChANBqlkiShr6+PdnV1UeYxGb40adIkzJw5E7Nnz8acOXOQn59PVVU1A2EGGg4PDyMYDMJut4/rq+N5nlx//fXIyckxhwKyrZGNEnv//fexYcMGMwMdHBwEz/Pwer0Ih8NITU1NxNZIqIkZ/zyToX799dexevVqsnHjRuLz+SiAX6xZsyb9SzEmAKisrPyNruuv22w28YknnjAee+wx6LpuDoph6a5VmIvxwF0uF6LRKH7xi1+QU6dOIT09HR6PZwwgx0TcWXGWGaHNZsMnn3yCd999F5s3b8aUKVPw5JNP4ve//71Z9IyvByagepg8H8MwTO2DwcFBTJ8+HR6PB4qimEi41+tFUlKSuWWyeSTWcWGMy5Wbm0usafvQ0JB53NYHa5yYPXu2VWecuFwujIyM4N///d9RW1uL22+/HUlJSdA0DX6/H93d3WYMZbfbTY/HBjpbPc9EO0M8/nT48GHU19fjX/7lX7jk5GRN07TiSCRy75dmTABgt9tvpJS+7Xa7+T/84Q/G7bffjtdffx2hUAgulwspKSlwu92mJHJSUhIkSUJNTQ3uueceunPnTup0Osc0D7CbEwwG4XA4xqnjM53ud955B7quk40bNxJVVWGz2VBXV4f+/v4xfXQT9cMxLzM8PAyrsMT06dPNY+E4DqdOnTJbluJn11oxnFAoZPb3M6kcURQxMjICRVESvn/BggVjUnin04ndu3fj/vvvR2FhIe6++27Y7XYT32IQAwCMjIwgNTX1rJ3J8cF4IoF7juOwbds2mp+fj82bN3M+n08HcEdZWdnML422u3fv3sCyZcs+5DjuEofDYRw/fpxrbm5GcXExSktLzRKBzWZjA1tQV1eH+vp6KIqC1NRUZGVljQmUGesvFAohOzs7IV7CBsC8/fbbOPfcc/HSSy8hOzsb6enpOHbsGEKhkJkqn4FyjEAgYMoJsmGJ06ZNMyV4CCFoaWkZwxVKpOzPSPl2u51mZmaOASAHBgbARnNZPWwMP6JMq5MQgieffJJWVVXhzjvvxIIFC8whOkwIds+ePWOUg9kucCbKz/8nEDzGeGhsATEaMDo6OvDhhx/SG2+8kXv33Xf17u5upyzLvwCw8UsxpthNmefz+XDbbbeRmMQe2traUF9fbwbSgiCYfWmCIMDlcpk3nwWrDFqglJrzOpiOZfxFYnW2iooKumTJEpSWlqK7uxszZ87E9OnT0dTUBEmSwPQiEwle6LqOgYEBTJkyxUwEHA4H2PxfJjNoxaisupfxnbtsfEZKSoqJIem6Dla7tBoTSyhY8dkwDPziF79AX18ffvrTnyIrKwuBQMCMoVwuF7Zv3466ujp4PB709fWZnO5YUwMsjEuz5y7eg7KwIWaQhHUPsRh1z549WLFiBb3zzju5u+++W5NlecPSpUsvqqio2P6lGJMgCIKmaZg6dSqWL1+O3bt3gxBi8o4ZUCkIggn4uVwuEzFmF56d7MDAAPx+P0pKSmCz2RIOMmbZUCAQQG1tLWbPno1t27ZB0zTk5ORA0zS0tLTAbrePmTtrlSNmQ35mzpyJ1tZWs4bm8XhMzhPDu1jJ5Ewt5KqqIicnx/QirAV7eHjYZCJYb6zf70cwGER6ejoeeeQR+P1+/PKXv4QoimYwzuLLTz75BK+//ro55TMQCMBms7FrSOIlFOO8JuNlwefzYWRkBMFgkDCRNJfLBZvNBqfTiVAohHfffRdXXXUVXn31VVpZWQmHw/Hvy5Yt+6i8vDz8hRsTz/O9siyjoaGBrl69GgUFBWY6zwLu+JYbaws1w6Z4njfFqZKSksAq/WeKCWRZRn19vYmas6A/Ly8PXq8XLS0tmDNnzrhhPoZhoLW1Feedd96Y8RZsUrnP5wPTkhoZGTE//0wa3JFIBKmpqeOG3IyOjpqz5Kx9a36/H6dOnUJzczM6Ojrw8MMPg+d5cySazWaDoijYtWsXXn311TFjuoLBIFJSUqxJBo1vo2eLkxCC/v5+dHR0IBqNIj093Vw07LisCUNFRQVWrVqFO++8k7/llltUnufn6bp+NT6jUuBfHYDHtotyQgj27dvHORwOLFmyBEzHOx7AZFmQ1d0zvCMcDqO9vd0EKq2a2hMJcLER9kNDQ3A6naYHMgwDRUVFiEQiZvZjlSYeGRkBz/M499xzcfLkSbPVp7Cw0Ky9UUoRCAQQDAbHTIBMlCXGBkKbrebMaHVdx+joqGkEVoN0Op1444038M477+C73/0uPB4P2OxdTdNQXV2NX//613j++efNzJJBJNFoFHa7fRw9xSroIQgCRkdHUVlZiePHj8PlcmHRokUoLS1lQ68pW3xWWrGqqnj77bdRVlaGCy+8kPj9fspx3PfLysqSvnDPpCjKB3a7vbm5uXnyiy++qF1zzTX8oUOH4Pf7TeAwUeHRKorl8/nQ3t4OTdMwbdo0U4bvbFsLe7BAm61eXdeJw+FAdnY27evrQ05OjrmtqqqKpqYmrF27Fi6XCwMDA/B4POaNZ1V3l8uFnp4eqKo6brpRohEWuq4jOTl5zCJgN96qP2CNX/r6+nDrrbeipKQEb731FtNgQG9vL7q6uszY0OrJGcjLjCk+KWD9dE1NTejp6UFmZiZmzZoFp9MJwzBMpDzWvEktmgTm59bX16OpqQm33XYbt3fvXo0QMh3AdwD8+Av1TFVVVSFCyC/dbjd5/PHHsWfPHtx7773weDwIBAKm1VvpK1YaRU9PD5qbm2EYBqZPn26CcJ/5gGMoM/MQsYtCKaU0IyMDiqKYwKcoihgdHUUwGMT69etRW1trXtjCwkLs3bsXr776KtLT03H48GE8+eSTZvBtPaZEnoltsyzrYyg1q+PFp+uBQAAzZszA2rVr8eabb+LZZ5/FW2+9hSNHjphlEmZI1vey0a7smNh3s66WYDCI2tpa9PX1YebMmZgzZ44ZezIYgOf5cQJl7PjZNdy+fTumTJmCjRs3cl6vVyeE3FVWVpb/hRoTAJSXlz9FKX2C53nx3/7t34xXXnkFV1xxBSZPngxRFM0ftoerqoqBgQE2agputxulpaVISUkZk1b/JQ9RFMcM+mHSOi6XC4ODg+aFam9vx+zZs1FUVIS6ujqzfsayML/fD0EQ8Oabb6KxsRFTpkyBLMtnLFMw8a6dO3fik08+YVkWXnnlFbPpkXlaZryGYWDBggVQFAX79u1DWlqaybdiC83qydj1YACrZesmsY4U0tfXh6qqKnAchyVLlpjJSPziNAyDaYKPWxxsiHNraytqamqwdetWkpSUZGialkYpveNzZQ1M9Ojq6tqel5e3UBTF0oMHD2qHDx/mJEmC1+vFyMgI60JFX18furu7zSynsLAQRUVFY3hCn7UkYF1dfr8fSUlJY9gLzDsMDQ0hPT0dwWAQJ06cwE033QSPx4P9+/ebU7QjkQh6e3tx3XXXobi4GNu3b0d/fz8mTZp0xkSA1eCcTqc55fziiy/GkSNH8POf/xxZWVnIyckZpzMlCAIGBwdRWVlpdtLGg5qJrsXg4CAMwzA/kxEPBwYGcPz4caSlpWHOnDmQZdnMhGPoOInfoi1qcwkHSvf29uLCCy9EX18fOXLkCLHb7dOzs7Nf6OnpCX0hMVNcMD4kiiKKiooopRTV1dXjeuZEUUR6ejqSk5NNKqwVIvhrHgy3iadasJFZLJhmlf6VK1di165dY7bKaDQKm82G7Oxsk22ZaPBP/Epmz7FzYdqdqqqC5/kx8Zr1ZnIch76+PvT09JgGHf/ZibZThtWx31kXTUNDAzIzMzFz5kwzk46bMm6+ZyKJxXhmbGdnJ8rLy7Flyxby7rvvarquZ/E8fyuAf//CjYkQIrPuiClTppjUXiagzjhD1otxJpR6IhpwAoqLWUi1rm4LsxK9vb0YGhrC0qVLkZ6ejrq6OhN5ZpkSS8lVVUVvb++YIPdso7/YjU5JSRknFT3RCAv2/RPQdhKi9kyemcVlfr8fjY2NSE5OxrRp0yYcI5ZIMnqi68keNpsN+/btwz333IN169Zxf/rTn2hycvK3li1b9tRnGcbz3zImjuPaKaU0psbBxMvHnYSVqnoWesiEbVTx8YvD4Rgj/GWFDxjCrWkaLr74YvT392NkZAQul8s0BKfTiUgkgvvuuw9JSUno6enB1KlTzVhronlv1uPQNA1JSUkmJTeRFvhEY14TLZ5ECr3W+EfTNDQ1NcFmszFDopqmkXitzgRjziYc8mPNuEVRRHd3NyorK3H11VeTbdu26ZTSLABXAHj6CwnALauzguM4EggECEtBrRnHRIP5PotnSrQNWI1tIqYnK7jGxrHjnHPOQWNjY8LujZkzZ6K7uxtHjx5FSUmJGZRPRGOJP76kpCTs3r0b77//Pt59910TpZ7IgD7LpHCrUVkDcgBob29HJBLB1KlTWVeKOc1yomOM//4zLQ62je7fvx9Tp07FggULaCgUogC2fGHZnIVFsA9Ar6ZpfH9/Pz0T8+9sY9fPJJ38WWIoq7a4LMuIRCImC7KmpgaSJI0xJkVR4HQ6UVpaijlz5pj9Z2fzKlb0uKSkBCdPnsS3vvUt7N+/H8XFxSbKfKbAeiLvNJFR8TxvyuMUFRWZ7FRrxhyvFMeK1ex56+KeKF5jW3F7ezs6Oztx0UUX8ZFIBJTSshUrVsz/Qre5/fv3jyxZsuT/iqL4k56eHt3tdgusYfGvCa4nQr7juTsAElbMGZuRUWBXrVqFoaEh9Pb2jhmCw947AbFvwvjH2ujI2p7mzp1rItbxGeqZtuvPEitaKTodHR1ISkpCfn6+Wc7p7+835R9VVTXDCRY3spYuj8fDwg8a83YkfvuzHrNhGDh06BBWrVqF9PR0VdM0Sdf1rwCo+cI8EwAcOXLkp7qu7yOESK2trVqsgfIzzy75awyMMTnZDzM2Jq83OjoKl8uFhQsXor293STexfPArWJZrEwx0XabiHDGPCHDi86Uof01YzfYe1hjaG5uLoaGhtDU1IQTJ06gtbUVAwMDZrklLS0NqampZoF4eHgYLS0tOHbsGBobG82hQLFzpQmovRQAlSQJx44dgyzLmDFjBokBp+d+oZ7JAiDeoGnabsMwJjU0NEQnT57MMUDyv/OwnCg9U2bFDCkmME8URcHcuXMxZcoUvPbaa+PipUSMRCalwwZQszqYxajIRGl1LC0fg+0koq3Ee7gzDQGK//yMjAwEg0G0tbWB53lkZ2cjMzPTZGQkGsbIkgSmPtfT00N9Ph8yMjJYZjlGMJ9lmYIgIBgMkp6eHixZsoR+/PHHusPhmLdo0SJPVVWV9ws1pkOHDrWXlZVtMgzjVU3TZp08eRKFhYXIzs4eN2NtosztTMaUyDvEewiO49DT02M2Qi5fvhw8z+PUqVPW2lTC77ZuX59lxNhEXvdMEy7PtpUlSu1lWTa9J6OwMJnreH5UfBDOQElBEOBwOJCenj5m3Ig1UYjflhkfrb29HbNmzWKGV0AImQXg4BdqTABw+PDhE3Pnzl0rSdLNuq47mpqaiKIoyM/PZxbPtiSmQgpKKc90JhkaH9vPjZgbZqxBQgjRjU/TFyP2Hi6mSclzHGcEg0F0dXWJPM8LmqaRtLQ0GolEtKGhIZ1SShVFIYgNb455GZ3Vt9j113XdYMcQe50QO14jNiTQ3ArY74Zh6LHPYOmlbkXKY96KaX4b+FTy0KpSp1qYk4QQwhmGwTHqTExYnguFQmTSpEnGpEmTdFVVSUx/yoipEVN2Tdn2DYBj1zt2PBwhhLCAXFEUzrBI21nuA6eqKlRVpS0tLcTpdHIOh8PQNI0DcEbFlP8/eUFkIgN6VPEAAAAASUVORK5CYII=" },
];
};

__wordlyModules["homeNoriAssets"] = function (module) {
module.exports = {
  "classic": {
    "width": 690,
    "height": 343,
    "jpeg": "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"
  },
  "elegant": {
    "width": 690,
    "height": 345,
    "jpeg": "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"
  },
  "romantic": {
    "width": 690,
    "height": 335,
    "jpeg": "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"
  },
  "scientist": {
    "width": 690,
    "height": 297,
    "jpeg": "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"
  },
  "sleepy": {
    "width": 690,
    "height": 283,
    "jpeg": "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"
  },
  "student": {
    "width": 690,
    "height": 308,
    "jpeg": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAE0ArIDASIAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAAAAECBQYDBAcI/8QAWBAAAQMCAwMIBgUIBwQHCAMBAQACAwQRBQYhEjFBBxMiUWFxgZEUMkJSobEjYnLB0RUWM0OCkpOyJFODotLh8ERkc8IXJSY0VGN0NUVGVVaEs+IINpTx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAMREAAgIBAwMDAgUEAwEBAAAAAAECEQMSITEEE0EiMlFhcRSBkbHwI0JSoTPB0WLh/9oADAMBAAIRAxEAPwDqiEIAJNhvXiHqAnhlhd52R8UXDN2ruvgFrVlTzDb7DpZDuY3f433BPgN2bO0AbMbc9uq06nGKOmmbTz10McryGti2xtEnhYaqMxeB2JNDJqmqgh9qKnl5sP7yBtHzC5nnnCYsHxyCopGtgpaturQOi1wsHfCx80ar4CUXFWzsZqI+Fz3BV/NWZ6rAjG9mGc/TPGs5kNmO6nADTvUVhOP1OGVAwzHYZA5o+jn9babwN/aHaNesKx1tXQxUJmramnbSyDZLpHjYeDw7e5ZqV7F6U1synyco9fYlmH0otrq5xQOUXEbXNHRgft/iqXi4paXE6imoKptTS7W1FIw3AYddknrG5S2W8s12NuHQfT0QN5KmQbIDeOzfefgk9Rz27o6flTFZ8XwKCurIGxySl1mxno7IcQDrrwUoZW+47zVZbmjBsNjioaJkssUDRGwsADbDTQnf3qSw7HKHEXCOJ5jkduZILE9x3FHdV1Z0KKJMyj3T5pOeHunzSW60ABVZWlCGf6h80c+b6R+ZS2CRFhpQGZ3CMeaTn5Pcb5pUItj0oTnpPcHml52T3B5pRolJAFyQEWLSgD3n2R5pdp/ujzTWvJPQBd3ArMyOVw/RO8RZO2JpIx7UnBg80Xk90eazGN8bbvGzc9adABK5zQ4AtAJG9G4tuTXu/wB0eaA5/uDzW76KDvebdycKaMby495Tpk3E0ru9x3mmmRwP6N3mpMQx8GDxUO7EBFUsba30oYezWyHsONPgy7b+EL3dwulbzzt1LN42ClDcHW6N6qiNRG81VHdAxo+tJ+ASSMnjID2s1F7hx/BSg3KIxup2ZGwsvtAXcRw7EPZDju6M8MYli2g9oNyCN6cYf/MHkVC4PXup5vRahhAkfdr77ifuVhDNNym7KcaZrFlvaB8FqVdZHSPDZGvN27QIG9SfN3KrUzDUVErpyblxFvdF9yTdDikyTpquKphbJHtWPA2071mDgetQmGwPhxJrI3EskBB7rKeEWykmNxSG3Fr6pC7sWTZAv2pNgX0Hb3pipDASeCLnq16rp+wfZSiMm2lutG4Uhtx1fFK1pcRZhI71sMiaN4usgaO5VTJbRqyMaxlyDfgLrDtH3fitiTpu32Teb7fglY0kYS4+6gOJ4BZubQWHsS3HSMQJJ4IJ7FmDBdBYEbhSMO12JNo9Q81lLPJJzaLY6Rj2+z4o2/q/FP2LcEBvEhK2FIbtdnxRtH3fisjWpdlO2FIxbX1filuOpOLdNE2yLYUgSoAKUDVKw0oSw43UFmrNuEZbgeKqo2qzYJjpW6vcbaXt6o7SoLlAzrLQ1JwTL5EmJO6MsoF+YvwH1vl3qiVGBDDIvS8VmM9dOdoNcdpxPFziVpFcahrHq3RZG8rFdIwOjy+wjrNQQP5U5vKpXnfgUA/+5d/hVMc5zzqUmyt9MfgfbRcncq9Yz1sEg/8A9Lv8KZ/0u1I9bAYyPq1R/wAKprmX4LWqIBa7BYqlGHwS4F6fyy2AAwSzr6h1R/kt3DeUzFMRbI+lynUzxxtD3Ohe51gTa/q6+C5W+NrhZ4uFNZSzZiOVKloie+ow5zvpaZztO9vuu7dx4qpY416UZVXJe/8ApXhBLJMKfFKN7JJLEfBZYOVWjD2iswyoYwnV8Lg8N7baE+CsT6bBM2YXDVyQQV9NO27JHt6besX3gjcRdUjMPJ3PSNfPl+Q1EY1NJKemPsu49x171zqUHs1RpoOiYfjdJiVI2qw97KiF257H6dx6j2FQeZc8DL9fFTVGGSytnYXxyMkFnW3jUbx965XhOKV+BV7qjDXmGUHZnp5AQ19vZe3ge3eFbs2YtRZnyYcRoxsVWHzMklhcenFc7Lh2g3Fjxsno0yXlBSosuVuUCizBWT0jKSWmniYJGte8EPbex8tPNWIYh/5R81wnLNScOzphlRfZbJMIX9rX9E/NdxdHbhuUZlpew4RT5IrFs4DDsS9E9CMn0TZNrnbbyRa1uxa02e2xwvk/JzjsNLrc7v8AgoTNzLZiJ/3Zn8zlDVn/AHSb7B+SwcnZ1RwwcbosA5VYRfnMIkFhfScH7ltUvKjhc0THuoK1u0ATshrreN1y2cDm3dxUpl+ES01GwjRwaF2JQjBya4ODKmmlE69DmrDJKcTONRE0t2iHxeqO2xWGDOeCyuIdNLFrYGSIgHt0uqJjFYDKYWva1jTrra5UTLV08bSefjJHDaXlwzZJbtBJpbI7Rh+LUVcLUFdDOfdZICfLetzbv67QfgV51lrI2u5wS2cNQWnVSOB8pWNYXOWvm9OphpzNQbkDsfvHxXfCMp8GfcS5O87LXeodeophBBsdCq3lbO2EZjLYYJPR60i5ppSNo/ZO53z7FZw8EWfqOB4hJquS073QxCVzS09h3HrSKSgQhCABPPQFh6x39iSMWu47m/NVXP2Yn4VRei0bwK2pB6V9Y2cXd53DxKfCsTZoZ4zk+iL8OwZ4NSOjLONea+q363bw790Nya4xVyYvJhlVLJLHKx0sZkcXFrhqdTwIv4qnyzCL9KCCd1tbp2FYzW4ViHp1AYmTBhjHOM2wAd/ioVszU6lZ2+eINtxVI5VqaOTLbJT60NQw6dTgQfuW9k7Ogx97qGvgbBXNaXtLPUlA32B3EdS0+VUNGW2BzrE1LLDr0chKpHTKSljbRQqnEK/EWQ+nVk0oiaGxs2rNYALCwHGw3rFUTSvMLKiZ8jGXDA832Lp0bg8NLdxWSf6VhZshrOGmqG9zjCmd02uiPNzMO0yRmhBG5TdZmXFayhbDVYpO5z9pk0QY1jbC1tRvv9y0m00Y2Xxts63BbWDYFLj1ZWQ07mxzU8LZW7WjXHatsk8NFkpanSLV8I0KczukJjlLuJD9x8VK0tQNnUljhoQdCD/ritOajrsKkc2uoKqBvvmIlvftDSyVr2vbzjXtc3rBWOSL8ji6Op5YxR2JYQySY3njcYpD1kbj4iylAXOP0ccju5pVc5JpC+kxRo9Vs0fnsn/JXUldUFcU2bKZHOBZpIC0kXsVkjhMrA5r22Kw4tK6ORpaQTsm46upJgVbHJA2nJtK25sRvF1Vbl26sz+gvLrmoI7Gt/FPbQsBu6WV3iB9y2dUFVSI1M06uOOHY2bi995un4PN6RBISB0JC0acOC08VnLp+aOjWC/aSVG0tVNh9Wzm3F0biA5vBw/FLhlU3EtgNggEXTCdSgaFWZUYMTlDKU+8SNkdZUNh+JMpa+b0lrmtk0uNba7+5SWLM2gx4vYXChaqMvbbZ2ncBxuok9zWCWmi17QIu0gg9SLrXo2OipIY3npMYAe9ZSbKzKhtbM6Kkkkj9YDTsVXnh22E3JeTe5O8q0u2XsLHi4cLEKNkwlxf9HM3Z+sNVLVlwaiGW6iSWmkjlcXc04BpPUeCllr0lNHSRc3GCSTdzuJKy7Vtb6Jrgl7u0ZAQoTGonx1DprEsfbUDcbblL3ulDraFDVhF6XZWaSmfXVDAwHZY4Oc+2gCtBSbtBp9yQlCVDk9QcFpVmFx1EhkZIYnHfYXBK2y5KHIaQk2uDVocNipLv2jJIRYucLW7gtlwA4JS66S/EopBbfI3ZBG5Fh1J2nBBRQCAdSUA3SgJQigsc0LHO72R4pz3WasBJvrx+KGCXkTenNCAOpOCkoSyUBLb/RQXMG9w806FYbISbKUPYdxJ7gUX6mu8k6FY210hHenWdf1PMos7qaEqHYwDjxQRdKWuPtDwCRwDGlz5NloFySbABKh2IRZJ4qLo8y4RW1rKSGd/OSm0TpI3NZL9lx0P3qW2W8AkU01sxpITCO/yWXgmnegBoCrnKFmQ5awF0lOR6dUkxUw37Jtq+3YPiQrKNdFxnNmIHMOeZ3Ndt0eG/QxjgSDqfF1/ABVFeWNLU6GZWgpcIZLX4m9z6lw2iTq4uOtr9fb3qOxKtkxCrfUTb3bm8GjgAsmKTF8oiG5up71rxQOfuBKuKSet8s62ttK4MIal2VIR0ZO+w7ynGkA3keaO4h9tkY5pWJ4UpJS9RHmtaSkO/RXHImQ4MhKtmxJcbjqsO+4OoKkq2A7G7cVHuYRwXRGVnNKNMtvJRj7sKxv8j1Mn9Cr3fR3OjJeB8fVPbZdhc0DevNswcGiSNxa+MhzXDeCOK9A5ZxQY3l6hxHTaniBkA4PGjviCubqIb6kKDrYic4ZPpMwMM8Tm02IMHRnto/6rxxHbvHwXJJ6Ouo66po2MfFVNBgqGg9EtPAniNxC9B2FxcXF1xOerjosTxWKp0nFbKZNo2PrGynHOSVcl6U3uVuqdUwVsMjubc6B7XgNuLlpBtddXwzlQwfEMTho5aWqo3TuDWyy7JYHngbG9r6XXJ6uVrpLB7XAcQd6wNjdUVlLDA0umfK0NA3kkgD4rqljU1uYOTi9jrOcARmRw/wB2Z/M5QlYP6JN9h3yU/nAf9p3g7xSs/mcoaqbeml+wfkvLfuPTh7CoT/o3dxUjgr3sw+lfGbOa0EHqWjUN6D+4rZwmZow+nBO5gXpQgpxcWeX1DppjMbYW04MZc+VzgL31KyUmDvmpmmpbw4DU95W1SRPqq1oawOA6VjusFOVFNLJFpNsvcbdEWa38VwdVmWJrHDYzgm1ZU6vDqONpbLHbxN1B1tBzTi6m2nM6iLK5VNI2nDiSXPvq9xuXKKxORsdOQD0n6AfNPBnkns7InFEHRUdXNLzlL0TEbh17WPYut8nedamVjMNzJMHzghsdSdCeoP7frefWqNgjWmi0Gu2brPVU5LOdbo5nDrHFVk6hylpYQjp3R3lhHqu0B+BSOBaSDvCpXJ3mb02IYVWyl1RE28L3HWRg9k9ZHy7ld/Wjvxbp4JrdGyfkYhCEihtdURUVE+eodsxQsMsh6gAuFYxiU2L4lPXS325nXDfdHBvgF0vlarX0uXOajNhU1DIXfZFyR/dC5XEQGbR0vxRPYxk72Fp4QHXk6Tzx6u5MmjZtC4HgntqYmusJG371hqaiJo6cjfA3WaTsnYdhtZPheL0dbSM56WGTabHr09NRpruW3nCuxbGaiknxaA0gmBbTQEEWFwCbHXUkanf4Ky8neXZfSRjVbG6MBpbSxuFib7327tB3ptVA7Muf9trC+mw42vvuI958Xm3gtU0jRQen7kZmrLD8Am5/DtqqoHAFwbq6B1tb9Yvx81DRPErA9puF1lkTpHhrNTxVOz1ls4eRiuHN2ackNqo2jRpO54HAX0PbbrWfu+5pkxad4mjTRlzPo2OkcG3DWAknTgArRlnD58KppZ5+jVVRDpWj2ANzO/r7e5SHJXhrfya7FZm9ORxZCSNzBoSO86eBWxiEDqWdzJL6ONidxHWsoQrdl4kuSRw3GnNhbAGXLQdT7Wqgc3ZSp8WppMQwqNtPiUYLiyNuyyoA3tIGm11HzUrgNG6eoMrmnmmgi/AnsU+ymbHbZJFuC2RU4xZWOSamlgy3LUTxOidV1DngPFjstAaN/cVctoHtWO1xcpWCwJF9Va+hklSIevDhVS3vqfhwWpRxSDE4eaHtg+HFT80Ec9hKzatuN7EJ9PTxU7fomBt953nzS07mmrajISjej4pw3KzM0K+hdO/nIiA61iCdCsFPhRdI19Ts7LSCGg3upUmyAbDQbkqQ9ToCkvqlOqSydEikbQsR4JjIImu2mxtB6wE66W6YAdEy9kp7E1IY5ptwTvFY7p19bcEAOJCaTxJRe403pt7bz4oAddLe/FY9tvvDwKUOFtLk9yKYGTcdyS5KaXOPsOI7dEXefYHi5FCscjVNs879keCNl24vt3BFDsd2IAPakEd973nxsjm29p7yU6FYptbXRJttHtD5pQwdQTgO1ADRIOAce5pTg9w/Vm3WSAn2THnhvRwLkxPdI83AaOq5TbScXN8AsliR1IAUljAxx/WHwACcIwRq5x7yngJwCBDOaZ7o8dUoaB6oHkn2CWyYrEAS2ShId6KEIbrBUztha29tp5s3tWwQozEnbVbAz3GOefGwH3rPI9MWzTGrlRl9LPuhaeM1ML8IrWVR5uJ0D2vff1QWnVPssVXTR1dLLTzjajlaWOHWCuFZZ/J06InNMFrZcVx/CYao8wxsjZGkA9Is1DR7pNuK60Khg61UMLyZTUWJRVklTNUGAkwsdYBpta5tvNlZrLSWWtoGmWsjtm1z7Dvv5JGSMljD4jtNO4rUkOxG553NBPwT8MBZhtM0jXmwT46/etMWRz5MJRUVsYMy4l+ScArq/cYIXOZ9o6N+JC4vl9uzAIqOGasrZ3F7mRtJI6rn4+K6tyiUNTX5TqYqRjpHtcyRzGi5c1pubDjwPgtfJDsL/IsLMKEbSGDnm/rNu2pdxOvHcnly9uPBeLbcqdFkbHK1xkrJKaha43IP0j/IafFTlHyc0Tbel19XOeptmD71cWrKwLhl1GSXkpyaI/B8kYBGwl9GZXA75JXFTDcr4G0W/JlP4gn71kp3mM3C3WzMI9a3euvDKDjUuThyZMt7Sf6kbJlbApBZ2F057gR96isVyHl2WB7hQuidwMcrh96s7pmD2h4LUqpuc03AcFWWUIxdcixzyt+5/qc4ruTPDZAfRq6sgJ4Eh4+5VzE+TXFoA51BVU1aBua+8bj53HxXXJAsDwuKPU5YcM7l6uTz1iOHV2Gy8zilFLRudoDI3ou7juK6HyK1hfhFdh0j7mmmEjR9V41+LfirviMFJUUcseIsifTEfSCa2xbtvuVI5M6KGDMuNT4WyQ4Vs81FI+/SO0CAOuwv4Eda9HH1Pfi1JboiUNLs6Ebjcue8rWAYWcHqcb9G2cQD4mGRriA4FwFyNxNtLrobtVT+Vgf9iakH+ug//IFeNtTVES4OL1NPsPDCAAXAaDgSu84XkjLmE4i3EKDDmsqWeo90jnhhta7QTYHtXDcR/Tx/ab/MvSTtF0ZpOlRCStlEzgP+0zv/AEsf8zlDVQ/o0v2T8lN5u/8A7Kf/AErP5nKHq7CkmJNgGEk+C4Je49HH7CoVl2RvI10K3MBy5JX4VBUPqzG1zQQ3X7rJrcOrsRp9ujpJHMf6rnWaCOvU7lM4XguLU1BDA+eKDYYARz43+F13RyqMWtSTODLjcmvS2jJhlEMLr+Y2zJtxl20RbiFtYnV0tM4bcwFhYNGrj22WuaGspJGvilinkkBaXC5DO0kqGrsMjp69tTDXzyTNN9rZAF/G91508Sy5nJy2Esc6pRowYxjEoeA2kkYHagyi1x3KBkc+oqBJI8kjgNynain9Le11VNJMW6AvcAPgsk2E07aJ0sbAHAg7QN9OK7odrFGktzOfTzduzBRiTDKaGQNdLTzNDnnixx+5SjHxyx7bHh7T1FRfPF2HQRsvZjQH9pGi0w6SKQSUzth/wPesJ41N2uQlFL2m4aubDKltTSv2Jqd4dG7tB0XdMvYpDjGFUmIwC0dTGHFvunc5vgb+S4DO/wBOlaCNgk3kaOFl1Xkoc2DB56BtxzUnPNBN7B2/4j4rSO0d+SYQbTl4LsQQSOpC2m825oJ3nVCvR9RajnnKxBUVeHUMFJBJPJ6U2zGC5uWuWngGQKKKNs+OPdVTkX5lriImdmmrvkrrWB3PuPDQLEGucNG3WTl4No403qZFVGWMuvi6eE0bWNFy4N2bAcbgrnldNQOrS/AsPgpYI3dCdzdt7yOI2rho+KuvKDVSUmWJ2sJa6oe2AniATr8AR4qj0jY2sDTchotoolJxVkZKvSjahzNjWGudIK59S1wLdifWxI0IO+4Oq2cq5ogy3htX/RZZsQm2RG+TSMgdZ37ySetRzqV1ZM4wDoQ6AE+s7inyUf8A1XKX+sAXC/AhZ91KkzP1ErSZ5xdtQZJI6OQOOrBDsg+IN1e8v1lHmKhlLo27Lm7FRTSDasD82nrXJKeAEscCQ11rj3SfuV1yHKaXMEDGk2nY6Jw69Lj4hHcqSRcZPydEghjpqeOCnjbFFG0NYxosGgcAkka14s5gcO0XWZw4lMc3WwW5ohrLNAAHZbqTzqUgb1IBsOkR4poTHjRKFj5xnvtPil2xwBPcFdEj7ap21cLFtnhG7xsEt32vsAd7k6EP7LpQQONlj+kI1LR3XKNhx9s+ACAH310KCexM5scXPOvXZKImX1bc9pugBQ4cSPNJzjOLh3JzWNHqtaPBO4aJ7AYucbw2j+yUF5O5jvgE+10lr6IAadu2jQO8pAJOtngCU8hKAUgGWdfV/wAEoAt6zvNOt2pQAgBnNtO8E95ShjB7I77J+9JpdABsjgEgHEhLuGiL6oAW4ACaTruTvikPcgADRwSgCyQdV0qADeltwR4JQgQbko60BLuTEDtBdYT3p7jdNO9SykLwSW10RolSGKO9KEg3oTEOSpheAdXAeKTnWe9fu1TEZEJnODg1x8EbbjujPiQExCk2UXP9JiE7+DWtjHzPzUg8yEeq0d5WhT3fGZDvkcXLmzv00b4tnYgCWyfspQ1cFHRZjsiyybKcGIoWoj8YfzeGzW3uGwO8mykImFsbGgW2WgfBR+MsDnUkG/bl2iOwf5lSrWhugC6sKpMib2QrRbioqvyrhVbUGqZG6kqr356mdsEnrI3FS4FtbJ4K3avZmWprdEHHheLUotFXRVjBwmbsu8wthktbHpNQOPbG4OClUq55dPF8bFd5v3JMj21rR68UzO9if6fBxcR3greB7Uhsd4Cz/Dvwxa4vx/s0vT4Duf8AAppq4juLj3NWrnHMEWV8u1WKy05n5nZayMabT3GzQTwFzqVxeXO+fc11EjMHmmiY3UxUDBGGA7rvOvmVUeklJW5UgUo+F/v/APDtz5pHfoqSeT9my1KiHGZtIIIKe/tSuuR4BcXdlblDqfpZaqsLt/TxI3/mWLZ5TcDPORzYxsN16E3pDfK7vkrj0mNv3plvJOPEP3OxuyiK54fjtdNWgaiBh5uP4an4KZZQwU1OyGkhZDHGLNjY2wC4ngvLVjtBMIMeooa9rTZ5a3mJm/cfEBdWylnbA81x/wDVlVs1IF30s3Qlb4e0O0XW7wSxrjYy7rk9zfcCCqnyqM28mVA/3iD/APIFd6iIOG0N6qHKVEXZQnaBvqaf/wDK1KDqSNeUcWxQbNSwdT2j+8vSDhcrzxmCLm8Te226a399eiXDUroyu4xJ4kyj5rZfMbuylj/mcoPFGH8l1h6oHn4FWXMMfOZim7KSP+ZyiMSj2cLrSRf6B/yXnyl6z0IL+mMwSNpweiJ/qGfyhbbovdGi50MUxeKBkEVc9sMbdlrRpYcBda02I1z/ANNNUP8A7QkLd9LJu7M11EUqo6FXsDoCznWRk7y51tFENpIp5RFDURzSEgWY4G3eqV6QHHU3PbvVsyLG18dVLYbQBHwA+8pZcbwY3KzOWfVwjampKeNrmgB1vbdxUNK2Tp+iloY9uy7aHRPaArNXUzZWtY9to73It63Z3KNxRrGiPZAB1FuxcmLI7OGVp2R+BTejCahne1pdd8bjuN94181pTx81UmN7QbH2TcHuWvicl6uKNp9Xf4qYiw6OZu/my3c4b7rsclGpPyLuOUVH4NSP0eOUyS3jHG7dSrjycYxTSZkFLE9xdPC8erYaWd9yqr2WDoZm6jQrNye/0fP2HN4F72ebHK4NT5Nlmbi4nckIQmZmF0e1I49ZSvIiic4aHcE4Q7TnEudqeBWOtia1jQBe51vqpfJsn4KbyjwOqMsTOZ0nU8jJrdgNj81QIXmTZ6jquwzwMmhkhkaHRyNLHN6wRYrj8sRwmvqqOruPRJHMJ6xwPiFL3RhmVOyUoXc1ZgIAPzWzVsmry3DsOhdUVUzC5zGcGjU36ls4NlDFsXiZUOcMMpni7TKCZXDrDeHjZXrLmB0eXoXMpGl8sn6WeTV7/wAB2BYLD6tTHFNqjk7ZOZn5ieKSnmboYpWFrh4FXPIELqnMDZAOhTxOkJ7T0R81ccZwiizDRmmr4m7QH0cwHTjPW0/duKj8jYDVYHTVQxAxvnlkDQ6M3BjbuPjcmy07S1KSEk06ZY3B3veQTCHa9J3cNFl16klrneugoxiNp33J7SU4RM90eSfY8EahUILAbgAnAJB2WS3smIQC3BLv7kI3jtTAQhFuF0C4OpQdeKQCDXvThpvQNEDqTAVL3JLWSoENJHik1snI8EAJ3nyQltZJp1oGCN29ISkLhrcjzQA6/WUX1WMyNHtBKJB1OPc0opgPBSjyTA4ndG4+QQec4MFu1yKEPPmmnfrogMk9rYHmUFjz7QHcEUFijQbkoTebPvu8Ec00byT3kooB/ek22D2h5oEbPcCdsgbgB4IEM55pNgb9wKV0nAMcSexOvYJDvQMZtOPsW7yj6Ths+KclCQxln8XN8AjZcfbPhonkJQkAwRg7y4+KdzbPdHilATgExCbLRuA8kqEJiBIlCQpAa9Y8x073Dfaw7zoFhYwMY1g3NFlkrmOki6DwwtO1ci40US3EKkb2RP7rhcmZNs6ILYk7Jwaov8sSNNnUhP2ZB96yNxyEDp01Q3uaD96w0stqRIhieGqPbjtD7ZmZ9qIp4x3DD/tTQeotI+5KiGp/Bqyu9JzE1g1bTgN8fWP3KYDQBdQ2AsdJO+okFnybUh/aOnwU4Ny68a9IZNnQDVKN6LXQtKMgKFjq6mCjpZamrmZDBCwvkkebBjRvJK4nm7lVxbHq04Xk6OanhedhssbL1E/aB7A+PWQmoOQr8HXsbzDg+As2sXxKnpLi4ZI/pnuaNT5KmYhy0Zbp3FtHT19aR7TYxG0+Ljf4KkYTyX11XetzJiIo9vpPaHc5KftPJsD5qbjy1kvDG2FFJiMg9qWRzgfkPgoeTFHbn7G0cE5DsQ5Y8MxKkmo67LUlRSztLJI5KltnD91c5biDaDFTWZeNTRMa68QkeHPaPdJAs4d414rock2ERjZpsuYYxv14g77lo1MeHzgh2DYa0fUg2T5ghVHIuNJosDj5NPDM2VeKP2KqqlZUb7NeQ13cPuUm3FK5h+jrJ2/2hUHU4HQvcH07H0rwbgxvJAPcb/NbzNoMaHu2nAam1r9qTjHwjaLlwzYxKaLFoubxmlgrhawe9uzI3ueLEKiY1glRhFQ2twmabYjdtscDaWI9dxv7wroVjkYHtLXC4KvHLt8cEZMayLcsnJXyoflySPBcxvYzEHdGCq0a2o+q7gH/AAPYd9t5R2WyrKLb54Nbf+YFwXFcqTTTmSikiYHalriRr4BanoOZsOiLIKiqdFcOLIaguaSDcHZvwPYtZYoTdxdHGteN7q0TuaIy3GJgf6//AJ16CmBa/QdEryvU43iM1Tt4leWTbDnF7Nhxsb/60XoHK/KTlzMmzAyqNDWu3U1UQwuPU13qu879iMmOSivoV3Yyk2hMWAdmGo/9JH/O5RmLxf8AVFcRwgf8lL4m3/tNUtsRaki/nco/F22wivB/8O/5FeRN/wBQ9TH/AMZy2VlgtSQkOa1rXOe47LWjeSpQwulIbG0ucRuC13UNTDWUb5ojGx01gTbU2K9iDRxSRrDD6qR7XPijaBf1ng/JTGUJXU+KT0jnNF9OjxJ/0FsmknLbiGU9zCoPD2yfnK6NpLNtzhfwRkh3oOCFmgscbLXiuKtp5HshjfUvZoQwEgeSg5Zq/FW7bYhTt1AuCD8VYIoGRtDWCwUZPiJdVupoYS6ztkOvvKwj0kcUb5ZwdzU9ytVWGVdIXTSvY4DqJJUxhGNsMDGVEbmut6wFwQs9fSyNieJ5SSASQBp3LQio5YIGvhd0mt9Rw3jqUynizKmUtjdrJRK7nGuBB4hZchyxPzrhlyDJz58OiVB1EjA0SxEhko1HUVv5AdsZ1wl1vWqAPMFb4+n0J2EZbnfhuQgbkLE1M0dg3XqVNxzPVK2V0GG03pgjNjM5+wwnjs8T3rez9XvossVPMuLZJ3Npw4bwHHX4ArmcNOJGAbRY0aABRN0JyadI6FlbMlNjtWaN8D6WsDS5rCdpsgG8tPWOpQuW8O/L/KJieJTRRzUVGSIw4XBcOgw2/ZcfJVaRj6N7ZKN80VQ0FzXxPIeLAkm/ddb2U821mB4fV09JTQSuqHbYme47THWsLjcevxRGSasmUm6TOwiJ7ju04krJ6OwttbXrXH6TGsTqannJMTrRUbwTMQD3AaeCv2UcxTVsnoOIuDqjZLo5QLc4BvBHXx7VEckdWlmmpvcnuaMTwRqL8FlJ1snuKYtqHdio3lJfr3JNsN3kDxVCH3slvfcsJmj0u8ed0pkGlg49zSq3EZN+t0o3rFzjuEbifAJdqU7o2jvcnQjKi9ljHOHi0dwJS7DrWMh8AExDj3hIe9IYwd73HxskMMd/VB70UApe0by3zSc9H71+7VKGNbuaB4J4sjYBnOA7mvP7KXacRow+JAT+7RDb2QIZ9J7rfEoAk95o8LrJpxQgDG5jz+sPgAk2Buc5x8bLIe1IbXQMxmOM67N+83ShjBua3yTiNEDduSGKNEqAi6BChLdNDkXumA5IUBKUCEtpdCUIKAFSFHBJ8UAIUIuk4pDFQEJUgEsl4cEhc0HpOATTKzg4Hu1QA9OBWPbHAHyRtu4Rk+QQBkQmbUnuNHe5H0h4sHgSmIekJ7U3Zcd7/JqOb63uPjZIYFt1gkp4HevGw9trLOY28bnvJSc2wbmjySaGmaD8PpjfZcWdxutd+G21jftfslS27cE66jSi9bIL0Cf+rdbsTTTFnrMI7wp9Jv3pOCKWRmjhbSGPNt5st4XPUgCwsAB3JdyaVIhu3YeKQi/EoukBKBFc5ScDrcwZOrMPwtzfSXlkjWOdsiXZdcsvwv8AMBcOwLG8VyRVT0suFxQVLz9IKiEtlt1B3u/Bekayrp6Gklqq2ZkFPC3afI82a0dq4lyhZ8dmuVuE4Lh7ZKUu2WSSQh88p+oCLsHdr12WiqUdMlsONqVo1hnNmLSXrJHRv4Ndo0d3BbYmEjdprg4dYK0sO5NK+enEuIzRUxcLmIOuWjtO7yWzHgdDhLebp66Wd43hmrf3nH5BYPtcQZ3xeSvUOLkhQhMY1CVISmIEhQSmkpgCLBJdLdAjFVUsFVGY6mJkrepwuqri2UvWkw99xv5p5v5H8VbiULSGSUODOeOM+UV/K2fcSy7WcxjDZq2nDGwlsjryxMBuNkneBc6HwIXTX4pSY1lurrMMnbPC+B4uN7TbcRvB7Fz/ABjCKfEYvpG2kHqvG8KtUNfieVKuYU7/AKOdpjkYfUmb2jgR17wpyYIZ/XDaX7kQyTwemW8f2LzgtMX1rLtc7oHQdy2MzwmE4Ze9+fBOvYVhynitLVvFaJWQwMjdzhkcG82dNCVpZuzfhM81KyidJVmCXbc5jbNOhGhO/epipPJVGzlBRuyUditZsgCokHiq5h5e/NLBe/0jz/dWlLmok9Ci0+tLr8lgwzMlPS42ysqqaQMDnOIYQ4i4t2LtxQUeEYdTljONJnRXxSCPbIFr9aq9JUtZmI7Zs0SnTxU/hmOYdjItQVLXybzG7ovHgfuVTx1hpsXne02+kuO9U8fchKDPNummWqrw8SwvG97yBrwF9fgtTF4oqS0l9lliSOqy2MExRtfRbRd04hZ1+ocVEY9NLXRte5hjpWu2Wji/t7tF4eHFklk0PwdEmqtEZQRiameXNBY51wDwOql8pwMbnDBbNt/SgdO4qJwewZNTOJDmvDxfiNx/12qwZYaG5xwQf7x/yle9/bRnFbI7UNyEDchecbla5QaKrr8IigoIXTy+lsOyOqxFz1DXeo+kyNSsp2nE62ofPbVsBDGN7BcXPerns7Ujhe2qytpY9m5F3W3lKW7K0rllOxTBqTCMs4pLQQfSGmcwyyu23kGwtc7hrwVGqsImw7CKHFHNc6kq47vcBcRSBxFj1AgC3iupZtjtlXEWnQGK394LBlaAw5coY3gPY6GxDhcOFzvCl1wS4KUqRzmncyWJhjtpqCOBU5l+Rzcdw54PSNQ0eeh+CtdZk/B6+J3o8H5OqN7ZKfQX7W7j8FA5TwWups4ilr2f9xaZ+cA6Ml9GEd9/gVzvE9SaFutmdELSdzvgmll97neaynRNOq7RmIxM6ie8lI1kY1DGjwWTggC5TAQW6rdiVLayLXTEA7Utr6oCXd1pgAQhHFAgG/RHyS2SaJgG/clsgIJ4IALWCAUtkiAF3pOPBF+CS+uiAFJ70hN00uA3uHmmCVnvDwN0bgZNEJgkB9UOPc0oLz7jr9tgigH6oPcmEy8GtA7XItIfaaD2AooB+vFDdNE0McfWee6wS82L+s8/tIoDLZJtAbyB4pgijGuyD36pQ1o3NAHcjYQGVnvD5pOc10a4jsan9yOG5ADNtxH6N3iQEhdL7LWjvKf3oA6kAY7Sk6uYO5pKURv4ynwACfdOHagDHzXW55/aSiJnu+eqeR5IsgBoY0DQAeCNycgnsUjGgJUu9CAAJQkCW6YhShCRACIKChIY0hFkpRdSMRLZImySxxNvK8MHWUm0t2Or4HEdSEjXB7Q5pBadxHFOICfIhnesdVUwUVLLVVUrYYIWF8kjzYNaN5KzC3Fca5YM1S4rioy1hLi+GCQNnDNTNNfRnc3+buTSsa3dETm3MuKcoOOR4dhcb20LXfQQE2vb9bJ/rTdvVxwDL+GZQoOekcJKtwtJOR0nH3WDgP8ARTsrYJTZSwV0lRsuq5ADPIN5dwY3sH4lRGKV0tbOZJT2NaNzR1LjnkeV6Y+09HFiUFbH4xjFRiBLL81Bwjad/eeKi7JxOqRaRSiqRT3G2SFKSmkrQkQppKCVD4viz4ZmUOHRuqK6UhrWMbtEE7hbiexVGLk6RMpKKtm9X11NQsDqmUMvubvce4KKixmuxKYw4Jhk1U/sYXnybu8SrllLktaS2vzbIamof0vRQ/ot+24bz2DTvXSKOkp6KBsFHBFTwt0EcTA1o8AhzhDZbmVzl9Di8GWM+1Q2hQspgeEjo2HyJJWR+Us+wt2vRoJ7cGyxE/cu1WRZR338INH1ZwSrq8awl1sbwaenb/WFhaPPVvxW3Q4lSVotBKC+1yx2jvJdve0OYWOAc12hBFwfBUrM/JnhOKbVThgGF1vrB0Q+jce1o3d7beKpZYS5VBU4/UqCjsXw+KshcJG3B323947UsrsRwTEPyZmGExS/q5t7ZB133Edvmt4671e8XZVqaoqOB5NxjGsRfSUTLQRkGSokuI2jge09g1XRqHIWVsEiacXc6uqLXPOuIB7mN4d91q4Vi1ThcM8VKWtbNY6i+yesdtlryTPkeZHvL3u1LibkqMk8uR1dL6Cx4ccN2rZOPly1C3m6fL9K5n1oWD7iVFV+F5SrgedwH0dx9ulm5sjw3fBau2Um0eKiMHHdN/qay0yVNFZxrKHMO5/AKt87Wm4hmAjmb9kjou+BUPHjU7pHR4oXyP2rGRw6QP1v9XV9J61DZgwKLEYzNDZlW0aO4P7D+K7sWdraZxZunT3gSeV6IVeDhzCWbUz2ut7bbjRbmMU7y2KlhIJcdon3WtVRyNmWTCK04ZiAIp3vIbtCxhkOmvYfhvV2qwYcQpp5DsRkOidf2b7lGfVj1SjyckaZAGgYysi2wSHXbftU9lqkDM3YPIy9hUbjw6JWaelY3mtL7D9q/gU7AZW/njhUMepEwc7s6JXm480pzVGunSdYG5CBuQuosVtxI66jc1Y+MBwh1S1olne4Rwxk6OeevsA1Un7R1Co/KiCfyU46xiSQHq2rC33pPyOT9JV6/HsZqo5fSsRmkEg6UdwIyL3ts7rKby1nCtw8wU+Jc1NQNAj6LA18Q6wRv8VXXMa5oaBcuIBPituaCOOKY26JbuK5ZZGmZxTOxbDSQ5h03g8FkBNlq4Q18eE0TJfXbBGHd+yFsFxuutGnIt7lCbdJzjfeHmqQDkoOqYJBe+p7gUbZIOzG8269FSJMlroWMOktpGPFyX6U+4PMpiMg3IuLrGGyX1kHg1KYrjV7/A2QA7u3JC5o0JA70nNMO8E95JQIoxuY0dtkwDnme+D3I50cA4+BTtm3YnWQBj23cI3fAJbyH2QO8p9iepHBADLSHi0eBQWuI1kt3ALIkt3oEY+bv6znnxRzTBwv3m6f3JdOtFjGFjBuaPJK3TSyVHFAAksLpyNxQA3xRbinFJwQAm8JwACRCAA9aAlQN6AAbtU5F0hOiBAgX4lIClCAEslvY2BQkLmgakDxQMcDfT5pVi51nBwPcLpRLfc15/ZSEPKS6YXv4RnxICX6Qn1WjxQMcEXTDtni0eCUNcRrIfAJAOTlj5scXO/eRzTOIv3m6AH7QG9wHikMjPeCNhrdA0eSB2JgJzjb6Bx7gjav7LkqEgC/Z8Umu/RKVD1OJ1EVY9oDQxjrbBG/xWGbNHCk5+TXHjlkdRJazuJHko7G4nOhZKDcMNj48VvU1RHUxbcbu8cQe1OljbLG6N46LxYpZYrPiaT5HCTxzTfg0MDl2oXxO1LDcdxUlbqUFh23TYkInaEkxuU8suim5YqfK2L6mNTteSAz9mAZYyrV4g0j0ggRU4PGV2g8tXeC5PyTYIaqrmx2sBc2FxZC5/tSH13+F/MnqWxy+40+szBQYFTEuFLGJHtHGWTRo8GgfvKxzQsy9lekwmA2fzYY4jjxe7xJPmunqG4wUVyxdNHVK2aeOYka2pOwfoY9GDr7VEvdcpXuWlXV1PQxc5VShgO4by7uHFYwhWyO+Uq5NlNJULS1+M43I6PLuES1DQbGUtuB3nRo8SpWHJWe6hu1JNR01/ZdK248mlb6K9zo53lXhWPJTCU2pyjnujBe2Kkrmj2WSNJPnslRZxaahn9Gx6gnw2fhzjCGnz+66ahfDsXcXnYzY5iAw6iMjdZXnZjbvuevwV55McltwOlGKYmzbxeqbtEv1MDT7I+seJ8FUclYczMmfGyyWlocJYJetr3k9Eeev7K7OFOSWlaF55IXrlqfgLKEzPmzB8swh2J1P0zxeOniG3K/tDeA7TYLUz1meTBKZlJhrGzYpVNJia4XbE3cZHDjroBxPYCtHKHJe2RxxnOXOV1ZOecFK92/tlPH7O4fBRjxp7yFkyaeCry8p+ZcbmdFlPLjnMBttujdO4d9rNHmU5tTyvTDnBTtjG/YMdOPgTddcbsQxCCnhip4WaNjiYGtA8Eip5YraMUSscnvKTOQS56z/l87WP5fE8A9Z/MFn99hLR4hWvKfKXgWYXx075HYfWP0bDUEWeeprxoe42Kum5UnOvJpg+Yo5J6ONmHYidRLE2zJD9dg0PeNe9GrFPaSr6oNOSG8XZYcy4BRZiw19FXx6b45AOlE73h+HFcf5iswPFJcExX9NFrDJwkZwI/11jgprJeccTyxjQypnQuaGkMgqZHX2L+qC72mHg7hx7LVym5e/K+CGspmWr8PBljcN7mjVzfhcdo7VSTxvRLh8FKSmtS5KKTdQOL4++ic6mhYHVANtojRvhxKmMPqhWUkcwtdws7sPFQ+ZoZaSrpMVpiGzRPbrbc5pu0/Cy1xpaqkPI3puJL4Hyd5rx5javFK44bA/VrZbl5H/Dba3iQexTx5Jq+nZtUGZpBKPZlgOyf7x+S6HgOJx4zg1HiUOjKqJsluonePA3C3wsJdRO64COKNWcbxDDcXwORkWN07Ax52Y6uE7UTzwB9099ljXY6qmhq6eSnqYmTQyt2XxvFw4dRC5rmjA/yLWMbEXOppReNzjci29pPEhEZqRok1sc+zlhQfH6fC3pNs2YDiOB+5ZsNx6vxOhipXOja2na1kr7XfJ1b+wW8FPzRtlifG8XY8Frh1gqmZbibSZqbQVLyxsjzAXDr9k+dvNd2KSlFqXg4c8NMlJeS5R40Y8NeZnjnIjsAnj3rJkKp5zOWHiZ/0r6i4J49EqIxzD3U7pInWBLwTY79N63OT9oOb8Ffv+nH8pWePBDHqcfJnbezO9DchA3IXMajHv6TgAo/MWBnHsIlpSWsk0fC8+y8bvDh4qRc3pOsstLIb7DtOpHktr0nHKdj46kw1DDHNC8tkY7QtcFZcr4M7G6xssjSKCB13uO6Vw9kfepLOmVJ8RxmmrcNjJNTaKpc2w2Lbnnw08ArfR0kNBSRUtM3ZhhbstHZ+PFY9lOVsyj8GVxsN6Yd/WlLro3rcsS3ZftSgDcEa9idbTVNAJq5LYhLayPmqJE7k62iQJUwF3aIPgm3RqgQoKVNBslugBdeKEmqLoAW5QkuUoIKYCoJQQm841u9wHeUAKEJnOsv648NUu3fcHHwRTAUlJfS9khceDT5pPpD7LQe0oAei+uqYGv4kDuCNk8XnwAQBkSFM2L+04jvRzLDvbfvQApe0b3AeKTnGX3hOaxo3NHknI2AaHgjQOPgjadbRh8SAnhCYhl329Ua9qT6Q+00fsp5sjsQAwtdpd58AEuxfeXHxT9lGm+yNwG82zq80uy0HRoHglRuSARCUnsSb9yQxbo1QAUqABKiyTxQAd6AepJdJfVIB17oSXQSmAIQhIAWrXUMVWLnoyDc8ff1rJLV08UvNyTNa7qPBZWubI3aY5rh1tN1lLt5U4OmaLVCpLYr5ZU4dUB1rdvsuCnaWcVEDZWjZvoR1FPexsjCyRoc08ChjWMaGsAa0aADgscHTvDJ0/T8GmXKsiVrcNhu3tlo2921bXzTrX0HFIT1a9yx1MnNU8su7m2Of5AldaXwc7PPFDJ+c3LJNUv6Ufp0s1vqRXDf5Wq35hqzU4pLY3bF9G3w3/G6pfJC8DMFfXSamGifJftc5qsO1tOu46k3Pes86vL9kdvS7Y7NLGMTiwykM0nScdGMvbaP4KSyXyfS4u5mN5rDniUB0NEbi7eBf1Dqb59Sq9LimEjHpMWx0Gejw82paRli6pk4abg0W2iTpuGu5WOlk5QuUJpqMNe3BMHcdJS8xMcPt225PCwWscckttvqY5Myct/0OptNJQQsgvBSxMFmx3bG1o7BoskU0U36CRkn2HB3yXMWci1PKNrFMwVFRMd7o6cWv3vcSViqORYU45zB8wTQzN1bzkOz/AHmEELHt4/8AP/Q+5PxE6stfEKCkxKmdTV9NFUwO3slaHD47lyN+N8oGQHtONRflbCwdnnXv5xoHZJbaaftCy6VlLNOGZqoDU4bKRIy3PU79JIj2jq6iNCpnilBaluvlFRyqT0vZjstZYwzLLKpmExvY2qkEjg9+1awsACdbDXzUvLIyGJ8krgxjGlznHgALk+Scq5ylVTqLImMSsNnGnMYP2yG/eVCuckn5LdRjsQXJSx2acy4pmfEmbcUUjTA124cImfst17zddSrqgtZsg3e/eeoKicj8TaTk7w+SO16qeWd3bZ2wPg1Wt7y95c7eVtllpbijCENbUmNKEJssjIo3SSPaxjd7nGwHeSuY6RyFCS5wy1DLzcuP4a140t6S0/epKixCjr4+coauCqZv2oZGvHwKbi1u0JST4ZWOVHKMeZ8Be+CMflKjaZKd1tXje6M9h4dtlp8j2Zn49lw0lY8yVuHERPLt74z6jj26Fp7u1Xv5riD8Sg5PeVvEnytk/J1S1znMhbc7MgD22Gm59/C66Md5IOHlbowyf05qfzyLWUQwXNOKYWwWia/nYh9U6j4EDwWDGYfSMMqGHfs7Q7xqjNmacJxrOFLX4XK8xvpxFLzsZjIcNrffssnzStkppC1zS3ZO43WtSTTZpBqUWkSHJxmGtiy87DYJdhtPK4ggdLZfrbuvfzVzwzGa2GQGoldPEfWa7fbsK5jybm2I1kN7gxB3k633rokLLrl6jbIz0eljGWFWi7te17A5hu1wuD2KGzjQiuwGcWu+Ac8w9o3/AAut7ByfydDfgCPistaA+knadxjcD5FZp+TlkqbRx+wVIzdeizBFVRaOLWSg/Waf8groD0R3Kn56saum6wxw+K9HB7zl6lf0yajqq3HZpZn0wc0nbc9h0YOpTOQaB8GZsHL/AGZhu3bitXI07ThRjaOkx1ybb7hWfKsOxmOi0sBPcAi1rgrny55RyuC2XBz6drOojchA3IQUPAG0bp7GAO2hvSNTwUvJfgddDiNyQIumIRrdUtkge0HVw80F7eFyewXTSEPCULHtngx3kgOdcWb5lUhGVCxgyk+wPMpdmT+s8mqiRwS2TRHfe9x7jZJzDDwLu8kp0A4uaPWI800zR+8L9iBFGNzGjwTrdQQAwSDg1zv2SjbPCN3jYJ+5KQSgBl5PdaO8otIT6zfK6fra10AW4oAbsOt+kI7gEc37z3nvKfZCAGc3HwbfvT2saNzQPBFwEo3IsAtvsgpbjjvR8UCGm6SycSkCBib0W60tvBCAEtxRuTrBIUAAKVNS6oEKlTbpbpgCTigo4pAKlsm7QG8jzSGVnvBMB1wEEpu2DuDv3SjaN9GE9+iQCov5Joc87mgd5SWfrq0JDMjTdKSOtYgHHe/t0ATti/rPcfFAD7pCRxIHim82zqv3lAY3gAPBADXSMBttDzShw7T3BLoNyL96QwufdcUXcfZ8ynd6LdiYCdLsCUA9aXigoERddhTpp3yxSN6Wpa7r71qfk6tiN42eLHKeOiW5tuXDPocU3q3TOmPUziq5NLC21XNv9LB0PR2t/at0AbrI2gAS4gAaknSy4Xyk8pFbmOvdl7KRkdRvdzLpYL85Vu4hvUz57zouzDi0x03x5ZzznqldF+zXyp5by9I+njndiVYzQw0liGnqc89EdwuVzrFuXHF6oSwUmE0MEMjXMtI98j7EW4EDj1LYy5yXYdh9MyszROJJLX9GY60bOwkauPdp3qwHFcLw1nMYXhULI26AtjbGPldJ9RjTqC1GsemnJXJ0c05OJo6ebEmB4aZqZsbQTv8ApG6KfxyqbQYVUVDyAQwtb2uOgC1qitjxjPTnNhbCKaGxDOJtx69XfBaWZopMYzHhWX4XbPPysDj1F7rX8G3PirrXkTe17ml9vE0vsWLkV5OYsb2cx5hi5zD2uIpaZ40qHA6ud1sB4cSOoa9oxB7XSNYwANjGyANAOwBPgjgw2hbS0TGxU9KxtPAwbmtaLBaZNzqo6jLq2RjgxtPUxEBC18SxCjwqjfV4lUxUtOz1pJXbIHZ39i5Ur4OtuuTYkYyWN0cjGvY8FrmuFw4dRB3hcczzlStyNizM1ZRcYaRjrTwC5bFc7iOMbt1uBt2WvuH8oeVMQqhT02NQc642aJA6MOPYXABWKspoq2klpqlgkgmYY5GHc5pFiPJbQlLE91sYyjHItmR2VcfpMyYHT4nR9ESiz4ybmN49Zp7j5ixUZyqQPqcgYw1gJLIRLp9V7XH4ArmGA5ifyW47j2D1UL6yIOvAza2QXj1Hk8AWHW3UFuTYxyl5soZZKGidHh9SxzdiOBjGPYRYgGTVwtxW3YcZ6k9jLvXHS+S9cjtW2q5O8PY03dTSTQu7Dtlw+DgriuM8iuKVGBZgr8q4sx1NLMecjjk3tmaOk3xbY/srsj3tjY57zZrQXE9QGpWPURrI/qa4JXAqfKHnqkyhSNY1janEp2kw097AD33ng34nzK4lU1ea8+Yi5pFXib735mJtooh3eq0d+qkcIw6s5Tc+VNRPI+One4zTSD9VCDZjG9trAeJXfMHwqiwbD46HDKZlPTxjRjBvPWTxPaV0OUemVJXIwSlndt0jhlNyP5omjDpG0MBPsvqNR+6CEtNyeZ6y/iMNVhEDROHWbNS1LbD7V7dHruCF36yWyz/GZPKRp+Fh4Zig53mI/SC0y7I2ywWBdbW3Zdcf5Q8Ppq/lkwijqIhNHPHTNmjJI2mkuNjbsXZGFr544NprXyGwBPmfBchwWaLNfLNiOOh49Aw/adG87threaj89XKen21T+hWZNuMEQufMEwfCs4xUeGQtpYWQNfK0SEjbNzpcm2mzooWromOjPMzuHeNF2rMOTcDzAHT1FOGVTrObVQ6PvwJ4OHeuT49hVXguITUFS0bQHRePVe07nBbYs2pJXuOWLTdofyZx3xSrkG5sAHm4fgulUrHPIDRck2A61VOSzAax1BV1YiGzLMIg64As0a/Fy6bhmGNpfpJCHy8Lbm9y4+oerI6PR6ecceBXybdJDzFNHF7ose/itfG6htLg9ZM422IXW7yLD4lbwVN5QsUYIWYZE673ESS24D2R47/BRFWzmbvco25tupUbN0vP4k1jeDLeZVwr5uaiIHrO07lU8Ap/y9nGniLduEy7bx/5bNT8vivTw+m5vwcnUepKC5Ze8iT0+HUM0czQHbfrBtzaw0Vpwqsp58wYfLCbnn2x6ix1utOTD6OBzjDSRRlxud5v8VnwCKMY/QWiY20wOg42K82Tjkya18nS8U1DS62OkBCBuQug4jOGm176JNk+8fCye31AhD5KT2G82CNS4/tJRGwDRoThfijVMAsB6oCL6oB1IKL3CBCE9qUA3GiGnuTrEkJoQAa6p1hxQAnWVoljQixSnRCYhLIAS6JEAIezejXsSlCBicNUBKjvukAWCT5J3mmuc0b3AIAUWS9ix7bTuJPgnA/Vd8kAPHchM2n20YPEo+lO/Yb5lMQ63ULJtkmy/i/yAQGknVzz4oGOCNoAakJuwziPPVLstHsjyQAhkb1hIZBwDndzSni3Ul1G5MRj2zwjd42CA6Q7mNHe5ZLXSAIsBgEh4tHgSl2HcZD4ABPshFgMMd973+aOZZxF+8lZEiLAQMYNzB5Je5G7ilt2JACQpQUFACWTTpvTkh3pMaEuBvslB6tyYR1FKHcFJVDykugapUxCDtSpL+CEAKOxHggHxRdMARdJuSpAISnBNTmi5Avv0TA5dy9ZtdhOER4DQy7FViLC6dzTqyC9rdm0bjuB61DcnWX4csYI3GcQiBxKsZeNhGscZ3NHUSNSe4KszP8Az55XppJTt0hqnGx3CCLQDuOyP3ldsaxA1la94P0bejGOz/NR1MmksS/M36THqbySMWI18lVIXzu2jw6h2BRU9RGwFz3taOtxsFo5gxV2HxMbBGaiqndsQxAXLj3DU/etrCuSvFMaa2rzLiJo5H6iBjBI9vYddlvcLrPHjjFXJ0jpyZnemKtley9M12c8QIs4SNeWuabg6tK2MAeH8sVI6T1YqmMC/YGj71jxXA/zIz3S0jKh89M9jHCSRoBLX3ad2mhC0cTqHYVygtq2jZJcyUeQ+9q7IpatvKOKTvHv8no8kk68UibDKyeJk0Z2mSND2nrBFwnrzDrQLzvytZhlxvO01FLO6PD8Ol9GY0ahpBAkfbib38AF6IuvLvKFSSUOeMahkFv6W+Rp62vO0D5OXd0aTk2zk6pvSjsvKlkPJGF8mcuJYZTU9NNBGx1JVRyXdUkkANJv09oEns36WVb5Es7VU9R+bWJTOlbsF1FI83LdkXMd+ItqOqxHUuROe9zGsc9xYz1WlxIb3DgpXJtTJR5swieEkPZWRWtxu4AjyJXfmgskGmcWKThJM6Lym0tNFyrYBPUxMliquYEscjbtfaUt1HHQjyXW62opqCB09XPFTws3ySvDWjxK5RykuOJcsWXsOjbtcxzAdbheQvP90BXXNOSaXNGMUdXidZUOo6ZhHoTTZjnE32treOo9w1C83IlpgpPwd+Nu5OK8lQ5R8KpsdjZm3J1ZHV1mHkCoNK7adZurXj6zeriO5Wvk6zxR5vw1rHlkWKRN/pFPwePfYOLT1cPJT2EYNh2C0zoMKooaSJzttwiFto7rk7yud8o+RKKh53MmCYjHglTAedeC/m43P62EatceoaHqCUZwyLty/JjlGUHrX5nQcDy/hOAtnGEUMVIKh/OSbF+kfHgL6DcFJLiOB8suK0sMUWM0UdYG2vO36OR7e0eqT2iyvNBysZQqmgy11RSO92alfp4tuFM+nyp7qxxz46+C6qLxqeUPpqamLhLK7c3eVX67lXydSMLmV1VWEezBSOF/F9gqxV8pGYs1zOpMiYHJRbQ2HVps+ZrTv+k9SPwuUo9NN+7ZFrqoQlaVsmuV7OEeB08uC4W8T43WR8xM6LU0kTt7Rb9Y/dbgPBamVcsuy1lqngf/AN+xAiaoHu6dFnhfzusmTuTCPCqhmIYtWel15O2+wJawnfYnUnrcfBdAfFG97HPjaXM9Uker3IzZI128fH7mvTxcJLLk3fx8DYIuZgji9xob5Kh8rlM19HRVbQOcjlMJPW0i/wAx8V0HvXOeVCsa6jpae+skzpPAC33rHDetFz3i2zJyN1LyzEqRxJY0smaOom4PyC6KLLz9ljMOJYVUVUmGVPNB5DHdBrgQL23hSlfmnGcRjLKvEJnMO9jCGA9+zZdOTC3KzCE9jpWZc20uFh9PRuZU1tvVabtj7XHr7PkuaVtc98kk08hklkJc5x3uKjOfc0WYA0di0MSxOOjYS87cpHRZfU9/UFpDDWyCWRRVsx5gxMxwujDvpZRYfVbxKmeTRlFhVLPiVWJOfqPo4g1t7RjefE/AKs4FhE2Yq581Q4tp2n6SS2/6rf8AWgV0fQCNoYx9mNFgA3cFpm0qPav7mOHVOfdfHglanMlKT0YZneAH3rNlfHo6jM+HQsp3t25w25cNNCq86jbfpPcfJSeUKZjc14W4A6VAO/sK5ljgjqnObTO0DchA3IQcJsM9QJ1kjL7I7kE3vomxoEo7UlxxsmmRg9oX70hj0mnUk2wdRc+CL6+qfFMQfBPDiBuumjrsE7ZJG8DwTBjg6/BOvrZNEenru8LJ3NDiXHxVIhhw1TS9g3vb5peZj4sB79U4NAGjQPBUIx86zgSe4Eo2yd0bz4WWTzQiwMQL/ct3lLsv+qE8oO5AzGWuHt27glA63OPeUp3pbcEgG2b1XKWwA3DySgJQQfDRIBE4JEqAF3DRGpSG6NespiBwSWCXvSaIAEaI0QN+9AwJQEIPYEwBCS9kA6IAOKQoPektx1SAeNEpF0wO63WRzrPeB7tUxD7I3pnODgHH9ko2jwYfggB10t7Jl3+6B4oIkPFvkSgBxKbogtdxf5BIWfWckxoCOG9ISAN6TYHHXvKTYAO4KShQ4DiPNO2x2nwQGjgE61kwYzaPBrkt3Hc3zKfbsR4IENs49QRZ3vAeCXig96YDbE73FGyL7z5oKAkMXZHALUxuc0eB4hVN0MFLLID1EMJW3ey0MyxGfLGLQtF3SUU7QO3m3Ko8ky4PPnJL9G/Ga0/pI6RkTT1GR+v8qs7ncFUeTOcNp8Ui4yNgd4Au/EK2k3WWdf1X/PB3dN/xIluTnA2VWM12YKpu2YHmkow7czZHTeO25t5rodrqIyhCyDLtK1ntB0h73OJK2sblfDhkrozZzrNuOFyuecrZUI718nNeXKlp6mmosQpZmunpHmGUN1IY7UG/Y4fFUrMgGL4DR4zCfp6cbE1uGup8Dr3FdEr6SOrpJqadoMcrS09naubUdTPgWJVOG1rQYXnYkafVPU7uIXVgncVXK/YXU4Fjf0l+51zkizA3Gcrsp3uvUUJ5pw62ez5bvAK7Lzpl3G67IWOHEKFgq8NqOhNATo9t91/ZcODvNd2yxmPCs00ZqcFqDKGgGSF42ZYT1Ob940KnPiaeuPDMMeT+yfJKrmfLFkWfHWMxnBoucroGbE0Ld80Y3FvW4a6cR3LpRe0G1xfqusElbAyHnucDmbWzduuqwhkeOWpG0sXcWmjyTIDFI6OUFj2mzmuFiD2g7leuSvLLqnE25jxUGmwPCL1ctQ8WEjm6ta3r1tu7BxXcscpcDp6V2K49Dh8UTNfSKuJhJ7BcXcewXK5VmDHsT5UMSjy7lmmdS4JTuDpZHjZDrbnyAbgPZZvv8PTjmeRcUvk82WNQdJ2zY5LoqrNWfMVzfWx7EMTnc0CdGvcLNb+zH8wui12bst0ERlqsboGNHBsweT3BtyVkwfLmHYVlwYHTwXozE6KS5s6XaFnOJHE3/wBWXDOUDLEOVczOpYInihqYxLSuedo9Tm34kH4ELl9Gebv8jqSliil8l6xvlhgJNPlnDpKyVx2WzVALGX7GDpO+CqlfQ43mKdtZmGuEsg1ZE7VsXcwaBLkzCo/R/TCzamlJaz6rd3xVvZh0dhtkk9mgUynHG9MEelg6TWteR2UN2HPwPGMKxJ5inhjq42SMc24c1xsQQdCLXXZKzIWVap5dPgNFtXOsbCy/7pCoGb8PZJh1NTQtPPVFbTxR68S8LsR3m3Wpnkk4qSe5hmwxhlca2pFbpMh5Vo3h8OBUW0NQXsL/AOYlT0UMcMYjhjZHG3cxjQ1o7gFkSLnlJy5ZKio8ISyRKmyPbGwveQ1o1JKg0NfEJxBTuN7OdoFwzlBxtlZWyyRP6DRzMHaBvd53+CuPKJmprWy0lPKGO2bSuv8Ao29X2iuUUlJNmDFxGxxZE0XcfcZ+JXf0uL++XBh1GTSu3HlmbCqykgpAx84a8m7rgrNJjNHHukc/7LSpGmyPTVNc2nbXzRtc1zr7DXEW8utSNRyfYdR0U80lXVTPjYXAWawX+K69WNvk5LyRVUU+rx6SQbNMzm76bR1d4Bb2DZYqK94qMTL4YXa2P6R/nu7ypXKeGshxNwFM1rgw7LjqSbjcVZpo5Gn1R5hKeRQemJvgwd1a8jv6FYpqiopR6NQlzIo7hsbWB1hfu+K36KfEZJSKiCV0drhwhIN0/J4e/E6u4LbM/wCZWh4sm4RfKOeeeUZUisvrYQ4tLZAQbG7DoVJ5RqoH5qwtrXdI1AABBHAqAebzz2/rXfNSuTjbNuFX/wDEt+9N4IpWJdTN7NHbxuQgbkLgLNlrLtHSKQxtJ1ue8p7fVHchD5GhoY0D1R5J1hwt4IATJp4YATNKxg7T9yVj5HWuEoYVVcW5RMBwyV8O1PVTM0LYY9Aeq5sFWMT5XKknZwzC4WFxs3npC9xPcLBaRg5cCaa3Z1IMsnbBt6pXHDmzHq9slRieLS0lHFYPbRtDHPcdzG9p6ydALqJfnuKmlc2GqrIzf/5m8u8biyrtT4SM+5DzL9zvbL8U9cMpuUSqAuzGcQHYZYpf5gFIwcpWI6BuK7X/ABqFh+LXJ9ua5ixaoPiSOwotouWxcpWIjfNhUv24Zo/ldbcXKbUjSSgw2X/h1xZ8HNSp+V/oe3hr9UdGAugiypNPykMf+lwSf+xqopPvC3GcoGHH9LhuLwjr9F2x/dJStD0y+C0oItxVbGfsufraueD/AI1LI23wUlhOYcHxiR0WGYjBUyNbtFjXEOt12NkWFNckghOIsm6BAC2A3ABI9hOrSQ75pR3pSQBfXRDAxsl1s7zWVaW04ndbvW00kNaTbXipi7KlGh6LJLX9ryCQs+s4+KogUhNNhvIHijm2cQT3lAYwbmt8kwE2m+8EbV+B8k5B11QAm0d2yfgkJcdzQO8p2u5AHaUwMey/iQPBLsO98+ACybkWsiwMfN9bnW77JNhovoT3rIdUlgixjQ0Dc0eScPJDUtwgAIKBvShBN0CC6LI4IugAKTvSX4FFrJDEIBKALf5IuOCO9IY4ISAhKe1AhL2RZBKS9uKBi3sLppdqkJv2I8UDFQSkJ13gIBHWgBU4Na8bDxdjhsu7joU0eKcCmhNHlrCYZMv51q8Ln6JZLJSOv1td0fkPNXVpWty/4BJhuZabMNKNmKvAD3D2Z2D72gH9krDhOINxKhjqY9NodIe67iFWeN1NG/Sz2cGdNyRVtnwfmb9OneWkdh1H3+SmK6n9KpJISbFw07+C5xlzGDhGIiV9zDINiVo6uvvC6XDKyeJksT2vjeNprmm4IXDJUdN07RSKqF0b3Me0tc02IPBVPN+XPyvAJqcBtZELNvpzjfdP3LrdbQU9YPpWWfuD26FQ1Rl2Jh2jUSEdWyFMJODtHa8mPNDRM4BNVyMp30lQ1zXMOy8OFjYcCF0Oj5LZ34RhuKZexmagxN1OyV20SG7Thfoub0m7x1hafK/gsdG2gr6WEBjtqCZ/Eu3tJPdceC6JyaYq3F8mYfICDLTximlA4OYLfEWPiu6eWSxqcNjyHjjrcJblEp8U5UaEylzYMWbCC10skUUpA+10XcOKyR49yp1FPHFS4fTYfE82bJHTRRknsLiSuo0uG09PBJCAZGym7to7+xbMcbY2NYxoa1osABuWH4h86V+htLBj4TdHLaPksxfGa9tfnfH5qt+/mo5DI7u23aNH2QulYPhNBgtCyjwuljpYGa7LBvPWTvJ7SttKonmnk9zFDFGHtQqg855YpM1YO6iq/o5GnbgnAu6J/X2jgRxCm0qiMnF2i2rVM43gkc2W6luDZjjFHUMu2nnJ+hqW33tfuv2GxVoDeo3V3qaeGqhMNTDHNE7eyRgc0+B0WGloKOka1tLSwQtb6ojjDQO5OclJ2deHqZY46Zb0VrC8Alq8Yo6+tZsU1DeWFh3ySkWDuwNBNusnsVvScUKG72MJy1ycn5AlNulKh8w5mwvAIia+cc7a7YWavd4cO8pJNukTwSksjImF73ANG8rm+ec+xMZJTYdKBs6OmGoafq9bvkqtm/lCqsWL44nc3T7hDG7f9p33BUjmqzGJxzMUtQ4eqyCMvt4C67sPS/3TMMnUKO0ORamasxeoMdLDNMBd+wwFzj1uKnMExymwSibST4VPDITtSyk2c89zgNBwClMv4dnHDaXmcMynMGu1dJJA4OeeslxHluClZaTPcjbVOUjNGd7dkH4bRXVKSfp8fc5YbPVe/wBhco45gtZj0LZqoU4dG8fTfR66WFzortj2GU5wasezadeFxBLtO8LmldgERYX4rlfE8LkO98ERLR4Wstelmx3B6OYYRWOrcMcC2SIgnZHG7Dq09oXLkwuTThKv58nRGde5WTGHUzaXEmOa65MbrBwvbcpSWpc1o/RX6gxQmC4jBiNTG4HYmbG7aYfDUHiFLSs6LSiauXqOzp9sexG5Kq5IMXqnta1x5sixH1la6jEKiRha5sYDhbRvBVDKgtidV9g/zK0ykHmwPd18yumUIOSbR5M5zUpJMqLHhk1S0xtPTc65371vZTla7NmEgRgH0pmoUe7Wpn/a+a3Moi2bcJ/9UxaTStjg3oR3QbkIQvPLICfPdBS1tRRvgkb6NIYnyyGwLgdzQLk/BYarlAo4783st+0Rfy1XMc5VBfmXEIweiypffvuokSW3LtXRqattnK+q0ukjo2I8oz3XEDXO7hYfH8FUcczbiNaObjldEZdLhxu0cSoYyLVe+9Yb+ywW8VqulxY1qS3+osefJlmot7GcGwsUmGgSTOqPBvYFhmfaJ5v7JWbDZGR0W0SABb5K4bbm/VN0oo38VM88NDh1O7ZfUOAB6nSG1/BoC6ThOWqeKghp6WnpxDG3ZbttBJ7TpxK5thkwqMz4M+/QM1hfrEZAXbYaKmFPGHRRu6IFyB1Lj6ptVH8yukqnL8iAlyPS1GstHQP74B+C1ZeTfDn/APu2i/Z2m/JW+PDqZx/REfZc4fIrYbh8Y9SSpZ3TO+9cqnJcM6XpfKKA/kvoj6lIWf8ADqnD5la0vJb/AFT8Qj+zUNd8wumNpHNHRq6gd5a75hZBBUN9WrJ+1E0/KytZcnyZuMPhHJJeTCtafoquuH2oWPWB/J/jsH6KveAPepXD+UrsgbVjdJA7vYR96Xbrh+pp390hb8wqWfJ8mbx4/wDFHFhl3NdIfoq2N/e6VisWRstZpOaKPEsbhigpaVjyJBMHOluCA0Aa21vquiT1lVFBI59BIQGk3jka74aLbibsxMFiLNCfcb5QnFJenb8xbBLZBCLJCEe4MFysD3l+/cipJ5wdQGidTjaJJ1soe7o0SpWEcd9XblknIDD2olfsDtO5YOk88SUPbYS33ZlgJLSL7lkTYmbDe0pypcEvkCkQUXTECAi6EwBKU26LIAWyLBISR1hNL2j1nDzQA6/Yk08UnOMO437gUB3Ux58E6YWO3cdEqZdxPqW7yEv0nU0eKKAcEJlpBxaD2BGy473nwACAFJ6knel5ocXOPim82wG+zc9qQxbjrCQuaOI8Euy0HRo8kbtEhjdsE2AJ8EgJvo0p4OuqEAIC46bA80Wf9UfFPukQAyzresPJNLL+27zsnHelKBjAwcbnvKcGNG4BBKUIAAEqw1tS2jo5qmUEsijdIQN5DQSQPJcrwPMnKVm2nlxTAqehioRIWNjLY9CLG13m5IBFzoqUWyW6Otb0q5ZUZo5UMK1rsrMrGDe6KnJ+Mbj8k2k5a4KeQQ5gwCropOPNuuf3XhpVduXgWpF/zbl+lzPl+pwqtOy2YXZJa5ieNWvHcfMXC82QvrsnY/U4Xi0Lo+bfsTMGvc9vWCNe0LvuDcoeXsde2PD8TijmduhqBzUh8Hb/AAJWlyh5Gp850bXOcKbEoG2gqSNLe4/rafhvHEFxkl6JrYrS/fFnPYpo5o2yQvbIxwuHNNwVMYFmGrwc7LCJacm5hedO8HgVzKoZjGTcTfQ4hA+CQG5jcbtePeYdxHaFMUWY4aoAGzXe647J/AqJ4GuN0dMM8Z7PZnZKPOWETsvNK+lfxEjSR5i6StzXgTIj/wBZRP7GAuPyXKDiAt6h81qy1HOHQWWPYTNdVcFkzpmqnxnD5cMpqUmCS21NKNRY3BaOB7Sqlk/NVbkzF3ODTNSzWE8F7CQDc5p4OHDyKSolZCNqWRrB9YqExOuZUFsULNq50JGpPYF1YsarTWxzZp/3N7npPL2YMMzFRipwmqbM0DpxnSSM9Tm7x8lKAE7gT3LzxljImd66aOrwjC62iI1ZUyO9GA7i4g/BXyPkjzpixDsw5uDWnexkks1vDotWUukSfu2IXVbbo6BVYph9H/3uvpYLf1kzW/MrBSZgwWsqBT0mLUM8zt0cdQxzj3AHVUifkdyVhPTzBmqVrxvDpIYb+BuVXM/5XybQYAypyTW1VViMMzSbOfKHM4kHZABBsQR2oXSw41B+Jl/idsQudYNyuYIcPhZiorYa2ONrZr09w54FnEWPXffZZqjlfy5G28UOITHqEIb83LleDInVHSssGrsvyFymp5a4Nq1JgkpHvTTgfAA/Nab+U/GcRDvQzT0rRvDI7uHi66r8Pk8oFli9kzsL3NYwveQ1o3uJsB4qvYtnbA8N2m+lelyj9XTjb83bh5rkWI4rX4g4yYjXTTga/SSEgeG5amC4TiubcR9AwSIiNtuenfoyNvW48OwDUq49OuZMUslFkzNyqYhVF1PhLBS7R2RzfSeeza6+xo8Vr4ByZZlzI8VeOTHDaeQ7RM4Lpn9uxfT9o+C6dkrk/wAIyrG2VjBV4hbpVcrdR2MHsD49qtiruRhtjX5mLUp+5lMwHkuyvhDWufRHEJh+srHbevYzRo8laGy0GHRiKIw07RujiaB8GhZJaimZpLPEOwvCxtxCgZo2phb3GyycpS5ZSilwjDLjVKzXm6p462wO+9ars04c12y4TtPbFZSsdXTy6R1Ebu54T5YYpW7M0bJAeD2gqdi9vJFsx+gf6kpv1EbK162qpqppD6aOS/FzQT5pcTy1STtL6Qejy8AD0T4cFXJZp8LfsTght7W4J1fBpFJlH5QMFp8DxKkxXDBzHPPdtRg6Bw1uOwgm4Um+QSRsc0WDgHDx1UXyh1hxjH6TDKYhwhGybH232J8m2+KlJmc2xjR6o0HcFu+I3yaYOZVwQ+Vr/lOp/wCGf5lZXnUKuZV/9pVPXsH+ZWJ+8aFdnweRl97Knr6ZMOsu+a38pj/tbhP/AKpi0bgV5BIBc5wF1J5QaDmzCv8A1LT808m0maY98Z21CAheeWef81SgZpxa5/2uT+YqKNQ0cVs5w2hmzFwR/tcv8xUQT1r3o8I8hrc2zUha0sxE4cNNoW8ljL2De4IDHVA2YmPeeGw0lTJquTXEpRkmkPdIXCxJsVkwx21HJTk9IjTvCy0uEYtVnZp8NqZHAXPQt806TAcYpqgF9DLHIADa4v2HeubuQ9to9CeOcqaTY6mnfGyOaAf0ijlbMwddje3zC7pg2LYJjGGU1TDU0TxLGHbD3tDmniCCbgg6LhMtLiMcwmGHVAefWAboU1zpg7akwOUniTFf7lOWEM6TumY4+7gbWm0eio6agk/RthP2H/gVsxUEVugJm/Zld+K84wVlQ+5iwd9mGztmkabHqNgtiLH3wnYFA4Ova3MOafgQub8N8SNu/LzFnoxtI5vqzVTf27/MJ7Ypm7qqX9prT9y88Mzg6LeKiD7E87Pk9bEefJmj6PE8Ti7q6X77o/DSJef6fz9D0GG1A/Xsd3x/gU4GpHGF3gQuAx8oOIN/R5hxJv2pmP8AnGtqLlIxhnq5jmd9unhd/wAoT/DTJ78TuU5qHQSNMUZu07nn8FttN2A9YC4XFymY7xxqmePr0TPuKmchcoONV+baLB62pp6+lqmvG0yAMfEQ0uBuN40trwS7E47sO7F7I62O1BRYrBUVcFPtGeZjNn1gXajwWTdbstK+DJIwPGu/rTA18JvvHFVzEOUDBaSQxQNqa+UabNLHt/G60/z8r5f+7ZOxmVp4ubs/8pRSe6KqS2ZcpWbbQ5uvYkp7bBtvvqqeM6Y60ADI+JkD6/8A+qBnbFGEvnyXi8fWWi//ACorewp1RdQksqbHykUDXbNbhOLUZ4mSnuB8QprCc2YHi0rYaLEIzO7dFICx5PUAd/gnaFpkt6Jc6cCUy7uDD4myypOKBWMG31NHjdJZ59oDuCekTATYPvuRzY63HvKVCLAQRs90eOqWzRuAHcEcEdSdgLeyOO5AKDogASpu1bci6LAU6oGiQXQgAuhLdMc4daQwJAKY7folugKWUhbaoCQFLtIAVHam3KS9kBQpOuibfVNL2+8PNJzrBqTu7EDoyWVWzDyh5ay/Wy0NdXl1XE274oY3PLTa4aSBYE9Xbqp6WpcdI7gdZC84Z/wv8iZ9rmV0bp4K2R1TG9ziNprze9+sG48FpjSk6YpJqi65OwCv5T8WrMwZk9Miwu5ZTsifa/UxhO5rRvNtT4q/YZkqmwGlNLg2O4zhkReZNkua5u0eNi23ALk+F57xqhiZFSYhzbIwGtZPECABuALbFWOg5XcegA9Mw+nrWDe6B9z5GxRJzvj+f6NXgkt07/n5nRqaizTTXdSZgw/FGjc2qpebd+/GfuWxWc5XQGHMWAx1URHS2NmqZ5OAd8FTKDlbytXytjxWlmoJj7RZu8RY/NXTCcUosUYHYFjdPVi1+ac8SEeGjgi5HO4pc/z9Co41yR5QxprnYSX4VU77QHaYD2xP3eBCp9ZFn/kyO24jGMDjOrgXSRtHb7cX8veu0TuieR+U6XmyN0zTdo/aGrfFZgZoGaH0uncONi8D5OHx71SyPiW6J017SiYJiuVuU3CjTVlPHLLGNqSjqNJYvrMcNbfWb42VSzJyHs2nSZdxTYHCCsbe3YHt+8KR5Q+Td8Lxmjk/LqWrgJmfS0+l7b3RDgetm48BwO5l3lRwypyhNieNPbFX0YDJqaPQzPPqmMHg6x+zY30sqVpXj4GmpP1nKcbyHmvLdJJV1rI2UsfrSx1bC3sFiQb9lrqHwihxvHK1tFhUdXW1LtRHDckDrJ3AdpsF0fBcvY/yuYqMVx2Z9BgULyIgwaW4tiB3nref8h1/L+F4dgNAMOyth8UMI0fMb2cetzvWkPw7lq5qK9XJnu/bwcuyzyGvLW1ecMT5poF3U1K8EjsdKdB4A966NgGEZewFuxlbAmPkGhnjZcnvmf8AcVKyQUwmHpjpMRqRqIg24b+xuHeVlmkqhCZJ5oMNpmDVxIcQPtGzW/FYvJKRWlLdjJGYpOwvnqaehZxLBzjh+06w+Ci5qHC6wllTiOJYs4HWOOZ+z5R2HmVAY7yj5Fwd7uerX41VN9mEGfX7RsweCqGJctmO4leDKuAR08e5skoMzh4CzB8ULHLljUrdR3+x1Why/h0BvQ5ZoYTv25mM2u86OPxRiWZ8GwX6LEscwugcNOaa8F37oN/gvP8Ai9fm7GgTmLMkkMTt8AmsP3I7DzUTHhmDwetz9Y/iT9G0+WqemPzZssGV8pL7/wAf7Fi5YajAMXxyHF8Bq5KmaWzKtpi2GyW3PB33I0OnUVoZWpMBxnEDhkuFTQVEzXcy4VLnG4F7WNtbbu5asdSynbs0lLBTjray58ytatlnpqqixikfs1EEjST1PabtPjuVU2qNHhWNaluOzHlqpy/WN9JifNRPdZsoGyfsu6j2ceCKGgggfz8UjixzdxNxZdtwjGMB5QsGmp5aez3MAmgfbbZfcWniOo9i5Ti2UcQw3M7csU5570x4NNIfajN9T1WsdruPWs45HL0y2ZOmMXqSGZWy7VZ0xc0lI8w0MJBqKgi4aOzrceA8Su5UtNgmTMCbFEY6Kii3ucbukceJ4ucVFwfkfImX20FG9gEA2pZXm20873uPEnq7gqxkuuGe+UMVMjpZaDCqZ0gEgsHSOOyCBw3m3HRZO8rpcIHUVqlyWaqz1RGJ76eRkMbPWkqOhb9kqk43ymU20W07qjEHdh5uP/Xgq3ynuZX59xJsZJio3Npmi+l2jX4k+SqzmST1Io6ezeMjwPVC2x9PF02OWTTHUuC0P5R8VmkLaampIwOGy55HxTBnvH73JpyOowj7io+HDqeKMMG1byutTEHU9N0GNL5Tw2t3eutdPj+Dj/E5PktNHyj1EZArsOjkHF0Ti0+RuFdMuZ0psQs3D610cvGnl0d5HQ+C4s2iqZRtyv5sH2RvSinkjcCyQkt1B3EHvXPPp4P2nVDJl/uR6VosdZNZlS3m38HD1T+C1sZZFUmztl7XDpBcsyfnB7pGYfjMo2j0Yqh2+/uv+4+fWugRVVhsyXdbcuGeNwZ1QalujlNBRvps+y4dUOJe2SRokB1doSD4hWiqoGwuafSX3BvYvKomdapldnHEJaaTmvpdhslyNWtDd47QVrxy4/RWkbUyzM322+cBHcdV2vDKaUkznh1McVwkvJbcsYfHieJzxSTyQAMJux+zfpbrqyS5Vogz6StnsP8AeCqTkzMWHsrXxYm/0SWUbAkcPo733Hi35LoDqNx1bNEOPH8FlmyaJJN1+REYPJbir/MplLDC7HG7dntj2yA7W+oV8wCko2Y9QuhihBEl2loGmhVbflprasVHpwDg4usGnW/DcprLOFsizHQStn2yyXats79Csc2SGSalFnRixzx4nGSOljchCEjmOC5xoKN2bMVfNNUPPpTy8AgW13BaUbcFhts4U6Z3XPOT8ApTlCi9HzhibNwfNzo/aaD96r20vQUdSVs1jpXCRKtxKCIWpsMoYO0RbR8yh+M1rhZlQYx1RgN+SidpZqECStgadxkbfzSeKCVtFrLLhMudLWPwqh5yofI8Rt52XpG7z1fcqbNUTVVRJVTvJmmcXvIPE8O4blO5mm/6olF/Xcxp8XBV0Fc3SwVOb5Zvml6lH4MollG6R/7xSurKpjehNJtHRo2jqTuWK6y0YDsRo2u3GUE+C6pUlZim+Ey0z1U2DYIIoZniQjZ2r6ued7vn8FX2V1TBSubA58tTUvEMYLuv8bjwupDM8202nYDxc75LVy5EJsx4Wy21sc5L+0Bp81yYYpY9b87m2WTUtKJFuTa97QTiTHHiPRiRfsN012TsTb6tVSu+1A4LrbKOeJjWMfBstFgCwj71lZDWX1jpnftOCz70zJqJxl2V8Vbujw9/eCPm1YnZXxHe7DcOk7nNH3Bd2iZKP0lFD3tlv8wsm7Q4eT3bB+9PvSJbX8o8+yZcxAGxy/TuH1JG/c4LPQUmJYTIZqXL9TDLa23C517dVw5d6cKa30mFyeEDXfIrWnOFBrnSYe9tgTrSOHyCbyt8/wDZKaXC/Y5/yYY1jtbnKKlkjxEUfNv9JbUF7mMsOibu3G9hoeK1MuBkuKY5U1cEdRViue3nJht2FzuB0XV8uua3AqJzdNuISEdp1+9ctwpvN5lzPB7te5w8XOTbTjsTB3kdlpwurndKW845jQ3RrOiPIKSMsrvWkee9xUNhP/eiPqlbOL4tSYRTCasc7pHZYxgu556gPv3Bc7W+x0M3ttw3OPmnMnkB0le3ucVzqozRi9RIx8c7KbZJsyNtw7XTave6sGDZpjrJWU9ZD6PM/otcHXY93V1g9/mk4MZfKmtkbTU/NyG7zrfW/mqZynQUkOG4ZWtgggqzWtHPsYGOsATqR3A+CnopC4sDjcN3di0c9VtFSUuEemwsna6dzrPALW2tcm/ekm7M9Ci0T9NmjAqyXm6fFqSR5Og5zZv52UrZUeiqMpZmDqc0dC87vomiN7e4tWbCJ6nLOOwYJU1DqrC60E0M7z0o3f1ZPw8RbfZbqd8nO8dcFwPYkSnTgUwu33+aohC92iEwyNB9YeaTnm30Dj3NKBmS6VY+c6mn5I23k6NHiU7FRkRdY/pHcWjwujZef1hHcAiwHE9qLkdyQMudXOPih0bALuF+83QAu2OOiOcYPaCwPtfoNDe4LGdNUtRSibDpmkaFYzK3gCsNyRvRe28KdRWky886+jB4uSh7zwaPNYm71kHaix0KdreXjyQb+875IukJ0RYqE2Wk6knvJS7Lb+qE0HVLtIsdDtprQSbABa80xkP1eATKiTadYHQLFtdSTZaiP0KoXLVl4Yvlj0+nZtVWGEy6DV0R9ceGjvAq8l1kkgEjCx7Q5rgQWncRxCIy0uxyjqVM8yUM3PQAn1m6FbLSWm7SQesLJmrBjlXNtVh2opnkPgceMbtW+WrfBYl6Oz3QYpWt+UZTUOkbszsZO3qkF/isPolMZRJSyS0co1a5riQD2HeEoSpV8Gr9XuVlmwXlEztl8Nb6W3GKRunN1P0ht2O9ceZV/wAqcreX8QkazEGvwKocekyU7dM4/aA6B7wFxtr3MN2OLT2JlW8TxuM0bZHAGztx8wpcVLlHPLDFbxdHqyGaKZjaugeyRktiTG4Fsg6wRoT2hcwzJyQQYxyhRYjE9kOD1N56yFjg14kG9rBwD9CTw6XYqFkbMGMZTwuo9FgnrcOrg0kQPN4HtJBsNbEjf16KSPKLBtXGF4gH9tr371mtUW9O5l2rXr2O8xUkYhZSNibDRwtDI4IxYbI3Cw3NHV5qr5o5R8s4BtQ1WJCaVgt6JQfSSdznDot7rhcqzXnHH8z5e9CigqsPw6C8lRPK8h0zQNGE6XF+HEkX3KqUcOG08TTDSmpcRcOqDoP2RonGK5e7HHDOTrhF7xPljx/Ew6myfg0WHw/1rm88/v4MB77qn4rDiuMzc/mvH5Z37+aMhlI7m+q3wCbNX1MzNgybMfBjBstHgFrrTfxsdEenxx3e7+v8/wCzNDHhdJb0agE7xukqTtf3dyyTYhVSt2DKWs4MZ0R5BaqVLSvJunSqO32E36oSpFQhU+NvPxS0v9c3o9jhqFjWvNWNgddpu9pvod3ihqxOSj7i18kVHJV1lU2GtfS1tMA8NtdskZPSBHWHW17VfKGjmrc04jiDp4zUU7W0bZL6t6N3W07bea5Jl+bMlNjX5Xy9QVJlcHC8dM6RlnDUaix61aqDNWc8vRyzVmEnmppXTyOqKJzQXO3naFrLmywblaZzwmkq+CV5VaeDCcCjNS/0isqpOapoyOi026T7cSAba8SFMf8A8fsOFHgOK4g61pakRbX1Y23PxcfJc2zbmiTNuN0lbVQCnjpoObZG15cNom7nX7dPJW7LednZb5OH08mDVop5WVDWVrS3YdNIXbPR37O4bXWFcY6YKPkzyXP1HOKvFWyz1dZIdqaqnlnI7XOJF1sYNBzVJzj/ANLMdtxPVwUPzDTHSxNHTlI2irG3oiw0A0Xfjj5OXNN7Rfgw11R6NTufvduaOsqOpIgxpqag3J6Rc75p2JSc9XRQA6N1PeVit+UaosGlLCdbe2Usj8D6eNvV+hkbLUVh/otoYv6xw1PcE/8AJwI6dRMXdd7LcDQ0AAAAbrJVhq+D0+0n7tyGqaeWEnavM0ceNvvVmo89zU+XfRmMc+vb9HHMdwZbRx63Dd5FR07dptxvCgKxhpaoOaOg/W3zT0rJyc2VPF6om1QhsvObdnOJ1Dt/es8UkmGvDgXSUxPSad7O0LXZYPbKzf8AMKSAZLHqLtcNQutKlR5bk27Fr6WnxCLaYGtmIuyTg7sKsHJ5mORzjgmJPtJED6O551sN7CezeOzTqVWonOgc+mcb7Bu09i1cVY6KeOshNntcNe0bisM+FZYUzbBneKdo7HLPCDrKz94Lfyu+OTHqYNkaT0job+yVz2ljNbRQ1URaWSsDgOrrHmrPybUTxmyKRwFooZHG3db7146xJPk9ueVuL2OsIQhUcBx3lppTSZnhqNzamnGvWWktPwsqHz4HWuzctOEHEMtMxCJu1JQP5x1t/Nu6LvI7J8Fw89q9PE04kambBqepqWGrcyeN+7ZeHfFahc0e0PNJzrBvcFo0mqFqaLPjMsk+HSgm4aA8W7DdQbZnW0cVt0uMUhpQyomDXAbJBBO0FF7TWvc2IulYD0S1p1C5sEXC4tHTlmpNSTNoVDusp8dWY6iCXa9SQE9y0jKGmz2PaepzbFI+Zjmka69i3aTVGWtosOPzuc2JwJ6JLf8AXksmUq5sGYMMleRrKYSTw2hp8bKMNdBVUAjmlDJbDeDvC0qaeJjiHyFlyCHDe1w1BXPjj6HBm05+rUvJ6TJrC67ZYLdsZ/FZY5K0caQ94eFySHlTxdsbGvGFyFoALnMeC7tNnLaj5VcQaBtU2FO/akH3rj7E0VqTOtRy1p3xUx+zK4fMLO2WpG+lae6YfeFyiHlcqm+tQYYe6eQfctlvLBI3fhtEe6rcP+VHamZv7HUOem40j/B7T96x1VTJ6NK0Us4LmOGmyeB7VzlnLACLuwqDwrfxYnN5X4yf/YjXDsrW/wCFHbmKvoXLAa578Aw8NAAFPGLj7KoEZ5vP+ZIz+sc2Tzsf+ZZ8o57p5qqLCKyCKiiDJHRTuqWloAJIa7QW0Nr9i0pqiml5TcQdT1EdRHPSNcHxvDmkhrL6juVaWrTNFSkqJiorJcPgdPThrpnWijDt204gC/YtCjo34vmeSDEqx9cKOI7W03YAdfVotwv8lKGkZXNNLJtNbINHN3tcNQR3ELWpmT4XmMT4u+Eekxc2ypjaWMc++u3wDiPBZP6G/k3aPD8AxRsdXQRwzRxvLLw3DHEaEEdij8bp8KxPB6yrwoxc5ROLXOhGzZzSLtP4qZdhbImxNw70emijJka1sG0A8+0LEC+p33WjmU0lJhVTSU0bGz1h+jgiADpJCR0iB5klZp77DHZbrqt9TSslrH1lPWRvcx0rA17Ht9Yabwkz/DFiGaMoYXUxiWCeVxlZcjaaXNBGnYCtnAsMqaaSOornQl8MXNQxQNIZGD6x13k23rTxh8U3K1ltkkrY2UlK6Vxe4ADR53nuC0x+8xzcWheUXAcMy/JheMYNSson+ktppY4dGva4aG3WLf6ssmeKx35tUNUCRNBVRSRniCQb/ILFm7GIs2Y/Q4ZhBFTQYdJz09Q31Hy2sGtPEDXXtKwZiecXx3Bct0w2i6ds05HsMb1+G0VpJXJIjHtC2dQd0tTx1TDa+lllcATdN2FLMExgvdLvSlmqA034pFCAEFHHtTrGyaWH/wD6gADrp1+pNDbHRONmi5TsQpeAD1rC5xOpOqHEnemvPeiykgv1pjt9+KDfrSG6ChAeCUNvuSABNfMxm87VupIZlaLXTty0XVjvYbbvKZ6ZKeI3e6iw0skLi+qa91loirktrsnwQK3a0cy3cix6Wbe2myy7MZI3nRMY5j/Vdc9SxTG7rDQBAUNvdF+tM2kXvokWOBRtWCb3INuKAOf8tWAflPL7cUgZepw0lzrDV0J9byNnea5PR1Alpw57gHN6JuV1DlTzBPJXQ5Zwt7xJO0Oqub9Z4cbNiHfvPYQOJWDBuRqngZtY3iM3OnfDTABrOwuINyOwALqhljjhU39jJKWu4HPWSMf6jmu7inK9Y/yQgROly/XSOmaLiGpA6XYHi1j3hc8ppJWTSUlW1zJ4iWua4WIINiD2graGSORXFmmpqWmao2kJEqo1MFBU1FHWPjgnkiv0m7LrXUyzHsUYLNrH99hf5KDrWluxO3ew69y3GbLmhzdxFwlKMXu0LFKUbimbVRXVeIDm6ypkla7SznaeSjKC7TJA89KMrcDba3WpWkU9fFUD1ZOi5EaWyHNu1JmzZFk5wsUiCqEQhCYAkS8EiANaskeHMghBdJKQAG7zc2AHaSuw5K5OcPwamiqcVhjrcRIDnbY2o4T1NG4ke8fCy48Kt9BjNJXtjbIaeRkga7cS117eK6bLyhYxmKdtFkrCXiQtDpZ5wCIr/wB0d5vfgFz9QptJR48nOpR1ty/I6UBYADcOHBOa9zfVcRff2qpZewPNUUhnxvMxmLx+giiBa095A+StbQQ0Bx2iBqeteXJaXSdnUvUtyp5wyDhmOQST4fHFh2Jbw+NuzFKep7Ru+0PiuUYpX41SYXNlzE3PjhgkG3G5oLmgG+yD7vEW+S9CLn3K/gbKjDGYvC36elGzLsjV8X/67+666cGZ6lGRjPHSbicgNREa+B7XWay+/TXVSLalxKWmw7DMXpAYS2Gpb0SWnQnrLfwUbWw1+FyinljD7+o4AkOHZ+C9rHlj7Wed1GCf/Jyn8GvVSu9JmePWcdkfJTFHAKamZGN4GvfxUGwSxVLZKqKRg2g4hzSL+anoaiKdu1G64G++hCjI74N+kSjzyZELXkrqeM229o/VF0z8oxe4/wAgs6Z29yPybZUdiVPzkD2gdJvSatuKpilNmO16joU6UaXTWzJmlOJC4a8SMLHb27u5SFK/Ye6InS201Rbh6JiVtzHH4FSEvQMcvuuse4rsi7R4U46ZNDqw7E0Uw69g/cioj5+nez3hp38E2sc10D27QuBca8VjirIwxocTtdQF1RBaOTmVtVhNRSvPTppLtH1Xf5grqHJ7QCOrrKrU7LGxDxNz8guPcnU3N5lqIoz9HPC4+RBH3r0DleiNLhUTXC0kx5x3ju+Fl4maLjlaR7MJ306v7E02BxaDfeLoQZyCQNw3IR6Tn9RgnhjqqWSCdgkje0tew7nNIsQvPuZ8ltwHFpaV+2+G+1C9zvXZw8eB7QvQjTskEKGzfl2HMGG80SI52XdBL7ruo9h4+acZtLZmuNxUvWtjgkWFUbT04g7xK244aOH9HQ05PW9u180YlDU4bWS0lbC6GeI2cx3D8R2rV9IVvU+WeiljXCRvCqaHhjYKeM7yWwtGi24sRkpIKiqLmkQMuxlgAXk2b8dfBQbZjzru0BFVI59HMwHfY28VDxJ8j7rSbRb8r5MjxzDW1uJ+kTVNR9KSJNmwO6/WTvUw3kxoP6mpH9uPwVryg2J2XKB8QFnwsdcdwH3LbfT0ge4uilLr6kba82WfJqdMlRj8FKPJdQu9mcf24/BA5K6E+1OP7Yf4VeGR0o3RzD99ZWx053CUd5ep7+T/ACE0vj/RQHclFFwmmH9oP8KaeSem4VMw/bb/AIV0mNrWts29u0kp4CPxGX/Ih6fg5j/0TxcKuYftN/woHJSB6tfN/c/BdPslsj8Rl+QtfBy88ljuFfKe9jCmO5LpdwrD4wxrqLo767Tx2ArC5tjr6Se4I/EZfkdp+DlFfycPw2iqK6euAhp43SyHmGbgL9a0sOwSty9mzCYsRbGyStpTUNbHpshzXWa7TeLaronKCx35mYnzTqnSMFwcNNkPaXX06rql5ozA7GM3YBVg35txhvshuhOm7vXodO5ZIOUmc+SWmaii20BLaqO54qWmjjnhdFNG2SN2jmvFwfBQtO4tnjJFrOCnLiyzkbEM7K+FOddsMsQ92Od7R5Arbw/CKDDnF1HTMjedC83c4+J1W6SkupbYDmusqHmaOixLPNUMQbFJBT07G2kfsi4A43HWVeHOI3Lk+IQ0uM5sxqWsa5zYpdltnW1HR/5VpgjqkyMklFWT1RmnD8NiFDgEDH1LuiyOnFwD2u/BTuRYGZfFTieJkVmL1nruEzLRN9xuvdc9gHDWoU4paFpbSwsjvoSBqfHeh1WN9l0vC+IujmeZPlHTJc6zA9DC4Ldb69g+QWu/PFf7GHYaPtYh+DVzj0wneEw1R4BHYl8kdyHwdDkz3ibdTSYM3vrHn5NSNzrjUlyxmBNa0FxvNKbAC5O5c6dWG42m6XSVFY80s7WXbts2Sb8Lp9h/Ia41wXmLlCzJPGJKbAaeeJ19mRoeA7uu5ZhnrMw9fLcZ7i78VL5epoWYDQ82GawMO0Wg72hbghA/WRfwwuCXUU2lFHVHBFq7K8M+Zhtrle57HOTjnrG98mV5O4SO/BWJrAP1kX7gTtlpNtqM/sBR+I/+UPsRXkgMOz7JJiVPSYrg0uHsqXbDJXPuNrcLggaXI81dHst3rn3KY3YosN2dkP8ASxYtbY7l0Z0Zubroi9UVKjCXplRrEE6WTHEMFys8tmNJIv1BajtpxuUFLcbJK5wsN3UsD7AHRZiw9Sa6M66JFowWNkjiN1rrI5hTSwoKMYFkli4rJzdkoaUgBlhoEpub3S7NhpuSOB6kAY7dSBoU7ZN0oZqgBEhBO/in7PwSbJQBxzA3+ncuk8kmvNVUzmg/+WwhvyC7DNJzcT5Xte/ZBdZouT3BcbxJ4y3y2Com6EM9S2QuO7YmbYnwJPku0EHdxCOqW8X4oOnfP3KZiGbMebI5uF5QxCpY0223nmwe6+9ccx78ox5lqqvG6KahqaqR0pjkYW22jw6x2helSAASbWG8lcw5c8Rw6fBqOlZJFLWNqNtmw4OLGWIdu3A6ePcr6bIlPSo8hni613wc9BuLhC16RxELLngLrPdejRUXasR7Q9jmHc4WWPDXnm3Qu9aM/BZbrXkPo9bHLubJ0XI+gns1I3gVjrIufo3sHrN6TVkIsUrTY3UmrSapmCim56lYSek3olZlowf0bEXwbmS6t/15reKbJg21vygTSEt0EpFCBB0QEj3WCYiPxIlsVxxK9B5Dw2lwrKWHxUrW7MkDJ5JB+se5oJcT427AFwKpjE0ZadOIKtHJvU4zjNfDlt+IuZhkLXSyMNiQxvstO/eRpuCx6mDnDZ8GEWo5Lfk7HPj2E079iTEIA7qDtr5LeY9sjGvYQ5rgCCOIWlh+C4bh7A2kpI2ke24bTj4lbxXkuvB1iKOx1jJKVsUgDmSO2SDxBFj81IqFx2qY1xLnARwNLnHu1PySRpBbnn3DW+j4hV0rfVjc5o/ZcQpcVRdCY5DzrfZudWnsKhsIkdPXVVTb9IS795xK3nU45wysJY87yNx7wvekre5w4G1DY3KXFXVdPsVMTJGA7DmuF7rWqMEgmfzmHy83GfXjcL7P+S16I/0ioabXvc23XW/HI5hu02KhrT7TZVkj/U3I6bCKmm6TRFPbheyxRyQF2xU0/MOHXeymJJNsXO8LXnibOzYkFxw6x3KlJ+SJYkt4GA0cLm7ULrdRBuFljDxFsykEjiOKj9mXD5rB12O3Hgf81usmEzNpvkqaZMGr4pkZjMYLGSDeDslZonGoobje5vxCdXs26eQdlx4LXweS8L2+66/mt8b8Hm9VGpWTWVcOoMRwutFVCH1I+kY+5BAG8fFZooqWhqQIqOO7SLP3kdqiMKxKXBq+Qsi55hv0L20IWzDXVWJ4lDT4fhznTyuDY4Q8kvPAKWnbJUo0ibyplmbGOUWnZTNdDTwltZUSN0DWA6jvc4W8SvQ7NAX7raAdqgsnYEcFwmOGbm310oD6mSMaF3uj6o3DxPFTjyNGt3D4rz8s9Tv4OiKpUNQhCwLBOabaHcU1CadAQOccpUeZKUCW0NXGPoalouR2OHFvZw4Lh+YsKxDL1caTEqOVjvYkaLskHW13H5r0e11tN46lhr6ClxKmdTVcMdRC/fHIL+I7e1axnQ4zlHY8wmodtC0MmnYnNqiD0oJC06EW4LrePcl7SXS4HU7B3+j1B07g/wDHzVHxTLuK4U4+n0E8TQfX2dph/aGivWvg2Um+GZ8tcoWJYBhYw+KiZWQxuJidLtNcxp12dN4upVvKvi7tRgtN/EeqqGC2mqDHdYPHjk7cS6kvJaxyqY491mYNQ2+tM4fesreUvMLt2F4S37VUR/zKmxRg7fXtFKYil2sfiK/n5iSb8su7OUXMjv8AYsBb9qs//ZZBn7Mh/V5bb31bj96ofNORzZS7UPhfz8x6fuX0Z6zGf1mWR/8AcP8AxWQZ5zDxqcsfx5Fz7myjmndRS7MR6UdC/PjMH/i8rj+1kSjPGYP/ABuVx/aSrnvNnqSiI9SOzENKL9NnDG6iF8U9dlV0UjSx7XGUhwIsQVUI8Ea2KMnMWGRywSiSJzXvIYOr1exaPNuRzRVxi4e10Jwi+UXL8qzOA28w4Q13HYjfv8lnGNVI/wDivC/4J/wqi80UhjKWj6/sWXs41Vf/AFbhf8A/4UflqpI1zZhf8B3+FUTmzZN2CjR9f9IRezjNVrsZtwja4bUDrX/dURh+HUdIJ3PzJhc0tQ8vkeRJqfLtKrgiKXm+1VFOPD/YmUVLktPodAR0sw4Z4CT8EChw22uYsOv3P/BVgRFHNFVqyf5ft/4R2YfBaG0GFnfmPDvJ/wCCd+S8IOpzLQ+Ad+Cqwid1FHNnqUuWT/N/6/8ABrDD4LPJhWFlv0eY8PP2tr8FhODUbmkHMeFWPW5/4Kv82Uc0TxTUsi/u/YOzB+C84diFfh1FFSUmbcGEUQ2WB7S4gdVyFtDHMXP/AMXYIf7L/Jc+EI4kpwiaPaKycb3dfoi1iX1/U6Acbxf/AOrcF/hf5JRjmLAa5swb+H/kufhoHE+aQjsU6Pt+iDtx+v6l2q6mXEKukmxDMmDVApJOcZGQWtJuDqANdwVhdnSuO7GsvfuyfiuUa8AgAnfonplVX+w+3Hyjqv524g/fjGXT4P8AxR+dGIf/ADXLp8X/AIrlQYl5oHVLTL/IpQj8HVRmavP/ALzy4f25PxQc0Vg34ll399/4rlojARzQ7Alpl/kPRH4OnnNNT/8AMsv/AL70w5qqBp+UcBP7b1zTmwOKNhvFLRL5Hpj8HSDmmq4V+BfvvS/nRXezWYER/wAR65rYIGnBGiXyOo/B0g5qxHhVYD/Eej86cQ4z4Gf7V/4rnFzwRc9aemXyOofB0N+ba9v63BT3Sv8AxSDN9dxdhJ7pHfiue3HElKC1Gl/Iqh8HQhnCu93DD/au/FAzfiBPqYZ/FP4rn9xwShGl/IVD4MvKpz+NRwYoRSCWlbzT+YkuSwm4Pgfmr7yZZpjzFgTIqiYHEqNojnYTq8DQSDsPHtuuftLbFrgCCLEHiq7U0uIYDiLcSwWR7BGdoOYelGOII4t/0VuorJDtye64Oea7ctcVt5PQeK4VT4qI21T5thl+gyTZa7vHFUflNy9l6iytXTRUMUdY1rXMmuS8EEAC5O43Isq/R8rtT6GGVlO8VA02o3dA9tt47tVTMzZpr8fm/ps94WOuyKMbLR223k9pSw9PlU1eyQZc2Nw5s16EnmQD1my2wVrwgBo2PVtost9V6DJhskjIEyrj56mc0esNQnApwKRo6aoShm56ma4npN6JWZaFOfRq98PsS6t7/wDV1v3SY8crjvyamKRnmmTs9aM7+xbMcglibI3c4XTy1srHRu3PFlo4Y8t5ynf6zDcI8C9s/v8AubiQoOiQlBYpKxvN0FybdNEtiJlHWVuDYrHiWGvLJYzfrBB0II4gp6Qp87MylGy3Scr2JejhseHRia2rjM4t8rX+KtGQM8VeYKef0k07J4SLxscSSPe2TuHaCfBcnstOR8+HVMdTRTSQSA9F8ZsWnsKwl02OUaiqYd7JjeqTtHo6XE5pGWYGsvvI3rnvKnmBmHYS7DIH3q6xtnAHWOLiT37h4qntz/mYU3NCeNziLCX0dpf333fBQjW1FRUvq8RkdLK87TnSOuXHrJWWHpHGWqfgvJ1SnHRiXJu4VDzdFY6Ok1NjqFl+lhPTdzjOv2h39a17kHaYbHrCKiqJi5u30jtNOpdrVshNRjXwPw47b5pPedot5a1Gzm4gPNbCh8m0FUUF0XSFIkWJLG2VhY8XB+C0oY3wucHEb9FvXWCb1tFSMpryYpBcEHionDXuY94ZY6DQqbgp56p/NUsMk8p3MjaXOPgFaMl8keNVjxUY5bC6dwHQdZ0zh9nc3x8lopqG8mcHUpypIpuG4diGMYvHS4bSuqamQWDGdXWTwA6yu9cnmRKfLEIqanYqMWlbsvlbq2IHexl/iePcp7LuWsMy7ScxhlM2AOttyO1kk7XHee7cpQuAFmaDieJXNmzuey2RGPGo7vkUkMFhqTvP3JiELkZuCEISAEIQgAQhCAHBx3HUdqexjXg3Fr9SELfHvyZy24IquwHCKxx9Kw2lkPvGMA+Yso52QMuzaijfH9iZ4+9CFkuTS2jB/wBGuAMLiz0sbWv6a/3LDLyd4KNz6sf2g/BCFRtGT+TB/wBH2D3/AEtX/Eb/AIVkbyfYKPaqj/aD8EIUM0TY78wMEt/tJ/tP8kfmFggHq1H8T/JCFDbNEH5hYJb1Z/4n+SBkPBb22Z/4n+SEIsBTkLBfdn/if5JDkLBfdn/if5IQrJtjTkLBfdqP4n+SDkDBLXtU/wAT/JCEBYz8wcGP/if4g/BIcg4MP/E/xB+CEICxn5hYN11P8QfgnDIODWBvU/xB+CEJMaD8xMGA/wBo/iD8EfmLg/8AvH8T/JCFNlA7JOEAgAT/AMT/ACTfzIwg/wBf/E/yQhTbGH5j4Rb/AGj+J/kmHI+EddT/ABB+CEJ2wEdkfCbaPqR+2PwTHZKwse3U/vj8EIVCGHJeGD26n98fgkfkzDBukqf3x+CEIAY3JmGn9ZU/vt/BKMmYb/W1P77fwQhACHJuG/1tV++3/CmnJ2Hf11V++3/ChCYGP80aDX6ap0+s3/ClGU6C36ap/eb/AIUIQKxoynQl2s1T+83/AArIcn4fb9LU/vN/woQgdjfzRw8fran95v4IOUsP/ran95v4IQpGDcpYf/W1P7zfwSjKWHm/0lR+838EIQNGM5Rw+5+lqf3m/glGUqANvztT+838EITEBypQf1lR+838E4ZToLfpaj94fghCRQn5qUF/0lR+838ErsqUBbsmSoIdoRtN1HkhCCSlsyNhjah7Ofq3NBIALmaf3U+fJGGcyQJqocdCz/ChC9azyor0sbBlOjjY1oqaogbrln+FbX5pUNiefqf3m/4UIUs2xN6RRlOh2Qefqf3m/wCFY3ZXo2nSep82/wCFCEzVM1a3K1ETFJz9SHNdoQ5v+FbkmXaVp0mn82/ghCHwhY/dL8hjcv0t/wBNP5t/BaVRlykhxZrmTT3e3XVv4diEJIvJwvujM7A6f+tm82/gmHAqa36Wbzb+CEJIpjRgdMf1s3m38E1+CU4/WzebfwQhUSN/I1P/AFkvmPwSOwaD+sl8x+CEIELFglO99jJN5j8Fty5VoJqWQPlqNGlws5u8eCEKGU1cXZS4mGAhrHuLb7jZb4jB33QhbM5cDtGN8YY1xaToNyZSRB7nPcSXXtqhCRp/cjaDdk6ErNF0t5QhQzoiZxE08Stukw6Kd4a58gB6iPwQhSWy54BkLCq/WonrOGjXtH/KrXT8muWKOz3UT6p3+8SucPIEBCFlkbXBy5Gyz4fhtFh9MGUNLDTMt6sTAwfBZS7Z9UAdwQhZy9tnOt2MJvvQhCwNAQhCABCEIA//2Q=="
  }
};
};

// --- Wordly — ana ekran Nori koleksiyonu ---
__wordlyModules["homeNori"] = function (module, exports, require) {
const { formatVerbForms } = require("wordFormatter");
const { estimateTextWidth } = require("textFit");

const THEMES = [
  { id: "classic", label: "Klasik", background: "#E0ECD4", panel: "#F4F8EB", primary: "#202E22", secondary: "#344534", accent: "#365B40" },
  { id: "scientist", label: "Bilim İnsanı", background: "#244B71", panel: "#142D46", primary: "#F3FBFF", secondary: "#D1EAF8", accent: "#8CE0FA" },
  { id: "student", label: "Öğrenci", background: "#F1DDBF", panel: "#FFF4E1", primary: "#37261D", secondary: "#51392C", accent: "#88472E" },
  { id: "elegant", label: "Şık Nori", background: "#172139", panel: "#111A2D", primary: "#FFF6DE", secondary: "#EAE0C6", accent: "#EDC478" },
  { id: "sleepy", label: "Uykucu", background: "#3B2C60", panel: "#2D214D", primary: "#FBF4FF", secondary: "#E8DBF7", accent: "#E7C3FF" },
  { id: "romantic", label: "Romantik", background: "#833D62", panel: "#502039", primary: "#FFF4F9", secondary: "#F6D9E5", accent: "#FFBBD7" },
];
const MODES = [{ id: "random", label: "Rastgele" }, { id: "fixed", label: "Sabit" }, { id: "off", label: "Kapalı" }];

function normalizeCollection(mode, theme) {
  return {
    noriMode: MODES.some(item => item.id === mode) ? mode : "random",
    noriTheme: THEMES.some(item => item.id === theme) ? theme : THEMES[0].id,
  };
}

function themedRun(words, word, intervalHours, collection, persist) {
  const choose = () => selectTheme(words, word, collection.noriMode, collection.noriTheme);
  if (collection.noriMode !== "random") return choose();

  // iOS bir dilimi atlasa da son gösterilen temayı tekrarlama.
  const name = "wordly-nori-rotation.json";
  try {
    const files = FileManager.local();
    const path = files.joinPath(files.documentsDirectory(), name);
    let state = {};
    if (files.fileExists(path)) {
      try {
        const saved = JSON.parse(files.readString(path));
        if (saved && typeof saved === "object" && !Array.isArray(saved)) state = saved;
      } catch (_) { /* Yeniden kurulabilen görünüm kaydı. */ }
    }
    const prior = state[intervalHours];
    const validPrior = THEMES.some(theme => theme.id === prior?.theme);
    if (validPrior && prior.key === word.key) return prior.theme;
    let next = choose();
    if (validPrior && next === prior.theme) {
      const others = THEMES.filter(theme => theme.id !== next);
      next = others[wordHash(word.key) % others.length].id;
    }
    if (persist) {
      state[intervalHours] = { key: word.key, theme: next };
      try { files.writeString(path, JSON.stringify(state)); }
      catch (error) { console.warn("Wordly: son Nori teması kaydedilemedi. " + error); }
    }
    return next;
  } catch (_) {
    return choose();
  }
}

function homeFamily(family) {
  return family === "small" || family === "medium" || family === "large";
}

function wordHash(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index++) hash = Math.imul(hash ^ value.charCodeAt(index), 16777619);
  return (hash ^ (hash >>> 16)) >>> 0;
}

function selectTheme(words, word, mode, fixed) {
  if (mode === "off") return null;
  if (mode === "fixed") return THEMES.find(theme => theme.id === fixed)?.id || THEMES[0].id;
  const index = words.indexOf(word);
  const salt = wordHash(words[0].key) % 3;
  const lane = item => (wordHash(item.key) + salt) % 3;
  // Komşular farklı üçlülerden seçilir. Tek uzunluklu listenin sonunda,
  // iki komşu temayı da dışarıda bırakarak başa dönüldüğünde tekrarı önle.
  if (words.length > 1 && words.length % 2 === 1 && index === words.length - 1) {
    const used = new Set([lane(words[0]), lane(words[index - 1])]);
    const available = [0, 1, 2].filter(value => !used.has(value));
    return THEMES[available[lane(word) % available.length]].id;
  }
  return THEMES[(index % 2 === 0 ? 0 : 3) + lane(word)].id;
}

// Scriptable aileyi bildirir; görünüm alanı için iPhone boyut sınıfları kullanılır.
function homeMetrics(family, screenWidth) {
  const size = screenWidth <= 360 ? [141, 292, 311] :
    screenWidth <= 375 ? [148, 321, 324] :
    screenWidth <= 390 ? [155, 329, 345] :
    screenWidth <= 393 ? [158, 338, 354] :
    screenWidth <= 406 ? [162, 344, 366] :
    screenWidth <= 420 ? [169, 360, 379] : [170, 364, 382];
  const small = family === "small";
  const middle = family === "medium";
  return { width: small ? size[0] : size[1], height: family === "large" ? size[2] : size[0],
    pad: small ? 8 : middle ? 10 : 18, small, middle };
}

const SPACE_WIDTH = estimateTextWidth(" ", 1);

function textTokens(text) {
  return text.trim().split(/\s+/).map(token => ({ text: token, width: estimateTextWidth(token, 1) }));
}

function wrapText(tokens, size, width) {
  const limit = width / size;
  const lines = [];
  let line = "";
  let lineWidth = 0;
  for (const token of tokens) {
    if (token.width > limit) return null;
    const combinedWidth = line ? lineWidth + SPACE_WIDTH + token.width : token.width;
    if (line && combinedWidth > limit) {
      lines.push(line);
      line = token.text;
      lineWidth = token.width;
    } else {
      line = line ? line + " " + token.text : token.text;
      lineWidth = combinedWidth;
    }
  }
  if (line) lines.push(line);
  return lines;
}

const LINE_HEIGHT = 1.23;

function rowsHeight(rows, gap) {
  return rows.reduce((sum, row) => sum + row.lines.length * row.size * LINE_HEIGHT, 0) +
    Math.max(0, rows.length - 1) * gap;
}

function fitRows(fields, width, height, gap) {
  let last = [];
  for (let step = 0; step <= 24; step++) {
    const rows = fields.map(field => {
      const size = Math.max(field.min, field.max - step * 0.5);
      return { kind: field.kind, size, lines: wrapText(field.tokens, size, width) };
    });
    if (rows.every(row => row.lines) && rowsHeight(rows, gap) <= height) return { rows, used: rowsHeight(rows, gap) };
    if (last.length && rows.every((row, index) => row.size === last[index].size)) break;
    last = rows;
  }
  return null;
}

function limitRows(fields, width, height, gap) {
  // Sığmayan kartlarda önce kelime ve anlam için yer ayır; iki örneği de göster.
  const rows = fields.map(field => ({
    kind: field.kind, size: field.min, text: field.text, lines: wrapText(field.tokens, field.min, width),
  }));
  const limit = rows.map((row, index) => index < 2 ? Math.min(3, row.lines?.length || 1) : 1);
  const used = () => rows.reduce((sum, row, index) => sum + limit[index] * row.size * LINE_HEIGHT, (rows.length - 1) * gap);
  while (used() > height && limit.some(value => value > 1)) {
    const index = limit.indexOf(Math.max(...limit));
    limit[index]--;
  }
  for (let pass = 0; pass < 20; pass++) {
    let expanded = false;
    for (let index = 2; index < rows.length; index++) {
      const row = rows[index];
      if (limit[index] < (row.lines?.length || 1) && used() + row.size * LINE_HEIGHT <= height) {
        limit[index]++;
        expanded = true;
      }
    }
    if (!expanded) break;
  }
  rows.forEach((row, index) => {
    const count = limit[index];
    if (row.lines && row.lines.length <= count) return;
    const prefix = row.lines ? row.lines.slice(0, count).join(" ") : row.text;
    for (let cut = prefix.length - 1; cut >= 0; cut--) {
      const candidate = wrapText(textTokens(prefix.slice(0, cut).trimEnd() + "…"), row.size, width);
      if (candidate && candidate.length <= count) { row.lines = candidate; return; }
    }
    row.lines = ["…"];
  });
  return { rows, used: rowsHeight(rows, gap) };
}

function planHome(word, family, aspect, screenWidth) {
  const { width, height, pad, small, middle } = homeMetrics(family, screenWidth);
  let artWidth = middle ? Math.min(width, height * aspect) : 0;
  let artworkX = (width - artWidth) / 2;
  // En soldan başlayan karakter de resmin %54'ünün sağında kalıyor.
  const safeWidth = () => (middle ? Math.floor(artworkX + artWidth * 0.54) - 5 : width - pad) - pad;
  let textWidth = safeWidth();
  const gap = small ? 1.5 : middle ? 2 : 6;
  const fields = [
    { kind: "title", text: formatVerbForms(word), max: small ? 16 : middle ? 20 : 32, min: small ? 10.5 : middle ? 12 : 13 },
    { kind: "meaning", text: word.turkishMeaning, max: small ? 12 : middle ? 15 : 23, min: small ? 9.5 : middle ? 10.5 : 11 },
    { kind: "example", text: word.exampleSentence, max: small ? 11 : middle ? 13 : 19, min: small ? 9 : middle ? 9.5 : 10 },
    { kind: "translation", text: word.exampleTranslation, max: small ? 10.5 : middle ? 12 : 17, min: small ? 9 : middle ? 9.5 : 10 },
  ].filter(field => field.text).map(field => ({ ...field, tokens: textTokens(field.text) }));
  const preferredArt = Math.min(width / aspect, height * (small ? 0.41 : 0.47));
  const minArt = small ? 30 : 90;
  let reservedArt = middle ? 0 : preferredArt;
  const budget = () => height - 2 * pad - reservedArt - 3;
  let fit = fitRows(fields, textWidth, budget(), gap);
  if (!fit && !middle && reservedArt > minArt) {
    reservedArt = minArt;
    fit = fitRows(fields, textWidth, budget(), gap);
  }
  if (!fit && middle) {
    // Uzun cümlelerde çizimi sağa alarak metne yer aç. Tüm çizim kadrajda kalır.
    artWidth = Math.min(artWidth, width * 0.68);
    artworkX = width - artWidth;
    textWidth = safeWidth();
    fit = fitRows(fields, textWidth, budget(), gap);
  }
  fit = fit || limitRows(fields, textWidth, budget(), gap);
  const imageHeight = middle ? artWidth / aspect : reservedArt;
  const imageWidth = middle ? artWidth : Math.min(width, imageHeight * aspect);
  const top = middle ? Math.max(pad, Math.floor((height - fit.used) / 2)) : pad;
  return {
    width, height, pad, textWidth, gap, top, ...fit,
    image: { x: middle ? artworkX : (width - imageWidth) / 2, y: middle ? (height - imageHeight) / 2 : height - imageHeight,
      width: imageWidth, height: imageHeight },
    middle,
  };
}

function renderHome(word, family, themeId) {
  const theme = THEMES.find(item => item.id === themeId);
  if (!theme) return null;
  const asset = require("homeNoriAssets")[themeId];
  const source = Image.fromData(Data.fromBase64String(asset.jpeg));
  if (!source) return null;
  const screen = Device.screenSize();
  const plan = planHome(word, family, asset.width / asset.height, Math.min(screen.width, screen.height));
  const art = new DrawContext();
  art.size = new Size(plan.width, plan.height);
  art.opaque = true;
  art.respectScreenScale = true;
  art.setFillColor(new Color(theme.background));
  art.fillRect(new Rect(0, 0, plan.width, plan.height));
  const image = plan.image;
  art.drawImageInRect(source, new Rect(image.x, image.y, image.width, image.height));

  const panel = new Path();
  const panelHeight = plan.middle ? plan.height - 12 : image.y - 7;
  const panelWidth = plan.middle ? plan.pad + plan.textWidth : plan.width - 8;
  panel.addRoundedRect(new Rect(4, 4, panelWidth, panelHeight), 12, 12);
  art.addPath(panel);
  art.setFillColor(new Color(theme.panel));
  art.fillPath();

  const widget = new ListWidget();
  widget.backgroundColor = new Color(theme.background);
  widget.backgroundImage = art.getImage();
  widget.setPadding(plan.top, plan.pad, 0, Math.max(0, plan.width - plan.pad - plan.textWidth));
  const text = widget.addStack();
  text.layoutVertically();
  text.size = new Size(plan.textWidth, 0);
  text.spacing = plan.gap;
  const fonts = { title: size => Font.boldSystemFont(size), meaning: size => Font.semiboldSystemFont(size),
    example: size => Font.italicSystemFont(size), translation: size => Font.systemFont(size) };
  for (const row of plan.rows) {
    const label = text.addText(row.lines.join("\n"));
    label.font = fonts[row.kind](row.size);
    label.textColor = new Color(row.kind === "title" ? theme.accent :
      row.kind === "meaning" || row.kind === "translation" ? theme.secondary : theme.primary);
    label.lineLimit = row.lines.length;
    label.minimumScaleFactor = 0.85;
  }
  widget.addSpacer(null);
  return widget;
}

module.exports = { THEMES, MODES, normalizeCollection, homeFamily, selectTheme, themedRun, planHome, renderHome };
};

// --- Modül: src/scriptable/widgetView.js ---
__wordlyModules["widgetView"] = function (module, exports, require) {
// Wordly — Scriptable widget görünümü
//
// Scriptable API'si (ListWidget, Color, Font) YALNIZCA src/scriptable/
// klasöründe kullanılır. Bu modül seçilmiş kelimeyi alır ve istenen widget
// boyutuna uygun ListWidget nesnesini oluşturur; kelime seçmez, veri okumaz.

const { formatVerbForms, formatInlineText } = require("../core/wordFormatter.js");
const { planForms } = require("../core/lockScreenLayout.js");

const { countWrappedLines, estimateTextWidth, fitSingleLine, fitWrapped } = require("../core/textFit.js");
const noriVariants = require("noriAssets");

const NORI_WIDTH = 58;
const NORI_ASPECT = 147 / 128;
const NORI_COMPACT_WIDTH = 45;
const NORI_GAP = 2;
const GLASS_TEXT_INSET = 9;
const GLASS_TEXT_GAP = 3;

const LOCK_SCREEN_FAMILIES = ["accessoryRectangular", "accessoryInline", "accessoryCircular"];

// Tema rengini açık/koyu moda uyumlu Scriptable rengine çevirir
function toColor(pair) {
  return Color.dynamic(new Color(pair.light), new Color(pair.dark));
}

// Metni tek bir yatay satıra yerleştirir. Hizalama, ListWidget'ın varsayılan
// davranışına güvenilmeden boşluklarla (spacer) açıkça belirlenir.
// options: { font, color, opacity, lineLimit, minScale, align: "leading" | "center" }
function addTextRow(container, text, options) {
  const row = container.addStack();
  if (options.align === "center") row.addSpacer(null);

  const element = row.addText(text);
  element.font = options.font;
  if (options.color) element.textColor = options.color;
  if (options.opacity !== undefined) element.textOpacity = options.opacity;
  element.lineLimit = options.lineLimit || 1;
  element.minimumScaleFactor = options.minScale || 1;

  row.addSpacer(null);
  return element;
}

function loadNori(slotIndex) {
  if (noriVariants.length === 0) return null;
  const index = ((slotIndex % noriVariants.length) + noriVariants.length) % noriVariants.length;
  try {
    const data = Data.fromBase64String(noriVariants[index].png);
    return data ? Image.fromData(data) : null;
  } catch (error) {
    console.error("Wordly: Nori görseli yüklenemedi. " + error);
    return null;
  }
}

function planGlassText(word, metrics, width) {
  const text = word.turkishMeaning;
  const budget = (metrics.height - GLASS_TEXT_GAP) / metrics.lineHeightFactor;
  for (let maxMeaningSize = 16; maxMeaningSize >= 12; maxMeaningSize -= 0.5) {
    const single = fitSingleLine(text, width, maxMeaningSize, 12);
    const size = single ?? fitWrapped(text, width, Math.min(15, maxMeaningSize), 12, 2) ??
      fitWrapped(text, width, maxMeaningSize, 12, 3);
    if (size === null) return null;
    const lines = countWrappedLines(text, size, width);
    const remaining = budget - size * lines;
    const maxSize = Math.min(20, Math.floor(remaining * 2) / 2);
    const forms = planForms(word, {
      width,
      forms: {
        ...metrics.forms, maxSize, minSize: Math.max(12, Math.min(14, maxSize)),
        twoLineMaxSize: Math.min(17, Math.floor(remaining) / 2), fallbackMinSize: 12,
      },
    });
    const meaning = { text, size, lines };
    if (!word.pastSimple && estimateTextWidth(forms.text, forms.size) > width) {
      const wrapSize = fitWrapped(forms.text, width, Math.min(17, Math.floor(remaining) / 2), 12, 2);
      if (wrapSize !== null) return { forms: { text: forms.text, size: wrapSize, lines: 2 }, meaning };
    }
    const fits = forms.size * forms.lines <= remaining &&
      forms.text.split("\n").every(line => estimateTextWidth(line, forms.size) <= width);
    if (fits) return { forms, meaning };

    const alternatives = [word.word, word.pastSimple, word.pastParticiple].filter(Boolean);
    if (alternatives.length === 3) {
      const separator = " · ";
      const layouts = [
        [alternatives[0] + separator + alternatives[1], alternatives[2]],
        [alternatives[0], alternatives[1] + separator + alternatives[2]],
        alternatives,
      ];
      for (const rows of layouts) {
        const max = Math.min(17, Math.floor(remaining * 2 / rows.length) / 2);
        const widest = rows.reduce((a, b) => estimateTextWidth(a, 1) >= estimateTextWidth(b, 1) ? a : b);
        const formSize = fitSingleLine(widest, width, max, 12);
        if (formSize !== null) return { forms: { text: rows.join("\n"), size: formSize, lines: rows.length }, meaning };
      }
    }
  }
  return null;
}

// Geniş çekimlerde ilk satır Nori'nin üstündeki alanı kullanabilir.
function planStaggeredText(word, metrics, width, imageHeight) {
  if (!word.pastSimple || !word.pastParticiple) return null;
  const factor = metrics.lineHeightFactor;
  const maxTopSize = Math.floor((metrics.height - imageHeight) * 2 / factor) / 2;
  const topWidth = metrics.width - GLASS_TEXT_INSET - NORI_GAP;
  const topText = [word.word, word.pastSimple].join(" · ");
  const topSize = fitSingleLine(topText, topWidth, Math.min(16, maxTopSize), 12);
  if (topSize === null) return null;
  const lowerHeight = metrics.height - topSize * factor;
  const lowerWord = { ...word, word: word.pastParticiple, pastSimple: null, pastParticiple: null };
  const lower = planGlassText(lowerWord, { ...metrics, height: lowerHeight }, width);
  if (!lower) return null;
  return { ...lower, top: { text: topText, size: topSize, lines: 1 }, lowerHeight };
}

function drawGlassPanel(metrics, opacity) {
  const context = new DrawContext();
  context.size = new Size(metrics.width, metrics.height);
  context.opaque = false;
  context.respectScreenScale = true;

  const radius = 12;
  const inset = 0.5;
  const panel = new Path();
  panel.addRoundedRect(new Rect(inset, inset, metrics.width - 1, metrics.height - 1), radius, radius);
  context.addPath(panel);
  context.setFillColor(new Color("#FFFFFF", 0.055 * opacity));
  context.fillPath();

  // Yuvarlak köşelerin içinde kalan ince şeritlerle yumuşak bir üst ışık çiz.
  const gradientHeight = Math.floor(metrics.height / 2);
  for (let y = 1; y < gradientHeight; y++) {
    const corner = Math.max(0, radius - (y - inset));
    const edge = inset + radius - Math.sqrt(radius * radius - corner * corner);
    context.setFillColor(new Color("#FFFFFF", 0.08 * opacity * (1 - y / gradientHeight)));
    context.fillRect(new Rect(edge, y, metrics.width - 2 * edge, 1));
  }

  context.addPath(panel);
  context.setStrokeColor(new Color("#FFFFFF", 0.24));
  context.setLineWidth(0.7);
  context.strokePath();

  const accent = new Path();
  const accentHeight = 24;
  accent.addRoundedRect(new Rect(4, (metrics.height - accentHeight) / 2, 1.5, accentHeight), 0.75, 0.75);
  context.addPath(accent);
  context.setFillColor(new Color("#FFFFFF", 0.48));
  context.fillPath();
  return context.getImage();
}

function addGlassForms(container, forms) {
  addTextRow(container, forms.text, {
    font: Font.semiboldSystemFont(forms.size),
    lineLimit: forms.lines,
    minScale: 0.85,
  });
}

function buildRectangular(word, theme, slotIndex, glassOpacity) {
  const widget = new ListWidget();
  const metrics = theme.lockScreen;
  const panel = widget.addStack();
  panel.layoutVertically();
  panel.size = new Size(metrics.width, metrics.height);
  if (glassOpacity > 0) {
    try {
      panel.backgroundImage = drawGlassPanel(metrics, glassOpacity);
    } catch (error) {
      console.error("Wordly: cam panel çizilemedi. " + error);
    }
  }

  const fullWidth = metrics.width - GLASS_TEXT_INSET - NORI_GAP;
  let mascotWidth = NORI_WIDTH;
  let narrowWidth = metrics.width - GLASS_TEXT_INSET - mascotWidth - NORI_GAP;
  let narrowPlan = planGlassText(word, metrics, narrowWidth);
  if (!narrowPlan) {
    narrowPlan = planStaggeredText(word, metrics, narrowWidth, Math.round(mascotWidth / NORI_ASPECT));
  }
  if (!narrowPlan) {
    mascotWidth = NORI_COMPACT_WIDTH;
    narrowWidth = metrics.width - GLASS_TEXT_INSET - mascotWidth - NORI_GAP;
    narrowPlan = planGlassText(word, metrics, narrowWidth) ??
      planStaggeredText(word, metrics, narrowWidth, Math.round(mascotWidth / NORI_ASPECT));
  }
  const nori = narrowPlan ? loadNori(slotIndex) : null;
  const plan = nori ? narrowPlan : planGlassText(word, metrics, fullWidth);
  if (plan?.top) {
    const top = panel.addStack();
    top.layoutHorizontally();
    top.size = new Size(metrics.width, metrics.height - plan.lowerHeight);
    top.addSpacer(GLASS_TEXT_INSET);
    const topText = top.addStack();
    topText.layoutVertically();
    topText.size = new Size(metrics.width - GLASS_TEXT_INSET - NORI_GAP, 0);
    addGlassForms(topText, plan.top);
  }
  const row = panel.addStack();
  row.layoutHorizontally();
  row.centerAlignContent();
  const lowerHeight = plan?.lowerHeight ?? metrics.height;
  row.size = new Size(metrics.width, lowerHeight);
  row.addSpacer(GLASS_TEXT_INSET);
  const text = row.addStack();
  text.layoutVertically();
  text.size = new Size(nori ? narrowWidth : fullWidth, 0);

  // Çok uzun özel veri için sistemin satır sarması ve küçültmesi devreye girer.
  const forms = plan ? plan.forms : { text: formatVerbForms(word), size: 12, lines: 2 };
  const meaning = plan ? plan.meaning : { text: word.turkishMeaning, size: 12, lines: 2 };
  addGlassForms(text, forms);
  text.addSpacer(GLASS_TEXT_GAP);
  addTextRow(text, meaning.text, {
    font: Font.systemFont(meaning.size),
    opacity: theme.lockOpacity.meaning,
    lineLimit: meaning.lines,
    minScale: 0.85,
  });

  if (nori) {
    row.addSpacer(NORI_GAP);
    const illustration = row.addStack();
    illustration.layoutVertically();
    illustration.size = new Size(mascotWidth, lowerHeight);
    illustration.addSpacer(null);
    const mascot = illustration.addImage(nori);
    mascot.imageSize = new Size(mascotWidth, Math.round(mascotWidth / NORI_ASPECT));
    mascot.applyFittingContentMode();
  }
  return widget;
}

// Kilit ekranı — saatin üstündeki tek satır (yalnızca bir metin desteklenir)
function buildInline(word) {
  const widget = new ListWidget();
  widget.addText(formatInlineText(word));
  return widget;
}

// Kilit ekranı — yuvarlak: kelime ve anlam, ortalanmış
function buildCircular(word, theme) {
  const sizes = theme.fontSizes;
  const widget = new ListWidget();
  widget.addAccessoryWidgetBackground = true;

  widget.addSpacer(null);
  addTextRow(widget, word.word, {
    font: Font.semiboldRoundedSystemFont(sizes.circularWord),
    minScale: 0.5,
    align: "center",
  });
  addTextRow(widget, word.turkishMeaning, {
    font: Font.systemFont(sizes.circularMeaning),
    opacity: theme.lockOpacity.meaning,
    minScale: 0.5,
    align: "center",
  });
  widget.addSpacer(null);

  return widget;
}

// Ana ekran (small / medium / large): krem paletli tam görünüm
function buildHome(word, family, theme) {
  const sizes = theme.fontSizes;
  const colors = theme.colors;
  const isSmall = family === "small";
  const widget = new ListWidget();

  const pad = theme.spacing.homePadding;
  widget.setPadding(pad, pad, pad, pad);
  widget.backgroundColor = toColor(colors.background);

  addTextRow(widget, "WORDLY", {
    font: Font.semiboldSystemFont(sizes.homeLabel),
    color: toColor(colors.accent),
  });
  widget.addSpacer(null);

  addTextRow(widget, formatVerbForms(word), {
    font: Font.boldSystemFont(sizes.homeTitle),
    color: toColor(colors.primaryText),
    lineLimit: isSmall ? 2 : 1,
    minScale: 0.6,
  });
  addTextRow(widget, word.turkishMeaning, {
    font: Font.mediumSystemFont(sizes.homeMeaning),
    color: toColor(colors.secondaryText),
    lineLimit: 2,
    minScale: 0.8,
  });

  if (word.exampleSentence || (!isSmall && word.exampleTranslation)) widget.addSpacer(theme.spacing.homeBlockGap);

  if (word.exampleSentence) addTextRow(widget, word.exampleSentence, {
    font: Font.italicSystemFont(sizes.homeExample),
    color: toColor(colors.primaryText),
    lineLimit: isSmall ? 3 : 2,
    minScale: 0.8,
  });
  // Küçük widget'ta yer olmadığı için çeviri yalnızca orta ve büyük boyutta
  if (!isSmall && word.exampleTranslation) {
    addTextRow(widget, word.exampleTranslation, {
      font: Font.systemFont(sizes.homeExample),
      color: toColor(colors.secondaryText),
      lineLimit: 2,
      minScale: 0.8,
    });
  }

  return widget;
}

// Boyuta göre uygun widget'ı oluşturur. Bilinmeyen boyutta ana ekran
// görünümü kullanılır.
function buildWidget(word, family, theme, slotIndex, glassOpacity = 1, homeTheme = null) {
  switch (family) {
    case "accessoryRectangular":
      return buildRectangular(word, theme, slotIndex, glassOpacity);
    case "accessoryInline":
      return buildInline(word);
    case "accessoryCircular":
      return buildCircular(word, theme);
    default:
      if (homeTheme) {
        try {
          const themed = require("homeNori").renderHome(word, family, homeTheme);
          if (themed) return themed;
        } catch (error) {
          console.warn("Wordly: Nori teması çizilemedi. " + error);
        }
      }
      return buildHome(word, family, theme);
  }
}

// Hata durumunda gösterilen widget. Hatalar gizlenmez, ekranda açıkça yazar.
function buildErrorWidget(family, message, theme) {
  const widget = new ListWidget();
  if (family === "accessoryInline") {
    widget.addText("Wordly: hata");
    return widget;
  }
  const isLockScreen = LOCK_SCREEN_FAMILIES.indexOf(family) !== -1;
  if (!isLockScreen) widget.backgroundColor = toColor(theme.colors.background);
  const color = isLockScreen ? null : toColor(theme.colors.primaryText);

  addTextRow(widget, "Wordly: hata", { font: Font.semiboldSystemFont(13), color: color });
  addTextRow(widget, message, { font: Font.systemFont(11), color: color, lineLimit: 3, minScale: 0.7 });
  return widget;
}

function isLockScreenFamily(family) {
  return LOCK_SCREEN_FAMILIES.indexOf(family) !== -1;
}

module.exports = {
  isLockScreenFamily: isLockScreenFamily,
  buildWidget: buildWidget,
  buildErrorWidget: buildErrorWidget,
};
};

// --- Modül: src/scriptable/historyStore.js ---
__wordlyModules["historyStore"] = function (module, exports, require) {
// Wordly — kelime geçmişinin kalıcı saklanması (Scriptable FileManager)
//
// Geçmiş, cihazın yerel depolamasında (iCloud değil) JSON dosyası olarak
// tutulur: FileManager.local().documentsDirectory()/wordly-history.json
// iCloud kullanılmaz; böylece indirme beklemesi veya senkronizasyon gecikmesi
// olmaz. Okuma/yazma hataları widget'ı çökertmez, konsola yazılır.

const HISTORY_FILE_NAME = "wordly-history.json";

function getHistoryPath(fileManager) {
  return fileManager.joinPath(fileManager.documentsDirectory(), HISTORY_FILE_NAME);
}

// Kayıtlı geçmişi döndürür; dosya yoksa veya okunamazsa null
function loadHistory() {
  try {
    const fileManager = FileManager.local();
    const path = getHistoryPath(fileManager);
    if (!fileManager.fileExists(path)) return null;
    return JSON.parse(fileManager.readString(path));
  } catch (error) {
    console.error("Wordly: kelime geçmişi okunamadı, sıfırdan başlanıyor. " + error);
    return null;
  }
}

// Geçmişi kaydeder; başarılıysa true
function saveHistory(history) {
  try {
    const fileManager = FileManager.local();
    fileManager.writeString(getHistoryPath(fileManager), JSON.stringify(history));
    return true;
  } catch (error) {
    console.error("Wordly: kelime geçmişi kaydedilemedi. " + error);
    return false;
  }
}

module.exports = {
  HISTORY_FILE_NAME: HISTORY_FILE_NAME,
  loadHistory: loadHistory,
  saveHistory: saveHistory,
};
};

// --- Wordly — yerel ayarlar ---
__wordlyModules["settingsStore"] = function (module, exports, require) {
const { ALLOWED_INTERVAL_HOURS, DEFAULT_INTERVAL_HOURS } = require("../core/wordSelector.js");

const SETTINGS_FILE_NAME = "wordly-settings.json";
const GLASS_LEVELS = [
  { id: "light", label: "Hafif", opacity: 1 },
  { id: "medium", label: "Orta", opacity: 1.6 },
  { id: "strong", label: "Belirgin", opacity: 2.3 },
];

function getGlassLevel(id) {
  return GLASS_LEVELS.find(level => level.id === id) || GLASS_LEVELS[0];
}

function normalizeSettings(value) {
  const raw = value && typeof value === "object" ? value : {};
  return {
    intervalHours: ALLOWED_INTERVAL_HOURS.includes(raw.intervalHours) ? raw.intervalHours : DEFAULT_INTERVAL_HOURS,
    glassLevel: getGlassLevel(raw.glassLevel).id,
  };
}

function settingsPath(files) {
  return files.joinPath(files.documentsDirectory(), SETTINGS_FILE_NAME);
}

function loadSettings() {
  try {
    const files = FileManager.local();
    const path = settingsPath(files);
    if (files.fileExists(path)) return normalizeSettings(JSON.parse(files.readString(path)));
  } catch (error) {
    console.error("Wordly: ayarlar okunamadı. " + error);
  }
  return normalizeSettings(null);
}

function saveSettings(settings) {
  const files = FileManager.local();
  files.writeString(settingsPath(files), JSON.stringify(normalizeSettings(settings)));
}

module.exports = { GLASS_LEVELS, getGlassLevel, loadSettings, saveSettings };
};

// --- Wordly — yerel kelime kitaplığı ---
__wordlyModules["wordLibrary"] = function (module, exports, require) {
const { loadWordPool } = require("wordRepository");
const BASIC = "basic";
const PERSONAL = "personal";
const TYPES = { verb: "Fiil", noun: "İsim", adjective: "Sıfat", adverb: "Zarf", other: "Diğer" };
const MAX_JSON = 1024 * 1024;
const ID = /^[a-z0-9][a-z0-9-]{0,79}$/;
const textIdentity = text => text.normalize("NFC").toLowerCase().replace(/\s+/g, " ").trim();
const wordIdentity = word => JSON.stringify([word.type || "verb", textIdentity(word.word), textIdentity(word.turkishMeaning)]);

function field(value, limit, label, required = false) {
  if (!required && value == null) return "";
  if (typeof value !== "string" || value.length > limit || (required && !value.trim())) {
    throw new Error(label + " alanı eksik veya çok uzun (en fazla " + limit + " karakter).");
  }
  return value.trim().replace(/\s+/g, " ");
}

function validateWord(raw) {
  if (!raw || typeof raw.id !== "string" || !ID.test(raw.id) ||
      (typeof raw.type !== "string" || !Object.prototype.hasOwnProperty.call(TYPES, raw.type))) throw new Error("Kelime kimliği veya türü geçersiz.");
  return {
    id: raw.id, type: raw.type,
    word: field(raw.word, 64, "Kelime", true),
    v2: raw.type === "verb" ? field(raw.v2, 64, "V2", true) : "",
    v3: raw.type === "verb" ? field(raw.v3, 64, "V3", true) : "",
    turkishMeaning: field(raw.turkishMeaning, 120, "Türkçe anlam", true),
    exampleSentence: field(raw.exampleSentence, 240, "Örnek cümle"),
    exampleTranslation: field(raw.exampleTranslation, 240, "Cümlenin Türkçe karşılığı"),
  };
}

function validatePackage(raw, personal = false) {
  if (!raw || raw.schema !== 1 || typeof raw.id !== "string" || !ID.test(raw.id) ||
      raw.id === BASIC || (raw.id === PERSONAL) !== personal ||
      !Number.isSafeInteger(raw.revision) || raw.revision < 1 ||
      !Array.isArray(raw.words) || raw.words.length > 2000 || (!personal && !raw.words.length)) {
    throw new Error("Paket biçimi geçersiz veya paket boş.");
  }
  const words = raw.words.map(validateWord);
  if (new Set(words.map(word => word.id)).size !== words.length ||
      new Set(words.map(wordIdentity)).size !== words.length) throw new Error("Pakette yinelenen kelime veya kimlik var.");
  const pack = { schema: 1, id: raw.id, revision: raw.revision, name: field(raw.name, 80, "Paket adı", true), words };
  if (JSON.stringify(pack).length >= MAX_JSON) throw new Error("Paket dosyası çok büyük.");
  return pack;
}

function parsePackage(text, allowPersonal = false) {
  if (typeof text !== "string" || text.length > MAX_JSON) throw new Error("Paket dosyası çok büyük.");
  let data;
  try { data = JSON.parse(text.replace(/^\uFEFF/, "")); } catch (_) { throw new Error("Dosya geçerli bir JSON paketi değil."); }
  return validatePackage(data, allowPersonal && data?.id === PERSONAL);
}

function packageURL(value) {
  const url = typeof value === "string" ? value.trim() : "";
  if (url.length > 500 || !/^https:\/\/raw\.githubusercontent\.com\/[\w.-]+\/[\w.-]+\/(?:[\w.-]+\/)+[\w.-]+\.json$/i.test(url) ||
      url.split("/").some(part => part === "." || part === "..")) {
    throw new Error("GitHub’daki JSON dosyasının Raw HTTPS adresini girin.");
  }
  return url;
}

async function downloadPackage(value, verify = null) {
  const source = packageURL(value);
  const request = new Request(source);
  request.timeoutInterval = 8;
  request.onRedirect = () => null;
  let body;
  try { body = await request.loadString(); } catch (_) { throw new Error("Pakete ulaşılamadı. Bağlantıyı kontrol edin."); }
  if (request.response?.statusCode !== 200) throw new Error("GitHub paket dosyasını döndürmedi.");
  if (verify) verify(body);
  return { source, pack: parsePackage(body) };
}

// Her kitaplık bölümü iki JSON dosyasına sırayla yazılır; kesintili kayıt diğer kopyayı bozmaz.
function jsonStore(name, validate, defaults, recoverableCache = false) {
  const files = FileManager.local();
  const paths = [0, 1].map(index => files.joinPath(files.documentsDirectory(), "wordly-" + name + "-" + index + ".json"));
  function current() {
    const saved = [];
    let exists = false;
    paths.forEach((path, index) => {
      try {
        if (!files.fileExists(path)) return;
        exists = true;
        const raw = JSON.parse(files.readString(path));
        if (!Number.isSafeInteger(raw.generation) || raw.generation < 1) throw new Error("Geçersiz kayıt.");
        saved.push({ index, generation: raw.generation, value: validate(raw.value) });
      } catch (error) {
        exists = true;
        console.warn("Wordly: kelime dosyası okunamadı. " + error);
      }
    });
    return saved.sort((a, b) => b.generation - a.generation)[0] ||
      { index: 1, generation: 0, value: defaults(), damaged: exists };
  }
  return {
    read: current,
    write(update) {
      const state = current();
      if (state.damaged && !recoverableCache) throw new Error("Kelime dosyaları okunamadı. Var olan dosyalar korundu.");
      const value = validate(update(state.value));
      const next = { generation: state.generation + 1, value };
      const encoded = JSON.stringify(next);
      if (encoded.length > 8 * MAX_JSON) throw new Error("Cihazdaki paket depolama sınırına ulaşıldı.");
      const path = paths[1 - state.index];
      try {
        files.writeString(path, encoded);
        if (files.readString(path) !== encoded) throw new Error("Eksik kayıt.");
      } catch (error) {
        console.warn("Wordly: kelime dosyası kaydedilemedi. " + error);
        throw new Error("Kelime dosyası kaydedilemedi. Önceki kayıt korunuyor.");
      }
      return value;
    },
  };
}

function validateCatalog(raw) {
  if (!raw || typeof raw.basicEnabled !== "boolean" || typeof raw.personalEnabled !== "boolean" ||
      !Array.isArray(raw.packages) || raw.packages.length > 30) throw new Error("Paket ayarları geçersiz.");
  const packages = raw.packages.map(item => {
    if (typeof item?.enabled !== "boolean") throw new Error("Paket etkinlik bilgisi geçersiz.");
    return { enabled: item.enabled, source: item.source ? packageURL(item.source) : "",
      catalogManaged: item.catalogManaged === true, pack: validatePackage(item.pack) };
  });
  if (new Set(packages.map(item => item.pack.id)).size !== packages.length) throw new Error("Paket kimlikleri yineleniyor.");
  return { basicEnabled: raw.basicEnabled, personalEnabled: raw.personalEnabled, packages };
}

function normalizeEntry(entry, packageId) {
  return {
    ...entry, key: "pack:" + packageId + ":" + entry.id,
    pastSimple: entry.v2 || null, pastParticiple: entry.v3 || null,
  };
}

function openWordLibrary() {
  const base = loadWordPool(require("wordLists"));
  const personal = jsonStore("personal", value => validatePackage(value, true),
    () => ({ schema: 1, id: PERSONAL, name: "Kişisel Kelimeler", revision: 1, words: [] }));
  const catalog = jsonStore("packages", validateCatalog, () => ({ basicEnabled: true, personalEnabled: true, packages: [] }));

  function list() {
    const prefs = catalog.read();
    const mine = personal.read();
    const state = prefs.value;
    const groups = [
      { id: BASIC, name: "Temel İngilizce", enabled: state.basicEnabled,
        words: base.words.map(word => ({ ...word, type: "verb" })) },
      { ...mine.value, enabled: state.personalEnabled },
      ...state.packages.map(item => ({ ...item.pack, enabled: item.enabled, source: item.source, catalogManaged: item.catalogManaged })),
    ];
    return { groups, damaged: prefs.damaged || mine.damaged, errors: base.errors };
  }

  function pool() {
    const { groups } = list();
    const seen = new Set();
    const words = [];
    const known = new Set();
    for (const group of groups) {
      for (const entry of group.words) {
        const word = group.id === BASIC ? entry : normalizeEntry(entry, group.id);
        known.add(word.key);
        const identity = wordIdentity(word);
        if (group.enabled && !seen.has(identity)) {
          seen.add(identity);
          words.push(word);
        }
      }
    }
    return { words, known };
  }

  function toggle(id) {
    catalog.write(state => {
      if (id === BASIC) state.basicEnabled = !state.basicEnabled;
      else if (id === PERSONAL) state.personalEnabled = !state.personalEnabled;
      else {
        const item = state.packages.find(item => item.pack.id === id);
        if (!item) throw new Error("Paket bulunamadı.");
        item.enabled = !item.enabled;
      }
      return state;
    });
  }

  function putWord(raw) {
    const entry = validateWord(raw);
    personal.write(pack => {
      const index = pack.words.findIndex(word => word.id === entry.id);
      if (pack.words.some(word => word.id !== entry.id && wordIdentity(word) === wordIdentity(entry))) {
        throw new Error("Bu kelime ve anlam kişisel pakette zaten var.");
      }
      if (index < 0) pack.words.push(entry);
      else pack.words[index] = entry;
      return { ...pack, revision: pack.revision + 1 };
    });
  }

  function deleteWord(id) {
    personal.write(pack => ({ ...pack, revision: pack.revision + 1, words: pack.words.filter(word => word.id !== id) }));
  }

  function importPersonal(incoming) {
    let added = 0;
    personal.write(pack => {
      const seen = new Set(pack.words.map(wordIdentity));
      for (const word of incoming.words) {
        const key = wordIdentity(word);
        if (seen.has(key)) continue;
        seen.add(key);
        const id = pack.words.some(entry => entry.id === word.id) ? UUID.string().toLowerCase() : word.id;
        pack.words.push({ ...word, id });
        added++;
      }
      return { ...pack, revision: pack.revision + 1 };
    });
    return added;
  }

  function addPackage(pack, source = "", catalogManaged = false) {
    catalog.write(state => {
      if (state.packages.some(item => item.pack.id === pack.id)) throw new Error("Bu paket zaten var. Paketler menüsünden güncelleyin.");
      state.packages.push({ pack, source, catalogManaged, enabled: true });
      return state;
    });
  }

  function replacePackage(id, pack, source = null, catalogManaged = false) {
    catalog.write(state => {
      const item = state.packages.find(item => item.pack.id === id);
      if (!item || pack.id !== id) throw new Error("Yeni dosya bu pakete ait değil.");
      if (pack.revision <= item.pack.revision) throw new Error("Daha yeni bir paket sürümü bulunamadı.");
      if (item.catalogManaged && !catalogManaged) throw new Error("Bu paketi Kelime kataloğundan güncelleyin.");
      item.pack = pack;
      if (catalogManaged) item.catalogManaged = true;
      if (source !== null) item.source = source;
      return state;
    });
  }

  function deletePackage(id) {
    catalog.write(state => ({ ...state, packages: state.packages.filter(item => item.pack.id !== id) }));
  }

  return { list, pool, toggle, putWord, deleteWord, importPersonal, addPackage, replacePackage, deletePackage };
}

module.exports = { BASIC, PERSONAL, TYPES, parsePackage, downloadPackage, openWordLibrary, validateWord, jsonStore };
};

// SHA-256 bağımsız çalışma modülünde de bulunur; eski başlatıcılarla uyumludur.
__wordlyModules["packageDigest"] = function (module, exports, require) {
function sha256(source) {
  // Scriptable'ın desteklediği JavaScript ile UTF-8 üzerinde SHA-256 (FIPS 180-4).
  const utf8 = encodeURIComponent(source).replace(/%([0-9A-F]{2})/g,
    (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  const words = [];
  for (let i = 0; i < utf8.length; i++) words[i >>> 2] |= utf8.charCodeAt(i) << (24 - (i % 4) * 8);
  words[utf8.length >>> 2] |= 0x80 << (24 - (utf8.length % 4) * 8);
  words[(((utf8.length + 8) >>> 6) << 4) + 15] = utf8.length * 8;
  const constants = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
  ];
  const hash = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  const rotate = (value, bits) => (value >>> bits) | (value << (32 - bits));
  const block = new Int32Array(64);
  for (let offset = 0; offset < words.length; offset += 16) {
    for (let i = 0; i < 16; i++) block[i] = words[offset + i] || 0;
    for (let i = 16; i < 64; i++) {
      const x = block[i - 15], y = block[i - 2];
      block[i] = block[i - 16] + (rotate(x, 7) ^ rotate(x, 18) ^ (x >>> 3)) +
        block[i - 7] + (rotate(y, 17) ^ rotate(y, 19) ^ (y >>> 10));
    }
    let [a, b, c, d, e, f, g, h] = hash;
    for (let i = 0; i < 64; i++) {
      const first = (h + (rotate(e, 6) ^ rotate(e, 11) ^ rotate(e, 25)) +
        ((e & f) ^ (~e & g)) + constants[i] + block[i]) | 0;
      const second = ((rotate(a, 2) ^ rotate(a, 13) ^ rotate(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
      h = g; g = f; f = e; e = (d + first) | 0;
      d = c; c = b; b = a; a = (first + second) | 0;
    }
    [a, b, c, d, e, f, g, h].forEach((value, index) => { hash[index] = (hash[index] + value) | 0; });
  }
  return hash.map(value => (value >>> 0).toString(16).padStart(8, "0")).join("");
}

module.exports = { sha256 };
};

// --- Wordly — paket kataloğu ---
__wordlyModules["packageCatalog"] = function (module, exports, require) {
const { jsonStore, downloadPackage, validateWord, BASIC, PERSONAL } = require("wordLibrary");
const { sha256 } = require("packageDigest");
const URL = "https://raw.githubusercontent.com/Arthecks/Wordly-Update/main/catalog.json";
const ROOT = URL.slice(0, URL.lastIndexOf("/") + 1);
const ID = /^[a-z0-9][a-z0-9-]{0,79}$/;
const SHA = /^[a-f0-9]{64}$/;
const FILE = /^(?:[a-zA-Z0-9][\w.-]*\/)*[a-zA-Z0-9][\w.-]*\.json$/;

function catalogField(value, limit) {
  if (typeof value !== "string" || !value.trim() || value.length > limit) {
    throw new Error("Katalogda eksik veya geçersiz bilgi var.");
  }
  return value.trim();
}

function validateCatalog(raw) {
  if (!raw || raw.schema !== 1 || !Array.isArray(raw.entries) || !raw.entries.length || raw.entries.length > 100) {
    throw new Error("Kelime kataloğu biçimi geçersiz.");
  }
  const ids = new Set();
  const entries = raw.entries.map(item => {
    if (!item || typeof item.id !== "string" || !ID.test(item.id) || item.id === BASIC ||
        item.id === PERSONAL || ids.has(item.id) || !Number.isSafeInteger(item.count) ||
        item.count < 1 || item.count > 2000 || !["ready", "planned"].includes(item.status)) {
      throw new Error("Katalogda geçersiz veya yinelenen paket var.");
    }
    ids.add(item.id);
    const common = {
      id: item.id, name: catalogField(item.name, 80), description: catalogField(item.description, 500),
      category: catalogField(item.category, 60), count: item.count, status: item.status,
    };
    if (item.status === "planned") return common;
    if (!Number.isSafeInteger(item.revision) || item.revision < 1 ||
        typeof item.file !== "string" || item.file.length > 200 || !FILE.test(item.file) ||
        typeof item.sha256 !== "string" || !SHA.test(item.sha256) ||
        !Array.isArray(item.preview) || !item.preview.length ||
        item.preview.length > item.count) {
      throw new Error("Katalogdaki indirilebilir paket bilgileri geçersiz.");
    }
    const preview = item.preview.map(validateWord);
    if (new Set(preview.map(word => word.id)).size !== preview.length) {
      throw new Error("Katalog önizlemesinde yinelenen kelime var.");
    }
    return { ...common, revision: item.revision, file: item.file, sha256: item.sha256, preview };
  });
  return { schema: 1, entries };
}

function cacheStore() {
  return jsonStore("catalog", validateCatalog, () => null, true);
}

async function fetchCatalog() {
  const request = new Request(URL);
  request.timeoutInterval = 6;
  request.onRedirect = () => null;
  const body = await request.loadString();
  if (request.response?.statusCode !== 200 || typeof body !== "string" || body.length > 512 * 1024) {
    throw new Error("Katalog sunucudan alınamadı.");
  }
  return validateCatalog(JSON.parse(body.replace(/^\uFEFF/, "")));
}

async function loadCatalog() {
  let cache;
  try { cache = cacheStore(); } catch (_) { /* Katalog çevrimiçi olarak kullanılabilir. */ }
  try {
    const data = await fetchCatalog();
    try {
      if (cache && JSON.stringify(cache.read().value) !== JSON.stringify(data)) cache.write(() => data);
    } catch (error) {
      console.warn("Wordly: katalog önbelleği kaydedilemedi. " + error);
    }
    return { data, cached: false };
  } catch (error) {
    console.warn("Wordly: katalog alınamadı. " + error);
    return { data: cache?.read().value || null, cached: true };
  }
}

function packageStatus(entry, installed) {
  if (entry.status === "planned") return "Planlanıyor";
  if (!installed) return "İndirilebilir";
  return entry.revision > installed.revision ? "Güncelleme var" : "Yüklü";
}

async function installCatalogPackage(entry, library) {
  if (entry.status !== "ready") throw new Error("Bu paket henüz indirilemiyor.");
  const { pack } = await downloadPackage(ROOT + entry.file, body => {
    if (typeof body !== "string" || body.length > 1024 * 1024 || sha256(body) !== entry.sha256) {
      throw new Error("Paket bütünlük doğrulamasını geçemedi.");
    }
  });
  if (pack.id !== entry.id || pack.revision !== entry.revision || pack.words.length !== entry.count) {
    throw new Error("Paket bilgileri katalogla uyuşmadı.");
  }
  const wordsById = new Map(pack.words.map(word => [word.id, JSON.stringify(word)]));
  if (entry.preview.some(word => wordsById.get(word.id) !== JSON.stringify(word))) {
    throw new Error("Paket içeriği katalog önizlemesiyle uyuşmadı.");
  }
  // Paket durumunu indirme tamamlandıktan sonra tekrar oku.
  const installed = library.list().groups.find(group => group.id === entry.id);
  if (installed) library.replacePackage(entry.id, pack, "", true);
  else library.addPackage(pack, "", true);
}

module.exports = { validateCatalog, loadCatalog, installCatalogPackage, packageStatus };
};

// --- Wordly — kelime ve paket menüleri ---
__wordlyModules["wordManagement"] = function (module, exports, require) {
const { BASIC, PERSONAL, TYPES, parsePackage, downloadPackage, openWordLibrary } = require("wordLibrary");
const { loadCatalog, installCatalogPackage, packageStatus } = require("packageCatalog");

async function form(title, message, fields, action) {
  const alert = new Alert();
  alert.title = title;
  alert.message = message;
  fields.forEach(([hint, value]) => alert.addTextField(hint, value));
  alert.addAction(action);
  alert.addCancelAction("Vazgeç");
  if (await alert.presentAlert() !== 0) return null;
  return fields.map((_, index) => alert.textFieldValue(index));
}

async function readFilePackage(allowPersonal) {
  let path;
  try { path = await DocumentPicker.openFile(); } catch (_) { return null; }
  if (!path) return null;
  let content;
  try { content = FileManager.local().readString(path); } catch (_) {
    throw new Error("Dosya okunamadı. Cihaza indirilmiş bir JSON dosyası seçin.");
  }
  return parsePackage(content, allowPersonal);
}

async function exportPackage(pack) {
  const file = { schema: 1, id: pack.id, name: pack.name, revision: pack.revision, words: pack.words };
  try {
    await DocumentPicker.exportString(JSON.stringify(file) + "\n", "wordly-" + pack.id + ".json");
  } catch (_) {
    throw new Error("Dosya dışa aktarılamadı.");
  }
}

function createWordMenus(showMenu) {
  const library = openWordLibrary();
  const notice = (title, message) => showMenu(title, message, [], "Tamam");
  const confirm = async (title, message, action) => Boolean(await form(title, message, [], action));
  // Arama İngilizce ve Türkçe I biçimlerini birlikte kabul eder; kayıtlar değişmez.
  const normalize = text => text.normalize("NFC").replace(/[Iİıi]/g, "i").toLowerCase();

  async function guard(action) {
    try { await action(); } catch (error) {
      await notice("İşlem tamamlanamadı", error instanceof Error ? error.message : "Kelime dosyasına erişilemedi.");
    }
  }

  // Her gösterimde yalnızca bir sayfa oluşturulur. Alt ekran dönüşleri aynı sayfayı yeniler.
  async function browse(title, snapshot, select, commands = [], chooseOnce = false) {
    let page = 0;
    const pageSize = commands.length > 1 ? 3 : 4;
    while (true) {
      const { items, message } = snapshot();
      page = Math.min(page, Math.max(0, Math.ceil(items.length / pageSize) - 1));
      const start = page * pageSize;
      const shown = items.slice(start, start + pageSize);
      const labels = shown.map(item => item.label);
      const actions = shown.map(item => () => select(item.value));
      function offer(label, action) {
        labels.push(label);
        actions.push(action);
      }
      for (const command of commands) offer(command.label, command.run);
      if (page > 0) offer("Önceki sayfa", () => { page--; });
      if (start + shown.length < items.length) offer("Sonraki sayfa", () => { page++; });
      const range = shown.length ? (start + 1) + "–" + (start + shown.length) + " / " + items.length : "Sonuç bulunamadı.";
      const index = await showMenu(title, [message, range].filter(Boolean).join("\n"), labels, "Geri");
      if (!actions[index]) return;
      await guard(actions[index]);
      if (chooseOnce && index < shown.length) return;
    }
  }

  async function editWord(word = null) {
    const types = Object.keys(TYPES);
    const selected = await showMenu("Kelime türü", "Bir tür seç.", types.map(type =>
      (word?.type === type ? "✓ " : "") + TYPES[type]), "Geri");
    if (selected < 0) return;
    const type = types[selected];
    const verb = type === "verb";
    const fields = [[verb ? "V1 · Temel hâl" : "İngilizce kelime", word?.word || ""],
      ...(verb ? [["V2 · Geçmiş zaman", word?.v2 || ""], ["V3 · Üçüncü hâl", word?.v3 || ""]] : []),
      ["Türkçe anlam", word?.turkishMeaning || ""], ["Örnek cümle", word?.exampleSentence || ""],
      ["Cümlenin Türkçe karşılığı", word?.exampleTranslation || ""]];
    while (true) {
      const data = await form(word ? "Kelimeyi düzenle" : "Kelime ekle",
        "Kelime ve Türkçe anlam gerekli. Fiillerde üç hâli de yaz.", fields, "Kaydet");
      if (!data) return false;
      const [turkishMeaning, exampleSentence, exampleTranslation] = data.slice(verb ? 3 : 1);
      try {
        library.putWord({ id: word?.id || UUID.string().toLowerCase(), type, word: data[0],
          v2: verb ? data[1] : "", v3: verb ? data[2] : "", turkishMeaning, exampleSentence, exampleTranslation });
        return true;
      } catch (error) {
        fields.forEach((field, index) => { field[1] = data[index]; });
        await notice("Kelime kaydedilemedi", error.message);
      }
    }
  }

  function wordForms(word) {
    return [word.word, word.v2 || word.pastSimple, word.v3 || word.pastParticiple].filter(Boolean);
  }

  async function wordDetail(word, editable) {
    const details = [TYPES[word.type], wordForms(word).join(" · "), word.turkishMeaning,
      word.exampleSentence, word.exampleTranslation].filter(Boolean).join("\n");
    while (true) {
      const choice = await showMenu(word.word, details, editable ? ["Düzenle", "Sil"] : [], "Geri");
      if (choice < 0 || !editable) return;
      if (choice === 0 && await editWord(word)) return;
      if (choice === 1 && await confirm("Kelime silinsin mi?", word.word + " kişisel paketinden silinecek.", "Sil")) {
        try { library.deleteWord(word.id); return; }
        catch (error) { await notice("Kelime silinemedi", error.message); }
      }
    }
  }

  async function wordsScreen(title, getWords, editable, message = "", extraCommands = []) {
    let query = "";
    const commands = [{
      label: "Kelime ara",
      async run() {
        const input = await form("Kelime ara", "Aramayı temizlemek için alanı boş bırak.",
          [["Kelime, çekim veya Türkçe anlam", query]], "Ara");
        if (input) query = normalize(input[0].trim());
      },
    }];
    if (editable) commands.unshift({ label: "Kelime ekle", run: () => editWord() });
    commands.push(...extraCommands);
    await browse(title, () => {
      const words = getWords();
      return {
        message: [typeof message === "function" ? message() : message, query ? "Arama: " + query : ""].filter(Boolean).join("\n"),
        items: words.filter(word => [...wordForms(word), word.turkishMeaning].some(value => normalize(value).includes(query)))
          .map(word => ({ label: word.word + " · " + word.turkishMeaning, value: word })),
      };
    }, word => wordDetail(word, editable), commands);
  }

  function personal() {
    const getGroup = () => library.list().groups.find(group => group.id === PERSONAL);
    return wordsScreen("Kelimelerim", () => getGroup().words, true, () => getGroup().words.length + " kişisel kelime", [{
      label: "Tüm paketlerde ara",
      run: () => wordsScreen("Tüm paketlerde ara", () => library.list().groups.flatMap(group => group.words), false),
    }]);

  }

  async function packages() {
    let catalog = await loadCatalog();
    let category = "";
    let query = "";
    let filter = "";
    const entries = () => catalog.data?.entries || [];
    function status(entry, group) {
      if (group) {
        const update = entry && packageStatus(entry, group) === "Güncelleme var";
        return "Yüklü · " + (group.enabled ? "Etkin" : "Devre dışı") + (update ? " · Güncelleme var" : "");
      }
      return entry.status === "ready" ? "İndirilebilir" : "Planlanıyor";
    }

    async function packageDetail(id) {
      while (true) {
        const group = library.list().groups.find(item => item.id === id);
        const entry = entries().find(item => item.id === id);
        if (!group && !entry) {
          await showMenu("Paket kaldırıldı", "Bu paket artık cihazda yüklü değil.", [], "Geri");
          return;
        }
        const name = group?.name || entry.name;
        const count = group?.words.length ?? entry.count;
        const labels = [];
        const actions = [];
        function offer(label, run) {
          labels.push(label);
          actions.push(run);
        }
        if (entry?.status === "ready" && (!group || entry.revision > group.revision)) {
          offer(group ? "Paketi güncelle" : "Paketi indir", async () => {
            await installCatalogPackage(entry, library);
          });
        }
        if (group) {
          offer("Kelimeleri görüntüle", () => wordsScreen(name, () =>
            library.list().groups.find(item => item.id === id)?.words || [], id === PERSONAL));
          offer(group.enabled ? "Paketi devre dışı bırak" : "Paketi etkinleştir", () => library.toggle(id));
          if (id !== BASIC && id !== PERSONAL) {
            if (!entry && !group.catalogManaged) offer("Paketi güncelle", () => updateExternal(group));
            offer("Paketi kaldır", async () => {
              if (await confirm("Paket kaldırılsın mı?", name + " cihazdan kaldırılacak.", "Kaldır")) library.deletePackage(id);
            });
          }
        } else if (entry.preview?.length) {
          offer("Kelimeleri önizle", () => wordsScreen(name, () => entry.preview, false,
            entry.preview.length + " / " + entry.count + " kelime"));
        }
        const info = [status(entry, group), count + " kelime",
          group?.revision ? "Yüklü sürüm " + group.revision : "",
          entry?.revision && entry.revision !== group?.revision ? "Katalog sürümü " + entry.revision : "",
          entry?.category, entry?.description].filter(Boolean).join("\n");
        const index = await showMenu(name, info, labels, "Geri");
        if (!actions[index]) return;
        await guard(actions[index]);
      }
    }

    async function options() {
      while (true) {
        const selection = await showMenu("Paket arama ve filtre", [
          query ? "Arama: " + query : "Tüm adlar", category || "Tüm kategoriler", filter || "Tüm paketler",
        ].join(" · "), ["Paket ara", "Kategori seç", "Duruma göre filtrele", "Kataloğu yenile"], "Geri");
        if (selection < 0) return;
        if (selection === 0) {
          const input = await form("Paket ara", "Aramayı temizlemek için alanı boş bırak.",
            [["Paket adı, açıklama veya kategori", query]], "Ara");
          if (input) query = normalize(input[0].trim());
          continue;
        }
        if (selection === 1) {
          const categories = ["Tüm kategoriler", ...new Set(entries().map(item => item.category))];
          await browse("Kategoriler", () => ({ items: categories.map(value => ({ label: value, value })) }),
            async value => { category = value === categories[0] ? "" : value; }, [], true);
        } else if (selection === 2) {
          const filters = ["Tüm paketler", "Yüklü", "İndirilebilir", "Etkin", "Devre dışı", "Güncelleme var"];
          const index = await showMenu("Paket durumu", "Görüntülenecek paketleri seç.", filters, "Geri");
          if (index >= 0) filter = index === 0 ? "" : filters[index];
        } else if (selection === 3) {
          catalog = await loadCatalog();
        }
      }
    }

    await browse("Kelime Paketleri", () => {
      const groups = library.list().groups;
      const remote = new Map(entries().map(entry => [entry.id, entry]));
      const local = new Map(groups.map(group => [group.id, group]));
      const ids = new Set([...local.keys(), ...remote.keys()]);
      const items = [...ids].flatMap(id => {
        const group = local.get(id), entry = remote.get(id);
        const name = group?.name || entry.name;
        const count = group?.words.length ?? entry.count;
        const availability = status(entry, group);
        if ((category && entry?.category !== category) ||
            (filter && !availability.split(" · ").includes(filter)) ||
            (query && !normalize([name, entry?.description, entry?.category].filter(Boolean).join(" ")).includes(query))) return [];
        return [{ label: name + " · " + count + " · " + availability, value: id }];
      });
      return { items, message: [query && "Arama: " + query, category, filter,
        !groups.some(group => group.enabled && group.words.length) && "Etkin kelime yok. Bir paketi etkinleştir veya kelime ekle.", catalog.cached &&
        (catalog.data ? "Son kaydedilen katalog gösteriliyor." : "Kataloğa ulaşılamadı. Yüklü paketler kullanılabilir.")].filter(Boolean).join("\n") };
    }, packageDetail, [{ label: "Arama ve filtre", run: options },
      { label: "Kataloğu yenile", async run() { catalog = await loadCatalog(); } }]);
  }

  async function addFromGitHub() {
    const input = await form("Bağlantıyla paket indir", "GitHub’daki paket dosyasının doğrudan bağlantısını gir.",
      [["Paket bağlantısı", ""]], "İndir");
    if (!input) return;
    const { pack, source } = await downloadPackage(input[0]);
    if (await confirm("Paket eklensin mi?", pack.name + " · " + pack.words.length + " kelime", "Paketi ekle")) {
      library.addPackage(pack, source);
    }
  }

  async function importFile() {
    const pack = await readFilePackage(true);
    if (!pack || !await confirm("Kelimeler içe aktarılsın mı?", pack.name + " · " + pack.words.length + " kelime", "İçe aktar")) return;
    if (pack.id === PERSONAL) {
      const count = library.importPersonal(pack);
      await notice("İçe aktarma tamamlandı", count + " yeni kelime eklendi. Yinelenenler atlandı.");
    } else library.addPackage(pack);
  }

  async function updateExternal(group) {
    const pack = group.source ? (await downloadPackage(group.source)).pack : await readFilePackage(false);
    if (pack && await confirm("Paket güncellensin mi?", pack.name + " · Sürüm " + pack.revision, "Güncelle")) {
      library.replacePackage(group.id, pack);
    }
  }

  async function chooseTransfer(update) {
    const groups = () => library.list().groups.filter(group => group.id !== BASIC &&
      (!update || (group.id !== PERSONAL && !group.catalogManaged)));
    await browse(update ? "Dışarıdan eklenen paketleri güncelle" : "Dışa aktarılacak paket", () =>
      ({ items: groups().map(group => ({ label: group.name, value: group })) }), async group => {
      if (!update) {
        await exportPackage(group);
        return;
      }
      await updateExternal(group);
    });
  }

  async function advanced() {
    const actions = [importFile, () => chooseTransfer(false), addFromGitHub, () => chooseTransfer(true)];
    while (true) {
      const index = await showMenu("Gelişmiş İşlemler", "Paket dosyaları ve bağlantıları.",
        ["JSON dosyası içe aktar", "JSON olarak dışa aktar", "Bağlantıyla paket indir", "Dışarıdan eklenen paketi güncelle"], "Geri");
      if (!actions[index]) return;
      await guard(actions[index]);
    }
  }

  return { personal, packages, advanced };
}
module.exports = { createWordMenus };
};

// --- Modül: src/scriptable/main.js ---
__wordlyModules["main"] = function (module, exports, require) {
// Wordly — Scriptable giriş noktası
//
// Bu dosya doğrudan çalıştırılmaz; tools/build.js tarafından diğer modüllerle
// birlikte scripts/wordly.js içine birleştirilir. "wordLists" ve "appInfo"
// modüllerini derleme aracı üretir (data/*.json ve sürüm bilgisi).
//
// Davranış:
// - Widget içinde: widget boyutuna göre görünümü oluşturur ve Script.setWidget ile verir.
// - Scriptable uygulamasında: ayar ve önizleme menüsünü açar.
// - Kayıtlı aralık kullanılır; geçerli eski widget parametresi o widget için önceliklidir.

const { ALLOWED_INTERVAL_HOURS, parseIntervalHours, selectWord, getNextChangeDate, getSlotIndex } = require("../core/wordSelector.js");
const { openWordLibrary } = require("wordLibrary");
const { createWordMenus } = require("wordManagement");
const { selectWordWithHistory } = require("../core/wordHistory.js");
const { THEME } = require("../theme/theme.js");
const { isLockScreenFamily, buildWidget, buildErrorWidget } = require("./widgetView.js");
const { loadHistory, saveHistory } = require("./historyStore.js");
const { GLASS_LEVELS, getGlassLevel, loadSettings, saveSettings } = require("./settingsStore.js");
const appInfo = require("appInfo");
const { THEMES, MODES, normalizeCollection, homeFamily, themedRun } = require("homeNori");

const COLLECTION_FILE = "wordly-nori.json";

function loadCollection() {
  try {
    const files = FileManager.local();
    const path = files.joinPath(files.documentsDirectory(), COLLECTION_FILE);
    if (files.fileExists(path)) {
      const saved = JSON.parse(files.readString(path));
      return normalizeCollection(saved?.noriMode, saved?.noriTheme);
    }
  } catch (error) {
    console.warn("Wordly: Nori tercihi okunamadı. " + error);
  }
  return normalizeCollection();
}

function saveCollection(collection) {
  const files = FileManager.local();
  files.writeString(files.joinPath(files.documentsDirectory(), COLLECTION_FILE),
    JSON.stringify(normalizeCollection(collection.noriMode, collection.noriTheme)));
}

const PREVIEW_OPTIONS = [
  { title: "Kilit ekranı · Dikdörtgen (arka planlı)", family: "accessoryRectangular" },
  { title: "Kilit ekranı · Dikdörtgen (arka plansız)", family: "accessoryRectangular", glassBackground: false },
  { title: "Kilit ekranı · Satır içi", family: "accessoryInline" },
  { title: "Kilit ekranı · Yuvarlak", family: "accessoryCircular" },
  { title: "Ana ekran · Küçük", family: "small" },
  { title: "Ana ekran · Orta", family: "medium" },
  { title: "Ana ekran · Büyük", family: "large" },
];

// Kelimeyi seçer.
// - Kilit ekranı: gün içinde tekrar etmeyen, geçmişe dayalı seçim.
//   persistHistory false ise (uygulama içi önizleme) geçmiş yalnızca okunur.
// - Ana ekran: önceki davranış (saate göre sıralı seçim), geçmişe dokunmaz.
function chooseWord(words, family, now, intervalHours, persistHistory, knownKeys) {
  if (!isLockScreenFamily(family)) return selectWord(words, now, intervalHours);

  const result = selectWordWithHistory(words, loadHistory(), now, intervalHours, knownKeys);
  if (persistHistory && result.changed) saveHistory(result.history);
  return result.word;
}

// Verilen boyut ve an için widget'ı oluşturur
function createWidget(family, now, persistHistory, intervalHours, glassOpacity, collection, previewTheme) {
  let pool;
  try {
    pool = openWordLibrary().pool();
  } catch (error) {
    console.error("Wordly: kelime kitaplığı açılamadı. " + error);
    pool = { words: [] };
  }
  if (!pool.words.length) {
    const widget = new ListWidget();
    const text = widget.addText(family === "accessoryInline"
      ? "Wordly · Etkin kelime yok"
      : "Etkin kelime yok. Wordly’de bir paketi açın veya kelime ekleyin.");
    text.lineLimit = family === "accessoryInline" ? 1 : 3;
    widget.refreshAfterDate = getNextChangeDate(now, intervalHours);
    return widget;
  }

  const word = chooseWord(pool.words, family, now, intervalHours, persistHistory, pool.known);
  const slotIndex = family === "accessoryRectangular" ? getSlotIndex(now, intervalHours) : null;
  const homeTheme = homeFamily(family)
    ? previewTheme || themedRun(pool.words, word, intervalHours, collection, persistHistory)
    : null;
  const widget = buildWidget(word, family, THEME, slotIndex, glassOpacity, homeTheme);
  // iOS bu zamanı garanti etmez; yalnızca en erken yenileme zamanını bildirir
  widget.refreshAfterDate = getNextChangeDate(now, intervalHours);
  return widget;
}

function presentPreview(widget, family) {
  switch (family) {
    case "accessoryRectangular":
      return widget.presentAccessoryRectangular();
    case "accessoryInline":
      return widget.presentAccessoryInline();
    case "accessoryCircular":
      return widget.presentAccessoryCircular();
    case "small":
      return widget.presentSmall();
    case "large":
      return widget.presentLarge();
    default:
      return widget.presentMedium();
  }
}

function showMenu(title, message, labels, cancelLabel) {
  const menu = new Alert();
  menu.title = title;
  menu.message = message;
  labels.forEach(label => menu.addAction(label));
  menu.addCancelAction(cancelLabel);
  return menu.presentSheet();
}

async function updateSettings(current, next) {
  try {
    saveSettings(next);
    return next;
  } catch (error) {
    console.error("Wordly: ayarlar kaydedilemedi. " + error);
    const notice = new Alert();
    notice.title = "Ayarlar kaydedilemedi";
    notice.message = "Önceki ayarlarla devam ediliyor.";
    notice.addAction("Tamam");
    await notice.presentAlert();
    return current;
  }
}

async function showSettings(initialSettings, updates) {
  let settings = initialSettings;
  let collection = loadCollection();
  if (updates) await updates.check();

  async function intervalMenu() {
    while (true) {
      const index = await showMenu("Kelime Değişim Süresi",
        "Widget’ın kaç saatte bir yeni kelime göstereceğini seç. iPhone yenilemeyi geciktirebilir." +
        "\nDaha önce widget’a girilmiş geçerli bir süre varsa o widget bu süreyi kullanır.",
        ALLOWED_INTERVAL_HOURS.map(hours => (hours === settings.intervalHours ? "✓ " : "") + hours + " saat"), "Geri");
      if (index < 0) return;
      const intervalHours = ALLOWED_INTERVAL_HOURS[index];
      if (intervalHours !== settings.intervalHours) settings = await updateSettings(settings, { ...settings, intervalHours });
    }
  }

  async function applyCollection(next) {
    try {
      saveCollection(next);
      collection = next;
    } catch (_) {
      await showMenu("Nori tercihi kaydedilemedi", "Önceki tercih kullanılmaya devam ediyor.", [], "Tamam");
    }
  }

  async function themeGallery() {
    while (true) {
      const index = await showMenu("Nori Temaları", "Bir tema seçip incele veya sabitle.",
        THEMES.map(theme => (collection.noriMode === "fixed" && collection.noriTheme === theme.id ? "✓ " : "") +
          theme.label), "Geri");
      if (index < 0) return;
      const theme = THEMES[index];
      while (true) {
        const choice = await showMenu(theme.label, "Ana ekran widget’ına uygula veya bir boyutta önizle.",
          ["Sabit tema yap", "Küçük önizleme", "Orta önizleme", "Büyük önizleme"], "Geri");
        if (choice < 0) break;
        if (choice === 0) {
          await applyCollection({ noriMode: "fixed", noriTheme: theme.id });
          continue;
        }
        const family = ["small", "medium", "large"][choice - 1];
        try {
          await presentPreview(createWidget(family, new Date(), false, settings.intervalHours, 1, collection, theme.id), family);
        } catch (_) {
          await showMenu("Önizleme açılamadı", "Başka bir boyut deneyebilirsin.", [], "Tamam");
        }
      }
    }
  }

  async function collectionMenu() {
    while (true) {
      const mode = MODES.find(item => item.id === collection.noriMode);
      const active = THEMES.find(item => item.id === collection.noriTheme);
      const choice = await showMenu("Nori Koleksiyonu",
        mode.label + (mode.id === "fixed" ? " · " + active.label : "") + "\nYalnızca ana ekranı değiştirir.",
        ["Rastgele", "Sabit", "Kapalı", "Temaları incele"], "Geri");
      if (choice < 0) return;
      if (choice === 1 || choice === 3) await themeGallery();
      else await applyCollection({ ...collection, noriMode: MODES[choice].id });
    }
  }

  async function appearanceMenu() {
    while (true) {
      const index = await showMenu("Görünüm", "Dikdörtgen kilit ekranı widget’ının cam görünümünü seç.",
        [...GLASS_LEVELS.map(item => (item.id === settings.glassLevel ? "✓ " : "") + item.label),
          "Nori Koleksiyonu"], "Geri");
      if (index < 0) return;
      if (index === GLASS_LEVELS.length) {
        await collectionMenu();
        continue;
      }
      const glassLevel = GLASS_LEVELS[index].id;
      if (glassLevel !== settings.glassLevel) settings = await updateSettings(settings, { ...settings, glassLevel });
    }
  }

  async function previewMenu() {
    while (true) {
      const index = await showMenu("Önizleme", "Bir widget görünümü seç. Önizleme kelime geçmişini değiştirmez.",
        PREVIEW_OPTIONS.map(option => option.title), "Geri");
      if (index < 0) return;
      const option = PREVIEW_OPTIONS[index];
      const opacity = option.glassBackground === false ? 0 : getGlassLevel(settings.glassLevel).opacity;
      const widget = createWidget(option.family, new Date(), false, settings.intervalHours, opacity, collection);
      try { await presentPreview(widget, option.family); }
      catch (_) { await showMenu("Önizleme açılamadı", "Başka bir görünüm seçebilirsin.", [], "Tamam"); }
    }
  }

  async function openWordMenu(section) {
    try { await createWordMenus(showMenu)[section](); }
    catch (error) {
      console.error("Wordly: kelime menüsü açılamadı. " + error);
      await showMenu("Kelime kitaplığı", "Yerel kelime dosyaları açılamadı.", [], "Tamam");
    }
  }

  async function otherSettings() {
    while (true) {
      const labels = ["Gelişmiş İşlemler"];
      if (updates) labels.unshift("Yazılım güncellemeleri");
      const index = await showMenu("Diğer Ayarlar", updates ? updates.status() : "", labels, "Geri");
      if (index < 0) return false;
      if (updates && index === 0) {
        if (await updates.open({ stayOnAction: true })) return true;
      } else {
        await openWordMenu("advanced");
      }
    }
  }

  const actions = [() => openWordMenu("personal"), () => openWordMenu("packages"), intervalMenu, appearanceMenu,
    previewMenu, otherSettings];
  while (true) {
    const index = await showMenu("Wordly " + appInfo.version,
      settings.intervalHours + " saatte bir · " + getGlassLevel(settings.glassLevel).label + " cam",
      ["Kelimelerim", "Kelime Paketleri", "Kelime Değişim Süresi", "Görünüm", "Önizleme", "Diğer Ayarlar"], "Kapat");
    if (!actions[index] || await actions[index]()) return;
  }
}

async function run(updates) {
  const settings = loadSettings();
  if (config.runsInWidget) {
    // Geçerli eski parametre → yerel ayar → varsayılan süre.
    const intervalHours = parseIntervalHours(args.widgetParameter, settings.intervalHours);
    const opacity = getGlassLevel(settings.glassLevel).opacity;
    const widget = createWidget(config.widgetFamily, new Date(), true, intervalHours, opacity,
      homeFamily(config.widgetFamily) ? loadCollection() : null);
    widget.url = "scriptable:///run/" + encodeURIComponent(Script.name());
    Script.setWidget(widget);
    return;
  }
  await showSettings(settings, updates);
}

module.exports = run;
};

return { api: 1, version: __wordlyRequire("appInfo").version, run: __wordlyRequire("main") };
})();
