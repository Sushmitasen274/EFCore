
function ShowFileUploaderPartialView(FromCode, TransactionId,ViewKey) {

  
    debugger;
    var dialog = $("#modal_file_dialog").removeClass('hide').dialog({
        width: 946,
        modal: true,
        draggable: false,
        resizable: false,
        closeOnEscape: false,
        title: "Upload/Download File(s)",
        title_html: true,
        open: function (type, data) {

            $.ajax({
                type: "GET",
                url: "/FmsFileUpload/FileUpload",

                data: {
                    "FormCode": FromCode,
                    "TransactionId": TransactionId,
                    "ViewKey": ViewKey
                },
                success: function (response) {
                    debugger;
                   

                   
                    $("#modal_file_dialog").show();
                    $('#modal_file_dialog').html(response);
                    $('#modal_file_dialog').on('click', '#btnCloseFileView', function () {
                        dialog.dialog("close");
                    });
                   
                    $("#loader").hide();

                },
                failure: function (response) {
                    console.log(response.responseText);
                },
                error: function (response) {
                    console.log(response.responseText);
                }
            });
        },
    });
    dialog.closest('.ui-dialog').find('.ui-dialog-titlebar').addClass('custom-dialog-header');
}

function GetBoIdByFormCode(FormCode) {
    var BussienessObjectId;
    $.ajax({
        "url": "../GeneralFunctionsFms/GetBussienessObjectIdByFormCode",
        "type": "GET",
        async: false,

        "data": { "FormCode": FormCode },
        success: function (data) {
            BussienessObjectId = data;
        }
    });
    return BussienessObjectId;
}


function GetWfRoleAction(FormCode,TransId) {
    var LocationCode;
    var RoleId;
    var ActionId;
     
    $.ajax({
        "url": "../GeneralFunctionsFms/GetRoleAndActionId",
        "type": "GET",
        async: false,

        "data": { "FormCode": FormCode, "TransId": TransId },
        success: function (data) {
            LocationCode = data.WfLocationCode;
            RoleId = data.WfRoleId
            ActionId = data.WfActionId
        }
    });
    var result = {
        WfLocationCode: LocationCode,
        WfRoleId: RoleId,
        WfActionId: ActionId
    };
    return result;
}

function urlEncryptAES(clearText) {
    debugger;
    const encryptionKey = "MAKV2SPBNI99212MAKV2SPBNI99212AB"; // Ensure this is 32 bytes
    const key = CryptoJS.enc.Utf8.parse(encryptionKey);
    const iv = CryptoJS.enc.Utf8.parse("RandomInitVector"); 

    // Encrypt the text
    const encrypted = CryptoJS.AES.encrypt(clearText, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString(); 
}


