 // $("#prodi").select2();

      $("#semester").chained("#prodi");
      $("#matkul").chained("#semester");

      $('#nama').on('input', function () {
         var nama = $("#nama").val();
         $("#hasil_nama").text(nama);
      });

      $('#npm').on('input', function () {
         var npm = $("#npm").val();
         $("#hasil_npm").text(npm);
      });

      $('#prodi').on('input', function () {
         var prodi = $("#prodi").val();
         $("#hasil_prodi").text(prodi);
      });

      $('#kelas').on('input', function () {
         var kelas = $("#kelas").val();
         $("#hasil_kelas").text(kelas);
      });

      $('#noabsen').on('input', function () {
         var noabsen = $("#noabsen").val();
         $("#hasil_noabsen").text(noabsen);
      });

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
         $.notify("Penamaan LJU udah dicopy. Tinggal CTRL + V aja ya :)", "success");
         $temp.remove();
      }

      function setCookie(cname, cvalue, exdays) {
         var d = new Date();
         d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
         var expires = "expires=" + d.toUTCString();
         document.cookie = cname + "=" + cvalue + "; " + expires;
      }

      function showCookie() {
         document.write(document.cookie);
      }