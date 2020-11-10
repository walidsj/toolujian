Vue.use(window['vue-toastify'].default);
var app = new Vue({
   el: '#app',
   data: {
      nama: '',
      npm: '',
      kelas: '',
      prodi: '',
      semester: '',
      absen: '',
      sesi: '',
      matkul: '',
      semesters: '',
      matkuls:'',
      prodis: [
        {
            "id": "1",
            "kode": "d3akt",
            "nama": "DIII Akuntansi"
        },
        {
            "id": "2",
            "kode": "d3aktap",
            "nama": "DIII Akuntansi Alih Program"
        },
        {
            "id": "3",
            "kode": "d4aktreg",
            "nama": "DIV Akuntansi (Reguler)"
        },
        {
            "id": "4",
            "kode": "d4aktapnonakt",
            "nama": "DIV Akuntansi Alih Program (Non Akt)"
        },
        {
            "id": "5",
            "kode": "d3pjk",
            "nama": "DIII Pajak"
        },
        {
            "id": "6",
            "kode": "d3pjkap",
            "nama": "DIII Pajak Alih Program"
        },
        {
            "id": "7",
            "kode": "d3pbb",
            "nama": "DIII PBB/Penilai"
        },
        {
            "id": "8",
            "kode": "d3pbbap",
            "nama": "DIII PBB/Penilai Alih Program"
        },
        {
            "id": "9",
            "kode": "d3bc",
            "nama": "DIII Kepabeanan Dan Cukai"
        },
        {
            "id": "10",
            "kode": "d3bcap",
            "nama": "DIII Kepabeanan Dan Cukai Alih Program"
        },
        {
            "id": "11",
            "kode": "d3kbn",
            "nama": "DIII Kebendaharaan Negara"
        },
        {
            "id": "12",
            "kode": "d3kbnap",
            "nama": "DIII Kebendaharaan Negara Alih Program"
        },
        {
            "id": "13",
            "kode": "d3ma",
            "nama": "DIII Manajemen Aset"
        }
    ],
    semester_list: [
        {
            "id": "1",
            "id_prodi": "1",
            "angka": "3",
            "nama": "III"
        },
        {
            "id": "2",
            "id_prodi": "1",
            "angka": "5",
            "nama": "V"
        },
        {
            "id": "3",
            "id_prodi": "2",
            "angka": "3",
            "nama": "III"
        },
        {
            "id": "4",
            "id_prodi": "2",
            "angka": "5",
            "nama": "V"
        },
        {
            "id": "5",
            "id_prodi": "3",
            "angka": "7",
            "nama": "VII"
        },
        {
            "id": "6",
            "id_prodi": "4",
            "angka": "7",
            "nama": "VII"
        },
        {
            "id": "7",
            "id_prodi": "4",
            "angka": "9",
            "nama": "IX"
        },
        {
            "id": "8",
            "id_prodi": "5",
            "angka": "1",
            "nama": "I"
        },
        {
            "id": "9",
            "id_prodi": "5",
            "angka": "3",
            "nama": "III"
        },
        {
            "id": "10",
            "id_prodi": "5",
            "angka": "5",
            "nama": "V"
        },
        {
            "id": "11",
            "id_prodi": "6",
            "angka": "3",
            "nama": "III"
        },
        {
            "id": "12",
            "id_prodi": "6",
            "angka": "5",
            "nama": "V"
        },
        {
            "id": "13",
            "id_prodi": "7",
            "angka": "3",
            "nama": "III"
        },
        {
            "id": "14",
            "id_prodi": "7",
            "angka": "5",
            "nama": "V"
        },
        {
            "id": "15",
            "id_prodi": "8",
            "angka": "4",
            "nama": "IV"
        },
        {
            "id": "16",
            "id_prodi": "8",
            "angka": "5",
            "nama": "V"
        },
        {
            "id": "17",
            "id_prodi": "8",
            "angka": "6",
            "nama": "VI"
        },
        {
            "id": "18",
            "id_prodi": "9",
            "angka": "3",
            "nama": "III"
        },
        {
            "id": "19",
            "id_prodi": "9",
            "angka": "5",
            "nama": "V"
        },
        {
            "id": "20",
            "id_prodi": "10",
            "angka": "5",
            "nama": "V"
        },
        {
            "id": "21",
            "id_prodi": "11",
            "angka": "3",
            "nama": "III"
        },
        {
            "id": "22",
            "id_prodi": "11",
            "angka": "5",
            "nama": "V"
        },
        {
            "id": "23",
            "id_prodi": "12",
            "angka": "5",
            "nama": "V"
        },
        {
            "id": "24",
            "id_prodi": "13",
            "angka": "3",
            "nama": "III"
        },
        {
            "id": "25",
            "id_prodi": "13",
            "angka": "5",
            "nama": "V"
        }
    ],
    matkul_list: [
        {
            "id": "1",
            "id_prodi": "2",
            "id_semester": "3",
            "kode": "Eko.Mikro",
            "nama": "Ekonomi Mikro"
        },
        {
            "id": "2",
            "id_prodi": "2",
            "id_semester": "3",
            "kode": "Hk Perdata",
            "nama": "Hukum Perdata"
        },
        {
            "id": "3",
            "id_prodi": "2",
            "id_semester": "3",
            "kode": "PengAkun I",
            "nama": "Pengantar Akuntansi I"
        },
        {
            "id": "4",
            "id_prodi": "2",
            "id_semester": "3",
            "kode": "P Peng Akun I",
            "nama": "Praktik Pengantar Akuntansi I"
        },
        {
            "id": "5",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "AKBI II",
            "nama": "Akuntansi Biaya II"
        },
        {
            "id": "6",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "AKM I",
            "nama": "Akuntansi Keuangan Menengah I"
        },
        {
            "id": "7",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "AkPem II",
            "nama": "Akuntansi Pemerintah II"
        },
        {
            "id": "8",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "HKN",
            "nama": "Hukum Keuangan Negara"
        },
        {
            "id": "9",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "Keu Publik",
            "nama": "Keuangan Publik"
        },
        {
            "id": "10",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "P AKM I",
            "nama": "Praktik Akuntansi Keuangan Menengah I"
        },
        {
            "id": "11",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "SIA",
            "nama": "Sistem Informasi Akuntansi"
        },
        {
            "id": "12",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "Statistika Tr",
            "nama": "Statistika Terapan"
        },
        {
            "id": "13",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "AKBI I",
            "nama": "Akuntansi Biaya I"
        },
        {
            "id": "14",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "AKM I",
            "nama": "Akuntansi Keuangan Menengah I"
        },
        {
            "id": "15",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "AkPem I",
            "nama": "Akuntansi Pemerintah I"
        },
        {
            "id": "16",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "Eko.Makro",
            "nama": "Ekonomi Makro"
        },
        {
            "id": "17",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "Perpajakan I",
            "nama": "Perpajakan I"
        },
        {
            "id": "18",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "P AKM I",
            "nama": "Praktik Akuntansi Keuangan Menengah I"
        },
        {
            "id": "19",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "AKL I",
            "nama": "Akuntansi Keuangan Lanjutan I"
        },
        {
            "id": "20",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "ALK",
            "nama": "Analisis Laporan Keuangan"
        },
        {
            "id": "21",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "AKSK",
            "nama": "Audit Keuangan Sektor Komersial"
        },
        {
            "id": "22",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "B.Indo",
            "nama": "Bahasa Indonesia"
        },
        {
            "id": "23",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "Budnus PK",
            "nama": "Budaya Nusantara dan Pengembangan Kepribadian"
        },
        {
            "id": "24",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "SIAP",
            "nama": "Sistem Informasi Akuntansi Pemerintah"
        },
        {
            "id": "25",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "Statistika Tr",
            "nama": "Statistika Terapan"
        },
        {
            "id": "26",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "Bank LK",
            "nama": "Bank dan Lembaga Keuangan"
        },
        {
            "id": "27",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "Keu Publik",
            "nama": "Keuangan Publik"
        },
        {
            "id": "28",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "P BMN",
            "nama": "Pengelolaan Barang Milik Negara"
        },
        {
            "id": "29",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "PKN",
            "nama": "Pengelolaan Kas Negara"
        },
        {
            "id": "30",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "P KeuDa",
            "nama": "Pengelolaan Keuangan Daerah"
        },
        {
            "id": "31",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "TKDD",
            "nama": "Transfer Ke Daerah dan Dana Desa"
        },
        {
            "id": "32",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "AKBI",
            "nama": "Akuntansi Biaya"
        },
        {
            "id": "33",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "Eko.Makro",
            "nama": "Ekonomi Makro"
        },
        {
            "id": "34",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "Mtk Keu",
            "nama": "Matematika Keuangan"
        },
        {
            "id": "35",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "P PNBP",
            "nama": "Pelaksanaan Pendapatan Negara Bukan Pajak"
        },
        {
            "id": "36",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "PBJ",
            "nama": "Pengadaan Barang/Jasa Pemerintah"
        },
        {
            "id": "37",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "P BMN",
            "nama": "Pengelolaan Barang Milik Negara"
        },
        {
            "id": "38",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "PAN I",
            "nama": "Perencanaan Anggaran Negara I"
        },
        {
            "id": "39",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "Pjk InstPem",
            "nama": "Perpajakan Instansi Pemerintah"
        },
        {
            "id": "40",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "AkPem Pus",
            "nama": "Akuntansi Pemerintah Pusat"
        },
        {
            "id": "41",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "B.Indo",
            "nama": "Bahasa Indonesia"
        },
        {
            "id": "42",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "Man Proy",
            "nama": "Manajemen Proyek"
        },
        {
            "id": "43",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "PBJ",
            "nama": "Pengadaan Barang/Jasa Pemerintah"
        },
        {
            "id": "44",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "P Keu BLU",
            "nama": "Pengelolaan Keuangan BLU"
        },
        {
            "id": "45",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "P KeuDa",
            "nama": "Pengelolaan Keuangan Daerah"
        },
        {
            "id": "46",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "PUP",
            "nama": "Pengelolaan Utang Pemerintah"
        },
        {
            "id": "47",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "P AplKeuNeg",
            "nama": "Praktik Aplikasi Keuangan Negara"
        },
        {
            "id": "48",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "HKN",
            "nama": "Hukum Keuangan Negara"
        },
        {
            "id": "49",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "KLI KC",
            "nama": "Kehumasan dan Layanan Informasi Kepabeanan dan Cukai"
        },
        {
            "id": "50",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "Kpabean Int",
            "nama": "Kepabeanan Internasional"
        },
        {
            "id": "51",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "Manajemen",
            "nama": "Manajemen"
        },
        {
            "id": "52",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "PengAudit",
            "nama": "Pengantar Auditing"
        },
        {
            "id": "53",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "PIKC",
            "nama": "Pengantar Intelijen Kepabeanan dan Cukai"
        },
        {
            "id": "54",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "TPB",
            "nama": "Teknik Pemeriksaan Barang"
        },
        {
            "id": "55",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "Eko.Makro",
            "nama": "Ekonomi Makro"
        },
        {
            "id": "56",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "IKB I",
            "nama": "Identifikasi dan Klasifikasi Barang I"
        },
        {
            "id": "57",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "PH KC I",
            "nama": "Penegakan Hukum Kepabeanan dan Cukai I"
        },
        {
            "id": "58",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "PengAudit",
            "nama": "Pengantar Auditing"
        },
        {
            "id": "59",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "Per UU Cukai",
            "nama": "Perundang-undangan Cukai"
        },
        {
            "id": "60",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "Per UU Pabean",
            "nama": "Perundang-undangan Kepabeanan"
        },
        {
            "id": "61",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "TPI",
            "nama": "Teknik Perdagangan Internasional"
        },
        {
            "id": "62",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "TFC I",
            "nama": "Teknis dan Fasilitas Cukai I"
        },
        {
            "id": "63",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "T Pabean I",
            "nama": "Teknis Kepabeanan I"
        },
        {
            "id": "64",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "F Pabean",
            "nama": "Fasilitas Kepabeanan"
        },
        {
            "id": "65",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "F Per Int",
            "nama": "Fasilitas Perdagangan Internasional"
        },
        {
            "id": "66",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "KWN",
            "nama": "Kewarganegaraan"
        },
        {
            "id": "67",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "ManRis KC",
            "nama": "Manajemen Risiko Kepabeanan dan Cukai"
        },
        {
            "id": "68",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "PIKC",
            "nama": "Pengantar Intelijen Kepabeanan dan Cukai"
        },
        {
            "id": "69",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "Peng PKN",
            "nama": "Pengantar Pengelolaan Keuangan Negara"
        },
        {
            "id": "70",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "TPB",
            "nama": "Teknik Pemeriksaan Barang"
        },
        {
            "id": "71",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "T Perbend",
            "nama": "Teknis Perbendaharaan"
        },
        {
            "id": "72",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "AKM MA",
            "nama": "Akuntansi Keuangan Menengah (Khusus Manajemen Aset)"
        },
        {
            "id": "73",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "Hk Tanah",
            "nama": "Hukum Pertanahan"
        },
        {
            "id": "74",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "Hk Usaha",
            "nama": "Hukum Perusahaan"
        },
        {
            "id": "75",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "ManKeu",
            "nama": "Manajemen Keuangan"
        },
        {
            "id": "76",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "PAP I",
            "nama": "Penilaian Aset dan Properti I"
        },
        {
            "id": "77",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "Pjk BendPem",
            "nama": "Perpajakan Bendahara Pemerintah"
        },
        {
            "id": "78",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "Statistika",
            "nama": "Statistika"
        },
        {
            "id": "79",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "Apl Lap BMN",
            "nama": "Aplikasi Laporan BMN"
        },
        {
            "id": "80",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "Apl SIM KN II",
            "nama": "Aplikasi SIM Kekayaan Negara II"
        },
        {
            "id": "81",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "Keu Publik",
            "nama": "Keuangan Publik"
        },
        {
            "id": "82",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "PBJ",
            "nama": "Pengadaan Barang dan Jasa"
        },
        {
            "id": "83",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "PAP III",
            "nama": "Penilaian Aset dan Properti III"
        },
        {
            "id": "84",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "P Usaha I",
            "nama": "Penilaian Usaha I"
        },
        {
            "id": "85",
            "id_prodi": "6",
            "id_semester": "11",
            "kode": "Hk Bisnis",
            "nama": "Hukum Bisnis"
        },
        {
            "id": "86",
            "id_prodi": "6",
            "id_semester": "12",
            "kode": "AKL",
            "nama": "Akuntansi Keuangan Lanjutan"
        },
        {
            "id": "87",
            "id_prodi": "6",
            "id_semester": "12",
            "kode": "AkPer",
            "nama": "Akuntansi Perpajakan"
        },
        {
            "id": "88",
            "id_prodi": "6",
            "id_semester": "12",
            "kode": "KomLik",
            "nama": "Komunikasi Publik"
        },
        {
            "id": "89",
            "id_prodi": "6",
            "id_semester": "12",
            "kode": "Man ProBis WP",
            "nama": "Manajemen dan Proses Bisnis Wajib Pajak"
        },
        {
            "id": "90",
            "id_prodi": "6",
            "id_semester": "12",
            "kode": "Pen IlSos",
            "nama": "Penelitian Ilmu Sosial"
        },
        {
            "id": "91",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "Agama",
            "nama": "Agama"
        },
        {
            "id": "92",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "B.Inggris",
            "nama": "Bahasa Inggris"
        },
        {
            "id": "93",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "PengAkun I",
            "nama": "Pengantar Akuntansi I"
        },
        {
            "id": "94",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "PIE",
            "nama": "Pengantar Ilmu Ekonomi"
        },
        {
            "id": "95",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "PIH",
            "nama": "Pengantar Ilmu Hukum"
        },
        {
            "id": "96",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "Peng PKN I",
            "nama": "Pengantar Pengelolaan Keuangan Negara I"
        },
        {
            "id": "97",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "AKBI",
            "nama": "Akuntansi Biaya"
        },
        {
            "id": "98",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "AKM I",
            "nama": "Akuntansi Keuangan Menengah I"
        },
        {
            "id": "99",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "KUP",
            "nama": "Ketentuan Umum Perpajakan"
        },
        {
            "id": "100",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "Keu Publik",
            "nama": "Keuangan Publik"
        },
        {
            "id": "101",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "PBB",
            "nama": "Pajak Bumi dan Bangunan"
        },
        {
            "id": "102",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "pph",
            "nama": "Pajak Penghasilan"
        },
        {
            "id": "103",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "PPN",
            "nama": "Pajak Pertambahan Nilai"
        },
        {
            "id": "104",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "Peng Hk Pjk",
            "nama": "Pengantar Hukum Pajak"
        },
        {
            "id": "105",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "AKL",
            "nama": "Akuntansi Keuangan Lanjutan"
        },
        {
            "id": "106",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "AkPer",
            "nama": "Akuntansi Perpajakan"
        },
        {
            "id": "107",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "B.Indo",
            "nama": "Bahasa Indonesia"
        },
        {
            "id": "108",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "Etika",
            "nama": "Etika dan Anti Korupsi"
        },
        {
            "id": "109",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "KomLik",
            "nama": "Komunikasi Publik"
        },
        {
            "id": "110",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "Man ProBis WP",
            "nama": "Manajemen dan Proses Bisnis Wajib Pajak"
        },
        {
            "id": "111",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "Pancasila",
            "nama": "Pancasila"
        },
        {
            "id": "112",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "Pen IlSos",
            "nama": "Penelitian Ilmu Sosial"
        },
        {
            "id": "113",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "Eko.Makro",
            "nama": "Ekonomi Makro"
        },
        {
            "id": "114",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "Eko.WilKot",
            "nama": "Ekonomi Wilayah dan Perkotaan"
        },
        {
            "id": "115",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "Hk AgrPro",
            "nama": "Hukum Agraria dan Properti"
        },
        {
            "id": "116",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "IUT",
            "nama": "Ilmu Ukur Tanah dan Pemetaan"
        },
        {
            "id": "117",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "ManKeu I",
            "nama": "Manajemen Keuangan I"
        },
        {
            "id": "118",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "PIR",
            "nama": "Pengantar Investasi Realestat"
        },
        {
            "id": "119",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "Peng Pen Prop",
            "nama": "Pengantar Penilaian Properti"
        },
        {
            "id": "120",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "TekBang",
            "nama": "Teknologi Bangunan"
        },
        {
            "id": "121",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "B.Indo",
            "nama": "Bahasa Indonesia"
        },
        {
            "id": "122",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "Hk PB",
            "nama": "Hukum Perusahaan dan Bisnis"
        },
        {
            "id": "123",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "PPM",
            "nama": "Pendataan dan Penilaian Masal"
        },
        {
            "id": "124",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "Peng Pen Bisnis",
            "nama": "Pengantar Penilaian Bisnis"
        },
        {
            "id": "125",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "PMP",
            "nama": "Penilaian Mesin dan Peralatan"
        },
        {
            "id": "126",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "PPK",
            "nama": "Penilaian Properti Komersial"
        },
        {
            "id": "127",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "P SDA II",
            "nama": "Penilaian Sumber Daya Alam II"
        },
        {
            "id": "128",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "APP",
            "nama": "Analisis Pasar Properti"
        },
        {
            "id": "129",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "Eko.SDA",
            "nama": "Ekonomi Sumber Daya Alam"
        },
        {
            "id": "130",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "Man Prop",
            "nama": "Manajemen Properti"
        },
        {
            "id": "131",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "PBB",
            "nama": "Pajak Bumi dan Bangunan (PBB)"
        },
        {
            "id": "132",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "Peng Pen Bisnis",
            "nama": "Pengantar Penilaian Bisnis"
        },
        {
            "id": "133",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "PMP",
            "nama": "Penilaian Mesin dan Peralatan"
        },
        {
            "id": "134",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "Statistika",
            "nama": "Statistika"
        },
        {
            "id": "135",
            "id_prodi": "8",
            "id_semester": "17",
            "kode": "PPM",
            "nama": "Pendataan dan Penilaian Masal"
        },
        {
            "id": "136",
            "id_prodi": "8",
            "id_semester": "17",
            "kode": "Peng Pen Bisnis",
            "nama": "Pengantar Penilaian Bisnis"
        },
        {
            "id": "137",
            "id_prodi": "8",
            "id_semester": "17",
            "kode": "PPK",
            "nama": "Penilaian Properti Komersial"
        },
        {
            "id": "138",
            "id_prodi": "4",
            "id_semester": "6",
            "kode": "AkMan",
            "nama": "Akuntansi Manajemen"
        },
        {
            "id": "139",
            "id_prodi": "4",
            "id_semester": "6",
            "kode": "Pjk Kontem",
            "nama": "Perpajakan Kontemporer"
        },
        {
            "id": "140",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "AkKeu Kontem",
            "nama": "Akuntansi Keuangan Kontemporer"
        },
        {
            "id": "141",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "Audit FI",
            "nama": "Audit Forensik dan Investigasi"
        },
        {
            "id": "142",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "ASP",
            "nama": "Audit Sektor Publik"
        },
        {
            "id": "143",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "ASI",
            "nama": "Audit Sistem Informasi"
        },
        {
            "id": "144",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "SIAP",
            "nama": "Sistem Informasi Akuntansi Pemerintah"
        },
        {
            "id": "145",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "SPM",
            "nama": "Sistem Pengendalian Manajemen"
        },
        {
            "id": "146",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "TA",
            "nama": "Teori Akuntansi"
        },
        {
            "id": "147",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "AkKeu Kontem",
            "nama": "Akuntansi Keuangan Kontemporer"
        },
        {
            "id": "148",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "ASP",
            "nama": "Audit Sektor Publik"
        },
        {
            "id": "149",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "ASI",
            "nama": "Audit Sistem Informasi"
        },
        {
            "id": "150",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "Kepemimpinan",
            "nama": "Kepemimpinan"
        },
        {
            "id": "151",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "ManStrat",
            "nama": "Manajemen Stratejik"
        },
        {
            "id": "152",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "SPM",
            "nama": "Sistem Pengendalian Manajemen"
        },
        {
            "id": "153",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "TA",
            "nama": "Teori Akuntansi"
        }
      ],
      alertActive: true,
      toastActive: false,
      toastBody: ''
   },
   computed: {
      hasilString: function() {
          if (this.hasilBlock === true) {
              return `LJU_${this.sesi}_${this.prodi.kode}_${this.semester.angka+'-'+this.kelas}_${this.matkul.kode}_${this.absen}_${this.nama}_${this.npm}`;
          } else {
              return 'Lengkapi dulu data ujian dengan benar.';
        }
      },
      hasilBlock: function() {
         if (!this.nama || this.nama.length < 5 || !this.npm || this.npm.length != 10 || !this.prodi || !this.semester || !this.kelas || this.kelas.length != 2 || !this.absen || this.absen.length != 2 || !this.sesi || this.sesi.length != 2 || !this.matkul) {
            return false;
         } else {
            return true;
        }
      }
   },
   mounted: function () {
      if (Vue.$cookies.get('nama')) {
         this.nama = Vue.$cookies.get('nama');
      }
      if (Vue.$cookies.get('npm')) {
         this.npm = Vue.$cookies.get('npm');
      }
      if (Vue.$cookies.get('prodi')) {
         this.prodi = Vue.$cookies.get('prodi');
      }
      this.onChangeProdi();
      if (Vue.$cookies.get('semester')) {
         this.semester = Vue.$cookies.get('semester');
      }
      this.onChangeSemester();
      if (Vue.$cookies.get('kelas')) {
         this.kelas = Vue.$cookies.get('kelas');
      }
      if (Vue.$cookies.get('absen')) {
         this.absen = Vue.$cookies.get('absen');
      }      
   },
    methods: {
      closeAlert: function () {
           this.alertActive = false;
      },
      onChangeProdi: function() {
         var getSemester = this.semester_list.filter(semester => semester.id_prodi == this.prodi.id);
         if (!this.prodi) {
             this.semester = '';
             this.semesters = '';
             this.matkul = '';
             this.matkuls = '';
         } else {
            if (getSemester != this.semesters) {
                this.semester = '';
                this.matkul = '';
             this.matkuls = '';
            }
            this.semesters = getSemester;
           }
      },
      onChangeSemester: function() {
         var getMatkul = (this.matkul_list.filter(matkul => matkul.id_prodi == this.prodi.id)).filter(matkul => matkul.id_semester == this.semester.id);
         if (!this.prodi || !this.semester) {
            this.matkul = '';
            this.matkuls = '';
         } else {
            if (!getMatkul) {
               this.matkul = '';
               this.matkuls = '';   
            } else {
               if (getMatkul != this.matkuls) {
                  this.matkul = '';
               }
               this.matkuls = getMatkul;
            }
         }
      },
      addCookies: function() {
         const cookie = {
            'nama': this.nama,
            'npm': this.npm,
            'prodi': this.prodi,
            'semester': this.semester,
            'kelas': this.kelas,
            'absen': this.absen
         };
         Object.keys(cookie).forEach(function(key) {
            if (cookie[key]) {
               Vue.$cookies.set(key,cookie[key]);
            }
         });
         this.$vToastify.success('Data ujian udah disimpan.');
      },
      deleteCookies: function() {
         const cookie = {
            'nama': this.nama,
            'npm': this.npm,
            'prodi': this.prodi,
            'semester': this.semester,
            'kelas': this.kelas,
            'absen': this.absen
         };
         Object.keys(cookie).forEach(function(key) {
            Vue.$cookies.remove(key)
         });
         this.nama = '';
         this.npm = '';
         this.kelas = '';
         this.prodi = '';
         this.onChangeProdi();
         this.semester = '';
         this.onChangeSemester();
         this.absen = '';
         this.matkul = '';
         this.matkuls = '';
         this.$vToastify.success('Data ujian udah dihapus.');
      },
       copyToClipboard: function () {
           if (this.hasilBlock) {
               const el = document.createElement('textarea');
               el.value = this.hasilString;
               document.body.appendChild(el);
               el.select();
               document.execCommand('copy');
               document.body.removeChild(el);
               this.showToast('Penamaan udah dicopy, langsung Ctrl+V aja.');
            //    this.$vToastify.success('Penamaan udah dicopy, Langsung CTRL+V aja');
            } else {
                this.$vToastify.error('Data input ujian belum benar'); 
          }
      }
   }
})