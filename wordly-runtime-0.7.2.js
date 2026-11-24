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
module.exports = {"version":"0.7.2"};
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
  { outfit: "hoodie", pose: "wave", png: "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SJLENJKI3W4HpRRtbW0oKCgwJ6on0tCM91Zs8tPo6Cg2bdqEkZERUl5eTu12+zmTJk16o729ffBL2eYOHjzoX7p06ZuyLN/z5z//mX7lK18xTySRAkjckGQmi2wCbeeddx6qqqrMirbT6YSu69ixYwfY+PPe3l589NFHaGtrw6233opvf/vbpKWlhe7evTtVkiSce+652sMPP8zb7Xa88847ePvtt01F20RakawaH4/VsJrW4sWLTTYDpZQcO3YMNpuNTps2Df39/ejv78fw8LCJ/SiKYupfzp49G9nZ2YhEIuZz7e3tpjezYllMTSU1NRWbN2/GvHnzTIYmY1+43W40NzcjFAohKytrTFLDZpkkJyePUS0+W8cNk/U5cuQIZsyYQb71rW/h0KFDemdnp5NS+u8ALvs8jOkzicorivJbURRHm5ub+eeff5663e6EjMhETYhxKTxCoZAZHzARiVixFtu3b0coFDKDx1OnTuGpp56C3+/H9773PZKcnKxLkqTfd999vN1uxzPPPIM33njD7M1PxNBMcJHZjDRz3MbcuXMRiURIbEwEOjs7kZycjJSUFEyePNn0GkybnOM4FBQUEIfDQSZNmgSLpCCCwSB6enrGjdVi2016ejq+853vYN68eQgGg2a8xGpsNTU1OHjwIKZNm2Y2UjABru7ubqSkpJyx1T3+x3ovRFHEW2+9RTmOwz333MMriqIRQi5dvnz5lV+aMVVXVzcbhvGD5ORk7s9//rPx3HPPmXNCEt1ANrmSnUys85QMDAzgvffeA4MarOg4m+rY399vZk52ux3t7e14+umnUVhYiGuvvZZ0d3eTt99+mz777LPYu3ev2UJlbfRMdEEtOAwjlWFoaAiZmZkoKChANBqlkiShr6+PdnV1UeYxGb40adIkzJw5E7Nnz8acOXOQn59PVVU1A2EGGg4PDyMYDMJut4/rq+N5nlx//fXIyckxhwKyrZGNEnv//fexYcMGMwMdHBwEz/Pwer0Ih8NITU1NxNZIqIkZ/zyToX799dexevVqsnHjRuLz+SiAX6xZsyb9SzEmAKisrPyNruuv22w28YknnjAee+wx6LpuDoph6a5VmIvxwF0uF6LRKH7xi1+QU6dOIT09HR6PZwwgx0TcWXGWGaHNZsMnn3yCd999F5s3b8aUKVPw5JNP4ve//71Z9IyvByagepg8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" },
];
};

