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
module.exports = {"version":"0.7.3"};
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

__wordlyModules["homeNoriAssets"] = function (module) {
module.exports = {
  "classic": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.615,
      "light": [
        [
          0.388,
          0.374,
          0.366,
          0.358,
          0.347,
          0.343,
          0.338,
          0.334
        ],
        [
          0.381,
          0.372,
          0.362,
          0.354,
          0.341,
          0.328,
          0.323,
          0.314
        ],
        [
          0.371,
          0.36,
          0.346,
          0.34,
          0.329,
          0.315,
          0.305,
          0.289
        ],
        [
          0.317,
          0.401,
          0.317,
          0.313,
          0.287,
          0.29,
          0.299,
          0.262
        ],
        [
          0.26,
          0.334,
          0.359,
          0.313,
          0.279,
          0.303,
          0.292,
          0.165
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
          0.595,
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
          0.011,
          0.011,
          0.011,
          0.012,
          0.013,
          0.014,
          0.015,
          0.015
        ],
        [
          0.01,
          0.011,
          0.011,
          0.011,
          0.012,
          0.012,
          0.013,
          0.013
        ],
        [
          0.01,
          0.011,
          0.011,
          0.012,
          0.011,
          0.011,
          0.011,
          0.012
        ],
        [
          0.069,
          0.038,
          0.04,
          0.012,
          0.011,
          0.01,
          0.01,
          0.011
        ],
        [
          0.079,
          0.067,
          0.025,
          0.01,
          0.01,
          0.01,
          0.017,
          0.017
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
          0.078,
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
          0.18,
          0.184,
          0.187,
          0.184,
          0.182,
          0.184,
          0.183,
          0.183
        ],
        [
          0.161,
          0.166,
          0.169,
          0.164,
          0.163,
          0.162,
          0.163,
          0.164
        ],
        [
          0.257,
          0.16,
          0.148,
          0.148,
          0.144,
          0.144,
          0.141,
          0.142
        ],
        [
          0.345,
          0.253,
          0.137,
          0.132,
          0.127,
          0.129,
          0.135,
          0.153
        ],
        [
          0.256,
          0.255,
          0.172,
          0.13,
          0.125,
          0.172,
          0.137,
          0.201
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
          0.237
        ]
      ],
      "jpeg": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsHCAkIBwsJCQkMCwsNEBoREA8PECAXGBMaJiIoKCYiJSQqMD0zKi05LiQlNUg1OT9BREVEKTNLUEpCTz1DREH/2wBDAQsMDBAOEB8RER9BLCUsQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUH/wAARCAG4AbgDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAECAwUEBgf/xABCEAABBAECAwUGBAQEBAYDAAABAAIDEQQFEiExQQYTUWFxFCIygZGhI0KxwVLR4fAHFTNiJENyghZTY5Ky8Rc0c//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACwRAAICAgIBAwQBAwUAAAAAAAABAhEDIRIxQQQTIjJRYaFxgZHwI1KxweH/2gAMAwEAAhEDEQA/AK0ISXY+4NCSEA0BJCAkhJChQQkmgBCEIBoQhAAQhHRACEihANNRTQDQkhCAhJCFGi0kIBoSTQAkhCEBCSaoBNJAQDtCSFCjQkhANCEkA0JIQDQkhCghCEAIQUIBoSQgBCEIAQhCFGhCEIRQkhUyNCSEA0JWi0A00kIAQkhANCSEKSCEkWgGhCRQAmkgKAaaSLQDSKElSAhJFoBppIQDQlaLQDSKLSQDQkhANNK0WgBCEIBoSQoBpIQqUE0kKAEIQgBCCkgJJItCAaRQkgGmkhCjSQhANCSEAkJIVMAmEkIUCmkhANCSaAEIQgBCEIBoSTQAhCEAJITQAhJNACCkhACEIQAhJNACEkIBoSTQCTSQgGhJNCAhCSFJIStK0A0IQgGkhCAaSEIUEIQoAQEkKgkki0WgBCSaAAmooUKNCEICKEk1o5ghCEKCaSEAIQhCjQEk1ACEIQDQlaaAEIQgBCEIAQhCAEJIQAhK00AIJQhCAhJCAaSEIBpIQgGhK0IBpIQgBCEIAQkmhRpJopACErRaAaEk0AJIKEKCEJIBotK00AIStNANCSEAkJIVMDQkhANNRTtANJCEKNCVoQDTSQoBoSQgGmopoAQkhANCErQDSQkgGhK0KgE0kIATUU7QAhCEAIQhACaSEA0kJIBoSRaAZQEkICQRaVoQo0JItANCjadoBpIStQDQhBQAhJNACEIQo0JIQhFCErVMkkJIQDQkhANCVoQDTUbTBQDQkmhRoSQoBoSQqBoSQSoBpItCAEJIVA0kIQAhJCEGhJCAaEkIBoStCAaEkIBoSQgBCEFANCSEA0ItJCjQlaEA0JIQo0JIQDHJCQKaEBCLSQDTUbTtCjQooQCQkhDA0JIQEkkk0KCEkIBppIQDTCihAStCSaAEItJCjQkhCDQkhANCSEA0kJIBpJhCAEJIQDQkkgGmkhANCSEAICEIAQhJANNJJANCEkA0JItCjQkhANCVphANCSEA0ISQAmkmgAoSQgIJpIQyNNJCAaEIQoIQhACEIQDQkhAO07SSQEkrQkgGhJCAaYSQgGkhCAEIQgBFpIQAhCEICVoSVBJCSEA0ISUA0JIQDQkmhQQkmgBCSEAJpIVA0uiEFQAi0kBUErQkhQErQopoAtFoSQDtCSFSiQkmFDA0IW92d01+TT347JGFhou2nr5rEpcUbS8swqR5L2uLoL98pfgRFpPu2GHhxVHaTRXRY75ocOKNjWtstDRR3LmstsreO+KZ5KkUp7aJaRxHNIhdbFEUk0KmRIQkUA0kkwqQEIQgBNJCAaEIQAhCEAISTQAhCEAkISQAhJNUDQkE1ACEIQAhCSAaEBCoBCEIAQkUWgBNIJFANCSEA0JICAaEkIBpqKdoAQkmhQQhCEEmkFIKAlCzvJ42UTucBw9V7rQ4RiYUe27pwp3/AFFeO0lgdmRXfCRv6r20HBgb0C8+R26Ntf6f8mnDkuAPw9EatEMrS5mOvjtHu+oXKw8F1SyOOBJwHMfqFyPHKHGSa+581yWCPNnYLpsjhx9VSVvzaVBNmTPc+QFz3ONEdT6LLzMSPHDSwuN3zK7xmmfQaOOkiE0LocyKRTKSpBIQUKkBNJCEGhCEA0JIQAmkhANCSEA0JIQAkhCAEUhAQAE0kIQaErQgBJBQqBppIQDtFpJFANIoSQo0ISQDSQhACaSEA0ISQg0JItCjQkhANCSEAwmF3z6d3Y3d7df7f6rheNriPA0sKSfRpxa7O3RHVlN4fnZ+q9gx/vHh0Xg9Ml/4uM7eUjevmvYwTbxW2vmvLytno4qUVRqMNgeiul4xlnj1XDC/geC7o+PFRnkmuLJwDYB14KvVcb2vCm9/Ztjf0vmFfs4Xao1HJ9lwpvc37o3da5BQ5JtyTj2fPcqLucl8W7dtrjVdFQeavzJu/wAt8u3burhd9AqCvVHo9UuxFRTKVrZkEIQhAQhCpATUUIBoRaLQDSRaEAJpIQDSQkhBoSQgGhJMIAQhIoAQlaEA0JIVA0JIQDSQkgGhJCAkklaLQDSQhAFphJCAaErQgBCRKFQNCVotQDQkhAewl2Z2M7unhxI+EHjfNea1DFlgkO+NzRfUcF1SaLrOIWluNK67IMJ3V9OKoGpZTR3cznPBFbZL5fNeaMK6dndzUuznwHhj3NcQN3itvBn7hwceI8uoWU52FMPfjfEf9nEfQqtr5ITcTi4dbA4rjLDJO4nSGRJUz2mPkRubYNjyXYyRruS8NFqndn3mvjPiFpYut3Q3B44cbohZU/ug8cZfSz18UgaeKedAdRhMLHhhc1zbd0sLEx9SjfVS0eHBy72ZVAHj6haVPo88sMk7XZ5LVNJy9O9+dnC6JbfD+nms0r6DLJFlxGKa3NIrj0C87q/Z50TXT4e6Rt/A0XV/3/8AS7xn9zSt99nnikpkEGiKKiV1RGhJpIVMjSQhACEIQgIQhUAhCEA0kJIQaEkIBoSRaAaErStAStJJCAaSLRapAQhFoBoUbRaAklaSEKCEJIBoQi0INCVpWgJIJUbRaAaEkWgBNK0WqBpJWi0A0JWhAfTW5GLILZMBZoe9XH0PFE8EcwAmjbK0A13rA7n4c142XUNTwtozcT3breWkbj5EcPorsbX8cV782M67dRJbfy5/ReTg/B04LwzYn7OaZLVY74qB/wBJ/wCt2sufso8Bpxcxrj1EjS37i1oY2rumHuSx5A+jgPl+4XU3UYn0ZWyRuPP8wHz5/ZS5IvBnis/Tc/EF5GNOGAXvb7zR05g0s6+Nteb819Nje2Qbonh9c9puvkuWfBwJy4zYULnONl+wB31/mst2WjwcM01132z/AKnGl2sys6IWJpCPFjyQt2fspizn/hZxC4/lkulyZHZLVsKPvohFO3/0HEn6EBWKT7L7nHVlGLr8sYqS5PM81pwdqMccHMmb5gD+axY8tsEhizcGMkcDcYDgrDg4uWd2HL3d/lfyW6S7Ru+X5O3U5sDODpWNn7w9aB/dYjqDiOPzCsysTKwXU+w3o9hO0/Nc+5zjZcSfMrcFXTMSfhkihFpFdDAIQhCAhCEA0ISQgISQqQaLSQgGlaVotAO0rQhUgIRaVoBotK0WgHaLUbRaAaErRaAdotRtFqglaLUbStAStFqNotAStFpAE9FJsMjuTT9FLKk2RtFrqg0zLyHbIoHvdzoCyutvZ7NH+q1kHgJnhhPpuIWXkiu2XhIyrRa2/wDIY4wDkZ0Md+Ac4fUAj7qZwNEgma2XMnkZ1LGN4j/3cPose9Hwa9tmDxTonovRMk7MwzHfFlSsHIhwO715UpDWdBx5N0eliYcKD/dr6udae6/EWTjR5wRvPJpVseHkSENZE9xPIALcHa6LHl34mBAzh+drSR6FoaqZe2eeXF0RbFfOrd/8iU5ZH1EUjkZoGqOIHsM4vhxYQupnZHVnAf8ADtF+Mjf5rlyO1WqT88uRv/RTP0XLLruoysLH5k7mnm0yEgpWV/Ymv8/xG9F2KznNBfLAw+BcSR9AheXdmTHm8/VCvDJ/uJf5/X/p7VuZlxt4timIHS2H9/2XJPj6LkvHf43skp613YJ53bfdPzUYM2KWm7tjuW137FdJoghwsFcaPS4oys3szOz3sSRszaJ2yGnE+RHD9Fnf5hqWmyBuSyWMWaEoLgfQ/wAlvOxO7cZMR7seQ9WcGn1HJcGoT7ozHqOAyUk/6rDW41zIriePktJsxxrotxdUxsnYTTJBycOHHyWjFqORFW/8eIniTxcB5H+drx2RhBv4kHvRAcAXWWnpx5j52uvS9cmid3OS90rQaLXgbwPI3x6KON9GvcrU0e0x8iHJaTjPpw47DwIUxqU2M+pojt6OBWI0NlYMrCk2PINPbw9QVo4Wc3MLoMhrWTjp0cK6Lm0bcYtXVo1XT4WqwCHLgbMwjhfMcuR5jkvOar2TmxmOytOlM8bbcWHg9vHp/Fw/RdUuI/Df3kBdsF7oxx+YWhp+oB20F3PiHeKkZuLo5Sw0uWPo8li6oRQmbuN8X+XmFHMwAbmxuXPYP2W/2m0WPIhdm4cAbK2zI1g+IdTX9/y8ixxabXeNPcRz5L5BadqJIJNCh4IBXU5k0JIQDpM8F2abpft+4993df7b/dc+Xj+yzvg3btp51VqWuilRS6oKSpljSQkqQdpc0k1SAhJCAdpWi0kIO0Wo2hUDtCSVoCSLULQgJWlaXEqbYyUKk2RtFE9F0+ztjI754Yf4at30/nSlGWC6h3UeBcaFeYH81lyR0WJs52xud0V7MGZwDi2mn8zuA+qmcks/Pt4VUfC/Wuf3VRzWxn8ONoomtwDuHnfD7LPKT6Ontwj2XNw4x8ct+IYLI/b7qYjxozxaXDpbgP5rPky3voEk0KFnkqXTE9U4SfbHuY49I2Tl4sQbsgbuHMuN2q3as9u7uw1gdwIaKWOXkpFyvsryZfqH4NGTUZHDaXEgcrKodmOPVclpWtrHFeDm8035Oh2S89T9VAyuPVVcVINcei1SMcmxl5PVLcpiFx58F0QYEsjQ8ROMZNb+TPm48AjaQps5LQLPILRZgtDbO3dZBaLcR9OB+q08fQ8nIdGcPEle0/nkbtY/+X/uXN5Yo17b7Z50RSO5NKuhwcid22ONzyOjRf6L0Y0dmOwvydQwYGSGnR8JXNHlwJ+6pe7RoGmJ2Xl5cbODGBoY0/Mk19Fj37+lGuC8mJHgOcHEyMG3mC4A/QlC036nhRtc2DTYyDydK9znD6ED7ITnN+CpQ8kyOJa8cfFX4+W+EhknvNA+YH7qvIIeyKRrg4lo3EePVVv+AHwP2XI9dWbLXBwDgbHMEKqZzHHuZ2AseKDuhPh5FVae4ug2k3tcW/JWZkbZMWRrrFNLgRzBHG0OZg5+G7GlIIOw/CfJcU0TZYyx/EdD1B8Vv54dPpsMzwd4AJAHiFiHmusXa2cskaFpmoz4GSyKR5c0865OHp4r1EjY8iNr2ngRYcvHZ4HdtJ6Or6r0fZ5736cN5ujw4eSxJDFJp0beFlnKY6KZoEzOf+4eKg+LuJe9jNAmyPPx/VcmOSzU4tnDcDfmtaSg13lxXBqz0fS9eTqw8kvaHVRBo0bXku1eF7JqbpWNqLI/Ebx6/m+/6r0OD/qOA5bf3IH2AXF20Y04OM/aNwkLd1carkt43s8+SKUtHkkwkmF6TmNNIJoVHq+y2Y4YhYWghjqHH5qntpFcuPk38bS3bXKvP5qnsuPwsjzc39CuvtfwwMMddx/QLh1M3LbTPLJFNJdzmxJFNIqkBCEFUgihCSEBIlMpKgEISKALStNJCApNbaQXZgNaZgSAdoLgD1IFgKN0jpCNlbmMgja+Wy53wsHAkeN9FCTJfJbGDu4j+QHn6nqucudI8veSXONknxVjBwtSvudE76JAtZzbZ8LUHzkiuQ8AoOKrKqiZlN9IkXkqBKColbo4tjJStCRVMhaEk1QA4qQagBXQtBdx6KN0aSsIoXPNALvxtJc9gke9rGHkXfm9OpXTpeOyXIa2QXG0F7weRA6X0tbmgwNz9Sa6enAAu2kcKHIei8mXM10emMIpNvwcmn6FJkvvDxgI+ks4v18j9CVryaLpungS6pmmah7jDw+g516Ut/On9lw5Zg2+7YSByXzXVMyfImc6WV73eJNrzR5ZH2c4zc02tI2p+0+LhAs0rCjh4ECRwt1H++trFzde1HM3CXKkLXc2g036Dgs1xJKivXHDGJhy3om6RzjZJKjaSYXUnYcUKyJoJQsuVG1CzdezmQPUJYmOJJ+7cCWFt/0WHpuszH8N0bpAOh6fNakerx40xmkZtiDacbsrjR6FkTV2bMONFCSYwRu5i7UI5mucW8wbrhwKliZuNncIHuf7u4+6RQUmYbY5HOYXDiSAXWOKw7NKvIUJdzNjn8KcA0lUaNocD8bv8uEuc5xDWOJpoBr6rX07b7FGWG7Fk+fVOfL2SMiLTbgTZ5UKtZc6Rlq3SPLdp+z0eJBj5ULiWd4WljzYurBXPouTNBM3GbUglePi4UfJe79mwtTiibkwd6xlna5x4OPPl1Xj+2+knR87H/yr3WytLiHk+4Qeh6/sukJXpnDlxl+TRdDJBktyWH3mX7pHArXy8J80IbW10jeNC6JC+dZGr6tkw+yZOR3LSRbwzi7/ALgvQYnavUsfAGMTHK8N2tncLeB+iPG2beZtpo9Pp+L3Rp8huuJqhy8lh9r9X0/LghxMObvnRvL3vFhvKq81PH7YBmN7+IXZAFBwd7pPj4rzQNu3O42bKQxtGZPlK2dWHiY0kPfZE7Y23wG7p+q5C0OeRGCRfDxpdOSzDbkxPxWEsobmkdeq9fpGntjiALGtdzJA/dPcae0dHGPG/seI2EGiCD5opet7Z47GQYrxHxJcDJflyr915QhdYy5Kzlpq0XYmfl4d+zzvjB5gclDJyZ8uTvMiV0r+VuKrpFK0hZEhFKVIpaIQpIhWUkQhCFIpSpFKkIUilOkqQUQpG1TpFIKIUlSnSe1UUVbUUp0ikJRADiro+Y6KACm1Rm46NTEwWalI1hb+M40HDhZ8/H1WhN2TzYCI42xzd6K3NJAb142s7SM04mVFMOOxwNeK+hQZ+LNie1NmaIq4lxrb5HzXiyylF66OmTJKFOKPm+o6NkYMpinj2uqxRsEeqzHwEcwvY67q+JlZJPdudG0bWuBo+tLAlbiykmLJa0+ErS37iwu2KcmtmpK4py0zHcylHaVpHTcl5uNrJf8A+b2u/dSbpeSDTseUHzYV35peTioN9GVsKRatabTZbtkMhaeR2niqjpWaePs0gHi4bR91VkT8kljcTOpMNXccDZ/rZWPF5B+8/RtoAwYfhbLku/3fht+gsn6hXl9jFEMPGdkzCKON0jzya0WVoy6ZBiNByngv/wDJhcCf+53IfcrkGdMRsaRFF1jiG0H16n5qck26HaOV8lzlybOsaocudJIwRANihbyjZy+fUn1V+DqEmNK2WN5a5psEdFnUpC1HjTVBZGj0WqdpcjPxmwuDWN/Nt/OfNeemeXOKLJS2qQxqHRHLVIrpG1W7FJsdrpZlKyjZfJMMIPELZw9CzMnG9pji/D6WeJ9ApZWlZD2Pym47xFzvyXB5o3R2WO1ZjgIVpZtNFC1YqjP0iENjfLtLdxrieQVWdOybIZGS4wsO4lovefBMSyZbu6ZIJPL4W/PxWhjaM57TIIpZ6+I0do+QWeWtHJRbVInoWsPxsxz5YA3Gc2iSQHX4rePaLAcx/cPMrwPd4cLWAMWECu5Z/wC1Qfg4xP8AotB8uH6JxvZ0TlFUem7HMj25LnTEyF/wF91fEml6B+mRzkTyRhxb8O4cOPVfO8WD2ObvsSWXHlqtzH/zWxo2v5umzySSvOYJa3iU8TXKvBZljb6Jyl47PXZ2fDo+JHkTwSSsL+7Gwiwasc/ReN7Ra3JrWSx5j7qGMERsuyL5knxVuua/kaxHFC+JkMUbi4NZ1Pifksrat44VtnNR8vsq2ro0/CGVO3HYRGXWQa4KFKUbnRva9ji1zTYIPEFdWaWjo1LScjTtjpNr43/C9vK/DyK46Whm6tnZ0DYMiUPYDfwAEn1XFtUV1sEWktII5jivZ4vaTTWYTnSb+/7s/h7eBdXivHbU6WZQUux2qZ0ZebkZha7ImdKWihuPJcp4qVJhq0lRpuyFIpT2o2qkIUilOkqQUQKKU6RtQhAhFKdIpBRCkqVm1LaqWiFIpTDU6UFFdJUrS1LaqKK6SpWlqW1BRXSArNqW1BQNcQrRkvDas0qiEiFlpM0pNBJI53MqtTpAatJUZbbJwUHWQvY9kc2Fj3wvcGOkA2knr4LxrRS6YpnM5FcskOSNacXFnue008GNprsfgHvra0fl43fkvn2SS51nj68V2TZL5vicSfM2ucssqYocCJKMeKOMtQGLtbil3kpexkHmu3IzxZxCNSDF1+z0juaSycTm2J7F0d2kWKWKKNiNpV+xGxLFFLWlXRgWEbaTHBR7Nx0e57PZEU+mxxNID4Rtc3y6FW6rkRYmI90hFuaWtb/EV4vDzZcSQSRPLXDkQlm58uS8vlkL3HqV4ngfIe2uXK9HJkEb+CFU91lC9ajSK5WzSj7IxUay5Ty4PYKq+PJer01mONjWkbW8Ghp4ABcz5cefHkhbJuc4cmnp5lVadswQG1UTRVgcQB4+K8Tbs7OFxdaOPtLpOWzKn1ARM9me67Y69vTiOlrHxcds0pDnEcOV0vY6vq2E3Sp4o8lkssrNrWs97n4+C8WQvRC2qOWNuvkh5eMceZ0e4OrqCqg0deSspAC7LrZH2duXosuPie1MeJIxV8KIB6+YWdtXUMrIGOcfv5O5P5N3D6KmkjfkMr2opWUjatEorpOlPamGpYor2o2qykbVLFEKTpT2opC0QpFKdIDUFEC1LarS1Lagor2opWbUtqCiG1LardqNqCivajarKRSWWiqkUrdqKQUV0jarKRSCiuktqspG1SxRVtRtVu1LarYoqLUtqtLUtqWSiramGqdJ0rZKIbUwxWBqk4sijdJIdrWiySo2KItYro4+tLhgi1nWdx02JuNit4OyZiGt+p/QWqZtAwgf+O7RZORJ1GNGS36krzS9TBaM8t6VnXi5mTqGfNh4jsXEdBe52UTucB1a3qrnRSniO0OK53h3Dw360sHI0HDJD8bVM1kjeLXSxA0Ry4tdYV2GcsBzMva97TwlaeEnnXQrxZMjbuMixcr+R2Z2Rqel1Nkwx5WJ1mgcDt9fD5gLsw8nHzoBNjyB7DwPiD4EdFyw5Do7F8CKI8R4FY0mFm4WW+XSJmwslHvNdyHoCD/RdsPqX1Msk47W0eoLFHYvMGbtNGdzcuGTyIb/ACTHaDW8Tjm6ayWMc3Rij9rC9SzQfkx7iXaZ6XYltWfpnaTTNQIjEphmP/Ll4WfI8itWUsiY58jmsa3iXONALpZtNSVplO1BYsrJ7U6fE/u4RLku/wDTbQPzKpHakVuk0zJYz+L+wsuaMe5D7mwWlVuaVRha5p2cQ1k3dvPJsnu38+S73RrSaZtNPo5dhPRC62x0EJZeJ3xZLcWQOeCWuFEDn6rqk1jFbiydy2R072lgDhTWg8L8+CyJ3mUjhQHRVgLn7ae2dHO9AgNJNAEkp0u3SJsfGzWzZO7a0HbTb4rb0jJTkYGTjRMlniMbXmm3zPyXPS19c1RmoGOKFrmwRWRu5uceqzKSLdbMq2tlYCe1TARS0WiG1G1TpFIKIbU6U6RSAhSKU6RSAgAnSlSdIUhSKU6SUAqSpSSQhGkUpUikBGkUp0ikKRpKlZtRSFIAJFqspFICvailZSKQFdJ0pUmGkpYK6RstW7D4Lv0nBGXlBr+EbRuefLwUbodbZVgaPkZo3NAZH/G7l8vFdx7PMqm5bHP8K/qp6pqY/wBKH3Ym8ABwtZceW8Pu1j5PZUn50RzdNlxXbZG14HoVx7KK9VE//MtPkjk96Rg3NK89JHTitRlemHsoDVDLxxk4z4XPLAeII6ELooAWeAHVYYGodq9QdpmkgsxGf6+QeVefl4Dr6KTkktnKclFbF/4oy2tZpE7IdWgjpsbY7a5vk0t/cFdfss5g79+LPii/9PIoO+VHj9vRaUEem9nITjaPG2TJqpct4BcT5fyHD1WbNJJM8vle57jzLjZXyZyi38UMcZLbKhaadJLJ0ApKGRPFjxGWaRrGDmSVwY2bqWrPLNF0ubKaDRleNrB8+X3Woxb2YlkjHs0kKtvZrtlINxOBD/tLgf0BVU+m9rsEF02lxZcY5mBwJ+gN/ZXj9mjHuryn/Yo1DR8POBL4wyQ/8xgo/PxXNp2k5eZnxafq2dMdOiBcHtPMeHHr63XRdGJrGPkS9xIH4+QDRilFG13lb5zguJOGOfyRpMzsLTGdxo2DFjtHDvnNt7vOzx+qpk1XUJPizJfQOoLG1DU4MGLdLZfdNYObir8HR+1mpxjIixcXCicLaMg04j04n7BY4at/s08kYviv0Rz8OHOBMrGiQ/8AMa0B3zrn81z4Op5WjStx80mbEcabIOJZ/fh9Fpu0rXcIH2/CY9g/52M7e0ereY9Vzzwx5MLopBuY4f2QukMjg/wZaUtx0zeaWyMbJG4OY4W1wPAhC8xoGqt0ieXTdQmDIW+9FI7kPL0P62hfRUk1ZqORNbPSUjap7b6Ipas6UQ2p7VMBOkBDanSntQGoCFIIU9qKQFdJgKRCAFQRpFKVIpARpFKVJ0gI0ik6RSgI0kpqNIBUilKkUqCNIpTpFKAjSdJkJ0hSNIAUqTpARpFKVJUgFSVKVJgWVAdWmac/OlIB2sbxc49FpOOk4nuCAzkc3OKnjj2fQQ5nAyuO4/36LCneS42Vj6mErs2L0jK4GM4x6Fp4K7uP8t07Je1wd3lBrx1H92vObyOqm7JldF3RkcWXe2+CcRX5K5nlziVFg4oPFTiaS4Bbs12zd7Pggyk8gzisqUW8rXxx7JpMkh+KX3W/39VjSytiY+V5pjAXE+QXKL22PLZh65JkZuXBoWALyMogPP8AC3z8uZPkF6Usxez+HFoen/C3jlTcjI487/vgOCyexA7jD1PtVktBmleYMYHxPP8AYegKomyXvBaXE2S5x6uJ6leD1E3OXE4Y1zk5vpFupTxSS7YWgMbyIFWuK1nu1OXKyjh6TiSahkjmIx7rfUrvh7Mdrpxvkm0/Fv8AITuI+gK5rHxW9FlmTetjtU5WTHiY755XUxgs/wAlLJ0TtZgDc/ExtQYOfs7qd9DX6Lk0uBvabXcXT5IZY4ccmfLilbtPu8A0+pP3WlDzejMsqql2aPZjsq/XXM1jXGuGO73sbEugW9HO8v19F7t5gwMQu2COCFvwsbwA8gFcAAAAAAOgTXGc3N/gsIKP8mdi6jkZT/c06ZsJ5PeQPstCk0LBsy9d7Pabr0BjzYAX17szeEjPQ/seC8Fl4ud2bzmYGov77GlNY2XXxf7XeBX1FcWs6Xjazp02DlNuOQcHDmx3Rw8wusJ1qXRzlDfKPZ8u1UDA1HC1kRNm9nkb3kbhYIB4f36L6zjTR5OPHkQu3xytD2O8QRYXzEYs4hyNOzgDPA4wPP8AF/C4eoorW7EanNPovsTpCDhyGKga4cx+4+S1l+i/sXFHlPXk94vM9ptJZE323HYGtJqVo5ceq2dMyXSh0bzuLRYJ8F0ZkIyMWWFwsPYW/ZcIy8nWUXF0z5N2jwH5MMcsDC+Vhqm8y0/1QtU3yQvbDK4qjzTwKbs9HiydxO2QiwOY8l06lLiztjdBfefmO2rC5i1Kl9Ct2eohSKVm1G1WwQTpPanSWSiNIpSpFKghSKU6QQqQhSRCnSVICNIUqSpARQpUlSFFSVKSdKAjSKU6RSCiNIUqTpCkKTATpOkBFCkQlSChITpFICKYQhAb+mkZemPxb/EjO5o8Vh5URY88CrcTJfjytkjNOC2HNxdWZuaRFkdWnk5cm+LC+P8AB5qkqWhl6dNjup7CB49PquNzC3mFtSTN8fKK6XdpuK6eZrQOZ+i5om7ngLbbNFpGlvzJeDne6wdT6LE5Uh9Ksr1rIaXtx4/giFfNeW7RZcbNKnjZKwveA3aHC6vjw9Fqt03I1LFObl5YwME8i/nJ6Dr+i812nh0LCwCcBmS+feAZZDTSKN8F51mX0o5TkkqR6DUGjA0DR9LYQO7xxNIB1e/j+5XmXY+Vr+rt0TCeY2Ab8qYfkZ4ev8/VbfabMHtc85+CKJg+TWBdn+GmB3GhO1CUXPnyOlc489oJAH6n5ryp0nM4PpY157PQaRpODo2E3EwYRHGOZ/M8+Lj1K7E0l5223bOqSSpAoiGITGYRsErhtL9o3EeFqaEAJJoQHNqGfi6biPys2dkELObnH7DxPkvD5/8AinjRyluDpskzAfjlk2X8gCuDX2Z/bftdJpmK/Zg4LiwvPwsrg5xHUk8B6eq9dpXYrQdNiDRgsyZK4yZA3k/LkPkF6VHHjXz2zz8smR/DSMjSP8TNPy5mxZ2K/CLjXeb97B6ngQvbBwIBBBB4grHyuyXZ/Ke10mlYwc0ggxt2X61VrXJa0CyGjkOi5ZHB/QqO2NTWpbPLdsoWRZUOSKBkYQ7z2/0K8x2MlLdd1SEfDI0SAfP+q9v2k0STVobiyCyRjSGtI4WfPoV4fsjA7B7WSYupSOZLkM7uN23g5wPI+B4V6rcd45LyW+OSLfR9A0hh717+gbS0ZXiOJ7zya0k/IJQxMhjDGCgPusntTntx8I4zXfizivRvU/svPFeDrOXKVnjnvA94mrQszXs/2KJgYGue48AeSF7o4nJWeaeaMXTPdkKK6AGDopij0H0Xvs9JyUnS6u7YebaSdjGrYb8kspy0ilbs6K2SCKjtd8zwUcqNKNnLSKUqRS0YI0ik0UqQjSKUqRSoojSVKykqQtFdIpTISIUstEAFKk6TASwRpOk6RSgI0nSaKQpGkKRCKQEaRSlSEBFKlOkVSWCFIpSpFIKIUrGSObyKVJUg6NLG1eeMbZKlb4O/mridNy/iaYHnqOSx+Kk1xC5uC8Cl/BrR6NcjXRSsewniRzWM/Jh17tBO6ZxGj6U0l5HJ5HCh5kivQealqOe7B0vJyGOIeyMlpB68h+qxtPJxeymFA3g/Me/JlPUgHaz9CV5szaWzlkb5KNl+t6pPquT3snuxt92KJvwxt6ABeX7QZGO7DkgM7O9sEMvit2LTsnVclmFjPMIcN0s1X3bPLzPIL0kXYzQosN+OMGN73sLe/lG59kVd9PkvPGUYtNmJp1xijxeqZPtuhS5INmTGB+e0A/oV73shtHZfS9vL2Vn6cV870iNwxsrSskESQOdE4HoDY/W17H/DjN77QPYZD+PgSOhe3rVktP6/RMiqLX2ZhO5Rf4PUqnMzcXAgM+ZkRY8Q5vkcAFz6xq2Jo+G/Jy5WtDWlzWWA6QjoPEr5fiYOs9v9XkyZ5e6x4zRebLIh0awdT/8AZWMePluTpFyZOOkrZ75vbrs06XuxqjLutxjeG/WluY+RDkwtmx5WTRP4texwcD8wvKY/+G+gxRBsvtM7+rzLt+wWr2c7M4nZ12R7HPkvjno93K8FrSOo4c0msdfFsReS/kjo1zXtN0KFsufPsL/gY0bnv9AujS89mp4MWbFFNEyQW1szNrufOlKTCxJcpmXJjxPnjaWMkc0FzQegUc3UsDT2OfmZkEAaLO+QA/TmsaapLZradt6IadpWDpjsh2HjtiORIZZSCTud8/0XavO9ndWztb1XMzYw9mjNYI8YSM2mV18XjrXP7L0STTT32WDTWujilmlOY9kZO2OMkgdT0VUeLK+DGa4cA8vfZWiGgOLgBZ5lCxR6PdpUkJfOv8SWtw8+DOj92RkjHgjx/toX0ZfKf8RdQZnarFjMeNu+ySeAA4D913wK5o8uZ1BnsZu2OO9hGHDI95HxSDaB8uZXmtR1Al0mTky7nniSVgy6tjYzSBJvPgzj91Zp+k6h2gkbLOHYuEDdnm/08fXkvRDBbMvL4jtkdM0yTtLmzZEznxYsfutc0CyfAX9T8kL3OHhRYmOzHgjDI2CmtCF70klRVgjXy2ztc4NaXE8ALKyTPLmO99xa13EMBoAefirIc9xcI8gNdG/3S4cKvh9Fwxb43XHPvB5NLeIHSzyXnyyco/FmMuTklXRqabA1uU97SajaG8+ZPHj8lrxvWVpswsQjHeywX7r3Bx6klE2q7ZnRY7WPLDTnOPC/AVzVi1GCtnWEowgmbEsYe3e34hz81yuFqjG1d7T/AMRANn8cTrr1BXYGCZokiIcxw3NIPMFIzjLpnaE4z6OchIhWuYQaIoqJauqZuiukUp0ilbJRCkUp7U9qtiiFJUrKQQliiulGlZtRSliiukUp0lSAimnSEAqSpSQgFSVKVIpARKKTKEAk2sLkKcbgOBUZUAip3E2E5GDaaHEKdKMhpteKzZulRRSKUqTpaswQpFKVJUlijM7TWdCygPBv/wAguOOXvNP04D4WYcbR97+619Qx/a8GfH6yRlo9en3Xl9CyDLgiF/B8BLCPAWSP3Xl9QtWcZayL+D3XZSFjMB8oHvyPIJ8hy/UrTzJ/Z4S8C3E0LWR2TyAYJcYn3mu3j0P9Vr5sPfwFo+IGwvnSNRrls+cdrmSadq0etMbuinOzIAHXx+YH1CpxNWdpWu4+fgA5Byqilx2DjMOhb5heq1aPG9hnjz6bAW1Ju4V/XwXkeymkawc92VpUHeBm6OGedvuxgnmL4bq9asr0YZKUfl4/ZjPjcZfHp/o+k6rgYmq6e/GzY90L22b4OZ1sHoVHS8TB0jEbg4UeyKNpkq7JvmSepKw5OyfavIjLsjXZgT+WNpA/ZcE2mdrdNL+51FuZuFOZMPeI/wC7+azwdVyLHi3dWe4gkE0TZACNwuirF5TRO2OO6ZmnatjnTcoU0b/gcfU8vnw816iaWLHifNNI2ONgtznmgB5lc3FxdMOSbdHnn6L2ibPM3H7TubjSPLgJcYPkjB6Aq7B7IaPjESz4zc7JJ3PyMr33vd4m+C4crtjNmTuxuz+nvzXjgZXghg+X86VL8Ht5ljvDnQ4jf4Y2cvoD+q61N9ujlwit1Z7FoDQA0AAcAB0TXhH/APjnTzvbn4+Y0c2SNFn6gfqu7Re3MU+UMDWcY6dlk0C7/Tcfny/TzWXilVrZtuvqVHrEFRlkjhjMkr2xsbzc40AvK9pO2+Jp8RjxHh8hHB9f/EdfU8FiMXJ0itpK2d3azX4NIwZGmSpXN5Dm0H9z0XgtB0Aa6JtT1NsgZKahY123gOvp0+q48GTH1/Uvada1CKGBrrELnndIfM/qfovomO2J0TDCWGOqbsrbXlS+lhxe2t9nOCWZ2+kZOB2a0nCeHw4bS8cnSEvI+q2WQk9FNrOK29LwYMhnvOIcOg6rrKdHdqOON1oyGQcOSFpZcLIZe7a7dXMoU52aW1aPB5DHNDTJJGI3WN0btwuro+C6MTI06GRveRySAgUR8INceHOlHIwYBCWQb9zvynja5cnTntxA5s34nBvHgF5+cHo+bfF6Rpv1o9+6ZkTO44Ubp20eHT5LOjZKx/eDHmkBJIOw8OP6rlDds3s+SWkgF1NdwPh9FqYTu7hMsE7oiwEjbZ5ePipKSSqXRObn9Q8bIly8yCMRMLd3wOFh3iT6BenmyMfEY0yyMiZybuNfRYOn6jBLk23usFzwAZjFu3Hr5Dj4qrV8XIi1Jzp3vkDwO7kcAA4eFdK8FpVCOjvCftxbWz0veQZUG+GRkm3q02qC1ZMDHQsEkRDZQLBaK3+RXosOAZmPHO07WSNDhfEpiyqfR6ceVNfI4S1KlsDToPzOcfnSZ03HPIvHzXezXuxMcNTpaEmmOHGOQO8nClyvifG7a9pafNWzakpdFO1BardqRCWaop2pEK0tSIVshTSVK0tSLUshXSRCnSRCAigp0ikIJCEKgSKTpFIBITQhQBI5FBJJ4oTAUKJMC0UpNHFSypE44HyfC0npySmx3wuLXiiu/By2wsMbwdt3YVOdKJpS5o93kFjk7Cu6rRwELx+tQO0bWfbWtPsmUffofC7r/P6r2haSqcvAizsd+PkM3RvFEdR5jwKskmqZnJj5LXZjYOW/FmjyYHDhxHg4H9l67T9XxM9oDJAyXrG80fl4r5tqGJqPZpxa5jsnBJ9yUfl9fA/bwXO7PiymHZKHOrg3kQfReGWF2efn4eme0xsQ9te0T+8c5uk6e6vd4CV11d+ZsDwA817XIyo8ItwNOx4zKxu33RTIh4LG7MRs0bshjujoPkaZ3eZJpv6KvFz/AGaN1tD5Hnc518SVJSr4o1HBLI2+0tV+SzUzltIdkZjnl3QEgD5LO9pmaKEriPBxsfdTy8l2RIXknyXMSsI+pix1FKSKNV07D1nGMOXGN4HuPHNp8j+yz9G7Pa5rDWYGr5T2aTguP4jjW4dOPXyvktUlSfkzOhELpHGMcQ2+C2ptKjGX0qyO1pmqzUsHScYYmi4jGtbw71zeHqB19SszK1PPyHXJlynyDto+gXPvI6qtxWbbO2P02PH0t/ck7MyOsz3eTjazdYgxdWx3Q5TA2UD3HgcWny/kup5pcOUaIK3Hs6yxxaprR5fJ1XWRG7BmyNxxm7Q6R1kNHINB+yu07R2TNbLkMkycl4tzH2aVudHG7tFp738BNTXEetX91vTdpNF0wezQvMzxzbAzdx8yvWnS+KPge1CE5c3pa2cTdAg2+/p8bPLr9lZ2frS+0LMOF7/Zshh3Me7g13Gq8+H3TZ2twZXbZIZoL5d42lbnRwajjFzSC4Dcxw6H1S5eTvxxyV46tHsNq6cUybwIyQfHwWP2YzX6ho8MspuRpMbz4kdfpS9DEwRQA/mdxKrZpyXG15AuDODefU+KFQ93FClE4o8LBqcPeR7muHO74UFLWsjfDHBC+zK4ONeA4rP9mlkk2MhLyeVLqdgzYsO0Not42R4Lg4xUk0fOeKe1QxpMua6ScSATV7rHN4eS5IcXWIoA5uNkhz30PBwPRbuBmxFzC/3ZGjkeo8l2Z2XJBhshkxy10zS5hDuPO7rouazTT4tGoYotNt1RixYWaG0dOym9C3uyQvU6HlY+oYMeDkRl0kTKe2VnOv7CmNcZFGHiGUTbgBGCLN9QeVcFz4Uk7X7240HeFznW+ajxN1wC1jy7+WjvDFFK4mpHpelShwZBC8sNEtdxafUGwuuCJmLjsgjJ2MFDcbKyMLEmwAyZrcfeN+/8UjeDxo+70K6H6rMxrnS4sZYwEuMc4cQOvAgWusMuN/g1wp6NAvCBJ4FV7myRtkjdbXAEHyKja9NF0dTZfFSc1krNrgHBcoKujdSy0ZcfKOPIxjC6xxYeRVJatZzWvaWnkVnSRljy08wpZ2hO9MoLVEhXEKBCtnQqLUtqsIRSWCktSLVaWpEK2Qp2pEK2lEhWxRXSKUyEqQlEKQpUiksEaRSkmAhSNJ0rGRue7a0WV2w4DRxlNnwClhyUezPpMBbDIYWfDG0fJWAs6hv0WbMe5+DEAUgCVsOgxpPijb6jgVRLp5b70Ltw/hPNLNLLF6ZTiYMuRe1hI8eiJ8cwSOjdVt8F0YmbLi21vEHm0+Kbq3GWXi8m/RZ3ZOUlLfRx+zOlYQWAscKO4cCF5zW+yGkw482fjQCLIhaZAI3ENNc+HLx5L1E05d1WF2h1r/L4W40MJyczJ9yKEC7vhZHh+q1WiTqrkd8WU2bsxilnJsLGkf8ASSCuASXxWBpmp5ele0aNkYkuXkAgRxQHeS4jiOHyU5sjtJgwuysns+5uMzi+pAXtHjX9F4nB2ejF6jFjjTfZu7kiVyYGdDn4seTA4ljxfHmPIq8uWGqPoxpq0SJUCUiVXNNHDGZJHhjBzJPBDVUTJVbis/I1ScNEmLpuVlQ1ZlYw18uCjj6xjZMJkBdEQSC2QUQRzC1xfZzjnxuXFPZ1zPoUuDJfZA8FS7V8KVztuVESP91LifrGAHEvyWk+QJXSMH9iTz40vqX9zh1aI52s4uGzcTtohvPiV7HT9Ch0+IRd22NwHENHvX5nxWf/AId4ceZm5etTz47MgnZjxvkG5ni7bz4CgPmvWTY7WD3Z2SHyv910lKvifJwuOScsn3f6MPP02KaItcwSN/hcLXmnwz6RKTA7fiyWNrvyFe3e3gsTLjaMl0Tm213TyWoSOuXGpbXZ6Tsjp7MTs/jtfRfLcpLXX8XL7UtqZ4LBXReP7M6g/Byn6TO+2O9/HJ+4/vra9I6ckUeS2lZyjGv6CkfxQqnGyhbo2eZxpMlr/c7kfIpajnTFncyCEuIPwXfEeCsJ7phc0cVlhxMbgb75x43zJteFJN2Y9TkeONLybOmF07A1mNjS7QLDmncKTzYc/IzHzTYxJDaOzoLvkp6PMHZMAj4SCTi0jiGkG/kvT5IY2ISECw0krzynxfRiLWaFSR5rFi9vmL9z2RRkNBBoud+y14tLsgukmb1oOpUaDH3zpm9XTur1oL1OHj969sE0YYYhxI+Io76RZSWFUZb9PqFv40xBFgGQ8FnzaW2RkneSTmPk4d5V38l7I4ERdxJ2gcAs3Ojc93cgNDWGgeQ9SnGUezjj9Qp6MvT5Xu7zGkovhDdrgK3sPI10PCiryFViMaNSnDHbh3LONVfErrljoXS+rhlygmzo9MqCtYRfMLnNoBpdXElnc1U5MTnvBaOnHioxy1wPJX7lzcSK07RysxXO+P3Qrm4sQ5t3epVrXA8LCHWFmg5yZWcaE/8ALCqkwmnixxB8Cr9xTD0ClJeTMkidGacKUC1ar2tkbtcLC4JojG7afkUs7QnyOYtSLVftUdqWbKC1ItV5ao7VbBRtRtXWzFe/jW0ean7GBzf9ksnJHDtU44y9waBxK6H41fC4FW4sewFzhRPBLI5UtFkMTYWUOfU+KbpKUZJKC5nyElErOSV7ZeZlHvlzbrRa1xOiOpso8V0RTHoeCzdyYcfFTiGkzSlDHOEvJw5+a5Zn2VWJCBzVkLA4F7uXQeKlUFopdwaXng0AknwC8TDluGFqfa6ThNvONg3yZfAu+QPDzJXrO005j0LPcw0e5cB8+H7rzGtY5/8Axxp0MTeDYfaHerpDZWZvpHHK23X9T1fZHR4tG0aBwYPbcuMTZMp+Il3ENvwAI9So6/DrWcTg6b3GJA5n4uVKdxN/la0fclaGkZseo6ViZcTgWyQsPDoQ0Aj6grqXzpSfNszCPxR81zNL1LsXFA+TIizNOkkDHbWbXRuK2A8EWDau7daVl6lpE08ua3HixQZmQBth5A/MfGrWHoeecvT4XP8AjLeJ8V1vnHl5Pp+gm03ib/g1rWYzDzu0shbp8MRxMWUb5pnU17h+UDquyV4bG4udQo2fBdv+H2VJD2ejjnxZI4DM90ORVtkBPG+o4irUvinI6eunJKMI+T0uPPmSUzJx2Q7Wiu5fcfoOoXDrnZ/B1nFmhmiDJZQKlYAHBw5E+PzWqjqPVcE2naPltJqqPmnZ/TtP1vs8/Ey8GFmTiTuhdPG3bJ4gkjn1HHwW5pGHpbdP7j/J8J0sRMchfCDZ8VkdjDvzdcc0/huzDXhzcvSYkTIZcl//AJtGvAhfQka9PjjLGpNGZkaDoWS4F2B7HKDwkxXFtf8AbyV5xsnCaNspniHU86810ygbjSIZSz3TyP2WNnrjjjH6UQa8SNsLC1aUR6jjj/zLatyQNYSWirXktdl39o9PhB+Brnn7/wAluC2Zyy4xX8o79VY90DcmI1LAQ9pHOv74r0+m5jNQwIcpnDvG8R4O6j6rDip0IsWCOKn2QLoMnL00n3WnvI78OR/ZdIOiZFUk/uegQrzju3VwHC0LfJGDy7XA8CuA47/aAS3vXGQkU4DgONLNmmmyT+K/h0Y3gB/NKWFkMIcGDdYviVwWJryef1GVTSTR7XRT3MBdK1sbnOJAJFgeBXVn5re4Ld497nx6L5zu8gpNdRva35rm/R27s3DMkkkj3mhZDGHJilIY8yCRocebSOa9dgT44ja5koMvNxLgvkWJM7dZ2gDwau6HPe38sdf9KzL07vRZRWVbZ9f9raW/EwHx3BZWqTRxs2skFPFvFgiweC8JjyajlwMlhwcfY/i2+BI6Hkk/B1h3LCx68LP8lzcG+2c4enjB2n+j0GBMJNSy5I3B0bGMj3A8NwskfdasU2/3TxC8QzS9XHw6ZifMf0U26drY+HTsRvoK/ZeuGWMYqP8A2dXFPyezkbRVZFLy7cftHExzhjwxtaCSbIAA+S7ezQ1GZr83NeO6nY0xx7rrn71dLFLvjyczEkl0zaBUt56lRpAC6mSYcrmSXwPFUMY57g1oJJ5AKTmSRkB7HMJ4gOFLDSKXlIghVAkKbXXwKzQJtdSU0feNFc1ElMPpZaFeURGIOr/oFF+J/C6/VWd4VJsnmpRbkcL43MNOFFWwwho3OHHp5LpfscKdRVbz4KUa5Nog9/gqiSpkKt52+q0kAsqW+hSoc4lR3Fa4hkpXKolMm0lpICSTpS2FUEWtLjQV7QyMcBZ8SoN90eaRKnZS3vkGX3a6KgpWlAo1WA5mnZOMOJlic0etcPusTs/lR5/ZvHxpAHezB+LLG7+EkkfYkfJeiXkdcxMrQdRfq+FGZMOb/wDZiH5T4+nW+h9VjJG1ow/jJTZVpGq5HYzNfg5m5+lyvLoZgL2X4/uPmF7OLtHp00HfR5WO5lXu74UF5E6lh6rAQ0slYR70T6seoWBnYeiY8tvjDXfwNcT9l5pYFN30xXBXGmjX7Zdq/wDNIn6dgO7yA1307R7tXyb/ADVentiGIz2dwMbRQpZIx8nUGtiw8KSHEBtxrbv+q6xgZumuM+I2wfiiu7WvaUY1E7elyuE3Jq1/nRql3eRuY88HAg/NdXY3tRDpjG6BqP4Ric72eYmmuaTdH53X0WVi50GZwb+HN1jdz+Xiq9TxsaXHPtQaGjk5xoj0XLin8We71ONZ4KcH0fUG5MJF94PmsvtLrkek6Nk5bSC5rCGebzwH3XyzT9V1rEMjdMy8h2NECalALQB5H9F3YbtT7WyQv1HIiOHA6zHHQLj5gfqenJSPpXy29Hx/cT+MU7/Ru9iMV2HoUbn/AOpkOMzr58eX2F/NbkUokDnDxpZ00rowIo+DzwAHQK6AmKNrBxoL1yjZ7MaUIqK8HWeKrdwVffO8EiSeaxwOvIHvFEk0PErxeBJ/mmvZeoDjE38KI+XL9B9119ptb78nSdNPeTSe7K9p4NHUX+pV+jYTMPHbC3jt4k+J6lbS4o8rl7uRJdL/AJNWMUwBT0+sfXMXIPJ57t3z4fuoNKp1DKZjRwm/xN9gei5M9eSuOz3UlONULHghZmLlx5cQngk3td18D4FC3xPOkeEhYATRtw4eQXNlzB7trfhb9z4oQtw27Z8yLcnbKApA0hC7HRF8DqY4ev6KbHFwc0dWkIQsV2eiL6PpmiSxu0TCkaCGmBn6BdrJGk3xIQhfGn9TKlcbLQWnk1SqujfuhCyc5aK86A5Gm5cDdrTJC9oPhbSsfRJm5GkYcjRtBhbw9BX7IQvo+j6ZmPbOxpe4ylsdsj+I7uPK+SYd7zWuaWlzQ8cbsIQvSpPlR20dmnPEeQ+xx7ux9eKszsmFrI3SxGQ7iGC640hCzLs5qKc1ZnZEwBa9kTWAkAtBJ5lWBCFqHR2kkkqJWlaEKmQStCFk0FpgoQgBxoLncLQhVArIUKQhaAUgoQqBgVxQShChSsN73NjiMj2NLHO93xFfVdUmDI0mshpHnHV/dCFwk2pMsnVHHNJ3NiQe8LsN48kwQQCOqELcJNumblFJJjQQCCKsIQuhg8Dqek42rdqRpekY0eJK0u72UkhpIFkho5V5c1p4nZ/AwHnu299IDRlkHEnyHRCF55yfKjHpoRcpSaOmTEdLznkaPBvBc8mlMPETS/N5QhLPbSZmZ2hs3GQyP3fxA8VxO0qSZwfPlGRw5bhfD6oQtI5SxRO2JuRCwMDYHsHJobsXDDp2n587zjd/hZHHjG73bQhbRyyQi2kxDN1Ts45kErocqJ9ljnE3XXjzH3XUztkwD8TAff8AskH7hCFs8OTJPFNxi9Iqm7cxgfg4Dif98g/YLjOp6x2gY9onZi4wO1zY7F/uUIUekYxZZ5p8JvRoabpkOEyoh7x+J55la0TQxoCELlI+vjioqkSfIWim/VZOsQvftyASdoojwQhREyq4uy/s1lZbcojHe0ENt7X3tcEIQsttPRMEVKFs/9k="
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
          0.216,
          0.453,
          0.53,
          0.48,
          0.396,
          0.278,
          0.194,
          0.198
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
          0.315,
          0.306,
          0.305,
          0.3,
          0.296,
          0.297,
          0.294,
          0.298
        ],
        [
          0.295,
          0.291,
          0.288,
          0.284,
          0.277,
          0.278,
          0.277,
          0.298
        ],
        [
          0.279,
          0.272,
          0.271,
          0.261,
          0.252,
          0.251,
          0.256,
          0.271
        ],
        [
          0.261,
          0.257,
          0.25,
          0.244,
          0.233,
          0.231,
          0.232,
          0.236
        ],
        [
          0.276,
          0.254,
          0.238,
          0.222,
          0.224,
          0.238,
          0.225,
          0.231
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
      "jpeg": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsHCAkIBwsJCQkMCwsNEBoREA8PECAXGBMaJiIoKCYiJSQqMD0zKi05LiQlNUg1OT9BREVEKTNLUEpCTz1DREH/2wBDAQsMDBAOEB8RER9BLCUsQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUH/wAARCAG4AbgDASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAECAwQFBgf/xABJEAABAwIDBAYHBAcGBgIDAAABAAIDBBEFEiEGMUFREyJhcYGRFBUyQlKhsQcjwdEzNFNikuHwJENEVHJzFheCk6Ky0vFjZIP/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QALxEBAAICAQMBBgUFAQEAAAAAAAECAxEEEiExQRMiUWGB8AUUcbHRMpGhwfEjQv/aAAwDAQACEQMRAD8A7lERfbfFEVUVBERAUREFURFAURFQVUREEREFRREBVREFUKqiAoqogoUREBERAUVUQVERAKIiAqoiAoqogqIEQEREBRERFUREBFFUBQqqICKIgI7cihQd+H+y7uCJh/su7gikjnURFVVFFVFEURVBEKiKIiICiqhURUURUVEUQEREFQKBVARTihQCiIgKKqICIiIIiIoiIgqKIgqIogqhRQoKFSsQsggFRERBEUQVREQEUKIKiiICIVEBQqqHcg9DD/Zd3BFMO9l3cEUHOiiKqqKKqKIoiqBRCoiqoiIiqIiAiIgqiIgIiiChERA4oiiAiIgqiIgiIiIIiKioogUFRFEVVEQIiqIoiqqoqiCKIgqiIgKIiAiFRBUUVQQoh3ogKFFDuQehh3sv7giuGjqu7gig5UREVFVERVRRFUERRAVURFVERERVREFRREFUREBVREBERARREFUQoiChRFQVURQFVEVFURFFEREQREQVFEQVFEQVREQFFVEBEUQVFFUEKIiAo7ciAXNig9DDD1X9w/FFsomtbHcC1wLosjhRRFppVEKKCooiqKoiFQBvREQEURAREVBERAVURBVEQoCIiAiKIKVCiKgoiIgqogRRVRFBVEREVREQEREBERAREQVQ71VFQUQogqiKKCooiCqIiCLoomh0pDgD1eK5104d+mP+n8Qg9MNDWNsANOCJwCLI8lERaaFFUUEVURBVERUERFERVRFQREQVREQEREFUKIgIiiCooFUBRCiqChRCgKrFFFVVRFRVEREVFEUFRREFRREVUURVFUQIVARREBCihQFVEQVRFN+gQZAFxs0E9y76FrowC8Fosd4txWmkgka/MW6AgnULpqqiIMDS7UHkVJV0hwO4gouOKrgaNX/IomkciIiNCXURBURRBQl1LoiCXREBREVFUREBERAREQVERBEVUQEuhUVRVLpdFAKFQpdUES6IoiJdAS6iIMlLqXREW6KKoLdFEUBEUVFS6l0QVECo1NlBchI4LArpDOqNeC0SMyi90GF1brG9ysstgDfeilr6LdDSyONwW6i+9Smh6Zw62XW2667svo7Qb5uHJNoxdM2Bpzgm44LgqJmzOJaCO9WoqelAGS2/itA0TQyRS6IOgqIoo0qIiAiIgIiiIIiICKIqKiiICIiCoiFBVEQoHBREQEURVBFEUVVLqKqoIoigqKDcioqKIgqKIgqKIgqXURBUURBUUKKCqjesVeCDpDyGjcoGCQG99OS58zuZ81nC52a2Y7xxQbIqVj5CCXbl0Ooo7DrP8wuina3IDlF+dlmQL7lNjkhibC0vaSSDxXPUVkhu3K2wPJZ4m5zDZji0ZRoDbiuEEneb96uhSLqIioIoiDpUS6LLSqJdEQRFEVUKXUQERREVREQERFQRVRBUURBUUuiAiIgKXS6KgoiICiXREEUVQVREugBEuiAiiIKiit0BW6xVQERRBUS6ICql0ugqh3JdQlB6WHkGJoG+x+q6wDqvNoJshy5b2B49q7jPlAOW9+1ZkcOJODpRY+6PqVxrZUS9K8Oy20tvWtURERUEREG9EUWWlRS6qAiKIilFEuirwUKIgKIUQERFUVFEQVFEQVFEQVREQFEQoCiKFAKIoqiooiCoohRVQKKogiiICqiBBUURBUURBUUuiCool0FURRQZCRzDdpsszUzEDr/ILUqipvRRFUVEUQEREHQoUQrLQiIiF0KIiiiKogiIgFYqlCioiIqiooiArdREBVREFUREC6hVUKCFERAUKIVUEREBERFEURBkFFLogqKIiLdRFEGSKIgqKIgql0UQVEUQVES6CIiICqiICIiDciIstCIiAiIgqiIiCKKooUKiqAoiKoiIhQFVEVBERQFVEQEuiiAoqoqCIoiCIiKqiIgIiiCq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"
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
          0.734,
          0.664,
          0.429,
          0.303,
          0.283,
          0.264,
          0.607,
          0.584
        ]
      ],
      "jpeg": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsHCAkIBwsJCQkMCwsNEBoREA8PECAXGBMaJiIoKCYiJSQqMD0zKi05LiQlNUg1OT9BREVEKTNLUEpCTz1DREH/2wBDAQsMDBAOEB8RER9BLCUsQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUH/wAARCAD2AmIDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAECAwQFBgf/xABOEAABAwMBBQQGBgYGCAUFAAABAAIDBAURIQYSMUFREyJhcQcUMoGRoRVCUrHB0SNTYnKCkiQzQ2Oy8BY0NVRzdJPhRKLC0vElRVV1g//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAzEQACAgEEAAMGBQMFAQAAAAAAAQIRAwQSITETQVEFImGRofAUMnGBsULB8RUjUtHhNP/aAAwDAQACEQMRAD8AtFInkJpC9o8YaUickKARCEIBEicUikCISpEIEKROSYQCJE7CQoBEJUiARIU5IgEQUuEKQNSpUhQgQpEpCMIBEidhJhAIhLhIVIEQUuEFANQjCEAiEqEAiEuEmEAiMJcJcIBhCtwW8zQCTtMF2oGFC7cZw756nglZPMxm42QhvRAQYKRWQ+J7Q2VuD9tvH3pzLdLKcwvY9n2s4QFRS0VOamoazJAGpICm9UZT61jt3pGw5cfyTX1cmA2AdhGOAZx955qATXinLJBOCSH6HThhZ6tNrakPLnSF4Oha7UH3J/Z01SP0R7CX7Dj3T5FSCijCvG2TtaHPdG1vMl3sqCdsDd1sLnPx7TiMA+SAgRhLhGFIEwrtj0uLf3XfcqZU1BL2FbFIeAdg+R0UMGvdqX1osG/uloyNFjTUc8OrmZb9puoWxfYnGKOdhIMZwSOhWdDcZW6SAPHwKLogpLWpbrHutZM0swMbw1Cj3aOrOh3Hn3H/ALqGa3Ts1YO0Hhx+CA0ammZXtjMco7p0I1CdfJQyiLDxkIA+9LbaJtFC6WVwEjhlxzo0dFkXGqNXUF40Y3Rg8FHmCshLhJhWJEwjCdhGEAwhACeQkwgG4RhOQgGkJrk9SU9HNUzxxhhxI4Nyqykoq2Sk26Q+K1V81N6zHTOdFjOdMkdQOKpFeiTvjoKJ0gHciZ3W9ccAvPXRyEklhyTleb7O1s9XvlJUk+Dt1mmjp9qTtvskooHTTjAyBxXRMHZx+QWZYKCrne6SOI9mNC46AnotWqzG3cLcHnldyyQlJwTVrs5HCSW5rhlZxySUrG5OU0alLK8RtwOK0MxJ5ABgLOqpAWkEp1ROBnVZk0xeVBKJe2CFVQq7UWtnUkJpCekKkEZCTCeUhCAbhJhORhAMwjCcQjCEDMIwn4RhSBmEYTiEiAagpcIwgG4QQnYSIBmEYT8JMIBEYS4RhANwjCckKAbhJhPwjCkgbhGE7CMIBhCQhPKaVIG4RhLhGEA3CTCfhGEAzCXCdhGEIGYRhPwjCAZhCdhBQDMIwnYQgGkK5apiyYxYBa/XyICqqxbRmsZ5H7kYK88rqiZ0rhgnl0TMJQEuEAzCROIRhAXKurkko4wQB2md7HgVRwrM4/olP/F96gwiA3CQhOwgqQMKQq1S0M9Uf0bcN5uPBakFmp2DMznSH4BQ2B1DOysoCyU6gbj/AMCsg0NQZXRsic/BxkDQrb7aho+6wxM8G6lPqarsad0whc8N48lWwZUFlmeQZnNjHQalabW09BCN+QgDm85J8llzXipk0YGxjwGSqT3vkdvPcXOPMnKmmwWrjcX1fcYC2IcubvNUcJ2EuFYDcIwnYRhANwhQ1lZT0UYfUzNjaeGeJ8gs47T2wHG/MfERlVc4rtl1CUuka+EYWfT3+1zkNbVNYTykBb960WkOaHNIIPAg5BRST6ZDi12huEYTkisQNxqF1tnja4xuwO63K5TmumoJnxUzXMOu7zXLrMcsmGUIdtG2nnGGRSl0iS91Ic9tK3l3nfgFQt9A6sqSDpE32j+CiLnz1hycve7GT1K33y01ppAHux4D2nleZlk9Dp46fCrm/tv/AKO3HFarNLNk4ivtIsfoaWD6sUTB5ABctc7g6qq3vhaQzgM8/FQXa5VFdUM3zuxA92MHQeJ6lWYohu5I4qfZ+glpm8mR+8yus1azLZBe6jOkmmGpOEyWtO73laro90agg+IWVU+yF6u5nBRHLKZD4JjWlxwEsTN9wb1WjDShvJaLnkq3RS7B3RC1ex8EKStmiQkIUhCaQqmhHhBCdhIQgG4SYT8JMIBmEYT8IwhAzdRhOwhSBmEmE/CQhCBmEYTsIwgGYRhPwkIQDcIwnYRhCRmEYTsIwgG4SYT8JMIQNwjCdhGFIG4RhOwjCAZhIWqTCQhCCPCMJ+EYUgZhJhSYRhAMwjdT8IwgGYQGp+EYQAIde+Q1vVXZxBLBuRlhcfY5Ki7J4nKTCgDXxujduvaWnoUzCtMm03Jm9ozoeI8irDLfFIwPbI5odqMjglgzQCTgAk9AtO3U7ISXTlrZT7LSdQFXM7YgW07d3kZD7R/JV3AuOXak8ygLFbSjfdLTtDoue7rg81TIU8MskLt6NxafBWImw1sga5hilOu8zgfcgKBCkgppJzlre6OLjoB71eqaWmpMPfvyZ0azhr4lVJp5JhunusHBjdAFILtYymFFhpZ3R3CDrlZWE/CMICMhXbbQesntJR+iB4faKrtjL3Bo4uOFtTSsoaZoaM4w1o6qGCOrr46T9FG0OePqjQNVaSphrmhkj3Ru88BTGajrBuyNDXeOh+Kgmtbm96FwcOh4ogVpqCWIbze+3w4rTtU3rNKYpdSzukHmOSzA6opnYO8zwdwV2grO0qWsMYa52hI5o+iDNqYDT1D4j9U6HqOSiwtW+R4kikx7QLT7lm4UokZhI97I2l73NY0cS44CpX25C10oeGb8sh3WA8M9SrVr9H9dcYRcdp7iaOHG92QxvtHjnus8tSufPqYYfzHRh08svRSmv9tiJHrG+f2Glyh/0otoOCJx49n/AN10fqWw1uG5BaXXFw/tJnkg/E/go5amwyDdZsrbAPFuvyAXnP2pzwj0o+y21ycVXXC1TbQUdZVB1bbxhs0AJY4DXP358cYXc3Gn2ahbEaPZu3z0s8YfDUZJEjfvBB0I4hY1ZZtn6sOxaXUbj9amqHAD+F2QorVR1Nsc6ibUGot0pLgJBuugfycOWDwOPPGi4s+oWb3k6Z26fTPE1GStCV9islW0mK3miefrQTOI/ldn8FhSUl12feZaaUzUwOTplv8AE3l5hdZhGMjCxxanJjd2dOXSYpqqKNmvEF1jIaOzmaO/GT8x1C0i1ctdLRUUNfFWWhjg4u9lo9k/kUfSG08fefTb4/4QP3Fe7i12OUU5Pk8DNoMkZNRXB0+F0FCd6ib5LgKPbEU7hHcrTk8yx5Y74OXV2baiy17Www1PYPOgin7h9x4H4rp8WEumcjwzj2iSTSRx8VBWSuc4Oe9zj1JyVsupYA4bwySpHWukfgujyr2uzOn0Z9tssle1k73dnFxB4l3kujgo6ekblrQMfWdqfiq8TjBC2GLusaMDwUE0QnP6Qud5leLqNLqtTN751H0X9z0sOowYIrbG5fEp7U1FPKyNsTmve3OS3XA6Llah2dF2D7fTvGHMyozZ6E8YQu/T4FgxrGndHLlyvLNza7OSpzhzT4roKeIPYHYzlXhaKJvCEKzHDHE3DGgBdW7g52rZQ9XP2ULS0Qo3E7SjhNLVJhJhSCMhNIUhCTCkDMJMJ+EYQgbhJhPwkwpAzCQhPwjCAZhIQn4RhAR4RhPwkIQDcIwnYRhAMwjCfhGFIGYQQnYRhAMwjCfhJhANwjCdhGEIG4SYT8IwgGYSEJ+EYQDMIwnYRhANwjCfhCAZhGE7CMIQNwkwn4RhAR4RhPwkIQDMKxE94pJQHEYIA8M8VFhTxRuNLLhp1IwgKgbhGFJhGFIIyENc6NwewkOHAhPwkwhAk0ss7gZHb2OHgmbqk3UhCAZhGE/CMIB9GP6VHn7S0aun9Ya0FxGNQsxpLHBw4g5WlUgy0++wnI7wwoBnT0skPFuR1GqbDPNCe4846HUKzFWPbo8b4681J2dNU6tO67w0UgRldHK3cnjwPiFJT0tN27JoX+yc4ByqstHIwEgbw6hXbdSuhaZJBhzhoOgUMEV6IIibz1Ky8K3Wyieoc4eyNGqu7DQSSABqSeSlEGbebVHdaYROeY3sO8x+M4PiOioQ7X3ezxfQ17hjulG0DdDn4kYBwLXjXT9oIqLlX3uvFq2fhdLI7jK3pzOfqt/aK3qHY6x7OsE96d9KXE97sQf0bT4jn5u+C8rXZcNVLlnr6HFmvgy6KSlu+TanTvPHspoyHD+Id0/EeScIZo37r43MI4hwwVsVt4qqodm0tp4QMNihG6AFQOq8Bvnjo+jinXvdiNBxqlwlQqlhEISFSARhISGjLiAOpOEwVEBOBNGT03wpICWGOZu5LG2RvRwyFkV2zVHOC6nzTv6DVp9y2uIzyQrwySg/dZSeOM/zI5qC733ZtzYZXmelB7rXneb/AAniPJdZbNq3XOHep3NDm+2wjvN/z1VWaJk0bo5GhzXDBBGVy1yttRZ6gVtA9zWt1wNd38wvW02ut7Znj6rQcboHfm7VnUfBMN4qmnXHwXP2/aSjnt5qKmRsMjO69nEk/sjiQVQqdrHTvMdBQPkPIvyT8B+a9V5MaVtnjxx5G6SOsN7qzw3fgj6Zq/tD4LjjcdoyN4W4gf8AAP5pjdpqynfu11AB5AsPzWa1GJukzV6bKlbR2RvNX9oJjrvVn66yLfd6C4YbFJuSn+zfo73dVeLG9FuqatHO04umS/SNV+tKFFuNQrUVs6chIQn4SEKhYZhIQnkJMKQRkIwnEIwhA3CQhPISFSBhCTCfhJhANwjCdhGEA3CQhPwjCEEeEYT8JMIBuEYTsIwhI3CTCfhGEIGEJMKTCTCEjMJSE7CMKSBmEYT8JMIBuEhCfhGEAzCMJ2EuEAzCMJ+EYQDMIwnYS4QDMJMJ+EYQgZu5Sbp6KRSNeAzGNUBCI8DLjgdOasR1TGxBu4cgYCgIykwgG7ueCTCfhSMeGsxjVCCENJSEJ5CN1SCPCTCkLUYQDMJCFJhPip3S+DeqEFfCu0EuWmN3LUFSNp4YhkgHxcg1UTNBk+QQFeSjkMh7NvdPDJwlZQPJ77w3y1VtsrnM3o258yqj6uZxI0Z5BOQXWNbCzvPJA5uKqVlZ2jTHFndPE9VXc5zzlzi4+KTCUCPC5q4y1e0l2ZYLQN4E4lkz3dOJJ+yOfUq9tXdDbrf2cTsVE+WsxxaOZ/D3re2atrNi9m2zSMH0tXtDnZ4xt5N93PqT4Lg1up8KNLs9DRaZ5ZWy1FFQbGW36MtWH1jwDUVLh3ifH8By81gSyOkeXvcXOcckk5JKJZHSPLnOLnE5JPElMXzMpOTtn1MMccapCoSJVBcVCRZ13uZomshgjM1ZMd2KIDJJOmcfhzVoxcnSKykoq2TXG5Utuj36iTBPssGrneQUdBbdp9oQJKaFtro3cJZvacOoHE/Aea29mdkKe3OF02ikinuLu8GyuG5D+BPyHLqukmvtqizvV8R/dJd9y2Ua4xx3P1OWWS+Zy2o5ql9GluPfuNwrK2Tn3txv4n5rSZsBswxuPo3e8XTPJ+9TybXWhhwJJX/ux/nhRHbO3/Vp6l3ub+av4Wql5P8Agy8XTLzRGdg7MzWldWUZ6w1DvuOQqdVsxcqRpdTTtuDB9V4Ecvx9k/JaTdsKE+1T1LR5D81Yg2ptMpwZnxH9thA+WVEsGoX5ot/UtHUYP6ZJHJ94PcyRjo5G+0x4w5vmFBWFop3kgHTmu6rqGgvlOHB7Hub/AFc0RBLD59PArka+inoZ3U9Q0ZxoRweOoXOuGdae5HKWixQ1Esk9YWkBxxCw4HvPTwXSwxxwMDIY2RMHJgwFgXB09pq21kYL6YnD2dPJadReqCnhZK6YEPGWgDJPuW+Xfkp9oyxbMdrpov8AFD2MkYWSMa9p4hwyFhM2rpnOIZSVEmPsgH5K9Q32grJBEJDDKfqSjdJ/BZPFOPLRos2OXCZRumzEMwMtCRBKNdzPdPl0Ve0X2WjmNDdt5pZoJHDVvg7qPFdRzWbe7RFc4RjDJ2+xJj5HwXXptZLFKpPg5dVooZY3Fcjvp20/79H8D+SFg/6I1X+8w/ByF6f+ow9UeV/pk/R/Q9UwkITyEmF6B5gwhNwpMJMIBmEYTsJcKSCPCTCkwmkIBuEhCfhBCEDMJMJ+EmFIG4RhOwjCAZhGE/CMIBmEmE/CMIBmEYT91GEAzCMJ+EYQEeEYTyEYQDMIwnYRhSQMwlwnYRhQSMwjCfhGEAzCTCfhGFJAzCXCdhLhAMISYT8IwgGYRhPwjCAZhIQpCEmEIGYRhOwjCAbhGEsruyic8gndGcBZL7hM890ho8AqTyKHZBrbqZI5sbC55AAVCnuLmvAmcC06Z6KS9OBijDTkE64UeKnFyRBNSVENVLuNdqtGSRkQDeHRcxQl/rcfZDvbwWte6kxPDGEF2PgohkuNyFlmSN0h3hJveajLHN9pqw21NSZBuPdvE6YXQwvkEbRLgnGqvCe7oDqN4a/c5Hh5pK6PDw/Gh4+ampqeOpnYxh3XErfqbBC6EB0rs8VE8kYPk0hjlJWjkUYW5JY4mPIEpwsi6w+oQzyEk9nG5/DoCVZTT6IcGjmdn6Ru0vpB3pcOorfmR+eG6w6fF3yC2L3cXXO4y1BJ3M7sY6NHD8/es30ftdS7IXe4cJaydtMHc8AZd/iKirp5IIHdhG2SY6MbnTPj4L5rVOWbNtirPqNJGGHFvk6Ibld4aAtiDXT1L9GQs1cVPSbN7W3YCSaWG0xHg12r8eQyfiQtjYrZuuos1bKMVNwmOZKqQaMzybnGPP8ABdk+09lH2t3uccTfs7waPwWkdLKPHH8/QznrFLlXXy+p51U7F3Sjbvjatpd9l8bj+J+5U7ebu2d0FS2GqAOA+Frt53ux+C9Dlu+zFGdyCCSvk6NaSD8U6O+3aUbtussNHGeDpNPloulafHFf7i+dL/05vxORv/bfyt/+HMUuzm0FYA6K3uiafrTEM+/X5K5F6O5G1PrtfcqWlmH9ozLnN5aEkY9yhu122rlu0VscZ2md4ax8XdjIJ45aOA8Suids3RQtBmlnqXHm9/FW3YcKtV+yv6srWfM6d/u6+iMv6B2RpNa27TVbxx3Xf+0fipGS7H0/+q2aWqcObml33lbVLa6CniMgo4s8G7zd7708NDRhoDR4DCylrY+Sb/ejSOik+2l+xlxXaMD+g7KMZ0Lo2j8FYZd73jDbTTxj94BXUixesflFfU1WiXnJlCW6bRO0bb6Yt8XjX5qhU1cT/wDbViDWnjIxgcB7xr81voOMEHUFWjrpJ8xRWWgg1xJnLVlpFDGLns/UuaziW728Mfl4Hgq9xu9HdbcI6smlrotWgglrjzAPQ/ktiOE2itjaHb9NVO3HggANfy06clnVdra25mjMbSx5zHv8MHh+S754sOphvfzOHHlzabJsXyOXqmRVNNJG7vMc0grJ2EstuuW0T6G6h7+zYXRx5w2Qg6gnjw1wF2Vy2f7ADumLe0Bad4FchWwy7ObSW66F43BKN4t6DQ/+Url/CuGNvHK0zteqU5pZI00eu0lJTUUQipII4IxoGxsDR8lXulmt13hMVfRxTg83N7w8nDUKWW40cTywzZI+yMqeORkrA+Nwc08CF4ilzwz13DjlcHD11mqLFK2MyvqKCQ7sUr9XxO5MeeYPJ3uPJRZXd1VPFVU8lPM3ejkaWuHguHngfTTyQSHL43FpPXx9/FWbvkmHHBGhKhVNDqsJCFIQm4X2R8OMwjCcQkwgG4SYT8JMKSBuEmE/CbhSBuEYTsIQDCEYTiEYQgbhJhOwjCEjcIwnJcIBuEYTsIwgGYRhOwjCEDMIwnkJMIBuEmE/CMKQR4RhPwkwgGownIQgbhGE7CMISNwjCdhGEA3CMJyXCEDMJMJ6TCAbhCdhG6pA3CMJ7W77t0YypZKV8bd5zm/FQ5JdkqMn0ithLupS5o5hJ2jN0neGg1S0Vaa7F3ARgrHr6HsXb0ZGHfVPFST1kr3HdJA5AKOIz1BdK/VrNFxZNRCSaSsiim+ARgOlxryyoKh5Y4BryR0zlbc2zz6uj9ekqxHEBo3dyVUFNFDButGepPFc2/Yk32yXFkVNE2Nodk7x1yoqxuJGu3va01KvvibI3dOg6jitJ+y0U8THeuSEYyNApwtzd2Tsb6MalqYKV2ezLpMaElTfTD97DoRhWprAwxgCcgt4HCrvtEww5j2uIXenJLgq4SR1OyEMVYXVmCNzQA9Vc2s2ntmz1MH1shdM8Zjgj1e/x8B4lc6dp6fZTZqWWRrX1sjiyGI8HOxxP7I4n4c1lWOwMjjO1e1pdWVdSd+npJPrdHOHToOAHwXHqMm2TlLyPU02JyiorzIfpDbfarM9BE20248J3O3BjrvnU/wjCwr1s5LBTzSybUevThhJjiEjg89N4nC6O8Xmsuj81L8Rj2Ym6MaPJZUNOa+upaJh3TPK1memThcGPUZM2RRTpHpT00MGJzkrZd2K2eu92scNvYW01DFM6V87ge886ED7WAPJdPHHsvs05rIYXXWvHBxw7DvuHuBKNs7gaMRWOh/QU8MY3wzTPRvljU9cqXZCgaKOGXcHaTknexqG54D4LuySjihurvyX92cOOEssqvrz/wCkWHVG1F0hMxdDaqU+yBrIfx+5VI9naUydrWSTVkp4ukcf8/NdFcZQ6QRM0ZHpjxVRcGTVTuocL4Hdi0sK3T5fxI4KeCmbuwQsiH7DQFKqc91t1PP2E9fTRS/YfK0O+GVbaQ4AjUHhjmuV2+WdapcIsUzcuLuQTJXGSXA15BSyHsYhGOJ4plO0ZLzwaEfoV+IVBxuxjg0KFK5xc4k801Qyy4BQ1VXT0cfa1U8UDPtSPDR81h7YbUx2GEQQBstdKMsaeDB9p34DmuIobJf9q5vXJS5zHH/WKh2G+TR+Qwt8eDct0nSMZ5qe2Ktno8O0VlnfuRXWkc48u0Az8VpAggEHIOoI5rzyT0a1XZZjukDpPsuicB8c/gruxlt2ls90dR1LB9HbpLiXhzc40LOec8VM8eOm4SEck7qUTqb3H2lsnx7TB2jT0I1WffJC42+uDsEtBPyP4laty0t1SSdOyd9yxr0GstVujd7W4P8ACF6Hs53Bp+v9jzfaKrJFr0JLvdaKopw2J5Ja/OS0gALhttxFU2vtGPaTE9rtD10P3ruam0U09LK1lOxrhGcP5tOOK842kp9y1ue+Z+9loAzgHXos8Osw7fDimdGbR5nLxJNcHVWWf1m00c2cl0Lc+eMH7l0NhldvyxfVI3veuV2T02eoh+wf8RXW2GEhsk5GA7ut/FeBJVkaXqfRN3hTfojVXK7SMDbmXfaY0n7vwXVLj79OJrpNg5DMM+HH5q6OWPZR0QkQhodaUmE8pF9ifDjcJMJyRSBuEEJUIQNwkwnIUgZhGE7CMIBiMJ2EIBuEYTsIwpA3CMJ2EYUAaAlS4RhAJhGEuEIBuEmE/CMKSBmEmE8hIgG4SEJ2EYQDMIwnYRhSBEYS4SqANwhLhLhSBuEYSpUIG4SYT8JcIBgalwnYQQhBTfDM+o7gOFbfSzGIHC1LVTse5m99Y6q3cmwtlDY2gYGuFzya3UdMXJQuzlJaWYjA0UcFG52+HnAIxouicxpB0Cy63EGXtV0o+ZnOUmig6hihy6STLQM4Utn7A0eQ4AucSQsypkdIHuLjkhLTPdThjm8W6rgeXH5R4Ml2dLcf0lpbBTxvIDgToueqqeeKJzns3AMaHiV1La2YW91QGsaGtzquVrppJw+WV5ceKZlBTTfZpMlNLUgAhmQea3oqmSOla0xEgNxnKz7beG5jjlhG6cDe5hbdWwCHIC2xrHy4l4JVwZclRhpzGVCahgGvd81ae0buqxNqan1S1zyN0LInEeeMBdKoOzJ2dpWbW7Zy1NZh1stoMjgeBAOg95BJ8Ata/XKS5V76gk7nBjfst5BZ+xDPo/YSacaSXGqLM/sMGPvz8VFW1DaenlqHcI2F2OuF85q8jyZKPptFiWPHuM+vr5ZKpttttM+rrn/UaMhvmr9jtt2s20FpfejG10tSxzAxwO6N4Ag48wun2KsDbPbBPOwOuFWO1qJCNQTqGeQ+9R7dQvFHSVrPapps/Hh8wFfSzisygl+5lqoylic2/wBhu2cbxtDVk8DukfyhdPs85sNqhkGO7A3d8ysHbHdqpqW5M/q6qBpBHln8fkruzU/bWaAZ70WY3e4/lhdurvw4yOTSU5Sj99mmSSck8Vzu3N6ks9kc6ncW1FQ7so3Di3TJI8QPvXQri/SnE51topQO6ydzXe9un3Lz8KUsiTPQytqDaItl9gbXetjn3WpqpRWSiRwk3+7EWkjvDnwyc9VQ9G20ktJcIrVVyF9LNpCCc9m/kB4Hp1wuUiq6qKnkpo6qaOCX+sibIQ1/mOBS0T3Q1lPIz22Ssc0+IcF6c4botM8yM9rTR7q95e4uKknljp4Gse9rS7U5OFRuFUaWIuaAXk90dPFcBfr9evpWWjtdslqp42tfJI6Nz+IyMAclxYdOpR3zdI682dxlsgrZ6K17HjLHNcPA5TsZXNWanvBt0NVWxMgrHAl0UZwWjl7/AAWnTXTXcqmFjh9YD7wqvTqSbwvdXzLR1Di0sy238jjrLs5V37aGruV9p5I4WSn9G8EdoQdGj9kDHn8V6C1oY0NaAGgYAAwAEMeyRu8x7XDqDlKscmSU3z5G2OCiuPMEjnNYC5xAA4kps7+yic/mBp5qjID2EbRJho78hdwyqxhObqCs0cscFuySpEl1d20LaNhyZyA7HJnM/h71k11RHcb1FTsOIacYcQOnH8AmXG69vK6G3jtJnjDpW8GjwUtnoXUzmBpy5w3nu8F6WTItHg2X77/uebixS1ufxKqCG7RX1lHTyUdPBK6aRuA7d0weJHVeb7VQ1opI5ZYXNjc7ieXQYXr1wpmy0ziQN9gy08wuQ2pp2TWCsDvqxFwPiNQvIw5Nslwexkhvg6Zq7MWqF9moXNma+DsWbpZxdp8tcrpWNaxoa0ANAwAOS4z0Y18TNlWx1FREzs55GtD5ADjQ8z1JWvdNqqCjaWU7hVz8mRnujzd+SrPG4zaIjlc4Jsu326MtdEZNDM/uxM6u6+Q4riw8kFzjrxJKjmqamuqXVlbIDIRgDg1jegWfca9gjPf3Im8XHmrKFukTe1WzT7aP9Y3+YIXM/SlH+vH8pQtfAl6FPHj6nreEJyRfUHx40owlKahAhSJxSKQJhGEqEAmEYSoQDcIwnJMKQNRhOwjCAbhGE7CMIBAjCVCAbhCckQCISoQgaUicUiARJhLhLhANwkwnIUgahOwjCATCXCXCMIBuFEypiEha8HTop1HDRmon7jeKh3RMWr5HvngA7rHe9Vn1jW8GlXKmhdC7cfoVWkot5pIVUn6l3KPoPp5O2ZvAYUhChhc2KPd6JRUNdphaGLNag/q41JUf1pUdAf0LCpJjl5K53+Y3X5SJ2jSsq5RdswMzgnmtR50KzLiSGNI6q6SfDKS6MeqphHTSFxDiOC1qS3QVUe8d4PaBnd5rIqpC6J7eIK1bHcxTVDWTNBY/DcjkuWU8K91FIr3uTfFE2e2up/Y3xjyWNW2llDQVDs77yw94hdOTusJ5AZXFXKskq+1fNId05w3OgCyyTjB21yb5EkjPhjcNztDu8M9QutfMyWmbunPBYltjinLYaiPLw3Qla+4GN3RoAtMEatlYdEEo0wuY221s1YMZxGPvCc2C4bYbU1Vmp680dHRg9q5nF2CAT46nA5aLSk9D1OQXG+1J65hB/FayyxjwdEcUnUjm7JViTZS1wMd/VGfeHiX5+7CtwUjKyeKnlHckkYHeW8Cr8nogoz7N7qgf+Xb/AO5VpfRJWQ5kodoniVusYfCWa8tQ4488LyZ6RuTkn9D18etjGKg0d5nXRYu02aildQjGJG5JI4dPmFjejjaCuuIrLZc3GWpoyMSn2iMlpBPMgjit2+QvJZOB3cbrvDovNyKWKXxR6WBwy99MyNn5fpOzPs87sVFJnsgemdPgSR5EJbHXC018kFa4QQzEDLzgMkHXzH3LJuwqaCeO529rjJGf0m4Mux1A5+I6K59J2TamBjLg8wVLCCXxHunwPTTr8V9DjyQ1eLj916M8DLjyaLNT68mdsVSvdrivFsnoZTuiQd12PYcNQfip4ZYzTtFKGOa1oawNcCMDhqpA5xJy3DRwPVeX4GWMvys9Hx8Mo/mR4tdLVW2mpdT1kLo3A6OAy146g8wtjY3Z6e4XCKsnjdHRQOEhc8Y7QjUNHXXiV6TU11LA39I9nkdfks98k90O5E10cJ0LzxI8F6K37N2X3Uee5Rc9uH3mKHOulxydYIuJ5HwWvuhZV2guNJZJY7CyP1wY3O0xrrrx0z5rzWs232tdVG3unZT1LX9k5rIWh29nGM6/JeblvVP3OIrpHoYktOqlzJ9s9bqamCkhM1TNHDEOL5HBoHvK4faPbSOsJpdn6R1fOD3qgsPZtHQcM/d5rLZYjUSNnvFXPcp/72QloPgFsw0To4gyKJkbBwaAAB7lzxnHE90Xb+R6S0c8qrJwvm/+h+xl3q71S1D4WMhmgeGywuOhyNCM8OBHuXQmrujO6aAu8WvXObA05i2i2gIGGB0QPTeOSV267Z+0Jp8pM8hez4cpNrlmO6S7y/1dJHFn6zzn8VXmstfUuZ63Vds0nVrThrf8+S6FIsp+0c0lUaX6GmP2fhg7fP6mfS2imp2lrW4zyborzWhrQ1owBoE7CFwNtu2ehfFLogrXiOlkPhge9cDt3Weq2GSIHDqhwjHlxPyHzXYXapacsLw2OPvPcTgD/wCF5FtLeXXu69pDG+WlptI2gHUZ1cemT8sLfT43OfwRnnyLHi57ZLa6ZkNLE58bS8jeJLRkZWqyqYwYZF7yVz3028aeqjP7x/JTQi93M7tJRyAH6zWYH8x0Xa9POb5RyrU48ceGaNfcWRs3ppMDkwc/csukoq/aOp3Yh2cDDq93st/Mratuw0jnCa6VAceJijdknzd+S6umoxTwthgY2ONgwGtGAF6On0SjzI8vU+0HLiBxf+gtT/v8P/Tchdx2MqF2+Bj9Dz/xGX1Oi7Nx4NKOxf0HxU5KblVsUQOieOXwUZBHFWsoIDhgjKmyKKiFNJDgbzdR9yiUlREYSoUgbhCVCAEiVCARCVCARCVIgBGEIUgRBSoQCISoQDSkwnJEIEwjCdhCAbhGEqVANwjCdhACATCMJ4bkcQEbo6pYI36NJS0NcIXt3RqnOZlpGVVbSPadHhVk+OCYrnklqK3tJXOcDnKj9eY3Qg6pppHk5Lgmm3vJzvhVTkWaiIHte5xCh4K3FR7jSN4ZKT1In661T4M2ueDVt3+qsKmf7SpUkjqeLs3HeA4KV1Vn6qyadmqaoWYgNWXdzinCvvk3yq1VTGpGO03R5JVqirZz0oPZkjUK5SUtRLI1scTngOGoHBS11BFBSSEy97Gg6q/a3xw5dFLv5ABC5Pw+P8l8lF3ydK4bzC0nQjC5mussMEE8jpXP3WktGMYWm24SNGA0FZd3uckkclMyNo3hhxU5IKKuRtOUZIdQPoayZjow5s0bR4Z0VuYgArGtzdyrEjXFpaPZV2tq4KaB09XUNhibxc84C0w3KO5lYy8jjtpo63Zq5u2htNa6nknduvYG5ySMnwIO7wPNenxUFZX01PVNrXMM0LZHtycBxAJx4aryTbO/Wu60DaehnlklbLvHejLRjBGmfNe2WOSOW1UT4ntkYYGAOaQQe6Oazyy2O4nbjjvjUjDNBVgnerDp+05c7t3dbnYdnGVtDWuZLNOId7GS0YJJGeei7SXUv964L0tabG0XjWj/AAuWk5NxMccVvoz/AEaGltjpG1Mv9Krg1zZHcDz3PPXPivQHta9pa4ZB0IK8moJmzUkTHAE7jR56LordtPcaJgjlaysiboBId14H73P3r5zKnKTbPqIJRitp1D7LTvflr3sBPDivPvR3RQXDaa7zVI3nRtcQ0j7UmD/nxXTu24jDTm2VAd++3HxXDW++iwbZSXQQmOkq3O7WMHOGOOTjxB1V8EGlJLujPUTbcXLlJnoVRs+wyPdCHsDRnukjePQJYrNK2SOJ0kpaW7zyX6DwC3YJoqmFk8EjZIpGhzHtOQ4HgQnqq1Wdcb2WeDBLlwXyKEFopY8EsBPU6q8xjWDDRhKlWU8kpu5uy0YRgqiqBcJt3sxN9IR7RWun7aeIh1RABq/H1h440PuK7tIkJuDtCUdyOGsVXT3KA1EDw7GhafaYehHIrQnmbBEXlrnkeyxjcueeQA6lbr7Rbn1frjqKH1nGDKG4cR4kcferMcEUX9XG1vkFRpXa6O1ap7aa5MrZW0yWuge6px65VSuqKjByGuPBoPQDA+K2EIUt27ORKgSpFHPPFTt3pXho+ZUEkizrpc4qWF5MrY2sGXyOOA0ea5zaHb+30QfFTuM8o03Iz97uA92VyLaa/wC2UrZag+rUIOW6EMH7o4uPiurDpMmV9cGGbU48Ktu2Ov8AfqnaSqFqtDHmBx1PAy+J6NXS2CyQ2Si7JnfmfrLJ9o9B4BWbPZaOz0/ZUrO8fbkdq5/mfwVt/EL6TTaaOBcdnzWq1ctRLnofBRvl72AB1wpjR7uMuytSnjEdE0uYQSNMptRTmOFkr8d48Ftv5OXaZbomsk3eKkawDkpHyU7mPGD2udCmBw4K1lWLuhCEIQaxTU8hNwsDpG4QE7CMIQAUE0e6cjgVPhK9u8whSmGrKaMJcIwrlBuEJ2EmEIERhLhCARCVIhIiEqMIBEJcJMIBEJUqAbhCXCXCAajCdhGEIGownYRhSBuEuEuEuEIG4SgJcJQEBTmqxFIWFh0TDcGgZ3CrxjY45LQSoaqCPsXYaM4SkTZV+kh9gpPpIfYVEsIVgRtwO6ppCyb6S/u0G5/3fzUXZt6I7NvRKFkn0l/d/NBuh/VfNR9m3oEdm3oEoWP+k3fqx8UhuTvsBJ2bPshHZt+yEpEWL9JP+wEv0nIP7MJm43oEu43oEpCyCslMjXOJ3ieSSKbsHB7DrwT6lrRC7GBkIiYxzGnAJxxXnrS1kT3c9kWSfSM3INR2plY+R2A4jBwk3G9EFo3Tga8l15obo8AV9SYn5YG6jU4XO3GNu0G2lqtFdK6OjPfcGnG8cOJHmd3HvW3UvZTwSTPHdjYXnyAysjZTZtm1FPLfrxVzsLpDHSx0z9ws3frZwcAE4A8yufPNYsNNnZpMbyZOEdpUWKx1FN6sbLQNhAw0NhAcB+8O9nxyuOEtX6NtoKeelnlmslbJuyQvOdzr7xxB5gEFa7aLamyNPqVZHe6ccIqvuTDyfz965O6XG47ZbQUdlrKUWxsMhdJFIe9oNePE4zgLx9O8sslXaPdzrHGDbVM9ar66ko6KatqKhjII2F7nk6YXmN5uN62/oWUFrs5ZQU82+KmV+7l2CMEnQceAyVe9KLnx7OxMjLuzdUND8chgkfNdhaG07LVSR0Yb6s2FvZbvAtxx967dZneFKK8zz9Fp1lbkzyC4bP7QbMsNRNTg0+e8+N2+weeNR5p1NeY5WDemEb+bX8vevZD2UzZIjuSDG69hwRg8iF5BetnqO0bYtt9S15oaogxOa7BYHaDXwdp5LjwzjqJbZKmejlUtOt0eUK+tY9veqGEfvBZ9xqKGaEsklDnDVu5qQV0jvR/byctrapo6ENPzwrdJsTZqch0kctSR+tfp8BhehHQST7OCftOLVUc1sltlcNnQIiw1Nuc7WJ2m6ee4eR8OH3r1KybT2e9sHqdYwSnjDId2Qe48fdlZT6GkdSepupojT4x2W4N0e5cxcdhKaVxkt9S6ndxDJO833HiPmoz+zlPmPZng9pbeJdHqaF5JE3biyd2mqZ54m8A14mb8HaqdvpC2oowfXLfC4DiZKd7PmDhebPQZYnpw1uKXmeqpF5iz0q1g9u0wOP7Mrh+CV/pVrMd2zQjxMrj+Cy/C5fQ1/E4/U9NyjK8ol9Jl+ncWU1FSxnGcCNzzj3lUo9q9r7s5xgry1oOCI2sYB8sp+FmlcmkFqIt1FNnsT5GRt3pHtY3q44CyrjtPabfG976jtdwEkRDex7+C8+g9cMBfdaztpAcl7nZwPElZ1VcjUB0FFEJGHuumkHd9w5qMeBzltjya5Jxxx3T4N+6+lGSTMdrot3OgfKdfgFz9FPeNsbqyhnr5WGV2C1rHEAcyQOQ8SobVaJ7rcm2+1t36l2ss7tGxN5nTgP8A4XsWy2zVHs3Rer0zd+V+O2ncO9IfwHQL14abHj6XJ5UtROfnwea3XY+v2NnZc3Q092oWHvFzCOz828vPULrLPcqW70TaqlJ3fZc08WHoV2dQyF8MgqN0xFp3w8ZBbjXPhheNMlrtl6+puNFb5HWaolcxhcSRug6a8iM41Xbjns/Q4M+LxOuzviE3dJePNU7Vd6K70vb0suSPbjdo5h6EfirLCe1bk6ZXXdq0ec006Z1U4b6tTB2unBZ1eXOcAT3eQU9bUxSUsAYe80arOqZCQzJWGOLNcjKFQ8RTEkqRrt6TQaYVS4n9ICNTvBaDBwJ6LcxDVCfjxQhBtOCbuqYhNwuWzsoj3UEJ+EmEsUMwnAJcJRopsFaOmJ1ed0dOalEcbeDB79U8pCjbZVRSE06BIWtPFoPuSpChIx0DHcO6VBJG5h1HvVoJ2ARgjIVkyrimUcJMKaWLcOnA8FHhXsoMwjCdhLhCBuEYTt1GFBIzCMJ2EYUgbhLhOARhANwjCfhGEIG4QQnIwgG4RhORhCBAEYTsIQDUycZicFJhMmH6MqQZU0IazIVmnp5KhzIom7z3aAJswzEpqeR1O5krDhzeBUu64H6k7rDWt9oRDP8AeBRmz1gBO4w4GcB4JWtXU87MyMrJtwv3QzPs6AqEGWGiqJ+2e57QA3eOgycErFTk1dmrik6MmjoKitc5sDA7dGSScAKc2WtacFsQP/ECfY5JG1ohbIWMkB3scdASCFcqmVEU246sleSA7PmMq0pSUqISjtsy6q21VLH2sjG7mcZa4HBUlPZ6yogE8bG7jtQXPA06qa6mVlJBF2rniXL3b3HIOAPJWrJ29TRGETui7N4a1zeOCCcHrwUSlJR3ExjFyoo/QlZ0i/6gVSqpZaSQRzNAJGRg5BC1Aah7mg1UuCQNCqN1kc+ukYSXCImNvkCrRcrplGlXBnVDN5ueiSnaWt8ypyMpMKPDW/eUGo8k7dTSMFaPkGZtFURUlmqpJ2lzXMLMA8S7QBQbJ0m19ksML4bfR1FNMe2ZBLNuzBrgNRyAPHVN22pX1Wz8vZ5Jic2Qgc2jOfvz7lqWTbqzS2ykNfWNp6jcEb2uBIy0AZ04A6LyvaTlSSjZ7HsyKdu6Jm7c0VM4RXiirLVN0mjLmO8nDiuXlrmbUekKgqLbl0VKAZJQMDdaSfxx71r7abYWSayVFHTzx10kzC1rWDIaeueWFqei2wS0lli9agDHvcZpMtw7B9lp8ca45ZXHo8S3eI01R3avI1Hw007NW5WqOqoX0tfBvwTtwQfz5FcLc9lb5ZrXWPs99qzRwsMnq4Lg7HPBBxwydMcF61XQmohLW8QcgdVlwyCCTJGQdHA8wvQclkXvI4Y43Be4zjfRbJTPsTt2Rz6gyEy7zsnP+cFZ3pdpy0WyujBDmPfHvfBw+4qrXUz9h9syxjnMtdd34ncmDP8A6SceRWtt5cRVWujpGtJkmqWAtxnODk/d814+yWPUr4s9ZSjm0zkvJc/fxMqHai70lPBV3S1h9FP7FVTjun35Iz4HBXS0FdTXGnFRSyiSM9OIPQjkVa9FUEc+ydypaqJk1G6ulaI3jLS3DcjCxdpNhbhs5O+8bKvknphrLSHvPY3y+u35jxXuw1DTqR4OTSpq4GuQmnABJ0A4rmG7c0rqNjhSSmrdoYge6D+9092Vo2vZTaja0CW5PNrtztQwtIc4eDOJ83LplmhFXZyxwTk6orXPauCCQU9viNfUuO61rMluemmpPgFXqdmr7cIDX7U1ZttExvadgPb3fBg0H8WvgvUNn9l7Ls1Figpw6oxh1RJ3pD7+Q8BhYG3NTD9NWumuzZGWcntZ5QzeEjwe6x2NQ0aE+a45Z3klS6O/Hp441b7Od2N2apo3/S7qbsd//VYnnecxn2nHm4/JQ+k6Zwp7bQj2Zpy5wA4hoA/9S9Sgbbq+IVNMYKiN/B8RyD8F5h6WfVqbaWzMJLI2xOkdk5xl2PwWcZ7nR0NVHg5SqimoKhlxZEdwDdlbnG81WfX6eFwjttIJ6idoeQwYA8XH8FXdILtWB8+8yma0uhjP18HGSnVtBBbaWOSlcW1Mb99p4l/UeSZdNDLLe/8AIxaqeKOxf4Hm3VtW8SXB3aY1EQOGN93NJ6rV1tfFaLdD2tXMd0NbwYOp6aa+CtG7sqKGN9M0uqZTuNiAyQ7hw5+HVeoej7ZBmzdE6pqsSXSqGZ3nXsxx3AfvPM+QWsnHDGoIx97LK5OyTZLY6DZ23Np43NMz8Onlx3pHfgByC6JlJG3jl3mVUuN9tNrcW1txp4HDixzxvfAarHm9IViad2mNVWO5djCcfE4XOt8ujVuKH7aVDeyp7PTgNnrXYcQPZjHE/wCehV1lnYy2tpGsY6Ls9wxPbkFvQ9Vj7PR1N6v1VfaunkhiGI6aOUYIaP8APzK6qaeOCJ0srsNaMlaSk4pRRWMbbkzx/arYyq2eqXXnZ4yNbH3pafiYxzwPrN6jl91rZ3aGnvMQIAjqWD9JF+I6hekupZK9vazPdFkZjY3THmV5dtzsnPYKj/SCzEsax2aiID+rJ+sB9k8xy+7bHl29GGbCpr4m5JUSF2u9ug8lBUPqHnEYfhTbO3SC/wBrE8DGiVvdljzqx35dCrLGugc9jxg4XS3atHFGNSpowZnVAOSXe9X4K57o2RtaXvA1KiuHE+S3LbaoJaBk7jhxHJQnS7LSim0qMzt6r9R/5kLa+jKf7bkJufqNkf8Aj9TYSJyRYlxpCTCcUYUkDcIwnowgI8JCE8hJhSQNwk3U/CMIBmEuEuEYQDXN32lvVVcK6Aq8jHGR2Gkq0WUkiHCXCeY3ji0/BJhXKDcIITsJcIBmEYTsJcIBuEsce+8NGhJwlwlHFAOfDTseWuq2AjQ6JWw0rv8Ax0YHko6+APjimA77sh3jhS223xVjsOaWgDJ11WbdRtsulbpId6vR8rjH/KUGlpeVcw/wlTVtsp6UNLA4g6alVRAzofioi9ytP+CZLa6aX1HGnpuVYw/wo9Wi5VTPgk7Fg5JsDA6oY3HdLsEK/PqU/YSaHsi0bwcHDII5qMqadznyuLjwOB4BREKV1yVfYiq3GoZS0xleCRvBunUlWc4KrXKGOpopWSNy0De441HBWIMS6mmrOy7KqA3N7O9E7XKLVJHQ0roZKky94uGGO0HTVZTYSKeVxke5zYg8HexgnKn2eo466Od9S6R244BuHkckVmjqujrKvamllj3GQSDv72T5AKtJf6aWklg3JGufu4PIYOVJWW+1QsqSLe5wilYzIeebc9VTjorXVUdWYaVzHxhhyXEEZOOqrHHUbS4KvNFzrz5HUN3pqSqZO4OeG57oGpyCFYqtpqaaXfFNKBugcRyCpW2z0Dq1nase9uHEtdI4g4aU6pis0UFI99DJiaASAgnXUjPteCsoOUuFbNscJTjUEPuN+p6vshHG9oYHA555OVLado6a3seHxSPLnh3d8iPxVWqttrmpaWelhfG2RricPcM4djqp7VZbYWMM9O6bfqWRDMjs6g6ceCrJVFpkxi3l2pcixbR0wcC6CTTxCzrxWsuL5TETEHy9p3umc40VyansTJ+zNFID2m57TsccdVj3+3x09c6OmL4WCR4I3ycAcBqkS+bBPDW9VZBbKttvfUNk35Q9+Ru8Bx6reaQ9jXjg4ZC5RjXMq4I3nIkLc+IJXXboDQ0YAGgC0OSQgwmPGqee6kLghBXqp4aamknnOI42lzvJYewOxlJfqmtvFzp2xW6PeDIRkNLjry5NHzKS9yTXi8U1hoe898g3+m9x18GjUr0C4Np7RbKex0ekcTB2h5nnr4k6lYTXiTUEbeItPieWX36GBZtlbPHcA63WmMSg7zTI4v3R17x0XRi6VVNmERxR7hwW7vA/Faez1D6rR9q9uJZe8fAcguWuLXQ1UuKhsrnOLnOYTjJPBXxrHkm4JcI8/UZNRhwwySk7l/Bpm8Vf93/KqlRcMOMk3ZNzxPshY00tU9rt2YgNGTrhYtTvOdvOcXE9TldsdHjfkjkx67UN2ps3toaWDbSwVFDT7praT9LAep6DwPDzwvOrfcnytNVcJu/boezijIw4k6ZPjwC66z1z7bcIqlurQcPHVp4rP9INohsu0tFtHDTMnoKqVssjPql41P8AMNfPK8/V6dYpqSX6Hv6HUyywcJPnzPQ9i7a+0bKUFJNn1mbMsoPEOed4/AYHuXQtO6ct0WZaK6O5xMrGSNex7AYsc2nXK0l5cuGeqkcperBBRbSU+0VvY2CqOWyNa0bkrscSORPULp6St9fpY6hugePZ+yeYVe9R9pbpccWYePcltsTY4TI3TtcPc3o7GvxVm04EJUySuqfVqcvABeSGsHUlUtpK+loaNkFRTCvqajuQ0jRl0rvwHUrIrK+S87e0FnpnvbT0DTU1TmHRx5NPhw+Kl22imoKqj2no2l0tA/cnaPrwuOD9/wA1Kik1ZDk+aJtjNlfoPt62pLW1tUO/DCSIoRnO6BzPj8PHjfSrTx1G29pilAfG+kILTz7z16pT1ENXTRVMDw+KVgexw5grzH0pjc2ysMv2oXM/8x/NWg3LJbKyVQ4MC4w9rPDDC1rHRN394D2RwA/z0TY2RU8L55jvPGcvdqeOgCnpT2plnx/WPIH7o0CsbNWR21F+FIc+oUzu0qXDmM+z5nh8Su1y2q2cqVujf9F2ygMp2lroWtdISaSPGg6yfgPeei9IOqaxrI2NjY0MY0BrWgYAA4AKrd7tR2elNRWTBg+q0aueegHNefJubOtJRRxe3NnZa7zDtK2lbU0jyGV0RYDjkJB8h546rrrdBb30sU1HDD2T2hzXNaNQVwW0G0gu74o7xWNtFrkOWwkkyTAHicDOPl9676yCi+iqb6MeySj3B2TozkELSdqKTfJEO20XBgcFQqR61cYqc6xwjtZB1PIK8qVuG/PVzH60u6PILNcWy7L2VWradk0bt9jXtILXtcMhwPIqyhRGVOw1aPFrtRVHo82oZV0rHyWqrzhv7PNn7zeIPT3rp3V9PWgVMMhMcjQWnHELptpbJT3y11FsqNGvGY341jcPZcPL7sryKy11RYK2oslyjIkikIaM+y7mB4HiP+678Ul0+jhzQf5l2jrKljJRgPI9y06K7tpqRtOWk45rmXXlh/snfFDbvEXYcxzR1XVSOPdK7Ot+mYfH4IXMfSFN+sCFG1E75Ho6EIAJOBqVzmoiRPMb/slMII4oBUIQgBNTkKSBuEJyRAJhCVCAAlykQgFymPY1/Ea9U5CAqvaWOwU1WZm7zdOIUbYXHjotFLgycXfBEhT9iPtfJNdER4qbRG1kYSpcIwhA+qkZHSwF7gBlymstXEah4aSe508VQu/+q0vm/wDBSWPDXHXVzdPiocE8Tf32ZeNKOVRX3wX7pPH27ck6N6KoJWOOGnKLid6o48GhVCmOC2oyy6qamy/vxtALtANSVXo6mF9XE1kgJLtAqErHGJ7t/Bb15qK1j/6jTZ/WBbLCtrdlYaqUpJUaso/SP/eKYoLx2gp5XRvLS12SfDKxPWandGJ3LNLg6zoS3KgqmkU8v7h+5VbQ+eQSPkkLgNACrFS4mCQE/VP3KSDlmD+jz/8ALj7ip9kxmCp/eb9xUMRzTVP/AC4+4qxsiP6PU/vt+5EXl0zqLm0djX/8zH/gWbbxmG4/ux/4loXWVgNZFnD5Jo5Gjq3cxlUrUwmmuEmO4SxoPU5zhax4wu/h/Y89c6nj4/yx9ubisaf2X/4Ssu7AtobZ/wAi373LaoR/SmADUhwHnulYdznikpKFoeN6KkEbx9lwLsha6bmf38T6L2f0y1RjNjt37j/8ZWlbB+jp/wD9hF9xVKnidFZrcx4w7snOx4FxIV+gc2OmZK44ZFWxPefstwdVzZ/6v1f8meH/AO393/Bk1rf6W3/mP/Uqu02lfN/xZFcqB2tdCyMbzn1ALQOfeVTajBrZXAjBllwVRdnp+2u8f7mC/wD2jRDr2f3rrXRjU6+S5N/+1KDH93967aQ4YdArnzsisImkZ3VUu9Uy222erLcmNmWg83cAPiQrrXnGMLD22ZJLs5Ulmcxlkhx0DhlQ+EIpOSRo+i61tpbfV7T1o35ZN5sJPEjPeP8AE7T3LUoQa+7Ric5Msm8/x54+WE3YCohvvo/p6SmkaJ6ZvYyNzwe05GfAjBUc1LV0r/0kMsbmnQ7p+RVNLUlLnlmHtPfGcLVxXJ0m0td6tSinjduyS8ccm8/yXIynKknmkleXyvc93VxyVUdN+wfiF2afB4UaR4+t1MtTl3+XkQVOVat2zwuFG6pfNuE5EYA5jqq0shcNI/mohVXCKF8EUpjif7TQeK65KbjUHTM8Mop+8Zwb3sLoaClh2j2cq7BVHDg3MLj9X7J9zvkVm0lFI5w7jneDWkrorDb5KGWa4VeKaIRkDfOMN4lx6DRYavY8bUj0dFKfjLauDkvRlcp4fW7HVbzJ6N5czXVozhzfc7716RS3BrsNnOD9rkfNeVbGSm6bd3a6waU7u0dnHJ7hu/dlehZXgOKkuT66LdG1WzMbSv7wO8MAZ4rMq7k2kt8hLi0MaXvf0aBk4Vdcv6Qrg6ntLKGHJnrZBGGjiWjGficD3pGCXBMnSs1/RRA+enum0E4/S1s26zPJrf8AucfwrsJoo6iCSCZofHI0se08wdCFUs1ALNaKS2Nx+gha1+ObuLj8SVb3lhOVysQjSOX2Nqn2a41OytZIT2ZMtE9314zqR+PxWF6a2ujdZK1nGOWRmf5SPuK6DbW2zVFNFdKAYuFA7tIyOLgNSFz/AKRa+LaL0fUt1p27piqGOe3nG4gtc34kfJaJ21Mo1ScTm55Hw0UFPTAvnlAjja3iSf8A5+a9b2PsEezdkio9HVD/ANJUPH1nnl5DgPJcJ6K7K+41ztoKzHYUg7OnDuBfjV38I+Z8F0N12hq73Uvtmz7iIgd2atHDyZ+fw6rbI3N7UZY1tVs1L7tPHRzeoW6MVlwOm43Vsf7x/D44VK1bOz1VT9I3uU1NQdQD7LfAD/P4rQ2e2epbRDkN3pTq5ztST4rQrLjR0Yd6xLukML90NJOB5LPco+7D5mlXzI8x2pnYNr741sMLwyCnpWb7A7caW7xxngfFYeys1Xc6GazuuFVR0NL2tTinfumR7nANaTyGhPvUNxvUtZeZ7lNTsijuhEzWtcXFgaN0A6eCj2KraeiZcTUvMTpQxrctJzqSVOsbjpUoL3v8f2K6GKnq3vfuuvv5no/oruVZVUVxoayrkqvUqns4pZTl25jgTzwfvWjsRcn1sVzpp3701HXPjJ5lp1BPzHuXGejXaC12+Suhqqkxz1laeyG44hwOANcYGq19l5/o/wBJV5oXHEdfEJ4/EjB+4u+CoovZybSa3cdHoCMoQsiSOoblodzb9y839Lezvb0se0FI3E9Nhs+7xLM6O/hPyPgvSzgjB4FU5YY5opaadgkje0se08HNIwR8F0Y3aoxmvM8ct1WyuomTBo3/AGXgcnBSOYx2jm4KzbrSVWxd/qKOSJ8lK85icdO0ZycD1AOCtSmqKavh7SB4cOY5tPiOS9HHNTXxPNyY3B8dEfqzftIU3YnxQr0ZWertaXHA+KnYwMGnxSgADAGEq4W7OpIEFodxGUqRVJIZIsat1HRRK2oZo+9lo4rRS9SjRChSCF56BBheOhVrRFMYhBBGhGEikgEiVBQCIykSFSQLlGU1GUA8ITQUoKAVNjmp3gn1mBuHFh3pANRxGqeFxT5GMqqpr3taRPJo44+slWF8TsnGB3Cpps/8ZqTcjP8A4mm/6zfzXHdtCP7WP+YJDUQfrY/5gpqXqKizsKmGnqIGxSVUDHMJLSJWnj11VVtG1gwy404H7w/Ncz28P62P+YJO2h/WR/zBWTmlVmcsOOTto6k05P8A9wp/i380hpT/APkKf4t/NcyJof1kf8wSGaL9Yz+YKd0vX6FPw2L0+p0b7b2ntXGA/wAQ/NSUdBFSziZ1TFKWata1wGvxXL9pF9tnxCUSR/bZ8Qpc5tVZK0+KLtI6qtop6illa0xbzxoO1b+ayfoOvAADIif+Oz81mb8Z+sz4hG9H9pnxCqnI12x+/wDB0VttVZDE8StiaSdB2rT+KLlQXE0UjaSON0pwB+lZw58T0XPbzOrfiEbzOrfiFFy+/wDI2w+/8CnZ2+NY4CkG65u64CePUfFLSbPX6ka4U0JiDiC4dtGfxTct6tR3fBPe9fv5lvd9Pv5F98O0rIGxVNPBO0ez2vZuI8Ac8FBKNpXhrGxtijb7McfZtaPHGeKqva0t0wocDwUqyrUbui16rtEXBwLwRqCHsUksN6lkEstro5ZRxkfGwlx6nXBKpYHgk0Vk5Lplovb+XgsyRbSSyGSUuc4+MeB4BPp/9JKd+/GwkEYc124WuHQjmqWiVRzVFVw7NBku0MW96vRU9O9wx2kcbA4eRJOFnzWu8zY7eJzwM41Zz96XjySYULgvObm7k7KRs9+M0craJ29FjcJLNMHTmuwjhqXU7O2jAlLRvgEYBxqucR8VNszaTOhFJPjSIn3hI+hlkY5kkG81wIIJGCOi5858UmvilsjYjNOzm02y1yfX7LPkdG72ogQTj7JadHjpzV+P0uXy3OEV5sDN8aHG/CT7iCE/LuGqhqqdtTHuvzkcCdcLCWFSdnTHO0qfJoR+mi3Sf11lqG/uysf94ClHpb2af/WWusH/APKM/iuUmtoacSU0bh13AVAbfR86WH+QKFga6YeWMu0de70rbL8rXV/9CP8A9yif6W7EwfobPVE+Ijb+JXKfR1F/ukP8ieygpG6tpYR/AFbwpepXdj/4mzUel+STuUVjG8eHaTl3yaFzu1W0O1l4oN+4wTUtvcfYjhMbCf2s6n36LRZGyP2Ghv7owncc5JOeOeaeD8SVlS6Rb2EvmzdHQMo4pnUtQ870rqnA7R3g7hjoNF27SHsD2EPYeDmnIPvXllXY6KpJcGGFx5x6D4cFVislxpCRRXR8TTya5zPuKzeKSOqOpjXJ6xU1MFKwyVEzIWD60jg0fNclaTHtZ6TaUwvE1Db29pvDVrt3XPveR8FyFVZSyGSqr658pY0nmSTyGT4r0P0K2sUdkr7y9vfqH9lGf2Wccebj8lTInBcllkWR0juZH78r3dXFJlRsPVOXGdI7ORjqvM9raGtt1fLYbcY3099e1wjd/ZPa4ZcOg6nwPRekuyBkLzK5UtXtR6RqykjkdFTUsXYzSt4siA7wB5FxJHvK0xumUmuDWhL73BDs5YS+Kx0Y7Karboapw9oN8Ccknn8Au2tFrprVTMhp42tDRjT/AD81WoKZtppYmU8cTKUANDGjVo5arUa4O1BypnJ1S6EYpEgKy5qqKnutW6XewKYAENJ6nktHKo0vevVbnUdlGFWL7DR5n6MZohtHSPe7SK1u4jOpeF6m6uoiO9LGB4t/7LNsOydn2eqZ6m3QSMknG6S+Qu3W5zutzwGVtEA8dVbJNTlZXHBxVHEbaVEEzbdHBh7n3OHG63kCSsbaeZ1p21sN5cd2Nz+xkPhnB+Tz8F1l3wZ4cEN/TZXDVTaj0hbSx2igO7baN2/NVYz4FwPjwaOfFbcKJD7Z6HWXmpmqHUtqi7Td0dMW5A8gnww3XcG9NJvcSXvA+S1KWmhoqdlNTgiONoaC45LscyeZ8U8gEYIysd6XCRfb6kNG2pYwipka88scfeop52io06YJRVU4DC+LII4gHiFWB7RniFfHV7iJK1Ql5s9vv9A6jr4RLGdWkaOYerTyK8a2n2Wuux1aJ43ukpXHEdSwaH9l45Hw4HkvaYZS07pU88MFZTvp6iJk0Ugw9jxkOHktuuUc7XkzwUbUzgAGljJ5neIQvSJPRVs+57nNmrWNJJDRIMNHTghX8WfqZ+Fj9Ds4S5wJJypUIVH2ZLoEiEKCQQhCkAlQhAI5ocMEKohCtEpIEhQhaFRCkQhSQIkQhCAShCEJHAqOSjpZnl8tNDI4/WcwEoQoYOP2/paemND6vBHFvF+9uNAzw6Lly0Y4IQtF0BhA6IwOiEKQBaOiA0dEIQAWjok3R0QhAGAlwEIQBgIwEIQAQExyEIBvvKMnqfihCAXJ6n4oyep+KEIBN532j8UbzvtO+KEIQG+77bvikL3/AG3fEoQhInaP+2/+Ypwlk/WP/mKEIAMsn6x/8xSGaX9a/wDmKEKSAE0v61/8xSiaX9a/+YoQhIhqJv10n8xTHPedS93xQhQBokk+274pwkk+274oQpIHdrJ+sd8UnbS/rHfFCEAdvN+sd8Upnm/Wu+KEICheJpXUwa6RxBcMglerbGVctPsbb4IwwMEbNN37RJPzQhcefs7dP0dG3UhPQhcJ3ijUgeK4v0WAT3famaUbz3VYaSeY3noQrR6ZSXaOqgBfW+ruJMUZJa3PTgtJCEn2SgVGi/2zXfuRoQkemGaBSFCFQk869KNRLT2BpheWGSbs3Ecd0g5C6H0X0NNR7DUc0EQZJVAyzO5vdvEfIABCF05Pyox/qOmQhC5zYQrMqGdhUd3gdQhC0x9lWI8ZAcNFLTOc87oODjKELpT4MpLkk7QoQhWMz//Z"
    }
  },
  "sleepy": {
    "square": {
      "width": 440,
      "height": 440,
      "safeY": 0.68,
      "light": [
        [
          0.08,
          0.081,
          0.08,
          0.081,
          0.082,
          0.083,
          0.081,
          0.078
        ],
        [
          0.077,
          0.078,
          0.079,
          0.078,
          0.077,
          0.078,
          0.077,
          0.076
        ],
        [
          0.075,
          0.073,
          0.075,
          0.073,
          0.072,
          0.073,
          0.073,
          0.071
        ],
        [
          0.069,
          0.068,
          0.069,
          0.068,
          0.068,
          0.068,
          0.069,
          0.085
        ],
        [
          0.066,
          0.066,
          0.066,
          0.066,
          0.066,
          0.096,
          0.112,
          0.111
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
          0.286
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
          0.272
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
          0.751,
          0.743,
          0.726,
          0.728,
          0.736,
          0.751,
          0.748,
          0.761
        ],
        [
          0.743,
          0.733,
          0.742,
          0.745,
          0.743,
          0.759,
          0.76,
          0.741
        ],
        [
          0.73,
          0.717,
          0.718,
          0.723,
          0.731,
          0.741,
          0.762,
          0.74
        ],
        [
          0.694,
          0.687,
          0.723,
          0.741,
          0.743,
          0.737,
          0.735,
          0.691
        ],
        [
          0.301,
          0.658,
          0.702,
          0.697,
          0.723,
          0.576,
          0.309,
          0.154
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
      "jpeg": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsHCAkIBwsJCQkMCwsNEBoREA8PECAXGBMaJiIoKCYiJSQqMD0zKi05LiQlNUg1OT9BREVEKTNLUEpCTz1DREH/2wBDAQsMDBAOEB8RER9BLCUsQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUH/wAARCAG4AbgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAECAwQFBgf/xABUEAABAwIEAwUFBAUGCgcJAQABAAIDBBEFEiExBkFRE2FxgZEUIjJSoUKxwdEHFSNi8BYzcoKS4SRDU1Vzg5OUsvElREVUY4TSFyY0NXSipLPiwv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EAC4RAQEAAgICAgEEAgAFBQAAAAABAhEDIRIxQVETBCIyYRRxIzNCUvCBobHB0f/aAAwDAQACEQMRAD8A9I5KJT5IXz3tCOSQClzQJJNIIBO6SSCSEkwgCoplFkAjkhLZFIpWN1I6oGiCsg32KRB6FW3CFdmlGU22KLHoVcUldppAaJgi+6C0nkkI3dERYHDqFMOb8w9VQY3Dklld0TUNsnM35h6ouOoWONFLO0HdTRtddNVdozr9FISsP2vomhJCA9tt0i4dVFNBSBCN0AmFEgphAc0whHNA01E7Jog5IQhAikmUjsigc0IRdQCEIQMIKSaAGyEBMIIppHdNFARzTQiBCEKiKEkIGjmluiyBpIT2CBBBQi6Bc07oskimd07pFCIEFJNFASIQE90EQmUDdB5KBFIabp80EXQAUwoAaKSAcbqNiRopWQ02V2ivI7ooGN19leSjvV2aY5jf0Q1rgdQrzqo5Srs0Q0CdwnkPcl2Z7k6Qw9o5piRt91WYz3JBpCairs7eqeYHYqkpteB1U0bW3ATVXaA8ipCVvQqaosAQoiQdCnnHeiGknulZFCLJgIQRSKkUlFJATSQNCE90CTBSQoBMBIJ3VAUIuhECEDmhBHdOyQTVCTQhAWuglMKJQCLXSumCgeySN0WRQhCECT3QUBEFrICN0IpW1QSmUiFAkwiyNkBsi6CEkEiUroRZAJ8kBCAGiNkWTIQIJkpWshUIpZSUymCpsQMZ7lExOHMK5Im61uppUIndQnkI6KzZGW53TZpXsnnHepGPvS7H976J0hiVvQp9oOhUOz70FtuadCwSDvTzAqm9kCTuTSrjqko9ppso9r+79VLBYhRD9NkwbqKaAhAQNJNJArppJhQCBugJjdVANEIQgQ2STOyAqAboJTCTkBeyCEDVCCJCAmUkUX1TBS70rlBJCOSEAhAQd0AEISugZQkmgSYF0kXUDISITJSVAUwhAUDKSE0Ago5IRCReydlFyKN0bI5oQMG6SdkBAJoCDsiC6d0kICyC0JoVEDGD1R2TRzKkmU2IZB3qDmAdVcAEOY0jZNii9k85HRWZG9EixvRNhB57ks57kEAJO0RUs57kwVUSUZ3dU0L7aoCqzutujO7qpoWhB0UA49VIG6CQQgbIRCQkCnzVAEBCBugEk7gJEaIA7IRbRK6KDsiyEwgjqpIKFAFCE1QihCCboBCLIsoBBQhAckCyCkgkhJPkqgSCai3QaqKfNGqYIQSFQkFNJQI7oG6eyQ3QS0QdlFSQIJpJqoEJqNkD5JhIBNA0IuhAI5JpII80FB3RuopEdyCB0CaFAsrbbBBa3oPRM7JIFYdEi3oPopKQKuxUQehS9/vVyDqNE2KQXdShWAFCu0Cd0kiUDugIQikVK6iUXQSULahMOKCFADdNIIVAi6RNkKCV7ICV7o2QPdKyAUXQSQgIVQkwhLZQMjRKyLp2QKyL20TSKACV0wlzRTCdkAIQImyL3TtdIiyBFHJA1CNkDsmkhUCaW6FEO6LosiyBhMJIVAmhCBpFNBCqIkJbKRUSsrAkU7pbqKEWRsgKKLIumRZJVDReySEDCEXshBHM35h6pgt6hY+Q35KTRYrekX3HckoZgEu1a0agpoWqJURM08igStPIqKYTCjmCYKgDuhBCLIApckyLFCATKAgoEEwldF0EroUSUwbIJckkEoCAQjmlsgCmNklIIEmUFCISAndJFS0SKjfVO6AKSLphAITQN1QkxuiyDugCg9ySYRBqhPmhAJpIBQMJpA2TVQlEqdknDRSqgEFBOiCbrKkmEgnZRQUIKAqAJoQiBCEIIWF08jeiCNU+SojlHRIxtPJSKFdivI0bBIgDZXXRfVXaaUElLO4c1kXSKbNKQ93VSDj1U3C6jlKdBgkjVNupVTmutsoFjuimlZPNB3WOGkHZT2TRtZZMgAaKAcOqA9vVTQlYWTKWYdU8w6oAbJXTuEIHyS3RzTsUBySBKaNkAhRdqpN0QAQEEJhBFCkkQgiFIbJBSBshSTST5IhpFARzVAhJNQNASRsqGjmhCAT5IRuqGEHUICERAi6SblFYagUgojQqQRQkndIogumFFMIpoQShERKAgd6YVCOqLJ6IQRvZMIshA7JcihCBckXTOySBIsnZBRSyDvR2Y6lNK+ibQsg70dmB1TKAU2aK1kHRNP3Srs0rzFPOR0TIF9Anl7gm4naLZDvYKYkPcoFp5BKzk6VYHEp3uVTZ/f6oAf1Pqmja5BVQzdT6qV7blTRtZfRPkVXnFt1LtG9U0GEEozN5FIuCBqJcVIJW1QCAU0IGhRugIJDVIlCdkANkt0IQO6aimCqiSAo3TCCSEAhJEJw0UFZ4qsiylagsmErouoplCEkAExukFIIEhNCIiE0WQdlQISvdG6AJshAKaoSBzTSsoAIKd0II3SKk7VLkgRKOSCEcrKKCho1QgaIA7pgJ7oQKyCbJ80iLoBxUQkBZSAQCALoSKB5QmWA9VFSGyuzSOQd6RaFYEEJtNK72US8jorgbJ3V2mlImdbYJiQnorN0i0lOjsBxKd1DIe5RLCeidC0J2VIYR0StYppdsgBCpzBPtW9CmkWFCgJB0Kecd6KkhRundQSAQlugDW6CYQSkiyIfJJ40QkggmEHRCjQvqlfVIoCgkDdPmohMKhoSQgkkgIKqFZCZ2UUDTUVIaoBCNkIDkhCCgRUVM7KKAKQ70IKimEFATQAQmEWVQtUlI6JEXQIgIT2S3UUghMhCAsEITARAFIgKKZN0CQe5B0CAgEXKL6oQLVHJO6BqiknkadwhK6AyM6fVLs29E01dppHI3kEFttgpDdO6bNKxe2xR7w6qYKdrpsQDnfwEZj1Ug3vSLNd1ek7MPHzBSL2/MPVVGK/2vojs7a3+idC8FvUeqPd7lQBYpiS3JXSJP30SCRkuNlESW5fVYsbidkWUe07k81xsoDVO6Q1TtoimEIAQiGHB2rdkXWLh03axOaXguve3csrRU1oFRUkrIDdNLZPRECLhVTSdmNHAFYjqmUW9/6BNrJtsEFYcFUS60kg87BZbSHNBBBHUJs1o90uaYASIVQijkjVBUUwixQE0QindACAOqoEIKCgRSUlEqKaDsgnohECE0KhJpIN1FPdCBshELbdCZSRQg9yEckAkmEckBZCYSQJNFkIBF0c0IAFGt0C6aIAnokmFQe70CeVvyj0SspIiJYPlCrewg7K66i7bVCMYsfy+9LLJ3+quQpttVaTv9U7uAsSfVWBLKCU2mkM9t3FCn2bTyQmxpBE+J2aF5afFZUWKSx6VEWb95q2L4opL52NN+dtVTJQxuvlLm924WdWN7l9nDX003wyhp3s7QrJutZJhZdf4D4GyrLK2l+CR4F72dqFdpqfDcJLWRYq9pDaiH+s38lnw1EM383K1x6bH0V2zZYcsTZW2O/Ja+WB8Z95ui2iCbixFwmiXTSuarIaySnblydo3pexHgs+WkjkBLPdPTksGanfGfeaR38is6sbllZ9LUx1DMzHC/RXFaJ0dnZgS1w2IWVS4iW/s6nYDR419VZUuP02SRCbSHNBBBB2IRZVguSYCYTCAsi1ysCvmZnLQDcbrEjmax+Yg+SbWYtyeiScZD4mube3egogsonVO100EQE0KQHVAikApXQqFZCEKASRqixQBKVlKySAshGqEAhCEAkmiyKSLKVkWsibJFimS0cwlnHegdkWUc/QIzO8EXSaLgcwq/eO5KMqbNJl7eqiZOgSyp2TZqFnKVyVKyLKCNijKp6I0Q2jlTy9yeiC4dyAylCiZB1CEFQLrjJODbk4fwU+0lYPfiuOrfyXnFNjFdRPa0SSsy6hjybW8DcLc0XF0lwyaMF3IsNtPqCfRc5yfZuV17Z4z9qx79FatFBjdPWENE4DzoGyNAPr/es1j3sPwub4bei3MpfTXizHwxvvmY037tViyYZE43jJYRtfUK5lR8zb+Cva9jho63ir1U7jCEtZTWa9jZY22FwLWCyaepjqDlF2v+V1rnw6qy4+YeqqlpIpd2W8EOqvsgi4sRcLDb7RSi385H0J28D+ayYZ45hdpIPNp0I8lUsUT0Yd70eh+XqsCeA/A8ZSt1ZRkiZK2z23A2UsJlppKOtfSS5HOLozoR0W8aQ4BzdQVp8Ronsu5ou3kbfQq3BJy4OgLXe6Lg6pPprKbm42aYQhVhq60ft3C97deSxJbBhKzsSaRODyI0/jzWuqLlthuSsV1x9N3QEmkjJJ1HP+OqvVdI0MpYhr8IOvfqrVtypJHQXOgCb3NjaXONgFp6utllc4NJEfIAJbpZNtl7ZTB2QPzO/olX8uqwMLpnMZ20hF3atbYeqzrpKlh6JITAG6qI/RMBBICjmJUVK4CWZRQgd0ITDUCQAmXNbzuVEy9AipZUGw3Kru47lFk2aTL2pdoeQSt3J2U2FmceaVu9S0RdAgEWRmRdFOyNFG6Lps0ldF1AlLMps0nmRdQz9xWJPilDBK6Katp45Wi5jdKA/wBL35hDTOukXLSVPE2HQQCW873E+7GYjG4jqO0yi3mtfU8a0zAPZ6YyEbiV+TrtYOB5c07rXjXVF6WcriZ+N6kzZqenhbFbSORpcb/0g4f8KwZeLMWdK6RlSYw4/wA3lYWNHQe7f6rXjV8K9E36JWH8BeXfrnEG/DXVDb73ne6/9olYImbESWvEd98vu39FfGr4PU48XwuQkR4jSPI3DZ2n8ULyh9VHe7n5iee6Ffx08Z9nBWvaLAlzL3LdxfqRzVjpy8DK1hPO2hP1t6W8F3OIYBTTZ3RDsHuN3ZWgsef3mHQ+Oh71zFVgboHCOZwpSb5Xv1p3f192OPIHTXdctSuFwsa9lVLGbBxFt2lbfCuIZqQhjZCxv+Tfq3y6b8rKj9WVlLI72edzayO57H4X2391wuHfj3opsVocTywYsw0817e0sH3tsufjvuJNx1+H4/TVdmTjsJDbc3adtjy35+q29iNNVw1bhFTh0bZ2zNqaZ+jZWi1u4jkVsMDxt0BENQ9z4jYa6lnh3dykz1dZOsv26oOIQ6eZgu3KfEKIIc0OaQWkXBGxTXXbWgyuc42e1o8lJ8TZP2sRLXjpuFW4BwUOxubh1j4JtNM6nmzjK74x9Vcte27CCDqOayhU7e79VqVnLH6WuaHAtdqDoVq3xew1jZRfLex7wtq1wfrsqa2IPj1HcfBW/bON70u0IuDcHmEBUUTnOpwHalpy362WQiXpg4q0dkyTW7XW9VqJPeqY2na7R9V0NTEJqd7CbAi/otThEAkqjIT8DQbdVmzt0xvTc2A0AsBoAEwkh7sjHOuBYX1W3NrMSnL5OzGzD9VRRwGpnsQezbq49e5VSvytLytrh8HYUzcws93vO8Vj3XW9RklU1NQynZmdqeQRUzCCPPa5JsB1Wpcx9RMBclzzrbolrOOO2xpJqipAke1jY+QsblZRddUxsZFGGMFmj6p5rqppMlCiCpAIBSDUxYC6rc/NoNlfSe0i9rdtSoFznblIBNTa6FkwErouopouo3SJTZpO6V1G6E2ujzJXSJSuSoaSvZLMtbiON4dh0nY1FQDPa4hjBfIegyja/K9locQ4rqw/K1kdDEdLG0lR3G3wN05G6uq1Jv066WZkMbpZXtjjYLuc42DR1JWul4hw5od2Mzqotbm/wdhkae7OPdB8SFwddi76p5c5rpzfMH1Lu0serW/A3yCwpqmaa3ayOcBs2+jfAbBamFa8Z8u1qeMY2PtFTsyWGsk13X56MDh/9wWpn4urnPa5kzhZti2OJrG36+9nP1C5l0jWi5Kpkq2tF+XU6Lc4z9sbeqxWpqWhkji+MG+SZzphfrZ5Iv4LGNXPkLO3eGH7IdZvpspUWA43iBBjpHwxkgdpMOzABF766kd4BWwk4Uo6ERvxfGmRe7mfFG33z/RJNz/ZV1jDz+mkdURj7QKi2oMsgihjdJI42a1ouXeAW8jquHaR4FBg7q8t/ZPlqX2Y7nf3rtBPeG81lQ49jWIw9lg9EyGLKOx7GK4jtuxznWYDbu5gK7/pnyrUwYJjtVH2kWGyNbmykSkRn0cQbLLfwrU087GYhi9BSMeDlOfU+AcBflzWRV4NilRnOM422KORjXmLMX+9p/ixYehP4qn2LAKK5lFRVuy5SHv7NpGl3Ny+9y2N+9Zuc+11lWM+j4apqeQVOL1dXMx1rU7Mlx3ZgQfG6yKaLCpY6U4fwxX17HEDt5HuaCb7ktu3e99hopQ45HAQ3DaGGOUAMEkMPvEfK5xueXNUVGLYhOHioqBCyS5c18mYj+qNFLnUup7rZ07cTgrgTg2BYeWDNDJMW5rbbtcTfvsOaFzM1cwWLqmWR1veDfdaULPdY/JhHVcHY7NUTDDap7XtyfsXmwIsLZe/TzXR1lNHNE+KVgfG8ZXNOxC83wqd2HYjBWPaXNikDi0HW3NemMljqqdk8Lw+ORoc1w5hc6vFluarja6CairIKHPJIWt/wJ55i/8ANHlccnctL925o4cO4iw3tX00TqkANdI5gDjpob26LG4waYqSmrBoaeoa4uG4ad9VDAqmnwzGKynnqIoo3uLo2h4yWJu3bbT0T+01rLXw1M8mJ8NYp7HJMZqe2ZsL3l8cjO8H8ls62ng7CnxSibamqDYsP+Lfzb3jQ+iwuL8UpcXmom0L3y9m5wJykDW1rErOgZ+q+F56SscyKoqJg5kecF1hl3ttss5yWdsTq6npveHKjtaN0RteI6eBW1XJ8OVcEFWHSyBocwtudrkjddYVnju8XaBJNIroo5p8rKJcOo9VNvvGw1KCAfIw/G6w71kxSiZjmak25qkwyuJtGfNW00D43EuAGnVam2MtJ01gX2G9ir1jUz2mVzQdQ29vNZKs9MZeyk/mn/0StfhAAdPYD7P3LPkIETyTb3StfhEjO0mbmGY5SB10VvuLP41sQqa92SjlNr6W9VcFj4l/8E8czYD1T4ZntpoWmatih3AN3A7ELf7Cy0dE0txSNx2cCB42W8KzHTP21lfJnqcoOjBbz5ow5pMssp2HujRV1QLKuXNpc3HgsjDWuFKSR8TyR4KfLXrFkE30QOadjfZFja1lWQ07DXVXDZVMaQ66uCsZqEp+yobIcbuJQosO6AlZPkgRSumVEhFhXTCVimopnRRJum5RG6Bjdcti3E0tRVy0GDvawRfz1cbObHbcAHQ+Pj4reY3WxYdhFVUzS9kBG4NcDrmIs0DvuvPaSOSj4deZh2c1S4EH7TxzurPTWE3e1PtMdI10WHgszXD5j8cnf+75LEQkQu8kjdpOdYXKxZJy7QGwVlSCW9ywpw4xODd10xjllW94c4cq8eLps/s9I02Mzm3Lz0aOfjy79l1UsHD/AAlFE805lqXOvG5wEkxI+0CbBoF+VlucHnpajCKSSiLewMTQ0NFgLCxFuWt1wvGFLVw43UVE7XdlO4djITcWA+G/LwXHyueWqSdbXVON4xi7Z5mVIoaSn1LmOLQDybmHvOceg08FjUVHJjNa9uGwl5aSZ6qss/NcDRwsW33sACdveWPiNRFNg+FRU79IYXiZg0tLcXJHUg7812XBbI28MUbogAXtLn97rkE/QK5ftm4TusNmDYTg7RLXOdiFWW+6JRcGwsLN1AG2ridtDyWPifEFQ7UymFu7WRkgnxO/3DuSxR7n4nVFxuRIWDwGy5rFHu7WY31bcBcZvO6rtqYY7ZLaisrpMlMMoJIuOviroqCBhLpCZ3cwT7o/P+NVZQuipqB5uGHK1jdeu6xp6+AQuDZDfbQGyxnll5XDCenludy7p1layFpaCzLbYbafetHU15lcQyNo78oUcRmDyADp4LGYCdhcnQBenh4cZPKvPllVsMEtU8AXPU8ghbihpHQwMa51jfM4fghc8/1Fl1j6WYfZxzMkHJruYK6LhDHaLD45qSsqHMY+QGLM0ljdNdeWq51sEZeDl8lCVjATyXOabls7d5xhb+T1ZYBwLW2P9YarhGRMsQbAW10Wyr58Xm4eoKadjYqV7mRxuBu+fpccgB+CMWweXC5XuhzTUfKTmzud+a1ZqNZ/uu9MGnheW3JBbqCOoVj45BEJXRgQA9mJMtgSORPXVZeFU0tW7sYGdrIbkNB/FdRhTP1ZSMgcGTAuL5Gke65x38vyXKW21ccNuXhcGAdnYsPmF3/D2arwWmmdIb2LDp0JH4LV4rgNNiNM6WigZSVQGZojGVknc4ba9VueHaaSgwSkpp25ZWsu9t72cSSR9VrDDV2vcul1SG08YdcnfUq2FsUsLH5WuzAHqqMRa4lpsclrJYTFJGyQuBDCRlW/lv4ZrWMb8LGjwC19ZU5KkPaMzWPBNtNt1sVhy0BfIS14DXG9iNlaks+WZFMyaJsjDdrhcJveWsc4C5AuoQxNgibG29mi2qkFWWn7WWCoE0bjfZzTsRdbu6pFPEH58guNlMlJNNW7RqmGaBzG7nl1Wvp6SU1cchYWBhuSRZbEFSumkl10ldQmY2aMxu2PMckEoBRGPTUDIZe0c8vI+HS1llkhR2SRffsPZHJbtGNdbqLqRItYCyjfvSzDqPVENMBRuEwTyaU0JAJSOsMqCXAbD1VZzE6keiUgAUrJBp+b6KWXvPqppdgCyDbqEwwdL+KkGgcgrpNq9EiO4q0rFNTcnK3S5GqxllMfbUlvpNxDWlzrNA3JIACBqA4EEHUEG91o+LavJhsZDAXGZtgfhOh3+/xUuEph+ooXEl2Zz3W5N946DuWfOe3T8d8dt0QkAomdgLQQdSAPEquvqhRUM9U7aGNz/QaLUsvpnVjiOKq4Ynjjqa96TD9COTpTufLZaWrqpa2UPkOjRlaALABbDCMHxHEKPNHFkExL5J5zYOJNzYblbqk4MjbY1FdI48xEwNH1uVMuXDGu0kk05NtO4jYpOp3AbFemUPCmEti9+OWQ880p/BZLuFcFIt7GfKR35rUzyvcYvNxzrt5FLE6xBGi15aWmx5L1nE+DMKdbsnVMJPyyX+8Lna7gN9i6krw4/LMy31H5Kz9TjjdZHWU3GF+jvEzT4hLhch/ZVAMkQ6PG48x9y7iqpYKyB9PUxtlieLOa4b/3rzKagxHh7EaSqqYDH2UzXNe05mOF9RfwvoV6rpu3bcK8llvlizOunkNRTQCnMtyXOJAF/gbc28VZgmPYnh01JTQVTzSiYNMDgC0hzte/mthxxhNLQ4mz2VrmCeN0z2lxLQ7NyHJbbgjhzDKjDqTFponyVTJHkXeclw4gHL3Lt5Tx3WL3ekcRb/0lW907lzWKttJUef3LqcQb/wBJVn+nd+C5rGBZ1QQL6H7l5+O/uerOfsWtc0QtOhOUWV1HhzIKUPDHyPdqdOZ6XRFh0cdO2Z1bndkDuz01NtlsKyup4XshBvM4aRgj7+Sfqs7uY4PBhjr20tVTGQZJLAHla/1WJhdHH2j5B72Q2bdTxGrnllfGGBltCWHMfUKdBeng7b42udleDuLbEJ4544d/Ka3We1l99AhNkrJW5o3Zh3ckLy9tNn/I/Est/bKQO+XK4381qBSwQVpbVye1xxmzmU2gcRyLnfgu34illosHq5WOs8R2BB2ubX+q4qPI2PIBdwFmhei3UXPGS6jdjEcNxLGIZpphBR0UOdrXixL+gbzI026LZ4fieF1shgZI4vf7rWyx5Q8dPNcs6gEcEuchwDbg259UqOL3r3O3oud5JrcamWUruOHeHYsFnqpWPztlNomkaxs3sepv9AFkyYUx02YSkMJ+ED8VmYdK6fDqaWT4nxtJ7zZWm19x6rr7XG69E1jWtAaBYaBTAUQR3nyUgSfslbkS07a3UioXd8v1R73crpEwl5qNjzd9E8vefVA0H0QGDp6oyDoPRULMBzCRcOhPgFKyLd6gjr0Keqdk9EEMp7gmGnqPRSQgWX94pZR4+JUkc0CDB0Cdk0BEACkBogBInkqIu1KRCdkfRZaMBSUMw6hO/cfRVEkJZj8pRd3yjzKqE9wa0uPIXWuiBEbb721WXVF3ZEae97vqqy1eXm+I7cfUUyRMmYWSMa9h3a4XBTYxrGhjGhrRoABYBW5UwxcHTyY8n8/A3q/N6Aq2qpI62kmpZgTHKwsdbexUC0OxFo/ycRPmT/cswBejjmsXPKtPTU2J0EbYZIm1kTAGtliIa+w2zNP4LLjqYr2fmjPSRpatgE999VjLhl7h+T7iqKoYNWyNPmrTVd7VExxneNh8QFhYtJ7BhlVV09CKqWGMvbE0avI5JMM51KxfG9r5ZWm5c9vmVhzVUTfhzSnpG0uK8+o8Z4n4hMklPi9Fh8bDrG0BhaOuxJHfdW5+MqU5qbiemqbfYfKNfJzbKf4/f7snSWybkdZX4dXY1CaWWIUdG4gyF5BleAb2AGjfEraFuQBtrACwXEUn6QcVwyZsHEmFEMdoJ4Ba/fa5a7yIXbUVfRYxRNrKCoZPE7QObyPQjcHuK7Tj8J16Z893twv6Q23xGmNtBSu/41vOAR/7q039OX/jK1v6QIT7RE48qU//ALFtOAhbham/py/8ZXbe8D5a6vaf1jWH/wAd34LWwYbDXyVT6gOcBMWZQ7KLAD81vKuLNV1Tus7/AMFymI1tbSV9XFTTdnGZS4jKDrYc158d5WzF6rqYzbeChpmDK2mZta5JJ+9a6ppXPysbTAAGwLmgud4nmtLLieIPvnqZSP3X2Ww4bkM1TM6V7y4R6ZiVvLHPDG55XblcsJ/GJOjdSWeWtcOg0WNDGKj2iMFzMpzxty7jmtxVQRgve4XsLDoFz9RO01UTGPsQdSDsscedzee52Xsmxuu5zJMjtiQd0LYGjLW52ak7tJQtfklZ6+Y73EaQVtDNSvNhKwtuOR5H1XAU12uLHg9qHZC21yXDQgDmupw7ihk1WyKtjiiiebGZrjZnjfksnhuClb7bj9U6GMVFQ8QyPsMjNtD1P4K63Fysys0w8KwGrrLDEY30tKNSwm0knQfuj6qOI8MVNDIx9HJJVwSOEZu334ydibbjv5LsaV9NVxZ4Jo5m/Mx17K1rCwkXuFJhNaXUKONkUTImD3WNDR4DRSDdU0d66ACdkXuhaiGg+CEi4DmFUBTCiXN5EnwCM37pKaVNBUbu+X1KfvfuogQgB3UeiRaebigaRKRaO/1TDG9AijMOoCMw638FINHQBNEQDr8j6I1+UqzdJBEZug9U7O6j0TTQRsebilbqSfNSKSBZAeSA0dB6KSFFA0TSCluiEgoSLh1Coxqt4jyOc1xaDqQL68lT7ZTD4pMvi0rMe1jwQ4Bw6WuqH0cDtmOHguOfHu7dMcprsm1VK7aoj/tWVrHxO+GVh8HBYr8Ov8J/tBVOwvmYo3eQXP8AHV6vytw/9rPUVHJ7rN8Bt9yz7KikiMUWUty67K9dcZqM5XdNaTiXirDeHIx7U8yVDxdlPH8bh1PQd5W63XmvFGB4xhHEFXxFFT0+IQPcZM0gzGEd4J5bAi63JKz8sh+O8aY23tKGmhwmlO0kls1ut3a+gWFJTY2HZqnjGUydIs7gPSywRxQa6Qe2FzHnYbtWV2geLg3B5hYtzn9PRjx4f7ayowaYTmojxITTE5i90bmknrfVZtO6Z0QFQwNkGhsbg94VpSWt2+25NekZQJYXQvAdG74mHUHyWqw+fE+FcU9swpr5oX6SQG5a8dD+B3C26iVccvFnPCZ+2LjnGzcWNq3DZKSQRdmAHZhfNe+oBXY/o8raOq4chp4qmN1RG+QuiDvfaC4kXG65Z8bJG5ZGNe3o4XWqq8EZ2oqKGV1LMw3aWOIAPcdwt/ss16crhnPXb0SRt5qk7/t3/guMxxn/AEnVWH+NKeC8YVFJMaHHWm7nEiq53PN3Ud481sHw9tjkzg5rg57iCDoRbe682OOXHndvRMpnjJHPUtO2Z8nahxDbAC5G6vopPZcYjbFGDmjItfQrazufS4pUdn8jBqL8isAOknx+AuNyW9LcivVP+JNX1Y58kmOG/lkVdOHftqqpkyg6tBs0+S19bRwuhc+GHKbaP6rZ48DFRg6H3hqOSthhjq6WKQG7SGi3S26582X4pLjOnix3WojlqGMETnkkC4D+ncUKONujjqBDmIykknppsha48Mc8fKxMr26uTh+pbTzS1T42RxxueRE7M51gTbbRaOGGWLsopnPZmaJWAk2IcNCAvQsampKahqYZJ4o5JIHhrHOAc7Q7BU0WG0tZhVIyogiqWMiaATqWm3IjULh49ajtcZb00OA1T6bEIHNNszxG+32gTZd06/Rc5Hw2afGKaeneXUYdne15u5hGoHeCV0hKceNxllEDm7h5pWd8w8gplAC6qjlPNx8kZAdyT5qVkwtIQjb8oTsByCd0aIgQAhAQFk9LJX6pFzR9oeqokko5wdr+iC430a70QNCXvfL6lL3u4KCRKLqNnc3fRPL+85UTCL9VHK3nc+JTsOgQBe0bkIzjvPgEwLDSyEEM19mu80wXfLbxKakoI+93IId81vJSQgiAepQGjv8AVNNQAY35QnYdAhCqEVEhSSUUkJquWVsLC9+w6LNsk3Vk30mkUopGysD26tKlZJ3NxfXtiYpiVLhFDJW1kmSJnTUuPIAcyV5+/wDWfG0/tdfI6jwmNxMcTTvb7z1cfJWVs7uNeI3MDiMIoTpyD+/xdbyaO9ZWKVzZAKenAZTs0a1osDb8FjPKy+OPt34uPf7qx5jh1IwQYdRRNDdO1c25Prv4lYTiXOudSpEqJKmM07UiolMlYr3VVVWMw7DoxLVyC+vwxt+ZxXSTbGV0lU1MNM3NNK1g7ysaPEe3P+C0dXUDrHCSF2eCcGYfQWnrAMQrDq6WYXaD+60/iuiu2Nm4Ywd9gFm54z12zvK/08skr3Qi9TRVlOOskJAV1PUw1DM0MjXjuOy9HbW0ch7NtXA8/KJWn6XWpxjhHDMRJmij9iq92zQDLr3jYp5z5mjd/wBuJr6OOshLHt1Gx5hazCKjF8PrPYaOn9qldfsgWk5RzPh46BbqogrMMq/YcRYBKdY5W/BMOo7+5X0dZLQukfAQ10jcrjbVdPKya9p4zK7nSp/DGKzuNRi+NxU75ALsaST9LBYkvDdVTyCeg4ghdI34e0DmH1NwsqorGRgyzzBt93PdusePFKOV4YyriLjsM1rqY3k9/wD0XHD1f/lhVmM10MRosXpgHOIyzstY28ND5LN4ffPJBMIXh7SQBb7NxurKmCKqhMMzM7Dy7+vitVhlXLw7iRppTmoqg6PP2Ttfy5+q7bnLh42PNnx+F3PTNxCizzOYwOs21yTz8ULbsEXtEsMjxmzZxryP/JC8fJ+oyxy0zMNzbG7EZHakk8ybkroeEjJS4syFhtHMHNe0bGwuD/HVYuMYIcDmi/aump5NpCLEOG4P3ro+GsLdA326oGWWRtmMP2Gnr3lTWXk1G8NgldB1St3Ls0eYX1ISzt5G/gEwOWya0hZujXeid3H7PqUwE1UR98/Kiz/mHkE73TQRynm5yeQc7nzTQqFkb8oTt3WTQUCSTSUDQlcDcozN6hUCYUS4d58kXJ+yfNBIoCXvdPqn73cgZ2Qo2d830RlPUlBJLbmjKOYRlHyhAZ29QjMDsCfJMaIUCuflKPe6D1UkKBe93BGvX6J3QqFY/MUWQhQY4q4TOYTcEG1zsSrZoxLG6M8xbwVNVRsn94e6/ryPiii7dodHM02bs7qvPLn5XDOdX5drMdeWNV4W8jtIXaFpv+a1H6RMXOE8Mzdm7LPVHsIyNxf4iP6t/VdGGNDi4NAcdzbUrz79Ibv1hxdgOEk3jH7V48XfkxduHDwx1fhjPLzy3PlGkpxguAU9C0ZZ5m9rOR38vuHksKWQNBc5wa0bkmwCyMTqu3qppibMBNj0aFh4bQUmIxDFsdqW0mFB37CGR2Tt7faPO3cFzwx33XryymE0xW4k2eQx0VNU1rxv2EZcPVWSuxGJuefBMRjZzd2Wa3ouiZxzwtRsFPTzlsTdAIadwYPotvhXEWD4u7LQYhFLJ8l8r/Q6rpdz/pcfPfy8/OJUxp5ZmPB7NpLmHRw8QV2nBmD/AKswsTztvW1dpZ3HcX1DfAD6rOxTAcLxZzX1lGySRpBEg912h2uNx3FZlZUMpKWapk+CJjpHeAF1i5SzUXve61eN4xUQVDMMwqm9rxKYaN+zED9p35eZWvdwN7c/tuIsWqq+c6mKN+SJncOvkAtnwDGRg7sXqrOq8Qc6Z7uYZewA9PQBbiR5e4uO5WrfCantzk8736cw/wDR/wAMujyigcw/M2Zwd96wpeH8d4cBn4exCWtp26uoKo5rj909fTzXZIWZyZfPbd48fhzMNTh3HGCyRWMFTEfeY746aUbHw+/VcpF2oMkFQ3LUQvMcre8fmt/xXD/J7GaXiekblje8QV7G7PadneP4gLG4vgZBj0NTFYsrYdSNi5ux8wQtzXx6qY271fbU8K4TQV/E09NizHVBZH2lOx59xwvrcc7Dl4r0N2EYY+HsXYdSGO1svYtt9y80mqX4fjOH18TrPY/IT3HT8Su2o8SrGSh0spkbf3mkfcs8tvVdeLi8t6YeM8Msoo3VOH3EDRd0BJOTvaend6LlcWpBWUT2Wu9ozMPeF6ubPbqLtI9QvPMQpxSV08A2jeQPDkmGd2lxlmnN4RHLVYWZI7Z2PyPO5vyv5fchUUtZUYbXV1PTvDGPfc6X2Jt96F7rN96jw6e7VdNT1sQiqIxIwODwD1GytcSVHMOqdz0K8btoWUgErn5fqld3cqiaCogO628k8p5ucVpk0Gw3PqkWN538ygMaNmj0VBmb8wRmB6nyT2T80Ebnk0o97p9VIIUC97qEZXfN9E/JMKhZe8qJaOl1Z5KJQLKBsAiyaaBICChA0FK9tyEZ29QiGhRzDlc+Sdz8p80DQUtegHmj3u5FGilyULH5vQIAvuT6qCaTjbmkWt6eqMo6BAg4dQnf+LIF00UX7iqKv2gMaafe+uyvQVnLHymtrjdXbAbWVLNJacnvAIWeLkC+idyuF404nrp8SHDPD5PtjtKidp/mhzaDy03PLYarPHx5Y73ltc8pfUdBjfFmB4I4x1tczthvDEM7x4gbedl55W8Q0eOcd0+JUXaCGOnLGiUBrswa/lc9Vn0nD+C4Ky8sQxKt3fJLqwO7h+dysDGKltTiGHU4paeIGUvvEwNNgNlqZ45bmMbnFlNZZMbH5pG0jKaJpkmqXiNrGi5f3Dx0HmuzwfgiGGKKu4hLcQry0BsD9YacAaNa3Y29PvWl4NijruN6iolGZuG0/wCyB1tI4gX8Rcr0GeTtJCRsNB4K3Lwx1PaWXPPv1GOyngYzIyCJjPlbG0D0AWnxng/BsXaXPpm01QNWVFOMj2nrpoVu5ZGQxPlleGRsaXOc42DQNyVyo48gkjmrKfB8RnwyF+R9axgyDvt0XLCZ27xazuE6yGA4viOF4s3h3H3iSR4vR1nKcfKe/wD5HkTtOMcx4VxQM+L2Z39613GEVLj/AAmcSoJhI+mHtVNKzcFu47jYbdQtXSv4u4toDUsq6bC6GZha1gZmMo2JOl7HXot+Mus/X2xuz9vt1XDEjZeGsKcz4fZIx6DX63VuM4tR4LQurK6XJGNABq556NHMrnP0f1ctD7TwxXkNqqF5MXSSI63HcL38CqOIsCruJOM4aeqiljwmlhD840a8ncA9SbDuAUuEud8vSzKzCa9tZLx5xFi87o8CwrKwHcRGZ3mfhCyaHibjOiqom4rgktRC9waclOWO16Eaeq7ylpoKOnZT00TIYWCzWMFgFJ72RNzOcGi9kvJj6mKzjy/7u2m43ibPwnibXAWEBdr1BBC8+rKfFoqLBZ6nFDUxzRmSGJ4/mW2Gl+mwXafpBr8uDfqmEE1eJStp42jctBBc7wvYevRZD8BwnE8Ngp5IM3srBDFMNHNygag9Odirjl4YzfyXC55Wz4ea4hPPI6Jj2sADhZzTuV6HTsLnZQLk6Lj34O6HiKnw6pla0MqGjPbQgm4PnovS6KgZTnO4539bWAWeey609PBl4eVrKY3KxregAXA47I1+LVbwdO0I9NF2WMYjHhtG6VxHaO0jb8zvyC81xSrEMEjy67rEk9f+ZU48d1zt1259+abEquRuwd+KF0vBWFRS4bLWVcDJDUSe5nH2Rz8zf0QvTl+pxwvjr04Yfp8sp5b9vX0XQhcUGiAL9UICIk0KVlEP6kJ5vE+S3GaaErn5Cj3ugHiVUBRZKzuo9EEd5RTQUgOdyfNMC/JQLMOo9Uw4d58AgBSQRzHk0pXPy/VTv3pEKiOvUIsT9r6KSEEcvUu9UZB0v5qSECDQOQTCSAgaEJogSRdIuHUeqKCkD1KC4KNx0KyqxLZRBPQp+90CCV0aKNj1HonbvVDSS053RYIMLiDExg2B1mIkAugiLmA83bNHqQvOeFYnUWDuxCVxdXYk5z3SHcR3/E3K6P8AS3K6Lg5wbp2lTG0+Gp/ALRmzYYIm/DFBHGPJo/G6nJ/CT7dOGbzt+mLW1kvbx0lLA+pq5f5uJnTqegWDimG4zhdXh9fi0cDYjNkb2T7ltxrfyXccIYaynpZa9zbz1bz7x3EbTZrR3aX81jceMir8HnoGNc6dlpWEcnDW3mL+qxjnMbp1uOWfcaTgScU/GWK0zj70zSW99rFeiLxpmISUtRQ8QQaywFsdS0Hpz8wvYKWoiq6aKpgeHxSsD2Oabggpyz1WML3Y0v6QO0/kfiXZXv2YzW+XML/ReZ4dxlimHcM1XD8LYDTVGYF7mkvYHfEBy179l7PUQxVMEkEzA+KRpY9p2IIsQvJ8Z/R1jFJVuGHRitpSfcdnDXNHRwP3hdv0/JjJZXHnwtu4v/RziJiw3HaKZxMDaR1QByabFp9bj0XR8Ktxj+Q+FRYYaeOWTNnlnueyZmdqG/aK5lmB1WD0pwGNzZMbxjKyVkZzClpwbnMep3PcO9dbiXFFBwq2PCBQ1krqeJrYyGBjHgAahxOvfpunLN39vynH/fwnjHC9XXU1LVsxHLjdJrHWCMRh+vwuA5fxzWHRcfw0sz6DiGnNHWwuDJHxWfGT1028NVq5eJMc4ha4RuGGUR0PY3Mj+7Mfwstc/CIqB9NVsa5whqI3Oa9gLXAuAN/G6xJP45vR+LPX5MZqPRY+I8Clj7RmM0OXvnaPoVqMV4ywh746fDTLjFWHXZBStOUnlmfbbw+i2cnCnD75C92D0ea+/Z2WdSUNJRMyUlNDTt6RsDb+i5b458bJ+T705zAsDxKbFZsdx9zDXSMLIo2G7YGkbAcrD8et10dNA2mp2xtNw0anqrlhYxXRYfRSSyusLef8clzyyud3XbCeM8Y4PjCqZHxCyYDMWCIEA7kG63VRx3mYfZqHI885X3A8gvPsUxQ1WKOqHNc/K4udl6/3bKP6ze+/Y0r3W/jkvbOHcm3mvLj5V0Ffi09ZK6epkL32+I6Bo6AcgtCRNjVYKemJ7JvvPedvH8lZS4fX4t787hBTg6jmfL81s6WjkhqX0mHu7NoaHG7t+89StyTHqe0u8pu9YswOq4oo4Y5XsjjaGtaH6ABCU4qaKnD6gslcXW0NvwQuf4svpr82H29bAPUeiMv7xUJKmCMXfMwDxWkxfjDD8OaRHeolOjWA2v59Fxl3dRjVb/KpNael15xV8fYtO8R00VPTF2xDc5Hfc/kseTGcUnlih7eetq5gXBplLWMaOdgQPM9y6/jy1ti5SXVepNuNxZNeYNxHieDXsp/COqv/AP6VzOJeJIvjhrvRr/wKeN/8sL/51XpNkrLzocb4vD/ORyj/AElH+VlfH+kWVukrKW/70b2fiU8cvpNx31kiuNh/SFC82MFM4/u1BH3tXQYFjUGNQzPijMboXhj25g4ai4IIUssWNinY8kWRtuoEHXNjoVJUm7n6eStvZ2U89lJVsOyRQWg9fVGVvyhaQrjqi4T22siyBE9xKWvT6qVkKiPvdyVj1+imUuagACeZRl639U01URyt6BOwHJCLoo3UbXTSusqYCaSRcOoQNBKiXjkle/IoJIS1TsVVcx+k+kdV8GVZaLmBzJvIGx+hXHYZU+1UEEvMsAPiND9y9VqaeKrppaaduaKZhjeOoIsV41RwzYDi9VgVYbOjkJicftjkR4ix9VbPLD/TXHl45/7el4BK2XCYMu7AWHxC12MQOZVveRo85gVrcAxcYfOWS39nkPvEfZPVdc5sFXCD7ssbtQ4G48ivJlHs48/DLbybG8OfhtW+riZejmP7RttGk93RZ/BTuIYIKmowMxVNHHLZ1FO8gOJF7tPI+fqu4qMJo9QYy9rhYtcbi3guU4BrGYPjVfgVVI1pkkvC6+jnDS1+8W9LL0YcluF+44c2GPlLPVbIca1jbCp4bxSN+e1og2QG24BspDF+KcXYY8KwkYZE8m9VXPDnt/ott+BXURU8UTWtYywaSRfUgndWgWXOcknrEyw31u6afhzhqmwMSTGR9XXTm89VLq956DoFTxnw9+v8NaICG1lOS+FxNgb7tPcfvAW/Qs+d8vL5PGa08/wFjWUwp3tMVTAAySF4s9h7x39dito3DpMRmghDD2ImZJK7llac1vEkAeq6eWmgme2SWGN72/C5zASPAqYAaAAAAOQUuXe49P5bePwsSJ5lRJQ9zWNLnODWjck2AXK49x1h2HXhoyKyo2Ab8IPjz8lJjcrqOFsnt0GIV9Ph1O6epkDGjrzK8r4r4nqMWqXRQB2QXytaL279Of3LNnwri7imTt3UkscTtnTkRADuB1A8AtlhP6PceoGkw4lQU7n/ABERmR3he2y9XHhjh3le3HPkuXWPpzuF1GF0tEYGVQEzheQyMLbm22vILs8RoS7BZJI5Y3sdENW6g7dFVPwPi8o/wmuw2sHyy0zmn1CwJOEMdw6KV1C9sDSPegZNnjkHgbEfxqmVlu5SetaU4ZCyCmdE5o0edjtt1UcMMAx2fM1+XsuW/JRwyftxNHJE6GeN5EkbuR/gIoQBjM3+j/Jaw/ldunL/AMmLuIuzdTs7MPHv65vBCljbrxAj5/wQvVh/F87K9tbNX1EwtJO9w/pLCL80ryeWixzO7oqjI7Odfi1W8sZJ0nDl+/dZ1M4dtI4m2UALpeDI2VeN1T9PdhYG3F9Ln8guMikDJvfPuvGUnot5w1i36pxJs74jKzIYpWNIuW7gi+hsfvXLPG5YWR08vHk8q9QZTk6N7E+MQ/NWCjvvBTO/qELm4uLsGfq+knZfqxn4OWbDxLgrgCO2b4N/Jy8X48p7j0/kxvqtz7FF9qjh/qut+CTsNpHj3qEnwff8VgM4kwff2udnjHJ+RVreJsE/zs1v9Nrh97U8b9J5/wBiowLCHMJlw52g5xgj8Vs8Pw6jw2AwUVLFTxk5i2NtgT1KwDxBg72kNxmkOmxe0LY0ddSYhF21HUxVEd7F0bw4A9FqbjFu1ypeSZLd9gr0nRZtbEHqpYS6R0jbdRGZ77qZaXNsSMwKkwHKPdOiaNhJSIUSDyIVQJIsfm+iLdSVVO5SzIyjonYdAiI5m9UX8T5KY7kKiFz8pRd3y/VTul3oI2d3JWPzfRTSJUVE+JRlHijcphRQGt6BI6bJ3SJQCAkuc4w4sZw22lbHRuq5qhxDWh+VoAtfWx112Vk3dRW0x/GIcCw19dPHJKA5rGxx/E9zjYALUycWYhStz1vCeLRN6sAkt6LS8PU2DYw6fEOJa6mnr6l+ZkD5nMbTtGzRqNf46rsoqBo/a0dfXtH/AINUJm/2XXV3j6ZsyjUUvH/Dsz+znqZaKX5KqIsPrssXjLh+m4toY6vD5I/bIR+xna8FrxvlJH0PIro6iigxBnYYhHSYiLatqIQx/wDHhZc7V8EeyzGo4XrpsHq9/Z5HF0Mndz/Famt9VN/cefR4rUUE7qHF4Xw1EZs7MLHz/MaFbSlxqSnGelqZIwfkOh/BdHDVYfj9T+oeLcKZTYvGP2ZOgkHWN428LkH6Lm+LuD8IwCLtocXqmSy/zFLkD3yHuII07z9Vbhjbr06Tlsn3Ea3HcRq2FklbM5h3F8t/Rc5iMkFhZ37UH3cp1XV8Pfo4r6yNlVjtVJQU7tofimf5bN+p7l32E8O4TgcYNBh1PSn/ALxVe/K711+7wVkxwZy5LlPTi+GMW44mpRHHgsmIR2syapBiI8XG2b7+9bien43Lc9XX4Hg7P33ZiPW662Rjpmlz3VUzRu4v7Bn5rn8Qx/hPCHn2iqw7th9iCL2mS/jqs6xt6xYuWXq1pI+IazAsZhgxjG6TEqCeJxNRTxWELxsDlHP8VuJONOHGNJ/Wkbu5jXO/BavEuP6PEaOaihwOsqaWVhY505bCwg9wXE4ZFTUtZTwV0FLLTTSdk6QglzL7EuB5LOXHjl264XOTfw7uX9ImBAlsPtEzuX7PID5lYFbx3VvBFJSxQN+aQ5yPuC5/iLhOXAagPmj7WildlbIN43dCfxWXwvw8cfqnPnDosMpjaV97GVw+yD95U8OOTcbmWXynQUuP8aTk+0yMomus+ok0bfoxo3P8XXd4DwphOBNDqenElRb3qiX3nnwPLyWLV49DQUdU3C6RnsmGtDZn/Cxmlw1o5m33rjMW48ragE08eRvJ0xuT4NGimssusZqM9e8nqUksY3nYw/0hf6qkwwTaCrlcf3ZrfcvHv17j0gzOqnsvybG0fgnHxXitK+0k8c1t2yRi/wBLLX+PnEnLh9vWpsMlAJgxCoY7o92YLVTT1NNL2VZckmwcDoVpeH+NWVT2wucYZjoI3m7HeB5HuXQ1k0eIw9m5pGYFrhfa643G43Vdsbv04rtfbOIsRqYtYmgRgj7RFhf6FKhF8Ym/0f5LVYTiGHULKilrpHtkbM4NIBsQNOXgtlhTaStxKR5zS04j0LH89Oa9GMuNrOeUvFrbIxj+Zb/T/BCMZgo4oWGmieHF1iS4nS3ihenC7xeDKdtKKXD27zVT+4Naz81fSUlDUTtibSucNy58pJA8rLBzrOwaZjKiQlwByfiuXJuY27e7CYeUkkTxQUEdQIaWggYGD3yQSS7pe/ILBdHTOPvUkXkXD8UTzB1VOSdTI771Fsjb7phjrGNWy30zqOgoPY5ayal0HuxtbK4XPXfrp5KqDDG1jhDSwudNlL3EzODWtvYDxKufOwYLAwHmL/Vb7gBsTpq2RzwyzWAG4B2/5rl5ZSXLfyXHHqajRfyaxJmzJP6tQPxCX6mxNmzKweErCvUoxET7tWPMtKy426WbLG7vyj8Cs/nzYuGE+HkDsPxRn2a/+w134rbYBjdZw1BUCOjnmfO8PeZYHakCwAsvTOykP2YHeLCqHB0VfS544GAl5uy4OjfDvS8ty6rMmE9Rpq7HK52LvpQTSxNpIpcgYM+Z4ubk7W22VUeH0tcDLVCoqHE/4ypfb0BAVWOuH8rXkG4koWH0eQrG4hTUNI588gBuS1nN1hyWMvfTphP2p/qPCP8AN0R/rv8A/Ur6bAcJkcR7M+GzSQYqiRp/4loZnY9VzRzNZLC1xuxjHANbpz/vWxocWkimdTYllgmABa4CzXg6ctAsbv23cemZUvfgvsNTFiNSKeSpZDJFUyiRmUg3NzqLWXQ01ZS1jS6lqYpwNzG8Ot6Lnseq5YYsNjpqUVM8tSQyMgHMQ3v0CphmbX9uW0f6txqj1BAAJNrhrraOa4ferjbrdcssZb060qJWPh1ayvw+nrGCwmjD7dDzHqri7uW9uekroUMzugRmcRv9FdmliRKjqd3FPKOZPqm0F08wtuFB2QbAEqp3VNrJtcZG8ioGQd5VWtkDdZ214rQ++wPmjMeg9UhskSmzSWZx5j0S8XEKIKrmkt7o802ujkffRpNut91zvG2C/rrAJooxeph/bQdcw3HmLj0W7zJZipMrLtrx608Spqh0kIN7jYtcLi/gVk09XLTODqeaemePtQSFv02WZxjhYwbiKTs25aWtvLFbZrvtN9fvC1i9fVm2sbuarpqHjriCmsyaWnxSEfYqWZH+Tguowj9IWEVpbT1zZcOedMlV70f9WQbea8yQ5znNyE3b0OoUuMrN458dPYuJ8BpuI8JAikaamIdrRVbXC8bhqBmG4P8AGoWBwhw1VRS/r3HrVGNT6tc+zm0zRoAANM3ht6rzzBMWq6DD/Y6SthZFnL3Q1DHZWv2JBHI2Giy6vGcRqKCejlxOnZBM3346Rr8z7a2udgefcs9zpz/DbNvQsY4ywHBZHMlrxLU7FkA7WU92mjf40XK1/wCkDF5yTheGQYcw/wDWK12eQ+A/5rjaSURwtNPGyHTUsGvqdUyS45nEk9SdVrxkbx4Ze8qy8RrqvE3ZsVxWsxA/5PN2cXp/cseN7IBamgigHVrbu9SoIV19u2OMx/jNG975Dd73OPebpFnaxPh3Lx7v9IbfkhWYfRV+K1Jgw2Ayvbq597NZ4nkl6hbJ7dTw/WVtdwXUw1JjqYXAwN7R13RuJAAN/EELNx72nA+FmwwStp4Yg2KMNsXSPP4k3JPJYGG8F4/SNfkxuKnEjxK6ONri3ONj5LF4tpOJo6eE4rIyso6d5e2aICwJFve0BHmOe6888bl1enLuTuMmpBw79FlO2Rx7TEqsPke46uGYnfwYPVcjSsZUVBmtdkejO93MrbcQYrNV4ThWHGopaimpoe1HZMLSw2y5XXOvM+q1tDljpYxcXIzHzXs4pvt5eS3HHQrJngiGM++7c9AsdgYwmOCPtHj4nHQDxKrMrpZ5Aw2fI7KD8rRuVmxRtijDGCwCuddeDDc2xZYJg3NaN3he631BxaYMLkZUF76yMZY9Pi6E+H10Wu5LWV8ZjcJm8jY94XPxmfVdc5cJ5YpwtPZ9oGsmzaua8Xv4HkVk0z30j212FzPikG8f2XDmCPwVFM4NN/sv+9WH9lObaNk18wvTcZZqvnTKy7juMKxaHFKFlSwtjPwvYSLtdzCFw1JUw0Fc8zZhBK2/ui5DkL5mf6bWWo+px/qJcZb7Vud1KtpKqOCcOc8ZTodVmQ0UMQuWh7uZdqrxMImnswxluQaAvTlyyzUiY8GU7ta6qex9QXwu7RrtTkBNiqs4abHMCORBC3IrpIYnyCR2drCW66ZuS67DOFMPOGwPqaZs0rmBznFuZzidzuuV5/xzuLlw99VwEU7H0b4XPDSDdt+fNbPhTH2YLVSSyMMzJI8jmBwadDcEX06hduOFMIdvh5/sf3qQ4PwV2hoSPEW/Fcf8nCyyw/Hftr4+P8POrqKUf6xhWTHx9g1veo5h/sz+KvPBWCH/AKrbzKX8h8E/yDvJ5/Nc/wA3F9U8P7DePMBI1ppx/VZ/6lj1nGuCOfBNFFVXicS4ZW6tLSD9rwWQeCcGH+Ll8nuP4qt3BOEO+xUeRcn5uP6p4f2xsTrKeq4ioZaeoikbJRvByOBI1BAPQ6p11JNNTyywsL7sDXBps4WObQcx1HcFq/1ZR4fiFBU00riJaqeAxuPwtaCGnrckE+i6nDj7rx3hdcutGF66QYXSOdPBVdrHMQbF4AjAFvd00vv4rAmgknq46enkdU9lTmKSV7x9o2u4j4jbWw7ltJsPopnl8tLC9x3JYLlWxxxwsDI2NYwbNaLALl6b2xK6aJnEOAMllZFFCJ5XOkcGgAMAuSVivxKF1biuPDMKXII4XEW7QNFrgd5Oi1/E1WwY3A11I6r7KmuGBocAS7c38FRDVyVFVFUYkxoigcHxUrDduYbF/W3Rdpjbi43Uy3t3nDlLJSYBQwSjLI2EF46E6kfVZ5auNl4tq3Elk2UdBEw/eqHcU15/67KPCOMfgnjb8Of/AKu4sUyOi4F/E2JGMkV9R2hsGC0di4mw+ytrk4lb8eONB6GBqzlrH+XSyW+nUAG6HG2gXNNHEf8AnqA+NM1QqZOI6anln/WdLIIml5aacDNbWyz5Y+pV8MvmOkcVElQoZxW0FPVAZe2ja+3S4U3+7vutELbW6g6djepPcFB5c7dVEaqNaWmr/c+qPam7EFUFK10XUZQeHC4cFS513XPNJosEnIujvdBUQCmRog4rjhkmP4hBgGHwskqov275XGwjuNr8hbU+S19RwBjEcGeKupppQNY7FoPcCVtuGyf5fcQiTSQgZf6Nx/cuhxKnxSdwbQ10FKy2pfB2jr+oC1lyZYWYxMcZlLk8jaXtfJDNGY5onFkjDu0hTWfxRhFZguLiWsqWVRri6TtWtykuvqCOW4WvXrllm4uN3NVWBkqO6QfULIAINwqJmlzLt+JvvBWseHsa8bEXStY+9Issyokj5O99v4qxVVN2tZMN4zc+B3VtwRcbHZFn0SEIRUZCQx1t7aLquD+IaahwSHDqDD6isxJz3F8TG2BN/iLuQtYLlX7Lpf0eYxhuG01XBUEitlmGVgbd0oto1vnfTvXPlm8PTnl/KO3wyTFJY82I0tNTk7NilLyPHSyzHAOaWuALXCxBFwR0Kx6WermdeWiFPGRpmkBd6D81kr519u2nlnGGBQYXi7YmSGClqRmiI1DTzb4fgVo54amgytewysOjHs2Pcu4/SiWuwth0zMmZlPQ2N1yBmdGMutnDU7hfS4M8vGV5+TixytlYNCRHM7tgY3kWaHCyzHzxR6OeL9N1Yyb2uANqmiUHQk7g9QVCSgga0GGR4PU2IW7d3tvHC446x7RFTCdM1vEInY2SMg6giypcRCQJ4muB+20K5oY1hyOu07Doqb31WBSXLHwn4mmyumlDoWuuMwsbX9VU79nXg7CQfVbHBmQPnqqaWJkjpGh0eYAm410+q7+X7dvm3D9/i18/Z1LWgSAOB5/chbdwY0GKaFhjO1m2shTZ4/2lK/LosZ53QhePF9fKoF4DLPvZwsbd67Cg4+pqWghpqqinkliYGOdG4AOtpfXVCEy48c/bhllZ6Wn9ImHN2w6rP+sb+af/ALSqBn/ZlV/tWoQsz9Nx/TleXL7Df0n0TjZuF1F++RqyYeP2TfzeETHxnaPwQhY5OHDH1HXj3l7rKbxhK8e7g0h/8yz8lYziKpk+DA3X/wDrGhCF5bMZ8O3h/bQ1GEYvUYn7XBSRxRtqBOyGSoDrE/ELjxK3kDMXicclDBYjZ1R/chCxl+oy9E45jOlxdjP/AHCl/wB5/uQf10dqCl/3n+5CFj8+X0aaiowLGKrEp62SCBhkY2NrWz3sB5KB4ZxU7thH+t/uQhdJ+s5JNTTleLG90hwriZ5Q/wC0/uQeEsT6wf2/7kIT/M5U/FggOFcZY5rmNgu1wcD2vMG/RdN7Tjn+bKbyq/8A+UIWM/1OWf8AKRZhMfQ9pxsf9mU/+9//AMqqsfjVTSTU4w+nYZWFmb2m9ri3RCFj839T/wB//wBa8f7Z1FVVlFQ09K3DGuEMbY7+0t1sLX2TfX1rjc4WP95b+SELd/UZkwxL2ys/zYP95b+STq2pBscNt/5hv5IQpOfJqYRH2uqt/wDLv/yG/kq3V9Q064cf9u38kIV/Nk3MMag7Fpx/2a7/AG7fyUHYxI0XOHP/ANs1CFZzZOk4cUDj2X4qCQf61qrdxLE060Uv+0ahC6452peLFyuKYu3D+NaTGYoXMiqWiGdhcCTsCf8AhPkvQqhkpic2GRscnJzm5gPJCF15O8ca4YzWeUjz39JGHS0xo66avlqZC8x5XtDWtFr6W8Fy7TohC9XDd8cYvWdSB1UaY5XyRcmnMPAoQui/MXEBwLTsRYqmlceyMZ1Mbi26EI1fcWoQhFVvNyp4fiL8HxWmxKONshhcbtPMEEfihCut9OWfrbtIP0jU9RVQU8OHzF0rg27nNFifNdQ7EBl0j97x0QheHn48cLJHX9PleSW5PPeP641GI0mGm9h+3kJ5k3t9AfVaZzyx2oGUnQjcIQvXxzWEYtvllf7Ro/5gHqSfqrroQtX21j/GIuAc0tcLg7rGY0wyOZe7bXCEKxM58savu3s5B9lynMC4NqInEPZqCOiELtj6fP5us9tnDikFZTtMwy1F8rgNnd6EIU1pN2v/2Q=="
    },
    "wide": {
      "width": 610,
      "height": 262,
      "safeY": 0.63,
      "light": [
        [
          0.239,
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
          0.192,
          0.386,
          0.43,
          0.587,
          0.46,
          0.042,
          0.222,
          0.04
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
