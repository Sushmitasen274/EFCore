function PayOnline(shopid, deoid, refid, licenseecode, lictypecode, finyear, paymentmode, data, purpose = "TEST") {
    debugger;
    var EGrasChallanDetail = {};
    EGrasChallanDetail.SHOP_ID = shopid;
    EGrasChallanDetail.DEO_ID = deoid;
    EGrasChallanDetail.Ref_id = refid;
    EGrasChallanDetail.LicenceeCode = licenseecode;
    EGrasChallanDetail.LIC_TYPE_CODE = lictypecode;
    EGrasChallanDetail.FinYear = finyear;
    EGrasChallanDetail.Paymode = paymentmode;
    EGrasChallanDetail.Challanlist = data;
    EGrasChallanDetail.CHALLAN_PURPOSE = purpose;
   // alert(shopid);
    $.ajax({
        url: '/Egras/GETEGrasChallanDetail',
        dataType: "json",
      // data: { SHOP_ID: shopid, DEO_ID: deoid, Ref_id: refid, LicenceeCode: licenseecode, LIC_TYPE_CODE: lictypecode, FinYear: finyear, Paymode: paymentmode, Challanlist: data, CHALLAN_PURPOSE: purpose},
        data: EGrasChallanDetail,        
        method: 'Post',
       // contentType: "application/json; charset=utf-8",
        success: function (response) {
            SendToEgrass(response);
        },
        error: function (err) {
            alert(err);
        }
    });

}

function SendToEgrass(response) {
    var obj = JSON.parse(response);

    if (obj.Status == "1") {

       // alert(obj.Encdata);
        //alert(obj.Merchant_code);
      //  alert(obj.AUIN);

        window.location.href = "/Egras/EgrassView?Encdata=" + obj.Encdata + "&Merchant_code=" + obj.Merchant_code + "&AUIN=" + obj.AUIN;
    }
    else {
        alert(obj.Message);
    }

}

