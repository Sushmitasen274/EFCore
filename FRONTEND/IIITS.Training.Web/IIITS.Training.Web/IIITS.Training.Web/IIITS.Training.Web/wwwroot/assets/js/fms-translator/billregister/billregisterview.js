$(document).ready(function () {
    var translations = {
        "en": {
            "Purchase Voucher": "Purchase Voucher",
            "New Purchase Voucher": "New Purchase Voucher",
            "Br_SysBrNo": "Br_SysBrNo",
            "PV.NO": "PV.NO",
            "PV Date": "PV Date",
            "PV Narration": "PV Narration",
            "PV Category": "PV Category",
            "Total PV Amount": "Total PV Amount",
            "Net PV Amount": "Net PV Amount",
            "History": "History",
            "Status": "Status",
            "Actions": "Actions",
            "PV Vendor": "PV Vendor",
            "Sales Voucher": "Sales Voucher",
            "SV.NO": "SV.NO",
            "SV Date": "SV Date",
            "SV Narration": "SV Narration",
            "SV Category": "SV Category",
            "Total SV Amount": "Total SV Amount",
            "Net SV Amount": "Net SV Amount",
            "New Sales Voucher": "New Sales Voucher",
            "Sales Voucher":"Sales Voucher"
            // Add more translations for English here
        },

        "hi": {
            "Purchase Voucher": "वाउचर खरीदें",
            "New Purchase Voucher": "नया खरीद वाउचर",
            "Br_SysBrNo": "Br_SysBrNo",
            "PV.NO": "बीआर नंबर",
            "PV Date": "पीवी दिनांक",
            "PV Narration": "पीवी विवरण",
            "PV Category": "पीवी श्रेणी",
            "Total PV Amount": "कुल पीवी राशि",
            "Net PV Amount": "नेट पीवी राशि",
            "History": "इतिहास",
            "Status": "स्थिति",
            "Actions": "कार्रवाई",
            "PV Vendor": "पीवी विक्रेता",
            "SV.NO": "एसवी संख्या",
            "SV Date": "एसवी तारीख",
            "SV Narration": "एसवी विवरण",
            "SV Category": "एसवी श्रेणी",
            "Total SV Amount": "कुल एसवी राशि",
            "Net SV Amount": "नेट एसवी राशि",
            "New Sales Voucher": "नया बिक्री वाउचर",
            "Sales Voucher": "बिक्री वाउचर"
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
