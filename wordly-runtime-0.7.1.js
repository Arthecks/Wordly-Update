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
module.exports = {"version":"0.7.1"};
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
      "jpeg": "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"
    },
    "wide": {
      "width": 610,
      "height": 298,
      "safeY": 0.615,
      "jpeg": "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"
    }
  },
  "elegant": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.635,
      "jpeg": "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"
    },
    "wide": {
      "width": 610,
      "height": 273,
      "safeY": 0.635,
      "jpeg": "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"
    }
  },
  "romantic": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.62,
      "jpeg": "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"
    },
    "wide": {
      "width": 610,
      "height": 283,
      "safeY": 0.62,
      "jpeg": "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"
    }
  },
  "scientist": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.66,
      "jpeg": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAG4AbgDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAEEAgMFBgf/xABFEAACAQMCBAMEBgcFBwUBAAAAAQIDBBEFEgYTITFBUWEicYGRBxQVMkKhI1JTkrHB0SRiY3LwJTM0Q6Ky4RaCk9Lxg//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAxEQEAAgIBAwMBBwMEAwAAAAAAAQIDEQQSITETQVFhBRQicYGR8DJCoSNSsdEz4fH/2gAMAwEAAhEDEQA/APMgA9h5IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEgAAAAAAAgAAAAAAAAABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAASAAAAAAAS1hFZmInSYjaAASgABIAAgSACu19AAGzQABtGkAkE7NIAAAAAAAEAAAAAkAAAABKAAAAAAABAAAkAGBHgkAHgJAAEoAhgZKb32hbWvISPAgRuSdQZBALaRtIBXubmdGdOlSp8yrVbUU3hdFliZiI3JETM6hYBUn9pxjuVK3n/AHYyefzNf2nyZqneUJ27faT6xfxM65sdp1EtZw5IjcwvgxjKM4qUZKUX1TTymSasWUerEn1wEF0Zz2iYtNvOvZtWYmsV+WSWO5i3lkOWSUjKN4/x5Z7y0n8f4McIBLWGYnVS0WjcOe0TXtICX2QEd0TDLAwb+UyOUUabacDBu5Y5ZKGjAwb+WOWBowMG7ljlk6GnAwbuWOWENOBg3bCOWSNWBg28scsDVgYNvLHLA1YGDbyxsCGrAwbeWNgGrAwbdg2EjVgYNuwbANWBg27CNgGvANmwbBo214YNux7WRsGjbWNuexs2Da0NfCN/LVjA6mzYNhOjbXglLpkz2GxU06eX2It4IaMZ7EYaNzovuupCTXdEaNta7kNYZYjTUpdE8mM4e215CP6iZ7K1arChRlVqPEILLZUprUb2O+G2zov7rkt02vd2Rer28K9CdKqswksM5Vpd3sLp2dmnqdGHZ4w4em/sY8m2Std0dHGrS1tWWXpO5e3f3bfjiaS/gaa+iVKiiqeoV/Ze5c17sPwaaxg6+ySinKOyXjFtNr5DaeJPKy78vdjiYddoVrN3XLcLuMeZDpvg/ZmvP0fmbatGnXpunVgpxfdNG3AwYzbc7dEV1XThSo3Wj3L+rUqlzbVcvlrq4Mz+2uX1ubK5oLzceh2cDB24+dkrERPdxZOBjvMz4U7bULO6e2hcRlL9V9H8mWdrKt1o9ldJ7qKhP9en0f8A5KU6mpaM81ZO7tV+L8Uf9ev5HXi5dck68S4cvCvjjcd4ddRwThmu2uqd3RVajNSi/wAn5M25kjotx63t12jcuSM00jpjsx2sjYZbpDMjaK2jwym1Z8o29AMyA6LfJ1V+HV5JHJOjyfQjk+hbSu3O5PoRyfQ6HJ9COT6E6NqHJ9ByS/yfQjk+g0jahyfQckv8n0I5PoTo2o8kcn0L3JHJ9Bo2ocr0HKL3JHJ9BpG1HlDlF7k+g5PoNG1HlehHKL/J9COT6DRtR5Q5XoXuSOSTo2o8ocou8kckaOpR5Q5Re5I5PoNG1HlDlehe5I5I0bUeV6DlF50fQjk+g0jalyiOU/Ivql16roTKmvwrCGjamqC5Ty+pr5XoXeT6Eqks9VlDR1KPKHKLzpLPsrBHJJ0jajyvQcou8n0HJGjalyzZRpqScH4l2Fk5LMuiM+XQpvtlry6kaOpzHSlCTS8DbGg6n36ePU6OP0e+EMo0SnN9sR9w1s6ld0YUIvxkyrOKhGU5yUYpZbfZF502+rOVc21TXNao6FQm4U8c27qL8EF1x/rzRW8xjrNpXpE5LRWFa1s6vEMp1qkpW+k0ZYlPtKu/Jf6/Pt0m6VGire0pKhQj0UY9372W72tSaha2kFTtKC2UoLtheJU2nzXI5Nstvo+n43Frir9WvaNps2k7Tm269NW0rXV9bWklCpPNSX3aUFunL3JCpUub6+emadKEKsVmvcTfs0I/zfodzT7PQdDi1C5pzuJf7ytOW+pN+/8AkjeuOZ76mfyc981azrcfq4lKnrN11o6TyoNZUrmqoN/BZZvjp2tr79tZy/y15J/nE732xYZxTVao/wC5SbMlqVN9rG9fryGa+hl/2MPvFP8Ae8/KncUVm5tqlFL8TxKPzX88EOKlFppNM9D9qWUXitGtRz+1pNI1XGlUbuk7nTpwl5wg/Zl/RmV8V6d7VmG+PPS/aJ28HXtq+matFabHfz080WvZXr7i19jXV17V/qNWWe9Oj7MV/X5F7UKVeEOfar9NT6uD/El3Rpev6fG0p151WnNf7tLMk/FG33jNNIrWWf3fBF5taFd8MWnenXuISXaSmv6GudDV9LW+nV+v0F96Ml7aX8f4+46FLVlOO+WnahCl35jtm4/kXqFWjc0lVoVI1IPtKLIryM+KdzKbcfj5Y1EOfp99Q1KjvovEo/eg+8QaNW0mtSrfaGmbqddP24wX30/HHmD18XNx3pufLxc3AyUvqPD6C6JjyfQvukYung7tPO2o8n0HJ9C7y/Qjl+hOjak6JHK9C9yzF0/QaRtS5PoOUXeX6EOmvInRtS5Q5Rd5foQ6a8ho2pcockucv0HL9Bo2p8n0HJ9C7yhy/QaNqPJHJ9C7yxyxo2pcr0HK9C5yiOWTpG1Pleg5PoXOWOWNG1PlDlFzlh0xo2pcr0HK9C5yxyvQaNqnKI5XoXOX6DljSNqXKJ5XoW+WTyydG1J0iOV6F3lEcoaRtU5JqlOjGWJVIp+86EqG6Dj2ysdDhXFnVtqmxxbz2a8TLJaaRuIRt0JRiqTqd4pZyirZ3arXcYTgoxk/Z6+JX59a2tqlNuMoy7xfTHuFjFxqxuMRaTzFMwnPHaY8I3Lp3VxSpTcKuMencxowpXEd1CpnHdM5tdzuLuo6soxbeXLwRfoXFhaU1TjOTb6uWO7N6X6p+h1LltRmqnLcH7Xboaq1lVp1ZR5Uks+R6fhW1+sOV6pKdKPsx9WU+KeL9M0e7+oRjUv9Qk8K0tY75p+T8vd39Cls0Vvp00wzau3nasVRpznUTShFyefJLJyuHE6HDVzqk/8AitZuJJPxVKD6/NvBnxNqXFFfTq9S50CjYUJ0pRxUrrm4fTO3Oc+mC/oWjalrOh6ZRtaELa0srVU6tzcPbDdlyk159X+Rw8u/3inTin83ocOkce/Vlj8nGq1bmtdx0/TqUat3OO5ucsQox/Wm/L0Opa8FWtfrqN/eanWfeNvJwpr3JHd0zTNBsJ1KVjbXGu3k5bqs6UNtLPrLyXxOqp65XjspytdLo9tlCG+ePe+hyxxseKPxW1/P3/xDstycmafwV/n/AB/mXk6v0dV4SjU05XOnxi+sq13lNeqaZtnomnWq/wBo6/S3L8FrDe/mej+wberLfe1bi9n516ja+S6GUuFtKvL22rztVGVtJSioPbF4eUpLx6kxnwVnURv9P+9q+jyJjvbX6/8AWnEo6PotNbqGi314287q72Jvz8C9C1u6OFQ0XTbTp0c/bkvkejlBVrjr92JqqR3zcsdylubafEf8r04VfeXHVPWZLEr+jRXlRoL+YdpqMo4erV8+ahE63L9DCTp08cycIZ7bpJZ+Zj96y/P+IbfdcXvH+ZcadjqcVmN9G6XjC5prD+KOXXtly3qWmw+q1qTxXor7r9ceKPX7MrPg/EpXFvCGqW8pRzG5jKhUXn0zH+Z18Xkze3p5O8S4+Vxa46epj7TDw97zq1eVxK0VNT6y5b3Rz5+hx+FaNlb8cuhcW9Of1qEpW8pRzsn36e/DPfWcLX7NuKFzyoVaUpxg5Nbn5YPGcTy+o19O1W32xqWtzGTkl4Pz+Rrfi4+m/RExMfsinJybpF5iYn94fReT7zi6rw5SrSle2VNU7rGZqKwq68mvPyf8jOlqNxCspyqynHPWL7NHo1BNZXwPnq5Hv5MM01t8625QOnrFtGhqteMekZPel5ZWQTtaIelcUY7UbWiMH2r4NpcRtNjRBI17THabcDAGrBDibGiMEoa9o2mzAwBr2jajZgYCWG0jabMDAGvaRtNuBtCGnaRtRuwRglDTtG02NDAGvahtRswGgMNqG1GeBgDDaiNptwNpKGrYYy2wxueM+JY2hWf1ySp9Uk85REz2I892E6dKFNT58ZZ8EmVpXFGD9p/kdy40RW9GEJvq1ldTmXOkwjHfhvHXozKtrT7trVpHtLlXl5NVHCi8Jd2vE121vc3rjVk8757E8dvUt3dzb0JZjRjKaWc47G3Qr7dyaE3CnJdVNrOX3OPLEWvNbX/RjWNy515odvpt/Ok687maWZOSwk/ca6VvTqRpwbcItrLj3R29bo2kK8qsq061Wr7ThFYXxZW0vT7a8o0sV1Gsu8HLyMZx2tee63T+LUNlfhW1p1FWVzWk5dMPGCjPh6MMxp130eVuR6G5pVYOMHWm8LxOddTqW1KdWdRNR69V4HoVrC9qV+FOtrl/b2dtwnoKxq99NudddFb0/Gfo8Z6+CXngrxdnwzRlYaFLfVaxc6lJZq15eO1/hjny/wDJR4TuHHR9V4in0u9VuJW1CT/BRjhyx78pfArVaF9qN9Q0vTXGFxcZlKrJZjRprvN/NJep4PMzzfJNK+H0nC49ceKL3hnY28NV1yysqsulzcRjUeerWep6fVrqercS09Jh+i0+hV5MKEOkdse7a+DOdHhiw4R1DR9Rt5161T67Tjc1608uSfjjsvE6MoRs+OZwaaUrmaTf95Nr+J18aYrx90+J/dy8jd+Tq/0evjTp2Wmwt6MI0+b1cYrCUfBFC7urewtal1d1oUaNNZnObwkW61R1p72sdEkvJHzz6VLmrGhptqn+hnOdScfCTjhJP5s86lfVyRV6Fp9Kk2ej0rjDQdZu/qllfKVZ/dhODg5+7Pc9GkqVDp96p+SPjnGfE+ncRVNNqaVpj06paU8Sn7MXnphLb4Rx0fqfTNE1Z6nw9Z6lczSlUop1H4bl0f5o1zYPT1Nfdliz9e4t7Oso8u3b8Z9F7jTg4F7xzplLUo2LrUYVm1CFKUm5ZfZPCwmzr21/RuXszsqeMJPqUvxstI3MLY+TivOol5ji/iu4sLqnoujQdXUq+MuMdzp57JLxk+/oupybb6NtQ1HN1requNefVqK5sl75N4+R67TuG7TTtav9W3zrXN5NvdUS/RRfeMf9dkkdget0RrH+63pdc7yfs8ZoPCmu8PaxS+r6tTuNMlnnU6iknjwxHqk/VM9New3XNhHxdyn8FF5Nta7VNT2xbcWop+DbOTq+pSt665ftXLg4UILrjPeb/ka8XqzZovPt5ljy4jDgmkebeIV7Kxt9QuruU6KqJ12k232yfOeM6FO2oVaMbiUmrjbCKfRrLPpttaXi0PkWNyqNbq3PZnc/H/8AT59xVobs9LhqKqTr1LarGc41O01nxRnblzk5EzFp6ZntH8+W1OJGPjxFqx1RHf5/kPX2FrO4dGgovO2O5+Sx1Z65RS6Je4p6TO3r6db3VtTUIXNKNVLu+qz3+JyuIeI6dvGen2NRTuprbOcXlUV49f1vTwPMrWYelly9eteHH1e5jc6rcVIPMVLbF+aXQHCvr6NnR2qooyWMyf4UDeuK1o3DOcla9pfRmiMGbRiz7B8MxaMWjJkEiCMGWCCRGCMGQCGOCMGeBgDDAwZ4IwBGBgkAY4GCScEjBogyaIwBjgjBngYCGGBgywTgDHBDxFNvwNmDGXSL6ZJGFKtbzjlzkn5KJhUu6MO2X8C7S02jCylWnUSecKK8StKzpTi/ApG5915msR4TSkqtNTj2fmW7DpXl7jnc10ae1RXs9C7pVXm1pekS1v6VK/1OreTlUrJyeXtRSuW9mPQt1nmefQp3GWvgY17Nbd5eXu7WptrVJSX3XJYOppekQqTo3EZtqLWYY7PHmcq6qtqpBPphpnc4Yv6qulaSxKFSOU/FNI5L2wxfUR33/lnSN27req6HO5v1cOolRUUnFd+h5azhyL2EulOMa3R+iZ6jii4qQnQoxlLZJOTUfxPJydKoPfTVahup1N0oNrO157GXa19RH6r3iOvs7V3ONSanF5WDznEctukXMd2G6U8LPX7rLHF95cadw1d3No5RrQikpR7wTaTfwRjpvBHAmoaRbXtW/r3k6sE51lcybc8e0ml2eX2Z2zfp7a23inVG5nTymi3kJ8JaRbU5RxSp1XJZ67nUln8sHruDrKEJXl83unU2Ul6Rjl4+Lf5Guf0ecB1HhK5i/NXM/wChwb3T7Dg7izRaPDGqV6872ty7qyqVeYtja9prCx0b7+WTxM3CtHVff+HuYedSYrj09dxZT+s6PO0iv0lT2oPP3XHrn+Ryry4qaxYW2uW/W5pqMLhL8NSOMN+/+Z6HV7SdzQUqftTpt4S8UeG1G+vOF7irq1u4/VJ4jcW8l955x28c/NFPs/k1pacWTxPj+fVrzuJN8cZsXmPP5PoGn6hQ1K0jcUJxeek4p5cJeMX6o4fG/D1XXtHj9VjuurWbqU49t6axKPv7Y9xjo2rafY2PNhplWwhd4rPbBzTcl0fmvcdOnr1lOOY1J1H4JUpJm33bJW/Vi7x+cMPvWOadOXcT+UvjNDTL+4u1Z0rOtK4ctvL5bTT9c9vifV9PspWunWGhQmpq2pp3E49s93+bL0ru+vm6dChKjTfedTv8ETc6RVekV7SwvZ2VzVX/ABUY7pJ57/yNM3IrjiO8dX076+s/9MsWC2SfExX69pn6f+0WvDej2t7O9oabQVzOo6jrOO6Sk/FN9vgcziPiLQ9PUqTn9Z1DHsW9r7dRv1x0S954Kk+IdR1+70nXdWvZQs88ynGq4Kp1wu2OjXU9LYaNQtaO23o07eD/AFY9Ze9nmTacN4t1bl7OHjfead4iKulwtxLeaxb3GLSoqlrNQrUak1vg2vDzR3Jald9o6Zc7vh/E4PBlpy9a124jl05VKNFS8JSjDMvluSPXnRbmRvc46z+jhnhTEzEZLaiZ93Dq0tZrr9FRp2sZPq926fXu/JGyx0GnbVOdUqSq1W8ynJ5k/idgjGDnzcvLljpntHxHaG+HjY8U9Ud7fM95YwhClBRilGMT5v8ASBeKloNSjH793VUILzWcv+H5nuNY1GjZWlR1KsacYxzUm3hQj6nya9eq8ZapO+06nCNpZvZQ57wm/F+/x9Og4mG2TJHTHhfk5q4sUzefK7aavqNKxp2dbUrl0adONNQjLCSSxjpjoaq+pUbWi3HbRj+tLu/caI8OcU1XtlK0or9ben/DJ07DgGgqirapdVLyp+osxh/V/kelT7PyXtu3Z51/tLDSuq93As9OveKK7cXKhY0226sllyl6eb/gD6RS05U6UadNKEILEYxWEl6IHsY+NjpXp08PLzMuS0229Q6UF4ZMXCH6iNkjDBKmmt0Ivs8M0yg4vDRaSJlBTjhkxKJhSwDNxcZNPujHBZRGBgnBGAAwTggCASCRAAAjAwTgYAxwRgzwRgDHAwZYJ2hDDBKiZ4InmFNySy0uyAbH5GuvCboy2p58DR9ekll0Jmv7WX7J/Md09mWbh0trjPOcmqUbvK2xmjP7U/wX8x9qvwo/mV6ZW6oQqFd0vai22y3pe+3uJOpFqMljJU+1X+x/MPVZfsPzLTuY0r2idu9O4pvtLJVqzctzXXp0RyvtSf7FfMLVKn7FfMrFNJmypcafccutUlTxFJy6s7GiUKFpNXNWDVXHsvdlYa8jmXd5UuKMk1twn7KMLa7nbrbTW5NZw/A5Oqvq9HR2+fqrE6nb1l3qVmqanOWFF9PZy8+h57SryurqUXOU6ElJ7W/u9ehqlezuGoVYRUc5MFcchpwpxcmsPp6lpxz6sV9lpvMzt0rytTVPNaVKFJ+y3VklF+nU1/RDQoz0DUlKlCUPtOptTimukVjB5vQbLS+J+ItWq664XdS1qxo2tjUqNQjDDzPCab6ouapa3H0f41/h2rUpWVOpH67ps6jlSqRbxmOeqf8Ar0OXPysfX6Xu9bj8XJ0ep5h7u9oUYRq7KVOOJeEV5nyPXZqh9KOuVIS5dWnOHLnFdYvbHsfReJOK7DS9Hp3sVO4q3coq2tqa9urKXVL09T55rHB3F2s6vd8QOha2dzdSU3Zq4zJdEtvbHh4sjlWr6fTadHCraMk3iNw9fpfGdrOiqep5oVUutWMG6cvXp1j/AAOV9IWq6Xq3CFzb2mo0KldShUjCDbcsPqu3k38jwsNcq21SdtqEJWtxSk4ThOD6NfwJrazaTWZXEWvKMWeVXBatonT2rZMdqzG31rhy/s+IOHrK9p4limoTh+pOMUpJ/wAV70dKnZUKU1KEMNR2r0R8S4Z1zVdD1CvdaFbVrqyxuuKLg3Brz6dmvB9/gfT9E4/4f1qEY/W42dw+joXLUXn0l2Znn416z1RHaTDyYmOjq7w9KunREkRkpxUoNSi+zXVE5Ryuhwtd4WttZuKd7TqytL+itsLiEd26P6s4/iibKOiV+TFV7imp49p0oPGfNZOzkZws+HmTM7jUrUvam+mfKvY2NDTrSFrbxahHLbby5Sby5N+Lb6tlgpXWsadZ9Li9owf6u7L+SPMa79JWn6TFK3s691OWdsmtkPn3LVra86hnMxWNz4ezbSWW8JeZ57iHjPS9CoyVW4i6uPZhD2pP3L+b6Hg6XE3FXGmr09LtpSsoVeslb09zpx/Wk89F8jZd8MPgXVoXus0Keq2NeaUb5JuVGX96Dz/P08j0MP2fa0/6k6hxZebWsbpG5Q6Gs8cVo1r1TsNJUt0aefbq+vq/V9F4Hq7azoWVvStbakqVKC2xivAtxlGdONSElKMknGSeU0+zMqEFK6pLp95dz6PDgpgrqkPmc/Iyci/VeXShYwhGEYQUpSWcJdStUoqUfvxi4JvD8Tt3clSuarptKajhenQ8zfTVKUajee5akzbuytEROlhPoDVTbcm8NLC7g0ZvQSgY7SxKJjtOXbs00bSVE2NDBO0aVLiHtrHdoK2qNdUl72XMJPOFnzIZPUr091T6rL9aJhKhUj1cenmi4EyeqTphz8DBdqUI1Osekv4lVxw8MtE7UmNNeBgzwNpKGGBg2bSMAYYGDPBO0DXgnaZ4GAhhtJSM8DAGG0lIzSDRKGEknB+44MqO2qnjvI78l0ZzasMqPT8RMIaXDD6kYXoeg0jdKlVpUrehUqpp5qrwfQz5rlSrVKtrb7YU3JxUer8PL1KTedzGmnT2idvOYXoSseh3NFbla16cLahOpBqTnUXdY/lgzqV39Urzna2zhGHZR65fReHqOud60dMaiduA0vQjp6Hf0eblplSMbWhOdKTcpVF1axnp8iLm4bsq8qltbqKiorbHrl9nnHgOud60dEaidvO3HSjLpnPQii91KPTGFg3SjmOGYqCisInVuve+zNHZnO12vVtdDva1BtVKdGTi89n5nSaaODxluWg79jnRhXpyrxX4qafVfwF+0TZfHG7xDpcNaVwlq/Ddha0qVlXuI0ozqyVRK5VVr2m5J7k8/wAEcnjfSbjTpabC51m9vtKrXcKdSzrTzNLPhPGZL3normrwPrNCM6stKUYQThtlGlOlHGUk1hroec4T0ejxJxlcVoXN5faZp9RfU5XFRzip+Pfvjv8AI+ZwROTNvf17vqc2seHWvp2djiu1ura+0jWrW0lc0tKrSdW3pLMtjSW6K8cY/gWrDj3S9V1e30zT6F1Wq1U3OU6fLVNJd3nqex1GzjCnCdKGFDpJrv7zwPHOn1bB2fFumQ/tOmtU7uMf+ZRb6P4Zx8fQ7OXhpnibx5cvEyWwarbxtzvpDtLXT+IdI1udGm6debt7tVIpxnHwbT9G/ki1Z6Rw1dLn2dlp9ZL8VKMZJfDwNfGd9Y67wpYyT3TrXNN0nF9s5y/lks6dwKtZ4R0rX9Eqx0vW50Mz2+zSuWm17UeybxnKWOvYn7Oz9OHVo91ftHjTOXdZ1OnQhThSioU4RhFdlFYS+RydS4Y0fVJOdzZxVWXerSeyXxx3+JXpcVU7GVay4hoT03ULb/eUpQbU/WPnn5epb0624l4vX+yLR6ZYPvf3Sw5L+5H/AF70exbJj6dz4eLXFli2o7S8tqWh2/Dcd9txRdWUu8aKbc37lFr8yNIuOO7++p2lHVb2jvhzN9xL7sPCTTTaT8PM+m0+C9C4P0i71VW1TVtQo0pVJXFZb6kpL9VdVH39Wl4lrhjRbKvpSv6WowvLm7fNu69JqSdR/h80orok/I82/pX79L18UZKxqbPlevXXGGlX0LCrxPVr1Z0XWaoycdqzhLsurOTQtNT1hUa11q1zcUJpuo5V3mnJeGGz0fGtS3suPdQVaSquha0YU4JdZyazhL4nnlptetbVrmVzShCqlVnRisQlLuk/THf1K2wdVInF2lrXNFbz6neG+jWtbGErbTYSupZzKpObcIv1fj7kYWunahrOrUrG2aubyp1zJYp28fGWPBL5l62uKV5aW9PTLSNS7uJKlRtox6qfl7kfYODuE7ThDSHKvOnUvq2J3l1JpJy8k32ivD5k1xY8Eb82n3RfPfNOp7Vj2auF+E7Xh3TlbWVKUqk8OvcTXtVpeb9PJeBhxfayu7COhbYupqb2N93TprrKX9PU61zxlw5aScausWzmvw0pcx/KOShoEpazrN5r9SE40ZPkWanFp8uP4sPzfUvW8+ZjsytG+0PnV1b61wBUULlz1XQ87Y1oxxO38k14fwfhjsd/T72hdOje21WNSlL2oyXZnu9Qo0r5TtFSp1JyjipvWYqL8JeefI+Sa3od39Hup/X7eMquiXNTbWoxbbt5Ps1n8n49n4HRhz+0uXPxon8VfL2d3q9OvXnWlnt1x2OFfahRqUtibTXjgufV7eva07q1/S0KsVJTTynF9mUtSt6EE3TppLB0b12hx1pFu8ujC7oKhGe/pJLDfQGFroO/T4XMqkWqkV0l1wC3Wr6T2DRi0bZxwzWcsS6GOBtJJJGGDFo2tGOCdo0w25I2mzBGCdo0xxg0XEMNS8+5ZwJ01Uik3jqTE6lExuFDaTgtu2h4NmqdFw6915l4tEs5rMNO0bTMYJVYKJnTpxlUipS2xb6vyBKQkYyqWkKjpyjcKSeMYRnGen9sXbf+WJnc019ZjUy01CPXPode8cIadCMIpZUUvT1MbX1r6tq13ufhxv7C+yufikNtp/jr3pG3HUxrw9ldemS8M5a6tKnCEJQcva8JJZx5mllm5X6SOP2cf4GhrKLV8Kz5abibp21WpGO9wg5KK8cLseR1C/s9QhByqVaLhFpuMl3ePl2PY9YvB4W+pr6ndeHWL6f5mWTV6DSOJJ2kf7LazumoRjueX27PovEylxFcfV61OpYTUZQxKWJeyunXsW+Gd60u0UJygv0Ce14eN5roVriVa6pVK9SpDkTe2T7e0ia497lnbPFbVpryrabxLUt+arWylXc0lLKl0747L1MavElx9Uq0pWEoxkluntl7PVenodKwnUhOKjKUd1zRi8d8Zkc3TdRu7n65QrV5zgreMsPz3pFoxTaJt8adtMVrYfUjxG0afxNWt6NeFvYyr8zo2lJ7ej8kK/EleVpOnUsXTi5Rbm4y6Yfqjr6XOcKfsTcW6ss4f+FNnO+s3VeyvIV686iiqTWfDLZj/dP6N6cS1uLOffaPb9dPL0r5W187ijN190HFqUumW8npYtyhGTWHJJteR5KvCEORtilirGPT3I9lJS3NbV3NYefby1yWY9EczXLynYaVWnVpxqua5cKcuqnJ+DXl4s63LnnuupyuH7OPEvF1W+uHnSdD9p+VSp4fms+5LzKXv012nHTqt38J076PtH0vh20hqmnU7vVbp86ann9FF9oJJ/6eT1kacuGKNGzt1b2ylT3culTSUfQtaNCeraxV1Cv1jSeVHyf4V8EUOIdQp313Ll04qNP2VU/FLH8iuPHHXGOY38uLk8m84ZzxaY3Oqx9I8yVuIK0IPm3dJRa6ppdTlf8Aqez5n1arT51vX/R1sxwtj6P3nNu9u1rb7T7S8jn3mn3NnKDuaEqaqrdDK7o9KOJh1qYcOHm8ie83n93Av9KvtB4jlw6pVbjq3pKS9mXNeFJv0Wfdh+Z9w0qypabYWunUXmlZUIUVLzaSy/5/E+baxaV9d4Up3lo2tY4flzqE196dJdWvXGPy9T2XCXEtvrGhWt3hQVWPtYeds/xJ/H8sHz2fDOK00+P5t9jxs0Z6Rfa1xRoVnrNnSuK9FO5sZqtQrJe3DDy16r0fQ6WnXtW8s4yq4VWHszS7Z8GvRrDN09s6Mk8OMovr6YOJd6xR0Hhypdzak7ek2s+OF0yYRu1dOjURO1ytrVtb09Uuak3OhpkMV4047pbsbmse7BR4b4ep076pxHXpUaNxe01y6Fq8UqVN9Vlr78n4y7eRPBlhO24Qt3fJ1LjUt93db/xOp1w//bhEcLVpaXdXXC9xJ/2P9LZTl/zLeT6L3xfQnxExCnnUy+e8UUqMfpK124qwUnRp0ZRbWdv6NZwcaFvTtYcy5fsKLqOH4YPv0R2uO4cv6SLuj1xeWtvN+6Pf/tN/C2hLijiRU60M6dp7VS5b7VJ/hp/zfojsx2iuOJc96zN9PTfRtwlGypz4kvqCjeXqzQptdaNJ+P8Amkvy97PW6/pNrrmi3Wn3ktlKrD/eZxy2uql8H1J1TWLLRbZV7upt3dKdOCzOo/KMfE8VxVcavf8AD11q17H6taUlFULDc/0kpSUYuo11ay84Xkc0Ra9uqezadVjpdPgT6pdaM91haxr2tV0J16NJKFbb2nF47M9TUqRo0Z1H92EXJ+5HzPQOPrnTqt3oc7SnqlxQa+pq0pq3VSGJObkn0ioqOc9+p6mnxXZ6rwXW1rk1belGTpV6c8OVKSmoyy10a69/Irf/AMk1nytSd44tHh3dPpyp2qnPrVrPmTfq/wCiwjDVNPt9SsqttdUY1qVWDhUhLtKLLawu3bwJKRaera8x20+M2tS64H1mtwveydXT7pupYV5PHRvt8+jXn7zq3Eo1otOMln1PScdcKx4l0SpbUkle2/6Wzn2al+rnyfb34fgfLNL1C8vrR866qRuKMtlWEujTX+v4nqYLRPZ5eek1nqj9XuIavUpWULVQWyHZ56g8fKtdJ9Lmb+IN9Q5tz8vtspUruDq2zU0ntkl4M0OjU/VOZZXs7CtzIxc6culSmvFenqjvRlSuKMa9vNVKc1lSR50X12dlqe6hKMo900C60aKtLo5QXvRrFts5q0gEF1QEgDEkhkZJQyHRrD7Mw3DI0jbVyJbmvDzJ5D/WRu7mm8uFZ2Va5lHcqUHLbnGcFuqVemGDpuPdDBUfEVm+n1W4x/niR9vWPjb3P70R1T8E0+DU1v1FRb6OnDp8Dp3s4ys6UYST7dn6HHr6zpteSlOzuHKKwpKaTaMFqmm+Fvdr/wDqi/VExXfs5LYMm7a13W3KcE3BtMoX1SrKpFSq7vZysPsZvUtNa6293/8AKjBXujt5+qXWfWouprTLWs705/ueX5hf1CrVpafGrSkt8aMHlrPgjjfat7lJSg8/3ToXGrafdUZ06kbqO9bfYjDCXh4lBR0rKfNvlj/Dh/Uyi0e70fTl2N8koqWG8LOEeJvf+BvfRx/7metq6lptSnKMZ3kG4tKShDK9e5w5aXpUo4d/fSz33W8Hn/qHXCa0n3dvh2Sp6Nb1GniEKNSWFnEVLq/garGDq3N1Vit0I0JRcl2TclhHNo2mn20ozoanqdOUPu7KcVj/AKjXWdOvhVNW1GSTyk4LCf7xauTUTHyxvx+rJW+/DvUpRoR5s8qFKtSqTePuxTeX+aONodNznfVo+1TVCNPcu25zTx78JlenSt6NRVaep6hCa7SUF/8AYirClWUVU1XUJqOdq2JJfBSNK5ems115d9MvThnFry9JZSjStp1Z+zGFRuTx2zTnFP5tI5tKDlY31RJ7G6UFLwclltL4HNpQp0Z76Wq39OWMZUF2/eFeELlRVxq2oVFBYinBYXw3GH923RTl9PEnj68+/wCu3Dr/AHbdrr/aIr8ke5rqMF0j1yeVq6RZ1ZJrULqCXZKguj8/vHejqNmqMKcqlxNxik5yprMn59y23m2rM+G+o5ThJR6SaaT9cdCj9GNSnf8ABV/o9GUYalb3UpV6UniUllYfu6Ne9Fj7RsPGdf8A+Jf1OBqmj2FzqP2rpepXulagu9ahT6TfqlL/APTPJudTXzC+OI1al/Exp7Kl9radCrSp0a9NVVif6Nv5M5daNaDw7er+4zy8uL/pC0qfKjq9veU/wzrUY5l+WfzNkfpN49h0laabV9XD+kjSvJvWd9DhyfZOO8REZe0eN/8A1160Ks+sbepuXboTfPV9Zq0nc0JNU1iKhTfxfvOPL6TeOpdtN01f+x//AHNFXjzj+5WI1LC2/wAtKPT55NfvttxPpop9lRSNep/P3ey0mzeiOvq2oYtbOhQlzJVem74f6yzz/wBGUKi0C6ruOyhXvJzoxfhHCT/Pp8Dyus0Ne1y1U9S16peVoyzG3lFxpL5YWfgdjSvpBWk29Ky1fRZWtOlFQjO0WYJf5X/JnDnvfJfrtGns8HFjwV6K22+jKvVjTdNVJKD7pPoeZ4mUtW1PSOGqby9RuFOvjwow6y/g/kU6/wBJnD8Yf2b61dTfaEKOH+bLH0d1p8ScT6txTWoOjTtaEbW2hJ52uXfr54X/AFHPM9Mbd1piez6RvjtjGKUYxWIpeC8EcHimyuJ0qGsadHdqGmSdSnFf82H46b96Oun0JcsdzkidTtrNdxp8o+kG6+0td0DWtKpyq/aFnKjSWOrmpdIv1Tlj4HtLKrS4J0a10Cxpxv8AWaseZVhF9N8u85vwiuy8WkeSc+Xx/eW2jJ1p2U5StKNTrRtq00ubWf8Adj4Lxkz6Dw9oNvpNB1nVd1d13vrXU3mVSXnn/WDpmYisRPhhFZm20aPw9OFw9T1es7zUJr70l7NNfqxXgjg/SfrdKHD8bC2pyqzrVt8pPMIRjRanJZa6t4x0PdRl1XvPm3Hmn6tqeiafGxsKl3GVa4p/oYuUoufROS8F36kUtFrbsXrMVmKvG6LC7p8S1dQuNOvadGdo1CTtajW6SXp6s9Jw/cULjgPVuHqir0r+5jc140qtCcMrOU02sPwPp1OV5SowpqnSahFRS5rXZY8jy99TuK3FFC4ruEKdK1qwcVJybcpx/LESIj1M1ss+ZaVnow1wx4h2uEdT+1+E9MvXLdOpbRU3/ej7MvzR2evkfNPo5uL6tpWo6Nps4xoWd/UUbzGY8uXVKL7N9G/ie0paLyoe3dVqks5ck+rfvbKzWInvKImZh0a69lT/AFe/uPkHH+k/+neLKWt0Y7bHVG43CS6Qq+L+P3v3j6rVuo0LbkpVXLG3NRfzORxLo9LiThW8sKmFPlupSm+0Jx6p/wAvib4pmI38MctYns8LZWcLiTdSShTj3ljPXwB1dFsJ2+i21G6inVUFu8/j64wDv9ary/Qu7kp7UYW+p3GmVpVbZpxk/wBJSl92f9H6gHDDvl6XTNSttYpSnQjOnUh0nTmuz9H2ZZlTlFgFZnU6ZzHbbUqUU+kUHSi+8UAX3KmmqpQcU5RfQ07WAaVmZhS0alDizFxYBeJVQ4sjDALKpSaMbm3hd2tW2qNqFWDi2u/UAhLzupaDOx024uqWoTnKjTc1GVKOJNeB5H7R1JpP2eqz9xAF694PdH2lqb/V/cRH2pqK8YfuIAsH2rqD8YfuEfauoL9n+4ANIStX1D/D/cH2vf8AlT/cAJE/bF/5Uv3f/JH2xfL8NL93/wAgAYvW75fgpfu/+TW9au2/uUv3X/UAgPtm7/UpfJ/1I+2br9nS+T/qASH21dfs6XyYeuXK/wCVS/MAgR9u3P7Kl+ZP25cfsaf5gEh9uXH7Gn82R9uXH7Cn82AEMZ6zUqR21LalJeTbNMqtdv2bdR9N2QAMPrFeL9qil8Sfrs13pL5gEiPtCX7NfMn7QeMOkseTYAGi41H6vbVKlG3hCSi8OKx1+R9Q4Fs5aHwBY06tvNzu27qrODTzu6rPj22gHFyvaHdxI7y9FbVoXFGNWm24y7ZWDa3FdZdl1YBwWjUzD0fZ5D6OLKnW0W81pQj9a1G/q1Z7u8oKTUY/NtnsrelKmpOTScpOW2PZAE2md6UrHZvT6oqaQ/8AZdL3y/7mAR/bKfdccklk+Z8V3F7q/ENtwtpFRU7jUKf9orvpyqWW5fFpP+HiAaY51Eq38PoOj6TZaDpNDS9OpqFvQjhec34yfm2y6AZLxDnX0ZV6rgninRWZP19x5vUNRrVZytYxdKhF/dz1m/N/0AO2n9Lny+FeFQAEud//2Q=="
    },
    "wide": {
      "width": 610,
      "height": 249,
      "safeY": 0.66,
      "jpeg": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wAARCAD5AmIDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAECAwQFBgcI/8QATxAAAQMDAgMEBwQFCgQEBQUAAQACAwQFEQYhEjFBBxNRYRQiMnGBkaFCUrHBFSNictEWJDNDU4KSorLhJTRz8DU2Y/EXRHSD0oSUs8Li/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EADQRAAICAQMBBQgBAwUBAQAAAAABAgMRBBIhMQUTIkFRFDJxgZGhsdFhQsHwIzNS4fEVNP/aAAwDAQACEQMRAD8A5dERdY5QRETAKFKhAiVCIgAiIgAiImAREQAREQIIiIAIiJgEREAEREAEREAERExBQpRABFClABERABQpRABERABETKTb8hkKUQc08iwVtV6JjpHhrdyVbjYX+Q8SsmKVkDgWDjd94/kpZ9CLL1VE5k/ER6ruSpar3pjJ8Nmi9ToWncK4aJ3d95A4TR9S3mPeFOP8kGWQFUAqmQSu4cRvPFy9U7q9PSPpuESFvE4btByW+9WIrZYwmFVhThMCghbHT7eK7Nz0Y4/RYBCzLLIIbvCXcnEs+YQ+gGfqCkmnmidC0OaxhyBz5rRFpa7BBBHMFdLfJpqV0MsWCw5a4EbZ5j81giupaxvBURhp8Tv9Ul0EWqO9OgY2OaMPY0YBbsR/FbB5o7vCGNkORuADhw+C181pyOKmkDmnkCfzWDLDJA/D2uYRyJ/ijAGZPYqhjwIiJWk422I94W4ur2UVmdGNyWiJuevT8FTZIqo0/e1LyWu/o2u548Vq75XirqxHGcxQ5APiepS6sDWJhSmFMZThMKrCnCQFsqMK4WqAEwKcJhVYTCQFJCoKulKendV1cUEftSvDB8SlJqKyxpNvCLCgr0yqoqKjsUsUkLPRoojn1R0HP3rzLpuud2f2gtcpSjHGH9TZq9I9K4pvOQ1j5XcMbS4+Svi31RbvEQs+wHMr2gA9cre1PCyMN+0V0M+RjONkt1SN+ArJtcBE2JQQfNb4jKwqoGMOIG6BZKpnCJvNYzWOnftyWIJXSygPdtlbpkLIYxwbjHNDeCDeCyKNuEV7vB4hFHcRycciIsp0giIgQRETAKFKhAgiIgAiIgAiIgAiIgQRETAIiIAIiIAIiJgEREAEREAERECCIiYBERIAiIgAiIgAiIgAq4zuqFUz2wk+g11Ky7iPkrjArTVeYprggy61ZEEj4Xh8bi0jwKstV5gVqK2bqquA9BBjLg6UerjbGOa1Y8/qr0o/mVN/e/FWwFJEGRhQQqwEIUhFshAS1wc04IOQVWyN0rw2Npc48gBlbKn07UzAGVzYR4HcoyBtHcN4s+Rjie3I/ZcP91y7mljiHDBBwQei6uhtzKCF0Yle8OOTnYZUysoaTM0giaSd3EZJKingDnKKCte/NI1+D15N+uy6Ono3dyPSxG93Mho9X6rEn1FTsGIGPkI6n1QtXV3WprAWvdwM+4zYfHxRywM67XlvA6CkdnOz5B+A/itFhV4ThUksAU4TCrwowgCnCYVRVozwg4MsYPgXhAy5w7KktVbSHNy0gjxHJMIEW8JhXMKEDKWty8A9SuxslsgbVRTNYMxtyD58lyDR67feu2t1W2lpg5zC4Fo5LB2jGyWmnGpZbWP8+Rp0bhG6Lm+ERqOoa+EUYOQ71njy6Bc9R2htfVdxHGB1c7o0eKyZJn1lxkeRl8jsBo+gXS0NJDaaIukc1p9qV5K5c7V2To41Q5sf5838uiN0YPtDUyslxBfgrt9tp7ZSiGnjAb9o43cfErlrtcYPT5WQ4cxrsAt5Ku86nkq6kUtHmOnOznHZz/4BYsdG0tzhHZWjvocr734peX93/Iu0NTValVUuI+f6Mc3LhcCG7K1V1jJmnfBPRTXQiMZAWqquQ6LuqTyctR4DfWk5rK9OkjZ3QOQOqxKJveTtaTsuintdLDbWzcJLnFOSbINGn793iiyuCP7oRLaRwc4iIsx0AiImAREQIIiIAKFKJiIREQAREQAREQAREQAREQARETEEREAEREAEREwCIiACIiACIiQBERABThQiTyMIiYRkWAq4x62VQqgT0Q+eg+hc4eF2FdYqIn42cOIeayY4BL/ROB/ZPNTT9SDXoSwK/G0uIA3J2CrZROacyvaxn3s5+SvsqRC0tpW8Oech9o/wVqeSpmfUUAZb2+vvCCTtzyVrwFcNRNJEI3yOc0dCVACmitlGFfoqCSvm4Geq0e07wVPAScAZJ2C6OnZHbKEB5DQPaPi4pt4ApaKS0QDkzPXm5yoqayaeHioJIx45GT/srVXb4q8maKbLz1zkf7LWSUlTQv4iHNx9pp2SSFkt1MlXx/zp8menEdv4LeU/d3W0lvCGlw4XYHJw6/mtY25GRvBURtkZ7t1n2mSmjldHTuIEm5YehCH0A598TopHMeMOacEKMLa32nEdeJG8pW5PvGy1uFJcgUYU4WNc7jT2qkM9S4gZw1o5uPgFrrTb9W629e0UnoVCTgVEjuBp/vHd390Km2+ulZky+qidvuo3LntYMvcGjxccKgVdM44FRCT4d43+KmTsgoqT1tQ6rYyY82RR8R/zEn6LFqOznR4biO/3Iu8RStcPwC50u1qk+DoR7Ltks/2NLcoJL3rWkstXcRbKKcNDJiCWuJHXBGST6oycBbi4dlemrdM+nm1DW+kRnDw2jBwfd/utLcOzmIsJtt/hqA32Y6qB8J+frN/Bbe23O4VUMduv0RFfSx4p6rIcKmIfZLhsXNG4PMjIO4XM1Wqdj7yqXyOppNKq8V2x+ZpanRFRbv1tivgmI5Mex9O782n5qxSatrrbU+i3ynccc3huHjzxycPcutWPX26muVMYaqIPb0PVp8Qeir0/aNtb8XKNF/ZlVi8PUyKWphrads1NI2WN/JzSrhbsuFilqtEXctfmekm3xnHGPHycFs2doNG8+vSTtHiHNcvSVaquyKlk8xbpLK5uODphsQuqgdxW9p/ZXE23UVhuAAdc20rz9mojLPry+q7WjDH0DRDIyVhG0jHAg/EK1zjLozO4Sj1RrIpn01WJWY4mOyMqm7XWornt754DByY3ZoWcbU5z95AM+Som026ZwPf4HuUHXVKaskluXRjU5qDgnwzW0VpqrjUtdTx8TWn1nHZo+K66lsUUbR37jIfAbBXKSVtFQxQMYMxtDfAHzVioqaybIjlEQ/ZG/wA1wtR/9LVTcYYhH48v6c/g6tPsVEU5eOXw4NLq2jhopIu4HD3jSSzPLHVclVuyQF2FXZJKx3FLUOc49XblYL9H95nNSd/JdXT1TqqjCctzXmYbbIzscorCfkc/Q7TsK6iteDYohnfiVqPSQjLf5wdvJbN1qY6lELnk46rXuXBmw8nM4Rbz9Ax/2rvkie5Cwzg0RFkNoREQAREQARETAIiIEEREwCIiBEIpRAEIpRAEIpRAEIpUIAIiIAIiIAIiIAIiJgEREgCIiACIiACIiAClQiTBBSFCqCYi4xZVO8xSB4GcLGYsiMKaIMzJag1HCOHhDfNVxhWYwslgVsStlxoVwBQ1quBqmipl2hYHV0QPLiytndIZamJjYxkAkkZWsgf3U7H/AHSCtvWSyRQCSPB4TvnqEeYGlHeU8mWlzHD4FZcN3kG07Q8eI2KvelQVQ4Z2hp8/4q3LbMjigcHDwP8AFP4iLroKKuGY8MefDY/JUUdslpbjHIHNcwE5PI8lgvidE7Dmlp81tLSJnsc+Rzizk0Hr5ofCAt6hAPcePrfktPwrY3abvqwtByIxw/HqsLCa6Ac5q+zVNzpIJKRokkpnEmL74OOXiduXVdBQ9rdHeLJ+irk9+nq5jQzvomHuTjbh29aMeXTxWjv+qIbU/wBGpm+kVh2EY3DSeWcdfIbq5buzK43kfpjWNaLZTkD9XwjvnDoMcm+7c+S4vaSoazN8na7Ody91cF2ogmhZ3vEyaFx2nieJGP8Ac4fnurUUpDt91t4ILDYnObp+2cBc3hdPUPc9z/7pOFiuw55dwMbno1oA+QXmW1njoesjuaTlwylu4yqhtuNvcpAQqJIpUooJTAtywRTOaZY2PLfZLmg49ytSW6kmbiSlgePOMLITKak10FtT6mkq9H2ypBLI3U7j1idt8jstYyy3vTcpqLJWyOA3LYzwk+9h2cuuUFaa9XbW+GZrNJVYuUYFm7U+KRsF8p+5lacGaMENP7zeY+H0Xat1VTSRtdG0va4ZDmnIK4a72Gmu0ZL28EwHqyN5/HxXN0NxrdIV3o9U0y0jj7I5e9vgfL/3Xd0uvhb4Z9Tz2s7OlV4odD1w6lh/snKkalgB3jcFoKWrpqyjbUwyNdC9vEH8hjz8FqLhqmz0ri0VHfOHMQt4vryXVe2Ky2ciKlJ4SO1OqYOkTio/lRF/Yu+a85/lxbwdqepI8cN/isql1Zaalwa6d0BP9qzA+YyFBTrfmWOqxeR3R1TF0iKtu1U3pCfmtAxrJYw+N7Xsdyc05B+Kkw+as2oqybz+Uo/sj80Wi7vzRG1CyapERYzYEREwCIiACIiACIiYBERABERAgiIgAiIgAiImAREQAREQAREQBCKVCBBFKIAhSiIAIiJDIUqEQARFKMgQpUIk+QCqaqVU1PIi8xZMYWPGsqIKaIMyIwslgViMLKjCtRSy4wK4AjWq7HE6R2GAkqxFbLeFtaOUVFKY3blo4SPEK1Fbusjvg1ZEcMFOcjDT4kpkTVSwmKZzOeDsR1V6njqgcwtcB58ltO+jYM8x+yFjvuTP6tjne/ZGQL7Ie8jDZ2tJ6gbhW62ubTx93Fjjxjbk1YctdNKMZ4B4NWPhGAyWseK5vU1+mgqGWq0tdLcJyGYjGXMzyAH3j9FtdRXhljtL6g4MrvUhaerj+Q5rL7NtPR6esr9X3tplr6wE0jH+0Gu+1+87x6N96w63VLTw/k36LSu+eX0MvTOkaDs8oGXK8NZW3+YcTGZ4hBnng+Pi/wCAWFc7rU3WpM1VIXH7LRs1o8AOipuNxmuNW+eofxPed/ADoB5LEXj7LJWy3SPaU0RpjhdSUUKVAuJRQsO6XWntFGaipO3JrBzefAJpNvCE2orLMmWaOCJ0kz2xsaMuc44AWlGopblVGl0/bqi5zjmWNIYPf5e/C2em9CV2sXx3PUr5KW3n1oKFhLXPHQnwHnzPkF6hQW2ltVG2moaaOmgbyZG3hH+/vKteyvh8v7GbfOz3eF9zzKl0TrW4APqauhtjT9geu4fIH8VsI+zG9AZfqt3F4ClBH1K9Akq6eH+kqIWfvSAfmrDr3bG7OuFID/1m/wAUKyyXux+xBqC96X3OIdofUlKP1Vwt1eB9mWN0Lj8RkLBqoay2YF2opaMk4DyQ+I+542+eF6M29W15w2vpT/8Adashj4KmMhjo5mOGCAQ4EeajJyXvR/sWRkv6ZZ+55gHZGy117o4KqgeKhpcAPsjJHuXdXvRzeF09nAicN3Uv2H/u/dPlyPkuQqIRNG6KQOaRsQdi0hKMsPKLXiSaZxdlsNfdaUxunkp7bxl2HfbPLZvj58l01JpW00gH8279w+1OeL6clhUtzda7v6FWerFKf1cmds+fguhlljgaTI9rAOZJwtWovtk+Xx5GbT0UxT458yybZQubw+g0uPDuW/wWDV6RtVU08MBp3/ehOPpyWUL7bOLhNfTA+HeBZ0UjJow+J7ZGHk5rgR9Fm3WQ5y0adtU+MJnD1Fru2lXuqKGYzUo3dgZGP2m/mF0dgv8AT3yPhGIqloy+In6jxC2+M81x+o9PutsoutpzEY3cT2M+x+0PLxC6+i7SkpKFhx9d2ZGUXOs60x78kXCfyuu5Ge+j3/8ASai7ntUDgeyT/g6BERVFgREQIIiIAIiJgEREAEREAEREAEREAERECCZREAEREwCIiACKEQBKhSiAIypREAFClEAEREgIUoiAChSiAIREQAVTVSqm80AX41lxBYseAMlXG1bWnZpKluUepVI2UQWXG3C19LWMkeGkcJPLKvXKR0UDWtdgvKsVkdu4pkzYwDvXhrCCeXNbWJjIGAD/AN1x9sqTTVrHAk5OCPFdBd6ptMWk55bBSrsU1krbMqeWck4GG/srGwHHfOVq2ahnY72Gub4Hmt5FJHURtc9nAXDKsjNS6ES7Qvy0xOOcbhY9ZCIpvV2a7cLJgo5DUs7g8RJ5Lb1umayWBpDWhwOeaJTjF8snGEpdEcxhMLZusFWxxaWjI81rq5r7fBNLMOEQsc8/AZUlJPzE4teRx7Ledc9p9LZ93UVISZ8cuFu8nzOGrrtVXkXK6GKnIFJS/q4Wt2G2xI+W3kAuf7LS6h0rqG/uJ9JqpG0cT+oJ9Zx/zD5K3XV0Vvo31ExdwsGzQN3HoB5rx+vtd12Eez7OpVVW5ldZXU9vpzNVytiYOp6+QHUrVU99uN5kLdP2Sqrmg47wtIb9Nh81sNMacp7pUtu2qopamR5zTW5oPAxvQv8AHPh8/BeqUdvudTCxlJRsooGjDQ5uAB5Db8ER0c11j9eF+2E9dFvwy+nL/SPJHQ6zpxx1Gl5HM/8ATdk/QlTbr2ytc6OakqqSZmzmyxnAPhlet11hpIos3y8tjb1ZxgfT/ZaXOhqOXhgpKi6zDlkOcD88D6LXDQQmvF9v2/0ZJdo2Qfh+/wCkcSKrjk4IY3zO8GNyVVTaCv8Adr9Dc/0XNM2Egww1UYZE3wyHEZ33XWSdpzKWqbbrHaaammfIIWxhuXBxOACGgYK3ssOpp481l0ip87Ygbv8Ah+avVFGn5aS+Lz9kUy1Go1HCy/gsfk1w0nrCubxV13pqEHmIzuP8IH4qxLoehj3vGrnSHqA8D8XH8FsWaSjqmOmuNwrKnHQvwD88qYtMWqIbUoefF7iVH2qiv3ftFL8h7LqLPe+7bNMdPaDpd5LlV1Lhz4X8/k1VspNCAYbRVch8TJJ/FdDFbKKD+ipIGe6MLIDGt5NaPcFB9ox8k/r/ANE12dLzkvocjP8AyIb6ottWP2mvk2+qtQ2DT1xlH6Juc9FOfZa5++fjg/IrtenJYFfZaGvjPf0zC/GzmgNcPipw7Sj0lF/XJCfZk+sZLPwwc9JX3nSczWXI/pKiPKVvtge8/gfmrOpaenudGy8WxzJGnAnDTuB0cR0I5FbajEr2us12JLnx8cEnFxHA6Z6kLlpNPtdVywDvI52Eh3dZ38dvBXXaCnULvIPa/wCOjKtPr7tPLu7Fn8nM6htzbha5G7CVg4mHzHRazR+l63tArZI6m4CGmo2t7zO799hhvwO5XV1llqoI3MjIlBHI7O+RWk0XUT6a7UaeKVpihuOYXBwwPW5fJ4HzWOWlu09cuj9Gb/a6dRYsZXqjv6Lsm0tSQhktC+qdjd80zsn4AgD5LFreyqhgcZ9O1c9qqByaXmSJ/k5p3x8V3RwNiRnwRcbvrPNnS7qHkjy2P0unqZKO5wCnrYQC9gOWPaeT2Hq0/Q7FXHAOaWuAIIwQeq7nUVlbd6EFgAqoMvgf1z1b7nDY/A9Fw43GcY96i2nyjRBvGGa79B24cqGD/Ai2OAil3k/UO7h6GhREXrzxQREQARETAIiIEEREAEREwCIiACIiACIiQBERMAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIkAREQAUKU3RkCFW3mqcKpqBF9jeIYPIqh0TozuCR4o2bh5K62YzEDGAOapssg0/VFMuShjHHByQOivVFXK7hbKQ4DcHqqn0NbURh0ELjGN+LKqbQjuuKZ3E/y5BUqzYk5PqUyiy5QRvhkbMSOIHIGFXcqieeoa+V3HkYCv8AcHgAi2dyGeSyanTF2nYxzY4xjfIepUzlN8Pgi4vHCMegp6ZkglqpGnh3DAtmLvROdw8Rb8Fr5tP1zWNc2MFw9r1ljyW+eNwc+B2BzAC3wk4rCRBxa8jvdJ0PptX6Q14MMXUdSupvFdT26hfVVlRHTU8Qy+SR3C0LlNO3ig0vouquVfKYoYz7P2nuPJrR1JK4mmort2p1b75qWpNs03SuPdRtPPHRniehfjnsB4YtTZiblLojr6aputJeZlXbteZU3A0mmbXPc5js17muAPmGAcRHvwua1LX68lttVPdLSyjpHxOEhdEGlrCMHGXZXWzahprXSGh0tRR2qkGxkY0d9L5udz/Erm6ltRd6yGl43VE1VIIx3ji7JJx196ww1tltqrr4TOnLQQqqdlvkV6QfXVmi6KwWuilmqzUyVU2BsAdm58Nupwuzpez6ktkUdZq66xxgHiFPEeZ8M8z/AHR8Vn3Wvp+z+1w2axMY2rewPmncMn94+JO+OgCxNPWQXzguF2MlXPO4hneOJGM4yfrtyWtquhd5jGfm3+jJF2XPu85x9F+zYU+qaSPjj0pYZKgs9qoewtaPeefzIVqZupruT6ddBQxH+qpRg/MfxXT15jpYI6Gma1kUYGWtGAsBYbda08Vr5vlm2nRJxzY/l0Rp6fSVuidxztkqpOrpnk5+AW1gpYKVvDTwxxDwY0BV5UhYp3WWe/Js3Qprr9yKRahsVvnvMdzko4XVkPszlvrDoPesypk7yXhHIbBXc+j0wH23K1TMzJxHk3dRbbwgWE3IqqTwRsiHTcrGVcj+N5d4lUKLJpYQUZ3Wp1Lqei0xb/SKxxc9+RFCz25D5eA8T0XltbrPUuq6wwW81ETTyp6EHIH7ThufjgK+rTysWeiKrL41vHVntRBHMEe8KF4s21a6tTRURx3ZgG+WymT5tyfwXX6A11WX2sltd0gLqqFhf37GcOw2IeOh32PVSs0zjHdFppEYahSltkmmdJqAdzBT1zR69JM1/wDdJwQsa6ONJq2kqIwAyYN4j/lP0ws7UG9grNv6v8wtVqeMvbbgXYc6PH+ldXs576HGXTlfY5HaH+nqIyj14f3MrUoj4IHBzS/iLTjwXlfaG19NNQXGEkSU02x8Ds4fVq7m62B1PbaiamqJHyRM4gwNADsc9/cvN9YPrH2lvelvdGQAguJOd8Y+qVWp03c91GWfky67Tanve9lDHzR6MypdVNbUOc5xlaH8ROTuMrpbFWuqaZ0chLnxEeseZBXFaecX6ct7nnLjTMz8l12m4iIppTycQ0fD/wB15NLbNo9hbiVSk/4Nzk9FwN7phT3qpY0YaX8QHv3/ADXfdFwd/mE19qS3k13D8hhWoxQ6mBgIoyiCw0KKFK9meHIRSoQAREQIIiIAIiJgERECCIiACIiACIiACIiACIiACIiACIiACIiYBERIAiIgAiIgAiIgAiIkBIU5UAKSMKqTWcF0c4GQnPkowpbspRwQm3gqjiJO+w8VsLfAHQknfiK13euwcHZZNHMYQ3JJb1Cy5qXQzeZ0cxFPYxEx27iAceC1TnYjOASBjJ8Fu6eSl9FLnRF7QMnZausqzOxwaxscf3QEWwjuTkwtK2vLebTn3Ls6WviFAwPfh4ZgrUWypoKvu43uAeRjccytzUUscVOA1owtNNcItuL6hBY5RhvqIuA+uFa42luQQQq5KdjmEFoWm1HUstVqmqGHhMUbn/EDb6rYsCeTnTTS9oWvYLBBI+O20T3SVDmnYY9t3v5NHvK6jVF4ZUSR2+gY2G2UYEdPEzZpA24v4f7rRdmQdatA3W7P/wCaudR6JG/rwtGXH5uPyVFVM2GKSWQ4jjaXO8gAvLa+92WbUes7O06rhvZrrxdqW103HPJ67vZjG7nK9oOumrtZWiWalkpmGqZwd4COMb7jI8VvOz/RkczW6kvcQlrar9ZTQyDLYI/snB+0Rv5DzK2eui6judkuoBxSz7n3EO/IqzROEblBcvnn5Fetc50ufRccfMs64c5+rq/iz6rmge4MC7fTEbKa0U7z7MNM0j3kLle0CHGonyx4MdRE17T47Y/DC3mn6s1OnKNwOzomtcPNu35Lbrm9kJf50MeiWXKP+dTPkeZHuc7cuOStHq7UbNMWCSs4WvncRHBG7k558fIAEn3LdrzftkDvRbV9zvJSf3sNx9MrmUQU7EmdK6ThW2jHpLBrm+aXfqiK9yNHC6aKmbI5rnsbnJAHqjkcA81vezbXR1E80F0LG1sTO8bKBgTsHPbo4fULhbb2j362aUfYaWWEUpY6NkhjzJG12chpzjqdyNsrVaYqjbdUW2pYSDHUMBA6tJ4SPkSunZQpRfHwOZXdKMlz8T6Hml72Qnp0V1w7qkDftP5rAq6uOhiMku+DgN+8VwWpe0+mtde6CpmmkmbjMVMMBmd8EkjdYaNLO5OecL1Nl+pjS1BLL9EehnmqXuDGlztmtGSfALmLLqKettdPcGsmNLUN4miduDjOP+/FdBSXCGsH6p2H9WO5/wC6jbppwW5cr1ROrVQse18P0Z5JR0FZ2n6wqKuSR8NBEcF39nHn1WN/aPP5nwXq9rtNHZqJtLb6dkETeYaN3HxceZPmVco7fS26Ix0VNFTRucXlsTA0Fx5nbqshQuudnC4S8idVShy+WyMeChsTGvc9rGhz/aIABd7z1VM8ohgfIfshYU80xjgjdnif6z3N2wFnWW8JZZqUVjdJ4Qvp72iZSN2fVSNjH7ucuPyC1V1cLnqqmpYcFlOBxHOwxufyCm93hlDUOcxwkrHt4Io+fdj/AL+axrBQuhn46hpfPPu4k8hzXblNaDSYl70s4Xx/Rw4VvtDV7oe5Hz+H7MzUl4o7VZqiLvo3VErTGGggu35nHkF4vq+vkq+5p25w53E1v0H1K9kvmm6KcmtNO0yDAeDyPnjxXD9oVpik0y6djGh1K4ObgYwCcEfX6LiaacYzSO7qISlVJpnWWTT87KClp+ExshiYwueMcgAcDqusp4GU0DYoxhrRt5rn+z25yXXQtsqKhxdKIzE5x5ksJbn5ALbXW80dlpu+rpgwfZYN3PPgB1WdwcZNPqWyudkV6E3m6RWi2SVMhGR6sbfvPPIf9+C88MxcS97sk5LifqpuV5qNRVwqJ2mKnj2ghznh8z4krUXS4MihexrgGgZkd0A8FYoZeCKe1ZZsfTYf7VvzRceL5SY9t3+AotHs0vRlXtMfVG6REXpjyRKKEQARETEEREAEREAEREAEREAEREAEREAEREAEREwCIiBBERABERABERABERIYQDKJlAceZOEwmVGVFZJPaERFIgSFJ5qByUlUPqXr3SFJyRsoUhSSzwQl0HAQwnlhbGnoTM0FhHmCsEu9QjxW4s00Zm4JDjiGBnqq3CpeEzJZlhm8ho3PtD44vac3AWC6zvioJ5KgYIYS1uVvqQBjNhsFqrjdJKqOWOMBkeCOW5UZygnukTtisGsow4uiLBw5IwT0XfzuD6Nu4J25LkbfRsr2NAk7t4Ay0D6ro4o+6hDMk4VmnjjLKq+hblHqrju0J2dNVu+MRtHzcFl3O/Xa5ajfYtMUTairiGZZX7tZ48yAAMjJPU4WDdNA9ot1ppYayClkilGHgTRN2WqVkYppsujVKTTSLNkqwzs5sNNHjH84kdj7xlI/AKH243fgogcCokZG790uHF9MrGh7N9f2+kjp6WKlEMRcWsNTEcZOTz81T+hO0eyyNrHWlkzaY94eAxyZxvya7J+C87ZpLHNzTXU9JVrKlWq3n/PmewBrWANaAGjYAdAud1w1tXY30jWF0xxIzHTH8RkK3oTWkOsbZK90Qp6ymIbNEDkb8nN64OD7sLI1A1zaxjwPVczAPmFznKenmpeaZ0KoV6lbX0aNdDUu1Noqlk9qrtzBE/xcGj824PwKyNFXAB09uedwe+h8wfaHwOD8VzP6Tdo6+Mq2gvpKs8L4zs3PPhz0PUfELcV9pZqMQVumq9lLI2QPfGSWvj8SAPDnjkfFepezWafMOj+zPMLfodQ4Wf8Ap25XN6809JqHTUkVM3jqqdwmhb94jYt+IJ+OF0JkZHFlzy/AALsbk+OFIkDnOaObea4Md1ck8co7r22Q68M+by1zHFrgWkHBBGCD4LeaLs0t51TSMYwmGCRs87+jWNOd/eQAF6zd9I2G7VJqa+iY+Y+1JG8sLveQRn4rEhjpLdAaDT1PHCHHLjHyz4kncldqEpWwbxtXq/I4s9tUkk9z9EZdXObtd200Z/VR7vPh4qsaRsguE9Y62U0tRUEGR8rA/OBjYHIHwWHd7lHofTclfJSy1zw9oeItufUnoB+a5Gq7coeANoLLNJK7YCWYAZ9zQSVyr5T1DUaF4I8L9nSohGhOV3vy5f6PUAxnAGcI4cYDcbY8MLitZamsmmHta6cmrc4fzaAhzmj7x39X3dVz9RdNW6iZ/P69tnpnDeCibiQjwLs5Hz+CpoNOW+ga4xU3evd7cso43O8ckqim16WW5S+S6fM6E9DPVxxKOF6vr8kdfp/VouVs9KgMlVTcZb3nCctI5tIPvW1GpqID1nlrvAsK5DsjhdRzaho2ZEENW3gHhkO2+QC9BMETt3RsJ82hbbNbQpNSqT+HH9jkx0V6Xhta+5pKnUdPM3gjimqSTs1rcBYM094rZGwshNA2XkebyP8Av3Lq2saz2WhvuGFKhLtPasUwUfv+icOzVJ5vm5fx0/Zzdu0v6PmR7uKVx3fJu7zK30NLHCcsbvgNz5BXcKVyrJztlvm8s6scVx2QWF6IxbkQ23y56twvNO0etbS6Ukiz69TI2Me7OT+C7+8VHGWwM3wcu/ILxPW9/gveoo4GyfzGjJbxNGeN32iPlge5XaWtztTXRckb5qulp9XwZ2nbtdbfZ6amiudTBCAXCJrg1rcnPhnr4rOM8L5TNPM+eU83OJcT8Sue/TlAB/Su26BhWNPqJns0sLnuOwLtvoFslTOyWcGeN1dccZOkq7kWxOIcIowN3ErmZJarUdeygtzCWOOSTsMfed4ALNoNK3zUD2y1rXUtNzBkbjb9lnP4ld5Z7LS2Ok7mjg4c+3I7dzz4k/lyXU0nZ+PFI5Gt7TTTjA4z/wCHVWNvTqfb9hyL0DhP3Si6vs1focb2q31OQRSiyZNWCEUojIYIRETEERExBERABERABERABERABERABERABERABERABERABERABERABERABAikJPoNdQeahSiihspRSVGFYmQwVDkpUDkpVDXJcnwEOwUZU4yMJpMjLoByWXTnEjfEEYVgREROOOS29taI3gyNaRzGRnCo9m4xnkz85OspwXREDYkYWjls9U2CV0mGNjaTz5rZ0texoHFlU3K5QehyxN4nSPbjlyUp1r3p+RK1xkupft9uZ6TFUU0zOFrRxtG55LaPOGk5XN2PjprgHx7x8JDt1vXvfLs0DdaKPFHOMFUZLBwn6ZuPZrriuvIoxW2+4khxL+HmQ7GejgQfIhevS3K8TxMkpqVr4J4xIzDckNIBwd+e68f7UXtdYYmiWJ7m1G7GvBcPVdzC91s4xaKIeFPH/pChc1XLOMm6rNkMZwc3+kbsSf5s0Y5/q/8AdajVuu6vSFgbcZqFk5mk7mFvFwjjwTk89hhdVNv3nxXmPbZt2f2vzrz/AKHqc2tucFFSzPDZh9jVC+M3Suqi1tTV8LhFyPBku4seBJx5fFejVdIytpzFINuYI5grx+11ToIqWppJXQzwsbwub0OBkEdQfBd3bO0CkfGGXWJ9NIOcsbS+N3ntuPqvK35sm5M9fVHuoraXKzSklVG+CVsM8L9nBx2I8wV5/wBm1vqL5frpw1MkdNSNzG0O3aXOIbg8+QK9O/lnYQ3i/StNgb4yc/LC8w7Pr1Sab7Ra+hfKDQ3F5iilILQDxcUZOfHJHxV2kdlUZ922mVayUbpQ7xJo76Q3yhc9kVb3rIxlxlYHcI9+6uw1l6keyF8kIe9vHlsfIeey6MxtwQWjfntzTgbxl+BxEYJ64U12nqUuq+iK32bo3/S/qzSiy1NWQa2rkePujYLa0lDDRs4YmAK+pCzXaq6//cllfYtq01NH+3HH5+oIBHILxTWOlmaS13T3VzCLRUz94HBuRC85JafjuPL3L2tWK2ip7jSSUtZDHPBKOF8cjcghRqtdbfoyycN2H5rk4ehhZUjvD6zPs+DvNZs0sVJTSTTOEcUTS97jsABzWbbdD09nlc2grallG7JFJJiRrD+w47geW62Q0/RO4fSI/SOFweBJ7ORyOOR+KplFbuvB1VrE4Zxh+hquz+0z0FknrKuN0dTdKh1W+N3NjT7DT58O/wAV1CIpSlueTmpYWAiKHENaSSABzJURkrDrq4UreFvrSnkPDzK1d+1hbrHTF9RUsjHQncu/dbzK8su2rrxrSsfb7DTyxwP/AKR2fXcPF7uTR5fitFOnsveIorturoWbH8jN1xrd8r32myyGaeU8E00e5yduBmOZPU/AK5p7QFFS2r/i9OyoqpcOeCTiIdGgg8/E/wAFsdLaJptPMbPNw1FcRvJj1Y/Jg/Pn7l0DvaAXq9HoYUR5XJ5PXdoT1MuHwaCLs9scjsttzj75n4/Fbeg0xR2sg0dDBA4/aawcXzO66mCmZHQtdkZIVuaBzeBzgWg7jK1ranwjA5Ta5bNP3B4y1x3CvMp2gbrImp2CPvmyAuLsFqoBBVmclbWC36O3wRXUQI80REXOOqEREAFClEZDBCIikQCIiACIiYBERABERABERABERABERABERABERABERABERIAiInhBljKKET2oW4nKZUIltQZZOUyoRG1Blk5RQiNqHlk5VbHAFW1U0I2oWWXi8uaR0WZSTGJwySW+Cwg31T7llQxhwacn3LJGmxTTyVyZt4a+Nv2SrvEycvl4Ty69FgxRBZkTeCM4Jx4eK2XQ3Q4KWzNhlhpZS4tdkjktFqCtuOotS2/S9nmNN6Z608ucYbud8b4AaTjrsFtHBrWl8jvVaMknoFz2nbXfNWX9+o7E6nt0Vvd3UE1TxETEA+rgDfIdv4A+KhZJU0dcMv0tfeW9MnRVPYzp80vBS11xbUgYM7+BzXHx4MDb4q9pbXl60fqiDTWspG1NJPhlHXgct8Nyerc4G+7T4hVs1ncrG0t1dZZqZjf/AJyiHfQn343auQ1xqOk17dLRatPMfUSNm4jNwFvCDjPPoMZPuXDouvnYoz5TPR3U0xrcovDR7hMC1khOwwSc9F4x2p6xtWo7JQ2WzySVdXT1RlkMUZLMcLhgH7R36bea3fave62g0c2lincBWzCB7s4JZgkjPngD3ZXSaX05QaZtEVNQwMExYDNUcI45XY3Jdzx4DkF0NZqVp0ovlnM0Old73o8Io71VWqYQ18UrQNhxsLXgeYPNdFBdGzxCSNoexw2LSvW79p6g1Jbn0lzgErXD1X/bjPi09CvB3aVrKLWM1hfVNpqhpIikdkNk2y3lyyP4LnVKvVvCWJHXnZPSrMnmJu5akSDaNrfPmVpr1b21UPfNc1kkY5k4BHgtk7QWqAcCqgc3xFQf4ZV+l7L62d4dc7kxo6tiBkPzOAttegti+DHb2lRKOGbzQna1E2CK26keWuYA2OuO4I6CTz/a+fivU4pY54WSwvbJG8Za9jgWuHkRzXlk3ZzZX20U0cckUrdxUh2Xk+fQjy2WihsusNHyufYquSanzkshOQffE78sqGp7Kl70COn7Ug/DI9yUrx6j7aLrQPEN6tMUj27EtLoX/I5C3tL222SUD0iir4D5Na8fQhcqWkuj/SdWOpql5noiLimdr2l3D1qmpZ+9TO/JS/te0s0bVVS/3UzvzVfcW/8AFk++r/5I7TKZXndT22WKLPo9HXznzY1g+pWon7cZ5JOGhsjT4d5MXH5AKS0tz/pIvUVLzPWlaqKqCjjMlTNHCwfakcGj6rzCLWmoLtSiSRzqAuP9HG0N+vNc3frrFUslpKiWWrqZRgta7icPeTyShRKUtnmWykoQ3vhHot67V7Bag5sE5rpR9mEZHzXFVOv9S6xrBR2GkEfGeFoBBOfecNB+a4+CzyOrYqWmhNXXVDuGKmZ6wGfHx/Be29n3ZvS6VhZWVzWVF2cN5ObYM8wzz8XfLZdmvs+uHvLLOTLW2T93hHkf6FdQ6mEOumV9MZN+N24f5l2/q+bc/BerWyhoqChZFbYoo6cgOb3XJ3nnr711Op9M0eqrNJQV7RwH1o5ftQu+80/j4heM6O1ZDp2eos11nJgjlLYJ8HhZuQfMNOxHhuurRKNfDXzOPqq5WLcn8j0ZwVLGB1QwYyMqoOEkTZGODmOGWuacgjxBUU0hdVMBwN1uOWjraynYG07QAxvDkgdVrbpO+Z7WYw1gwFn3ebu/Ryx4PqdFpqucvkZtjIWapZSbL7XhtGs4+CdzXHAyrrH/AK0gHK19acVzM7gv5LZxxgEkBaigqyiIkI83UKUXLOuRhMKUTAhFKIApU4UonkWCMJhSiMhgjChVIjIsFKIRhFIQREQIIiIGERECCIiACIiACIiACIiACIiACIiAIRSgUm+BJcjBUKskqMqve+pZsWcFKnClp3UklDk08CUU1kpTCkk4UtOyHJpZwCim8ZKcKpqjJVQO/uRGTb5FKKS4LgBIWXS8ljxjKy4RjGFJQ8e4oZmRLLj2CxYgsqNaVyVMx729rLDWmSURNMDwXnpkYC1/Z7rWCw6RjprrR17KZk73MqoqZz4iHYJyfEHI2yqNftlOk5O65d6zj92/54XomnLpTXXTdvdRPYKYU7GNhafYw0AjHjkFcjtacVFRksnZ7Jrk25RZXbNQ2e9QF9vuFNVNx6zWvGQPNp3HxC81r20tD2124WCNkImwKmKEYbvxcWw5ZaAcfFb7tH09pyCwVNdNTQ0de1pMM0P6t7n9AQNnZVnsY0rBJb47rLE/0ypc8d685xEDjLfDODv1WDs+tOfeReEjo6+bVeySy30N9qrTEOqbE+hneYn5EkMuM8DxyJHUbkH3rj59T650hZHw1lspaqGkaGiuOXgN2AzgjPTmAfFezXamD6UFjB+rPQcgtMaGlrqeooq+NslNVxmKQHwI6LqWxr1CzJHOqVlC8DOc7ObncLzpz0+51jaiad5IDQAGDOwwuQ7YIzbtTWW7xg8eOFxHMmNwcPo4qjSlVWaE1nWaZrXZYXl1O53sv6gj94b+8Lddqr6KvsltaWtfI+rY2Mg+s0O2cPkFw606NWl/P5O3Zi/S716fj9mNbe0CzV8wikdLRSE4AqGgN93EDgfHC6TIcMjcFYGhNKWzXfZvJT3uHNVRVUtNBXNaBMxrcFuXfaAzjByMLm62nv8A2WVzKW7sNdZpHYhqI92j90n2T+wfgvU16pN7ZnlLdHhZgdiQqcYWuk1VZ2W1lb6fEYpB6g+2T1HDzytRTXe/ayqXUmlLdIGA4fVPwOD3n2W/UrTKyMVlsyRqnN4SNrfbzabZBi7OjfkZbCWCR7vc0/iVw77XUazkc6xWGmt9C05fWSN4GgDmS/l8GglesaY7F7Za3it1JL+l64niMbie6B8wd3+87eSu6xZHftS2/SVPIylZNGJKsscGhkAO0bB952OnRc+zUKx4XQ6dOmVS3PqeZaM7O6W6Ty1taXVNuYTHCd4/SHDYuHUNHTqVT2iabstk/RlNbaEQT1UruN/eOceAYGNz4n6L3RmmKWljbDTF0MUYDWRgDDAOQXkfarS932h2WkMjXBlOZPDm53/4qmMoyaSNkltgcIyko6C7j0qJhpKhvA1zhkRu/wC+q3MP6P0vTOa+okJkdxMjPrOPk0D8Vi10rr9UvpaVzGUUG8kgAy89MeSt+gzWE09xqnNqSCI5wRnhbybw58MKu/R99POcR8yzT6zuYYwnLyZdlq6+6ZADqGmP2W7yvHmeixpYmUQZTUcBdUzkNjjaMucTsPMroa64wUlu9La5r2vGY8fbXf8AZR2fSUAGpL9HxXOpGaeJ4/5dhHPHRxHyHmStCjXpYYgjNKyzUzzNlfZx2cv0zSemVTBLdalv62V3KMH7DT+J6+5d9Hbnf1jgPcMrNGfArDrL3bLfn0y4UlOR0kmaD8srP3kn0LXFI53XEppbfFbqKRxrbi7umDPJn2j+XzWsvPZ1arnp2GiqqPBiZiKqjAEjD1OfM74Oyrsco1dritvHtUVGfRqY9HAcyPfufiu5c9rWFzyA1oySeQCulY4JR+pXGGW5HznK2+dl9yZS3HNZZ5nHu5Geyf3fuu8Wnn9V21tuFNXwx1VJK2WGQZa5v/ex8l2N7skepLbPFJSRPoZRgskzl/7TQORHMFeK1VvuPZbqJrKhrqi0VZy17ftD8nt6jqPppqu28Pp+DHqNOp+KPX8nokt1fI9rQ4ADbdYVZd5A8AYJb1Cy44qSst7KqlcJY5GB7Ht3DgVTFDEYpOOMcWOoWiTwsoxwim8NGjmuchma9zASHZC3LrtGyFpcRxEZIG61VfG1jyA0DcLeUem5G0oqI3DD29UKTS5Y51xykYf6Zi8/kiy/0I8faailvZHuo/ycAiIucdEIihMRKIiACIiACIiYgiIgCCoVSpPNNCaCIikRCIpSAhERMAiIkAwpwUQDKXOMjxyMFMFMIllvzG1jyGCowpUJ8i4CIUTQmERCMhAiCDtt71DOMg8YwUBdjJwqI3ukydgB5KzHBHKL55KOhVJIGd+SA5BwQqlBY6ljnllQG6FUgEncjHuVXCVJxTkEW8YSB6I3ZQ4EYwjGk8z8gk4x24yNN7+FyShz9kZ3U8G6ocXBwAwd04JZ4YTjKK8SwXqeQhzu9IGDstjDvhagHLwD1K3EDcNA8BhXtYMxmwhZLdiFjRbYysxgCkitkVNPDWUUsFSGmGRhEgccDHVcRovQdXrG9VNPQV1RT22j4ntqTzBOzQBkDJxk8tgt5quvcWRWqlBfPVkBzW8y0nAb73Hb3ZXo1DbItFaOhtUJaKypHHUPb1J9o+77I8gqbo95JQS5Lq7fZqpXSfCPPqPsspH3FrrreKu6xsdhrA0tDh5kknHuwvUrZc7faaNsFLSvDGtDRgNGABsAOgHgsjSVrEcJrpG+s/1Y/JvU/Fc3cZqmCumdPF3Ze4vDHNxgE7KyFFM5uqK6HMv1+rqqhfN8y/jov+zojqSDl6PIQfMLVy1sD5SWCRrDyB6Ln6i7zMaeCFm3U5K0tZdq6QkGYsaejBwrXHs2Hpj5mevtjVN8SX0MztUsbNQaeZe7YM3G0byFntGPmfi0+sPLiXEMvjtRyU9dURCOmtcRklDuT5iOY8sDPxXa6RvH6NvHBUOzTVY7qXi3G/In54PkSuL1LpaDSfaHHbayWSGwXCZkuW8jFxbtJ/ZOx8sFczV6SNF0ZtZx0PR6DWzuplWnjPU9e7MrdLauzegbM3gmrnOqXN6/rHZH+XC6uro6avopaOugjqqWZvDJFK3ia4LGpJWVT2OiZwQwN4WNHLOMbeQGyzcrnSbT5OklweQVfZZa9O64jqZaY11glYXGnfI5r4j4ZHttHn47+K9dofRaSgihtkEVPSBo7tkLQ1uPIBa3UcWbaJgMuheHfA7FXrPA6lou6zxQg8UJ6hhGcfA5CnJ7oJiUUmZdVVMpoXTSE4GBtuSSue11ZbHWWg11/caU0zfUqGH9Y0ncNb4nPIK3dby6s7QbTp6iDH8INVWF2TwMA9UbdT+YWLrKQW3XNiudzHpFo4jTlkm7KeY+zJjlnzPgUQjhoUpcMyezmn1CLZJNeqqV9HJj0KGqANQ1v3nu6AjofovN+2CgNy7VqWlL3Rh1vYeJvMYLyveXDBPivFO1Ed32w2x3SS3gD5yBSre63JGa2wOWrKCKgrKdlBES5seHx9C3IwSfeqzRtrIDPXu4mgE93yY0fms2mcKiaepO4e/gZ+63b8cqLRZqnVmoYLJSFzI+IvqpR/Vxg7n+HmQug2kssxJZZt+yPQIvNcLvcGPdaqKU+iwy7iWTOeX3W/U+4r3E9SOasUFFT2yggoqKMRU9OwMjYOgCrqKiKkp3z1EjIooxl73nAaPMrmTm5s3QjtR5Tq+gqm9oTKS/3OvbaLkeKkeyYtjY7bMZHIY/Mea6ah7MNO0wDnUzp3eMjicrTaqu57Qy2zWWl46Rkoc+ulYfVI+54fifJd/QUzqO3wQSSumfFGGF7ubiBzKunKUYrnDIQSbfBNFQ01uphT0cLIIm8msGAsSuJrrjFQgnumjvZ8dR0b8VslrrT+tlrKk85Zi0fut2CpTfMi3HkbIYAwBgLndW6Xo9SWeagrGkRTbse0bxPHJzfMfUZC6FUvYHsLT1ShPawlHKPA9G3aq0NqafS9/IZCZP1MhPqtceRB+4/wCh+K7Wrfx1ErmFvCT4qe1XRP8AKaxGro4s3SgaSwAbys5uZ7+o89uq4XSepY6+1iKulDamnw1xd9tvR35FdSmWfCzl3wcXvidFWwSPdluDv4rqIbvA20RxGQCRrQCMrjnXOk6TNVBudL/bNWlwTMveSzk6f9IR/fHzRcx+kab+2aiNqDfI0SIi5qeTewiImIIiIAIiJgEREAEUKUAEREAFGFKIyIhEKhSTItEqFOCoTAImEQInojeapd7KhntJbcxbFvxJIuFQqH81CUY8BO3noXNvFOqtZKN9oKxQ4Id7z0Lh5oh5qMqKWUWN4ZKIiMYEQqIfYKrVEHsFXPoyHmS/k/3hRD9pTJ9v3hRD9pQi/A/l/Yrf+6vn+WXBzCuDYKgcwq+iv078f+ejOppOjKHdFLOqh3RSzqqL/el8X+RQ/wD0lX8VR9oqs/mqDzKjHqjX2n7sCkn9dH7x+K3MQPitMf6eH3j8Vvog0NV0n0OEZMMfFjdX5pIqOjlqJnYZEwvcfIKincOEBa3WcjmaUqHMG3HGHe7iGU84WSOMtI2HZZZf0vfKrVFzGIqVx7oHlx45+5rcD3ldYHyX6+tDst75/CB91g/2VjRTG1PZFRCgHE50RMgbzLg88Y96tUdVJR1UdRCQJIzkZ3CekW5TmuvRGHtazbOuqS8HV/z/AOL8ndXq4CzWpogAa92I4h4bc/gFwVVK6Z7nyOL3u3LnHJKyrpdqi6TiWoLRwjDWtGAAtY+ePq8LXpNN3UeevmcftPWvVW+H3V0Ri1Ero2uDCQHDhdjqPBWYdPV1ypZKmnjBjjBPrHHFjmB4q7UPhcD62T5K/S6qqLfbHUcEIdz4JDn1M89uq6Eu8Uf9NcmbT4z4jnA3Oy6HUFpOv+zl8bQH3W2ZfEeryBy/vNGPeAtVS0jpH5IOOpK6vRNNKy5VE0bT3HAGZPJzsgjHu3+ao18Izpbfkdbs++UNQox8zTdlGrpbjp0U8kvFU0GIpGu+2z7DvfgY+C9LpKyOqb6p4X9WnmvDtAPae1K/+gj+ZO74jHLHejh/NeoBxaQQSCOoXl5QUj28XlHQXMNdbZ2yey5uPqsGW5x0NrLuJoc0E78mgdT7lgy1c07A2SQuA5ArkO0e8G2aWkiYf11a7uGAc8c3fTb4ojVxhhJ4WTZ9kUT7tX37VVQCXVc3cQk8+Ebn/wDoPgux1BZ4dQ2Gqt0+AJ2Ya4/YeN2u+B/NY+krQNN6SobZw8MkcLXTf9R3rO+p+i2nEqZzzPKFCPh5Oe7Pb9NcLPJbLl6t0tTvR52k7uaNmu+mPh5rgu3Emh1hp+vaNzBJH8Q7/wD2uk1hHJpfUdLqyia4xgiG4Rt+2w7Z9/L4gLS9uxgrtM2O60rxLEypPC8ci17OIH/KrFjeproyLXhcWcpUVH6Ks8fCMycIaweLsL1/s10kdLacElW3/iVfiWoJ5sH2WfDO/mSvPOzKxP1XqkXOqjzbbSGljTuJJubR8PaPub4r0PU+tvQKk2uzxituz9i0bsg83efl8/BX3Sc3siU1JRW5m41BqWh05SiSreXSvH6qBm75PcOg8yuUZbrtripE96LqWgacx0jCQB+94n6+5ZunNIPbUm53uV1ZXSesXvOce7w/7xhdXM6GlpJJXubFDEwvcTya0DJKqzGviPL9S3DnzLoeF6to6GfUd9ppfSWxWx0NLb44JeBkbuHie5wHMndZmmO0TVFz0rTUNnfSvqbbAX1lZXZeXN7wtjYB1OOZXO3C+01y1BeqiEyhldVPqoDJGW8cXDgHdV9muBZLnIQMukiYM+ABP5pdozVGkjZH3v8AtC7Mg9TrJVz93j6HsPZ9q2o1bpaSsq4GQ1tNM+CZkZ9RzmgHI8AcrK0RdmXrTTKlreBwmljkbnOHtcQf+/Ncj2KPDNLVb3Pbmatldw8Qz06K72U1JpL7qmySEj0etNRG0/dcSD+Dfmo48L+Ra+JI9IUqFCqGWKhvDIHjrsfevBe1LS50nq2K80UeLfXvLnMbsGSc3s8gfaHx8F7/ACt44y3r0965/VOn4dV6ZqrZPhrpW5ief6uQbtd8+fkStdcuPgZ7I8/E8ebFTzQMmiJMb2hzTnmCrT4GZ9UOWu0zPLS1FTZ65hjnpnuAY7m0g4c34HddTS0hqp2RMblzjgLqwanHJx7IuuTRpu525FF1R07OCR3YP94IpYRXuOXRSoXJOsETCITEERFJMi0ERExBERABERABERMAiIgQREQMIipBOXe/8k0sibwSoU5TJTwxZRBBIVIa4Hkq8pnzUlnGCDjFvJQQ49FHCfBXMlMo5I7IvzLfCfBS1pzvsq8nxTKlmWMAq4p5IKhVZPimT4qKyibSZAQ7BTk+KZPijnIYRST1VMbSwYznKuZPimT4p7n6BtXqUOaHc8g+SloDRgfVVZPimUJ8Yx9xbVnJGVPHt1TKZKlGcoPMScJuHusguJKNdgqcplRfPkJSaluT5JL/ACVOcqcqpriELjyLLbZ2vM5ZMd07RK12M8B5e5dDA8PjDuXEM4K1kcz28j9AsqOtnbyk+gUm2/Iz7V6m1hwBuVfqKOG40E1LOMxTMLHe4rXRXOqbyl/yj+CymXmuHKf/ACN/gpJsrcf5Oc09qm9dktfLS1VMa60zP4hh2Gk/eY77LsYy0/7rvKXtf0LdgHXCCekkd7Xe0xO/7zMrWC81jmFj5GPa4YLXRtIPwIXO3fTVDcgZRR08co3PcsEfF/hwFT3LUsweDS7YTjttjk9GZq7s4qh+rutK3P3pJI/xCr9O0DNuy+UA/wD1zfzXi79L0OS3gmjPhx/xVB0lRn+tnHxH8FNLUR6Tf1KJU6OXWtfRHs76jQo536h//fMViW79n1OMvvVG7HhVF3+lePfyQo/7af8Ay/wVbNJUTTu+d398D8lLdqf+T+pD2bRr+hfQ9OqO0Hs+oATDKapw5CKnkfn4uwFyOru2mS42+S36cpHW+F7Sx07yO84TzDQ3Zvv3PuWpg03bYXB3o4kI/tHFw+S2FXSU9bQiknpaYQtOWiOFrC0+IIAKjKFs/elkuh3FXuRwdF2X2OjtdjfUQVkFZU1WHTOgfxCMDkzx2yc56+5dovC3aaq7fUiostdJBIOXrljh/eH5ra0+tdcUDO6ljbWAcnyQtef8TSM/FUOuUeGjowvra6nrxPmuFliOr+2u22sevSWs95MOmW+u7Px4Grkq+/6xuNNLJU1hooGNLnCMti2/u7rvOwKzvht931DU5c+U+jxPcckges858yWj4KM04Ryx71Y8RPTpZeOeR3i4qniVphyqlgNWCirpoq+jlpqhgkilaWua7kQV43qg1FrsE2iaqnlqJn1sUlqeN8sLjlp9xOP7xXsznFu68gv1xuOoe2KSks5xUUUZpoJju2m2/WTe8cRA88eCuqfVFViOjjr5bDbafRWkHtkr4W/8RrmjLYXu9sg9Xk7DwAA58uq0tpKlsFLuO8nfvJI/dzj4k/krOlbJQ6ZpI6WCne0uP/MP3MjjzJPPJ8V0gKc5teFCjBdWXQdlzV8paavZfvS2CQQ0J4WucRj9W4+K6LiWjdbKe7116p6lgIkaIg7GS3iYQSFGDxljksnlfZzpy26n1GIbxTCrgprPC5rS5zcPJAzsR0yvRmdlOko2FsNo7sHc8M8n/wCSwNCdmrtKT1c1xrY7hJNGyGPgjLAxjOWd+Z2+S651ppHDHdkDye7+KnbYpybTIUwcIpHml50nZdM3/T8lppPRZZbjwkiV7iWhjiRuSrdHVus3bvSu9iG8U3dEnkXEYH+Zjfmujultpjd7dKIQ98Er3RlxJ4TjGfkuF1JNPrHtGtVs023jrrdIS+oz+rjIcCScdG43PicBXv3cMD1u56npqCf0aFpqqnqxhw1vvKtw3ysewH0eNzuoYHELNoLHR21mGxsllPtyuGeI+Q6DyWa5vq4aS33LNuguEiaTfUtUdTJUw8csLoTnGHdfNWnyNbVuaCN91E/pUbHObM0tAyeIYIWshmJk4jkk9VbSstsjNcHl/bHYH2bUtJqSjZiOqcGT45d60df3m/6SttZqTvbYJ43b1EYcD91p3x7z+HvXZa0pqS5aZfQVhaZZy18LCMlrmkEPI8Bv71o6Smio6SOngBDIxgZOSfEnzWuFjhFpHPtqVklkwvRZx9t3+JFs+EIpe0SKfZonnCIizmohOaIOaJLjIk+cBERQTGwiImARETTEwiIpEQiImAREQIIiIAKOEZzupRGcdAxksVHExgLCck+KtEy+Llfn9ke9Hc1fHlFT6mPxTeLk4pvFyvfaRykIs8c33inHL94qtQgCnjl+8U72b7x+SqUIwBHezfePyCnvZvvH5BSgTwBHeS/e+gU95L976BFUjAslPeS/e+gQyy+P0VSp6owgyR303j9FHfy+P0UuVPVGEGWV99J4/RO+l8R8lSFPRPCFlk9/J4j5IJ5PL5KlSEYQssq7+Qfd+Sj0qQdG/JQqDzTwgyy6Kubpw/JViunH3f8ACscKpGEGWZH6SqRyLP8ACqv0vVt5Fn+FYvVQU8IjkzBeqzxj/wAKqF7rB1j/AMCwFPRMMma661dRkGOJ+P2FZdLVk5EYH91TSe0/3BZQQBhekVTfajHyQVs7ebW/JXpuaxnpiLn6Ql+635J+kZfusWMVBSGZX6Tl+4z6qf0pKPsM+qwuqJgWL/cppaHucNaJDvw+A3/gvedL0E+lez+22yWieZGxh0ronNdlzvWcfHmV4Bc/6n4/kvpio/5Gn/dH+kLnap8nS0i4MOjr4auR7Y+Nr2e01zcELMWltH/idV7h+K3PRYZpJ8HQXJJI5u5Dc+5eedjtNHdTqa8TNxLXVhja/G4bu4/6h8l30v8ARv8A3T+C4nsX/wDLFb/9af8AQ1OPEWQl1R3Jp55jHHN3YjjIJLTkvI5e5ZjWhowFAU9VFvIycrXWs/8AF7r/ANRn+lbArX23/wAUuX/UZ/pTj0YmbMlUveGscScAAlFZqf8Al5P3SooZ5Z2m6mltLaSitr3G41QcGcHNjXHhyPMnIHzXZdnGhotDafxMGvu1YA+rlG/D4MB8B9Tk+C827RP/AD9Z/wB2L/8AlK9yn/pitFsnhIqS8TJyipCqWcuMK5uc9jaeL2pOfuWnuUzrRTuMUYlqB1d7LPPHVber/wCej/d/NarUPOX3LbVxFIqmcyZ5J5XTTvdJK/dznHcq6x6xhzV1isZiMnjRW+iJYDJ//9k="
    }
  },
  "sleepy": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.68,
      "jpeg": "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"
    },
    "wide": {
      "width": 610,
      "height": 235,
      "safeY": 0.68,
      "jpeg": "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"
    }
  },
  "student": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.63,
      "jpeg": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAG4AbgDASIAAhEBAxEB/8QAHAABAQEAAwEBAQAAAAAAAAAAAAECAwQFBgcI/8QATxAAAQQBAQQHBQUDCAcFCQAAAQACAxEEBQYSITETQVFhcYGRByIyUqEUQrHB0RUjYhZDU3KClOHwJDM0RJKT0kVVssLxFyVWY3N0g6Kj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QALREBAQACAQMDAgQGAwAAAAAAAAECEQMSITETQVEiYQRxsdEUMlKRofAjM0L/2gAMAwEAAhEDEQA/AP0tERfLe4REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREFRREBFLS0FRS0tBUUtLQVFLS0FRS0tBUUtLQVFLS0FRS0tBUUtLQVFLS0FRS0tBUUtLQVFLS0FRS0tBUUtLQVFLS0FRS0tBUUtLQVFLS0FRS0tBUUtLQVFLS0FRS0tBUUtLQVFLS0FRS0tBUUtLQVFLRBLS0RAtLREC0tEQLS0RAtLREC0tEQLS0RAtLREC0tEQLS0RAtLREC0tEQLS0RAtLREC0tEQLS0RAtLREC0tEQLS0RAtLREC0tEQLS0RAtLREC0tEQLS0RAtLREC0tEQLREQZRRFRUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBEURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBUURBLS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrRZtEEtLURBbS1EQW0tREFtLURBbS1EQW0tREFtLURBbS1EQW0tREFtLURBbS1EQW0tREFtLURBbS1EQW0tREFtLURBbS1EQW0tREFtLURBbS1EQW0tREFtLURBbS1EQW0tREFtLURBbS1EQW0tREFtFEQRFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0tBpFm0QRFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQZtLUtLVFtLUtLQW0tS0tBbS1LS0FtLUtLQW0tS0tBbS1LS0FtLUtLQW0tS0tBbS1LS0FtLUtLQW0tS0tBbS1LS0FtLUtLQW0tS0tBbS1LS0FtLUtLQW0tS0tBbS1LS0FtLUtLQW0tS0tBbS1LS0FtLUtLQW0tS0tBbS1LS0FtLUtLQW0tS0tBbRS0QRFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQRFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQVFEQZtLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m0tBq0tZtLQatLWbS0GrS1m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"
    },
    "wide": {
      "width": 610,
      "height": 263,
      "safeY": 0.63,
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
