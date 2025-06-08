$(document).ready(function () {
    var translations = {
        "en": {
            "Credit Note": "Credit Note",
            "Mode": "Mode",
            "Invoice Number": "Invoice Number",
            "Invoice Date": "Invoice Date",
            "Invoice Due Date": "Invoice Due Date",
            "Purchase Ledger": "Purchase Ledger",
            "Place Of Supply": "Place Of Supply",
            "Reason For Credit Note": "Reason For Credit Note",
            "Credit Note Date": "Credit Note Date",
            "Refference No": "Refference No",
            "Customer Name": "Customer Name",
            "Shipping State": "Shipping State",
            "Shipping Address": "Shipping Address",
            "Narration": "Narration",
            "Item Details": "Item Details",
            "Items": "Items",
            "Item Description": "Item Description",
            "HSN/SAC Code": "HSN/SAC Code",
            "Quantity": "Quantity",
            "Rate": "Rate",
            "Discount(%)": "Discount(%)",
            "Amount": "Amount",
            "GST(%)": "GST(%)",
            "VAT(%)": "VAT(%)",
            "CGST": "CGST",
            "SGST": "SGST",
            "IGST": "IGST",
            "VAT": "VAT",
            "CST": "CST",
            "Total Amount": "Total Amount",
            "slno": "slno",
            "Description": "Description",
            "%": "%",
            "Amount": "Amount",
            "IsStatutory": "IsStatutory",
            "Account Code": "Account Code",
            "Automate accounting entry": "Automate accounting entry",
            "Account Code": "Account Code",
            "Debit": "Debit",
            "Automate accounting entry": "Automate accounting entry",
            "Credit": "Credit",
            "Action": "Action",
            "Debit Amount": "Debit Amount",
            "Credit Amount": "Credit Amount",
            "Back": "Back",
            "HSN/SAC Code": "HSN/SAC Code",
            "CGST": "CGST",
            "CGST": "CGST",
            "SGST": "SGST",
            "IGST": "IGST",
            "Debit / Credit": "Debit / Credit",
            "Transaction Details": "Transaction Details",
            "Save Draft": "Save Draft",
            "Choose Action": "Choose Action",
            "Deduction": "Deduction"
            // Add more translations for English here
        },

        "hi": {
            "Credit Note": "क्रेडिट नोट",
            "Mode": "विधि",
            "Invoice Number": "चालान संख्या",
            "Invoice Date": "चालान की तारीख",
            "Invoice Due Date": "चालान की देय तिथि",
            "Purchase Ledger": "खरीद लेजर",
            "Place Of Supply": "आपूर्ति का स्थान",
            "Reason For Credit Note": "क्रेडिट नोट का कारण",
            "Credit Note Date": "क्रेडिट नोट की तारीख",
            "Reference No": "संदर्भ संख्या",
            "Customer Name": "ग्राहक का नाम",
            "Shipping State": "शिपिंग राज्य",
            "Shipping Address": "शिपिंग पता",
            "Narration": "विवरण",
            "Item Details": "आइटम विवरण",
            "Items": "आइटम",
            "Item Description": "आइटम विवरण",
            "HSN/SAC Code": "HSN/SAC कोड",
            "Quantity": "मात्रा",
            "Rate": "दर",
            "Discount(%)": "छूट(%)",
            "Amount": "राशि",
            "GST(%)": "जीएसटी(%)",
            "VAT(%)": "वैट(%)",
            "CGST": "सीजीएसटी",
            "SGST": "एसजीएसटी",
            "IGST": "आईजीएसटी",
            "VAT": "वैट",
            "CST": "सीएसटी",
            "Total Amount": "कुल राशि",
            "slno": "क्रमांक",
            "Description": "विवरण",
            "%": "%",
            "Amount": "राशि",
            "IsStatutory": "क्या वैधानिक है",
            "Account Code": "खाता कोड",
            "Automate accounting entry": "लेखा प्रविष्टि स्वचालित करें",
            "Debit": "डेबिट",
            "Credit": "क्रेडिट",
            "Action": "क्रिया",
            "Debit Amount": "डेबिट राशि",
            "Credit Amount": "क्रेडिट राशि",
            "Back": "वापस",
            "Reference No": "संदर्भ संख्या",
            "HSN/SAC Code": "एचएसएन/एसएसी कोड",
            "CGST": "सीजीएसटी",
            "SGST": "एसजीएसटी",
            "IGST": "आईजीएसटी",
            "Debit / Credit": "डेबिट / क्रेडिट",
            "Transaction Details": "लेनदेन विवरण",
            "Save Draft": "ड्राफ्ट सहेजें",
            "Choose Action": "क्रिया चुनें",
            "Deduction": "कटौती",
            "Refference No":"संदर्भ संख्या"
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
