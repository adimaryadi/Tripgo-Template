import { Component, ViewChild } from '@angular/core';
import { NavController , AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides') slides;
  constructor(public navCtrl: NavController, public alert: AlertController) {
  	this.getday();
  }

  timedate 	      = 	 [];
  month 		  = 	 [];


  ionViewDidLoad() {
  	this.slides.lockSwipes(true);
  }
  bulanarray 	  = 	 [{bs: ''},{bs: 'January'},{bs: 'February'},{bs: 'Maret'},{bs: 'April'},{bs: 'Mei'},{bs: 'Juni'},{bs: 'Juli'},{bs: 'Agustus'},{bs: 'September'},{bs: 'Oktober'},{bs: 'November'},{bs: 'Desember'}];

  getday() {
  	for (var j = 1; j <= 12; j++) {
  		this.month.push({bulan: j,bg: this.bulanarray[j]});
  	}
  	for (var i = 1; i <= 31; i++) {
  		this.timedate.push({tanggal: i});
  	}

  }

  bulanberangkat:number;
  tanggalKeberangkatan:number;
  time:string;

  pilihBerangkat(bulan) {
  	  this.bulanberangkat 	= 	bulan;	
  }

  starting    =   '';
  kota_tujuan =   '';

  data_kota   =   [{kota: 'Bandung'},{kota: 'Lembang'},{kota: 'Serang'},{kota: 'Bekasi'},{kota: 'Jakarta'}];
  filter_kota;
  list_kota   =   false;
  tujuan_kota =   false;
  filter_tujuan;

  Start(value) {
    if (value.length >= 1) {
      this.list_kota           =   true;
      this.tujuan_kota         =   false;
      this.filter_kota         =   this.data_kota.filter(mulai => mulai.kota.length >= value.length);
    } else {
      this.list_kota    =   false;
    }
  }

  Tujuan(value) {
    if (value.length >= 1) {
      this.tujuan_kota         =   true;
      this.list_kota           =   false;
      this.filter_tujuan       =   this.data_kota.filter(tujuan => tujuan.kota.length >= value.length);
    } else {
      this.tujuan_kota         =   false;
    }
  }

  selected_city(kota) {
    this.starting       =   kota;
    this.list_kota      =   false;
  }
  selected_dest(kota) {
    this.kota_tujuan    =   kota;
    this.tujuan_kota    =   false;
  }

  list_close() {
    this.list_kota      =   false;
  }

  TanggalBerangkat() {
  	if (this.bulanberangkat == undefined) {
  		const alert 	=  this.alert.create({
  			title: 'Peringatan !',
  			message: 'Bulan berapa anda berangkat',
  			buttons: ['Tutup']
  		})
  		alert.present();
  	} else {
  		this.slides.lockSwipes(false);
  		this.slides.slideNext();
  		this.slides.lockSwipes(true);
  	}
  }
  backbulan() {
  	this.slides.lockSwipes(false);
  	this.slides.slidePrev();
  	this.slides.lockSwipes(true);
  }

  backtanggal() {
  	this.slides.lockSwipes(false);
  	this.slides.slidePrev();
  	this.slides.lockSwipes(true);
  }

  TanggalPilih(tgl) {
  	this.tanggalKeberangkatan 	= 	tgl;
  }

  Transportasi() {
  	if (this.time == undefined) {
  		let alert 	= 	this.alert.create({
  			title: 'Peringatan !',
  			message: 'jam berapa anda berangkat ?',
  			buttons: ['Tutup']
  		})
  		alert.present();
  	} else {
	  	this.slides.lockSwipes(false);
	  	this.slides.slideNext();
	  	this.slides.lockSwipes(true);
  	}
  }

  JadwalKeberangkatan() {
  	if (this.tanggalKeberangkatan == undefined) {
  		const alert 	= 	 this.alert.create({
  			title: 'Peringatan !',
  			message: 'Pilih Tanggal keberangkatan',
  			buttons: ['Tutup']
  		})
  		alert.present();
  	} else {
	  	this.slides.lockSwipes(false);
	  	this.slides.slideNext();
	  	this.slides.lockSwipes(true);
  	}
  }
}