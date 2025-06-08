$(document).ready(function () {
    var translations = {
        "en": {
            "Statutory / NoN Statutory Payment": "Statutory / NoN Statutory Payment",
            "Voucher No": "Voucher No",
            "Type": "Type",
            "Manual Bill No": "Manual Bill No",
            "From Date": "From Date",
            "To Date": "To Date",
            "Account Code": "Account Code",
            "Bank Name :": "Bank Name :",
            "Branch Code :": "Branch Code :",
            "A/C No :": "A/C No :",
            "IFSC": "IFSC",
            "Transaction Date": "Transaction Date",
            "Pay from Bank": "Pay from Bank",
            "Payment Mode": "Payment Mode",
            "NarrationNarration": "Narration",
            "Check Closing Balance ?": "Check Closing Balance ?",
            "Click Here To Upload File": "Click Here To Upload File",
            "Bill  Details": "Bill  Details",
            "Bill NO.": "Bill NO.",
            "Vendor Name": "Vendor Name",
            "Account Code": "Account Code",
            "Bill Date": "Bill Date",
            "Payable Amount": "Payable Amount",
            "Cleared Amount": "Cleared Amount",
            "Balance Amount": "Balance Amount",
            "Current Pay": "Current Pay",
            "Select Bill": "Select Bill",
            "BillId": "BillId",
            "VendorId": "VendorId",
            "AmountType": "AmountType",
            "GjvId": "GjvId",
            "IsPartial": "IsPartial",
            "Save Draft": "Save Draft",
            "Choose Action": "Choose Action",
            "Statutory / NoN Statutory Payment": "Statutory / NoN Statutory Payment",
            "Bank Name :": "Bank Name :",
            "Branch Code :": "Branch Code :",
            "A/C No.": "A/C No.",
            "Back": "Back",
            "Check Closing Balance ?": "Check Closing Balance ?",
            "Bill NO.": "Bill NO."
            // Add more translations for English here
        },
        "hi": {
            "Statutory / Non-Statutory Payment": "वैधानिक / गैर-वैधानिक भुगतान",
            "Voucher No": "वाउचर संख्या",
            "Type": "प्रकार",
            "Manual Bill No": "मैन्युअल बिल संख्या",
            "From Date": "तारीख से",
            "To Date": "तारीख तक",
            "Account Code": "खाता कोड",
            "Bank Name:": "बैंक का नाम:",
            "Branch Code:": "शाखा कोड:",
            "A/C No:": "खाता संख्या:",
            "IFSC": "आईएफएससी",
            "Transaction Date": "लेनदेन तिथि",
            "Pay from Bank": "बैंक से भुगतान",
            "Payment Mode": "भुगतान का तरीका",
            "Narration": "विवरण",
            "Check Closing Balance?": "समापन शेष राशि जांचें?",
            "Click Here To Upload File": "फ़ाइल अपलोड करने के लिए यहां क्लिक करें",
            "Bill Details": "बिल विवरण",
            "Bill No.": "बिल संख्या",
            "Vendor Name": "विक्रेता का नाम",
            "Account Code": "खाता कोड",
            "Bill Date": "बिल तिथि",
            "Payable Amount": "देय राशि",
            "Cleared Amount": "साफ़ की गई राशि",
            "Balance Amount": "शेष राशि",
            "Current Pay": "वर्तमान भुगतान",
            "Select Bill": "बिल चुनें",
            "BillId": "बिल आईडी",
            "VendorId": "विक्रेता आईडी",
            "AmountType": "राशि प्रकार",
            "GjvId": "जीजेवी आईडी",
            "IsPartial": "आंशिक है",
            "Save Draft": "ड्राफ्ट सहेजें",
            "Choose Action": "क्रिया चुनें",
            "Statutory / NoN Statutory Payment": "वैधानिक / गैर-वैधानिक भुगतान",
            "Bank Name :": "बैंक का नाम :",
            "Branch Code :": "शाखा कोड :",
            "A/C No.": "खाता संख्या",
            "Back": "पीछे",
            "Check Closing Balance ?": "समापन शेष राशि जांचें ?",
            "Bill NO.": "बिल नं."
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
    $("#language-selector li input[type='radio']").change(function () {
        var selectedLanguage = $("input[name='radio-switch-name']:checked").val();
        translateLabels(selectedLanguage);
    });

    // Initial translation
    var initialLanguage = $("input[name='radio-switch-name']:checked").val();
    translateLabels(initialLanguage);
});
