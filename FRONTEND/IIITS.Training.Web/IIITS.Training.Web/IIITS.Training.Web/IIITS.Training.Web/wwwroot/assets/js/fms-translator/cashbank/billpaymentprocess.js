$(document).ready(function () {
    var translations = {
        "en": {
            "Bill Payment Process": "Bill Payment Process",
            "Bill Numbers": "Bill Numbers",
            "BR No": "BR No",
            "BR Date": "BR Date",
            "Bill Head": "Bill Head",
            "PO / WO Ref.No": "PO / WO Ref.No",
            "Vendor": "Vendor",
            "Vendor Bill No": "Vendor Bill No",
            "Bill Category": "Bill Category",
            "Vendor AccountCode": "Vendor AccountCode",
            "Narration": "Narration",
            "Vendor Payment": "Vendor Payment",
            "Transaction Date": "Transaction Date",
            "Advance Adjustment": "Advance Adjustment",
            "PayFrom Bank": "PayFrom Bank",
            "Current Payment": "Current Payment",
            "Payment Mode": "Payment Mode",
            "Manual Bill Number": "Manual Bill Number",
            "Reference Doc(If Any)": "Reference Doc(If Any)",
            "Bill Process Narration": "Bill Process Narration",
            "User Comments/Remarks": "User Comments/Remarks",
            "Save Draft": "Save Draft",
            "Choose Action": "Choose Action",
            "Click here to upload file": "Click here to upload file",
            "Back": "Back",
            "View Bill ?": "View Bill ?",
            "Check Advance Amount?": "Check Advance Amount?",
            "Check Closing Balance ?": "Check Closing Balance ?",
            "Payable Amount": "Payable Amount",
            "Adjusted Amount": "Adjusted Amount",
            "Paid Amount": "Paid Amount",
            "Balance Amount": "Balance Amount",
            "View Bill Payment Details ?": "View Bill Payment Details ?",
            "Advance Adjusted Details": "Advance Adjusted Details",
            "PurchaseVoucher No.": "PurchaseVoucher No.",
            "WO No.": "WO No.",
            "Vednor Name": "Vednor Name",
            "Advance Amount": "Advance Amount",
            "Current Adjustment": "Current Adjustment",
            "Vednor Name": "Vednor Name",
            // Add more translations for English here
        },

        "hi": {
            "Bill Payment Process": "बिल भुगतान प्रक्रिया",
            "Bill Numbers": "बिल संख्या",
            "BR No": "बीआर संख्या",
            "BR Date": "बीआर तिथि",
            "Bill Head": "बिल हेड",
            "PO / WO Ref.No": "पीओ / डब्ल्यूओ संदर्भ संख्या",
            "Vendor": "विक्रेता",
            "Vendor Bill No": "विक्रेता बिल संख्या",
            "Bill Category": "बिल श्रेणी",
            "Vendor AccountCode": "विक्रेता खाता कोड",
            "Narration": "विवरण",
            "Vendor Payment": "विक्रेता भुगतान",
            "Transaction Date": "लेनदेन तिथि",
            "Advance Adjustment": "अग्रिम समायोजन",
            "PayFrom Bank": "बैंक से भुगतान",
            "Current Payment": "वर्तमान भुगतान",
            "Payment Mode": "भुगतान मोड",
            "Manual Bill Number": "मैन्युअल बिल संख्या",
            "Reference Doc(If Any)": "संदर्भ दस्तावेज (यदि कोई हो)",
            "Bill Process Narration": "बिल प्रक्रिया विवरण",
            "User Comments/Remarks": "उपयोगकर्ता टिप्पणियाँ/टिप्पणियाँ",
            "Save Draft": "ड्राफ्ट सहेजें",
            "Choose Action": "क्रिया चुनें",
            "Click here to upload file": "फ़ाइल अपलोड करने के लिए यहां क्लिक करें",
            "Back": "वापस",
            "View Bill ?": "बिल देखें ?",
            "Check Advance Amount?": "अग्रिम राशि जांचें ?",
            "Check Closing Balance ?": "समापन शेष राशि जांचें ?",
            "Payable Amount": "देय राशि",
            "Adjusted Amount": "समायोजित राशि",
            "Paid Amount": "भुगतान की गई राशि",
            "Balance Amount": "शेष राशि",
            "View Bill Payment Details ?": "बिल भुगतान विवरण देखें ?",
            "Advance Adjusted Details": "अग्रिम समायोजन विवरण",
            "PurchaseVoucher No.": "खरीद वाउचर संख्या",
            "WO No.": "कार्य आदेश संख्या",
            "Vendor Name": "विक्रेता नाम",
            "Advance Amount": "अग्रिम राशि",
            "Current Adjustment": "वर्तमान समायोजन",
            "Vednor Name": "वेडनोर नाम"
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
