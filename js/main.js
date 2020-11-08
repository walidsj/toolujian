
if (getCookie('notif')) {
   if (getCookie('notif') < 3) {
      var angka = getCookie('notif');
      showNotifikasi();

      var n = parseInt(angka) + 1;
      var d = new Date();
      d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));

      var expires = "expires=" + d.toUTCString();
      document.cookie = 'notif' + "=" + n + "; " + expires;
   }
} else {
   showNotifikasi();
   var n = 1;
   var d = new Date();
   d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));

   var expires = "expires=" + d.toUTCString();
   document.cookie = 'notif' + "=" + n + "; " + expires;
}

function showNotifikasi() {
   $.notify("Bookmark aja link lengkapnya :)", "info");
   $.notify("Jangan buka bit.ly/tooluji kl offline", "info");
   $.notify("Kl offline, buka walidsj.github.io/toolujian", "info");
   $.notify("Tool ini bisa diakses secara offline!", "info");
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function refreshValidation(name, kapok) {
   if ($("#"+name).val() != '' && $("#"+name).val() != null) {
      $("#"+name).addClass('border-success');
      $("#"+name).removeClass('border-danger');
   } else {
      $("#"+name).addClass('border-danger');
      $("#"+name).removeClass('border-success');
      $("#hasil_"+name).text('<'+kapok+'>');
   }
}

refreshButton();

$('#nama').on('input', function () {
   var nama = $("#nama").val();
   $("#hasil_nama").text(nama);
   refreshValidation('nama', 'Nama Lengkap');
   refreshButton();
});

if (getCookie('nama')) {
   var nama = getCookie('nama');
   $("#nama").val(nama);
   $("#hasil_nama").text(nama);
   refreshValidation('nama', 'Nama Lengkap');
}

$('#npm').on('input', function () {
   var npm = $("#npm").val();
   $("#hasil_npm").text(npm);
   refreshValidation('npm', 'NPM');
   refreshButton();
});

if (getCookie('npm')) {
   var npm = getCookie('npm');
   $("#npm").val(npm);
   $("#hasil_npm").text(npm);
   refreshValidation('npm', 'NPM');
}

$('#prodi').on('input', function () {
   var prodi = $("#prodi").val();
   $("#hasil_prodi").text(prodi);
   refreshValidation('prodi', 'Program Studi');
   refreshButton();
});

if (getCookie('prodi')) {
   var prodi = getCookie('prodi');
   $('#prodi option[value='+prodi+']').attr('selected','selected');
   $("#hasil_prodi").text(prodi);
   refreshValidation('prodi', 'Program Studi');
}

$('#semester').on('input', function () {
   refreshValidation('semester', 'Semester');
   refreshButton();
});

if (getCookie('semester')) {
   var semester = getCookie('semester');
   $('#semester option[value=' + semester + ']').attr('selected', 'selected');
   refreshValidation('semester', 'Semester');
}

$('#kelas').on('input', function () {
   var kelas = $("#kelas").val();
   $("#hasil_kelas").text(kelas);
   refreshValidation('kelas', 'Kelas');
   refreshButton();
});

if (getCookie('kelas')) {
   var kelas = getCookie('kelas');
   $("#kelas").val(kelas);
   $("#hasil_kelas").text(kelas);
   refreshValidation('kelas', 'Kelas');
}

$('#noabsen').on('input', function () {
   var noabsen = $("#noabsen").val();
   $("#hasil_noabsen").text(noabsen);
   refreshValidation('noabsen', 'No. Absen');
   refreshButton();
});

if (getCookie('noabsen')) {
   var noabsen = getCookie('noabsen');
   $("#noabsen").val(noabsen);
   $("#hasil_noabsen").text(noabsen);
   refreshValidation('noabsen', 'No. Absen');
}

$('#sesi').on('input', function () {
   var sesi = $("#sesi").val();
   $("#hasil_sesi").text(sesi);
   refreshValidation('sesi');
   refreshButton();
});

$('#matkul').on('input', function () {
   var matkul = $("#matkul").val();
   $("#hasil_matkul").text(matkul);
   refreshValidation('matkul', 'Matkul');
   refreshButton();
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

function refreshButton() {
   if (($("#nama").val() == '' || $("#nama").val() == null) || ($("#npm").val() == '' || $("#npm").val() == null) || ($("#kelas").val() == '' || $("#kelas").val() == null) || ($("#prodi").val() == '' || $("#prodi").val() == null) || ($("#semester").val() == '' || $("#semester").val() == null) || ($("#noabsen").val() == '' || $("#noabsen").val() == null) || ($("#sesi").val() == '' || $("#sesi").val() == null) || ($("#matkul").val() == '' || $("#matkul").val() == null)) {
      $('#buttoncopy').attr('disabled', 'disabled');
   } else {
      $('#buttoncopy').removeAttr('disabled');
   }
}

function hapus() {
   if (getCookie('nama')) {
      document.cookie = 'nama=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
   }
   if (getCookie('npm')) {
      document.cookie = 'npm=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
   }
   if (getCookie('prodi')) {
      document.cookie = 'prodi=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
   }
   if (getCookie('semester')) {
      document.cookie = 'semester=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
   }
   if (getCookie('kelas')) {
      document.cookie = 'kelas=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
   }
   if (getCookie('noabsen')) {
      document.cookie = 'noabsen=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
   }
   $("#nama").val('');
   $("#npm").val('');
   $("#prodi").val('');
   $("#semester").val('');
   $("#kelas").val('');
   $("#noabsen").val('');

   refreshValidation('nama', 'Nama Lengkap');
   refreshValidation('npm', 'NPM');
   refreshValidation('prodi', 'Program Studi');
   refreshValidation('semester', 'Semester');
   refreshValidation('kelas', 'Kelas');
   refreshValidation('noabsen', 'No. Absen');
   refreshButton();
   $.notify("Data ujian berhasil dihapus", "success");
}