__wordlyModules["homeNoriAssets"] = function (module) {
module.exports = {
  "classic": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.615,
      "light": [
        [
          0.241,
          0.266,
          0.286,
          0.29,
          0.278,
          0.24,
          0.191,
          0.152
        ],
        [
          0.241,
          0.266,
          0.286,
          0.29,
          0.278,
          0.24,
          0.191,
          0.152
        ],
        [
          0.24,
          0.267,
          0.289,
          0.295,
          0.281,
          0.243,
          0.193,
          0.151
        ],
        [
          0.233,
          0.288,
          0.339,
          0.311,
          0.284,
          0.304,
          0.231,
          0.121
        ],
        [
          0.257,
          0.333,
          0.357,
          0.313,
          0.279,
          0.303,
          0.29,
          0.164
        ],
        [
          0.445,
          0.424,
          0.38,
          0.359,
          0.356,
          0.299,
          0.334,
          0.27
        ],
        [
          0.574,
          0.487,
          0.444,
          0.419,
          0.411,
          0.365,
          0.445,
          0.326
        ],
        [
          0.594,
          0.671,
          0.63,
          0.593,
          0.387,
          0.115,
          0.11,
          0.114
        ]
      ],
      "jpeg": "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"
    },
    "wide": {
      "width": 610,
      "height": 298,
      "safeY": 0.615,
      "light": [
        [
          0.254,
          0.282,
          0.347,
          0.299,
          0.264,
          0.312,
          0.291,
          0.098
        ],
        [
          0.284,
          0.407,
          0.363,
          0.333,
          0.303,
          0.279,
          0.286,
          0.274
        ],
        [
          0.454,
          0.416,
          0.372,
          0.351,
          0.346,
          0.285,
          0.204,
          0.208
        ],
        [
          0.447,
          0.436,
          0.392,
          0.373,
          0.38,
          0.328,
          0.513,
          0.329
        ],
        [
          0.49,
          0.468,
          0.424,
          0.407,
          0.398,
          0.37,
          0.433,
          0.362
        ],
        [
          0.683,
          0.513,
          0.469,
          0.437,
          0.431,
          0.353,
          0.426,
          0.282
        ],
        [
          0.672,
          0.659,
          0.542,
          0.563,
          0.476,
          0.125,
          0.113,
          0.136
        ],
        [
          0.505,
          0.694,
          0.725,
          0.629,
          0.288,
          0.098,
          0.108,
          0.086
        ]
      ],
      "jpeg": "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"
    }
  },
  "elegant": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.635,
      "light": [
        [
          0.019,
          0.018,
          0.016,
          0.013,
          0.011,
          0.01,
          0.011,
          0.012
        ],
        [
          0.019,
          0.018,
          0.016,
          0.013,
          0.011,
          0.01,
          0.011,
          0.012
        ],
        [
          0.019,
          0.018,
          0.016,
          0.013,
          0.011,
          0.01,
          0.011,
          0.012
        ],
        [
          0.023,
          0.023,
          0.017,
          0.012,
          0.01,
          0.009,
          0.009,
          0.011
        ],
        [
          0.058,
          0.05,
          0.02,
          0.01,
          0.01,
          0.01,
          0.016,
          0.018
        ],
        [
          0.044,
          0.012,
          0.012,
          0.016,
          0.019,
          0.064,
          0.26,
          0.232
        ],
        [
          0.019,
          0.013,
          0.014,
          0.017,
          0.044,
          0.229,
          0.372,
          0.222
        ],
        [
          0.045,
          0.018,
          0.013,
          0.024,
          0.103,
          0.078,
          0.14,
          0.069
        ]
      ],
      "jpeg": "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"
    },
    "wide": {
      "width": 610,
      "height": 269,
      "safeY": 0.635,
      "light": [
        [
          0.077,
          0.066,
          0.028,
          0.01,
          0.01,
          0.011,
          0.024,
          0.022
        ],
        [
          0.063,
          0.009,
          0.011,
          0.013,
          0.014,
          0.022,
          0.098,
          0.074
        ],
        [
          0.035,
          0.012,
          0.013,
          0.017,
          0.02,
          0.097,
          0.272,
          0.306
        ],
        [
          0.035,
          0.014,
          0.015,
          0.018,
          0.027,
          0.132,
          0.47,
          0.368
        ],
        [
          0.023,
          0.013,
          0.014,
          0.017,
          0.037,
          0.245,
          0.419,
          0.25
        ],
        [
          0.023,
          0.013,
          0.014,
          0.016,
          0.059,
          0.196,
          0.256,
          0.047
        ],
        [
          0.06,
          0.012,
          0.013,
          0.014,
          0.105,
          0.063,
          0.233,
          0.13
        ],
        [
          0.032,
          0.026,
          0.013,
          0.038,
          0.136,
          0.107,
          0.02,
          0.02
        ]
      ],
      "jpeg": "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"
    }
  },
  "romantic": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.62,
      "light": [
        [
          0.211,
          0.19,
          0.165,
          0.142,
          0.126,
          0.123,
          0.121,
          0.125
        ],
        [
          0.211,
          0.19,
          0.165,
          0.142,
          0.126,
          0.123,
          0.121,
          0.125
        ],
        [
          0.211,
          0.191,
          0.165,
          0.142,
          0.126,
          0.123,
          0.121,
          0.126
        ],
        [
          0.221,
          0.208,
          0.168,
          0.13,
          0.112,
          0.106,
          0.126,
          0.139
        ],
        [
          0.254,
          0.242,
          0.168,
          0.13,
          0.125,
          0.166,
          0.15,
          0.181
        ],
        [
          0.258,
          0.214,
          0.216,
          0.219,
          0.248,
          0.252,
          0.28,
          0.245
        ],
        [
          0.27,
          0.326,
          0.297,
          0.289,
          0.311,
          0.318,
          0.404,
          0.315
        ],
        [
          0.253,
          0.483,
          0.484,
          0.412,
          0.413,
          0.327,
          0.238,
          0.236
        ]
      ],
      "jpeg": "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"
    },
    "wide": {
      "width": 610,
      "height": 282,
      "safeY": 0.62,
      "light": [
        [
          0.311,
          0.272,
          0.166,
          0.128,
          0.125,
          0.222,
          0.14,
          0.191
        ],
        [
          0.256,
          0.17,
          0.172,
          0.17,
          0.166,
          0.168,
          0.169,
          0.185
        ],
        [
          0.231,
          0.215,
          0.217,
          0.219,
          0.272,
          0.269,
          0.226,
          0.216
        ],
        [
          0.262,
          0.254,
          0.247,
          0.256,
          0.29,
          0.317,
          0.494,
          0.354
        ],
        [
          0.311,
          0.295,
          0.286,
          0.286,
          0.297,
          0.296,
          0.465,
          0.331
        ],
        [
          0.218,
          0.414,
          0.333,
          0.306,
          0.331,
          0.339,
          0.279,
          0.272
        ],
        [
          0.304,
          0.507,
          0.459,
          0.36,
          0.446,
          0.374,
          0.284,
          0.273
        ],
        [
          0.217,
          0.453,
          0.53,
          0.48,
          0.396,
          0.278,
          0.194,
          0.196
        ]
      ],
      "jpeg": "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"
    }
  },
  "scientist": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.66,
      "light": [
        [
          0.269,
          0.252,
          0.24,
          0.227,
          0.219,
          0.211,
          0.21,
          0.21
        ],
        [
          0.269,
          0.252,
          0.24,
          0.227,
          0.219,
          0.211,
          0.21,
          0.21
        ],
        [
          0.269,
          0.252,
          0.24,
          0.227,
          0.219,
          0.211,
          0.21,
          0.21
        ],
        [
          0.271,
          0.254,
          0.238,
          0.224,
          0.216,
          0.211,
          0.21,
          0.212
        ],
        [
          0.28,
          0.256,
          0.236,
          0.217,
          0.211,
          0.231,
          0.198,
          0.236
        ],
        [
          0.354,
          0.323,
          0.306,
          0.296,
          0.291,
          0.306,
          0.247,
          0.273
        ],
        [
          0.489,
          0.457,
          0.443,
          0.418,
          0.412,
          0.38,
          0.488,
          0.369
        ],
        [
          0.68,
          0.611,
          0.517,
          0.4,
          0.336,
          0.375,
          0.48,
          0.531
        ]
      ],
      "jpeg": "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"
    },
    "wide": {
      "width": 610,
      "height": 246,
      "safeY": 0.66,
      "light": [
        [
          0.291,
          0.265,
          0.246,
          0.227,
          0.234,
          0.267,
          0.191,
          0.283
        ],
        [
          0.337,
          0.306,
          0.289,
          0.281,
          0.28,
          0.3,
          0.185,
          0.283
        ],
        [
          0.395,
          0.363,
          0.348,
          0.34,
          0.327,
          0.327,
          0.34,
          0.252
        ],
        [
          0.454,
          0.425,
          0.41,
          0.402,
          0.35,
          0.396,
          0.526,
          0.388
        ],
        [
          0.496,
          0.472,
          0.456,
          0.431,
          0.488,
          0.415,
          0.425,
          0.342
        ],
        [
          0.576,
          0.505,
          0.5,
          0.443,
          0.379,
          0.323,
          0.362,
          0.419
        ],
        [
          0.668,
          0.603,
          0.606,
          0.458,
          0.374,
          0.507,
          0.528,
          0.531
        ],
        [
          0.735,
          0.664,
          0.429,
          0.303,
          0.283,
          0.264,
          0.607,
          0.584
        ]
      ],
      "jpeg": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsHCAkIBwsJCQkMCwsNEBoREA8PECAXGBMaJiIoKCYiJSQqMD0zKi05LiQlNUg1OT9BREVEKTNLUEpCTz1DREH/2wBDAQsMDBAOEB8RER9BLCUsQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUH/wAARCAD2AmIDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAECAwQFBgf/xABOEAABAwMBBQQGBgYGCAUFAAABAAIDBAURIQYSMUFREyJhcQcUMoGRoRVCUrHB0SNTYnKCkiQzQ2Oy8BY0NVRzdJPhRKLC0vElRVV1g//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAzEQACAgEEAAMGBQMFAQAAAAAAAQIRAwQSITETQVEFImGRofAUMnGBsULB8RUjUtHhNP/aAAwDAQACEQMRAD8AtEJE8hNIXtHjDSkTkhQCIQhAIkTikUgRCVIhAhSJyTCARInYSFAIhKkQCJCnJEAiClwhSBqVKkKECFIlIRhAIkTsJMIBEJcJCpAiClwgoBqEYQgEQlQgEQlwkwgERhLhLhAMIVuC3maASdpgu1AwoXbjOHfPU8ErJ5mM3GyEN6ICDBSKyHxPaGytwftt4+9OZbpZTmF7Hs+1nCAqKWipzU1DWZIA1JAU3qjKfWsdu9I2HLj+Sa+rkwGwDsIxwDOPvPNQCa8U5ZIJwSQ/Q6cMLPVptbUh5c6QvB0LXag+5P7OmqR+iPYS/Yce6fIqQUUYV42ydrQ57o2t5ku9lQTtgbuthc5+PacRgHyQECMJcIwpAmFdselxb+677lTKmoJewrYpDwDsHyOihg17tS+tFg390tGRosaajnh1czLftN1C2L7E4xRzsJBjOCR0KzobjK3SQB4+BRdEFJa1LdY91rJmlmBjeGoUe7R1Z0O48+4/91DNbp2asHaDw4/BAaNTTMr2xmOUd06EahOvkoZRFh4yEAfelttE2ihdLK4CRwy450aOiyLjVGrqC8aMboweCjzBWQlwkwrEiYRhOwjCAYQgBPISYQDcIwnIQDSE1yepKejmqZ44ww4kcG5VZSUVbJSbdIfFaq+am9ZjpnOixnOmSOoHFUivRJ3x0FE6QDuRM7reuOAXnro5CSSw5JyvN9na2er3ykqSfB26zTR0+1J232SUUDppxgZA4romDs4/ILMsFBVzvdJHEezGhcdAT0WrVZjbuFuDzyu5ZISk4Jq12cjhJLc1wys45JKVjcnKaNSlleI24HFaGYk8gAwFnzzYB1S1E4GdVmTTF5QnsmNRqhVEKLJo6khNIT0hUEkZCTCeUhCAbhJhORhAMwjCcQjCEDMIwn4RhSBmEYTiEiAagpcIwgG4QQnYSIBmEYT8JMIBEYS4RhANwjCckKAbhJhPwjCkgbhGE7CMIBhCQhPKaVIG4RhLhGEA3CTCfhGEAzCXCdhGEIGYRhPwjCAZhCdhBQDMIwnYQgGkK5apiyYxYBa/XyICqqxbRmsZ5H7kYK88rqiZ0rhgnl0TMJQEuEAzCROIRhAXKurkko4wQB2md7HgVRwrM4/olP8AxfeoMIgNwkITsIKkDCkKtUtDPVH9G3DebjwWpBZqdgzM50h+AUNgdQzsrKAslOoG4/8AArINDUGV0bInPwcZA0K2+2oaPusMTPBupT6mq7GndMIXPDePJVsGVBZZnkGZzYx0GpWm1tPQQjfkIA5vOSfJZc14qZNGBsY8Bkqk975Hbz3FzjzJyppsFq43F9X3GAtiHLm7zVHCdhLhWA3CMJ2EYQDcIUNZWU9FGH1MzY2nhnifILOO09sBxvzHxEZVXOK7ZdQlLpGvhGFn09/tc5DW1TWE8pAW/etFpDmhzSCDwIOQUUk+mQ4tdobhGE5IrEDcahdbZ42uMbsDutyuU5rpqCZ8VM1zDru81y6zHLJhlCHbRtp5xhkUpdIkvdSHPbSt5d534BULfQOrKkg6RN9o/goi589YcnL3uxk9St98tNaaQB7seA9p5XmZZPQ6eOnwq5v7b/6O3HFarNLNk4ivtIsfoaWD6sUTB5ABctc7g6qq3vhaQzgM8/FQXa5VFdUM3zuxA92MHQeJ6lWYohu5I4qfZ+glpm8mR+8yus1azLZBe6jOkmmGpOEyWtO73laro90agg+IWVU+yF6u5nBRHLKZD4JjWlxwEsTN9wb1WjDShvJaLnkq3RS7B3RC1ex8EKStmiQkIUhCaQqmhHhBCdhIQgG4SYT8JMIBmEYT8IwhAzdRhOwhSBmEmE/CQhCBmEYTsIwgGYRhPwkIQDcIwnYRhCRmEYTsIwgG4SYT8JMIQNwjCdhGFIG4RhOwjCAZhIWqTCQhCCPCMJ+EYUgZhJhSYRhAMwjdT8IwgGYQGp+EYQAIde+Q1vVXZxBLBuRlhcfY5Ki7J4nKTCgDXxujduvaWnoUzCtMm03Jm9ozoeI8irDLfFIwPbI5odqMjglgzQCTgAk9AtO3U7ISXTlrZT7LSdQFXM7YgW07d3kZD7R/JV3AuOXak8ygLFbSjfdLTtDoue7rg81TIU8MskLt6NxafBWImw1sga5hilOu8zgfcgKBCkgppJzlre6OLjoB71eqaWmpMPfvyZ0azhr4lVJp5JhunusHBjdAFILtYymFFhpZ3R3CDrlZWE/CMICMhXbbQesntJR+iB4faKrtjL3Bo4uOFtTSsoaZoaM4w1o6qGCOrr46T9FG0OePqjQNVaSphrmhkj3Ru88BTGajrBuyNDXeOh+Kgmtbm96FwcOh4ogVpqCWIbze+3w4rTtU3rNKYpdSzukHmOSzA6opnYO8zwdwV2grO0qWsMYa52hI5o+iDNqYDT1D4j9U6HqOSiwtW+R4kikx7QLT7lm4UokZhI97I2l73NY0cS44CpX25C10oeGb8sh3WA8M9SrVr9H9dcYRcdp7iaOHG92QxvtHjnus8tSufPqYYfzHRh08svRSmv8AbYiR6xvn9hpcof8ASi2g4InHj2f/AHXR+pbDW4bkFpdcXD+0meSD8T+CjlqbDIN1mytsA8W6/IBec/anPCPSj7LbXJxVdcLVNtBR1lUHVtvGGzQAljgNc/fnxxhdzcafZqFsRo9m7fPSzxh8NRkkSN+8EHQjiFjVlm2fqw7FpdRuP1qaocAP4XZCitVHU2xzqJtQai3SkuAkG66B/Jw5YPA488aLiz6hZveTpnbp9M8TUZK0JX2KyVbSYreaJ5+tBM4j+V2fwWFJSXXZ95lppTNTA5OmW/xN5eYXWYRjIwscWpyY3dnTl0mKaqijZrxBdYyGjs5mjvxk/MdQtItXLXS0VFDXxVloY4OLvZaPZP5FH0htPH3n02+P+ED9xXu4tdjlFOT5PAzaDJGTUVwdPhdBQneom+S4Cj2xFO4R3K05PMseWO+Dl1dm2oste1sMNT2DzoIp+4fceB+K6fFhLpnI8M49okk0kcfFQVkrnODnvc49SclbLqWAOG8MkqR1rpH4Lo8q9rszp9GfbbLJXtZO93ZxcQeJd5Lo4KOnpG5a0DH1nan4qvE4wQthi7rGjA8FBNEJz+kLneZXi6jS6rUze+dR9F/c9LDqMGCK2xuXxKe1NRTysjbE5r3tzkt1wOi5WodnRdg+307xhzMqM2ehPGELv0+BYMaxp3Ry5cryzc2uzkqc4c0+K6CniD2B2M5V4WiibwhCsxwxxNwxoAXVu4Odq2UPVz9lC0tEKNxO0o4TS1SYSYUgjITSFIQkwpAzCTCfhGEIG4SYT8JMKQMwkIT8IwgGYSEJ+EYQEeEYT8JCEA3CMJ2EYQDMIwn4RhSBmEEJ2EYQDMIwn4SYQDcIwnYRhCBuEmE/CMIBmEhCfhGEAzCMJ2EYQDcIwn4QgGYRhOwjCEDcJMJ+EYQEeEYT8JCEAzCsRPeKSUBxGCAPDPFRYU8UbjSy4adSMICoG4RhSYRhSCMhDXOjcHsJDhwIT8JMIQJNLLO4GR29jh4Jm6pN1IQgGYRhPwjCAfRj+lR5+0tGrp/WGtBcRjULMaSxwcOIOVpVIMtPvsJyO8MKAZ09LJDxbkdRqmwzzQnuPOOh1CsxVj26PG+OvNSdnTVOrTuu8NFIEZXRyt3J48D4hSU9LTduyaF/snOAcqrLRyMBIG8OoV23UroWmSQYc4aDoFDBFeiCIm89SsvCt1sonqHOHsjRqruw0EkgAaknkpRBm3m1R3WmETnmN7DvMfjOD4joqEO193s8X0Ne4Y7pRtA3Q5+JGAcC1410/aCKi5V97rxatn4XSyO4yt6czn6rf2it6h2OsezrBPenfSlxPe7EH9G0+I5+bvgvK12XDVS5Z6+hxZr4Muikpbvk2p07zx7KaMhw/iHdPxHknCGaN+6+NzCOIcMFbFbeKqqHZtLaeEDDYoRugBUDqvAb546Po4p173YjQcapcJUKpYRCEhUgEYSEhoy4gDqThMFRATgTRk9N8KSAlhjmbuSxtkb0cMhZFds1Rzgup807+g1afctriM8kK8MkoP3WUnjjP8yOagu992bc2GV5npQe6153m/wniPJdZbNq3XOHep3NDm+2wjvN/wA9VVmiZNG6ORoc1wwQRlctcrbUWeoFbQPc1rdcDXd/ML1tNrre2Z4+q0HG6B35u1Z1HwTDeKpp1x8Fz9v2ko57eaipkbDIzuvZxJP7I4kFUKnax07zHQUD5DyL8k/AfmvVeTGlbZ48ceRukjrDe6s8N34I+mav7Q+C443HaMjeFuIH/AP5pjdpqynfu11AB5AsPzWa1GJukzV6bKlbR2RvNX9oJjrvVn66yLfd6C4YbFJuSn+zfo73dVeLG9FuqatHO04umS/SNV+tKFFuNQrUVs6chIQn4SEKhYZhIQnkJMKQRkIwnEIwhA3CQhPISFSBhCTCfhJhANwjCdhGEA3CQhPwjCEEeEYT8JMIBuEYTsIwhI3CTCfhGEIGEJMKTCTCEjMJSE7CMKSBmEYT8JMIBuEhCfhGEAzCMJ2EuEAzCMJ+EYQDMIwnYS4QDMJMJ+EYQgZu5Sbp6KRSNeAzGNUBCI8DLjgdOasR1TGxBu4cgYCgIykwgG7ueCTCfhSMeGsxjVCCENJSEJ5CN1SCPCTCkLUYQDMJCFJhPip3S+DeqEFfCu0EuWmN3LUFSNp4YhkgHxcg1UTNBk+QQFeSjkMh7NvdPDJwlZQPJ77w3y1VtsrnM3o258yqj6uZxI0Z5BOQXWNbCzvPJA5uKqVlZ2jTHFndPE9VXc5zzlzi4+KTCUCPC5q4y1e0l2ZYLQN4E4lkz3dOJJ+yOfUq9tXdDbrf2cTsVE+WsxxaOZ/D3re2atrNi9m2zSMH0tXtDnZ4xt5N93PqT4Lg1up8KNLs9DRaZ5ZWy1FFQbGW36MtWH1jwDUVLh3ifH8By81gSyOkeXvcXOcckk5JKJZHSPLnOLnE5JPElMXzMpOTtn1MMccapCoSJVBcVCRZ13uZomshgjM1ZMd2KIDJJOmcfhzVoxcnSKykoq2TXG5Utuj36iTBPssGrneQUdBbdp9oQJKaFtro3cJZvacOoHE/Aea29mdkKe3OF02ikinuLu8GyuG5D+BPyHLqukmvtqizvV8R/dJd9y2Ua4xx3P1OWWS+Zy2o5ql9GluPfuNwrK2Tn3txv4n5rSZsBswxuPo3e8XTPJ+9TybXWhhwJJX/ALsf54UR2zt/1aepd7m/mr+FqpeT/gy8XTLzRGdg7MzWldWUZ6w1DvuOQqdVsxcqRpdTTtuDB9V4Ecvx9k/JaTdsKE+1T1LR5D81Yg2ptMpwZnxH9thA+WVEsGoX5ot/UtHUYP6ZJHJ94PcyRjo5G+0x4w5vmFBWFop3kgHTmu6rqGgvlOHB7Hub/VzREEsPn08CuRr6KehndT1DRnGhHB46hc64Z1p7kcpaLFDUSyT1haQHHELDge89PBdLDHHAwMhjZEwcmDAWBcHT2mrbWRgvpicPZ08lp1F6oKeFkrpgQ8ZaAMk+5b5d+Sn2jLFsx2umi/xQ9jJGFkjGvaeIcMhYTNq6ZziGUlRJj7IB+SvUN9oKyQRCQwyn6ko3SfwWTxTjy0aLNjlwmUbpsxDMDLQkQSjXcz3T5dFXtF9lo5jQ3beaWaCRw1b4O6jxXUc1m3u0RXOEYwydvsSY+R8F16bWSxSqT4OXVaKGWNxXI76dtP8Av0fwP5IWD/ojVf7zD8HIXp/6jD1R5X+mT9H9D1TCQhPISYXoHmDCE3CkwkwgGYRhOwlwpII8JMKTCaQgG4SEJ+EEIQMwkwn4SYUgbhGE7CMIBmEYT8IwgGYSYT8IwgGYRhP3UYQDMIwn4RhAR4RhPIRhAMwjCdhGFJAzCXCdhGFBIzCMJ+EYQDMJMJ+EYUkDMJcJ2EuEAwhJhPwjCAZhGE/CMIBmEhCkISYQgZhGE7CMIBuEYSyu7KJzyCd0ZwFkvuEzz3SGjwCpPIodkGtupkjmxsLnkABUKe4ua8CZwLTpnopL04GKMNOQTrhR4qcXJEE1JUQ1Uu412q0ZJGRAN4dFzFCX+tx9kO9vBa17qTE8MYQXY+CiGS43IWWZI3SHeEm95qMsc32mrDbU1JkG4928TphdDC+QRtEuCcaq8J7ugOo3hr9zkeHmkro8PD8aHj5qamp46mdjGHdcSt+psELoQHSuzxUTyRg+TSGOUlaORRhbkljiY8gSnCyLrD6hDPIST2cbn8OgJVlNPohwaOZ2fpG7S+kHelw6it+ZH54brDp8XfILYvdxdc7jLUEnczuxjo0cPz96zfR+11Lshd7hwlrJ20wdzwBl3+IqKunkggd2EbZJjoxudM+PgvmtU5Zs22Ks+o0kYYcW+TohuV3hoC2INdPUv0ZCzVxU9Js3tbdgJJpYbTEeDXavx5DJ+JC2Nitm66izVsoxU3CY5kqpBozPJucY8/wXZPtPZR9rd7nHE37O8Gj8FpHSyjxx/P0M56xS5V18vqedVOxd0o2742raXfZfG4/ifuVO3m7tndBUthqgDgPha7ed7sfgvQ5bvsxRncggkr5OjWkg/FOjvt2lG7brLDRxng6TT5aLpWnxxX+4vnS/9Ob8Tkb/ANt/K3/4cxS7ObQVgDore6Jp+tMQz79fkrkXo7kbU+u19ypaWYf2jMuc3loSRj3KG7XbauW7RWxxnaZ3hrHxd2Mgnjlo4DxK6J2zdFC0GaWepceb38Vbdhwq1X7K/qytZ8zp3+7r6Iy/oHZGk1rbtNVvHHdd/wC0fipGS7H0/wDqtmlqnDm5pd95W1S2ugp4jIKOLPBu83e+9PDQ0YaA0eAwspa2Pkm/3o0jopPtpfsZcV2jA/oOyjGdC6No/BWGXe94w2008Y/eAV1IsXrH5RX1NVol5yZQlum0TtG2+mLfF41+aoVNXE//AG1Yg1p4yMYHAe8a/Nb6DjBB1BVo66SfMUVloINcSZy1ZaRQxi57P1Lms4lu9vDH5eB4KvcbvR3W3COrJpa6LVoIJa48wD0P5LYjhNorY2h2/TVTtx4IADX8tOnJZ1Xa2tuZozG0secx7/DB4fku+eLDqYb38zhx5c2mybF8jl6pkVTTSRu7zHNIKydhLLbrltE+huoe/s2F0cecNkIOoJ48NcBdlctn+wA7pi3tAWneBXIVsMuzm0luuheNwSjeLeg0P/lK5fwrhjbxytM7XqlOaWSNNHrtJSU1FEIqSCOCMaBsbA0fJV7pZrdd4TFX0cU4PNze8PJw1ClluNHE8sM2SPsjKnjkZKwPjcHNPAheIpc8M9dw45XBw9dZqixStjMr6igkO7FK/V8TuTHnmDyd7jyUWV3dVTxVVPJTzN3o5Glrh4Lh54H008kEhy+NxaT18ffxVm75JhxwRoSoVTQ6rCQhSEJuF9kfDjMIwnEJMIBuEmE/CTCkgbhJhPwm4UgbhGE7CEAwhGE4hGEIG4SYTsIwhI3CMJyXCAbhGE7CMIBmEYTsIwhAzCMJ5CTCAbhJhPwjCkEeEYT8JMIBqMJyEIG4RhOwjCEjcIwnYRhANwjCclwhAzCTCekwgG4QnYRuqQNwjCe1u+7dGMqWSlfG3ec5vxUOSXZKjJ9IrYS7qUuaOYSdozdJ3hoNUtFWmuxdwEYKx6+h7F29GRh31TxUk9ZK9x3SQOQCjiM9QXSv1azRcWTUQkmkrIopvgEYDpca8sqCoeWOAa8kdM5W3Ns8+ro/XpKsRxAaN3clVBTRQwbrRnqTxXNv2JN9slxZFTRNjaHZO8dcqKsbiRrt72tNSr74myN3ToOo4rSfstFPEx3rkhGMjQKcLc3dk7G+jGpamCldnsy6TGhJU30w/ew6EYVqawMMYAnILeBwq77RMMOY9riF3pyS4KuEkdTshDFWF1Zgjc0APVXNrNp7Zs9TB9bIXTPGY4I9Xv8AHwHiVzp2np9lNmpZZGtfWyOLIYjwc7HE/sjifhzWVY7AyOM7V7Wl1ZV1J36ekk+t0c4dOg4AfBceoybZOUvI9TTYnKKivMh+kNt9qsz0ETbTbjwnc7cGOu+dT/CMLCvWzksFPNLJtR69OGEmOISODz03icLo7xeay6PzUvxGPZiboxo8llQ05r66lomHdM8rWZ6ZOFwY9RkzZFFOkelPTQwYnOStl3YrZ673axw29hbTUMUzpXzuB7zzoQPtYA8l08cey+zTmshhdda8cHHDsO+4e4Eo2zuBoxFY6H9BTwxjfDNM9G+WNT1ypdkKBoo4ZdwdpOSd7GobngPgu7JKOKG6u/Jf3Zw44Syyq+vP/pFh1RtRdITMXQ2qlPsgayH8fuVSPZ2lMna1kk1ZKeLpHH/PzXRXGUOkETNGR6Y8VUXBk1U7qHC+B3YtLCt0+X8SOCngpm7sELIh+w0BSqnPdbdTz9hPX00Uv2HytDvhlW2kOAI1B4Y5rldvlnWqXCLFM3Li7kEyVxklwNeQUsh7GIRjieKZTtGS88GhH6FfiFQcbsY4NChSucXOJPNNUMsuAUNVV09HH2tVPFAz7Ujw0fNYe2G1MdhhEEAbLXSjLGngwfad+A5riKGyX/aub1yUucxx/wBYqHYb5NH5DC3x4Ny3SdIxnmp7Yq2ejw7RWWd+5FdaRzjy7QDPxWkCCAQcg6gjmvPJPRrVdlmO6QOk+y6JwHxz+Cu7GW3aWz3R1HUsH0dukuJeHNzjQs55zxUzx46bhIRyTupROpvcfaWyfHtMHaNPQjVZ98kLjb64OwS0E/I/iVq3LS3VJJ07J33LGvQay1W6N3tbg/wheh7Odwafr/Y832iqyRa9CS73WiqKcNieSWvzktIAC4bbcRVNr7Rj2kxPa7Q9dD967mptFNPSytZTsa4RnD+bTjivONpKfctbnvmfvZaAM4B16LPDrMO3w4pnRm0eZy8STXB1Vln9ZtNHNnJdC3PnjB+5dDYZXb8sX1SN73rldk9NnqIfsH/EV1thhIbJORgO7rfxXgSVZGl6n0Td4U36I1Vyu0jA25l32mNJ+78F1S4+/Tia6TYOQzDPhx+aujlj2UdEJEIaHWlJhPKRfYnw43CTCckUgbhBCVCEDcJMJyFIGYRhOwjCAYjCdhCAbhGE7CMKQNwjCdhGFAGgJUuEYQCYRhLhCAbhJhPwjCkgZhJhPISIBuEhCdhGEAzCMJ2EYUgRGEuEqgDcIS4S4UgbhGEqVCBuEmE/CXCAYGpcJ2EEIQU3wzPqO4DhW30sxiBwtS1U7HuZvfWOqt3JsLZQ2NoGBrhc8mt1HTFyULs5SWlmIwNFHBRudvh5wCMaLonMaQdAsutxBl7VdKPmZzlJooOoYocukky0DOFLZ+wNHkOALnEkLMqZHSB7i45IS0z3U4Y5vFuq4Hlx+UeDJdnS3H9JaWwU8byA4E6Lnqqnniic57NwDGh4ldS2tmFvdUBrGhrc6rla6aScPlleXHimZQU032aTJTS1IAIZkHmt6KpkjpWtMRIDcZys+23huY45YRunA3uYW3VsAhyAtsax8uJeCVcGXJUYacxlQmoYBr3fNWntG7qsTamp9Utc8jdCyJxHnjAXSqDsydnaVm1u2ctTWYdbLaDI4HgQDoPeQSfALWv1ykuVe+oJO5wY37LeQWfsQz6P2EmnGklxqizP7DBj78/FRVtQ2np5ah3CNhdjrhfOavI8mSj6bRYljx7jPr6+WSqbbbbTPq65/wBRoyG+av2O23azbQWl96MbXS1LHMDHA7o3gCDjzC6fYqwNs9sE87A64VY7WokI1BOoZ5D71Ht1C8UdJWs9qmmz8eHzAV9LOKzKCX7mWqjKWJzb/YbtnG8bQ1ZPA7pH8oXT7PObDaoZBjuwN3fMrB2x3aqaluTP6uqgaQR5Z/H5K7s1P21mgGe9FmN3uP5YXbq78OMjk0lOUo/fZpkknJPFc7tzepLPZHOp3FtRUO7KNw4t0ySPED710K4v0pxOdbaKUDusnc13vbp9y8/ClLIkz0Mrag2iLZfYG13rY591qaqUVkokcJN/uxFpI7w58MnPVUPRttJLSXCK1VchfSzaQgnPZv5AeB6dcLlIquqip5KaOqmjgl/rImyENf5jgUtE90NZTyM9tkrHNPiHBenOG6LTPMjPa00e6veXuLipJ5Y6eBrHva0u1OThUbhVGliLmgF5PdHTxXAX6/Xr6Vlo7XbJaqeNrXySOjc/iMjAHJcWHTqUd83SOvNncZbIK2eitex4yxzXDwOU7GVzVmp7wbdDVVsTIKxwJdFGcFo5e/wWnTXTXcqmFjh9YD7wqvTqSbwvdXzLR1Di0sy238jjrLs5V37aGruV9p5I4WSn9G8EdoQdGj9kDHn8V6C1oY0NaAGgYAAwAEMeyRu8x7XDqDlKscmSU3z5G2OCiuPMEjnNYC5xAA4kps7+yic/mBp5qjID2EbRJho78hdwyqxhObqCs0cscFuySpEl1d20LaNhyZyA7HJnM/h71k11RHcb1FTsOIacYcQOnH8AmXG69vK6G3jtJnjDpW8GjwUtnoXUzmBpy5w3nu8F6WTItHg2X77/ALnm4sUtbn8Sqghu0V9ZR08lHTwSumkbgO3dMHiR1Xm+1UNaKSOWWFzY3O4nl0GF69cKZstM4kDfYMtPMLkNqadk1grA76sRcD4jULyMOTbJcHsZIb4OmauzFqhfZqFzZmvg7Fm6WcXafLXK6VjWsaGtADQMADkuM9GNfEzZVsdRURM7OeRrQ+QA40PM9SVr3Taqgo2llO4Vc/JkZ7o83fkqzxuM2iI5XOCbLt9ujLXRGTQzP7sTOruvkOK4sPJBc468SSo5qmprql1ZWyAyEYA4NY3oFn3GvYIz39yJvFx5qyhbpE3tVs0+2j/WN/mCFzP0pR/rx/KULXwJehTx4+p63hCckX1B8eNKMJSmoQIUicUikCYRhKhAJhGEqEA3CMJyTCkDUYTsIwgG4RhOwjCAQIwlQgG4QnJEAiEqEIGlInFIgESYS4S4QDcJMJyFIGoTsIwgEwlwlwjCAbhRMqYhIWvB06KdRw0ZqJ+43iod0TFq+R754AO6x3vVZ9Y1vBpVypoXQu3H6FVpKLeaSFVJ+pdyj6D6eTtmbwGFIQoYXNij3eiUVDXaYWhizWoP6uNSVH9aVHQH9CwqSY5eSud/mN1+Uido0rKuUXbMDM4J5rUedCsy4khjSOquknwykujHqqYR00hcQ4jgtakt0FVHvHeD2gZ3eayKqQuie3iCtWx3MU1Q1kzQWPw3I5LllPCvdRSK97k3xRNntrqf2N8Y8ljVtpZQ0FQ7O+8sPeIXTk7rCeQGVxVyrJKvtXzSHdOcNzoAssk4wdtcm+RJIz4Y3Dc7Q7vDPULrXzMlpm7pzwWJbY4py2Gojy8N0JWvuBjd0aALTBGrZWHRBKNMLmNttbNWDGcRj7wnNguG2G1NVZqevNHR0YPauZxdggE+OpwOWi0pPQ9TkFxvtSeuYQfxWsssY8HRHFJ1I5uyVYk2UtcDHf1Rn3h4l+fuwrcFIysnip5R3JJGB3lvAq/J6IKM+ze6oH/l2/8AuVaX0SVkOZKHaJ4lbrGHwlmvLUOOPPC8mekbk5J/Q9fHrYxioNHeZ10WLtNmopXUIxiRuSSOHT5hY3o42grriKy2XNxlqaMjEp9ojJaQTzII4rdvkLyWTgd3G67w6Lzcilil8UelgcMvfTMjZ+X6Tsz7PO7FRSZ7IHpnT4EkeRCWx1wtNfJBWuEEMxAy84DJB18x9yybsKmgnjudva4yRn9JuDLsdQOfiOiufSdk2pgYy4PMFSwgl8R7p8D006/FfQ48kNXi4/dejPAy48mizU+vJnbFUr3a4rxbJ6GU7okHddj2HDUH4qeGWM07RShjmtaGsDXAjA4aqQOcSctw0cD1Xl+BljL8rPR8fDKP5keLXS1VtpqXU9ZC6NwOjgMteOoPMLY2N2enuFwirJ43R0UDhIXPGO0I1DR114lek1NdSwN/SPZ5HX5LPfJPdDuRNdHCdC88SPBeit+zdl91HnuUXPbh95ihzrpccnWCLieR8Fr7oWVdoLjSWSWOwsj9cGNztMa668dM+a81rNt9rXVRt7p2U9S1/ZOayFodvZxjOvyXm5b1T9ziK6R6GJLTqpcyfbPW6mpgpITNUzRwxDi+RwaB7yuH2j20jrCaXZ+kdXzg96oLD2bR0HDP3eay2WI1EjZ7xVz3Kf8AvZCWg+AWzDROjiDIomRsHBoAAHuXPGccT3Rdv5HpLRzyqsnC+b/6H7GXervVLUPhYyGaB4bLC46HI0Izw4Ee5dCau6M7poC7xa9c5sDTmLaLaAgYYHRA9N45JXbrtn7QmnykzyF7Phyk2uWY7pLvL/V0kcWfrPOfxVeay19S5nrdV2zSdWtOGt/z5LoUiyn7RzSVRpfoaY/Z+GDt8/qZ9LaKanaWtbjPJuivNaGtDWjAGgTsIXA227Z6F8UuiCteI6WQ+GB71wO3dZ6rYZIgcOqHCMeXE/IfNdhdqlpywvDY4+89xOAP/heRbS3l17uvaQxvlpabSNoB1GdXHpk/LC30+Nzn8EZ58ix4ue2S2umZDSxOfG0vI3iS0ZGVqsqmMGGRe8lc99NvGnqoz+8fyU0IvdzO7SUcgB+s1mB/MdF2vTzm+Ucq1OPHHhmjX3FkbN6aTA5MHP3LLpKKv2jqd2IdnAw6vd7LfzK2rbsNI5wmulQHHiYo3ZJ83fkurpqMU8LYYGNjjYMBrRgBejp9Eo8yPL1PtBy4gcX/AKC1P+/w/wDTchdx2MqF2+Bj9Dz/AMRl9TouzceDSjsX9B8VOSm5VbFEDonjl8FGQRxVrKCA4YIypsiiohTSQ4G83UfcolJURGEqFIG4QlQgBIlQgEQlQgEQlSIARhCFIEQUqEAiEqEA0pMJyRCBMIwnYQgG4RhKlQDcIwnYQAgEwjCeG5HEBG6OqWCN+jSUtDXCF7d0apzmZaRlVW0j2nR4VZPjgmK55Jait7SVznA5yo/XmN0IOqaaR5OS4Jpt7yc74VU5FmoiB7XucQoeCtxUe40jeGSk9SJ+utU+DNrng1bd/qrCpn+0qVJI6ni7Nx3gOCldVZ+qsmnZqmqFmIDVl3c4pwr75N8qtVUxqRjtN0eSVaoq2c9KD2ZI1CuUlLUSyNbHE54DhqBwUtdQRQUkhMvexoOqv2t8cOXRS7+QAQuT8Pj/ACXyUXfJ0rhvMLSdCMLma6ywwQTyOlc/daS0YxhabbhI0YDQVl3e5ySRyUzI2jeGHFTkgoq5G05Rkh1A+hrJmOjDmzRtHhnRW5iACsa3N3KsSNcWlo9lXa2rgpoHT1dQ2GJvFzzgLTDco7mVjLyOO2mjrdmrm7aG01rqeSd269gbnJIyfAg7vA816fFQVlfTU9U2tcwzQtke3JwHEAnHhqvJNs79a7rQNp6GeWSVsu8d6MtGMEaZ817ZY5I5bVRPie2RhgYA5pBB7o5rPLLY7iduOO+NSMM0FWCd6sOn7Tlzu3d1udh2cZW0Na5ks04h3sZLRgkkZ56LtJdS/wB64L0tabG0XjWj/C5aTk3ExxxW+jP9GhpbY6RtTL/Sq4Nc2R3A89zz1z4r0B7WvaWuGQdCCvJqCZs1JExwBO40eei6K3bT3GiYI5WsrIm6ASHdeB+9z96+cypyk2z6iCUYradQ+y0735a97ATw4rz70d0UFw2mu81SN50bXENI+1Jg/wCfFdO7biMNObZUB377cfFcNb76LBtlJdBCY6Src7tYwc4Y45OPEHVXwQaUku6M9RNtxcuUmehVGz7DI90IewNGe6SN49Alis0rZI4nSSlpbvPJfoPALdgmiqYWTwSNkikaHMe05DgeBCeqrVZ1xvZZ4MEuXBfIoQWiljwSwE9TqrzGNYMNGEqVZTySm7m7LRhGCqKoFwm3ezE30hHtFa6ftp4iHVEAGr8fWHjjQ+4ru0iQm4O0JR3I4axVdPcoDUQPDsaFp9ph6EcitCeZsEReWueR7LGNy555ADqVuvtFufV+uOoofWcYMobhxHiRx96sxwRRf1cbW+QVGldro7VqntprkytlbTJa6B7qnHrlVK6oqMHIa48Gg9AMD4rYQhS3bs5EqBKkUc88VO3eleGj5lQSSLOulzipYXkytjawZfI44DR5rnNodv7fRB8VO4zyjTcjP3u4D3ZXItpr/tlK2WoPq1CDluhDB+6OLj4rqw6TJlfXBhm1OPCrbtjr/fqnaSqFqtDHmBx1PAy+J6NXS2CyQ2Si7JnfmfrLJ9o9B4BWbPZaOz0/ZUrO8fbkdq5/mfwVt/EL6TTaaOBcdnzWq1ctRLnofBRvl72AB1wpjR7uMuytSnjEdE0uYQSNMptRTmOFkr8d48Ftv5OXaZbomsk3eKkawDkpHyU7mPGD2udCmBw4K1lWLuhCEIQaxTU8hNwsDpG4QE7CMIQAUE0e6cjgVPhK9u8whSmGrKaMJcIwrlBuEJ2EmEIERhLhCARCVIhIiEqMIBEJcJMIBEJUqAbhCXCXCAajCdhGEIGownYRhSBuEuEuEuEIG4SgJcJQEBTmqxFIWFh0TDcGgZ3CrxjY45LQSoaqCPsXYaM4SkTZV+kh9gpPpIfYVEsIVgRtwO6ppCyb6S/u0G5/3fzUXZt6I7NvRKFkn0l/d/NBuh/VfNR9m3oEdm3oEoWP+k3fqx8UhuTvsBJ2bPshHZt+yEpEWL9JP+wEv0nIP7MJm43oEu43oEpCyCslMjXOJ3ieSSKbsHB7DrwT6lrRC7GBkIiYxzGnAJxxXnrS1kT3c9kWSfSM3INR2plY+R2A4jBwk3G9EFo3Tga8l15obo8AV9SYn5YG6jU4XO3GNu0G2lqtFdK6OjPfcGnG8cOJHmd3HvW3UvZTwSTPHdjYXnyAysjZTZtm1FPLfrxVzsLpDHSx0z9ws3frZwcAE4A8yufPNYsNNnZpMbyZOEdpUWKx1FN6sbLQNhAw0NhAcB+8O9nxyuOEtX6NtoKeelnlmslbJuyQvOdzr7xxB5gEFa7aLamyNPqVZHe6ccIqvuTDyfz965O6XG47ZbQUdlrKUWxsMhdJFIe9oNePE4zgLx9O8sslXaPdzrHGDbVM9ar66ko6KatqKhjII2F7nk6YXmN5uN62/oWUFrs5ZQU82+KmV+7l2CMEnQceAyVe9KLnx7OxMjLuzdUND8chgkfNdhaG07LVSR0Yb6s2FvZbvAtxx967dZneFKK8zz9Fp1lbkzyC4bP7QbMsNRNTg0+e8+N2+weeNR5p1NeY5WDemEb+bX8vevZD2UzZIjuSDG69hwRg8iF5BetnqO0bYtt9S15oaogxOa7BYHaDXwdp5LjwzjqJbZKmejlUtOt0eUK+tY9veqGEfvBZ9xqKGaEsklDnDVu5qQV0jvR/byctrapo6ENPzwrdJsTZqch0kctSR+tfp8BhehHQST7OCftOLVUc1sltlcNnQIiw1Nuc7WJ2m6ee4eR8OH3r1KybT2e9sHqdYwSnjDId2Qe48fdlZT6GkdSepupojT4x2W4N0e5cxcdhKaVxkt9S6ndxDJO833HiPmoz+zlPmPZng9pbeJdHqaF5JE3biyd2mqZ54m8A14mb8HaqdvpC2oowfXLfC4DiZKd7PmDhebPQZYnpw1uKXmeqpF5iz0q1g9u0wOP7Mrh+CV/pVrMd2zQjxMrj+Cy/C5fQ1/E4/U9NyjK8ol9Jl+ncWU1FSxnGcCNzzj3lUo9q9r7s5xgry1oOCI2sYB8sp+FmlcmkFqIt1FNnsT5GRt3pHtY3q44CyrjtPabfG976jtdwEkRDex7+C8+g9cMBfdaztpAcl7nZwPElZ1VcjUB0FFEJGHuumkHd9w5qMeBzltjya5Jxxx3T4N+6+lGSTMdrot3OgfKdfgFz9FPeNsbqyhnr5WGV2C1rHEAcyQOQ8SobVaJ7rcm2+1t36l2ss7tGxN5nTgP/AIXsWy2zVHs3Rer0zd+V+O2ncO9IfwHQL14abHj6XJ5UtROfnwea3XY+v2NnZc3Q092oWHvFzCOz828vPULrLPcqW70TaqlJ3fZc08WHoV2dQyF8MgqN0xFp3w8ZBbjXPhheNMlrtl6+puNFb5HWaolcxhcSRug6a8iM41Xbjns/Q4M+LxOuzviE3dJePNU7Vd6K70vb0suSPbjdo5h6EfirLCe1bk6ZXXdq0ec006Z1U4b6tTB2unBZ1eXOcAT3eQU9bUxSUsAYe80arOqZCQzJWGOLNcjKFQ8RTEkqRrt6TQaYVS4n9ICNTvBaDBwJ6LcxDVCfjxQhBtOCbuqYhNwuWzsoj3UEJ+EmEsUMwnAJcJRopsFaOmJ1ed0dOalEcbeDB79U8pCjbZVRSE06BIWtPFoPuSpChIx0DHcO6VBJG5h1HvVoJ2ARgjIVkyrimUcJMKaWLcOnA8FHhXsoMwjCdhLhCBuEYTt1GFBIzCMJ2EYUgbhLhOARhANwjCfhGEIG4QQnIwgG4RhORhCBAEYTsIQDUycZicFJhMmH6MqQZU0IazIVmnp5KhzIom7z3aAJswzEpqeR1O5krDhzeBUu64H6k7rDWt9oRDP94FGbPWAE7jDgZwHgla1dTzszIysm3C/dDM+zoCoQZYaKon7Z7ntADd46DJwSsVOTV2auKToyaOgqK1zmwMDt0ZJJwApzZa1pwWxA/wDECfY5JG1ohbIWMkB3scdASCFcqmVEU246sleSA7PmMq0pSUqISjtsy6q21VLH2sjG7mcZa4HBUlPZ6yogE8bG7jtQXPA06qa6mVlJBF2rniXL3b3HIOAPJWrJ29TRGETui7N4a1zeOCCcHrwUSlJR3ExjFyoo/QlZ0i/6gVSqpZaSQRzNAJGRg5BC1Aah7mg1UuCQNCqN1kc+ukYSXCImNvkCrRcrplGlXBnVDN5ueiSnaWt8ypyMpMKPDW/eUGo8k7dTSMFaPkGZtFURUlmqpJ2lzXMLMA8S7QBQbJ0m19ksML4bfR1FNMe2ZBLNuzBrgNRyAPHVN22pX1Wz8vZ5Jic2Qgc2jOfvz7lqWTbqzS2ykNfWNp6jcEb2uBIy0AZ04A6LyvaTlSSjZ7HsyKdu6Jm7c0VM4RXiirLVN0mjLmO8nDiuXlrmbUekKgqLbl0VKAZJQMDdaSfxx71r7abYWSayVFHTzx10kzC1rWDIaeueWFqei2wS0lli9agDHvcZpMtw7B9lp8ca45ZXHo8S3eI01R3avI1Hw007NW5WqOqoX0tfBvwTtwQfz5FcLc9lb5ZrXWPs99qzRwsMnq4Lg7HPBBxwydMcF61XQmohLW8QcgdVlwyCCTJGQdHA8wvQclkXvI4Y43Be4zjfRbJTPsTt2Rz6gyEy7zsnP+cFZ3pdpy0WyujBDmPfHvfBw+4qrXUz9h9syxjnMtdd34ncmDP/AKSceRWtt5cRVWujpGtJkmqWAtxnODk/d814+yWPUr4s9ZSjm0zkvJc/fxMqHai70lPBV3S1h9FP7FVTjun35Iz4HBXS0FdTXGnFRSyiSM9OIPQjkVa9FUEc+ydypaqJk1G6ulaI3jLS3DcjCxdpNhbhs5O+8bKvknphrLSHvPY3y+u35jxXuw1DTqR4OTSpq4GuQmnABJ0A4rmG7c0rqNjhSSmrdoYge6D+9092Vo2vZTaja0CW5PNrtztQwtIc4eDOJ83LplmhFXZyxwTk6orXPauCCQU9viNfUuO61rMluemmpPgFXqdmr7cIDX7U1ZttExvadgPb3fBg0H8WvgvUNn9l7Ls1Figpw6oxh1RJ3pD7+Q8BhYG3NTD9NWumuzZGWcntZ5QzeEjwe6x2NQ0aE+a45Z3klS6O/Hp441b7Od2N2apo3/S7qbsd/wD1WJ53nMZ9px5uPyUPpOmcKe20I9macucAOIaAP/UvUoG26viFTTGCojfwfEcg/BeYeln1am2lszCSyNsTpHZOcZdj8FnGe50dDVR4OUqopqCoZcWRHcA3ZW5xvNVn1+nhcI7bSCeonaHkMGAPFx/BV3SC7VgfPvMpmtLoYz9fBxkp1bQQW2ljkpXFtTG/faeJf1HkmXTQyy3v/IxaqeKOxf4Hm3VtW8SXB3aY1EQOGN93NJ6rV1tfFaLdD2tXMd0NbwYOp6aa+CtG7sqKGN9M0uqZTuNiAyQ7hw5+HVeoej7ZBmzdE6pqsSXSqGZ3nXsxx3AfvPM+QWsnHDGoIx97LK5OyTZLY6DZ23Np43NMz8Onlx3pHfgByC6JlJG3jl3mVUuN9tNrcW1txp4HDixzxvfAarHm9IViad2mNVWO5djCcfE4XOt8ujVuKH7aVDeyp7PTgNnrXYcQPZjHE/56FXWWdjLa2kaxjouz3DE9uQW9D1WPs9HU3q/VV9q6eSGIYjpo5Rgho/z8yuqmnjgidLK7DWjJWkpOKUUVjG25M8f2q2Mqtnql152eMjWx96Wn4mMc8D6zeo5fda2d2hp7zECAI6lg/SRfiOoXpLqWSvb2sz3RZGY2N0x5leXbc7Jz2Co/0gsxLGsdmoiA/qyfrAfZPMcvu2x5dvRhmwqa+JuSVEhdrvboPJQVD6h5xGH4U2zt0gv9rE8DGiVvdljzqx35dCrLGugc9jxg4XS3atHFGNSpowZnVAOSXe9X4K57o2RtaXvA1KiuHE+S3LbaoJaBk7jhxHJQnS7LSim0qMzt6r9R/wCZC2voyn+25Cbn6jZH/j9TYSJyRYlxpCTCcUYUkDcIwnowgI8JCE8hJhSQNwk3U/CMIBmEuEuEYQDXN32lvVVcK6Aq8jHGR2Gkq0WUkiHCXCeY3ji0/BJhXKDcIITsJcIBmEYTsJcIBuEsce+8NGhJwlwlHFAOfDTseWuq2AjQ6JWw0rv/AB0YHko6+APjimA77sh3jhS223xVjsOaWgDJ11WbdRtsulbpId6vR8rjH/KUGlpeVcw/wlTVtsp6UNLA4g6alVRAzofioi9ytP8AgmS2uml9Rxp6blWMP8KPVouVUz4JOxYOSbAwOqGNx3S7BCvz6lP2Emh7ItG8HBwyCOajKmnc58ri48DgeAURCldclX2IqtxqGUtMZXgkbwbp1JVnOCq1yhjqaKVkjctA3uONRwViDEuppqzsuyqgNzezvRO1yi1SR0NK6GSpMveLhhjtB01WU2EinlcZHuc2IPB3sYJyp9nqOOujnfUukduOAbh5HJFZo6ro6yr2ppZY9xkEg7+9k+QCrSX+mlpJYNyRrn7uDyGDlSVlvtULKki3ucIpWMyHnm3PVU46K11VHVmGlcx8YYclxBGTjqqxx1G0uCrzRc68+R1Dd6akqmTuDnhue6BqcghWKraamml3xTSgboHEcgqVts9A6tZ2rHvbhxLXSOIOGlOqYrNFBSPfQyYmgEgIJ11Iz7XgrKDlLhWzbHCU41BD7jfqer7IRxvaGBwOeeTlS2naOmt7Hh8Ujy54d3fIj8VVqrba5qWlnpYXxtka4nD3DOHY6qe1WW2FjDPTum36lkQzI7OoOnHgqyVRaZMYt5dqXIsW0dMHAugk08Qs68VrLi+UxExB8vad7pnONFcmp7EyfszRSA9pue07HHHVY9/t8dPXOjpi+FgkeCN8nAHAapEvmwTw1vVWQWyrbb31DZN+UPfkbvAceq3mkPY144OGQuUY1zKuCN5yJC3PiCV126A0NGABoAtDkkIMJjxqnnupC4IQV6qeGmppJ5ziONpc7yWHsDsZSX6prbxc6dsVuj3gyEZDS468uTR8ykvck14vFNYaHvPfIN/pvcdfBo1K9AuDae0WynsdHpHEwdoeZ56+JOpWE14k1BG3iLT4nll9+hgWbZWzx3AOt1pjEoO80yOL90de8dF0YulVTZhEcUe4cFu7wPxWns9Q+q0favbiWXvHwHILlri10NVLiobK5zi5zmE4yTwV8ax5JuCXCPP1GTUYcMMkpO5fwaZvFX/d/wAqqVFww4yTdk3PE+yFjTS1T2u3ZiA0ZOuFi1O85285xcT1OV2x0eN+SOTHrtQ3amze2hpYNtLBUUNPumtpP0sB6noPA8PPC86t9yfK01Vwm79uh7OKMjDiTpk+PALrrPXPttwiqW6tBw8dWnis/wBINohsu0tFtHDTMnoKqVssjPql41P8w188rz9Xp1impJfoe/odTLLBwk+fM9D2Ltr7RspQUk2fWZsyyg8Q553j8Bge5dC07py3RZloro7nEysZI17HsBixzadcrSXly4Z6qRyl6sEFFtJT7RW9jYKo5bI1rRuSuxxI5E9QunpK31+ljqG6B49n7J5hV71H2lulxxZh49yW2xNjhMjdO1w9zejsa/FWbTgQlTJK6p9Wpy8AF5IawdSVS2kr6Who2QVFMK+pqO5DSNGXSu/AdSsisr5Lzt7QWeme9tPQNNTVOYdHHk0+HD4qXbaKagqqPaejaXS0D9ydo+vC44P3/NSopNWQ5PmibYzZX6D7etqS1tbVDvwwkiKEZzugcz4/Dx430q08dRtvaYpQHxvpCC08+89eqU9RDV00VTA8PilYHscOYK8x9KY3NsrDL9qFzP8AzH81aDcslsrJVDgwLjD2s8MMLWsdE3f3gPZHAD/PRNjZFTwvnmO88Zy92p46AKelPamWfH9Y8gfujQKxs1ZHbUX4Uhz6hTO7SpcOYz7PmeHxK7XLarZypW6N/wBF2ygMp2lroWtdISaSPGg6yfgPeei9IOqaxrI2NjY0MY0BrWgYAA4AKrd7tR2elNRWTBg+q0aueegHNefJubOtJRRxe3NnZa7zDtK2lbU0jyGV0RYDjkJB8h546rrrdBb30sU1HDD2T2hzXNaNQVwW0G0gu74o7xWNtFrkOWwkkyTAHicDOPl9676yCi+iqb6MeySj3B2TozkELSdqKTfJEO20XBgcFQqR61cYqc6xwjtZB1PIK8qVuG/PVzH60u6PILNcWy7L2VWradk0bt9jXtILXtcMhwPIqyhRGVOw1aPFrtRVHo82oZV0rHyWqrzhv7PNn7zeIPT3rp3V9PWgVMMhMcjQWnHELptpbJT3y11FsqNGvGY341jcPZcPL7sryKy11RYK2oslyjIkikIaM+y7mB4HiP8Auu/FJdPo4c0H+Zdo6ypYyUYDyPctOiu7aakbTlpOOa5l15Yf7J3xQ27xF2HMc0dV1Ujj3SuzrfpmHx+CFzH0hTfrAhRtRO+R6OhCACTgalc5qIkTzG/7JTCCOKAVCEIATU5CkgbhCckQCYQlQgAJcpEIBcpj2NfxGvVOQgKr2ljsFNVmZu83TiFG2Fx46LRS4MnF3wRIU/Yj7XyTXREeKm0RtZGEqXCMIQPqpGR0sBe4AZcprLVxGoeGknudPFULv/qtL5v/AAUljw1x11c3T4qHBPE399mXjSjlUV98F+6Tx9u3JOjeiqCVjjhpyi4neqOPBoVQpjgtqMsuqmpsv78bQC7QDUlV6OphfVxNZICS7QKhKxxie7fwW9eaitY/+o02f1gWywra3ZWGqlKSVGrKP0j/AN4pigvHaCnldG8tLXZJ8MrE9Zqd0Yncs0uDrOhLcqCqaRTy/uH7lVtD55BI+SQuA0AKsVLiYJAT9U/cpIOWYP6PP/y4+4qfZMZgqf3m/cVDEc01T/y4+4qxsiP6PU/vt+5EXl0zqLm0djX/APMx/wCBZtvGYbj+7H/iWhdZWA1kWcPkmjkaOrdzGVStTCaa4SY7hLGg9TnOFrHjC7+H9jz1zqePj/LH25uKxp/Zf/hKy7sC2htn/It+9y2qEf0pgA1IcB57pWHc54pKShaHjeipBG8fZcC7IWum5n9/E+i9n9MtUYzY7d+4/wDxlaVsH6On/wD2EX3FUqeJ0VmtzHjDuyc7HgXEhX6BzY6ZkrjhkVbE95+y3B1XNn/q/V/yZ4f/ALf3f8GTWt/pbf8AmP8A1KrtNpXzf8WRXKgdrXQsjG859QC0Dn3lU2owa2VwIwZZcFUXZ6ftrvH+5gv/ANo0Q69n96610Y1OvkuTf/tSgx/d/eu2kOGHQK587IrCJpGd1VLvVMtttnqy3JjZloPN3AD4kK615xjCw9tmSS7OVJZnMZZIcdA4ZUPhCKTkkaPoutbaW31e09aN+WTebCTxIz3j/E7T3LUoQa+7Ric5Msm8/wAeePlhN2AqIb76P6ekppGiemb2Mjc8HtORnwIwVHNS1dK/9JDLG5p0O6fkVTS1JS55Zh7T3xnC1cVydJtLXerUop43bskvHHJvP8lyMpypJ5pJXl8r3Pd1cclVHTfsH4hdmnweFGkePrdTLU5d/l5EFTlWrds8LhRuqXzbhORGAOY6qtLIXDSP5qIVVwihfBFKY4n+00HiuuSm41B0zPDKKfvGcG97C6GgpYdo9nKuwVRw4NzC4/V+yfc75FZtJRSOcO453g1pK6Kw2+ShlmuFXimiEZA3zjDeJceg0WGr2PG1I9HRSn4y2rg5L0ZXKeH1ux1W8yejeXM11aM4c33O+9ekUtwa7DZzg/a5HzXlWxkpum3d2usGlO7tHZxye4bv3ZXoWV4DipLk+ui3RtVszG0r+8DvDAGeKzKu5NpLfIS4tDGl739GgZOFXXL+kK4Op7SyhhyZ62QRho4loxn4nA96RglwTJ0rNf0UQPnp7ptBOP0tbNuszya3/ucfwrsJoo6iCSCZofHI0se08wdCFUs1ALNaKS2Nx+gha1+ObuLj8SVb3lhOVysQjSOX2Nqn2a41OytZIT2ZMtE9314zqR+PxWF6a2ujdZK1nGOWRmf5SPuK6DbW2zVFNFdKAYuFA7tIyOLgNSFz/pFr4tovR9S3WnbumKoY57ecbiC1zfiR8lonbUyjVJxObnkfDRQU9MC+eUCONreJJ/8An5r1vY+wR7N2SKj0dUP/AElQ8fWeeXkOA8lwnorsr7jXO2grMdhSDs6cO4F+NXfwj5nwXQ3XaGrvdS+2bPuIiB3Zq0cPJn5/Dqtsjc3tRljW1WzUvu08dHN6hboxWXA6bjdWx/vH8PjhUrVs7PVVP0je5TU1B1APst8AP8/itDZ7Z6ltEOQ3elOrnO1JPitCsuNHRh3rEu6Qwv3Q0k4Hks9yj7sPmaVfMjzHamdg2vvjWwwvDIKelZvsDtxpbvHGeB8Vh7KzVdzoZrO64VVHQ0va1OKd+6ZHucA1pPIaE+9Q3G9S1l5nuU1OyKO6ETNa1xcWBo3QDp4KPYqtp6JlxNS8xOlDGty0nOpJU6xuOlSgve/x/YroYqere9+66+/mej+iu5VlVRXGhrKuSq9SqezillOXbmOBPPB+9aOxFyfWxXOmnfvTUdc+MnmWnUE/Me5cZ6NdoLXb5K6GqqTHPWVp7IbjiHA4A1xgarX2Xn+j/SVeaFxxHXxCePxIwfuLvgqKL2cm0mt3HR6AjKELIkjqG5aHc2/cvN/S3s729LHtBSNxPTYbPu8SzOjv4T8j4L0s4IweBVOWGOaKWmnYJI3tLHtPBzSMEfBdGN2qMZrzPHLdVsrqJkwaN/2XgcnBSOYx2jm4KzbrSVWxd/qKOSJ8lK85icdO0ZycD1AOCtSmqKavh7SB4cOY5tPiOS9HHNTXxPNyY3B8dEfqzftIU3YnxQr0ZWertaXHA+KnYwMGnxSgADAGEq4W7OpIEFodxGUqRVJIZIsat1HRRK2oZo+9lo4rRS9SjRChSCF56BBheOhVrRFMYhBBGhGEikgEiVBQCIykSFSQLlGU1GUA8ITQUoKAVNjmp3gn1mBuHFh3pANRxGqeFxT5GMqqpr3taRPJo44+slWF8TsnGB3Cpps/8ZqTcjP/AImm/wCs381x3bQj+1j/AJgkNRB+tj/mCmpeoqLOwqYaeogbFJVQMcwktIlaePXVVW0bWDDLjTgfvD81zPbw/rY/5gk7aH9ZH/MFZOaVWZyw45O2jqTTk/8A3Cn+LfzSGlP/AOQp/i381zImh/WR/wAwSGaL9Yz+YKd0vX6FPw2L0+p0b7b2ntXGA/xD81JR0EVLOJnVMUpZq1rXAa/Fcv2kX22fEJRJH9tnxClzm1VkrT4ou0jqq2inqKWVrTFvPGg7Vv5rJ+g68AAMiJ/47PzWZvxn6zPiEb0f2mfEKqcjXbH7/wAHRW21VkMTxK2JpJ0HatP4ouVBcTRSNpI43SnAH6VnDnxPRc9vM6t+IRvM6t+IUXL7/wAjbD7/AMCnZ2+NY4CkG65u64CePUfFLSbPX6ka4U0JiDiC4dtGfxTct6tR3fBPe9fv5lvd9Pv5F98O0rIGxVNPBO0ez2vZuI8Ac8FBKNpXhrGxtijb7McfZtaPHGeKqva0t0wocDwUqyrUbui16rtEXBwLwRqCHsUksN6lkEstro5ZRxkfGwlx6nXBKpYHgk0Vk5Lplovb+XgsyRbSSyGSUuc4+MeB4BPp/wDSSnfvxsJBGHNduFrh0I5qlolUc1RVcOzQZLtDFver0VPTvcMdpHGwOHkSThZ81rvM2O3ic8DONWc/el48kmFC4Lzm5u5OykbPfjNHK2idvRY3CSzTB05rsI4al1OztowJS0b4BGAcarnEfFTbM2kzoRST40iJ94SPoZZGOZJBvNcCCCRgjoufOfFJr4pbI2IzTs5tNstcn1+yz5HRu9qIEE4+yWnR46c1fj9Ll8tzhFebAzfGhxvwk+4ghPy7hqoaqnbUx7r85HAnXCwlhUnZ0xztKnyaEfpot0n9dZahv7srH/eApR6W9mn/ANZa6wf/AMoz+K5Sa2hpxJTRuHXcBUBt9HzpYf5AoWBrph5Yy7R17vStsvytdX/0I/8A3KJ/pbsTB+hs9UT4iNv4lcp9HUX+6Q/yJ7KCkbq2lhH8AVvCl6ld2P8A4mzUel+STuUVjG8eHaTl3yaFzu1W0O1l4oN+4wTUtvcfYjhMbCf2s6n36LRZGyP2Ghv7owncc5JOeOeaeD8SVlS6Rb2EvmzdHQMo4pnUtQ870rqnA7R3g7hjoNF27SHsD2EPYeDmnIPvXllXY6KpJcGGFx5x6D4cFVislxpCRRXR8TTya5zPuKzeKSOqOpjXJ6xU1MFKwyVEzIWD60jg0fNclaTHtZ6TaUwvE1Db29pvDVrt3XPveR8FyFVZSyGSqr658pY0nmSTyGT4r0P0K2sUdkr7y9vfqH9lGf2Wccebj8lTInBcllkWR0juZH78r3dXFJlRsPVOXGdI7ORjqvM9raGtt1fLYbcY3099e1wjd/ZPa4ZcOg6nwPRekuyBkLzK5UtXtR6RqykjkdFTUsXYzSt4siA7wB5FxJHvK0xumUmuDWhL73BDs5YS+Kx0Y7Karboapw9oN8Ccknn8Au2tFrprVTMhp42tDRjT/PzVagpm2mliZTxxMpQA0MaNWjlqtRrg7UHKmcnVLoRikSArLmqoqe61bpd7ApgAQ0nqeS0cqjS969VudR2UYVYvsNHmfoxmiG0dI97tIrW7iM6l4Xqbq6iI70sYHi3/ALLNsOydn2eqZ6m3QSMknG6S+Qu3W5zutzwGVtEA8dVbJNTlZXHBxVHEbaVEEzbdHBh7n3OHG63kCSsbaeZ1p21sN5cd2Nz+xkPhnB+Tz8F1l3wZ4cEN/TZXDVTaj0hbSx2igO7baN2/NVYz4FwPjwaOfFbcKJD7Z6HWXmpmqHUtqi7Td0dMW5A8gnww3XcG9NJvcSXvA+S1KWmhoqdlNTgiONoaC45LscyeZ8U8gEYIysd6XCRfb6kNG2pYwipka88scfeop52io06YJRVU4DC+LII4gHiFWB7RniFfHV7iJK1Ql5s9vv8AQOo6+ESxnVpGjmHq08ivGtp9lrrsdWieN7pKVxxHUsGh/ZeOR8OB5L2mGUtO6VPPDBWU76eoiZNFIMPY8ZDh5LbrlHO15M8FG1M4ABpYyeZ3iEL0iT0U7Pue5zZq1jSSQ0SDDR04IV/Fn6mfhY/Q7dKhCzKAkQhCAQhCkAlQhAI5ocMEKohCtEpIEhQhaFRCkQhSQIkQhCAShCEJHAqOSjpZnl8tNDI4/WcwEoQoYOP2/paemND6vBHFvF+9uNAzw6Lly0Y4IQtF0BhA6IwOiEKQBaOiA0dEIQAWjok3R0QhAGAlwEIQBgIwEIQAQExyEIBvvKMnqfihCAXJ6n4oyep+KEIBN532j8UbzvtO+KEIQG+77bvikL3/AG3fEoQhInaP+2/+Ypwlk/WP/mKEIAMsn6x/8xSGaX9a/wDmKEKSAE0v61/8xSiaX9a/+YoQhIhqJv10n8xTHPedS93xQhQBokk+274pwkk+274oQpIHdrJ+sd8UnbS/rHfFCEAdvN+sd8Upnm/Wu+KEICheJpXUwa6RxBcMglerbGVctPsbb4IwwMEbNN37RJPzQhcefs7dP0dG3UhPQhcJ3ijUgeK4v0WAT3famaUbz3VYaSeY3noQrR6ZSXaOqgBfW+ruJMUZJa3PTgtJCEn2SgVGi/2zXfuRoQkemGaBSFCFQk869KNRLT2BpheWGSbs3Ecd0g5C6H0X0NNR7DUc0EQZJVAyzO5vdvEfIABCF05Pyox/qOmQhC5zYQrMqGdhUd3gdQhC0x9lWI8ZAcNFJBIeCELqh0YzLO8hCFJmf//Z"
    }
  },
  "sleepy": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.68,
      "light": [
        [
          0.066,
          0.066,
          0.067,
          0.069,
          0.07,
          0.071,
          0.07,
          0.069
        ],
        [
          0.066,
          0.066,
          0.067,
          0.069,
          0.07,
          0.071,
          0.07,
          0.069
        ],
        [
          0.066,
          0.066,
          0.067,
          0.069,
          0.07,
          0.071,
          0.07,
          0.069
        ],
        [
          0.066,
          0.066,
          0.066,
          0.069,
          0.07,
          0.071,
          0.07,
          0.069
        ],
        [
          0.067,
          0.066,
          0.066,
          0.067,
          0.068,
          0.08,
          0.07,
          0.066
        ],
        [
          0.08,
          0.078,
          0.078,
          0.078,
          0.088,
          0.276,
          0.221,
          0.176
        ],
        [
          0.141,
          0.127,
          0.124,
          0.124,
          0.132,
          0.218,
          0.462,
          0.302
        ],
        [
          0.332,
          0.347,
          0.256,
          0.283,
          0.323,
          0.572,
          0.454,
          0.285
        ]
      ],
      "jpeg": "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"
    },
    "wide": {
      "width": 610,
      "height": 234,
      "safeY": 0.68,
      "light": [
        [
          0.072,
          0.067,
          0.067,
          0.067,
          0.073,
          0.221,
          0.105,
          0.071
        ],
        [
          0.079,
          0.077,
          0.078,
          0.078,
          0.098,
          0.399,
          0.359,
          0.182
        ],
        [
          0.092,
          0.092,
          0.092,
          0.093,
          0.091,
          0.138,
          0.166,
          0.26
        ],
        [
          0.115,
          0.11,
          0.111,
          0.111,
          0.113,
          0.174,
          0.464,
          0.232
        ],
        [
          0.154,
          0.137,
          0.133,
          0.133,
          0.145,
          0.284,
          0.528,
          0.433
        ],
        [
          0.267,
          0.187,
          0.163,
          0.165,
          0.204,
          0.537,
          0.52,
          0.254
        ],
        [
          0.372,
          0.399,
          0.214,
          0.255,
          0.268,
          0.668,
          0.467,
          0.312
        ],
        [
          0.309,
          0.382,
          0.352,
          0.38,
          0.442,
          0.406,
          0.397,
          0.27
        ]
      ],
      "jpeg": "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"
    }
  },
  "student": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.63,
      "light": [
        [
          0.363,
          0.442,
          0.52,
          0.533,
          0.469,
          0.356,
          0.25,
          0.183
        ],
        [
          0.363,
          0.442,
          0.52,
          0.533,
          0.469,
          0.356,
          0.25,
          0.183
        ],
        [
          0.363,
          0.442,
          0.52,
          0.533,
          0.469,
          0.356,
          0.25,
          0.183
        ],
        [
          0.342,
          0.476,
          0.587,
          0.612,
          0.533,
          0.367,
          0.222,
          0.152
        ],
        [
          0.277,
          0.615,
          0.692,
          0.691,
          0.703,
          0.454,
          0.231,
          0.118
        ],
        [
          0.54,
          0.739,
          0.74,
          0.755,
          0.749,
          0.572,
          0.31,
          0.173
        ],
        [
          0.663,
          0.73,
          0.754,
          0.756,
          0.751,
          0.404,
          0.451,
          0.247
        ],
        [
          0.194,
          0.479,
          0.598,
          0.674,
          0.51,
          0.19,
          0.226,
          0.109
        ]
      ],
      "jpeg": "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"
    },
    "wide": {
      "width": 610,
      "height": 262,
      "safeY": 0.63,
      "light": [
        [
          0.24,
          0.665,
          0.701,
          0.728,
          0.722,
          0.497,
          0.319,
          0.126
        ],
        [
          0.477,
          0.733,
          0.731,
          0.752,
          0.729,
          0.648,
          0.353,
          0.163
        ],
        [
          0.593,
          0.742,
          0.743,
          0.759,
          0.765,
          0.537,
          0.232,
          0.147
        ],
        [
          0.664,
          0.745,
          0.747,
          0.757,
          0.755,
          0.469,
          0.485,
          0.273
        ],
        [
          0.734,
          0.755,
          0.755,
          0.754,
          0.754,
          0.375,
          0.381,
          0.251
        ],
        [
          0.445,
          0.7,
          0.766,
          0.757,
          0.718,
          0.32,
          0.467,
          0.273
        ],
        [
          0.156,
          0.488,
          0.709,
          0.733,
          0.493,
          0.321,
          0.182,
          0.088
        ],
        [
          0.191,
          0.386,
          0.43,
          0.587,
          0.46,
          0.042,
          0.222,
          0.041
        ]
      ],
      "jpeg": "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"
    }
  }
};
};

