// $("#prodi").select2();

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

$('#nama').on('input', function () {
   var nama = $("#nama").val();
   $("#hasil_nama").text(nama);
});

if (getCookie('nama')) {
   var nama = getCookie('nama');
   $("#nama").val(nama);
   $("#hasil_nama").text(nama);
}

$('#npm').on('input', function () {
   var npm = $("#npm").val();
   $("#hasil_npm").text(npm);
});

if (getCookie('npm')) {
   var npm = getCookie('npm');
   $("#npm").val(npm);
   $("#hasil_npm").text(npm);
}

$('#prodi').on('input', function () {
   var prodi = $("#prodi").val();
   $("#hasil_prodi").text(prodi);
});

if (getCookie('prodi')) {
   var prodi = getCookie('prodi');
   $("#prodi").val(prodi);
   $("#hasil_prodi").text(prodi);
}

if (getCookie('semester')) {
   var semester = getCookie('semester');
   // $("#semester").val(semester);
   $('#semester option[value='+semester+']').attr('selected','selected');
}

$('#kelas').on('input', function () {
   var kelas = $("#kelas").val();
   $("#hasil_kelas").text(kelas);
});

if (getCookie('kelas')) {
   var kelas = getCookie('kelas');
   $("#kelas").val(kelas);
   $("#hasil_kelas").text(kelas);
}

$('#noabsen').on('input', function () {
   var noabsen = $("#noabsen").val();
   $("#hasil_noabsen").text(noabsen);
});

if (getCookie('noabsen')) {
   var noabsen = getCookie('noabsen');
   $("#noabsen").val(noabsen);
   $("#hasil_noabsen").text(noabsen);
}

$('#sesi').on('input', function () {
   var sesi = $("#sesi").val();
   $("#hasil_sesi").text(sesi);
});

$('#matkul').on('input', function () {
   var matkul = $("#matkul").val();
   $("#hasil_matkul").text(matkul);
});

function copyToClipboard(element) {
   var $temp = $("<input>");
   $("body").append($temp);
   $temp.val($.trim($(element).text())).select();
   document.execCommand("copy");
   $.notify("Penamaan udah dicopy. Bisa langsung CTRL+V", "success");
   $temp.remove();
}

function simpan() {
   var nama = $("#nama").val();
   var npm = $("#npm").val();
   var prodi = $("#prodi").val();
   var semester = $("#semester").val();
   var kelas = $("#kelas").val();
   var noabsen = $("#noabsen").val();
   var d = new Date();
   d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));

   var expires = "expires=" + d.toUTCString();
   if (nama != null && nama != '') {
      document.cookie = 'nama' + "=" + nama + "; " + expires;
   }
   if (npm != null && npm != '') { document.cookie = 'npm' + "=" + npm + "; " + expires;}
   if (prodi != null && prodi != '') { document.cookie = 'prodi' + "=" + prodi + "; " + expires;}
   if (semester != null && semester != '') { document.cookie = 'semester' + "=" + semester + "; " + expires;}
   if (kelas != null && kelas != '') { document.cookie = 'kelas' + "=" + kelas + "; " + expires;}
   if (noabsen != null && noabsen != '') { document.cookie = 'noabsen' + "=" + noabsen + "; " + expires;}

   $.notify("Data ujian berhasil disimpan", "success");
}

$("#matkul").chained("#semester");
$("#semester").chained("#prodi");