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
            "nama": "D-III Akuntansi"
        },
        {
            "id": "2",
            "kode": "d3aktap",
            "nama": "D-III Akuntansi Alih Program"
        },
        {
            "id": "3",
            "kode": "d4aktreg",
            "nama": "D-IV Akuntansi (Reguler)"
        },
        {
            "id": "4",
            "kode": "d4aktapnonakt",
            "nama": "D-IV Akuntansi Alih Program (Non Akt)"
        },
        {
            "id": "5",
            "kode": "d3pjk",
            "nama": "D-III Pajak"
        },
        {
            "id": "6",
            "kode": "d3pjkap",
            "nama": "D-III Pajak Alih Program"
        },
        {
            "id": "7",
            "kode": "d3pbb",
            "nama": "D-III PBB/Penilai"
        },
        {
            "id": "8",
            "kode": "d3pbbap",
            "nama": "D-III PBB/Penilai Alih Program"
        },
        {
            "id": "9",
            "kode": "d3bc",
            "nama": "D-III Kepabeanan Dan Cukai"
        },
        {
            "id": "10",
            "kode": "d3bcap",
            "nama": "D-III Kepabeanan Dan Cukai Alih Program"
        },
        {
            "id": "11",
            "kode": "d3kbn",
            "nama": "D-III Kebendaharaan Negara"
        },
        {
            "id": "12",
            "kode": "d3kbnap",
            "nama": "D-III Kebendaharaan Negara Alih Program"
        },
        {
            "id": "13",
            "kode": "d3ma",
            "nama": "D-III Manajemen Aset"
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
            "id_semester": "4",
            "nama": "Keuangan Publik",
            "kode": "Keu Publik",
            "sesi": "01"
        },
        {
            "id": "2",
            "id_prodi": "1",
            "id_semester": "1",
            "nama": "Ekonomi Makro",
            "kode": "Eko.Makro",
            "sesi": "01"
        },
        {
            "id": "3",
            "id_prodi": "1",
            "id_semester": "2",
            "nama": "Bahasa Indonesia",
            "kode": "B.Indo",
            "sesi": "01"
        },
        {
            "id": "4",
            "id_prodi": "4",
            "id_semester": "7",
            "nama": "Akuntansi Keuangan Kontemporer",
            "kode": "AkKeu Kontem",
            "sesi": "01"
        },
        {
            "id": "5",
            "id_prodi": "3",
            "id_semester": "5",
            "nama": "Akuntansi Keuangan Kontemporer",
            "kode": "AkKeu Kontem",
            "sesi": "01"
        },
        {
            "id": "6",
            "id_prodi": "2",
            "id_semester": "3",
            "nama": "Pengantar Pengelolaan Keuangan Negara",
            "kode": "Peng PKN",
            "sesi": "02"
        },
        {
            "id": "7",
            "id_prodi": "12",
            "id_semester": "23",
            "nama": "Keuangan Publik",
            "kode": "Keu Publik",
            "sesi": "02"
        },
        {
            "id": "8",
            "id_prodi": "11",
            "id_semester": "21",
            "nama": "Ekonomi Makro",
            "kode": "Eko.Makro",
            "sesi": "02"
        },
        {
            "id": "9",
            "id_prodi": "11",
            "id_semester": "22",
            "nama": "Bahasa Indonesia",
            "kode": "B.Indo",
            "sesi": "02"
        },
        {
            "id": "10",
            "id_prodi": "10",
            "id_semester": "20",
            "nama": "Pengantar Auditing",
            "kode": "PengAudit",
            "sesi": "02"
        },
        {
            "id": "11",
            "id_prodi": "9",
            "id_semester": "18",
            "nama": "Ekonomi Makro",
            "kode": "Eko.Makro",
            "sesi": "02"
        },
        {
            "id": "12",
            "id_prodi": "9",
            "id_semester": "19",
            "nama": "Pengantar Pengelolaan Keuangan Negara",
            "kode": "Peng PKN",
            "sesi": "02"
        },
        {
            "id": "13",
            "id_prodi": "13",
            "id_semester": "24",
            "nama": "Manajemen Keuangan",
            "kode": "ManKeu",
            "sesi": "02"
        },
        {
            "id": "14",
            "id_prodi": "13",
            "id_semester": "25",
            "nama": "Keuangan Publik",
            "kode": "Keu Publik",
            "sesi": "02"
        },
        {
            "id": "15",
            "id_prodi": "6",
            "id_semester": "11",
            "nama": "Keuangan Publik",
            "kode": "Keu Publik",
            "sesi": "02"
        },
        {
            "id": "16",
            "id_prodi": "5",
            "id_semester": "8",
            "nama": "Pengantar Pengelolaan Keuangan Negara I",
            "kode": "Peng PKN I",
            "sesi": "02"
        },
        {
            "id": "17",
            "id_prodi": "5",
            "id_semester": "9",
            "nama": "Keuangan Publik",
            "kode": "Keu Publik",
            "sesi": "02"
        },
        {
            "id": "18",
            "id_prodi": "5",
            "id_semester": "10",
            "nama": "Bahasa Indonesia",
            "kode": "B.Indo",
            "sesi": "02"
        },
        {
            "id": "19",
            "id_prodi": "7",
            "id_semester": "13",
            "nama": "Ekonomi Makro",
            "kode": "Eko.Makro",
            "sesi": "02"
        },
        {
            "id": "20",
            "id_prodi": "7",
            "id_semester": "14",
            "nama": "Bahasa Indonesia",
            "kode": "B.Indo",
            "sesi": "02"
        },
        {
            "id": "21",
            "id_prodi": "8",
            "id_semester": "16",
            "nama": "Statistika",
            "kode": "Statistika",
            "sesi": "02"
        },
        {
            "id": "22",
            "id_prodi": "8",
            "id_semester": "15",
            "nama": "Keuangan Publik",
            "kode": "Keu Publik",
            "sesi": "02"
        },
        {
            "id": "23",
            "id_prodi": "4",
            "id_semester": "6",
            "nama": "Manajemen Keuangan",
            "kode": "ManKeu",
            "sesi": "02"
        },
        {
            "id": "24",
            "id_prodi": "2",
            "id_semester": "3",
            "nama": "Ekonomi Mikro",
            "kode": "Eko.Mikro",
            "sesi": "03"
        },
        {
            "id": "25",
            "id_prodi": "2",
            "id_semester": "4",
            "nama": "Akuntansi Keuangan Menengah I",
            "kode": "AKM I",
            "sesi": "03"
        },
        {
            "id": "26",
            "id_prodi": "1",
            "id_semester": "1",
            "nama": "Akuntansi Keuangan Menengah I",
            "kode": "AKM I",
            "sesi": "03"
        },
        {
            "id": "27",
            "id_prodi": "1",
            "id_semester": "2",
            "nama": "Akuntansi Keuangan Lanjutan I",
            "kode": "AKL I",
            "sesi": "03"
        },
        {
            "id": "28",
            "id_prodi": "4",
            "id_semester": "6",
            "nama": "Akuntansi Keuangan Menengah I",
            "kode": "AKM I",
            "sesi": "03"
        },
        {
            "id": "29",
            "id_prodi": "4",
            "id_semester": "7",
            "nama": "Teori Akuntansi",
            "kode": "TA",
            "sesi": "03"
        },
        {
            "id": "30",
            "id_prodi": "3",
            "id_semester": "5",
            "nama": "Teori Akuntansi",
            "kode": "TA",
            "sesi": "03"
        },
        {
            "id": "31",
            "id_prodi": "12",
            "id_semester": "23",
            "nama": "Pengelolaan Kas Negara",
            "kode": "PKN",
            "sesi": "04"
        },
        {
            "id": "32",
            "id_prodi": "11",
            "id_semester": "21",
            "nama": "Matematika Keuangan",
            "kode": "Mtk Keu",
            "sesi": "04"
        },
        {
            "id": "33",
            "id_prodi": "11",
            "id_semester": "22",
            "nama": "Manajemen Proyek",
            "kode": "Man Proy",
            "sesi": "04"
        },
        {
            "id": "34",
            "id_prodi": "10",
            "id_semester": "20",
            "nama": "Teknis Pemeriksaan Barang",
            "kode": "TPB",
            "sesi": "04"
        },
        {
            "id": "35",
            "id_prodi": "9",
            "id_semester": "18",
            "nama": "Pengantar Auditing",
            "kode": "PengAudit",
            "sesi": "04"
        },
        {
            "id": "36",
            "id_prodi": "9",
            "id_semester": "19",
            "nama": "Teknis Pemeriksaan Barang",
            "kode": "TPB",
            "sesi": "04"
        },
        {
            "id": "37",
            "id_prodi": "13",
            "id_semester": "24",
            "nama": "Statistika",
            "kode": "Statistika",
            "sesi": "04"
        },
        {
            "id": "38",
            "id_prodi": "13",
            "id_semester": "25",
            "nama": "Penilaian Usaha I",
            "kode": "P Usaha I",
            "sesi": "04"
        },
        {
            "id": "39",
            "id_prodi": "6",
            "id_semester": "11",
            "nama": "Akuntansi Keuangan Menengah I",
            "kode": "AKM I",
            "sesi": "04"
        },
        {
            "id": "40",
            "id_prodi": "6",
            "id_semester": "12",
            "nama": "Akuntansi Keuangan Lanjutan",
            "kode": "AKL",
            "sesi": "04"
        },
        {
            "id": "41",
            "id_prodi": "5",
            "id_semester": "8",
            "nama": "Bahasa Inggris",
            "kode": "B.Inggris",
            "sesi": "04"
        },
        {
            "id": "42",
            "id_prodi": "5",
            "id_semester": "9",
            "nama": "Akuntansi Keuangan Menengah I",
            "kode": "AKM I",
            "sesi": "04"
        },
        {
            "id": "43",
            "id_prodi": "5",
            "id_semester": "10",
            "nama": "Akuntansi Keuangan Lanjutan",
            "kode": "AKL",
            "sesi": "04"
        },
        {
            "id": "44",
            "id_prodi": "7",
            "id_semester": "13",
            "nama": "Teknologi Bangunan",
            "kode": "TekBang",
            "sesi": "04"
        },
        {
            "id": "45",
            "id_prodi": "7",
            "id_semester": "14",
            "nama": "Pendataan dan Penilaian Masal",
            "kode": "PPM",
            "sesi": "04"
        },
        {
            "id": "46",
            "id_prodi": "8",
            "id_semester": "16",
            "nama": "Pajak Bumi dan Bangunan (PBB)",
            "kode": "PBB",
            "sesi": "04"
        },
        {
            "id": "47",
            "id_prodi": "8",
            "id_semester": "15",
            "nama": "Teknologi Bangunan",
            "kode": "TekBang",
            "sesi": "04"
        },
        {
            "id": "48",
            "id_prodi": "2",
            "id_semester": "4",
            "nama": "Praktik Akuntansi Keuangan Menengah I",
            "kode": "P AKM I",
            "sesi": "05"
        },
        {
            "id": "49",
            "id_prodi": "1",
            "id_semester": "1",
            "nama": "Praktik Akuntansi Keuangan Menengah I",
            "kode": "P AKM I",
            "sesi": "05"
        },
        {
            "id": "50",
            "id_prodi": "1",
            "id_semester": "2",
            "nama": "Audit Keuangan Sektor Komersial",
            "kode": "AKSK",
            "sesi": "05"
        },
        {
            "id": "51",
            "id_prodi": "4",
            "id_semester": "6",
            "nama": "Akuntansi Manajemen",
            "kode": "AkMan",
            "sesi": "05"
        },
        {
            "id": "52",
            "id_prodi": "4",
            "id_semester": "7",
            "nama": "Sistem Pengendalian Manajemen",
            "kode": "SPM",
            "sesi": "05"
        },
        {
            "id": "53",
            "id_prodi": "3",
            "id_semester": "5",
            "nama": "Sistem Pengendalian Manajemen",
            "kode": "SPM",
            "sesi": "05"
        },
        {
            "id": "54",
            "id_prodi": "2",
            "id_semester": "3",
            "nama": "Manajemen",
            "kode": "Manajemen",
            "sesi": "06"
        },
        {
            "id": "55",
            "id_prodi": "12",
            "id_semester": "23",
            "nama": "Bank dan Lembaga Keuangan",
            "kode": "Bank LK",
            "sesi": "06"
        },
        {
            "id": "56",
            "id_prodi": "11",
            "id_semester": "21",
            "nama": "Perencanaan Anggaran Negara I",
            "kode": "PAN I",
            "sesi": "06"
        },
        {
            "id": "57",
            "id_prodi": "11",
            "id_semester": "22",
            "nama": "Akuntansi Pemerintah Pusat",
            "kode": "AkPem Pus",
            "sesi": "06"
        },
        {
            "id": "58",
            "id_prodi": "10",
            "id_semester": "20",
            "nama": "Manajemen",
            "kode": "Manajemen",
            "sesi": "06"
        },
        {
            "id": "59",
            "id_prodi": "9",
            "id_semester": "18",
            "nama": "Perundang-undangan Kepabeanan",
            "kode": "Per UU Pabean",
            "sesi": "06"
        },
        {
            "id": "60",
            "id_prodi": "9",
            "id_semester": "19",
            "nama": "Teknis Perbendaharaan",
            "kode": "T Perbend",
            "sesi": "06"
        },
        {
            "id": "61",
            "id_prodi": "13",
            "id_semester": "24",
            "nama": "Akuntansi Keuangan Menengah (Khusus Manajemen Aset)",
            "kode": "AKM MA",
            "sesi": "06"
        },
        {
            "id": "62",
            "id_prodi": "13",
            "id_semester": "25",
            "nama": "Penilaian Aset dan Properti III",
            "kode": "PAP III",
            "sesi": "06"
        },
        {
            "id": "63",
            "id_prodi": "6",
            "id_semester": "11",
            "nama": "Manajemen",
            "kode": "Manajemen",
            "sesi": "06"
        },
        {
            "id": "64",
            "id_prodi": "5",
            "id_semester": "8",
            "nama": "Pancasila",
            "kode": "Pancasila",
            "sesi": "06"
        },
        {
            "id": "65",
            "id_prodi": "5",
            "id_semester": "9",
            "nama": "Ketentuan Umum Perpajakan",
            "kode": "KUP",
            "sesi": "06"
        },
        {
            "id": "66",
            "id_prodi": "5",
            "id_semester": "10",
            "nama": "Pancasila",
            "kode": "Pancasila",
            "sesi": "06"
        },
        {
            "id": "67",
            "id_prodi": "7",
            "id_semester": "13",
            "nama": "Hukum Agraria dan Properti",
            "kode": "Hk AgrPro",
            "sesi": "06"
        },
        {
            "id": "68",
            "id_prodi": "7",
            "id_semester": "14",
            "nama": "Hukum Perusahaan dan Bisnis",
            "kode": "Hk PB",
            "sesi": "06"
        },
        {
            "id": "69",
            "id_prodi": "8",
            "id_semester": "16",
            "nama": "Manajemen Properti",
            "kode": "Man Prop",
            "sesi": "06"
        },
        {
            "id": "70",
            "id_prodi": "8",
            "id_semester": "15",
            "nama": "Hukum Perusahaan dan Bisnis",
            "kode": "Hk PB",
            "sesi": "06"
        },
        {
            "id": "71",
            "id_prodi": "2",
            "id_semester": "3",
            "nama": "Perpajakan I",
            "kode": "Perpajakan I",
            "sesi": "07"
        },
        {
            "id": "72",
            "id_prodi": "2",
            "id_semester": "4",
            "nama": "Hukum Keuangan Negara",
            "kode": "HKN",
            "sesi": "07"
        },
        {
            "id": "73",
            "id_prodi": "1",
            "id_semester": "1",
            "nama": "Perpajakan I",
            "kode": "Perpajakan I",
            "sesi": "07"
        },
        {
            "id": "74",
            "id_prodi": "1",
            "id_semester": "2",
            "nama": "Analisis Laporan Keuangan",
            "kode": "ALK",
            "sesi": "07"
        },
        {
            "id": "75",
            "id_prodi": "4",
            "id_semester": "6",
            "nama": "Perpajakan Kontemporer",
            "kode": "Pjk Kontem",
            "sesi": "07"
        },
        {
            "id": "76",
            "id_prodi": "4",
            "id_semester": "7",
            "nama": "Audit Sektor Publik",
            "kode": "ASP",
            "sesi": "07"
        },
        {
            "id": "77",
            "id_prodi": "3",
            "id_semester": "5",
            "nama": "Audit Sektor Publik",
            "kode": "ASP",
            "sesi": "07"
        },
        {
            "id": "78",
            "id_prodi": "12",
            "id_semester": "23",
            "nama": "Pengelolaan Keuangan Daerah",
            "kode": "P KeuDa",
            "sesi": "08"
        },
        {
            "id": "79",
            "id_prodi": "11",
            "id_semester": "21",
            "nama": "Perpajakan Instansi Pemerintah",
            "kode": "Pjk InstPem",
            "sesi": "08"
        },
        {
            "id": "80",
            "id_prodi": "11",
            "id_semester": "22",
            "nama": "Pengelolaan Keuangan Daerah",
            "kode": "P KeuDa",
            "sesi": "08"
        },
        {
            "id": "81",
            "id_prodi": "10",
            "id_semester": "20",
            "nama": "Hukum Keuangan Negara",
            "kode": "HKN",
            "sesi": "08"
        },
        {
            "id": "82",
            "id_prodi": "9",
            "id_semester": "18",
            "nama": "Perundang-undangan Cukai",
            "kode": "Per UU Cukai",
            "sesi": "08"
        },
        {
            "id": "83",
            "id_prodi": "9",
            "id_semester": "19",
            "nama": "Fasilitas Kepabeanan",
            "kode": "F Pabean",
            "sesi": "08"
        },
        {
            "id": "84",
            "id_prodi": "13",
            "id_semester": "24",
            "nama": "Hukum Pertanahan",
            "kode": "Hk Tanah",
            "sesi": "08"
        },
        {
            "id": "85",
            "id_prodi": "13",
            "id_semester": "25",
            "nama": "Aplikasi SIM Kekayaan Negara II",
            "kode": "Apl SIM KN II",
            "sesi": "08"
        },
        {
            "id": "86",
            "id_prodi": "6",
            "id_semester": "11",
            "nama": "Pajak Bumi dan Bangunan",
            "kode": "PBB",
            "sesi": "08"
        },
        {
            "id": "87",
            "id_prodi": "6",
            "id_semester": "12",
            "nama": "Akuntansi Perpajakan",
            "kode": "AkPer",
            "sesi": "08"
        },
        {
            "id": "88",
            "id_prodi": "5",
            "id_semester": "8",
            "nama": "Pengantar Ilmu Ekonomi",
            "kode": "PIE",
            "sesi": "08"
        },
        {
            "id": "89",
            "id_prodi": "5",
            "id_semester": "9",
            "nama": "Pajak Bumi dan Bangunan",
            "kode": "PBB",
            "sesi": "08"
        },
        {
            "id": "90",
            "id_prodi": "5",
            "id_semester": "10",
            "nama": "Akuntansi Perpajakan",
            "kode": "AkPer",
            "sesi": "08"
        },
        {
            "id": "91",
            "id_prodi": "7",
            "id_semester": "13",
            "nama": "Pengantar Penilaian Properti",
            "kode": "Peng Pen Prop",
            "sesi": "08"
        },
        {
            "id": "92",
            "id_prodi": "7",
            "id_semester": "14",
            "nama": "Penilaian Mesin dan Peralatan",
            "kode": "PMP",
            "sesi": "08"
        },
        {
            "id": "93",
            "id_prodi": "8",
            "id_semester": "16",
            "nama": "Penilaian Mesin dan Peralatan",
            "kode": "PMP",
            "sesi": "08"
        },
        {
            "id": "94",
            "id_prodi": "8",
            "id_semester": "15",
            "nama": "Pengantar Penilaian Properti",
            "kode": "Peng Pen Prop",
            "sesi": "08"
        },
        {
            "id": "95",
            "id_prodi": "2",
            "id_semester": "4",
            "nama": "Statistika Terapan",
            "kode": "Statistika Tr",
            "sesi": "09"
        },
        {
            "id": "96",
            "id_prodi": "1",
            "id_semester": "1",
            "nama": "Akuntansi Biaya I",
            "kode": "AKBI I",
            "sesi": "09"
        },
        {
            "id": "97",
            "id_prodi": "1",
            "id_semester": "2",
            "nama": "Statistika Terapan",
            "kode": "Statistika Tr",
            "sesi": "09"
        },
        {
            "id": "98",
            "id_prodi": "4",
            "id_semester": "7",
            "nama": "Audit Sistem Informasi",
            "kode": "ASI",
            "sesi": "09"
        },
        {
            "id": "99",
            "id_prodi": "3",
            "id_semester": "5",
            "nama": "Audit Sistem Informasi",
            "kode": "ASI",
            "sesi": "09"
        },
        {
            "id": "100",
            "id_prodi": "2",
            "id_semester": "3",
            "nama": "Hukum Perdata",
            "kode": "Hk Perdata",
            "sesi": "10"
        },
        {
            "id": "101",
            "id_prodi": "12",
            "id_semester": "23",
            "nama": "Transfer Ke Daerah dan Dana Desa",
            "kode": "TKDD",
            "sesi": "10"
        },
        {
            "id": "102",
            "id_prodi": "11",
            "id_semester": "21",
            "nama": "Akuntansi Biaya",
            "kode": "AKBI",
            "sesi": "10"
        },
        {
            "id": "103",
            "id_prodi": "11",
            "id_semester": "22",
            "nama": "Pengelolaan Utang Pemerintah",
            "kode": "PUP",
            "sesi": "10"
        },
        {
            "id": "104",
            "id_prodi": "10",
            "id_semester": "20",
            "nama": "Kepabeanan Internasional",
            "kode": "Kpabean Int",
            "sesi": "10"
        },
        {
            "id": "105",
            "id_prodi": "9",
            "id_semester": "18",
            "nama": "Teknis Perdagangan Internasional",
            "kode": "TPI",
            "sesi": "10"
        },
        {
            "id": "106",
            "id_prodi": "9",
            "id_semester": "19",
            "nama": "Fasilitas Perdagangan Internasional",
            "kode": "F Per Int",
            "sesi": "10"
        },
        {
            "id": "107",
            "id_prodi": "13",
            "id_semester": "24",
            "nama": "Hukum Perusahaan",
            "kode": "Hk Usaha",
            "sesi": "10"
        },
        {
            "id": "108",
            "id_prodi": "13",
            "id_semester": "25",
            "nama": "Aplikasi Laporan BMN",
            "kode": "Apl Lap BMN",
            "sesi": "10"
        },
        {
            "id": "109",
            "id_prodi": "6",
            "id_semester": "11",
            "nama": "Akuntansi Biaya",
            "kode": "AKBI",
            "sesi": "10"
        },
        {
            "id": "110",
            "id_prodi": "6",
            "id_semester": "12",
            "nama": "Manajemen dan Proses Bisnis Wajib Pajak",
            "kode": "Man ProBis WP",
            "sesi": "10"
        },
        {
            "id": "111",
            "id_prodi": "5",
            "id_semester": "8",
            "nama": "Agama",
            "kode": "Agama",
            "sesi": "10"
        },
        {
            "id": "112",
            "id_prodi": "5",
            "id_semester": "9",
            "nama": "Akuntansi Biaya",
            "kode": "AKBI",
            "sesi": "10"
        },
        {
            "id": "113",
            "id_prodi": "5",
            "id_semester": "10",
            "nama": "Manajemen dan Proses Bisnis Wajib Pajak",
            "kode": "Man ProBis WP",
            "sesi": "10"
        },
        {
            "id": "114",
            "id_prodi": "7",
            "id_semester": "13",
            "nama": "Pengantar Investasi Realestat",
            "kode": "PIR",
            "sesi": "10"
        },
        {
            "id": "115",
            "id_prodi": "7",
            "id_semester": "14",
            "nama": "Penilaian Sumber Daya Alam II",
            "kode": "P SDA II",
            "sesi": "10"
        },
        {
            "id": "116",
            "id_prodi": "8",
            "id_semester": "16",
            "nama": "Analisis Pasar Properti",
            "kode": "APP",
            "sesi": "10"
        },
        {
            "id": "117",
            "id_prodi": "8",
            "id_semester": "15",
            "nama": "Analisis Pasar Properti",
            "kode": "APP",
            "sesi": "10"
        },
        {
            "id": "118",
            "id_prodi": "2",
            "id_semester": "4",
            "nama": "Akuntansi Pemerintah II",
            "kode": "AkPem II",
            "sesi": "11"
        },
        {
            "id": "119",
            "id_prodi": "1",
            "id_semester": "1",
            "nama": "Akuntansi Pemerintah I",
            "kode": "AkPem I",
            "sesi": "11"
        },
        {
            "id": "120",
            "id_prodi": "1",
            "id_semester": "2",
            "nama": "Sistem Informasi Akuntansi Pemerintah",
            "kode": "SIAP",
            "sesi": "11"
        },
        {
            "id": "121",
            "id_prodi": "4",
            "id_semester": "6",
            "nama": "Kepemimpinan",
            "kode": "Kepemimpinan",
            "sesi": "11"
        },
        {
            "id": "122",
            "id_prodi": "4",
            "id_semester": "7",
            "nama": "Sistem Informasi Akuntansi Pemerintah",
            "kode": "SIAP",
            "sesi": "11"
        },
        {
            "id": "123",
            "id_prodi": "3",
            "id_semester": "5",
            "nama": "Kepemimpinan",
            "kode": "Kepemimpinan",
            "sesi": "11"
        },
        {
            "id": "124",
            "id_prodi": "2",
            "id_semester": "3",
            "nama": "Pengantar Akuntansi I",
            "kode": "PengAkun I",
            "sesi": "12"
        },
        {
            "id": "125",
            "id_prodi": "12",
            "id_semester": "23",
            "nama": "Pengelolaan Barang Milik Negara",
            "kode": "P BMN",
            "sesi": "12"
        },
        {
            "id": "126",
            "id_prodi": "11",
            "id_semester": "21",
            "nama": "Pengelolaan Barang Milik Negara",
            "kode": "P BMN",
            "sesi": "12"
        },
        {
            "id": "127",
            "id_prodi": "11",
            "id_semester": "22",
            "nama": "Pengelolaan Keuangan BLU",
            "kode": "P Keu BLU",
            "sesi": "12"
        },
        {
            "id": "128",
            "id_prodi": "10",
            "id_semester": "20",
            "nama": "Kehumasan dan Layanan Informasi Kepabeanan dan Cukai",
            "kode": "KLI KC",
            "sesi": "12"
        },
        {
            "id": "129",
            "id_prodi": "9",
            "id_semester": "18",
            "nama": "Teknis Kepabeanan I",
            "kode": "T Pabean I",
            "sesi": "12"
        },
        {
            "id": "130",
            "id_prodi": "9",
            "id_semester": "19",
            "nama": "Kewarganegaraan",
            "kode": "KWN",
            "sesi": "12"
        },
        {
            "id": "131",
            "id_prodi": "13",
            "id_semester": "24",
            "nama": "Penilaian Aset dan Properti I",
            "kode": "PAP I",
            "sesi": "12"
        },
        {
            "id": "132",
            "id_prodi": "13",
            "id_semester": "25",
            "nama": "Pengadaan Barang dan Jasa",
            "kode": "PBJ",
            "sesi": "12"
        },
        {
            "id": "133",
            "id_prodi": "6",
            "id_semester": "11",
            "nama": "Hukum Bisnis",
            "kode": "Hk Bisnis",
            "sesi": "12"
        },
        {
            "id": "134",
            "id_prodi": "6",
            "id_semester": "12",
            "nama": "Penelitian Ilmu Sosial",
            "kode": "Pen IlSos",
            "sesi": "12"
        },
        {
            "id": "135",
            "id_prodi": "5",
            "id_semester": "8",
            "nama": "Pengantar Akuntansi I",
            "kode": "PengAkun I",
            "sesi": "12"
        },
        {
            "id": "136",
            "id_prodi": "5",
            "id_semester": "9",
            "nama": "Pengantar Hukum Pajak",
            "kode": "Peng Hk Pjk",
            "sesi": "12"
        },
        {
            "id": "137",
            "id_prodi": "5",
            "id_semester": "10",
            "nama": "Penelitian Ilmu Sosial",
            "kode": "Pen IlSos",
            "sesi": "12"
        },
        {
            "id": "138",
            "id_prodi": "7",
            "id_semester": "13",
            "nama": "Manajemen Keuangan I",
            "kode": "ManKeu I",
            "sesi": "12"
        },
        {
            "id": "139",
            "id_prodi": "7",
            "id_semester": "14",
            "nama": "Pengantar Penilaian Bisnis",
            "kode": "Peng Pen Bisnis",
            "sesi": "12"
        },
        {
            "id": "140",
            "id_prodi": "8",
            "id_semester": "16",
            "nama": "Pengantar Penilaian Bisnis",
            "kode": "Peng Pen Bisnis",
            "sesi": "12"
        },
        {
            "id": "141",
            "id_prodi": "8",
            "id_semester": "15",
            "nama": "Manajemen Keuangan I",
            "kode": "ManKeu I",
            "sesi": "12"
        },
        {
            "id": "142",
            "id_prodi": "2",
            "id_semester": "4",
            "nama": "Akuntansi Biaya II",
            "kode": "AKBI II",
            "sesi": "13"
        },
        {
            "id": "143",
            "id_prodi": "1",
            "id_semester": "2",
            "nama": "Budaya Nusantara dan Pengembangan Kepribadian",
            "kode": "Budnus PK",
            "sesi": "13"
        },
        {
            "id": "144",
            "id_prodi": "6",
            "id_semester": "11",
            "nama": "Budaya Nusantara dan Pengembangan Kepribadian",
            "kode": "Budnus PK",
            "sesi": "13"
        },
        {
            "id": "145",
            "id_prodi": "4",
            "id_semester": "6",
            "nama": "Manajemen Stratejik",
            "kode": "ManStrat",
            "sesi": "13"
        },
        {
            "id": "146",
            "id_prodi": "4",
            "id_semester": "7",
            "nama": "Audit Forensik dan Investigasi",
            "kode": "Audit FI",
            "sesi": "13"
        },
        {
            "id": "147",
            "id_prodi": "3",
            "id_semester": "5",
            "nama": "Manajemen Stratejik",
            "kode": "ManStrat",
            "sesi": "13"
        },
        {
            "id": "148",
            "id_prodi": "2",
            "id_semester": "3",
            "nama": "Praktik Pengantar Akuntansi I",
            "kode": "P Peng Akun I",
            "sesi": "14"
        },
        {
            "id": "149",
            "id_prodi": "11",
            "id_semester": "21",
            "nama": "Pengadaan Barang/Jasa Pemerintah",
            "kode": "PBJ",
            "sesi": "14"
        },
        {
            "id": "150",
            "id_prodi": "11",
            "id_semester": "22",
            "nama": "Pengadaan Barang/Jasa Pemerintah",
            "kode": "PBJ",
            "sesi": "14"
        },
        {
            "id": "151",
            "id_prodi": "10",
            "id_semester": "20",
            "nama": "Pengantar Intelijen Kepabeanan dan Cukai",
            "kode": "PIKC",
            "sesi": "14"
        },
        {
            "id": "152",
            "id_prodi": "9",
            "id_semester": "18",
            "nama": "Teknis dan Fasilitas Cukai I",
            "kode": "TFC I",
            "sesi": "14"
        },
        {
            "id": "153",
            "id_prodi": "9",
            "id_semester": "19",
            "nama": "Pengantar Intelijen Kepabeanan dan Cukai",
            "kode": "PIKC",
            "sesi": "14"
        },
        {
            "id": "154",
            "id_prodi": "13",
            "id_semester": "24",
            "nama": "Perpajakan Bendahara Pemerintah",
            "kode": "Pjk BendPem",
            "sesi": "14"
        },
        {
            "id": "155",
            "id_prodi": "6",
            "id_semester": "12",
            "nama": "Komunikasi Publik",
            "kode": "KomLik",
            "sesi": "14"
        },
        {
            "id": "156",
            "id_prodi": "5",
            "id_semester": "8",
            "nama": "Pengantar Ilmu Hukum",
            "kode": "PIH",
            "sesi": "14"
        },
        {
            "id": "157",
            "id_prodi": "5",
            "id_semester": "9",
            "nama": "Pajak Penghasilan",
            "kode": "pph",
            "sesi": "14"
        },
        {
            "id": "158",
            "id_prodi": "5",
            "id_semester": "10",
            "nama": "Komunikasi Publik",
            "kode": "KomLik",
            "sesi": "14"
        },
        {
            "id": "159",
            "id_prodi": "7",
            "id_semester": "13",
            "nama": "Ekonomi Wilayah dan Perkotaan",
            "kode": "Eko.WilKot",
            "sesi": "14"
        },
        {
            "id": "160",
            "id_prodi": "7",
            "id_semester": "14",
            "nama": "Penilaian Properti Komersial",
            "kode": "PPK",
            "sesi": "14"
        },
        {
            "id": "161",
            "id_prodi": "8",
            "id_semester": "16",
            "nama": "Ekonomi Sumber Daya Alam",
            "kode": "Eko.SDA",
            "sesi": "14"
        },
        {
            "id": "162",
            "id_prodi": "8",
            "id_semester": "15",
            "nama": "Ekonomi Sumber Daya Alam",
            "kode": "Eko.SDA",
            "sesi": "14"
        },
        {
            "id": "163",
            "id_prodi": "2",
            "id_semester": "4",
            "nama": "Sistem Informasi Akuntansi",
            "kode": "SIA",
            "sesi": "15"
        },
        {
            "id": "164",
            "id_prodi": "4",
            "id_semester": "6",
            "nama": "Sistem Informasi Akuntansi",
            "kode": "SIA",
            "sesi": "15"
        },
        {
            "id": "165",
            "id_prodi": "2",
            "id_semester": "3",
            "nama": "Etika dan Anti Korupsi",
            "kode": "Etika",
            "sesi": "16"
        },
        {
            "id": "166",
            "id_prodi": "11",
            "id_semester": "21",
            "nama": "Pelaksanaan Pendapatan Negara Bukan Pajak",
            "kode": "P PNBP",
            "sesi": "16"
        },
        {
            "id": "167",
            "id_prodi": "11",
            "id_semester": "22",
            "nama": "Praktik Aplikasi Keuangan Negara",
            "kode": "P AplKeuNeg",
            "sesi": "16"
        },
        {
            "id": "168",
            "id_prodi": "9",
            "id_semester": "18",
            "nama": "Identifikasi dan Klasifikasi Barang I",
            "kode": "IKB I",
            "sesi": "16"
        },
        {
            "id": "169",
            "id_prodi": "9",
            "id_semester": "19",
            "nama": "Manajemen Risiko Kepabeanan dan Cukai",
            "kode": "ManRis KC",
            "sesi": "16"
        },
        {
            "id": "170",
            "id_prodi": "5",
            "id_semester": "8",
            "nama": "Etika dan Anti Korupsi",
            "kode": "Etika",
            "sesi": "16"
        },
        {
            "id": "171",
            "id_prodi": "5",
            "id_semester": "9",
            "nama": "Pajak Pertambahan Nilai",
            "kode": "PPN",
            "sesi": "16"
        },
        {
            "id": "172",
            "id_prodi": "5",
            "id_semester": "10",
            "nama": "Etika dan Anti Korupsi",
            "kode": "Etika",
            "sesi": "16"
        },
        {
            "id": "173",
            "id_prodi": "7",
            "id_semester": "13",
            "nama": "Ilmu Ukur Tanah dan Pemetaan",
            "kode": "IUT",
            "sesi": "16"
        },
        {
            "id": "174",
            "id_prodi": "8",
            "id_semester": "15",
            "nama": "Ilmu Ukur Tanah dan Pemetaan",
            "kode": "IUT",
            "sesi": "16"
        },
        {
            "id": "175",
            "id_prodi": "9",
            "id_semester": "18",
            "nama": "Penegakan Hukum Kepabeanan dan Cukai I",
            "kode": "PH KC I",
            "sesi": "17"
        },
        {
            "id": "176",
            "id_prodi": "8",
            "id_semester": "17",
            "nama": "Pendataan dan Penilaian Masal",
            "kode": "PPM"
        },
        {
            "id": "177",
            "id_prodi": "8",
            "id_semester": "17",
            "nama": "Pengantar Penilaian Bisnis",
            "kode": "Peng Pen Bisnis"
        },
        {
            "id": "178",
            "id_prodi": "8",
            "id_semester": "17",
            "nama": "Penilaian Properti Komersial",
            "kode": "PPK"
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
      },
        linkPengumpulan: function () {
            return 'http://gg.gg/lju_' + this.prodi.kode + '_' + this.semester.angka + '-' + this.kelas;
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