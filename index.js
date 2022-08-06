let lk = document.querySelector(".lk").value;
function pesan(){
    swal({
        title: "apa kamu yakin??",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((ya) => {
        if (ya) {
          swal("Pemesanan Telah Berhasil","Terima Kasih Telah Berbelanja Di Toko Kami!", {
            icon: "success",
          });
        }
      });
}
