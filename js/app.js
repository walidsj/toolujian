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
            "nama": "Ekonomi Mikro",
            "sesi": "03"
        },
        {
            "id": "2",
            "id_prodi": "2",
            "id_semester": "3",
            "kode": "Hk Perdata",
            "nama": "Hukum Perdata",
            "sesi": "10"
        },
        {
            "id": "3",
            "id_prodi": "2",
            "id_semester": "3",
            "kode": "PengAkun I",
            "nama": "Pengantar Akuntansi I",
            "sesi": "12"
        },
        {
            "id": "4",
            "id_prodi": "2",
            "id_semester": "3",
            "kode": "P Peng Akun I",
            "nama": "Praktik Pengantar Akuntansi I",
            "sesi": "14"
        },
        {
            "id": "5",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "AKBI II",
            "nama": "Akuntansi Biaya II",
            "sesi": "13"
        },
        {
            "id": "6",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "AKM I",
            "nama": "Akuntansi Keuangan Menengah I",
            "sesi": "03"
        },
        {
            "id": "7",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "AkPem II",
            "nama": "Akuntansi Pemerintah II",
            "sesi": "11"
        },
        {
            "id": "8",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "HKN",
            "nama": "Hukum Keuangan Negara",
            "sesi": "07"
        },
        {
            "id": "9",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "Keu Publik",
            "nama": "Keuangan Publik",
            "sesi": "01"
        },
        {
            "id": "10",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "P AKM I",
            "nama": "Praktik Akuntansi Keuangan Menengah I",
            "sesi": "05"
        },
        {
            "id": "11",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "SIA",
            "nama": "Sistem Informasi Akuntansi",
            "sesi": "15"
        },
        {
            "id": "12",
            "id_prodi": "2",
            "id_semester": "4",
            "kode": "Statistika Tr",
            "nama": "Statistika Terapan",
            "sesi": "09"
        },
        {
            "id": "13",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "AKBI I",
            "nama": "Akuntansi Biaya I",
            "sesi": "09"
        },
        {
            "id": "14",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "AKM I",
            "nama": "Akuntansi Keuangan Menengah I",
            "sesi": "03"
        },
        {
            "id": "15",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "AkPem I",
            "nama": "Akuntansi Pemerintah I",
            "sesi": "11"
        },
        {
            "id": "16",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "Eko.Makro",
            "nama": "Ekonomi Makro",
            "sesi": "01"
        },
        {
            "id": "17",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "Perpajakan I",
            "nama": "Perpajakan I",
            "sesi": "07"
        },
        {
            "id": "18",
            "id_prodi": "1",
            "id_semester": "1",
            "kode": "P AKM I",
            "nama": "Praktik Akuntansi Keuangan Menengah I",
            "sesi": "05"
        },
        {
            "id": "19",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "AKL I",
            "nama": "Akuntansi Keuangan Lanjutan I",
            "sesi": "03"
        },
        {
            "id": "20",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "ALK",
            "nama": "Analisis Laporan Keuangan",
            "sesi": "07"
        },
        {
            "id": "21",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "AKSK",
            "nama": "Audit Keuangan Sektor Komersial",
            "sesi": "05"
        },
        {
            "id": "22",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "B.Indo",
            "nama": "Bahasa Indonesia",
            "sesi": "01"
        },
        {
            "id": "23",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "Budnus PK",
            "nama": "Budaya Nusantara dan Pengembangan Kepribadian",
            "sesi": "13"
        },
        {
            "id": "24",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "SIAP",
            "nama": "Sistem Informasi Akuntansi Pemerintah",
            "sesi": "11"
        },
        {
            "id": "25",
            "id_prodi": "1",
            "id_semester": "2",
            "kode": "Statistika Tr",
            "nama": "Statistika Terapan",
            "sesi": "09"
        },
        {
            "id": "26",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "Bank LK",
            "nama": "Bank dan Lembaga Keuangan",
            "sesi": "06"
        },
        {
            "id": "27",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "Keu Publik",
            "nama": "Keuangan Publik",
            "sesi": "02"
        },
        {
            "id": "28",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "P BMN",
            "nama": "Pengelolaan Barang Milik Negara",
            "sesi": "12"
        },
        {
            "id": "29",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "PKN",
            "nama": "Pengelolaan Kas Negara",
            "sesi": "04"
        },
        {
            "id": "30",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "P KeuDa",
            "nama": "Pengelolaan Keuangan Daerah",
            "sesi": "08"
        },
        {
            "id": "31",
            "id_prodi": "12",
            "id_semester": "23",
            "kode": "TKDD",
            "nama": "Transfer Ke Daerah dan Dana Desa",
            "sesi": "10"
        },
        {
            "id": "32",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "AKBI",
            "nama": "Akuntansi Biaya",
            "sesi": "10"
        },
        {
            "id": "33",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "Eko.Makro",
            "nama": "Ekonomi Makro",
            "sesi": "02"
        },
        {
            "id": "34",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "Mtk Keu",
            "nama": "Matematika Keuangan",
            "sesi": "04"
        },
        {
            "id": "35",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "P PNBP",
            "nama": "Pelaksanaan Pendapatan Negara Bukan Pajak",
            "sesi": "16"
        },
        {
            "id": "36",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "PBJ",
            "nama": "Pengadaan Barang/Jasa Pemerintah",
            "sesi": "14"
        },
        {
            "id": "37",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "P BMN",
            "nama": "Pengelolaan Barang Milik Negara",
            "sesi": "12"
        },
        {
            "id": "38",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "PAN I",
            "nama": "Perencanaan Anggaran Negara I",
            "sesi": "06"
        },
        {
            "id": "39",
            "id_prodi": "11",
            "id_semester": "21",
            "kode": "Pjk InstPem",
            "nama": "Perpajakan Instansi Pemerintah",
            "sesi": "08"
        },
        {
            "id": "40",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "AkPem Pus",
            "nama": "Akuntansi Pemerintah Pusat",
            "sesi": "06"
        },
        {
            "id": "41",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "B.Indo",
            "nama": "Bahasa Indonesia",
            "sesi": "02"
        },
        {
            "id": "42",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "Man Proy",
            "nama": "Manajemen Proyek",
            "sesi": "04"
        },
        {
            "id": "43",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "PBJ",
            "nama": "Pengadaan Barang/Jasa Pemerintah",
            "sesi": "14"
        },
        {
            "id": "44",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "P Keu BLU",
            "nama": "Pengelolaan Keuangan BLU",
            "sesi": "12"
        },
        {
            "id": "45",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "P KeuDa",
            "nama": "Pengelolaan Keuangan Daerah",
            "sesi": "08"
        },
        {
            "id": "46",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "PUP",
            "nama": "Pengelolaan Utang Pemerintah",
            "sesi": "10"
        },
        {
            "id": "47",
            "id_prodi": "11",
            "id_semester": "22",
            "kode": "P AplKeuNeg",
            "nama": "Praktik Aplikasi Keuangan Negara",
            "sesi": "16"
        },
        {
            "id": "48",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "HKN",
            "nama": "Hukum Keuangan Negara",
            "sesi": "08"
        },
        {
            "id": "49",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "KLI KC",
            "nama": "Kehumasan dan Layanan Informasi Kepabeanan dan Cukai",
            "sesi": "12"
        },
        {
            "id": "50",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "Kpabean Int",
            "nama": "Kepabeanan Internasional",
            "sesi": "10"
        },
        {
            "id": "51",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "Manajemen",
            "nama": "Manajemen",
            "sesi": "06"
        },
        {
            "id": "52",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "PengAudit",
            "nama": "Pengantar Auditing",
            "sesi": "02"
        },
        {
            "id": "53",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "PIKC",
            "nama": "Pengantar Intelijen Kepabeanan dan Cukai",
            "sesi": "14"
        },
        {
            "id": "54",
            "id_prodi": "10",
            "id_semester": "20",
            "kode": "TPB",
            "nama": "Teknis Pemeriksaan Barang",
            "sesi": "04"
        },
        {
            "id": "55",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "Eko.Makro",
            "nama": "Ekonomi Makro",
            "sesi": "02"
        },
        {
            "id": "56",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "IKB I",
            "nama": "Identifikasi dan Klasifikasi Barang I",
            "sesi": "16"
        },
        {
            "id": "57",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "PH KC I",
            "nama": "Penegakan Hukum Kepabeanan dan Cukai I",
            "sesi": "17"
        },
        {
            "id": "58",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "PengAudit",
            "nama": "Pengantar Auditing",
            "sesi": "04"
        },
        {
            "id": "59",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "Per UU Cukai",
            "nama": "Perundang-undangan Cukai",
            "sesi": "08"
        },
        {
            "id": "60",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "Per UU Pabean",
            "nama": "Perundang-undangan Kepabeanan",
            "sesi": "06"
        },
        {
            "id": "61",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "TPI",
            "nama": "Teknis Perdagangan Internasional",
            "sesi": "10"
        },
        {
            "id": "62",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "TFC I",
            "nama": "Teknis dan Fasilitas Cukai I",
            "sesi": "14"
        },
        {
            "id": "63",
            "id_prodi": "9",
            "id_semester": "18",
            "kode": "T Pabean I",
            "nama": "Teknis Kepabeanan I",
            "sesi": "12"
        },
        {
            "id": "64",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "F Pabean",
            "nama": "Fasilitas Kepabeanan",
            "sesi": "08"
        },
        {
            "id": "65",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "F Per Int",
            "nama": "Fasilitas Perdagangan Internasional",
            "sesi": "10"
        },
        {
            "id": "66",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "KWN",
            "nama": "Kewarganegaraan",
            "sesi": "12"
        },
        {
            "id": "67",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "ManRis KC",
            "nama": "Manajemen Risiko Kepabeanan dan Cukai",
            "sesi": "16"
        },
        {
            "id": "68",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "PIKC",
            "nama": "Pengantar Intelijen Kepabeanan dan Cukai",
            "sesi": "14"
        },
        {
            "id": "69",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "Peng PKN",
            "nama": "Pengantar Pengelolaan Keuangan Negara",
            "sesi": "02"
        },
        {
            "id": "70",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "TPB",
            "nama": "Teknis Pemeriksaan Barang",
            "sesi": "06"
        },
        {
            "id": "71",
            "id_prodi": "9",
            "id_semester": "19",
            "kode": "T Perbend",
            "nama": "Teknis Perbendaharaan",
            "sesi": "04"
        },
        {
            "id": "72",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "AKM MA",
            "nama": "Akuntansi Keuangan Menengah (Khusus Manajemen Aset)",
            "sesi": "06"
        },
        {
            "id": "73",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "Hk Tanah",
            "nama": "Hukum Pertanahan",
            "sesi": "08"
        },
        {
            "id": "74",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "Hk Usaha",
            "nama": "Hukum Perusahaan",
            "sesi": "10"
        },
        {
            "id": "75",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "ManKeu",
            "nama": "Manajemen Keuangan",
            "sesi": "02"
        },
        {
            "id": "76",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "PAP I",
            "nama": "Penilaian Aset dan Properti I",
            "sesi": "12"
        },
        {
            "id": "77",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "Pjk BendPem",
            "nama": "Perpajakan Bendahara Pemerintah",
            "sesi": "14"
        },
        {
            "id": "78",
            "id_prodi": "13",
            "id_semester": "24",
            "kode": "Statistika",
            "nama": "Statistika",
            "sesi": "04"
        },
        {
            "id": "79",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "Apl Lap BMN",
            "nama": "Aplikasi Laporan BMN",
            "sesi": "10"
        },
        {
            "id": "80",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "Apl SIM KN II",
            "nama": "Aplikasi SIM Kekayaan Negara II",
            "sesi": "08"
        },
        {
            "id": "81",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "Keu Publik",
            "nama": "Keuangan Publik",
            "sesi": "02"
        },
        {
            "id": "82",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "PBJ",
            "nama": "Pengadaan Barang dan Jasa",
            "sesi": "12"
        },
        {
            "id": "83",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "PAP III",
            "nama": "Penilaian Aset dan Properti III",
            "sesi": "06"
        },
        {
            "id": "84",
            "id_prodi": "13",
            "id_semester": "25",
            "kode": "P Usaha I",
            "nama": "Penilaian Usaha I",
            "sesi": "04"
        },
        {
            "id": "85",
            "id_prodi": "6",
            "id_semester": "11",
            "kode": "Hk Bisnis",
            "nama": "Hukum Bisnis",
            "sesi": "12"
        },
        {
            "id": "86",
            "id_prodi": "6",
            "id_semester": "12",
            "kode": "AKL",
            "nama": "Akuntansi Keuangan Lanjutan",
            "sesi": "04"
        },
        {
            "id": "87",
            "id_prodi": "6",
            "id_semester": "12",
            "kode": "AkPer",
            "nama": "Akuntansi Perpajakan",
            "sesi": "08"
        },
        {
            "id": "88",
            "id_prodi": "6",
            "id_semester": "12",
            "kode": "KomLik",
            "nama": "Komunikasi Publik",
            "sesi": "14"
        },
        {
            "id": "89",
            "id_prodi": "6",
            "id_semester": "12",
            "kode": "Man ProBis WP",
            "nama": "Manajemen dan Proses Bisnis Wajib Pajak",
            "sesi": "10"
        },
        {
            "id": "90",
            "id_prodi": "6",
            "id_semester": "12",
            "kode": "Pen IlSos",
            "nama": "Penelitian Ilmu Sosial",
            "sesi": "12"
        },
        {
            "id": "91",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "Agama",
            "nama": "Agama",
            "sesi": "10"
        },
        {
            "id": "92",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "B.Inggris",
            "nama": "Bahasa Inggris",
            "sesi": "04"
        },
        {
            "id": "93",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "PengAkun I",
            "nama": "Pengantar Akuntansi I",
            "sesi": "12"
        },
        {
            "id": "94",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "PIE",
            "nama": "Pengantar Ilmu Ekonomi",
            "sesi": "08"
        },
        {
            "id": "95",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "PIH",
            "nama": "Pengantar Ilmu Hukum",
            "sesi": "14"
        },
        {
            "id": "96",
            "id_prodi": "5",
            "id_semester": "8",
            "kode": "Peng PKN I",
            "nama": "Pengantar Pengelolaan Keuangan Negara I",
            "sesi": "02"
        },
        {
            "id": "97",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "AKBI",
            "nama": "Akuntansi Biaya",
            "sesi": "10"
        },
        {
            "id": "98",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "AKM I",
            "nama": "Akuntansi Keuangan Menengah I",
            "sesi": "04"
        },
        {
            "id": "99",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "KUP",
            "nama": "Ketentuan Umum Perpajakan",
            "sesi": "06"
        },
        {
            "id": "100",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "Keu Publik",
            "nama": "Keuangan Publik",
            "sesi": "02"
        },
        {
            "id": "101",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "PBB",
            "nama": "Pajak Bumi dan Bangunan",
            "sesi": "08"
        },
        {
            "id": "102",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "pph",
            "nama": "Pajak Penghasilan",
            "sesi": "14"
        },
        {
            "id": "103",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "PPN",
            "nama": "Pajak Pertambahan Nilai",
            "sesi": "16"
        },
        {
            "id": "104",
            "id_prodi": "5",
            "id_semester": "9",
            "kode": "Peng Hk Pjk",
            "nama": "Pengantar Hukum Pajak",
            "sesi": "12"
        },
        {
            "id": "105",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "AKL",
            "nama": "Akuntansi Keuangan Lanjutan",
            "sesi": "04"
        },
        {
            "id": "106",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "AkPer",
            "nama": "Akuntansi Perpajakan",
            "sesi": "08"
        },
        {
            "id": "107",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "B.Indo",
            "nama": "Bahasa Indonesia",
            "sesi": "02"
        },
        {
            "id": "108",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "Etika",
            "nama": "Etika dan Anti Korupsi",
            "sesi": "16"
        },
        {
            "id": "109",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "KomLik",
            "nama": "Komunikasi Publik",
            "sesi": "14"
        },
        {
            "id": "110",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "Man ProBis WP",
            "nama": "Manajemen dan Proses Bisnis Wajib Pajak",
            "sesi": "10"
        },
        {
            "id": "111",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "Pancasila",
            "nama": "Pancasila",
            "sesi": "06"
        },
        {
            "id": "112",
            "id_prodi": "5",
            "id_semester": "10",
            "kode": "Pen IlSos",
            "nama": "Penelitian Ilmu Sosial",
            "sesi": "12"
        },
        {
            "id": "113",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "Eko.Makro",
            "nama": "Ekonomi Makro",
            "sesi": "02"
        },
        {
            "id": "114",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "Eko.WilKot",
            "nama": "Ekonomi Wilayah dan Perkotaan",
            "sesi": "14"
        },
        {
            "id": "115",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "Hk AgrPro",
            "nama": "Hukum Agraria dan Properti",
            "sesi": "06"
        },
        {
            "id": "116",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "IUT",
            "nama": "Ilmu Ukur Tanah dan Pemetaan",
            "sesi": "16"
        },
        {
            "id": "117",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "ManKeu I",
            "nama": "Manajemen Keuangan I",
            "sesi": "12"
        },
        {
            "id": "118",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "PIR",
            "nama": "Pengantar Investasi Realestat",
            "sesi": "10"
        },
        {
            "id": "119",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "Peng Pen Prop",
            "nama": "Pengantar Penilaian Properti",
            "sesi": "08"
        },
        {
            "id": "120",
            "id_prodi": "7",
            "id_semester": "13",
            "kode": "TekBang",
            "nama": "Teknologi Bangunan",
            "sesi": "04"
        },
        {
            "id": "121",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "B.Indo",
            "nama": "Bahasa Indonesia",
            "sesi": "02"
        },
        {
            "id": "122",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "Hk PB",
            "nama": "Hukum Perusahaan dan Bisnis",
            "sesi": "06"
        },
        {
            "id": "123",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "PPM",
            "nama": "Pendataan dan Penilaian Masal",
            "sesi": "04"
        },
        {
            "id": "124",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "Peng Pen Bisnis",
            "nama": "Pengantar Penilaian Bisnis",
            "sesi": "12"
        },
        {
            "id": "125",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "PMP",
            "nama": "Penilaian Mesin dan Peralatan",
            "sesi": "08"
        },
        {
            "id": "126",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "PPK",
            "nama": "Penilaian Properti Komersial",
            "sesi": "14"
        },
        {
            "id": "127",
            "id_prodi": "7",
            "id_semester": "14",
            "kode": "P SDA II",
            "nama": "Penilaian Sumber Daya Alam II",
            "sesi": "10"
        },
        {
            "id": "128",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "APP",
            "nama": "Analisis Pasar Properti",
            "sesi": "10"
        },
        {
            "id": "129",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "Eko.SDA",
            "nama": "Ekonomi Sumber Daya Alam",
            "sesi": "14"
        },
        {
            "id": "130",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "Man Prop",
            "nama": "Manajemen Properti",
            "sesi": "06"
        },
        {
            "id": "131",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "PBB",
            "nama": "Pajak Bumi dan Bangunan (PBB)",
            "sesi": "04"
        },
        {
            "id": "132",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "Peng Pen Bisnis",
            "nama": "Pengantar Penilaian Bisnis",
            "sesi": "12"
        },
        {
            "id": "133",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "PMP",
            "nama": "Penilaian Mesin dan Peralatan",
            "sesi": "08"
        },
        {
            "id": "134",
            "id_prodi": "8",
            "id_semester": "16",
            "kode": "Statistika",
            "nama": "Statistika",
            "sesi": "02"
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
            "nama": "Akuntansi Manajemen",
            "sesi": "05"
        },
        {
            "id": "139",
            "id_prodi": "4",
            "id_semester": "6",
            "kode": "Pjk Kontem",
            "nama": "Perpajakan Kontemporer",
            "sesi": "07"
        },
        {
            "id": "140",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "AkKeu Kontem",
            "nama": "Akuntansi Keuangan Kontemporer",
            "sesi": "01"
        },
        {
            "id": "141",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "Audit FI",
            "nama": "Audit Forensik dan Investigasi",
            "sesi": "13"
        },
        {
            "id": "142",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "ASP",
            "nama": "Audit Sektor Publik",
            "sesi": "07"
        },
        {
            "id": "143",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "ASI",
            "nama": "Audit Sistem Informasi",
            "sesi": "09"
        },
        {
            "id": "144",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "SIAP",
            "nama": "Sistem Informasi Akuntansi Pemerintah",
            "sesi": "11"
        },
        {
            "id": "145",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "SPM",
            "nama": "Sistem Pengendalian Manajemen",
            "sesi": "05"
        },
        {
            "id": "146",
            "id_prodi": "4",
            "id_semester": "7",
            "kode": "TA",
            "nama": "Teori Akuntansi",
            "sesi": "03"
        },
        {
            "id": "147",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "AkKeu Kontem",
            "nama": "Akuntansi Keuangan Kontemporer",
            "sesi": "01"
        },
        {
            "id": "148",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "ASP",
            "nama": "Audit Sektor Publik",
            "sesi": "07"
        },
        {
            "id": "149",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "ASI",
            "nama": "Audit Sistem Informasi",
            "sesi": "09"
        },
        {
            "id": "150",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "Kepemimpinan",
            "nama": "Kepemimpinan",
            "sesi": "11"
        },
        {
            "id": "151",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "ManStrat",
            "nama": "Manajemen Stratejik",
            "sesi": "13"
        },
        {
            "id": "152",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "SPM",
            "nama": "Sistem Pengendalian Manajemen",
            "sesi": "05"
        },
        {
            "id": "153",
            "id_prodi": "3",
            "id_semester": "5",
            "kode": "TA",
            "nama": "Teori Akuntansi",
            "sesi": "03"
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
             this.sesi = ''
         } else {
            if (getSemester != this.semesters) {
                this.semester = '';
                this.matkul = '';
                this.matkuls = '';
                this.sesi = '';
            }
            this.semesters = getSemester;
           }
      },
      onChangeSemester: function() {
         var getMatkul = (this.matkul_list.filter(matkul => matkul.id_prodi == this.prodi.id)).filter(matkul => matkul.id_semester == this.semester.id);
         if (!this.prodi || !this.semester) {
            this.matkul = '';
             this.matkuls = '';
             this.sesi = '';
         } else {
            if (!getMatkul) {
               this.matkul = '';
                this.matkuls = ''; 
                this.sesi = ''; 
            } else {
               if (getMatkul != this.matkuls) {
                  this.matkul = '';
                   this.sesi = '';
               }
                this.matkuls = getMatkul;
            }
         }
      },
        onChangeMatkul: function () {
          if (this.matkul != '') {
                    this.sesi = this.matkul.sesi;
          } else {
              this.sesi = '';
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
               this.$vToastify.success('Penamaan udah dicopy, Langsung CTRL+V aja');
            } else {
                this.$vToastify.error('Data input ujian belum benar'); 
          }
      }
   }
})