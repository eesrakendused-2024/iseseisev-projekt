
var height = 6; 
var width = 5; 

var row = 0; 
var col = 0; 

var gameOver = false;
var wordList = ['Aadam', 'Alpid', 'eesel', 'Ebola', 'Edami', 'Eeden', 'Harju', 'Hiina', 'Hiina', 'Hiina', 'pasun', 'juust', 'Taara', 'aadel', 'aader', 'aaker', 'aaloe', 'aamen', 'aaria', 'aarja', 'aasta', 'aatom', 'abitu', 'ablas', 'abort', 'adrik', 'aduma', 'aedik', 'aegne', 'aegus', 'aetis', 'afeel', 'afekt', 'afiin', 'afiks', 'agaam', 'agaav', 'agens', 'agent', 'ahend', 'ahhaa', 'ahing', 'ahker', 'ahkju', 'ahnur', 'ahnus', 'ahter', 'ahtma', 'ahtus', 'ahven', 'aiake', 'aiand', 'aidaa', 'aijeh', 'aimus', 'aines', 'ainik', 'ainus', 'ajaja', 'ajalt', 'ajama', 'ajati', 'ajatu', 'ajend', 'ajuma', 'ajuti', 'akadi', 'akord', 'aktus', 'akuut', 'alaan', 'alale', 'alane', 'alang', 'alarm', 'alasi', 'alati', 'alatu', 'album', 'aldis', 'alged', 'algis', 'algne', 'algul', 'algus', 'alias', 'alibi', 'allee', 'alles', 'alluv', 'mater', 'almus', 'alpus', 'altai', 'altar', 'altee', 'alund', 'alune', 'alvar', 'ambra', 'ambur', 'amhar', 'amiid', 'amiin', 'ammuu', 'amokk', 'amort', 'ampel', 'amper', 'andam', 'andev', 'andja', 'andma', 'andur', 'anemo', 'angel', 'aniis', 'ankur', 'annak', 'annes', 'annus', 'anood', 'antud', 'anuma', 'apama', 'apeks', 'apell', 'aplus', 'apsat', 'araat', 'aralt', 'arapp', 'arbaa', 'areen', 'arend', 'areng', 'arest', 'argne', 'argoo', 'argsi', 'argus', 'armas', 'armee', 'aroom', 'arpar', 'arrak', 'arsis', 'arste', 'arter', 'aruke', 'aruti', 'arutu', 'arvel', 'asend', 'asima', 'asine', 'asjur', 'askel', 'askus', 'aspar', 'astak', 'astel', 'aster', 'astik', 'astja', 'astma', 'astro', 'asuja', 'asula', 'asuma', 'asund', 'asuur', 'atakk', 'atlas', 'atoll', 'atsih', 'auasi', 'audio', 'augur', 'aukas', 'aukus', 'aulik', 'aurik', 'ausus', 'autor', 'autus', 'avaar', 'avaja', 'avali', 'avama', 'avang', 'avaus', 'avers', 'aviis', 'baaba', 'bager', 'baika', 'bakid', 'balsa', 'balti', 'bande', 'bantu', 'baski', 'basta', 'batik', 'beebi', 'beeta', 'beibe', 'canto', 'besee', 'bidee', 'birma', 'bissa', 'bjass', 'bjeff', 'blokk', 'blond', 'bluff', 'bluus', 'bongo', 'bonne', 'boora', 'boson', 'botas', 'botik', 'brand', 'brass', 'breik', 'briis', 'brikk', 'britt', 'bronh', 'broom', 'bruto', 'bulla', 'burka', 'bursa', 'carry', 'casus', 'belli', 'circa', 'comme', 'cover', 'crack', 'laude', 'vitae', 'curry', 'daina', 'dargi', 'facto', 'deism', 'deist', 'dekra', 'delta', 'denga', 'denim', 'depoo', 'derbi', 'derma', 'detsi', 'devon', 'diees', 'dieet', 'diiva', 'dinas', 'dinee', 'dingo', 'diood', 'disko', 'djakk', 'dogma', 'doina', 'doira', 'dolce', 'domra', 'donja', 'donna', 'draag', 'drahm', 'draiv', 'drapp', 'dreen', 'drell', 'dress', 'drill', 'drink', 'droog', 'droom', 'druus', 'duaal', 'duell', 'duett', 'duool', 'duuma', 'dzott', 'eakas', 'eakus', 'eales', 'ebard', 'edasi', 'edikt', 'edutu', 'edvik', 'eeben', 'eeden', 'eefeu', 'eelik', 'eelis', 'eelne', 'eemal', 'eemus', 'eepik', 'eepos', 'eesel', 'eesti', 'eeter', 'eetik', 'eetja', 'eetma', 'eetsi', 'efeeb', 'efekt', 'egiid', 'ehama', 'ehkki', 'ehmes', 'ehtne', 'eilne', 'einoh', 'eiram', 'eisik', 'eiste', 'eitus', 'ekker', 'eksam', 'elagu', 'elama', 'elamu', 'elast', 'eliit', 'eluma', 'elund', 'elutu', 'email', 'emake', 'emand', 'emane', 'ematu', 'embol', 'embus', 'emiir', 'enese', 'ennak', 'ennem', 'eosla', 'epohh', 'eramu', 'erand', 'ergas', 'eriti', 'erkus', 'esile', 'esine', 'esiti', 'esmas', 'esmik', 'essee', 'ester', 'etaan', 'etapp', 'eteen', 'etlus', 'etnos', 'ettur', 'eveen', 'evenk', 'evima', 'farad', 'farss', 'fauna', 'feood', 'fiaal', 'filee', 'firma', 'fjeld', 'fjord', 'flaam', 'fliis', 'flint', 'flirt', 'floks', 'floor', 'flopi', 'flopp', 'fluor', 'foogt', 'fopaa', 'force', 'forte', 'fraas', 'frakk', 'frank', 'frant', 'frees', 'friik', 'friis', 'frits', 'fritt', 'front', 'frukt', 'fusti', 'fuuga', 'gaasi', 'gaeli', 'gamba', 'gamma', 'gauss', 'geoid', 'gibon', 'ginko', 'gjaur', 'gloss', 'gnoom', 'gooti', 'gorgo', 'graaf', 'graan', 'gramm', 'grand', 'grand', 'grand', 'grand', 'grant', 'grave', 'greif', 'greip', 'grill', 'grimm', 'gripp', 'grogi', 'grokk', 'groot', 'gross', 'grott', 'grupp', 'gusli', 'gvelf', 'haage', 'haake', 'haard', 'haare', 'habin', 'hahaa', 'haige', 'haiku', 'hajus', 'halin', 'halle', 'hallo', 'halss', 'hambu', 'handi', 'hange', 'hansa', 'happy', 'happy', 'harev', 'hargu', 'harik', 'harta', 'harva', 'haude', 'hauge', 'hausa', 'havai', 'heaks', 'hehee', 'heide', 'heite', 'heksa', 'hekto', 'helde', 'helge', 'helin', 'helio', 'henna', 'henri', 'hepik', 'hepta', 'heres', 'heris', 'herts', 'hetke', 'hevea', 'hihih', 'hiile', 'hiilg', 'hiina', 'hilis', 'hilja', 'hilju', 'himur', 'hinde', 'hindi', 'hindu', 'hinne', 'hirne', 'hirss', 'hitse', 'hmjaa', 'hohoo', 'hoiak', 'hoide', 'hoius', 'holps', 'homme', 'homne', 'causa', 'hoole', 'hoome', 'hoone', 'hooti', 'hubin', 'huhuu', 'huige', 'huile', 'huist', 'hukas', 'hukka', 'hulga', 'hulgi', 'hulgu', 'hulka', 'hullu', 'humal', 'humin', 'hunta', 'huupi', 'ibeer', 'idand', 'igama', 'igand', 'viisi', 'igati', 'igine', 'igrek', 'ihane', 'ihhii', 'ihnur', 'ihnus', 'ihuma', 'iibis', 'iidid', 'iidne', 'iidol', 'iidus', 'iiris', 'iisop', 'ikoon', 'ilane', 'ilgur', 'ilgus', 'ilmik', 'ilmne', 'ilmsi', 'ilutu', 'ilves', 'imaam', 'imago', 'imama', 'imeja', 'imema', 'indri', 'inert', 'inetu', 'ingel', 'inter', 'intra', 'inuit', 'invar', 'ioota', 'irama', 'irask', 'irbis', 'irdne', 'iriit', 'irvik', 'isake', 'isand', 'isane', 'isatu', 'isegi', 'isend', 'isetu', 'isiku', 'islam', 'istik', 'isune', 'isuri', 'isutu', 'isver', 'itali', 'ivaja', 'ivake', 'ivama', 'jaala', 'jabur', 'jagin', 'jagur', 'jagus', 'jaguv', 'jahve', 'jajaa', 'jalam', 'jalas', 'jalgu', 'jalul', 'jalus', 'jamps', 'jamss', 'jaoks', 'jaole', 'jaolt', 'jaoti', 'jenka', 'jobin', 'jonks', 'joode', 'jooga', 'joogi', 'jooks', 'jooma', 'joote', 'jootu', 'joove', 'jorin', 'jubin', 'judin', 'jugar', 'juhik', 'juhis', 'juhte', 'juhti', 'juhul', 'juhus', 'julge', 'julla', 'jumal', 'muidu', 'jumbu', 'jumin', 'junga', 'junts', 'jupak', 'jupid', 'jurta', 'jutas', 'jutik', 'jutis', 'jutti', 'juudi', 'juudo', 'juuli', 'juuni', 'juura', 'juust', 'kaabe', 'kaabu', 'kaadi', 'kaali', 'kaame', 'kaane', 'kaape', 'kaaps', 'kaard', 'kaart', 'kaasa', 'kabel', 'kaber', 'kabin', 'kabli', 'kabun', 'kadal', 'kadri', 'kaduv', 'kaebe', 'kaema', 'kaeve', 'kahar', 'kahas', 'kahin', 'kahju', 'kahur', 'kaige', 'kaine', 'kaiss', 'kajak', 'kajur', 'kajut', 'kakao', 'kakar', 'kaksi', 'kalbe', 'kalde', 'kaldu', 'kalev', 'kalge', 'kalju', 'kalka', 'kalla', 'kalle', 'kalli', 'kalme', 'kalor', 'kalts', 'kalur', 'kamal', 'kamar', 'kamee', 'kamin', 'kamps', 'kamul', 'kanal', 'kande', 'kanep', 'kange', 'kanna', 'kanne', 'kants', 'kanuu', 'kapak', 'kapok', 'karge', 'kargu', 'karje', 'karma', 'karri', 'karst', 'karts', 'karus', 'karva', 'kasin', 'kassa', 'kaste', 'kasuk', 'kasum', 'kasur', 'katel', 'katik', 'katke', 'katki', 'katma', 'katse', 'katus', 'kaude', 'kaudu', 'kauem', 'kauge', 'kauka', 'kaupa', 'kauri', 'kauss', 'kaust', 'kaval', 'kebab', 'kebja', 'keder', 'keede', 'keedu', 'keegi', 'keeks', 'keeld', 'keele', 'keeli', 'keema', 'keerd', 'keere', 'keham', 'kehik', 'keldi', 'kellu', 'kelme', 'kelts', 'kemps', 'kenus', 'kerge', 'keris', 'kerke', 'kerss', 'keset', 'kesik', 'keski', 'kesse', 'ketas', 'ketra', 'kevad', 'kevis', 'khaan', 'khaki', 'kiasm', 'kiber', 'kibin', 'kibun', 'kidev', 'kidin', 'kidur', 'kigin', 'kihar', 'kihin', 'kihvt', 'kiiam', 'kiidu', 'kiige', 'kiigu', 'kiiks', 'kiips', 'kiird', 'kiire', 'kiiru', 'kiisk', 'kiiss', 'kiisu', 'kiiva', 'kiivi', 'kikas', 'kikka', 'kikki', 'kilge', 'kilin', 'kilks', 'kille', 'kilts', 'kimar', 'kimps', 'kinge', 'kinni', 'kints', 'kiosk', 'kipra', 'kirbe', 'kirde', 'kirev', 'kirik', 'kirin', 'kirje', 'kirju', 'kirka', 'kirme', 'kirre', 'kirsa', 'kirss', 'kirst', 'kirts', 'kisma', 'kissi', 'kitsi', 'kiuks', 'kiust', 'kivik', 'kivim', 'klaar', 'klaas', 'klade', 'klahv', 'klann', 'klapp', 'klaps', 'klass', 'klatt', 'kleep', 'kleit', 'klemm', 'klibu', 'klike', 'klikk', 'klimp', 'klint', 'klipp', 'klips', 'klirr', 'klomp', 'kloon', 'kloor', 'klopp', 'klops', 'klots', 'kloun', 'klubi', 'klump', 'klunn', 'klupp', 'klutt', 'knihv', 'kniks', 'kobar', 'kober', 'kobin', 'kobra', 'kobsa', 'kodar', 'koger', 'kogum', 'kogur', 'kogus', 'kohal', 'kohev', 'kohin', 'kohma', 'kohta', 'kohus', 'koiku', 'kokku', 'kokni', 'kolde', 'kolge', 'kolin', 'kolju', 'kolks', 'kolla', 'kolle', 'kolli', 'kolme', 'kolmi', 'kolta', 'kombe', 'kombi', 'komet', 'komii', 'komme', 'kommu', 'kompa', 'komps', 'kompu', 'konar', 'kongo', 'konka', 'konks', 'konku', 'konto', 'konts', 'kooda', 'koodi', 'kooku', 'koola', 'koold', 'koole', 'kooma', 'koond', 'koone', 'koort', 'koosa', 'koost', 'koosu', 'kopra', 'kopru', 'kopti', 'korda', 'korea', 'kores', 'korin', 'korje', 'korra', 'korse', 'korso', 'korts', 'korup', 'kosmo', 'koste', 'kotik', 'kottu', 'kotus', 'kouss', 'kover', 'kraad', 'kraal', 'kraam', 'kraan', 'kraap', 'kraas', 'kraat', 'kraav', 'krabi', 'krahh', 'krahv', 'krakk', 'kraks', 'kramm', 'kramp', 'krann', 'krapp', 'kraps', 'kratt', 'krauh', 'kreek', 'kreem', 'kreen', 'kreis', 'krell', 'kreml', 'krepp', 'kress', 'kribe', 'kribu', 'krihv', 'kriik', 'kriim', 'kriis', 'kriit', 'krill', 'kriuh', 'krobe', 'krohv', 'kronu', 'krook', 'krool', 'kroom', 'kroon', 'kroop', 'kroov', 'kropp', 'kross', 'krous', 'krunn', 'krunt', 'krupp', 'krusa', 'kruss', 'kruuk', 'kruup', 'kruus', 'kruvi', 'ksero', 'kubel', 'kudin', 'kudum', 'kugin', 'kuhik', 'kuhje', 'kuigi', 'kuine', 'kuive', 'kujur', 'kukal', 'kukil', 'kukku', 'kulak', 'kuldi', 'kulin', 'kulka', 'kulku', 'kulla', 'kulon', 'kulpa', 'kulum', 'kumer', 'kumin', 'kummi', 'kunas', 'kunde', 'kunel', 'kunst', 'kunts', 'kupar', 'kupee', 'kupik', 'kupla', 'kuram', 'kurat', 'kurdi', 'kurin', 'kurss', 'kusal', 'kuski', 'kutsa', 'kutse', 'kutsu', 'kuues', 'kuuik', 'kuuld', 'kuule', 'kuulo', 'kuulu', 'kuune', 'kuusk', 'kuuti', 'kuvar', 'kvant', 'kvark', 'kvart', 'kvint', 'kvitt', 'kvoot', 'laama', 'laast', 'laava', 'labak', 'labor', 'labus', 'ladem', 'ladin', 'ladna', 'ladra', 'ladum', 'ladur', 'ladus', 'laeng', 'lagin', 'lagle', 'lahas', 'lahin', 'lahja', 'lahke', 'lahku', 'lahti', 'lahus', 'lahve', 'laidu', 'laika', 'laine', 'laisk', 'laius', 'lakei', 'lakku', 'lalin', 'lallu', 'lamam', 'lambu', 'lamee', 'lamik', 'lange', 'lanne', 'laoti', 'lapik', 'lapul', 'larbe', 'largo', 'larhv', 'larin', 'larts', 'laser', 'laske', 'lasso', 'lastu', 'lasum', 'laube', 'laudi', 'lauge', 'lausa', 'lause', 'lausk', 'laust', 'lauto', 'lavat', 'leebe', 'leede', 'leedi', 'leedu', 'leege', 'leelo', 'leelu', 'leema', 'lehik', 'lehis', 'leier', 'leige', 'leitu', 'leiva', 'leivu', 'lembe', 'lemma', 'lemme', 'lento', 'lepik', 'lepis', 'lepne', 'lesbi', 'lesgi', 'letra', 'levik', 'levis', 'liaan', 'libik', 'lible', 'lidin', 'lidus', 'ligem', 'lihas', 'lihav', 'liide', 'liiga', 'liige', 'liisk', 'liist', 'liisu', 'liite', 'liivi', 'liivr', 'likku', 'lilla', 'limps', 'linas', 'lingu', 'linik', 'linne', 'linuk', 'lipik', 'lipsi', 'lirin', 'lirts', 'lirva', 'lisna', 'littu', 'liuge', 'liusk', 'lobby', 'lobin', 'lobri', 'lodev', 'lodin', 'loend', 'loeng', 'loetu', 'logar', 'login', 'lohin', 'lohva', 'loide', 'loits', 'lojus', 'lokse', 'lommi', 'drink', 'longu', 'lonks', 'lontu', 'loode', 'looge', 'looja', 'looma', 'loome', 'loori', 'loots', 'loppi', 'lorin', 'lorri', 'lorts', 'lossi', 'lotsi', 'ludin', 'lugem', 'luger', 'lugin', 'luhta', 'luhva', 'luhvt', 'luide', 'luine', 'luise', 'luisk', 'luits', 'lulli', 'lurin', 'lurts', 'luste', 'lutsi', 'luues', 'luule', 'luune', 'luure', 'maage', 'maaja', 'maalt', 'maani', 'maara', 'maare', 'maast', 'maast', 'maatu', 'macho', 'madal', 'madam', 'madar', 'madel', 'madin', 'madis', 'magas', 'magma', 'magot', 'magun', 'magus', 'mahti', 'maias', 'maika', 'mailt', 'maine', 'maius', 'major', 'makja', 'makra', 'makro', 'makse', 'maksi', 'malai', 'malbe', 'malev', 'malts', 'mambo', 'mamma', 'mammi', 'mamps', 'mango', 'manna', 'mansa', 'mansi', 'manul', 'manus', 'maoli', 'maotu', 'maral', 'maran', 'marli', 'marru', 'marsa', 'marss', 'marus', 'masai', 'maser', 'masin', 'matar', 'matke', 'matma', 'matus', 'medal', 'meede', 'meeli', 'meene', 'meere', 'meger', 'mehem', 'mehka', 'meier', 'meiud', 'melon', 'menss', 'menuk', 'merja', 'mersu', 'meski', 'meson', 'meteo', 'mihus', 'miilu', 'miisu', 'mikro', 'milgi', 'mille', 'milli', 'minap', 'minek', 'minem', 'minev', 'mingi', 'minia', 'minut', 'miska', 'missa', 'mitra', 'mitte', 'mnemo', 'mnjaa', 'mobla', 'modem', 'modus', 'mogul', 'moira', 'moiva', 'mokas', 'mokik', 'mokka', 'moodi', 'moone', 'morbe', 'morse', 'morsk', 'morss', 'mossi', 'mudel', 'mudil', 'mufti', 'mugav', 'mugul', 'muide', 'muidu', 'muist', 'mujal', 'mulgi', 'mulin', 'mulje', 'mulks', 'mulla', 'mulle', 'mullu', 'multi', 'mumio', 'mumps', 'munel', 'murdu', 'murel', 'murre', 'murus', 'mustu', 'muton', 'muude', 'muusa', 'muuti', 'muuvi', 'naase', 'naast', 'naber', 'nabin', 'nafta', 'nagin', 'nagli', 'nahin', 'nahua', 'naima', 'naine', 'najal', 'nakar', 'nanai', 'nandu', 'narin', 'narko', 'narta', 'narts', 'nauru', 'neetu', 'nelik', 'nelja', 'nelma', 'nemad', 'neoon', 'nerka', 'nerts', 'neste', 'neuro', 'nidus', 'nigel', 'nigin', 'nihik', 'niide', 'niigi', 'niiks', 'niisk', 'nilbe', 'nimel', 'nimme', 'ninnu', 'nirin', 'nitro', 'niuks', 'nivoo', 'nogai', 'nohik', 'nohin', 'nojaa', 'nojah', 'nokik', 'nokis', 'noneh', 'nonoh', 'noova', 'norin', 'norra']

