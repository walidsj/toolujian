// $("#prodi").select2();

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

refreshButton();

$('#nama').on('input', function () {
   var nama = $("#nama").val();
   $("#hasil_nama").text(nama);
   if ($("#nama").val() != '' && $("#nama").val() != null) {
      $("#nama").addClass('border-success');
      $("#nama").removeClass('border-danger');
   } else {
      $("#nama").addClass('border-danger');
      $("#nama").removeClass('border-success');
   }
   refreshButton();
});

if (getCookie('nama')) {
   var nama = getCookie('nama');
   $("#nama").val(nama);
   $("#hasil_nama").text(nama);
}

$('#npm').on('input', function () {
   var npm = $("#npm").val();
   $("#hasil_npm").text(npm);
   if ($("#npm").val() != '' && $("#npm").val() != null) {
      $("#npm").addClass('border-success');
      $("#npm").removeClass('border-danger');
   } else {
      $("#npm").addClass('border-danger');
      $("#npm").removeClass('border-success');
   }
   refreshButton();
});

if (getCookie('npm')) {
   var npm = getCookie('npm');
   $("#npm").val(npm);
   $("#hasil_npm").text(npm);
}

$('#prodi').on('input', function () {
   var prodi = $("#prodi").val();
   $("#hasil_prodi").text(prodi);
   if ($("#prodi").val() != '' && $("#prodi").val() != null) {
      $("#prodi").addClass('border-success');
      $("#prodi").removeClass('border-danger');
   } else {
      $("#prodi").addClass('border-danger');
      $("#prodi").removeClass('border-success');
   }
   refreshButton();
});

if (getCookie('prodi')) {
   var prodi = getCookie('prodi');
   $('#prodi option[value='+prodi+']').attr('selected','selected');
   $("#hasil_prodi").text(prodi);
}

$('#semester').on('input', function () {
   if ($("#semester").val() != '' && $("#semester").val() != null) {
      $("#semester").addClass('border-success');
      $("#semester").removeClass('border-danger');
   } else {
      $("#semester").addClass('border-danger');
      $("#semester").removeClass('border-success');
   }
   refreshButton();
});

if (getCookie('semester')) {
   var semester = getCookie('semester');
   $('#semester option[value=' + semester + ']').attr('selected', 'selected');
}

$('#kelas').on('input', function () {
   var kelas = $("#kelas").val();
   $("#hasil_kelas").text(kelas);
   if ($("#kelas").val() != '' && $("#kelas").val() != null) {
      $("#kelas").addClass('border-success');
      $("#kelas").removeClass('border-danger');
   } else {
      $("#kelas").addClass('border-danger');
      $("#kelas").removeClass('border-success');
   }
   refreshButton();
});

if (getCookie('kelas')) {
   var kelas = getCookie('kelas');
   $("#kelas").val(kelas);
   $("#hasil_kelas").text(kelas);
}

$('#noabsen').on('input', function () {
   var noabsen = $("#noabsen").val();
   $("#hasil_noabsen").text(noabsen);
   if ($("#noabsen").val() != '' && $("#noabsen").val() != null) {
      $("#noabsen").addClass('border-success');
      $("#noabsen").removeClass('border-danger');
   } else {
      $("#noabsen").addClass('border-danger');
      $("#noabsen").removeClass('border-success');
   }
   refreshButton();
});

if (getCookie('noabsen')) {
   var noabsen = getCookie('noabsen');
   $("#noabsen").val(noabsen);
   $("#hasil_noabsen").text(noabsen);
}

$('#sesi').on('input', function () {
   var sesi = $("#sesi").val();
   $("#hasil_sesi").text(sesi);
   if ($("#sesi").val() != '' && $("#sesi").val() != null) {
      $("#sesi").addClass('border-success');
      $("#sesi").removeClass('border-danger');
   } else {
      $("#sesi").addClass('border-danger');
      $("#sesi").removeClass('border-success');
   }
   refreshButton();
});

$('#matkul').on('input', function () {
   var matkul = $("#matkul").val();
   $("#hasil_matkul").text(matkul);
   if ($("#matkul").val() != '' && $("#matkul").val() != null) {
      $("#matkul").addClass('border-success');
      $("#matkul").removeClass('border-danger');
   } else {
      $("#matkul").addClass('border-danger');
      $("#matkul").removeClass('border-success');
   }
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