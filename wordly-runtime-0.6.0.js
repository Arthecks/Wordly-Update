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
module.exports = {"version":"0.6.0"};
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
  { outfit: "hoodie", pose: "wave", png: "iVBORw0KGgoAAAANSUhEUgAAAJMAAACACAYAAAAPp1sgAABrS0lEQVR42u39d3xd1ZU2jj/71Ft11Xt1l3uVCy7gGAM2poQSCAZsaiD8JpMEwoQkEEiZF5IwZODNC6GTwgAJ1WCDsY2Ni2RLSLItS7KaZfWu2+89bf/+4O7zPbq6skkGmGSS+/noY0u3nbL22ms961nPIvgHeqxbt84TCASW6Lq+CsBUnufzOY5LMQzDQykVCCEKIWQAwGlK6Sld1xt4nq9SVbWhqqoqhH8+zvgg/wgnOXfuXKcoij8QRfEaAEW6rnPRaBS6rpuvMQwDAMBxHHieN384jotyHNdMCNmjqupbgiAcKC8vD//TdP4Bjen88893joyMbON5/txQKARFUYz09HQjKyuLejwe4vF4iMvlgiiKiEQiCAQCGBwcpMPDw3RwcJAEg0Ge4zhit9shCAIA1AF4WRTF3+7fv3/gnyb0D2RMS5YsuZHn+RcikUikpKRE+NrXvsYtWLAABQUFsNvtE75vYGAA3d3dOHr0KCoqKowTJ04Yvb29nCiKgsPhgK7rnYSQ/ydJ0v/bv3//yD9N6R/AmJYuXfpzSum9iqJoTz31lFBWVmY+F41GEQ6HoWkaCCEQRRGiKEKSJPA8P+Zzuru78dFHH+HNN980jh07RiVJEt1uN3RdP2EYxrcPHz78wT+N6X+/Md1GCHlqeHhY+dGPfiRs3rwZHR0dKC8vx9DQECKRCAgh4DgOlFJwHAeHw4HU1FSkp6cjPz+f5OTkQJZlygxw9+7deOmll4za2lrd5XLJHMcZuq4/UllZ+f2/tfO/+eabUwkhD1BKF1BK9wD45XPPPef/Ir6L/99uTOnp6UMcx20FYGtra6MbN24kgiCQXbt2kXA4DF3XoWkaFEVBNBpFJBLB6Ogouru70dzcjMbGRtLQ0ICBgQEiCALS09MxdepUbNq0iciyzFdXV+uhUAgOh2N1VlbWkry8vPe7u7v/ZgL0RYsWvSnL8tcNwyiy2WxrFEWx1dTUvP9PY/orHn19faO5ubkZDofjnIGBAb27u5u77LLLSDAYRHt7O2w2GyilZibHcRwEQYAoipBlGYZhIBAIoL29HQ0NDejo6IBhGMjKykJZWRmWLFlCamtr0dXVpblcrlJK6brCwsL3Ozs7vf/T537TTTd9QxTFbymKEqGUarHzlKqrq5/+pzH9lY/u7u4P0tPT19lstpLq6mrd7/dzN9xwA21sbITf7ze3uDH7PyHmvzzPQ5IkcByH4eFh1NfXo7m5GXa7HXPmzMGFF15IGhoauJMnT6oOhyNf07Q1OTk5f+7p6fkfw6a2bNlSwPP8HymldkopRymloihKuq7vq66u/vM/jekzPFauXJmRl5c3PTc3d2lubu55BQUFF+fk5KwRRdGtadp0u91Oq6qqiKIo2LBhA+rq6qBpGjiOGx9QEjLud4ZDeb1e1NfXY3h4GNOnT8cll1yCY8eOcY2NjarL5co3DGNud3f3H/6nrsPChQt/JYriak3T1E+dLidQSocB3PTJJ598IZDG/4oAfMmSJYs5jltHKV0LYBqAfEIIbxgGNE0zAUlCiM7zPOF5HiMjI9i0aRPWrl2Luro6E8CklJpGxLwVIWScYbHng8EgMjIycNlllyErKws33XQTjh8/rrlcLklRlJ9UVVXd/2Vfj1tuuWUWgMOGYdgIIToA8DwvGIZxxTPPPPPGP7O5uMe6des8fr//a4ZhbCWElBFCOBZAcxyn8zxvuN1uJCUlQRRFGIZBvF4v5/V6oaoqDMOAoihYtmwZli1bhmg0ClVVx2xviTwVIQSUUhiGAUopeJ6HruvgOA4bN25EWloarr32Wur1eqndbqccx5176NChg1/mtdm6desbkiRdpqqqSgiBIAiiqqr/+txzz/36n9BA3GPx4sW3cRz3XY7jpsWwIsNut+tTp07FggULuOnTp5OSkhKkpqbCbrdDFEVQShGNRjE0NIT29nYcP34clZWVqKqqAs/zOPfcc1FaWopIJDLOmKwBOqV0THzF4ARKKUKhEC6//HLS39+P73znO5rH4xEppQcqKipWfomx0gWSJG3XNE0jhFBJkiRVVR955pln7p3A8OYRQi4zDKM3GAy+9Nprr4X/IYxp0aJF53Ac90ue55eFw2GEw2Fl6tSp3Pr168maNWvI9OnTYbPZrOdFz3TOuq7T8vJyvPbaa9izZw/mzp2LBQsWIBwOm16IGUqirY95J2ZohBCEQiFccskl+NOf/oRt27bRpKQkXlXVHxmGcZwQ4uI4LkII8QqC0K/rekd5efnw54wrHRQEYbmmaSFJkhyKovzh2Wef3TxBtncvz/M/EATBTQhBJBL503PPPXfV/3pjWrRo0VUcx71ECLH5fD510qRJ5LrrruM2bNiA5ORk83wURcHw8DD6+/tpf38/fD4fIpEIdF03vYgoinA4HCQnJ4dOmTIFycnJqKurwxNPPIFQKITp06ebBhSPhFvjKhaLWbM+TdMgSRLy8vLwm9/8BqqqAgDH3sO2SUqpBmDEMIxGAFUADnIcd7iiouLUX3uNbrzxxstkWX5D1/WgLMtORVHeeeaZZy6Jf911112XY7fbnxYEYaOqqgYABYAQe3rus88+W//XfL/wd4JiF+u6/jQAWyQSUTZv3izccccdSE1NBQCi6zr6+/tpc3MzbWlpwcDAABRFgaZp4wJowzDYD2V4ksfjwZQpU3DXXXfh+PHjOHXqlBkHWb2R1Zis3oo9DMOAIAiIRqPo7OxEcnIy6uvrIQiCZjUm8umDFwQhQ5KkDEEQVhqG8S1KaWDJkiVHALxGKd1WWVnZ8Rel5jzvliQJlFKnoigfhcPhcR7p1ltvXUEpfVoQhJmqqkZjGT1HCOEppUFKqfd/tWdasmTJd3me/2UwGFRuu+024a677jKPv62tDRUVFfTUqVOIRqOE53kao46M2ZqssY7VSFgwHYlEIIoi8vPzoWkaRkZGxhlSIgOKhxGs39HZ2QlN01BQUAC32w1RFOH3+zE8PIzBwUE6MDCAvr4+Y2RkhALgJEkSHA4HCCHQNG0UwDZK6f+rrKz8TAH85s2bnbIs38dxnEgI+dlvf/tbb1yWdyuAxwghDl3Xo+TTg+aEGB1C07T7n3322Z/8rzamsrKynxJCvu/z+fTf//73/MKFCxEOh/Hhhx+itrYWuq5DFEXwPD/u5n8WQ7AamKqqjMdkhRT+sosa2wIdDgdKSkrgdruRkpICj8cDl8uFlJQUCIIAXdfR3d2NxsZGVFRUoLKykjY1NRmqqsLpdIo2mw26rhuU0jc5jnukoqKi4r+R4f0fQRDuNQxDBxAFYBNFkdM0jQLYoev6488///z2/859+rvY5gghxwkhHKVUf/3117Fw4ULwPA/DMKDrOhwOxxg8KVGMkwhDsnoowzBM5kCijM0a75ztwT47FAqhuroauq6b75Vl2TSuoqIiTJ48GevWrcO6deugqiqprKzkd+zYgX379uk9PT2GzWbj7Hb7V3Vd37RkyZLfE0LuP3z4cOdfWFZ5XBCEu3RdDwKwSZLk0DQtoqrqOwB+8+yzz370D4OAz5gxoycajV4vy7K7rq7OsNlsZPHixZg2bRo6OzvR1dXFsrgxW9rZQEcrphT//ETvt/7tTF6PvUcQBEiSBEmSIIoigE+ZB8PDw2hqasLRo0dx7Ngx9Pf3w2azYc6cOTjvvPOwYcMGkpyczJ0+fZr09vZqoijykiQtNAzjqry8vK7u7u66z3r95s+f/x+yLKcDkAzD8BuG8QfDML7x3HPPPV5dXX3q87pPfxfG1NbWFs7LyxslhFxKCNEOHDhARkdHybx581BWVoZgMIiWlhYAgCiKEwKP1t8nMrB4Q4o3OhZoJzKc+NdZPWJ81sfzPGRZNj1YR0cH6urq0NjYiEgkgpKSEixbtgwbN26ELMvciRMnMDo6qtrt9lQAV+Xk5CR1d3d/8BmNqZ3juDRd118hhNz57LPPvlBdXd37Dw1aLlq06OeCIHxf13XN5/MZU6ZMEW655RZs2LABra2t+Oijj9Df32/erHijiDeiRN7mbHFWIm8Vl/JP+FmJ/h7/flVVoaoq0tPTsWDBAixbtgyiKKKhoYH84he/wKFDh3Sn0wme5wVd13dKkrTl4MGD3X8L9+fvqtDb09OzKy8vTwWw1uFwiENDQ9qHH37I7d27F06nE/Pnz0dWVhYAjAEe2Y2a6P+JDC3RdjaRUU60fSZKAs4UZ8XSe5OP3tTUhBMnTkAURcyZM4dceumlIISQ8vJyouu6KoriNF3XLygpKXm3o6Pjf5zy8ndZTikrKzuPUvpTQsgKADQUCtFoNIq0tDRMnz4daWlpsNlsUBQFkiTB6XSaFBIWbFvR63jDifcw8UbCgvWJno/fLhN5pYkKx/GGGo1GYRgGpk2bho0bNyI5ORk7duzAQw89hGAwqLpcLllV1VpCyMV/aWD+T2Maa1SXaZr2vCiKHgBGMBgk0WgUhBDIsmwS3CRJMoNh9mOz2ZCdnY2cnJwJt8QzeZxE22CirS3e8yXa4ibiUlk/PxwOw+PxYP369ZgzZw5qampwzz33oL+/X3M4HJKqqhWiKJ43URvW+eef7/T7/ck8z/NOpzPwwQcfDP/TmOJiKELIdzRNEwzDIIWFhYhEIiZMoOu6SS2RJAmyLMPj8SAzMxMpKSlwOp1nxKASbYPstfEwQyI0/GzBPav9nWkLtIKgqqqCUoq1a9di1apVOH78OG6//XZ4vV7N6XRKuq6/UFVVtRUAzjvvvKJoNLrKMIzVhmHMJYSkcRznpJTyACIAfBzHtRmGUanr+gFRFA8fPHjQ/w9pTGVlZa+Ionh1KBTSeZ4nd999N9auXQufz4fDhw+jvr7evBnMG51pq/us6b51i5vICBj6zjye9bsYBmVlILDnzpRdss9l7IeysjJs3LgRhw8fxl133QVN0wxJkgTDMH7OcVw2z/NX6LruYdSaOF4XeJ4fc00IIacIIe8SQl4qLy8//A9jTIsXL35eFMUtgUBA8Xg8wiOPPILly5cDAA4fPoyPP/4YmqZNCD7GG4DVO8R7m4m2skTxkCAI4HkeqqoSv9+PgYEBOjIygljzJzRNM2uB1h9ZlkEIMT3Pmch47BEOh1FWVoZLLrkE77//Pn74wx+CEEIFQeAjkQiCwSCSk5PV4uJiTJ06lWRmZkKWZRI7PjoyMoKWlhba0tJCBwYGeF3XebfbDUEQdErpH3Rd/3llZWXj/2pjWrJkyZOCINweDAaV1NRU4T/+4z8wf/58aJqGXbt2oaKiwsSa4qv6ZzOqREG11ZgS1foMwzCpvH6/H11dXWhra8PQ0BBRFIXKsgzWDRwrgSEQCMDr9YLjOCQnJ6O4uBhFRUVIT08HACiKMg67ijcmjuPg9/tx/vnnY+nSpbjmmmvQ1tYGXdf17OxsXHjhhdxFF11EZs6cGc98ILBQc4aGhlBTU4M9e/YY+/btMwYGBgS3280RQkYopb86cuTIz/5XGtPixYu/L4riz8PhsOJ2u/nHH3+czJs3D5qmYfv27aisrITD4UgIGE60jcRnZvGeKZGnshgUFUURPp8PJ0+eRENDA/X7/bSwsBBLlizh58+fj/z8fHg8HpOkF41GMTAwgK6uLjQ0NODo0aM4efIkKKUoKSlBaWkp0tPTzVhvIkIeOzZN09DY2Ii6ujrIsoxrrrkG1113HTIzM01jGRoawujoKMsMic1mo6ykk5GRYRr56dOn8cc//pH++c9/NoLBoJicnAxd1z/kef6WQ4cOtf+vMaZly5at03V9u2EYlBDCPfbYY+Scc86Brut47733cOTIETidzs8U05wtY4tL0anVG8XX9jo6Ooyamhqjr6+PlpaWcpdddpm4cuVKmp2dbRZz47ZcwqgvAOD3+2llZSVef/11HDx4EJIkYdasWZg1axZEURxDJY43KMMwUFFRgRMnTqCkpAQ/+clPcM4550BVVdTU1KC+vh7d3d0IBAJjYkX2eaIoIi0tDQUFBSgtLcW0adMAAPX19Xj00Ufp/v37dY/HI1FKTxmG8dXKysrqv3tjWrly5SRFUfYTQrL9fr/+4IMPcldeeSUAYNeuXThw4ABsNtu4gHoiQzlTXMK2AGshOPY7Zdsmu8mffPKJeuzYMS0jI4O78cYbbRs3biTJyckIh8NjjCDu+4n1GAVBoHa7HZqm4cCBA3jqqafosWPHUFJSQpYsWYLk5ORx3TOMN9XQ0IDy8nKUlJTg8ccfx5QpU3Do0CEcPnwYfX194DjOLNlYVV7YZzDE3TAM8DyPgoICLFq0CAsXLiQA8Pjjj9OnnnpKs9lsEsdx/RzHXXIm5sLfBQKemZn5R0EQFoyMjGg33HADf/vttwMAjhw5gj179iBGCPtMXofdYJZxMe8TF6PQCdJ2KggCFEXBwYMHo3V1dUpZWZnws5/9zH7eeecRwzAQCoVMQ7R+Row7RKx0YGt2xoDJtWvXknA4TA8ePKgPDAwgMzOTuN1uxtg0H5IkgTVHPP3008jOzsaLL76IAwcOQFEU2Gw2c/tKlDAw42KIO+sJPHHiBNrb20lWVhbWrVtHcnNz+T179mgAkgghG3Jzc9/t7u4e+rs0prKyspsEQfiu3+9X586dy//sZz+DJEloaWnB22+/DZ7nx3gAKyluoiDa8jyN+5vVIml84M3zPMLhsPHxxx+HWltblSuvvNL54IMP2jIyMuD3+yek+TJ25UQAKDvmaDQKm82GtWvXEo/Hw+3fv1/t6emhGRkZxOVyEaueFPuuK6+8ErNmzcJTTz2Frq4uuFyuceQ/6/lbkxIrZGGFC/r7+3H06FEiSRLOP/98TJo0ifvwww81QkgygNV5eXmvJWqB/5s2pjVr1mSrqvonwzDsgiDgF7/4BSksLCSjo6N4/fXXEQ6HTSwnfts6A2OATmRME3glyjyNYRg4cOBAqLW1NXr99dcnfe9735MMw0A0GoUgCGeq1bGtjZ7p+Nh3KIqCsrIyJCcn87t27VIGBgZoTk4OibWyE/Y6QggURUFNTQ28Xi/sdrv590SeOp7sF1++YYYlSRJ0Xcfx48cRDoexYcMGkpmZye3YsUO12+25APK7urpe/7sypoyMjAdFUVw3MjKibtmyRbj88suJpml477330NraOkYnYKK4KFEsxAyEGUtcwE7j0GoaAz5JdXV18OjRo6GrrrrKc++999rY9mRtLz8TK/OzPkcIQTgcxsKFC0Ep5Xfv3q0oioKioiLO8jrCumHC4TAEQTCNxXpNLJz3syL01kyVNV40NTXB6/WSK664AoFAgDt48KDmdDrnZ2dnH+/u7q7/uzCm5cuXzwDwVCQSEYqLi8lDDz1E7HY7amtrsXfvXjgcjnGZW3zqzrYmSZJMXjjHcZS5c8YXj11cGu89mHFJkkQ6OzuVgwcPepcuXep46KGH3JqmmU0HE+FVCRzUX2Rs0WgUS5YsIV1dXfTw4cOK0+kkWVlZnDV+4nmeWANsSumYThymNcXCAWuMxF6XyKOzBWmz2dDS0gJd13H99dfj448/Rk9PDxFFcXlOTs7vrXoKf7O0XVVV7xRF0RWNRpUbbrhBSE1NpT6fD/v27YMgCBNmZMygYsEnDYfD8Hq9htfrNcLhMI1EIgYAarPZqMvlIm63m/N4PJzdbieUUhrjRI+JZyKRiFFZWTmakpKC733veymSJCEUCk1oSJRSwpzcmY4x0ZYT7yl0Xce//Mu/SHV1dUptbW00MzOT83g8XAwisb6PsK2KLZxgMIjR0VH4/X4Eg0GoqgpJkkzk3eVyQZZlM6NjSUF8XOVwOLBz504UFBTg+9//Prd161aN47hCALcD+NnftGdasWJFrmEYj4fDYfv06dPJvffeSyRJwr59+3DixAnY7XbEtQ6ZF5+h3/39/cbRo0eN8vJy9dixY1pnZ6c2ODiohkIh3ev1at3d3Upra2u0sbEx3N7eHhkdHdUopdTpdHKSJHGGYVDDMKgkSeT48eP+EydOBL/73e8Wr1q1CoFAIGGgHQ+3xAXwxPJzVq/EzktVVcRKIdLOnTtDPM+T3NxcPnbDWVxPYpx4EksS0NTUhJqaGhw7dgydnZ0YGRmBz+fDwMAATp06hZMnT2JwcBCEEHg8HjNOSmTUrFRUV1eHCy+8EF6vl3zyySew2+0z8/Pzf9/V1RX8m/VMqqreJAhCps/nUy+//HLe6XRiYGAANTU1ZpAZD94xl97b20uPHj2qnzp1Spdl2Zg7dy43f/5826RJk7isrCw4nU4zJunr60NbW5tWX18fPnr0aKCurs6XkZHBz5gxw1FSUmKXJInz+/3qiRMnvCtWrHBdcskl8Pv9hOd5OlGZZiI4YqLnztaswPM8AoEAzj//fLz99ttiY2NjdOrUqUJycjLPvKhhGOjr66OZmZlcd3c3amtrSX9/P3JycnDppZdixowZyM3NhcPhQCgUMoXMYnqdaGpqwpIlS5CWlgZG4Ul0HMFgENu3b8e1115LduzYoQPIoZReD+CXf7PGRCm9OhKJ0IKCAnL++ecDAGpqahAIBMxYKT7t13UdDQ0NRk1NjU4p1Tds2CBceuml8qxZs+ByuUxKCstYBEHAnDlzwPO8GA6Hxa6uLve+ffv0bdu29X388cdDra2tUllZWUpPT0/Y7/dHr7vuusmSJEFRFJooaLV4IRofzMa2vTHPTUQdTlT60TQNSUlJ+OpXv+p64IEH+js6OpSUlBQbQ9Rj265x8OBBo6urC5Ik8bfeeit38cUXo6CgwIyPrB04AMjAwAD27t1LX3zxRWzfvh2rVq1CSUkJFEUZU3tkhu5wOFBdXY25c+di/fr15I033qBJSUmbmTH9zW1zZWVlqziOu8fv99PLLruMXHTRRWRkZATvv//+uIvMgkxd11FVVaVXVVXphYWFuP/+++UtW7ZwOTk5UFUVoVCIqKpKWNBsGAZUVYWiKCQSicAwDJqSkoJFixZx69evd+fk5KRWV1cPHT9+fKSvry80f/785FtvvTVJUZSEOk5nysosWxydqFh8NmIei4VycnLw8ccfR7u7u9XCwkIppsBCOY4jsiyjtrZWS0tLI/fff79w9dVXw2azIRwOmxwvVVWJqqokGo2SaDQKWZYxb948rF+/HuFwGDt37kRycjKSk5NNBkM8dKJpGsLhMObNm0c+/PBDKopidmFh4f7Ozs427m/QK20CwNvtdmPt2rUEAE6cOIGhoaExTAB2oqqqoqKiQq+rq9PPP/987sknn5RWrFgBn8+HYDBolj/iu3yt4vEsc/J6vZAkCddccw157rnnJp933nmZ4XBYveqqq/KsHvFsNz/OK42BJVgPnSzLcDgccDqdcDqdcDgcZnqfqPtFVVWkpKSgrKzMMTIyooyOjmoxjI1GIhHDbrfD4/HQZcuW8WvXrsXQ0BCY8VvQeMp+Z4G23++H0+nED37wA3LHHXeQQ4cOYWRkZExyYUXN7XY7WltbIUkSJk2apCuKQgBc8DfpmfLz838ajUbzioqK6B133EF4nseHH34Ir9drFkeZ2+V5HkePHtWPHTumXXjhhfyPf/xjgcUFFmScnCk4ThTbRCIRJCcnY9WqVY5zzjkne+7cuWOmGUy0HZ3JuFgDptPpRCQSwenTp5kAK1pbWzE8PAxBEJCamgqbzWYWh62sgRj9WPjggw+8sixzmZmZIjsGWZaJoii0srJSXblypZSammoabiKPybDU2AIlkUgEy5cvRyQSwb59+zB58uSERs0WsM1mAyEEJ06c4ERRJF1dXc/9TcVMy5Yty9M0bUYgEKBz5swhLpeLnD59mvb09JhipeziiqKIlpYWo7a2Vl+6dCn3ox/9SOA4DtFo1PQ2E6TdxPK3hIE0z/OIRqMAgLlz55JoNDoO3DwT/+nTlxIzOOY4Dm63G6dOncKOHTvCBw8e7Orq6goEg0FV13VqGAZEURRycnJcs2bNSjv//PPTysrKwPM8FEUxvaqqqpg0aRJycnL4oaGhqKZpdo7jSKxgS9PS0ojX69UqKipw7bXXIhwOxxerx5WSrOfi8/lwxx13oLu7G6dOnUJxcTETTxvzGaIoore3F9nZ2QQAdF2fsWjRonThf9h4plBK5wmCMJcQUqRp2lSO45IkSTIWLFhAANCmpiaEw2GTXsJwFL/fT2tra/Xk5GTj7rvvttntdgSDQdOlx7MDJsimiIlUxoLk+IscDofp2bxPIuYmpZQYhgFZlqmmaXj66aejr732WsPg4GBYkiTeZrPxDodDsPKk+vv7A6dPn/a99957p84555zcu+++O6egoMDEtBRFQUpKCvLy8qTjx48HAVCe50mMkstwM7pv377IxRdfbLNu4+w7LMowVvYCtT5/++234+c//7nZLhafMLDMTpIkJCcnG+FwOFWW5WlfujFdeumlyQMDA9dSSr+uadpcXdeTGGUjtpXogiCQuXPnAgBaWlrMrMISdNOmpiZjYGBAv/vuu+Vp06bB5/NZ62kMf6GWIJJaDCahF4nbCqlF7IskQsfPEHxTXdeJ3W7HwMAAfvKTn7SXl5f3OJ1OISUlxWYYBlUURVdV1TAMg3IcR9iP2+3mOI7jDx061P2d73wn8PDDD08tKCgwPaUkSSgqKrJVVVV5g8GglpycLDIPKEkSl5SUROrr66MDAwM2p9MJn89nLkCXywWXy4WYNxlX3I4BtMjPz8cFF1yAiooKJCUljYudOI5j2ulEFEU9Eolwmqblf6nGtHTp0tv6+vru1jRtKrPszMxMtbCwEOnp6XC73YQQwkuShJycHMpANlmWrauejo6O0sbGRq20tJRccsklhK3c+DKIxYgQb0jxiPVE3KO/MHkw/7Xb7XRgYAD33HPPyYaGhuH09HSboii61+uNyrLMp6WlOXJychwej0emlKKvry/Y3d0d8Pv9iqZpisvlktva2kYfeeSRjl//+tcFTDuTEILs7GxZ13U9FArpycnJoqWeSD0eD+nq6lL37NljTJ06lfP7/SYVhdGES0pKYLfboev6OJiDGdSqVavQ1taGYDA4zrsxuCASiYDneUbfyf1SjKmsrGwmx3H/1zCMc71eLzIyMpQNGzZwa9euJbNmzeIZ99myzRAAjNMMS/0Moiiiu7vbCAaDxqWXXmpLTk5G7IIRAIzAdjZyE00EGhqGQSxxFonDkSgAYv18a4Af+xzKEoNIJIIHHnigraGhYTg5OVkeHh6OpKSk2K688srJa9asSZ48eTLYNCld1xGJROD1etHS0oKDBw8OHzp0qGt0dDQaCoUUJvPDjsXlcgm6ruuapumx7zSNyeVyEUVR9ObmZmXGjBk2VodjRtDf3w+/349Zs2ZRFjrELyJd15GUlISioiLU1taaxhgfH8aOi8TuTZbwJRjSpYSQZwKBQLrD4VBvvvlmcvXVVwuFhYXma0KhEEZHRzE0NIRQKARd16nL5UJbW5tJ9GI3UdM0dHV16dnZ2Vi5ciWJRqPWNNYaBo3L4OKJAVb2YWy10UTlDmY0Z4rBrH93OBx47LHH/JWVlX0pKSmy1+uNrl69uuAb3/hG3vTp06HrukmIY9uXKIrIyspCUVER1q5dm9re3p567NgxlJaWQpZlE0gEwLpZDMaQYefECrM8zxsjIyO6FXxkCyIGvJKTJ09i9uzZZp3TcnEI2+JLSkpw9OhRTISPMXgltoA8X6gxLV++/HpK6fOjo6P8zJkzlR/84AfCwoULTatuampCfX09enp64PP5zLjJenIx2WVraYEODQ0Zy5cv53Nycqzw/zhDiOcw6bpO2Geyi8h6yuL5TNYt7ixduZRtk7qugzEbXn/99ZNJSUliMBhUt27dOue2225zAoDP5xvDwLR+vqZp8Pl8AICsrCwUFxcjGo0SRVFofMGY4ziDnQOLu2L/QpZlDA8Pq1YpRSvWJYoiAoEAent7UVRUNEauka00wzCQlpbGtsNxtch4FT4AgvAFxkfXUEqf93q9uPjii7X7779fcLvdAD4lrB84cADt7e2m6hvrOUu0P8cCRhoTgzeCwaA+b948m91uj09daYKyBGUBp91up4IgoKurC0NDQxAEAVlZWUhPT0cMFaYWL0cTxU0T1disW+vLL7/cGwqFNEEQuK1bt86544477H6/nxiGQa3M0ETaAlYFuxjMQa3bMcdx6Ovri4bDYSMSiWgxaR4uGo0azHh4nqeRSERngbdhGOPQd47jMDg4iLy8vAn1FJxOJ2w2mzkSJJHyi8VbGcIXZEhLATzr9XrJ5Zdfbjz00EMcK1h+8MEHqK6uNlFgK/5h3X7ijYndy0AgYMiyTEtKSgjzKPHvT9CSZCK3r7766nBVVVXv6OhoRFVVw+FwiMuWLcu94YYbMqdMmUL8fj+1eg3GEbeyFON5VOx7ZFlGa2srKisre1VVpevXry+87bbb7H6/H7E0HhN5u0QGyl5vfa2qqsjPz5cLCgrEqqqqwcHBQWXq1KlJbrdbNAyD6rpuEEIMTdOMBAq/Y6SomQi/NXayXjebzQZJksY8F++ZmVejlIY+93LKmjVrkimlL/j9fsfatWv1Bx54gON5Hn19fXjhhRdQUVFhKqnFt01bmYFxiDNlwXUgEDBEUUR6erp5Ime6KZRSOJ1OfPzxx7jtttuq33jjjZODg4PhcDisFRQUJK1evTq/p6cncMstt3yybds2xAYSJgzCJ/oeZvSyLOP48eMYHh6OFBcXu++8884sRmQ7E7sgkShYovPgOA7hcBjr1q3D7373u9Kvf/3rk06fPu3fvXt3b0NDg595cCPG9LNcW2Ip3BJroM2Oz9rZwxYM2y0SEefYeyxbcP/n7pnC4fBDkUhkRl5ennL//fcLMVoIXn75ZQwNDcHtdieUs7HOLmH/KooC1gbE9rBoNEpFUaRWKsqZJAQlSUJTUxMefvjh46qq6ikpKbaRkZHImjVrCh555JE8j8dDAKRt374d//Zv/3aEUrp406ZNCAQCiMvsaLzHszIFGB/7+PHjQ5FIBDfddNOsgoICjI6OjrshiWKwRAaWSAyDtVl5PB5861vfcpSWls766U9/2lhTUzMqSRLn8XgkwzAMjuOo1UhiBkXjr7n1Gk4kvjERaMuMMfb8EPc5B9xLDMO4XVVV7Xvf+x6fmZmJ0dFR/OlPf8LQ0NAYzjZTKLGqlNhsNrMoG8vaoCgKtW53hBDKsogzIdHMnfM8j+eff75/YGAgZLfbBU3TDLfbLd111115Ho+HMMD0oosuwhVXXDH94YcfrmxpaYEsyywAoxOUTBISyHw+X3TKlCnutWvXjsFoEmV+8dBEPH8ovnOElTF6e3uhqiqGh4dxwQUX4Be/+MX0jIwMoampKdDS0hLkOA52u51jAbplARDrTmBtBk1kyEzsIpFuVUyzAIqiMF56x+dqTJTSH0SjUWnDhg103bp1hHXbnjp1yqytWW8Cu0ChUIjFGjh48CAOHDiAyspK9PT0WPva6KcpgwBVVQ1r3SlRIBtDhNHT04Pjx48P2u12TtM0Q1VVIy0tzZ6WlkbYSqeUEl3XyYoVK5KGh4e1F198cSAOBKVWNROm+xRvVLFSRO7DDz88SxTFMVnSBJlgQl6UpmkmCzISieDNN9/Um5qaYBgG3nzzTX9FRYUhSRIEQcDIyAhWrlyJf/3Xf50SjUa1oaEhRdd1Q5KkhAvMui2zecTx8RIz3kgkAkVRxkEC7D6Ew2GqqqpgGIYCoPVzM6ZzzjlnXjQavUiSJH3Lli0cANTV1eHYsWNwu91gXCLWLh0zCjQ2NmL37t3Yu3cvjh49ir6+PoTDYQwPD8Pr9ZqpPzuJmCKcMTQ0NI6DHR+AS5KEtrY2DA4OhiRJ4mMXgfT09AR6e3vNsgBLfbu6umC321FZWdnb3t5uLgBmDIIgwOFwYGRkBD09PWO0x1lAW1xcjClTpkDTtDFgayLyfqJkQZIk1NfX4w9/+MNIKBRCc3Mz6urqBimlTJU3NGnSJM7qDZmHWrx4cUowGFQppTQ1NVW0wirx10fXdZMDnqgFiuM4eL1eM5OL96ocxyEQCNDY9ek5cuTIyc8tZiKEXKcoinTuuecqs2fPFiKRCA4cOABBEMyDYXs0z/MYHBzEkSNHMDQ0hNLSUlx11VWYPXs2GLV2YGAA9913Hx0eHqaFhYVmoOh2u7lIJEI7OzuxYsWKhKxF62N4eBiKouh2u52PrU6i6zr9zW9+0/GrX/0q3+PxAPh0Ovgbb7xxMqaVGY61aCNGngPP8wiFQvjNb34ztHfv3o5IJKIvW7Ys58c//nFufIbEtld2k+x2OxijgbV6x2susf8Hg0FUV1eHsrKynBzH4dChQ/7s7GxnTk4O3nrrrUhJSYlnxowZCTUIrr766ozKyspRwzCQmZkpxntu6788zyM3N3ccl97qfdjYEIfDEb9dQtd1DA8PM6ij5nOj7a5Zs8YWiUQu4TgOF154IQcAR48exenTp8c0BjLK6ODgIPbs2QO3243vf//7WLduHVJSUswVTAhBVlYWkpKSMDAwQAsLCwkD1NxuNxEEgTY2NkYVRZHPpmMUX16JIdTCwYMHu7Zu3Rq+6KKLJkWjUX3btm0t3d3dAbvdLoTDYbW9vT3AcZzLwhfCfffd13Xw4MGu2267bV5hYaHMPG18uYGxP3meh9PpZAotQ5s3b07Lzc01DSH+BsmyjLq6OnR2dvqvvPLKrK6uLvT19QUvv/zybK/Xi46ODv/FF1+c4XA4zKnn7DsjkQjmzZuH6dOnu2tra/2qqlLr4rUuNkVRUFxcbOoYTKSD3tnZOc4rMa8VDAYxMjJCY3HZx5+bMUWj0UWRSGRyRkaGsXz5ci5Gox0TI7FAW1EUlJeXY9q0aXjggQcwbdo0BAIBE/n9/+BUAbm5uaipqaFz5swhLJZwOBzE4/FwNTU1Ia/XK7OgfiLt7bS0NIiiyFlZj5RSuFwusbm5efSXv/zlEWZgkiRxLKUOBoOqdQvTdR1z587N+PrXv563cuVKswwSCoUSZjl2ux2qquLRRx/1v/zyyyeCwSAdGhqKPPzww3ln4lBVV1dH0tPTHZMnT8bevXuRmZnpKC0thaIouOiiizKmTp1qzsSzxkJs25o5c6a7qqrK39nZGVFV1WVllzK6cm5uLkpKSsyFG29IgiDA6/Wiu7t7XIDOttaBgQEaDodFnuc1juM+AoDPJWYSBGGlruvCzJkztbS0NJw+fRrd3d2QZRlW3rUgCKiqqkJBQQH+8z//E5MmTcLo6KjpdhkJDAA8Hg/mzp1LfD4fHR4eNmIZHhVFkWRnZwunTp1Sjh49Oq5bxYokK4qCgoICpKen241Pq7hWj0VtNhufnJwsp6SkyMzg2GfIssyzm8yIaTfffLO0YMECDAwMwOfzwe/3j8mUWFzk8XjQ0dGBe+655/Tvfve7OrvdLmRnZ8v79+/v3Ldv37imCOvWkZ6ebluzZo3b4XBg6dKluPbaa5Ni2RkWL14MFlhPNFwxLy/PbhgGHR4eVtiWyoyIUori4mLMmDFjQjiAlVsaGhpMWMOaAbLj7u3tNWLvP1xRUVH1uRmTrusLVVXF1KlTCQA0NjaO6b9naSirWP/oRz9CcnIyAoGA+RqrOASlFC0tLeYkpPb2dsOaceTk5IgAsG3btkB8b7217KCqKvLy8jBlypSUaDSqcxxHrJkJQ4w1TTNYU2PsGEhmZqbDin1RSjE6OmrqG1gNn73O7XaD53m88sor+MY3vlFbWVnZm5qaamN1M13X6d69e/snamkXBAEXXnihOZHT7XaDxXSMTjyRCAc7Ro/Hw0mShHA4rKuqCkEQYLfbkZ+fjwULFmDKlCkT4lpsUQeDQRw9etTcvuM9qN/vR29vLwRBIISQV02n8nkYk6ZpxTF9HwIAnZ2d44A3nufR1NSEzZs3Y8aMGRgZGRnD6WZ7u8/nQ0tLC/x+PzweD0pKSkhvb6/u8/mI2+0mqqoaHo+Hy83NFffv3+87fPiwa/ny5fD5fGPEI9jFEUURl112Wf6hQ4e6LRyniXhNLKPiZ86cKVjbsOMVTqzlCYfDAV3X6ZEjR/C73/2u49ChQ12EECKKIuf3+5VYrMg7nU7xxIkTQ0NDQ5ms/SpROYj9PV71JF57MxFGxYZcE0LIzJkzkZKSYo7WYIXtidrUGYp/8OBBDA4OjtNyYHBLZ2cnVRRFEASh3zAM05i4zyH4dlFKU2NENxiGgYGBAZOnwzyK3+9HVlYWNmzYgGAwOGYvZisiFAqhsbERfr8fPM8jKSkJCxYs4ILBIJqbm/VYly14nieTJ0+WKaX47W9/OxQIBMxpTPGxRDAYxPLly7FmzZqC0dFRRRAEbiKGpCAIXCAQUBYtWpQ9a9ascbFJPNbkdrtBCMGhQ4fwve99r/P2228vP3ToUFdJSUny4sWLs5cvX553zjnn5M2cOTM9KSlJikaj2sjISKS3t9fcrhIh3tb0O877jOsIjvcy4XCYLQjO4/EQp9PJRFHNTHIiQ7LZbGhvbzd1QeO3YkEQ4Pf7cfr0aUOSJALgpaqqqp7PzTPZ7XZ7IBCQY16AeL1esxRh5WEHg0GsW7cOGRkZ8Pl8SFT07OjoQDgcNg0j1p/FHThwgOvs7FQLCgpIZmYmpyiKkZ6eLkydOtVWVVUVfPLJJx333HOP3UrdjfdQ3/nOd3J6enoC9fX1Qx6PR2ZxE6uo8zzPhcNhzePxyLfeemu+tQPGyiNii6S7uxuHDh2iH374YfuRI0d6BUEgK1euzJs/f35mdna27HK5xoxfDQQCqKqqGvzggw/aBgcHx+glnImREGf0jHpMWINDPLbW1dUVJoSQ5ORkQZIkalXwPUOYAlmWwfoTWYYafzyCIKC5uZmGQiFeluWAYRhPjnn+TAd/ww035AmC8BPDMCYZhvHUSy+99HL8a1RVNQghBqvT+Hw+WPWM2MGmpqZiyZIlsDYyWgNHxjS07tOGYSApKQlr1qwR/uu//kttbGzUkpKSxFg8RKdPn273+/3qyy+/3JeVlVWwZcsWnn2/1euwwTb/8R//MfXRRx9N2rNnz2lN0wxZlnlCCNE0zYhEImpeXp7zvvvum1NaWopgMGj2sTFtyvr6etTV1RmffPJJb2y7CmuaZpSWlqZedNFFk/Lz8wUWSLP4xgJHYMWKFekfffTRaa/Xe9bZdWcaApSodYkBsI2NjX5VVZGdnS3bbDYT9J3ImJhH8nq9eP311zEwMDBOiY9tf729vWhvbzdsNpuo6/pjVVVVLZ/ZmARB+E+73f7VGCtwzfXXX9/xu9/9bn9cvBTkOC4c28poOBwmjB1pNYqUlBSkpaUl1HpkxsQMLd7IFi9ezJ08eVKsra1VmpqatFg8QwVBILNnz3aGw2HtP//zP9tDoVD+9ddfL8WvVlZtT0pKwkMPPZT10UcfZb3//vvd7e3tPl3XaWZmpmPWrFnpl1xyiTM/P9+sqTFD8vl8+PGPf9xeV1c3GAgE1Fi2J3AcR5YsWZJz5ZVXFrHygxUAtHpHTdPYMGjeGvN8lmbOCZ4b004lyzLa2trQ3NwckCSJlJaWumRZHieIFg9cOhwOdHR04L333kN/f/84RJzFb+FwGA0NDQbP8yKltJlS+stx9nKWWtusaDSq6rqu8jzv4Hn+EQArrK/Zu3dvZMWKFYOqqqKrqwu5ubljqCHsgFwu1xkr5kzWZSIJmk2bNknd3d1aU1OTSggxpk+fLsa8C+fxeKShoSGlu7s7wnGcFE+nsKLThBCsXbsWa9asyfV6vbmMosKAQGZI1sbHhoYGHDhwoCc5OVn0eDxy7OJqhYWFSZdeemkRAEauP6MBxDppCYtHzqQ3cBb+OrG+lxEMP/74Y3V4eFjNyMiwLV68mA+Hw+OwN+sMmXA4jH379uHQoUPm1PNE5ReO41BbW0tHR0chy7JhGMa/VlVVjZsidcYA3DCM1ziOEwHwhmFEZVlefvPNN9+S4KV1hBAcO3aMRqPRcUDXRHNE4vfjWHA4hqPNBESTkpJwxRVX2B0OB9fS0qKePn1ak2WZP3nyZLS5uTmyevXq1Pvuu88z0SAcaz8dm+nmcDjAYhu/359QvEvXdRQXFyM/P98Z+92IRqO6zWYTLr/88mkMnEyk1RS/INjNzczMNCnEiOsyPhOdxho7xdNSBgYGsGPHjl5KKZk2bZprxowZJiwgyzJsNhscDgeYbnlVVRX++Mc/0t27d1OG1ieCCwRBQGNjI7q6unSbzSYYhvEfhw8ffjfROZ6xPby2tnbP3Llzz5EkaVqsMixQSmctWLDg+erqaoW9Li8vL4njuCsikYixYMEC7tSpU/HQAdxuN2bPnj3hheY4DgMDA9A0jSSqdmuahuzsbJKdnS02Njaqp0+fVkZGRrRTp05FUlJSuP/zf/5PhsfjoezGMpoKMxB2wWJqKXA4HJBleYx4eyKKiKZpSElJwdGjR/WmpqZRh8MhKoqiL1iwIGvx4sWe+I7XiR6xlDrS1NQ0vHnz5ixLh3J8F8yEGV6i51knySuvvKLu2rVrQJZlIS8vzxEIBGz9/f1kaGgI/f396OzsxIkTJ1BRUUH37dtn1NXV0VAoRGRZJhOxVGVZRnNzM06ePKnJsizpur79yJEjN07oEM52EVwu13WhUOhdnueXaJoWliRpsqZptwH4leWkdnEc19/f359RU1NjOJ1OYs3Y2BbDPJaiKMxbEY7jKNvzU1JSEJOESSiPFwgEMG3aNG7Lli1J77zzTqCvry8KAJs3b84sLi6mDLFlXiASiSA9PR2NjY0oLy+PfPWrX7X19fXhnXfeGbziiivSWafIROq8rNWFEIIrr7wyt7y8vEfXdYPneW7u3LkZiTxuojFhDEM7ffq0Lz8/3x3jnCdS+D0rnTfe47vdblRXV+P3v/99e6wfT05NTRVra2uD+FTAnou1kJMYy5IIgsAxI0qExDMvfuLECTQ3N2uyLEuGYXw8MjJyzZmO56xL6vHHHx/Qdf0KXddPchxn1zRNpZTetnnzZid7TUVFRR/P87sAkF27dulWrhHj/gwODqKmpgadnZ3QNA1Op5NlSebKLCwsTKhVaa0JRaNRTJkyhaxevdoeDoeRnZ0trV+/nmctT8yj7Nixw/jggw80TdNw5MgRxefzaZqmkerqaj0nJ8eZl5c3Tls7wU2lhBASDofJ0qVLce655xYMDAwoLpdLTEtLk1mR9LMEzYqioK6ubvCcc87JZ7HJmUTuJ2qpsoYAsizD7/fjV7/6Vaff79cJIVxRUZFDEATObrdzTqeTl2WZkySJk2WZs9vtHCPNJRoJyxIONuGgqamJGVIVgKuam5t9ZwxVbrzxRpsgCFcKgpCm6/r2Z5555mT8i1544YWOLVu2XMnz/C5JkjKi0WiBpmkeAEHLVvSEJElX9vX1kY6ODhQVFSEajaKrqwuDg4Pw+XzYtWuX2R+2evVqXHLJJTQ7O5sEAgGT9D9t2jScOHECqqqOQcitcD6lFN3d3Xo0GiXTp0+3Z2dnIxgMmgbX3t6O9vb20KpVq1ynT59GV1dX6Pzzz0/2er20ra1tdPXq1WlutxuJtqgEM+UopZQoioJvfOMbmceOHRvwer1RlpUmMvx472G323H06NGAqqr6+eefLzCVls/igRIJT1i6TvCzn/1ssKGhIWCz2cSioiJHRkaGpGka5TiOmwjHYgL3rBeQxayEEPT19aG+vt7w+/2w2WySrutvcBx3S3l5+VmHHXKCIDwhy/LveJ5/jBBSfvPNN3830QtfeOGFY4ZhbNI07R0AP/yv//qvMUOGDx06dFDTtBdEURRPnjyp9/T0oK6uDrW1tTh58iRCoRAkSYKmaTh27BieeOIJ3Hnnnfjoo49MCRlN05Camop58+YhNTV1zABC9v+YaBWGh4cNVVVJUVGRFH/hjx07xlBy1NTUULvdLkybNg1NTU1ISkqSZ8yYgXivkuj/rPmScZFyc3Px/e9/f1YkEtHffffdFlajS7RVWLe32KCg1q9//eszmQCZFdG2tlOdbfavruvmWPuf//znIzt37uy32WxCenq6raioyBFTtrMG9+ZPIs4So+56vV7U1tbSqqoqPRQKCbIsC5qm/erw4cNf/SyGBAD8ggUL/mAYBtU+zeddoiheMH/+/HPnzp17oqamZozB1NTUdH3yyScvV1dXH0r0YUVFRRWapl0BIL2vr0/3er2E4zjccMMNuOeee3Drrbfi4osvxtSpU9Hd3Y3GxkYcOHAAM2bMwNSpU83Ktt1uR0ZGhrkVMnqpw+FAcnIycnJycODAAaOjo0O/4IIL7HPmzCGKokAURQwNDWHPnj2h2bNnO6dMmYLKykq1tLTUPm3aNIiiiGnTpkmxbCohFzsRnmNlIUyePBmTJk3Ke+WVV5qHh4e1OXPmJLNFEq8EJ8syBEHAiy++2FxYWJj0rW99y5NIF2GiiZrxsZeu63A6nQgEAvjpT386tHPnzl6XyyVxHMeXlpa6XS6XwH36IJbxGuP+5XmeMPWU4eFhNDc3Gw0NDfrw8LAYA3LrdF3fWlVV9X//kmoIP3/+/PU2m21KbHVplFJNEIQpAK6bP3++XF1d/dFn/bDOzs5gfn7+EULI5YQQOyGEPvTQQ9xNN91EsrOz4XQ6kZqaijlz5uCCCy5AS0uLqfy6Zs0aVjA1V7rb7UZ6ejoyMjKQmZmJjIwMZGRkwOFw4P3339fb2tr0RYsWSfPnzyes7hQjwYuLFi2Cy+XCpEmT+JKSElBKkZycjKSkJDOV/yya3FaDYyDqtGnTMG/evLwdO3Z0Hzp0qN/j8bjS09NFlnozI+rq6tJeeumlxvT0dMdPfvKTfObFzlRCiR+OyIRfZVmGy+XCiRMncN99952urKwccbvdMqWUA8ANDg7qPp+PxpiehBBiBtyUUqJpGolGoyQQCJDh4WGcPn2anjx50mhtbYXX6xV4nucJIUOU0l/Ksnx7RUXFsb+Ybbt169ZJPM8/AeACQRC4WCEzQikloijKiqJs8/v9m1977bXPPOp8yZIllT6fb9H111+v/eAHP+BVVaXRaNTM4gzDQHJyMnp7e8lNN91EW1payL/+67/i1ltvpbEskFiJ/ImaHR988EHt7bffDl999dW2+++/X4w1OppxEzPK+HltiUbSn6FLd8JalsvlwvDwMJ555pnRDz/88JTT6RSLioo8DodDiEajen9/f8jr9UbXr19ffMstt7hYWedMMALD1awGGYlE0NXVhfb2drS1tamvv/56e29vb1SWZVFVVcJxHB9LpHiO43hBEHie53lBEHhBEHhCCEcI4TVNI4qicLqu8zGIh1gWVDOAVzmOe7qiouLUX81re/7551sBbLj55pvLFEW5hhByiSAIk2MYS8ThcFxMCLkMwIuf5QNXr15dGgwG5yQlJdErr7ySAKCKooxjJPb19ZHc3FxcfvnlePTRR1FZWYnrr7+efBo3jheIsG4FdrsdeXl5PCGEq6+v14aGhkTriDA2SdJK55iIJ54IX7HaFBIoqjDOj9PpxL333pt83XXXza+pqSGNjY3e4eHhcEpKim3JkiU5K1as4EpKShAIBJAIGIzvWpZlGbIsw+v14vjx46iuro7U1NQM1NXVjfb39+uGYfBut5tLT0+3OxwOURAEnnkmRVHg8/lo7LsoIYTGOnKZuhuJgZA8x3EhSmmTruufcBz3tt1u37V3797Af5skyf7z7LPPHgZw+LbbbnvQMIw1hJDrAZwbiUR8hmG0fNYPNAxjtqZp0owZM7SioiKOFT3jb6IkSTQSiWDGjBnE7XbTvr4+DAwMkNgUSGoJTGkC/hRmzZpF7HY719zcbHzyySdYt26dyUb4LDqTiTK3BH+nCYzLSpWlfr8fGRkZuPjii+nGjRuTACQx78NEV8/EH+I4Di6XC7quo6WlBXv37o3s2bPn9LFjx7yKonDZ2dnSvHnz0mfPnp06ffp0OTs7G8nJyXC73Wb9M9a/hkAgwGJRWldXp5w4cUJn7WIOh4MjhHQLgvAgpXTnwYMHuz/vBtxxoOVvf/tbL4C3Abx92223FWqapj3//POf+YsppYW6riM7O5vabDYmkTOu8GmpWNNY2wwCgQDNyspivBs6EWbj9/sxZ84clJaWiseOHVNee+216PLly2VrYfezTsA8U0NCAuCUxmdejNGZSIx9IrUTq5JbJBLBwYMH8fbbb/d8/PHHncPDw7SgoMB+zTXXTFm1alXKjBkzkJSUhEgkgtHRUYyOjqKnpwd+vx+appnezOFwIC0tDVOmTMHKlSsJz/PyyMgI9u7di9dee00/evQoFUWxkOO4H6uqqgP4/RduTHGGdfqvaHlyiaKI3NxcylZn/FRJ6yMYDELTNNhsNlPyzipxHH8jWOMmpRQzZszg6+rq+MrKSv0Pf/iD8c1vfpNjEs9nonL8JQ9rdX4iqms8C3Oiwi3bzpxOJ1RVxe7du/Hqq6+2HzhwoJdSSs4555zsyy67rHDhwoUQBAEdHR3Yu3cvPXXqVNDn82mKolCWrVlwIvNfQgiRZZlzu91cfn6+MGfOHGzcuBGXXXYZv2PHDjz66KO0o6OjODk5+XdlZWWzDh8+/P0vzZj+moeqqhxT1rBiP6wGZo2FeJ5HR0cHIpEI7HY7AoEAUlJSxvRpMUNk3iYYDKKhoQGHDh3C6OgosrOz+dHRUfz+97+P5uXl2S+++GJzMvfZ0v6zVeqt5Y44BblxGd/ZBuuwjhVRFHH48GG89NJLp/fu3dvLcRzZuHFjyTXXXJNZXFyM06dPY9u2bWpbW1sgEokYoihykiRxgiDwkiQRK+BoETk1/24YBnw+H44ePapVV1eTt99+m1uyZAm58MILsXTpUvLAAw9ou3fvpsnJyf+2ePFitbKy8v7P695/rjrgmzZtmqUoyjcikUjJwoULjSlTpnCBQMDU+WEVe3ahRVHEH/7wB3L69GlkZGSgu7sbDQ0N6O3tBWNs+nw+dHd3o6WlBdXV1dizZw/Ky8vh8/ngcDiI2+0mvb29NBqN4uOPP1ZdLpe4aNEiMxCfqEj6Wba7ROPgEz1/pu9gCYDb7UZHRwcef/zx4ccee6yuubk5uH79+oIf//jH0zds2OBsbm7GG2+84S0vLw+Mjo6qoijyNpuN5z91eWM8kUWIYgySzf7GcRzheZ4TRZGLRCKor68nR44cQX5+PrZu3Uq6urrIJ598otvt9vOys7OP9PT0NH0e9/+/PfD5qquuSu3r69saCoW+Hg6H5xqGIQAwWPdGSkoK8vPzUVZWhpUrV5pi5RzH4eTJk+Sb3/wmdF2n8+fPR0pKCiKRiEkbZaxLq/QOmxVnDWAHBwdpU1OTriiKHo1Gja985SvC7bffLhYXFyMcDpvxzET6SGcxMBLHJZqQERkvEsHzPLXb7VAUBW+99RZ99tlnT7S2tkZXrFiRdueddxZNnToVFRUVKC8vHwkGg7rdbhdisAixyAUz+cMxwGO8R7IMkyYWdWDzOVY5uOSSS3Deeedh8+bNen19vWi32w8fPnx46f+4MS1duvSrPM8/Gg6HiwRBQEFBgTFt2jRaUlJCnE4ngsEgOjo60NjYiMbGRmiahnXr1uHGG2/E/Pnzce+99+JPf/oTCgoKsHDhwnFbE9sm45mJ1gCZzUM7ffo0ra+v13meN4LBoJ6dnY2vfvWrtgsuuIDk5eWZVFqrssjZYql4Y7JyreKPgX0eK3WwKZVtbW14/vnn+7dv396TlpYm3HHHHaXr16/njh8/jo8++sgbCAQ0h8MhxNqhLF9lHpxpTOzvVkNjf2fGY206sE4qZ9fR7/fjlls+paTdfPPN1G63cwDWHD58+OP/MWM655xzHgyHw/dHIhF85StfUbZs2cLNnTuXE+KUDZkIaE9PD/noo4/oiy++iMHBQWzatAkHDhxAKBTCwoULkZKSMobSm4iFmGjKJcdx6O3tRWtrqxGNRgkhxCCEaKqq0kgkomdlZZFly5aJ5557rjhr1iwkJyeb9TIGosbrjE80GTIeFWelHsaXUhTF3JJra2sDdXV1o62trYH+/n7toosuyvrmN7+ZoWka3nnnnWBvb2/E6XQKPM9zMW2uMWQ5ZjTWuXLWeMlae2OeyrrtJaoXWkW8vvnNb+L+++/Xa2pqRKfT+XB5efm//Y8YU1lZ2UOGYfxIEATte9/7Hi6//HKO0SwCgcAYoVOWHsuyTGw2G+3v78dTTz2FV155BSkpKRBFEdOnT0dGRoa5eiaaUxLPmAyFQujq6qLd3d0GAJHjuBDP82FFUZIURTE4jjN8Pp8uSZLhdDpRUFDAzZw5U5g5c6ZUWFiIgoICuN1uMHmaBKPnx8VBrCCtaRpGR0fR1dXFDCjU0NDgO336dGhgYCDK8zxRVZXa7Xb+rrvumrJ+/Xpu165d9MiRIyOSJPGyLHNWT2T53nFeyWJbpjeybmPxxjVRkyW7fl6vF5s2bcKJEyf0l156SfR4PNvKy8s3fenGtHz58mui0ejLgiAojz32GLd8+XJOURQEg8FxAa81vWYdtJIkweVykVdeeYX++te/NrtY3G63kZ6eTlNTUznW62X1Aow1oKoqAoEAHRgYoDHmgBSb4niUENKk6/qFgUBAvvXWW7mVK1di586dxu7du1Wfz2dEIhE91r1reDweJCUlkczMTD4nJ4fPzMwUkpOTebvdzsXkj83ziEajCIfDNBAIaMPDw2p/f7/S29sbGRkZUYPBoBYMBrXYiieSJBGbzcb7fD6tpKTEcd999+UKgoA33ngj4PV6NabGErd9jqGDWFJ/61ZFLIKtxPo+q/HFsxYSZbLhcBhTp04Fz/P6s88+Kzocjn0VFRVrvlRoYNWqVQWRSOTXiqIYDz74ILd8+XIuHA4jHA6bDX7WFcYCVgZAskLs6Ogoveaaa9De3o6XX34ZbrcbwWBQCAQC6OzshCiKmizLRoziYcoih8NhGo1Gia7rItvmBEEY0jTtP3mef80wjPeCwaDz8ssv17797W+D4ziEQiGur69PHBkZMYaGhrhAIGAoimJommYMDAwYfX19ak1NTVTTNEoIMWJDoKllXIbB+usopZTjOHMMRuyHczqdss1m43ieJ+Fw2BgaGtLOP//8jG9/+9ueyspK7N2712u323mHwyGy+XCJDMoSG1lnm4zxTrGtnXAcx2amEFVVxyjCseNjsVu83CBreLWQGPUvHWfSdf3BYDCY+bWvfU25+OKLhWg0aiLccQVVYl0R1m4R5okCgQCuu+467N271xgeHuZlWX7fMAzJMIyFkUjEw1RGJih/eAkhxyil2wRB+K/Dhw+3L1u27P/oul48bdo05d577xU4jsMbb7yBt956Cx6Ph2RkZHBpaWmcrus0HA4boVCIRiIRg/2wOSbMeFRVNdh8NkIIFUWRUXgpz/PEbreTGJOROBwOjuM40tjYGPL7/cY3vvGNgksuuUT405/+pLS2tkaSkpJES6AeH1iPMRxLMG96IEEQCMdxRFVV+P1++P1+BAIBhMNhEtMJNyUDWROAJElwOp1IT09HWlqauZAZB0tVVbS3t7NLO/qlGtOaNWsWj46Obs7JydHvuOMOXtd1BAKBMeJVViV/aw2LZTgx72LWkzIzM7F06VLjnXfeERwOR01FRcW/LViwYArHcSU8z+cDKKKUZsRWZUDX9W4ALYIg1JeXlzez71i0aFGOYRhbVFWlW7du5ZOTk3H8+HHs3r2boepEVVXC9DCdTifvdDoppZSjnz4Q43Sx6eF0ZGRE7+7uVln6lp2dLRQUFIixgiwRRZEJ1JPh4WEthg/RH/7whwVz5szB008/HQ4Gg0ZSUpKYgI05ZgaexZOz60gYcyISicDv92NwcNAYHR0lgUCAGIZBPnWS3LgWcha7RqNR+P1+9PX1weFwoLi4GKmpqeb98vl86OrqYsXnyi/VmFRVvSsajYrXXnutmpGRwY+OjiJOAX9cDCYIApqamrB//35Eo1HMmzcPS5YsgcfjwcjICAghyM/PJ7HSyWwAqK6ubo5RIj7zQ5bl1eFwOCs3N1dds2YNr6oqduzYYXarWqRlGAZDLVsKRWzUliAI5iSAlJQUwePxCE1NTUo0GqVdXV00LS0NmZmZPGN/iqKIYDBIKysrI7qu84899limLMt48sknQ5IkEVmW+fggOw5WIHFbHCRJIoZhYGRkBL29vXR4eBjhcJjous7FqCbEmoiwWJKNz2ACY9b6ZCgUQn19PUpLS5GRkQEA8Hq98Pl8fKxjZ++XZkyrVq0qCAQCm3Jzc+mmTZs4TdPACPzWtDNOqJRqmobCwkKsXbsW1dXV+OMf/4gnnngCl1xyCS699FIzrY4Fu8ZfnUUQslRRFDpjxgykpKSQhoYG2tLSAiZSmkD3kgWt1GpQVnljTdNocnIyP3v2bFtjY6Pq9/uNuro63eVy8TabjcQCc3ro0KFoJBLhf/WrX3kURcHLL78ccTgcvIXOSxKUWIgVOmHMx0gkQnt6etDb20u9Xi9i3pQjhJAYe9LsgWOwBKXUbCMzDAM9PT2orq5GJBIxxScY9aW1tRVJSUlwuVzo6+szKKUCpbQ+NTW15kszJsMwNkQikdQVK1aomZmZwvDw8LhZHonGbLEguaSkBKWlpbj00kvxzjvv4IknnsDhw4fx7//+72htbaWxMstfTYkwDCNP0zSSkZEBwzDQ1tZmekYrjmQNUBOk3sxbsXOjrJ42depUcuLECd3n8xnNzc3GokWLREVRaHl5udrb20seeeSRpKGhIezYsUNJSkriGWKfACMbk23FvCEikQh6enpod3c3gsEgdF3nBEHgJEkirFHU7XabZSlG/o8lNkQQBHPsfHp6OrZv344HHnjArHkyz8yEZwGgv7+fxq7Pqzt37gx+acakqupGjuPoypUr2Z5MBEGg8YDYRABjLLUGz/O47rrrUFZWhm9+85u4/fbb4fV6SaxP7sB/p77M5HM4jqOyLCMajZqCpCwgtWY3CTAYEgNcmXcilFIa6/zlJ0+ezDU2Nurd3d0oKSnBwMAA7ejo4H70ox85otEo3nvvPdXj8XCKojDMipwB6yEMIe/u7qZ9fX0IhUIcpZTIskxSU1ORmpqKpKQk2O12xAPBlqI5G6mKqqoqtLS0YP369bjooouQlZWFe+65B/39/WPax0ZHRzEyMgJN03ie58OCILzypRV6ly9fnhmNRh9yu93ub3zjG2A3ypLejgm+Eafkz4yM4UaBQAA5OTkoLS3FSy+9RBVFESRJGrbb7d9tb2//q9h+ubm58wkhawAYBQUF3O9+9zscPXoUAwMD5s/Q0JDZDiXL8piuEoZm9/f3o7a2Fq2trSQSiRCXy0VEUSQxHIyoqsoNDQ2R0dFRtLW14eabbxYLCwvJBx98YIRCIVJdXU1jk86J3W4nLpeLxBiOJFar43ieJ8FgkJw6dYqcPHmS9PX1cQA4j8dDcnNzSVFREfLy8uDxeEwjii8jsdTfMp7L1NA8evQoQqEQ1q1bh6VLl+Ljjz+Gz+cz28YikQjC4bAmCIJgGMazlZWVL3xpxjR58uQ5wWDwX4uLi/Wvfe1rhKXsicoM1q3OegHipxYFg0EUFhZiYGCAnDhxwnA6naJhGDs6Ojr+Kv5xZmbmkCAIN/r9fvH999/HyZMnCbt47Bg0TUMgEMDg4CBGRkZMSogkSWCzXerq6rBq1SqsXbsW9fX16OvrQ0ZGBgghJDYmlfj9fm5wcJCbP38+t2zZMvLRRx9hdHQUJ06cIKtXr+avvvpqvr+/n1RXV5O0tDTO4XAQAESSJBKNRsmpU6dIQ0MDGRwcJIIgkIyMDEyaNAn5+flISUmxzpSJV7kbs3hZqzsTnGDJEFNDGRoawtq1azFnzhx8+OGHVmENSgjhAYQ5jtvS3d099KXxmSilkzRNQ1pamuF0Onkm5j5B2YFa1UNsNpsJB1hVy1hKu2DBAmzbto1SSiVVVR9bsmRJLcdxvCiKJymluw8cOLD/s5yEJEmplNKooij2aDRq5OTkQNd1OBwOkxsViUQQCoUQCoUQCAQQCoUwMjKCvLw8JCcn4+TJk9i0aRN+/OMfQ5IkFBQU4Ic//CFCoRBSU1OhqipcLhfS09PBcRxWrlyJffv2QdM01NXVkY0bN+LBBx+EYRhYunQp2bJlC9ra2pCWlmY2BZw+fdrkjhcXFyM9Pd3MvFhVn4G8iaSdrZQYptCXkZExrhBus9lw+PBh8DyPa6+9Fvfffz+++93vsu3XEARB1HX9xcOHD5/8UslxiqIkAYDL5UKiVp1EzENBENDZ2cmaHjF9+nTzojINJubCNU3jIpGIoWnaPADzGPtSkqQHly1btovjuB8dPHjw0ETHt2LFivsMw/ix3+8XcnJyjK1bt5LVq1djcHAQ5eXlqKqqgqIoptqJqqoIh8Pw+Xzw+Xzwer0maW3r1q3m2CyPx2PGWNYCb1paGgoKCtDa2mqm2Lqu46qrrjJrk2yiZW9vLzo7O9HS0oJwOAyPx4Np06YhNTXV1FOwjsSwtlTFL1braFRRFNHZ2WmqmsQ3TTBI5MCBA7Db7bjssstw6tQp/PrXv6Yej0fUNK3bMIz78Tk/zmpMzIswXtBERhRPlWVdoh988AG6urowf/58XHvttSgqKoLX64WmaWhra4OmacjKysLMmTO1DRs20JGREUaCIyMjI1/xeDwrV6xY8f87ePDg03H0lyye55+MRqOXhUIhY9OmTca3vvUtkpubaxZknU4n7Ha7yRJg3tFms8HtdpvjHIaGhnDBBRegpKQEg4ODcLvd2LdvHyKRiCk/zVqVnE4nCCHw+/1g08HnzJlj6pnH1E7Q3d1tjvOwgoYMvLWKuVsNiLEsWHWfLTwrU2JgYACRSATFxcUmqh0fXhBCYLfbsXv3bqSnp+P2229HfX09du7cSZOSkgRCiBvA4JdqTIQQH8dxGB4eNrs/JqJpsP/ruo7MzExcc801uOyyy3DkyBE888wzuPnmm3H33XfjoosuQldXF3bt2gVKKb7+9a9j8+bNJvp5xRVX4NSpU3j66afV9957T3Q6nb9dvXp15r59+34Wo7/MA/BfkUhkht1uV77//e/zV1xxBQGAEydO4MMPP8Tx48fNFSrLMo3dRMKoJxzHIT09HUlJSRgeHsaqVatMCkw4HMbRo0eRkZExxpjivQOrAmzcuNGU8uN5Ho2NjRgeHkZKSgqKi4vHlDOsnoh9HuPJS5IEu92OgoICMmfOHEydOhV//OMfKRvKw4ytt7cXkyZNGsOiSJRVs2Tj7bffRl5eHh544AFy8uRJvbe3N1OSpGcAfOXzNKazBuAFBQUypfTWYDBIvvKVryA5OTmhDE18DY3FSrquY/Lkybj00kvR1dWFxx9/HCUlJXj99ddRWVkJj8cDwzCwfPlyfPDBB/jggw/gcrkwbdo0fOUrX+E4jqP79u0zOI5bl5eXV1dQUOAC8P7IyEhhcXGx8uijjwrnnnsu8fv9eOONN/DKK6+gq6sLsizDqjZi8bTEyuIcGBgAz/O46667AAAOhwNtbW14/fXXQQgxRbLiM1RRFBGNRtHW1obNmzejoKAAwWAQLpcLH330ESoqKrBgwQKzhGG9ZsyIQqEQBEHAlClTsGLFCqxbtw7r16/H6tWrMXv2bKSnp6O9vZ2cPn0aMSouOjs7QQhBYWHhmOJ6og5k9l2qquLUqVM499xzUVxcTLZt26aJojiloKAg3NnZeeDLNCY/gKv8fn9aSUmJMW/ePMIyg7OxFNmqiUaj0HUd5557Lo4ePYoXXngBHR0dsNvtKCoqgs/nw/DwMObNm4c333wTtbW1GBkZwaRJk7B8+XISjUZx8OBByLJ8PsdxNwQCgdTFixerv/71r4VJkybh6NGj+O1vf4uamhrTiOI5PRYu0JiaYWtrKxYuXIivfvWrCAaDkGUZO3fuxM6dO80RY36/39Q7YOcUDofR0tICnuexZcsWUwtSFEVs374dp06dQklJyTgEnud5k5S3YsUKfP3rX8cFF1yA2bNnIycnx/yOoaEhSJLENJKI3W4HpRRtbW0oKCgwJ6on0tCM91Zs8tPo6Cg2bdqEkZERUl5eTu12+zmTJk16o729ffBL2eYOHjzoX7p06ZuyLN/z5z//mX7lK18xTySRAkjckGQmi2wCbeeddx6qqqrMirbT6YSu69ixYwfY+PPe3l589NFHaGtrw6233opvf/vbpKWlhe7evTtVkiSce+652sMPP8zb7Xa88847ePvtt01F20RakawaH4/VsJrW4sWLTTYDpZQcO3YMNpuNTps2Df39/ejv78fw8LCJ/SiKYupfzp49G9nZ2YhEIuZz7e3tpjezYllMTSU1NRWbN2/GvHnzTIYmY1+43W40NzcjFAohKytrTFLDZpkkJyePUS0+W8cNk/U5cuQIZsyYQb71rW/h0KFDemdnp5NS+u8ALvs8jOkzicorivJbURRHm5ub+eeff5663e6EjMhETYhxKTxCoZAZHzARiVixFtu3b0coFDKDx1OnTuGpp56C3+/H9773PZKcnKxLkqTfd999vN1uxzPPPIM33njD7M1PxNBMcJHZjDRz3MbcuXMRiURIbEwEOjs7kZycjJSUFEyePNn0GkybnOM4FBQUEIfDQSZNmgSLpCCCwSB6enrGjdVi2016ejq+853vYN68eQgGg2a8xGpsNTU1OHjwIKZNm2Y2UjABru7ubqSkpJyx1T3+x3ovRFHEW2+9RTmOwz333MMriqIRQi5dvnz5lV+aMVVXVzcbhvGD5ORk7s9//rPx3HPPmXNCEt1ANrmSnUys85QMDAzgvffeA4MarOg4m+rY399vZk52ux3t7e14+umnUVhYiGuvvZZ0d3eTt99+mz777LPYu3ev2UJlbfRMdEEtOAwjlWFoaAiZmZkoKChANBqlkiShr6+PdnV1UeYxGb40adIkzJw5E7Nnz8acOXOQn59PVVU1A2EGGg4PDyMYDMJut4/rq+N5nlx//fXIyckxhwKyrZGNEnv//fexYcMGMwMdHBwEz/Pwer0Ih8NITU1NxNZIqIkZ/zyToX799dexevVqsnHjRuLz+SiAX6xZsyb9SzEmAKisrPyNruuv22w28YknnjAee+wx6LpuDoph6a5VmIvxwF0uF6LRKH7xi1+QU6dOIT09HR6PZwwgx0TcWXGWGaHNZsMnn3yCd999F5s3b8aUKVPw5JNP4ve//71Z9IyvByagepg8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" },
];
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
function buildWidget(word, family, theme, slotIndex, glassOpacity = 1) {
  switch (family) {
    case "accessoryRectangular":
      return buildRectangular(word, theme, slotIndex, glassOpacity);
    case "accessoryInline":
      return buildInline(word);
    case "accessoryCircular":
      return buildCircular(word, theme);
    default:
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

// --- Wordly — katalog arayüzü ---
__wordlyModules["catalogMenu"] = function (module, exports, require) {
const { loadCatalog, installCatalogPackage, packageStatus } = require("packageCatalog");
const { TYPES } = require("wordLibrary");

async function openCatalog(library, showMenu, pick, form, notice, onlyId = null) {
  let state = await loadCatalog();
  let category = "";
  let query = "";
  const normalize = value => value.normalize("NFC").toLocaleLowerCase("tr");

  async function openEntry(entry) {
    const installed = library.list().groups.find(group => group.id === entry.id);
    const status = packageStatus(entry, installed);
    const ready = entry.status === "ready";
    const canInstall = ready && (!installed || entry.revision > installed.revision);
    const actions = ready ? ["Kelime önizleme"] : [];
    if (canInstall) actions.push(installed ? "Paketi güncelle" : "Paketi indir");
    while (true) {
      const choice = await showMenu(entry.name,
        entry.description + "\n" + entry.category + " · " + entry.count + " kelime" +
        (ready ? " · Sürüm " + entry.revision : " · Sürüm henüz yok") + "\n" + status +
        (installed ? " · Cihazda sürüm " + installed.revision + (installed.enabled ? " · Etkin" : " · Kapalı") : ""),
        actions, "Geri");
      if (choice < 0) return;
      if (ready && choice === 0) {
        const word = await pick("Kelime önizleme · " + entry.preview.length + "/" + entry.count, entry.preview,
          item => item.word + " · " + item.turkishMeaning);
        if (word) await notice(word.word,
          [TYPES[word.type], [word.word, word.v2, word.v3].filter(Boolean).join(" · "), word.turkishMeaning,
            word.exampleSentence, word.exampleTranslation].filter(Boolean).join("\n"));
      } else if (canInstall && choice === 1) {
        try {
          await installCatalogPackage(entry, library);
          await notice(installed ? "Paket güncellendi" : "Paket indirildi",
            entry.name + " · " + entry.count + " kelime");
        } catch (error) {
          await notice("İşlem tamamlanamadı", error.message);
        }
        return;
      }
    }
  }

  while (true) {
    if (!state.data) {
      const choice = await showMenu("Kelime kataloğu",
        "Kataloğa ulaşılamadı. Yüklü paketleri kullanmaya devam edebilirsiniz.", ["Yeniden dene"], "Geri");
      if (choice < 0) return;
      state = await loadCatalog();
      continue;
    }
    const all = state.data.entries;
    if (onlyId) {
      const entry = all.find(item => item.id === onlyId);
      if (entry) await openEntry(entry);
      else await notice("Paket bulunamadı", "Bu paket şu anda katalogda yok.");
      return;
    }
    const latest = library.list().groups;
    const filtered = all.filter(entry => (!category || entry.category === category) &&
      (!query || normalize(entry.name + " " + entry.description + " " + entry.category).includes(normalize(query))));
    const choice = await showMenu("Kelime kataloğu",
      filtered.length + " paket · " + (category || "Tüm kategoriler") +
      (query ? "\nArama: " + query : "") +
      (state.cached ? "\nSon kaydedilen katalog gösteriliyor." : ""),
      ["Paketleri listele", "Kategori seç", "Katalogda ara", "Kataloğu yenile"], "Geri");
    if (choice < 0) return;
    if (choice === 0) {
      const entry = await pick("Katalog paketleri", filtered, item =>
        item.name + " · " + packageStatus(item, latest.find(group => group.id === item.id)));
      if (entry) await openEntry(entry);
    } else if (choice === 1) {
      const categories = ["Tüm kategoriler", ...new Set(all.map(item => item.category))];
      const selected = await pick("Kategoriler", categories, label => label);
      if (selected) category = selected === categories[0] ? "" : selected;
    } else if (choice === 2) {
      const input = await form("Katalogda ara", "Aramayı temizlemek için alanı boş bırakın.",
        [["Paket adı, açıklaması veya kategori", query]], "Ara");
      if (input) query = input[0].trim();
    } else if (choice === 3) {
      state = await loadCatalog();
    }
  }
}

module.exports = { openCatalog };
};

// --- Wordly — kelime yönetimi menüleri ---
__wordlyModules["wordManagement"] = function (module, exports, require) {
const { BASIC, PERSONAL, TYPES, parsePackage, downloadPackage, openWordLibrary } = require("wordLibrary");
const { openCatalog } = require("catalogMenu");
const PAGE_SIZE = 5;

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

async function manageWords(showMenu) {
  const library = openWordLibrary();
  const notice = (title, message) => showMenu(title, message, [], "Tamam");
  const confirm = async (title, message, action) =>
    Boolean(await form(title, message, [], action));

  const guard = async action => {
    try { await action(); } catch (error) {
      await notice("İşlem tamamlanamadı", error instanceof Error ? error.message : "Kelime dosyasına erişilemedi.");
    }
  };

  async function pick(title, items, label) {
    let page = 0;
    if (!items.length) {
      await notice(title, "Sonuç bulunamadı.");
      return null;
    }
    while (true) {
      const start = page * PAGE_SIZE;
      const shown = items.slice(start, start + PAGE_SIZE);
      const labels = shown.map(label);
      const back = page > 0 ? labels.push("Önceki sayfa") - 1 : -1;
      const next = start + shown.length < items.length ? labels.push("Sonraki sayfa") - 1 : -1;
      const choice = await showMenu(title, (start + 1) + "–" + (start + shown.length) + " / " + items.length, labels, "Geri");
      if (choice < 0) return null;
      if (choice === back) page--;
      else if (choice === next) page++;
      else return shown[choice];
    }
  }

  async function editWord(word = null) {
    const types = Object.keys(TYPES);
    const selected = await showMenu("Kelime türü", "Bir tür seçin.",
      types.map(type => (word?.type === type ? "✓ " : "") + TYPES[type]), "Vazgeç");
    if (selected < 0) return;
    const type = types[selected];
    const verb = type === "verb";
    const data = await form(word ? "Kelimeyi düzenle" : "Kelime ekle",
      "Kelime ve Türkçe anlam zorunludur. Fiiller için üç hâli de girin.",
      [[verb ? "V1 · Temel hâl" : "İngilizce kelime", word?.word || ""],
        ...(verb ? [["V2 · Geçmiş zaman", word?.v2 || ""], ["V3 · Üçüncü hâl", word?.v3 || ""]] : []),
        ["Türkçe anlam", word?.turkishMeaning || ""], ["Örnek cümle", word?.exampleSentence || ""],
        ["Cümlenin Türkçe karşılığı", word?.exampleTranslation || ""]], "Kaydet");
    if (!data) return;
    const headword = data[0];
    const [turkishMeaning, exampleSentence, exampleTranslation] = data.slice(verb ? 3 : 1);
    library.putWord({ id: word ? word.id : UUID.string().toLowerCase(), type, word: headword,
      v2: verb ? data[1] : "", v3: verb ? data[2] : "", turkishMeaning, exampleSentence, exampleTranslation });
    await notice("Kelime kaydedildi", "Kelime Kişisel Kelimeler paketinde.");
  }

  async function search() {
    const data = await form("Kelime ara", "Tüm kelimeleri görmek için alanı boş bırakabilirsiniz.",
      [["Kelime veya Türkçe anlam", ""]], "Ara");
    if (!data) return;
    const normalize = text => text.normalize("NFC").toLowerCase();
    const query = normalize(data[0].trim());
    const items = library.list().groups.flatMap(pack => pack.words
      .filter(word => [word.word, word.v2 || word.pastSimple || "", word.v3 || word.pastParticiple || "",
        word.turkishMeaning].some(value => normalize(value).includes(query)))
      .map(word => ({ pack, word })));
    const selected = await pick("Arama sonuçları", items,
      ({ pack, word }) => word.word + " · " + word.turkishMeaning + " (" + pack.name + ")");
    if (!selected) return;
    const { pack, word } = selected;
    const mine = pack.id === PERSONAL;
    const forms = [word.word, word.v2 || word.pastSimple, word.v3 || word.pastParticiple].filter(Boolean);
    const details = [pack.name + " · " + TYPES[word.type], forms.join(" · "), word.turkishMeaning,
      word.exampleSentence, word.exampleTranslation].filter(Boolean).join("\n");
    const action = await showMenu(word.word, details, mine ? ["Düzenle", "Sil"] : [], "Geri");
    if (mine && action === 0) await editWord(word);
    if (mine && action === 1 && await confirm("Kelime silinsin mi?", word.word + " kişisel paketten silinecek.", "Sil")) {
      library.deleteWord(word.id);
    }
  }

  async function addFromGitHub() {
    const input = await form("GitHub’dan paket indir", "Paketin herkese açık Raw JSON adresini girin.",
      [["https://raw.githubusercontent.com/…", ""]], "İndir");
    if (!input) return;
    const { pack, source } = await downloadPackage(input[0]);
    if (await confirm("Paket eklensin mi?", pack.name + " · " + pack.words.length + " kelime", "Paketi ekle")) {
      library.addPackage(pack, source);
    }
  }

  async function importFile() {
    const pack = await readFilePackage(true);
    if (!pack) return;
    if (!await confirm("Kelimeler içe aktarılsın mı?", pack.name + " · " + pack.words.length + " kelime", "İçe aktar")) return;
    if (pack.id === PERSONAL) {
      const count = library.importPersonal(pack);
      await notice("İçe aktarma tamamlandı", count + " yeni kelime eklendi. Yinelenenler atlandı.");
    } else {
      library.addPackage(pack);
    }
  }

  async function packageMenu() {
    const group = await pick("Kelime paketleri", library.list().groups,
      item => (item.enabled ? "✓ " : "") + item.name + " · " + item.words.length);
    if (!group) return;
    const labels = [group.enabled ? "Paketi devre dışı bırak" : "Paketi etkinleştir"];
    if (group.id !== BASIC) labels.push("JSON olarak dışa aktar");
    const external = group.id !== BASIC && group.id !== PERSONAL;
    if (external) labels.push(group.catalogManaged ? "Katalogdan güncelle" :
      group.source ? "GitHub’dan güncelle" : "JSON dosyasıyla güncelle", "Paketi kaldır");
    const index = await showMenu(group.name, group.words.length + " kelime · " + (group.enabled ? "Etkin" : "Kapalı"),
      labels, "Geri");
    if (index === 0) library.toggle(group.id);
    if (index === 1 && group.id !== BASIC) await exportPackage(group);
    if (index === 2 && external && group.catalogManaged) {
      await openCatalog(library, showMenu, pick, form, notice, group.id);
    } else if (index === 2 && external) {
      const pack = group.source ? (await downloadPackage(group.source)).pack : await readFilePackage(false);
      if (pack && await confirm("Paket güncellensin mi?", pack.name + " · Sürüm " + pack.revision, "Güncelle")) {
        library.replacePackage(group.id, pack);
      }
    }
    if (index === 3 && external && await confirm("Paket kaldırılsın mı?", group.name + " cihazdan kaldırılacak.", "Kaldır")) {
      library.deletePackage(group.id);
    }
  }

  while (true) {
    const state = library.list();
    const active = library.pool().words.length;
    const total = state.groups.reduce((sum, pack) => sum + pack.words.length, 0);
    const choice = await showMenu("Kelime yönetimi",
      "Toplam " + total + " kelime · " + state.groups.filter(pack => pack.enabled).length + " etkin paket\n" +
      (active ? "Widget için " + active + " farklı kelime hazır." : "Etkin kelime yok. Bir paketi açın veya kelime ekleyin.") +
      (state.damaged ? "\nBazı yerel dosyalar okunamadı." : ""),
      ["Kelime ekle", "Ara, düzenle veya sil", "Paketler ve dışa aktar", "GitHub’dan paket indir", "JSON dosyası içe aktar",
        "Kelime kataloğu"], "Geri");
    const actions = [editWord, search, packageMenu, addFromGitHub, importFile,
      () => openCatalog(library, showMenu, pick, form, notice)];
    if (choice < 0) return;
    await guard(actions[choice]);
  }
}
module.exports = { manageWords };
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
const { manageWords } = require("wordManagement");
const { selectWordWithHistory } = require("../core/wordHistory.js");
const { THEME } = require("../theme/theme.js");
const { isLockScreenFamily, buildWidget, buildErrorWidget } = require("./widgetView.js");
const { loadHistory, saveHistory } = require("./historyStore.js");
const { GLASS_LEVELS, getGlassLevel, loadSettings, saveSettings } = require("./settingsStore.js");
const appInfo = require("appInfo");

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
function createWidget(family, now, persistHistory, intervalHours, glassOpacity) {
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
  const widget = buildWidget(word, family, THEME, slotIndex, glassOpacity);
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
  if (updates) await updates.check();
  while (true) {
    const level = getGlassLevel(settings.glassLevel);
    const choice = await showMenu("Wordly " + appInfo.version,
      "Yenileme: " + settings.intervalHours + " saat · Cam: " + level.label +
      "\nEski sayısal Parameter değeri, ilgili widget’ta kayıtlı süreyi geçersiz kılar." +
      "\nWidget yeni ayarları iOS bir sonraki yenilemeye izin verdiğinde alır.",
      updates
        ? ["Kelime yenileme süresi", "Cam arka plan saydamlığı", "Widget önizlemesi", "Güncellemeler · " + updates.status(), "Kelime yönetimi"]
        : ["Kelime yenileme süresi", "Cam arka plan saydamlığı", "Widget önizlemesi", "Kelime yönetimi"], "Kapat");

    if (choice === 0) {
      const index = await showMenu("Kelime yenileme süresi",
        "Dilimler cihazın yerel saatine göre hesaplanır.",
        ALLOWED_INTERVAL_HOURS.map(hours => (hours === settings.intervalHours ? "✓ " : "") + hours + " saat"), "Geri");
      if (index >= 0) settings = await updateSettings(settings, { ...settings, intervalHours: ALLOWED_INTERVAL_HOURS[index] });
    } else if (choice === 1) {
      const index = await showMenu("Cam arka plan saydamlığı",
        "Bu ayar dikdörtgen kilit ekranı widget’ına uygulanır.",
        GLASS_LEVELS.map(item => (item.id === level.id ? "✓ " : "") + item.label), "Geri");
      if (index >= 0) settings = await updateSettings(settings, { ...settings, glassLevel: GLASS_LEVELS[index].id });
    } else if (choice === 2) {
      const index = await showMenu("Widget önizlemesi",
        "Kayıtlı ayarlar kullanılır. Önizleme kelime geçmişini değiştirmez.",
        PREVIEW_OPTIONS.map(option => option.title), "Geri");
      if (index < 0) continue;
      const option = PREVIEW_OPTIONS[index];
      const opacity = option.glassBackground === false ? 0 : level.opacity;
      const widget = createWidget(option.family, new Date(), false, settings.intervalHours, opacity);
      await presentPreview(widget, option.family);
    } else if (choice === 3 && updates) {
      if (await updates.open()) return;
    } else if (choice === (updates ? 4 : 3)) {
      try {
        await manageWords(showMenu);
      } catch (error) {
        console.error("Wordly: kelime yönetimi açılamadı. " + error);
        await showMenu("Kelime yönetimi", "Yerel kelime dosyaları açılamadı.", [], "Tamam");
      }
    } else {
      return;
    }
  }
}

async function run(updates) {
  const settings = loadSettings();
  if (config.runsInWidget) {
    // Geçerli eski parametre → yerel ayar → varsayılan süre.
    const intervalHours = parseIntervalHours(args.widgetParameter, settings.intervalHours);
    const opacity = getGlassLevel(settings.glassLevel).opacity;
    const widget = createWidget(config.widgetFamily, new Date(), true, intervalHours, opacity);
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
