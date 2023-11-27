//elementleri secmek
const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');
const email = document.getElementById('mail');

const form = document.getElementById('form-rehber');

form.addEventListener('submit',kaydet);

function kaydet(e){
    e.preventDefault();
    
    const eklenecekKisi = {
        ad:ad.value,
        soyad:soyad.value,
        mail:mail.value
    }
    const sonuc =  verileriKontrolEt(eklenecekKisi);
    if(sonuc.durum){
      
    }
    else{
        bilgiOlustur(sonuc.mesaj,sonuc.durum);
        console.log(sonuc.mesaj);
    }
    //console.log(eklenecekKisi);
}
function verileriKontrolEt(kisi){
    //obyektlerde in istifadesi
    for(const deger in kisi){
        if(kisi[deger]){
            console.log(kisi[deger]);
        }
        else{
            const sonuc = {
                durum: false,
                mesaj: 'boslugu doldurun'
            }
            return sonuc;
          
        }
        return{
            durum:true,
            mesaj:''
        }
    }
}

function bilgiOlustur(mesaj,durum){
    const olusturanBilgi = document.createElement('div');
    olusturanBilgi.textContent = mesaj;
    olusturanBilgi.className = 'bilgi';
    /*
    if(durum){
        olusturanBilgi.classList.add('bilgi--success');
    }
    else{
        olusturanBilgi.classList.add('bilgi--error');
    }
    */
    olusturanBilgi.classList.add(durum ? 'bilgi--success': 'bilgi--error')
    document.querySelector('.container').insertBefore(olusturanBilgi,form);
}