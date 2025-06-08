$(document).ready(function () {
    var translations = {
        "en": {
            "Sales Voucher": "Sales Voucher",
            "System SV No": "System SV No",
            "SV Type": "SV Type",
            "SV Date": "SV Date",
            "Manual SV No": "Manual SV No",
            "Manual SV Date": "Manual SV Date",
            "Sales Ledger Required": "Sales Ledger Required",
            "Sales Ledger": "Sales Ledger",
            "SV Category": "SV Category",
            "Invoice Number": "Invoice Number",
            "Invoice Date": "Invoice Date",
            "Customer": "Customer",
            "Customer SV Date ": "Customer SV Date",
            "SV Due Date": "SV Due Date",
            "Shipping State": "Shipping State",
            "Shipping Address": "Shipping Address",
            "Sales Voucher Details": "Sales Voucher Details",
            "slno": "slno",
            "Items": "Items",
            "UOM": "UOM",
            "Quantity": "Quantity",
            "Rate": "Rate",
            "Discount": "Discount",
            "Amount": "Amount",
            "GST(%)": "GST(%)",
            "VAT(%)": "VAT(%)",
            "CGST": "CGST",
            "SGST": "SGST",
            "IGST": "IGST",
            "VAT": "VAT",
            "CST": "CST",
            "TotalAmount": "TotalAmount",
            "Action": "Action",
            "slno": "slno",
            "Description": "Description",
            "Amount": "Amount",
            "IsStatutory": "IsStatutory",
            "Net SV Amount": "Net SV Amount",
            "Account Code": "Account Code",
            "Automate accounting entry": "Automate accounting entry",
            "Debit / Credit": "Debit / Credit",
            "Transaction Details": "Transaction Details",
            "Action": "Action",
            "Account Code": "Account Code",
            "Debit": "Debit",
            "Credit": "Credit",
            "AccountCodeFrom": "AccountCodeFrom",
            "Save Draft": "Save Draft",
            "Choose Action": "Choose Action",
            "Is GST Amount is paid to Customer": "Is GST Amount is paid to Customer",
            "Payment Mode": "Payment Mode",
            "Narration": "Narration",
            "Customer SV No": "Customer SV No",
            "Customer SV Date": "Customer SV Date",
            "User Comments/Remarks": "User Comments/Remarks"
            // Add more translations for English here
        },

        "hi": {
            "Sales Voucher": "बिक्री वाउचर",
            "System SV No": "सिस्टम एसवी नंबर",
            "SV Type": "एसवी प्रकार",
            "SV Date": "एसवी तिथि",
            "Manual SV No": "मैनुअल एसवी नंबर",
            "Manual SV Date": "मैनुअल एसवी तिथि",
            "Sales Ledger Required": "बिक्री खाता पुस्तिका आवश्यक",
            "Sales Ledger": "बिक्री खाता पुस्तिका",
            "SV Category": "एसवी श्रेणी",
            "Invoice Number": "चालान संख्या",
            "Invoice Date": "चालान तिथि",
            "Customer": "ग्राहक",
            "Customer SV Date": "ग्राहक एसवी तिथि",
            "SV Due Date": "एसवी देय तिथि",
            "Shipping State": "शिपिंग राज्य",
            "Shipping Address": "शिपिंग पता",
            "Sales Voucher Details": "बिक्री वाउचर विवरण",
            "slno": "क्रम संख्या",
            "Items": "वस्तुएं",
            "UOM": "मात्रा की इकाई",
            "Quantity": "मात्रा",
            "Rate": "दर",
            "Discount": "छूट",
            "Amount": "राशि",
            "GST(%)": "जीएसटी (%)",
            "VAT(%)": "वैट (%)",
            "CGST": "केंद्रीय जीएसटी",
            "SGST": "राज्य जीएसटी",
            "IGST": "एकीकृत जीएसटी",
            "VAT": "वैट",
            "CST": "केंद्रीय बिक्री कर",
            "TotalAmount": "कुल राशि",
            "Action": "क्रिया",
            "Description": "विवरण",
            "IsStatutory": "क्या वैधानिक है",
            "Net SV Amount": "कुल एसवी राशि",
            "Account Code": "खाता कोड",
            "Automate accounting entry": "लेखा प्रविष्टि को स्वचालित करें",
            "Debit / Credit": "डेबिट / क्रेडिट",
            "Transaction Details": "लेन-देन का विवरण",
            "Debit": "डेबिट",
            "Credit": "क्रेडिट",
            "AccountCodeFrom": "खाता कोड से",
            "Save Draft": "प्रारूप सहेजें",
            "Choose Action": "क्रिया चुनें",
            "Is GST Amount is paid to Customer": "क्या जीएसटी राशि ग्राहक को भुगतान की गई है",
            "Payment Mode": "भुगतान का तरीका",
            "Narration": "विवरण",
            "Customer SV No": "ग्राहक एसवी नंबर",
            "Customer SV Date": "ग्राहक एसवी तिथि",
            "User Comments/Remarks":"उपयोगकर्ता टिप्पणियाँ/टिप्पणियाँ"
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
