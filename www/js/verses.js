const verses = [
    {
        "index": "1",
        "verse": "Hebreo 1:1-2",
        "content": "<sup>1</sup>Ang Dios, na nagsalita nang unang panahon sa ating mga magulang sa iba't ibang panahon at sa iba't ibang paraan sa pamamagitan ng mga propeta,<br><sup>2</sup>Ay nagsalita sa atin sa mga huling araw na ito sa pamamagitan, ng kaniyang Anak, na siyang itinalaga na tagapagmana ng lahat ng mga bagay, na sa pamamagitan naman niya'y ginawa ang sanglibutan."
    },
    {
        "index": "2",
        "verse": "Jeremias 30:2",
        "content": "<sup>2</sup>Ganito ang sinasalita ng Panginoon, ng Dios ng Israel, na nagsasabi, Iyong isulat sa isang aklat ang lahat ng mga salita na aking sinalita sa iyo."
    },
    {
        "index": "3",
        "verse": "2 Timoteo 3:15-17",
        "content": "<sup>15</sup>At mula sa pagkasanggol ay iyong nalalaman ang mga banal na kasulatan na makapagpadunong sa iyo sa ikaliligtas sa pamamagitan ng pananampalataya kay Cristo Jesus.<br><sup>16</sup>Ang lahat ng mga kasulatan na kinasihan ng Dios ay mapapakinabangan din naman sa pagtuturo, sa pagsansala, sa pagsaway, sa ikatututo na nasa katuwiran:<br><sup>17</sup>Upang ang tao ng Dios ay maging sakdal, tinuruang lubos sa lahat ng mga gawang mabuti."
    },
    {
        "index": "4",
        "verse": "Apocalipsis 10:4",
        "content": "<sup>4</sup>At pagkaugong ng pitong kulog, ay isusulat ko sana: at narinig ko ang isang tinig na mula sa langit, na nagsasabi, Tatakan mo ang mga bagay na sinalita ng pitong kulog, at huwag mong isulat."
    },
    {
        "index": "5",
        "verse": "Juan 17:17",
        "content": "<sup>17</sup>Pakabanalin mo sila sa katotohanan: ang salita mo'y katotohanan."
    },
    {
        "index": "6",
        "verse": "Isaias 46:11-13",
        "content": "<sup>11</sup>Na tumatawag ng ibong mangdadagit mula sa silanganan, ng taong gumagawa ng aking payo mula sa malayong lupain; oo, aking sinalita, akin namang papangyayarihin; aking pinanukala, akin namang gagawin.<br><sup>12</sup>Inyong dinggin ako, ninyong may mapagmatigas na loob; na malayo sa katuwiran:<br><sup>13</sup>Aking inilalapit ang aking katuwiran, hindi maglalaon at ang aking pagliligtas ay hindi magluluwat: at aking ilalagay ang kaligtasan sa Sion na ukol sa Israel na aking kaluwalhatian."
    },
    {
        "index": "7",
        "verse": "Mateo 24:6-8",
        "content": "<sup>6</sup>At mangakakarinig kayo ng mga digmaan at mga alingawngaw ng mga digmaan; ingatan ninyo na huwag kayong magulumihanan: sapagka't kinakailangang ito'y mangyari datapuwa't hindi pa ang wakas.<br><sup>7</sup>Sapagka't magsisitindig ang bansa laban sa bansa, at ang kaharian laban sa kaharian; at magkakagutom at lilindol sa iba't ibang dako.<br><sup>8</sup>Datapuwa't ang lahat ng mga bagay na ito ay siyang pasimula ng kahirapan."
    },
    {
        "index": "8",
        "verse": "Daniel 12:4",
        "content": "<sup>4</sup>Nguni't ikaw, Oh Daniel, isara mo ang mga salita, at tatakan mo ang aklat, hanggang sa panahon ng kawakasan: marami ang tatakbo ng paroo't parito, at ang kaalaman ay lalago."
    },
    {
        "index": "9",
        "verse": "2 Timoteo 3:1-5",
        "content": "<sup>1</sup>Datapuwa't alamin mo ito, na sa mga huling araw ay darating ang mga panahong mapanganib.<br><sup>2</sup>Sapagka't ang mga tao'y magiging maibigin sa kanilang sarili, maibigin sa salapi, mayayabang, mga mapagmalaki, mapagtungayaw, masuwayin sa mga magulang, mga walang turing, mga walang kabanalan,<br><sup>3</sup>Walang katutubong pagibig, mga walang paglulubag, mga palabintangin, mga walang pagpipigil sa sarili, mga mabangis, hindi mga maibigin sa mabuti,<br><sup>4</sup>Mga lilo, mga matitigas ang ulo, mga palalo, mga maibigin sa kalayawan kay sa mga maibigin sa Dios;<br><sup>5</sup>Na may anyo ng kabanalan, datapuwa't tinanggihan ang kapangyarihan nito: lumayo ka rin naman sa mga ito."
    },
    {
        "index": "10",
        "verse": "Juan 20:30-31",
        "content": "<sup>30</sup>Gumawa rin nga si Jesus ng iba't ibang maraming tanda sa harap ng kaniyang mga alagad, na hindi nangasusulat sa aklat na ito:<br><sup>31</sup>Nguni't ang mga ito ay nangasulat, upang kayo'y magsisampalataya na si Jesus ay ang Cristo, ang Anak ng Dios; at sa inyong pagsampalataya ay magkaroon kayo ng buhay sa kaniyang pangalan."
    },
    {
        "index": "11",
        "verse": "1 Corinto 4:6",
        "content": "<sup>6</sup>Ang mga bagay ngang ito, mga kapatid, ay inianyo ko sa halimbawa sa aking sarili at kay Apolos dahil sa inyo; upang sa amin ay mangatuto kayo na huwag magsihigit sa mga bagay na nangasusulat; upang ang sinoman sa inyo ay huwag magpalalo ang isa laban sa iba."
    },
    {
        "index": "12",
        "verse": "Apocalipsis 22:18-19",
        "content": "<sup>18</sup>Aking sinasaksihan sa bawa't taong nakikinig sa mga salita ng hula ng aklat na ito, Kung ang sinoman ay magdagdag sa mga ito, ay daragdagan siya ng Dios ng mga salot na nakasulat sa aklat na ito:<br><sup>19</sup>At kung ang sinoman ay magalis sa mga salita ng aklat ng hulang ito, ay aalisin ng Dios ang kaniyang bahagi sa punong kahoy ng buhay, at sa bayang banal, na nangakasulat sa aklat na ito."
    },
    {
        "index": "13",
        "verse": "Juan 17:1,3",
        "content": "<sup>1</sup>Ang mga bagay na ito ay sinalita ni Jesus; at sa pagtingala ng kaniyang mga mata sa langit, ay sinabi niya, Ama, dumating na ang oras; luwalhatiin mo ang iyong Anak, upang ikaw ay luwalhatiin ng Anak.<br><sup>3</sup>At ito ang buhay na walang hanggan, na ikaw ay makilala nila na iisang Dios na tunay, at siyang iyong sinugo, sa makatuwid baga'y si Jesucristo."
    },
    {
        "index": "14",
        "verse": "1 Corinto 8:6",
        "content": "<sup>6</sup>Nguni't sa ganang atin ay may isang Dios lamang, ang Ama, na buhat sa kaniya ang lahat ng mga bagay, at tayo'y sa kaniya; at isa lamang Panginoon, si Jesucristo, na sa pamamagitan niya ang lahat ng mga bagay, at tayo'y sa pamamagitan niya."
    },
    {
        "index": "15",
        "verse": "Isaias 45:21",
        "content": "<sup>21</sup>Kayo'y mangagpahayag, at mangagpasapit; oo, magsanggunian silang magkakasama: sinong nagpakilala nito mula nang mga unang panahon? sinong nagpahayag niyaon nang una? hindi baga ang Panginoon? at walang Dios liban sa akin: isang ganap na Dios at Tagapagligtas; walang iba liban sa akin."
    },
    {
        "index": "16",
        "verse": "Juan 4:23-24",
        "content": "<sup>23</sup>Datapuwa't dumarating ang oras, at ngayon nga, na sasambahin ng mga tunay na mananamba ang Ama sa espiritu at katotohanan: sapagka't hinahanap ng Ama ang mga gayon na maging mananamba sa kaniya.<br><sup>24</sup>Ang Dios ay Espiritu: at ang mga sa kaniya'y nagsisisamba ay kinakailangang magsisamba sa espiritu at sa katotohanan."
    },
    {
        "index": "17",
        "verse": "Jeremias 1:9",
        "content": "<sup>9</sup>Nang magkagayo'y iniunat ng Panginoon ang kaniyang kamay, at hinipo ang aking bibig; at sinabi sa akin ng Panginoon, Narito, inilagay ko ang aking mga salita sa iyong bibig."
    },
    {
        "index": "18",
        "verse": "Gawa 17:28-29",
        "content": "<sup>28</sup>Sapagka't sa kaniya tayo'y nangabubuhay, at nagsisikilos, at mayroon tayong pagkatao: na gaya naman ng sinabi ng ilan sa inyong sariling mga manunula, Sapagka't tayo nama'y sa kaniyang lahi.<br><sup>29</sup>Yamang tayo nga'y lahi ng Dios, ay hindi marapat nating isipin na ang pagka Dios ay katulad ng ginto, o ng pilak, o ng bato, na inukit ng kabihasnan at katalinuhan ng tao."
    },
    {
        "index": "19",
        "verse": "Mateo 6:9-10",
        "content": "<sup>9</sup>Magsidalangin nga kayo ng ganito: Ama namin na nasa langit ka, Sambahin nawa ang pangalan mo.<br><sup>10</sup>Dumating nawa ang kaharian mo. Gawin nawa ang iyong kalooban, kung paano sa langit, gayon din naman sa lupa."
    },
    {
        "index": "20",
        "verse": "Roma 1:19-20",
        "content": "<sup>19</sup>Sapagka't ang nakikilala tungkol sa Dios ay hayag sa kanila; sapagka't ito'y ipinahayag ng Dios sa kanila.<br><sup>20</sup>Sapagka't ang mga bagay niyang hindi nakikita buhat pa nang lalangin ang sanglibutan ay nakikitang maliwanag, sa pagkatanto sa pamamagitan ng mga bagay na ginawa niya, maging ang walang hanggan niyang kapangyarihan at pagka Dios; upang sila'y walang madahilan."
    },
    {
        "index": "21",
        "verse": "Genesis 17:1",
        "content": "<sup>1</sup>At nang si Abram ay may siyam na pu't siyam na taon, ay napakita ang Panginoon kay Abram, at sa kaniya'y nagsabi, Ako ang Dios na Makapangyarihan sa lahat lumakad ka sa harapan ko, at magpakasakdal ka."
    },
    {
        "index": "22",
        "verse": "Awit 19:1-4",
        "content": "<sup>1</sup>Ang kalangitan ay nagpapahayag ng kaluwalhatian ng Dios; At ipinakikilala ng kalawakan ang gawa ng kaniyang kamay.<br><sup>2</sup>Sa araw-araw ay nagbabadya ng pananalita, At sa gabi-gabi ay nagpapakilala ng kaalaman.<br><sup>3</sup>Walang pananalita o wika man; Ang kanilang tinig ay hindi marinig.<br><sup>4</sup>Ang kanilang pangungusap ay lumaganap sa buong lupa, At ang kanilang mga salita ay hanggang sa wakas ng sanglibutan. Sa kanila inilagay niya ang tabernakulo na ukol sa araw,"
    },
    {
        "index": "23",
        "verse": "Job 12:7-10",
        "content": "<sup>7</sup>Nguni't tanungin mo ngayon ang mga hayop, at tuturuan ka nila: At ang mga ibon sa himpapawid, at kanilang sasaysayin sa iyo:<br><sup>8</sup>O magsalita ka sa lupa, at magtuturo sa iyo; At ang mga isda sa dagat ay magsasaysay sa iyo.<br><sup>9</sup>Sinong hindi nakakaalam sa lahat ng mga ito, Na ang kamay ng Panginoon ang siyang gumawa nito?<br><sup>10</sup>Nasa kamay niya ang kaluluwa ng bawa't bagay na may buhay, At ang hininga ng lahat ng mga tao."
    },
    {
        "index": "24",
        "verse": "Hebreo 3:4",
        "content": "<sup>4</sup>Sapagka't ang bawa't bahay ay may nagtayo; datapuwa't ang nagtayo ng lahat ng mga bagay ay ang Dios."
    },
    {
        "index": "25",
        "verse": "Isaias 45:18",
        "content": "<sup>18</sup>Sapagka't ganito ang sabi ng Panginoon na lumikha ng langit, na siyang Dios na nag-anyo sa lupa at gumawa niyaon, na kaniyang itinatag, at hindi niya nilikha na sira, na kaniyang inanyuan upang tahanan: ako ang Panginoon; at wala nang iba."
    },
    {
        "index": "26",
        "verse": "Awit 100:2-3",
        "content": "<sup>2</sup>Mangaglingkod kayo na may kasayahan sa Panginoon; Magsilapit kayo sa kaniyang harapan na may awitan.<br><sup>3</sup>Alamin ninyo na ang Panginoon ay siyang Dios; Siya ang lumalang sa atin, at tayo'y kaniya: Tayo'y kaniyang bayan, at mga tupa ng kaniyang pastulan."
    },
    {
        "index": "27",
        "verse": "1 Juan 2:3",
        "content": "<sup>3</sup>At sa ganito'y nalalaman natin na siya'y ating nakikilala, kung tinutupad natin ang kaniyang mga utos."
    },
    {
        "index": "28",
        "verse": "2 Tesalonica 1:8-9",
        "content": "<sup>8</sup>Na maghihiganti sa hindi nagsisikilala sa Dios, at sa kanila na hindi nagsisitalima sa evangelio ng ating Panginoong Jesus:<br><sup>9</sup>Na siyang tatangap ng kaparusahan, na walang hanggang kapahamakang mula sa harapan ng Panginoon at mula sa kaluwalhatian ng kaniyang kapangyarihan."
    },
    {
        "index": "29",
        "verse": "Awit 95:6-7",
        "content": "<sup>6</sup>Oh magsiparito kayo tayo'y magsisamba at magsiyukod; Tayo'y magsiluhod sa harap ng Panginoon na May-lalang sa atin.<br><sup>7</sup>Sapagka't siya'y ating Dios, At tayo'y bayan ng kaniyang pastulan, at mga tupa ng kaniyang kamay. Ngayon, kung inyong didinggin ang kaniyang tinig."
    },
    {
        "index": "30",
        "verse": "Awit 5:7",
        "content": "<sup>7</sup>Nguni't sa ganang akin, sa kasaganaan ng iyong kagandahang-loob ay papasok ako sa iyong bahay; Sa takot sa iyo ay sasamba ako sa dako ng iyong banal na templo."
    },
    {
        "index": "31",
        "verse": "1 Corinto 14:15,26",
        "content": "<sup>15</sup>Ano nga ito? Mananalangin ako sa espiritu, at mananalangin din naman ako sa pagiisip: aawit ako sa espiritu, at aawit din naman ako sa pagiisip.<br><sup>26</sup>Ano nga ito, mga kapatid? Pagka kayo'y nangagkakatipon ang bawa't isa sa inyo'y may isang awit, may isang aral, may isang pahayag, may wika, may isang pagpapaliwanag. Gawin ninyo ang lahat ng mga bagay sa ikatitibay."
    },
    {
        "index": "32",
        "verse": "1 Corinto 14:40 MB",
        "content": "<sup>40</sup>Lamang, gawin ninyo ang lahat ng bagay sa wasto at maayos na paraan."
    },
    {
        "index": "33",
        "verse": "Hebreo 10:25-27",
        "content": "<sup>25</sup>Na huwag nating pabayaan ang ating pagkakatipon, na gaya ng ugali ng iba, kundi mangagaralan sa isa't isa; at lalo na kung inyong namamalas na nalalapit na ang araw.<br><sup>26</sup>Sapagka't kung ating sinasadya ang pagkakasala pagkatapos na ating matanggap ang pagkakilala sa katotohanan, ay wala nang haing natitira pa tungkol sa mga kasalanan,<br><sup>27</sup>Kundi isang kakilakilabot na paghihintay sa paghuhukom, at isang kabangisan ng apoy na lalamon sa mga kaaway."
    },
    {
        "index": "34",
        "verse": "Gawa 20:7",
        "content": "<sup>7</sup>At nang unang araw ng sanglinggo, nang kami'y nangagkakapisan upang pagputolputulin ang tinapay, si Pablo ay nangaral sa kanila, na nagaakalang umalis sa kinabukasan; at tumagal ang kaniyang pananalita hanggang sa hatinggabi."
    },
    {
        "index": "35",
        "verse": "Gawa 2:46",
        "content": "<sup>46</sup>At araw-araw sila'y nagsisipanatiling matibay sa pagkakaisa sa templo, at sa pagpuputolputol ng tinapay sa bahay-bahay, at nagsisikain sila ng kanilang pagkain na may galak at may katapatan ng puso."
    },
    {
        "index": "36",
        "verse": "Mateo 18:19-20",
        "content": "<sup>19</sup>Muling sinasabi ko sa inyo, na kung pagkasunduan ng dalawa sa inyo sa lupa ang nauukol sa anomang bagay na kanilang hihingin, ay gagawin sa kanila ng aking Ama na nasa langit.<br><sup>20</sup>Sapagka't kung saan nagkakatipon ang dalawa o tatlo sa aking pangalan, ay naroroon ako sa gitna nila."
    },
    {
        "index": "37",
        "verse": "Deuteronomio 12:5",
        "content": "<sup>5</sup>Kundi sa dakong pipiliin ng Panginoon ninyong Dios sa lahat ng inyong mga lipi na paglalagyan ng kaniyang pangalan, sa makatuwid bagay sa kaniyang tahanan ay inyong hahanapin, at doon kayo paroroon:"
    },
    {
        "index": "38",
        "verse": "Lucas 9:59-62",
        "content": "<sup>59</sup>At sinabi niya sa iba, Sumunod ka sa akin. Datapuwa't siya'y nagsabi, Panginoon, tulutan mo muna akong makauwi at mailibing ko ang aking ama.<br><sup>60</sup>Datapuwa't sinabi niya sa kaniya, Pabayaan mong ilibing ng mga patay ang kanilang sariling mga patay; datapuwa't yumaon ka at ibalita mo ang kaharian ng Dios.<br><sup>61</sup>At ang iba nama'y nagsabi, Susunod ako sa iyo, Panginoon; datapuwa't pabayaan mo akong magpaalam muna sa mga kasangbahay ko.<br><sup>62</sup>Datapuwa't sinabi sa kaniya ni Jesus, Walang taong pagkahawak sa araro, at lumilingon sa likod, ay karapatdapat sa kaharian ng Dios."
    },
    {
        "index": "39",
        "verse": "Awit 89:7 MB",
        "content": "<sup>7</sup>Sa pagtitipon man ng lahat ng banal, Taglay nila'y takot at buong paggalang"
    },
    {
        "index": "40",
        "verse": "Awit 93:5",
        "content": "<sup>5</sup>Ang iyong mga patotoo ay totoong tunay: Ang kabanalan ay nararapat sa iyong bahay, Oh Panginoon, magpakailan man."
    },
    {
        "index": "41",
        "verse": "Habakuk 2:20 MB",
        "content": "<sup>20</sup>Ngunit si Yahweh ay nasa kanyang banal na templo, tumahimik ang lahat sa harapan niya."
    },
    {
        "index": "42",
        "verse": "Awit 96:1-3,8-9 RSV",
        "content": "<sup>1</sup>O magsiawit sa Panginoon ng bagong awit; awitan ang Panginoon, buong daigdig!<br><sup>2</sup>Awitan ang Panginoon, purihin ang pangalan niya; ipahayag ang kanyang pagliligtas sa araw-araw.<br><sup>3</sup>Ipahayag ang kanyang kaluwalhatian sa lahat ng mga bansa, ang kanyang kagila-gilalas na gawa sa lahat ng tao!<br><sup>8</sup>Ibigay sa Panginoon ang kaluwalhatiang karapat-dapat sa kaniyang pangalan; mangagdala ng handog, at pumasok sa kaniyang mga patyo!<br><sup>9</sup>Sambahin ang Panginoon sa banal na kasuotan; manginig sa harap niya, buong daigdig!<hr><sup>1</sup>O sing to the LORD a new song; sing to the LORD, all the earth!<br><sup>2</sup>Sing to the LORD, bless his name; tell of his salvation from day to day.<br><sup>3</sup>Declare his glory among the nations, his marvelous works among all the peoples!<br><sup>8</sup>Ascribe to the LORD the glory due his name; bring an offering, and come into his courts!<br><sup>9</sup>Worship the LORD in holy array; tremble before him, all the earth!<hr><b>Abriol</b><br><sup>1</sup>Magsiawit kayo sa Panginoon ng isang panibagong awitin; magsiawit kayo buong sangkalupaan.<br><sup>2</sup>Magsiawit kayo sa Panginoon, purihin ang kaniyang pangalan; ipamahayag ninyo araw-araw ang kaligtasang nanggagaling sa kanya.<br><sup>3</sup>Isalaysay ninyo sa mga bansa ang kanyang kahanga-hangang gawa.<br><sup>8</sup>Maghandog sa Panginoon ng kaluwalhatiang ukol sa kaniyang ngalan! Handugan siya ng mga alay at pumasok sa kanyang mga looban;<br><sup>9</sup>Sambahin ang Panginoon nang may banal na kasuotan. Manginig kayo sa harap niya, sangkalupaan!"
    },
    {
        "index": "43",
        "verse": "Juan 15:1,5",
        "content": "<sup>1</sup>Ako ang tunay na puno ng ubas, at ang aking Ama ang magsasaka.<br><sup>5</sup>Ako ang puno ng ubas, kayo ang mga sanga: Ang nananatili sa akin, at ako'y sa kaniya, ay siyang nagbubunga ng marami: sapagka't kung kayo'y hiwalay sa akin ay wala kayong magagawa."
    },
    {
        "index": "44",
        "verse": "Galacia 4:6",
        "content": "<sup>6</sup>At sapagka't kayo'y mga anak, ay sinugo ng Dios ang Espiritu ng kaniyang Anak sa ating mga puso, na sumisigaw, Abba, Ama."
    },
    {
        "index": "45",
        "verse": "Efeso 3:16-18 MB",
        "content": "<sup>16</sup>Hinihiling ko, ayon sa kanyang kayamanan at kadakilaan, na palakasin niya ang inyong buhay espirituwal sa pamamagitan ng kanyang Espiritu.<br><sup>17</sup>Nawa'y manahan si Cristo sa inyong puso sa pamamagitan ng inyong pananalig sa kanya upang sa inyong pag-uugat at pagiging matatag sa pag-ibig,<br><sup>18</sup>maunawaan ninyo, kasama ng mga hinirang, kung gaano kadakila ang pag-ibig ni Cristo."
    },
    {
        "index": "46",
        "verse": "Mateo 7:21-23",
        "content": "<sup>21</sup>Hindi ang bawa't nagsasabi sa akin, Panginoon, Panginoon, ay papasok sa kaharian ng langit; kundi ang gumaganap ng kalooban ng aking Ama na nasa langit.<br><sup>22</sup>Marami ang mangagsasabi sa akin sa araw na yaon, Panginoon, Panginoon, hindi baga nagsipanghula kami sa iyong pangalan, at sa pangalan mo'y nangagpalayas kami ng mga demonio, at sa pangalan mo'y nagsigawa kami ng maraming gawang makapangyarihan?<br><sup>23</sup>At kung magkagayo'y ipahahayag ko sa kanila, Kailan ma'y hindi ko kayo nangakilala: magsilayo kayo sa akin, kayong manggagawa ng katampalasanan."
    },
    {
        "index": "47",
        "verse": "Mateo 15:9",
        "content": "<sup>9</sup>Datapuwa't walang kabuluhan ang pagsamba nila sa akin, Na nagtuturo ng kanilang pinakaaral ang mga utos ng mga tao."
    },
    {
        "index": "48",
        "verse": "Colosas 2:22-23",
        "content": "<sup>22</sup>(Ang lahat ng mga bagay na ito ay mangasisira sa paggamit), ayon sa mga utos at mga aral ng mga tao?<br><sup>23</sup>Ang mga bagay na iya'y katotohanang mayroong anyo ng karunungan sa pagsambang kusa, at sa pagpapakababa, at sa pagpapakahirap sa katawan; nguni't walang anomang kabuluhan laban sa ikalalayaw ng laman."
    },
    {
        "index": "49",
        "verse": "Levitico 10:1-2",
        "content": "<sup>1</sup>At si Nadab at si Abiu, na mga anak ni Aaron, ay kumuha ang bawa't isa sa kanila ng kanikaniyang suuban, at sinidlan nila ng apoy, at pinatungan ng kamangyan, at sila'y naghandog sa harap ng Panginoon ng ibang apoy na hindi iniutos niya sa kanila.<br><sup>2</sup>At sa harap ng Panginoon ay may lumabas na apoy, at sinupok sila; at namatay sila sa harap ng Panginoon."
    },
    {
        "index": "50",
        "verse": "2 Samuel 6:6-7",
        "content": "<sup>6</sup>At nang sila'y magsidating sa giikan ni Nachon, iniunat ni Uzza ang kaniyang kamay sa kaban ng Dios, at hinawakan; sapagka't ang mga baka ay nangatisod.<br><sup>7</sup>At ang galit ng Panginoon ay nagalab laban kay Uzza; at sinaktan siya ng Dios doon dahil sa kaniyang kamalian; at doo'y namatay siya sa siping ng kaban ng Dios."
    },
    {
        "index": "51",
        "verse": "Bilang 4:15",
        "content": "<sup>15</sup>At pagka si Aaron at ang kaniyang mga anak ay nakatapos na makapagtakip sa santuario at sa buong kasangkapan ng santuario, kailan ma't isusulong ang kampamento: ay magsisilapit pagkatapos ang mga anak ni Coath upang kanilang buhatin yaon: datapuwa't huwag silang hihipo sa santuario, baka sila'y mamatay.  Ang mga bagay na ito ay siyang pasanin ng mga anak ni Coath sa tabernakulo ng kapisanan."
    },
    {
        "index": "52",
        "verse": "I Juan 5:3",
        "content": "<sup>3</sup>Sapagka't ito ang pagibig sa Dios, na ating tuparin ang kaniyang mga utos: at ang kaniyang mga utos ay hindi mabibigat."
    },
    {
        "index": "53",
        "verse": "Santiago 2:10,14",
        "content": "<sup>10</sup>Sapagka't ang sinomang gumaganap ng buong kautusan, at gayon ma'y natitisod sa isa, ay nagiging makasalanan sa lahat.<br><sup>14</sup>Anong pakikinabangin, mga kapatid ko kung sinasabi ng sinoman na siya'y may pananampalataya, nguni't walang mga gawa? Makapagliligtas baga sa kaniya ang pananampalatayang iyan?"
    },
    {
        "index": "54",
        "verse": "Santiago 2:17-19",
        "content": "<sup>17</sup>Gayon din naman ang pananampalataya na walang mga gawa, ay patay sa kaniyang sarili.<br><sup>18</sup>Oo, sasabihin ng isang tao, Ikaw ay mayroong pananampalataya, at ako'y mayroong mga gawa: ipakita mo sa akin ang iyong pananampalatayang hiwalay sa mga gawa, at ako sa pamamagitan ng aking mga gawa ay ipakita sa iyo ang aking pananampalataya.<br><sup>19</sup>Ikaw ay sumasampalataya na ang Dios ay iisa; mabuti ang iyong ginagawa: ang mga demonio man ay nagsisisampalataya, at nagsisipanginig."
    },
    {
        "index": "55",
        "verse": "Santiago 2:22-24",
        "content": "<sup>22</sup>Nakikita mo na ang pananampalataya ay gumagawang kalakip ng kaniyang mga gawa, at sa pamamagitan ng mga gawa ay naging sakdal ang pananampalataya;<br><sup>23</sup>At natupad ang kasulatan na nagsasabi, At si Abraham ay sumampalataya sa Dios, at yao'y ibinilang na katuwiran sa kaniya; at siya'y tinawag na kaibigan ng Dios.<br><sup>24</sup>Nakikita ninyo na sa pamamagitan ng mga gawa'y inaaring ganap ang tao, at hindi sa pamamagitan ng pananampalataya lamang."
    },
    {
        "index": "56",
        "verse": "Job 26:7",
        "content": "<sup>7</sup>Kaniyang iniuunat ang hilagaan sa pagitang walang laman, At ibinibitin ang lupa sa wala.<hr><b>MB</b><br><sup>7</sup>Ang langit'sa hilaga'y iniladlad na mahusay; Ibinitin ang daigdig sa gitna ng kalawakan."
    },
    {
        "index": "57",
        "verse": "Efeso 1:9-10",
        "content": "<sup>9</sup>Na ipinakikilala niya sa atin ang hiwaga ng kaniyang kalooban, ayon sa kaniyang minagaling na ipinasiya niya sa kaniya rin.<br><sup>10</sup>Sa pagiging katiwala sa kaganapan ng mga panahon, upang tipunin ang lahat ng mga bagay kay Cristo, ang mga bagay na nangasa sangkalangitan, at ang mga bagay na nangasa ibabaw ng lupa; sa kaniya, sinasabi ko,"
    },
    {
        "index": "58",
        "verse": "Roma 12:4-5",
        "content": "<sup>4</sup>Sapagka't kung paanong sa isang katawan ay mayroong tayong maraming mga sangkap, at ang lahat ng mga sangkap ay hindi pareho ang gawain:<br><sup>5</sup>Ay gayon din tayo, na marami, ay iisang katawan kay Cristo, at mga sangkap na samasama sa isa't isa."
    },
    {
        "index": "59",
        "verse": "Colosas 1:18",
        "content": "<sup>18</sup>At siya ang ulo ng katawan, sa makatuwid baga'y ng iglesia;"
    },
    {
        "index": "60",
        "verse": "Roma 16:16",
        "content": "<sup>16</sup>Mangagbatian kayo ng banal na halik.  Binabati kayo ng lahat ng mga iglesia ni Cristo."
    },
    {
        "index": "61",
        "verse": "Gawa 20:28 Lamsa",
        "content": "<sup>28</sup>Ingatan ninyo kung gayon ang inyong sarili at ang buong kawan na rito'y hinirang kayo ng Espiritu Santo na mga katiwala, upang pakanin ang Iglesia ni Cristo na binili niya ng kaniyang dugo.<hr><b>DS</b><br><sup>28</sup>Ingatan ninyo ang inyong sarili, at ang buong kawan, na sa kanila'y ginawa kayo ng Espiritu Santo na mga obispo, upang pakanin ninyo ang iglesia ng Panginoon na binili niya ng kaniyang sariling dugo."
    },
    {
        "index": "62",
        "verse": "Hebreo 9:13-14",
        "content": "<sup>13</sup>Sapagka't kung ang dugo ng mga kambing at ng mga baka, at ang abo ng dumalagang baka na ibinubudbod sa mga nadungisan, ay makapagiging banal sa ikalilinis ng laman:<br><sup>14</sup>Gaano pa kaya ang dugo ni Cristo, na sa pamamagitan ng Espiritu na walang hanggan ay inihandog ang kaniyang sarili na walang dungis sa Dios, ay maglilinis ng inyong budhi sa mga gawang patay upang magsipaglingkod sa Dios na buhay?"
    },
    {
        "index": "63",
        "verse": "Juan 10:7,9",
        "content": "<sup>7</sup>Muli ngang sinabi sa kanila ni Jesus, Katotohanan, katotohanang sinasabi ko sa inyo, Ako ang pintuan ng mga tupa.<br><sup>9</sup>Ako ang pintuan; ang sinomang taong pumasok sa  akin, ay siya'y  maliligtas, at  papasok at lalabas, at makasusumpong ng pastulan."
    },
    {
        "index": "64",
        "verse": "Roma 5:12",
        "content": "<sup>12</sup>Kaya, kung paano na sa pamamagitan ng isang tao ay pumasok ang kasalanan sa sanglibutan, at ang kamataya'y sa pamamagitan ng kasalanan; at sa ganito'y ang kamatayan ay naranasan ng lahat ng mga tao, sapagka't ang lahat ay nangagkasala."
    },
    {
        "index": "65",
        "verse": "Isaias 59:2",
        "content": "<sup>2</sup>Kundi pinapaghiwalay ng inyong mga kasamaan kayo at ang inyong Dios, at ang inyong mga kasalanan ay siyang nagpakubli ng kaniyang mukha sa inyo, upang siya'y huwag makinig."
    },
    {
        "index": "66",
        "verse": "Roma 6:23",
        "content": "<sup>23</sup>Sapagka't ang kabayaran ng kasalanan ay kamatayan; datapuwa't ang kaloob na walang bayad ng Dios ay buhay na walang hanggan kay Cristo Jesus na Panginoon natin."
    },
    {
        "index": "67",
        "verse": "Apocalipsis 20:14",
        "content": "<sup>14</sup>At ang kamatayan at ang Hades ay ibinulid sa dagatdagatang apoy.  Ito ang ikalawang kamatayan, sa makatuwid ay ang dagatdagatang apoy."
    },
    {
        "index": "68",
        "verse": "2 Corinto 5:21",
        "content": "<sup>21</sup>Yaong hindi nakakilala ng kasalanan ay kaniyang inaring may sala dahil sa atin: upang tayo'y maging sa kaniya'y katuwiran ng Dios."
    },
    {
        "index": "69",
        "verse": "Deuteronomio 24:16",
        "content": "<sup>16</sup>Hindi papatayin ang mga magulang dahil sa mga anak, ni ang mga anak ay papatayin dahil sa mga magulang; bawa't tao'y papatayin dahil sa kaniyang sariling kasalanan."
    },
    {
        "index": "70",
        "verse": "1 Pedro 2:21-22",
        "content": "<sup>21</sup>Sapagka't sa ganitong bagay kayo'y tinawag: sapagka't si Cristo man ay nagbata dahil sa inyo, na kayo'y iniwanan ng halimbawa, upang kayo'y mangagsisunod sa mga hakbang niya:<br><sup>22</sup>Na siya'y hindi nagkasala, o kinasumpungan man ng daya ang kaniyang bibig:"
    },
    {
        "index": "71",
        "verse": "Efeso 5:23",
        "content": "<sup>23</sup>Sapagka't ang lalake ay pangulo ng kaniyang asawa, gaya naman ni Cristo na pangulo ng iglesia, na siya rin ang tagapagligtas ng katawan."
    },
    {
        "index": "72",
        "verse": "Efeso 2:15",
        "content": "<sup>15</sup>Na inalis ang pagkakaalit sa pamamagitan ng kaniyang laman, kahit kautusan na may mga batas at ang palatuntunan; upang sa dalawa ay lalangin sa kaniyang sarili ang isang taong bago, sa ganito'y ginagawa ang kapayapaan;"
    },
    {
        "index": "73",
        "verse": "1 Corinto 5:12-13",
        "content": "<sup>12</sup>Sapagka't ano sa akin ang humatol sa nangasa labas?  Hindi baga kayo nagsisihatol sa nangasa loob?<br><sup>13</sup>Datapuwa't sa nangasa labas ay Dios ang humahatol.  Alisin nga ninyo sa inyo ang masamang tao."
    },
    {
        "index": "74",
        "verse": "Juan 8:24",
        "content": "<sup>24</sup>Sinabi ko  nga sa inyo, na kayo'y mangamamatay sa inyong mga  kasalanan:  sapagka't malibang kayo'y magsisampalataya na ako  nga ang Cristo, ay mangamamatay kayo sa inyong mga kasalanan."
    },
    {
        "index": "75",
        "verse": "Juan 15:6",
        "content": "<sup>6</sup>Kung ang sinoman ay hindi manatili sa akin, ay siya'y  matatapong katulad ng sanga, at matutuyo; at mga titipunin at mga ihahagis sa apoy, at mangasusunog."
    },
    {
        "index": "76",
        "verse": "Lucas 12:32",
        "content": "<sup>32</sup>Huwag kayong mangatakot, munting kawan; sapagka't nakalulugod na mainam sa inyong Ama ang sa inyo'y ibigay ang kaharian."
    },
    {
        "index": "77",
        "verse": "Gawa 8:1",
        "content": "<sup>1</sup>At si Saulo ay sumangayon sa kaniyang pagkamatay. At nang araw na yao'y nangyari ang isang malaking paguusig laban sa iglesia na nasa Jerusalem; at silang lahat ay nagsipangalat sa lahat ng mga dako ng Judea at Samaria, maliban na sa mga apostol."
    },
    {
        "index": "78",
        "verse": "Gawa 8:4-5",
        "content": "<sup>4</sup>Ang mga nagsipangalat nga ay nagsipaglakbay, na ipinangangaral ang salita.<br><sup>5</sup>At bumaba si Felipe sa bayan ng Samaria, at ipinangaral sa kanila ang Cristo."
    },
    {
        "index": "79",
        "verse": "Gawa 6:7",
        "content": "<sup>7</sup>At lumago ang salita ng Dios; at dumaming lubha sa Jerusalem ang bilang ng mga alagad; at nagsitalima sa pananampalataya ang lubhang maraming saserdote."
    },
    {
        "index": "80",
        "verse": "Roma 16:4",
        "content": "<sup>4</sup>Na ipinain ang kanilang mga leeg dahil sa aking buhay; na sa kanila'y hindi lamang ako ang nagpapasalamat, kundi naman ang lahat ng mga iglesia ng mga Gentil:"
    },
    {
        "index": "81",
        "verse": "Mateo 24:4",
        "content": "<sup>4</sup>At sumagot si Jesus at sinabi sa kanila, Mangagingat kayo na huwag kayong mailigaw ninoman."
    },
    {
        "index": "82",
        "verse": "Mateo 24:9,11",
        "content": "<sup>9</sup>Kung magkagayo'y ibibigay kayo sa kapighatian, at kayo'y papatayin: at kayo'y kapopootan ng lahat ng mga bansa dahil sa aking pangalan.<br><sup>11</sup>At magsisibangon ang maraming bulaang propeta, at kanilang ililigaw ang marami."
    },
    {
        "index": "83",
        "verse": "1 Timoteo 4:1,3",
        "content": "<sup>1</sup>Nguni't hayag na sinasabi ng Espiritu, na sa mga huling panahon ang iba'y magsisitalikod sa pananampalataya, at mangakikinig sa mga espiritung mapanghikayat at sa mga aral ng mga demonio,<br><sup>3</sup>Na ipinagbabawal ang pagaasawa, at ipinaguutos na lumayo sa mga lamangkati, na nilalang ng Dios upang tanggapin na may pagpapasalamat ng mga nagsisisampalataya at nangakakaalam ng katotohanan."
    },
    {
        "index": "84",
        "verse": "Mateo 7:15",
        "content": "<sup>15</sup>Mangagingat kayo sa mga bulaang propeta, na nagsisilapit sa inyo na may damit tupa, datapuwa't sa loob ay mga lobong maninila."
    },
    {
        "index": "85",
        "verse": "Juan 1:29",
        "content": "<sup>29</sup>Nang kinabukasan ay nakita ni Juan si Jesus na lumalapit sa kaniya, at sinabi, Narito, ang Cordero ng Dios, na nagaalis ng kasalanan ng sanglibutan!"
    },
    {
        "index": "86",
        "verse": "2 Tesalonica 2:3-4",
        "content": "<sup>3</sup>Huwag kayong padaya kanino man sa anomang paraan: sapagka't ito'y hindi darating, maliban nang dumating mula ang pagtaliwakas, at mahayag ang taong makasalanan, ang anak ng kapahamakan,<br><sup>4</sup>Na sumasalangsang at nagmamataas laban sa lahat na tinatawag na Dios o sinasamba; ano pa't siya'y nauupo sa templo ng Dios, na siya'y nagtatanyag sa kaniyang sarili na tulad sa Dios."
    },
    {
        "index": "87",
        "verse": "1 Corinto 1:19",
        "content": "<sup>19</sup>Sapagka't nasusulat, Iwawalat ko ang karunungan ng marurunong, At isasawala ko ang kabaitan ng mababait."
    },
    {
        "index": "88",
        "verse": "Ezekiel 18:4",
        "content": "<sup>4</sup>Narito, lahat ng kaluluwa ay akin; kung paano ang kaluluwa ng ama, gayon din ang kaluluwa ng anak ay akin: ang kaluluwa na nagkakasala ay mamamatay."
    },
    {
        "index": "89",
        "verse": "Apocalipsis 13:16",
        "content": "<sup>16</sup>At ang lahat, maliliit at malalaki, at mayayaman at mga dukha, at ang mga laya at ang mga alipin ay pinabigyan ng isang tanda sa kanilang kanang kamay, o sa noo;"
    },
    {
        "index": "90",
        "verse": "2 Cronica 15:3",
        "content": "<sup>3</sup>Ngayon nga ang Israel ay malaon nang walang Dios na tunay at walang tagapagturong saserdote, at walang kautusan:"
    },
    {
        "index": "91",
        "verse": "Gawa 20:25,29",
        "content": "<sup>25</sup>At ngayon, narito, nalalaman ko na kayong lahat, na aking nilibot na pinangaralan ng kaharian, ay hindi na ninyo muling makikita pa ang aking mukha.<br><sup>29</sup>Aking talastas na pagalis ko ay magsisipasok sa inyo ang mga ganid na lobo, na hindi mangagpapatawad sa kawan;"
    },
    {
        "index": "92",
        "verse": "Apocalipsis 17:1,5,15",
        "content": "<sup>1</sup>At dumating ang isa sa pitong anghel na may pitong mangkok, at nagsalita sa akin, na nagsasabi, Pumarito ka, ipakikita ko sa iyo ang hatol sa bantog na patutot na nakaupo sa maraming tubig;<br><sup>5</sup>At sa kaniyang noo ay nakasulat ang isang pangalan, HIWAGA, DAKILANG BABILONIA, INA NG MGA PATUTOT AT NG MGA KASUKLAMSUKLAM SA LUPA.<br><sup>15</sup>At sinabi niya sa akin, Ang tubig na iyong nakita, na kinauupuan ng patutot, ay mga bayan, at mga karamihan, at mga bansa, at mga wika."
    },
    {
        "index": "93",
        "verse": "Gawa 20:37-38",
        "content": "<sup>37</sup>At silang lahat ay nagsipanangis nang di kawasa at nangagsiyakap sa leeg ni Pablo at siya'y hinagkan nila.<br><sup>38</sup>Na ikinahahapis ng lalo sa lahat ang salitang sinabi niya, na hindi na nila makikitang muli pa ang kaniyang mukha. At kanilang inihatid siya sa kaniyang paglalakbay hanggang sa daong."
    },
    {
        "index": "94",
        "verse": "2 Timoteo 4:6-8",
        "content": "<sup>6</sup>Sapagka't ako'y iniaalay na, at ang panahon ng aking pagpanaw ay dumating na.<br><sup>7</sup>Nakipagbaka ako ng mabuting pakikipagbaka, natapos ko na ang aking takbo, iningatan ko ang pananampalataya:<br><sup>8</sup>Buhat ngayon ay natataan sa akin ang putong na katuwiran, na ibibigay sa akin ng Panginoon na tapat na hukom sa araw na yaon; at hindi lamang sa akin, kundi sa lahat din naman ng mga naghahangad sa kaniyang pagpapakita."
    },
    {
        "index": "95",
        "verse": "Apocalipsis 18:2,4",
        "content": "<sup>2</sup>At siya'y sumigaw ng malakas na tinig, na nagsasabi, Naguho, naguho ang dakilang Babilonia, at naging tahanan ng mga demonio, at kulungan ng bawa't espiritung karumaldumal, at kulungan ng bawa't karumaldumal at kasuklamsuklam na mga ibon.<br><sup>4</sup>At narinig ko ang ibang tinig na mula sa langit, na nagsasabi, Mangagsilabas kayo sa kaniya, bayan ko, upang huwag kayong mangaramay sa kaniyang mga kasalanan, at huwag kayong magsitanggap ng kaniyang mga salot:"
    },
    {
        "index": "96",
        "verse": "Exodo 20:3-5",
        "content": "<sup>3</sup>Huwag kang magkakaroon ng ibang mga dios sa harap ko.<br><sup>4</sup>Huwag kang gagawa para sa iyo ng larawang inanyuan o ng kawangis man ng anomang anyong nasa itaas sa langit, o ng nasa ibaba sa lupa, o ng nasa tubig sa ilalim ng lupa:<br><sup>5</sup>Huwag mong yuyukuran sila, o paglingkuran man sila; sapagka't akong Panginoon mong Dios, ay Dios na mapanibughuin, na aking dinadalaw ang katampalasanan ng mga magulang sa mga anak, hanggang sa ikatlo at ikaapat na salin ng lahi ng mga napopoot sa akin;"
    },
    {
        "index": "97",
        "verse": "Roma 1:23,25",
        "content": "<sup>23</sup>At pinalitan nila ang kaluwalhatian ng Dios na hindi nasisira, ng isang katulad ng larawan ng tao na nasisira, at ng mga ibon, at ng mga hayop na may apat na paa, at ng mga nagsisigapang.<br><sup>25</sup>Sapagka't pinalitan nila ang katotohanan ng Dios ng kasinungalingan, at sila'y nagsisamba at nangaglingkod sa nilalang kay sa Lumalang, na siyang pinupuri magpakailan man.  Siya nawa."
    },
    {
        "index": "98",
        "verse": "Roma 1:28-31",
        "content": "<sup>28</sup>At palibhasa'y hindi nila minagaling na kilalanin ang Dios, ibinigay sila ng Dios sa isang mahalay na pagiisip, upang gawin yaong mga bagay na hindi nangararapat;<br><sup>29</sup>Nangapuspus sila ng buong kalikuan, ng kasamaan, ng kasakiman, ng kahalayan; puspos ng kapanaghilian, ng pagpatay sa kapuwa tao, ng pagtatalo, ng pagdaraya, ng mga kasamaan; mga mapagupasala,<br><sup>30</sup>Mga mapanirang puri, mga napopoot sa Dios, mga manglalait, mga palalo, mga mapagmapuri, mga mangangatha ng mga kasamaan, mga masuwayin sa mga magulang,<br><sup>31</sup>Mga haling, mga hindi tapat sa tipanan, mga walang katutubong paggiliw, mga walang habag:"
    },
    {
        "index": "99",
        "verse": "Hebreo 7:27",
        "content": "<sup>27</sup>Na hindi nangangailangan araw-araw na maghandog ng hain, na gaya niyaong mga dakilang saserdote una-una'y patungkol sa kaniyang sariling mga kasalanan at saka patungkol sa mga kasalanan ng bayan: sapagka't ito'y ginawa niyang minsan magpakailan man, nang kaniyang ihandog ang kaniyang sarili."
    },
    {
        "index": "100",
        "verse": "Hebreo 10:10-11",
        "content": "<sup>10</sup>Sa kaloobang yaon tayo'y pinapaging-banal, sa pamamagitan ng pagkahandog ng katawan ni Cristo na minsan magpakailan man.<br><sup>11</sup>At katotohanang ang bawa't saserdote na araw-araw ay nangangasiwa ng patayo at naghahandog na madalas ng gayon ding mga hain, na hindi makaalis kailan pa man ng mga kasalanan:"
    },
    {
        "index": "101",
        "verse": "Mateo 26:26-28",
        "content": "<sup>26</sup>At samantalang sila'y nagsisikain, ay dumampot si Jesus ng tinapay, at pinagpala, at pinagputolputol; at ibinigay sa mga alagad, at sinabi, Kunin ninyo, kanin ninyo; ito ang aking katawan.<br><sup>27</sup>At dumampot siya ng isang saro, at nagpasalamat, at ibinigay sa kanila, na nagsasabi, Magsiinom kayong lahat diyan;<br><sup>28</sup>Sapagka't ito ang aking dugo ng tipan, na nabubuhos dahil sa marami, sa ikapagpapatawad ng mga kasalanan."
    },
    {
        "index": "102",
        "verse": "Hebreo 7:24-25",
        "content": "<sup>24</sup>Datapuwa't siya, sapagka't namamalagi magpakailan man ay may pagkasaserdote siyang di mapapalitan.<br><sup>25</sup>Dahil dito naman siya'y nakapagliligtas na lubos sa mga nagsisilapit sa Dios sa pamamagitan niya, palibhasa'y laging nabubuhay siya upang mamagitan sa kanila."
    },
    {
        "index": "103",
        "verse": "Hebreo 13:8",
        "content": "<sup>8</sup>Si Jesucristo ay siya ring kahapon at ngayon, oo at magpakailan man."
    },
    {
        "index": "104",
        "verse": "Awit 32:5",
        "content": "<sup>5</sup>Aking kinilala ang aking kasalanan sa iyo, At ang aking kasamaan ay hindi ko ikinubli: Aking sinabi, Aking ipahahayag ang aking pagsalangsang sa Panginoon; At iyong ipinatawad ang kasamaan ng aking kasalanan.<hr><b>KJV</b><br><sup>5</sup>I acknowledge my sin unto thee, and mine iniquity have I not hid, I said, I will confess my transgressions unto the LORD; and thou forgavest the iniquity of my sin. Selah."
    },
    {
        "index": "105",
        "verse": "1 Juan 1:9",
        "content": "<sup>9</sup>Kung ipinahahayag natin ang ating mga kasalanan, ay tapat at banal siya na tayo'y patatawarin sa ating mga kasalanan, at tayo'y lilinisin sa lahat ng kalikuan."
    },
    {
        "index": "106",
        "verse": "1 Timoteo 2:5",
        "content": "<sup>5</sup>Sapagka't may isang Dios at may isang Tagapamagitan sa Dios at sa mga tao, ang taong si Cristo Jesus,"
    },
    {
        "index": "107",
        "verse": "Awit 88:5",
        "content": "<sup>5</sup>Nakahagis sa gitna ng mga patay, Gaya ng napatay na nakahiga sa libingan, Na hindi mo na inaalaala; At sila'y mangahiwalay sa iyong kamay."
    },
    {
        "index": "108",
        "verse": "Gawa 2:29,34",
        "content": "<sup>29</sup>Mga kapatid, malayang masasabi ko sa inyo ang tungkol sa patriarkang si David, na siya'y namatay at inilibing, at nasa atin ang kaniyang libingan hanggang sa araw na ito.<br><sup>34</sup>Sapagka't hindi umakyat si David sa mga langit; datapuwa't siya rin ang nagsabi, Sinabi ng Panginoon sa aking Panginoon; Maupo ka sa kanan ko,"
    },
    {
        "index": "109",
        "verse": "Awit 86:2",
        "content": "<sup>2</sup>Ingatan mo ang aking kaluluwa; sapagka't ako'y banal: Oh ikaw na Dios ko, iligtas mo ang iyong lingkod na tumitiwala sa iyo."
    },
    {
        "index": "110",
        "verse": "Job 14:10,12",
        "content": "<sup>10</sup>Nguni't ang tao ay namamatay at natutunaw; Oo, ang tao ay nalalagutan ng hininga, at saan nandoon siya?<br><sup>12</sup>Gayon ang tao ay nabubuwal at hindi na bumabangon: Hanggang sa ang langit ay mawala, sila'y hindi magsisibangon, Ni mangagigising man sa kanilang pagkakatulog."
    },
    {
        "index": "111",
        "verse": "2 Pedro 3:7,10",
        "content": "<sup>7</sup>Nguni't ang sangkalangitan ngayon at ang lupa, sa pamamagitan ng gayon ding salita ay iningatang talaga sa apoy, na itinataan sa araw ng paghuhukom at ng paglipol sa mga taong masama.<br><sup>10</sup>Datapuwa't darating ang araw ng Panginoon na gaya ng magnanakaw; na ang sangkalangitan sa araw na iyan ay mapaparam na kasabay ng malaking ugong, at ang mga bagay sa langit ay mapupugnaw sa matinding init, at ang lupa at ang mga gawang nasa lupa ay pawang masusunog."
    },
    {
        "index": "112",
        "verse": "Eclesiastes 9:5-6",
        "content": "<sup>5</sup>Sapagka't nalalaman ng mga buhay, na sila'y mangamamatay: nguni't hindi nalalaman ng patay ang anomang bagay ni mayroon pa man silang kagantihan; sapagka't ang alaala sa kanila ay nakalimutan.<br><sup>6</sup>Maging ang kanilang pagibig, gaya ng kanilang pagtatanim at ng kanilang pananaghili ay nawala ngayon; na wala man silang anomang bahagi pa na magpakailan man sa anomang bagay na nagawa sa ilalim ng araw."
    },
    {
        "index": "113",
        "verse": "Awit 146:4",
        "content": "<sup>4</sup>Ang hininga niya ay pumapanaw, siya'y nanunumbalik sa kaniyang pagkalupa; Sa araw ding yaon ay mawawala ang kaniyang pagiisip."
    },
    {
        "index": "114",
        "verse": "Mateo 25:31-34,41",
        "content": "<sup>31</sup>Datapuwa't pagparito ng Anak ng tao na nasa kaniyang kaluwalhatian, na kasama niya ang lahat ng mga anghel, kung magkagayo'y luluklok siya sa luklukan ng kaniyang kaluwalhatian:<br><sup>32</sup>At titipunin sa harap niya ang lahat ng mga bansa: at sila'y pagbubukdinbukdin niya na gaya ng pagbubukodbukod ng pastor sa mga tupa at sa mga kambing;<br><sup>33</sup>At ilalagay niya ang mga tupa sa kaniyang kanan, datapuwa't sa kaliwa ang mga kambing.<br><sup>34</sup>Kung magkagayo'y sasabihin ng Hari sa nangasa kaniyang kanan, Magsiparito kayo, mga pinagpala ng aking Ama, manahin ninyo ang kahariang nakahanda sa inyo buhat nang itatag ang sanglibutan:<br><sup>41</sup>Kung magkagayo'y sasabihin naman niya sa mga nasa kaliwa, Magsilayo kayo sa akin, kayong mga sinumpa, at pasa apoy na walang hanggan na inihanda sa diablo at sa kaniyang mga anghel:"
    },
    {
        "index": "115",
        "verse": "Juan 10:16",
        "content": "<sup>16</sup>At mayroon akong ibang mga tupa, na hindi sa kulungang ito: sila'y kailangan din namang dalhin ko, at kanilang diringgin ang aking tinig; at sila'y magiging isang kawan, at magkakaroon ng isang pastor."
    },
    {
        "index": "116",
        "verse": "Gawa 2:47",
        "content": "<sup>47</sup>Na nangagpupuri sa Dios, at nangagtatamo ng paglingap ng buong bayan.  At idinaragdag sa kanila ng Panginoon araw-araw yaong nangaliligtas.<hr><b>KJV</b><br><sup>47</sup>Praising God, and having favour with all the people. And the Lord added to the church daily such as should be saved."
    },
    {
        "index": "117",
        "verse": "Roma 9:24",
        "content": "<sup>24</sup>Maging sa atin na kaniya namang tinawag, hindi lamang mula sa mga Judio, kundi naman mula sa mga Gentil?"
    },
    {
        "index": "118",
        "verse": "Isaias 43:5-6",
        "content": "<sup>5</sup>Huwag kang matakot, sapagka't ako'y sumasaiyo: aking dadalhin ang iyong lahi mula sa silanganan, at pipisanin kita mula sa kalunuran;<br><sup>6</sup>Aking sasabihin sa hilagaan, Bayaan mo, at sa timugan, Huwag mong pigilin; dalhin mo rito ang aking mga anak na lalake na mula sa malayo, at ang aking mga anak na babae na mula sa wakas ng lupa;<hr><b>Moffatt</b><br><sup>5</sup>Mula sa malayong silangan dadalhin ko ang iyong lahi, at mula sa malayong kanluran titipunin kita."
    },
    {
        "index": "119",
        "verse": "Isaias 59:19",
        "content": "<sup>19</sup>Sa gayo'y katatakutan nila ang pangalan ng Panginoon mula sa kalunuran, at ang kaniyang kaluwalhatian ay mula sa sikatan ng araw sapagka't siya'y darating na parang bugso ng tubig na pinayaon ng hinga ng Panginoon.<hr><b>Moffatt</b><br><sup>19</sup>Hanggang sa malayong kanluran katatakutan ng mga tao ang Walang Hanggang Panginoon, at sa silangan makikita nila ang kaniyang kamangha-manghang gawa: paghihiganti ay darating na parang bugso ng tubig na pinayaon ng napakalakas na hangin."
    },
    {
        "index": "120",
        "verse": "Mateo 24:3,33",
        "content": "<sup>3</sup>At samantalang siya'y nakaupo sa bundok ng mga Olivo, ay nagsilapit sa kaniya ng bukod ang mga alagad, na nagsisipagsabi, Sabihin mo sa amin, kailan mangyayari ang mga bagay na ito? at ano ang magiging tanda ng iyong pagparito, at ng katapusan ng sanglibutan?<br><sup>33</sup>Gayon din naman kayo, pagka nangakita ninyo ang lahat ng mga bagay na ito, ay talastasin ninyo na siya'y malapit na, nasa mga pintuan nga."
    },
    {
        "index": "121",
        "verse": "Lucas 10:16",
        "content": "<sup>16</sup>Ang nakikinig sa inyo, ay sa akin nakikinig; at ang nagtatakuwil sa inyo ay ako ang itinatakuwil: at ang nagtatakuwil sa akin ay itinatakuwil ang sa aki'y nagsugo."
    },
    {
        "index": "122",
        "verse": "Juan 13:20",
        "content": "<sup>20</sup>Katotohanan, katotohanang sinasabi ko sa inyo, Ang tumatanggap sa sinoman sinusugo ko ay ako ang tinatanggap; at ang tumatanggap sa akin ay tinatanggap ang nagsugo sa akin."
    },
    {
        "index": "123",
        "verse": "Mateo 7:24-25",
        "content": "<sup>24</sup>Kaya't ang bawa't dumirinig ng aking mga salitang ito at ginaganap, ay matutulad sa isang taong matalino, na itinayo ang kaniyang bahay sa ibabaw ng bato:<br><sup>25</sup>At lumagpak ang ulan, at bumaha, at humihip ang mga hangin, at hinampas ang bahay na yaon; at hindi nabagsak: sapagka't natatayo sa ibabaw ng bato."
    },
    {
        "index": "124",
        "verse": "Gawa 4:10-11",
        "content": "<sup>10</sup>Talastasin ninyong lahat, at ng buong bayan ng Israel, na sa pangalan ni Jesucristong taga Nazaret, na inyong ipinako sa krus, na binuhay ng Dios na maguli sa mga patay, dahil sa kaniya ay nakatindig ang taong ito sa inyong harap na walang sakit.<br><sup>11</sup>Siya ang bato na itinakuwil, ninyong mga nagtayo ng bahay, na naging pangulo sa panulok."
    },
    {
        "index": "125",
        "verse": "Mateo 16:18",
        "content": "<sup>18</sup>At sinasabi ko naman sa iyo, na ikaw ay Pedro, at sa ibabaw ng batong ito ay itatayo ko ang aking iglesia; at ang mga pintuan ng Hades ay hindi magsisipanaig laban sa kaniya."
    },
    {
        "index": "126",
        "verse": "Roma 8:16-17",
        "content": "<sup>16</sup>Ang Espiritu rin ang nagpapatotoo kasama ng ating espiritu, na tayo'y mga anak ng Dios:<br><sup>17</sup>At kung mga anak, ay mga tagapagmana nga; mga tagapagmana sa Dios, at mga kasamang tagapagmana ni Cristo; kung gayon nga makipagtiis tayo sa kaniya, upang tayo'y lumuwalhati namang kasama niya."
    },
    {
        "index": "127",
        "verse": "Isaias 41:9-10",
        "content": "<sup>9</sup>Ikaw na aking hinawakan mula sa mga wakas ng lupa, at tinawag kita mula sa mga sulok niyaon, at pinagsabihan kita, Ikaw ay aking lingkod, aking pinili ka at hindi kita itinakuwil;<br><sup>10</sup>Huwag kang matakot, sapagka't ako'y sumasaiyo; huwag kang manglupaypay, sapagka't ako'y iyong Dios; aking palalakasin ka; oo, aking tutulungan ka; oo, aking aalalayan ka ng kanang kamay ng aking katuwiran."
    },
    {
        "index": "128",
        "verse": "Roma 1:16-17",
        "content": "<sup>16</sup>Sapagka't hindi ko ikinahihiya ang evangelio: sapagka't siyang kapangyarihan ng Dios sa ikaliligtas ng bawa't sumasampalataya; una'y sa Judio, at gayon din sa Griego.<br><sup>17</sup>Sapagka't dito ang katuwiran ng Dios ay nahahayag mula sa pananampalataya hanggang sa pananampalataya: gaya ng nasusulat, Nguni't ang ganap ay mabubuhay sa pamamagitan ng pananampalataya."
    },
    {
        "index": "129",
        "verse": "Isaias 41:14",
        "content": "<sup>14</sup>Huwag kang matakot, ikaw na uod na Jacob, at kayong mga tao ng Israel; aking tutulungan ka; sabi ng Panginoon, at ang iyong Manunubos ay ang Banal ng Israel."
    },
    {
        "index": "130",
        "verse": "Judas 1:23 ",
        "content": "<sup>23</sup>At ang iba'y inyong iligtas, na agawin ninyo sa apoy; at ang iba'y inyong kahabagan na may takot; na inyong kapootan pati ng damit na nadungisan ng laman."
    },
    {
        "index": "131",
        "verse": "Awit 107:11",
        "content": "<sup>11</sup>Sapagka't sila'y nanghimagsik laban sa mga salita ng Dios, At hinamak ang payo ng Kataastaasan:"
    },
    {
        "index": "132",
        "verse": "Juan 6:44",
        "content": "<sup>44</sup>Walang taong  makalalapit sa akin, maliban nang  ang Amang nagsugo  sa akin ang sa  kaniya'y magdala sa akin;  at siya'y aking ibabangon sa huling araw."
    },
    {
        "index": "133",
        "verse": "Roma 10:14-15",
        "content": "<sup>14</sup>Paano nga silang magsisitawag doon sa hindi nila sinampalatayanan? at paano silang magsisisampalataya sa kaniya na hindi nila napakinggan? at paano silang mangakikinig na walang tagapangaral?<br><sup>15</sup>At paano silang magsisipangaral kung hindi sila mga sinugo? gaya nga ng nasusulat, Anong pagkaganda ng mga paa niyaong mga nagdadala ng masasayang balita ng mga bagay na mabuti!"
    },
    {
        "index": "134",
        "verse": "Roma 16:25",
        "content": "<sup>25</sup>At ngayon sa kaniya na makapangyarihan na sa inyo'y makapagpapatibay ayon sa aking evangelio at sa pangangaral ni Jesucristo, ayon sa pahayag ng hiwaga na natago sa katahimikan nang panahong walang hanggan."
    },
    {
        "index": "135",
        "verse": "2 Timoteo 3:7",
        "content": "<sup>7</sup>Na laging nagsisipagaral, at kailan pa man ay hindi nakararating sa pagkaalam ng katotohanan."
    },
    {
        "index": "136",
        "verse": "2 Pedro 3:16",
        "content": "<sup>16</sup>Gayon din naman sa lahat ng kaniyang mga sulat, na doo'y sinasalita ang mga bagay na ito; na doo'y may ilang bagay na mahirap unawain, na isinisinsay ng mga di nakaaalam at ng mga walang tiyaga, na gaya rin naman ng kanilang ginagawa sa ibang mga kasulatan, sa ikapapahamak din nila."
    },
    {
        "index": "137",
        "verse": "Apocalipsis 7:1-3",
        "content": "<sup>1</sup>At pagkatapos nito ay nakita ko ang apat na anghel na nakatayo sa apat na sulok ng lupa, na pinipigil ang apat na hangin ng lupa, upang huwag humihip ang hangin sa lupa, o sa dagat man, o sa anomang punong kahoy.<br><sup>2</sup>At nakita ko ang ibang anghel na umaakyat mula sa sikatan ng araw, na taglay ang tatak ng Dios na buhay: at siya'y sumigaw ng tinig na malakas sa apat na anghel na pinagkaloobang maipahamak ang lupa at ang dagat,<br><sup>3</sup>Na nagsasabi, Huwag ninyong ipahamak ang lupa, kahit ang dagat, kahit ang mga punong kahoy, hanggang sa aming matatakan sa kanilang mga noo ang mga alipin ng ating Dios."
    },
    {
        "index": "138",
        "verse": "Lucas 1:19",
        "content": "<sup>19</sup>At pagsagot ng anghel ay sinabi sa kaniya, Ako'y si Gabriel, na nananayo sa harapan ng Dios; at ako'y sinugo upang makipagusap sa iyo, at magdala sa iyo nitong mabubuting balita."
    },
    {
        "index": "139",
        "verse": "Efeso 1:13-14",
        "content": "<sup>13</sup>Na sa kaniya'y kayo rin naman, pagkarinig ng aral ng katotohanan, ng evangelio ng inyong kaligtasan, na sa kaniya rin naman, mula nang kayo'y magsisampalataya, ay kayo'y tinatakan ng Espiritu Santo, na ipinangako,<br><sup>14</sup>Na siyang patotoo sa ating mana, hanggang sa ikatutubos ng sariling pagaari ng Dios, sa ikapupuri ng kaniyang kaluwalhatian."
    },
    {
        "index": "140",
        "verse": "2 Corinto 5:18-20",
        "content": "<sup>18</sup>Datapuwa't ang lahat ng mga bagay ay pawang sa Dios, na pinakipagkasundo tayo sa kaniya rin sa pamamagitan ni Cristo, at ibinigay sa amin ang ministerio sa pagkakasundo;<br><sup>19</sup>Sa makatuwid baga'y, na ang Dios kay Cristo ay pinakipagkasundo ang sanglibutan sa kaniya rin, na hindi ibinibilang sa kanila ang kanilang mga kasalanan, at ipinagkatiwala sa amin ang salita ng pagkakasundo.<br><sup>20</sup>Kami nga'y mga sugo sa pangalan ni Cristo, na waring namamanhik ang Dios sa pamamagitan namin: kayo'y pinamamanhikan namin sa pangalan ni Cristo, na kayo'y makipagkasundo sa Dios."
    },
    {
        "index": "141",
        "verse": "1 Juan 1:3",
        "content": "<sup>3</sup>Yaong aming nakita at narinig ay siya rin naming ibinabalita sa inyo, upang kayo naman ay magkaroon ng pakikisama sa amin: oo, at tayo ay may pakikisama sa Ama, at sa kaniyang Anak na si Jesucristo."
    },
    {
        "index": "142",
        "verse": "Juan 15:18-21",
        "content": "<sup>18</sup>Kung kayo'y kinapopootan ng sanglibutan, ay inyong talastas na ako muna ang kinapootan bago kayo.<br><sup>19</sup>Kung kayo'y taga sanglibutan, ay iibigin ng sanglibutan ang kaniyang sarili: nguni't sapagka't kayo'y hindi taga sanglibutan, kundi kayo'y hinirang ko sa sanglibutan, kaya napopoot sa inyo ang sanglibutan.<br><sup>20</sup>Alalahanin ninyo ang salitang sa inyo'y aking sinabi, Ang alipin ay hindi dakila kay sa kaniyang panginoon. Kung ako'y kanilang pinaguusig, kayo man ay kanilang paguusigin din; kung tinupad nila ang aking salita, ang inyo man ay tutuparin din.<br><sup>21</sup>Datapuwa't ang lahat ng mga bagay na ito ay gagawin nila sa inyo dahil sa aking pangalan, sapagka't hindi nila nakikilala ang sa akin ay nagsugo."
    },
    {
    	   "index": "143",
    	   "verse": "Mateo 5:10-12",
    	   "content": "<sup>10</sup>Mapapalad ang mga pinaguusig dahil sa katuwiran: sapagka't kanila ang kaharian ng langit.<br><sup>11</sup>Mapapalad kayo pagka kayo'y inaalimura, at kayo'y pinaguusig, at kayo'y pinagwiwikaan ng sarisaring masama na pawang kasinungalingan, dahil sa akin.<br><sup>12</sup>Mangagalak kayo, at mangagsayang totoo: sapagka't malaki ang ganti sa inyo sa langit: sapagka't gayon din ang kanilang pagkausig sa mga propeta na nangauna sa inyo."
    },
    {
    	   "index": "144",
    	   "verse": "Mateo 10:36-37",
    	   "content": "<sup>36</sup>At ang magiging kaaway ng tao ay ang kaniya ring sariling kasangbahay.<br><sup>37</sup>Ang umiibig sa ama o sa ina ng higit kay sa akin ay hindi karapatdapat sa akin; at ang umiibig sa anak na lalake o anak na babae ng higit kay sa akin ay hindi karapatdapat sa akin."
    },
    {
    	   "index": "145",
    	   "verse": "1 Pedro 4:14-16",
    	   "content": "<sup>14</sup>Kung kayo'y mapintasan dahil sa pangalan ni Cristo, ay mapapalad kayo; sapagka't ang Espiritu ng kaluwalhatian at ang Espiritu ng Dios ay nagpapahingalay sa inyo.<br><sup>15</sup>Nguni't huwag magbata ang sinoman sa inyo na gaya ng mamamatay-tao, o magnanakaw, o manggagawa ng masama,o gaya ng mapakialam sa mga bagay ng iba:<br><sup>16</sup>Nguni't kung ang isang tao ay magbata na gaya ng Cristiano, ay huwag mahiya; kundi luwalhatiin ang Dios sa pangalang ito."
    },
    {
    	   "index": "146",
    	   "verse": "Marcos 8:38",
    	   "content": "<sup>38</sup>Sapagka't ang sinomang magmakahiya sa akin at sa aking mga salita sa lahing ito na mapangalunya at makasalanan, ay ikahihiya rin naman siya ng Anak ng tao, pagparito niyang nasa kaluwalhatian ng kaniyang Ama na kasama ng mga banal na anghel."
    },
    {
    	   "index": "147",
    	   "verse": "Gawa 5:40-42",
    	   "content": "<sup>40</sup>At sila'y nagsisangayon sa kaniya: at pagkatawag nila sa mga apostol, ay pinalo nila at ibinala sa kanila na huwag silang mangagsalita sa pangalan ni Jesus, at sila'y pinawalan.<br><sup>41</sup>Sila nga'y nagsialis sa harapan ng Sanedrin, na nangatutuwang sila'y nangabibilang na karapatdapat na mangagbata ng kaalimurahan dahil sa Pangalan.<br><sup>42</sup>At sa araw-araw, sa templo at sa mga bahay-bahay, ay hindi sila nagsipagtigil ng pagtuturo at pangangaral, na si Jesus ang siyang Cristo."
    },
    {
    	   "index": "148",
    	   "verse": "Daniel 6:7-10",
    	   "content": "<sup>7</sup>Ang lahat ng pangulo ng kaharian, ang mga kinatawan at mga satrapa, ang mga kasangguni at ang mga gobernador ay nangagsanggunian upang magtatag ng isang palatuntunang hari sa kaharian, at upang maglagda ng isang pasiyang mahigpit, na sinomang humingi ng isang kahilingan sa kanino mang dios o tao sa loob ng tatlong pung araw, liban sa iyo, Oh hari, ihahagis sa yungib ng mga leon.<br><sup>8</sup>Ngayon, Oh hari, papagtibayin mo ang pasiya, at lagdaan mo ng iyong pangalan ang kasulatan upang huwag mabago ayon sa kautusan ng mga taga Media at mga taga Persia, na hindi nababago.<br><sup>9</sup>Kaya't ang kasulatan at ang pasiya ay nilagdaan ng pangalan ng haring Dario.<br><sup>10</sup>At nang maalaman ni Daniel na ang kasulatan ay nalagdaan ng pangalan siya'y pumasok sa kaniyang bahay (ang kaniya ngang mga dungawan ay bukas sa dakong Jerusalem); at siya'y lumuhod ng kaniyang mga tuhod na makaitlo isang araw, at dumalangin, at nagpasalamat sa harap ng kaniyang Dios, gaya ng kaniyang dating ginagawa."
    },
    {
    	   "index": "149",
    	   "verse": "Lucas 18:28-30",
    	   "content": "<sup>28</sup>At sinabi ni Pedro, Narito, iniwan namin ang aming sarili, at nagsisunod sa iyo.<br><sup>29</sup>At sinabi niya sa kanila, Katotohanang sinasabi ko sa inyo, Walang taong nagiwan ng bahay, o asawang babae, o mga kapatid, o mga magulang o mga anak, dahil sa kaharian ng Dios,<br><sup>30</sup>Na di tatanggap ng makapupung higit sa panahong ito, at sa sanglibutang darating, ng walang hanggang buhay."
    },
    {
    	   "index": "150",
    	   "verse": "2 Tesalonica 1:4-5",
    	   "content": "<sup>4</sup>Ano pa't kami sa aming sarili ay nangagkakapuri sa inyo sa mga iglesia ng Dios dahil sa inyong pagtitiis at pananampalataya sa lahat ng mga kapighatiang inyong tinitiis;<br><sup>5</sup>Na isang tandang hayag ng matuwid na paghukom ng Dios; upang kayo'y ariing karapatdapat sa kaharian ng Dios, na dahil dito'y nangagbabata rin naman kayo."
    },
    {
        "index": "151",
        "verse": "Apocalipsis 7:13-17",
        "content": "<sup>13</sup>At sumagot ang isa sa matatanda na, nagsasabi sa akin, Ang mga ito na nangadaramtan ng mapuputing damit, ay sino-sino at saan nagsipanggaling?<br><sup>14</sup>At sinabi ko sa kaniya, Panginoon ko, Ikaw ang nakakaalam.  At sinabi niya sa akin, Ang mga ito'y ang nanggaling sa malaking kapighatian, at nangaghugas ng kanilang mga damit, at pinaputi sa dugo ng Cordero.<br><sup>15</sup>Kaya't sila'y nasa harapan ng luklukan ng Dios; at nangaglilingkod sa kaniya araw at gabi sa kaniyang templo: at siyang nakaupo sa luklukan, ay lulukuban sila ng kaniyang tabernakulo.<br><sup>16</sup>Sila'y hindi na magugutom pa, ni mauuhaw pa man; ni hindi na sila tatamaan ng araw, o ng anomang init:<br><sup>17</sup>Sapagka't ang Cordero na nasa gitna ng luklukan ay siyang magiging pastor nila, at sila'y papatnugutan sa mga bukal ng tubig ng buhay: at papahirin ng Dios ang bawa't luha ng kanilang mga mata."
    },
    {
        "index": "152",
        "verse": "Roma 5:2",
        "content": "<sup>2</sup>Sa pamamagitan din naman niya'y nangagkaroon tayo ng ating pagpasok sa pamamagitan ng pananampalataya sa biyayang ito na diyan ay nagsisilagi tayo; at nangagagalak tayo sa pagasa ng kaluwalhatian ng Dios."
    },
    {
        "index": "153",
        "verse": "Hebreo 11:6",
        "content": "At kung walang pananampalataya ay hindi maaaring maging kalugodlugod sa kaniya; sapagka't ang lumalapit sa Dios ay dapat sumampalatayang may Dios, at siya ang tagapagbigay ganti sa mga sa kaniya'y nagsisihanap."
    },
    {
        "index": "154",
        "verse": "Juan 3:18",
        "content": "<sup>18</sup>Ang sumasampalataya sa kaniya ay hindi hinahatulan; ang hindi sumasampalataya ay hinatulan na, sapagka't hindi siya sumasampalataya sa pangalan ng bugtong na Anak ng Dios."
    },
    {
        "index": "155",
        "verse": "Apocalipsis 21:8",
        "content": "<sup>8</sup>Nguni't sa mga duwag, at sa mga hindi mananampalataya, at sa mga kasuklamsuklam, at sa mga mamamatay-tao, at sa mga mapakiapid, at sa mga manggagaway, at sa mga mapagsamba sa diosdiosan, at sa lahat na mga sinungaling, ang kanilang bahagi ay sa dagatdagatang nagniningas sa apoy at asupre; na siyang ikalawang kamatayan."
    },
    {
        "index": "156",
        "verse": "Juan 6:25-26",
        "content": "<sup>25</sup>At nang siya'y kanilang masumpungan sa kabilang ibayo ng dagat, ay kanilang sinabi sa kanila, Rabi, kailan ka dumating dito?<br><sup>26</sup>Sinagot sila ni Jesus at sinabi, Katotohanan, katotohanang sinasabi ko sa inyo, Ako'y inyong hinahanap, hindi sa inyong nangakitang mga tanda, kundi dahil sa kayo'y nagsikain ng tinapay, at kayo'y nangabusog."
    },
    {
        "index": "157",
        "verse": "Juan 6:27-29",
        "content": "<sup>27</sup>Magsigawa kayo hindi dahil sa pagkaing napapanis, kundi dahil sa pagkaing tumatagal sa buhay na walang hanggan, na ibibigay sa inyo ng Anak ng tao: sapagka't siyang tinatakan ng Ama, sa makatuwid baga'y ang Dios.<br><sup>28</sup>Sinabi nga nila sa kaniya, Ano ang kinakailangan naming gawin, upang aming magawa ang mga gawa ng Dios?<br><sup>29</sup>Sumagot si Jesus at sa kanila'y sinabi, Ito ang gawa ng Dios, na inyong sampalatayanan yaong kaniyang sinugo."
    },
    {
        "index": "158",
        "verse": "Juan 6:64,66",
        "content": "<sup>64</sup>Datapuwa't may ilan sa inyong hindi nagsisisampalataya.  Sapagka't  talastas na ni Jesus buhat pa nang una kung sino-sino ang hindi nagsisisampalataya, at kung sino ang sa kaniya'y magkakanulo.<br><sup>66</sup>Dahil dito'y marami sa kaniyang mga alagad ay nagsitalikod, at hindi na nagsisama sa kaniya."
    },
    {
        "index": "159",
        "verse": "Juan 6:60-61",
        "content": "<sup>60</sup>Marami nga sa kaniyang mga alagad, nang kanilang marinig ito, ay nangagsabi, Matigas ang pananalitang ito; sino ang makaririnig noon?<br><sup>61</sup>Datapuwa't pagkaalam ni Jesus sa kaniyang sarili na nagbubulongbulungan ang kaniyang mga alagad tungkol dito, sa kanila'y sinabi, Ito baga'y nakapagpapatisod sa inyo?"
    },
    {
        "index": "160",
        "verse": "Juan 6:67-69",
        "content": "<sup>67</sup>Sinabi nga ni Jesus sa labingdalawa, Ibig baga ninyong magsialis din naman?<br><sup>68</sup>Sinagot siya ni Simon Pedro, Panginoon, kanino kami magsisiparoon? ikaw ang may mga salita ng buhay na walang hanggan.<br><sup>69</sup>At kami'y nagsisisampalataya at nakikilala namin na ikaw ang Banal ng Dios."
    },
    {
        "index": "161",
        "verse": "Hebreo 11:1",
        "content": "<sup>1</sup>Ngayon, ang pananampalataya ay siyang kapanatagan sa mga bagay na hinihintay, ang katunayan ng mga bagay na hindi nakikita."
    },
    {
        "index": "162",
        "verse": "Roma 4:18-21",
        "content": "<sup>18</sup>Siya na sumampalataya na nasa pagasa laban sa pagasa, upang maging ama ng maraming bansa ayon sa sabi, Magiging gayon ang iyong binhi.<br><sup>19</sup>At hindi humina sa pananampalataya na ipinalagay man ang kaniyang katawang tulad sa patay na (gayon siya'y may mga isang daang taon na), at ang pagkabaog ng bahay-bata ni Sara;<br><sup>20</sup>Kundi, sa pagtingin niya sa pangako ng Dios, ay hindi nag-alinlangan sa pamamagitan ng di pananampalataya, kundi lumakas ng lumakas sa pamamagitan ng pananampalataya, na niluluwalhati ang Dios,<br><sup>21</sup>At lubos nanalig na ang Dios na nangako ay may kapangyarihang makagawa noon."
    },
    {
        "index": "163",
        "verse": "Colosas 1:23",
        "content": "<sup>23</sup>Kung tunay na kayo'y mamamalagi sa pananampalataya, na nababaon at matitibay, at di makilos sa pag-asa sa evangelio na inyong narinig, na ipinangaral sa lahat ng mga nilalang sa silong ng langit;  na dito akong si Pablo ay ginawang ministro."
    },
    {
        "index": "164",
        "verse": "Mateo 7:26-27",
        "content": "<sup>26</sup>At ang bawa't dumirinig ng aking mga salitang ito at hindi ginaganap, ay matutulad sa isang taong mangmang, na itinayo ang kaniyang bahay sa buhanginan:<br><sup>27</sup>At lumagpak ang ulan, at bumaha, at humihip ang mga hangin, at hinampas ang bahay na yaon; at nabagsak: at kakilakilabot ang kaniyang pagkabagsak."
    },
    {
        "index": "165",
        "verse": "Juan 14:1-2",
        "content": "<sup>1</sup>Huwag magulumihanan ang inyong puso: magsisampalataya kayo sa Dios, magsisampalataya naman kayo sa akin.<br><sup>2</sup>Sa bahay ng aking Ama ay maraming tahanan; kung di gayon, ay sinabi ko sana sa inyo; sapagka't ako'y paroroon upang ipaghanda ko kayo ng dakong kalalagyan."
    },
    {
        "index": "166",
        "verse": "Marcos 16:15-16",
        "content": "<sup>15</sup>At sinabi niya sa kanila, Magsiyaon kayo sa buong sanglibutan, at inyong ipangaral ang evangelio sa lahat ng kinapal.<br><sup>16</sup>Ang sumasampalataya at mabautismuhan ay maliligtas; datapuwa't ang hindi sumasampalataya ay parurusahan."
    },
    {
        "index": "167",
        "verse": "Juan 6:29",
        "content": "<sup>29</sup>Sumagot si Jesus at sa kanila'y sinabi, Ito ang gawa ng Dios, na inyong sampalatayanan yaong kaniyang sinugo."
    },
    {
        "index": "168",
        "verse": "Mateo 3:17",
        "content": "<sup>17</sup>At narito, ang isang tinig na mula sa mga langit, na nagsasabi, Ito ang sinisinta kong Anak, na siya kong lubos na kinalulugdan."
    },
    {
        "index": "169",
        "verse": "Gawa 2:36",
        "content": "<sup>36</sup>Pakatalastasin nga ng buong angkan ni Israel, na ginawa ng Dios na Panginoon at Cristo itong si Jesus na inyong ipinako sa krus."
    },
    {
        "index": "170",
        "verse": "Gawa 5:31",
        "content": "<sup>31</sup>Siya'y pinadakila ng Dios ng kaniyang kanang kamay upang maging Principe at Tagapagligtas, upang magbigay ng pagsisisi sa Israel, at kapatawaran ng mga kasalanan."
    },
    {
        "index": "171",
        "verse": "Efeso 1:20-22",
        "content": "<sup>20</sup>Na kaniyang ginawa kay Cristo, nang ito'y kaniyang buhaying maguli sa mga patay, at pinaupo sa kaniyang kanan sa sangkalangitan,<br><sup>21</sup>Sa kaibaibabawan ng lahat na pamunuan, at kapamahalaan, at kapangyarihan, at pagkasakop, at sa bawa't pangalan na ipinangungusap, hindi lamang sa sanglibutang ito, kundi naman sa darating:<br><sup>22</sup>At ang lahat ng mga bagay ay pinasuko niya sa ilalim ng kaniyang mga paa, at siyang pinagkaloobang maging pangulo ng lahat ng mga bagay sa iglesia,"
    },
    {
        "index": "172",
        "verse": "Filipos 2:9-11",
        "content": "<sup>9</sup>Kaya siya naman ay pinakadakila ng Dios, at siya'y binigyan ng pangalang lalo sa lahat ng pangalan;<br><sup>10</sup>Upang sa pangalan ni Jesus ay iluhod ang lahat ng tuhod, ng nangasa langit, at ng nangasa ibabaw ng lupa, at ng nangasa ilalim ng lupa,<br><sup>11</sup>At upang ipahayag ng lahat ng mga dila na si Jesucristo ay Panginoon, sa ikaluluwalhati ng Dios Ama."
    },
    {
        "index": "173",
        "verse": "Filipos 2:5,8",
        "content": "<sup>5</sup>Mangagkaroon kayo sa inyo ng pagiisip, na ito'y na kay Cristo Jesus din naman.<br><sup>8</sup>At palibhasa'y nasumpungan sa anyong tao, siya'y nagpakababa sa kaniyang sarili, na nagmasunurin hanggang sa kamatayan, oo, sa kamatayan sa krus."
    },
    {
        "index": "174",
        "verse": "1 Corinto 15:27-28",
        "content": "<sup>27</sup>Sapagka't kaniyang pinasuko ang lahat ng mga bagay sa ilalim ng kaniyang paa. Datapuwa't kung sinasabi, ang lahat ng mga bagay ay pinasuko, ay maliwanag na itinangi yaong nagpasuko ng lahat ng mga bagay sa kaniya.<br><sup>28</sup>At kung ang lahat ng mga bagay ay mapasuko na sa kaniya, kung magkagayo'y ang Anak rin ay pasusukuin naman sa nagpasuko ng lahat ng mga bagay sa kaniya, upang ang Dios ay maging lahat sa lahat."
    },
    {
        "index": "175",
        "verse": "Juan 10:36",
        "content": "<sup>36</sup>Sinasabi baga ninyo tungkol sa kaniya, na pinabanal ng Ama at sinugo sa sanglibutan, Ikaw ay namumusong; sapagka't sinabi ko, Ako ang anak ng Dios?"
    },
    {
        "index": "176",
        "verse": "Jeremias 33:22",
        "content": "<sup>22</sup>Kung paanong ang lahat na natatanaw sa langit ay hindi mabibilang, o matatakal man ang buhangin sa dagat; gayon ko pararamihin ang binhi ni David na aking lingkod, at ang mga Levita na nagsisipangasiwa sa akin<hr><b>MB</b><br><sup>22</sup>Gaya ng di mabilang na bituin sa kalangitan at ng buhangin sa dagat, gayon ko pararamihin ang mga inapo ng aking lingkod na si David at ng mga Levitang naglilingkod sa akin."
    },
    {
        "index": "177",
        "verse": "Oseas 11:9",
        "content": "<sup>9</sup>Hindi ko isasagawa ang kabangisan ng aking galit, hindi ako babalik upang ipahamak ang Ephraim: sapagka't ako'y Dios, at hindi tao; ang Banal sa gitna mo; at hindi ako paroroon na may galit."
    },
    {
        "index": "178",
        "verse": "Ezekiel 28:2",
        "content": "<sup>2</sup>Anak ng tao, sabihin mo sa prinsipe sa Tiro, Ganito ang sabi ng Panginoong Dios: Sapagka't ang iyong puso ay nagmataas, at iyong  sinabi, Ako'y dios, ako'y nauupo sa upuan ng Dios, sa gitna ng mga dagat; gayon man ikaw ay tao, at hindi Dios, bagaman iyong inilagak ang iyong puso na parang puso ng Dios;"
    },
    {
        "index": "179",
        "verse": "2 Corinto 11:3-4",
        "content": "<sup>3</sup>Nguni't ako'y natatakot, baka sa anomang paraan, kung paanong si Eva ay nadaya ng ahas sa kaniyang katusuhan, ang inyong walang malay at malinis na mga pagiisip na kay Cristo ay pasamain.<br><sup>4</sup>Sapagka't kung yaong paririto ay mangaral ng ibang Jesus, na hindi namin ipinangaral, o kung kayo'y nagsisitanggap ng ibang espiritu na hindi ninyo tinanggap, o ibang evangelio na hindi ninyo tinanggap, ay mabuting pagtiisan ninyo."
    },
    {
        "index": "180",
        "verse": "Awit 90:2",
        "content": "<sup>2</sup>Bago nalabas ang mga bundok, O bago mo nilikha ang lupa at ang sanglibutan, Mula nga ng walang pasimula hanggang sa walang hanggan, ikaw ang Dios."
    },
    {
        "index": "181",
        "verse": "Juan 8:40,42",
        "content": "<sup>40</sup>Datapuwa't ngayo'y pinagsisikapan ninyo akong patayin, na taong sa inyo'y nagsaysay ng katotohanan, na aking narinig sa Dios: ito'y hindi ginawa ni Abraham.<br><sup>42</sup>Sinabi sa kanila ni Jesus, Kung ang Dios ang inyong ama, ay inyong iibigin ako: sapagka't ako'y nagmula at nanggaling sa Dios; sapagka't hindi ako naparito sa aking sarili, kundi sinugo niya ako."
    },
    {
        "index": "182",
        "verse": "1 Timoteo 1:17",
        "content": "<sup>17</sup>Ngayon sa Haring walang hanggan, walang kamatayan, di nakikita, sa iisang Dios, ay ang kapurihan at kaluwalhatian magpakailan kailan man. Siya nawa."
    },
    {
        "index": "183",
        "verse": "Juan 19:30,33",
        "content": "<sup>30</sup>Nang matanggap nga ni Jesus ang suka, ay sinabi niya, Naganap na: at iniyukayok ang kaniyang ulo, at nalagot ang kaniyang hininga.<br><sup>33</sup>Ngunit nang magsiparoon sila kay Jesus, at makitang siya'y patay na, ay hindi na nila inumog ang kaniyang mga hita:"
    },
    {
        "index": "184",
        "verse": "Isaias 44:8",
        "content": "<sup>8</sup>Kayo'y huwag mangatakot, o magsipangilabot man: hindi ko baga ipinahayag sa iyo nang una, at ipinakilala? at kayo ang aking mga saksi.  May Dios baga liban sa akin? oo, walang malaking Bato; ako'y walang nakikilalang iba."
    },
    {
        "index": "185",
        "verse": "Marcos 15:34",
        "content": "<sup>34</sup>At nang oras na ikasiyam ay sumigaw si Jesus ng malakas na tinig: <i>Eloi, Eloi, lama sabacthani?</i> na kung liliwanagin ay, Dios ko, Dios ko, bakit mo ako pinabayaan?"
    },
    {
        "index": "186",
        "verse": "Isaias 40:28",
        "content": "<sup>28</sup>Hindi mo baga naalaman? hindi mo baga narinig? ang walang hanggang Dios, ang Panginoon, ang Maylalang ng mga wakas ng lupa, hindi nanlalata, o napapagod man; walang makatarok ng kaniyang unawa."
    },
    {
        "index": "187",
        "verse": "Juan 4:6",
        "content": "<sup>6</sup>At naroon ang balon ni Jacob.  Si Jesus nga, nang napapagod na sa kaniyang paglalakbay, ay naupong gayon sa tabi ng balon.  Magiikaanim na nga ang oras."
    },
    {
        "index": "188",
        "verse": "Lucas 24:36-37",
        "content": "<sup>36</sup>At samantalang kanilang pinaguusapan ang mga bagay na ito, siya rin ay tumayo sa gitna nila, at sa kanila'y nagsabi, Kapayapaa'y suma inyo.<br><sup>37</sup>Datapuwa't sila'y kinilabutan, at nangahintakutan, at inakala nila na nakakakita sila ng isang espiritu."
    },
    {
        "index": "189",
        "verse": "Lucas 24:38-39",
        "content": "<sup>38</sup>At sinabi niya sa kanila, Bakit kayo'y nangagugulumihanan? at bakit nangyayari ang pagtatalo sa inyong puso?<br><sup>39</sup>Tingnan ninyo ang aking mga kamay at ang aking mga paa, ako rin nga: hipuin ninyo ako, at tingnan; sapagka't ang isang espiritu'y walang laman at mga buto, na gaya ng inyong nakikita na nasa akin."
    },
    {
        "index": "190",
        "verse": "Juan 20:17",
        "content": "<sup>17</sup>Sinabi sa kaniya ni Jesus, Huwag mo akong hipuin; sapagka't hindi pa ako nakakaakyat sa Ama, nguni't pumaroon ka sa aking mga kapatid, at sabihin mo sa kanila, Aakyat ako sa aking Ama at inyong Ama, at aking Dios at inyong Dios."
    },
    {
        "index": "191",
        "verse": "Gawa 2:22-24",
        "content": "<sup>22</sup>Kayong mga lalaking taga Israel, pakinggan ninyo ang mga salitang ito: Si Jesus na taga Nazaret, lalaking pinatunayan ng Dios sa inyo sa pamamagitan ng mga gawang makapangyarihan at mga kababalaghan at mga tanda na ginawa ng Dios sa pamamagitan niya sa gitna ninyo, gaya rin ng nalalaman ninyo;<br><sup>23</sup>Siya, na ibinigay sa takdang pasiya at paunang kaalaman ng Dios, kayo sa pamamagitan ng mga kamay ng mga tampalasan ay inyong ipinako sa krus at pinatay:<br><sup>24</sup>Na siya'y binuhay na maguli ng Dios, pagkaalis sa mga hirap ng kamatayan: sapagka't hindi maaari na siya'y mapigilan nito."
    },
    {
        "index": "192",
        "verse": "Gawa 19:11-12",
        "content": "<sup>11</sup>At gumawa ang Dios ng mga tanging himala sa pamamagitan ng mga kamay ni Pablo:<br><sup>12</sup>Ano pa't ang mga panyo o mga tapi na mapadaiti sa kaniyang katawan ay dinadala sa mga maysakit, at nawawala sa kanila ang mga sakit, at nangagsisilabas ang masasamang espiritu."
    },
    {
        "index": "193",
        "verse": "Juan 5:30",
        "content": "<sup>30</sup>Hindi ako makagagawa ng anoman sa aking sarili: humahatol ako ayon sa aking naririnig: at ang paghatol ko'y matuwid; sapagka't hindi ko pinaghahanap ang aking sariling kalooban, kundi ang kalooban niyaong nagsugo sa akin."
    },
    {
        "index": "194",
        "verse": "Juan 1:1,14",
        "content": "<sup>1</sup>Nang pasimula siya ang Verbo, at ang Verbo ay sumasa Dios, at ang Verbo ay Dios.<br><sup>14</sup>At nagkatawang-tao ang Verbo, at tumahan sa gitna natin (at nakita namin ang kaniyang kaluwalhatian, kaluwalhatin gaya ng sa bugtong ng Ama), na puspos ng biyaya at katotohanan."
    },
    {
        "index": "195",
        "verse": "1 Pedro 1:20",
        "content": "<sup>20</sup>Na nakilala nga nang una bago itinatag ang sanglibutan, nguni't inihayag sa mga huling panahon dahil sa inyo.<hr><b>BTK</b><br><sup>20</sup>Nasa isip na Siya ng Diyos bago pa lalangin ang daigdig nguni't ipinakilala Siya ngayong huling panahon dahil sa inyo."
    },
    {
        "index": "196",
        "verse": "Galacia 4:4",
        "content": "<sup>4</sup>Datapuwa't nang dumating ang kapanahunan, ay sinugo ng Dios ang kaniyang Anak, na ipinanganak ng isang babae, na ipinanganak sa ilalim ng kautusan,"
    },
    {
        "index": "197",
        "verse": "Lucas 1:37",
        "content": "<sup>37</sup>Sapagka't walang salitang mula sa Dios na di may kapangyarihan."
    },
    {
        "index": "198",
        "verse": "Genesis 35:11",
        "content": "<sup>11</sup>At sinabi sa kaniya ng Dios, Ako ang Dios na Makapangyarihan sa lahat; ikaw ay lumago at dumami ka; isang bansa at isang kapisanan ng mga bansa ang magmumula sa iyo, at mga hari ay lalabas sa iyong balakang;"
    },
    {
        "index": "199",
        "verse": "Mateo 1:18,20",
        "content": "<sup>18</sup>Ang pagkapanganak nga kay Jesucristo ay ganito: Nang si Maria na kaniyang ina ay magaasawa kay Jose, bago sila magsama ay nasumpungang siya'y nagdadalang-tao sa pamamagitan ng Espiritu Santo.<br><sup>20</sup>Datapuwa't samantalang pinagiisip niya ito, narito, ang isang anghel ng Panginoon ay napakita sa kaniya sa panaginip, na nagsasabi: Jose, anak ni David, huwag kang mangamba sa pagtanggap kay Maria na iyong asawa: sapagka't ang kaniyang dinadalang-tao ay sa Espiritu Santo."
    },
    {
        "index": "200",
        "verse": "1 Juan 5:20",
        "content": "<sup>20</sup>At nalalaman natin na naparito ang Anak ng Dios, at tayo'y binigyan ng pagkaunawa, upang ating makilala siya na totoo, at tayo'y nasa kaniya na totoo, sa makatuwid ay sa kaniyang Anak na si Jesucristo. Ito ang tunay na Dios, at ang buhay na walang hanggan."
    },
    {
        "index": "201",
        "verse": "Roma 9:5",
        "content": "<sup>5</sup>Na sa kanila ang mga magulang, at sa kanila mula ang Cristo ayon sa laman, na siyang lalo sa lahat, Dios na maluwalhati magpakailan man. Siya nawa.<hr><b>RSV</b><br><sup>5</sup>na sa kanila ang mga magulang, at mula sa kanilang lahi, ayon sa laman, ay ang Cristo. Ang Diyos na nasa ibabaw ng lahat ay purihin magpakailanman. Siya nawa."
    },
    {
        "index": "202",
        "verse": "2 Corinto 1:3",
        "content": "<sup>3</sup>Purihin nawa ang Dios at Ama ng ating Panginoong Jesucristo, ang Ama ng mga kaawaan at Dios ng buong kaaliwan;"
    },
    {
        "index": "203",
        "verse": "Isaias 9:6",
        "content": "<sup>6</sup>Sapagka't sa atin ay ipinanganak ang isang bata, sa atin ay ibinigay ang isang anak na lalake; at ang pamamahala ay maaatang sa kaniyang balikat: at ang kaniyang pangalan ay tatawaging kamanghamangha, Tagapayo, Makapangyarihang Dios, Walang hanggang Ama, Pangulo ng Kapayapaan.<hr><b>JPSA</b><br><sup>6</sup>Sapagka't sa atin ay ipinanganak ang isang bata, sa atin ay ibinigay ang isang anak na lalake: At ang pamamahala ay nasa kaniyang balikat. At ang kaniyang pangalan ay tatawaging <i>Pele-joez-el-gibbor-Abi-ad-shar-Shalom</i><hr><b>JPSA (footnote)</b><br>Alalaong baga'y kamangha-mangha sa pagpapayo ang Diyos na makapangyarihan, ang walang hangggang Ama, ang Pinuno ng kapayapaan.<hr><b>Moffat</b><br><sup>6</sup>Sapagka't sa atin, ay isang batang lalake ay ibinigay sa atin; maharlikang karangalan ay suot niya, at ito ang titulo na taglay niya - Isang kamangha-manghang tagapayo, isang banal na bayani, isang ama para sa lahat ng panahon, isang prinsipe ng kapayapaan."
    },
    {
        "index": "204",
        "verse": "Jeremias 26:2",
        "content": "<sup>2</sup>Ganito ang sabi ng Panginoon, Tumayo ka sa looban ng bahay ng Panginoon at salitain mo sa lahat ng bayan ng Juda, na nagsisiparoon upang magsisamba sa bahay ng Panginoon, ang lahat na salita na iniutos ko sa iyo upang salitain sa kanila; huwag kang magbawas ng kahit isang salita."
    },
    {
        "index": "205",
        "verse": "Isaias 9:7",
        "content": "<sup>7</sup>Ang paglago ng kaniyang pamamahala at ng kapayapaan ay hindi magkakaroon ng wakas, sa luklukan ni David, at sa kaniyang kaharian, upang itatag, at upang alalayan ng kahatulan at ng katuwiran mula ngayon hanggang sa magpakailan man.  Isasagawa ito ng sikap ng Panginoon ng mga hukbo."
    },
    {
        "index": "206",
        "verse": "Mateo 28:18-19",
        "content": "<sup>18</sup>At lumapit si Jesus sa kanila at sila'y kaniyang kinausap, na sinasabi, Ang lahat ng kapamahalaan sa langit at sa ibabaw ng lupa ay naibigay na sa akin.<br><sup>19</sup>Dahil dito magsiyaon nga kayo, at gawin ninyong mga alagad ang lahat ng mga bansa, na sila'y inyong bautismuhan sa pangalan ng Ama at ng Anak at ng Espiritu Santo:"
    },
    {
        "index": "207",
        "verse": "Isaias 53:3",
        "content": "<sup>3</sup>Siya'y hinamak at itinakuwil ng mga tao; isang taong sa kapanglawan, at bihasa sa karamdaman: at gaya ng isa na pinagkublihan ng kanilang mukha ng mga tao, na siya'y hinamak, at hindi natin hinalagahan siya."
    },
    {
        "index": "208",
        "verse": "Juan 14:26",
        "content": "<sup>26</sup>Datapuwa't ang Mangaaliw, sa makatuwid baga'y ang Espiritu Santo, na susuguin ng Ama sa aking pangalan, siya ang magtuturo sa inyo ng lahat ng mga bagay, at magpapaalaala ng lahat na sa inyo'y aking sinabi."
    },
    {
        "index": "209",
        "verse": "Juan 15:26",
        "content": "<sup>26</sup>Datapuwa't pagparito ng Mangaaliw, na aking susuguin sa inyo mula sa Ama, sa makatuwid baga'y ang Espiritu ng katotohanan, na nagbubuhat sa Ama, ay siyang magpapatotoo sa akin:"
    },
    {
        "index": "210",
        "verse": "Apocalipsis 5:6",
        "content": "<sup>6</sup>At nakita ko sa gitna ng luklukan at ng apat na nilalang na buhay, at sa gitna ng matatanda, ang isang Cordero na nakatayo, na wari ay pinatay, na may pitong sungay, at pitong mata, na siyang pitong Espiritu ng Dios, na sinugo sa buong lupa."
    },
    {
        "index": "211",
        "verse": "2 Corinto 5:17",
        "content": "<sup>17</sup>Kaya't kung ang sinoman ay na kay Cristo, siya'y bagong nilalang: ang mga dating bagay ay nagsilipas na; narito, sila'y pawang naging mga bago."
    },
    {
        "index": "212",
        "verse": "Efeso 4:21-22",
        "content": "<sup>21</sup>Kung tunay na siya'y inyong pinakinggan, at kayo'y tinuruan sa kaniya, gaya ng katotohanan na kay Jesus.<br><sup>22</sup>At inyong iwan, tungkol sa paraan ng inyong pamumuhay na nakaraan, ang dating pagkatao, na sumama ng sumama ayon sa mga kahalayan ng pagdaraya;"
    },
    {
        "index": "213",
        "verse": "Efeso 4:23-24",
        "content": "<sup>23</sup>At kayo'y mangagbago sa espiritu ng inyong pagiisip, At kayo'y mangagbihis ng bagong pagkatao, na ayon sa Dios ay nilalang sa katuwiran at sa kabanalan ng katotohanan."
    },
    {
        "index": "214",
        "verse": "1 Corinto 6:9-10",
        "content": "<sup>9</sup>O hindi baga ninyo nalalaman na ang mga liko ay hindi magsisipagmana ng kaharian ng Dios? Huwag kayong padaya: kahit ang mga mapakiapid, ni ang mga mananamba sa diosdiosan, ni ang mga mangangalunya, ni ang mga nangbababae, ni ang mga mapakiapid sa kapuwa lalake.<br><sup>10</sup>Ni ang mga magnanakaw, ni ang mga masasakim, ni ang mga manglalasing, ni ang mga mapagtungayaw, ni ang mga manglulupig, ay hindi mangagmamana ng kaharian ng Dios."
    },
    {
        "index": "215",
        "verse": "Oseas 13:13-14 MB",
        "content": "Ang Israel ay binigyan ko ng pagkakataong magbagong buhay, ngunit tinanggihan. Para siyang batang ayaw lumabas sa sinapupunan. Siya'y anak na suwail at mangmang!<br><sup>14</sup>Hindi ko sila paliligtasin sa impiyerno. Hindi ko sila ililigtas sa kamatayan.  Kamatayan, pahirapan mo sila. Impiyerno, parusahan mo sila. Wala na akong nalalabing awa sa kanila."
    },
    {
        "index": "216",
        "verse": "Job 18:5,18",
        "content": "<sup>5</sup>Oo, ang ilaw ng masama ay papatayin, At ang liyab ng kaniyang apoy ay hindi liliwanag.<br><sup>18</sup>Siya'y ihahatid sa kadiliman mula sa liwanag, At itatapon sa labas ng sanglibutan."
    },
    {
        "index": "217",
        "verse": "Colosas 3:5-9",
        "content": "<sup>5</sup>Patayin nga ninyo ang inyong mga sangkap ng katawang nangasa ibabaw ng lupa, pakikiapid, karumihan, masamang pita, masamang nasa, at kasakiman, na iya'y pagsamba sa mga diosdiosan.<br><sup>6</sup>Na dahil sa mga bagay na iyan ay dumarating ang kagalitan ng Dios sa mga anak ng pagsuway:<br><sup>7</sup>Na inyo ring nilakaran nang una, nang kayo'y nangabubuhay pa sa mga bagay na ito;<br><sup>8</sup>Datapuwa't ngayon ay inyo namang layuan ang lahat ng mga ito: galit, kapootan, paghihinala, panunungayaw, mga salitang kahalay-halay na mula sa inyong bibig:<br><sup>9</sup>Huwag kayong mangagbubulaan sa isa't isa; yamang hinubad na ninyo ang datihang pagkatao pati ng kaniyang mga gawa,"
    },
    {
        "index": "218",
        "verse": "Galacia 5:19-21",
        "content": "<sup>19</sup>At hayag ang mga gawa ng laman, sa makatuwid ay ang mga ito: pakikiapid, karumihan, kalibugan,<br><sup>20</sup>Pagsamba sa diosdiosan, pangkukulam, mga pagtataniman, mga pagtatalo, mga paninibugho, mga pagkakaalitan, mga pagkakampikampi, mga pagkakabahabahagi, mga hidwang pananampalataya,<br><sup>21</sup>Mga kapanaghilian, mga paglalasing, mga kalayawan, at ang mga katulad nito; tungkol sa mga bagay na ito ay aking ipinagpapaunang ipaalaala sa inyo, tulad sa aking pagpapaalaala nang una sa inyo, na ang mga nagsisigawa ng gayong mga bagay ay hindi magsisipagmana ng kaharian ng Dios."
    },
    {
        "index": "219",
        "verse": "Mateo 3:8,10",
        "content": "<sup>8</sup>Kayo nga'y mangagbunga ng karapatdapat sa pagsisisi.<br><sup>10</sup>At ngayon pa'y nakalagay na ang palakol sa ugat ng mga punong kahoy: ang bawa't punong kahoy nga na hindi nagbubungang mabuti ay pinuputol at inihahagis sa apoy."
    },
    {
        "index": "220",
        "verse": "Kawikaan 22:6",
        "content": "<sup>6</sup>Turuan mo ang bata sa daan na dapat niyang lakaran, At pagka tumanda man siya ay hindi niya hihiwalayan."
    },
    {
        "index": "221",
        "verse": "Isaias 55:7",
        "content": "<sup>7</sup>Lisanin ng masama ang kaniyang lakad, at ng liko ang kaniyang mga pagiisip; at manumbalik siya sa Panginoon, at kaaawaan niya siya; at sa aming Dios, sapagka't siya'y magpapatawad ng sagana."
    },
    {
        "index": "222",
        "verse": "Isaias 1:18-20",
        "content": "<sup>18</sup>Magsiparito kayo ngayon, at tayo'y magkatuwiranan, sabi ng Panginoon: bagaman ang inyong mga kasalanan ay maging tila mapula, ay magiging mapuputi na parang niebe; bagaman maging mapulang gaya ng matingkad na pula, ay magiging parang balahibo ng tupa,<br><sup>19</sup>Kung kayo'y magkusa at mangagmasunurin, kayo'y magsisikain ng buti ng lupain:<br><sup>20</sup>Nguni't kung kayo'y magsitanggi at manganghimagsik, kayo'y lilipulin ng tabak: sapagka't sinalita ng bibig ng Panginoon."
    },
    {
        "index": "223",
        "verse": "Hebreo 13:15-16",
        "content": "<sup>15</sup>Sa pamamagitan nga niya ay maghandog tayong palagi ng hain ng pagpupuri sa Dios, sa makatuwid baga, ay ng bunga ng mga labi na nagpapahayag ng kaniyang pangalan.<br><sup>16</sup>Datapuwa't ang paggawa ng mabuti at ang pagabuloy ay huwag ninyong kalimutan: sapagka't sa mga gayong hain ang Dios ay totoong nalulugod."
    },
    {
        "index": "224",
        "verse": "2 Corinto 9:7-8",
        "content": "<sup>7</sup>Magbigay ang bawa't isa ayon sa ipinasiya ng kaniyang puso: huwag mabigat sa loob, o dahil sa kailangan: sapagka't iniibig ng Dios ang nagbibigay na masaya.<br><sup>8</sup>At maaaring gawin ng Dios na ang lahat ng biyaya ay magsisagana sa inyo; upang kayo, na mayroong laging buong kaya sa lahat ay magsipanagana sa bawa't mabuting gawa:"
    },
    {
        "index": "225",
        "verse": "Galacia 6:5-6",
        "content": "<sup>5</sup>Sapagka't ang bawa't tao ay magpapasan ng kaniyang sariling pasan.<br><sup>6</sup>Datapuwa't ang tinuturuan sa aral ng Dios ay makidamay doon sa nagtuturo sa lahat ng mga bagay na mabuti."
    },
    {
        "index": "226",
        "verse": "2 Corinto 9:12-13",
        "content": "<sup>12</sup>Sapagka't ang pangangasiwa sa paglilingkod na ito ay hindi lamang tumatakip sa pangangailangan ng mga banal, kundi naman umaapaw sa pamamagitan ng maraming pagpapasalamat sa Dios;<br><sup>13</sup>Palibhasa'y sa pagsubok sa inyo sa pamamagitan ng ministeriong ito ay niluluwalhati nila ang Dios dahil sa pagtalima ng inyong pagkilala sa evangelio ni Cristo, at dahil sa kagandahang-loob ng inyong ambag sa kanila at sa lahat;"
    },
    {
        "index": "227",
        "verse": "1 Corinto 16:2 NPV",
        "content": "<sup>2</sup>Tuwing unang araw ng sanlinggo, bawat isa sa inyo'y magbukod ng isang halaga ayon sa kanyang kinikita para pagpariyan ko ay hindi na kailangang lumikom pa."
    },
    {
        "index": "228",
        "verse": "2 Corinto 9:2,5",
        "content": "<sup>2</sup>Sapagka't nakikilala ko ang inyong sikap, na aking ipinagmamapuri tungkol sa inyo sa mga taga Macedonia, na ang Acaya ay nahahandang isang taon na; at ang inyong pagsisikap ay nakapagudyok sa lubhang marami sa kanila.<br><sup>5</sup>Iniisip ko ngang kailangang ipamanhik sa mga kapatid, na mangaunang pumariyan sa inyo, at ihanda agad ang inyong abuloy na ipinangako nang una, upang ito'y maihanda na gaya ng abuloy, at hindi gaya ng sapilitan."
    },
    {
        "index": "229",
        "verse": "Hagai 1:8",
        "content": "<sup>8</sup>Magsiahon kayo sa bundok, at mangagdala ng kahoy, at mangagtayo kayo ng bahay; at aking kalulugdan, at ako'y luluwalhati, sabi ng Panginoon."
    },
    {
        "index": "230",
        "verse": "1 Cronica 29:11-12",
        "content": "<sup>11</sup>Iyo, Oh Panginoon ang kadakilaan, at ang kapangyarihan, at ang kaluwalhatian, at ang pagtatagumpay, at ang karangalan: sapagka't lahat na nangasa langit at nangasa lupa ay iyo: iyo ang kaharian, Oh Panginoon, at ikaw ay nataas na pangulo sa lahat.<br><sup>12</sup>Ang mga kayamanan at gayon din ang karangalan ay nangagmumula sa iyo, at ikaw ang nagpupuno sa lahat; at nasa iyong kamay ang kapangyarihan at kalakasan; at nasa iyong kamay ang pagpapadakila, at pagpapalakas sa lahat."
    },
    {
        "index": "231",
        "verse": "1 Cronica 29:9",
        "content": "<sup>9</sup>Nang magkagayo'y nagalak ang bayan, dahil sa sila'y nangaghandog na kusa, sapagka't sila'y may dalisay na puso na nangaghandog na kusa sa Panginoon: at si David naman na hari ay nagalak ng dakilang pagkagalak."
    },
    {
        "index": "232",
        "verse": "2 Corinto 8:1-3",
        "content": "<sup>1</sup>Bukod dito, mga kapatid, ay ipinatatalastas namin sa inyo ang biyaya ng Dios na ipinagkaloob sa mga iglesia ng Macedonia;<br><sup>2</sup>Kung paanong sa maraming pagsubok sa kapighatian ang kasaganaan ng kanilang katuwaan at ang kanilang malabis na karukhaan ay sumagana sa kayamanan ng kanilang kagandahang-loob.<br><sup>3</sup>Sapagka't ayon sa kanilang kaya, ay nagpapatotoo ako at higit pa sa kanilang kaya, ay nagsiabuloy sila sa sariling kalooban,"
    },
    {
        "index": "233",
        "verse": "Awit 50:14,23",
        "content": "<sup>14</sup>Ihandog mo sa Dios ang haing pasasalamat: At tuparin mo ang iyong mga panata sa Kataastaasan.<br><sup>23</sup>Ang naghahandog ng haing pasasalamat ay lumuluwalhati sa akin; At sa kaniya na nagaayos ng kaniyang pakikipagusap Aking ipakikita ang pagliligtas ng Dios."
    },
    {
        "index": "234",
        "verse": "1 Tesalonica 5:18",
        "content": "<sup>18</sup>Sa lahat ng mga bagay ay magpasalamat kayo; sapagka't ito ang kalooban ng Dios kay Cristo tungkol sa inyo."
    },
    {
        "index": "235",
        "verse": "Kawikaan 8:22-23",
        "content": "<sup>22</sup>Inari ako ng Panginoon sa pasimula ng kaniyang lakad, Bago pinasimulan ang kaniyang mga gawa ng una.<br><sup>23</sup>Ako'y nalagay mula noong araw mula ng walang pasimula, Bago nalikha ang lupa."
    },
    {
        "index": "236",
        "verse": "1 Cronica 16:8-9",
        "content": "<sup>8</sup>Oh kayo'y mangagpasalamat sa Panginoon, magsitawag kayo sa kaniyang pangalan; Ipakilala ninyo sa mga bayan ang kaniyang mga gawa.<br><sup>9</sup>Magsiawit kayo sa kaniya, magsiawit kayo ng mga pagpuri sa kaniya; Salitain ninyo ang lahat niyang mga kamanghamanghang gawa."
    },
    {
        "index": "237",
        "verse": "1 Cronica 16:29",
        "content": "<sup>29</sup>Inyong ibigay sa Panginoon ang kaluwalhatiang marapat sa kaniyang pangalan: Mangagdala kayo ng handog, at magsiparoon kayo sa harap niya: Inyong sambahin ang Panginoon sa ganda ng kabanalan."
    },
    {
        "index": "238",
        "verse": "1 Timoteo 6:18-19",
        "content": "<sup>18</sup>Na sila'y magsigawa ng mabuti, na sila'y magsiyaman sa mabuting gawa, na sila'y maging handa sa pamimigay, maibigin sa pamamahagi;<br><sup>19</sup>Na mangagtipon sa kanilang sarili ng isang mabuting kinasasaligan para sa panahong darating, upang sila'y makapanangan sa buhay na tunay na buhay."
    },
    {
        "index": "239",
        "verse": "1 Pedro 2:17",
        "content": "<sup>17</sup>Igalang ninyo ang lahat ng mga tao. Ibigin ninyo ang pagkakapatiran. Mangatakot kayo sa Dios. Igalang ninyo ang hari."
    },
    {
        "index": "240",
        "verse": "Juan 13:34-35",
        "content": "<sup>34</sup>Isang bagong utos ang sa inyo'y ibinibigay ko, na kayo'y mangagibigan sa isa't isa: na kung paanong iniibig ko kayo, ay mangagibigan naman kayo sa isa't isa.<br><sup>35</sup>Sa ganito'y mangakikilala ng lahat ng mga tao na kayo ay aking mga alagad, kung kayo'y may pagibig sa isa't isa."
    },
    {
        "index": "241",
        "verse": "Mateo 23:8-9",
        "content": "<sup>8</sup>Datapuwa't kayo'y huwag patawag na Rabi: sapagka't iisa ang inyong guro, at kayong lahat ay magkakapatid.<br><sup>9</sup>At huwag ninyong tawaging inyong ama ang sinomang tao sa lupa: sapagka't iisa ang inyong ama, sa makatuwid baga'y siya na nasa langit."
    },
    {
        "index": "242",
        "verse": "1 Juan 3:17",
        "content": "<sup>17</sup>Datapuwa't ang sinomang mayroong mga pagaari sa sanglibutang ito, at nakikita ang kaniyang kapatid na nangangailangan, at doo'y ipagkait ang kaniyang awa, paanong mananahan ang pagibig ng Dios sa kaniya?"
    },
    {
        "index": "243",
        "verse": "2 Tesalonica 3:6",
        "content": "<sup>6</sup>Aming inuutos nga sa inyo, mga kapatid, sa pangalan ng ating Panginoong Jesucristo, na kayo'y magsihiwalay sa bawa't kapatid na lumalakad ng walang kaayusan, at hindi ayon sa aral na tinanggap nila sa amin."
    },
    {
        "index": "244",
        "verse": "2 Tesalonica 3:10-12",
        "content": "<sup>10</sup>Sapagka't noon pa mang kami ay kasama ninyo, ay aming iniutos ito sa inyo, Kung ang sinoman ay ayaw gumawa, ay huwag din namang kumain.<br><sup>11</sup>Sapagka't aming nababalitaan ang ilan sa inyo na nagsisilakad ng walang kaayusan, na hindi man lamang nagsisigawa, kundi mga mapakialam sa mga bagay ng iba.<br><sup>12</sup>Sa mga gayon nga ay aming iniuutos at ipinamamanhik sa Panginoong Jesucristo, na sila'y magsigawang may katahimikan, at magsikain ng kanilang sariling tinapay."
    },
    {
        "index": "245",
        "verse": "Santiago 5:9",
        "content": "<sup>9</sup>Huwag kayong mangagupasalaan, mga kapatid, laban sa isa't isa, upang kayo'y huwag mahatulan; narito, ang hukom ay nakatayo sa harapan ng mga pinto."
    },
    {
        "index": "246",
        "verse": "1 Pedro 3:8-10",
        "content": "<sup>8</sup>Katapustapusan, kayong lahat ay mangagkaisang akala, madamayin, mangagibigang tulad sa magkakapatid, mga mahabagin, mga mapagkumbabang pagiisip:<br><sup>9</sup>Na huwag ninyong gantihin ng masama ang masama, o ng alipusta ang pagalipusta; kundi ng pagpapala; sapagka't dahil dito kayo'y tinawag, upang kayo'y mangagmana ng pagpapala.<br><sup>10</sup>Sapagka't, ang magnais umibig sa buhay, At makakita ng mabubuting araw, Ay magpigil ng kaniyang dila sa masama, At ang kaniyang mga labi ay huwag magsalita ng daya:"
    },
    {
        "index": "247",
        "verse": "1 Corinto 6:8",
        "content": "<sup>8</sup>Nguni't kayo rin ang mga nagsisigawa ng kalikuan, at nangagdaraya, at ito'y sa mga kapatid ninyo."
    },
    {
        "index": "248",
        "verse": "1 Corinto 6:4,6 MB",
        "content": "<sup>4</sup>Kung kayo'y may usapin, idudulog pa ba ninyo ito sa mga taong di kinikilala ng iglesya?<br><sup>6</sup>Ano't nagsasakdal pa kayo sa hukuman, kapatid laban sa kapatid, at sa harapan pa ng mga taong walang pananampalataya?"
    },
    {
        "index": "249",
        "verse": "Mateo 18:15-17 MB",
        "content": "<sup>15</sup>Kung magkasala sa iyo ang kapatid mo, puntahan mo siya at kausapin nang sarilinan.  Kapag nakinig siya sa iyo, ang pagsasama ninyong magkapatid ay napapanauli mo sa dati at napapanumbalik mo siya sa Ama.<br><sup>16</sup>Ngunit kung hindi siya makinig sa iyo, magsama ka pa ng isa o dalawang tao upang ang lahat ng pinag-usapan ninyo ay mapatunayan ng dalawa o tatlong saksi.<br><sup>17</sup>Kung hindi siya makinig sa kanila, sabihin mo ito sa iglesya. At kung hindi pa siya makinig sa iglesya, ituring mo siyang Hentil o isang publikano."
    },
    {
        "index": "250",
        "verse": "Efeso 2:11-12",
        "content": "<sup>11</sup>Kaya nga alalahanin ninyo, na kayo noong una, mga Gentil sa laman, tinatawag na Di-pagtutuli niyaong tinatawag na pagtutuli sa laman, na ginawa ng mga kamay:<br><sup>12</sup>Na kayo nang panahong yaon ay mga hiwalay kay Cristo, na mga di kabilang sa bansa ng Israel, at mga taga ibang lupa tungkol sa mga tipan ng pangako, na walang pagasa at walang Dios sa sanglibutan."
    },
    {
        "index": "251",
        "verse": "Mateo 5:23-26",
        "content": "<sup>23</sup>Kaya't kung inihahandog mo ang iyong hain sa dambana, at doo'y maalaala mo na ang iyong kapatid ay mayroong anomang laban sa iyo,<br><sup>24</sup>Iwan mo roon sa harap ng dambana ang hain mo, at yumaon ka ng iyong lakad, makipagkasundo ka muna sa iyong kapatid, at kung magkagayon ay magbalik ka at ihandog mo ang iyong hain.<br><sup>25</sup>Makipagkasundo ka agad sa iyong kaalit, samantalang ikaw ay kasama niya sa daan; baka ibigay ka ng kaalit mo sa hukom, at ibigay ka ng hukom sa punong kawal, at ipasok ka sa bilangguan.<br><sup>26</sup>Katotohanang sinasabi ko sa iyo, Hindi ka aalis doon sa anomang paraan, hanggang hindi mo mapagbayaran ang katapustapusang beles."
    },
    {
        "index": "252",
        "verse": "Efeso 4:32",
        "content": "<sup>32</sup>At magmagandang-loob kayo sa isa't isa, mga mahabagin, na mangagpatawaran kayo sa isa't isa, gaya naman ng pagpapatawad sa inyo ng Dios kay Cristo."
    },
    {
        "index": "253",
        "verse": "1 Juan 3:14-15",
        "content": "<sup>14</sup>Nalalaman nating tayo'y nangalipat na sa buhay mula sa kamatayan, sapagka't tayo'y nagsisiibig sa mga kapatid.  Ang hindi umiibig ay nananahan sa kamatayan.<br><sup>15</sup>Ang sinomang napopoot sa kaniyang kapatid ay mamamatay-tao: at nalalaman ninyong sinomang mamamatay-tao ay hindi pinananahanan ng buhay na walang hanggan."
    },
    {
        "index": "254",
        "verse": "Genesis 9:1-4",
        "content": "<sup>1</sup>At binasbasan ng Dios si Noe  at ang kaniyang mga anak, at sa kanila'y sinabi, Kayo'y magpalaanakin, at magpakarami at inyong kalatan ang lupa.<br><sup>2</sup>At ang takot sa inyo at sindak sa inyo ay mapapasa bawa't hayop sa lupa, at sa bawa't ibon sa himpapawid; lahat ng umuusad sa lupa, at lahat ng isda sa dagat, ay ibinibigay sa inyong kamay.<br><sup>3</sup>Bawa't gumagalaw na nabubuhay ay magiging pagkain ninyo; gaya ng mga sariwang pananim na lahat ay ibinibigay ko sa inyo.<br><sup>4</sup>Ngunit ang lamang may buhay, na siya niyang dugo, ay huwag ninyong kakanin."
    },
    {
        "index": "255",
        "verse": "Gawa 21:25 MB",
        "content": "<sup>25</sup>Tungkol naman sa mga mananampalatayang Hentil, isinulat na namin sa kanila ang aming pasiya: huwag silang kakain ng anumang inihandog sa diyus-diyusan, ng dugo at ng hayop na binigti, at huwag makikiapid."
    },
    {
        "index": "256",
        "verse": "Deuteronomio 12:22-23",
        "content": "<sup>22</sup>Kung paano ang pagkain sa maliit at malaking usa, ay gayon kakanin; ang marumi at ang malinis ay kapuwang makakakain niyaon.<br><sup>23</sup>Lamang ay pagtibayin mong hindi mo kakanin ang dugo: sapagka't ang dugo ay siyang buhay; at huwag mong kakanin ang buhay na kasama ng laman."
    },
    {
        "index": "257",
        "verse": "Levitico 17:11 MB",
        "content": "<sup>11</sup>Sapagkat ang buhay ay nasa dugo at iniuutos ko na dapat ihandog iyon sa dambana bilang pantubos sa inyong buhay."
    },
    {
        "index": "258",
        "verse": "Hebreo 10:1",
        "content": "<sup>1</sup>Sapagka't ang kautusan na may isang anino ng mabubuting bagay na darating, hindi ang tunay na larawan ng mga bagay, kailan pa man ay di maaaring magpasakdal sa mga nagsisilapit sa pamamagitan ng mga hain na laging inihahandog sa taon-taon."
    },
    {
        "index": "259",
        "verse": "Hebreo 6:4-6",
        "content": "<sup>4</sup>Sapagka't tungkol sa mga minsang naliwanagan at nakalasap ng kaloob ng kalangitan, at mga nakabahagi ng Espiritu Santo,<br><sup>5</sup>At nakalasap ng mabuting salita ng Dios, at ng mga kapangyarihan ng panahong darating,<br><sup>6</sup>At saka nahiwalay sa Dios ay di maaaring baguhin silang muli sa pagsisisi; yamang kanilang ipinapapakong muli sa ganang kanilang sarili ang Anak ng Dios, at inilalagay na muli siya sa hayag na kahihiyan."
    },
    {
        "index": "260",
        "verse": "Levitico 17:12-13",
        "content": "<sup>12</sup>Kaya't aking sinabi sa mga anak ni Israel, Sinoman sa inyo ay huwag kakain ng dugo, ni ang taga ibang bayan na nakikipamayan sa inyo ay huwag kakain ng dugo.<br><sup>13</sup>At sinomang tao sa mga anak ni Israel, o sa mga taga ibang bayan na nakikipamayan sa kanila na manghuli ng hayop o ng ibon na makakain; ay ibubuhos niya ang dugo niyaon at tatabunan ng lupa."
    },
    {
        "index": "261",
        "verse": "Levitico 17:10 MB",
        "content": "<sup>10</sup>Ang sinumang kumain ng dugo ay magiging kalaban ko at ititiwalag sa kapulungan, maging Israelita o dayuhan man."
    },
    {
        "index": "262",
        "verse": "2 Corinto 6:14-15",
        "content": "<sup>14</sup>Huwag kayong makipamatok ng kabilan sa mga di nagsisisampalataya: sapagka't anong pakikisama mayroon ang katuwiran at kalikuan? o anong pakikisama mayroon ang kaliwanagan sa kadiliman?<br><sup>15</sup>At anong pakikipagkasundo mayroon si Cristo kay Belial? o anong bahagi mayroon ang sumasampalataya sa di sumasampalataya?<hr><b>Lamsa</b><br><sup>14</sup>Huwag mag-aasawa sa mga hindi sumasampalataya, ..."
    },
    {
        "index": "263",
        "verse": "Deuteronomio 7:2-4",
        "content": "<sup>2</sup>At pagka sila'y, ibibigay sa harap mo ng Panginoon mong Dios, at iyong sasaktan sila; ay lubos mo ngang lilipulin sila; huwag kang makikipagtipan sa kanila, ni huwag mong pagpakitaan ng kaawan sila:<br><sup>3</sup>Ni magaasawa sa kanila; ang iyong anak na babae ay huwag mong papag-asawahin sa kaniyang anak na lalake, ni ang kaniyang anak na babae, ay huwag mong papag-asawahin sa iyong anak na lalake.<br><sup>4</sup>Sapagka't kaniyang ihihiwalay ang iyong anak na lalake sa pagsunod sa akin, upang sila'y maglingkod sa ibang mga dios: sa gayo'y magaalab ang galit ng Panginoon laban sa iyo, at kaniyang lilipulin kang madali."
    },
    {
        "index": "264",
        "verse": "Nehemias 13:26-27",
        "content": "<sup>26</sup>Hindi ba nagkasala si Salomon na hari sa Israel sa pamamagitan ng mga bagay na ito? gayon man sa gitna ng maraming bansa ay walang haring gaya niya; at siya'y minahal ng kaniyang Dios, at ginawa siyang hari ng Dios sa buong Israel: gayon ma'y pinapagkasala rin siya ng mga babaing taga ibang lupa.<br><sup>27</sup>Didinggin nga ba namin kayo na inyong gawin ang lahat na malaking kasamaang ito, na sumalangsang laban sa ating Dios sa pagaasawa sa mga babaing taga ibang lupa?"
    },
    {
        "index": "265",
        "verse": "1 Juan 2:15",
        "content": "<sup>15</sup>Huwag ninyong ibigin ang sanglibutan, ni ang mga bagay na nasa sanglibutan. Kung ang sinoman ay umiibig sa sanglibutan, ay wala sa kaniya ang pagibig ng Ama."
    },
    {
        "index": "266",
        "verse": "Mateo 15:4",
        "content": "<sup>4</sup>Sapagka't sinabi ng Dios, Igalang mo ang iyong ama at ang iyong ina: at, Ang manungayaw sa ama at sa ina, ay mamatay siyang walang pagsala."
    },
    {
        "index": "267",
        "verse": "Gawa 2:38-39",
        "content": "<sup>38</sup>At sinabi sa kanila ni Pedro, Mangagsisi kayo, at mangagbautismo ang bawa't isa sa inyo sa pangalan ni Jesucristo sa ikapagpapatawad ng inyong mga kasalanan; at tatanggapin ninyo ang kaloob ng Espiritu Santo.<br><sup>39</sup>Sapagka't sa inyo ang pangako, at sa inyong mga anak, at sa lahat ng nangasa malayo, maging ilan man ang tawagin ng Panginoon nating Dios sa kaniya."
    },
    {
        "index": "268",
        "verse": "Roma 6:3-5 MB",
        "content": "<sup>3</sup>Hindi ba ninyo nalalaman na tayong lahat na nabautismuhan kay Cristo Jesus ay nabautismuhan sa kanyang kamatayan?<br><sup>4</sup>Samakatwid, tayo'y namatay at nalibing na kasama niya sa pamamagitan ng bautismo upang kung paanong binuhay na muli si Cristo sa pamamagitan ng dakilang kapangyarihan ng Ama, tayo nama'y mabuhay sa isang bagong pamumuhay.<br><sup>5</sup>Sapagkat kung nakaisa tayo ni Cristo sa isang kamatayang tulad ng kanyang kamatayan, tiyak na makakaisa niya tayo sa isang muling pagkabuhay tulad ng kanyang pagkabuhay."
    },
    {
        "index": "269",
        "verse": "Juan 3:23 MB",
        "content": "<sup>23</sup>Si Juan ay nagbabautismo rin naman sa Enon, malapit sa Salim, sapagka't maraming tubig doon. Pumupunta sa kanya ang mga tao at nagpapabautismo."
    },
    {
        "index": "270",
        "verse": "Gawa 8:38",
        "content": "<sup>38</sup>At ipinagutos niyang itigil ang karo: at sila'y kapuwa lumusong sa tubig, si Felipe at ang bating; at kaniyang binautismuhan siya."
    },
    {
        "index": "271",
        "verse": "Deuteronomio 12:32",
        "content": "<sup>32</sup>Kung anong bagay ang iniuutos ko sa iyo, ay siya mong isasagawa: huwag mong dadagdagan, ni babawasan."
    },
    {
	   "index": "272",
	   "verse": "1 Juan 3:4 ",
	   "content": "<sup>4</sup>Ang sinomang gumagawa ng kasalanan ay sumasalangsang din naman sa kautusan: at ang kasalanan ay ang pagsalangsang sa kautusan."
	},
	{
	    "index": "273",
	    "verse": "Mateo 19:13-14",
	    "content": "<sup>13</sup>Nang magkagayon ay dinala sa kaniya ang maliliit na bata, upang ipatong niya ang kaniyang mga kamay sa kanila, at ipanalangin: at sinaway sila ng mga alagad.<br><sup>14</sup>Datapuwa't sinabi ni Jesus, Pabayaan ninyo ang maliliit na bata, at huwag ninyong pagbawalan silang magsilapit sa akin: sapagka't sa mga ganito ang kaharian ng langit."
	 },
	 {
	     "index": "274",
	     "verse": "Roma 6:6,11 MB",
	     "content": "<sup>6</sup>Alam natin na ang dati nating pagkatao ay ipinakong kasama niya upang mamatay ang makasalanang katawan at nang hindi na tayo maalipin pa ng kasalanan.<br><sup>11</sup>Kaya dapat ninyong ibilang ang inyong sarili na patay na sa kasalanan datapwat buhay naman para sa Diyos sa inyong pakikipag-isa kay Cristo Jesus."
	 },
	 {
	 	"index": "275",
	 	"verse": "Efeso 4:12",
	 	"content": "<sup>12</sup>Sa ikasasakdal ng mga banal, sa gawaing paglilingkod sa ikatitibay ng katawan ni Cristo:"
	 },
	 {
	 	"index": "276",
	 	"verse": "Galacia 3:27",
	 	"content": "<sup>27</sup>Sapagka't ang lahat na sa inyo ay binautismuhan kay Cristo ay ibinihis si Cristo."
	 },
	 {
	 	"index": "277",
	 	"verse": "Galacia 2:20",
	 	"content": "<sup>20</sup>Ako'y napako sa krus na kasama ni Cristo; at hindi na ako ang nabubuhay, kundi si Cristo ang nabubuhay sa akin: at ang buhay na ikinabubuhay ko ngayon sa laman ay ikinabubuhay ko sa pananampalataya, ang pananampalataya na ito'y sa Anak ng Dios, na sa akin ay umibig, at ibinigay ang kaniyang sarili dahil sa akin."
	 },
	 {
	 	"index": "278",
	 	"verse": "Mateo 5:13-14",
	 	"content": "<sup>13</sup>Kayo ang asin ng lupa: nguni't kung ang asin ay tumabang, ay ano ang ipagpapaalat? wala nang ano pa mang kabuluhan, kundi upang itapon sa labas at yurakan ng mga tao.<br><sup>14</sup>Kayo ang ilaw ng sanglibutan. Ang isang bayan na natatayo sa ibabaw ng isang bundok ay hindi maitatago."
	 },
	 {
	 	"index": "279",
	 	"verse": "Mateo 5:15-16",
	 	"content": "<sup>15</sup>Hindi rin nga pinaniningasan ang isang ilawan, at inilalagay sa ilalim ng isang takalan, kundi sa talagang lalagyan ng ilaw; at lumiliwanag sa lahat ng nangasa bahay.<br><sup>16</sup>Lumiwanag na gayon ang inyong ilaw sa harap ng mga tao; upang mangakita nila ang inyong mabubuting gawa, at kanilang luwalhatiin ang inyong Ama na nasa langit."
	 },
	 {
	 	"index": "280",
	 	"verse": "Roma 8:21",
	 	"content": "<sup>21</sup>Na ang buong nilalang naman ay magiging laya mula sa pagkaalipin ng kabulukan sa kalayaang maluwalhati ng mga anak ng Dios."
	 },
	 {
	 	"index": "281",
	 	"verse": "Juan 4:28-30",
	 	"content": "<sup>28</sup>Sa gayo'y iniwan ng babae ang kaniyang banga ng tubig, at napasa bayan, at sinabi sa mga tao,<br><sup>29</sup>Magsiparito kayo, tingnan ninyo ang isang lalake, na nagsabi sa akin ng lahat ng mga bagay na aking ginawa: mangyayari kayang ito ang Cristo?<br><sup>30</sup>Nagsilabas sila sa bayan, at nagsisiparoon sa kaniya."
	 },
	 {
	 	"index": "282",
	 	"verse": "Juan 4:39,41-42",
	 	"content": "<sup>39</sup>At marami sa mga Samaritano sa bayang yaon ang sa kaniya'y nagsisampalataya dahil sa salita ng babae, na nagpatotoo, Sinabi niya sa akin ang lahat ng mga bagay na aking ginawa.<br><sup>41</sup>At lalo pang marami ang mga nagsisampalataya sa kaniya dahil sa kaniyang salita;<br><sup>42</sup>At sinabi nila sa babae, Ngayo'y nagsisisampalataya kami, hindi dahil sa iyong pananalita: sapagka't kami rin ang nakarinig, at nalalaman naming ito nga ang Tagapagligtas ng sanglibutan."
	 },
	 {
	 	"index": "283",
	 	"verse": "Lucas 18:1",
	 	"content": "<sup>1</sup>At sinalita niya sa kanila ang isang talinghaga, na sila'y dapat magsipanalanging lagi, at huwag manganglupaypay;"
	 },
	 {
	 	"index": "284",
	 	"verse": "Mateo 26:41",
	 	"content": "<sup>41</sup>Kayo'y mangagpuyat at magsipanalangin, upang huwag kayong magsipasok sa tukso: ang espiritu sa katotohanan ay may ibig, datapuwa't mahina ang laman."
	 },
	 {
	 	"index": "285",
	 	"verse": "Filipos 4:6",
	 	"content": "<sup>6</sup>Huwag kayong mangabalisa sa anomang bagay; kundi sa lahat ng mga bagay sa pamamagitan ng panalangin at daing na may pagpapasalamat ay ipakilala ninyo ang inyong mga kahilingan sa Dios."
	 },
	 {
	 	"index": "286",
	 	"verse": "Santiago 5:14-15",
	 	"content": "<sup>14</sup>May sakit baga ang sinoman sa inyo? ipatawag niya ang mga matanda sa iglesia; at ipanalangin nila siya, na pahiran nila ng langis sa pangalan ng Panginoon:<br><sup>15</sup>At ang panalangin ng pananampalataya ay magliligtas sa may sakit, at ibabangon siya ng Panginoon; at kung nagkasala siya, ay ipatatawad sa kaniya."
	 },
	 {
	 	"index": "287",
	 	"verse": "Awit 55:17",
	 	"content": "<sup>17</sup>Sa hapon at sa umaga, at sa katanghaliang tapat, ako'y dadaing at hihibik: At kaniyang didinggin ang aking tinig."
	 },
	 {
	 	"index": "288",
	 	"verse": "1 Corinto 10:31",
	 	"content": "<sup>31</sup>Kaya kung kayo'y nagsisikain man, o nagsisiinom man o anoman ang inyong ginagawa, gawin ninyo ang lahat sa ikaluluwalhati ng Dios."
	 },
	 {
	 	"index": "289",
	 	"verse": "Gawa 10:2",
	 	"content": "<sup>2</sup>Isang taong masipag sa kabanalan at matatakutin sa Dios siya at ang buong sangbahayan at naglimos ng marami sa mga tao, at laging nananalangin sa Dios."
	 },
	 {
	 	"index": "290",
	 	"verse": "Marcos 11:24",
	 	"content": "<sup>24</sup>Kaya nga sinasabi ko sa inyo, Ang lahat ng mga bagay na inyong idinadalangin at hinihingi, ay magsisampalataya kayo na inyong tinanggap na, at inyong kakamtin."
	 },
	 {
	 	"index": "291",
	 	"verse": "Santiago 1:6-8",
	 	"content": "<sup>6</sup>Nguni't humingi siyang may pananampalataya, na walang anomang pagaalinlangan: sapagka't yaong nagaalinlangan ay katulad ng isang alon ng dagat na itinutulak ng hangin at ipinapadpad sa magkabikabila.<br><sup>7</sup>Sapagka't huwag isipin ng taong yaon na siya'y tatanggap ng anoman bagay sa Panginoon;<br><sup>8</sup>Ang taong may dalawang akala, ay walang tiyaga sa lahat ng kaniyang mga paglakad."
	 },
	 {
	 	"index": "292",
	 	"verse": "1 Juan 3:22",
	 	"content": "<sup>22</sup>At anomang ating hingin ay tinatanggap natin sa kaniya, sapagka't tinutupad natin ang kaniyang mga utos at ginagawa natin ang mga bagay na kalugodlugod sa kaniyang paningin."
	 },
	 {
	 	"index": "293",
	 	"verse": "Santiago 4:3",
	 	"content": "<sup>3</sup>Kayo'y nagsisihingi, at hindi kayo nagsisitanggap, sapagka't nagsisihingi kayo ng masama, upang gugulin sa inyong mga kalayawan."
	 },
	 {
	 	"index": "294",
	 	"verse": "Lucas 17:5",
	 	"content": "<sup>5</sup>At sinabi ng mga apostol sa Panginoon, Dagdagan mo ang pananampalataya namin."
	 },
	 {
	 	"index": "295",
	 	"verse": "Mateo 6:7-8",
	 	"content": "<sup>7</sup>At sa pananalangin ninyo ay huwag ninyong gamitin ang walang kabuluhang paulitulit, na gaya ng ginagawa ng mga Gentil: sapagka't iniisip nilang dahil sa kanilang maraming kasasalita ay didinggin sila.<br><sup>8</sup>Huwag nga kayong magsigaya sa kanila: sapagka't talastas ng inyong Ama ang mga bagay na inyong kinakailangan, bago ninyo hingin sa kaniya."
	 },
	 {
	 	"index": "296",
	 	"verse": "Hebreo 4:14,16",
	 	"content": "<sup>14</sup>Yaman ngang tayo'y mayroong isang lubhang dakilang saserdote, na pumasok sa kalangitan, si Jesus na Anak ng Dios, ay ingatan nating matibay ang ating pagkakilala.<br><sup>16</sup>Magsilapit nga tayong may pagkakatiwala sa luklukan ng biyaya, upang tayo'y magsipagtamo ng awa, at mangakasumpong ng biyaya upang tumulong sa atin sa panahon ng pangangailangan."
	 },
	 {
	 	"index": "297",
	 	"verse": "Mateo 6:11-12 MB",
	 	"content": "<sup>11</sup>Bigyan mo kami ng pagkaing kailangan namin sa araw na ito;<br><sup>12</sup>At patawarin mo kami sa aming mga kasalanan, Tulad ng aming pagpapatawad sa mga nagkakasala sa amin."
	 },
	 {
	 	"index": "298",
	 	"verse": "Juan 15:16",
	 	"content": "<sup>16</sup>Ako'y hindi ninyo hinirang, nguni't kayo'y hinirang ko, at aking kayong inihalal, upang kayo'y magsiyaon at magsipagbunga, at upang manatili  ang inyong bunga: upang ang anomang inyong hingin sa Ama sa aking pangalan, ay maibigay niya sa inyo."
	 },
	 {
	 	"index": "299",
	 	"verse": "Hebreo 13:17 MB",
	 	"content": "<sup>17</sup>Pasakop kayo sa mga nangangasiwa sa inyo. Sila'y may pananagutang magbantay sa inyo, at magbibigay-sulit sila sa Diyos ukol dito. Kung sila'y susundin ninyo, magagalak sila sa pagtupad ng kanilang tungkulin. Kung hindi, sila'y mahahapis, at hindi ito makabubuti sa inyo."
	 },
	 {
	 	"index": "300",
	 	"verse": "Colosas 1:25",
	 	"content": "<sup>25</sup>Na ako'y ginawang ministro nito, ayon sa pamamahala na mula sa Dios na ibinigay sa akin para sa  inyo upang maipahayag  ang salita ng Dios."
	 },
	 {
	 	"index": "301",
	 	"verse": "1 Corinto 16:15-16",
	 	"content": "<sup>15</sup>Ipinamamanhik ko nga sa inyo, mga kapatid (nalalaman ninyo na ang sangbahayan ni Estefanas ay siyang pangunahing bunga ng Acaya, at nangagsitalaga sa paglilingkod sa mga banal),<br><sup>16</sup>Na kayo'y pasakop naman sa mga gayon, at sa bawa't tumutulong sa gawa at nagpapagal."
	 },
	 {
	 	"index": "302",
	 	"verse": "Efeso 4:7,11-12",
	 	"content": "<sup>7</sup>Datapuwa't ang bawa't isa sa atin ay binigyan ng biyaya ayon sa sukat na kaloob ni Cristo.<br><sup>11</sup>At pinagkalooban niya ang mga iba na maging mga apostol; at ang mga iba'y propeta; at ang mga iba'y evangelista; at ang mga iba'y pastor at mga guro;<br><sup>12</sup>Sa ikasasakdal ng mga banal, sa gawaing paglilingkod sa ikatitibay ng katawan ni Cristo:"
	 },
	 {
	 	"index": "303",
	 	"verse": "Mateo 18:18",
	 	"content": "<sup>18</sup>Katotohanang sinasabi ko sa inyo, na ang lahat ng mga bagay na inyong talian sa lupa ay tatalian sa langit: at ang lahat ng mga bagay na inyong kalagan sa lupa ay kakalagan sa langit."
	 },
	 {
	 	"index": "304",
	 	"verse": "Kawikaan 3:3,1",
	 	"content": "<sup>3</sup>Huwag kang pabayaan ng kaawaan at katotohanan: Itali mo sa palibot ng iyong leeg; Ikintal mo sa iyong puso.<br><sup>1</sup>Anak ko, huwag mong kalimutan ang aking kautusan; Kundi ingatan ng iyong puso ang aking mga utos:"
	 },
	 {
	 	"index": "305",
	 	"verse": "Gawa 16:4",
	 	"content": "<sup>4</sup>At sa kanilang pagtahak sa mga bayan, ay ibinigay sa kanila ang mga utos na inilagda ng mga apostol at ng mga matanda sa Jerusalem, upang kanilang tuparin."
	 },
	 {
	 	"index": "306",
	 	"verse": "Daniel 12:1",
	 	"content": "<sup>1</sup>At sa panahong yaon ay tatayo si Miguel, na dakilang prinsipe na tumatayo sa ikabubuti ng mga anak ng iyong bayan; at magkakaroon ng panahon ng kabagabagan, na hindi nangyari kailan man mula nang magkaroon ng bansa hanggang sa panahong yaon: at sa panahong yaon ay maliligtas ang iyong bayan, bawa't isa na masusumpungan na nakasulat sa aklat."
	 },
	 {
	 	"index": "307",
	 	"verse": "Apocalipsis 20:12",
	 	"content": "<sup>12</sup>At nakita ko ang mga patay, malalaki at maliliit, na nangakatayo sa harapan ng luklukan; at nangabuksan ang mga aklat: at nabuksan ang ibang aklat, na siyang aklat ng buhay: at ang mga patay ay hinatulan ayon sa mga bagay na nasusulat sa mga aklat, ayon sa kanilang mga gawa."
	 },
	 {
	 	"index": "308",
	 	"verse": "1 Timoteo 1:19-20",
	 	"content": "<sup>19</sup>Na ingatan mo ang pananampalataya at ang mabuting budhi; na nang ito'y itakuwil ng iba sa kanila ay nangabagbag tungkol sa pananampalataya:<br><sup>20</sup>Na sa mga ito'y si Himeneo at si Alejandro; na sila'y aking ibinigay kay Satanas, upang sila'y maturuang huwag mamusong."
	 },
	 {
	 	"index": "309",
	 	"verse": "Juan 15:5-7",
	 	"content": "<sup>5</sup>Ako ang puno ng ubas, kayo ang mga sanga: Ang nananatili sa akin, at ako'y sa kaniya, ay siyang nagbubunga ng marami: sapagka't kung kayo'y hiwalay sa akin ay wala kayong magagawa.<br><sup>6</sup>Kung sinoman ay hindi manatili sa akin, ay siya'y  matatapong katulad ng sanga, at matutuyo; at mga titipunin at mga ihahagis sa apoy, at mangasusunog.<br><sup>7</sup>Kung kayo'y magsipanatili sa akin, at ang mga  salita ko'y magsipanatili sa inyo, ay hingin ninyo ang anomang inyong ibigin, at gagawin sa inyo."
	 },
	 {
	 	"index": "310",
	 	"verse": "Juan 15:8-10",
	 	"content": "<sup>8</sup>Sa ganito'y lumuluwalhati ang aking Ama, na kayo'y magsipagbunga ng marami; at gayon kayo'y magiging aking alagad.<br><sup>9</sup>Kung paanong inibig ako ng Ama, ay gayon din naman iniibig ko kayo: magsipanatili kayo sa aking pagibig.<br><sup>10</sup>Kung tinutupad ninyo ang aking mga utos, ay magsisipanahan kayo sa aking pagibig; gaya ng aking pagtupad sa mga utos ng aking Ama, at ako'y nananatili sa kaniyang pagibig."
	 },
	 {
	 	"index": "311",
	 	"verse": "Mateo 24:13",
	 	"content": "<sup>13</sup>Datapuwa't ang magtitiis hanggang sa wakas ay siyang maliligtas."
	 },
	 {
	 	"index": "312",
	 	"verse": "Awit 133:1,3",
	 	"content": "<sup>1</sup>Masdan ninyo, na pagkabuti at pagkaligaya Sa mga magkakapatid na magsitahang magkakasama sa pagkakaisa.<br><sup>3</sup>Gaya ng hamog sa Hermon, Na tumutulo sa mga bundok ng Sion: Sapagka't doon pinarating ng Panginoon ang pagpapala, Sa makatuwid baga'y ang buhay na magpakailan pa man."
	 },
	 {
	 	"index": "313",
	 	"verse": "Juan 17:9,11",
	 	"content": "<sup>9</sup>Idinadalangin ko sila: hindi ang sanglibutan ang idinadalangin ko, kundi yaong mga sa akin ay ibinigay mo; sapagka't sila'y iyo.<br><sup>11</sup>At wala na ako sa sanglibutan, at ang mga ito ay nasa sanglibutan, at ako'y paririyan sa iyo. Amang Banal, ingatan mo sila sa iyong pangalan yaong mga ibinigay mo sa akin, upang sila'y maging isa, na gaya naman natin."
	 },
	 {
	 	"index": "314",
	 	"verse": "Juan 17:21,23",
	 	"content": "<sup>21</sup>Upang silang lahat ay maging isa; na gaya mo, Ama, sa akin, at ako'y sa iyo, na sila nama'y sumaatin: upang ang sanglibutan ay sumampalataya na ako'y sinugo mo.<br><sup>23</sup>Ako'y sa kanila, at ikaw ay sa akin, upang sila'y malubos sa pagkakaisa; upang makilala ng sanglibutan na ikaw ang sa akin ay nagsugo, at sila'y iyong inibig, na gaya ko na inibig mo."
	 },
	 {
	 	"index": "315",
	 	"verse": "1 Corinto 1:10",
	 	"content": "<sup>10</sup>Ngayo'y ipinamamanhik ko sa inyo, mga kapatid, sa pamamagitan ng pangalan ng ating Panginoong Jesucristo, na kayong lahat ay mangagsalita ng isa lamang bagay, at huwag mangagkaroon sa inyo ng mga pagkakabahabahagi; kundi kayo'y mangalubos sa isa lamang pagiisip at isa lamang paghatol.<hr><b>Goodspeed</b><br><sup>10</sup>Subalit ipinamamanhik ko sa inyong lahat, mga kapatid, na alangalang sa ating Panginoong Jesucristo ay mangagkaisa kayong lahat sa inyong sinasalita, at huwag ninyong itulot na magkaroon ng mga pagkakabaha-bahagi sa gitna ninyo, kundi magkaisa kayong lubos sa pag-iisip at paghatol."
	 },
	 {
	 	"index": "316",
	 	"verse": "1 Corinto 12:18,25",
	 	"content": "<sup>18</sup>Datapuwa't ngayo'y inilagay ng Dios ang bawa't isa sa mga sangkap ng katawan, ayon sa kaniyang minagaling.<br><sup>25</sup>Upang huwag magkaroon ng pagkakabahabahagi sa katawan; kundi ang mga sangkap ay mangagkaroon ng magkasing-isang pagiingat sa isa't isa."
	 },
	 {
	 	"index": "317",
	 	"verse": "1 Corinto 3:3-4",
	 	"content": "<sup>3</sup>Sapagka't kayo'y mga sa laman pa: sapagka't samantalang sa inyo'y may mga paninibugho at mga pagtatalo, hindi baga kayo'y mga sa laman, at kayo'y nagsisilakad ayon sa kaugalian ng mga tao?<br><sup>4</sup>Sapagka't kung sinasabi ng isa, Ako'y kay Pablo; at ng iba, Ako'y kay Apolos; hindi baga kayo'y mga tao?"
	 },
	 {
	 	"index": "318",
	 	"verse": "Roma 8:9",
	 	"content": "<sup>9</sup>Datapuwa't kayo'y wala sa laman kundi nasa sa Espiritu, kung gayo'y tumitira sa inyo ang Espiritu ng Dios. Datapuwa't kung ang sinoma'y walang Espiritu ni Cristo, siya'y hindi sa kaniya."
	 },
	 {
	 	"index": "319",
	 	"verse": "Santiago 3:14-15",
	 	"content": "<sup>14</sup>Nguni't kung kayo'y mayroong mapapait na paninibugho at pagkakampikampi sa inyong puso, ay huwag ninyong ipagmapuri at huwag magsinungaling laban sa katotohanan.<br><sup>15</sup>Hindi ito ang karunungang bumababa mula sa itaas, kundi ang nauukol sa lupa, sa laman, sa diablo."
	 },
	 {
	 	"index": "320",
	 	"verse": "2 Corinto 13:11",
	 	"content": "<sup>11</sup>Sa katapustapusan, mga kapatid, paalam na. Mangagpakasakdal kayo; mangaaliw kayo; mangagkaisa kayo ng pagiisip; mangabuhay kayo sa kapayapaan: at ang Dios ng pagibig at ng kapayapaan ay sasa inyo."
	 },
	 {
	 	"index": "321",
	 	"verse": "Efeso 4:4-6",
	 	"content": "<sup>4</sup>May isang katawan, at isang Espiritu, gaya naman ng pagkatawag sa inyo sa isang pagasa ng pagtawag sa inyo;<br><sup>5</sup>Isang Panginoon, isang pananampalataya, isang bautismo,<br><sup>6</sup>Isang Dios at Ama ng lahat, na siyang sumasa ibabaw sa lahat, at sumasa lahat, at nasa lahat."
	 },
	 {
	 	"index": "322",
	 	"verse": "Filipos 2:2-3",
	 	"content": "<sup>2</sup>Ay lubusin ninyo ang aking katuwaan, upang kayo'y mangagkaisa ng pagiisip, mangagtaglay ng isa ring pagibig, na mangagkaisa ng akala, at isa lamang pagiisip;<br><sup>3</sup>Na huwag ninyong gawin ang anoman sa pamamagitan ng pagkakampikampi o sa pamamagitan ng pagpapalalo, kundi sa kababaan ng pagiisip, na ipalagay ng bawa't isa ang iba na lalong mabuti kay sa kaniyang sarili;"
	 },
	 {
	 	"index": "323",
	 	"verse": "Gawa 15:12-13",
	 	"content": "<sup>12</sup>At nagsitahimik ang buong karamihan; at kanilang pinakinggan si Bernabe at si Pablo na nagsisipagsaysay ng mga tanda at ng mga kababalaghang ginawa ng Dios sa mga Gentil sa pamamagitan nila.<br><sup>13</sup>At nang matapos na silang magsitahimik, ay sumagot si Santiago, na sinasabi, Mga kapatid, pakinggan ninyo ako:"
	 },
	 {
	 	"index": "324",
	 	"verse": "Gawa 15:19-20",
	 	"content": "<sup>19</sup>Dahil dito'y ang hatol ko, ay huwag nating gambalain yaong sa mga Gentil ay nangagbabalik-loob sa Dios;<br><sup>20</sup>Kundi sumulat tayo sa kanila, na sila'y magsilayo sa mga ikahahawa sa diosdiosan, at sa pakikiapid, at sa binigti, at sa dugo."
	 },
	 {
	 	"index": "325",
	 	"verse": "Gawa 15:28",
	 	"content": "<sup>28</sup>Sapagka't minagaling ng Espiritu Santo, at namin, na huwag kayong atangan ng lalong mabigat na pasanin maliban sa mga bagay na ito na kinakailangan:"
	 },
	 {
	 	"index": "326",
	 	"verse": "Gawa 15:1-2",
	 	"content": "<sup>1</sup>At may ibang mga taong nagsilusong mula sa Judea ay nagsipagturo sa mga kapatid, na sinasabi, Maliban na kayo'y mangagtuli ayon sa kaugalian ni Moises, ay hindi kayo mangaliligtas.<br><sup>2</sup>At nang magkaroon si Pablo at si Bernabe ng di kakaunting pagtatalo at pakikipagtuligsaan sa kanila, ay ipinasiya ng mga kapatid na si Pablo at si Bernabe, at ang ilan sa kanila, ay magsiahon sa Jerusalem, sa mga apostol at sa mga matanda tungkol sa suliraning ito."
	 },
	 {
	 	"index": "327",
	 	"verse": "Gawa 15:30-31 MB",
	 	"content": "<sup>30</sup>Pinayaon ang mga sugo.  Pagdating sa Antioquia, tinipon nila ang mga kapatid at ibinigay ang sulat.<br><sup>31</sup>Pagkabasa sa liham, ang mga tao'y nagalak dahil sa kanilang narinig."
	 },
	 {
	 	"index": "328",
	 	"verse": "Gawa 17:31",
	 	"content": "<sup>31</sup>Sapagka't siya'y nagtakda ng isang araw na kaniyang ipaghuhukom sa sanglibutan ayon sa katuwiran sa pamamagitan ng lalaking kaniyang itinalaga; na ito'y pinatunayan niya sa lahat ng mga tao, nang siya'y buhayin niyang maguli sa mga patay."
	 },
	 {
	 	"index": "329",
	 	"verse": "Hebreo 9:27",
	 	"content": "<sup>27</sup>At kung paanong itinakda sa mga tao ang mamatay na minsan, at pagkatapos nito ay ang paghuhukom;"
	 },
	 {
	 	"index": "330",
	 	"verse": "Judas 1:14-15",
	 	"content": "<sup>14</sup>At ang mga ito naman ang hinulaan ni Enoc, na ikapito sa bilang mula kay Adam, na nagsabi, Narito, dumating ang Panginoon, na kasama ang kaniyang mga laksalaksang banal,<br><sup>15</sup>Upang isagawa ang paghuhukom sa lahat, at upang sumbatan ang lahat ng masasama sa lahat ng kanilang mga gawang masasama na kanilang ginawang may kasamaan, sa lahat ng mga bagay na mabibigat na sinalita laban sa kaniya ng mga makasalanang masasama."
	 },
	 {
	 	"index": "331",
	 	"verse": "Roma 8:1",
	 	"content": "<sup>1</sup>Ngayon nga'y wala nang anomang hatol sa mga na kay Cristo Jesus."
	 },
	 {
	 	"index": "332",
	 	"verse": "1 Tesalonica 4:16-17",
	 	"content": "<sup>16</sup>Sapagka't ang Panginoon din ang bababang mula sa langit, na may isang sigaw, may tinig ng arkanghel, at may pakakak ng Dios: at ang nangamatay kay Cristo ay unang mangabubuhay na maguli;<br><sup>17</sup>Kung magkagayon, tayong nangabubuhay, na nangatitira, ay aagawing kasama nila sa mga alapaap, upang salubungin ang Panginoon sa hangin: at sa ganito'y sasa Panginoon tayo magpakailan man."
	 },
	 {
	 	"index": "333",
	 	"verse": "Apocalipsis 20:5-10",
	 	"content": "<sup>5</sup>Ang mga iba sa mga patay ay hindi nangabuhay hanggang sa naganap ang isang libong taon. Ito ang unang pagkabuhay na maguli.<br><sup>6</sup>Mapalad at banal ang makalakip sa unang pagkabuhay na maguli: sa mga ito'y walang kapangyarihan ang ikalawang kamatayan; kundi sila'y magiging mga saserdote ng Dios at ni Cristo, at mangaghaharing kasama niya sa loob ng isang libong taon.<br><sup>7</sup>At kung maganap na ang isang libong taon, si Satanas ay kakalagan sa kaniyang bilangguan,<br><sup>8</sup>At lalabas upang dumaya sa mga bansa na nasa apat na sulok ng lupa, sa Gog at sa Magog, upang tipunin sila sa pagbabaka: na ang bilang nila ay gaya ng buhangin sa dagat.<br><sup>9</sup>At nangagsipanhik sila sa kalaparan ng lupa, at kinubkob ang kampamento ng mga banal, at ang bayang iniibig: at bumaba ang apoy mula sa langit, at sila'y nasupok.<br><sup>10</sup>At ang diablo na dumaya sa kanila ay ibinulid sa dagatdagatang apoy at asupre, na kinaroroonan din naman ng hayop at ng bulaang propeta; at sila'y pahihirapan araw at gabi magpakailan kailan man."
	 },
	 {
	 	"index": "334",
	 	"verse": "Apocalipsis 21:1-4",
	 	"content": "<sup>1</sup>At nakita ko ang isang bagong langit at ang isang bagong lupa: sapagka't ang unang langit at ang unang lupa ay naparam; at ang dagat ay wala na.<br><sup>2</sup>At nakita ko ang bayang banal, ang bagong Jerusalem, na nananaog mula sa langit buhat sa Dios, na nahahandang gaya ng isang babaing kasintahan na nagagayakang talaga sa kaniyang asawa.<br><sup>3</sup>At narinig ko ang isang malakas na tinig na mula sa luklukan, na nagsasabi, Narito, ang tabernakulo ng Dios ay nasa mga tao at siya'y mananahan sa kanila, at sila'y magiging mga bayan niya, at ang Dios din ay sasa kanila, at magiging Dios nila:<br><sup>4</sup>At papahirin niya ang bawa't luha sa kanilang mga mata; at hindi na magkakaroon ng kamatayan; hindi na magkakaroon pa ng dalamhati, o ng pananambitan man, o ng hirap pa man: ang mga bagay nang una ay naparam na."
	 },
	 {
	 	"index": "335",
	 	"verse": "Mateo 24:44",
	 	"content": "<sup>44</sup>Kaya nga kayo'y magsihanda naman; sapagka't paririto ang Anak ng tao sa oras na hindi ninyo iniisip."
	 },
	 {
	 	"index": "336",
	 	"verse": "Mateo 24:36",
	 	"content": "<sup>36</sup>Nguni't tungkol sa araw at oras na yaon walang makakaalam, kahit ang mga anghel sa langit, kahit ang Anak, kundi ang Ama lamang."
	 },
	 {
	 	"index": "337",
	 	"verse": "2 Pedro 3:14",
	 	"content": "<sup>14</sup>Kaya nga, mga minamahal, yamang kayo'y nagsisipaghintay ng mga bagay na ito, ay pagsikapan ninyong masumpungan kayo sa kapayapaan, na walang dungis at walang kapintasan sa paningin niya."
	 },
	 {
	 	"index": "338",
	 	"verse": "Colosas 3:15",
	 	"content": "<sup>15</sup>At maghari sa inyong puso ang kapayapaan ni Cristo, na diya'y tinawag din naman kayo sa isang katawan; at kayo'y maging mapagpasalamat."
	 },
	 {
	 	"index": "339",
	 	"verse": "1 Pedro 1:6-7 MB",
	 	"content": "<sup>6</sup>Ito'y dapat ninyong ikagalak, bagamat maaaring magdanas muna kayo ng iba't ibang pagsubok sa loob ng maikling panahon.<br><sup>7</sup>Ang ginto, na nasisira, ay pinararaan sa apoy upang malaman kung talagang dalisay. Gayon din naman, ang inyong pananampalataya, na higit kaysa ginto, ay pinararaan sa pagsubok upang malaman kung talagang tapat. Sa gayon, kayo'y papupurihan, dadakilain, at pararangalan sa Araw na mahayag si Jesu-Cristo."
	 },
	 {
	 	"index": "340",
	 	"verse": "Marcos 4:14-20 MB",
	 	"content": "<sup>14</sup>Ang inihahasik ay ang Salita ng Diyos.<br><sup>15</sup>Ito ang mga nasa daan, na nahasikan ng Salita: pagkatapos nilang mapakinggan ito, pagdaka'y dumarating si Satanas, at inaalis ang Salitang napahasik sa kanilang puso.<br><sup>16</sup>Ang iba'y tulad naman ng mga napahasik sa kabatuhan. Pagkarinig nila ng Salita, ito'y agad nilang tinatanggap na may galak.<br><sup>17</sup>Ngunit hindi naman ito tumitimo sa kanilang puso, kaya't hindi sila nananatili. Pagdating ng kahirapan o pag-uusig dahil sa Salita, agad silang nanlalamig.<br><sup>18</sup>Ang iba'y tulad ng napahasik sa dawagan. Dininig nga nila ang Salita,<br><sup>19</sup>ngunit sila'y naging abala sa mga bagay ukol sa mundong ito, naging maibigin sa mga kayamanan, at mapaghangad sa iba pang mga bagay, anupa't ang Salita'y nawalan na ng puwang sa kanilang mga puso kaya't hindi sila nakapamunga.<br><sup>20</sup>Ngunit ang iba'y tulad sa binhing napahasik sa matabang lupa: pinakikinggan nila at tinatanggap ang Salita, at sila'y nagsisipamunga - may tigtatatlumpu, may tigaanimnapu, at may tigsasandaan."
	 },
	 {
	 	"index": "341",
	 	"verse": "Filipos 1:11",
	 	"content": "<sup>11</sup>Na mangapuspos ng bunga ng kabanalan, na ito'y sa pamamagitan ni Jesucristo, sa ikaluluwalhati at ikapupuri ng Dios."
	 },
	 {
	 	"index": "342",
	 	"verse": "1 Pedro 1:18-19",
	 	"content": "<sup>18</sup>Na inyong nalalamang kayo'y tinubos hindi ng mga bagay na nangasisira, ng pilak o ginto, mula sa inyong walang kabuluhang paraan ng pamumuhay, na ipinamana sa  inyo ng inyong mga magulang;<br><sup>19</sup>Kundi ng mahalagang dugo, gaya ng sa korderong walang kapintasan at walang dungis, sa makatuwid bagay ang dugo ni Cristo:"
	 },
	 {
	 	"index": "343",
	 	"verse": "Hebreo 10:23 MB",
	 	"content": "<sup>23</sup>Magpakatatag tayo sa ating pag-asa at huwag mag-alinlangan, sapagkat tapat ang nangako sa atin."
	 },
	 {
	 	"index": "344",
	 	"verse": "Awit 27:1,4-5 MB",
	 	"content": "<sup>1</sup>Tanglaw ko'y si Yahweh, aking kaligtasan, Kaya walang takot ako kaninuman; Sa mga panganib kanyang iingatan, Kaya naman ako'y walang agam-agam.<br><sup>4</sup>Isang bagay lamang ang aking mithiin, Isang bagay itong kay Yahweh hiniling: Ang ako'y lumagi sa banal na templo Upang kagandahan niya'y mamasdan ko At yaong patnubay niya ay matamo.<br><sup>5</sup>Iingatan ako kapag may bagabag, Sa banal na templo'y iingatang ligtas; Itataas niya sa batong matatag."
	 },
	 {
	 	"index": "345",
	 	"verse": "Hebreo 10:38-39",
	 	"content": "<sup>38</sup>Nguni't ang aking lingkod na matuwid ay mabubuhay sa pananampalataya: At kung siya ay umurong, ay hindi kalulugdan ng aking kaluluwa.<br><sup>39</sup>Nguni't tayo'y hindi doon sa mga nagsisibalik sa kapahamakan; kundi doon sa mga may pananampalataya sa ikaliligtas ng kaluluwa."
	 },
	 {
	 	"index": "346",
	 	"verse": "Apocalipsis 14:12-13 MB",
	 	"content": "<sup>12</sup>Kaya't kailangang magpakatatag ang mga hinirang ng Diyos, ang mga sumusunod sa utos ng Diyos at nananatili sa pananalig kay Jesus.<br><sup>13</sup>At narinig ko ang isang tinig mula sa langit na nagsasabi, Isulat mo ito: Mula ngayon, mapapalad ang naglilingkod sa Panginoon hanggang kamatayan! 'Tunay nga', sabi ng Espiritu. 'Magpapahinga na sila sa kanilang pagpapagal; sapagkat susundan sila ng kanilang mga gawa.'"
	 },
	 {
	 	"index": "347",
	 	"verse": "Bilang 23:19",
	 	"content": "<sup>19</sup>Ang Dios ay hindi tao na magsisinungaling o sinalita ba niya, at hindi niya isasagawa?"
	 },
	 {
	 	"index": "348",
	 	"verse": "Galacia 3:16,29",
	 	"content": "<sup>16</sup>Ngayon kay Abraham nga sinabi ang mga pangako, at sa kaniyang binhi. Hindi sinasabi ng Dios, At sa mga binhi, na gaya baga sa marami; kundi gaya sa iisa lamang, At sa iyong binhi, na si Cristo.<br><sup>29</sup>At kung kayo'y kay Cristo, kayo nga'y binhi ni Abraham, at mga tagapagmana ayon sa pangako."
	 },
	 {
	 	"index": "349",
	 	"verse": "1 Juan 3:20",
	 	"content": "<sup>20</sup>Sapagka't kung hinahatulan tayo ng ating puso, ang Dios ay lalong dakila kay sa ating puso, at nalalaman niya ang lahat ng mga bagay."
	 },
	 {
	 	"index": "350",
	 	"verse": "Efeso 5:23,25",
	 	"content": "<sup>23</sup>Sapagka't ang lalake ay pangulo ng kaniyang asawa, gaya naman ni Cristo na pangulo ng iglesia, na siya rin ang tagapagligtas ng katawan.<br><sup>25</sup>Mga lalake, ibigin ninyo ang inyo-inyong asawa, gaya naman ni Cristo na umibig sa iglesia, at ibinigay ang kaniyang sarili dahil sa kaniya;"
	 },
	 {
	 	"index": "351",
	 	"verse": "Genesis 1:26-27",
	 	"content": "<sup>26</sup>At sinabi ng Dios, Lalangin natin ang tao sa ating larawan, ayon sa ating wangis: at magkaroon sila ng kapangyarihan sa mga isda sa dagat, at sa mga ibon sa himpapawid, at sa mga hayop, at sa buong lupa, at sa bawa't umuusad, na nagsisiusad sa ibabaw ng lupa.<br><sup>27</sup>At nilalang ng Dios ang tao ayon sa kaniyang sariling larawan, ayon sa larawan ng Dios siya nilalang; nilalang niya sila na lalake at babae."
	 },
	 {
	 	"index": "352",
	 	"verse": "Zefanias 1:14,18",
	 	"content": "<sup>14</sup>Ang dakilang kaarawan ng Panginoon ay malapit na, malapit na at nagmamadaling mainam, sa makatuwid baga'y ang tinig ng kaarawan ng Panginoon; ang makapangyarihang tao ay sumisigaw roon ng kalagimlagim.<br><sup>18</sup>Kahit ang kanilang pilak o ang kanilang ginto man ay hindi makapagliligtas sa kanila sa kaarawan ng kapootan ng Panginoon; kundi ang buong lupain ay masusupok sa pamamagitan ng apoy ng kaniyang paninibugho: sapagka't wawakasan niya, oo, isang kakilakilabot na wakas, nilang lahat na nagsisitahan sa lupain."
	 },
	 {
	 	"index": "353",
	 	"verse": "Isaias 60:21",
	 	"content": "<sup>21</sup>Ang iyong bayan naman ay magiging matuwid na lahat; sila'y mangagmamana ng lupain magpakailan man, ang sanga ng aking pananim, ang gawa ng aking mga kamay, upang ako'y luwalhatiin."
	 },
	 {
	 	"index": "354",
	 	"verse": "Isaias 62:11-12",
	 	"content": "<sup>11</sup>Narito, ang Panginoon ay nagtanyag hanggang sa wakas ng lupa, Inyong sabihin sa anak na babae ng Sion, Narito, ang iyong kaligtasan ay dumarating; narito, ang kaniyang kagantihan ay nasa kaniya, at ang kaniyang ganti ay nasa harap niya.<br><sup>12</sup>At tatawagin nila sila Ang banal na bayan, Ang tinubos ng Panginoon: at ikaw ay tatawagin Hinanap, Bayang hindi pinabayaan."
	 },
	 {
	 	"index": "355",
	 	"verse": "2 Samuel 7:28",
	 	"content": "<sup>28</sup>At ngayon, Oh Panginoong Dios, ikaw ay Dios at ang iyong mga salita ay katotohanan, at iyong ipinangako ang mabuting bagay na ito sa iyong lingkod:"
	 },
	 {
	 	"index": "356",
	 	"verse": "Exodo 20:7",
	 	"content": "<sup>7</sup>Huwag mong babanggitin ang pangalan ng Panginoon mong Dios sa walang kabuluhan; sapagka't hindi aariin ng Panginoong walang sala ang bumanggit ng kaniyang pangalan sa walang kabuluhan."
	 },
	 {
	 	"index": "357",
	 	"verse": "Ezekiel 34:31",
	 	"content": "<sup>31</sup>At kayong mga tupa ko, na mga tupa sa aking pastulan ay mga tao, at ako'y inyong Dios, sabi ng Panginoong Dios."
	 },
	 {
	 	"index": "358",
	 	"verse": "Juan 10:30",
	 	"content": "<sup>30</sup>Ako at ang Ama ay iisa."
	 },
	 {
	 	"index": "359",
	 	"verse": "Juan 14:6",
	 	"content": "<sup>6</sup>Sinabi sa kaniya ni Jesus, Ako ang daan, at ang katotohanan, at ang buhay:  sinoman ay di makaparoroon sa Ama, kundi sa pamamagitan ko."
	 },
	 {
	 	"index": "360",
	 	"verse": "Roma 9:6-8",
	 	"content": "<sup>6</sup>Datapuwa't hindi sa ang salita ng Dios ay nauwi sa wala. Sapagka't hindi ang lahat ng buhat sa Israel ay mga taga Israel:<br><sup>7</sup>Ni sapagka't sila'y binhi ni Abraham, ay mga anak na silang lahat: kundi, Kay Isaac tatawagin ang iyong binhi.<br><sup>8</sup>Samakatuwid, ay hindi mga anak sa laman ang mga anak ng Dios: kundi ang mga anak sa pangako'y siyang ibibilang na isang binhi."
	 },
	 {
	 	"index": "361",
	 	"verse": "Juan 8:44",
	 	"content": "<sup>44</sup>Kayo'y sa inyong amang diablo, at ang mga nais ng inyong ama ang ibig ninyong gawin. Siya'y isang mamamatay-tao buhat pa nang una, at hindi nananatili sa katotohanan, sapagka't walang katotohanan sa kaniya. Pagka nagsasalita siya ng kasinungalingan, ay nagsasalita siya ng sa ganang kaniya: sapagka't siya'y isang sinungaling, at ama nito."
	 },
	 {
	 	"index": "362",
	 	"verse": "1 Corinto 13:13",
	 	"content": "<sup>13</sup>Datapuwa't ngayo'y nanatili ang tatlong ito: ang pananampalataya, ang pagasa, at ang pagibig; nguni't ang pinakadakila sa mga ito ay ang pagibig."
	 },
	 {
	 	"index": "363",
	 	"verse": "1 Corinto 12:13",
	 	"content": "<sup>13</sup>Sapagka't sa isang Espiritu ay binabautismuhan tayong lahat sa isang katawan, maging tayo'y Judio o Griego, maging mga alipin o mga laya; at tayong lahat ay pinainom sa isang Espiritu."
	 },
	 {
	 	"index": "364",
	 	"verse": "Hebreo 1:6",
	 	"content": "<sup>6</sup>At muli nang dinadala niya ang panganay sa sangkalupaan ay sinasabi, At sambahin siya ng lahat ng mga anghel ng Dios."
	 },
	 {
	 	"index": "365",
	 	"verse": "Juan 1:12-13",
	 	"content": "<sup>12</sup>Datapuwa't ang lahat ng sa kaniya'y nagsitanggap, ay pinagkalooban niya sila ng karapatang maging mga anak ng Dios, sa makatuwid baga'y ang mga nagsisisampalataya sa kaniyang pangalan:<br><sup>13</sup>Na mga ipinanganak na hindi sa dugo, ni sa kalooban ng laman, ni sa kalooban ng tao, kundi ng Dios."
	 },
	 {
	 	"index": "366",
	 	"verse": "Deuteronomio 7:6-7",
	 	"content": "<sup>6</sup>Sapagka't ikaw ay isang banal na bayan sa Panginoon mong Dios; pinili ka ng Panginoon mong Dios upang maging bayan sa kaniyang sariling pagaari, na higit sa lahat ng mga bayan na nasa ibabaw ng balat ng lupa.<br><sup>7</sup>Hindi kayo inibig ng Panginoon, ni pinili kayo ng dahil sa kayo'y marami sa bilang kay sa alin mang bayan; sapagka't kayo ang pinakamaliit sa lahat ng mga bayan:"
	 },
	 {
	 	"index": "367",
	 	"verse": "Deuteronomio 32:39 NPV",
	 	"content": "<sup>39</sup>Tingnan ninyo, ako nga ay Siya. Ako lamang ang Dios at wala nang iba. Ako ang pumapatay at muling bumubuhay. Pinagagaling ko ang aking sinugatan. Anumang gawin koy walang makahahadlang."
	 },
	 {
	 	"index": "368",
	 	"verse": "Amos 5:27",
	 	"content": "<sup>27</sup>Kaya't kayo'y aking papapasukin sa pagkabihag sa dako roon ng Damasco, sabi ng Panginoon, na ang pangala'y Dios ng mga hukbo."
	 },
	 {
	 	"index": "369",
	 	"verse": "Oseas 2:11",
	 	"content": "<sup>11</sup>Akin din namang papaglilikatin ang kaniyang mga kalayawan, ang kaniyang mga kapistahan, ang kaniyang mga bagong buwan, at ang kaniyang mga sabbath, at lahat ng kaniyang takdang kapulungan."
	 },
	 {
	 	"index": "370",
	 	"verse": "Bilang 6:3",
	 	"content": "<sup>3</sup>Ay hihiwalay siya sa alak at sa matapang na inumin; siya'y hindi iinom ng suka ng alak, o tubang nakalalasing, ni iinom man ng anomang katas na galing sa ubas o kakain man ng sariwang ubas o pasas.<hr><b>TEV</b><br><sup>3</sup>shall abstain from wine and beer. He shall not drink any kind of drink made from grapes or eat any grapes or raisins."
	 },
	 {
	 	"index": "371",
	 	"verse": "1 Corinto 15:58",
	 	"content": "<sup>58</sup>Kaya nga, mga kapatid kong minamahal, kayo'y magsitatag, huwag makilos, na laging sumasagana sa gawa ng Panginoon, yamang nalalaman ninyo na hindi walang kabuluhan ang inyong gawa sa Panginoon."
	 },
	 {
	 	"index": "372",
	 	"verse": "Isaias 40:3",
	 	"content": "<sup>3</sup>Ang tinig ng isang sumisigaw, Ihanda ninyo sa ilang ang daan ng Panginoon pantayin ninyo sa ilang ang lansangan para sa ating Dios."
	 },
	 {
	 	"index": "373",
	 	"verse": "Isaias 49:6",
	 	"content": "<sup>6</sup>Oo, kaniyang sinasabi, Totoong magaan ang bagay na ikaw ay naging aking lingkod upang ibangon ang mga lipi ng Jacob, at isauli ang iningatan ng Israel, ikaw ay aking ibibigay na pinakailaw sa mga Gentil upang ikaw ay maging aking kaligtasan hanggang sa wakas ng lupa."
	 },
	 {
	 	"index": "374",
	 	"verse": "Isaias 61:1-2",
	 	"content": "<sup>1</sup>Ang Espiritu ng Panginoong Dios ay sumasa akin; sapagka't pinahiran ako ng Panginoon upang ipangaral ang mabubuting balita sa mga maamo; kaniyang sinugo ako upang magpagaling ng mga bagbag na puso, upang magtanyag ng kalayaan sa mga bihag, at magbukas ng bilangguan sa nangabibilanggo;<br><sup>2</sup>Upang magtanyag ng kalugodlugod na taon ng Panginoon, at ng kaarawan ng panghihiganti ng ating Dios; upang aliwin yaong lahat na nagsisitangis;"
	 },
	 {
	 	"index": "375",
	 	"verse": "Colosas 3:1",
	 	"content": "<sup>1</sup>Kung kayo nga'y muling binuhay na kalakip ni Cristo, ay hanapin ninyo ang mga bagay na nangasa itaas, na kinaroroonan ni Cristo, na nakaupo sa kanan ng Dios."
	 },
	 {
	 	"index": "376",
	 	"verse": "Daniel 9:11",
	 	"content": "<sup>11</sup>Oo, buong Israel ay sumalangsang ng iyong kautusan, sa pagtalikod, upang huwag nilang talimahin ang iyong tinig: kaya't ang sumpa ay nabuhos sa amin, at ang sumpa na nakasulat sa kautusan ni Moises na lingkod ng Dios; sapagka't kami ay nangagkasala laban sa kaniya."
	 },
	 {
	 	"index": "377",
	 	"verse": "Apocalipsis 14:1",
	 	"content": "<sup>1</sup>At tumingin ako, at narito, ang Cordero ay nakatayo sa bundok ng Sion, at ang kasama niya'y isang daan at apat na pu't apat na libong may pangalan niya, at pangalan ng kaniyang Ama, na nasusulat sa kanikaniyang noo."
	 },
	 {
	 	"index": "378",
	 	"verse": "Apocalipsis 14:6-7",
	 	"content": "<sup>6</sup>At nakita ko ang ibang anghel na lumilipad sa gitna ng langit, na may mabuting balita na walang hanggan upang ibalita sa mga nananahan sa lupa, at sa bawa't bansa at angkan at wika at bayan;<br><sup>7</sup>At sinasabi niya ng malakas na tinig, Matakot kayo sa Dios, at magbigay kaluwalhatian sa kaniya; sapagka't dumating ang panahon ng kaniyang paghatol: at magsisamba kayo sa gumawa ng langit at ng lupa at ng dagat at ng mga bukal ng tubig."
	 },
	 {
	 	"index": "379",
	 	"verse": "Apocalipsis 14:8",
	 	"content": "<sup>8</sup>At ang iba, ang pangalawang anghel, ay sumunod na nagsasabi, Naguho, naguho ang dakilang Babilonia, na siyang nagpainom sa lahat na bansa ng alak ng kagalitan ng kaniyang pakikiapid."
	 },
	 {
	 	"index": "380",
	 	"verse": "Apocalipsis 14:9-11",
	 	"content": "<sup>9</sup>At ang ibang anghel, ang pangatlo, ay sumunod sa kanila, na nagsasabi ng malakas na tinig, Kung ang sinoman ay sumasamba sa hayop at sa kaniyang larawan, at tumatanggap ng tanda sa kaniyang noo, o sa kaniyang kamay,<br><sup>10</sup>Ay iinom din naman siya ng alak ng kagalitan ng Dios, na nahahandang walang halo sa inuman ng kaniyang kagalitan; at siya'y pahihirapan ng apoy at asupre sa harapan ng mga banal na anghel, at sa harapan ng Cordero:<br><sup>11</sup>At ang usok ng hirap nila ay napaiilanglang magpakailan kailan man; at sila'y walang kapahingahan araw at gabi, silang mga nagsisisamba sa hayop at sa kaniyang larawan, at sinomang tumatanggap ng tanda ng kaniyang pangalan."
	 },
	 {
	 	"index": "381",
	 	"verse": "1 Hari 8:39",
	 	"content": "<sup>39</sup>Dinggin mo nga sa langit na iyong tahanang dako, at ikaw ay magpatawad at gumawa, at gumanti ka sa bawat tao ayon sa lahat niyang mga lakad na ang puso ay iyong natataho; (sapagka't ikaw, ikaw lamang ang nakakataho ng mga puso ng lahat ng mga anak ng mga tao;)"
	 },
	 {
	 	"index": "382",
	 	"verse": "Tito 2:13",
	 	"content": "<sup>13</sup>Na hintayin yaong mapalad na pagasa at ang pagpapakita ng kaluwalhatian ng ating dakilang Dios at Tagapagligtas na si Jesucristo;"
	 },
	 {
	 	"index": "383",
	 	"verse": "Isaias 46:9-10",
	 	"content": "<sup>9</sup>Inyong alalahanin ang mga dating bagay ng una: sapagka't ako'y Dios, at walang iba liban sa akin; akoy Dios, at walang gaya ko;<br><sup>10</sup>Na nagpapahayag ng wakas mula sa pasimula, at mula nang mga unang panahon, ng mga bagay na hindi pa nangyayari; na nagsasabi, Ang payo ko ay mananayo, at gagawin ko ang aking buong kaligayahan:"
	 },
	 {
	 	"index": "384",
	 	"verse": "Mikas 5:3",
	 	"content": "<sup>3</sup>Kaya't kaniyang ibibigay sila hanggang sa panahon na siya na nagdaramdam ay manganak: kung magkagayon ang nalabi sa kaniyang mga kapatid ay babalik sa mga anak ni Israel."
	 },
	 {
	 	"index": "385",
	 	"verse": "Zacarias 13:7-9",
	 	"content": "<sup>7</sup>Gumising ka, Oh tabak, laban sa pastor ko, at laban sa lalake na aking kasama, sabi ng Panginoon ng mga hukbo: saktan mo ang pastor at ang mga tupa ay mangangalat; at aking ipipihit ang aking kamay laban sa mga maliit.<br><sup>8</sup>At mangyayari, na sa buong lupain, sabi ng Panginoon, dalawang bahagi ay mahihiwalay at mamamatay; nguni't ang ikatlo ay maiiwan.<br><sup>9</sup>At aking dadalhin ang ikatlong bahagi sa apoy, at sila'y dadalisayin ko na parang pilak na dalisay, at sila'y susubukin ko na parang pagsubok sa ginto. Sila'y magsisitawag sa aking pangalan, at akin silang didinggin: aking sasabihin, Siya'y bayan ko; at kanilang sasabihin, Ang Panginoon ay aking Dios."
	 },
	 {
	 	"index": "386",
	 	"verse": "Malakias 2:7,10",
	 	"content": "<sup>7</sup>Sapagka't ang mga labi ng saserdote ay dapat mangagingat ng kaalaman, at kanilang marapat hanapin ang kautusan sa kaniyang bibig; sapagka't siya ang sugo ng Panginoon ng mga hukbo.<br><sup>10</sup>Wala baga tayong lahat na isang ama? hindi baga isang Dios ang lumalang sa atin? bakit tayo nagsisigawa ng paglililo bawa't isa laban sa kaniyang kapatid, na nilalapastangan ang tipan ng ating mga magulang?"
	 },
	 {
	 	"index": "387",
	 	"verse": "Malakias 2:16 NPV",
	 	"content": "<sup>16</sup>Namumuhi ako sa diborsyo ng mag-asawa, sabi ng PANGINOONG Dios ng Israel, at namumuhi ako sa taong binabalot ng karahasan ang sarili na parang nagbabalot ng kasuotan, sabi ng PANGINOON na Makapangyarinan sa lahat. Kaya nga, ingatan mo ang iyong sarili sa iyong espiritu at huwag kang sisira sa pangako."
	 },
	 {
	 	"index": "388",
	 	"verse": "Levitico 26:19",
	 	"content": "<sup>19</sup>At sisirain ko ang kahambugan ng inyong kapangyarihan; at gagawin kong parang bakal ang inyong langit at parang tanso ang inyong lupa:"
	 },
	 {
	 	"index": "389",
	 	"verse": "Lucas 3:3-4",
	 	"content": "<sup>3</sup>At siya'y napasa buong lupain sa palibotlibot ng Jordan, na ipinangangaral ang bautismo ng pagsisisi sa ikapagpapatawad ng mga kasalanan;<br><sup>4</sup>Gaya ng nasusulat sa aklat ng salita ng propeta Isaias, Ang tinig ng isang sumisigaw sa ilang, Ihanda ninyo ang daan ng Panginoon, Tuwirin ninyo ang kaniyang mga landas."
	 },
	 {
	 	"index": "390",
	 	"verse": "1 Tesalonica 2:14 BSP",
	 	"content": "<sup>14</sup>Tinularan nga ninyo, mga kapatid, ang mga iglesya ng Diyos sa Judea, ang mga iglesya ni Kristo Jesus. Dumanas kayo ng hirap mula sa inyong mga kalahi tulad ng kanilang dinanas mula sa mga Judio."
	 },
	 {
	 	"index": "391",
	 	"verse": "Ezekiel 22:27",
	 	"content": "<sup>27</sup>Ang mga prinsipe sa gitna niyaon ay parang mga lobo na nangangagaw ng huli, upang mangagbubo ng dugo, at upang magpahamak ng mga tao, upang sila'y mangagkaroon ng mahalay na pakinabang."
	 },
	 {
	 	"index": "392",
	 	"verse": "Colosas 2:9,16",
	 	"content": "<sup>9</sup>Sapagka't sa kaniya'y nananahan ang buong kapuspusan ng pagka Dios sa kahayagan ayon sa laman.<br><sup>16</sup>Sinoman nga ay huwag humatol sa inyo tungkol sa pagkain, o sa paginom, o tungkol sa kapistahan, o bagong buwan o araw ng sabbath:"
	 },
	 {
	 	"index": "393",
	 	"verse": "Apocalipsis 2:1",
	 	"content": "<sup>1</sup>Sa anghel ng iglesia sa Efeso ay isulat mo: Ang mga bagay na ito ay sinasabi ng may hawak ng pitong bituin sa kaniyang kanang kamay, na yaong lumalakad sa gitna ng pitong kandelerong ginto:"
	 },
	 {
	 	"index": "394",
	 	"verse": "Josue 24:15",
	 	"content": "<sup>15</sup>At kung inaakala ninyong masama na maglingkod sa Panginoon, ay piliin ninyo sa araw na ito kung sino ang inyong paglilingkuran; kung ang mga dios ng inyong mga magulang na pinaglingkuran sa dako roon ng Ilog, o ang dios ng mga Amorrheo na ang lupain nila ay inyong tinatahanan: nguni't sa ganang akin at ng aking sangbahayan ay maglilingkod kami sa Panginoon."
	 },
	 {
	 	"index": "395",
	 	"verse": "Genesis 3:15",
	 	"content": "<sup>15</sup>At papagaalitin ko ikaw at ang babae, at ang iyong binhi at ang kaniyang binhi: ito ang dudurog ng iyong ulo, at ikaw ang dudurog ng kaniyang sakong."
	 },
	 {
	 	"index": "396",
	 	"verse": "Deuteronomio 29:29",
	 	"content": "<sup>29</sup>Ang mga bagay na lihim ay nauukol sa Panginoon nating Dios: nguni't ang mga bagay na hayag ay nauukol sa atin at sa ating mga anak magpakailan man, upang ating magawa ang lahat ng mga salita ng kautusang ito."
	 },
	 {
	 	"index": "397",
	 	"verse": "Awit 22:6-7",
	 	"content": "<sup>6</sup>Nguni't ako'y uod at hindi tao; Duwahagi sa mga tao, at hinamak ng bayan.<br><sup>7</sup>Silang lahat na nangakakita sa akin ay tinatawanang mainam ako: Inilalawit nila ang labi, iginagalaw nila ang ulo, na sinasabi,"
	 },
	 {
	 	"index": "398",
	 	"verse": "Malakias 4:5-6",
	 	"content": "<sup>5</sup>Narito, aking susuguin sa inyo si Elias na propeta bago dumating ang dakila at kakilakilabot na kaarawan ng Panginoon.<br><sup>6</sup>At kaniyang papagbabaliking-loob ang puso ng mga ama sa mga anak, at ang puso ng mga anak sa kanilang mga magulang; baka ako'y dumating at saktan ko ang lupa ng sumpa."
	 },
	 {
	 	"index": "399",
	 	"verse": "Isaias 34:1-2",
	 	"content": "<sup>1</sup>Kayo'y magsilapit, kayong mga bansa, upang mangakinig; at dinggin ninyo, ninyong mga bayan; dinggin ng lupa at ng buong narito; ng sanglibutan, at ng lahat na bagay na nagsisilitaw rito.<br><sup>2</sup>Sapagka't ang Panginoon ay may galit laban sa lahat na bansa, at pusok ng loob laban sa lahat nilang hukbo: kaniyang lubos na nilipol sila, kaniyang ibinigay sila sa patayan."
	 },
	 {
	 	"index": "400",
	 	"verse": "Apocalipsis 7:4-8",
	 	"content": "<sup>4</sup>At narinig ko ang bilang ng mga natatakan, na isang daan at apat na pu't apat na libo, na natatakan, sa bawa't angkan ng mga anak ni Israel:<br><sup>5</sup>Sa angkan ni Juda ay labingdalawang libo ang tinatakan; Sa angkan ni Ruben ay labingdalawang libo; Sa angkan ni Gad ay labingdalawang libo;<br><sup>6</sup>Sa angkan ni Aser ay labingdalawang libo; Sa angkan ni Neftali ay labingdalawang libo; Sa angkan ni Manases ay labingdalawang libo;<br><sup>7</sup>Sa angkan ni Simeon ay labingdalawang libo; Sa angkan ni Levi ay labingdalawang libo; Sa angkan ni Isacar ay labingdalawang libo;<br><sup>8</sup>Sa angkan ni Zabulon ay labingdalawang libo; Sa angkan ni Jose ay labingdalawang libo; Sa angkan ni Benjamin ay labingdalawang libo ang tinatakan."
	 },
	 {
	 	"index": "401",
	 	"verse": "1 Corinto 15:50-53",
	 	"content": "<sup>50</sup>Sinasabi ko nga ito, mga kapatid, na ang laman at ang dugo ay hindi makapagmamana ng kaharian ng Dios; ni ang kasiraan ay magmamana ng walang kasiraan.<br><sup>51</sup>Narito, sinasaysay ko sa inyo ang isang hiwaga: hindi tayong lahat ay mangatutulog, nguni't tayong lahat ay babaguhin,<br><sup>52</sup>Sa isang sangdali, sa isang kisap-mata, sa huling pagtunog ng pakakak: sapagka't tutunog ang pakakak, at ang mga patay ay mangabubuhay na maguli na walang kasiraan, at tayo'y babaguhin.<br><sup>53</sup>Sapagka't kinakailangan na itong may kasiraan ay magbihis ng walang kasiraan, at itong may kamatayan ay magbihis ng walang kamatayan."
	 },
	 {
	 	"index": "402",
	 	"verse": "Juan 12:49-50",
	 	"content": "<sup>49</sup>Sapagka't ako'y hindi nagsasalita na mula sa aking sarili; kundi ang Ama na sa akin ay nagsugo, ay siyang nagbigay sa akin ng utos, kung ano ang dapat kong sabihin, at kung ano ang dapat kong salitain.<br><sup>50</sup>At nalalaman ko na ang kaniyang utos ay buhay na walang hanggan; ang mga bagay nga na sinasalita ko, ay ayon sa sinabi sa akin ng Ama, gayon ko sinasalita."
	 },
	 {
	 	"index": "403",
	 	"verse": "2 Juan 1:7",
	 	"content": "<sup>7</sup>Sapagkat maraming magdaraya na nangagsisilitaw sa sanglibutan, sa makatuwid ay ang mga hindi nangagpapahayag na si Jesucristo ay naparitong nasa laman. Ito ang magdaraya at ang anticristo."
	 },
	 {
	 	"index": "404",
	 	"verse": "Juan 20:25-28",
	 	"content": "<sup>25</sup>Sinabi nga sa kaniya ng ibang mga alagad, Nakita namin ang Panginoon. Ngunit sinabi niya sa kanila, Malibang aking makita sa kaniyang mga kamay ang butas ng mga pako, at maisuot ko ang aking daliri sa butas ng mga pako, at maisuot ko ang aking kamay sa kaniyang tagiliran, ay hindi ako sasampalataya.<br><sup>26</sup>At pagkaraan ng walong araw ay muling nasa loob ng bahay ang kaniyang mga alagad, at kasama nila si Tomas. Dumating si Jesus, nang nangapipinid ang mga pinto, at tumayo sa gitna, at sinabi, Kapayapaan ang sumainyo.<br><sup>27</sup>Nang magkagayo'y sinabi niya kay Tomas, Idaiti mo rito ang iyong daliri, at tingnan mo ang aking mga kamay; at idaiti mo rito ang iyong kamay, at isuot mo siya sa aking tagiliran: at huwag kang di mapanampalatayahin, kundi mapanampalatayahin.<br><sup>28</sup>Sumagot si Tomas, at sa kaniya'y sinabi, Panginoon ko at Dios ko."
	 },
	 {
	 	"index": "405",
	 	"verse": "1 Juan 5:7-8",
	 	"content": "<sup>7</sup>At ang Espiritu ang nagpapatotoo, sapagka't ang Espiritu ay katotohanan.<br><sup>8</sup>Sapagka't may tatlong nagpapatotoo, ang Espiritu, ang tubig, at ang dugo: at ang tatlo ay nagkakaisa."
	 },
	 {
	 	"index": "406",
	 	"verse": "Hebreo 1:8-9",
	 	"content": "<sup>8</sup>Nguni't tungkol sa Anak ay sinasabi, Ang iyong luklukan, Oh Dios, ay magpakailan man; At ang setro ng katuwiran ay siyang setro ng iyong kaharian.<br><sup>9</sup>Inibig mo ang katuwiran, at kinapootan mo ang kasamaan; Kaya't ang Dios, ang Dios mo, ay nagbuhos sa inyo, Ng langis ng kasayahang higit sa iyong mga kasamahan."
	 },
	 {
	 	"index": "407",
	 	"verse": "Roma 5:15,17 MB",
	 	"content": "<sup>15</sup>Ngunit magkaiba ang dalawang ito, sapagkat ang kagandahang-loob ng Diyos ay higit na di hamak kaysa pagsuway ni Adan. Totoo ngang nagdala ng kamatayan sa marami ang pagsuway ni Adan, ngunit malaki ang kahigtan ng kagandahang-loob ng Diyos at ng kaloob na dumating sa napakarami sa pamamagitan ng isang tao - si Jesu-Cristo.<br><sup>17</sup>Sa pamamagitan ng isang tao - si Adan - naghari ang kamatayan dahil sa kanyang kasalanan. Ngunit sa pamamagitan din ng isang tao - si Jesu-Cristo - higit ang kinamtan ng mga kinahabagan nang sagana at pinawalang-sala: sila'y maghahari sa buhay. Kay laki ng kahigtan ng pagpapalang ito kaysa kasawiang iyon."
	 },
	 {
	 	"index": "408",
	 	"verse": "Colosas 1:15-16",
	 	"content": "<sup>15</sup>Na siya ang larawan ng Dios na di nakikita, ang panganay ng lahat ng mga nilalang;<br><sup>16</sup>Sapagka't sa kaniya nilalang ang lahat na mga bagay, sa sangkalangitan at sa sangkalupaan, na mga bagay na nakikita at ang mga bagay na di nakikita, maging mga luklukan o mga pagsakop o mga pamunuan o mga kapangyarihan; lahat ng mga bagay na nilalang sa pamamgitan niya at ukol sa kaniya;"
	 },
	 {
	 	"index": "409",
	 	"verse": "Hebreo 7:26",
	 	"content": "<sup>26</sup>Sapagka't nararapat sa atin ang gayong dakilang saserdoteng banal, walang sala, walang dungis, nahihiwalay sa mga makasalanan, at ginawang lalong mataas pa kay sa mga langit;"
	 },
	 {
	 	"index": "410",
	 	"verse": "Hebreo 10:10,12",
	 	"content": "<sup>10</sup>Sa kaloobang yaon tayo'y pinapaging-banal, sa pamamagitan ng pagkahandog ng katawan ni Cristo na minsan magpakailan man.<br><sup>12</sup>Nguni't siya, nang makapaghandog ng isa lamang hain patungkol sa mga kasalanan magpakailan man, ay umupo sa kanan ng Dios;"
	 },
	 {
	 	"index": "411",
	 	"verse": "1 Timoteo 3:16",
	 	"content": "<sup>16</sup>At walang pagtatalo, dakila ang hiwaga ng kabanalan; Yaong nahayag sa laman, Pinapaging-banal sa espiritu, Nakita ng mga anghel, Ipinangaral sa mga bansa, Sinampalatayanan sa sanglibutan, Tinanggap sa itaas sa kaluwalhatian."
	 },
	 {
	 	"index": "412",
	 	"verse": "Hebreo 9:28",
	 	"content": "Ay gayon din naman si Cristo, na inihandog na minsan upang dalhin ang mga kasalanan ng marami, sa ikalawa'y pakikita na hiwalay sa kasalanan, sa ikaliligtas ng mga nagsisipaghintay sa kaniya.<hr><b>Lamsa</b><br><sup>28</sup>So Christ was once offered to bear the sins of many; so that at his second coming he shall appear without our sins for the salvation of those who look for him."
	 },
	 {
	 	"index": "413",
	 	"verse": "2 Pedro 2:1-3",
	 	"content": "<sup>1</sup>Nguni't may nagsilitaw din naman sa bayan na mga bulaang propeta, na gaya naman sa inyo'y magkakaroon ng mga bulaang guro, na mangagpapasok sa lihim ng mga makakapahamak na mga hiduwang pananampalataya, na itatatuwa pati ang Panginoon na bumili sa kanila, na mangagtataglay sa kanilang sarili ng madaling pagkapahamak.<br><sup>2</sup>At maraming magsisisunod sa kanilang mga gawang mahahalay; na dahil sa kanila ay pagsasalitaan ng masama ang daan ng katotohanan.<br><sup>3</sup>At sa kasakiman sa mga pakunwaring salita ay ipangangalakal kayo: na ang hatol nga sa kanila mula nang una ay hindi nagluluwat, at ang kanilang kapamahakan ay hindi nagugupiling."
	 },
	 {
	 	"index": "414",
	 	"verse": "Mateo 13:39",
	 	"content": "<sup>39</sup>At ang kaaway na naghasik ng mga ito ay ang diablo: at ang pagaani ay ang katapusan ng sanglibutan; at ang mga mangaani ay ang mga anghel."
	 },
	 {
	 	"index": "415",
	 	"verse": "Juan 17:9-11 MB",
	 	"content": "<sup>9</sup>Idinadalangin ko sila, hindi ang sanlibutan kundi ang lahat ng ibinigay mo sa akin, sapagkat sila'y iyo.<br><sup>10</sup>Ang lahat ng akin ay iyo, at ang lahat ng iyo ay akin; at pararangalan ako sa pamamagitan nila.<br><sup>11</sup>At ngayon, ako'y papunta na sa  iyo; aalis na ako sa sanlibutan, ngunit nasa sanlibutan pa sila. Amang banal, ingatan mo sila sa pamamagitan ng kapangyarihan ng iyong pangalan, pangalang ibinigay  mo sa akin, upang sila'y maging isa, kung paanong tayo'y iisa."
	 },
	 {
	 	"index": "416",
	 	"verse": "Juan 21:15-17 MB",
	 	"content": "<sup>15</sup>Pagkakain nila tinanong ni Jesus si Simon Pedro, Simon, anak ni Juan, iniibig mo ba ako nang higit kaysa mga ito? Opo, Panginoon, nalalaman ninyong iniibig ko kayo, tugon niya. Sinabi sa kanya ni Jesus, Pakanin mo ang aking mga batang tupa.<br><sup>16</sup>Muli siyang tinanong ni Jesus, Simon, anak ni Juan, iniibig mo ba ako? Sumagot si Pedro, Opo, Panginoon, nalalaman ninyong iniibig ko kayo. Ani Jesus,  Pangalagaan mo ang aking mga tupa.<br><sup>17</sup>Pangatlong ulit na tinanong siya ni Jesus, Simon, anak ni Juan, iniibig mo ba ako? Nalungkot si Pedro sapagkat makaitlo siyang tinanong: Iniibig mo ba ako! At sumagot siya, Panginoon, nalalaman po ninyo ang lahat ng bagay; nalalaman ninyong iniibig ko kayo. Sinabi sa kanya ni Jesus, Pakanin mo ang aking mga tupa."
	 },
	 {
	 	"index": "417",
	 	"verse": "Mateo 10:40,42 MB",
	 	"content": "<sup>40</sup>Ang tumatanggap sa inyo ay tumatanggap sa akin, at ang tumatanggap sa akin ay tumatanggap sa nagsugo sa akin.<br><sup>42</sup>At sinumang magbigay ng kahit isang basong tubig na malamig sa isa sa maliliit na ito dahil sa ito'y alagad ko - tinitiyak ko sa inyong tatanggap siya ng gantimpala."
	 },
	 {
	 	"index": "418",
	 	"verse": "Mateo 24:9-11 NPV",
	 	"content": "<sup>9</sup>Sa panahong 'yon, kayo'y uusigin at papatayin. Kapopootan kayo ng lahat dahil sa akin.<br><sup>10</sup>Maraming tatalikod sa kanilang pananampalataya, mapopoot sa isa't isa, at magkakanulo sa isa't isa.<br><sup>11</sup>Lilitaw ang maraming bulaang propeta at ililigaw ang marami."
	 },
	 {
	 	"index": "419",
	 	"verse": "1 Corinto 11:2",
	 	"content": "<sup>2</sup>Kayo'y aking pinupuri nga, na sa lahat ng mga bagay ay naaalaala ninyo ako, at iniingatan ninyong matibay ang mga turo, na gaya ng ibinigay ko sa inyo."
	 },
	 {
	 	"index": "420",
	 	"verse": "Hebreo 5:4",
	 	"content": "<sup>4</sup>At sinoman ay hindi tumatanggap sa kaniyang sarili ng karangalang ito, liban na kung tawagin siya ng Dios, na gaya ni Aaron."
	 },
	 {
	 	"index": "421",
	 	"verse": "Galacia 1:11-12",
	 	"content": "<sup>11</sup>Sapagka't aking ipinatatalastas sa inyo, mga kapatid, tungkol sa, evangelio na aking ipinangaral, na ito'y hindi ayon sa tao.<br><sup>12</sup>Sapagka't hindi ko tinanggap ito sa tao, ni itinuro man sa akin, kundi aking tinanggap sa pamamagitan ng pahayag ni Jesucristo."
	 },
	 {
	 	"index": "422",
	 	"verse": "Kawikaan 6:23",
	 	"content": "<sup>23</sup>Sapagka't ang utos ay tanglaw; at ang kautusan ay liwanag; At ang mga saway na turo ay daan ng buhay:"
	 },
	 {
	 	"index": "423",
	 	"verse": "Juan 20:28",
	 	"content": "<sup>28</sup>Sumagot si Tomas, at sa kaniya'y sinabi, Panginoon ko at Dios ko."
	 },
	 {
	 	"index": "424",
	 	"verse": "Juan 21:25",
	 	"content": "<sup>25</sup>At mayroon ding iba't ibang mga bagay na ginawa si Jesus, na kung susulating isa-isa, ay inaakala ko na kahit sa sanglibutan ay hindi magkakasiya ang mga aklat na susulatin."
	 },
	 {
	 	"index": "425",
	 	"verse": "Apocalipsis 6:12,15",
	 	"content": "<sup>12</sup>At nakita ko nang buksan niya ang ikaanim na tatak, at nagkaroon ng malakas na lindol; at ang araw ay umitim na gaya ng isang magaspang na kayong buhok na maitim, at ang buong buwan ay naging gaya ng dugo;<br><sup>15</sup>At ang mga hari sa lupa, at ang mga prinsipe, at ang mga pangulong kapitan, at ang mayayaman, at ang mga makapangyarihan, at ang bawa't alipin at ang bawa't laya, ay nagsipagtago sa mga yungib at sa mga bato sa mga bundok;"
	 },
	 {
	 	"index": "426",
	 	"verse": "Isaias 14:18",
	 	"content": "<sup>18</sup>Lahat ng mga hari ng mga bansa, silang lahat, nangatutulog sa kaluwalhatian, bawa't isa'y sa kaniyang sariling bahay."
	 },
	 {
	 	"index": "427",
	 	"verse": "Eclesiastes 12:13-14",
	 	"content": "<sup>13</sup>Ito ang wakas ng bagay; lahat ay narinig: ikaw ay matakot sa Dios, at sundin mo ang kaniyang mga utos; sapagka't ito ang buong katungkulan ng tao.<br><sup>14</sup>Sapagka't dadalhin ng Dios ang bawa't gawa sa kahatulan, pati ng bawa't kubling bagay, maging ito'y mabuti o maging ito'y masama."
	 },
	 {
	 	"index": "428",
	 	"verse": "Hebreo 12:22-24",
	 	"content": "<sup>22</sup>Datapuwa't nagsilapit kayo sa bundok ng Sion, at sa bayan ng Dios na buhay, ang Jerusalem sa kalangitan, at sa mga di mabilang na hukbo ng mga anghel,<br><sup>23</sup>Sa pangkalahatang pulong at iglesia ng mga panganay na nangatatala sa langit, at sa Dios na Hukom ng lahat, at mga espiritu ng mga taong ganap na pinasakdal,<br><sup>24</sup>At kay Jesus na tagapamagitan ng bagong tipan, at dugong pangwisik na nagsasalita ng lalong mabuti kay sa dugo ni Abel."
	 },
	 {
	 	"index": "429",
	 	"verse": "Santiago 2:7",
	 	"content": "<sup>7</sup>Hindi baga nilalapastangan nila yaong marangal na pangalan na sa inyo'y itinatawag?"
	 },
	 {
	 	"index": "430",
	 	"verse": "Efeso 1:7",
	 	"content": "<sup>7</sup>Na sa kaniya'y mayroon tayo ng ating katubusan sa pamamagitan ng kaniyang dugo, na kapatawaran ng ating mga kasalanan, ayon sa mga kayamanan ng kaniyang biyaya,"
	 },
	 {
	 	"index": "431",
	 	"verse": "Awit 4:3",
	 	"content": "<sup>3</sup>Nguni't talastasin ninyo na ibinukod ng Panginoon sa ganang kaniyang sarili ang banal:  Didinggin ng Panginoon pagka ako'y tumawag sa kaniya."
	 },
	 {
	 	"index": "432",
	 	"verse": "Roma 5:8-9",
	 	"content": "<sup>8</sup>Datapuwa't ipinagtatagubilin ng Dios ang kaniyang pagibig sa atin, na nang tayo'y mga makasalanan pa, si Cristo ay namatay dahil sa atin.<br><sup>9</sup>Lubha pa nga ngayong inaaring-ganap sa pamamagitan ng kaniyang dugo, ay mangaliligtas tayo sa galit ng Dios sa pamamagitan niya."
	 },
	 {
	 	"index": "433",
	 	"verse": "Isaias 44:24",
	 	"content": "<sup>24</sup>Ganito ang sabi ng Panginoon, ng iyong Manunubos, at niyang naganyo sa iyo mula sa bahay-bata, Ako ang Panginoon na gumagawa ng lahat na bagay; na naglaladlad, na magisa ng langit; na naglalatag ng lupa;"
	 },
	 {
	 	"index": "434",
	 	"verse": "2 Cronica 36:15",
	 	"content": "<sup>15</sup>At ang Panginoon, ang Dios ng kanilang mga magulang, nagsugo sa kanila sa pamamagitan ng kaniyang mga sugo, na bumangong maaga at nagsugo, sapagka't siya'y nagdalang habag sa kaniyang bayan, at sa kaniyang tahanang dako:"
	 },
	 {
	 	"index": "435",
	 	"verse": "1 Pedro 3:20",
	 	"content": "<sup>20</sup>Na nang unang panahon ay mga suwail, na ang pagpapahinuhod ng Dios, ay nanatili noong mga araw ni Noe, samantalang inihanda ang daong, na sa loob nito'y kakaunti, sa makatuwid ay walong kaluluwa, ang nangaligtas sa pamamagitan ng tubig:"
	 },
	 {
	 	"index": "436",
	 	"verse": "Lucas 21:34",
	 	"content": "<sup>34</sup>Datapuwa't mangagingat kayo sa inyong sarili, baka mangalugmok ang inyong mga puso sa katakawan, at sa kalasingan, at sa mga pagsusumakit ukol sa buhay na ito, at dumating na bigla sa inyo ang araw na yaon na gaya ng silo:"
	 },
	 {
	 	"index": "437",
	 	"verse": "Santiago 4:4",
	 	"content": "<sup>4</sup>Kayong mga mangangalunya, hindi baga ninyo nalalaman na ang pakikipagkaibigan sa sanglibutan ay pakikipagaway sa Dios? Sinoman ngang magibig na maging kaibigan ng sanglibutan ay nagiging kaaway ng Dios."
	 },
	 {
	 	"index": "438",
	 	"verse": "Deuteronomio 4:48",
	 	"content": "<sup>48</sup>Mula sa Aroer na nasa hangganan ng libis ng Arnon, hanggang sa bundok ng Sion (na siya ring Hermon),"
	 },
	 {
	 	"index": "439",
	 	"verse": "Isaias 13:5",
	 	"content": "<sup>5</sup>Sila'y nangagmumula sa malayong lupain, mula sa kaduluduluhang bahagi ng langit, sa makatuwid baga'y ang Panginoon, at ang mga almas ng kaniyang galit, upang gibain ang buong lupain."
	 },
	 {
	 	"index": "440",
	 	"verse": "Isaias 39:3",
	 	"content": "<sup>3</sup>Nang magkagayo'y dumating si Isaias na propeta sa haring Ezechias, at nagsabi sa kaniya, Anong sinabi ng mga lalaking ito? at saan nanggaling na nagsiparito sila sa iyo?  At sinabi ni Ezechias, Sila'y nagsiparito sa akin mula sa malayong lupain, sa Babilonia."
	 },
	 {
	 	"index": "441",
	 	"verse": "Joel 3:8",
	 	"content": "<sup>8</sup>At aking ipagbibili ang inyong mga anak na lalake at babae sa kamay ng mga anak ni Juda, at ipagbibili nila sila sa mga tao sa Seba, sa isang bansang malayo: sapagka't sinalita ng Panginoon."
	 },
	 {
	 	"index": "442",
	 	"verse": "Jeremias 31:7-8",
	 	"content": "<sup>7</sup>Sapagka't ganito ang sabi ng Panginoon, Kayo'y magsiawit ng kasayahan dahil sa Jacob, at magsihiyaw, kayo dahil sa puno ng mga bansa: mangagtanyag kayo, magsipuri kayo, at mangagsabi, Oh Panginoon, iligtas mo ang iyong bayan, ang nalabi sa Israel.<br><sup>8</sup>Narito, aking dadalhin sila mula sa lupaing hilagaan, at pipisanin ko sila mula sa mga kahulihulihang bahagi ng lupa, at kasama nila ang bulag at ang pilay, at ang buntis at ang nagdadamdam na magkakasama: malaking pulutong na magsisibalik sila rito."
	 },
	 {
	 	"index": "443",
	 	"verse": "Gawa 17:24",
	 	"content": "<sup>24</sup>Ang Dios na gumawa ng sanglibutan at ng lahat ng mga bagay na naririto, siya, palibhasa'y Panginoon ng langit at ng lupa, ay hindi tumatahan sa mga templong ginawa ng mga kamay;"
	 },
	 {
	 	"index": "444",
	 	"verse": "2 Samuel 7:24",
	 	"content": "<sup>24</sup>At iyong itinatag sa iyong sarili ang iyong bayang Israel upang maging bayan sa iyo magpakailan man; at ikaw, Panginoon, ay naging kanilang Dios."
	 },
	 {
	 	"index": "445",
	 	"verse": "Genesis 17:7-8 NPV",
	 	"content": "<sup>7</sup>Ang tipang gagawin ko sa iyo at sa magiging lahi mo ay walang hanggan, at ako'y magiging Dios ninyo.<br><sup>8</sup>Ibibigay ko sa iyo at sa lahing susunod sa iyo ang buong lupain ng Canaan, na ngayon ay tinitirhan ninyo. Magiging inyo ito magpakailanman; at ako'y magiging Dios nila."
	 },
	 {
	 	"index": "446",
	 	"verse": "Ezekiel 28:14,17",
	 	"content": "<sup>14</sup>Ikaw ang pinahirang kerubin na tumatakip: at itinatag kita, na anopa't ikaw ay nasa ibabaw ng banal na bundok ng Dios; ikaw ay nagpanhik manaog sa gitna ng mga: batong mahalaga.<br><sup>17</sup>Ang iyong puso ay nagmataas dahil sa iyong kagandahan; iyong ipinahamak ang iyong karunungan dahil sa iyong kaningningan: aking inihagis ka sa lupa; aking inilagay ka sa harap ng mga hari, upang kanilang masdan ka."
	 },
	 {
	 	"index": "447",
	 	"verse": "Malakias 3:10 MB",
	 	"content": "<sup>10</sup>Ibigay ninyong buung-buo ang inyong mga ikapu upang matugunan ang pangangailangan sa aking templo. Subukin ninyong gawin ito, kung hindi ko buksan ang mga durungawan ng langit at ibuhos sa inyo ang masaganang pagpapala."
	 },
	 {
	 	"index": "448",
	 	"verse": "2 Tesalonica 2:7",
	 	"content": "<sup>7</sup>Sapagka't ang hiwaga ng kasamaan ay gumagawa na: lamang ay pumipigil ngayon, hanggang sa alisin ito."
	 },
	 {
	 	"index": "449",
	 	"verse": "Gawa 20:29-30",
	 	"content": "<sup>29</sup>Aking talastas na pagalis ko ay magsisipasok sa inyo ang mga ganid na lobo, na hindi mangagpapatawad sa kawan;<br><sup>30</sup>At magsisilitaw sa mga kasamahan din ninyo ang mga taong mangagsasalita ng mga bagay na masasama, upang mangagdala ng mga alagad sa kanilang hulihan."
	 },
	 {
	 	"index": "450",
	 	"verse": "Hebreo 12:9 MB",
	 	"content": "<sup>9</sup>Tangi sa riyan - pinarurusahan tayo ng ating mga ama sa laman, at dahil dito'y iginagalang natin sila. Hindi ba lalong nararapat na tayo'y pasakop sa Diyos na ating Ama sa espiritu upang mabuhay tayo?"
	 },
	 {
	 	"index": "451",
	 	"verse": "2 Tesalonica 2:14 NPV",
	 	"content": "<sup>14</sup>Tinawag kayo ng Dios sa pamamagitan ng ebanghelyong ipinangangaral namin sa inyo upang makahati kayo sa kaluwalhatian ng ating Panginoong Jesu-Cristo."
	 },
	 {
	 	"index": "452",
	 	"verse": "Isaias 24:15",
	 	"content": "<sup>15</sup>Kaya't luwalhatiin ninyo ang Panginoon sa silanganan, sa makatuwid baga'y ang pangalan ng Panginoon, ng Dios ng Israel, sa mga pulo ng dagat."
	 },
	 {
	 	"index": "453",
	 	"verse": "1 Timoteo 3:15",
	 	"content": "<sup>15</sup>Nguni't kung ako'y magluwat ng mahabang panahon, ay upang maalaman mo kung paano ang dapat sa mga tao na ugaliin nila sa bahay ng Dios, na siyang iglesia ng Dios na buhay, at haligi at suhay ng katotohanan."
	 },
	 {
	 	"index": "454",
	 	"verse": "2 Tesalonica 2:9-10",
	 	"content": "<sup>9</sup>Siya, na ang kaniyang pagparito ay ayon sa paggawa ni Satanas na may buong kapangyarihan at mga tanda at mga kahangahangang kasinungalingan,<br><sup>10</sup>At may buong daya ng kalikuan sa nangapapahamak; sapagka't hindi nila tinanggap ang pagibig sa katotohanan, upang sila'y mangaligtas."
	 },
	 {
	 	"index": "455",
	 	"verse": "Roma 3:28",
	 	"content": "<sup>28</sup>Kaya nga maipasisiya natin na ang tao ay inaaring-ganap sa pananampalataya na hiwalay sa mga gawa ng kautusan."
	 },
	 {
	 	"index": "456",
	 	"verse": "Efeso 2:8-9",
	 	"content": "<sup>8</sup>Sapagka't sa biyaya kayo'y nangaligtas sa pamamagitan ng pananampalataya; at ito'y hindi sa inyong sarili, ito'y kaloob ng Dios; Hindi sa pamamagitan ng mga gawa, upang ang sinoman ay huwag magmapuri."
	 },
	 {
	 	"index": "457",
	 	"verse": "Tito 3:5",
	 	"content": "<sup>5</sup>Na hindi dahil sa mga gawa sa katuwiran na ginawa nating sarili, kundi ngayon sa kaniyang kaawaan ay kaniyang iniligtas tayo, sa pamamagitan ng paghuhugas sa muling kapanganakan at ng pagbabago sa Espiritu Santo,"
	 },
	 {
	 	"index": "458",
	 	"verse": "Lucas 16:16",
	 	"content": "<sup>16</sup>Ang kautusan at ang mga propeta ay nanatili hanggang kay Juan: mula noo'y ang evangelio ng kaharian ng Dios ay ipinangangaral, at ang bawa't tao ay pumapasok doon na nagpipilit."
	 },
	 {
	 	"index": "459",
	 	"verse": "Genesis 33:20",
	 	"content": "<sup>20</sup>At siya'y nagtindig doon ng isang dambana, at tinawag niyang <i>El-Elohe-Israel.</i>"
	 },
	 {
	 	"index": "460",
	 	"verse": "Ezra 1:1",
	 	"content": "<sup>1</sup>Nang unang taon nga ni Ciro na hari sa Persia, upang ang salita ng Panginoon sa pamamagitan ng bibig ni Jeremias ay maganap, kinilos ng Panginoon ang diwa ni Ciro na hari sa Persia, na siya'y nagtanyag sa kaniyang buong kaharian, at isinulat din naman, na sinasabi,"
	 },
	 {
	 	"index": "461",
	 	"verse": "Isaias 57:15",
	 	"content": "<sup>15</sup>Sapagka't ganito ang sabi ng Mataas at Matayog na tumatahan sa walang hanggan, na ang pangalan ay Banal; Ako'y tumatahan sa mataas at banal na dako na kasama rin niya na may pagsisisi at pagpapakumbabang-loob, upang bumuhay ng loob ng nagpapakumbaba, at upang bumuhay ng puso ng nagsisisi."
	 },
	 {
	 	"index": "462",
	 	"verse": "Jeremias 1:6",
	 	"content": "<sup>6</sup>Nang magkagayo'y sinabi ko, Ah, Panginoong Dios! narito, hindi ako marunong magsalita: sapagka't ako'y bata."
	 },
	 {
	 	"index": "463",
	 	"verse": "Obadias 1:4",
	 	"content": "<sup>4</sup>Bagaman ikaw ay pailanglang sa itaas na parang aguila, at bagaman ang iyong pugad ay malagay sa gitna ng mga bituin, aking ibababa ka mula roon, sabi ng Panginoon."
	 },
	 {
	 	"index": "464",
	 	"verse": "Mikas 5:2",
	 	"content": "<sup>2</sup>Nguni't ikaw, Beth-lehem Ephrata, na maliit upang lumagay sa libolibo ng Juda, mula sa iyo ay lalabas sa akin ang isa na magpupuno sa Israel; na ang pinagbuhatan niya ay mula nang una, mula nang walang hanggan."
	 },
	 {
	 	"index": "465",
	 	"verse": "Gawa 13:39",
	 	"content": "<sup>39</sup>At sa pamamagitan niya ang bawa't nananampalataya ay inaaring ganap sa lahat ng mga bagay, na sa mga ito'y hindi kayo aariing ganap sa pamamagitan ng kautusan ni Moises."
	 },
	 {
	 	"index": "466",
	 	"verse": "Exodo 3:14-15",
	 	"content": "<sup>14</sup>At sinabi ng Dios kay Moises, AKO YAONG AKO NGA; at kaniyang sinabi, Ganito ang sasabihin mo sa mga anak ni Israel, Sinugo ako sa inyo ni AKO NGA.<br><sup>15</sup>At sinabi pa ng Dios kay Moises, Ganito ang sasabihin mo sa mga anak ni Israel, Sinugo ako sa inyo ng Panginoon, ng Dios ng inyong mga magulang, ng Dios ni Abraham, ng Dios ni Isaac, at ng Dios ni Jacob: ito ang aking pangalan magpakailan man, at ito ang aking pinakaalaala sa lahat ng mga lahi."
	 },
	 {
	 	"index": "467",
	 	"verse": "Deuteronomio 30:19-20",
	 	"content": "<sup>19</sup>Aking tinatawag ang langit at ang lupa na pinakasaksi laban sa inyo sa araw na ito, na aking ilagay sa harap mo ang buhay at ang kamatayan, ang pagpapala at ang sumpa; kaya't piliin mo ang buhay, upang ikaw ay mabuhay, ikaw, at ang iyong binhi;<br><sup>20</sup>Na iyong ibigin ang Panginoon mong Dios, na sundin ang kaniyang tinig, at lumakip sa kaniya: sapagka't siya ang iyong buhay, at ang kalaunan ng iyong mga araw; upang matahanan mo ang lupain na isinumpa ng Panginoon sa iyong mga magulang, kay Abraham, kay Isaac, at kay Jacob, na ibibigay sa kanila."
	 },
	 {
	 	"index": "468",
	 	"verse": "Nahum 2:4",
	 	"content": "<sup>4</sup>Ang mga karo ay nagsisihagibis sa mga lansangan; nangagkakabanggang isa't isa sa mga daan: ang anyo ng mga yaon ay gaya ng mga sulo; nagsisitakbong parang mga kidlat."
	 },
	 {
	 	"index": "469",
	 	"verse": "Exodo 6:3",
	 	"content": "<sup>3</sup>At ako'y napakita kay Abraham, kay Isaac, at kay Jacob na Dios na Makapangyarihan sa lahat; nguni't sa pamamagitan ng aking pangalang Jehova, noon ay hindi ako napakilala sa kanila."
	 },
	 {
	 	"index": "470",
	 	"verse": "Ezekiel 7:2-3",
	 	"content": "<sup>2</sup>At ikaw, anak ng tao, ganito ang sabi ng Panginoong Dios sa lupain ng Israel, May wakas: ang wakas ay dumating sa apat na sulok ng lupain.<br><sup>3</sup>Ngayon ang wakas ay sumasaiyo at aking pararatingin ang aking galit sa iyo, at hahatulan ka ayon sa iyong mga lakad; at ipadadanas ko sa iyo ang lahat ng iyong kasuklamsuklam."
	 },
	 {
	 	"index": "471",
	 	"verse": "2 Pedro 1:20-21",
	 	"content": "<sup>20</sup>Na maalaman muna ito, na alin mang hula ng kasulatan ay hindi nagbuhat sa sariling pagpapaliwanag.<br><sup>21</sup>Sapagka't hindi sa kalooban ng tao dumating ang hula kailanman: kundi ang mga tao ay nagsalita buhat sa Dios, na nangaudyokan ng Espiritu Santo."
	 },
	 {
	 	"index": "472",
	 	"verse": "Marcos 10:27",
	 	"content": "<sup>27</sup>Pagtingin ni Jesus sa kanila'y nagsabi, Hindi maaari ito sa mga tao, datapuwa't hindi gayon sa Dios: sapagka't ang lahat ng mga bagay ay may pangyayari sa Dios."
	 },
	 {
	 	"index": "473",
	 	"verse": "Exodo 34:14",
	 	"content": "<sup>14</sup>Sapagka't hindi ka sasamba sa ibang dios: sapagka't ang Panginoon na ang pangalan ay Mapanibughuin; ay mapanibughuin ngang Dios:"
	 },
	 {
	 	"index": "474",
	 	"verse": "Deuteronomio 4:13",
	 	"content": "<sup>13</sup>At kaniyang ipinahayag sa inyo ang kaniyang tipan, na kaniyang iniutos sa inyong ganapin, sa makatuwid baga'y ang sangpung utos; at kaniyang isinulat sa dalawang tapyas na bato."
	 },
	 {
	 	"index": "475",
	 	"verse": "Genesis 35:18-19",
	 	"content": "<sup>18</sup>At nangyari, nang nalalagot ang kaniyang hininga (sapagka't namatay siya), ay kaniyang pinanganlang Benoni: datapuwa't pinanganlan ng kaniyang ama na Benjamin.<br><sup>19</sup>At namatay si Raquel at inilibing sa daang patungo sa Ephrata (na siyang Beth-lehem)."
	 },
	 {
	 	"index": "476",
	 	"verse": "Ruth 4:7 MB",
	 	"content": "<sup>7</sup>Ganito ang kaugalian sa Israel: kapag tinubos o binili ang isang ari-arian, hinuhubad ng nagpatubos o nagbili ang kanyang panyapak at ibinibigay sa bumili, bilang katibayan ng kanilang kasunduan."
	 },
	 {
	 	"index": "477",
	 	"verse": "Panaghoy 2:6 MB",
	 	"content": "<sup>6</sup>Pinaguho niya ang tabernakulo nito, gaya ng isang halamanan; Winakasan ni Yahweh ang itinakdang pista at Araw ng Pamamahinga, At itinakwil niya sa matinding poot ang hari at saserdote."
	 },
	 {
	 	"index": "478",
	 	"verse": "Jonas 4:10-11 MB",
	 	"content": "<sup>10</sup>Sinabi ni Yahweh:  Tumubo ang halamang iyon, lumago sa loob ng magdamag, at namatay kinabukasan. Wala kang hirap diyan ngunit nalungkot ka nang iya'y mamatay.<br><sup>11</sup>Ako pa kaya ang hindi malungkot sa kalagayan ng Ninive?  Ito'y isang malaking lunsod na tinitirhan ng mahigit na 120,000 katao na pawang walang malay, bukod pa sa makapal na hayop!"
	 },
	 {
	 	"index": "479",
	 	"verse": "Filemon 1:6",
	 	"content": "<sup>6</sup>Upang ang pakikipagkaisa ng iyong pananampalataya, ay maging mabisa sa pagkaalam ng bawa't mabuting bagay na nasa iyo, sa kay Cristo.<hr><b>NIV</b><br><sup>6</sup>I pray that you may be active in sharing your faith, so that you will have a full understanding of every good thing we have in Christ. "
	 },
	 {
	 	"index": "480",
	 	"verse": "3 Juan 1:2-3",
	 	"content": "<sup>2</sup>Minamahal, aking idinadalangin na sa lahat ng mga bagay ay guminhawa ka at bumuti ang iyong katawan, na gaya ng pagginhawa ng iyong kaluluwa.<br><sup>3</sup>Sapagka't ako'y totoong nagalak nang magsidating ang mga kapatid at mangagpatotoo sa iyong katotohanan, ayon sa paglakad mo sa katotohanan."
	 },
	 {
	 	"index": "481",
	 	"verse": "Awit 80:17",
	 	"content": "<sup>17</sup>Mapatong nawa ang iyong kamay sa tao na iyong kinakanan. Sa anak ng tao na iyong pinalakas sa iyong sarili."
	 },
	 {
	 	"index": "482",
	 	"verse": "Isaias 43:25",
	 	"content": "<sup>25</sup>Ako, ako nga ay siyang pumapawi ng iyong mga pagsalangsang alang-alang sa akin; at hindi ko aalalahanin ang iyong mga kasalanan."
	 },
	 {
	 	"index": "483",
	 	"verse": "Isaias 40:22",
	 	"content": "<sup>22</sup>Siya ang nakaupo sa balantok ng lupa, at ang mga nananahan doon ay parang mga balang; siyang naglaladlad ng langit na parang tabing, at inilaladlad na parang tolda upang tahanan.<hr><b>BSP</b><br><sup>22</sup>Nakaupo siya sa itaas ng bilog ng mundo, at mula roo'y parang langgam ang mga tao. Inilalatag niyang parang tela ang langit, inilaladlad na parang toldang tirahan;"
	 },
	 {
	 	"index": "484",
	 	"verse": "Mateo 5:18-19",
	 	"content": "<sup>18</sup>Sapagka't katotohanang sinasabi ko sa inyo, Hanggang sa mangawala ang langit at ang lupa, ang isang tuldok o isang kudlit, sa anomang paraan ay hindi mawawala sa kautusan, hanggang sa maganap ang lahat ng mga bagay.<br><sup>19</sup>Kaya't ang sinomang sumuway sa isa sa kaliitliitang mga utos na ito, at ituro ang gayon sa mga tao, ay tatawaging kaliitliitan sa kaharian ng langit: datapuwa't ang sinomang gumanap at ituro, ito'y tatawaging dakila sa kaharian ng langit."
	 },
	 {
	 	"index": "485",
	 	"verse": "Deuteronomio 18:18-19",
	 	"content": "<sup>18</sup>Aking palilitawin sa kanila ang isang propeta sa gitna ng kanilang mga kapatid, na gaya mo; at aking ilalagay ang aking mga salita sa bibig niya, at kaniyang sasalitain sa kanila ang lahat ng aking iuutos sa kaniya.<br><sup>19</sup>At mangyayari, na sinomang hindi makikinig sa aking mga salita na kaniyang sasalitain sa aking pangalan, ay aking sisiyasatin yaon sa kaniya."
	 },
	 {
	 	"index": "486",
	 	"verse": "Mateo 1:23",
	 	"content": "<sup>23</sup>Narito, ang dalaga'y magdadalang-tao at manganganak ng isang lalake, At ang pangalang itatawag nila sa kaniya ay Emmanuel; na kung liliwanagin, ay sumasa atin ang Dios."
	 },
	 {
	 	"index": "487",
	 	"verse": "1 Corinto 11:13",
	 	"content": "<sup>13</sup>Hatulan ninyo sa inyo-inyong sarili: nararapat baga na manalangin ang babae sa Dios nang walang lambong?"
	 },
	 {
	 	"index": "488",
	 	"verse": "Awit ng mga Awit 8:6 MB",
	 	"content": "<sup>6</sup>Kaya ako'y mahalin mo, sa bisig mo ay ikulong O kay lakas ng pag-ibig, panibugho man ay gayon. Sinlakas ng kamatayan, tumutupok, parang apoy."
	 },
	 {
	 	"index": "489",
	 	"verse": "Isaias 42:5,8",
	 	"content": "<sup>5</sup>Ganito ang sabi ng Dios na Panginoon, na lumikha ng langit, at nagladlad ng mga yaon; siyang naglatag ng lupa at ng nagsisilitaw rito; siyang nagbibigay ng hinga sa bayang nito, at ng diwa sa kanila na nagsisilakad dito: <br><sup>8</sup>Ako ang Panginoon; na siyang aking pangalan: at ang aking kaluwalhatian ay hindi ko ibibigay sa iba, o ang akin mang kapurihan sa mga larawang inanyuan."
	 },
	 {
	 	"index": "490",
	 	"verse": "Ester 8:8",
	 	"content": "<sup>8</sup>Sumulat naman kayo sa mga Judio, kung anong maibigan ninyo sa pangalan ng hari, at tatakan ninyo ng singsing ng hari: sapagka't ang sulat na nasusulat sa pangalan ng hari, at natatakan ng singsing ng hari ay walang taong makatitiwali."
	 },
	 {
	 	"index": "491",
	 	"verse": "Isaias 64:4,8",
	 	"content": "<sup>4</sup>Sapagka't hindi narinig ng mga tao mula nang una, o naulinigan man ng pakinig, o ang mata ay nakakita man ng Dios liban sa iyo, na iginagawa niya ng kabutihan ang naghihintay sa kaniya.<br><sup>8</sup>Nguni't ngayon, Oh Panginoon, ikaw ay aming Ama; kami ang malagkit na putik, at ikaw ay magpapalyok sa amin; at kaming lahat ay gawa ng iyong kamay."
	 },
	 {
	 	"index": "492",
	 	"verse": "Juan 1:19-23",
	 	"content": "<sup>19</sup>At ito ang patotoo ni Juan, nang suguin sa kaniya ng mga Judio mula sa Jerusalem ang mga saserdote at mga Levita upang sa kaniya'y itanong, Sino ka baga?<br><sup>20</sup>At kaniyang ipinahayag, at hindi ikinaila; at kaniyang ipinahayag, Hindi ako ang Cristo.<br><sup>21</sup>At sa kaniya'y kanilang itinanong, Kung gayo'y ano nga?  Ikaw baga'y si Elias?  At sinabi niya, Hindi ako. Ikaw baga ang propeta?  At siya'y sumagot, Hindi.<br><sup>22</sup>Sinabi nga nila sa kaniya, Sino ka baga? upang ibigay namin ang kasagutan sa nangagsugo sa amin. Ano ang sinasabi mo tungkol sa iyong sarili?<br><sup>23</sup>Sinabi niya, Ako ang tinig ng isang humihiyaw sa ilang, Tuwirin ninyo ang daan ng Panginoon, gaya ng sinabi ng propeta Isaias."
	 },
	 {
	 	"index": "493",
	 	"verse": "2 Cronica 24:20-22 MB",
	 	"content": "<sup>20</sup>Dahil dito, ang Espiritu ng Diyos ay bumaba kay Zacarias na anak ng Saserdote Joiada. Tumayo siya sa gitna ng mga tao. Sinabi niya, Ito ang sabi ng Diyos: 'Bakit ninyo nilabag ang mga utos ni Yahweh?  Gusto ba ninyong mapahamak?  Sapagkat itinakwil ninyo siya, itatakwil din niya kayo!'<br><sup>21</sup>Ngunit nagkaisa ang mga tao. At sa utos ng hari, binato nila si Zacarias hanggang sa mamatay, Naganap ito sa looban ng bahay ni Yahweh.<br><sup>22</sup>Hindi man lamang naalaala ng Haring Joas ang tapat na paglilingkod sa kanya ni Joiada na ama ni Zacarias. Bago namatay si Zacarias, ganito ang kanyang sinabi,  Parusahan nawa kayo ni Yahweh sa ginawa ninyong ito!"
	 },
	 {
	 	"index": "494",
	 	"verse": "Jeremias 31:15",
	 	"content": "<sup>15</sup>Ganito ang sabi ng Panginoon, Isang tinig ay narinig sa Rama, panaghoy, at kalagimlagim na iyak, iniiyakan ni Raquel ang kaniyang mga anak; siya'y tumatangging maaliw dahil sa kaniyang mga anak, sapagka't sila'y wala na."
	 },
	 {
	 	"index": "495",
	 	"verse": "1 Corinto 2:13-14",
	 	"content": "<sup>13</sup>Na ang mga bagay na ito ay atin namang sinasalita, hindi sa mga salitang itinuturo ng karunungan ng tao, kundi sa itinuturo ng Espiritu; na iniwawangis natin ang mga bagay na ayon sa espiritu sa mga pananalitang ayon sa espiritu.<br><sup>14</sup>Nguni't ang taong ayon sa laman ay hindi tumatanggap ng mga bagay ng Espiritu ng Dios: sapagka't ang mga ito ay kamangmangan sa kaniya; at hindi niya nauunawa, sapagka't ang mga yaon ay sinisiyasat ayon sa espiritu."
	 },
	 {
	 	"index": "496",
	 	"verse": "Roma 9:4",
	 	"content": "<sup>4</sup>Na pawang mga Israelita; na sa kanila ang pagkukupkop, at ang kaluwalhatian, at ang mga tipan, at ang pagbibigay ng kautusan, at ang paglilingkod sa Dios, at ang mga kapangakuan;"
	 },
	 {
	 	"index": "497",
	 	"verse": "Mateo 23:35",
	 	"content": "<sup>35</sup>Upang mabubo sa inyo ang lahat na matuwid na dugo na nabuhos sa ibabaw ng lupa, buhat sa dugo ng matuwid na si Abel hanggang sa dugo ni Zacarias na anak ni Baraquias na pinatay ninyo sa pagitan ng santuario at ng dambana."
	 },
	 {
	 	"index": "498",
	 	"verse": "Galacia 6:16",
	 	"content": "<sup>16</sup>At ang lahat na mangagsisilakad ayon sa alituntuning ito, kapayapaan at kaawaan nawa ang sumakanila, at sa Israel ng Dios."
	 },
	 {
	 	"index": "499",
	 	"verse": "2 Hari 5:15",
	 	"content": "<sup>15</sup>At siya'y bumalik sa lalake ng Dios, siya at ang buong pulutong niya, at naparoon, at tumayo sa harap niya: at siya'y nagsabi, Narito ngayon, aking talastas na walang Dios sa buong lupa, kundi sa Israel: isinasamo ko ngayon sa iyo na tanggapin mo ang kaloob ng iyong lingkod."
	 },
	 {
	 	"index": "500",
	 	"verse": "Amos 4:13",
	 	"content": "<sup>13</sup>Sapagka't, narito, siyang nagaanyo ng mga bundok, at lumilikha ng hangin, at nagpapahayag sa tao kung ano ang kaniyang pagiisip; na nagpapadilim ng umaga, at yumayapak sa mga mataas na dako ng lupa - ang Panginoon, ang Dios ng mga hukbo ay siya niyang pangalan."
	},
];