var guessList = ['norse', 'norss', 'norus', 'nosin', 'notar', 'notsu', 'nublu', 'nubuk', 'nubul', 'nugat', 'nugis', 'nunnu', 'nurgi', 'nurin', 'nurja', 'nutma', 'nuuks', 'nuust', 'obrok', 'ofort', 'ofset', 'ohhoo', 'ohjur', 'ohter', 'ohutu', 'ohver', 'oijah', 'oinas', 'oinik', 'oivik', 'oktav', 'olbus', 'olema', 'olend', 'oleng', 'oliiv', 'olija', 'ollus', 'omama', 'omand', 'omane', 'omast', 'peast', 'ometi', 'onkel', 'oober', 'oodus', 'oojaa', 'ooker', 'oomen', 'ooper', 'oopus', 'ootel', 'ootus', 'opaak', 'opaal', 'opman', 'optik', 'oraal', 'orden', 'order', 'organ', 'orgia', 'orjus', 'ormus', 'orund', 'osake', 'osalt', 'ositi', 'oskar', 'oskur', 'oskus', 'osman', 'osmik', 'osoon', 'ostja', 'ostma', 'osund', 'osuti', 'otiit', 'otsak', 'otsas', 'otsem', 'otsik', 'otsus', 'ovaal', 'ovaar', 'paali', 'paari', 'paast', 'paber', 'pabin', 'pabul', 'padin', 'padur', 'paene', 'pagan', 'pagar', 'pagas', 'pagin', 'pagun', 'pahem', 'pahin', 'pahur', 'paiga', 'paike', 'paiku', 'pailt', 'paind', 'paine', 'paise', 'paisk', 'pajuk', 'pakal', 'pakil', 'pakis', 'pakke', 'pakku', 'pakme', 'paksu', 'palat', 'palav', 'palee', 'paleo', 'palge', 'palju', 'palve', 'pampa', 'panda', 'pandu', 'panek', 'panev', 'panna', 'pants', 'panus', 'avion', 'paras', 'parem', 'parim', 'parin', 'parka', 'parts', 'parun', 'pasha', 'passe', 'passi', 'pasta', 'pasun', 'peale', 'peagi', 'peagu', 'peake', 'peale', 'pealt', 'peast', 'peats', 'peatu', 'peber', 'pedak', 'peene', 'peerg', 'peeso', 'pehik', 'pehme', 'peiar', 'peide', 'peied', 'peite', 'peits', 'peitu', 'peksa', 'peled', 'pelgu', 'pelus', 'penss', 'penta', 'peoon', 'pepsi', 'perfo', 'permi', 'perse', 'grata', 'grata', 'pesur', 'petik', 'petis', 'petja', 'petma', 'pette', 'piaal', 'piano', 'pidal', 'pidav', 'pidev', 'pidur', 'pieso', 'pigem', 'pihid', 'pihik', 'pihta', 'pihus', 'piibi', 'piiga', 'piiks', 'piilu', 'piima', 'piion', 'piird', 'piire', 'piirg', 'piisk', 'piits', 'pikal', 'pikap', 'pikee', 'pikem', 'pikka', 'pikku', 'pikne', 'piksa', 'pilak', 'pilda', 'pilet', 'pilge', 'pilss', 'pilve', 'pimik', 'pimss', 'pinal', 'pinde', 'pinev', 'pinge', 'pingu', 'pinin', 'pinks', 'pinss', 'pipar', 'pirin', 'pirts', 'pisar', 'pisem', 'pisik', 'pisim', 'pisku', 'pissu', 'piste', 'pisut', 'pitsa', 'pitsu', 'piuks', 'pizza', 'plaan', 'plaat', 'plagu', 'plaks', 'plank', 'plass', 'plast', 'plate', 'plats', 'plauh', 'pleed', 'pleek', 'pleht', 'plekk', 'pleku', 'plett', 'pliin', 'pliit', 'plika', 'pliks', 'plink', 'plinn', 'plokk', 'plomm', 'plonn', 'ploom', 'pluss', 'pluus', 'pobin', 'pobul', 'podin', 'poeem', 'poees', 'poeet', 'pogri', 'poise', 'poiss', 'poisu', 'polis', 'polje', 'polka', 'polut', 'pomel', 'pomin', 'ponks', 'ponts', 'pontu', 'poodu', 'pooge', 'poola', 'poole', 'poolt', 'pooma', 'poonu', 'poort', 'poose', 'poppi', 'pordu', 'porin', 'porno', 'porru', 'porss', 'porte', 'porto', 'ports', 'posin', 'poste', 'potas', 'praad', 'praak', 'praam', 'pragu', 'praht', 'praks', 'prauh', 'prees', 'press', 'prigu', 'priim', 'priis', 'prikk', 'priks', 'prill', 'prink', 'print', 'prior', 'prits', 'priuh', 'forma', 'proff', 'proov', 'props', 'pross', 'proto', 'proua', 'prunn', 'prunt', 'pruss', 'pruuk', 'pruul', 'pruun', 'pruut', 'psalm', 'pudel', 'puder', 'pudev', 'pudin', 'pugal', 'pugem', 'pugin', 'puhas', 'puhev', 'puhin', 'puhis', 'puhke', 'puhki', 'puhta', 'puhte', 'puhul', 'puhur', 'puies', 'puige', 'puine', 'puist', 'pujus', 'pulke', 'pulss', 'pulst', 'pumat', 'pumps', 'pungi', 'punik', 'punkt', 'punna', 'punni', 'punnu', 'purin', 'purju', 'purre', 'purse', 'purts', 'pusar', 'pusle', 'pusta', 'putka', 'putku', 'putuk', 'puude', 'puudu', 'puuks', 'puuma', 'puuna', 'puure', 'puute', 'quasi', 'raada', 'raama', 'raand', 'raats', 'rabak', 'rabav', 'rabin', 'radar', 'radio', 'ragbi', 'ragin', 'raguu', 'rahke', 'rahul', 'raibe', 'raisk', 'raius', 'rajav', 'rakis', 'rakke', 'rakku', 'rakne', 'raksu', 'raibe', 'ralli', 'rambe', 'ramul', 'range', 'ranne', 'rapik', 'raske', 'ratas', 'ratsa', 'ratse', 'ratsu', 'raudu', 'rauge', 'raund', 'rauts', 'ravim', 'reaal', 'reast', 'redel', 'redis', 'reede', 'reema', 'reisi', 'reiud', 'reket', 'relee', 'relss', 'repro', 'resto', 'retro', 'rettu', 'reuma', 'ribin', 'rigin', 'rihas', 'rihti', 'riida', 'riigi', 'riise', 'riisk', 'riist', 'riiul', 'riive', 'rikas', 'rikki', 'rinde', 'ringe', 'ringi', 'rinne', 'rinnu', 'ripik', 'rippu', 'ripse', 'risla', 'riste', 'risti', 'ritta', 'riuge', 'rivik', 'rober', 'robin', 'robot', 'rodeo', 'rogin', 'rohke', 'roisk', 'rondo', 'ronga', 'rooki', 'roome', 'roosa', 'roosk', 'roots', 'rootu', 'rosee', 'rosin', 'rubid', 'rubla', 'rudin', 'rukis', 'ruloo', 'rumal', 'rumba', 'ruske', 'rusuv', 'rutem', 'ruttu', 'ruudi', 'ruuge', 'ruutu', 'saade', 'saaga', 'saage', 'saago', 'saama', 'saami', 'saast', 'saate', 'saati', 'sabat', 'sabin', 'sadam', 'sadul', 'saere', 'sagar', 'sagin', 'sahib', 'sahin', 'sahmu', 'sahvt', 'saida', 'saiga', 'saira', 'sajas', 'sakri', 'saksa', 'salat', 'saldo', 'salsa', 'salto', 'salto', 'salve', 'samas', 'samba', 'sambo', 'samet', 'samss', 'sants', 'saras', 'sardi', 'sassi', 'saund', 'seade', 'sealt', 'seast', 'seatu', 'sebra', 'sedap', 'sedel', 'seder', 'seebu', 'seede', 'seega', 'seeme', 'seest', 'segur', 'sehvt', 'seier', 'seiid', 'seire', 'sekka', 'sekst', 'selge', 'selis', 'selle', 'selts', 'selva', 'selve', 'senat', 'senna', 'senti', 'seong', 'sepik', 'sepis', 'serve', 'servi', 'sette', 'sibul', 'sidin', 'sidur', 'sidus', 'sigar', 'sigma', 'sigur', 'sihik', 'sihin', 'sihku', 'siidi', 'siire', 'silde', 'silin', 'silks', 'sille', 'silur', 'simss', 'sinel', 'sinep', 'sinna', 'sinod', 'sirel', 'sirge', 'sirgu', 'sirin', 'sirts', 'sisal', 'sisim', 'sisin', 'sisse', 'sisus', 'sitke', 'siuks', 'siuts', 'skald', 'skalp', 'skatt', 'skaut', 'skeem', 'skiff', 'skipp', 'skiso', 'skits', 'skoor', 'skraa', 'skunk', 'slaid', 'slepp', 'slumm', 'snitt', 'snoob', 'sobiv', 'soend', 'soeng', 'soerd', 'sohik', 'sohva', 'soige', 'soiku', 'soine', 'solge', 'solin', 'solks', 'solve', 'sombe', 'sooda', 'soolo', 'sooma', 'soome', 'sootu', 'sopis', 'sopka', 'sorav', 'sorbi', 'sorgo', 'sorgu', 'sorid', 'sorin', 'sorts', 'sorus', 'sosin', 'sosku', 'sound', 'soust', 'spasm', 'sperm', 'spets', 'spinn', 'spits', 'spoon', 'spoor', 'sport', 'spurt', 'staap', 'staar', 'stamp', 'start', 'steel', 'stend', 'stepp', 'stiil', 'stilb', 'stipp', 'stoik', 'stoll', 'stopp', 'stukk', 'suaav', 'sudak', 'suhin', 'suige', 'suine', 'suisa', 'suits', 'sujuv', 'sukel', 'suksu', 'sulam', 'sulav', 'sulge', 'sulin', 'sulis', 'sulks', 'sulps', 'sulus', 'sumbe', 'sumdi', 'sumer', 'sumin', 'summa', 'summa', 'summe', 'sumpt', 'sunna', 'supee', 'supel', 'super', 'surin', 'surnu', 'surts', 'suruk', 'surve', 'sushi', 'susin', 'susla', 'suube', 'suude', 'suula', 'suuli', 'suulu', 'suund', 'suura', 'suusk', 'svamm', 'svert', 'sviit', 'sving', 'taadi', 'taane', 'taani', 'taara', 'taarn', 'tabav', 'tabel', 'tagal', 'tahes', 'tahke', 'taide', 'taies', 'taiga', 'taine', 'tajur', 'takka', 'takso', 'talje', 'talum', 'talva', 'tamil', 'tamka', 'tamne', 'tamsa', 'tango', 'tanka', 'tanke', 'tanta', 'tante', 'tants', 'tanum', 'taoti', 'tapja', 'tapma', 'tappa', 'tarbe', 'targu', 'tarne', 'tarre', 'tarve', 'tasem', 'tasku', 'tasuv', 'tatar', 'tatik', 'taust', 'teabe', 'teade', 'teadu', 'teave', 'teder', 'teema', 'teene', 'teeta', 'tegev', 'tegur', 'tegus', 'tehas', 'tehis', 'tehno', 'tehte', 'tehtu', 'teine', 'teism', 'teist', 'tekis', 'tekke', 'tekno', 'teksa', 'tekst', 'teler', 'telik', 'tempo', 'tenge', 'tenor', 'teras', 'terav', 'teris', 'termo', 'terra', 'terts', 'terve', 'tesla', 'tetra', 'tibla', 'tihke', 'tihti', 'tihvt', 'tiide', 'tiine', 'tilde', 'tildi', 'tilge', 'tilin', 'tilke', 'tillu', 'timmi', 'timut', 'tinin', 'tinna', 'tipsi', 'tiree', 'tirel', 'tirin', 'tirts', 'toend', 'toeng', 'tohik', 'tohoh', 'toide', 'toime', 'toite', 'tokai', 'tolge', 'tomat', 'tondo', 'tongi', 'tonks', 'toode', 'toodu', 'tooga', 'tooja', 'tooma', 'toona', 'toora', 'toore', 'toori', 'toost', 'toote', 'topis', 'topka', 'toppe', 'tordi', 'torge', 'torik', 'torin', 'torso', 'torts', 'tosin', 'tossi', 'tpruu', 'traal', 'traan', 'traat', 'traav', 'trafo', 'tragi', 'trahh', 'trahv', 'traks', 'trakt', 'trall', 'tramm', 'trans', 'trapp', 'trass', 'tratt', 'trekk', 'trell', 'trend', 'treng', 'trenn', 'trepp', 'tress', 'trett', 'triik', 'triip', 'triiv', 'trikk', 'trimm', 'tripp', 'trips', 'trits', 'troll', 'tromb', 'troon', 'troop', 'tropp', 'trops', 'tross', 'trots', 'truba', 'trukk', 'trull', 'trumm', 'trump', 'trupp', 'trust', 'truup', 'tsaar', 'tsehh', 'tsett', 'tsink', 'tsipa', 'tsoon', 'tsura', 'tuber', 'tubin', 'tubli', 'tuder', 'tugev', 'tugim', 'tuhar', 'tuhat', 'tuhin', 'tuhud', 'tuiam', 'tuige', 'tuise', 'tuisk', 'tukat', 'tukse', 'tuksi', 'tuksu', 'tulek', 'tulem', 'tulev', 'tulnu', 'tulup', 'tulus', 'tumba', 'tunne', 'tuntu', 'tupik', 'turba', 'turbo', 'turgi', 'turri', 'turse', 'tursk', 'turts', 'turva', 'turve', 'tussu', 'tutki', 'tutti', 'tuttu', 'tuuba', 'tuupi', 'tuust', 'tuuts', 'tuutu', 'tviid', 'tvist', 'ubima', 'ubrik', 'udehe', 'udima', 'udras', 'udune', 'uhama', 'uhhaa', 'uhhuu', 'uhkus', 'uhmer', 'uhtma', 'uijah', 'uimus', 'uinak', 'uitma', 'ujuja', 'ujula', 'ujuma', 'ukaas', 'uksik', 'ulaan', 'ulaja', 'ulama', 'uljas', 'uljus', 'ultra', 'ultus', 'uluma', 'uluss', 'umbes', 'umbne', 'umbra', 'umbri', 'umbus', 'ummik', 'unelm', 'unetu', 'ungas', 'ungur', 'unine', 'untsu', 'unuma', 'uppis', 'uraan', 'urama', 'urbne', 'urgas', 'uriin', 'urjah', 'urris', 'usjas', 'ustav', 'usund', 'utiil', 'utsin', 'uudis', 'uudne', 'uudus', 'uuelt', 'uurak', 'uurik', 'uuris', 'uusik', 'uusus', 'uutja', 'uutma', 'vaaba', 'vaade', 'vaadi', 'vaali', 'vaane', 'vaart', 'vabin', 'vadak', 'vader', 'vadin', 'vadja', 'vaene', 'vaevu', 'vagel', 'vagun', 'vagur', 'vagus', 'vahek', 'vahel', 'vaher', 'vahva', 'vaibe', 'vaier', 'vaiki', 'vainu', 'vaist', 'vajak', 'vajuk', 'vakka', 'vakus', 'valem', 'valev', 'valge', 'valgu', 'valik', 'valim', 'valju', 'valla', 'valsk', 'valss', 'valts', 'valum', 'valus', 'valve', 'vande', 'vanem', 'vangi', 'vanik', 'vanka', 'vanne', 'vanur', 'vanus', 'vaoke', 'vaond', 'varal', 'varas', 'varba', 'varda', 'varem', 'vares', 'varia', 'varik', 'varin', 'varis', 'varje', 'varju', 'varre', 'varss', 'varul', 'vasak', 'vasar', 'vasem', 'vaste', 'vastu', 'vatsk', 'veatu', 'vedad', 'vedel', 'vedik', 'vedru', 'veduk', 'vedur', 'vedus', 'veene', 'veeni', 'veere', 'veerg', 'veetu', 'veidi', 'velme', 'venis', 'veniv', 'vepsa', 'verev', 'verme', 'verst', 'verte', 'vesik', 'veski', 'veste', 'vestu', 'vibro', 'vibur', 'video', 'videv', 'vidin', 'vidus', 'vigel', 'vigin', 'vigle', 'vigur', 'vihik', 'vihin', 'vihje', 'vihur', 'viibe', 'viide', 'viies', 'viija', 'viiks', 'viile', 'viili', 'viima', 'viirg', 'viisa', 'viisi', 'viisk', 'viite', 'viiul', 'vikat', 'vilbe', 'vilge', 'vilin', 'vilka', 'vilks', 'villa', 'viltu', 'vilus', 'vimka', 'vinge', 'vinin', 'vints', 'virge', 'viril', 'virin', 'virre', 'virts', 'virus', 'virva', 'virve', 'visin', 'viski', 'vissi', 'viuks', 'vivat', 'vobla', 'vodka', 'vogul', 'volks', 'volle', 'voodi', 'voole', 'vorst', 'vrakk', 'vuaal', 'vudin', 'vuhin', 'vuhti', 'vuhva', 'vulin', 'vulks', 'vunts', 'vurdi', 'vurhv', 'vurin', 'vurle', 'vurts', 'vusin', 'vussi', 'zlott', 'zombi']

guessList = guessList.concat(wordList);

var word = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
console.log(word);

window.onload = function(){
    intialize();
}


function intialize() {

    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]
    document.body.style.backgroundColor = "#555d50";

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; 
            } 

            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }
    

   
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}

function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return; 

    // alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1; 
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
    }

    else if (e.code == "Enter") {
        update();
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }
}

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";


    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase(); 
    console.log(guess);

    if (!guessList.includes(guess)) {
        document.getElementById("answer").innerText = "Sõna pole sõnastikus";
        return;
    }
    
    let correct = 0;

    let letterCount = {}; 
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letterCount[letter]) {
           letterCount[letter] += 1;
        } 
        else {
           letterCount[letter] = 1;
        }
    }

    console.log(letterCount);

    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

       
        if (word[c] == letter) {
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1; 
        }

        if (correct == width) {
            gameOver = true;
        }
    }

    console.log(letterCount);
    
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        
        if (!currTile.classList.contains("correct")) {
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                
                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                letterCount[letter] -= 1;
            } 
            else {
                currTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
                keyTile.classList.add("absent")
            }
        }
    }

    row += 1; 
    col = 0; 
}