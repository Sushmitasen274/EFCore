function CallAjaxDynamic(PropertyID, ID, Type) {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "../../DropDown/SelectDropDown",
        data: { "ParentID": ID, "DropDownType": Type },
        dataType: "json",
        success: function (data) {
            debugger;
            $('#' + PropertyID).html("");
            var s = '';
            var len = data.length;
            for (var i = 1; i < len; i++)//fore multiple dropdowns
            {
                s += "<option value='" + data[i]["Value"] + "'>" + data[i]["Text"] + "</option>";
            }
            $('#' + PropertyID).html(s).trigger("chosen:updated");;
        },
        error: function (result) {
            // $('#errorBlock').show();
            // $('#lblMessage').text("Error...Please Try again");
            swal("Error!..Please Try again")
        }
    });
}
function FillDropDownDynamic(event, Type) {
    var PropertyID = $(event).attr("id");
    var values = $("#" + PropertyID).val();

    var SelectOtherPropertyID = $(event).attr("DatabindProperty");
    if (SelectOtherPropertyID != null && SelectOtherPropertyID != "undefined") {
        CallAjaxDynamic(SelectOtherPropertyID, values, Type);
    }

}

//Fill Two DropDown on single Event
function FillTwoDropDownDynamic(event, Type, Type2) {
    var PropertyID = $(event).attr("id");
    var values = $("#" + PropertyID).val();

    var SelectOtherPropertyID = $(event).attr("DatabindProperty");
    if (SelectOtherPropertyID != null && SelectOtherPropertyID != "undefined") {
        CallAjaxDynamic(SelectOtherPropertyID, values, Type);
    }
    var SelectSecondOtherPropertyID = $(event).attr("DatabindPropertySecond");
    var DatabindPropertythird = $(event).attr("DatabindPropertythird");
    if (SelectSecondOtherPropertyID != null && SelectSecondOtherPropertyID != "undefined" && DatabindPropertythird != null && DatabindPropertythird != "undefined") {
        CallTwoAjaxDynamic(SelectSecondOtherPropertyID, DatabindPropertythird, values, Type);
    }
}
function CallTwoAjaxDynamic(PropertyID, PropertyIDSecond, ID, Type) {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "../../DropDown/SelectDropDown",
        data: { "ParentID": ID, "DropDownType": Type },
        dataType: "json",
        success: function (data) {
            debugger;
            $('#' + PropertyID).html("");
            $('#' + PropertyIDSecond).html("");
            var s = '';
            var len = data.length;
            for (var i = 1; i < len; i++)//fore multiple dropdowns
            {
                s += "<option value='" + data[i]["Value"] + "'>" + data[i]["Text"] + "</option>";
            }
            $('#' + PropertyID).html(s).trigger("chosen:updated");;
            $('#' + PropertyIDSecond).html(s).trigger("chosen:updated");;
        },
        error: function (result) {
            // $('#errorBlock').show();
            // $('#lblMessage').text("Error...Please Try again");
            swal("Error!..Please Try again")
        }
    });
}