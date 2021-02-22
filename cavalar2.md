# PragmatechFoundationProject
(1).
Interpreter, əvvəllər maşın dili proqramına daxil edilməsini tələb etmədən, proqramlaşdırma və ya ssenari dilində yazılmış təlimatları birbaşa yerinə yetirən bir kompüter proqramıdır. Tərcüməçi ümumiyyətlə proqramın icrası üçün aşağıdakı strategiyalardan birini istifadə edir:
Mənbə kodunu təhlil edin və davranışını birbaşa yerinə yetirin;
Mənbə kodunu bəzi səmərəli ara təmsilçilərə tərcümə edin və dərhal icra edin;
Interpreter sisteminin bir hissəsi olan bir kompilyator tərəfindən hazırlanmış əvvəlcədən tərtib edilmiş kodu  açıq şəkildə icra edin
(2).Əsas fərq odur ki, compiler bütün kodu maşın dilinə çevirir və sonra maşın bunu icra edir. interpret dillər isə preproses xassəlidir, yəni öncə aralıq dilə çevrilmə baş verir, daha sonra aralıq dildən hər bir əmr ayrıca maşın dilinə çevrilərək icra edilir. icra zamanı xəta harda baş versə proqramın icrası orda dayanır. çünki hər bir əmr ayrıca çevrilir və icra edilir. compilerdə isə hamsı birdən çevrilir sonra icra olur, ona görə də compiler ilə çevrilmə zamanı səhv varsa kodda, onda kod ümumiyyətlə işləmir, day müəyyən qədər işləyib səhv olan yerdə qırılmır interpret kimi.
(3).
data nədir ?.
Kompüter mühitində məlumatların proqramlar tərəfindən işlənəbilməsini təmin etmək üçün informasiyanın tərtib və formalaşdırılan formuna data deyilir.
Text Type ( mətn növü ): str
Numeric Types (ədədi növlər ): int , float , complex
Sequence Types (ardıcıllıq növləri) : list , tuple , range
Mapping Types ( xəritəçəkmə növləri ) : dict
Set Types(set növləri) : set , frozenset
Boolean Type(məntiqi növ) : bool
Binary Types(ikili növlər) : bytes , bytearray , memoryview
String-String data növü unicode simvollarından meydana gələn simvollar qrupudur
integer-integer istifadəsi int() dir . Riyazi tam ədələri ifadə etmək üçün istifadə ed
Float-Float data tipindən kəsr ədələri(yəni tam ədəd olmayan ) ifadə etmək üçün istifadə olunur 
Complex-Compex data tipi komplex ədədlərin ifadə edilməsində istifadə olunur
(4).
Object-oriented programming (OOP) Azərbaycan dilində tərcümədə Obyekt yönümlü proqramlaşdırma adlanır
enkapsulyasiya (encapsulation),
varislik (inheritance),
polimorfizm (polymorphism),
abstraksiyası (abstraction),
obyektlər arasında informasiya axınının təşkili (sending messages / message sending),
təkrar istifadə oluna bilərlik (reusability).
(5).
(6).
Global variable-Python'da, funksiyanın xaricində və ya qlobal miqyasda elan edilmiş bir dəyişən qlobal dəyişən olaraq bilinir. Bu o deməkdir ki, qlobal dəyişənə funksiyanın daxilində və ya xaricində daxil olmaq mümkündür.
Local-Funksiyanın daxilində və ya yerli dairədə elan edilmiş dəyişən lokal dəyişən kimi tanınır
(7).
2 tipi var:
Implicit Type Conversion
Explicit Type Conversion
(8)+(9).
Pythonda bütün constructor metodlar __init__(self) şəklində yazılır. Burada self məcburi deyil ilk argument hər hansı adda yazmaq olar yəni məsələn constructor metodunu __init__(this), __init__(a) şəklində yazmaq da olar. self bir keyword deyil, ancaq demək olar ki class metodlarında self yazmaq vərdiş olub və demək olar hər yerdə yazılmış kod nümunələrində bu ilk argumentin adını self şəklində görəcəksiz.\
(10).
1.)*args (Non-Keyword Arguments)

2.)**kwargs (Keyword Arguments)
* args və ** kwargs bir funksiyaya birdən çox arqument və ya açar söz arqumentləri ötürməyə imkan verir.
(11).
Python modulları haqqında bütün hoopla üçün bir modul həqiqətən olduqca sadə bir şeydir. Əslində Python modulu sadəcə Python kodu ehtiva edən .py uzantısı olan bir fayldır. Bu belədir. Beləliklə, hər dəfə Python kodu yazıb bir .py faylında qeyd edərkən əsas etibarilə modul yaratmısınız.
(12).
Fərz edək ki, bir çox modulu özündə cəmləşdirən çox böyük bir tətbiq hazırlamısınız. Modulların sayı artdıqca, bir yerə atıldıqda hamısını izləmək çətinləşir. Bu, xüsusilə oxşar adları və ya funksionallığı olduqda belədir. Onları qruplaşdırmaq və təşkil etmək üçün bir vasitə istəyə bilərsiniz.

Paketlər nöqtə qeydindən istifadə edərək modul ad məkanının iyerarxik bir quruluşuna imkan verir. Modulların qlobal dəyişən adlar arasında toqquşmaların qarşısını almağa kömək etdiyi kimi, paketlər də modul adları arasında toqquşmaların qarşısını alır.

Bir paket yaratmaq olduqca sadədir, çünki əməliyyat sisteminin özünə məxsus hiyerarşik fayl quruluşundan istifadə edir.
(13).
Əgər funksiyanı təyin edimişik lakin hansı əməliyyat yerinə yetirəcək və ya heç bir əməliyyat yerinə yetirməməsini istəyiriksə “pass” açar sözündən istifadə edə bilərik. “Pass” açar sözünün əsas məqsədi Runtime errorun qarşısın almaqdır. Pass sözünün özü keçmək, keçid deməkdir. Və bu yolla həmin funksyanın heç bir iş görmədiyini bildiririk.
(14).
Python List append()-listin sonuna element elave etmek ucun
Python List clear()-list terkibindekileri silmek ucun
Python List copy()-listi copy etmek ucun
Python List count()-listdeki elementlerin sayin teyin etmek ucun
Python List remove()-listdeki elementlerin yerini deyishmek uchun
(15).
List-Birden chox elementi bir deyishende saxlamag uchun istifade olunur
Dict- məlumat dəyərlərini key: value cütlərində saxlamaq üçün istifadə olunur.

(16).
Python Dictionary clear()-Removes all Items
Python Dictionary update()-Updates the Dictionary
Python Dictionary setdefault()-Inserts Key With a Value if Key is not Present
Python Dictionary keys()-Returns View Object of All Keys
Python Dictionary get()-Returns Value of The Key