// --- Wordly — ana ekran Nori koleksiyonu ---
__wordlyModules["homeNori"] = function (module, exports, require) {
const { formatVerbForms } = require("wordFormatter");
const { estimateTextWidth } = require("textFit");

const THEMES = [
  { id: "classic", label: "Klasik", primary: "#202E22", secondary: "#344534", accent: "#233F29" },
  { id: "scientist", label: "Bilim İnsanı", primary: "#F3FBFF", secondary: "#D1EAF8", accent: "#8CE0FA" },
  { id: "student", label: "Öğrenci", primary: "#37261D", secondary: "#51392C", accent: "#613121" },
  { id: "elegant", label: "Şık Nori", primary: "#FFF6DE", secondary: "#EAE0C6", accent: "#EDC478" },
  { id: "sleepy", label: "Uykucu", primary: "#FBF4FF", secondary: "#E8DBF7", accent: "#E7C3FF" },
  { id: "romantic", label: "Romantik", primary: "#FFF4F9", secondary: "#F6D9E5", accent: "#FFBBD7" },
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

// Çizimin tamamı tek orantılı tuvalde. Sığdırmada yalnızca sol/üst boşluk kırpılabilir.
function coverRect(width, height, asset) {
  const scale = Math.max(width / asset.width, height / asset.height);
  const artWidth = asset.width * scale;
  const artHeight = asset.height * scale;
  return { x: width - artWidth, y: height - artHeight, width: artWidth, height: artHeight };
}

function planHome(word, family, asset, screenWidth) {
  const { width, height, pad, small, middle } = homeMetrics(family, screenWidth);
  const image = coverRect(width, height, asset);
  // Yatay çizimde metin karakterin solunda, kare çizimde üstünde kalır.
  const characterX = image.x + image.width * 0.535;
  const characterY = image.y + image.height * asset.safeY;
  const textWidth = middle ? Math.floor(characterX) - pad - 5 : width - 2 * pad;
  const gap = small ? 1 : middle ? 2 : 6;
  const budget = (middle ? height - pad : characterY - 5) - pad;
  const fields = [
    { kind: "title", text: formatVerbForms(word), max: small ? 16 : middle ? 20 : 32, min: small ? 9.5 : middle ? 11 : 13 },
    { kind: "meaning", text: word.turkishMeaning, max: small ? 12 : middle ? 15 : 23, min: small ? 9.5 : middle ? 10.5 : 11 },
    { kind: "example", text: word.exampleSentence, max: small ? 11 : middle ? 13 : 19, min: small ? 8.5 : middle ? 9.5 : 10 },
    { kind: "translation", text: word.exampleTranslation, max: small ? 10 : middle ? 12 : 17, min: small ? 8.5 : middle ? 9 : 9.5 },
  ].filter(field => field.text).map(field => ({ ...field, tokens: textTokens(field.text) }));
  const fit = fitRows(fields, textWidth, budget, gap) || limitRows(fields, textWidth, budget, gap);
  const top = middle ? Math.max(pad, Math.floor((height - fit.used) / 2)) : pad;
  return { width, height, pad, textWidth, gap, top, ...fit, image, characterX, characterY };
}

function inkLuminance(color) {
  const pixels = color.slice(1).match(/../g).map(value => parseInt(value, 16) / 255)
    .map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return pixels[0] * 0.2126 + pixels[1] * 0.7152 + pixels[2] * 0.0722;
}

function textInk(theme, row, plan, asset, top, height) {
  const preferred = row.kind === "title" ? theme.accent :
    row.kind === "meaning" || row.kind === "translation" ? theme.secondary : theme.primary;
  const grid = asset.light;
  const side = grid.length;
  const image = plan.image;
  const index = (position, origin, size) => Math.max(0, Math.min(side - 1, Math.floor((position - origin) / size * side)));
  const left = index(plan.pad, image.x, image.width);
  const textWidth = Math.max(...row.lines.map(line => estimateTextWidth(line, row.size)));
  const right = index(plan.pad + textWidth, image.x, image.width);
  const first = index(top, image.y, image.height);
  const last = index(top + height, image.y, image.height);
  const samples = grid.slice(first, last + 1).flatMap(band => band.slice(left, right + 1));
  const score = color => {
    const ink = inkLuminance(color);
    const contrast = samples.map(bg => (Math.max(ink, bg) + 0.05) / (Math.min(ink, bg) + 0.05))
      .sort((a, b) => a - b);
    return contrast[Math.floor(contrast.length / 4)];
  };
  const alternatives = [preferred, "#151319", "#FFFFFF"];
  const ink = score(preferred) >= 4.5 ? preferred :
    alternatives.reduce((best, candidate) => score(candidate) > score(best) ? candidate : best);
  return { color: ink, shadow: inkLuminance(ink) > 0.35 ? "#141119" : "#FFFFFF" };
}

function renderHome(word, family, themeId) {
  const theme = THEMES.find(item => item.id === themeId);
  if (!theme) return null;
  const art = require("homeNoriAssets")[themeId];
  const asset = family === "medium" ? art.wide : art.square;
  const source = Image.fromData(Data.fromBase64String(asset.jpeg));
  if (!source) return null;
  const screen = Device.screenSize();
  const plan = planHome(word, family, asset, Math.min(screen.width, screen.height));
  const canvas = new DrawContext();
  canvas.size = new Size(plan.width, plan.height);
  canvas.opaque = true;
  canvas.respectScreenScale = true;
  const image = plan.image;
  canvas.drawImageInRect(source, new Rect(image.x, image.y, image.width, image.height));

  const widget = new ListWidget();
  widget.backgroundImage = canvas.getImage();
  widget.setPadding(plan.top, plan.pad, 0, Math.max(0, plan.width - plan.pad - plan.textWidth));
  const text = widget.addStack();
  text.layoutVertically();
  text.size = new Size(plan.textWidth, 0);
  text.spacing = plan.gap;
  const fonts = { title: size => Font.boldSystemFont(size), meaning: size => Font.systemFont(size),
    example: size => Font.italicSystemFont(size), translation: size => Font.systemFont(size) };
  let top = plan.top;
  for (const row of plan.rows) {
    const label = text.addText(row.lines.join("\n"));
    label.font = fonts[row.kind](row.size);
    const rowHeight = row.lines.length * row.size * LINE_HEIGHT;
    const ink = textInk(theme, row, plan, asset, top, rowHeight);
    label.textColor = new Color(ink.color);
    label.shadowColor = new Color(ink.shadow, 0.35);
    label.shadowRadius = 0.9;
    label.shadowOffset = new Point(0, 0.5);
    top += rowHeight + plan.gap;
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
