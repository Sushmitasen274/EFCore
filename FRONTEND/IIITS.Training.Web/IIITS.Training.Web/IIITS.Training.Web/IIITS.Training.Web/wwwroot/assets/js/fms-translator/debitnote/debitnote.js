$(document).ready(function () {
    var translations = {
        "en": {
            "Mode": "Mode",
            "Invoice Number": "Invoice Number",
            "Invoice Date": "Invoice Date",
            "Invoice Due Date": "Invoice Due Date",
            "Purchase Ledger": "Purchase Ledger",
            "Place Of Supply": "Place Of Supply",
            "Reason For Debit Note": "Reason For Debit Note",
            "Debit Note Date": "Debit Note Date",
            "Reference No": "Reference No",
            "Vendor Name": "Vendor Name",
            "Vendor Address": "Vendor Address",
            "Item Details": "Item Details",
            "Item Description": "Item Description",
            "HSN/SAC Code": "HSN/SAC Code",
            "Quantity": "Quantity",
            "Rate": "Rate",
            "Discount(%)": "Discount(%)",
            "Amount": "Amount",
            "GST(%)": "GST(%)",
            "GST Components": "GST Components",
            "VAT(%)": "VAT(%)",
            "CGST": "CGST",
            "IGST": "IGST",
            "VAT": "VAT",
            "CST": "CST",
            "Total Amount": "Total Amount",
            "slno": "slno",
            "Description": "Description",
            "IsStatutory": "IsStatutory",
            "Narration": "Narration",
            "Account Code": "Account Code",
            "Account Code": "Account Code",
            "Debit / Credit": "Debit / Credit",
            "Amount": "Amount",
            "Action": "Action",
            "Transaction Details": "Transaction Details",
            "Debit": "Debit",
            "Credit": "Credit",
            "Transaction Details": "Transaction Details",
            "Debit": "Debit",
            "Credit": "Credit",
            "Automate accounting entry": "Automate accounting entry",
            "Save Draft": "Save Draft",
            "Choose Action": "Choose Action",
            "Items": "Items",
            "SGST": "SGST",
            "Debit Note": "Debit Note",
            "Debit Amount": "Debit Amount",
            "Credit Amount": "Credit Amount",
            // Add more translations for English here
        },

        "hi": {
            "Mode": "विधि",
            "Invoice Number": "चालान संख्या",
            "Invoice Date": "चालान की तारीख",
            "Invoice Due Date": "चालान की देय तिथि",
            "Purchase Ledger": "खरीद लेजर",
            "Place Of Supply": "आपूर्ति का स्थान",
            "Reason For Debit Note": "डेबिट नोट का कारण",
            "Debit Note Date": "डेबिट नोट की तारीख",
            "Reference No": "संदर्भ संख्या",
            "Vendor Name": "विक्रेता का नाम",
            "Vendor Address": "विक्रेता का पता",
            "Item Details": "आइटम विवरण",
            "Item Description": "आइटम विवरण",
            "HSN/SAC Code": "एचएसएन/ एसएसी कोड",
            "Quantity": "मात्रा",
            "Rate": "दर",
            "Discount(%)": "छूट(%)",
            "Amount": "राशि",
            "GST(%)": "जीएसटी(%)",
            "GST Components": "जीएसटी घटक",
            "VAT(%)": "वैट(%)",
            "CGST": "सीजीएसटी",
            "IGST": "आईजीएसटी",
            "VAT": "वैट",
            "CST": "सीएसटी",
            "Total Amount": "कुल राशि",
            "slno": "क्रमांक",
            "Description": "विवरण",
            "IsStatutory": "क्या वैधानिक है",
            "Narration": "विवरण",
            "Account Code": "खाता कोड",
            "Debit / Credit": "डेबिट / क्रेडिट",
            "Amount": "राशि",
            "Action": "क्रिया",
            "Transaction Details": "लेनदेन विवरण",
            "Debit": "डेबिट",
            "Credit": "क्रेडिट",
            "Automate accounting entry": "लेखा प्रविष्टि स्वचालित करें",
            "Save Draft": "ड्राफ्ट सहेजें",
            "Choose Action": "क्रिया चुनें",
            "Items": "आइटम",
            "SGST": "एसजीएसटी",
            "Debit Note": "डेबिट नोट",
            "Debit Amount": "डेबिट राशि",
            "Credit Amount": "क्रेडिट राशि"
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
