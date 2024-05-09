# State Yonetimi

- State: Uygulamadaki bilesenlerin sahip oldugu bilgi ve ozellikler.

- Prop Drilling : Bilesenlerin yukaridan asagiyta veri tasimasi.

- Context : Uygulamadki state'i butun bilesenler tarafindan erisebilen ve olusturdugumuz merkezlerden yonettigimiz state yonetim araci.

- Redux: Bilesenlerin sahip oldugu ve merkezi olarak tutulmasi gereken state'lerin yonetildigi merkezi state yonetim araci.

# Redux ile ilgili bilinmesi gerekenler

1. Store : Uygulamanin butun bilesenlerine ait bilgilerin tutuldugu yer.State deposu.

2. Reducer: Aksiyondan aldigi talimata gore store'da tutulan state'in nasil degisecegine karar veren fonksiyon.

3. Action: Storedaki state'i guncellemek icin reduca gonderdigimiz nesne. (emir/eylem)

- - Action iki degere sahip bir nesnedir.

> > Type (zorunlu) : Action'un gorevini tanimlayan string.

> > Payload (opsiyonel) :Action'un verisi.

4. Dispatch (Sevketmek) : Action'un gerceklesitigini reducer'a haber veen method.

5. Subscribe (abone olmak) : Bilesenlerin store'da tutulan veriye erisimini saglamasi. (useContext, useSelector)

6. Provider (Saglayici): Store da tutulan verileri uygulamayi saglar.

# Gercek Hayattan Benzetme

- Store : Okul binasi
- Reducer: Okulun yonetim ekibi (mudur, mudur yardimicisi)
- Actions : 'ogrencinin sinaci gecmesi' | 'yeni ogrencinin kayit yapmasi' | 'ogrencinin okuldan atilmasi'
- Dispatch : Ogrenci isleri | ogretmen gibi.
- Subscribe : Rehberlik servisi | e-okul
- Provider : Meb

# Redux kurulum asamalari

1. 'redux' ve react-redux' paketlerini indir.
2. reducer / reducerlarin kurulumunu yap.
3. Store'un kurulumunu yap.
4. Store'u projeye tanit.

# Proje gelistirirken yapilan hatalar

1. Yapilan guncelleme ekrana yansir ama sayfa yenilenince kaybolur.

- - state dogru guncellendi
- - api yanlis guncellendi

2. Yapilan guncelleme ekrana yansimaz sayfa yenilenince duzelir.

- - state yanlis guncellendi
- - api dogru guncellendi
# Redux_Crud
