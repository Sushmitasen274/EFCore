$(document).ready(function () {
    var translations = {
        "en": {
            "Purchase Voucher": "Purchase Voucher",
            "System PV No": "System PV No",
            "PV Stage": "PV Stage",
            "PV Date": "PV Date",
            "Manual PV No": "Manual PV No",
            "Manual PV Date": "Manual PV Date",
            "Budget Head Required": "Budget Head Required",
            "Budget Head": "Budget Head",
            "PV Category": "PV Category",
            "PO / WO Ref.No": "PO / WO Ref.No",
            "PO / WO Date": "PO / WO Date",
            "Vendor": "Vendor",
            "Vendor PV No ": "Vendor PV No ",
            "Vendor PV Date ": "Vendor PV Date ",
            "PV Due Date": "PV Due Date",
            "Payment Priority": "Payment Priority",
            "Narration": "Narration",
            "slno": "slno",
            "Particulars": "Particulars",
            "UOM": "UOM",
            "Quantity": "Quantity",
            "Rate": "Rate",
            "Amount": "Amount",
            "GST(%)": "GST(%)",
            "CGST": "CGST",
            "SGST": "SGST",
            "IGST": "IGST",
            "TotalAmount": "TotalAmount",
            "slno": "slno",
            "Description": "Description",
            "Fund Requested": "Fund Requested",
            "%": "%",
            "Narration": "Narration",
            "Debit / Credit": "Debit / Credit",
            "Amount": "Amount",
            "Action": "Action",
            "Debit / Credit": "Debit / Credit",
            "Action": "Action",
            "AccountCodeVal": "AccountCodeVal",
            "DebitCriditVal": "DebitCriditVal",
            "Account Code": "Account Code",
            "AccountCodeVal": "AccountCodeVal",
            "Debit": "Debit",
            "Credit": "Credit",
            "Action": "Action",
            "AccountCodeFrom": "AccountCodeFrom",
            "User Comments/Remarks": "User Comments/Remarks",
            "Save Draft": "Save Draft",
            "Choose Action": "Choose Action",
            "Credit Amount": "Credit Amount :",
            "Debit Amount": "Debit Amount :",
            "Total PV Amount": "Total PV Amount",
            "Basic PV Amount": "Basic PV Amount :",
            "Click Here To Upload File": "Click Here To Upload File",
            "Back": "Back",
            "Transaction Details": "Transaction Details",
            "Account Code": "Account Code",
            "Bill Details": "Bill Details",
            "Net PV Amount": "Net PV Amount :",
            "Automate accounting entry": "Automate accounting entry",
            "Purchase Ledger": "Purchase Ledger",
            "PO Date": "PO Date",
            "PO Ref.No": "PO Ref.No",
            "PV Type": "PV Type",
            "VAT(%)": "VAT(%)",
            "Discount": "Discount",
            "Items": "Items",
            "VAT": "VAT",
            "CST": "CST",
            "IsStatutory": "IsStatutory",
            "Import OB For Item": "Import OB For Item",
            "OB Details": "OB Details",
            "Import": "Import",
            "Location": "Location",
            "Item Code": "Item Code",
            "Value": "Value",
            "Import OB": "Import OB",
            "Date": "Date",
            // Add more translations for English here
        },

        "hi": {
            "Action": "कार्रवाई",
            "Automate accounting entry": "स्वचालित लेखांकन प्रविष्टि",
            "Net PV Amount": "शुद्ध बीआर राशि :",
            "Purchase Voucher": "बिल रजिस्टर",
            "System PV No": "सिस्टम बीआर नंबर",
            "PV Stage": "बिल स्टेज",
            "PV Date": "बीआर तिथि",
            "Manual PV No": "मैनुअल बीआर नंबर",
            "Manual PV Date": "मैनुअल बीआर दिनांक",
            "Budget Head Required": "बजट हेड आवश्यक",
            "Budget Head": "बजट हेड",
            "PV Category": "बीआर श्रेणी",
            "PO / WO Ref.No": "पीओ / डब्ल्यूओ रेफरेंस नंबर",
            "PO / WO Date": "पीओ / डब्ल्यूओ तिथि",
            "Vendor": "विक्रेता",
            "Vendor PV No ": "विक्रेता बीआर नंबर",
            "Vendor PV Date ": "विक्रेता बीआर तिथि",
            "PV Due Date": "बीआर नियत तिथि",
            "Payment Priority": "भुगतान प्राथमिकता",
            "Narration": "विवरण",
            "slno": "क्रमांक",
            "Particulars": "विशेषताएँ",
            "UOM": "इकाई",
            "Quantity": "मात्रा",
            "Rate": "दर",
            "Amount": "राशि",
            "GST(%)": "जीएसटी(%)",
            "CGST": "सीजीएसटी",
            "SGST": "एसजीएसटी",
            "IGST": "आईजीएसटी",
            "TotalAmount": "कुल राशि",
            "Description": "विवरण",
            "Fund Requested": "निधि अनुरोधित",
            "%": "%",
            "Debit / Credit": "डेबिट / क्रेडिट",
            "AccountCodeVal": "खाता कोड मूल्य",
            "DebitCriditVal": "डेबिट / क्रेडिट मूल्य",
            "Account Code": "खाता कोड",
            "AccountCodeVal": "खाता कोड मूल्य",
            "Debit": "डेबिट",
            "Credit": "क्रेडिट",
            "AccountCodeFrom": "खाता कोड से",
            "User Comments/Remarks": "उपयोगकर्ता टिप्पणियाँ/टिप्पणियाँ",
            "Save Draft": "ड्राफ्ट सहेजें",
            "Choose Action": "कार्रवाई चुनें",
            "Credit Amount": "क्रेडिट राशि :",
            "Debit Amount": "डेबिट राशि :",
            "Total PV Amount :": "कुल बीआर राशि :",
            "Basic PV Amount": "मौलिक बीआर राशि :",
            "Click Here To Upload File": "फ़ाइल अपलोड करने के लिए यहां क्लिक करें",
            "Back": "पीछे",
            "Transaction Details": "लेन-देन विवरण",
            "Account Code": "खाता कोड",
            "Purchase Voucher Details": "खरीद वाउचर विवरण",
            "Purchase Ledger": "खरीद बहीखाता",
            "PO Date": "पीओ तिथि",
            "PO Ref.No": "पीओ संदर्भ संख्या",
            "PV Type": "पीवी प्रकार",
            "VAT(%)": "वैट(%)",
            "Discount": "छूट",
            "Items": "आइटम",
            "VAT": "वैट",
            "CST": "सीएसटी",
            "IsStatutory": "वैधानिक है",
            "Import OB For Item": "आइटम के लिए ओबी आयात करें",
            "OB Details": "ओबी विवरण",
            "Import": "आयात",
            "Location": "स्थान",
            "Item Code": "आइटम कोड",
            "Value": "मूल्य",
            "Import OB": "आयात ओबी",
            "Date": "तारीख़",
            "Import": "आयात"
            // Add more translations for Hindi here
        },

    };

    // Function to translate labels and buttons
    function translateLabels(language) {
        $('[data-translate]').each(function () {
            var labelText = $(this).data('translate');
            var translatedText = translations[language][labelText];
            if (translatedText) {
                if ($(this).is("button")) {
                    // If the element is a button, set its text content
                    $(this).text(translatedText);
                } else {
                    // For other elements, set their text content
                    $(this).text(translatedText);
                }
            }
        });
    }

    // Language selector change event
    $("#language-selector input[type='radio']").change(function () {

        var selectedLanguage = $("input[name='radio-switch-name']:checked").val();
        translateLabels(selectedLanguage);

    });

    // Initial translation
    var initialLanguage = $("input[name='radio-switch-name']:checked").val();
    translateLabels(initialLanguage);
});
